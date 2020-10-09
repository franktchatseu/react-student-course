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

  constructor(props) {
    super(props)
  }
  state = {
    activeAdd: true,
    loading:false,
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

  onSelectedAvatar = (event) => {
    console.log(event.target.files[0])
    const file = event.target.files[0];
    this.setState(prevState => ({ ...prevState, user: { ...prevState.user, avatar: file} }))
  }
  onSubmit = (event) => {
    event.preventDefault();
    const child = new FormData();
    child.append("firstName", this.state.user.firstName);
    child.append("lastName", this.state.user.lastName)
    child.append("level", this.state.user.level);
    child.append("etablissement", this.state.user.etablissement)
    child.append("schoolBoard", this.state.user.schoolBoard);
    child.append("email", this.state.user.email)
    child.append("phone", this.state.user.phone);
    child.append("description", this.state.user.description)
    child.append("avatar", this.state.avatar)

    console.log(child)
    this.clearField();
    axios.post('childreen', { child }).then(
      (res) => {
        console.log(res);

      }
    ).catch(
      (err) => {
        console.log(err);
      }
    ).finally(() => {
      this.setState(prevState => ({ ...prevState, loading: false  }))
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
        avatar: "",
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
            <AddChildForm loading={this.state.loading} onSubmit={this.onSubmit} onchange={this.onChange} userDetails={this.state.user} onSelectedAvatar={this.onSelectedAvatar} />
          </Col>

        </Row>
      </Container>
    );
  }
}

export default AddChild;
