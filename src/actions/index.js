import axios from "axios";
import { FETCH_POSTS, FETCH_USER, FETCH_DATA } from '../actions/actionTypes';

export const fetchUsers = () => async (dispatch, getState, api) => {
	const res = await api.get('/users');
	dispatch({
		type: FETCH_USER,
		payload: res
	});
};

export const fetchPosts = () => async dispatch => {
	const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
	dispatch({
		type: FETCH_POSTS,
		payload: res
	});
};

export const fetchData = () => async dispatch => {
	const res = await axios.get('https://jsonplaceholder.typicode.com/albums');
	dispatch({
		type: FETCH_DATA,
		payload: res
	});
};
