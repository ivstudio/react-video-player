import React from 'react';
import VideoListItem  from '../video_player_list_item/video_list_item';
import './video_list.css';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}/>
    );
  });

  return (
      <div className="video-list list-group">
        {videoItems}
      </div>
  );
};

export default VideoList;