import React from 'react';
import PropTypes from 'prop-types';
import NavbarComponent from '../common/components/Navbar';
import FooterComponent from '../common/components/Footer';

function LayoutProvider({ children }){
	return (
		<React.Fragment>
			{/* Header */}
			<NavbarComponent />
			{children}
			<FooterComponent />
		</React.Fragment>
	);
}

LayoutProvider.propTypes = {
	children : PropTypes.element,
};

export default React.memo(LayoutProvider);
