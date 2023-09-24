import React from 'react'

export default function HomeBanner() {
  return (
    <main id="content" class="site-main">
            <section class="home-banner d-flex align-items-end">
                <div class="container">
                    <div class="row align-items-end" style={{display:'flex'}}>
                        <div class=" banner-left col-md-6">
                            <div class="image-overlay pattern-overlay"></div>
                            <div class="banner-content">
                                <div class="title-divider"></div>
                                <div class="banner-title">
                                    <h1>Unlocking Creativity, Sharing Knowledge: Where Ideas Take Flight!</h1>
                                </div>
                                <div class="banner-text">
                                    <p></p>
                                </div>
                                <div class="banner-button">
                                     <button type="button" class="button-78" data-bs-toggle="modal" data-bs-target="#myModal">Upload Project</button>
                                  
                                </div>
                            </div>
                        </div>
                        <div class=" banner-right col-md-6">
                            <figure class="banner-img">
                                <div class="image-overlay-oval pattern-overlay"></div>
                                <img src={require("./img/Learn.gif")} alt="Learning GIf" style={{height:"100%"}}/>
                            </figure>
                        </div>
                    </div>
                </div>
                <div class="overlay-image pattern-overlay"></div>
            </section>
            </main>
            )}