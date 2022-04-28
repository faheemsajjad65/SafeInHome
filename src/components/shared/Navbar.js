import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AvatarSrc from "../../assets/images/avatar-user.jpg";
import LogoSrc from "../../assets/images/logo.svg";
import {useDispatch} from "react-redux";
import {logout} from "../../actions/auth";
import {useNavigate} from "react-router-dom";
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout())
    navigate("/")
  }
  return (
      <div className="app-header">
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img alt="brand-logo" src={LogoSrc} width="30" height="24"/>
            </a>
            <div className={"d-flex flex-row navbar-right"}>
              <Avatar className="user-image" alt="User Image" src={AvatarSrc}/>
              <div className="ms-auto">
              <Badge badgeContent={12} color="error">
                <NotificationImportantIcon />
              </Badge>
                <ExitToAppIcon style={{margin:"0.4em"}} titleAccess={"Logout"} onClick={handleLogout}/>
              </div>
            </div>
          </div>
        </nav>
      </div>
  )
}
