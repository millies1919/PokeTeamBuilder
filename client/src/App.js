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
          <TeamList onRouteChange={this.onRouteChange} />
        ) : route === 'signin' ? (
          <SignIn onRouteChange={this.onRouteChange} />
        ) : route === 'register' ? (
          <Register onRouteChange={this.onRouteChange} />
        ) : route === 'createteam' ? (
          <StartTeam onRouteChange={this.onRouteChange} />
        ) : (
          <TeamBuilder onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}

export default App;
