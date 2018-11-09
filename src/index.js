import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Routes from './routes';

import configureStore from './store';

import 'semantic-ui-css/semantic.min.css';
import './styles/common.scss';

import {
	getPlayerFromLocalStorage
} from './lib/authHelpers';

const initializeReduxStore = () => {
	const initialState = {
		player: getPlayerFromLocalStorage()
	};

	return configureStore(initialState);
}

const store = initializeReduxStore();


const App = () => (
	<Provider store={store}>
		<Routes store={store} />
	</Provider>
);

render(<App />, document.getElementById('root'));

