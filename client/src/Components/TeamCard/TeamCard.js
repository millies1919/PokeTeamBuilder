import React, { useEffect } from 'react';
import './TeamCard.css';

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
          <div id="teamwrapper">
            <div id="pokecard">
              <div id="spritecontainer">
                <img id="spriteimg" src={pokemon.sprite} alt="Pokemon sprite" />
                <p id="name">{pokemon.name}</p>
              </div>
              <div id="flex2">
                <div id="typecontainer">
                  <label htmlFor="types">
                    Type
                    <span id={pokemon.type1}>{pokemon.type1}</span>
                    {pokemon.type2 !== null ? (
                      <span className="type2" id={pokemon.type2}>
                        {pokemon.type2}
                      </span>
                    ) : (
                      <div></div>
                    )}
                  </label>
                </div>
                <div id="abilitycontainer">
                  Ability
                  <br />
                  {pokemon.ability}
                </div>
                <div id="naturecontainer">
                  Nature
                  <br />
                  {pokemon.nature}
                </div>
                <div id="itemcontainer">
                  Item
                  <br />
                  {pokemon.item}
                </div>
              </div>
              <div id="evcontainer">
                EVs
                <div id="evdiv">
                  Hp: {pokemon.hpev}
                  Attack: {pokemon.attackev}
                  Defense: {pokemon.defenseev}
                  Special Attack: {pokemon.specialattackev}
                  Special Defense: {pokemon.specialdefenseev}
                  Speed: {pokemon.speedev}
                </div>
              </div>
              <div id="movecontainer">
                Moves
                {pokemon.move1}
                {pokemon.move2}
                {pokemon.move3}
                {pokemon.move4}
              </div>
              <button
                id="deletebutton"
                className="ui red button"
                onClick={() => deletePokemon(teamname, id, pokemon.name)}
              >
                Delete
              </button>
            </div>
            <hr />
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
      <hr />
      <div className="ui celled list">{renderList()}</div>
    </div>
  );
};

export default TeamCard;
