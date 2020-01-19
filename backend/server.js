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

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const pokemons = {
  pokemon: [{}]
};

app.get('/', (req, res) => {
  res.send('it is working');
});
//posts signin credentials to table, checks hash to ensure valid login
app.post('/signin', (req, res) => {
  db.select('username', 'hash')
    .where('username', '=', req.body.username)
    .from('login')
    .then(data => {
      const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
      if (isValid) {
        return db
          .select('*')
          .from('users')
          .where('username', '=', req.body.username)
          .then(user => {
            res.json(user[0]);
          })
          .catch(err => res.status(400).json('unable to find user'));
      } else {
        res.status(400).json('wrong credentials');
      }
    })
    .catch(err => res.status(400).json('wrong credentials'));
});
//registers a new user to users table
app.post('/register', (req, res) => {
  const { email, username, password } = req.body;
  const hash = bcrypt.hashSync(password);
  db.transaction(trx => {
    trx
      .insert({
        hash: hash,
        username: username
      })
      .into('login')
      .returning('username')
      .then(loginUsername => {
        return trx('users')
          .returning('*')
          .insert({
            email: email,
            username: loginUsername[0]
          })
          .then(user => {
            res.json(user[0]);
          });
      })
      .then(trx.commit)
      .catch(trx.rollback);
  }).catch(err => res.status(400).json(err));
});
//adds new teams to teams table
app.post('/newteam', (req, res) => {
  const { id, teamname } = req.body;
  db('teams')
    .returning('*')
    .insert({ id: id, teamname: teamname })
    .then(teams => {
      res.json(teams);
    })
    .catch(err => res.status(400).json('unable to create team'));
});
//adds new pokemon to pokemon table
app.post('/newpokemon', (req, res) => {
  const {
    teamname,
    name,
    id,
    sprite,
    type1,
    type2,
    ability,
    item,
    hpev,
    attackev,
    defenseev,
    specialattackev,
    specialdefenseev,
    speedev,
    nature,
    move1,
    move2,
    move3,
    move4
  } = req.body;
  db('pokemon')
    .returning('*')
    .insert({
      id: id,
      teamname: teamname,
      name: name,
      sprite: sprite,
      type1: type1,
      type2: type2,
      ability: ability,
      item: item,
      hpev: hpev,
      attackev: attackev,
      defenseev: defenseev,
      specialattackev: specialattackev,
      specialdefenseev: specialdefenseev,
      speedev: speedev,
      nature: nature,
      move1: move1,
      move2: move2,
      move3: move3,
      move4: move4
    })
    .then(pokemon => {
      res.json(pokemon);
    })
    .catch(err => res.status(400).json(err));
});
//grabs all teams for a specific user
app.get('/teams/:id', (req, res) => {
  const { id } = req.params;
  db.select('*')
    .from('teams')
    .where({
      id: id
    })
    .then(teams => {
      if (teams.length) {
        res.json(teams);
      } else {
        res.json([]);
      }
    })
    .catch(err => res.status(400).json('not found'));
});
//grabs all pokemon for a specific user and teamname
app.get('/pokemons/:id/:teamname', (req, res) => {
  const { id, teamname } = req.params;
  db.select('*')
    .from('pokemon')
    .where({
      id: id
    })
    .andWhere({ teamname: teamname })
    .then(pokemons => {
      if (pokemons.length) {
        res.json(pokemons);
      } else {
        res.json([]);
      }
    })
    .catch(err => res.status(400).json('not found'));
});
//deletes a pokemon from the pokemon table
app.delete('/deletepokemon/:id/:teamname/:name', (req, res) => {
  const { id, teamname, name } = req.params;
  db('pokemon')
    .where('teamname', teamname)
    .andWhere('id', id)
    .andWhere('name', name)
    .del()
    .then(() => {
      return db
        .select('*')
        .from('pokemon')
        .where({ id: id })
        .andWhere({ teamname: teamname })
        .then(pokemon => {
          res.send(pokemon);
        });
    })
    .catch(err => res.status(400).json('not found'));
});
//deletes a team and all pokemon of that team from the teams and pokemons table
app.delete('/teamdelete/:teamname/:id', (req, res) => {
  const { id, teamname } = req.params;
  db.transaction(trx => {
    trx('teams')
      .where({ teamname: teamname })
      .andWhere({ id: id })
      .del()
      .then(() => {
        db.select('*')
          .from('teams')
          .where({ id: id })
          .then(teams => {
            res.send(teams);
          });
      })
      .then(() => {
        return trx('pokemon')
          .where('teamname', teamname)
          .andWhere('id', id)
          .del()
          .then(pokemons => {
            res.json(pokemons);
          });
      })
      .then(trx.commit)
      .catch(trx.rollback);
  }).catch(err => res.status(400).json(err));
});

app.listen(3000, () => {
  console.log('app is running');
});

//updatepokemon/:id/:teamname --> PUT = success/fail
//updateteam/:id/:teamname
