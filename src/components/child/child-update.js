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
    activeAdd: false,
    loading:false,
    user: {
      info: this.props.location.state.child,
      historyReservation: [
          {date: new Date().toLocaleString(), hour: '10:00', stocked: true, course: 'Maths 10, Lucas'},
          {date: 'lundi 22 juin 2020', hour: '12:30', stocked: true, course: 'English, Descartes'},
          {date: 'lundi 22 juin 2020', hour: '16:00', stocked: false, course: 'French 22, Franka '},
          {date: 'jeudi 10 juillet 2020', hour: '20:00', stocked: true, course: 'English, Touch'},
          {date: 'jeudi 15 juillet 2020', hour: '21:00', stocked: false, course: 'Goegra 5, Warren'},
          {date: 'jeudi 10 juillet 2020', hour: '22:00', stocked: true, course: 'Ec 7, Tchatseu'}
        ]
    }
  }
  onSelectedAvatar = (event) => {
    const file = event.target.files[0];
    this.setState(prevState => ({ ...prevState, user: { ...prevState.user, info: { ...prevState.user.info, avatar: file } } }))  }

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
        <Col lg="1">
          </Col>
          <Col lg="4">
            <UserDetails userDetails={this.state.user.info} active={this.state.activeAdd} ontoogle={this.toogleActive} />
          </Col>
          
            <Col lg="6">
            { this.state.activeAdd ? (<UserAccountDetails loading={this.state.loading} onSelectedAvatar={this.onSelectedAvatar} onSubmit={this.onSubmit} onchange={this.onChange} userDetails={this.state.user.info} />):
               <Activity historyReservation= {this.state.user.historyReservation} />
            }
          </Col> 
       

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
