import React from 'react';
import {
	BrowserRouter as Router
} from 'react-router-dom';
import {
	Route,
	Switch
} from 'react-router';

import Login from './containers/Login';
import GamesList from './containers/GamesList';
import GameDetail from './containers/GameDetail';
import RouteNotFound from './containers/RouteNotFound';

import {
	userIsAuthenticated,
	userIsNotAuthenticated,
} from './lib/authHelpers';

import Urls from './constants/urls.js';


const Routes = () => (
	<Router>
		<Switch>
			<Route
				exact
				path={Urls.ROOT_PAGE}
				component={userIsNotAuthenticated(Login)}
			/>
			<Route
				exact
				path={Urls.LOGIN_PAGE}
				component={userIsNotAuthenticated(Login)}
			/>
			<Route
				exact
				path={Urls.GAMES_PAGE}
				component={userIsAuthenticated(GamesList)}
			/>
			<Route
				exact
				path={Urls.GAME_DETAIL(':game')}
				component={userIsAuthenticated(GameDetail)}
			/>
			<Route
			  	path="*"
			  	component={RouteNotFound}
			/>
		</Switch>
	</Router>
);

export default Routes;