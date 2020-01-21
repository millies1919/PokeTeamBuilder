import React from 'react';
import Nav from './Components/Navigation/Navigation';
import SignIn from './Components/Signing/SignIn';
import Register from './Components/Signing/Register';
import TeamList from './Components/Teams/TeamList';
import StartTeam from './Components/CreateTeam/StartTeam';
import TeamBuilder from './Components/Teams/TeamBuilder';

const initialUserState = {
  route: 'signin',
  isSignedIn: false,
  teamname: '',
  team: [],
  user: {
    id: '',
    name: '',
    email: ''
  }
};

class App extends React.Component {
  constructor() {
    super();
    this.state = initialUserState;
  }

  clearTeam = () => {
    this.setState({ team: [] });
  };

  onDeletePokemon = name => {
    this.setState(state => {
      const team = state.team.filter(pokemon => pokemon.name !== name);
      return {
        team
      };
    });
  };

  onAddPokemon = pokemon => {
    this.setState(state => {
      const team = [...state.team, pokemon];
      return {
        team
      };
    });
  };

  setTeam = teamname => {
    this.setState({
      teamname: teamname
    });
  };

  loadUser = data => {
    this.setState({
      user: {
        id: data.id,
        email: data.email,
        username: data.username
      }
    });
  };

  onRouteChange = route => {
    if (route === 'signin') {
      this.setState({ isSignedIn: false });
    } else if (route === 'teamlist') {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { isSignedIn, route } = this.state;
    return (
      <div className="App">
        <Nav isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {route === 'teamlist' ? (
          <TeamList
            onRouteChange={this.onRouteChange}
            id={this.state.user.id}
            setTeam={this.setTeam}
          />
        ) : route === 'signin' ? (
          <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
        ) : route === 'register' ? (
          <Register
            onRouteChange={this.onRouteChange}
            loadUser={this.loadUser}
          />
        ) : route === 'createteam' ? (
          <StartTeam
            onRouteChange={this.onRouteChange}
            id={this.state.user.id}
          />
        ) : (
          <TeamBuilder
            onDeletePokemon={this.onDeletePokemon}
            onAddPokemon={this.onAddPokemon}
            onRouteChange={this.onRouteChange}
            teamname={this.state.teamname}
            id={this.state.user.id}
            team={this.state.team}
            clearTeam={this.clearTeam}
          />
        )}
      </div>
    );
  }
}

export default App;
