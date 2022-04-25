import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

export default class Navigationbar extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout = (event) => {
    localStorage.clear();
  };

  render() {
    return (
      
      <Navbar
        bg="dark"
        variant="dark"
        className="navbar tm-main-nav"
        responsive
      >
        <Link to={''} className="navbar-brand">
          <Navbar.Brand> <img src="/assesets/images/logo365.png" alt="car booking 365" style={{height: "80%", width: "80%"}}/>   
           </Navbar.Brand>
        </Link>
        {/* <Link to={'home'} className="nav-link">
            Home
          </Link> */}

        <Nav className="mr-auto">
          {localStorage.getItem('username') !== null &&
          localStorage.getItem('userType') === 'CUSTOMER' ? (
            <Link to={'bookings'} className="nav-link" style={{ color: "white", fontSize: "16px"}}>
              Reservations
            </Link>
          ) : (
            <Link to={''} className="nav-link"></Link>
          )}
          <Link to={'services'} className="nav-link" style={{ color: "white", fontSize: "16px"}}>
            Services
          </Link>
          <Link to={'vehicles'} className="nav-link" style={{ color: "white", fontSize: "16px"}}>
            Vehicles
          </Link>
         
          <Link to={'about'} className="nav-link" style={{ color: "white", fontSize: "16px"}}>
            About us
          </Link>
          {/* <Link to={'carlisting'} className="nav-link">
            Car Listing
          </Link> */}
          <Link to={'customerCompareRatings'} className="nav-link" style={{ color: "white", fontSize: "16px"}}>
            Compare Prices
          </Link>
          <Link to={'contact'} className="nav-link" style={{ color: "white", fontSize: "16px"}}>
            Contact
          </Link>

          
        </Nav>

        <Nav>
          {localStorage.getItem('username') !== null &&
          localStorage.getItem('userType') === 'CUSTOMER' ? (
            <Link to={''} className="nav-link" style={{ color: "white", fontSize: "16px"}}>
              <FontAwesomeIcon icon={faSignInAlt} />{' '}
              <span onClick={this.logout}> Logout</span>{' '}
            </Link>
          ) : (
            <Link to={'login'} className="nav-link" style={{ color: "white", fontSize: "16px"}}>
              Sign-in <FontAwesomeIcon icon={faSignInAlt} />{' '}
            </Link>
          )}

          {localStorage.getItem('username') !== null &&
          localStorage.getItem('userType') === 'CUSTOMER' ? (
            <Link to={'profile'} className="nav-link" style={{ color: "white", fontSize: "16px"}}>
              {localStorage.getItem('username')}{' '}
              <FontAwesomeIcon icon={faUserPlus} />{' '}
            </Link>
          ) : (
            <Link to={'register'} className="nav-link" style={{ color: "white", fontSize: "16px"}}>
              {' '}
              Sign-up <FontAwesomeIcon icon={faUserPlus} />{' '}
            </Link>
          )}
        </Nav>
      </Navbar>
      
    );
  }
}
