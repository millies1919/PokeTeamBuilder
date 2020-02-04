const handleRegister = (req, res, db, bcrypt) => {
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
};

module.exports = {
  handleRegister: handleRegister
};
