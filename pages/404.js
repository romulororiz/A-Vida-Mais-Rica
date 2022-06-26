import React from 'react';
import Layout from '@/components/Layout';
import styles from '@/styles/404.module.css';
import Link from 'next/link';
import { BsExclamationTriangleFill } from 'react-icons/bs';

const custom404 = () => {
	return (
		<Layout title='Página Não Encontrada | A Vida + Rica'>
			<div className={styles.notFound}>
				<p>
					<BsExclamationTriangleFill className={styles.errorIcon} />
					404 | Página Não Encontrada{' '}
				</p>
				<Link href={'/'}>
					<a>
						<span>&larr;</span>Voltar para Página Inicial
					</a>
				</Link>
			</div>
		</Layout>
	);
};

export default custom404;
