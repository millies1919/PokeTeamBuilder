const handleGrabPokemon = (req, res, db) => {
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
};

module.exports = {
  handleGrabPokemon: handleGrabPokemon
};
