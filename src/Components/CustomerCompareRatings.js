import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import UserUtil from "../utils/UserUtils";

export default class CustomerCompareRatings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      webVehicleList: [],
    };
  }

  //   componentDidMount(){
  //     userUtils.viewAllVehicles()
  //     .then((response)=> response.data)
  //     .then((data) => {
  //       this.setState({Vehicles:data})
  //     })

  componentDidMount() {
    UserUtil.getWebScrapingVehicles()
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        this.setState({ webVehicleList: data })
      });
  }
  render() {
    return (
      <div>
        <div>

          {/* <div className="wrapper d-flex"> */}
          <br></br>
          <div class="font-weight-bold">
            <div class="font-italic">
              <h2 class="text-center">DAILY VEHICLE RATINGS</h2>
            </div>
          </div>
          <div className="content">
            <main>
              <Table striped bordered hover variant="light">
                <thead>
                  <tr class="bg-warning text-center">
                    <th>Vehicle Name</th>
                    <th>Monthly Rate</th>
                    <th>Weekly Rate</th>
                    <th>Milage per day</th>

                  </tr>
                </thead>
                <tbody>
                  {this.state.webVehicleList.map((WebScraped) => (
                    <tr class="text-center" key={WebScraped.vehicleName}>
                      <td>{WebScraped.vehicleName}</td>
                      <td>Rs.{WebScraped.monthlyRate}</td>
                      <td>Rs.{WebScraped.weeklyRate}</td>
                      <td>Rs.{WebScraped.millagePerDay}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </main>
          </div>
          <div className="contents"></div>
          {/* </div> */}
        </div>
      </div>

    );
  }


}