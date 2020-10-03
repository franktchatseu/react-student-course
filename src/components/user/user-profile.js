import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../common/PageTitle";
import UserDetails from "./UserDetails";
import UserAccountDetails from "./UserAccountDetails";
import { render } from "react-dom";
import Reservations from "../child/Reservation";
import axios from "axios";
import Activity from "../reserver/activity"
import Reserver from "../reserver/reserver";
class UserProfile extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
    }
    state = {
        activeAdd: true,
        user: {
            avatar: require("../../images/content-management/3.jpeg"),
            email: "LB Dschang",
            firstName: "Franka",
            lastName: "Junior",
            phone: "696812610",
            description: "je suis un gar tres serieux",
        },
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

    onSubmit = (event) => {
        event.preventDefault();
        const childreen = {
            firstName: this.state.user.firstName,
            lastName: this.state.user.lastName,
            avatar: require("./../../images/avatars/0.jpg"),
            email: this.state.user.email,
            phone: this.state.user.phone,
            description: this.state.user.description,
        }
        console.log(childreen)
        this.clearField();
        axios.post('http:8080//localhost/api/childreen/1', { childreen }).then(
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
    backTochildList() {
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
                avatar: require("./../../images/avatars/0.jpg"),
                email: "",
                phone: "",
                description: ""
            }
        }))

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
                    <PageTitle title="Mon Profil" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" />
                </Row>
                <Row>
                    <Col lg="4">
                        <UserDetails userDetails={this.state.user} active={this.state.activeAdd} ontoogle={this.toogleActive} />
                    </Col>

                    <Col lg="8">
                        <UserAccountDetails onSubmit={this.onSubmit} onchange={this.onChange} userDetails={this.state.user} />
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
export default UserProfile;
