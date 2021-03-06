import React,{useEffect,useState} from "react";
import { SvgIcon5 } from "./SvgIcon";
import { FaLocationArrow } from "react-icons/fa";
import { FaHandPointUp } from "react-icons/fa";
import coverS from "../images/CoverS.jpeg";
import l1 from "../images/l1.png";
import l2 from "../images/l2.png";
import l3 from "../images/l3.png";
import l4 from "../images/l4.png";
import l5 from "../images/l5.png";
import { Link } from "react-scroll";

const Contact = (props) => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    let cancel = false;
      window.addEventListener("scroll", () => {
        if(cancel) return;
          if (window.scrollY > 200) {
              setShowTopBtn(true);
          } else {
              setShowTopBtn(false);
          }
      });
      return () => { 
        cancel = true;
      }
  }, []);

  return (
    <>
      <section  className="section">
        <div className="sContainer">
          <div className="contentBox">
            <div className="contentItem3">
              <div className="expCard expCard3" >
                <h1 className={props.mode ? "fff " : "ooo "}>Reach Out to me!</h1>
                <p className="blogP">
                  DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR
                  ALL.
                </p>
                <div className="testimon">
                  <div className="testiItem">
                    <div className="tItems wI " >
                      <SvgIcon5 />
                    </div>

                    <div className="tItems2 wI pI" >
                      <div className="dataContact">
                        <img className="sahilI" src={coverS} alt="123" />
                      </div>
                      <div className="dataContact">
                        <h2 className={props.mode ? "fff " : "ooo "}>MOHD SAHIL </h2>
                        <h4 className={props.mode ? "fff " : "ooo "}>
                          <FaLocationArrow className="tA" />
                          Kanpur-Noida,Uttar Pradesh
                        </h4>
                      </div>
                      <div className="conLinks">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="sContainer">
          <div className="contentBox">
            <div className="contentItem3">
              <div className="lBtn">
              <a href="mailto:mosahil228@gmail.com" target="_blank"  rel="noreferrer noopener">
                <button>CONTACT VIA EMAIL</button></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="contact" className=" iBtn2">
      {showTopBtn && <Link to="header">
        <button >
          <FaHandPointUp  className="bcT" /></button>
        </Link>}
      </div>
    </>
    
  );
};

export default Contact;
