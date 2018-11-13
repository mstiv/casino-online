import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { 
  Grid,
  Button,
  Icon,
} from 'semantic-ui-react';
import Logo from '../components/Logo';
import PlayerInfo from '../components/PlayerInfo';

import './GameDetail.scss'

import comeon from '../lib/comeon-game';

import Urls from '../constants/urls';

import {
  logoutUser
} from './utils';

class GamesList extends React.Component {

  handleLogout = () => {
    const { player, dispatch } = this.props;
    dispatch(logoutUser(player.username));
  }

  componentDidMount() {
    const { match, history } = this.props;
    const { params } = match;
    const didLaunch = comeon.game.launch(params.game); //check if it was a valid game
    if(!didLaunch){
      history.push(Urls.NOT_FOUND);
    }
  }
  render() {
    const { player, games, match } = this.props;
    const { params } = match;
    const selectedGame = games.find(game => game.code === params.game);
    return (
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
            <Grid.Column largeScreen={12} widescreen={16}>
              <Grid className="content" centered>
                <Grid.Row>
                  <Grid.Column className="user" width={16}>
                    <PlayerInfo {...player} />
                    <Button
                      className="logout"
                      secondary
                      onClick={(e) => {
                        this.handleLogout();
                      }}
                    >
                      <Icon name="angle left" />
                      Logout
                    </Button>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row className="game-container">
                  <Grid.Column width={16}>
                    {selectedGame && <h2 className="title">{selectedGame.name}</h2> }
                    <div className="flex"> 
                      <div id="game-launch"></div>
                      <div className="game-details">
                        { selectedGame && <p>{selectedGame.description}</p>}
                        <Link to={Urls.GAMES_PAGE}>
                          <Button
                            className="back-button"
                            secondary
                          >
                            <Icon name="angle left" />
                            Back to Games Page
                          </Button>                        
                        </Link>
                      </div>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
      player: state.player,
      games: state.games,
      categories: state.categories
  }
};

export default withRouter(connect(mapStateToProps)(GamesList))