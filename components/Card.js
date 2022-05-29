import React from 'react';
import styles from '@/styles/Card.module.css';
import Link from 'next/link';
import { getStrapiMedia } from 'lib/media';
import Moment from 'react-moment';

const Card = ({ article }) => {
	const { title, description, image, category, slug, author, publishedAt } =
		article.attributes;

	return (
		<Link href={`/posts/${slug}`}>
			<div className={styles.card}>
				<div className={styles.cardHeader}>
					<img
						src={getStrapiMedia(image)}
						alt='card__image'
						className={styles.cardImage}
					/>
				</div>
				<div className={styles.cardBody}>
					<span className={styles['tag' + 'tagBlue']}>
						{category.data.attributes.name}
					</span>
					<h4>{title}</h4>
					<p>{description}</p>
				</div>
				<div className={styles.cardFooter}>
					<div className={styles.user}>
						<img
							src={getStrapiMedia(author.data.attributes.picture)}
							alt='user__image'
							className={styles.userImage}
						/>
						<div className={styles.userInfo}>
							<h5>{author.data.attributes.name}</h5>
							<small>
								<Moment format='DD/MM/YYYY HH:mm'>{publishedAt}</Moment>
							</small>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Card;
