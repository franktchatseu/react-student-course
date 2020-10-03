import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../common/PageTitle";
import UserDetails from "../user-profile-lite/UserDetails";
import UserAccountDetails from "../user-profile-lite/UserAccountDetails";
import { render } from "react-dom";
import Reservations from "./Reservation";
import axios from "axios";
import Activity from "../reserver/activity"
import Reserver from "../reserver/reserver";
class ChildUpdate extends React.Component {

  constructor(props){
    super(props)
    console.log(props)
  }
  state = {
    activeAdd: true,
    user: {
      info: this.props.location.state.child,
      historyReservation: [
        {
          date: new Date(),
          reservation: [
            {
              hour: "15h",
              course: "francais"
            },
            {
              hour: "18h",
              course: "english"
            },

          ]
        },
        {
          date: new Date(),
          reservation: [
            {
              hour: "11h",
              course: "histoire"
            },
            {
              hour: "13h",
              course: "geogra"
            },

          ]
        },
        {
          date: new Date(),
          reservation: [
            {
              hour: "11h",
              course: "histoire"
            },
            {
              hour: "13h",
              course: "geogra"
            },

          ]
        }
      ]
    }
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
    axios.post('http:8080//localhost/api/childreen/1',{childreen}).then(
      (res) => {
        console.log(res);
      }
    ).catch(
      (err) => {
        console.log(err);
      }
    )
    this.backTochildList()
  
  }
  backTochildList(){
    this.props.history.push('/childs', {
      child: null
    })
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

  onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(prevState => ({ ...prevState, user: { ...prevState.user, info: { ...prevState.user.info, [name]: value } } }))
  }
  toogleActive = () => {
    this.setState(prevState => ({ ...prevState, activeAdd: !prevState.activeAdd }))
  }
  render() {
    return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle title="Modifier un Enfant" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" />
        </Row>
        <Row>
          <Col lg="4">
            <UserDetails userDetails={this.state.user.info} active={this.state.activeAdd} ontoogle={this.toogleActive} />
          </Col>
          {
            this.state.activeAdd ? (<Col lg="8">
              <UserAccountDetails onSubmit={this.onSubmit} onchange={this.onChange} userDetails={this.state.user.info} />
            </Col>) :
              <Reservations userDetails={this.state.user}  />
          }

        </Row>
      </Container>
    );
  }
}
/* const user = {
  name: "Frank tchatseu",
  avatar: require("./../../images/avatars/0.jpg"),
  jobTitle: "Dev IT",
  performanceReportTitle: "Workload",
  performanceReportValue: 74,
  metaTitle: "Description",
  metaValue:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?"

} */
export default ChildUpdate;
