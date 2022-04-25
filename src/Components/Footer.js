import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    // let year = new Date().getFullYear();

    return (

      <div>
        <footer className="footer">
          <div className="container">
            <div className="row">
              
            </div>
            <div className="row mt-30">
              <div className="col-lg-3 col-md-6">
                <div className="widget">
                  <a href="index-2.html">
                    {/* <img alt="footer-logo" src="assets/img/footer-logo.png" /> */}
                   
                  </a>
                  <h2 style={{textAlign:"center", color:"white"}}>Cars Bookings 365</h2>
                  <p>
                  With over 30 years of experience in the industry, 
                  we strive to offer the highest levels of customer service and a highly personalised 
                  service to all our customers who are on the lookout for Sri Lanka car rental opportunities.
                  With one of the largest and most modern and varied fleets in Sri Lanka, 
                  our service is backed by a networked front office, fully-fledged mechanical servicing 
                  and valet servicing onsite.
                  </p>
                  <div className="widget-social-icons">
                    <a href="/#">
                      <i className="icofont icofont-social-facebook"></i>
                    </a>
                    <a href="/#">
                      <i className="icofont icofont-social-twitter"></i>
                    </a>
                    <a href="/#">
                      <i className="icofont icofont-social-skype"></i>
                    </a>
                    <a href="/#">
                      <i className="icofont icofont-social-pinterest"></i>
                    </a>
                    <a href="/#">
                      <i className="icofont icofont-social-google-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="widget">
                  <h4 className="widget-title">Our Services</h4>
                  <ul>
                    <li>
                      <a href="/#">
                        <i className="icofont icofont-curved-double-right"></i>{" "}
                        Family Hatchback
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="icofont icofont-curved-double-right"></i>{" "}
                        Family Estate
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="icofont icofont-curved-double-right"></i>{" "}
                        Family Saloon
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="icofont icofont-curved-double-right"></i>{" "}
                        Medium Vans
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="icofont icofont-curved-double-right"></i>{" "}
                        Small town cars
                      </a>
                    </li>
                   
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="widget">
                  <h4 className="widget-title">Latest News</h4>
                  <div className="widget-gallery">
                    <div className="single-widget-gallery">
                      <a href="/#">
                        <img alt="widget" src="assets/img/widget/widget1.jpg" />
                      </a>
                    </div>
                    <div className="single-widget-gallery">
                      <a href="/#">
                        <img alt="widget" src="assets/img/widget/widget2.jpg" />
                      </a>
                    </div>
                    <div className="single-widget-gallery">
                      <a href="/#">
                        <img alt="widget" src="assets/img/widget/widget3.jpg" />
                      </a>
                    </div>
                    <div className="single-widget-gallery">
                      <a href="/#">
                        <img alt="widget" src="assets/img/widget/widget4.jpg" />
                      </a>
                    </div>
                    <div className="single-widget-gallery">
                      <a href="/#">
                        <img alt="widget" src="assets/img/widget/widget5.jpg" />
                      </a>
                    </div>
                    <div className="single-widget-gallery">
                      <a href="/#">
                        <img alt="widget" src="assets/img/widget/widget6.jpg" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="widget widget-get-in-touch">
                  <h4 className="widget-title">Get in Touch</h4>
                  <ul>
                    <li>
                      <i className="icofont icofont-location-pin"></i>
                      <p>
                        <span>Our Address : </span>Colombo rd, Kurunegala, Kurunegala
                      </p>
                    </li>
                    <li>
                      <i className="icofont icofont-phone"></i>
                      <p>
                        <span>Phone Number : </span>0371234569
                      </p>
                    </li>
                    <li>
                      <i className="icofont icofont-clock-time"></i>
                      <p>
                        <span>Opening Hours : </span> Mon- Sat : 06 Am -08 Pm
                      </p>
                    </li>
                    <li>
                      <i className="icofont icofont-envelope"></i>
                      <p>
                        <span>Email: </span>cars365@gmail.com
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <a href="/#" class="scrollToTop">
          <i class="icofont icofont-arrow-up"></i>
        </a>
      </div>
    );
  }
}
