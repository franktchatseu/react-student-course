import React from "react";
import { NavLink as RouteNavLink } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";
import  ChangeAccount  from "./ChangeAccount";


export default class UserActions extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      visible: false,
      user: JSON.parse(localStorage.getItem("user"))
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
  }

  
  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }

  logout = () => {
    localStorage.clear();
  }

  render() {
    return (
      <NavItem  tag={Dropdown} caret toggle={this.toggleUserActions}>
        <DropdownToggle caret tag={NavLink} className="cursor px-3">
          <img
            className="user-avatar rounded-circle mr-2"
            src={require("./../../../../images/avatars/0.jpg")}
            alt="User Avatar"
          />{" "}
          <span style={{fontSize:'16x',fontWeight:'bold'}} className="d-none text-warning d-md-inline-block">{ this.state.user?this.state.user.name: "Unknow User" }</span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={this.state.visible}>
          <DropdownItem tag={RouteNavLink} to="user-profile">
            <i className="material-icons">&#xE7FD;</i> Profile
          </DropdownItem>
          <DropdownItem divider />
          <ChangeAccount/>
          <DropdownItem divider />
          <DropdownItem onClick={this.logout}  href="/child-add" className="text-danger">
            <i className="material-icons text-danger">&#xE879;</i> Logout
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}

const avatarUser=()=>{
  return (
    <DropdownToggle caret tag={NavLink} className="cursor px-3">
          <img
            className="user-avatar rounded-circle mr-2"
            src={require("./../../../../images/avatars/0.jpg")}
            alt="User Avatar"
          />{" "}
          <span className="d-none d-md-inline-block"> sdsd </span>
        </DropdownToggle>
  )
}