import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem,
  Progress
} from "shards-react";

const UserDetails = ({ teacherDetails }) => (
  <Card small className="mb-4 pt-3">
    <CardHeader className="border-bottom text-center">
      <div className="mb-3 mx-auto">
        <img
          className="rounded-circle"
          src={teacherDetails.avatar}
          alt={teacherDetails.lastName}
          width="110"
        />
      </div>
      <h4 className="mb-0">{teacherDetails.lastName} {teacherDetails.firstName}</h4>
      <span className="text-muted d-block mb-2">{teacherDetails.jobTitle}</span>
      <Button pill outline size="sm" className="mb-2">
        <i className="material-icons mr-1">person_add</i> {teacherDetails.level}
      </Button>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="px-4">
      <h5 className=" d-block mb-2 ml-20">
            Telephone: {teacherDetails.phone}
          </h5>
      </ListGroupItem>
      <ListGroupItem className="p-4">
        <strong className=" d-block mb-2">
          Description
        </strong>
        <span>{teacherDetails.description}</span>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

UserDetails.propTypes = {
  /**
   * The user details object.
   */
  userDetails: PropTypes.object
};

UserDetails.defaultProps = {
  userDetails: {
    name: "Sierra Brooks",
    avatar: require("./../../images/avatars/0.jpg"),
    jobTitle: "Project Manager",
    performanceReportTitle: "Workload",
    performanceReportValue: 74,
    metaTitle: "Description",
    metaValue:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?"
  }
};

export default UserDetails;
