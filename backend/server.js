const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const app = express();
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const newteam = require('./controllers/newteam');
const newpokemon = require('./controllers/newpokemon');
const grabteam = require('./controllers/grabteam');
const grabpokemon = require('./controllers/grabpokemon');
const deletepokemon = require('./controllers/deletepokemon');
const deleteteam = require('./controllers/deleteteam');

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

app.get('/', (req, res) => {
  res.send('it is working');
});
//posts signin credentials to table, checks hash to ensure valid login
app.post('/signin', (req, res) => {
  signin.handleSignIn(req, res, db, bcrypt);
});
//registers a new user to users table
app.post('/register', (req, res) => {
  register.handleRegister(req, res, db, bcrypt);
});
//adds new teams to teams table
app.post('/newteam', (req, res) => {
  newteam.handleNewTeam(req, res, db);
});
//adds new pokemon to pokemon table
app.post('/newpokemon', (req, res) => {
  newpokemon.handleNewPokemon(req, res, db);
});
//grabs all teams for a specific user
app.get('/teams/:id', (req, res) => {
  grabteam.handleGrabTeam(req, res, db);
});
//grabs all pokemon for a specific user and teamname
app.get('/pokemons/:id/:teamname', (req, res) => {
  grabpokemon.handleGrabPokemon(req, res, db);
});
//deletes a pokemon from the pokemon table
app.delete('/deletepokemon/:id/:teamname/:name', (req, res) => {
  deletepokemon.handleDeletePokemon(req, res, db);
});
//deletes a team and all pokemon of that team from the teams and pokemons table
app.delete('/teamdelete/:teamname/:id', (req, res) => {
  deleteteam.handleDeleteTeam(req, res, db);
});

app.listen(3000, () => {
  console.log('app is running');
});

//updatepokemon/:id/:teamname --> PUT = success/fail
//updateteam/:id/:teamname
