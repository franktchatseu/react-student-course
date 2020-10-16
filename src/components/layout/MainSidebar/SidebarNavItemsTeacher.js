import React from "react";
import { Nav } from "shards-react";
import SidebarNavItem from "./SidebarNavItem";
import { Store } from "../../../flux";
class SidebarNavItemsTeacher extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navItems: Store.getSidebarItemsTeacher()
    };

    this.onChange = this.onChange.bind(this);
  }

 
  componentWillMount() {

    Store.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);

  }
  onChange() {
    this.setState({
      ...this.state,
      navItems: Store.getSidebarItemsTeacher()
    });
  }

  render() {
    const { navItems: items } = this.state;
    return (
      <div className="nav-wrapper">
        <Nav className="nav--no-borders  flex-column"  style={{
        backgroundColor: '#0d1137'
      }}>
          {items.map((item, idx) => (
            <SidebarNavItem key={idx} item={item} />
          ))}
        </Nav>
      </div>
    )
  }
}

const activeItem = ()=>{
  return true? Store.getSidebarItems(): Store.getSidebarItemsTeacher()
}

export default SidebarNavItemsTeacher;
