import React from 'react';
import {
	Grid,
	Icon
} from 'semantic-ui-react';
import Urls from '../constants/urls';
import Logo from '../components/Logo';

const RouteNotFoundContainer = () => (
	<div className="page-container">
        <Grid centered>
			<Grid.Row>
				<Grid.Column width={12}>
				  <Grid centered>
				    <Grid.Row>
				      <Grid.Column computer={8} mobile={16}>
				        <Logo/>
				      </Grid.Column> 
				    </Grid.Row>
				  </Grid>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
	            <Grid.Column width={12}>
	              	<Grid className="content" centered>
		                <Grid.Row>
			                <Grid.Column computer={12} mobile={16}>
							  	<h2 className="text-center">
							    	<Icon name="exclamation" />
							    	Oops, this page does not exist!
							    </h2>
							    <div className="text-center">
							    	<a href={Urls.GAMES_PAGE}> <Icon name="angle left"/> Go to Games Page</a>
							    </div>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Grid.Column>
			</Grid.Row>
	  </Grid>
	</div>
);


export default RouteNotFoundContainer;