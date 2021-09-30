import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import "./sass/Resp.css";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} smooth={true} />
        <Redirect to="/" />;
      </Switch>
      <Footer />
    </>
  );
};
export default App;
