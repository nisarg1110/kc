import React from 'react'
import './style.css'
import {
    Link
} from "react-router-dom";
import Sidebar from './Sidebar';
import Resume1 from './Dhruv Resume.pdf';

export default function Projects() {
    return (
        <div>
            <div class="main">
                <div class="mainn">
                    <Sidebar />
                </div>
                <div class="main-content">
                    <nav class="navbar">

                        <div class="navbar-list">

                            <div class="navbar-item">
                                <Link to="/">About</Link>
                            </div>

                            <div class="navbar-item">
                                <Link to="/Skill">Skills</Link>
                            </div>

                            <div class="navbar-item">
                                <Link to="/Projects">Projects</Link>
                            </div>

                            <div class="navbar-item">
                                 <a href={Resume1} target="_blank" rel="noreferrer">
                                                            < div class="resumebutton">
                                                                 Resume
                                                            </div></a>
                            </div>

                            <div class="navbar-item">
                                <Link to="/Contact">Contact</Link>
                            </div>

                        </div>

                    </nav>
                    <article class="projects  active" data-page="Projects">

                        <header>
                            <h2 class="h2 article-title">Projects</h2>
                        </header>
                        <div class="projectsmain">
                            <div class="firstproject">
                                <div class="firstprojectname">1.WEATHER </div>
                                <div class="firstprojectimg">
                                    <img src={require('./images/weatherimg.png')}></img>
                                </div>
                                <div class="firstprojectdes">Our weather website provides real-time weather updates for any city worldwide. Simply enter the name of your city, and get accurate, up-to-date information, including temperature, humidity, wind speed, and weather conditions. Whether you’re planning your day or preparing for a trip, our platform ensures you stay informed. Designed with a user-friendly interface and fast performance, it’s your go-to source for reliable weather details anytime, anywhere.</div>
                            </div>
                            <div class="secondproject">
                                <div class="secondprojectname">2.FLIPCART CLONE</div>
                                <div class="secondprojectimg">
                                    <img src={require('./images/flipcartimg.png')}></img>
                                </div>
                                <div class="secondprojectdes">Our Flipkart clone is a feature-rich e-commerce platform designed to replicate the functionality and user experience of Flipkart. It allows users to browse and purchase a wide range of products, including electronics, fashion, home essentials, and more. With advanced search filters, secure payment gateways, and a seamless checkout process, the website ensures a smooth shopping experience.</div>
                            </div>
                            <div class="thirdproject">
                                <div class="thirdprojectname">3.AGRUCO CLONE</div>
                                <div class="thirdprojectimg">
                                    <img src={require('./images/agrucoimg.png')} ></img>
                                </div>
                                <div class="thirdprojectdes">The Agruco website clone is a dedicated platform designed for agriculture and organic food businesses. It mirrors the professional and nature-inspired design of the original Agruco template, providing an ideal space to showcase organic products, farming services, or agricultural expertise.This clone features a fully responsive layout, customizable sections like "Our Products," "About Us," and "Services," as well as integrated tools for blogging and contact management</div>
                            </div>
                            <div class="fourthproject">
                                <div className="fourthprojectname">4.SKYTECH CLONE</div>
                                <div class="fourthprojectimg">
                                    <img src={require('./images/skytechimg.png')}></img>
                                </div>
                                <div class="fourthprojectdes">The Skytech website clone is a modern and versatile platform designed for technology, IT solutions, and software businesses. It replicates the sleek and professional design of the original Skytech template, offering an ideal solution for showcasing services like cloud computing, software development, cybersecurity, and more.</div>
                            </div>
                        </div>

                    </article>
                </div>
            </div>
        </div>
    )
}
