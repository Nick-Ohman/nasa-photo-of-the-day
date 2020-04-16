import React from 'react';
import NasaLogo from './imgs/nasaLogo.jpeg'
import Container from './Container'

const Header = (props) => { // props from App.js



    return (
        <header className='header'>
            <Container>
                <img src={NasaLogo} alt="nasa logo"/>
                <h1>POTD!</h1>
                
                
                
            </Container>
        </header>


    );
};

export default Header;