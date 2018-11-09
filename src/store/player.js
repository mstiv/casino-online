import { LOGIN_SUCCESS } from '../actions';


const player = ( state = {}, action ) => {
	switch(action.type){
		case LOGIN_SUCCESS:
			return {
				player: action.data.player
			}
		default : 
			return state
	}
}

export default player;