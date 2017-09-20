import {combineReducers} from 'redux';
import tasks from './tasks';
import reminder from './reminder';

export default combineReducers({
	tasks,
	reminder
});