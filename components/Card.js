import React, { useEffect, useState } from 'react';
import styles from '@/styles/Card.module.css';
import Link from 'next/link';
import Moment from 'react-moment';
import NextImage from '@/components/Image';
import MarkdownView from 'react-showdown';

const Card = ({
	image,
	slug,
	category,
	title,
	content,
	authorImage,
	authorName,
	publishedAt,
}) => {
	const [categoryStyle, setCategoryStyle] = useState(`${styles.badgeStyle}`);

	// Slice content
	const wordAmount = 250;
	const slicedContent = content.slice(0, wordAmount);

	// Change category badge style depending on category name
	useEffect(() => {
		switch (category.slug) {
			case 'investimentos':
				setCategoryStyle(
					`${styles.investimentosCategoryBadge} ${styles.badgeStyle}`
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
		<div className={styles.card}>
			<Link href={slug}>
				<div className={styles.cardHeader}>
					<div className={styles.cardImage}>
						<NextImage image={image} />
					</div>
					{slug ? <Link href={slug}>Saiba Mais</Link> : ''}
				</div>
			</Link>

			<div className={styles.cardBody}>
				<h4>{title ? title : ''}</h4>
				<div className={categoryStyle}>
					<Link href={`/blog/categoria/${category.slug}`}>
						<a>{category.name}</a>
					</Link>
				</div>

				{content ? (
					<div className={styles.content}>
						<MarkdownView
							markdown={`${slicedContent}${
								slicedContent.length > 200 ? '...' : ''
							}`}
						/>
					</div>
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
							<Moment format='D MMM[,] YYYY [at] HH:mm A'>{publishedAt}</Moment>
						</small>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
