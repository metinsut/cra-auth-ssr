import thunk from 'redux-thunk';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
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

const config = applyMiddleware(thunk, logger);

const store = createStore(reducers, typeof window !== 'undefined' && window ? window.INITIAL_STATE : {}, config);

export default store;
