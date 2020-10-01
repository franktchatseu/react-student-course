

import React from "react";
import { NavLink as RouteNavLink, Route } from "react-router-dom";
import { NavItem, NavLink } from "shards-react";
import "./child.css"
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
      avatarAdd: require("../../images/content-management/3.jpeg"),
      // First list of posts.
      Child: [

        {
          avatar: require("../../images/content-management/1.jpeg"),
          etablissement: "LB Koutaba",
          description: "travailleur",
          categoryTheme: "dark",
          firstName: "Tchatseu",
          lastName: "Frank",
          phone: "696812610",
          schoolBoard: "",
          description: "",
          level: "Niveau 1",



        },
        {
          avatar: require("../../images/content-management/2.jpeg"),
          etablissement: "Business",
          categoryTheme: "dark",
          firstName: "Descartes",
          lastName: "Factory",
          phone: "696812610",
          schoolBoard: "",
          description: "",
          level: "Niveau 1",

        },
        {
          avatar: require("../../images/content-management/3.jpeg"),
          etablissement: "LB Dschang",
          categoryTheme: "dark",
          firstName: "Franka",
          lastName: "Junior",
          phone: "696812610",
          schoolBoard: "Lb",
        },
        {
          avatar: require("../../images/content-management/4.jpeg"),
          etablissement: "L Classique",
          description: "travailleur",
          categoryTheme: "dark",
          firstName: "Warren",
          lastName: "Wawa",
          phone: "696812610",
          schoolBoard: "",
          description: "",
          level: "Niveau 1",

        },
        {
          avatar: require("../../images/content-management/3.jpeg"),
          etablissement: "LB Dschang",
          categoryTheme: "dark",
          firstName: "Franka",
          lastName: "Junior",
          phone: "696812610",
          schoolBoard: "",
          description: "",
          level: "Niveau 1",

        },
        {
          avatar: require("../../images/content-management/4.jpeg"),
          etablissement: "L Classique",
          description: "travailleur",
          categoryTheme: "dark",
          firstName: "Warren",
          lastName: "Wawa",
          phone: "696812610",
          schoolBoard: "",
          description: "",
          level: "Niveau 1",

        },
      ],
    };
  }
  componentDidMount() {
    axios.get('http:8080//localhost/api/childreen').then(
      (res) => {
        console.log(res);
        this.setState({ Child: this.res.data })
      }
    ).catch(
      (err) => {
        console.log(err);
      }
    )
  }
  toChildUpdate = (childItem) => {
    this.props.history.push('/child-update', {
      child: childItem
    })
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
            <NavLink tag={RouteNavLink} to='/child-add'>
              <Card small className="card-post card-post--1">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url(${this.state.avatarAdd})` }}
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
              <NavLink className="cursor" >
                <Card onClick={() => this.toChildUpdate(post)} small className="card-post card-post--1">
                  <div
                    className="card-post__image"
                    style={{ backgroundImage: `url(${post.avatar})` }}
                  >
                    <Badge
                      pill
                      className={`card-post__category bg-${post.categoryTheme}`}
                    >
                      {post.etablissement}
                    </Badge>
                  </div>
                  <CardBody>
                    <h5 className="card-title">
                      <a href="#" className="text-fiord-blue">
                        {post.firstName} {post.lastName}
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
