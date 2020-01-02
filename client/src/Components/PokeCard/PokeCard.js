import React, { useState } from 'react';
import './PokeCard.css';

var evObj = [
  { id: 'hpev', text: 'HP:' },
  { id: 'atkev', text: 'ATK:' },
  { id: 'spaev', text: 'SPA:' },
  { id: 'defev', text: 'DEF:' },
  { id: 'spdev', text: 'SPD:' },
  { id: 'speev', text: 'SPE:' }
];

var moveObj = [
  { id: 'move1', text: 'Move 1:' },
  { id: 'move2', text: 'Move 2:' },
  { id: 'move3', text: 'Move 3:' },
  { id: 'move4', text: 'Move 4:' }
];

var natureArr = [
  'Adamant (+Atk, -Spa)',
  'Bashful',
  'Bold (+Def, -Atk)',
  'Brave (+Atk, -Spe)',
  'Calm (+Spd, -Atk)',
  'Careful (+Spd, -Spa)',
  'Docile',
  'Gentle (+Spd, -Def)',
  'Hardy',
  'Hasty (+Spe, -Def)',
  'Impish (+Def, -Spa)',
  'Jolly (+Spe, -Spa)',
  'Lax (+Def, -Spd)',
  'Lonely (+Atk, -Def)',
  'Mild (+Spa, -Def)',
  'Modest (+Spa, -Atk)',
  'Naive (+Spe, -Spd)',
  'Naughty (+Atk, -Spd)',
  'Quiet (+Spa, -Spe)',
  'Quirky',
  'Rash (+Spa, -Spd)',
  'Relaxed (+Def, -Spe)',
  'Sassy (+Spd, -Spe)',
  'Serious',
  'Timid (+Spe, -Atk)'
];

const PokeCard = props => {
  const [EvHide, setEvHide] = useState('hidden');
  const [moveHide, setMoveHide] = useState('hidden');
  var data = props.data;
  if (data.length === 0) {
    return <div>Find a Pokemon!</div>;
  } else {
    //store possible moves in array
    var possibleMoves = data.moves.map(data => {
      return data.move.name;
    });
    console.log(data);
    return (
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
                <span id={value.type.name} key={index} value={value.type.name}>
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
          {evObj.map(value => {
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
            {moveObj.map(value => {
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
          <button id="sumbitpokemon">Submit Pokemon</button>
        </div>
      </div>
    );
  }
};

export default PokeCard;
