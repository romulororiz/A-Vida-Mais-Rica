import Card from '@/components/Card';
import Layout from '@/components/Layout';
import styles from '@/styles/Home.module.css';
import { API_URL } from '@/config/index';
import qs from 'qs';

const HomePage = ({ articles }) => {
	return (
		<Layout>
			<section className={styles.latestPosts}>
				<section className={styles.postsGrid}>
					{articles.map(article => (
						<Card key={article.id} article={article} />
					))}
				</section>
			</section>
		</Layout>
	);
};

export async function getStaticProps() {
	const query = qs.stringify({
		populate: ['image', 'category', 'author', 'author.picture'],
	});
	const res = await fetch(`${API_URL}/api/articles?${query}`);
	const { data } = await res.json();

	return {
		props: {
			articles: data,
		},
		revalidate: 1,
	};
}

export default HomePage;
