import React from 'react';
import SearchBar from '../Searching/SearchBar';
import TeamCard from '../TeamCard/TeamCard';

const TeamBuilder = ({
  onRouteChange,
  teamname,
  id,
  onAddPokemon,
  team,
  onDeletePokemon,
  clearTeam
}) => {
  const exitTeam = () => {
    onRouteChange('teamlist');
    clearTeam();
  };

  return (
    <div>
      Teambuilder
      <button className="ui right floated icon button" onClick={exitTeam}>
        <i className="close icon"></i>
      </button>
      <SearchBar
        teamname={teamname}
        id={id}
        onAddPokemon={onAddPokemon}
        team={team}
      />
      <TeamCard
        onDeletePokemon={onDeletePokemon}
        id={id}
        teamname={teamname}
        onAddPokemon={onAddPokemon}
        team={team}
      />
    </div>
  );
};

export default TeamBuilder;
