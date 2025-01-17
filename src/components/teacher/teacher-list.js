

import React from "react";
import { NavLink as RouteNavLink, Route } from "react-router-dom";
import { NavItem, NavLink } from "shards-react";
import "../child/child.css"
import { useTranslation } from 'react-i18next';

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
import ModalCustom from "../modal/ModalCustom";

class TeacherList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      avatarAdd: require("../../images/content-management/3.jpeg"),
      // First list of posts.
      teacher: [

        {
          avatar: require("../../images/content-management/1.jpeg"),
          etablissement: "LB Koutaba",
          description: "travailleur",
          categoryTheme: "dark",
          firstName: "Tchatseu",
          lastName: "Frank",
          phone: "696812610",
          schoolBoard: "",
          description: "je suis un tres bon enseignant. j'aime mon metier et je donne bien les repetition",
          level: "Niveau 5",
          courses:[
            {course: "Francais"},
            {course: "Anglais"},
            {course: "Histoire"},
            {course: "Maths"},
            {course: "Geo"},
            
          ]
        },
        {
          avatar: require("../../images/content-management/2.jpeg"),
          etablissement: "Business",
          categoryTheme: "dark",
          firstName: "Descartes",
          lastName: "Factory",
          phone: "696812610",
          schoolBoard: "",
          description: "je suis un tres bon enseignant. j'aime mon metier et je donne bien les repetition",
          level: "Niveau 1",
          courses:[
            {course: "Francais"},
            {course: "Anglais"},
            {course: "Histoire"},
            {course: "Maths"},
            {course: "Geo"},
            
          ]
        },
        {
          avatar: require("../../images/content-management/3.jpeg"),
          etablissement: "LB Dschang",
          categoryTheme: "dark",
          firstName: "Franka",
          lastName: "Junior",
          phone: "696812610",
          schoolBoard: "Lb",
          description: "je suis un tres bon enseignant. j'aime mon metier et je donne bien les repetition",
          level: "Niveau 4 & 6",
          courses:[
            {course: "Francais"},
            {course: "Anglais"},
            {course: "Histoire"},
            {course: "Maths"},
            {course: "Geo"},
            
          ]
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
          description: "je suis un tres bon enseignant. j'aime mon metier et je donne bien les repetition",
          level: "Niveau 2",
          courses:[
            {course: "Francais"},
            {course: "Anglais"},
            {course: "Histoire"},
            {course: "Maths"},
            {course: "Geo"},
            
          ]
        },
        {
          avatar: require("../../images/content-management/3.jpeg"),
          etablissement: "LB Dschang",
          categoryTheme: "dark",
          firstName: "Franka",
          lastName: "Junior",
          phone: "696812610",
          schoolBoard: "",
          description: "je suis un tres bon enseignant. j'aime mon metier et je donne bien les repetition",
          level: "Niveau 4 & 5",
          courses:[
            {course: "Francais"},
            {course: "Anglais"},
            {course: "Histoire"},
            {course: "Maths"},
            {course: "Geo"},
            
          ]
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
          description: "je suis un tres bon enseignant. j'aime mon metier et je donne bien les repetition",
          level: "Niveau 1",
          courses:[
            {course: "Francais"},
            {course: "Anglais"},
            {course: "Histoire"},
            {course: "Maths"},
            {course: "Geo"},
            
          ]
        },
      ],
    
    };
  }
  componentDidMount() {
    axios.get('childreen').then(
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
      teacher,
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

        
        {/* Third Row of Posts */}
        <Row>
          {teacher.map((post, idx) => (
            <ModalCustom post={post} />
           
          ))}
        </Row>

      </Container>
    );
  }
}

const avatarAdd = ({ teacher }) => {
  const { t } = useTranslation();

  return (

    <Row>
      <Col lg="3" md="6" sm="12" className="mb-4" ds>
        <NavLink tag={RouteNavLink} to='/child-add'>
          <Card small className="card-post card-post--1">
            <div
              className="card-post__image"
              style={{ backgroundImage: `url(${avatarAdd})` }}
            >
            </div>
            <CardBody>
              <h5 className="card-title">
                <a href="#" className="text-fiord-blue">
                  {t('buttonChildAdd', 'Hello there')}
                </a>

              </h5>

            </CardBody>
          </Card>
        </NavLink>

      </Col>
    </Row>
  );
};

export default TeacherList;
