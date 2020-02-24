import React, { Component } from 'react';
import './video_view.css';

import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from '../../components/search/search_bar';
import VideoList from '../../components/video_player/video_player_list/video_list';
import VideoActive from '../../components/video_player/video_player_active/video_active';

const API_KEY = process.env.REACT_APP_YOUTUBE_KEY;

export default class VideoView extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('surf');
	}

	videoSearch(term) {
		YTSearch({ key: API_KEY, term: term }, videos => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		const videoSearch = _.debounce(term => {
			this.videoSearch(term);
		}, 300);

		return (
			<div className="video-pg">
				<header className="video-header">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<SearchBar
									placeholderText="Search"
									onSearchTermChange={videoSearch}
								/>
							</div>
						</div>
					</div>
				</header>

				<div role="main" className="container video-main">
					<div className="row">
						<div className="col-md-7">
							<VideoActive video={this.state.selectedVideo} />
						</div>

						<aside className="col-md-5">
							<VideoList
								onVideoSelect={selectedVideo =>
									this.setState({ selectedVideo })
								}
								videos={this.state.videos}
							/>
						</aside>
					</div>
				</div>
			</div>
		);
	}
}
