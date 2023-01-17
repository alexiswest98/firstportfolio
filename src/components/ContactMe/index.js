import React, { useRef, useEffect, Profiler } from "react";
import { Link } from "react-router-dom";
import './contact.css'
import NavBar from "../NavBar";
import profpic2 from "../../images/prof-pic2.PNG"
import linkedin from "../../images/linkedin.png"
import github from "../../images/github.png"

export default function ContactMe() {

    return (
        <div className="portfolio-outer-div">
            <NavBar/>
            <h1 className="connect-title">Let's Connect!</h1>
            <div className="contact-outer">
                <div className="profile-pic">
                    <img src={profpic2} alt='profile pic' className="prof2"></img>
                </div>
                <div className="bottom-half-links">
                    <a target="_blank" href='https://www.linkedin.com/in/alexis-west-596a6b203/' className='footer-link-div'>
                        <img id="linkedin" src={linkedin} alt="li"></img>
                    </a>
                    <a target="_blank" href='https://github.com/alexiswest98' className='footer-link-div'>
                        <img id="github-icon" src={github} alt="gh"></img>
                    </a>
                </div>
                <p className="email">For any queries:<a href="mailto:alexishwest98@gmail.com?Subject=My%20Query" className="email" id="email"> alexishwest98@gmail.com</a></p>

            </div>
        </div>
    )
}
