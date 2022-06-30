
import React,{useState} from 'react'
const MuiSwitch = (props) => {
  const [transform, settransform] = useState(false);
  const changeColor = () => {
    if (!transform) {
      settransform(true);
    } else {
      settransform(false);
    }
  }

  return (
    <div>
      <div className='tDiv' onClick={() => {props.toggleMode(); changeColor();}}>
        <div className={transform ? "tBox tBoxX" : "tBox"}></div>
      </div>
    </div>
  )
}


export default MuiSwitch
