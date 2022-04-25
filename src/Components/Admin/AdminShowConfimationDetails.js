import React, { Component } from "react";
import { Image } from "react-bootstrap";
export default class AdminShowConfimationDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.image,
    };
  }

  render() {
    return (
      <div>
        <Image
          src={require(`../../Images/utilityconfimation/${this.state.image}`)}
          fluid
        />
      </div>
    );
  }
}
