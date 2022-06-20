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

	console.log(authorImage);

	// Change category badge style depending on category name
	useEffect(() => {
		switch (category.slug) {
			case 'investimentos':
				setCategoryStyle(
					`${styles.InvestimentosCategoryBadge} ${styles.badgeStyle}`
				);
				break;
			case 'financas-pessoais':
				setCategoryStyle(
					`${styles.financasCategoryBadge} ${styles.badgeStyle}`
				);
				break;
			case 'empreender':
				setCategoryStyle(
					`${styles.empreenderCategoryBadge} ${styles.badgeStyle}`
				);
				break;
			default:
				break;
		}
	}, []);

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
					<div className={categoryStyle}>
						<Link href={`/blog/categoria/${category.slug}`}>
							<a>{category.name}</a>
						</Link>
					</div>

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
