import React from 'react';
import styles from '@/styles/Showcase.module.css';
import Link from 'next/link';

const Showcase = () => {
	return (
		<div className={styles.showcase}>
			<div className={styles.container}>
				<div className={styles.textBox}>
					<h1 className={styles.topHeading}>Comece sua jornada</h1>
					<p className={styles.subHeading}>
						rumo à uma <span>Vida + Rica</span>
					</p>
				</div>
				<div className={styles.saibaMais}>
					<Link href={`/sobre`}>
						<a>
							Saiba Mais <span>&rarr;</span>
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Showcase;
