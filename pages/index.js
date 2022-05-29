import Card from '@/components/Card';
import Layout from '@/components/Layout';
import styles from '@/styles/Home.module.css';

const Home = () => {
	return (
		<Layout>
			<section className={styles.latestPosts}>
				<h1 className={styles.heading}>
					<span>Latest Posts</span>
				</h1>
				<section className={styles.postsGrid}>
					<Card />
					<Card />
					<Card />
				</section>
			</section>
		</Layout>
	);
};

export default Home;
