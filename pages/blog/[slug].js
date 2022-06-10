import Layout from '@/components/Layout';
import React from 'react';
import styles from '@/styles/PostPage.module.css';
import { fetchAPI } from 'lib/api';
import NextImage from '@/components/Image';
import Moment from 'react-moment';
import Sidebar from '@/components/Sidebar';
import MarkdownView from 'react-showdown';
import { FaChevronLeft } from 'react-icons/fa';
import Link from 'next/link';

const PostPage = ({ article }) => {
	const { title, description, category, content, image, author, publishedAt } =
		article.attributes;

	return (
		<Layout title={title}>
			{/* Title and Author section */}
			<div className={styles.postPage}>
				<div>
					<div className={styles.headingBox}>
						<div className={styles.backToHome}>
							<Link href={'/'}>
								<a>
									<FaChevronLeft className={styles.icon} />
									Back to Home
								</a>
							</Link>
						</div>
						<div className={styles.user}>
							<div className={styles.userAvatar}>
								<NextImage image={author.data.attributes.image} />
							</div>
							<div className={styles.userInfo}>
								<h5>{author.data.attributes.name}</h5>
								<small>
									<Moment format='D MMM[,] YYYY [at] HH:mm A'>
										{publishedAt}
									</Moment>
								</small>
							</div>
						</div>
						<div className={styles.postTitle}>
							<h1>{title}</h1>
							<span>{category.data.attributes.name}</span>
						</div>
					</div>

					{/* Showcase - Post image / images (?) */}
					<div className={styles.postImage}>
						<NextImage image={image} />
						<sub>{description}</sub>
					</div>

					{/* Post Content */}
					<div className={styles.postContent}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
						sint, amet voluptate itaque dolorum aperiam voluptates eos,
						aspernatur facilis odio cupiditate! Reiciendis corporis, quos
						perspiciatis reprehenderit blanditiis cupiditate voluptatibus nemo
						voluptatem consectetur natus, aliquid odio expedita quia, dolorum
						saepe ducimus excepturi. Exercitationem quisquam fuga, voluptatem
						dolore unde cupiditate debitis dolorem, possimus ab, dignissimos ad
						ipsum? Qui repellat vero dolorem dolor eum quod quia est soluta ut
						nesciunt praesentium iste ad explicabo, expedita deleniti
						dignissimos magnam iusto doloremque tempora nostrum facere! Officiis
						perferendis rem sit inventore hic asperiores architecto voluptatum
						nostrum animi! Magni numquam delectus eos veniam cum, minima
						deserunt nisi debitis, in accusamus animi quae natus dolorem dolore
						ullam perspiciatis voluptates unde labore laudantium vero suscipit.
						Asperiores laboriosam excepturi quod atque aut fugiat quaerat nam
						debitis repellat maiores libero dolorum quos veritatis officia id,
						error animi quo sint nisi, rem maxime? Veniam delectus eum facere ab
						maxime, illo laborum asperiores dolorem quam quas quasi at iusto
						fuga neque vitae quidem, similique distinctio sit minus consequatur
						quisquam autem. Aliquam modi ipsa, iste, doloremque qui sunt nobis
						accusamus, ipsum asperiores tempore autem repudiandae? Officiis
						cumque eius impedit alias ad, sequi voluptatum, atque dolore qui,
						doloribus illo ex quasi voluptatibus ut eveniet rem ipsa possimus?
						Minima sequi saepe excepturi quisquam, officia veniam. Natus labore
						ex ipsam harum quidem rerum dolor? Incidunt blanditiis et repellat
						accusantium, amet tempora quia architecto. Qui fugiat delectus iure
						asperiores repellat, sed dolore impedit magnam deleniti ratione
						ullam nam nesciunt velit tempore, eius, ut commodi quia officiis
						laboriosam? Aliquid non rem tempora dolore. Voluptates ab doloribus
						consequatur repellat odit ullam corrupti sunt commodi, eius animi
						maiores harum dignissimos nam beatae quidem placeat, vero quo
						provident quae sit nihil! Accusamus ratione reiciendis quod facere.
						Voluptatem accusantium omnis praesentium, tempora itaque temporibus
						sapiente aliquid assumenda error dolores id, culpa aperiam earum.
					</div>
				</div>
				<Sidebar article={article} />
			</div>
		</Layout>
	);
};

export async function getStaticPaths() {
	const res = await fetchAPI('/articles');

	const { data } = res;

	const paths = data.map(article => ({
		params: { slug: article.attributes.slug },
	}));

	return {
		paths,
		fallback: true,
	};
}

export async function getStaticProps({ params }) {
	const articlesRes = await fetchAPI('/articles', {
		populate: ['image', 'category', 'author', 'author.image'],
		filters: {
			slug: params.slug,
		},
	});

	const { data } = articlesRes;

	return {
		props: {
			article: data[0],
		},
		revalidate: 1,
	};
}

export default PostPage;
