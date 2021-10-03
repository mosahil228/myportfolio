import React from 'react';
import HomeC from './Components/HomeC';



const Home = (props) => {
    
    return (
        <>
        <HomeC mode={props.mode} toggleMode={props.toggleMode} />
        </>
    )
}

export default Home;
