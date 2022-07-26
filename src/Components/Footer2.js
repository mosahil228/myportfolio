import React from 'react'
import git from "../images/icons8-github.svg"
import lin from "../images/icons8-linkedin.gif"
import ins from "../images/icons8-instagram.gif"
import twi from "../images/icons8-twitter.gif"
import logo from "../images/logo.svg"
const Footer2 = () => {
    return (
        <>
            <footer>
                <div className="footer2">
                    <div className='main-footer'>
                        <div className='footer-item'>
                            <div className='left-footer'>
                                <img src={logo} width={120} alt=""/>
                            </div>
                            <div className='right-footer'>
                                <span>Social media links</span>
                                <div>
                                <a
                                    href="https://www.linkedin.com/in/mosahil228"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <img className='firstImg' src={lin} alt="img" />
                                </a>
                                <a
                                    href="https://github.com/mosahil228"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <img  src={git} alt="img" />
                                </a>
                                <a
                                    href="https://www.instagram.com/sahillll._._/"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <img  src={ins} alt="img" />
                                </a>
                                <a
                                    href="https://twitter.com/Mdb_Sahil"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <img  src={twi} alt="img" />
                                </a>

                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='rainbox'></div>
        </>
    )
}

export default Footer2
