import React from 'react';
import Typed from 'react-typed';
import {Link} from 'react-scroll';

export default function Header() {
    return (
        <div className="header-wraper" id="home">
            <div className="main-info">
                <h1>Web development and website promotions</h1>
                <Typed 
                    className="typed-text"
                    strings={["Web Desing", "Web Development", "Facebook Ads SMM", "Google Ads"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <Link smooth={true} offset={-110} href='#' className="btn-main-offer">Contact me</Link>
            </div>
        </div>
    )
}
