import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

function HelmetComponent({ title, content, image, description }){
	return (
		<Helmet>
			<title>{title}</title>
			<meta property='og:title' content={content} />
			<meta property='og:image' content={image} />
			<meta property='og:description' content={description} />{' '}
		</Helmet>
	);
}

HelmetComponent.propTypes = {
	title       : PropTypes.string.isRequired,
	content     : PropTypes.string,
	image       : PropTypes.any,
	description : PropTypes.string.isRequired,
};

export default HelmetComponent;
