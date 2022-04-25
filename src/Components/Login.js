import {
  faSignInAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import { Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomToast from '../Components/CustomToast';
import * as dataValidation from "../utils/dataValidation";
import Userutil from '../utils/UserUtils';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.userChange = this.userChange.bind(this);
    this.userlogin = this.userlogin.bind(this);
  }



  initialState = {
    username: '',
    password: '',
    isValidUsername: false,
    setIsUsernameValidity: false,
    isValidPassword: false,
    setIsPasswordValidity: false,
  };

  userlogin = (event) => {
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
    event.preventDefault();

    Userutil.AuthenticateUserWithLogin(
      this.state.username,
      this.state.password
    ).then(
      (response) => {
        //console.log(response);
        if (response.data != null) {
          console.log(response);
          if (response.data.requestState === 'Success') {
            if (response.data.userType === 'ADMIN') {
              this.setState({ show: false });
              this.componentWillUpdate(response.data);
              this.props.history.push({
                pathname: '/admin',
              });
            } else {
              this.setState({ show: true });
              setTimeout(() => {
                this.setState({ show: false });
                this.componentWillUpdate(response.data);
                this.props.history.push({
                  pathname: '/',
                });
              }, 3000);
            }
          } else {
            alert('Invalid username or Password');
            window.location.reload(false);
          }
        }
      },
      (error) => {
        toast.error("Invalid Credentials!", {
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

  userChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  componentWillUpdate(props) {
    localStorage.setItem('userId', props.userId);
    localStorage.setItem('jwtToken', props.jwtToken);
    localStorage.setItem('username', props.username);
    localStorage.setItem('userType', props.userType);
    localStorage.setItem('userObject', JSON.stringify(props));
  }

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <div style={{ display: this.state.show ? 'block' : 'none' }}>
          {' '}
          <CustomToast
            children={{
              show: this.state.show,
              message: 'Welcome to Car Rental 365',
            }}
          />
        </div>
        <div>
          
        <div style={{backgroundImage: "url(/assesets/images/login.jpg)", backgroundSize: "100% 100%", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", width: "500", height: "600"}}>
        <Zoom bottom>
        <Container>
          <br></br>
          <Row className="justify-content-md-left">
            <Card style={{ width: "28rem", opacity: "80%", backgroundColor: "rgba(0,0,0,0.60)" }}  className="bg-dark text-white">
              <Card.Header style={{ fontWeight: "bold", fontSize: "20px"}}>
                {'  '}
                <FontAwesomeIcon icon={faSignInAlt} /> Login
              </Card.Header>
              <Form id="userForm">
                <Card.Body>
                  <Form>
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
                  </Form>

                  <Form>
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
                  </Form>
                </Card.Body>
                <Card.Footer style={{ textAlign: 'right' }}>
                  <button type="button" class="btn btn-danger btn3d"
                    onClick={this.userlogin}
                  >
                    <span class="glyphicon glyphicon-cloud"></span>
                    <FontAwesomeIcon icon={faSignInAlt} /> Sign in
                  </button>
                  {/* <Button variant="danger" type="success" style={{ marginLeft: "10px" }}>
                  <FontAwesomeIcon icon={faUserPlus} /> Sign up
                </Button> */}
                </Card.Footer>
              </Form>
              <br></br>
            </Card>
          </Row>
         
        </Container>
        </Zoom>
        <br></br>
        </div>
        </div>
        {/* </div> */}

      </div>
    );
  }
}
