import React, { useState } from 'react';
import './PokeCard.css';
import { natureArr, evArr, moveArr } from '../../data/data';

const PokeCard = props => {
  const [EvHide, setEvHide] = useState('hidden');
  const [moveHide, setMoveHide] = useState('hidden');
  let data = [];
  let pokemon = {};

  const sumbitPokemon = () => {
    let ability = document.getElementById('selectabilities');
    let item = document.getElementById('item');
    let hp = document.getElementById('hpev');
    let atk = document.getElementById('atkev');
    let def = document.getElementById('defev');
    let spa = document.getElementById('spaev');
    let spd = document.getElementById('spdev');
    let spe = document.getElementById('speev');
    let nature = document.getElementById('selectednatures');
    let move1 = document.getElementById('move1');
    let move2 = document.getElementById('move2');
    let move3 = document.getElementById('move3');
    let move4 = document.getElementById('move4');

    pokemon = {
      name: `${data.name}`,
      sprite: `${data.sprites.front_default}`,
      type1: `${data.types[0].type.name}`,
      type2: data.types.length > 1 ? `${data.types[1].type.name}` : null,
      ability: `${ability.options[ability.selectedIndex].value}`,
      item: `${item.value}`,
      hpev: `${hp.value}`,
      attackev: `${atk.value}`,
      defenseev: `${def.value}`,
      specialattackev: `${spa.value}`,
      specialdefenseev: `${spd.value}`,
      speedev: `${spe.value}`,
      nature: `${nature.options[nature.selectedIndex].value}`,
      move1: `${move1.value}`,
      move2: `${move2.value}`,
      move3: `${move3.value}`,
      move4: `${move4.value}`
    };
    props.onAddPokemon(pokemon);

    if (props.team.length < 6) {
      fetch('http://localhost:3000/newpokemon', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: props.id,
          teamname: props.teamname,
          name: pokemon.name,
          sprite: pokemon.sprite,
          type1: pokemon.type1,
          type2: pokemon.type2,
          ability: pokemon.ability,
          item: pokemon.item,
          hpev: pokemon.hpev,
          attackev: pokemon.attackev,
          defenseev: pokemon.defenseev,
          specialattackev: pokemon.specialattackev,
          specialdefenseev: pokemon.specialdefenseev,
          speedev: pokemon.speedev,
          nature: pokemon.nature,
          move1: pokemon.move1,
          move2: pokemon.move2,
          move3: pokemon.move3,
          move4: pokemon.move4
        })
      }).then(response => response.json());
    }
    ability.value = '';
    item.value = '';
    hp.value = '';
    atk.value = '';
    def.value = '';
    spa.value = '';
    spd.value = '';
    spe.value = '';
    move1.value = '';
    move2.value = '';
    move3.value = '';
    move4.value = '';
  };

  data = props.data;
  if (data.length === 0) {
    return <div>Find a Pokemon!</div>;
  } else {
    //store possible moves in array
    var possibleMoves = data.moves.map(data => {
      return data.move.name;
    });
    return (
      <div id="pokewrapper">
        <div id="entercard">
          <div id="spritecontainer">
            <img
              id="spriteimg"
              src={data.sprites.front_default}
              alt="Pokemon sprite"
            />
            <p id="name">{data.name}</p>
          </div>
          <div id="typecontainer">
            <label htmlFor="types">
              Type:
              {data.types.map((value, index) => {
                return (
                  <span
                    id={value.type.name}
                    key={index}
                    value={value.type.name}
                  >
                    {value.type.name}
                  </span>
                );
              })}
            </label>
          </div>
          <div id="abilityconatiner">
            <label htmlFor="selectabilities">
              Ability:
              <select id="selectabilities">
                {data.abilities.map((value, index) => {
                  return (
                    <option key={index} value={value.ability.names}>
                      {value.ability.name}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>
          <div id="itemcontainer">
            <label htmlFor="item">
              {' '}
              Item:
              <input type="text" id="item" />
            </label>
          </div>
          <div id="evcontainer">
            EVs
            <p id="evError" className={EvHide}>
              {' '}
              Individual EVs can't be above 252
            </p>
            {evArr.map(value => {
              return (
                <label htmlFor={value.id} id="evLabel" key={value.id}>
                  {value.text}
                  <input
                    id={value.id}
                    type="number"
                    max="252"
                    onBlur={e => {
                      e.target.value > 252
                        ? setEvHide('nothidden')
                        : setEvHide('hidden');
                    }}
                  />
                </label>
              );
            })}
          </div>
          <div id="naturecontainer">
            <label htmlFor="selectednatures">
              Nature:
              <select id="selectednatures">
                {natureArr.map((value, index) => {
                  return (
                    <option key={index} value={value}>
                      {value}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>
          <div id="movecontainer">
            Moves:
            <p id="moveError" className={moveHide}>
              One or more invalid moves
            </p>
            {moveArr.map(value => {
              return (
                <label htmlFor={value.id} id="moveLabel" key={value.id}>
                  {value.text}
                  <input
                    id={value.id}
                    type="text"
                    onBlur={e =>
                      possibleMoves.includes(e.target.value)
                        ? setMoveHide('hidden')
                        : setMoveHide('nothidden')
                    }
                  />
                </label>
              );
            })}
          </div>
          <button
            id="submitpokemon"
            className="ui red button"
            onClick={sumbitPokemon}
          >
            Submit Pokemon
          </button>
        </div>
      </div>
    );
  }
};

export default PokeCard;
