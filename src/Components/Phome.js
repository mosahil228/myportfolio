
import React from 'react'
import pr1 from "../images/pr1.png";
import pr2 from "../images/pr2.png";
import pr3 from "../images/pr3.png";
import pr4 from "../images/pr4.png";

import PSections1 from './PSections1';
import PSections2 from './PSections2';
import PSections3 from './PSections3';


const Phome = (props) => {
  return (
    <>
      <section className="pMainSection">
        <div className='pMainDiv'>
          <div className='pShortApps'>
            <div className='pheading'> <h2 className={props.mode ? "pL" : "pD"}>Top<span> Project </span>Links</h2></div>
            <div className='pApps'>
              <div className='pSApps'>
                <div className='pSLogo'>
                  <img src={pr1} alt="" />
                </div>
                <div>
                  <p>flipcart</p>
                  <p>clone</p>
                </div>
              </div>
              <div className='pSApps'>
                <div className='pSLogo'>
                  <img src={pr2} alt="" />
                </div>
                <div>
                  <p>MS Store</p>
                  <p>clone</p>
                </div>
              </div>
              <div className='pSApps'>
                <div className='pSLogo'>
                  <img src={pr3} alt="" />
                </div>
                <div>
                  <p>Blog</p>
                  <p>Website</p>
                </div>
              </div>
              <div className='pSApps'>
                <div className='pSLogo'>
                  <img src={pr4} alt="" />
                </div>
                <div>
                  <p>Netflix</p>
                  <p>clone</p>
                </div>
              </div>
              <div className='pSApps'>
                <div className='pSLogo'>
                  <img src={pr1} alt="" />
                </div>
                <div>
                  <p>flipcart</p>
                  <p>clone</p>
                </div>
              </div>
              <div className='pSApps'>
                <div className='pSLogo'>
                  <img src={pr2} alt="" />
                </div>
                <div>
                  <p>MS Store</p>
                  <p>clone</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <PSections1 mode={props.mode} toggleMode={props.toggleMode}/>
      <PSections2 mode={props.mode} toggleMode={props.toggleMode}/>
      <PSections3 mode={props.mode} toggleMode={props.toggleMode}/>
      <div className='Margin'></div>
    </>
  )
}

export default Phome