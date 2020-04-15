import React from 'react';



const Header = (props) => {



    return (
        <header className='header'>
            <div className='title'>
                <h1>Nasa Photo Of The Day!</h1>
                <h2>{props.title}</h2>
                <h2>{props.copyright}</h2>
            </div>
        </header>


    );
};

export default Header;