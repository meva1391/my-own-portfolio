import React from 'react';
import author from "../me.jpeg";

export default function About() {
    return (
        <div className="container py-5" id="about">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrapper mb-5">
                        <img src={author} alt="Ebrahim Vahab Aghaie" className="profile-img"/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">about me</h1>
                    <p>
                        Hello! I am Ebrahim Vahab Aghaie. I have developing websites for over 2 years. I'm Front-End Web Developer. Technologies I use is HTML, CSS, JavaScript.
                        I create responsive websites that are displayed on all devices desktops and smartphones.
                        Of course, before I begin developing any webapp, Landing Page, Business Website or E-commerce, I need to have a ready-made project layout (sketch).
                        And I'm ready to do this for you, before we start developing your website, we will discuss all the detials of your niche with you, I will conduct a survey of your competitors and make a list of their advantages and weaknesses.
                        After the website is finished and ready to deploy and sell a product or service. It is essential that your potential clients know about you.  
                    </p>
                </div>
            </div>
        </div>
    )
}
