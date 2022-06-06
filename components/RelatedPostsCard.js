import React from 'react';
import NextImage from '@/components/Image';
import Moment from 'react-moment';
import styles from '@/styles/RelatedPostsCard.module.css';
import Link from 'next/link';

const RelatedPostsCard = ({ article }) => {
	const { title, slug, image, publishedAt } = article.attributes;

	return (
		<Link href={`/blog/${slug}`}>
			<div className={styles.card}>
				<div className={styles.cardImage}>
					<NextImage image={image} />
				</div>
				<div className={styles.cardBody}>
					<div className={styles.cardTitle}>
						<h4>{title}</h4>
					</div>
					<div className={styles.cardDate}>
						<small>
							<Moment format='D MMM[,] YYYY'>{publishedAt}</Moment>
						</small>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default RelatedPostsCard;
