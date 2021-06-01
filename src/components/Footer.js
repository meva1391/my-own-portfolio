import React from 'react';
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
                            <p>city Moscow Main st 2020 office #223</p>
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
                                <a className="footer-nav">Home</a>
                                <br />
                                <a className="footer-nav">About me</a>
                                <br />
                                <a className="footer-nav">Services</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Experiences</a>
                                <br />
                                <a className="footer-nav">Portfolio</a>
                                <br />
                                <a className="footer-nav">Contacts</a>
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
