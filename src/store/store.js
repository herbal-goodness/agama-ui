import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root';
import thunk from 'redux-thunk';

export default function makeStore(initialState) {
	return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
