// React Imports
import React from 'react'
import Webcam from "react-webcam";

// Component Files
import Footer from '../components/Footer.jsx'

export default class Home extends React.Component {

    constructor(props) {
        super(props)

        this.webcamRef = React.createRef()
        this.mediaRecorderRef = React.createRef()

        this.state = {
            capturing: false, 
            setCapturing: false,
            recordedChunks: [],
            setRecordedChunks: []
        }
    }

    handleStartCaptureClick = () => {

    }

    handleStopCaptureClick = () => {
        
    }

    render() {

        const videoConstraints = {
            width: 1280,
            height: 720,
            facingMode: "user"
        };

        return (
            <>
                <div className="navbar">
                    <div className="container">
                        <h4 className="navbar-title">Harry's Repairs</h4>
                    </div>
                </div>

                <div className="section landing parallax">
                    <div className="container landing-container">
                        <h2 className="landing-heading">Get your camera ready to go!</h2>
                        <Webcam audio={false} ref={this.webcamRef} />
                        {capturing ? (
                            <button onClick={this.handleStopCaptureClick}>Stop Capture</button>
                        ) : (
                            <button onClick={this.handleStartCaptureClick}>Start Capture</button>
                        )}
                    </div>
                </div>

                <Footer />
            </>
        );
    }

}