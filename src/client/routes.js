import React from 'react';
import App from './app';
import UsersPage, { loadData } from './pages/usersPage';
import NotFoundPage from './pages/notFoundPage';
import AdminsPage from './pages/adminsPage';

// export default () => {
// 	return (
// 		<div>
// 			<Route exact path ='/' component={Home} />
// 			<Route path="/hi" component={() => 'Hi'} />
// 			<Route path="/users" component={UsersList} />
// 		</div>
// 	)
// }

export default [
	{
		...App,
		routes: [
			{
				path: '/',
				...UsersPage,
				exact: true
			},
			{
				path: '/admin',
				...AdminsPage,

			},
			{
				...NotFoundPage
			}
		]
	}

];

