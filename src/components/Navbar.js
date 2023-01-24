

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-dark  fixed-top">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand "> S R </Link>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span ><i className="fa-solid fa-bars-staggered hb "></i></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarNav">
                        <ul className="navbar-nav ms-auto me-5">
                            <li className="nav-item ">
                                <Link to="/" className="nav-link active text-white" aria-current="page">HOME</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link to="/portfolio" className="nav-link active text-white">PORTFOLIO</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link active text-white" >CONTACT</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="/blog" className="nav-link active text-white" aria-current="page">BLOG</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Navbar;