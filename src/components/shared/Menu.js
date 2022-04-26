import React from 'react'

export default function Menu() {
  return (
    <div className="app-sidebar">
      <ul className="navbar-nav sidebar sidebar-dark accordion toggled" id="accordionSidebar">
        <li className="nav-item active">
            <a className="nav-link" href="#">
            <span className="icon icon-wizard"></span>
                <span>Wizard</span></a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">
              <span className="icon icon-users"></span>
              <span>Team</span>
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">
              <span className="icon icon-settings"></span>
              <span>Settings</span>
            </a>
        </li>
      </ul>
    </div>
  )
}
