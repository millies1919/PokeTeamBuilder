const handleDeleteTeam = (req, res, db) => {
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
          .del();
      })
      .then(trx.commit)
      .catch(trx.rollback);
  }).catch(err => res.status(400).json(err));
};

module.exports = {
  handleDeleteTeam: handleDeleteTeam
};
