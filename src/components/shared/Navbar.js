import React from 'react'
import LogoSrc from "../../assets/images/logo.svg";

export default function Navbar() {
  return (
  <div class="app-header">
    <nav class="navbar navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img alt="brand-logo" src={LogoSrc} width="30" height="24"/>
        </a>
      </div>
    </nav>
  </div>
    
  )
}
