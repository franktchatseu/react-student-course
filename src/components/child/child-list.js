/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import { NavLink as RouteNavLink } from "react-router-dom";
import { NavItem, NavLink } from "shards-react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button
} from "shards-react";

import PageTitle from "../common/PageTitle";
import axios from "axios";

class ChildList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundImageAdd: require("../../images/content-management/3.jpeg"),
      // First list of posts.
      Child: [
        {
          backgroundImage: require("../../images/content-management/1.jpeg"),
          school: "LB Koutaba",
          description: "travailleur",
          categoryTheme: "dark",
          first_name: "Tchatseu",
          last_name: "Frank",
          phone: "696812610"
        },
        {
          backgroundImage: require("../../images/content-management/2.jpeg"),
          school: "Business",
          categoryTheme: "dark",
          first_name: "Descartes",
          last_name: "Factory",
          phone: "696812610"
        },
        {
          backgroundImage: require("../../images/content-management/3.jpeg"),
          school: "LB Dschang",
          categoryTheme: "dark",
          first_name: "Franka",
          last_name: "Junior",
          phone: "696812610"
        },
        {
          backgroundImage: require("../../images/content-management/4.jpeg"),
          school: "L Classique",
          description: "travailleur",
          categoryTheme: "dark",
          first_name: "Warren",
          last_name: "Wawa",
          phone: "696812610"
        },
        {
          backgroundImage: require("../../images/content-management/3.jpeg"),
          school: "LB Dschang",
          categoryTheme: "dark",
          first_name: "Franka",
          last_name: "Junior",
          phone: "696812610"
        },
        {
          backgroundImage: require("../../images/content-management/4.jpeg"),
          school: "L Classique",
          description: "travailleur",
          categoryTheme: "dark",
          first_name: "Warren",
          last_name: "Wawa",
          phone: "696812610"
        },
      ],
    };
  }
  componentDidMount(){
    axios.get('http:8080//localhost/api/childreen').then(
      (res) => {
        console.log(res);
        this.setState({Child : this.res.data})
      }
    ).catch(
      (err) => {
        console.log(err);
      }
    )
  }
  click = (e) => {
    console.log("ckikcicii")
  }

  render() {
    const {
      Child,
      PostsListTwo,
      PostsListThree,
      PostsListFour
    } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Mes Enfants" subtitle="Components" className="text-sm-left" />
        </Row>

        {/* First Row of Posts */}
        <Row>
          <Col lg="3" md="6" sm="12" className="mb-4" ds>
            <NavLink tag={RouteNavLink} to="/child-add">
              <Card onClick={this.click} small className="card-post card-post--1">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url(${this.state.backgroundImageAdd})` }}
                >
                </div>
                <CardBody>
                  <h5 className="card-title">
                    <a href="#" className="text-fiord-blue">
                      Ajouter un Enfant
                      </a>
                  </h5>

                </CardBody>
              </Card>
            </NavLink>

          </Col>
        </Row>

        <Row>
          {Child.map((post, idx) => (
            <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
              <NavLink tag={RouteNavLink} to="/child-update">
                <Card onClick={this.click} small className="card-post card-post--1">
                  <div
                    className="card-post__image"
                    style={{ backgroundImage: `url(${post.backgroundImage})` }}
                  >
                    <Badge
                      pill
                      className={`card-post__category bg-${post.categoryTheme}`}
                    >
                      {post.school}
                    </Badge>
                  </div>
                  <CardBody>
                    <h5 className="card-title">
                      <a href="#" className="text-fiord-blue">
                        {post.first_name} {post.last_name}
                      </a>
                    </h5>
                    <span className="text-muted">{post.phone}</span>
                  </CardBody>
                </Card>
              </NavLink>

            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default ChildList;
