import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';

import {
	PLAYER_LOCAL_STORAGE_NAME
} from '../constants/index';

import Urls from '../constants/urls';


const locationHelper = locationHelperBuilder({});

export const userIsAuthenticated = connectedRouterRedirect({
	redirectPath: Urls.LOGIN_PAGE,
	authenticatedSelector: state => !!state.player,
	wrapperDisplayName: 'UserIsAuthenticated',
	allowRedirectBack: false,
});

export const userIsNotAuthenticated = connectedRouterRedirect({
	redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || Urls.GAMES_PAGE,
	authenticatedSelector: state => !state.player,
	wrapperDisplayName: 'UserIsNotAuthenticated',
	allowRedirectBack: false,
});

export function getPlayerFromLocalStorage() {
  const player = localStorage.getItem(PLAYER_LOCAL_STORAGE_NAME);
  return player ? JSON.parse(player) : player;
}

export function savePlayerInLocalStorage(player = {}) {
  return localStorage.setItem(PLAYER_LOCAL_STORAGE_NAME, JSON.stringify(player)) ;
}