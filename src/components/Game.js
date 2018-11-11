import React from 'react';
import { Link } from 'react-router-dom';
import {
	Button,
	Icon
} from 'semantic-ui-react';

import Urls from '../constants/urls';

const Game = (game) => (
    <li>
        <div className="flex">
          <div className="img-container">
          	<img src={`/${game.icon}`} alt="game" />
          </div>
          <div className="game-info">
          	<h4>{game.name}</h4>
          	<p>{game.description}</p>
            <Link to={Urls.GAME_DETAIL(game.code)}>
        			<Button
        				secondary
        			>
        				Play
        				<Icon name="angle right" />
        			</Button>
            </Link>
          </div>
        </div>
    </li>
);

export default Game;