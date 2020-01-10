const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const database = {
  users: [
    {
      id: '123',
      username: 'john',
      email: 'john@gmail.com',
      password: 'cookies'
    }
  ]
};

app.get('/', (req, res) => {
  res.send('this is working');
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
  const { email, name, password } = req.body;
  database.users.push({
    id: '125',
    username: name,
    email: email,
    password: password
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
/profile/:userId --> GET = user
/updateteam/:teamname --> PUT = team
/updatepokemon/:teamname --> PUT = success/fail
/deleteteam --> DELETE = success/fail
/deletepokemon --> DELETE = success/fail
/team/:userId --> GET = team
/pokemon/:userId, teamname --> GET = pokemon

*/
