import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../actions';


const player = ( state = {}, action ) => {
	switch(action.type){
		case LOGIN_SUCCESS:
			return ( action.data && action.data.player ) || {}
		case LOGOUT_SUCCESS:
			return {}
		default : 
			return state
	}
}

export default player;