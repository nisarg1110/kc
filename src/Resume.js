import React from 'react'
import './style.css'
import Resume1 from './Dhruv Resume.pdf';
import {
    Link
} from "react-router-dom";
import Sidebar from './Sidebar';


export default function Resume() {
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
                    <article class="Resume  active" data-page="Resume">

                        <header>
                            <h2 class="h2 article-title">Resume</h2>
                        </header>
                    </article>
                </div>
            </div>
        </div>
    )
}
