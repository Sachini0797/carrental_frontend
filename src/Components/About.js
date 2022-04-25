import React, { Component } from 'react';
import { PopupboxManager } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
import Addbookings from '../Components/AddBooking';
import CustomerConfirmDetails from '../Components/CustomerConfirmationDetails';
import userUtils from '../utils/UserUtils';


export default class About extends Component {

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
                        } else if (data === "SUSPENDED") {
                            alert("Your Driving License cannot be accepted to proceed the Booking");
                        } else if (data === "Not_claimed") {
                            this.openPopupbox(props);
                        } else if (data === "PENDINGCUSTOMER") {
                            alert("Your profile is pending for Admin's Approval");
                        } else if (data === "APPROVEDCUSTOMER") {
                            this.openPopupbox(props);
                        } else if (data === "REJECTEDCUSTOMER") {
                            alert("Sorry! Your confirmation Details are Rejected. Please Try Again!");
                            this.confirmDataForm();
                        }
                    },
                    (error) => { }
                );
        }

        else {
            alert("Please Signin to Book Vehicles");
        }

    }

    componentDidMount() {
        userUtils.viewAllVehicles()
            .then((response) => response.data)
            .then((data) => {
                this.setState({ Vehicles: data })
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
                                    <h1>About Us</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div class="site-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 mb-5 mb-lg-0 order-lg-2">
                                <img src="assets2/images/hero_2.jpg" alt="Image" class="img-fluid" />
                            </div>
                            <div class="col-lg-4 mr-auto">
                                <h2>Car Company</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit suscipit, repudiandae similique accusantium eius nulla quam laudantium sequi.</p>
                                <p>Debitis voluptates corporis saepe molestias tenetur ab quae, quo earum commodi, laborum dolore, fuga aliquid delectus cum ipsa?</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="site-section bg-light">
                    <div class="container">
                        <div class="row justify-content-center text-center mb-5 section-2-title">
                            <div class="col-md-6">
                                <span class="text-primary">Our Team</span>
                                <h2 class="mb-4">Meet Our Team</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis provident eius ratione velit, voluptas laborum nemo quas ad necessitatibus placeat?</p>
                            </div>
                        </div>
                        <div class="row align-items-stretch">

                            <div class="col-lg-4 col-md-6 mb-5">
                                <div class="post-entry-1 h-100 person-1">

                                    <img src="assets2/images/person_1.jpg" alt="Image"
                                        class="img-fluid" />

                                    <div class="post-entry-1-contents">
                                        <span class="meta">Founder</span>
                                        <h2>James Doe</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 mb-5">
                                <div class="post-entry-1 h-100 person-1">

                                    <img src="assets2/images/person_2.jpg" alt="Image"
                                        class="img-fluid" />

                                    <div class="post-entry-1-contents">
                                        <span class="meta">Founder</span>
                                        <h2>James Doe</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 mb-5">
                                <div class="post-entry-1 h-100 person-1">

                                    <img src="assets2/images/person_3.jpg" alt="Image"
                                        class="img-fluid" />

                                    <div class="post-entry-1-contents">
                                        <span class="meta">Founder</span>
                                        <h2>James Doe</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 mb-5">
                                <div class="post-entry-1 h-100 person-1">

                                    <img src="assets2/images/person_4.jpg" alt="Image"
                                        class="img-fluid" />

                                    <div class="post-entry-1-contents">
                                        <span class="meta">Founder</span>
                                        <h2>James Doe</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 mb-5">
                                <div class="post-entry-1 h-100 person-1">

                                    <img src="assets2/images/person_5.jpg" alt="Image"
                                        class="img-fluid" />

                                    <div class="post-entry-1-contents">
                                        <span class="meta">Founder</span>
                                        <h2>James Doe</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 mb-5">
                                <div class="post-entry-1 h-100 person-1">

                                    <img src="assets2/images/person_1.jpg" alt="Image"
                                        class="img-fluid" />

                                    <div class="post-entry-1-contents">
                                        <span class="meta">Founder</span>
                                        <h2>James Doe</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                <div class="site-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 mb-5 mb-lg-0">
                                <img src="assets2/images/hero_1.jpg" alt="Image" class="img-fluid" />
                            </div>
                            <div class="col-lg-4 ml-auto">
                                <h2>Our History</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit suscipit, repudiandae similique accusantium eius nulla quam laudantium sequi.</p>
                                <p>Debitis voluptates corporis saepe molestias tenetur ab quae, quo earum commodi, laborum dolore, fuga aliquid delectus cum ipsa?</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container site-section mb-5">
                    <div class="row justify-content-center text-center">
                        <div class="col-7 text-center mb-5">
                            <h2>How it works</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo assumenda, dolorum necessitatibus eius earum voluptates sed!</p>
                        </div>
                    </div>
                    <div class="how-it-works d-flex">
                        <div class="step">
                            <span class="number"><span>01</span></span>
                            <span class="caption">Time &amp; Place</span>
                        </div>
                        <div class="step">
                            <span class="number"><span>02</span></span>
                            <span class="caption">Car</span>
                        </div>
                        <div class="step">
                            <span class="number"><span>03</span></span>
                            <span class="caption">Details</span>
                        </div>
                        <div class="step">
                            <span class="number"><span>04</span></span>
                            <span class="caption">Checkout</span>
                        </div>
                        <div class="step">
                            <span class="number"><span>05</span></span>
                            <span class="caption">Done</span>
                        </div>

                    </div>
                </div>
            </div>
        );
    }

}
