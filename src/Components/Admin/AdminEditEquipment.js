import { faCarAlt, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Button, Card, Col, Container, Form, Image } from "react-bootstrap";
import AdminUtil from "../../utils/AdminUtil";
import { Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class AdminEditEquipment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equipmentId: "",
      equipmentName: "",
      description: "",
      equipmentImage: "",
      Equipment: props.equipment,
    };
    this.edit = this.edit.bind(this);
  }

  componentDidMount() {
    this.setState({
      equipmentId: this.state.Equipment.equipmentId,
      equipmentName: this.state.Equipment.equipmentName,
      description: this.state.Equipment.description,
      equipmentImage: this.state.Equipment.equipmentImage,
    });
    this.onChange = this.onChange.bind(this);
  }

  edit = (event) => {
    toast.configure()
    // alert(this.state.equipmentId);
    window.location.reload(false);

    const equipment = {
      equipmentId: this.state.equipmentId,
      equipmentName: this.state.equipmentName,
      description: this.state.description,
      equipmentImage: this.state.equipmentImage,
    };

    const formData = new FormData();
    formData.append("file", this.state.file);
    for (var key in equipment) {
      formData.append(key, equipment[key]);
    }

    AdminUtil.updateEquipment(formData).then(
      (response) => {
        if (response.data != null) {
          if (response.data === "Successful") {
            // alert("Successfully Updated!😃");
            toast.success("Successfully Updated!😃", {
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
        // alert("Update Failed!");
        toast.error("Update Failed!", {
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
        <Container>
          <Card>
            <Card.Header>
              {"  "}
              <FontAwesomeIcon icon={faCarAlt} /> Edit Equipment
            </Card.Header>
            <Form id="userForm">
              <center>
                <Col xs={5} md={3}>
                  <Image
                    src={
                      "http://localhost:8080/sachini/images/" +
                      this.state.equipmentImage
                    }
                    fluid
                  />
                </Col>
              </center>
              <Card.Body>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridUsername">
                    <Form.Label>Equipment Id</Form.Label>
                    <Form.Control
                      required
                      autoComplete="on"
                      type="text"
                      defaultValue={this.state.equipmentId}
                      onChange={this.equipmentChange}
                      name="EquipmentlId"
                      readOnly={true}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEquipmentname">
                    <Form.Label>Equipment Name</Form.Label>
                    <Form.Control
                      required
                      autoComplete="off"
                      type="text"
                      defaultValue={this.state.equipmentName}
                      onChange={this.equipmentChange}
                      name="equipmentName"
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridUsername">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      required
                      autoComplete="on"
                      type="text"
                      defaultValue={this.state.description}
                      onChange={this.equipmentChange}
                      name="description"
                    />
                  </Form.Group>
                </Form.Row>



                <Form.Row>
                  <Form.Group as={Col} controlId="formGridLandLine">
                    <Form.Label>New Photo</Form.Label>
                    <Form.Control type="file" onChange={this.onChange} />
                  </Form.Group>
                </Form.Row>
              </Card.Body>

              <Card.Footer style={{ textAlign: "right" }}>
                <Button variant="danger" onClick={this.edit}>
                  <FontAwesomeIcon icon={faSave} /> Save Changes
                </Button>
              </Card.Footer>
            </Form>
          </Card>
        </Container>
      </div>
    );
  }
}
