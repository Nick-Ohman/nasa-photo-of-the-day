import React from 'react';


const Header = (props) => { // props from App.js



    return (
        <header className='header'>
            <div className='title'>
                <h1>NASA POTD!</h1>
                <h2>{props.title}</h2>
                
            </div>
        </header>


    );
};

export default Header;