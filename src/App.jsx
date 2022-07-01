import React, { useState, useEffect } from 'react';
import Home from "./Home";
import Footer from "./Footer";
import "./sass/Resp.css";
import SyncLoader from "react-spinners/SyncLoader";
import { Switch, Route } from "react-router-dom";
import Project from './Project';

const App = () => {
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
 


  return (
    <div >
      {loading ? <div className="loadC"><SyncLoader
        color={"#0092E4"} loading={loading} size={18} margin={3} /> <h3>&#60; Code With Sahil /&#62;</h3></div> :<div>
        <Switch>
          <Route exact path="/" component={Home }/>
          <Route exact path="/projects" component={Project}/>
        </Switch>
        <Footer /></div>}
    </div>
  );

};
export default App;

