import React from 'react';
import styles from '@/styles/SearchCard.module.css';
import NextImage from '@/components/Image';
import Link from 'next/link';

const SearchCard = ({ result }) => {
	const { title, image, category, author, slug } = result.attributes;
	const slicedTitle = title.slice(0, 20);

	return (
		<Link href={`/posts/${slug}`}>
			<div className={styles.card}>
				<div className={styles.cardInfo}>
					<h2>{title.length < 30 ? title : `${slicedTitle}...`}</h2>
					<div className={styles.catAndAuthor}>
						<p>{category.data.attributes.name}</p>
						<span>•</span>
						<p>{author.data.attributes.name}</p>
					</div>
				</div>
				<div className={styles.cardImage}>
					<NextImage image={image} />
				</div>
			</div>
		</Link>
	);
};

export default SearchCard;
