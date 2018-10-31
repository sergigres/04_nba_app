import React, { Component } from 'react';
import axios from 'axios';
import Config from '../../../../config';

import styles from '../../articles.css';
import Header from './header';

class NewsArticle extends Component {

  state = {
    article: {},
    team: {}
  }

  componentWillMount() {
    axios.get(`${Config.URL}/articles?id=${this.props.match.params.id}`)
    .then(response => {
      let article = response.data[0]
      axios.get(`${Config.URL}/teams?id=${article.team}`)
      .then(response => {
        this.setState({
          article,
          team: response.data[0]
        })
      })
    })
  }

  render() {
    const article = this.state.article;
    const team = this.state.team;

    return(
      <div>
        <div className={styles.articleWrapper} >
          <Header teamData={team} articleData={article} / >
          <div className={styles.articleBody}>
            <h1>{article.title}</h1>
            <div className={styles.articleImage} style={{background:`url('/images/articles/${article.image}')`}}></div>
            <div className={styles.articleText}>
              {article.body}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsArticle;
