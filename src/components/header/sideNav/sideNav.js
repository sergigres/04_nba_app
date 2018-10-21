import React from 'react';
import SideNav from 'react-simple-sidenav';

const SideNavigation = (props) => {
  return (
    <div>
      <SideNav
        ShowNav={props.showNav}
        onHideNav={props.hideNav}>
        OPTIONS
      </SideNav>
    </div>
  )
}

export default SideNavigation;
