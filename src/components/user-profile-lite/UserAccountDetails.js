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

const UserAccountDetails = ({ userDetails,onchange }) => (
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">Formulaire</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>
              <Row form>
                {/* First Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFirstName">Nom et Prenom</label>
                  <FormInput
                    id="FirstName"
                    placeholder="First Name"
                    value={userDetails.name}
                    name = "name"
                    onChange={onchange}
                  />
                </Col>
                {/* Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feLastName">Etablissement</label>
                  <FormInput
                    id="feLastName"
                    placeholder="Last Name"
                    value={userDetails.etablissement}
                    name ="etablissement"
                    onChange={onchange}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Email */}
                <Col md="6" className="form-group">
                  <label htmlFor="feEmail">Email</label>
                  <FormInput
                    type="email"
                    id="feEmail"
                    placeholder="Email Address"
                    value={userDetails.email}
                    onChange={onchange}
                    name ="email"
                    autoComplete="email"
                  />
                </Col>
                {/* Password */}
                <Col md="6" className="form-group">
                  <label htmlFor="fePassword">Telephone</label>
                  <FormInput
                    type="text"
                    id="fePassword"
                    placeholder="Password"
                    value={userDetails.telephone}
                    name ="telephone"
                    onChange={onchange}
                    autoComplete="current-password"
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
                    name ="description"
                    onChange={onchange}
                    value={userDetails.description}
                    />
                </Col>
              </Row>
              <Button theme="accent">Enregistrer</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

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
