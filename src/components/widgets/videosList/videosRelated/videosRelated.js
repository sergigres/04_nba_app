import React from 'react';
import styles from '../videosList.css';

import VideoListTemplate from '../videosListTemplate';

const VideosRelated = (props) => {
  return(
    <div className={styles.relatedWrapper}>
      <VideoListTemplate data={props.data} teams={props.teams} />
    </div>
  )
}

export default VideosRelated;
