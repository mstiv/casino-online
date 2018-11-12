import React from 'react';
import ReactDOM from 'react-dom';
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
		player: getPlayerFromLocalStorage() || {}
	};

	return configureStore(initialState);
}

const store = initializeReduxStore();


const App = () => (
	<Provider store={store}>
		<Routes store={store} />
	</Provider>
);


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
