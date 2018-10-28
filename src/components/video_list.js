import React from 'react';
import VideoListItem from './video_list_item';
import './compstyles.css';

const VideoList =(props) => {
    const videoItem = props.videos.map((video)=>{
        return (
        <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag} 
        video={video} />);
    });
return(
    <ul id="ul" className="col-md-4 list-group">
     {videoItem}
    </ul>
);
}

export default VideoList;