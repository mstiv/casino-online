import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Grid } from 'semantic-ui-react';

import LoginForm from '../components/LoginForm';
import Logo from '../components/Logo';
import './Login.scss'

import {
	loginInWithCreds
} from './utils';

const LoginPage = ({ dispatch }) => (
	<Grid className="page-container login-container" centered>
		<Grid.Row columns={12}>
		  <Grid.Column
		    width={6}
		  >
		  	<Logo />
		    <LoginForm 
		    	dispatch={dispatch}
		    	loginInWithCreds={loginInWithCreds}
		    />
		  </Grid.Column>
		</Grid.Row>
	</Grid>
);

export default withRouter(connect()(LoginPage)) ;