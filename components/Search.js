import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from '@/styles/Search.module.css';

const Search = ({ sticky }) => {
	return (
		<div className={styles.searchBox}>
			<input
				onBlur={e => (e.target.value = '')}
				type='text'
				className={`${styles.searchInput} ${sticky && styles.stickySearch}`}
				placeholder='Search...'
			/>

			<FaSearch className={`${styles.icon} ${sticky && styles.stickyIcon}`} />
		</div>
	);
};

export default Search;
