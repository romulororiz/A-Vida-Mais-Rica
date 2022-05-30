import React from 'react';
import styles from '@/styles/Showcase.module.css';

const Showcase = () => {
	return (
		<div className={styles.showcase}>
			<div className={styles.container}>
				<div className={styles.textBox}>
					<h1 className={styles.topHeading}>Comece sua jornada</h1>
					<h3 className={styles.subHeading}>rumo a uma vida mais rica</h3>
					<p className={styles.lead}>
						Tempo, saude e riqueza são os três pilares no qual esse blog se
						sustenta.
					</p>

					<p className={styles.lead}>
						Vou te mostrar como é possível usar o tempo ao seu favor para ter
						mais saúde e dinheiro.
					</p>
					<p className={styles.lead}>
						Se voce gostou da idea venha comigo que vou te mostrar o caminho das
						pedras…
					</p>
				</div>
			</div>
		</div>
	);
};

export default Showcase;
