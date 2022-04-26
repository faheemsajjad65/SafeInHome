import React from 'react'

export default function Menu() {
  return (
    <div class="app-sidebar">

      
      <ul class="navbar-nav sidebar sidebar-dark accordion toggled" id="accordionSidebar">
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
        </a>
        <li class="nav-item active">
            <a class="nav-link" href="#">
            <span class="icon icon-wizard"></span>
                <span>Wizard</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">
              <span class="icon icon-users"></span>
              <span>Team</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">
              <span class="icon icon-settings"></span>
              <span>Settings</span>
            </a>
        </li>
      </ul>
    </div>
  )
}
