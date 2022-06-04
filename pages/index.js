import Card from '@/components/Card';
import Layout from '@/components/Layout';
import styles from '@/styles/Home.module.css';
import { fetchAPI } from 'lib/api';

const HomePage = ({ articles }) => {
	return (
		<Layout>
			<div className={styles.latestPosts}>
				<div className={styles.postsGrid}>
					{articles.length ? (
						articles.map(article => <Card key={article.id} article={article} />)
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
