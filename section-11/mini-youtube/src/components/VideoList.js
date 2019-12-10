import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) =>{
    const videos = props.videos.map((video) =>{
        return (
            <VideoItem
                key={video.id.videoId}
                video={video}
                title={video.snippet.title}
                videoId={video.id.videoId}
                thumbnails={video.snippet.thumbnails}
                onVideoSelect={props.onVideoSelect}
            />
        );
    })

    return (
            <ul style={{margin: 0}}>
                {videos}
            </ul>
    ) 
}

export default VideoList;