import React from 'react';
import styles from '@/styles/Showcase.module.css';

const Showcase = () => {
	return (
		<div className={styles.showcase}>
			<div className={styles.container}>
				<div className={styles.showcaseBox}>
					<div className={styles.textBox}>
						<div className={styles.heading}>
							<h1 className={styles.topHeading}>Lorem ipsum dolor</h1>
							<h3 className={styles.subHeading}>
								Lorem ipsum dolor sit amet consectetur adipisicing.
							</h3>
						</div>
						<div className={styles.content}>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
								voluptatibus asperiores quis velit enim fuga voluptatem
								dignissimos quasi minus possimus culpa maiores magnam commodi.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Showcase;
