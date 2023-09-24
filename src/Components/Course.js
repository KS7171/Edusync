import React from 'react'

export default function Course() {
  return (
    <section class="home-course-section">
                <div class="container">
                    <div class="overlay-wrapper">
                        <div class="row">
                            <div class="col-lg-6 offset-lg-3">
                                <div class="title-divider"></div>
                                <h2 class="section-title">
Featured Projects</h2>
                               
                            </div>
                        </div>
                        <div class="inner-course-wrap">
                            <div class="row d-flex justify-content-center justify-content-xl-start">
                                <div class="col-sm-6 col-lg-4 pe-3 ps-3 pt-4 pt-lg-0 inner-course">
                                    <article class="post">
                                        <figure class="feature-image">
                                            <img src={require("./img/educator-img30.jpg")}  alt=""/>
                                            <a href="#" class="bookmark-icon">
                                                <i aria-hidden="true" class="far fa-bookmark"></i>
                                            </a>
                                            <span class="cat-meta">
                                                <a href="#">project_1</a>
                                            </span>
                                        </figure>
                                        <div class="entry-content">
                                            <ul>
                                                <li><a href="#">Web divider</a></li>
                                                <li>
                                                    <a href="#">HTML</a>
                                                </li>
                                            </ul>
                                            
                                           
                                           
                                        </div>
                                    </article>
                                </div>
                                <div class="col-sm-6 col-lg-4 pe-3 ps-3 pt-4 pt-lg-0 inner-course">
                                    <article class="post">
                                        <figure class="feature-image">
                                            <img src={require("./img/educator-img29.jpg")}  alt=""/>
                                            <a href="#" class="bookmark-icon">
                                                <i aria-hidden="true" class="far fa-bookmark"></i>
                                            </a>
                                            <span class="cat-meta">
                                                <a href="#">project_2</a>
                                            </span>
                                        </figure>
                                        <div class="entry-content">
                                             <ul>
                                                <li><a href="#">java</a></li>
                                                <li>
                                                    <a href="#">Specialaization</a>
                                                </li>
                                            </ul>
                                           
                                        </div>
                                    </article>
                                </div>
                                <div class="col-sm-6 col-lg-4 pe-3 ps-3 pt-4 pt-lg-0 inner-course">
                                    <article class="post">
                                        <figure class="feature-image">
                                            <img src={require("./img/educator-img31.jpg")} alt=""/>
                                            <a href="#" class="bookmark-icon">
                                                <i aria-hidden="true" class="far fa-bookmark"></i>
                                            </a>
                                            <span class="cat-meta">
                                                <a href="#">project_3</a>
                                            </span>
                                        </figure>
                                        <div class="entry-content">
                                            <ul>
                                                <li><a href="#">Design</a></li>
                                                <li>
                                                    <a href="#">Specialaization</a>
                                                </li>
                                            </ul>
                                           
                                        </div>
                                    </article>
                                </div>

                                <div class="col-sm-6 col-lg-4 pe-3 ps-3 pt-4 pt-lg-0 inner-course">
                                    <article class="post">
                                        <figure class="feature-image">
                                            <img src={require("./img/educator-img28.jpg")} alt=""/>
                                            <a href="#" class="bookmark-icon">
                                                <i aria-hidden="true" class="far fa-bookmark"></i>
                                            </a>
                                            <span class="cat-meta">
                                                <a href="#">project_4</a>
                                            </span>
                                        </figure>
                                        <div class="entry-content">
                                            <ul>
                                                <li><a href="#">Robotics</a></li>
                                                <li>
                                                    <a href="#">Specialaization</a>
                                                </li>
                                            </ul>
                                           
                                        </div>
                                    </article>
                                </div>

                                <div class="col-sm-6 col-lg-4 pe-3 ps-3 pt-4 pt-lg-0 inner-course">
                                    <article class="post">
                                        <figure class="feature-image">
                                            <img src={require("./img/educator-img27.jpg")} alt=""/>
                                            <a href="#" class="bookmark-icon">
                                                <i aria-hidden="true" class="far fa-bookmark"></i>
                                            </a>
                                            <span class="cat-meta">
                                                <a href="#">project_5</a>
                                            </span>
                                        </figure>
                                        <div class="entry-content">
                                            <ul>
                                                <li><a href="#">All Courses</a></li>
                                                <li>
                                                    <a href="#">Specialaization</a>
                                                </li>
                                            </ul>
                                           
                                        </div>
                                    </article>
                                </div>

                                 <div class="col-sm-6 col-lg-4 pe-3 ps-3 pt-4 pt-lg-0 inner-course">
                                    <div class="course-bhn">
                                         <button type="button" class="button-33" data-bs-toggle="modal" data-bs-target="#myModal">Show More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                       
                        
                    </div>
                </div>
            </section>
  )
}
