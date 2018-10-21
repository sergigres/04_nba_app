import React, { Component } from 'react';
import './layout.css';

import Header from '../../components/header/header'

class Layout extends Component {

  state = {
    showNav: false
  }

  toggleSideNav = (action) => {
    debugger;
    this.setState({ showNav: action })
  }


  render() {
    return(
      <div>
        <Header
          showNav={this.state.showNav}
          onHideNav={ () => this.toggleSideNav(false) }
          onOpenNav={ () => this.toggleSideNav(true) }/>
        {this.props.children}
        footerk
      </div>
    );
  }
}


export default Layout;
