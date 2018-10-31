import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import axios from 'axios';

import styles from './newsList.css';

import Button from '../buttons/buttons';
import CardInfo from '../cardInfo/cardInfo';

import Config from '../../../config';

class NewsList extends Component {
  state = {
    items: [],
    teams: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  }

  componentWillMount() {
    this.request(this.state.start, this.state.end);
  }

  request = (start, end) => {
    start = start ? start : 0;
    end = end ? end : 3;
    if (this.state.teams.length < 1) {
      axios.get(`${Config.URL}/teams`)
      .then( response => {
        this.setState({
          teams: response.data
        })
      })
    }

      axios.get(`${Config.URL}/articles?_start=${start}&_end=${end}`)
      .then( response => {
        this.setState({
          items: [...this.state.items, ...response.data],
          start,
          end
        })
      })
  }

  loadMore = () => {
    this.request(this.state.end, this.state.end + this.state.amount);
  }

  renderNews = (type) => {
    let template = null;

    switch(type) {
      case('card'):
        template = this.state.items.map( (item, i) => (
          <CSSTransition
            classNames={{
              enter: styles.newsList_wrapper,
              enterActive: styles.newsList_wrapper_enter
            }}
            timeout={500} key={i}>
            <div>
              <div className={styles.newslist_item} >
                <Link to={`/articles/${item.id}`}>
                  <CardInfo teams={this.state.teams} teamId={item.team} date={item.date} />
                  <h2>{item.title}</h2>
                </Link>
              </div>
            </div>
          </CSSTransition>
        ) );
        break;
      case('cardMain'):
        template = this.state.items.map( (item, i) => (
          <CSSTransition
            classNames={{
              enter: styles.newsList_wrapper,
              enterActive: styles.newsList_wrapper_enter
            }}
            timeout={500} key={i}>

            <Link to={`/articles/${item.id}`}>
              <div className={styles.main_news_item} >
                <div className={styles.left}
                  style={{
                    background: `url('/images/articles/${item.image}')`
                  }}>
                  <div></div>
                </div>
                <div className={styles.right}>
                  <CardInfo teams={this.state.teams} teamId={item.team} date={item.date} />
                  <h2>{item.title} </h2>
                </div>
              </div>
            </Link>
          </CSSTransition>
        ) );
        break;
      default:
          template= '';
          break;
    }

    return template;
  }

  render() {
    return(
      <div>
        <TransitionGroup component="div" className="list">
          { this.renderNews( this.props.type ) }
        </TransitionGroup >

        <Button type="loadmore" loadMore={() => this.loadMore()} cta="Load More News" />
      </div>
    )
  }
}

export default NewsList;
