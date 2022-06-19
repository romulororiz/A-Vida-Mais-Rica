import React from 'react';
import RelatedPosts from './RelatedPosts';
import Newsletter from './Newsletter';
import styles from '@/styles/Sidebar.module.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Sidebar = ({ article }) => {
	return (
		<div className={styles.sidebar}>
			<RelatedPosts article={article} />
			<hr />
			<div className={styles.socialIcons}>
				<h3 className={styles.socialHeading}>Follow me</h3>
				<div className={styles.icons}>
					<FaFacebook className={styles.icon} />
					<FaTwitter className={styles.icon} />
					<FaInstagram className={styles.icon} />
				</div>
			</div>
			<hr />
			<Newsletter heading={`Newsletter`} />
			<hr />
		</div>
	);
};

export default Sidebar;
