import App from 'next/app';
import { createContext } from 'react';
import '../styles/globals.css';
import { fetchAPI } from '../lib/api';
import ScrollTop from '@/components/ScrollTop';

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
	const { global } = pageProps;

	return (
		<GlobalContext.Provider value={global.attributes}>
			<Component {...pageProps} />
			<ScrollTop />
		</GlobalContext.Provider>
	);
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async ctx => {
	// Calls page's `getInitialProps` and fills `appProps.pageProps`
	const appProps = await App.getInitialProps(ctx);
	// Fetch global site settings from Strapi
	const globalRes = await fetchAPI('/global', {
		populate: {
			favicon: '*',
			defaultSeo: {
				populate: '*',
			},
		},
	});
	// Pass the data to our page via props
	return { ...appProps, pageProps: { global: globalRes.data } };
};

export default MyApp;
