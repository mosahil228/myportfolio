import React from "react";
import { SvgIcon3 } from "./SvgIcon";
import galimg from "../images/galimg.png";
import k12 from "../images/k12.png";
import { FaPencilAlt } from "react-icons/fa";
import ExpSec, { ExpSec2 } from "./ExpSec";
import Contact from "./Contact";



const HomeMore = () => {
  return (
    <>
      <section id="proficiency" className="section">
        <div className="sContainer">
          <div className="contentBox high">
            <div className="contentItem resC1" >
              <div className="leftB leftC respL">
                <h1>Proficiency</h1>
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
          <div className="contentBox2">
            <div className="contentItem">
              <div className="education">
                <h1>
                  Education
                  <span>
                    <FaPencilAlt />
                  </span>
                </h1>
                <div className="eduDetail">
                  <img src={galimg} alt="logo" />

                  <h5>Galgotias University </h5>
                  <p className="p1">
                    Bachelor of Science in Computer Science Engineering
                  </p>
                  <p className="p1"> August 2019-April 2023 </p>
                  <p className="p1">
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
                <h1>Experiences</h1>
              </div>
              <div className="expCards"  >
                <ExpSec />
                <ExpSec/>
                <ExpSec />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* blogs sectionn.................. */}
      <ExpSec2 />
      {/* blog section end ............ */}
      {/* testimonial..... */}
      <section id="testi" className="section">
        <div className="sContainer">
          <div className="contentBox">
            <div className="contentItem3">
              <div className="expCard expCard3 " >
                <h1 className="testiH">Testimonials</h1>
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
    
      <Contact/>
       
    </>
  );
};

export default HomeMore;
