import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import "react-popupbox/dist/react-popupbox.css";
import UserUtils from '../utils/UserUtils';
import { Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.inquiryChange = this.inquiryChange.bind(this);
        this.addInquiry = this.addInquiry.bind(this);

        this.state.show = false;
    }

    initialState = {
        userName: "",
        telephone: "",
        email: "",
        message: "",

    };

    addInquiry = (event) => {
        toast.configure()
        if (!this.state.userName.trim() || !this.state.telephone.trim() || !this.state.email.trim() || !this.state.message.trim()) {
            console.log("Fields are Empty!");
            // alert(
            //     'Warning! \n Fields are Empty!'
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
            return ;
        }

        event.preventDefault();
        const InquiryDto = {
            userName: this.state.userName,
            telephone: this.state.telephone,
            email: this.state.email,
            message: this.state.message,
        };

        const formData = new FormData();
        
        for (var key in InquiryDto) {
            formData.append(key, InquiryDto[key]);
        }

        UserUtils.addInquiry(formData).then((response) => {
            
            if (response.data != null) {
                if (response.data === 'success') {
                    this.setState({ show: true });
                    // alert("Message sent! 😊");
                    // this.props.history.push({
                    //     pathname: "/contact",
                    //});
                    toast.info("Message sent! 😊", {
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
        },

            (error) => {
                
                // alert("Failed! 😟")
                toast.error("Failed! 😟", {
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

    

    inquiryChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };





    render() {

        const {
            userName,
            telephone,
            email,
            message,

        } = this.state;

        return (
            <div>
                <div className="ftco-blocks-cover-1">
                    <div className="ftco-cover-1 overlay innerpage">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-6 text-center">
                                    <h1>Contact Us</h1>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-section bg-light" id="contact-section">
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-7 text-center mb-5">
                                <h2>Contact Us Or Use This Form To Rent A Car</h2>
                                <p></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 mb-5" >
                                <form id="InquiryForm">
                                    <div className="form-group row">
                                        <div className="col-md-6 mb-4 mb-lg-0">
                                            <input type="text" className="form-control" name="userName" placeholder="Username"
                                                value={userName} onChange={this.inquiryChange} />
                                        </div>



                                    </div>

                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <input type="text" className="form-control" name="telephone" placeholder=" Telephone Number"
                                                value={telephone} onChange={this.inquiryChange} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <input type="text" className="form-control" name="email" placeholder="Email address"
                                                value={email} onChange={this.inquiryChange} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <textarea type="text" className="form-control" name="message" placeholder="Write your message" cols='30' rows='12'
                                                value={message} onChange={this.inquiryChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-6 mr-auto">
                                            {/* <button className="btn btn-block btn-primary text-white py-3 px-5" onClick={this.saveContact}>Send Message</button> */}
                                            <Button variant="danger" type="success" onClick={this.addInquiry}>
                                                {/* <FontAwesomeIcon icon={faSave} /> */}
                                                Send Message
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="col-lg-4 ml-auto" >
                                <div className="bg-white p-3 p-md-5">
                                    <h3 className="text-black mb-4">Contact Info</h3>
                                    <ul className="list-unstyled footer-link">
                                        <li className="d-block mb-3">
                                            <span className="d-block text-black">Address:</span>
                                            <span>Colombo rd, Kurunegala, Kurunegala</span></li>
                                        <li className="d-block mb-3"><span className="d-block text-black">Phone:</span><span>0371234569</span></li>
                                        <li className="d-block mb-3"><span className="d-block text-black">Email:</span><span>cars365@gmail.com</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="google-map-code">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.8042672906454!2d80.36296051409751!3d7.486852613292845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae33a1e3202d11b%3A0x9616d94dececef18!2sKurunegala%20Clock%20Tower!5e0!3m2!1sen!2slk!4v1638637925469!5m2!1sen!2slk" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>

                {/* <div className="map-area">
                    <div id="map"></div>
                </div> */}
            </div>
        );
    }

}
