import React, { Component } from 'react';
import axios from 'axios';

import SliderTemplate from './slider_template'
import Config from '../../../config';
//import {firebaseArticles} from '../../../firebase';

class NewsSlider extends Component {

  state = {
    articles: []
  }

  componentWillMount() {
    axios.get(`${Config.URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`)
    .then( response => {
      this.setState({
        news: response.data
      });
    });
  }

  render() {
    return(
        <SliderTemplate data={this.state.news} type={this.props.type} settings={this.props.settings}/>
    );
  }

}

export default NewsSlider;
