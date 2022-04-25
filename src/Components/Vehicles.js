import React, { Component } from 'react';
import { Card, CardColumns, Container } from "react-bootstrap";
import { PopupboxContainer, PopupboxManager } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
// import "react-awesome-button/dist/styles.css";
import { Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Addbookings from '../Components/AddBooking';
import CustomerConfirmDetails from '../Components/CustomerConfirmationDetails';
import userUtils from '../utils/UserUtils';


export default class Vehicles extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Vehicles: [],
      Equipments: [],
      pickdate: new Date(),
      pickHour: "",
      pickMinute: "",
      returndate: "",
    };
    this.handleCheck = this.handleCheck.bind(this);
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

  clearPopUp() {
    window.location.reload(false);
  }
  openPopupbox(props) {
    if (localStorage.getItem("username") !== null) {
      const content = <Addbookings vehicleId={props} />;

      PopupboxManager.open({
        content,
        config: {
          titleBar: {
            enable: true,
            text: "Reserve Your Vehicle!",
          },
          fadeIn: true,
          fadeInSpeed: 500,
          onClosed: this.clearPopUp,
        },
      });
    }
  }

  confirmDataForm() {
    const content = <CustomerConfirmDetails />;
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text:
            "Your profile has been recorded for fraudulent claims. Please Upload a utility bill not older than 3 months!",
        },
        fadeIn: true,
        fadeInSpeed: 500,
        onClosed: this.clearPopUp.bind(this),
      },
    });
  }



  booking(props) {
    toast.configure()
    if (localStorage.getItem("username") !== null) {

      var user = {
        userId: localStorage.getItem("userId"),
      };

      userUtils.checkUserStatus(user)
        .then((response) => response.data)
        .then(
          (data) => {

            if (data === "NEWCUSTOMER") {
              this.confirmDataForm();
            } else if (data === "LOYALCUSTOMER") {
              this.openPopupbox(props);
            } else if (data === "SUSPENDED") {
              // alert("Sorry, Your NIC cannot be accepted to proceed to Reservation");
              toast.info("Sorry, Your NIC cannot be accepted to proceed to Reservation", {
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
            } else if (data === "Not_claimed") {
              this.openPopupbox(props);
            } else if (data === "PENDINGCUSTOMER") {
              // alert("Your profile is pending for Admin's Approval");
              toast.info("Your profile is pending for Admin's Approval", {
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
            } else if (data === "APPROVEDCUSTOMER") {
              this.openPopupbox(props);
            } else if (data === "REJECTEDCUSTOMER") {
              // alert("Sorry! Your confirmation Details are Rejected. Please Try Again!");
              toast.info("Sorry! Your confirmation Details are Rejected. Please Try Again!", {
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
              this.confirmDataForm();
            }
          },
          (error) => { }
        );
    }

    else {
      // alert("Please Signin to Book Vehicles");
      toast.info("Please Signin to Book Vehicles", {
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

  componentDidMount() {
    userUtils.viewAllVehicles()
      .then((response) => response.data)
      .then((data) => {
        this.setState({ Vehicles: data })
      })

    userUtils.viewAllEquipment()
      .then((response) => response.data)
      .then((data) => {
        this.setState({ Equipments: data })
      })
  }

  render() {

    return (
      <div>
        <div class="ftco-blocks-cover-1">
          <div class="ftco-cover-1 overlay innerpage">
            <div class="container">
              <div class="row align-items-center justify-content-center">
                <div class="col-lg-6 text-center">
                  <h1>Our Vehicles</h1>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PopupboxContainer className="popup" />
        <div class="col-sm-6" className="padding-set">
          <Container>
            <br></br>
            <h2><center>Our Vehicles</center></h2>
            <br></br>

            <a href="checkAvailability">
              <button type="button" class="btn btn-danger btn3d">
                <span class="glyphicon glyphicon-cloud"></span> Check Availability
              </button>
            </a>

            {/* <AwesomeButton type="success">Check Availability</AwesomeButton> */}
            <br /><br />

            {/* View Vehicles */}
            <CardColumns>
              {this.state.Vehicles.map((Vehicle) => (
                <Card border="light" style={{ width: '22rem' }} className='zoom'>
                  <Card.Img variant="bottom" style={{ width: "250px", height: "150px" }} className='zoom'
                    alt="car-booking 365"
                    src={'http://localhost:8080/sachini/images/' + Vehicle.vehicleImage} />
                  <Card.Body>
                    <Card.Title>{Vehicle.vehicleName}</Card.Title>
                    <Card.Text>
                      Vehicle type: {Vehicle.vehicleType}
                      <br></br>
                      Fuel Type: {Vehicle.fuelType}
                      <br></br>
                      Transmission: {Vehicle.transmission}
                      <br></br>
                      Doors: {Vehicle.vehicleDoors}
                      <br></br>
                      Passengers: {Vehicle.vehicleSeats}
                      <br></br>
                      Rate per month :Rs. {Vehicle.ratePerMonth}
                      <br></br>
                      Rate per week :Rs. {Vehicle.ratePerWeek}
                      <br></br>
                      Excess mileage over 80 KM per day :Rs. {Vehicle.pricePerDay}
                      <br></br>
                      {/* Availability: {Vehicle.vehicleStatus} */}
                    </Card.Text>
                    {/* <Card.Text style={{ color: "forestgreen" }}>
                      Availability: {Vehicle.vehicleStatus}
                    </Card.Text> */}

                    <button type="button" class="btn btn-primary btn3d"
                      onClick={this.booking.bind(this, Vehicle.vehicleId)}>
                      <span class="glyphicon glyphicon-cloud"></span>
                      Book now
                    </button>
                    {/* <AwesomeButton type="primary" onClick={this.booking.bind(this, Vehicle.vehicleId)}>Book</AwesomeButton> */}


                  </Card.Body>
                </Card>
              ))}
            </CardColumns>

            {/* <br></br> */}

          </Container>

          <Container>
            <br />
            <h2><center>Our Equipment</center></h2>
            <br></br>

            {/* View Equipments */}
            <CardColumns>
              {this.state.Equipments.map((Equipment) => (
                <Card border="light" style={{ width: '18rem' }} className='zoom'>
                  <Card.Img variant="bottom" style={{ width: "250px", height: "150px" }} className='zoom'
                    alt="car-booking 365"
                    src={'http://localhost:8080/sachini/images/' + Equipment.equipmentImage} />
                  <Card.Body>
                    <Card.Title>{Equipment.equipmentName}</Card.Title>
                    <Card.Text>
                      Description: {Equipment.description}
                      <br></br>
                      {/* Availability: {Vehicle.vehicleStatus} */}
                    </Card.Text>
                    {/* <Card.Text style={{ color: "forestgreen" }}>
                      Availability: {Equipment.status}
                    </Card.Text> */}




                  </Card.Body>
                </Card>
              ))}
            </CardColumns>

            <br></br>

          </Container>





        </div>
      </div>
    );
  }



}
