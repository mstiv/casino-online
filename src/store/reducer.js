import { combineReducers } from 'redux';
import player from './player';
import games from './games';

const reducers = combineReducers({
	player,
	games
});

export default reducers;