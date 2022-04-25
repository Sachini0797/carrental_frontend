import { ScrollView } from "@cantonjs/react-scroll-view";
import { faCarAlt, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import {
  Button, Card, Col,
  Container, Form,
  Image
} from "react-bootstrap";
import AdminUtil from "../../utils/AdminUtil";
import { Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class AdminEditVehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicleId: "",
      vehicleName: "",
      vehicleType: "",
      fuelType: "",
      transmission: "",
      pricePerDay: "",
      vehicleDoors: "",
      vehicleImage: "",
      vehicleSeats: "",
      ratePerMonth: "",
      ratePerWeek: "",
      Vehicle: props.vehicle,
    };

    this.edit = this.edit.bind(this);
  }

  componentDidMount() {
    this.setState({
      vehicleId: this.state.Vehicle.vehicleId,
      vehicleName: this.state.Vehicle.vehicleName,
      vehicleType: this.state.Vehicle.vehicleType,
      fuelType: this.state.Vehicle.fuelType,
      transmission: this.state.Vehicle.transmission,
      pricePerDay: this.state.Vehicle.pricePerDay,
      vehicleDoors: this.state.Vehicle.vehicleDoors,
      vehicleSeats: this.state.Vehicle.vehicleSeats,
      vehicleImage: this.state.Vehicle.vehicleImage,
      ratePerMonth: this.state.Vehicle.ratePerMonth,
      ratePerWeek: this.state.Vehicle.ratePerWeek,
    });
    this.onChange = this.onChange.bind(this);
  }

  edit = (event) => {
    toast.configure()
    // alert(this.state.vehicleId);
    window.location.reload(false);
    event.preventDefault();

    const vehicle = {
      vehicleId: this.state.vehicleId,
      vehicleName: this.state.vehicleName,
      vehicleType: this.state.vehicleType,
      fuelType: this.state.fuelType,
      transmission: this.state.transmission,
      pricePerDay: this.state.pricePerDay,
      vehicleDoors: this.state.vehicleDoors,
      vehicleSeats: this.state.vehicleSeats,
      vehicleImage: this.state.vehicleImage,
      ratePerMonth: this.state.ratePerMonth,
      ratePerWeek: this.state.ratePerWeek,
    };

    const formData = new FormData();
    formData.append("file", this.state.file);
    for (var key in vehicle) {
      formData.append(key, vehicle[key]);
    }

    AdminUtil.updateVehicle(formData).then(
      (response) => {
        if (response.data != null) {
          if (response.data === "Successful") {
            // alert("Successfully Updated!😃");
            toast.success("Successfully Updated!😃", {
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
              pathname: "/adminVehicle",
            });
          }
        }
      },
      (error) => {
        // alert("Update Failed!");
        toast.error("Successfully Failed!😃", {
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
    return (
      <ScrollView onEndReached={this.handleEndReached} style={{ height: '100vh' }}>
        <Container>
          <Card>
            <Card.Header style={{ height: '8vh', fontSize: '4vh', textAlign: 'center' }}>
              {"  "}
              <FontAwesomeIcon icon={faCarAlt} /> Edit Vehicle
            </Card.Header>
            <Form id="userForm" style={{ marginTop: '10px' }}>
              <center>
                <Col xs={5} md={3}>
                  <Image
                    src={
                      "http://localhost:8080/sachini/images/" +
                      this.state.vehicleImage
                    }
                    fluid
                  />
                </Col>
              </center>
              <Card.Body>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridUsername">
                    <Form.Label>Vehicle Id</Form.Label>
                    <Form.Control
                      required
                      autoComplete="on"
                      type="text"
                      defaultValue={this.state.vehicleId}
                      onChange={this.vehicleChange}
                      name="vehicleId"
                      readOnly={true}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridUsername">
                    <Form.Label>Vehicle Name</Form.Label>
                    <Form.Control
                      required
                      autoComplete="on"
                      type="text"
                      defaultValue={this.state.vehicleName}
                      onChange={this.vehicleChange}
                      name="vehicleName"
                      placeholder="Vehicle Name"
                    />
                  </Form.Group>

                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridTransmisson">
                    <Form.Label>Vehicle Type</Form.Label>
                    <Form.Control
                      as="select"
                      required
                      value={this.state.vehicleType}
                      onChange={this.vehicleChange}
                      type="text"
                      name="vehicleType"
                      placeholder="Select the transmission Type"
                    >
                      <option value="SMALL_TOWN_CAR">SMALL TOWN CAR</option>
                      <option value="SMALL_FAMILY_HATCHBACK">SMALL FAMILY HATCHBACK</option>
                      <option value="LARGE_FAMILY_SALOON">LARGE FAMILY SALOON</option>
                      <option value="LARGE_FAMILY_ESTATE">LARGE FAMILY ESTATE</option>
                      <option value="MEDIUM_VAN">MEDIUM_VAN</option>
                      <option value="OTHER">OTHER</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridTransmisson">
                    <Form.Label>Transmission</Form.Label>
                    <Form.Control
                      as="select"
                      required
                      value={this.state.transmission}
                      onChange={this.vehicleChange}
                      type="text"
                      name="transmission"
                      placeholder="Select the transmission Type"
                    >
                      <option value="AUTO">AUTO</option>
                      <option value="MANUAL">MANUAL</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  

                  <Form.Group as={Col} controlId="formGridPricePerDay">
                    <Form.Label>Doors</Form.Label>
                    <Form.Control
                      required
                      defaultValue={this.state.vehicleDoors}
                      onChange={this.vehicleChange}
                      type="text"
                      name="vehicleDoors"
                      placeholder="Doors"
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridPricePerDay">
                    <Form.Label>Passengers</Form.Label>
                    <Form.Control
                      required
                      defaultValue={this.state.vehicleSeats}
                      onChange={this.vehicleChange}
                      type="text"
                      name="vehicleSeats"
                      placeholder="Seats"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridFuleType">
                    <Form.Label>Fuel Type</Form.Label>
                    <Form.Control
                      as="select"
                      required
                      value={this.state.fuelType}
                      onChange={this.vehicleChange}
                      type="text"
                      name="fuelType"
                    >
                      <option value="DIESEL">DIESEL</option>
                      <option value="PETROL">PETROL</option>
                      <option value="HYBRID">HYBRID</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Rate per month</Form.Label>
                    <Form.Control
                      required
                      autoComplete="on"
                      defaultValue={this.state.ratePerMonth}
                      onChange={this.vehicleChange}
                      type="text"
                      name="ratePerMonth"
                      placeholder="Enter rate per month"
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Rate per week</Form.Label>
                    <Form.Control
                      required
                      autoComplete="on"
                      defaultValue={this.state.ratePerWeek}
                      onChange={this.vehicleChange}
                      type="text"
                      name="ratePerWeek"
                      placeholder="Enter rate per week"
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>EXCESS MILEAGE OVER 80 KM PER DAY</Form.Label>
                    <Form.Control
                      required
                      autoComplete="on"
                      defaultValue={this.state.pricePerDay}
                      onChange={this.vehicleChange}
                      type="text"
                      name="pricePerDay"
                      placeholder="Enter Price per Day"
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridLandLine">
                    <Form.Label>New Photo</Form.Label>
                    <Form.Control type="file" onChange={this.onChange} />
                  </Form.Group>
                </Form.Row>

                <Form.Row></Form.Row>
              </Card.Body>
              {/* type="success" */}
              <Card.Footer style={{ textAlign: "right" }}>
                <Button variant="danger" onClick={this.edit}>
                  <FontAwesomeIcon icon={faSave} /> Save Changes
                </Button>
              </Card.Footer>
            </Form>
          </Card>
        </Container>
      </ScrollView>
    );
  }
}
