import React, { useEffect } from 'react';

const testArray = [{ name: 'team1' }, { name: 'team2' }, { name: 'team3' }];

const TeamList = ({ onRouteChange, id }) => {
  useEffect(() => {
    fetch('http://localhost:3000/teams/:id');
  });

  const renderList = () => {
    return testArray.map(team => {
      return (
        <div className="item" key={team.name}>
          <i className="large middle aligned icon camera" />
          <div className="content" onClick={() => onRouteChange('teambuilder')}>
            {team.name}
          </div>
          <button className="ui red button">Delete</button>
        </div>
      );
    });
  };

  return (
    <div>
      <div className="Createteam">
        <button
          className="ui red button"
          onClick={() => onRouteChange('createteam')}
        >
          New Team
        </button>
      </div>
      <div>
        <h2>Teams</h2>
        <div className="ui celled list">{renderList()}</div>
      </div>
    </div>
  );
};

export default TeamList;
