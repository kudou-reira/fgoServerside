import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers }  from '../actions';
import { Helmet } from 'react-helmet';

import root from 'window-or-global'
import ReactGridLayout from 'react-grid-layout';
import {Responsive, WidthProvider} from 'react-grid-layout';

import Header from '../components/header';
import SavedTeams from '../components/savedTeams';
import Searchbar from '../components/searchbar';
import DailyWindow from '../components/dailyWindow';
import RecentSearch from '../components/recentSearch';

if (process.env.BROWSER) {
	require('../layout/reactGrid/styles.css');
	require('../layout/reactResizable/styles.css');
	// var styles = require('./layout/index.css');
}

const ResponsiveReactGridLayout = WidthProvider(Responsive);

class UsersPage extends Component {

	constructor() {
		super();
		this.state = {
			widthWindow: '0',
			heightWindow: '0'
		}

		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentWillMount() {
		this.updateWindowDimensions();
	}

	componentDidMount() {
		// this.props.fetchUser();
		// window.addEventListener('resize', this.updateWindowDimensions);
		this.props.fetchUsers();
		root.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		// window.removeEventListener('resize', this.updateWindowDimensions);
		root.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		var w = window,
	        d = document,
	        documentElement = d.documentElement,
	        body = d.getElementsByTagName('body')[0],
	        width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
	        height = w.innerHeight || documentElement.clientHeight || body.clientHeight;

		this.setState({ widthWindow: width, heightWindow: height });
	}

	renderUsers() {
		return this.props.users.map((user) => {
			return(
				<li key={user.id}>{user.name}</li>
			);
		})
	}

	head() {
		return(
			<Helmet>
				<title>Users app</title>
				<meta property="og:title" content="Users app" />
			</Helmet>
		);
	}

	render() {

		var layout = [
			{i: 'searchbar', x: 9, y: 0, w: 3, h: 4},
			{i: 'savedTeams', x: 9, y: 7, w: 3, h: 3},
			{i: 'dailyWindow', x: 0, y: 0, w: 5, h: 6},
			{i: 'recentSearch', x: 9, y: 4, w: 3, h: 3},
	    ];


		return(
			<div>
				{this.head()}
				<div className="full">
					<div>
						<div>
							<Searchbar />
						</div>
						<ReactGridLayout 
							className="layout" 
							layout={layout}
							cols={12}
							rowHeight={30}
							width={this.state.widthWindow}
						>
							<div key="savedTeams">
								<SavedTeams />
							</div>
							<div key="dailyWindow">
								<DailyWindow />
							</div>
							<div key="recentSearch">
								<RecentSearch />
							</div>
						</ReactGridLayout>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		users: state.users
	};
}

//use this to fetch data
function loadData(store) {
	return store.dispatch(fetchUsers());
}

export default {
	loadData: loadData,
	component: connect(mapStateToProps, { fetchUsers })(UsersPage)
};