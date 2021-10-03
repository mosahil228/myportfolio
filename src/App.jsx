import React ,{useState} from 'react';
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import "./sass/Resp.css";

// import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  const [mode, setMode] = useState(0);
  const toggleMode=()=>{
    console.log("yes i am");
    if(mode===0){
      setMode(1);
      document.body.style.backgroundColor="#171c28";
    }
    else{
      setMode(0);
      document.body.style.backgroundColor="white";
    }
    
  }
  
  
  return (
    <div >
      <Navbar mode={mode} toggleMode={toggleMode}/>
      {/* <Switch >
        <Route exact path="/" component={Home}  />
        <Redirect to="/" />;
      </Switch> */}
      <Home mode={mode} toggleMode={toggleMode}/>
     
      <Footer />
    </div>
  );
};
export default App;
