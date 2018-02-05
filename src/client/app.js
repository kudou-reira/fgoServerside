import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/header';
import { fetchCurrentUser } from './actions';
import { fetchTest } from './actions';

// class App extends Component {

// 	render() {
// 		{console.log(this.props.route.routes)}
// 		return(
// 			<div>
// 				<Header />
// 				{renderRoutes(this.props.route.routes)}
// 			</div>
// 		);
// 	}
// }

class App extends Component {

	render(){
		return (
			<div className="full">
				<div>
					<Header />
					<div>
						{renderRoutes(this.props.route.routes)}
					</div>
				</div>
			</div>
		);
	}
};


function loadData(store) {
	return store.dispatch(fetchCurrentUser())
}

export default {
	component: App,
	loadData
};

