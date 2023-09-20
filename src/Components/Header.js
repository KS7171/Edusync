import React from 'react'
import './css/style.css'
export default function Header() {
  return (
    <header class="site-header site-header-transparent">
    <div class="top-header">
        <div className="container">
            <div class="row align-items-center">
                <div class="col-lg-8 d-none d-lg-block">
                    <div class="header-contact-info">
                        <ul>
                            <li>
                                <a href="tel:+919354936850"><i class="fas fa-phone-alt"></i> +91 8696947171</a>
                            </li>
                            <li>
                                <a href="mailto:info@academicservices.in"><i class="fas fa-envelope"></i>koustub.12@gmail.com</a>
                            </li>
                            <li>
                                <i class="fas fa-map-marker-alt"></i>Logix Technova | Rohi | New Delhi
                            </li> 
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 d-flex justify-content-lg-end justify-content-between">
                    <div class="header-social social-links">
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/" target="_blank">
                                    <i class="fab fa-facebook" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com/" target="_blank">
                                    <i class="fab fa-twitter" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/" target="_blank">
                                    <i class="fab fa-youtube" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <i class="fab fa-instagram" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/" target="_blank">
                                    <i class="fab fa-linkedin" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="header-search-icon">
                        <button class="search-icon">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="bottom-header" id="masthead" >
        <div class="container">
            <div class="hb-group d-flex align-items-center justify-content-between">
                <div class="site-identity col-lg-3">
                    <p class="site-title">
                        <a href="index.html">
                            <img src={require("./img/educator-fabicon-300x300.png")} alt="logo"/>
                        </a>
                    </p>
                </div>
                <div class="main-navigation col-lg-9 justify-content-between d-flex align-items-center">
                    <nav id="navigation" class="navigation d-none d-lg-inline-block">
                        <ul>
                            <li class="current-menu-item">
                                <a href="index.html">Home</a>
                            </li>
                            
                            <li>
                                <a href="mba-solved-assignments/index.html">Assignment</a>
                                
                            </li>
                           
                            <li>
                                <a href="mba-project-report/index.html">Project Report</a>
                            </li>
                            
                            <li>
                                <a href="synopsis-report/index.html">Synopsis Report</a>
                            </li>
                            
                            <li>
                                <a href="phd-thesis/index.html">PHD Thesis</a>
                            </li>
                            
                             <li>
                                <a href="programming/index.html">Programming</a>
                            </li>
                            
                            <li>
                                <a href="contact-us/index.html">Dashboard</a>
                            </li>
                            
                        </ul>
                    </nav>
                    <div class="header-btn d-inline-block">
                        <a href="contact.php" class="button-33">Contact US NOW</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mobile-menu-container"></div>
</header> 
    )
}
