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
import axios from "axios";
import { useTranslation } from 'react-i18next';

const UserDetails = ({ userDetails, active, ontoogle }) => {
  const { t } = useTranslation();

  return (
    <Card small className="mb-4 pt-3">
      <CardHeader className="border-bottom text-center">
      <div
                  className="card-post__image"
                  style={{ backgroundImage: `url('${userDetails.avatar}')` }}
                />
      </CardHeader>
      <ListGroup flush>
      <ListGroupItem className="px-4">
          <div className="progress-wrapper">
            <h5 className="mb-0">{t('Child.FirstNameLabel')}: {userDetails.firstName}</h5>
          </div>
        </ListGroupItem>
        <ListGroupItem className="px-4">
          <div className="progress-wrapper">
            <h5 className="mb-0">{t('Child.LastNameLabel')}: {userDetails.lastName}</h5>
          </div>
        </ListGroupItem>
        <ListGroupItem className="px-4">
          <div className="progress-wrapper">
            <h5 className="mb-0">{t('User.EmailLabel')}: {userDetails.email}</h5>
          </div>
        </ListGroupItem>
        <ListGroupItem className="px-4">
          <div className="progress-wrapper">
            <h5 className="mb-0">{t('Child.PhoneLabel')}: {userDetails.phone}</h5>
          </div>
        </ListGroupItem>
        <ListGroupItem className="p-4">
        <strong className="text-muted d-block mb-2">
          Description
        </strong>
        <span>{userDetails.description}</span>
      </ListGroupItem>
      </ListGroup>
    </Card>
  );
}




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
