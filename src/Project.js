import React,{useState,useEffect} from 'react'
import Pnavbar from './Pnavbar'
import Phome from './Components/Phome';
import SyncLoader from "react-spinners/SyncLoader";

const Project = (props) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let cancel = false;
    setLoading(true)
    setTimeout(() => {
      if (cancel) return;
      setLoading(false)
    }, 2000);
    return () => { 
      cancel = true;
    }
    
  }, []);
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
    <div>
    {loading ? <div className="loadC"><SyncLoader
        color={"#0092E4"} loading={loading} size={18} margin={3} /> <h3>&#60; Code With Sahil /&#62;</h3></div> :<div>
      <Pnavbar mode={mode} toggleMode={toggleMode}/>
      <Phome mode={mode} toggleMode={toggleMode}/></div>}
    </div>
  )
}

export default Project