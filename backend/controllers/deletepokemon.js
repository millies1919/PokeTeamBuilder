const handleDeletePokemon = (req, res, db) => {
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
};

module.exports = {
  handleDeletePokemon: handleDeletePokemon
};
