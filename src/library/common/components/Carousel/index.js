import React from 'react';
import { Carousel } from 'react-bootstrap';

function CarouselComponent(){
	return (
		<Carousel>
			<Carousel.Item interval={1000}>
				<img
					className='d-block w-100'
					src='https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png'
					alt='First slide'
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={500}>
				<img
					className='d-block w-100'
					src='https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png'
					alt='Second slide'
				/>
				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className='d-block w-100'
					src='https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png'
					alt='Third slide'
				/>
				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

// Carousel.propTypes = {};

export default React.memo(CarouselComponent);
