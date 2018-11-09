import React from 'react';
import {
	Form,
	Button,
	Input,
	Loader,
	Icon
} from 'semantic-ui-react';

import './LoginForm.scss';


class LoginForm extends React.Component {

	constructor(props) {
		super(props);
	    this.state = {
	      isLoggingIn: false,
	      errorText: '',
	      username: '',
	      password: '',
	    };
	}

	loginSubmit = async () => {
		const { dispatch, loginInWithCreds } = this.props;
		const { username, password } = this.state;
		if( username.trim() && password) {
			this.setState({ isLoggingIn: true, errorText: '' });
			const isLoggedIn = await dispatch(loginInWithCreds(username, password));
			if(!isLoggedIn) {
				this.setState({ isLoggingIn: false, errorText: 'Invalid Username/Password' });
			}
		}

	}

	render() {
		return (
			<div>
		        <div className="logo">
		          <img src="/images/logo.svg" alt="logo" />
		        </div>
		        <Form 
		        	className="login-form"
			        onSubmit={(e) => {
			          e.preventDefault();
			          this.loginSubmit();
			        }}
		        >
		          <Form.Field
		            control={Input}
		            label="Username"
		            placeholder="Username"
		            required
		            icon="user"
		            onChange={(e, { value }) => { this.setState({ username: value }); }}
		            required
		          />

		          <Form.Field
		            control={Input}
		            onChange={(e, { value }) => { this.setState({ password: value }); }}
		            placeholder="Password"
		            label="Password"
		            type="password"
		            disabled={this.state.isLoggingIn}
		            icon="lock"
		            required
		          />
		          <p className="error">{this.state.errorText}</p>
		          <Button
		            className="login-button"
		            primary
		            disabled={this.state.isLoggingIn}
		          >
		            Login
		            <Icon name="angle right" />
		          </Button>
		          <Loader active={this.state.isLoggingIn} />
		        </Form>
		    </div>	
		);	
	}
}

export default LoginForm;