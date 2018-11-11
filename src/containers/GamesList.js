import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { 
  Grid,
  Button,
  Icon,
  Loader,
  Search
} from 'semantic-ui-react';
import Logo from '../components/Logo';
import PlayerInfo from '../components/PlayerInfo';
import Game from '../components/Game';

import './GamesList.scss'

import {
  getAllGames,
  getAllCategories,
  logoutUser
} from './utils';

class GamesList extends React.Component {
  constructor(props){
    super(props);
    console.log(props.games)
    this.state = {
      games: props.games,
      categories: props.categories,
      isLoading: {
        games: false,
        categories: false,
        search: false,
        logout: false,
      }
    };
  }
  getGames = async () => {
    const { dispatch } = this.props;
    const { isLoading } = this.state;
    this.setState({
      isLoading: {
        ...isLoading,
        games: true
      }
    });
    const games = await dispatch(getAllGames());
    this.setState({
      games,
      isLoading: {
        ...isLoading,
        games: false
      }
    });
  }

  getCategories = async () => {
    const { dispatch } = this.props;
    const { isLoading } = this.state;
    this.setState({
      isLoading: {
        ...isLoading,
        categories: true
      }
    });
    const categories = await dispatch(getAllCategories());
    this.setState({
      categories,
      isLoading: {
        ...isLoading,
        categories: false
      }
    });
  }

  handleLogout = () => {
    const { player, dispatch } = this.props;
    dispatch(logoutUser(player.username));
  }

  componentDidMount() {
    const { games, categories } = this.state;
    if(!games.length) {
      this.getGames();
    }
    if(!categories.length) {
      this.getCategories();
    }
  }
  render() {
    const { player } = this.props;
    const { games, categories, isLoading } = this.state;
    console.log(games, isLoading);
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
            <Grid className="content">
              <Grid.Row>
                <Grid.Column className="user" width={12}>
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
                <Grid.Column width={4}>
                  <Search
                    loading={isLoading.search}
                   />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={12}>
                    <h2 className="title">Games </h2>
                    <ul className="games-list">
                      <Loader active={isLoading.games} />
                      {
                        games.map(game => (
                          <Game key={game.code} {...game} />
                        ))
                      }
                    </ul>
                </Grid.Column>
                <Grid.Column width={4}>
                    <h2 className="title">Categories </h2>
                    <ul className="categories">
                      <Loader active={isLoading.categories} />
                      {
                        categories.map(category => (
                          <li key={category.id}>
                            {category.name}
                          </li>
                        ))
                      }
                    </ul>
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