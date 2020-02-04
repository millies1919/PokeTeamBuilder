const handleGrabTeam = (req, res, db) => {
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
};
module.exports = {
  handleGrabTeam: handleGrabTeam
};
