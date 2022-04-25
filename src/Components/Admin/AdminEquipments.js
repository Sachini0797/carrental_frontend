import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import jsPDF from "jspdf";
import "jspdf-autotable";
import React, { Component } from "react";
import { Button, ButtonGroup, Table, Form, FormControl } from "react-bootstrap";
import { PopupboxContainer, PopupboxManager } from "react-popupbox";
import AdminUtil from "../../utils/AdminUtil";
import AdminEditEquipment from "./AdminEditEquipment";
import AdminNavigation from "./AdminNavigation";

export default class AdminEquipments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Equipments: [],
      query: "",
    };
  }

  handleInputChange = (event) => {
    const query = event.target.value;

    this.setState((prevState) => {
      return {
        query,
      };
    });
  };

  componentDidMount() {
    AdminUtil.viewEquipments()
      .then((response) => response.data)
      .then(
        (data) => {
          console.log(data);
          this.setState({ Equipments: data });
        },
        (error) => {
          alert(error);
        }
      );
  }

  deleteEquipment(props) {
    const equipment = {
      equipmentId: props,
    };

    AdminUtil.deleteEquipment(equipment)
      .then((response) => response.data)
      .then(
        (data) => {
          console.log(data);
          this.setState({ Equipment: data });
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

  clearPopUp(event) {
    window.location.reload(false);
  }

  openPopupbox(props) {
    const content = <AdminEditEquipment equipment={props} />;

    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: false,
          text: "Edit Equipment Details",
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

    const title = "Equipment Report";
    const headers = [["ID", "Equipment Name", "Description", "Availability"]];

    const data = this.state.Equipments.map((elt) => [
      elt.equipmentId,
      elt.equipmentName,
      elt.description,
      elt.status,
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
          {/* <div className="wrapper d-flex"> */}
          {/* <div className="sideMenu bg-mattBlackLight">
              <AdminSideBar />
            </div> */}
          <div className="content">
            <br></br>
            <div class="font-weight-bold">
              <div class="font-italic">
                <h2 class="text-center">MANAGE EQUIPMENTS</h2>
              </div>
            </div>

            <div style={{ float: "right" }}>

              <Button type="button" variant="success" href="/admin_add_equipments">
                New Equipment
              </Button>
              <Button type="button" variant="primary" style={{ marginLeft: "5px", marginRight: "5px" }} onClick={() => this.exportPDF()}>
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
                    <th>Equipment Name</th>
                    <th>Description</th>
                    {/* <th>Availability</th> */}
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.Equipments.filter((equipment) => {
                    if (this.state.query === "") {
                      return equipment;
                    }
                    else if (
                      equipment.equipmentName
                      .toLowerCase()
                        .includes(this.state.query.toLowerCase())
                    ) {
                      return equipment;
                    }
                  }).map((Equipments) => (
                    <tr class="text-center" key={Equipments.equipmentId}>
                      <td>{Equipments.equipmentName}</td>
                      <td>{Equipments.description}</td>
                      {/* <td>{Equipments.status}</td> */}
                      <td>
                        <ButtonGroup>
                          <Button
                            variant="outline-primary"
                            onClick={this.openPopupbox.bind(this, Equipments)}
                          >
                            {" "}
                            <FontAwesomeIcon icon={faEdit} />
                          </Button>
                          <Button
                            variant="outline-danger"
                            onClick={this.deleteEquipment.bind(
                              this,
                              Equipments.equipmentId
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
          {/* </div> */}
        </div>

        {/* <div className="d-grid gap-2" >
          <Button variant="info" size="lg" onClick={() => this.exportPDF()}>
            Generate Report
          </Button>
          
        </div> */}


        <br />
        <br />

      </div >
    );
  }
}
