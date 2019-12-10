import './VideosItem.scss';
import React from 'react';


const VideoItem = (props) =>{
    return(
        <li onClick={()=> props.onVideoSelect(props.video)} className='videos-item'>
            <img
                className='videos-item__image'
                src={props.thumbnails.medium.url} 
                alt={props.title}
            />
            <h5>{props.title}</h5>
        </li>
    )
}

export default VideoItem;