import { combineReducers } from 'redux';
import player from './player';
import games from './games';
import categories from './categories';

const reducers = combineReducers({
	player,
	games,
	categories
});

export default reducers;