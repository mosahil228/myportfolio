import React from 'react'
import p1 from "../images/P1.png";
import p2 from "../images/P2.svg";
import p3 from "../images/P3.svg";


const PSections2 = (props) => {
  return (
    <>
      <div className='pMainHeading pMainHeading2'>
        <h2 className={props.mode ? "pL" : "pD"}>MERN<span> Stack </span>Projects</h2>
      </div>
      <section className='pMainSection2'>
        <div className='pMainDiv2'>
          <div className='pGridSection'>
            <div className='pGrid'>
                <img src={p1} alt="" />
            </div>
            <div className='pGrid'>
                <img src={p2} alt="" />
            </div>
            <div className='pGrid'>
                <img src={p3} alt="" />
            </div>
            <div className='pGrid'>
                <img src={p1} alt="" />
            </div>
            <div className='pGrid'>
                <img src={p2} alt="" />
            </div>
            <div className='pGrid'>
                <img src={p3} alt="" />
            </div>
            <div className='pGrid'>
                <img src={p1} alt="" />
            </div>
            <div className='pGrid'>
                <img src={p2} alt="" />
            </div>
           
           
           


          </div>
        </div>
      </section>
    </>
  )
}

export default PSections2