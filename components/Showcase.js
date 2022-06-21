import React from 'react';
import styles from '@/styles/Showcase.module.css';
import Link from 'next/link';

const Showcase = () => {
	return (
		<div className={styles.showcase}>
			<div className={styles.container}>
				<div className={styles.textBox}>
					<h3 className={styles.topHeading}>Comece sua jornada</h3>
					<h1 className={styles.subHeading}>rumo à uma Vida + Rica</h1>
					<p className={styles.lead}>
						Nós do A Vida + Rica temos como objetivo{' '}
						<span>TORNAR A SUA VIDA + RICA!</span>
					</p>
					<p className={styles.lead}>
						Através de uma linguagem simples e descomplicada, vamos te
						acompanhar nessa jornada rumo à uma Vida + Rica.
					</p>
					<p className={styles.lead}>
						Aqui vamos fazer você refletir e lhe dar as ferramentas necessárias
						para que você não dependa, pura e simplesmente, da orientação de
						outras pessoas.
					</p>
				</div>
				<Link href={`/sobre`}>
					<a>
						Saiba Mais <span>&rarr;</span>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Showcase;
