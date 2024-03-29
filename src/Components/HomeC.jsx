import React, { useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import "../sass/Home.css";
import LabTabs from "./LabTabs";
import SvgIcon, { SvgIcon2 } from "./SvgIcon";
import l1 from "../images/l1.png";
import waveH from "../images/waveH.png";
import l2 from "../images/l2.png";
import l3 from "../images/l3.png";
import l4 from "../images/l4.png";
import l5 from "../images/l5.png";
import { FaHtml5 } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaStudiovinari } from "react-icons/fa";
import HomeMore from "./HomeMore";
import 'aos/dist/aos.css';
import Sample from "../Svg/Sample.pdf";
import { NavLink } from "react-router-dom";


const HomeC = (props) => {

  useEffect(()=>{
    AOS.init();
    AOS.refresh();
  }
  )
 
  return (
    <div >
      {/* style={{color: props.mode===1 ?"red" : "blue"}} */}
      <section id="home" className="section" >
        <div className="sContainer"  >
          <div className="contentBox" >
            <div className="contentItem resC1">
              <div className="leftB respL" data-aos="fade-right" >
                <h1 className={props.mode ? "h1-d" : "h1-l"}>
                  Hi all, I'm Sahil
                  
                  <span className="emoji">
                    <img src={waveH} alt="wave" />
                  </span>
                </h1>
                <p className={props.mode ? "ph-d" : "ph-l"}>
                  A passionate Full Stack Web Developer 🚀 having an experience
                  of building Web and Graphic designs with JavaScript / Reactjs
                  / Nodejs / and some other cool Softwares for graphic design.
                </p>
                <div className="leftLinks">
                  <a
                    href="https://www.facebook.com/mo.sahil.228"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img className="leftImg" src={l2} alt="img" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mosahil228"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img className="leftImg" src={l1} alt="img" />
                  </a>
                  <a
                    href="https://github.com/mosahil228"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img className="leftImg" src={l3} alt="img" />
                  </a>
                  <a
                    href="https://www.instagram.com/sahillll._._/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img className="leftImg" src={l4} alt="img" />
                  </a>
                  <a
                    href="https://twitter.com/Mdb_Sahil"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img className="leftImg" src={l5} alt="img" />
                  </a>
                </div>
                <div className="leftBtn">
                  <a
                    href="mailto:mosahil228@gmail.com"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button>CONTACT VIA EMAIL</button>
                  </a>
                  <a
                    href={Sample}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                  <button>SEE MY RESUME</button></a>
                  <NavLink to="/projects">
                  <button className="proBtn">MY PROJECTS</button></NavLink>
                </div>
              </div>
              <SvgIcon />
            </div>
          </div>
        </div>
      </section>

      <section id="design" className="section ">
        <div className="sContainer ">
          <div className="contentBox ">
            <h1 className={props.mode ? "heading font fff" : "heading font ooo"}>A brand collection of Design</h1>
          </div>
        </div>
      </section>
      <section className="section" >
        <div className="sContainer ">
          <div  className="infoS contentBox " >
            <LabTabs mode={props.mode} toggleMode={props.toggleMode} />
          </div>
        </div>
      </section>
      {/* skills section */}
      <section id="skills" className="section ">
        <div className="sContainer">
          <div  className="contentBox high">
            <div className="contentItem respC2">
              <SvgIcon2 />
              <div className="rightSkill respR " >
                <h1 className={props.mode ? "fff" : "ooo"} > What I do..</h1>
                <p>
                  CRAZY FULL STACK DEVELOPER AND DESIGNER WHO MAKES DAILY CRAZY
                  THINGS IN TECH.
                </p>
                <div className="skillItems">
                  <ul className="ul1">
                    <li>
                      <FaHtml5 />
                      <p>html</p>{" "}
                    </li>
                    <li>
                      <FaJs />
                      <p>js</p>{" "}
                    </li>
                    <li>
                      <FaJava />
                      <p>java</p>{" "}
                    </li>
                    <li>
                      <FaReact />
                      <p>React</p>{" "}
                    </li>
                    <li>
                      <FaFigma />
                      <p>Figma</p>{" "}
                    </li>
                  </ul>
                  <ul className="ul2">
                    <li>
                      <FaNode />
                      <p>Node</p>{" "}
                    </li>
                    <li>
                      <FaCss3 />
                      <p>Css3</p>{" "}
                    </li>
                    <li>
                      <FaSass />
                      <p>Sass</p>{" "}
                    </li>
                    <li>
                      <FaDatabase />
                      <p>Database</p>{" "}
                    </li>
                  </ul>
                </div>
                <p className="p1">
                  <span>
                    <FaStudiovinari />
                  </span>
                  Develop highly interactive Front end / User Interfaces for
                  your web and mobile applications.
                </p>
                <p className="p1">
                  <span>
                    <FaStudiovinari />
                  </span>
                  Makes more beautiful charming designs for our clients.
                </p>
                <p className="p1">
                  <span>
                    <FaStudiovinari />
                  </span>
                  Passionate and Hardworking, learn more skills day to day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HomeMore   mode={props.mode} toggleMode={props.toggleMode} />
    </div>
  );
};

export default HomeC;
