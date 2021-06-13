import React from 'react';
import './App.css';

function GifCard(props){
    return(
        <div className="box">
            <img src={props.gif.images.downsized_medium.url} />
        </div>
    )
}

export default GifCard;