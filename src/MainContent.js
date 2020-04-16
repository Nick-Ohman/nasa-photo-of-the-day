import React from 'react';

const MainContent = (props) => {//props from app.js


    return(
        <div className='img container'>
            <img src={props.url} />
        </div>
    )
}

export default MainContent;