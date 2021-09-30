import React from "react";
import c3 from "../images/c3.jpg";
import Button from "@material-ui/core/Button";

const Card = () => {
  return (
    <>
      <div className="sCard">
        <div className="cardItem">
          <div>
            <img src={c3} alt="crd" />
            <h1>Css Navbar</h1>
            <p>
              {" "}
              Whether you work in machine learning or finance, or are pursuing a
              career in web development or data science, Python is one of the
              most important skills you can learn.
            </p>
            <Button>
              <span>Watch video</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
