import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { 
  Grid,
  Button,
  Icon,
  Loader,
} from 'semantic-ui-react';
import Logo from '../components/Logo';
import PlayerInfo from '../components/PlayerInfo';

import './GamesList.scss'

import comeon from '../lib/comeon-game';

import Urls from '../constants/urls';

class GamesList extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    comeon.game.launch(params.game);
  }
  render() {
    const { player } = this.props;
    return (
      <Grid className="page-container" centered>
        <Grid.Row>
          <Grid.Column width={12}>
            <Grid centered>
              <Grid.Row>
                <Grid.Column width={8}>
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
                <Grid.Column className="user" width={16}>
                  <PlayerInfo {...player} />
                  <Link to={Urls.GAMES_PAGE}>
                    <Button
                      secondary
                      className="back-button"
                    >
                      <Icon name="angle left" />
                      Back to Games 
                    </Button>
                  </Link>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={16}>
                  <div id="game-launch"></div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
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