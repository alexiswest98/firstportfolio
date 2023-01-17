import React, { useRef, useEffect, Profiler } from "react";
import { Link } from "react-router-dom";
import './portfolio.css'
import NavBar from "../NavBar";
import wesbnb from "../../images/westbnb.png"
import remthemilk from "../../images/remthemilk.png"
import lexflix from "../../images/lexflix.png"


export default function Portfolio() {

    return (
        <div className="portfolio-outer-div">
            <NavBar/>
            <div className="port-outer">
                <h1 className="my-work-title">My work</h1>
                <div className="portfolio-cards">
                    <a target="_blank" href='https://lexflix.onrender.com/' className='proj-card'>
                        <img src={lexflix} alt="preview image" className="img-proj"></img>
                        <h4 className="proj-text-white">LEXFLIX</h4>
                        <h4 className="proj-text">a full stack Netflix Clone</h4>
                    </a>
                    <a target="_blank" href='https://remember-the-leche.onrender.com' className='proj-card'>
                        <img src={remthemilk} alt="preview image" className="img-proj"></img>
                        <h4 className="proj-text-white">Remember the Leche</h4>
                        <h4 className="proj-text">a full stack Remember the Milk Clone</h4>
                    </a>
                    <a target="_blank" href='https://westbnb.herokuapp.com/' className='proj-card'>
                        <img src={wesbnb} alt="preview image" className="img-proj"></img>
                        <h4 className="proj-text-white">Westbnb </h4>
                        <h4 className="proj-text">a full stack Airbnb Clone</h4>
                    </a>
                    
                </div>

            </div>
        </div>
    );
}
