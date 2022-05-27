import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '@/styles/Layout.module.css';
import Header from './Header';
import Showcase from './Showcase';

const Layout = ({ title, keywords, description, children }) => {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='keywords' content={keywords} />
			</Head>
			<Header />
			{router.pathname === '/' && <Showcase />}
			<div className={styles.container}>
				<div>{children}</div>
			</div>
		</>
	);
};

Layout.defaultProps = {
	title: 'A vida mais rica',
	description: 'Blog sobre finanças',
	keywords: 'finanças, sucesso, investimentos',
};

export default Layout;
