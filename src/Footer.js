import React from 'react';


const Footer = (props) => {/// props from App.js
    console.log(props)

    return (
        <footer className='footer'>
            <div className='title'>
                <p>{props.exp}</p>
                <p>{props.date}</p>
                <p>{props.copyright}</p>
            </div>
        </footer>
    );

};


export default Footer;