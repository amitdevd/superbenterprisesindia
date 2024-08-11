
import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <div className="">
                <footer>
                    <div className="lower">
                        <div className="container">
                            <div className="col-md-6">
                                <ul className="social-network social-circle">
                                    <li><a href="#" className="icowhatsapp" title="8860025047"><i className="fa fa-whatsapp "></i>
                                    </a></li>
                                    <li><a href="https://www.facebook.com/superbattestationindia" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a>
                                    </li>

                                    <li><a href="https://twitter.com/seplgroup" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a>
                                    </li>
                                    <li><a href="https://plus.google.com/114170641342696767048/posts" className="icoGoogle" title="Google +"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/superb-enterprises-pvt-ltd-601a52ba" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="https://www.youtube.com/channel/UCdRsaQdlIPo97vmfZRz1SBQ" className="icoYoutube" title="Youtube"><i className="fa fa-youtube"></i></a>
                                    </li>

                                    <li><a href="https://www.instagram.com/superbenterprises/" className="icoFacebook" title="Instagram"><i className="fa fa-instagram"></i>
                                    </a></li>
                                    <li> <a className="icoGoogle pull-right" title="Contact" data-toggle="modal" data-target="#myModal"><i className="fa fa-envelope"></i></a></li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <p className="pull-right">
                                    <b >Designed By</b> <span>Superb Infotech</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="whatsapp">
                        <a href="https://wa.me/+918527270999">
                            <div className="box">
                                <h4>Chat With Us</h4>
                                <img src="images/whatsapp-icon.png" />
                                <h5>On <span>Whatsapp!</span></h5>
                            </div>
                        </a>
                    </div>
                    <div className="clicktoCall">
                        <a href="tel:+91-8527270999">Call Us Now
                            <p><i className="fa fa-phone" aria-hidden="true"></i></p>
                        </a>
                    </div>

                    <div id="contactManagement" className="actionButtonsContainer">
                        <ul className="latoBold font12 blackText">
                            <li className="makeFlex hrtlCenter flexWrap column"><a href="tel:9810601955"><p><i className="fa fa-phone" aria-hidden="true"></i></p><span>Click to Call</span></a></li>
                            <li className="makeFlex hrtlCenter flexWrap column"><a href="https://api.whatsapp.com/send/?phone=%2B919810601955&text&app_absent=0"><img src="https://superbattestation.com/images/whatsapp.gif" width="40" height="40" alt="whatsapp" /><span>Chat On Whatstapp</span></a></li>
                        </ul>

                    </div>
                </footer>

            </div>
        );
    }
}

export default Footer;