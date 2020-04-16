import React from 'react';
import NasaLogo from './imgs/nasa.jpeg'

const Header = (props) => { // props from App.js



    return (
        <header className='header'>
            <div className='title'>
                <img src={NasaLogo}/>
                <h1>NASA POTD!</h1>
                <h2>{props.title}</h2>
                
                
            </div>
        </header>


    );
};

export default Header;