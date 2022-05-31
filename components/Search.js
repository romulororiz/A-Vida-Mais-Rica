import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from '@/styles/Search.module.css';

const Search = ({ sticky, headerBg }) => {
	return (
		<div className={styles.searchBox}>
			<input
				onBlur={e => (e.target.value = '')}
				type='text'
				className={`${styles.searchInput} ${sticky && styles.stickySearch} ${
					headerBg && styles.headerBgSearchInput
				}`}
				placeholder='Search...'
			/>

			<FaSearch
				className={`${styles.icon} ${sticky && styles.stickyIcon} ${
					headerBg && styles.headerBgIcon
				}`}
			/>
		</div>
	);
};

export default Search;
