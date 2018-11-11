import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../actions';


const player = ( state = null, action ) => {
	switch(action.type){
		case LOGIN_SUCCESS:
			return ( action.data && action.data.player ) || {}
		case LOGOUT_SUCCESS:
			return null
		default : 
			return state
	}
}

export default player;