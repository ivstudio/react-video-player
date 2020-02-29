import React from 'react';
import PropTypes from 'prop-types';

const VideoItem = ({ video, handleSelect }) => {
	const { title, channelTitle, thumbnails } = video.snippet;
	const onHandleSelect = () => {
		handleSelect(video);
	};

	return (
		<article onClick={onHandleSelect} className="playlist-item">
			<div className="playlist-item__media">
				<img
					alt={title}
					className="playlist-item__image"
					src={thumbnails.medium.url}
				/>
			</div>
			<div className="playlist-item__container">
				<h3 className="playlist-item__title">{title}</h3>
				<span className="playlist-item__channel">{channelTitle}</span>
			</div>
		</article>
	);
};

VideoItem.propTypes = {
	video: PropTypes.object,
	handleSelect: PropTypes.func
};

export default VideoItem;
