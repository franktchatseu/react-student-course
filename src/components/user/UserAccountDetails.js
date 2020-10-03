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
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button
} from "shards-react";
import { useTranslation } from 'react-i18next';


const UserAccountDetails = ({ userDetails, onchange, onSubmit }) => {
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
                  {/* email*/}
                  <Col md="6" className="form-group">
                    <label htmlFor="email">{t('User.EmailLabel')}</label>
                    <FormInput
                      type="email"
                      id="email"
                      placeholder="louenkamfrank@gmail.com"
                      value={userDetails.email}
                      name="email"
                      onChange={onchange}
                    />
                  </Col>
                  {/* phone */}
                  <Col md="6" className="form-group">
                    <label htmlFor="phone">{t('Child.PhoneLabel')}</label>
                    <FormInput
                      id="phone"
                      placeholder="ex: 696812610"
                      value={userDetails.phone}
                      name="phone"
                      onChange={onchange}
                    />
                  </Col>
                </Row>
                <Row form>
                  {/* Description */}
                  <Col md="12" className="form-group">
                    <label htmlFor="feDescription">Description</label>
                    <FormTextarea
                      id="feDescription"
                      rows="5"
                      name="description"
                      value={userDetails.description}
                      onChange={onchange}
                      autoComplete="current-password"
                    />
                  </Col>
                </Row>
                <Button type="submit" theme="accent">{t('Child.SaveLabel')}</Button>
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
