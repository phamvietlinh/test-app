import React from 'react';
import Test from './Test';
import Practise from './Practise';

const routes = [
	{
		path: '/',
		exact: true,
		main: () => <Practise />
	},
	{
		path: '/test',
		exact: false,
		main: () => <Test />
	},
	
];

export default routes;