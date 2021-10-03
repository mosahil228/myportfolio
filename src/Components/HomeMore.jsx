import React from "react";
import { SvgIcon3 } from "./SvgIcon";
import galimg from "../images/galimg.png";
import k12 from "../images/k12.png";
import { FaPencilAlt } from "react-icons/fa";
import ExpSec, { ExpSec2 } from "./ExpSec";
import Contact from "./Contact";



const HomeMore = (props) => {
  return (
    <>
      <section id="proficiency" className="section">
        <div className="sContainer">
          <div className="contentBox high">
            <div className="contentItem resC1" >
              <div className="leftB leftC respL">
                <h1 className={props.mode ? "fff" : "ooo"}> Proficiency</h1>
                <div className="skillP">
                  <p>Frontend design</p>
                  <div className="meter">
                    <span className="meterSpan"></span>
                  </div>
                  <p>Graphic design</p>
                  <div className="meter">
                    <span className="meterSpan1"></span>
                  </div>
                  <p>Backend </p>
                  <div className="meter">
                    <span className="meterSpan2"></span>
                  </div>
                </div>
              </div>
              <SvgIcon3 />
            </div>
          </div>
        </div>
      </section>
      <section id="education" className="section" >
        <div className="sContainer">
          <div className={props.mode ? "contentBox2 cb-d" : "contentBox2 c-l cb-l"}>
            <div className="contentItem">
              <div className="education">
                <h1 className={props.mode ? "fff" : "ooo"}>
                  Education
                  <span>
                    <FaPencilAlt />
                  </span>
                </h1>
                <div className="eduDetail">
                  <img src={galimg} alt="logo" />

                  <h5 className={props.mode ? "fff" : "ooo"}>Galgotias University </h5>
                  <p  className={props.mode ? "fff p1" : "ooo p1"}>
                    Bachelor of Science in Computer Science Engineering
                  </p>
                  <p className={props.mode ? "fff p1" : "ooo p1"}> August 2019-April 2023 </p>
                  <p className={props.mode ? "fff p1" : "ooo p1"}>
                    Ranked top 10% in the program. Took courses about Software
                    Engineering, Machine learning, Operating Systems, ...{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="experience" className="section">
        <div className="sContainer">
          <div className="contentBox">
            <div className="contentItem3">
              <div className="expCard">
                <h1 className={props.mode ? "fff" : "ooo"}>Experiences</h1>
              </div>
              <div className="expCards"  >
                <ExpSec mode={props.mode} toggleMode={props.toggleMode} />
                <ExpSec mode={props.mode} toggleMode={props.toggleMode} />
                <ExpSec mode={props.mode} toggleMode={props.toggleMode} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* blogs sectionn.................. */}
      <ExpSec2 mode={props.mode} toggleMode={props.toggleMode}/>
      {/* blog section end ............ */}
      {/* testimonial..... */}
      <section id="testi" className="section">
        <div className="sContainer">
          <div className="contentBox">
            <div className="contentItem3">
              <div className="expCard expCard3 " >
                <h1 className={props.mode ? "fff testiH" : "ooo testiH"}>Testimonials</h1>
              </div>
              <div className="testimon">
                <div className="testiItem" >
                  <div className="tItems wI">
                  <img src={k12} alt="sa"/>
                  </div>
                  <div className="tItems2 wI">
                  <img className="tIc" src={k12} alt="sa"/>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact section... */}
    
      <Contact mode={props.mode} toggleMode={props.toggleMode}/>
       
    </>
  );
};

export default HomeMore;
