import React from 'react';
import Enavbar from './Enavbar';

const Navbar=(props)=>{
   
    
    return(
        <>
        <Enavbar mode={props.mode} toggleMode={props.toggleMode} />
        </>
    )
}
export default Navbar;
