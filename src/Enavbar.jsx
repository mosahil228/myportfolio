import React,{useState} from "react";
// import { Link } from "react-router-dom";
// import Hamburger from "./Components/Hamburger";
import MuiSwitch from "./Components/MuiSwitch";
import LG from "./images/logomain.svg";
import { Link } from "react-scroll";
import { HiMenuAlt1 } from "react-icons/hi";
import HamItem from "./Components/HamItem";
import { NavLink } from "react-router-dom";



const Enavbar = (props) => {
  const [bar, setBar] = useState("hiddenBar");
 
  const toggleBar = () => {
    if (bar === "hiddenBar") {
      setBar(`${"hiddenBar"} ${"hLeft"}`);
    } else {
      setBar("hiddenBar");
    }
  }
  const closeHam = () => {
    if (bar ===`${"hiddenBar"} ${"hLeft"}`) {
        setBar("hiddenBar");
    } else {
        setBar(`${"hiddenBar"} ${"hLeft"}`);
    }
    
}
 

  return (
    <div >
    <div className="hamDiv">
        {bar && <div className={bar}>
            <HamItem closeHam={closeHam}  mode={props.mode} toggleMode={props.toggleMode}/>
        </div>}</div>
      <header id="header" className={props.mode ? "header-d" : "header-l "} >
        <nav>
          <div className="navbar">
            <div className="navBox " >
              <HiMenuAlt1 className={props.mode ? "hW" : "hB"} onClick={toggleBar}/>
              <div className="navL">
                <div className="navLogo">
                  <img src={LG} alt="logo" />
                </div>
                {/* <h4 className={props.mode ? "h4-d" : "h4-l"} >GRAPHIC/WEB DEVELOPER</h4> */}


              </div>
              <div className="navR8 disN" >
              <div className="navItems ">
                  <NavLink className={props.mode ? "na-d" : "na-l"} to="/projects">Projects</NavLink>
                </div>

                <div className="navItems " >
                  <Link className={props.mode ? "na-d" : "na-l"} style={{ color: `$"{props.mode}"` }} to="skills" >Skills</Link>
                </div>
                <div className="navItems ">
                  <Link className={props.mode ? "na-d" : "na-l"} to="experience">Work experience</Link>
                </div>
                

                <div className="navItems ">
                  <Link className={props.mode ? "na-d" : "na-l"} to="design">Designs</Link>
                </div>
                <div className="navItems ">
                  <Link className={props.mode ? "na-d" : "na-l"} to="blogs">blogs</Link>
                </div>
                <div className="navItems ">
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
};

export default Enavbar;
