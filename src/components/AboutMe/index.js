import React, { useRef, useEffect, Profiler } from "react";
import { useState } from "react";
import './aboutme.css'
import prof from '../../images/prof.png'
import NavBar from "../NavBar";
import resume from "./AlexisWestResume.pdf"

export default function AboutMe() {
    const [showFact, setShowFact] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
          setShowFact(false);
        }, 15000); // 15 seconds in milliseconds
    
        return () => clearTimeout(timeout);
      }, []);

    return (
        <div className="about-me-info">
            <NavBar />
            {showFact && 
            <div className="temp-div">
                <p>Fun Fact! The slime effect/Metaballs were coded using only Vanilla JS and CSS!</p>
            </div>}
            <div className="about-me-info-inner">
                <div className="small-details-div">
                    <img src={prof} alt='profile picture' className="profilepicture"></img>
                    <div className="top-brief-name">
                        <div className="resume-container">
                            <a className="res-butt" href={resume} download="AlexisWestResume.pdf">
                            Download Resume</a>
                        </div>
                        <h1 className="title-name">Hello! My name is Alexis West,</h1>
                        <h2 className="title-name-below">a full Stack Software Engineer</h2>
                    </div>
                </div>
                <div className="bottom-about-div">
                    <h3>My Proficiencies:</h3>
                    <p>
                        <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
                        <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
                        <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
                        <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
                        <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
                        <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" />
                        <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
                        <img src="https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white" />
                        <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
                        <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" />
                        <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white" />
                        <img src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white" />
                        <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
                        <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />
                        <img src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white" />
                        <img src="https://img.shields.io/badge/jinja-white.svg?style=for-the-badge&logo=jinja&logoColor=black"/>
                        <img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" />
                        <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" />
                        <img src="https://img.shields.io/badge/Adobe%20Premiere%20Pro-9999FF?style=for-the-badge&logo=Adobe%20Premiere%20Pro&logoColor=white"/>
                    </p>
                    <h4 className="bio-text">After graduating from San Francisco State University, I decided that I wanted to dive deeper into software engineering, which was something I was always passionate about ever since I was young and would modify the HTML on my old Tumblr blog. I decided to take Harvard CS50's course to get some more experience with different coding languages and learn more about DSA. I still remember the first lines of code I wrote and the silly Spongebob-themed game I made on Scratch which inspired me to learn how to create or develop whatever my mind imagined.</h4>
                    <h4 className="bio-text">Since then, I have completed App Academy's 24-week software engineering program. I learned a variety of languages and technologies (JavaScript, Python, Flask, SQLAlchemy, PostgreSQL, SQLite, Express, Sequelize, React, Redux, HTML, CSS, Node.js, Git, Heroku, Render, Figma, NPM, JWT, Gunicorn,  Pair programming) and developed three full-stack websites, including one in a team environment. Most importantly, the experience has taught me how to learn new languages quickly and efficiently through reading documentation, agile workflow, and maintaining a positive outlook.</h4>                
                    {/* <p className="bio-text" id="colored">Fun Fact! The slime effect/Metaballs were coded using only Vanilla JS and CSS!</p> */}
                    </div>
            </div>
        </div>
    );
}
