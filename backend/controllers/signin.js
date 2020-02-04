const handleSignIn = (req, res, db, bcrypt) => {
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
};

module.exports = {
  handleSignIn: handleSignIn
};
