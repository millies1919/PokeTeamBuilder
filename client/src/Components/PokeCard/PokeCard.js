import React, { useState } from 'react';
import './PokeCard.css';
import { natureArr, evArr, moveArr } from '../../data/data';
import TeamCard from '../TeamCard/TeamCard';

let data = [];
export let pokemonTeam = [];

const PokeCard = props => {
  const sumbitPokemon = () => {
    var ability = document.getElementById('selectabilities');
    var item = document.getElementById('item');
    var hp = document.getElementById('hpev');
    var atk = document.getElementById('atkev');
    var def = document.getElementById('defev');
    var spa = document.getElementById('spaev');
    var spd = document.getElementById('spdev');
    var spe = document.getElementById('speev');
    var nature = document.getElementById('selectednatures');
    var move1 = document.getElementById('move1');
    var move2 = document.getElementById('move2');
    var move3 = document.getElementById('move3');
    var move4 = document.getElementById('move4');

    let pokemon = {
      name: `${data.name}`,
      sprite: `${data.sprites.front_default}`,
      type: {
        type1: `${data.types[0].type.name}`,
        type2: data.types.length > 1 ? `${data.types[1].type.name}` : null
      },
      ability: `${ability.options[ability.selectedIndex].value}`,
      item: `${item.value}`,
      EVs: {
        hpev: `${hp.value}`,
        atkev: `${atk.value}`,
        defev: `${def.value}`,
        spaev: `${spa.value}`,
        spdev: `${spd.value}`,
        speev: `${spe.value}`
      },
      nature: `${nature.options[nature.selectedIndex].value}`,
      moves: {
        move1: `${move1.value}`,
        move2: `${move2.value}`,
        move3: `${move3.value}`,
        move4: `${move4.value}`
      }
    };
    if (pokemonTeam.length < 6) {
      pokemonTeam.push(pokemon);
      console.log(pokemonTeam);
    }
  };

  const [EvHide, setEvHide] = useState('hidden');
  const [moveHide, setMoveHide] = useState('hidden');
  data = props.data;
  if (data.length === 0) {
    return <div>Find a Pokemon!</div>;
  } else {
    //store possible moves in array
    var possibleMoves = data.moves.map(data => {
      return data.move.name;
    });
    console.log(data);
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
                      e.target.value >= 252
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
        <div>
          <TeamCard team={pokemonTeam} />
        </div>
      </div>
    );
  }
};

export default PokeCard;
