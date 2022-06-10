import Card from '@/components/Card';
import Layout from '@/components/Layout';
import Newsletter from '@/components/Newsletter';
import { fetchAPI } from 'lib/api';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { API_URL } from '../config';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from '@/styles/Home.module.css';

const HomePage = ({ articles, meta }) => {
	const [isHomepage, setIsHomepage] = useState(false);
	const [allArticles, setAllArticles] = useState(articles);
	const [hasMore, setHasMore] = useState(true);

	// Self explanatory - Get value for when on Homepage
	const router = useRouter();
	useEffect(() => {
		if (router.pathname === '/') {
			setIsHomepage(true);
		}
	});

	// Infinite Scroll handler - Get next articles
	const getNextArticles = async () => {
		// Loading starts on article 5 and loads 4 more each time after that
		const res = await fetch(
			`${API_URL}/api/articles?pagination[start]=${allArticles.length}&pagination[limit]=4&populate=*`
		);
		const { data } = await res.json();

		setAllArticles([...allArticles, ...data]);
	};

	useEffect(() => {
		setHasMore(meta.pagination.total > allArticles.length ? true : false);
	}, [allArticles]);

	return (
		<Layout>
			<div className={styles.homepage}>
				<Newsletter
					title={`Receba seu e-book gratuito`}
					lead={`Nos informe seu email para que possamos enviar seu e-book gratuito. Fique tranquilo, seu e-mail esta completamente seguro conosco.`}
					homepage={isHomepage}
				/>
				<InfiniteScroll
					className={styles.postsGrid}
					dataLength={allArticles.length}
					next={getNextArticles}
					loader={<h4>Loading...</h4>}
					hasMore={hasMore}
				>
					{allArticles &&
						allArticles.map(article => (
							<Card
								key={article.id}
								image={article.attributes.image}
								title={article.attributes.title}
								description={article.attributes.description}
								slug={`/blog/${article.attributes.slug}`}
								category={article.attributes.category.data.attributes.name}
								authorImage={article.attributes.author.data.attributes.image}
								authorName={article.attributes.author.data.attributes.name}
								publishedAt={article.attributes.publishedAt}
							/>
						))}
				</InfiniteScroll>
				{!hasMore && <p className={styles.endMessage}>Você chegou ao fim</p>}
			</div>
		</Layout>
	);
};

export async function getStaticProps() {
	const articlesRes = await fetchAPI('/articles', {
		populate: ['image', 'category', 'author', 'author.image'],
		pagination: {
			pageSize: 4,
		},
	});

	const articles = articlesRes;

	return {
		props: {
			articles: articles.data,
			meta: articles.meta,
		},
		revalidate: 1,
	};
}

export default HomePage;
