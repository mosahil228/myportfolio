import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { GiCrossMark } from "react-icons/gi";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import MuiSwitch from './MuiSwitch';

const HamItem = (props) => {
    return (
        <>
            <div className="hMainItem">
                <div className="hSocial">

                    <a href="https://www.facebook.com/mo.sahil.228"
                        target="_blank"
                        rel="noreferrer noopener">
                        <FaFacebookF />
                    </a>


                    <a href="https://www.instagram.com/sahillll._._/"
                        target="_blank"
                        rel="noreferrer noopener">
                        <FaInstagram />
                    </a>


                    <a href="https://www.linkedin.com/in/mosahil228"
                        target="_blank"
                        rel="noreferrer noopener">
                        <FaLinkedin />
                    </a>


                    <a href="https://github.com/mosahil228"
                        target="_blank"
                        rel="noreferrer noopener">
                        <AiFillGithub />
                    </a>
                    <a href="https://twitter.com/Mdb_Sahil"
                        target="_blank"
                        rel="noreferrer noopener">
                        <FaTwitter />
                    </a>

                </div>
                <GiCrossMark onClick={props.closeHam} />

            </div>
            <div className="hamFlex" >
                <div className="hamItems" >
                    <Link className="hamLinks"  to="skills" >Skills</Link>
                </div>
                <div className="hamItems ">
                    <Link className="hamLinks" to="experience">Work experience</Link>
                </div>
                <div className="hamItems ">
                    <Link className="hamLinks" to="design">Designs</Link>
                </div>
                <div className="hamItems ">
                    <Link className="hamLinks" to="blogs">blogs</Link>
                </div>
                <div className="hamItems ">
                    <Link className="hamLinks" to="contact">Contact me</Link>
                </div>
                <div className="hamItems">
                    <NavLink className="hamLinks" to="/projects">Projects</NavLink>
                </div>
                <MuiSwitch toggleMode={props.toggleMode} />
            </div>

        </>
    )
}

export default HamItem