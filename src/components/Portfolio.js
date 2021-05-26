import React from 'react';
import advanceSearch from '../images/AdvancedSearch.png';
import loginDourtal from '../images/LoginDourtal.png';
import negahTejarat from '../images/NegahTejarat.png';
import shebaCalc from '../images/ShebaCalc.png';
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

const Portfolio = () => {
    // ADVANCED SEARCH
    const openPopupboxAdvancedSearch = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={advanceSearch} alt="Advanced Search" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </>
        )
        PopupboxManager.open({
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: "Advanced Search"
                },
                fadeIn: true,
                fadeInSpeed: 500
            }
        })
    }

    const popupboxConfigAdvancedSearch = {
        titleBar: {
            enable: true,
            text: "Advanced Search"
        },
        fadeIn: true,
        fadeInSpeed: 500
    } 

    // LOGIN DOURTAL
    const openPopupboxLoginDourtal = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={loginDourtal} alt="Login Dourtal" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </>
        )
        PopupboxManager.open({
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: "Login Dourtal"
                },
                fadeIn: true,
                fadeInSpeed: 500
            }
        })
    }

    const popupboxConfigLoginDourtal = {
        titleBar: {
            enable: true,
            text: "Login Dourtal"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    
    // Negah Tejarat
    const openPopupboxNegahTejarat = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={negahTejarat} alt="NegahTejarat Project" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <b>Demo: </b><a className="hyper-link" onClick={() => window.open("http://negahtejarat.com")}>http://negahtejarat.com</a>
            </>
        )
        PopupboxManager.open({
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: "Negah Tejarat"
                },
                fadeIn: true,
                fadeInSpeed: 500
            }
        })
    }

    const popupboxConfigNegahTejarat = {
        titleBar: {
            enable: true,
            text: "Negah Tejarat"
        },
        fadeIn: true,
        fadeInSpeed: 500
    } 

    // Sheba Calculator
    const openPopupboxShebaCalc = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={shebaCalc} alt="Sheba Calculator Project" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <b>Demo: </b><a className="hyper-link" onClick={() => window.open("https://www.ivbb.ir/fa-IR/Portal/5167/page/%D8%B4%D8%A8%D8%A7")}>https://www.ivbb.ir/fa-IR/Portal/5167/page/%D8%B4%D8%A8%D8%A7</a>
            </>
        )
        PopupboxManager.open({
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: "Sheba Calculator"
                },
                fadeIn: true,
                fadeInSpeed: 500
            }
        })
    }

    const popupboxConfigShebaClac = {
        titleBar: {
            enable: true,
            text: "Sheba Calculator"
        },
        fadeIn: true,
        fadeInSpeed: 500
    } 
    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">
                    portfolio
                </h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxAdvancedSearch}>
                        <img className="portfolio-image" src={advanceSearch} alt="Advance Search" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon icon={faSearchPlus} className="portfolio-icon" />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxLoginDourtal}>
                        <img className="portfolio-image" src={loginDourtal} alt="Login Dourtal" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon icon={faSearchPlus} className="portfolio-icon" />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxNegahTejarat}>
                        <img className="portfolio-image" src={negahTejarat} alt="Negah Tejarat" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon icon={faSearchPlus} className="portfolio-icon" />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxShebaCalc}>
                        <img className="portfolio-image" src={shebaCalc} alt="Calculate Sheba" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon icon={faSearchPlus} className="portfolio-icon" />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigAdvancedSearch } />
            <PopupboxContainer {...popupboxConfigLoginDourtal } />
            <PopupboxContainer {...popupboxConfigNegahTejarat } />
            <PopupboxContainer {...popupboxConfigShebaClac } />
        </div>
    )
}

export default Portfolio;
