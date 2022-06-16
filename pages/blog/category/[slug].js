import Layout from '@/components/Layout';
import React, { useEffect, useState } from 'react';
import { fetchAPI } from 'lib/api';
import Card from '@/components/Card';
import styles from '@/styles/CategoryPage.module.css';
import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa';
import Newsletter from '@/components/Newsletter';
import { useRouter } from 'next/router';

const CategoryPage = ({ category }) => {
	const [fullWidthNewsletter, setFullWidthNewsletter] = useState(false);

	const { name, articles, slug } = category.attributes;

	const router = useRouter();
	useEffect(() => {
		if (router.pathname === `/blog/category/[slug]`) {
			setFullWidthNewsletter(true);
		}
	});

	return (
		<Layout title={`${name} - A vida mais rica`}>
			<div className={styles.categoryPage}>
				<div className={styles.backToHome}>
					<Link href={'/'}>
						<a>
							<FaChevronLeft className={styles.icon} />
							Back to Home
						</a>
					</Link>
				</div>
				<h1 className={styles.heading}>{name}</h1>
				<div className={styles.postsGrid}>
					{articles.data &&
						articles.data.map(article => (
							<Card
								key={article.id}
								image={article.attributes.image}
								title={article.attributes.title}
								description={article.attributes.description}
								slug={`/blog/${article.attributes.slug}`}
								authorImage={article.attributes.author.data.attributes.image}
								authorName={article.attributes.author.data.attributes.name}
								publishedAt={article.attributes.publishedAt}
							/>
						))}
				</div>
				<Newsletter
					title={`Receba seu e-book gratuito`}
					lead={`Nos informe seu email para que possamos enviar seu e-book gratuito. Fique tranquilo, seu e-mail esta completamente seguro conosco.`}
					fullWidth={fullWidthNewsletter}
				/>
			</div>
		</Layout>
	);
};

export async function getStaticPaths() {
	const res = await fetchAPI('/categories');

	const { data } = res;

	const paths = data.map(category => ({
		params: {
			slug: category.attributes.slug,
		},
	}));

	return {
		paths,
		fallback: true,
	};
}

export async function getStaticProps({ params }) {
	const categoriesRes = await fetchAPI('/categories', {
		populate: {
			articles: {
				populate: ['image', 'author', 'author.image'],
			},
		},
		filters: {
			slug: params.slug,
		},
	});

	const { data } = categoriesRes;

	return {
		props: {
			category: data[0],
		},
		revalidate: 1,
	};
}

export default CategoryPage;
