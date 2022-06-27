import React from 'react';
import LayoutProvider from '../../../library/layout';
import CarouselComponent from '../../../library/common/components/Carousel';
import HelmetComponent from '../../../library/common/components/Helmet';
import { Card, Row, Col } from 'react-bootstrap';

function Home(){
	return (
		<LayoutProvider>
			<HelmetComponent title={'Home'} description={'Lorem Ipsum'} />
			<div class='container'>
				<div className='row'>
					<div className='col-md-12'>
						<CarouselComponent />
					</div>
				</div>

				<div className='row mt-5' />
				<Row xs={1} md={4} className='g-4'>
					{Array.from({ length: 8 }).map((_, idx) => (
						<Col>
							<Card>
								<Card.Img
									variant='top'
									src='https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png'
								/>
								<Card.Body>
									<Card.Title>Card title</Card.Title>
									<Card.Text>
										This is a longer card with supporting text below
										as a natural lead-in to additional content. This
										content is a little bit longer.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</div>
		</LayoutProvider>
	);
}

export default Home;
