import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import AvatarSrc from "../../assets/images/avatar-user.jpg";
import LogoSrc from "../../assets/images/logo.svg";

export default function Navbar() {
  return (
  <div className="app-header">
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img alt="brand-logo" src={LogoSrc} width="30" height="24"/>
        </a>
        <Avatar className="user-image" alt="User Image" src={AvatarSrc}/>
      </div>
    </nav>
  </div>
    
  )
}
