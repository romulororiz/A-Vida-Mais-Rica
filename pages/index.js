import Card from '@/components/Card';
import Layout from '@/components/Layout';
import Newsletter from '@/components/Newsletter';
import { fetchAPI } from 'lib/api';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from '@/styles/Home.module.css';
import FavPostCard from '@/components/FavPostCard';

const HomePage = ({ articles, meta, favArticles }) => {
	const [fullWidthNewsletter, setFullWidthNewsletter] = useState(false);
	const [allArticles, setAllArticles] = useState(articles);
	const [hasMore, setHasMore] = useState(true);
	const [isLoading, setIsLoading] = useState(true);

	// Self explanatory - Get value for when on Homepage
	const router = useRouter();
	useEffect(() => {
		if (router.pathname === '/') {
			setFullWidthNewsletter(true);
		}
	}, []);

	// Infinite Scroll handler - Get next articles
	const getNextArticles = async () => {
		setIsLoading(true);
		try {
			// Loading starts on article 5 and loads 4 more each time after that
			const res = await fetchAPI('/articles', {
				populate: ['image', 'category', 'author', 'author.image'],
				pagination: {
					limit: 2,
					start: allArticles.length,
				},
				sort: ['publishedAt:desc'],
			});
			const { data } = res;

			console.log(data);

			setAllArticles([...allArticles, ...data]);

			setIsLoading(false);
		} catch (error) {
			console.error(`Error: ${error}`);
		}
	};

	useEffect(() => {
		setHasMore(meta.pagination.total > allArticles.length ? true : false);
	}, [allArticles]);

	return (
		<Layout>
			<div className={styles.homepage}>
				<section>
					<div className={styles.heading}>
						<span>Artigos mais lidos</span>
					</div>
					<div className={styles.favoritePostsBox}>
						{favArticles ? (
							favArticles
								.slice(0, 3)
								.map((article, index) => (
									<FavPostCard
										key={article.id + index}
										title={article.attributes.title}
										image={article.attributes.image}
										slug={`/blog/${article.attributes.slug}`}
										category={article.attributes.category.data.attributes}
										publishedAt={article.attributes.publishedAt}
									/>
								))
						) : (
							<h3>Sem Artigos para mostrar</h3>
						)}
					</div>
				</section>
				<section>
					<Newsletter
						title={`Receba seu e-book gratuito`}
						lead={`Nos informe seu email para que possamos enviar seu e-book gratuito. Fique tranquilo, seu e-mail esta completamente seguro conosco.`}
						fullWidth={fullWidthNewsletter}
					/>
				</section>
				<section>
					<InfiniteScroll
						className={styles.postsGrid}
						dataLength={allArticles.length}
						next={getNextArticles}
						hasMore={hasMore}
					>
						{allArticles &&
							allArticles.map(article => (
								<Card
									key={article.id}
									image={article.attributes.image}
									title={article.attributes.title}
									content={article.attributes.content}
									description={article.attributes.description}
									slug={`/blog/${article.attributes.slug}`}
									category={article.attributes.category.data.attributes}
									authorImage={article.attributes.author.data.attributes.image}
									authorName={article.attributes.author.data.attributes.name}
									publishedAt={article.attributes.publishedAt}
								/>
							))}
					</InfiniteScroll>
					{isLoading && <h4 className={styles.loadingMessage}>Loading...</h4>}
					{!hasMore && <p className={styles.endMessage}>Você chegou ao fim</p>}
				</section>
			</div>
		</Layout>
	);
};

export async function getStaticProps() {
	const articlesRes = await fetchAPI('/articles', {
		populate: ['image', 'category', 'author', 'author.image'],
		pagination: {
			limit: 2,
		},
		sort: ['publishedAt:desc'],
	});

	const favoritesRes = await fetchAPI('/articles', {
		populate: ['image', 'category', 'author', 'author.image'],
		filters: {
			favorite: {
				$eq: true,
			},
		},
	});

	return {
		props: {
			favArticles: favoritesRes.data,
			articles: articlesRes.data,
			meta: articlesRes.meta,
		},
		revalidate: 1,
	};
}

export default HomePage;
