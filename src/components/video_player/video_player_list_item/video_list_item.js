
import React from 'react';
import './video_list_item.css';

//const video = props.video; same as {video} using es6.
const VideoListItem = ({video, onVideoSelect})=> {

  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <article onClick={() => onVideoSelect(video)} className="video-item">
        <div className="video-item__media">
          <img alt={video.snippet.title} className="video-item__image" src={imageUrl}/>
        </div>
        <div className="video-item__body">
          <h2 className="video-item__tile">{video.snippet.title}</h2>
          <span className="video-item__channelTitle">{video.snippet.channelTitle}</span>
        </div>
    </article>
  );
};

export default VideoListItem;
