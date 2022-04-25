import React, { Component } from 'react';
import { Toast } from 'react-bootstrap';

export default class CustomToast extends Component {
  render() {
    return (
      <Toast>
        <Toast.Header className={'bg-success text-white'} closeButton={false}>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Car Rental 365</strong>
        </Toast.Header>
        <Toast.Body>
          <large>Logging..!</large>
        </Toast.Body>
      </Toast>
    );
  }
}
