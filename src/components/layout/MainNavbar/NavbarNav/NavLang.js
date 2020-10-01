import React from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";
import { useTranslation } from 'react-i18next';


export default class UserActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <Lang toggleUserActions={this.toggleUserActions} visible={this.state.visible}/>
    );
  }
}

const Lang = ({ visible,toggleUserActions }) => {
  const { t,i18n } = useTranslation();
  const changeLanguage = code => {
    i18n.changeLanguage(code);
  };
  return (
    <NavItem tag={Dropdown} caret toggle={toggleUserActions}>
    <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
      <img
        className="user-avatar rounded-circle mr-2"
        src={require("./../../../../images/flag/french-english-flag.jpeg")}
        alt="User Avatar"
      />{" "}
      <span className="d-none d-md-inline-block">{t('Language.ChangeLanguage')}</span>
    </DropdownToggle>
    <Collapse tag={DropdownMenu} right small open={visible}>
      <DropdownItem onClick={() => changeLanguage('en')}>
      <img
        className="user-avatar rounded-circle mr-2"
        src={require("./../../../../images/flag/english-drap.jpg")}
        alt="User Avatar"
      />{" "}
       {t('Language.English')}
      </DropdownItem>
      <DropdownItem onClick={() => changeLanguage('fr')}>
      <img
        className="user-avatar rounded-circle mr-2"
        src={require("./../../../../images/flag/france-drap.png")}
        alt="User Avatar"
      />{" "}
         {t('Language.French')}
      </DropdownItem>
    </Collapse>
  </NavItem>
  );
};
