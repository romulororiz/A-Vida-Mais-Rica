/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		loader: 'default',
		domains: ['a-vida-mais-rica.herokuapp.com', 'localhost'],
	},
};

module.exports = nextConfig;
