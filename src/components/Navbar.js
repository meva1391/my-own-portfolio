import React from 'react';
import logo from '../logo.png';
import {Link} from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="MEVA" className="logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: '#fff'}}/>
                </button>

                <div className="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link smooth={true} to="home" className="nav-link" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="about" offset={-110} className="nav-link" href="#">about me</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="service" offset={-110} className="nav-link" href="#">services</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="experiences" offset={-110} className="nav-link" href="#">Experinces</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="portfolio" offset={-110} className="nav-link" href="#">portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="contacts" offset={-110} className="nav-link" href="#">contacts</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
