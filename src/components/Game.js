import React from 'react';
import {
	Button,
	Icon
} from 'semantic-ui-react';

const Game = (game) => (
    <li>
        <div className="flex">
          <div className="img-container">
          	<img src={game.icon} alt="game" />
          </div>
          <div className="game-info">
          	<h4>{game.name}</h4>
          	<p>{game.description}</p>
			<Button
				secondary
			>
				Play
				<Icon name="angle right" />
			</Button>
          </div>
        </div>
    </li>
);

export default Game;