import React, { Component } from 'react';

import AdminUtil from "../../utils/AdminUtil";
import AdminNavigation from "./AdminNavigation";
import { Table } from "react-bootstrap";

export default class AdminViewInquiry extends Component {

    constructor(props) {
        super(props);
        this.state = {
          Inquiry: [],
        };
    
      }

      componentDidMount() {
        AdminUtil.viewInquiries()
          .then((response) => response.data)
          .then((data) => {
            console.log(data);
            this.setState({ Inquiry: data });
          }, (error) => {
            alert(error);
          });
      }
    render() {
        return (
            <div>
                <div>
        <div>
          <AdminNavigation />
          {/* <div className="wrapper d-flex"> */}
          <br></br>
          <div class="font-weight-bold">
            <div class="font-italic">
              <h2 class="text-center">MANAGE INQUIRIES</h2>
            </div>
          </div>

          

          <br /><br />

          <div className="content">
            <main>
              <Table striped bordered hover variant="light">
                <thead>
                  <tr class="bg-warning text-center">
                    <th>Inquiry Id</th>
                    <th>Username</th>
                    <th>Telephone Number</th>
                    <th>Email</th>
                    <th>Message</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.Inquiry.map((Inquiry) => (
                    <tr class="text-center" key={Inquiry.inquiryId}>
                      <td>{Inquiry.inquiryId}</td>
                      <td>{Inquiry.userName}</td>
                      <td>{Inquiry.telephone}</td>
                      <td>{Inquiry.email}</td>
                      <td>{Inquiry.message}</td>

                      
                    </tr>
                  ))}
                </tbody>
              </Table>

            </main>
          </div>
          <div className="contents"></div>
          {/* </div> */}
        </div>
        {/* <button onClick={() => this.exportPDF()}>
          Generate Report
        </button> */}


        <br />
        <br />
      </div>
            </div>
        )
    }
}
