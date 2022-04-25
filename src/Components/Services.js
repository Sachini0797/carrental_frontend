import React, { Component } from "react";
import { PopupboxManager } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
import Addbookings from "../Components/AddBooking";
import CustomerConfirmDetails from "../Components/CustomerConfirmationDetails";
import userUtils from "../utils/UserUtils";
import FeaturedVehicles from "./Section/FeaturedVehicles";
import RealFact from "./Section/RealFact";

export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Vehicles: [],
    };
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
            text: "Book Your Vehicle!",
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
          text: "Your profile has been recorded for fraudulent claims. Please Upload a utility bill not older than 3 months!",
        },
        fadeIn: true,
        fadeInSpeed: 500,
        onClosed: this.clearPopUp.bind(this),
      },
    });
  }

  booking(props) {
    if (localStorage.getItem("username") !== null) {
      var user = {
        userId: localStorage.getItem("userId"),
      };

      userUtils
        .checkUserStatus(user)
        .then((response) => response.data)
        .then(
          (data) => {
            if (data === "NEWCUSTOMER") {
              this.confirmDataForm();
            } else if (data === "SUSPENDED") {
              alert(
                "Your Driving License cannot be accepted to proceed the Booking"
              );
            } else if (data === "Not_claimed") {
              this.openPopupbox(props);
            } else if (data === "PENDINGCUSTOMER") {
              alert("Your profile is pending for Admin's Approval");
            } else if (data === "APPROVEDCUSTOMER") {
              this.openPopupbox(props);
            } else if (data === "REJECTEDCUSTOMER") {
              alert(
                "Sorry! Your confirmation Details are Rejected. Please Try Again!"
              );
              this.confirmDataForm();
            }
          },
          (error) => {}
        );
    } else {
      alert("Please Signin to Book Vehicles");
    }
  }

  componentDidMount() {
    userUtils
      .viewAllVehicles()
      .then((response) => response.data)
      .then((data) => {
        this.setState({ Vehicles: data });
      });
  }

  render() {
    return (
      <div>

        <section className="breadcrumb-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2>Our Service</h2>
                <ul>
                  <li>
                    <a href="index-2.html">Home</a>
                  </li>
                  <li className="active">
                    <a href="service1.html">Service</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <br/>
        <div style={{textAlign:"match-parent", paddingLeft:"50px", paddingTop:"50px"}}>
            <h5>
              We offer a wide range of self drive cars in Sri Lanka from
              economical to luxury on daily, weekly and monthly terms. Our 24/7
              service guarantee is backed by an in-house staff on call on-site,
              additional AA cover as well as an extensive network of garages
              offering roadside assistance if required.
            </h5>
          </div>
        <FeaturedVehicles />
        <RealFact />
        {/* <ChooseCar />       */}
      </div>
    );
  }
}
