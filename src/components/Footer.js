import React from 'react';
import {Link} from 'react-scroll';
import {
    WhatsappShareButton,
    WhatsappIcon, 
    TelegramShareButton,
    TelegramIcon, 
    LinkedinShareButton,
    LinkedinIcon, 
    FacebookShareButton,
    FacebookIcon,
} from 'react-share';

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>city Tehran Sabonchi st Ayazi alley Douran office #62</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:555-555-555">+989374806759</a>
                        </div>
                        <div className="d-flex">
                            <p>ebrahim.v.aghaie@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <Link smooth={true} to="home" className="footer-nav">Home</Link>
                                <br />
                                <Link smooth={true} to="about" offset={-110} className="footer-nav">About me</Link>
                                <br />
                                <Link smooth={true} to="service" offset={-110} className="footer-nav">Services</Link>
                            </div>
                            <div className="col">
                                <Link smooth={true} to="experiences" offset={-110} className="footer-nav">Experiences</Link>
                                <br />
                                <Link smooth={true} to="portfolio" offset={-110} className="footer-nav">Portfolio</Link>
                                <br />
                                <Link smooth={true} to="contacts" offset={-110} className="footer-nav">Contacts</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton 
                                url={"https://www.facebook.com/mohammadebrahim.vahabaghaie"}
                                quote={"Front-End Developer"}
                                hashtag="#javascript"
                            >
                                <FacebookIcon  className="mx-3" size={36}/>
                            </FacebookShareButton>
                            <WhatsappShareButton 
                                url={"https://www.facebook.com/mohammadebrahim.vahabaghaie"}
                                quote={"Front-End Developer"}
                                hashtag="#javascript"
                            >
                                <WhatsappIcon  className="mx-3" size={36}/>
                            </WhatsappShareButton>
                            <TelegramShareButton 
                                url={"https://www.facebook.com/mohammadebrahim.vahabaghaie"}
                                quote={"Front-End Developer"}
                                hashtag="#javascript"
                            >
                                <TelegramIcon  className="mx-3" size={36}/>
                            </TelegramShareButton>
                            <LinkedinShareButton 
                                url={"https://www.facebook.com/mohammadebrahim.vahabaghaie"}
                                quote={"Front-End Developer"}
                                hashtag="#javascript"
                            >
                                <LinkedinIcon className="mx-3" size={36}/>
                            </LinkedinShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;Meva | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
