import axios from 'axios';
import { FETCH_USERS, FETCH_CURRENT_USER, FETCH_ADMINS, FETCH_TEST, INITIAL_CARDS, SEARCH_QUERY } from './types';

export const fetchUsers = () => async (dispatch, getState, axiosInstance) => {
	const res = await axios.get('http://localhost:5000/users');

	dispatch({
		type: FETCH_USERS,
		payload: res.data 
	});
};

export const fetchAdmins = () => async (dispatch, getState, axiosInstance) => {
	const res = await axiosInstance.get('http://localhost:5000/admins', {withCredentials: true});

	dispatch({
		type: FETCH_ADMINS,
		payload: res.data
	});
}

export const fetchCurrentUser = () => async (dispatch, getState, axiosInstance) => {
	const res = await axiosInstance.get('http://localhost:5000/api/current_user');

	dispatch({
		type: FETCH_CURRENT_USER,
		payload: res.data
	});
}

export const searchBarInitialize = (name) => {
	return (dispatch) => {
		axios.get('http://localhost:8080/testGoApi', {
			params: {
				name
			}
		})
			.then(({ data }) => {
				dispatch({
					type: INITIAL_CARDS,
					payload: data
				})
			})
	}
};

export const scrapeQuery = (cardType, pageLink) => {
	return (dispatch) => {
		axios.get('http://localhost:8080/fetchCard', {
			params: {
				cardType,
				pageLink
			}
		})
			.then(({ data }) => {
				dispatch({
					type: SEARCH_QUERY,
					payload: data
				})
			})
	}
};