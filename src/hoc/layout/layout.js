import React, { Component } from 'react';
import './layout.css'

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Home from '../../components/home/home';

class Layout extends Component {

    state = {
      showNav:false
    }

    toggleSidenav = (action) =>{
        this.setState({
            showNav:action
        })
    }

    render(){
        return(
            <div>
                <Header
                    showNav={this.state.showNav}
                    onHideNav={() => this.toggleSidenav(false)}
                    onOpenNav={() => this.toggleSidenav(true)}
                />
                {this.props.children}
                <Footer />
            </div>
        )
    }

}

export default Layout;
