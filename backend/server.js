const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const database = {
  users: [
    {
      id: '123',
      username: 'betty',
      email: 'john@gmail.com',
      password: 'cookies'
    }
  ]
};

const team = {
  teams: [
    {
      id: '123',
      teamname: 'Pikachu team'
    }
  ]
};
const pokemons = {
  pokemon: [{}]
};

app.get('/', (req, res) => {
  res.send(database);
});

app.post('/signin', (req, res) => {
  if (
    req.body.username === database.users[0].username &&
    req.body.password === database.users[0].password
  ) {
    res.json('success');
  } else {
    res.status(400).json('error logging in');
  }
});

app.post('/register', (req, res) => {
  const { email, username, password } = req.body;
  database.users.push({
    id: '125',
    username: username,
    email: email,
    password: password
  });
  res.json(database.users[database.users.length - 1]);
});

app.post('/newteam', (req, res) => {
  console.log(req.body);
  team.teams.push({
    id: '124',
    teamname: req.body.teamname
  });
  res.json(team.teams[team.teams.length - 1]);
});

app.post('/newpokemon', (req, res) => {
  console.log(req.body);
  const { teamname, name } = req.body;
  pokemons.pokemon.push({
    id: '124',
    teamname: teamname,
    name: name,
    spriteUrl: spriteUrl,
    type: {
      type1: type1,
      type2: type2
    },
    ability: ability,
    item: item,
    EVs: {
      hpev: hpev,
      atkev: atkev,
      defev: defev,
      spaev: spaev,
      spdev: spdev,
      speev: speev
    },
    nature: nature,
    moves: {
      move1: move1,
      move2: move2,
      move3: move3,
      move4: move4
    }
  });
  res.json(pokemons.pokemon[pokemons.pokemon.length - 1]);
});

app.listen(3000, () => {
  console.log('app is running');
});

//needs to be changed for Db
app.get('/teams/:id', (req, res) => {
  const { id } = req.params;
  database.users.forEach(team => {
    if (team.id === id) {
      res.json(team.id);
    } else {
      res.status(404).json('No teams yet');
    }
  });
});

app.get('/pokemons/:id/:teamname', (req, res) => {
  const { id, teamname } = req.params;
  database.users.forEach(pokemon => {
    if (pokemon.id === id && pokemon.teamname === teamname) {
      res.json(pokemon.id);
    } else {
      res.status(404).json('No teams yet');
    }
  });
});
/*
/signin --> POST = success/fail
/register --> POST = user
/createteam --> POST = team
/addpokemon --> POST = pokemon
/team/:userId --> GET = team
/pokemon/:userId, teamname --> GET = pokemon

/updateteam/:teamname --> PUT = team
/updatepokemon/:teamname --> PUT = success/fail
/deleteteam --> DELETE = success/fail
/deletepokemon --> DELETE = success/fail

*/
