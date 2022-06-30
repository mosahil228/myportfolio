import React,{useState} from 'react';
import HomeC from './Components/HomeC';
import Navbar from "./Navbar"




const Home = (props) => {
    const [mode, setMode] = useState(0);
    const toggleMode = () => {

      if (mode === 0) {
        setMode(1);
        document.body.style.backgroundColor = "#171c28";
      }
      else {
        setMode(0);
        document.body.style.backgroundColor = "white";
      }
  
    }
    return (
        <>
            <Navbar mode={mode} toggleMode={toggleMode} />
            <HomeC mode={mode} toggleMode={toggleMode} />
        </>
    )
}

export default Home;
