// const express = require('express');
// const React = require('react');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/components/home').default;

//polyfill gives babel methods
import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const proxy2 = require('http-proxy-middleware');
const cors = require('cors');
const { JSDOM } = require('jsdom');

const app = express();

// if (typeof(window) == 'undefined'){
//     global.window = new Object();
// }

process.env.BROWSER = false;
const dom = new JSDOM('<!doctype html><html><body></body></html>', { url: 'http://localhost' });
global.window = dom.window;
global.document = window.document;
// global.navigator = window.navigator;

// global.navigator = global.navigator || {};
// global.navigator.userAgent = global.navigator.userAgent || 'all';

app.use(cors())

var apiProxy = proxy2('/api', {target: 'http://localhost:5000'});
var authProxy = proxy2('/auth', {target: 'http://localhost:5000'});
app.use(apiProxy);
app.use(authProxy);

app.use(express.static('public'));

app.get('*', (req, res) => {

	const store = createStore(req);
	// do all the store outside of renderer
	const promises = matchRoutes(Routes, req.path).map(({ route }) => {
		return route.loadData ? route.loadData(store) : null;
	}).map((promise) => {
		if(promise) {
			return new Promise((resolve, reject) => {
				promise.then(resolve).catch(resolve);
			})
		}
	});

	//promise all is a native function that takes an array of promises and returns one single array
	Promise.all(promises).then(() => {
		const context = {};
		const content = renderer(req, store, context);

		console.log(context);
		if(context.url) {
			return res.redirect(301, context.url);
		}

		if(context.notFound) {
			res.status(404);
		}

		// initialize and load data into store
		res.send(content);
	});
});

app.listen(3000, () => {
	console.log('listening on port 3000')
});