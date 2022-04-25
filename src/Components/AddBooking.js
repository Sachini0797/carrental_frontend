import { faCar, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Card, Col, Container, Form } from "react-bootstrap";
import { Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { default as userUtils, default as UserUtils } from '../utils/UserUtils';

export default class AddBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Vehicles: [],
      Equipment: [],
      AvailableEquipments: [],
      pickdate: new Date(),
      pickHour: "",
      pickMinute: "",
      returndate: "",
    };
    this.handledChange = this.handledChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.book = this.book.bind(this);
  }

  handledChange(event) {
    if (event.target.name === "pickdate") {

      const formData = new FormData();
      const date = event.target.value;
      formData.append("reservedate", date);
      userUtils
        .getAvailbleEquipments(formData)
        .then((response) => response.data)
        .then((data) => {
          console.log(data);
          this.setState({ AvailableEquipments: data });
        });
    }
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleCheck(event) {
    var selectedEquipment = {
      equipmentId: event.target.value,
      equipmentName: event.target.name,
    };
    if (this.checkContaiedObjects(selectedEquipment, this.state.Equipment)) {
      // removed objects when unticked
    } else {
      this.state.Equipment.push(selectedEquipment);
    }
  }

  checkContaiedObjects(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i]["equipmentId"] === obj["equipmentId"]) {
        list.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  book() {
    const vehicleId = this.props.vehicleId;
    const pickDate = this.state.pickdate;
    const returnDate = this.state.returndate;
    // alert(pickDate);

    var BookingRequestDto = {
      userId: localStorage.getItem("userId"),
      vehicleId: vehicleId,
      equipmentList: this.state.Equipment,
      reserveDate: pickDate,
      returnDate: returnDate,
    };

    console.log(BookingRequestDto);


    // UserUtils.BookVehicle(BookingRequestDto)
    //   .then((response) => 
    //   response.data)
    //   .then((data) => {
    //     alert(data)
    //     window.location.reload();
    //   });
    UserUtils.BookVehicle(BookingRequestDto).then(
      (response)=>{
        toast.configure()
        if(response.data!=null){
          if(response.data==="Successfully Reserved"){
            window.location.href="https://sandbox.payhere.lk/pay/o95f65cf"
            // alert("Successfully Reserved")
            toast.success("Successfully Reserved", {
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
          else if(response.data==="Successfully Reserved A Vehicle. No Equipments Added"){
            window.location.href="https://sandbox.payhere.lk/pay/o95f65cf"
            // alert("Successfully Reserved A Vehicle. No Equipments Added")
            toast.success("Successfully Reserved A Vehicle. No Equipments Added", {
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
          else if(response.data==="Your Selected Vehicle Is Already Reserved"){
            // alert("Your Selected Vehicle Is Already Reserved")
            toast.success("Your Selected Vehicle is Already Reserved", {
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
          else if(response.data==="This Vehicle Available For Age 18+ Customers only"){
            
            toast.success("This Vehicle Available For Age 18+ Customers only", {
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
          else {
            // alert("Network Error")
            toast.error("Network Error", {
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
        }
      }
    )
      

  }


  render() {
    return (
      <div>
        <Container>
          <Card>
            <Card.Header>
              {"  "}
              <FontAwesomeIcon icon={faCar} /> Vehicle Booking
            </Card.Header>
            <Form id="userForm">
              <Card.Body>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridUsername">
                    <Form.Label>Pickup Date</Form.Label>
                    <Form.Control
                      type="datetime-local"
                      value={this.state.pickdate}
                      onChange={this.handledChange}
                      name="pickdate"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Return Date</Form.Label>
                    <Form.Control
                      required
                      autoComplete="off"
                      type="datetime-local"
                      name="returndate"
                      value={this.state.returndate}
                      onChange={this.handledChange}
                    />
                  </Form.Group>
                </Form.Row>

                {this.state.AvailableEquipments.map((Equipment) => (
                  <div>
                    <label for="vehicle1">*{Equipment.equipmentName}:</label>
                    <input
                      type="checkbox"
                      value={Equipment.equipmentId}
                      name={Equipment.equipmentName}
                      onChange={this.handleCheck}
                    ></input>
                  </div>
                ))}
              </Card.Body>
              {/* type="success" */}
              <Card.Footer style={{ textAlign: "right" }}>
                <button type="button" class="btn btn-danger btn3d"
                  // type="secondary"
                  // size="medium"
                  // variant="danger"
                  onClick={this.book}
                >
                  <span class="glyphicon glyphicon-cloud"></span>
                  <FontAwesomeIcon icon={faSave} /> Submit
                </button>
              </Card.Footer>
            </Form>
          </Card>
        </Container>
      </div >
    );
  }
}
