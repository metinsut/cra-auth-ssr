import { combineReducers } from 'redux';
import usersReducer from './userReducer';
import postReducer from './postReducer';
import authReducer from './authReducer';
import protectedReducer from './protectedReducer';

const reducers = combineReducers({
	auth: authReducer,
	users: usersReducer,
	posts: postReducer,
	protected: protectedReducer
});

export default reducers;
