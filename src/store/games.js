import { GAMES_SUCCESS } from '../actions';


const games = ( state = [], action ) => {
	switch(action.type){
		case GAMES_SUCCESS:
			return action.data || []
		default : 
			return state
	}
}

export default games;