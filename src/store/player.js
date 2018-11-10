import { LOGIN_SUCCESS } from '../actions';


const player = ( state = {}, action ) => {
	switch(action.type){
		case LOGIN_SUCCESS:
			return ( action.data && action.data.player ) || {}
		default : 
			return state
	}
}

export default player;