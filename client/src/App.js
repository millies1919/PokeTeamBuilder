import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CreateTeam from './StartTeam';
import DeleteTeam from './Components/Deleting/DeleteTeam';
import Nav from './Components/Navigation/Navigation';
import SignIn from './Components/Signing/SignIn';
import Register from './Components/Signing/Register';
import TeamBuilder from './Components/Teams/TeamBuilder';
import TeamList from './Components/Teams/TeamList';
import DeletePokemon from './Components/Deleting/DeletePokemon';
import Home from './Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/register" exact component={Register} />
          <Route path="/createteam" exact component={CreateTeam} />
          <Route path="/deleteteam" exact component={DeleteTeam} />
          <Route path="/teams" exact component={TeamList} />
          <Route path="/teammaker" exact component={TeamBuilder} />
          <Route path="/deletepokemon" exact component={DeletePokemon} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
