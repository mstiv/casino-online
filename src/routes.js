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
				component={userIsNotAuthenticated(GamesList)}
			/>
		</Switch>
	</Router>
);

export default Routes;