import React, { Component } from 'react';
import './layout.css';

class Layout extends Component {
  render() {
    return(
      <div>
        header
        {this.props.children}
        footerk
      </div>
    );
  }
}


export default Layout;
