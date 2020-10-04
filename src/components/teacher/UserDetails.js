import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
} from "shards-react";

const UserDetails = ({ teacherDetails }) => (
  <Card small className="mb-4 pt-3">
    <CardHeader className="border-bottom text-center">
      <div className="mb-3">
        <img
          className="rounded-circle"
          src={teacherDetails.avatar}
          alt={teacherDetails.lastName}
          width="110"
        />
      </div>
      <h4 className="mt-1">{teacherDetails.lastName} {teacherDetails.firstName}</h4>
      <span class="card-post__category bg-royal-blue badge badge-primary badge-pill"> Mes Matieres</span>
      <div class="user-details__tags p-4">
        {
          teacherDetails.courses.map((course,idx)=>(
            <span class="text-dark text-uppercase mb-2 border mr-1 badge badge-light badge-pill">{course.course}</span>
          )
         )
        }
      </div>
      <h5 className=" d-block mb-3 ml-20">
        Telephone: {teacherDetails.phone}
      </h5>
      <h5 className=" d-block mb-2 ml-20 ">
        Description
      </h5>
      <span>{teacherDetails.description}</span>
    </CardHeader>
    <CardBody >
    
    </CardBody>
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
