import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavbarComponent(){
	return (
		<Navbar bg='dark' variant='dark'>
			<Container>
				<Link to={'/'}>
					<Navbar.Brand>Navbar</Navbar.Brand>
				</Link>
				<Nav className='me-auto'>
					<Link to={'/news'}>
						<Nav>News</Nav>
					</Link>
					<Link to={'/mobiles'}>Mobiles</Link>
					<Link to={'/laptops'}>Laptops</Link>
				</Nav>
			</Container>
		</Navbar>
	);
}

export default React.memo(NavbarComponent);
