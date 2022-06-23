import React from 'react';
import styles from '@/styles/FavPostCard.module.css';
import { getStrapiMedia } from '../lib/media';
import Moment from 'react-moment';
import Link from 'next/link';

const FavPostCard = ({ title, image, slug, category, publishedAt }) => {
	return (
		<Link href={slug}>
			<div
				className={styles.card}
				style={{
					backgroundImage: `url(${getStrapiMedia(image)})`,
				}}
			>
				<div className={styles.cardInfo}>
					<span>{title}</span>
					<span>{category.name}</span>
					<small>
						<Moment format='D MMM[,] YYYY'>{publishedAt}</Moment>
					</small>
				</div>
			</div>
		</Link>
	);
};

export default FavPostCard;
