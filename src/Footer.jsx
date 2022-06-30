import React,{useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import Sample from "./Svg/Sample.pdf";
import PacmanLoader from "react-spinners/PacmanLoader";

const Footer = () => {
  const[bar,setBar]=useState(false);
  useEffect(() => {
   let close=false;
   const setBottomBar=()=>{
    if(close) return;
    if(window.scrollY>600){
      setBar(true)
    }else{
      setBar(false)
    }
  }
  window.addEventListener("scroll",setBottomBar);
    return () => {
      close=true
    };
  }, []);
 
  return (
    <>
      {bar && <footer className="footer">
        <div className="fItem">
          <div className="pacman"><PacmanLoader
            color={"#000"} size={10} /></div>

          <NavLink to="/projects">
            MY PROJECTS
          </NavLink>
          <a
            href={Sample}
            target="_blank"
            rel="noreferrer noopener">
            MY RESUME</a>
          <Link to="design">GRAPHIC WORK</Link>
          <div className="pacman2"><PacmanLoader
            color={"#000"} size={10} /></div>
        </div>
      </footer>}
    </>
  );
};

export default Footer;
