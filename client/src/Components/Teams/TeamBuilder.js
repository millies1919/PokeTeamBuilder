import React from 'react';
import SearchBar from '../Searching/SearchBar';
import TeamCard from '../TeamCard/TeamCard';

const TeamBuilder = ({ onRouteChange, teamname, id, onAddPokemon, team }) => {
  return (
    <div>
      Teambuilder
      <SearchBar
        teamname={teamname}
        id={id}
        onAddPokemon={onAddPokemon}
        team={team}
      />
      <TeamCard
        id={id}
        teamname={teamname}
        onAddPokemon={onAddPokemon}
        team={team}
      />
      <button
        className="ui red button"
        onClick={() => onRouteChange('teamlist')}
      >
        Save
      </button>
    </div>
  );
};

export default TeamBuilder;
