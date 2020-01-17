import React, { useEffect, useState } from 'react';

const TeamList = ({ onRouteChange, id }) => {
  const [teamList, setTeamList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/teams/${id}`)
      .then(response => {
        return response.json();
      })
      .then(teams => {
        setTeamList(teams);
      });
  }, []);

  const deleteTeam = teamname => {
    return fetch(`http://localhost:3000/teamdelete/${teamname}/${id}`, {
      method: 'delete'
    })
      .then(response => {
        return response.json();
      })
      .then(teams => {
        setTeamList(teams);
      });
  };

  const renderList = () => {
    if (teamList !== []) {
      return teamList.map(team => {
        return (
          <div className="item" key={team.teamname}>
            <i className="large middle aligned icon camera" />
            <div
              className="content"
              onClick={() => onRouteChange('teambuilder')}
            >
              {team.teamname}
            </div>
            <button
              className="ui red button"
              onClick={() => deleteTeam(team.teamname)}
            >
              Delete
            </button>
          </div>
        );
      });
    } else {
      return <div>Create a Team!</div>;
    }
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
