import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class FeaturedVehicles extends Component {
  render() {
    return (
      <div>
        <section className="feature-area ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sec-title mb-50">
                <h2>
                    Featured <span>Cars</span>
                  </h2>
                  <p>
                    This is our collection of cars
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul className="nav nav-tabs">
                  <li>
                    <a
                      className="active show"
                      data-target="/#menu1"
                      data-toggle="tab"
                      href="/#"
                    >
                      Small Town Cars
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" data-target="#menu2" href="#menu4">
                      Family Hatchback
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" data-target="#menu3" href="#menu4">
                      Large Family Saloon
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" data-target="#menu4" href="#menu4">
                      Large Family Estate
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" data-target="#menu5" href="#menu6">
                      Medium Vans
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tab-content">
              <div id="menu1" className="tab-pane fade active show">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="single-feature">
                      <div className="feature-image">
                        <img
                          src="assets/img/feature/2. Small town car Kia picanto.jpg"
                          alt="feature"
                        />
                        <div className="feature-overlay">
                          <div className="display-table">
                            <div className="display-tablecell">
                              <a href="/#">
                                <i className="icofont icofont-headphone-alt-1"></i>
                              </a>
                              <a href="/#">
                                <i className="icofont icofont-link"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="feature-middle">
                        <a href="/#">
                          <i className="icofont icofont-headphone-alt-1"></i>
                          30,000
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-glue-oil"></i>20kmpl
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-company"></i>Automatic
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-paper-plane"></i>
                          Model: 2018
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-energy-water"></i>27hp
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-cur-dollar"></i>27.368
                        </a>
                      </div> */}
                      <div className="feature-bottom">
                        <h4>Kia picanto</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="single-feature">
                      <div className="feature-image">
                        <img
                          src="assets/img/feature/2. small town cars Hyundai i10.jpg"
                          alt="feature"
                          style={{width: "100%", height: "260px"}}
                        />
                        <div className="feature-overlay">
                          <div className="display-table">
                            <div className="display-tablecell">
                              <a href="/#">
                                <i className="icofont icofont-headphone-alt-1"></i>
                              </a>
                              <a href="/#">
                                <i className="icofont icofont-link"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="feature-middle">
                        <a href="/#">
                          <i className="icofont icofont-headphone-alt-1"></i>
                          30,000
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-glue-oil"></i>20kmpl
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-company"></i>Automatic
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-paper-plane"></i>
                          Model: 2018
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-energy-water"></i>27hp
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-cur-dollar"></i>27.368
                        </a>
                      </div> */}
                      <div className="feature-bottom">
                        <h4>Hyundai i10</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="single-feature">
                      <div className="feature-image">
                        <img
                          src="assets/img/feature/2. Small town TATA NANO.jpg"
                          alt="feature"
                          style={{width: "100%", height: "260px"}}
                        />
                        <div className="feature-overlay">
                          <div className="display-table">
                            <div className="display-tablecell">
                              <a href="/#">
                                <i className="icofont icofont-headphone-alt-1"></i>
                              </a>
                              <a href="/#">
                                <i className="icofont icofont-link"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="feature-middle">
                        <a href="/#">
                          <i className="icofont icofont-headphone-alt-1"></i>
                          30,000
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-glue-oil"></i>20kmpl
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-company"></i>Automatic
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-paper-plane"></i>
                          Model: 2018
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-energy-water"></i>27hp
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-cur-dollar"></i>27.368
                        </a>
                      </div> */}
                      <div className="feature-bottom">
                        <h4>TATA Nano</h4>
                      </div>
                    </div>
                  </div>
                 
                 
                  
                  
                 
                </div>
              </div>
              <div id="menu2" className="tab-pane fade">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="single-feature">
                      <div className="feature-image">
                        <img
                          src="assets/img/feature/3. Family Hatchback Nissan Wingroad.jpg"
                          alt="feature"

                        />
                        <div className="feature-overlay">
                          <div className="display-table">
                            <div className="display-tablecell">
                              <a href="/#">
                                <i className="icofont icofont-headphone-alt-1"></i>
                              </a>
                              <a href="/#">
                                <i className="icofont icofont-link"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="feature-middle">
                        <a href="/#">
                          <i className="icofont icofont-headphone-alt-1"></i>
                          30,000
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-glue-oil"></i>20kmpl
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-company"></i>Automatic
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-paper-plane"></i>
                          Model: 2018
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-energy-water"></i>27hp
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-cur-dollar"></i>27.368
                        </a>
                      </div> */}
                      <div className="feature-bottom">
                        <h4>Nissan Wingroad</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="single-feature">
                      <div className="feature-image">
                        <img
                          src="assets/img/feature/3. Small family hatchback ALTO K10 Auto.jpg"
                          alt="feature"
                          style={{width: "100%", height: "260px"}}
                        />
                        <div className="feature-overlay">
                          <div className="display-table">
                            <div className="display-tablecell">
                              <a href="/#">
                                <i className="icofont icofont-headphone-alt-1"></i>
                              </a>
                              <a href="/#">
                                <i className="icofont icofont-link"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="feature-middle">
                        <a href="/#">
                          <i className="icofont icofont-headphone-alt-1"></i>
                          30,000
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-glue-oil"></i>20kmpl
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-company"></i>Automatic
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-paper-plane"></i>
                          Model: 2018
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-energy-water"></i>27hp
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-cur-dollar"></i>27.368
                        </a>
                      </div> */}
                      <div className="feature-bottom">
                        <h4>ALTO K10 Auto</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="single-feature">
                      <div className="feature-image">
                        <img
                          src="assets/img/feature/3. Small family hatchback ALTO Manual.jpg"
                          alt="feature"
                          style={{width: "100%", height: "260px"}}
                        />
                        <div className="feature-overlay">
                          <div className="display-table">
                            <div className="display-tablecell">
                              <a href="/#">
                                <i className="icofont icofont-headphone-alt-1"></i>
                              </a>
                              <a href="/#">
                                <i className="icofont icofont-link"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="feature-middle">
                        <a href="/#">
                          <i className="icofont icofont-headphone-alt-1"></i>
                          30,000
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-glue-oil"></i>20kmpl
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-company"></i>Automatic
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-paper-plane"></i>
                          Model: 2018
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-energy-water"></i>27hp
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-cur-dollar"></i>27.368
                        </a>
                      </div> */}
                      <div className="feature-bottom">
                        <h4>ALTO Manual</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="menu3" className="tab-pane fade">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="single-feature">
                      <div className="feature-image">
                        <img
                          src="assets/img/feature/4. Large family saloon Nissan Sunny.jpg"
                          alt="feature"
                          style={{width: "100%", height: "260px"}}
                        />
                        <div className="feature-overlay">
                          <div className="display-table">
                            <div className="display-tablecell">
                              <a href="/#">
                                <i className="icofont icofont-headphone-alt-1"></i>
                              </a>
                              <a href="/#">
                                <i className="icofont icofont-link"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="feature-middle">
                        <a href="/#">
                          <i className="icofont icofont-headphone-alt-1"></i>
                          30,000
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-glue-oil"></i>20kmpl
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-company"></i>Automatic
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-paper-plane"></i>
                          Model: 2018
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-energy-water"></i>27hp
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-cur-dollar"></i>27.368
                        </a>
                      </div> */}
                      <div className="feature-bottom">
                        <h4>Nissan Sunny</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="single-feature">
                      <div className="feature-image">
                        <img
                          src="assets/img/feature/4. Large family saloon Perodua Bezza.jpg"
                          alt="feature"
                          style={{width: "100%", height: "260px"}}
                        />
                        <div className="feature-overlay">
                          <div className="display-table">
                            <div className="display-tablecell">
                              <a href="/#">
                                <i className="icofont icofont-headphone-alt-1"></i>
                              </a>
                              <a href="/#">
                                <i className="icofont icofont-link"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="feature-middle">
                        <a href="/#">
                          <i className="icofont icofont-headphone-alt-1"></i>
                          30,000
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-glue-oil"></i>20kmpl
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-company"></i>Automatic
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-paper-plane"></i>
                          Model: 2018
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-energy-water"></i>27hp
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-cur-dollar"></i>27.368
                        </a>
                      </div> */}
                      <div className="feature-bottom">
                        <h4>Perodua Bezza</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="single-feature">
                      <div className="feature-image">
                        <img
                          src="assets/img/feature/4. Large family saloon Toyota Corolla Axio- NZE141.jpg"
                          alt="feature"
                          style={{width: "100%", height: "260px"}}
                        />
                        <div className="feature-overlay">
                          <div className="display-table">
                            <div className="display-tablecell">
                              <a href="/#">
                                <i className="icofont icofont-headphone-alt-1"></i>
                              </a>
                              <a href="/#">
                                <i className="icofont icofont-link"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="feature-middle">
                        <a href="/#">
                          <i className="icofont icofont-headphone-alt-1"></i>
                          30,000
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-glue-oil"></i>20kmpl
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-company"></i>Automatic
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-paper-plane"></i>
                          Model: 2018
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-energy-water"></i>27hp
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-cur-dollar"></i>27.368
                        </a>
                      </div> */}
                      <div className="feature-bottom">
                        <h4>Toyota Corolla Axio- NZE141</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="menu4" className="tab-pane fade">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="single-feature">
                      <div className="feature-image">
                        <img
                          src="assets/img/feature/5. Large family estate Honda civic.jpg"
                          alt="feature"
                          style={{width: "100%", height: "260px"}}
                        />
                        <div className="feature-overlay">
                          <div className="display-table">
                            <div className="display-tablecell">
                              <a href="/#">
                                <i className="icofont icofont-headphone-alt-1"></i>
                              </a>
                              <a href="/#">
                                <i className="icofont icofont-link"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="feature-middle">
                        <a href="/#">
                          <i className="icofont icofont-headphone-alt-1"></i>
                          30,000
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-glue-oil"></i>20kmpl
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-company"></i>Automatic
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-paper-plane"></i>
                          Model: 2018
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-energy-water"></i>27hp
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-cur-dollar"></i>27.368
                        </a>
                      </div> */}
                      <div className="feature-bottom">
                        <h4>Honda civic</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="single-feature">
                      <div className="feature-image">
                        <img
                          src="assets/img/feature/5. Large family estate Mazda 6.jpg"
                          alt="feature"
                          style={{width: "100%", height: "260px"}}
                        />
                        <div className="feature-overlay">
                          <div className="display-table">
                            <div className="display-tablecell">
                              <a href="/#">
                                <i className="icofont icofont-headphone-alt-1"></i>
                              </a>
                              <a href="/#">
                                <i className="icofont icofont-link"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="feature-middle">
                        <a href="/#">
                          <i className="icofont icofont-headphone-alt-1"></i>
                          30,000
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-glue-oil"></i>20kmpl
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-company"></i>Automatic
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-paper-plane"></i>
                          Model: 2018
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-energy-water"></i>27hp
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-cur-dollar"></i>27.368
                        </a>
                      </div> */}
                      <div className="feature-bottom">
                        <h4>Mazda 6</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="single-feature">
                      <div className="feature-image">
                        <img
                          src="assets/img/feature/5. Large family estate Toyota Premio.jpg"
                          alt="feature"
                          style={{width: "100%", height: "260px"}}
                        />
                        <div className="feature-overlay">
                          <div className="display-table">
                            <div className="display-tablecell">
                              <a href="/#">
                                <i className="icofont icofont-headphone-alt-1"></i>
                              </a>
                              <a href="/#">
                                <i className="icofont icofont-link"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="feature-middle">
                        <a href="/#">
                          <i className="icofont icofont-headphone-alt-1"></i>
                          30,000
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-glue-oil"></i>20kmpl
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-company"></i>Automatic
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-paper-plane"></i>
                          Model: 2018
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-energy-water"></i>27hp
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-cur-dollar"></i>27.368
                        </a>
                      </div> */}
                      <div className="feature-bottom">
                        <h4>Toyota Premio</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="menu5" className="tab-pane fade">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="single-feature">
                      <div className="feature-image">
                        <img
                          src="assets/img/feature/6. Medium van Nissan vanette.jpeg"
                          alt="feature"
                          style={{width: "100%", height: "260px"}}
                        />
                        <div className="feature-overlay">
                          <div className="display-table">
                            <div className="display-tablecell">
                              <a href="/#">
                                <i className="icofont icofont-headphone-alt-1"></i>
                              </a>
                              <a href="/#">
                                <i className="icofont icofont-link"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="feature-middle">
                        <a href="/#">
                          <i className="icofont icofont-headphone-alt-1"></i>
                          30,000
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-glue-oil"></i>20kmpl
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-company"></i>Automatic
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-paper-plane"></i>
                          Model: 2018
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-energy-water"></i>27hp
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-cur-dollar"></i>27.368
                        </a>
                      </div> */}
                      <div className="feature-bottom">
                        <h4>Nissan vanette</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="single-feature">
                      <div className="feature-image">
                        <img
                          src="assets/img/feature/6. Medium van Suzuki every.jpg"
                          alt="feature"
                          style={{width: "100%", height: "260px"}}
                        />
                        <div className="feature-overlay">
                          <div className="display-table">
                            <div className="display-tablecell">
                              <a href="/#">
                                <i className="icofont icofont-headphone-alt-1"></i>
                              </a>
                              <a href="/#">
                                <i className="icofont icofont-link"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="feature-middle">
                        <a href="/#">
                          <i className="icofont icofont-headphone-alt-1"></i>
                          30,000
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-glue-oil"></i>20kmpl
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-company"></i>Automatic
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-paper-plane"></i>
                          Model: 2018
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-energy-water"></i>27hp
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-cur-dollar"></i>27.368
                        </a>
                      </div> */}
                      <div className="feature-bottom">
                        <h4>Suzuki every</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="single-feature">
                      <div className="feature-image">
                        <img
                          src="assets/img/feature/6. Medium van Toyota Townace Noah CR42.jpg"
                          alt="feature"
                          style={{width: "100%", height: "260px"}}
                        />
                        <div className="feature-overlay">
                          <div className="display-table">
                            <div className="display-tablecell">
                              <a href="/#">
                                <i className="icofont icofont-headphone-alt-1"></i>
                              </a>
                              <a href="/#">
                                <i className="icofont icofont-link"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="feature-middle">
                        <a href="/#">
                          <i className="icofont icofont-headphone-alt-1"></i>
                          30,000
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-glue-oil"></i>20kmpl
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-company"></i>Automatic
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-paper-plane"></i>
                          Model: 2018
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-energy-water"></i>27hp
                        </a>
                        <a href="/#">
                          <i className="icofont icofont-cur-dollar"></i>27.368
                        </a>
                      </div> */}
                      <div className="feature-bottom">
                        <h4>Toyota Townace Noah CR42</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 mt-20 text-center">
                {/* <a href="/#" className="theme-btn theme-btn2"> */}
                <Link to={'about'}  className="theme-btn theme-btn2"> 
                  Read More
                  </Link>
                {/* </a> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

