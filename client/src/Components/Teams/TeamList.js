import React from 'react';

const testArray = [{ name: 'team1' }, { name: 'team2' }, { name: 'team3' }];

const TeamList = ({ onRouteChange }) => {
  const renderList = () => {
    return testArray.map(team => {
      return (
        <div className="item">
          <i className="large middle aligned icon camera" />
          <div className="content" onClick={() => onRouteChange('teambuilder')}>
            {team.name}
          </div>
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
