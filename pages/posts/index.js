import React from 'react';
import Layout from '@/components/Layout';
import styles from '@/styles/PostsPage.module.css';

const PostsPage = () => {
	return (
		<Layout>
			<div className={styles.postPage}>
				<h1>Posts</h1>
			</div>
		</Layout>
	);
};

export default PostsPage;
