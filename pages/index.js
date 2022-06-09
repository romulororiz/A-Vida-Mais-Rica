import Card from '@/components/Card';
import Layout from '@/components/Layout';
import Newsletter from '@/components/Newsletter';
import styles from '@/styles/Home.module.css';
import { fetchAPI } from 'lib/api';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const HomePage = ({ articles }) => {
	const [isHomepage, setIsHomepage] = useState(false);

	const router = useRouter();

	useEffect(() => {
		if (router.pathname === '/') {
			setIsHomepage(true);
		}
	});

	return (
		<Layout>
			<div className={styles.homepage}>
				<Newsletter
					title={`Receba seu e-book gratuito`}
					lead={`Nos informe seu email para que possamos enviar seu e-book gratuito. Fique tranquilo, seu e-mail esta completamente seguro conosco.`}
					homepage={isHomepage}
				/>
				<div className={styles.postsGrid}>
					{articles ? (
						articles.map(article => (
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
