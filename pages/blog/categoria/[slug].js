import Layout from '@/components/Layout';
import React, { useEffect, useState } from 'react';
import { fetchAPI } from 'lib/api';
import { useRouter } from 'next/router';
import Newsletter from '@/components/Newsletter';
import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa';
import styles from '@/styles/CategoryPage.module.css';
import PaginatedPosts from '@/components/PaginatedPosts';

const CategoryPage = ({ category }) => {
	const [fullWidthNewsletter, setFullWidthNewsletter] = useState(false);
	const { name, articles } = category.attributes;

	const router = useRouter();
	useEffect(() => {
		if (router.pathname === `/blog/categoria/[slug]`) {
			setFullWidthNewsletter(true);
		}
	}, []);

	return (
		<Layout title={`${name} | A Vida + Rica`}>
			<div className={styles.categoryPage}>
				<div className={styles.backToHome}>
					<Link href={'/'}>
						<a>
							<FaChevronLeft className={styles.icon} />
							Voltar
						</a>
					</Link>
				</div>
				<h1 className={styles.heading}>{name}</h1>
				<PaginatedPosts
					itemsPerPage={6}
					category={category}
					articles={articles.data}
				/>
			</div>
			<Newsletter
				title={`Receba seu e-book gratuito`}
				lead={`Nos informe seu email para que possamos enviar seu e-book gratuito. Fique tranquilo, seu e-mail esta completamente seguro conosco.`}
				fullWidth={fullWidthNewsletter}
			/>
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
