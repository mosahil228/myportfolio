import React, { useState} from "react";
import Sdata ,{Sdata2} from "./Sdata";
import CloseIcon from "@material-ui/icons/Close";


const Homecc = () => {
 
  const [model, setModel] = useState(false);
  const [tempimgsrc, setTempImgsrc] = useState("");
  const getImg = (imgsrc) => {
    setTempImgsrc(imgsrc);
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgsrc} alt="123" />
        <CloseIcon  onClick={()=> setModel(false)} />
      </div>
      {Sdata.map((val,index) => {
        return (
          <div className="pic" key={index} onClick={() => getImg(val.imgsrc)}>
            <img  src={val.imgsrc}  alt="v1" />
          </div>
        );
      })}
    </>
  );
};
const Homecc2 = () => {
  const [model, setModel] = useState(false);
  const [tempimgsrc, setTempImgsrc] = useState("");
  const getImg = (imgsrc) => {
    setTempImgsrc(imgsrc);
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgsrc} alt="123" />
        <CloseIcon  onClick={()=> setModel(false)} />
      </div>
      {Sdata2.map((val,index) => {
        return (
          <div className="pic2" key={index} onClick={() => getImg(val.imgsrc)}>
            <img  src={val.imgsrc}  alt="v1" />
          </div>
        );
      })}
    </>
  );
};

export default Homecc;
export {Homecc2};
