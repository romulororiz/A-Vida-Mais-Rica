import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Card from './Card';
import styles from '@/styles/CategoryPage.module.css';
import paginationStyles from '@/styles/Pagination.module.css';
import { useRouter } from 'next/router';

const PaginatedPosts = ({ itemsPerPage, articles, category }) => {
	const [currentItems, setCurrentItems] = useState(null);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage;
		setCurrentItems(articles.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(articles.length / itemsPerPage));
	}, [itemOffset, itemsPerPage, articles]);

	// Invoke when user click to request another page.
	const handlePageClick = event => {
		const newOffset = (event.selected * itemsPerPage) % articles.length;
		setItemOffset(newOffset);
	};

	// todo
	// Pagination persists on category change
	// Set page 1 as default

	// todo
	// Break point for mobile
	// Pagination gets too big for smaller screens

	return (
		<>
			<div className={styles.postsGrid}>
				{currentItems &&
					currentItems
						.sort((articleA, articleB) => {
							return (
								new Date(articleB.attributes.publishedAt) -
								new Date(articleA.attributes.publishedAt)
							);
						})
						.map(article => (
							<Card
								key={article.id}
								image={article.attributes.image}
								title={article.attributes.title}
								description={article.attributes.description}
								slug={`/blog/${article.attributes.slug}`}
								category={category.attributes}
								authorImage={article.attributes.author.data.attributes.image}
								authorName={article.attributes.author.data.attributes.name}
								publishedAt={article.attributes.publishedAt}
							/>
						))}
			</div>
			<ReactPaginate
				// initialPage={router.asPath === `/blog/categoria/${category.slug}` && 0}
				breakLabel='...'
				nextLabel='próximo >'
				onPageChange={handlePageClick}
				pageRangeDisplayed={3}
				pageCount={pageCount}
				previousLabel='< anterior '
				renderOnZeroPageCount={null}
				containerClassName={paginationStyles.pagination}
				pageLinkClassName={paginationStyles.pageNum}
				previousLinkClassName={paginationStyles.pageNum}
				nextLinkClassName={paginationStyles.pageNum}
				activeLinkClassName={paginationStyles.active}
				disabledLinkClassName={paginationStyles.disabled}
			/>
		</>
	);
};

export default PaginatedPosts;
