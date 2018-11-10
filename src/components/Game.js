import React from 'react';
import {
	Grid,
	Button
} from 'semantic-ui-react';

const Game = (game) => (
    <Grid>
      <Grid.Row>
        <Grid.Column width={4}>
          <div className="img-container">
          	<img src={game.icon} alt="game" />
          </div>
        </Grid.Column> 
        <Grid.Column width={12}>
          <div className="game-info">
          	<h4>{game.name}</h4>
          	<p>{game.description}</p>
          </div>
        </Grid.Column> 
      </Grid.Row>
    </Grid>
);

export default Game;