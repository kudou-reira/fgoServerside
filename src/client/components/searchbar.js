import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Select from 'react-select';

import { connect } from 'react-redux';
import { searchBarInitialize, scrapeQuery }  from '../actions';

if (process.env.BROWSER) {
	require('react-select/dist/react-select.css');
	// var styles = require('../layout/index.css');
}

class SearchBar extends Component {

	constructor() {
		super();
		this.state = {
			searchLink: '',
			placeholder: 'Search for servant or ce'
		}

		this.buttonClicked = this.buttonClicked.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
	}

	componentWillMount() {
		this.props.searchBarInitialize("fgo");
	}

	buttonClicked() {
		// console.log("i was clicked");
		// this.props.scrapeQuery("fgo");
	}

	onInputChange(val){
		this.setState({
			searchLink: val.value
		}, () => {
			var cardParams = this.checkCardParams(this.state.searchLink);

			this.props.scrapeQuery(cardParams.cardType, this.state.searchLink);
			this.setState({
				placeholder: `${cardParams.engName}`
			})
		});
	}

	checkCardParams(card) {
		var servantCard;
		var ceCard;
		servantCard = this.props.search.initialResults.Results.servants.filter((query) => {
			return query.pageLink === card;
		});

		if (servantCard.length < 1) {
			ceCard = this.props.search.initialResults.Results.ce.filter((query) => {
				return query.pageLink === card;
			});
			return ceCard[0];
		}

		else {
			return servantCard[0];
		}
	}


	renderSearchBar() {
		// on component mount, do the fetching and searching and pass in the json with all the names of CEs and servants
		// use regex to narrow down the choices and display them as results in the dropdown

		var tempServants = [];
		var tempCE = [];
    	var options = [
			{value: 0, label: 'Loading craft essences and servants...'},
		];


		if(this.props.search.initialResults !== null) {
			tempServants = this.props.search.initialResults.Results.servants.map((servant) => {
				return(
					{
						value: servant.pageLink, 
						label:
							<div className="searchContainer">
								<div className="equalHMWrap eqWrap">
									<div className="equalHM">
										<img src={servant.icon}></img>
									</div>
									<div className="equalMid">
										{servant.engName} <br />
										{servant.jpName}
									</div>
									<div className="equalHM">
										<div className="vert">
											{servant.rarity}
										</div>
									</div>
								</div>
							</div>
					}
				)
			})

			tempCE = this.props.search.initialResults.Results.ce.map((ce) => {
				return(
					{
						value: ce.pageLink, 
						label:
							<div className="searchContainer">
								<div className="equalHMWrap eqWrap">
									<div className="equalHM">
										<img src={ce.icon}></img>
									</div>
									<div className="equalMid">
										{ce.engName}
									</div>
									<div className="equalHM">
										<div className="vert">
											{ce.rarity}
										</div>
									</div>
								</div>
							</div>
					}
				)
			})

			options = tempServants.concat(tempCE);
		}

		return(
			<div>
				<div className="bind">
	    			<Select
	    				name="form-field-name"
	    				placeholder={this.state.placeholder}
	    				options={options}
	    				onChange={this.onInputChange}
	    			/>
	    		</div>
	    	</div>
		);
	}

	// change this to fire an action
	renderSearchProps() {
		if(this.props.search.results !== null) {
			return(
				<div>
					Your returned props value from go API is valid.
				</div>
			)
		}
	}

	//how to center within the rnd component

	render(){

		const style = {
		    marginTop: 6,
		    marginBottom: 6,
		    marginLeft: 13,
		    marginRight: 13
		};

		return(
			<div className="boxBorder">
				this is SearchBar
				{this.renderSearchBar()}
				<RaisedButton 
	    			label="default"
	    			style={style}
	    			onClick={this.buttonClicked}
	    		/>
			</div>
		);
	}
}

function mapStateToProps(state){
	return { 
		search: state.search
	};
}

function loadData(store) {
	return store.dispatch(searchBar);
}

export default connect(mapStateToProps, { searchBarInitialize, scrapeQuery })(SearchBar);