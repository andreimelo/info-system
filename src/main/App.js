import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { route } from './routes';
function App(){
	return (
		<Suspense fallback={<Spinner animation='border' />}>
			<BrowserRouter>
				<Routes>
					{route.map((item, key) => (
						<Route key={key} exact path={item.path} element={item.element} />
					))}
				</Routes>
			</BrowserRouter>
		</Suspense>
	);
}

export default App;
