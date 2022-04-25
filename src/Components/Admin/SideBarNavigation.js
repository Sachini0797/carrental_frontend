import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SideBarNavigatio extends Component {
  render() {
    return (
      <div className="sidebar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="" className="nav-link px-2">
            <Link to={"admin"} style={{color: 'white', textDecoration: 'none'}}>
              Dashboard</Link>
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link px-2">
            <Link to={"adminVehicle"} style={{color: 'white', textDecoration: 'none'}}>
            Manage Vehicle</Link>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2">
            <Link to={"adminEquipments"} style={{color: 'white', textDecoration: 'none'}}>
            Manage Equipment</Link>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2">
            <Link to={"adminCustomer"} style={{color: 'white', textDecoration: 'none'}}>
            Manage User</Link>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2">
            <Link to={"adminBookings"} style={{color: 'white', textDecoration: 'none'}}>
              Manage Reservation</Link>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2">
            <Link to={"adminPendingUsers"} style={{color: 'white', textDecoration: 'none'}}>
            Pending User </Link>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2">
            <Link to={"adminCompareRatings"} style={{color: 'white', textDecoration: 'none'}}>
              Compair ratings</Link>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
