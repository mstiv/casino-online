import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';

import {
	PLAYER_LOCAL_STORAGE_NAME
} from 'constants/index';

import Urls from 'constants/urls';

export const userIsAuthenticated = connectedRouterRedirect({
	redirectPath: Urls.LOGIN_PAGE,
	authenticatedSelector: state => !!state.player,
	wrapperDisplayName: 'UserIsAuthenticated'
});

export const userIsNotAuthenticated = connectedRouterRedirect({
	redirectPath: Urls.GAMES_PAGE,
	authenticatedSelector: state => !state.player,
	wrapperDisplayName: 'UserIsNotAuthenticated'
});

export function getUserFromLocalStorage(): string {
  return localStorage.getItem(PLAYER_LOCAL_STORAGE_NAME) || '';
}