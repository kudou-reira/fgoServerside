// startup point for the client side application
//basically the index.js in old projects
import 'babel-polyfill';
import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import Routes from './routes';
import reducers from './reducers';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const axiosInstance = axios.create({
	baseURL: 'http://localhost:5000'
});

//to pass multiple axios instances
//wrap in single object

// const store = createStore(
//   reducer,
//   applyMiddleware(thunk.withExtraArgument({ api, whatever }))
// )

// // later
// function fetchUser(id) {
//   return (dispatch, getState, { api, whatever }) => {
//     // you can use api and something else here here
//   }
// }

console.log("this is client.js", typeof window)

const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(reduxThunk.withExtraArgument(axiosInstance)));

ReactDOM.hydrate(
	<MuiThemeProvider muiTheme={getMuiTheme()}>
		<Provider store={store} >
			<BrowserRouter>
				<div>
					{renderRoutes(Routes)}
				</div>
			</BrowserRouter>
		</Provider>
	</MuiThemeProvider>
, document.querySelector('#root'));


