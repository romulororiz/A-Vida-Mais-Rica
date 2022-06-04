import React from 'react';
import styles from '@/styles/Card.module.css';
import Link from 'next/link';
import Moment from 'react-moment';
import NextImage from '@/components/Image';

const Card = ({ article }) => {
	const { title, description, category, image, slug, author, publishedAt } =
		article.attributes;

	return (
		<div className={styles.card}>
			<div className={styles.cardHeader}>
				<div className={styles.cardImage}>
					<NextImage image={image} />
				</div>
				<Link href={`/posts/${slug}`}>Read More</Link>
			</div>
			<div className={styles.cardBody}>
				<span>{category.data.attributes.name}</span>
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
			<div className={styles.cardFooter}>
				<div className={styles.user}>
					<div className={styles.userAvatar}>
						<NextImage image={author.data.attributes.image} />
					</div>
					<div className={styles.userInfo}>
						<h5>{author.data.attributes.name}</h5>
						<small>
							<Moment format='D MMM[,] YYYY [at] HH:mm A'>{publishedAt}</Moment>
						</small>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
