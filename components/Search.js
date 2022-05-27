import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from '@/styles/Search.module.css';

const Search = () => {
	return (
		<div className={styles.searchBox}>
			<input
				type='text'
				className={styles.searchInput}
				placeholder='Search...'
			/>

			<FaSearch className={styles.icon} />
		</div>
	);
};

export default Search;
