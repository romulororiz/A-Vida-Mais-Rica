import Layout from '@/components/Layout';
import React from 'react';
import styles from '@/styles/AboutPage.module.css';
import NextImage from '@/components/Image';
import { fetchAPI } from 'lib/api';
import MarkdownView from 'react-showdown';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const About = ({ author }) => {
	const { name, image, about } = author[0].attributes;

	console.log(author);

	return (
		<Layout title='Sobre mim | A Vida + Rica'>
			<div className={styles.aboutPage}>
				<div className={styles.card}>
					<div className={styles.authorImage}>
						<NextImage image={image} />
					</div>
					<div className={styles.authorInfo}>
						<h2 className={styles.name}>{name}</h2>
						<h4 className={styles.title}>Fundador do site A Vida Mais Rica</h4>
						<div className={styles.content}>
							<MarkdownView markdown={about} />
						</div>
					</div>
					<div className={styles.socialIcons}>
						<h3 className={styles.socialHeading}>Me siga nas Redes Sociais</h3>
						<div className={styles.icons}>
							<FaFacebook className={styles.icon} />
							<FaTwitter className={styles.icon} />
							<FaInstagram className={styles.icon} />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export async function getStaticProps() {
	const authorRes = await fetchAPI('/writers', { populate: '*' });

	const { data } = authorRes;

	return {
		props: {
			author: data,
		},
		revalidate: 1,
	};
}

export default About;
