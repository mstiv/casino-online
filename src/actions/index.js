export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const GAMES_SUCCESS = 'GAMES_SUCCESS';
export const CATEGORIES_SUCCESS = 'GAMES_SUCCESS';

export const authenticatePlayer = (response) => (
	{
		type: LOGIN_SUCCESS,
		data: response.data,
		status: response.status
	}
);

export const logoutPlayer = (response) => (
	{
		type: LOGOUT_SUCCESS,
		status: response.status
	}
);

export const loadGames = (response) => (
	{
		type: GAMES_SUCCESS,
		data: response.data,
		status: response.status
	}
);

export const loadCategories = (response) => (
	{
		type: CATEGORIES_SUCCESS,
		data: response.data,
		status: response.status
	}
);