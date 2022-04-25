import React, { Component } from "react";
// import AdminNavigation from "./AdminNavigation";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import "../../assesets/css/style.css";
import AdminNavigation from "./AdminNavigation";

export default class AdminHome extends Component {
  render() {
    return (
      <div >
        <div>
          <AdminNavigation />
          <div className="wrapper d-flex">
            {/* <div className="sideMenu bg-mattBlackLight">
              <AdminNavigation />
            </div> */}
            <div className="content">
              <main>
                <div className="container-fluid">
                  <div className="row">
                    <div >
                      <div style={{ paddingLeft: "155px" }}>
                        <Flip left>
                          <h1>Welcome to Admin Home</h1>
                        </Flip>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContents: "center",
                          textAlign: "center",
                        }}
                        className="text-center"
                      >
                        <Zoom left>
                          <img
                            min-width="250px"
                            min-height="60000px"
                            src="/assesets/images/admin1.gif"
                            style={{ alignSelf: "center", position: "center", paddingLeft: "350px" }}
                            sizes="cover"
                            alt="car booking 365"


                          />
                        </Zoom>

                      </div>
                    </div>
                    <div>

                    </div>
                  </div>

                  <div className="row"></div>
                </div>
              </main>
            </div>
            <div className="contents"></div>
          </div>
        </div>
      </div>
    );
  }
}
