
import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import "./reserver.css"
import PageTitle from "../common/PageTitle";

const Reserver = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Reservations" subtitle="List" className="text-sm-left" />
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col md="9" className="col-table">  
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Consulter la liste des reservations</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table table-hover mb-0">
             
              <tbody>
                <tr>
                  <td className="dayLabel" colSpan="4">lundi le 10</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>10:00</td>
                  <td>120 min</td>
                  <td>
                    <input className="btn btn-secondary" type="button" value="Reserver"/>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>10:00</td>
                  <td>120 min</td>
                  <td>
                    <input className="btn btn-secondary" type="button" value="Reserver"/>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>10:00</td>
                  <td>120 min</td>
                  <td>
                    <input className="btn btn-secondary" type="button" value="Reserver"/>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>10:00</td>
                  <td>120 min</td>
                  <td>
                    <input className="btn btn-secondary" type="button" value="Reserver"/>
                  </td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Reserver;
