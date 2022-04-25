import React, { Component } from "react";
import { Card, Button, Container, Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faFile } from "@fortawesome/free-solid-svg-icons";
import userUtils from "../utils/UserUtils";
import { Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class CustomerConfirmationDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onChange = this.onChange.bind(this);
    this.submitUtilBills = this.submitUtilBills.bind(this);
  }

  submitUtilBills() {
    toast.configure()
    var retrievedObject = JSON.parse(localStorage.getItem("userObject"));
    const formData = new FormData();

    formData.append("file", this.state.file);
    formData.append("userid", retrievedObject.userId);
    userUtils
      .submitConfimationDetails(formData)
      .then((response) => response.data)
      .then(
        (data) => {
          if (data === "Success") {
            // alert("Your confimation details are pending");
            toast.info("Your confimation details are pending", {
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
            // window.location.reload();
          }
        },
        (error) => {}
      );
  }
  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }
  render() {
    return (
      <Container>
        <Card>
          <Card.Header>
            {"  "}
            <FontAwesomeIcon icon={faFile} /> Utility bill, Council tax bill or a Bank statement
          </Card.Header>

          <Card.Body>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridLandLine">
                <Form.Label>Upload</Form.Label>
                <Form.Control type="file" onChange={this.onChange} />
              </Form.Group>
            </Form.Row>

            <Form.Row></Form.Row>
          </Card.Body>
          <Card.Footer style={{ textAlign: "right" }}>
            <Button variant="danger" type="success" onClick={this.submitUtilBills}>
              <FontAwesomeIcon icon={faSave} /> Submit
            </Button>
          </Card.Footer>
        </Card>
      </Container>
    );
  }
}
