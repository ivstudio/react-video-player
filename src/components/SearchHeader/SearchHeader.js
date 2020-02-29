import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchHeader = ({ handleSearch }) => {
	const [term, setSterm] = useState('');

	const onInputChange = e => {
		setSterm(e.target.value);
		handleSearch(e.target.value);
	};

	return (
		<div className="search-header">
			<input
				value={term}
				placeholder="Search"
				onChange={onInputChange}
				className="search-header__input"
			/>
		</div>
	);
};

SearchHeader.propTypes = {
	SearchHeader: PropTypes.func
};

export default SearchHeader;
