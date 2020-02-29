import React from 'react';
import PropTypes from 'prop-types';

const VideoMain = ({ video }) => {
	if (!video) {
		return <div>Loading...</div>;
	}
	const { title, description, channelTitle } = video.snippet;
	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<section className="video-main">
			<div className="video-main__embed-responsive">
				<iframe
					src={url}
					title={title}
					className="video-main__embed-responsive-item"></iframe>
			</div>

			<div className="video-main__content">
				<h3 className="video-main__content-title">{title}</h3>
				<p className="video-main__content-description">{description}</p>
				<span className="video-main__content-channel">
					{channelTitle}
				</span>
			</div>
		</section>
	);
};

VideoMain.propTypes = {
	videos: PropTypes.object
};

export default VideoMain;
