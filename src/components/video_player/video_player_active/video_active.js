import React from 'react';
import './video_active.css';

const VideoActive = ({video}) => {

  if(!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-active">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="video-active__body">
        <h2 className="video-active__title">{video.snippet.title}</h2>
        <p className="video-active__description">{video.snippet.description}</p>
        <span className="video-active__channel">{video.snippet.channelTitle}</span>
      </div>
    </div>
  );
};

export default VideoActive;