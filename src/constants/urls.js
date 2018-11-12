const ROOT_PAGE = '/';
const LOGIN_PAGE = `${ROOT_PAGE}login`;
const GAMES_PAGE = `${ROOT_PAGE}games`;
const GAME_DETAIL = (game) => `${ROOT_PAGE}game/${game}`;
const NOT_FOUND = `${ROOT_PAGE}404`;


export default {
	ROOT_PAGE,
	LOGIN_PAGE,
	GAMES_PAGE,
	GAME_DETAIL,
	NOT_FOUND
};