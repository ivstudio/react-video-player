import React from 'react';
import PropTypes from 'prop-types';
import PlaylistItem from './PlaylistItem/PlaylistItem';

const Playlist = ({ videos, handleSelect }) => {
	return (
		<div className="playlist">
			{videos.map(video => {
				return (
					<PlaylistItem
						handleSelect={handleSelect}
						key={video.etag}
						video={video}
					/>
				);
			})}
		</div>
	);
};

Playlist.propTypes = {
	videos: PropTypes.array,
	handleSelect: PropTypes.func
};

export default Playlist;
