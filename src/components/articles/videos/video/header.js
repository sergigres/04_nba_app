import React from 'react';
import TeamInfo from '../../elements/teamInfo';

const Header = (props) => {

  const teamInfo = (team) => {
    return team && team.name ?
           (<TeamInfo team={team} />) :
            null;
  }


  return (
    <div>
      {teamInfo(props.teamData)}
    </div>
  )
}

export default Header;
