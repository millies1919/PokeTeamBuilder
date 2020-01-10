import React from 'react';
import { pokemonTeam } from '../PokeCard/PokeCard';

const TeamCard = () => {
  const renderList = () => {
    if (pokemonTeam !== undefined) {
      return pokemonTeam.map(pokemon => {
        return (
          <div className="item" key={pokemon.index}>
            <div className="content">
              <div className="name">{pokemon.name}</div>
              <img
                className="sprite"
                src={pokemon.sprite}
                alt="Pokemon sprite"
              />
              <div className="ability">{pokemon.ability}</div>
              <div className="item">{pokemon.item}</div>
              <div className="evs">
                Hp: {pokemon.EVs.hpev}
                Attack: {pokemon.EVs.atkev}
                Defense: {pokemon.EVs.defev}
                Special Attack: {pokemon.EVs.spaev}
                Special Defense: {pokemon.EVs.spdev}
                Speed: {pokemon.EVs.speev}
              </div>
              <div className="nature">{pokemon.nature}</div>
              <div class="ui card">
                <div class="content">
                  <div class="header">Moves</div>
                </div>
                <div class="content">
                  <div class="ui small feed">
                    <div class="event">
                      <div class="content">
                        <div class="summary">Move 1: {pokemon.moves.move1}</div>
                      </div>
                    </div>
                    <div class="event">
                      <div class="content">
                        <div class="summary">Move 2: {pokemon.moves.move2}</div>
                      </div>
                    </div>
                    <div class="event">
                      <div class="content">
                        <div class="summary">Move 3: {pokemon.moves.move3}</div>
                      </div>
                    </div>
                    <div class="event">
                      <div class="content">
                        <div class="summary">Move 4: {pokemon.moves.move4}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="ui red button">Delete</button>
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
