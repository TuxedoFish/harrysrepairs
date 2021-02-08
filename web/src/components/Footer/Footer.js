// React Imports
import React from 'react';

const Footer = ({inverted}) => {
    return (
        <>
            {/* Top information and links */}
            <div className={ inverted ? "footer footer__inverted parallax" : "footer"}>
                <div className="large-container">
                    <div className="row">
                        <div className="three columns">
                            <h4>About</h4>
                            <p>Cheap independent electronics repairs in SW10. Specialising in iPhone, iPad and MacBook repairs. Located at:</p>
                            <p>107 Finborough Road</p>
                            <p>Kensington</p>
                            <p>London</p>
                            <p>SW10 9DU</p>
                            <br />
                        </div>
                        <div className="three columns">
                            <h4>Links</h4>
                            <ul>
                            <li>
                                <a href="https://www.facebook.com/Harrys-Repairs-106851114324167">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/devtuxedofish">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/harryliversedge/">
                                    Instagram
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div className="three columns hidden">
                            <h5>Hey there nice find!</h5>
                        </div>
                        <div className="three columns">
                            <h4>Contact</h4>
                            <p>E-mail: harry@harrysrepairs.co.uk</p>
                            <p>Mobile: 07773201051</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom row - social media / copyright / policies */}
            <div className={inverted ? "bottom-footer bottom-footer__inverted" : "bottom-footer"}>
                Copyright © 2021 Harry's Repairs
            </div>
        </>
    )
}

Footer.defaultProps = {
    inverted: false
}

export default Footer