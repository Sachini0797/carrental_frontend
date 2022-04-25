import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import Zoom from 'react-reveal/Zoom';
import { Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomToast from "../Components/CustomToast";
import * as dataValidation from "../utils/dataValidation";
import UserUtil from "../utils/UserUtils";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.userChange = this.userChange.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state.show = false;
  }

  initialState = {
    username: "",
    nic: "",
    email: "",
    password: "",
    dateOfBirth: "",
    drivingLicense: "",
    mobileNumber: "",
    isValidUsername: false,
    setIsUsernameValidity: false,
    isValidEmail: false,
    setIsEmailValidity: false,
    isValidPassword: false,
    setIsPasswordValidity: false,
    isValidMobileNumber: false,
    setIsMobileNumberValidity: false,
  };

  registerUser = (event) => {
    toast.configure()

    if(!this.state.username.trim() || !this.state.password.trim()){
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
      return;
    }
    if(!dataValidation.isValidUsername(this.state.username.trim())){
      console.log("Invalid username");
      // alert(
      //   'Warning! \n Username must be more than 4 characters!'
      // );
      toast.warn("Warning! \n Username must be more than 4 characters!", {
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
      return;
    }
    if(!dataValidation.isValidEmail(this.state.email.trim())){
      console.log("Invalid email");
      // alert(
      //   'Warning! \n Give valid email address!'
      // );
      toast.warn("Warning! \n Please enter email address!", {
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
      return;
    }
    if(!dataValidation.isValidPassword(this.state.password.trim())){
      console.log("Invalid password");
      // alert(
      //   'Warning! \n Password must be more than 8 characters, \n including Uppercase, Lowercase and numbers!'
      // );
      toast.warn("Warning! \n Password must be more than 8 characters, \n including Uppercase, Lowercase and numbers!", {
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
      return;
    }

    if(!dataValidation.isValidMobileNumber(this.state.mobileNumber.trim())){
      console.log("Invalid phone number");
      // alert(
      //   'Warning! \n Give valid phone number!'
      // );
      toast.warn("Warning! \n Give valid phone number!", {
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
      return;
    }

    event.preventDefault();

    const user = {
      username: this.state.username,
      nic: this.state.nic,
      email: this.state.email,
      password: this.state.password,
      dateOfBirth: this.state.dateOfBirth,
      drivingLicense: this.state.drivingLicense,
      mobile: this.state.mobileNumber,
    };

    const formData = new FormData();
    formData.append("file", this.state.file);
    for (var key in user) {
      formData.append(key, user[key]);
    }

    UserUtil.registerUser(formData).then(
      (response) => {
        //console.log(response);
        if (response.data != null) {
          if (response.data.requestState === "Success") {
            this.setState({ show: true });
            setTimeout(() => {
              this.setState({ show: false });
              this.componentWillUpdate(response.data);
              localStorage.clear();
              this.props.history.push({
                pathname: "/login",
              });
            }, 3000);
          }
        }
      },
      (error) => {
        // alert("Registration Fail");
        toast.error("Registration Fail", {
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

        localStorage.clear();
        // window.location.reload(false);
      }
    );
    this.setState(this.initialState);
  };

  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }

  userChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  componentWillUpdate(props) {
    localStorage.setItem("userId", props.userId);
    localStorage.setItem("jwtToken", props.jwtToken);
    localStorage.setItem("username", props.username);
    localStorage.setItem("userType", props.userType);
  }

  render() {
    const { username, nic, email, password, dateOfBirth, mobileNumber } =
      this.state;

    return (
      <div>
      <div>
        <div style={{ display: this.state.show ? "block" : "none" }}>
          {" "}
          <CustomToast
            children={{
              show: this.state.show,
              message: "Welcome to Car Rental 365",
            }}
          />
        </div>
       
      
        <div style={{backgroundImage: "url(/assesets/images/register2.jpg)", backgroundSize: "100% 100%", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", width: "500", height: "600", }}>
          
          <Zoom top>
          <Container>
            <br/>
            <Row className="justify-content-md-center">
              <Card style={{ width: "48rem ", opacity: "80%", backgroundColor: "rgba(0,0,0,0.60)" }} className="bg-dark text-white" >
                <Card.Header style={{ fontWeight: "bold", fontSize: "20px"}}>
                  {"  "}
                  <FontAwesomeIcon icon={faUserPlus} /> Register
                </Card.Header>
                <Form id="userForm">
                  <Card.Body>
                    <Form>
                      <Form.Row>
                      <Form.Group as={Col} controlId="formGridUsername">
                        <Form.Label style={{ fontWeight: "bold"}}>Username :</Form.Label>
                        <Form.Control
                          required
                          autoComplete="off"
                          type="text"
                          value={username}
                          onChange={this.userChange}
                          name="username"
                          placeholder="username"
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridNIC">
                        <Form.Label style={{ fontWeight: "bold"}}>NIC :</Form.Label>
                        <Form.Control
                          required
                          autoComplete="off"
                          type="text"
                          value={nic}
                          onChange={this.userChange}
                          name="nic"
                          placeholder="NIC"
                        />
                      </Form.Group>
                      </Form.Row>
                      <Form.Row>
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label style={{ fontWeight: "bold"}}>Email :</Form.Label>
                        <Form.Control
                          required
                          value={email}
                          onChange={this.userChange}
                          type="email"
                          name="email"
                          placeholder="email"
                        />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridmobile">
                        <Form.Label style={{ fontWeight: "bold"}}>Mobile number :</Form.Label>
                        <Form.Control
                          required
                          value={mobileNumber}
                          onChange={this.userChange}
                          type="text"
                          name="mobileNumber"
                          placeholder="mobile number"
                        />
                      </Form.Group>
                      </Form.Row>
                    </Form>

                    <Form>
                      <Form.Row>
                      <Form.Group as={Col} controlId="formGriddateOfBirth">
                        <Form.Label style={{ fontWeight: "bold"}}>Date of Birth :</Form.Label>
                        <Form.Control
                          required
                          value={dateOfBirth}
                          onChange={this.userChange}
                          type="Date"
                          name="dateOfBirth"
                          placeholder="dd/mm/yyyy"
                        />
                      </Form.Group>
                    
                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label style={{ fontWeight: "bold"}}>Password :</Form.Label>
                        <Form.Control
                          required
                          value={password}
                          onChange={this.userChange}
                          type="password"
                          name="password"
                          placeholder="password"
                        />
                      </Form.Group>
                      </Form.Row>
                    </Form>

                    <Form>
                      <Form.Group as={Col} controlId="formGridDrivingLicense">
                        <Form.Label style={{ fontWeight: "bold"}}>Photo Of Your Drving License :</Form.Label>
                        <Form.Control
                          required
                          type="file"
                          name="drivingLicense"
                          placeholder="Upload your Driving License Photo"
                          onChange={this.onChange}
                        />
                      </Form.Group>
                    </Form>
                  </Card.Body>
                  <Card.Footer style={{ textAlign: "right" }}>
                    <button
                      type="button"
                      class="btn btn-danger btn3d"
                      onClick={this.registerUser}
                    >
                      <span class="glyphicon glyphicon-cloud"></span>
                      <FontAwesomeIcon icon={faUserPlus} /> Sign-up
                    </button>
                  </Card.Footer>
                </Form>
                
              </Card>
            </Row>
          </Container>
          </Zoom>
          <br></br>
        </div>
        
      </div>
      
      </div>

    );
  }
}
