import React from 'react';
import RelatedPosts from './RelatedPosts';
import Newsletter from './Newsletter';
import styles from '@/styles/Sidebar.module.css';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Sidebar = ({ article }) => {
	return (
		<div className={styles.sidebar}>
			<RelatedPosts article={article} />
			<hr />
			<div className={styles.socialIcons}>
				<h3 className={styles.socialHeading}>Me Siga nas Redes Sociais</h3>
				<div className={styles.icons}>
					<a
						href='https://www.youtube.com/channel/UCcfxbN1sySfe1jouSpMJGFg'
						target='_blank'
						rel='noreferrer'
					>
						<FaYoutube className={`${styles.icon} ${styles.youtube}`} />
					</a>
					<a
						href='https://twitter.com/AVidamaisRica'
						target='_blank'
						rel='noreferrer'
					>
						<FaTwitter className={`${styles.icon} ${styles.twitter}`} />
					</a>
					<a
						href='https://www.instagram.com/avidamaisrica/'
						target='_blank'
						rel='noreferrer'
					>
						<FaInstagram className={`${styles.icon} ${styles.instagram}`} />
					</a>
				</div>
			</div>
			<hr />
			<Newsletter heading={`Newsletter`} />
			<hr />
		</div>
	);
};

export default Sidebar;
