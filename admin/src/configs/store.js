import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import reducers from '../reducers';
import history from './history';

const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const router = routerMiddleware(history);
export default createStore(reducers, {}, 
		composeEnhancers(applyMiddleware(thunk, router)));
