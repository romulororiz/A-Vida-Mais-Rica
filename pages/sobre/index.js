import Layout from '@/components/Layout';
import React from 'react';
import styles from '@/styles/AboutPage.module.css';
import NextImage from '@/components/Image';
import { fetchAPI } from 'lib/api';
import MarkdownView from 'react-showdown';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const About = ({ author }) => {
	const { name, image, about } = author[0].attributes;

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
							<a
								href='https://www.youtube.com/channel/UCcfxbN1sySfe1jouSpMJGFg'
								target='_blank'
								rel='noreferrer'
							>
								<FaYoutube className={`${styles.icon} ${styles.youtube}`} />
							</a>
							<a
								href='https://twitter.com/AVidamaisRica'
								target='_blank'
								rel='noreferrer'
							>
								<FaTwitter className={`${styles.icon} ${styles.twitter}`} />
							</a>
							<a
								href='https://www.instagram.com/avidamaisrica/'
								target='_blank'
								rel='noreferrer'
							>
								<FaInstagram className={`${styles.icon} ${styles.instagram}`} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export async function getServerSideProps() {
	const authorRes = await fetchAPI('/writers', { populate: '*' });

	const { data } = authorRes;

	return {
		props: {
			author: data,
		},
	};
}

export default About;
