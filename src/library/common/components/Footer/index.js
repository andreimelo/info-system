import React from 'react';
import './index.css';
function Footer(){
	return (
		<footer class='page-footer font-small mt-4 pt-4 bg-matte-black'>
			<div class='container-fluid text-center text-md-left'>
				<div class='row'>
					<div class='col-md-6 mt-md-0 mt-3 text-white'>
						<h5 class='text-uppercase'>Footer Content</h5>
						<p>
							Here you can use rows and columns to organize your footer
							content.
						</p>
					</div>

					<div class='col-md-3 mb-md-0 mb-3'>
						<h5 class='text-uppercase text-white'>Links</h5>

						<ul class='list-unstyled'>
							<li>
								<a href='#!'>Link 1</a>
							</li>
							<li>
								<a href='#!'>Link 2</a>
							</li>
							<li>
								<a href='#!'>Link 3</a>
							</li>
							<li>
								<a href='#!'>Link 4</a>
							</li>
						</ul>
					</div>

					<div class='col-md-3 mb-md-0 mb-3'>
						<h5 class='text-uppercase text-white'>Links</h5>

						<ul class='list-unstyled'>
							<li>
								<a href='#!'>Link 1</a>
							</li>
							<li>
								<a href='#!'>Link 2</a>
							</li>
							<li>
								<a href='#!'>Link 3</a>
							</li>
							<li>
								<a href='#!'>Link 4</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class='footer-copyright text-center text-white py-3'>
				© 2020 Copyright:
				<a href='/'> MDBootstrap.com</a>
			</div>
		</footer>
	);
}

export default Footer;
