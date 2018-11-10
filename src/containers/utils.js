import { post, get } from '../lib/http.js';
import { savePlayerInLocalStorage } from '../lib/authHelpers.js';
import {
	authenticatePlayer,
	loadGames,
	loadCategories
} from '../actions'
import ApiUrls from '../constants/ApiUrls';


export const loginInWithCreds = ( username, password) => async (dispatch) => {
	const res = await post(ApiUrls.LOGIN, {username, password});
	if(res.status === 200 && res.data && res.data.status === "success"){
		const { data } = res;
		savePlayerInLocalStorage(data.player);
		dispatch(authenticatePlayer(res));
		return {
			status: res.data.status
		}
	}else {
		return {
			status: res.data ? res.data.status : "fail",
			error: res.data ? res.data.error : "Invalid Username/Password"
		}
	}
}


export const getAllGames = () => async (dispatch) => {	
	const res = await get(ApiUrls.GAMES_LIST);
	dispatch(loadGames(res));
	return res.data;
}
export const getAllCategories = () => async (dispatch) => {	
	const res = await get(ApiUrls.CATEGORIES_LIST);
	dispatch(loadCategories(res));
	return res.data;
}