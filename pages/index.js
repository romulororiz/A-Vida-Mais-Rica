import Card from '@/components/Card';
import Layout from '@/components/Layout';
import styles from '@/styles/Home.module.css';
import { fetchAPI } from 'lib/api';
import { useEffect, useState } from 'react';

const HomePage = ({ articles }) => {
	return (
		<Layout>
			<div className={styles.latestPosts}>
				<h1>Posts</h1>
				<div className={styles.postsGrid}>
					{articles ? (
						articles.map(article => (
							<Card
								key={article.id}
								image={article.attributes.image}
								title={article.attributes.title}
								description={article.attributes.description}
								hoverBtnLink={`/blog/${article.attributes.slug}`}
								category={article.attributes.category.data.attributes.name}
								authorImage={article.attributes.author.data.attributes.image}
								authorName={article.attributes.author.data.attributes.name}
								publishedAt={article.attributes.publishedAt}
							/>
						))
					) : (
						<h2>No Articles to show</h2>
					)}
				</div>
			</div>
		</Layout>
	);
};

export async function getStaticProps() {
	const articlesRes = await fetchAPI('/articles', {
		populate: ['image', 'category', 'author', 'author.image'],
	});

	const { data } = articlesRes;

	return {
		props: {
			articles: data,
		},
		revalidate: 1,
	};
}

export default HomePage;
