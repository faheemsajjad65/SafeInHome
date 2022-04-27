import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div className="app-sidebar">
      
      <ul className="navbar-nav sidebar sidebar-dark accordion toggled" id="accordionSidebar">
        
        <li className="nav-item active">
          <Link
            to="/"
            className="nav-link">
              <i className="icon icon-wizard"></i>
              <span>Wizard</span>
          </Link>
        </li>
        
        <li className="nav-item mt-auto">
          <Link
            to="/"
            className="nav-link">
              <i className="icon icon-users"></i>
              <span>Team</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/settings"
            className="nav-link">
              <i className="icon icon-settings"></i>
            <span>Settings</span>
          </Link>
        </li>

      </ul>
    </div>
  )
}
