import React from 'react';
import styles from '../articles.css';

const PostData = (props) => {
  return (
    <div className={styles.articlePostData}>
      <div>Date: <span>{props.article.date}</span></div>
      <div>Author: <span>{props.article.author}</span></div>
    </div>

  )
}

export default PostData;
