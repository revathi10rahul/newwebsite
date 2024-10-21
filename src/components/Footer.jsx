import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

import { faEnvelope, faLocationDot, faPhone, faShare } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
function Footer() {
  return (
    <div>
        <footer class="footer-section">
        <div class="container">
            <div class="footer-cta pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="footer-widget-heading">
                                <h3>Find Us</h3>
                            
                                <span style={{color:"white"}}><FontAwesomeIcon icon={faLocationDot} style={{color:'white'}}/> Malambuzha Rd,<br />
Olavakkode,<br />
Palakkad Kerala <br />
678002</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-phone"></i>
                            <div class="footer-widget-heading"> 
                                <h3>Call us</h3>
                                <span  style={{color:'white'}}> <FontAwesomeIcon icon={faPhone} style={{color:'white'}}/> +91 7736742072</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="far fa-envelope-open"></i>
                            <div class="footer-widget-heading">
                                <h3>Mail us</h3>
                                <span  style={{color:'white'}}><FontAwesomeIcon icon={faEnvelope} style={{color:"white"}}/>  info@nacresys.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-content pt-5 ">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 mb-50">
                        <div class="footer-widget">
                            <div class="footer-logo">
                                <a href="/index">
                                    <im g src='./Assets/ns white transparent.png' class="img-fluid" alt="logo"/></a>
                            </div>
                            <div class="footer-text">
                                <p>A decade old software development company continuously focused in delivering higher levels of automation leveraging new and upcoming technologies such as AI and internet of things. We build solutions which are scalable and can integrate seamlessly with other software solutions that exist.</p>
                            </div>
                            <div class="footer-social-icon">
                                <span>Follow us</span>
                                <a href="/facebook"> <FontAwesomeIcon icon={faSquareInstagram} /> <i class="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="/twitter"><FontAwesomeIcon icon={faLinkedin} />  <i class="fab fa-twitter twitter-bg"></i></a>
                                <a href="/google"><i class="fab fa-google-plus-g google-bg"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div class="footer-widget ">
                            <div class="footer-widget-heading ms-1">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href="/home">Home</a></li>
                                <li><a href="/aboutus">about</a></li>
                                <li><a href="/services">services</a></li>
                                {/* <li><a href="#">portfolio</a></li> */}
                                <li><a href="/contact">Contact</a></li>
                                <li><a href="/abutus">About us</a></li>
                                <li><a href="/ourproducts">Our Products</a></li>
                                <li><a href="/expertteam">Expert Team</a></li>
                                <li><a href="/contactus">Contact us</a></li>
                                {/* <li><a href="#">Latest News</a></li> */}
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div class="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div class="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address"/>
                                    <button><FontAwesomeIcon icon={faShare} style={{color:"white"}}/></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div class="copyright-text">
                            <p>2011 © Nacre System All rights reserved.</p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div class="footer-menu">
                            <ul>
                                <li><a href="/home">Home</a></li>
                                <li><a href="/terms">Terms</a></li>
                                <li><a href="/privacy">Privacy</a></li>
                                <li><a href="/policy">Policy</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer