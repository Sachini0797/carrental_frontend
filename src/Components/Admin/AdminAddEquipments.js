import { faArchive, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Button, Card, Col, Container, Form } from "react-bootstrap";
import AdminUtil from "../../utils/AdminUtil";
import AdminNavigation from "./AdminNavigation";
import { Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class AdminAddEquipments extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.equipmentChange = this.equipmentChange.bind(this);
    this.addEquipments = this.addEquipments.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state.show = false;
  }

  initialState = {
    euipmentName: "",
    description: "",
  };

  addEquipments = (event) => {
    toast.configure()
    if (!this.state.euipmentName.trim() || !this.state.description.trim()) {
      console.log("Fields are Empty!");
      // alert("Warning! \n Fields are Empty!");
      toast.warn("Warning! \n Fields are Empty!", {
        transition: Flip,
        icon: "true",
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    event.preventDefault();
    const EquipmentsDto = {
      equipmentName: this.state.euipmentName,
      description: this.state.description,
    };

    const formData = new FormData();
    formData.append("file", this.state.file);
    for (var key in EquipmentsDto) {
      formData.append(key, EquipmentsDto[key]);
    }

    AdminUtil.addEquipments(formData).then(
      (response) => {
        alert(this.state.euipmentName);
        alert(this.state.description);

        if (response.data != null) {
          if (response.data === "Success") {
            // alert("Equipment Registration Sucessfull");
            toast.success("Equipment Registration Successful", {
              transition: Flip,
              icon: "true",
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            this.props.history.push({
              pathname: "/adminEquipments",
            });
          }
        }
      },
      (error) => {
        // alert("Equipment Registration Fail");
        toast.error("Equipment Registration Fail", {
          transition: Flip,
          icon: "true",
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    );
    this.setState(this.initialState);
  };

  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }

  equipmentChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <div>
          <AdminNavigation />
          {/* <div className="wrapper d-flex"> */}

          <div className="content">
            <main>
              <div>
                <Container>
                  <br></br>
                  <Card>
                    <Card.Header>
                      {"  "}
                      <FontAwesomeIcon icon={faArchive} /> Add Equipment
                    </Card.Header>
                    <Form onSubmit={this.addEquipments} id="EquipmentForm">
                      <Card.Body>
                        <Form>
                          <Form.Group
                            as={Col}
                            controlId="formGridEquipmentname"
                          >
                            <Form.Label>Equipment Name</Form.Label>
                            <Form.Control
                              required
                              autoComplete="off"
                              type="text"
                              value={this.euipmentName}
                              onChange={this.equipmentChange}
                              name="euipmentName"
                              placeholder="Enter the Equipment Name"
                            />
                          </Form.Group>
                          <Form.Group
                            as={Col}
                            controlId="formGridEquipmentname"
                          >
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                              required
                              autoComplete="off"
                              type="text"
                              value={this.description}
                              onChange={this.equipmentChange}
                              name="description"
                              placeholder="Enter the Equipment Description"
                            />
                          </Form.Group>

                          <Form.Group
                            as={Col}
                            controlId="formGridPhotoOftheVehicle"
                          >
                            <Form.Label>Image of The Equipment</Form.Label>
                            <Form.Control
                              required
                              type="file"
                              name="EquipmentImage"
                              placeholder="Upload the photo of the Equipment"
                              onChange={this.onChange}
                            />
                          </Form.Group>
                        </Form>
                      </Card.Body>
                      <Card.Footer style={{ textAlign: "right" }}>
                        <Button variant="danger" type="success">
                          <FontAwesomeIcon icon={faSave} /> Submit
                        </Button>
                      </Card.Footer>
                    </Form>
                    <br></br>
                  </Card>
                </Container>
              </div>
            </main>
          </div>
          <div className="contents"></div>
          {/* </div> */}
        </div>
      </div>
    );
  }
}
