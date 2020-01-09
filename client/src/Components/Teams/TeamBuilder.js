import React from 'react';
import SearchBar from '../Searching/SearchBar';

const TeamBuilder = ({ onRouteChange }) => {
  return (
    <div>
      Teambuilder
      <SearchBar />
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
