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
			src={getStrapiMedia(image)}
			alt={alternativeText || ''}
			priority
			placeholder='blur'
			blurDataURL={getStrapiMedia(image)}
		/>
	);
};

export default Image;
