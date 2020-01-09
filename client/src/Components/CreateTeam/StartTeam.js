import React from 'react';

const CreateTeam = ({ onRouteChange }) => {
  return (
    <div>
      <div className="signin-container">
        <div className="ui card">
          <h1 className="ui header">Create a Pokemon Team:</h1>
          <div className="ui form">
            <div className="field">
              <label>Team Name</label>
              <input type="text" name="teamname" placeholder="Team Name" />
            </div>
            <button
              className="ui red button"
              onClick={() => onRouteChange('teamlist')}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTeam;
