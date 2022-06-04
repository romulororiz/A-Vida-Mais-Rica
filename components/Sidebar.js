import React, { useEffect } from 'react';
import styles from '@/styles/Sidebar.module.css';
import RelatedPosts from './RelatedPosts';

const Sidebar = ({ article }) => {
	return (
		<div className={styles.sidebar}>
			<RelatedPosts article={article} />
		</div>
	);
};

export default Sidebar;
