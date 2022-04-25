import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import jsPDF from "jspdf";
import "jspdf-autotable";
import React, { Component } from 'react';
import { Button, ButtonGroup, Table, Form, FormControl } from "react-bootstrap";
import AdminUtil from "../../utils/AdminUtil";
import AdminNavigation from "./AdminNavigation";
import { Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class AdminCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Customers: [],
      Vehicles: [],
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
    AdminUtil.veiwCustomers()
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        this.setState({ Customers: data });
      }, (error) => {
        // toast.info(error, {
        //   transition: Flip,
        //   icon: "true",
        //   position: "top-center",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });
        alert(error);
      });
  }

  pendingUsers(){
    this.props.history.push({
      pathname: "/adminPendingUsers",
    });
  }

  deleteUser(props) {
    toast.configure()
    const user = {
      userId: props
    }

    AdminUtil.deleteUser(user)
      .then((response) => response.data)
      .then(
        (data) => {
          console.log(data);
          this.setState({ Users: data });
        },
        (error) => {
          // toast.info(error, {
          //   transition: Flip,
          //   icon: "true",
          //   position: "top-center",
          //   autoClose: 5000,
          //   hideProgressBar: false,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          //   progress: undefined,
          // });
          alert(error);
        }
      );

    this.setState({
      show: false,
    });

    // window.location.reload(false);
  }

  exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Customers Report";
    const headers = [["ID", "Username", "NIC", "Email", "Age", "Status", "Mobile"]];

    const data = this.state.Customers.map(elt => [elt.userId, elt.username, elt.nic, elt.email, elt.age, elt.userStatus, elt.mobile]);

    let content = {
      startY: 50,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report.pdf")
  }
  render() {
    return (
      <div>
        <div>
          <AdminNavigation />
          {/* <div className="wrapper d-flex"> */}
          <br></br>
          <div class="font-weight-bold">
            <div class="font-italic">
              <h2 class="text-center">MANAGE USERS</h2>
            </div>
          </div>

          <div style={{ float: "right" }}>

          <Button type="button" variant="danger" style={{ marginLeft: "5px", marginRight: "5px" }} onClick={() => this.pendingUsers()}>
              View Pending Users
            </Button>
            <Button type="button" variant="primary" style={{ marginLeft: "5px", marginRight: "5px" }} onClick={() => this.exportPDF()}>
              Generate Report
            </Button>

          </div>

          <div>
              
              <Form className="d-flex">
              
                <FormControl
                  type="search"
                  placeholder="Search..."
                  className="me-2"
                  aria-label="Search"
                  style={{ width: "350px", marginLeft: "20px", borderColor:"#FF5733", borderRadius: "40px", fontSize:"20px" }}
                  value={this.state.query}
                  onChange={this.handleInputChange}
                ></FormControl>
              </Form>
            </div>

          {/* <br /> */}

          <div className="content">
            <main>
              <Table striped bordered hover variant="light">
                <thead>
                  <tr class="bg-warning text-center">
                    <th>user Id</th>
                    <th>Username</th>
                    <th>NIC</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Status</th>
                    <th>Mobile</th>
                    {/* <th>Remove</th> */}
                  </tr>
                </thead>
                <tbody>
                  {this.state.Customers.filter((customer) => {
                    if (this.state.query === "") {
                      return customer;
                    } else if (
                      customer.username
                        .toLowerCase()
                        .includes(this.state.query.toLowerCase()) ||
                      customer.userId
                        .toString()
                        .includes(this.state.query.toString())||
                      customer.nic.toLowerCase().includes(this.state.query.toLowerCase()) ||
                      // customer.mobile.toLowerCase().includes(this.state.query.toLowerCase())
                      customer.email.toLowerCase().includes(this.state.query.toLowerCase())
                      ) {
                        return customer;
                      }
                  }).map((Customers) => (
                    <tr class="text-center" key={Customers.userId}>
                      <td>{Customers.userId}</td>
                      <td>{Customers.username}</td>
                      <td>{Customers.nic}</td>
                      <td>{Customers.email}</td>
                      <td>{Customers.age}</td>
                      <td>{Customers.userStatus}</td>
                      <td>{Customers.mobile}</td>
                      {/* <td>
                        <ButtonGroup>
                          <Button variant="outline-danger" onClick={this.deleteUser.bind(this, Customers.userId)}>
                            {" "}
                            <FontAwesomeIcon icon={faTrash} />
                          </Button>
                        </ButtonGroup>
                      </td> */}
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

    );
  }


}