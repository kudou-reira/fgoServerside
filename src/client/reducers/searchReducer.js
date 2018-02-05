import { INITIAL_CARDS, SEARCH_QUERY } from '../actions/types';

const INITIAL_STATE = {
	initialResults: null,
	queryResult: null
}

export default function(state = INITIAL_STATE, action) {
	// console.log(action);
	switch(action.type) {
		case INITIAL_CARDS:
			return {...state, initialResults: action.payload};
		case SEARCH_QUERY:
			return {...state, queryResult: action.payload};
		default: 
			return state;
	}
}