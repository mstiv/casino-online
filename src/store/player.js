import { LOGIN_REQUEST, LOGIN_RESPONSE } from '../actions';


const player = ( state = {}, action ) => {
	switch(action.type){
		case LOGIN_RESPONSE:
			return {
				player: action.player
			}
		default : 
			return state
	}
}

export default player;