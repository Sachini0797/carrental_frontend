import { faEdit, faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import jsPDF from "jspdf";
import "jspdf-autotable";
import React, { Component } from "react";
import { Button, ButtonGroup, Table, FormControl, Form } from "react-bootstrap";
import { PopupboxContainer, PopupboxManager } from "react-popupbox";
import AdminUtil from "../../utils/AdminUtil";
import AdminEditVehicle from "../Admin/AdminEditVehicle";
import AdminNavigation from "./AdminNavigation";

export default class AdminVehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      Vehicles: [],
    };
    this.deleteVehicle = this.deleteVehicle.bind(this);
  }

  handleInputChange = (event) => {
    const query = event.target.value;

    this.setState((prevState) => {
      return {
        query,
      };
    });
  };

  viewAllVehicles() {
    AdminUtil.viewVehicles()
      .then((response) => response.data)
      .then(
        (data) => {
          console.log(data);
          this.setState({ Vehicles: data });
        },
        (error) => {
          alert(error);
        }
      );
  }

  componentDidMount() {
    this.viewAllVehicles();
  }

  handleShow = (props) => {
    this.setState({
      show: true,
      selected: props,
    });
  };

  // 2nd code start
  deleteVehicle(props) {
    const vehicle = {
      vehicleId: props,
    };

    AdminUtil.deleteVehicle(vehicle)
      .then((response) => response.data)
      .then(
        (data) => {
          console.log(data);
          this.setState({ Vehicles: data });
        },
        (error) => {
          alert(error);
        }
      );

    this.setState({
      show: false,
    });

    window.location.reload(false);
  }
  // end of 2nd code

  clearPopUp(event) {
    window.location.reload(false);
  }

  openPopupbox(props) {
    const content = <AdminEditVehicle vehicle={props} />;

    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: false,
          text: "Edit Vehicle Details",
        },
        fadeIn: true,
        fadeInSpeed: 500,
        onClosed: this.clearPopUp,
      },
    });
  }

  exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Vehicle Report";
    const headers = [
      [
        "ID",
        "Vehicle Name",
        "Category",
        "Transmission",
        "Doors",
        "Seats",
        "Per km",
        "Fuel Type",
        "Status",
      ],
    ];

    const data = this.state.Vehicles.map((elt) => [
      elt.vehicleId,
      elt.vehicleName,
      elt.vehicleType,
      elt.transmission,
      elt.vehicleDoors,
      elt.vehicleSeats,
      elt.pricePerDay,
      elt.fuelType,
      elt.vehicleStatus,
      elt.ratePerMonth,
      elt.ratePerWeek,
    ]);

    let content = {
      startY: 50,
      head: headers,
      body: data,
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report.pdf");
  };

  render() {
    return (
      <div>
        <PopupboxContainer className="popup" />
        <div>
          <AdminNavigation />

          <div className="content">
            <br></br>
            <div class="font-weight-bold">
              <div class="font-italic">
                <h2 class="text-center">MANAGE VEHICLES</h2>
              </div>
            </div>

            <div style={{ float: "right" }}>
              <Button type="button" variant="success" href="/admin_add_vehicle">
                New Vehicle
              </Button>
              <Button
                type="button"
                variant="primary"
                style={{ marginLeft: "5px", marginRight: "5px" }}
                onClick={() => this.exportPDF()}
              >
                Generate Report
              </Button>
            </div>
            <div className="searchForm">
              {/* <input
                placeholder="Search for..."
                value={this.state.query}
                onChange={this.handleInputChange}
                style={{ marginLeft: "10px" }}
              /> */}
              <Form className="d-flex">
              
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  style={{ width: "350px", marginLeft: "20px", borderColor:"#FF5733", borderRadius: "40px", fontSize:"20px" }}
                  value={this.state.query}
                  onChange={this.handleInputChange}
                ></FormControl>
              </Form>
            </div>

            <br />
            
            <main>
              <Table striped bordered hover variant="light">
                <thead>
                  <tr class="bg-warning text-center">
                    <th>VEHICLE NAME</th>
                    <th>VEHICLE TYPE</th>
                    <th>TRANSMISSION</th>
                    <th>DOORS</th>
                    <th>PASSENGERS</th>
                    <th>RATE PER MONTH</th>
                    <th>RATE PER WEEK</th>
                    <th>EXCESS MILEAGE OVER 80 KM PER DAY</th>
                    <th>FUEL TYPE</th>
                    <th>STATUS</th>
                    <th>EDIT</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.Vehicles.filter((vehicle) => {
                    if (this.state.query === "") {
                      return vehicle;
                    } else if (
                      vehicle.vehicleName
                        .toLowerCase()
                        .includes(this.state.query.toLowerCase()) ||
                      vehicle.fuelType
                        .toLowerCase()
                        .includes(this.state.query.toLowerCase()) ||
                      vehicle.transmission
                        .toLowerCase()
                        .includes(this.state.query.toLowerCase()) ||
                      vehicle.vehicleType
                        .toLowerCase()
                        .includes(this.state.query.toLowerCase())
                    ) {
                      return vehicle;
                    }
                  }).map((Vehicle) => (
                    <tr class="text-center" key={Vehicle.vehicleId}>
                      <td class="text-center">{Vehicle.vehicleName}</td>

                      <td>{Vehicle.vehicleType}</td>
                      <td>{Vehicle.transmission}</td>
                      <td>{Vehicle.vehicleDoors}</td>
                      <td>{Vehicle.vehicleSeats}</td>
                      <td>{Vehicle.ratePerMonth}</td>
                      <td>{Vehicle.ratePerWeek}</td>
                      <td>{Vehicle.pricePerDay}</td>
                      <td>{Vehicle.fuelType}</td>
                      <td>{Vehicle.vehicleStatus}</td>

                      <td>
                        <ButtonGroup>
                          <Button
                            variant="outline-primary"
                            onClick={this.openPopupbox.bind(this, Vehicle)}
                          >
                            {" "}
                            <FontAwesomeIcon icon={faEdit} />
                          </Button>
                          {/* 1st code */}
                          <Button
                            variant="outline-danger"
                            onClick={this.deleteVehicle.bind(
                              this,
                              Vehicle.vehicleId
                            )}
                          >
                            {" "}
                            <FontAwesomeIcon icon={faTrash} />
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </main>
          </div>
          <div className="contents"></div>
        </div>

        {/* <button onClick={() => this.exportPDF()}>Generate Report</button> */}

        <br />
        <br />
      </div>
    );
  }
}
