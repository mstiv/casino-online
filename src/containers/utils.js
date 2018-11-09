import axios from 'axios';
import {
	authenticatePlayer
} from '../actions'
import ApiUrls from '../constants/ApiUrls';
import { savePlayerInLocalStorage } from '../lib/authHelpers.js'

export const loginInWithCreds = ( username, password) => async (dispatch) => {
	const res = await axios.post(ApiUrls.LOGIN, {username, password});
	const {status, data} = res;
	debugger;
	if(status === 200 && data.status === "success"){
		savePlayerInLocalStorage(data.player);
		dispatch(authenticatePlayer(res));
		return true;
	}
	return false;
}