import React from "react";
// import { Link } from "react-router-dom";
import Hamburger from "./Components/Hamburger";
import MuiSwitch from "./Components/MuiSwicth";
import LG from "./images/LG.png";
import { Link } from "react-scroll";

const Enavbar = () => {
  return (
    <>
      <header id="header">
        <nav>
          <div className="navbar">
            <div className="navBox">
              <Hamburger className="hburger" />
              <div className="navL">
                <div className="navLogo">
                  <img src={LG} alt="logo" />
                  
                </div>
                <h4>GRAPHIC/WEB DOVELOPER</h4>
                  
              </div>
              <div className="navR8 disN">
                <div className="navItems ">
                  <Link to="skills">Skills</Link>
                </div>
                <div className="navItems ">
                  <Link to="experience">Work experience</Link>
                </div>
                <div className="navItems ">
                  <Link to="testi">Testimonials</Link>
                </div>
               
                <div className="navItems ">
                  <Link to="design">Designs</Link>
                </div>
                <div className="navItems ">
                  <Link to="blogs">blogs</Link>
                </div>
                <div className="navItems ">
                  <Link to="contact">Contact me</Link>
                </div>
                <MuiSwitch />
                
              </div>
           
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Enavbar;
