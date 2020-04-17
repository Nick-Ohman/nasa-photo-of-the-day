import React from 'react';
import NasaLogo from './imgs/nasaLogo.jpeg'
import Container from './Container'

const Header = (props) => { // props from App.js



    return (
        <header className='header'>
            <Container>
                <div className='img'>
                <img src={NasaLogo} alt="nasa logo"/>
                </div>
                <h1>POTD!</h1>
                
                
                
            </Container>
        </header>


    );
};

export default Header;