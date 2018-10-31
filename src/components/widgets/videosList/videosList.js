import React, { Component } from 'react';
import axios from 'axios';

import styles from './videosList.css';

import Button from '../buttons/buttons';
import VideosListTemplate from './videosListTemplate';

import Config from '../../../config';

class VideosList extends Component {

  state = {
    teams: [],
    videos: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  }

  renderTitle = (title) => {
    return title ? <h3><strong>NBA</strong> Videos</h3> : null;
  }

  componentWillMount() {
    this.request(this.state.start, this.state.end);
  }

  request = (start, end) => {
    if (this.state.teams.length < 1) {
      axios.get(`${Config.URL}/teams`)
      .then( response => {
        this.setState({
          teams: response.data
        })
      })
    }

     axios.get(`${Config.URL}/videos?_start=${start}&_end=${end}`)
     .then( response => {
       this.setState({
         videos: [...this.state.videos, ...response.data],
         start,
         end
       })
     })
  }

  renderVideos = () => {
    let template = null;
    switch(this.props.type) {
      case('card'):
        template = <VideosListTemplate data={this.state.videos} teams={this.state.teams}/>;
        break;
      default:
        template= null;
    }

    return template;
  }

  loadMore = () => {
    let end = this.state.end + this.state.amount;
    this.request(this.state.end, end);
  }

  renderButton = (loadmore) => {
    return loadmore ?
      <Button type="loadmore" cta="Load More Videos" loadMore={() => this.loadMore()} /> :
      <Button type="linkTo" cta="More Videos" linkTo="/videos" />;
  }

  render() {
    return(
      <div className={styles.videoList_wrapper} >
        { this.renderTitle(this.props.title) }
        { this.renderVideos() }
        { this.renderButton(this.props.loadmore) }
      </div>
    )
  }
}

export default VideosList;
