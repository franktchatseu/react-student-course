import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../common/PageTitle";
import UserDetails from "../user-profile-lite/UserDetails";
import UserAccountDetails from "../user-profile-lite/UserAccountDetails";
import { render } from "react-dom";
import Discussions from "../blog/Discussions";
import AddChildForm from "../user-profile-lite/addChildForm";
import axios from "axios";
class AddChild extends React.Component {

  constructor(props){
    super(props)
  }
  state = {
    activeAdd: true,
    user: {
      firstName: "",
      lastName: "",
      level: "",
      avatar: require("./../../images/avatars/0.jpg"),
      etablissement: "",
      schoolBoard: "",
      email: "",
      phone: "",
      description: "",
    }
  }
  onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(prevState => ({ ...prevState, user: { ...prevState.user, [name]: value } }))
  }
  onSubmit = (event) => {
    event.preventDefault();
    const childreen = {
      firstName: this.state.user.firstName,
      lastName: this.state.user.lastName,
      level: this.state.user.level,
      avatar: require("./../../images/avatars/0.jpg"),
      etablissement: this.state.user.etablissement,
      schoolBoard: this.state.user.schoolBoard,
      email: this.state.user.email,
      phone: this.state.user.phone,
      description: this.state.user.description,
    }
    console.log(childreen)
    this.clearField();
    axios.post('http:8080//localhost/api/childreen', { childreen }).then(
      (res) => {
        console.log(res);
      }
    ).catch(
      (err) => {
        console.log(err);
      }
    )
  }
  clearField() {
    this.setState(prevState => ({
      ...prevState, user: {
        ...prevState.user,
        firstName: "",
        lastName: "",
        level: "",
        avatar: require("./../../images/avatars/0.jpg"),
        etablissement: "",
        schoolBoard: "",
        email: "",
        phone: "",
        description: ""
      }
    }))

  }

  toogleActive = () => {
    this.setState(prevState => ({ ...prevState, activeAdd: !prevState.activeAdd }))
  }
  render() {

    return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle title="Ajouter un Enfant" subtitle="Mes Enfants" md="12" className="ml-sm-auto mr-sm-auto" />
        </Row>
        <Row>
          <Col lg="2">
          </Col>
          <Col lg="8">
            <AddChildForm onSubmit={this.onSubmit} onchange={this.onChange} userDetails={this.state.user} />
          </Col>

        </Row>
      </Container>
    );
  }
}

export default AddChild;
