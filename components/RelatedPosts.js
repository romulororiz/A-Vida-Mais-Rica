import React, { useEffect, useState } from 'react';
import { fetchAPI } from 'lib/api';
import { useRouter } from 'next/router';
import RelatedPostsCard from './RelatedPostsCard';
import styles from '@/styles/RelatedPosts.module.css';

const RelatedPosts = ({ article }) => {
	const [articles, setArticles] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	// Get slug parameter
	const router = useRouter();
	const { slug } = router.query;

	// Get current article
	const currentArticle = article;

	// Filter out current article
	const filteredArticles = articles.filter(
		article => article.attributes.slug !== slug
	);

	// Define max posts to display
	const maxPosts = 3;

	// Get articles that matches category with current article without current article
	const relatedArticles = filteredArticles.filter(
		article =>
			article.attributes.category.data.attributes.name ===
			currentArticle.attributes.category.data.attributes.name
	);

	// todo
	// Placeholder message when there's no article
	// category selected
	// use useState for storage

	useEffect(() => {
		const fetchArticles = async () => {
			setIsLoading(true);
			try {
				const articlesRes = await fetchAPI('/articles', {
					populate: ['category, image'],
				});

				const { data } = articlesRes;

				if (data) {
					setArticles(data);
					setIsLoading(false);
				}
			} catch (error) {
				setIsLoading(false);
				throw new Error(`Error: ${error}`);
			}
		};
		fetchArticles();
	}, []);

	if (isLoading) {
		return <h2>Loading...</h2>; // Return spinner
	}

	return (
		<div className={styles.relatedPostsBox}>
			<h3 className={styles.heading}>Related Posts</h3>
			<div className={styles.relatedPosts}>
				{relatedArticles.slice(0, maxPosts).map(article => (
					<RelatedPostsCard key={article.id} article={article} />
				))}
			</div>
		</div>
	);
};

export default RelatedPosts;
