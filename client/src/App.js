import React from 'react';
import Nav from './Components/Navigation/Navigation';
import SignIn from './Components/Signing/SignIn';
import Register from './Components/Signing/Register';
import TeamList from './Components/Teams/TeamList';

import Home from './Home';

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
    if (route === 'signout') {
      this.setState({ isSignedIn: false });
    } else if (route === 'home') {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { isSignedIn, route } = this.state;
    return (
      <div className="App">
        <Nav isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {route === 'home' ? (
          <TeamList />
        ) : route === 'signin' ? (
          <SignIn onRouteChange={this.onRouteChange} />
        ) : (
          <Register onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}

export default App;
