import React from 'react';
import {Link} from 'react-router-dom';
import style from './header.css';

import FontAwesome from 'react-fontawesome';
import SideNav from './sideNav/sideNav';

const Header = (props) => {

  const logo = () => {
    return (
      <Link to="/" className={style.logo}>
        <img alt="nba logo" src="/images/nba_logo.png" />
      </Link>
    )
  }

  // No need of "return()"
  const navBars = () => (
    <div className={style.bars}>
      <FontAwesome name="bars" onClick={props.onOpenNav} style={{ color: '#fff', padding: '10px', cursor: 'pointer' }}/>
    </div>
  )

  return (
    <header className={ style.header }>
      <SideNav {...props}/>
      <div className={ style.headerOpt }>
        {navBars()}
        {logo()}
      </div>
    </header>
  )
}

export default Header;
