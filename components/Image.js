import { getStrapiMedia } from '../lib/media';
import NextImage from 'next/image';

const Image = ({ image }) => {
	const { alternativeText, width, height } = image.data.attributes;

	return (
		<NextImage
			layout='responsive'
			width={width}
			height={height}
			objectFit='cover'
			src={
				image
					? getStrapiMedia(image)
					: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
			}
			alt={alternativeText || ''}
			priority
			placeholder='blur'
			blurDataURL={
				image
					? getStrapiMedia(image)
					: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
			}
		/>
	);
};

export default Image;
