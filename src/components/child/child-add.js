import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../common/PageTitle";
import UserDetails from "../user-profile-lite/UserDetails";
import UserAccountDetails from "../user-profile-lite/UserAccountDetails";
import { render } from "react-dom";
import Discussions from "../blog/Discussions";

class AddChild extends React.Component {
 
  state = {
    activeAdd: true,
    user: {
      name: "",
      avatar: require("./../../images/avatars/0.jpg"),
      etablissement:"",
      email: "",
      telephone:"",
      description: "",


    }
  }
  onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(prevState => ({ ...prevState, user: { ...prevState.user, [name]: value } }))
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
          {
            this.state.activeAdd ? (<Col lg="8">
              <UserAccountDetails  userDetails={this.state.user} />
            </Col>) :
             <Discussions /> 
          }

        </Row>
      </Container>
    );
  }
}

export default AddChild;
