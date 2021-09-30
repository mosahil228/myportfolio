import React from "react";
import t4 from "../images/t4.png";

const ExpSec = () => {
  return (
    <>
      <div className="eCards">
        <div className="eCards1">
          <div className="eCards2"></div>
          <img src={t4} alt="fg" />
        </div>

        <div className="cItems">
          <h2>Loklo</h2>
          <h1> Graphic Designer</h1>
          <h3> April – September 2021</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. .
          </p>
        </div>
    
      </div>
    </>
  );
};


const ExpSec2 = () => {
    return (
        <>
         <section id="blogs" className="section">
        <div className="sContainer">
          <div className="contentBox">
            <div className="contentItem3">
              <div className="expCard expCard3"  
     >
                <h1>Blogs Videos</h1>
                <p className="blogP">
                  WITH LOVE FOR MAKING COOL VIDEOS, I LOVE TO WRITE AND TEACH
                  OTHERS WHAT I HAVE LEARNT.
                </p>
              </div>
              <div className="expCards" >
                <div className="eCards eCards3"  >
                  <a className="blog-card"
                    href="https://www.youtube.com/channel/UCDEUzyrC71uHzUH0QyRJz8w"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div className="cItems">
                      <h2 className="bTitle">
                        I make Some Awesome designing and coding videos on my
                        channel.
                      </h2>

                      <p className="bPP">
                        Click on it and go to my channel and watch free cool and
                        awesome vedio.. DONT'WORRY data is updated soon.
                      </p>
                      <div className="go-corner">
                        <div className="go-arrow">→</div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="eCards eCards3"  >
                  <a
                    className="blog-card"
                    href="https://www.youtube.com/channel/UCDEUzyrC71uHzUH0QyRJz8w"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div className="cItems">
                      <h2 className="bTitle">
                        I make Some Gaming and animation videos also on my
                        channel.
                      </h2>

                      <p className="bPP">
                        Click on it and go to my channel and watch free cool and
                        awesome vedio.. DONT'WORRY data is updated soon.
                      </p>
                      <div className="go-corner">
                        <div className="go-arrow">→</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}




export default ExpSec;
export {ExpSec2};
