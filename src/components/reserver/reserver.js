
import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import "./reserver.css"
import PageTitle from "../common/PageTitle";
import ModalAnt from '../ant-modal/modal';

class Reserver extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      reservations: [
        {
          date: "lundi le 10",
          id: 1,
          hour: '10:00',
          time: '120',
          isReserv: false
        },
        {
          date: "lundi le 10",
          id: 2,
          hour: '10:00',
          time: '120',
          isReserv: true
        },
        {
          date: "lundi le 10",
          id: 3,
          hour: '11:00',
          time: '60',
          isReserv: false
        },
        {
          date: "lundi le 10",
          id: 4,
          hour: '16:00',
          time: '120',
          isReserv: true
        },


      ]
    }
  }

  makeReservation(id) {
    const index = this.state.reservations.findIndex((object) => {
      return object.id === id;
    })
    const copyReservation = this.state.reservations.slice();
    copyReservation[index].isReserv = true;
    this.setState(
      { reservations: copyReservation }
    )
  }

  disMakeReservation(id) {
    const index = this.state.reservations.findIndex((object) => {
      return object.id === id;
    })
    const copyReservation = this.state.reservations.slice();
    copyReservation[index].isReserv = false;
    this.setState(
      { reservations: copyReservation }
    )
  }
  render() {
    return (
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
                    {
                      this.state.reservations.map((reservation, idx) => (
                        <tr key={idx}>
                          <td> {reservation.id} </td>
                          <td> {reservation.hour} </td>
                          <td> {reservation.time} min</td>
                          <td>
                            <ModalAnt />

                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Reserver;
