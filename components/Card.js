import React from 'react';
import styles from '@/styles/Card.module.css';
import Link from 'next/link';
import Moment from 'react-moment';
import NextImage from '@/components/Image';

const Card = ({
	image,
	hoverBtnLink,
	category,
	title,
	description,
	authorImage,
	authorName,
	publishedAt,
}) => {
	return (
		<div className={styles.card}>
			<div className={styles.cardHeader}>
				<div className={styles.cardImage}>
					<NextImage image={image} />
				</div>
				<Link href={hoverBtnLink}>Read More</Link>
			</div>
			<div className={styles.cardBody}>
				<span>{category ? category : ''}</span>
				<h4>{title}</h4>
				<p>{description.slice(0, 120)}...</p>
			</div>
			<div className={styles.cardFooter}>
				<div className={styles.user}>
					<div className={styles.userAvatar}>
						<NextImage image={authorImage} />
					</div>
					<div className={styles.userInfo}>
						<h5>{authorName}</h5>
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
