import { useRef } from 'react'
// import emailjs from '@emailjs/browser';
import './style.css'
import {
  Link
} from "react-router-dom";
import Sidebar from './Sidebar';
import Resume1 from './Dhruv Resume.pdf';

export default function Contact() {
  // const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm('service_tvnee8i', 'template_wfjs91u', form.current, {
    //     publicKey: 'FRvDFULkgL2WQuMZp',
    //   })
    //   .then(
    //     () => {
    //       console.log('SUCCESS!');
    //     },
    //     (error) => {
    //       console.log('FAILED...', error.text);
    //     },
    //   );
    // e.target.reset()
  };
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

          <article class="contact  active" data-page="Contact">
            <header>
              <h2 class="h2 article-title">Contact Us</h2>
            </header>
            <form ref={form}
              onSubmit={sendEmail}
              className="--form-control--card--flex-center --dir-column">
              <input type="text" placeholder='Full name' name='user_name' require0d />
              <input type="email" placeholder='Email' name='user_email' required />
              {/* <input type="text" placeholder='Subject' name='Subject'  required /> */}
              <textarea name="message" cols="30" rows="10" placeholder='subject'></textarea>
              <button type='submit' className="--btn--btn-primary">Send message</button>
            </form>
          </article>
        </div>
      </div>
    </div >

  )
}
