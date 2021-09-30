import React from "react";
import m1 from "./images/m1.svg";
import m2 from "./images/m2.svg";
import LG from "./images/LG.png";
import { Link} from "react-scroll";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="fItem ">
          <div className="fLinks">
            <ul>
              <li>
                <Link to="header">Home</Link>
              </li>
              <li>
                <Link to="skills">My skills</Link>
              </li>
              <li>
                <Link to="experience">Experience</Link>
              </li>
              <li>
                <Link to="design">Design</Link>
              </li>
              <li>
                <Link to="contact">Contact us</Link>
              </li>
            </ul>
          </div>
          <div className="fLinks">
            <ul>
              <li>
                <Link to="#">My Resume</Link>
              </li>
              <li>
                <Link to="proficiency">Proficiency</Link>
              </li>
              <li>
                <Link to="education">Education</Link>
              </li>
              <li>
                <Link to="testi">Testimonials</Link>
              </li>
            </ul>
          </div>
          {/* <div className="fLinks">
            <ul>
              <li>
                <NavLink to="#">Terms</NavLink>
              </li>
              <li>
                <NavLink to="#">Privacy Policy</NavLink>
              </li>
              <li>
                <NavLink to="#">Sitemap</NavLink>
              </li>
            </ul>
          </div> */}
          <div className="fL">
            <div>
              <img src={m1} alt="logo" />
            </div>
            <div>
              <img src={m2} alt="logo" />
            </div>
          </div>
        </div>
        <div className="fItems2">
          <img src={LG} alt="logo" />
          <span>&copy; 2021 CODEWITHSAHIL.INC.</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
