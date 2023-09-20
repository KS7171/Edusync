import React from 'react'

export default function AboutUs() {
  return (
    <section class="home-about-us">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 ">
                            <div class="about-left-content">
                                <figure class="figure-round-border">
                                    <img src={require("./img/educator-img13.jpg")} alt="Alternativce image"/>
                                </figure>
                                <div class="skill-container">
                                    <div class="skill-wrapper">
                                        <h6 class="skill-titile">Completed Projects</h6>
                                        <div class="progress-wrapper">
                                            <div class="ab-progress example" data-progress data-value="92"></div>
                                        </div>
                                    </div>
                                    <div class="skill-wrapper">
                                        <h6 class="skill-titile">Financial Skills</h6>
                                        <div class="progress-wrapper">
                                            <div class="ab-progress example" data-progress data-value="98"></div>
                                        </div>
                                    </div>
                                    <div class="skill-wrapper">
                                        <h6 class="skill-titile">Relaible & Hardworking</h6>
                                        <div class="progress-wrapper">
                                            <div class="ab-progress example" data-progress data-value="90"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="regarding-us">
                                   <p>WE HAVE PROFESSIONAL EXPERTS WHO HAVE SPEND THERE 12YEAR EXPERIENCED. SUPERVISED BY HIGHLY QUALIFIED PROFESSIONAL STAFF (M. PHIL|PHD )
 
</p>
                                </div>
                                <div class="about-btn">
                                    <a href="about/index.html" class="button-round-secondary">MORE ABOUT US</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class=" about-right-content">
                                <div class="title-divider"></div>
                                <h2 class="about-title">Solved Assignment Synopsis Project Reports</h2>
                                <p class="about-desc">
                                   We offer solutions to two different areas of research and writing Assignments and project report with 
unique content

                                </p>
                                <figure class="figure-round-border">
                                    <img src={require("./img/educator-img12-500px.jpg")}  alt=""/>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div class="pattern-overlay"></div>
                </div>
            </section>
  )
}
