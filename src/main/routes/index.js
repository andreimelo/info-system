import { lazy } from 'react';
// Defaults
const Home = lazy(() => import('../../modules/default/Home'));
const News = lazy(() => import('../../modules/default/News'));
const NotFound = lazy(() => import('../../modules/default/NotFound'));
// Devices
const Mobiles = lazy(() => import('../../modules/devices/Mobiles'));
const Laptops = lazy(() => import('../../modules/devices/Laptops'));

export const route = [
	{
		path    : '/',
		element : <Home />,
	},
	{
		path    : '/news',
		element : <News />,
	},
	{
		path    : '/mobiles',
		element : <Mobiles />,
	},
	{
		path    : '/laptops',
		element : <Laptops />,
	},
	{
		path    : '*',
		element : <NotFound />,
	},
];
