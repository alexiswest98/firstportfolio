import React, { useRef, useEffect, Profiler } from "react";
import './aboutme.css'
import prof from '../../images/prof.png'
import NavBar from "../NavBar";
import resume from "./resume.pdf"

export default function AboutMe() {


    return (
        <div className="about-me-info">
            <NavBar />
            <div className="about-me-info-inner">
                <div className="small-details-div">
                    <img src={prof} alt='profile picture' className="profilepicture"></img>
                    <div className="top-brief-name">
                        <div className="resume-container">
                            <a className="res-butt" href={resume} download="resume.pdf">
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
                    <h4 className="bio-text">After graduating with a degree focusing on broadcast journalism, I decided that I wanted to explore a different route that was equally as creative but more sustainable. I was really drawn to software engineering, especially being a Bay Area native and always being surrounded by tech. I decided to take Harvard CS50's course to get an introduction into computer science and fell in love with coding. I loved how stimulating and inspired I was after taking that introductory course alone.</h4>
                    <h4 className="bio-text">Following, I enrolled in App Academy's 24 week bootcamp where I learned Javascript and Python. I also learned many different frameworks such as React, Redux, Express, Sequelize, Flask, and SQLAlchemy. Most importantly, through the limited time frame and intense 60 to 80 work weeks, I gained confidence in my ability to learn new languages fast and efficiently. As a full stack software engineer, I am also comfortable with reading documentation, pair programming, and using git.</h4>                </div>
            </div>
        </div>
    );
}
