import React, { Component } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { default as userUtils, default as UserUtils } from '../utils/UserUtils';

export default class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Bookings: [],
      show: false,
    };
    this.cancelBookings = this.cancelBookings.bind(this);
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
    var User = {
      userId: localStorage.getItem('userId'),
      username: localStorage.getItem('username'),
    };

    userUtils
      .viewMybookings(User)
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

  cancelBookings(event) {
    const bookingId = this.state.selected;
    var BookingDto = {
      reservationId: bookingId,
    };

    UserUtils.cancleBooking(BookingDto)
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

  render() {
    return (
      <div>
        <br></br>
        <div class="font-weight-bold">
          <div class="font-italic">
            <h2 class="text-center">MY RESERVATIONS</h2>
          </div>
        </div>

        <main>
          <Table striped bordered hover variant="white">
            <thead>
              <tr class="bg-warning text-center">
                <th>Reservation Id</th>
                <th>Vehicle Name</th>
                <th>Brrowing Date</th>
                <th>Return Date</th>
                <th>Requested Duration</th>
                <th>Equipments</th>
                <th>Cancel Bookings</th>
              </tr>
            </thead>
            <tbody>
              {this.state.Bookings.map((Bookings) => (
                <tr class="text-center" key={Bookings.reservationId}>
                  <td>{Bookings.reservationId}</td>
                  <td>{Bookings.vehicleName}</td>
                  <td>{Bookings.reserveDate}</td>
                  <td>{Bookings.returnDate}</td>
                  <td>{Bookings.requestDuration}</td>
                  <td>{Bookings.equipment}</td>
                  <td>
                    <Button
                      variant="danger"
                      value={Bookings.reservationId}
                      onClick={this.handleShow.bind(
                        this,
                        Bookings.reservationId
                      )}
                      size="sm"
                    >
                      Cancel
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Car Rental 365</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure to cancel the Reservation?  We do not refund your advance fee.  See more details in Terms and Conditions</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                No
              </Button>
              <Button variant="danger" onClick={this.cancelBookings}>
                Yes
              </Button>
            </Modal.Footer>
          </Modal>
        </main>
      </div>
    );
  }
}
