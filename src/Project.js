import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi';
import { CgMenuLeft } from 'react-icons/cg';
import { GiCrossMark } from 'react-icons/gi';
import { BsCalendarDate } from 'react-icons/bs';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Sdata10, Sdata11, Sdata2, Sdata3, Sdata4, Sdata5, Sdata6, Sdata7 ,Sdata8,Sdata9} from './data/Sdata';
import Mdata from './data/Mdata';
import Footer2 from './Components/Footer2';
import Navbar2 from './Components/Navbar2';
import svg1 from "./images/svgexport-1.svg"
const Project = () => {
  const [query, setQuery] = useState("");
  const [bar, setBar] = useState("hiddenBar3");


  const toggleBar = () => {
    if (bar === "hiddenBar3") {
      setBar(`${"hiddenBar3"} ${"hLeft3"}`);
    } else {
      setBar("hiddenBar3");
    }
  }
  const closeHam = () => {
    if (bar === `${"hiddenBar3"} ${"hLeft3"}`) {
      setBar("hiddenBar3");
    } else {
      setBar(`${"hiddenBar3"} ${"hLeft3"}`);
    }

  }

  const sdata = Mdata.filter((data) => data.name.toLowerCase().includes(query.toLowerCase()));
  let val = query
 


  return (

    <div className='mainProject'>
      <Navbar2 />
      <section className='project-section project-section2'>
        {bar && <div className={bar}>
          <section className='project-section '>
            <div className='container-p'>
              <div className='hero-section hero-sectionHam'>
                <div className='hero-left2'>
                  <div className='hamItem'>
                    <h1>LIVE PROJECTS</h1>
                    <GiCrossMark onClick={closeHam} />
                  </div>
                  <h1 className='leftHeading'>Top Project</h1>
                  {Sdata5.map((data, index) => {
                    return (
                      <a href={data.link}
                        key={index}
                        target="_blank"
                        rel="noreferrer noopener">
                        <div className='hleft-item' >
                          <div className='h-imgBox'>
                            <img src={data.img} alt="" />
                          </div>
                          <span>{data.name}</span>
                        </div></a>
                    )
                  })}
                  <h1 className='leftHeading lHmargin2'>Frontend projects</h1>
                  {Sdata7.map((data, index) => {
                    return (
                      <a href={data.link}
                        key={index}
                        target="_blank"
                        rel="noreferrer noopener">
                        <div className='hleft-item' >
                          <div className='h-imgBox'>
                            <img src={data.img} alt="" />
                          </div>
                          <span>{data.name}</span>
                        </div>
                      </a>
                    )
                  })}
                  <h1 className='leftHeading lHmargin2'>Fetch-API's App</h1>
                  {Sdata9.map((data, index) => {
                    return (
                      <a href={data.link}
                        key={index}
                        target="_blank"
                        rel="noreferrer noopener">
                        <div className='hleft-item' >
                          <div className='h-imgBox'>
                            <img src={data.img} alt="" />
                          </div>
                          <span>{data.name}</span>
                        </div>
                      </a>
                    )
                  })}
                  <h1 className='leftHeading lHmargin2'>Smart apps</h1>
                  {Sdata11.map((data, index) => {
                    return (
                      <a href={data.link}
                        key={index}
                        target="_blank"
                        rel="noreferrer noopener">
                        <div className='hleft-item' >
                          <div className='h-imgBox'>
                            <img src={data.img} alt="" />
                          </div>
                          <span>{data.name}</span>
                        </div>
                      </a>
                    )
                  })}
                  <h1 className='leftHeading lHmargin2'>neoGCamp Project</h1>
                  {Sdata2.map((data, index) => {
                    return (
                      <div className='hleft-item' key={index}>
                        <div className='h-imgBox'>
                          <img src={data.img} alt="" />
                        </div>
                        <span>{data.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

            </div>
            <div className='rainbox'></div>
          </section>
        </div>}
        <div className='container-p'>
          <div className='search-sec'>
            <h1>LIVE PROJECTS </h1>
            <div className='hamburger' onClick={toggleBar}>
              <div className='hamDiv'>
                <CgMenuLeft />
              </div>

            </div>
            <div className='search-menu'>
              <div className='search-icon'>
                <BiSearch />
              </div>
              <input type="search" placeholder="Search my projects..." onChange={e => setQuery(e.target.value)} />
            </div>
          </div>
        </div>
      </section>
      <section className='project-section project-height'>
        <div className='container-p'>
          <div className='hero-section'>
            <div className='hero-left'>
              <h1 className='leftHeading'>Top Project</h1>
              {Sdata5.map((data, index) => {
                return (
                  <a href={data.link}
                    target="_blank"
                    key={index}
                    rel="noreferrer noopener">

                    <div className='hleft-item' key={index}>
                      <div className='h-imgBox'>
                        <img src={data.img} alt="" />
                      </div>
                      <span>{data.name}</span>
                    </div></a>
                )
              })}
              <h1 className='leftHeading lHmargin'>Frontend projects</h1>
              {Sdata7.map((data, index) => {
                return (
                  <a href={data.link}
                    target="_blank"
                    key={index}
                    rel="noreferrer noopener">
                    <div className='hleft-item'>
                      <div className='h-imgBox'>
                        <img src={data.img} alt="" />
                      </div>
                      <span>{data.name}</span>
                    </div>
                  </a>
                )
              })}
              <h1 className='leftHeading lHmargin'>Fetch-API's App</h1>
              {Sdata8.map((data, index) => {
                return (
                  <a href={data.link}
                    target="_blank"
                    key={index}
                    rel="noreferrer noopener">
                    <div className='hleft-item'>
                      <div className='h-imgBox'>
                        <img src={data.img} alt="" />
                      </div>
                      <span>{data.name}</span>
                    </div>
                  </a>
                )
              })}
              <h1 className='leftHeading lHmargin'>Smart apps</h1>
              {Sdata11.map((data, index) => {
                return (
                  <a href={data.link}
                    target="_blank"
                    key={index}
                    rel="noreferrer noopener">
                    <div className='hleft-item'>
                      <div className='h-imgBox'>
                        <img src={data.img} alt="" />
                      </div>
                      <span>{data.name}</span>
                    </div>
                  </a>
                )
              })}
              <h1 className='leftHeading lHmargin'>neoGCamp Project</h1>
              {Sdata2.map((data, index) => {
                return (
                  <div className='hleft-item' key={index}>
                    <div className='h-imgBox'>
                      <img src={data.img} alt="" />
                    </div>
                    <span>{data.name}</span>
                  </div>
                )
              })}

            </div>

            {/* i am work here  */}
            <div className='hero-right'>
              {sdata.length!==0&&<div className='topProject-section'>
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
              </div>}
              {/* //second space  */}
              {sdata.length === 0 && <h3>{`No result found for "${val}"`}</h3>}
              <h1 className='brightH1'>Basic <span>Front-end</span> websites</h1>
              <p className='subTitle'>These are  my basic level Frontend websites.</p>
              <div className='basicweb-grid'>
                {Sdata6.filter((data) => {
                    if (query === "") {
                      return data;
                    }
                    else if (data.name.toLowerCase().includes(query.toLowerCase())) {
                      return data;
                    }

                  }).map((data, index) => {
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
              {/* //third space  */}
              <h1 className='brightH1'>Project using <span>fetch API's</span></h1>
              <p className='subTitle'>These are ReactJS, Javascript, expressJS apps using fetch API's.</p>
              <div className='basicweb-grid'>
                {Sdata8.filter((data) => {
                    if (query === "") {
                      return data;
                    }
                    else if (data.name.toLowerCase().includes(query.toLowerCase())) {
                      return data;
                    }

                  }).map((data, index) => {
                  return (
                    <a href={data.link}
                      target="_blank"
                      key={index}
                      rel="noreferrer noopener">
                      <div className='basicitem-grid basicitem-dark'>
                        <div className='leftbasic'>
                          <img src={data.img} alt="" />
                        </div>
                        <div className='rightbasic right-dark'>
                          <h3>{data.name}</h3>
                          <p>{data.desc}</p>
                        </div>
                      </div>
                    </a>
                  )
                })}

              </div>
              {/* //four space  */}
              <h1 className='brightH1'>Smart <span>React</span> and <span>JavaScript</span> apps</h1>
              <p className='subTitle'>These are useful smart apps using react and JavaScript</p>
              <div className='basicweb-grid'>
                {Sdata10.filter((data) => {
                    if (query === "") {
                      return data;
                    }
                    else if (data.name.toLowerCase().includes(query.toLowerCase())) {
                      return data;
                    }

                  }).map((data, index) => {
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

              {/* five space/// */}
              <h1 className='brightH1'>neoGCamp <span>Level-0</span> Projects</h1>
              <p className='subTitle'>These are neoGCamp level-0 assignment apps.</p>
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
          </div>
        </div>
      </section>
      <Footer2 />
    </div>
  )
}

export default Project