import Layout from '@/components/Layout';
import React from 'react';
import styles from '@/styles/PostPage.module.css';
import { fetchAPI } from 'lib/api';
import NextImage from '@/components/Image';
import Moment from 'react-moment';
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/router';

const PostPage = ({ article }) => {
	const {
		title,
		description,
		category,
		content,
		image,
		slug,
		author,
		publishedAt,
	} = article.attributes;

	return (
		<Layout title={title}>
			{/* Title and Author section */}
			<div className={styles.postPage}>
				<div className={styles.headingBox}>
					<div className={styles.user}>
						<div className={styles.userAvatar}>
							<NextImage image={author.data.attributes.image} />
						</div>
						<div className={styles.userInfo}>
							<h5>{author.data.attributes.name}</h5>
							<small>
								<Moment format='D MMM[,] YYYY [at] HH:mm A'>
									{publishedAt}
								</Moment>
							</small>
						</div>
					</div>
					<div className={styles.postTitle}>
						<h1>{title}</h1>
					</div>
				</div>

				{/* Showcase - Post image / images (?) */}
				<div className={styles.postImage}>
					<NextImage image={image} />
					<sub>{description}</sub>
				</div>

				{/* Post Content */}
				<div className={styles.postContent}>
					<ReactMarkdown>{content}</ReactMarkdown>
				</div>
			</div>
		</Layout>
	);
};

export async function getStaticPaths() {
	const res = await fetchAPI('/articles');

	const { data } = res;

	const paths = data.map(article => ({
		params: { slug: article.attributes.slug },
	}));

	return {
		paths,
		fallback: true,
	};
}

export async function getStaticProps({ params: { slug } }) {
	const res = await fetchAPI('/articles', {
		populate: ['image', 'category', 'author', 'author.image'],
	});

	const { data } = res;

	return {
		props: {
			article: data.filter(art => art.attributes.slug === slug)[0],
		},
		revalidate: 1,
	};
}

export default PostPage;
