import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { 
  Grid,
  Button,
  Icon,
  Loader
} from 'semantic-ui-react';
import Logo from '../components/Logo';
import PlayerInfo from '../components/PlayerInfo';
import Game from '../components/Game';

import './GamesList.scss'

import {
  getAllGames
} from './utils';

class GamesList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      games: props.games,
      isLoading: false
    };
  }
  getGames = async () => {
    const { dispatch } = this.props;
    this.setState({
      isLoading: true
    });
    const games = await dispatch(getAllGames());
    this.setState({
      games,
      isLoading: false
    });
  }
  componentDidMount() {
    const { games } = this.state;
    if(!games.length) {
      this.getGames();
    }
  }
  render() {
    const { player } = this.props;
    const { games, isLoading } = this.props;
    return (
      <Grid className="page-container" centered>
          <Grid.Column width={12}>

            <Grid centered>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Logo/>
                </Grid.Column> 
              </Grid.Row>
            </Grid>

            <Grid className="content" padded>
              <Grid.Row className="user">
                <Grid.Column width={6}>
                  <PlayerInfo {...player} />
                  <Button
                    className="logout"
                    secondary
                    disabled={this.state.isLoggingIn}
                  >
                    <Icon name="angle left" />
                    Logout
                  </Button>
                </Grid.Column>
                <Grid.Column width={3}>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={12}>
                  <div className="games-list">
                    <h2>Games </h2>
                    <Loader active={isLoading} />
                    {
                      games.map(game => (
                        <Game {...game} />
                      ))
                    }
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>


          </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return{
      player: state.player,
      games: state.games
  }
};

export default withRouter(connect(mapStateToProps)(GamesList))