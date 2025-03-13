import React from 'react'
import './style.css'
import Sidebar from './Sidebar';
import {
  Link
} from "react-router-dom";
import Resume1 from './Dhruv Resume.pdf';

export default function Skill() {
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


          <article class="skills active" data-page="skills">

            <header>
              <h2 class="h2 article-title">skills</h2>
            </header>


            <div class="mainskills">
              <div class="htmlmain">
                <div class="mainhtml">HTML</div>
                <div class="htmldetail">HyperText Markup Language is the standard language used to create and
                  structure web pages. HTML forms the backbone of web development, working alongside CSS for styling and
                  JavaScript for interactivity.HTML5 is the latest version of HTML, designed to enhance web functionality
                  and user
                  experience.HTML5 enables modern, interactive, and efficient web applications without relying on external
                  plugins.</div>
              </div>
              <div class="cssmain">
                <div class="maincss">CSS</div>
                <div class="cssdetail">Cascading Style Sheets is a stylesheet language used to control the
                  presentation and layout of HTML elements on a web page. It allows developers to style text, colors,
                  layouts, and more, enabling a clear separation between content and design. CSS3 is the latest version of
                  CSS, introducing advanced features for styling web pages with greater flexibility and efficiency.</div>
              </div>
              <div class="jsmain">
                <div class="mainjs">JavaScript</div>
                <div class="jsdetail">JavaScript is a versatile programming language used to add interactivity and dynamic
                  behavior to web pages. It enables features like form validation, animations, real-time updates, and
                  interactive content. Running directly in the browser, JavaScript works alongside HTML and CSS to create
                  engaging and functional web applications.</div>
              </div>
              <div class="boostarpmain">
                <div class="mainboostrap">Boostrap</div>
                <div class="boostrapdetail">Bootstrap is a popular open-source framework for building responsive and
                  mobile-first web designs. It provides a collection of pre-designed components, such as navigation bars,
                  buttons, and forms, along with a powerful grid system for layout. Built with HTML, CSS, and JavaScript,
                  Bootstrap simplifies web development and ensures consistency across devices and browsers.</div>
              </div>
              <div class="reactmain">
                <div class="mainreact">React</div>
                <div class="reactdetail">React is a popular JavaScript library for building fast and interactive user
                  interfaces, developed by Facebook. It uses a component-based architecture, allowing developers to create
                  reusable UI elements and manage complex application states efficiently. React's virtual DOM ensures high
                  performance, making it ideal for modern, dynamic web applications.</div>
              </div>
              <div class="vsmain">
                <div class="mainvs">VS code</div>
                <div class="vscodedetail">Visual Studio Code is a lightweight, open-source code editor developed
                  by Microsoft, widely used for software and web development. It supports numerous programming languages and
                  provides features like IntelliSense, debugging, Git integration, and a vast library of extensions. With
                  its customizable interface and powerful tools, VS Code is ideal for developers of all skill levels.</div>
              </div>
            </div>
            <div class="allskillimg">
              <div class="firstskill">
                <div class="htmlimg">
                  <img src={require('./images/HTML5.png')}></img>
                  <div class="skillname">HTML</div>
                </div>
                <div class="cssimg">
                  <img src={require('./images/CSS3.png')}></img>
                  <div class="skillname">CSS</div>
                </div>
                <div class="jsimg">
                  <img src={require('./images/JavaScript.png')}></img>
                  <div class="skillname">JavaScript</div>
                </div>
              </div>
              <div class="secondskill">
                <div class="boostrapimg">
                  <img src={require('./images/Bootstrap.png')}></img>
                  <div class="skillname">Bootstrap</div>
                </div>
                <div class="reactimg">
                  <img src={require('./images/React.png')}></img>
                  <div class="skillname">React</div>
                </div>
                <div class="vscodeimg">
                  <img src={require('./images/VSCode.png')}></img>
                  <div class="skillname">VSCode</div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
