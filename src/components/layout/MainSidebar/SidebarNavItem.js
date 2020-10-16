import React, { useContext } from "react";
import PropTypes from "prop-types";
import { NavLink as RouteNavLink } from "react-router-dom";
import { NavItem, NavLink } from "shards-react";
import { context } from "../../../store";
import "./sideTeacher.css"

const SidebarNavItem = ({ item }) => {
  const [state, setState]= useContext(context)
  return (
    <NavItem >
      <NavLink className="nav-teacher" tag={RouteNavLink} to={item.to} style={{
          color: state.activeAccount==="teacher"?'orange':null, 
        }}>
        {item.htmlBefore && (
          <div
            className="d-inline-block  item-icon-wrapper"
            dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
          />
        )}
        {item.title && <span>{item.title}</span>}
        {item.htmlAfter && (
          <div
            className="d-inline-block item-icon-wrapper"
            dangerouslySetInnerHTML={{ __html: item.htmlAfter }}
          />
        )}
      </NavLink>
    </NavItem>
  );
}

SidebarNavItem.propTypes = {
  /**
   * The item object.
   */
  item: PropTypes.object
};

export default SidebarNavItem;
