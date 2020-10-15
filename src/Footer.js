import React from 'react';
import Container from './Container'


const Footer = (props) => {/// props from App.js
    console.log(props)

    return (
        <footer className='footer'>
            <Container>
            <h2>{props.title}</h2>
                <p>{props.exp}</p>
                <p>{props.date}</p>
                <p>{props.copyright}</p>
            </Container>
        </footer>
    );

};


export default Footer;