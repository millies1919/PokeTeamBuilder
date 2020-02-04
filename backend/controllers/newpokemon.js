const handleNewPokemon = (req, res, db) => {
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
};

module.exports = {
  handleNewPokemon: handleNewPokemon
};
