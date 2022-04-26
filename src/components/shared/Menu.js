import React from 'react'

export default function Menu() {
  return (
    <div className="app-sidebar">
      <ul className="navbar-nav sidebar sidebar-dark accordion toggled" id="accordionSidebar">
        <li className="nav-item active">
            <a className="nav-link" href="#">
            <i className="icon icon-wizard"></i>
            <span>Wizard</span></a>
        </li>
        <li className="nav-item mt-auto">
            <a className="nav-link" href="#">
              <i className="icon icon-users"></i>
              <span>Team</span>
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="icon icon-settings"></i>
              <span>Settings</span>
            </a>
        </li>
      </ul>
    </div>
  )
}
