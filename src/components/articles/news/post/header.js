import React from 'react';

import TeamInfo from '../../elements/teamInfo';
import PostData from '../../elements/postData';

const Header = (props) => {

  const teamInfo = (team) => {
    return team && team.name ? (<TeamInfo team={team} />) : null;
  }

  const postData = (article) => {
    return article && article.id ? (<PostData article={article} />) : null;
  }

  return(
    <div>
      { teamInfo(props.teamData) }
      { postData(props.articleData) }
    </div>
  )
}

export default Header;
