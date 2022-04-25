import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class Navigationbar extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout = (event) => {
        localStorage.clear();
    }

    render() {
        return (
            <Navbar bg="dark" variant="dark" className='navbar tm-main-nav' responsive>
                <Link to={"admin"} className='navbar-brand' >
                    <Navbar.Brand ><img src="/assesets/images/logo365.png" alt="car booking 365" style={{height: "70%", width: "70%"}}/></Navbar.Brand>
                </Link>


                <Nav className="mr-auto" >
                    <Link to={"adminVehicle"} className='nav-link'>Manage Vehicle</Link>   
                    <Link to={"adminEquipments"} className='nav-link'>Manage Equipment</Link>
                    <Link to={"adminCustomer"} className='nav-link'>Manage User</Link>
                    <Link to={"adminBookings"} className='nav-link'>Manage Reservation</Link>
                    {/* <Link to={"adminPendingUsers"} className='nav-link'>Pending User</Link> */}
                    <Link to={"adminCompareRatings"} className='nav-link'>Compair ratings</Link>
                    <Link to={"adminViewInquiries"} className='nav-link'>Manage Inquiries</Link>

                </Nav>

                        <Nav>


                            {localStorage.getItem("username") !== null && localStorage.getItem("userType") === "ADMIN" ? <Link to={""} className='nav-link'><FontAwesomeIcon icon={faSignInAlt} /> <span onClick={this.logout}> Logout</span> </Link> : <Link to={"login"} className='nav-link'>Sign-in <FontAwesomeIcon icon={faSignInAlt} /> </Link>}

                            {localStorage.getItem("username") !== null && localStorage.getItem("userType") === "ADMIN" ? <Link to={"admin"} className='nav-link'>{localStorage.getItem("username")} <FontAwesomeIcon icon={faUserPlus} /> </Link>: <Link to={"register"} className='nav-link'> Sign-up <FontAwesomeIcon icon={faUserPlus} /> </Link>}


                        </Nav>
                   


            </Navbar>
        );
    }


}

