import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="breadcrumb-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2>About Us</h2>
                <ul>
                  <li>
                    <a href="index-2.html">Home</a>
                  </li>
                  <li className="active">
                    <a href="about1.html">About</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sec-title mb-50">
                  <h2>
                    Welcome to <span>our website</span>
                  </h2>
                  <p>
                  With over 30 years of experience in the industry, we strive to offer the highest levels of customer service and a highly personalised service to all our customers who are on the lookout for Sri Lanka car rental opportunities. With one of the largest and most modern and varied fleets in Sri Lanka, our service is backed by a networked front office, fully-fledged mechanical servicing and valet servicing onsite.
                  </p>
                </div>

                <div className="sec-title mb-50" style={{alignItems: "flex-start"}}>
                  <h2>
                    Our <span>Terms and Conditions</span>
                  </h2>
                  <p>
                  🔴 We only provide self-drive car rentals. So, A ten-thousand-rupee advance fee will be charged. The advance must be paid online.
                  </p>
                  <p>
                  🔴 We charged for extra kilometers after the customer returned the vehicle and Reduce advance rs.10000 from total amount.
                  </p>
                  <p>
                  🔴 We do not refund the advance if the customers have to cancel the reservation.  If the customers have valid reasons for cancalation, customers have to prove it within 24 hours. Then we consider it and refund the advance.
                  </p>

                </div>

                
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="single-about">
                  <i className="icofont icofont-car-alt-1"></i>
                  <h4>Vehicle Types</h4>
                  <p>
                    We give five types of cars for customers' needs.
                  </p>
                  <a className="theme-btn" href="/#">
                    Read more
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-about">
                  <i className="icofont icofont-ui-settings"></i>
                  <h4>Equipment</h4>
                  <p>
                    We give additional equipment.
                  </p>
                  <a className="theme-btn" href="/#">
                    Read more
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-about">
                  <i className="icofont icofont-chart-histogram"></i>
                  <h4>Friendly Service</h4>
                  <p>
                    Customers can book cars easily through this website.
                  </p>
                  <a className="theme-btn" href="/#">
                    Read more
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-about">
                  <i className="icofont icofont-car-alt-1"></i>
                  <h4>Best Vehicles</h4>
                  <p>
                    We provide the best vehicles for our customers.
                  </p>
                  <a className="theme-btn" href="/#">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-bottom ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-6">
                <div className="about-bottom-box">
                  <div className="sec-title mb-50">
                    <h2>ABOUT US</h2>
                    <p>
                    With over 30 years of experience in the industry, we strive to offer the highest levels of customer service and a highly personalised service to all our customers who are on the lookout for Sri Lanka car rental opportunities. With one of the largest and most modern and varied fleets in Sri Lanka, our service is backed by a networked front office, fully-fledged mechanical servicing and valet servicing onsite.
                    </p>
                  </div>
                  <ul>
                    <li>
                      <div className="about-info">
                        <h4>WE ARE A TRUSTED NAME</h4>
                        <p>
                          We have been maintaining our trusted name for many years. {" "}
                        </p>
                      </div>
                      <div className="about-icon">
                        <i className="icofont icofont-lock"></i>
                      </div>
                    </li>
                    {/* <li>
                      <div className="about-info">
                        <h4>WE ARE AT WORLDWIDE LOCATIONS</h4>
                        <p>
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit, sed quia consequuntur
                          magni dolores eos qui{" "}
                        </p>
                      </div>
                      <div className="about-icon">
                        <i className="icofont icofont-money-bag"></i>
                      </div>
                    </li> */}
                    <li>
                      <div className="about-info">
                      <h4>WE HAVE FIVE TYPES OF CARS</h4>
                        <p>
                         We provide the best cars to suit the need of the customers.{" "}
                        </p>
                      </div>
                      <div className="about-icon">
                        <i className="icofont icofont-box"></i>
                      </div>
                    </li>
                    <li>
                      <div className="about-info">
                      <h4>WE HAVE A BEST STOCK OF CARS</h4>
                        <p>
                          We provide the best quality car stock to deliver to our customers.{" "}
                        </p>
                      </div>
                      <div className="about-icon">
                        <i className="icofont icofont-police-car-alt-1"></i>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
            </div>
        )
    }
}
