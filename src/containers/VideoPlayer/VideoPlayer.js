import React, { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';
import YTSearch from 'youtube-api-search';

import SearchBar from '../../components/SearchHeader/SearchHeader';
import Playlist from '../../components/Playlist/Playlist';
import VideoMain from '../../components/VideoMain/VideoMain';

const API_KEY = process.env.REACT_APP_YOUTUBE_KEY;

const VideoPlayer = () => {
	const [activeVideo, setActiveVideo] = useState(null);
	const [videoList, setVideoList] = useState([]);

	const fetchVideos = term => {
		YTSearch({ key: API_KEY, term: term }, videos => {
			setActiveVideo(videos[0]);
			setVideoList(videos);
		});
	};

	useEffect(() => {
		fetchVideos('drummers');
	}, []);

	const onVideoSearch = debounce(term => fetchVideos(term), 500);
	const onVideoSelect = video => setActiveVideo(video);

	return (
		activeVideo && (
			<div className="video-player__page">
				<SearchBar handleSearch={onVideoSearch} />

				<main className="video-player">
					<VideoMain video={activeVideo} />
					<Playlist handleSelect={onVideoSelect} videos={videoList} />
				</main>
			</div>
		)
	);
};

export default VideoPlayer;
