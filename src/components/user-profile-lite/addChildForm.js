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

const AddChildForm = ({ userDetails, onchange, onSubmit, onSelectedAvatar }) => (
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">Formulaire</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form onSubmit={onSubmit}>
              <Row form>
                {/* avatar */}
                <Col md="12" className="form-group">
                  <div className="custom-file mb-3">
                    <input type="file" className="custom-file-input" id="customFile2" onChange={onSelectedAvatar} />
                    <label className="custom-file-label" htmlFor="customFile2">
                      Choose file...
                    </label>
                  </div>
                </Col>
              </Row>
              <Row form>
                {/* First Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFirstName">Prenom</label>
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
                  <label htmlFor="feLastName">Nom de Famille</label>
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
                  <label htmlFor="feFirstName">Niveau Etude</label>
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
                  <label htmlFor="feLastName">Etablissement</label>
                  <FormInput
                    id="feLastName"
                    placeholder="Last Name"
                    value={userDetails.etablissement}
                    name="etablissement"
                    onChange={onchange}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Email */}
                <Col md="6" className="form-group">
                  <label htmlFor="feEmail">Conseil Scolaire</label>
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
                  <label htmlFor="fePassword">Telephone</label>
                  <FormInput
                    type="text"
                    id="fePassword"
                    placeholder="Password"
                    value={userDetails.phone}
                    name="phone"
                    onChange={onchange}
                    autoComplete="current-password"
                  />
                </Col>
              </Row>

              <Button type="submit" theme="accent">Enregistrer</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

AddChildForm.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

AddChildForm.defaultProps = {
  title: "Account Details"
};

export default AddChildForm;
