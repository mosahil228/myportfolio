import React from 'react'
import { Link } from "react-scroll";
// import logomain2 from "./images/logomain2.svg"
// import { SiSemanticweb } from "react-icons/si";
import Hamburger from "./Components/Hamburger";
import MuiSwitch from "./Components/MuiSwitch";
import LG from "./images/logomain.svg";


const PNavbar = (props) => {
    return (
        <div  >
          <header id="header" className={props.mode ? "header-d" : "header-l pHeader"} >
            <nav>
              <div className="navbar pNavbar">
                <div className="navBox " >
                  <Hamburger className="hburger" mode={props.mode} toggleMode={props.toggleMode} />
                  <div className="navL">
                    <div className="navLogo">
                      <img src={LG} alt="logo" />
                    </div>
    
                  </div>
                  <div className="navR8 disN" >
                  
                    <div className="navItems pNavItems " >
                      <Link className={props.mode ? "na-d" : "na-l"} style={{ color: `$"{props.mode}"` }} to="skills" >Skills</Link>
                    </div>
                    <div className="navItems  pNavItems  ">
                      <Link className={props.mode ? "na-d" : "na-l"} to="experience">Work experience</Link>
                    </div>
                    <div className="navItems  pNavItems ">
                      <Link className={props.mode ? "na-d" : "na-l"} to="testi">Projects</Link>
                    </div>
    
                    <div className="navItems  pNavItems ">
                      <Link className={props.mode ? "na-d" : "na-l"} to="design">Designs</Link>
                    </div>
                    <div className="navItems  pNavItems ">
                      <Link className={props.mode ? "na-d" : "na-l"} to="blogs">blogs</Link>
                    </div>
                    <div className="navItems  pNavItems ">
                      <Link className={props.mode ? "na-d" : "na-l"} to="contact">Contact me</Link>
                    </div>
                    <MuiSwitch toggleMode={props.toggleMode} />
                  </div>
    
                </div>
              </div>
            </nav>
          </header>
        </div>
      );
}

export default PNavbar