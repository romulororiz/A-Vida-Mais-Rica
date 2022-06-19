import React, { useEffect, useState } from 'react';
import styles from '@/styles/Card.module.css';
import Link from 'next/link';
import Moment from 'react-moment';
import NextImage from '@/components/Image';

const Card = ({
	image,
	slug,
	category,
	title,
	description,
	authorImage,
	authorName,
	publishedAt,
}) => {
	const [categoryStyle, setCategoryStyle] = useState(`${styles.badgeStyle}`);

	// Change category badge style depending on category name
	// useEffect(() => {
	// 	switch (category) {
	// 		case 'Food':
	// 			setCategoryStyle(`${styles.foodCategoryBadge}`);
	// 			break;
	// 		case 'Nature':
	// 			setCategoryStyle(`${styles.natureCategoryBadge}`);
	// 			break;
	// 		case 'Tech':
	// 			setCategoryStyle(`${styles.techCategoryBadge}`);
	// 			break;
	// 		case 'News':
	// 			setCategoryStyle(`${styles.newsCategoryBadge}`);
	// 			break;
	// 		case 'Information':
	// 			setCategoryStyle(`${styles.informationCategoryBadge}`);
	// 			break;
	// 		default:
	// 			break;
	// 	}
	// }, []);

	return (
		<Link href={slug}>
			<div className={styles.card}>
				<div className={styles.cardHeader}>
					<div className={styles.cardImage}>
						<NextImage image={image} />
					</div>
					{slug ? <Link href={slug}>Saiba Mais</Link> : ''}
				</div>
				<div className={styles.cardBody}>
					{category ? (
						<Link
							className={categoryStyle}
							href={`/blog/category/${category.slug}`}
						>
							{category.name}
						</Link>
					) : (
						''
					)}
					<h4>{title ? title : ''}</h4>
					{description ? (
						<p>
							{description.slice(0, 120)}
							{description.length > 120 && '...'}
						</p>
					) : (
						''
					)}
				</div>
				<div className={styles.cardFooter}>
					<div className={styles.user}>
						{authorImage ? (
							<div className={styles.userAvatar}>
								<NextImage image={authorImage} />
							</div>
						) : (
							''
						)}
						<div className={styles.userInfo}>
							{authorName ? <h5>{authorName}</h5> : ''}
							<small>
								<Moment format='D MMM[,] YYYY [at] HH:mm A'>
									{publishedAt}
								</Moment>
							</small>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Card;
