import React, { useState } from 'react';
import './search_bar.css';

const SearchBar = ({ placeholderText, onSearchTermChange }) => {
	const [term, setSterm] = useState('');

	const onInputChange = e => {
		setSterm(e.target.value);
		onSearchTermChange(e.target.value);
	};

	return (
		<div className="search__container">
			<input
				className="search__input"
				value={term}
				placeholder={placeholderText}
				onChange={onInputChange}
			/>
		</div>
	);
};

export default SearchBar;
