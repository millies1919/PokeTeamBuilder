import React from 'react';
import SearchBar from '../Searching/SearchBar';

const TeamBuilder = ({ onRouteChange, teamname, id }) => {
  return (
    <div>
      Teambuilder
      <SearchBar teamname={teamname} id={id} />
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
