import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  Button
} from "shards-react";
import { useTranslation } from 'react-i18next';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import Avatar from "../avatar/avatar";


const UserAccountDetails = ({ userDetails, onchange, onSubmit, onSelectedAvatar, loading }) => {
  const { t } = useTranslation();

  return (
    <Card small className="mb-4">
      <CardHeader className="border-bottom">
        <h6 className="m-0">{t('Child.ChildForm')}</h6>
      </CardHeader>
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Row>
            <Col>
              <Form onSubmit={onSubmit}>
              <Row form>
                <Col md="12" className="form-group">
                  <Avatar />
                </Col>
               </Row>
                <Row form>
                  {/* First Name */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feFirstName">{t('Child.LastNameLabel')}</label>
                    <FormInput
                      id="FirstName"
                      placeholder="First Name"
                      value={userDetails.lastName}
                      name="lastName"
                      onChange={onchange}
                    />
                  </Col>
                  {/* Last Name */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feLastName">{t('Child.FirstNameLabel')}</label>
                    <FormInput
                      id="feLastName"
                      placeholder="Last Name"
                      value={userDetails.firstName}
                      name="firstName"
                      onChange={onchange}
                    />
                  </Col>
                </Row>
                <Row form>
                  {/* First Name */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feFirstName">{t('Child.LevelLabel')}</label>
                    <FormInput
                      id="FirstName"
                      placeholder="niveau etude"
                      value={userDetails.level}
                      name="level"
                      onChange={onchange}
                    />
                  </Col>
                  {/* Last Name */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feLastName">{t('Child.SchoolLabel')}</label>
                    <FormInput
                      id="feLastName"
                      placeholder="etablissement"
                      value={userDetails.etablissement}
                      name="etablissement"
                      onChange={onchange}
                    />
                  </Col>
                </Row>
                <Row form>
                  {/* Email */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feEmail">{t('Child.SchoolBoardLabel')}</label>
                    <FormInput
                      type="text"
                      id="feEmail"
                      placeholder="conseil scolaire"
                      value={userDetails.schoolBoard}
                      onChange={onchange}
                      name="schoolBoard"
                      autoComplete="email"
                    />
                  </Col>
                  {/* Password */}
                  <Col md="6" className="form-group">
                    <label htmlFor="fePassword">{t('Child.PhoneLabel')}</label>
                    <FormInput
                      type="text"
                      id="fePassword"
                      placeholder="ex: 696812610"
                      value={userDetails.phone}
                      name="phone"
                      onChange={onchange}
                      autoComplete="current-password"
                    />
                  </Col>
                </Row>
                <Button type="submit" theme="accent">{loading ? <LoadingOutlined className="loading" /> : <PlusOutlined />} Enregistrer</Button>
              </Form>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
}


UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

UserAccountDetails.defaultProps = {
  title: "Account Details"
};

export default UserAccountDetails;
