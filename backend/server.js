const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const app = express();
const cors = require('cors');
const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: 'Niyrtxqo19',
    database: 'PokemonTeamBuilder'
  }
});

db.select('*')
  .from('users')
  .then(data => {
    console.log(data);
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

let count = 1;
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
  res.send(database.users);
});

app.post('/signin', (req, res) => {
  if (
    req.body.username === database.users[0].username &&
    req.body.password === database.users[0].password
  ) {
    res.json(database.users[0]);
  } else {
    res.status(400).json('error logging in');
  }
});

app.post('/register', (req, res) => {
  const { email, username } = req.body;
  db('users')
    .returning('*')
    .insert({
      email: email,
      username: username,
      id: count
    })
    .then(user => {
      res.json(user[0]);
      count++;
    })
    .catch(err => res.status(400).json('unable to register'));
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

//needs to be changed for Db
app.get('/teams/:id', (req, res) => {
  const { id } = req.params;
  team.teams.forEach(team => {
    if (team.id === id) {
      res.json(team);
    } else {
      res.status(404).json('No teams yet');
    }
  });
});

app.get('/pokemons/:id/:teamname', (req, res) => {
  const { id, teamname } = req.params;
  let found = false;
  database.users.forEach(pokemon => {
    if (pokemon.id === id && pokemon.teamname === teamname) {
      found = true;
      res.json(pokemon.id);
    }
  });
  if (!found) {
    res.status(404).json('No teams yet');
  }
});

app.delete('pokemons/:id/:teamname/:pokemon', (req, res) => {
  const { id, teamname, name } = req.params;
  database.users.forEach(pokemon => {
    if (
      pokemon.id === id &&
      pokemon.teamname === teamname &&
      pokemon.name === name
    ) {
      let slice = database.users.indexOf(pokemon);
      database.users.pokemon.splice(slice, 1);
      res.json(database.users.pokemon);
    } else {
      res.status(404).json('No pokemon to delete');
    }
  });
});

app.delete('teams/:id/:teamname', (req, res) => {
  const { id, teamname } = req.params;
  database.users.forEach(teamname => {
    if (database.users.id === id && database.users.teamname === teamname) {
      let slice = database.users.indexOf(teamname);
      database.users.teams.splice(slice, 1);
      res.json(database.users.teams);
    } else {
      res.status(404).json('No team to delete');
    }
  });
});

//put in replace logic
app.put('pokemons/:id/:teamname/:pokemon', (req, res) => {
  const { id, teamname, name } = req.params;
  database.users.forEach(pokemon => {
    if (
      pokemon.id === id &&
      pokemon.teamname === teamname &&
      pokemon.name === name
    ) {
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
    } else {
      res.status(404).json('cannot find pokemon');
    }
  });
});

app.listen(3000, () => {
  console.log('app is running');
});

/*
/signin --> POST = success/fail
/register --> POST = user
/createteam --> POST = team
/addpokemon --> POST = pokemon
/team/:userId --> GET = team
/pokemon/:userId, teamname --> GET = pokemon
/deletepokemon --> DELETE = success/fail
/deleteteam --> DELETE = success/fail
/updatepokemon/:teamname --> PUT = success/fail



*/
