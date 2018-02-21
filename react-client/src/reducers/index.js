import {combineReducers} from 'redux';
import InfoReducers from './info.js';

const allReducers = combineReducers({
	info: InfoReducers
});

export default allReducers;