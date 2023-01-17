import React, { useRef, useEffect, Profiler } from "react";
import { Link } from "react-router-dom";
import './navbar.css'

export default function NavBar() {

    return (
        <div className="nav-bar-outer">
            <div className="nav-bar-content">
                <Link to='/' exact='true' className='text-link'>
                    <h2>Home</h2>
                </Link>
                <Link to='/portfolio' exact='true' className='text-link'>
                    <h2>Portfolio</h2>
                </Link>
                <Link to='/contact' exact='true' className='text-link'>
                    <h2>Contact</h2>
                </Link>
            </div>
        </div>
    );
}
