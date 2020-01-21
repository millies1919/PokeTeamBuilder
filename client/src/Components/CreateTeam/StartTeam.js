import React, { useState } from 'react';

const CreateTeam = ({ onRouteChange, id }) => {
  const [teamname, setTeamname] = useState('');

  const teamSubmit = () => {
    fetch('http://localhost:3000/newteam', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: id,
        teamname: teamname
      })
    })
      .then(response => response.json())
      .then(() => {
        onRouteChange('teamlist');
      });
  };

  const onTeamnameChange = e => {
    setTeamname(e.target.value);
  };

  return (
    <div>
      <div className="signin-container">
        <div className="ui card">
          <button
            className="ui right floated icon button"
            onClick={() => onRouteChange('teamlist')}
          >
            <i className="close icon"></i>
          </button>
          <h1 className="ui header">Create a Pokemon Team:</h1>
          <div className="ui form">
            <div className="field">
              <label>Team Name</label>
              <input
                type="text"
                name="teamname"
                placeholder="Team Name"
                onChange={onTeamnameChange}
              />
            </div>
            <button className="ui red button" onClick={teamSubmit}>
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTeam;
