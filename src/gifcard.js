import React from 'react';
import './App.css';

function GifCard(props){
    return(
        <div className="box">
            <img src={props.gif.images.fixed_height.url} />
        </div>
    )
}

export default GifCard;