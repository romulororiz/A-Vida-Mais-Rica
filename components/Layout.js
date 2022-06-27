import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '@/styles/Layout.module.css';
import Header from './Header';
import Showcase from './Showcase';
import Footer from './Footer';

const Layout = ({ title, keywords, description, children }) => {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='keywords' content={keywords} />
				<meta
					name='google-site-verification'
					content='AIHkU7uwE26LtE6yMOkrFd9WMqwIGT9XLT1suf2Gfu8'
				/>
				<link rel='shortcut icon' href='/images/favicon.ico' />
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/images/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/images/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/images/favicon-16x16.png'
				/>
			</Head>
			<Header />
			{router.pathname === '/' && <Showcase />}
			<div className={styles.container}>
				<div>{children}</div>
			</div>
			<Footer />
		</>
	);
};

Layout.defaultProps = {
	title: 'A vida mais rica',
	description: 'Blog sobre finanças',
	keywords: 'finanças, sucesso, investimentos',
};

export default Layout;
