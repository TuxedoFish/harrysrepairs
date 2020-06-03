// React Imports
import React from 'react'
import Webcam from "react-webcam";

// Component Files
import Footer from '../components/Footer.jsx'

// Helper for adding scripts
import { Helmet } from "react-helmet";

export default class Game extends React.Component {

    constructor(props) {
        super(props)

        this.webcamRef = React.createRef()
        this.mediaRecorderRef = React.createRef()

        this.state = {
            playing: false, 
            setCapturing: false,
            recordedChunks: [],
            setRecordedChunks: [],
            net: null
        }
    }

    handleStartCaptureClick = () => {

    }

    handleStopCaptureClick = () => {
        
    }

    render() {

        const { playing } = this.state

        const videoConstraints = {
            width: 640,
            height: 360,
            facingMode: "user"
        };

        return (
            <>
                {/* Logic for using bodypix */}
                <Helmet>
                    <script>
                    {`
                        const bodyPixConfig = {
                            architechture: 'MobileNetV1',
                            outputStride: 16,
                            multiplier: 1,
                            quantBytes: 4
                        };

                        const segmentationConfig = {
                            internalResolution: 'high',
                            segmentationThreshold: 0.05,
                            scoreThreshold: 0.05
                        };

                        let model, timeElapsed, score, isPlaying, video, instruction_text,
                        c_out, ctx_out, c_tmp, ctx_tmp, left, size, state_text, button,
                        isUserInArea, maxTimer;

                        function init() {
                            // The webcam video
                            video = document.getElementsByClassName("raw-camera")[0];
                            
                            // The canvas
                            c_out = document.getElementById("output-canvas");

                            // The ui elements
                            state_text = document.getElementById("game-state-text");
                            instruction_text = document.getElementById("game-instruction");
                            button = document.getElementById("game-play-button");

                            // Game logic stuff
                            isUserInArea = false;

                            // Create canvas context
                            ctx_out = c_out.getContext("2d");
                            c_tmp = document.createElement("canvas");
                            c_tmp.setAttribute("width",640);
                            c_tmp.setAttribute("height",360);
                            ctx_tmp = c_tmp.getContext("2d");

                            left = 100;
                            size = 400;
                            maxTimer = 3;
                            
                            console.log("Started");
                            computeFrame();

                            setInterval(logic, 100);
                        }    

                        function play() { 
                            if(!isPlaying) {
                                button.innerHTML = '-';
                                instruction_text.innerHTML = "Get inside the blue square!";
                                isPlaying = true;
                                timeElapsed = 0;
                                score = 0;
                                console.log("Am i playing now? " + isPlaying);
                                left = 100;
                                size = 400;
                                maxTimer = 3;
                            }
                        }

                        function stop() {
                            if(isPlaying) {
                                instruction_text.innerHTML = "Make sure your camera is setup!";
                                button.innerHTML = 'Play';
                                isPlaying = false;
                                console.log("Am i playing now? " + isPlaying);
                                state_text.innerHTML = "Your score was: " + score;
                                left = 100;
                                size = 400;
                            }
                        }

                        function logic() {
                            // If still playing
                            if(isPlaying) {
                                timeElapsed += 200;
                                let currentTime = maxTimer - Math.round(timeElapsed/1000);
                                state_text.innerHTML = "Score: " + score + " Timer: " + currentTime;
                               
                                if(currentTime <= 0) {
                                    if(isUserInArea) {
                                        score += 1;
                                        timeElapsed = 0;
                                        changeArea();
                                        if(score > 3) {
                                            maxTimer = 2;
                                        }
                                        if(score > 5) {
                                            maxTimer = 1;
                                        }
                                    } else {
                                        stop();   
                                    }
                                }
                            }
                        }

                        function changeArea() {
                            if(size > 200) {
                                size -= 20;
                            }
                            left = Math.round(Math.random() * (640 - size));
                        }

                        function isInArea(x) {
                            return x > left && x < (left + size);
                        }

                        function computeFrame() {

                              if(video.readyState == 4) {
                                ctx_tmp.drawImage(video,0,0,video.videoWidth,video.videoHeight);
                                let frame = ctx_tmp.getImageData(0,0,video.videoWidth,video.videoHeight);

                                // Cutoff for area to check against
                                const cutoff = 400;
                                // Transparency of overlay 
                                const alpha = 200;

                                model.segmentPerson(c_tmp,segmentationConfig).then((segmentation) => {

                                    let out_image = ctx_out.getImageData(0,0,video.videoWidth,video.videoHeight);

                                    let ins = 0;
                                    let outs = 0;

                                    for(let x=0;x<video.videoWidth;x++){

                                        for(y=0;y<video.videoHeight;y++) {

                                            let n = x + (y * video.videoWidth);
                                            
                                            let x_flip = video.videoWidth - x;
                                            let n_flip = x_flip + (y * video.videoWidth);
                                            
                                            if(segmentation.data[n] == 0) {
                                                // If not human
                                                if(isInArea(x)) {
                                                    // If inside the area
                                                    out_image.data[n_flip * 4] = frame.data[n * 4]; // R
                                                    out_image.data[n_flip * 4 + 1] = frame.data[n * 4 + 1]; // G
                                                    out_image.data[n_flip * 4 + 2] = Math.max(frame.data[n * 4] + 50, 255); // B
                                                    out_image.data[n_flip * 4 + 3] = frame.data[n * 4 + 3]; // A
                                                } else {
                                                    // If not inside the area
                                                    out_image.data[n_flip * 4] = frame.data[n * 4]; // R
                                                    out_image.data[n_flip * 4 + 1] = frame.data[n * 4 + 1]; // G
                                                    out_image.data[n_flip * 4 + 2] = frame.data[n * 4 + 2]; // B
                                                    out_image.data[n_flip * 4 + 3] = frame.data[n * 4 + 3]; // A
                                                }
                                            } else {
                                                // If human
                                                if(isInArea(x)) {
                                                    ins += 1;
                                                    // If inside the area
                                                    out_image.data[n_flip * 4] = frame.data[n * 4]; // R
                                                    out_image.data[n_flip * 4 + 1] = Math.max(frame.data[n * 4 + 1] + 50, 255); // G
                                                    out_image.data[n_flip * 4 + 2] = frame.data[n * 4 + 2]; // B
                                                    out_image.data[n_flip * 4 + 3] = frame.data[n * 4 + 3]; // A
                                                } else {
                                                    outs += 1;
                                                    // If outside the area
                                                    out_image.data[n_flip * 4] = Math.max(frame.data[n * 4] + 50, 255); // R
                                                    out_image.data[n_flip * 4 + 1] = frame.data[n * 4 + 1]; // G
                                                    out_image.data[n_flip * 4 + 2] = frame.data[n * 4 + 2]; // B
                                                    out_image.data[n_flip * 4 + 3] = frame.data[n * 4 + 3]; // A
                                                }
                                            }
                                            
                                        }
                                    }
                                    
                                    // Check if user is in the area
                                    percentage = (ins)/(ins+outs)*100;
                                    isUserInArea = (ins > 50 && percentage > 85)
                                    ctx_out.putImageData(out_image, 0, 0);
                                });
                                
                              }

                              setTimeout(computeFrame, 0);
                        }
                        function onReady() {
                            console.log("Loading...");
                            bodyPix.load(bodyPixConfig).then((m) => {
                                model = m;
                                init();
                            });
                        }
                        if (document.readyState !== "loading") {
                            onReady(); // Or setTimeout(onReady, 0); if you want it consistently async
                        } else {
                            document.addEventListener("DOMContentLoaded", onReady);
                        }

                        document.getElementById("game-play-button").addEventListener("click", function(){
                            play();
                        }); 
                    `}
                    </script>
                </Helmet>
            
                <div className="navbar">
                    <div className="container">
                        <h4 className="navbar-title">Harry's Repairs</h4>
                    </div>
                </div>

                <div className="section parallax">
                    <div className="container landing-container">
                        <div className="game-camera">
                            <h2>Welcome to "hole in the wall"</h2>
                            <Webcam 
                                className="raw-camera"
                                audio={false} 
                                ref={this.webcamRef} 
                                height={360}
                                screenshotFormat="image/jpeg"
                                width={640}
                                videoConstraints={videoConstraints}
                            />
                            <h2 id="game-instruction">Make sure your camera is setup!</h2>
                            <h2 id="game-state-text">-</h2>
                            <div className="game-canvas-holder">
                                <canvas id="output-canvas" width="640" height="360"></canvas>
                            </div>
                        </div>
                        {playing ? (
                            null
                        ) : (
                            <>
                                <h2 id="game-click-to-play">Click to play</h2>
                                <button id="game-play-button">Play</button>
                            </>
                        )}
                    </div>
                </div>

                <Footer />
            </>
        );
    }

}