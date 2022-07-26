import React,{useState} from 'react'
import { BsCalendarDate } from 'react-icons/bs';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import {Sdata3, Sdata4, Sdata6 } from '../data/Sdata';
import svg1 from "../images/svgexport-1.svg"

const Heroright = () => {
    const [query, setQuery] = useState("");
    const sdata = Sdata3.filter((data) => data.name.toLowerCase().includes(query.toLowerCase()));
  let val = query
  return (
    <>
        <div className='hero-right'>
              <div className='topProject-section'>
                <h2>My Best</h2>
                <h2 className='color-h2'><span>Web development Projects</span></h2>
                <div className='topProject-grid'>
                  {Sdata4.filter((data) => {
                    if (query === "") {
                      return data;
                    }
                    else if (data.name.toLowerCase().includes(query.toLowerCase())) {
                      return data;
                    }

                  }).map((data, index) => {
                    return (

                      <div className='top-gridItem' key={index}>
                        <div className='hidden-top'>
                          <div className='top-data'>
                            <h3>{data.h1} <span>{data.s1}</span> {data.h2} <span>{data.s2}</span></h3>
                            <div className='seeDetails'>
                              <img src={svg1} alt="" />
                              <img src={svg1} alt="" />
                              <img src={svg1} alt="" />
                              <img src={svg1} alt="" />
                              <img src={svg1} alt="" />
                              <h5>App description</h5>

                            </div>

                            <p className='data-para'>{data.para}</p>
                            <div className='s-code'>
                              <a href={data.link}
                                target="_blank"
                                rel="noreferrer noopener">Go to site <HiOutlineArrowNarrowRight /></a>
                            </div>
                          </div>
                        </div>
                        <div className='top-imgBox'>
                          <img src={data.img} alt="" />
                        </div>
                        <div className='top-data'>
                          <h3>{data.h1} <span>{data.s1}</span> {data.h2} <span>{data.s2}</span></h3>
                          <div className='seeDetails'>
                            <img src={svg1} alt="" />
                            <img src={svg1} alt="" />
                            <img src={svg1} alt="" />
                            <img src={svg1} alt="" />
                            <img src={svg1} alt="" />
                            <h5>See details</h5>
                          </div>

                        </div>
                      </div>

                    )
                  })}
                </div>
              </div>
              {/* //second space  */}
              <h1>Basic Front-end websites</h1>
              <p className='subTitle'>These are  my basic level Frontend websites...</p>
              <div className='basicweb-grid'>
                {Sdata6.map((data, index) => {
                  return (
                    <a href={data.link}
                      target="_blank"
                      key={index}
                      rel="noreferrer noopener">
                      <div className='basicitem-grid'>
                        <div className='leftbasic'>
                          <img src={data.img} alt="" />
                        </div>
                        <div className='rightbasic'>
                          <h3>{data.name}</h3>
                          <p>{data.desc}</p>
                        </div>
                      </div>
                    </a>
                  )
                })}

              </div>

              {/* 3 space/// */}
              <h1>neoGCamp Level-0 Projects</h1>
              {sdata.length === 0 && <h3>{`No result found for "${val}"`}</h3>}
              <div className='hero-grid'>
                {Sdata3.filter((data) => {
                  if (query === "") {
                    return data;
                  }
                  else if (data.name.toLowerCase().includes(query.toLowerCase())) {
                    return data;
                  }

                }).map((data, index) => {
                  return (
                    <div className='hero-card' key={index}>
                      <div className='hero-cardItem'>
                        <h5>{data.ser}</h5>
                        <h2>{data.name}</h2>
                        <div className='hero-date'>
                          <span><BsCalendarDate />  {data.time}</span>
                        </div>
                        <p>{data.desc}</p>
                        <div className='hero-button'>
                          <button>Live project</button>
                          <button>Source code</button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
    </>
  )
}

export default Heroright