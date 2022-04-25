import React, { Component } from 'react';
import { Container, Jumbotron, Button, Row } from 'react-bootstrap';

export default class Welcome extends Component {

  constructor(props) {
    super(props);
    this.state = this.props.location.state;
    if(!this.state){
      this.state = this.initialState;
    }
  }
  

  initialState = {
    detail: {
      userName: "",
    },
  };

  render() {
    return (
      <Container>
        <br></br>
        <Row>
          <Jumbotron >
          <h1>Hello, {this.state.detail.username}!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
              </p>
            <p>
              <Button variant="danger">Learn more</Button>
            </p>
          </Jumbotron>
        </Row>
      </Container>


    );
  }


}
