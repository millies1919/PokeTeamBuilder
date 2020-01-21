import React, { useEffect } from 'react';

const TeamCard = ({ id, teamname, onAddPokemon, team, onDeletePokemon }) => {
  useEffect(() => {
    fetch(`http://localhost:3000/pokemons/${id}/${teamname}`)
      .then(response => {
        return response.json();
      })
      .then(pokemons => {
        pokemons.map(pokemon => {
          return onAddPokemon(pokemon);
        });
      });
  }, []);

  const deletePokemon = (teamname, id, name) => {
    return fetch(
      `http://localhost:3000/deletepokemon/${id}/${teamname}/${name}`,
      {
        method: 'delete'
      }
    ).then(response => {
      onDeletePokemon(name);
      return response.json();
    });
  };

  const renderList = () => {
    if (team !== undefined) {
      return team.map(pokemon => {
        return (
          <div className="item" key={pokemon.index}>
            <div className="content">
              <div className="name">{pokemon.name}</div>
              <div className="type1">{pokemon.type1}</div>
              {pokemon.type2 !== null ? (
                <div className="type2">{pokemon.type2}</div>
              ) : (
                <div></div>
              )}
              <img
                className="sprite"
                src={pokemon.sprite}
                alt="Pokemon sprite"
              />
              <div className="ability">{pokemon.ability}</div>
              <div className="item">{pokemon.item}</div>
              <div className="evs">
                Hp: {pokemon.hpev}
                Attack: {pokemon.attackev}
                Defense: {pokemon.defenseev}
                Special Attack: {pokemon.specialattackev}
                Special Defense: {pokemon.specialdefenseev}
                Speed: {pokemon.speedev}
              </div>
              <div className="nature">{pokemon.nature}</div>
              <div className="ui card">
                <div className="content">
                  <div className="header">Moves</div>
                </div>
                <div className="content">
                  <div className="ui small feed">
                    <div className="event">
                      <div className="content">
                        <div className="summary">Move 1: {pokemon.move1}</div>
                      </div>
                    </div>
                    <div className="event">
                      <div className="content">
                        <div className="summary">Move 2: {pokemon.move2}</div>
                      </div>
                    </div>
                    <div className="event">
                      <div className="content">
                        <div className="summary">Move 3: {pokemon.move3}</div>
                      </div>
                    </div>
                    <div className="event">
                      <div className="content">
                        <div className="summary">Move 4: {pokemon.move4}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="ui red button"
              onClick={() => deletePokemon(teamname, id, pokemon.name)}
            >
              Delete
            </button>
          </div>
        );
      });
    } else {
      return <div>Pokemon</div>;
    }
  };

  return (
    <div>
      <h2>Pokemon</h2>
      <div className="ui celled list">{renderList()}</div>
    </div>
  );
};

export default TeamCard;
