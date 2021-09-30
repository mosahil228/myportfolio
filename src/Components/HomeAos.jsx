import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
const HomeAos=()=>{
    useEffect(()=>{
      AOS.init({duration :2000});
    }
    )
    return(
      <>
      <section  className="dealSection">
          <div data-aos="fade-up" className="categories flex justify-center align-items">
            <h1> --Beautiful Gallery Section--</h1>
          </div>
        </section>
      </>
    )
  
  
  }
  export default HomeAos;