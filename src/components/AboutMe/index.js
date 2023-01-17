import React, { useRef, useEffect, Profiler } from "react";
import './aboutme.css'
import prof from '../../images/prof.png'
import NavBar from "../NavBar";

export default function AboutMe() {

    return (
        <div className="about-me-info">
            <NavBar/>
            <div className="about-me-info-inner">
                <div className="small-details-div">
                    <img src={prof} alt='profile picture' className="profilepicture"></img>
                    <div className="top-brief-name">
                        <h1 className="title-name">Hello! My name is Alexis West,</h1>
                        <h2 className="title-name-below">a full Stack Software Engineer</h2>
                    </div>
                </div>
                <div className="bottom-about-div">
                <h4 className="bio-text">After graduating with a degree focusing on broadcast journalism, I decided that I wanted to explore a different route that was equally as creative but more sustainable. I was really drawn to software engineering, especially being a Bay Area native and always being surrounded by tech. I decided to take Harvard CS50's course to get an introduction into computer science and fell in love with coding. I loved how stimulating and inspired I was after taking that introductory course alone.</h4> 
                <h4 className="bio-text">Following, I enrolled in App Academy's 24 week bootcamp where I learned Javascript and Python. I also learned many different frameworks such as React, Redux, Express, Sequelize, Flask, and SQLAlchemy. Most importantly, through the limited time frame and intense 60 to 80 work weeks, I gained confidence in my ability to learn new languages fast and efficiently. As a full stack software engineer, I am also comfortable with reading documentation, pair programming, and using git.</h4>                </div>
            </div>
        </div>
    );
}
