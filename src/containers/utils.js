import { post } from '../lib/http.js';
import { savePlayerInLocalStorage } from '../lib/authHelpers.js';
import {
	authenticatePlayer
} from '../actions'
import ApiUrls from '../constants/ApiUrls';


export const loginInWithCreds = ( username, password) => async (dispatch) => {
	const res = await post(ApiUrls.LOGIN, {username, password});
	console.log(res);
	if(res.status === 200 && res.data && res.data.status === "success"){
		const { data } = res;
		savePlayerInLocalStorage(data.player);
		dispatch(authenticatePlayer(res));
		return true;
	}
	return false;
}