import React, { Component } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import AdminUtil from '../../utils/AdminUtil';
import AdminNavigation from './AdminNavigation';

export default class AdminBookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Bookings: [],
      show: false,
    };
    this.deleteBooking = this.deleteBooking.bind(this);
    this.completeBooking = this.completeBooking.bind(this);
  }

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleShow = (props) => {
    this.setState({
      show: true,
      selected: props,
    });
  };

  componentDidMount() {
    AdminUtil.viewBookings()
      .then((response) => response.data)
      .then(
        (data) => {
          console.log(data);
          this.setState({ Bookings: data });
        },
        (error) => {
          alert(error);
        }
      );
  }

  deleteBooking(event) {
    const bookingId = this.state.selected;
    var BookingDto = {
      refrenceId: bookingId,
    };

    AdminUtil.deleteBooking(BookingDto)
      .then((response) => response.data)
      .then(
        (data) => {
          console.log(data);
          this.setState({ Bookings: data });
        },
        (error) => {
          alert(error);
        }
      );

    this.setState({
      show: false,
    });

    window.location.reload(false);
  }

  completeBooking(event) {
    const bookingId = this.state.selected;
    var BookingDto = {
      reservationId: bookingId,
    };

    AdminUtil.completeBooking(BookingDto)
      .then((response) => response.data)
      .then(
        (data) => {
          console.log(data);
          alert(data);
          this.setState({ Bookings: data });
        },
        (error) => {
          alert(error);
        }
      );

    this.setState({
      show: false,
    });

    window.location.reload(true);
  }

  render() {
    return (
      <div>
        <div>
          <AdminNavigation />
          {/* <div className="wrapper d-flex"> */}
          <br></br>
          <div class="font-weight-bold">
            <div class="font-italic">
              <h2 class="text-center">MANAGE RESERVATIONS</h2>
            </div>
          </div>
          <div className="content">
            <main>
              <Table striped bordered hover variant="light">
                <thead>
                  <tr class="bg-warning text-center">
                    <th>Reservation Id</th>
                    <th>Vehicle Name</th>
                    <th>Customer</th>
                    <th>Brrowing Date</th>
                    <th>Return Date</th>
                    <th>Requested Duration</th>
                    <th>Equipments</th>
                    <th>Change to complete </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.Bookings.map((Bookings) => (
                    <tr class="text-center" key={Bookings.reservationId}>
                      <td>{Bookings.reservationId}</td>
                      <td>{Bookings.vehicleName}</td>
                      <td>{Bookings.user}</td>
                      <td>{Bookings.reserveDate}</td>
                      <td>{Bookings.returnDate}</td>
                      <td>{Bookings.requestDuration}</td>
                      <td>{Bookings.equipment}</td>
                      <td>
                        <Button
                          bg="dark"
                          variant="success"
                          size="lm"
                          onClick={this.handleShow.bind(
                            this,
                            Bookings.reservationId
                          )}
                        >
                          complete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Modal
                className="my-modal"
                show={this.state.show}
                onHide={this.handleClose}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Car Rental 365</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Are you sure to change the Reservation status?
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>
                    No
                  </Button>
                  <Button variant="danger" onClick={this.completeBooking}>
                    Yes
                  </Button>
                </Modal.Footer>
              </Modal>
            </main>
          </div>
          <div className="contents"></div>
          {/* </div> */}
        </div>
      </div>
    );
  }
}
