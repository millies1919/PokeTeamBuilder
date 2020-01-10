import React, { useState } from 'react';
import pokeapi from '../../apis/api.js';
import PokeCard from '../PokeCard/PokeCard';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);

  const searchSubmit = async e => {
    e.preventDefault();
    try {
      const res = await pokeapi.get(
        `http://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`
      );
      setData(res.data);
    } catch (err) {
      alert('Incorrect Pokemon Name!');
    }
  };
  return (
    <div>
      <h3>Search for a Pokemon</h3>
      <form>
        <input
          id="inputpokemon"
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button onClick={searchSubmit} className="ui red button">
          {' '}
          Search
        </button>
      </form>

      <div>
        <PokeCard data={data} />
      </div>
    </div>
  );
};

export default SearchBar;
