import { faCarAlt, faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Button, Card, Col, Container, Form } from 'react-bootstrap';
import AdminUtil from '../../utils/AdminUtil';
import AdminNavigation from './AdminNavigation';
import { Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class AdminAddVehicleForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.vehicleChange = this.vehicleChange.bind(this);
    this.vehicleRegistration = this.vehicleRegistration.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state.show = false;
  }

  initialState = {
    vehicleName: '',
    fuelType: '',
    vehicleType: '',
    transmission: '',
    doors: '',
    seats: '',
    pricePerDay: '',
    ratePerMonth: '',
    ratePerWeek: '',

  };

  vehicleRegistration = (event) => {
    toast.configure()
    if(!this.state.vehicleName.trim() || !this.state.doors.trim() || !this.state.seats.trim() || !this.state.pricePerDay.trim()){
      console.log("Fields are Empty!");
      // alert(
      //   'Warning! \n Fields are Empty!'
      // );
      toast.warn("Warning! \n Fields are Empty!", {
        transition: Flip,
        icon: "true",
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return
    }
    


    console.log(this.state.vehicleName);
    event.preventDefault();
    if (this.state.vehicleType === '' || this.state.vehicleType === null) {
      this.state.vehicleType = 'SMALL_TOWN_CAR';
    }
    if (this.state.fuelType === '' || this.state.fuelType === null) {
      this.state.fuelType = 'DIESEL';
    }
    if (this.state.transmission === '' || this.state.transmission === null) {
      this.state.transmission = 'AUTO';
    }
    const vehicle = {
      vehicleName: this.state.vehicleName,
      fuelType: this.state.fuelType,
      vehicleType: this.state.vehicleType,
      transmission: this.state.transmission,
      vehicleDoors: this.state.doors,
      vehicleSeats: this.state.seats,
      pricePerDay: this.state.pricePerDay,
      ratePerMonth: this.state.ratePerMonth,
      ratePerWeek: this.state.ratePerWeek,
    };

    const formData = new FormData();
    formData.append('file', this.state.file);
    for (var key in vehicle) {
      formData.append(key, vehicle[key]);
    }

    AdminUtil.addNewVehicle(formData).then(
      (response) => {
        if (response.data != null) {
          if (response.data === 'Success') {
            // alert('Vehicle Registration Sucessfull');
            toast.info("Vehicle Registration Successful", {
              transition: Flip,
              icon: "true",
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            this.props.history.push({
              pathname: '/adminVehicle',
            });
          }
        }
      },
      (error) => {
        // alert('Vehicle Registration Fail');
        toast.info("Vehicle Registration Fail", {
          transition: Flip,
          icon: "true",
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    );
    this.setState(this.initialState);
  };

  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }

  vehicleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const {
      vehicleName,
      fuelType,
      vehicleType,
      transmission,
      doors,
      seats,
      pricePerDay,
      ratePerMonth,
      ratePerWeek,
    } = this.state;

    return (
      <div>
        <div>
          <AdminNavigation />
          {/* <div className="wrapper d-flex"> */}

          <div className="content">
            <main>
              <div>
                <Container>
                  <br></br>
                  <Card>
                    <Card.Header>
                      {'  '}
                      <FontAwesomeIcon icon={faCarAlt} /> Register Vehicle
                    </Card.Header>
                    <Form onSubmit={this.vehicleRegistration} id="vehicleForm">
                      <Card.Body>
                        <Form>
                          <Form.Group as={Col} controlId="formGridVehiclename">
                            <Form.Label>Vehicle Name</Form.Label>
                            <Form.Control
                              required
                              autoComplete="off"
                              type="text"
                              value={vehicleName}
                              onChange={this.vehicleChange}
                              name="vehicleName"
                              placeholder="Enter the Vehicle Name"
                            />
                          </Form.Group>
                          <Form.Group as={Col} controlId="formGridFuleType">
                            <Form.Label>Fuel Type</Form.Label>
                            <Form.Control
                              as="select"
                              required
                              value={fuelType}
                              onChange={this.vehicleChange}
                              name="fuelType"
                              placeholder="Select the Fule Type"
                            >
                              <option value="DIESEL">DIESEL</option>
                              <option value="PETROL">PETROL</option>
                              <option value="HYBRID">HYBRID</option>
                            </Form.Control>
                          </Form.Group>
                        </Form>

                        <Form>
                          <Form.Group as={Col} controlId="formGridVehicleType">
                            <Form.Label>Vehicle Type</Form.Label>
                            <Form.Control
                              as="select"
                              required
                              value={vehicleType}
                              onChange={this.vehicleChange}
                              type="Text"
                              name="vehicleType"
                              placeholder="Select the Vehicle Type"
                            >
                              <option value="SMALL_TOWN_CAR">
                                SMALL TOWN CAR
                              </option>
                              <option value="SMALL_FAMILY_HATCHBACK">
                                SMALL FAMILY HATCHBACK
                              </option>
                              <option value="LARGE_FAMILY_SALOON">
                                LARGE FAMLILY SALOON
                              </option>
                              <option value="LARGE_FAMILY_ESTATE">
                                LARGE FAMILY ESTATE
                              </option>
                              <option value="MEDIUM_VAN">MEDIUM VANS</option>
                              <option value="OTHER">OTHER</option>
                            </Form.Control>
                          </Form.Group>

                          <Form.Group as={Col} controlId="formGridTransmisson">
                            <Form.Label>Transmission</Form.Label>
                            <Form.Control
                              as="select"
                              required
                              value={transmission}
                              onChange={this.vehicleChange}
                              type="text"
                              name="transmission"
                              placeholder="Select the transmission Type"
                            >
                              <option value="AUTO">AUTO</option>
                              <option value="MANUAL">MANUAL</option>
                            </Form.Control>
                          </Form.Group>
                        </Form>
                        <Form>
                          <Form.Group as={Col} controlId="formGridPricePerDay">
                            <Form.Label>Doors</Form.Label>
                            <Form.Control
                              required
                              value={doors}
                              onChange={this.vehicleChange}
                              type="text"
                              name="doors"
                              placeholder="Doors"
                            />
                          </Form.Group>
                          <Form.Group as={Col} controlId="formGridPricePerDay">
                            <Form.Label>Passengers</Form.Label>
                            <Form.Control
                              required
                              value={seats}
                              onChange={this.vehicleChange}
                              type="text"
                              name="seats"
                              placeholder="Passengers"
                            />
                          </Form.Group>
                          
                          <Form.Group as={Col} controlId="formGridPricePerDay">
                            <Form.Label>Rate per month</Form.Label>
                            <Form.Control
                              required
                              value={ratePerMonth}
                              onChange={this.vehicleChange}
                              type="text"
                              name="ratePerMonth"
                              placeholder="Rate per month"
                            />
                          </Form.Group>
                          <Form.Group as={Col} controlId="formGridPricePerDay">
                            <Form.Label>Rate per week</Form.Label>
                            <Form.Control
                              required
                              value={ratePerWeek}
                              onChange={this.vehicleChange}
                              type="text"
                              name="ratePerWeek"
                              placeholder="Rate per week"
                            />
                          </Form.Group>
                          <Form.Group as={Col} controlId="formGridPricePerDay">
                            <Form.Label>Excess mileage over 80 KM per day</Form.Label>
                            <Form.Control
                              required
                              value={pricePerDay}
                              onChange={this.vehicleChange}
                              type="text"
                              name="pricePerDay"
                              placeholder="Per day"
                            />
                          </Form.Group>
                        </Form>
                        <Form>
                          <Form.Group
                            as={Col}
                            controlId="formGridPhotoOftheVehicle"
                          >
                            <Form.Label>Image of The Vehicle</Form.Label>
                            <Form.Control
                              required
                              type="file"
                              name="VehicleImage"
                              placeholder="Upload the photo of the Vehicle"
                              onChange={this.onChange}
                            />
                          </Form.Group>
                        </Form>
                      </Card.Body>
                      <Card.Footer style={{ textAlign: 'right' }}>
                        <Button variant="danger" type="success">
                          <FontAwesomeIcon icon={faSave} /> Submit
                        </Button>
                      </Card.Footer>
                    </Form>
                    <br></br>
                  </Card>
                </Container>
              </div>
            </main>
          </div>
          <div className="contents"></div>
          {/* </div> */}
        </div>
      </div>
    );
  }
}
