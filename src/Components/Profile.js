import { ScrollView } from "@cantonjs/react-scroll-view";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import {
    Card, Col,
    Container, Form,
    Image
} from "react-bootstrap";
import UserUtils from '../utils/UserUtils';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Profiles: [],
            show: false,
        };
    };

    componentDidMount() {
        var User = {
            userId: localStorage.getItem('userId'),
        };

        UserUtils.viewProfile(User)
            .then((response) => response.data)
            .then((data) => {
                console.log(data);
                this.setState({ Profiles: data });
            },
                (error) => {
                    alert(error);
                }
            );
    }

    render() {
        return (
            <ScrollView onEndReached={this.handleEndReached} style={{ height: '100vh' }}>
                <Container>
                    <Card>


                        <Card.Header style={{ height: '8vh', fontSize: '4vh', textAlign: 'center' }}>
                            {"  "}
                            <FontAwesomeIcon icon={faUserPlus} /> My Profile
                        </Card.Header>

                        <Form id="userForm" style={{ marginTop: '10px' }}>
                            {/* <center>
                                <Col xs={5} md={3}>
                                    <Image
                                        alt="profile"
                                        src={"http://localhost:8080/sachini/images/" + Profile.drivingLicensePhoto}
                                        fluid
                                    />
                                </Col>
                            </center> */}


                            {this.state.Profiles.map((Profile) => (
                                <Card.Body>

                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridUsername">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control
                                                required
                                                autoComplete="on"
                                                type="text"
                                                defaultValue={Profile.username}
                                                // onChange={this.vehicleChange}
                                                name="vehicleName"
                                                placeholder="Username"
                                            />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridUsername">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                required
                                                autoComplete="on"
                                                type="text"
                                                defaultValue={Profile.email}
                                                // onChange={this.vehicleChange}
                                                name="vehicleName"
                                                placeholder="Email"
                                            />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridUsername">
                                            <Form.Label>Mobile</Form.Label>
                                            <Form.Control
                                                required
                                                autoComplete="on"
                                                type="text"
                                                defaultValue={Profile.mobile}
                                                // onChange={this.vehicleChange}
                                                name="vehicleName"
                                                placeholder="Mobile"
                                            />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridUsername">
                                            <Form.Label>NIC</Form.Label>
                                            <Form.Control
                                                required
                                                autoComplete="on"
                                                type="text"
                                                defaultValue={Profile.nic}
                                                // onChange={this.vehicleChange}
                                                name="vehicleName"
                                                placeholder="NIC"
                                            />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridUsername">
                                            <Form.Label>Date of Birth</Form.Label>
                                            <Form.Control
                                                required
                                                autoComplete="on"
                                                type="text"
                                                defaultValue={Profile.dateOfBirth}
                                                // onChange={this.vehicleChange}
                                                name="vehicleName"
                                                placeholder="Date of Birth"
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridUsername">
                                            <Form.Label>Status</Form.Label>
                                            <Form.Control
                                                required
                                                autoComplete="on"
                                                type="text"
                                                defaultValue={Profile.userStatus}
                                                // onChange={this.vehicleChange}
                                                name="vehicleName"
                                                placeholder="Status"
                                            />
                                        </Form.Group>

                                    </Form.Row>

                                    <Form.Row>
                                        {/* <Form.Group as={Col} controlId="formGridLandLine">
                                            <Form.Label>New Photo</Form.Label> */}
                                            {/* <Form.Control type="file" onChange={this.onChange} /> */}
                                        {/* </Form.Group> */}
                                    </Form.Row>

                                    <Form.Row></Form.Row>
                                </Card.Body>

                            ))}





                            {/* type="success" */}

                            <Card.Footer style={{ textAlign: "right" }}>
                                {/* <Button variant="danger" onClick={this.edit}>
                                    <FontAwesomeIcon icon={faSave} /> Save Changes
                                </Button> */}
                            </Card.Footer>

                        </Form>

                    </Card>
                </Container>
            </ScrollView >
        );
    }
}
