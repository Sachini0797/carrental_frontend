import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.logoutAdmin = this.logoutAdmin.bind(this);
  }

  logoutAdmin() {
    localStorage.clear();
    this.props.history.push({
      pathname: '/',
    });
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-mattBlackLight fixed-top">
        <button className="navbar-toggler sideMenuToggler" type="button">
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand" href="#">
          Car Rental 365
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle p-0"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="text">Admin</span>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdown"
              >
                {/* <Link to={""} className='nav-link'><span onClick={this.logout}></span> Logout</Link> */}
                <a className="dropdown-item">
                  <span onClick={this.logoutAdmin}>Logout</span>{' '}
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default withRouter(Navigation);
