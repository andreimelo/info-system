import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css';

function NavbarComponent(){
	return (
		<Navbar bg='dark' variant='dark'>
			<Container>
				<Link to={'/'}>
					<Navbar.Brand>Navbar</Navbar.Brand>
				</Link>
				<Nav className='me-auto'>
					<Link to={'/news'} className='nav-pad'>
						News
					</Link>
					<Link to={'/mobiles'} className='nav-pad'>
						Mobiles
					</Link>
					<Link to={'/laptops'} className='nav-pad'>
						Laptops
					</Link>
				</Nav>
			</Container>
		</Navbar>
	);
}

export default React.memo(NavbarComponent);
