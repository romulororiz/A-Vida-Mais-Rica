import React, { useCallback, useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from '@/styles/Search.module.css';
import { fetchAPI } from 'lib/api';
import SearchCard from './SearchCard';

const Search = ({ sticky, headerBg }) => {
	// todo
	// put comments in this component

	const [query, setQuery] = useState('');
	const [active, setActive] = useState(false);
	const [results, setResults] = useState([]);
	const { data } = results;

	const searchRef = useRef(null);

	const onChange = useCallback(e => {
		const query = e.target.value;
		setQuery(query);

		if (query.length) {
			fetchAPI('/articles', {
				populate: ['image', 'category', 'author'],
				filters: {
					$or: [
						{
							title: {
								$containsi: query,
							},
						},
						{
							content: {
								$containsi: query,
							},
						},
						{
							category: {
								name: {
									$containsi: query,
								},
							},
						},
					],
				},
			}).then(data => setResults(data));
		} else {
			setResults([]);
		}
	}, []);

	const onFocus = useCallback(() => {
		setActive(true);
		window.addEventListener('click', onClick);
	}, []);

	const onClick = useCallback(event => {
		if (searchRef.current && !searchRef.current.contains(event.target)) {
			setActive(false);
			window.removeEventListener('click', onClick);
		}
		setQuery('');
		setResults([]);
	}, []);

	return (
		<div className={styles.searchBox} ref={searchRef}>
			<input
				onBlur={e => (e.target.value = '')}
				type='text'
				className={`${styles.searchInput} ${sticky && styles.stickySearch} ${
					headerBg && styles.headerBgSearchInput
				}`}
				placeholder='Search...'
				onChange={onChange}
				onFocus={onFocus}
				value={query}
			/>

			<FaSearch
				className={`${styles.icon} ${sticky && styles.stickyIcon} ${
					headerBg && styles.headerBgIcon
				}`}
			/>

			{data && active && (
				<ul className={styles.searchResults}>
					{data.slice(0, 5).sort().map(result => (
						<SearchCard result={result} />
					))}
				</ul>
			)}
		</div>
	);
};

export default Search;
