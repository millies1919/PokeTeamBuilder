const handleNewTeam = (req, res, db) => {
  const { id, teamname } = req.body;
  db('teams')
    .returning('*')
    .insert({ id: id, teamname: teamname })
    .then(teams => {
      res.json(teams);
    })
    .catch(err => res.status(400).json('unable to create team'));
};

module.exports = {
  handleNewTeam: handleNewTeam
};
