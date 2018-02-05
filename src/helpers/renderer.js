import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import Routes from '../client/routes';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default (req, store, context) => {


	global.navigator = {
          userAgent: req.headers['user-agent']
    };
      
    const muiTheme = getMuiTheme({userAgent: req.headers['user-agent']});  

	const content = renderToString(
		<MuiThemeProvider muiTheme={muiTheme}>
			<Provider store={store}>
				<StaticRouter location={req.path} context={context}>
					<div>
						{renderRoutes(Routes)}
					</div>
				</StaticRouter>
			</Provider>
		</MuiThemeProvider>
	);

	const helmet = Helmet.renderStatic();

	// 				<link rel="stylesheet" href="./layout/index.css">

	return `
		<html>
			<head>
				${helmet.title.toString()}
				${helmet.meta.toString()}
				<meta charset="utf-8">
			    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
			    <meta name="theme-color" content="#000000">
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
				<link rel="stylesheet" href="./index.css">
			</head>
			<body>
				<div id="root">${content}</div>
				<script>
					window.INITIAL_STATE = ${JSON.stringify(store.getState())}
				</script>
				<script src="bundle.js"></script>
			</body>
		</html>
	`;
};