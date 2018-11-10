import { CATEGORIES_SUCCESS } from '../actions';


const categories = ( state = [], action ) => {
	switch(action.type){
		case CATEGORIES_SUCCESS:
			return action.data || []
		default : 
			return state
	}
}

export default categories;