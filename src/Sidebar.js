import React, { useState } from "react";
import './style.css'

export default function Sidebar() {
        const [show, setShow] = useState(true);
        let abc=()=>{
            setShow(!show);
            
            if(show==true)
            {
                document.getElementById("slide").style="display:block;";
            }
            else{
                document.getElementById("slide").style="display:none;";
            }
            console.log(show);
        }
    return (

        <aside class="sidebar">
            <div class="sidebar-info">

                <figure class="avatar-box">
                    <img src={require('./images/dhruvpic.png')}></img>
                </figure>

                <div class="info-content">
                    <h1 class="name" title="patel dhruv">Dhruv Patel</h1>

                    <p class="title">Web developer</p>
                </div>

                <button class="buttonofmq" onClick={abc}>
                    Show Contacts
                </button>

            </div>
            <div class="sidebarmoreinfo" id="slide">

                <div class="separator"></div>

                <ul class="contacts-list">

                    <li class="contact-item">

                        <div class="icon-box">
                            <i class="fa fa-envelope"></i>
                        </div>

                        <div class="contact-info">
                            <p class="contact-title">Email</p>

                            <a href="mailto:pateldhruv2974@gmail.com" class="contact-link">pateldhruv2974@gmail.com</a>
                        </div>

                    </li>

                    <li class="contact-item">

                        <div class="icon-box">
                            <i class="fa fa-phone"></i>
                        </div>

                        <div class="contact-info">
                            <p class="contact-title">Phone</p>

                            <a href="+919998243969" class="contact-link">+91 9998243969</a>
                        </div>

                    </li>

                    <li class="contact-item">

                        <div class="icon-box">
                            <i class="fa fa-calendar"></i>
                        </div>

                        <div class="contact-info">
                            <p class="contact-title">Birthday</p>

                            <time datetime="1982-06-23">July 29, 2004</time>
                        </div>

                    </li>

                    <li class="contact-item">

                        <div class="icon-box">
                            <i class="fa fa-map-marker"></i>
                        </div>

                        <div class="contact-info">
                            <p class="contact-title">Location</p>

                            <address>Hathijan, Ahemdabad, India</address>
                        </div>

                    </li>

                </ul>

                <div class="separator2"></div>

                <ul class="social-list">

                    <li class="social-item">
                        <a href="https://www.linkedin.com/in/dhruv-patel-b7758324a" class="social-link">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </li>

                    <li class="social-item">
                        <a href="https://x.com/pateldhruv2974?t=XgkV-8noy5j4ruvMPzxNWA&s=08" class="social-link">
                            <i class="fa-brands fa-square-x-twitter"></i>
                        </a>
                    </li>

                    <li class="social-item">
                        <a href="https://www.instagram.com/d_h.r_u.v_?igsh=MXVrcHV5NnVvOG9xZg==" class="social-link">
                            <i class="fa-brands fa-square-instagram"></i>
                        </a>
                    </li>

                </ul>

            </div>
        </aside>


    )
}


