import React, { Component } from 'react';
import { Button, Table } from "react-bootstrap";
import { PopupboxContainer, PopupboxManager } from "react-popupbox";
import AdminUtil from "../../utils/AdminUtil";
import AdminShowConfimationDetails from '../Admin/AdminShowConfimationDetails';
import AdminNavigation from "./AdminNavigation";
import { Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class AdminPedingUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Customers: [],
    };
  }


  componentDidMount() {
    AdminUtil.viewPendingCustomers()
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        this.setState({ Customers: data });
      }, (error) => {
        alert(error);
      });
  }

  viewConfimationDetails(props) {
    const content = <AdminShowConfimationDetails image={props} />;

    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Image",
        },
        fadeIn: true,
        fadeInSpeed: 500,
        onClosed: this.clearPopup,
      },
    });
  }

  approve_rejectFunction(props, statesprops) {
    toast.configure()
    const user = {
      userId: props,
      userStatus: statesprops,
    };
    AdminUtil.approveRejctConfirmationDetails(user)
      .then((response) => response.data)
      .then(
        (data) => {
          if (data !== null) {
            toast.info(data, {
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
            // alert(data);
            this.setState({
              Customers: this.state.Customers.filter((User) => User.userId !== props),
            });
          }
        },
        (error) => {
          toast.info(error, {
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
          // alert(error);
        }
      );


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
              <h2 class="text-center">MANAGE PENDING USERS</h2>
            </div>
          </div>
          <div className="content">
            <main>
              <PopupboxContainer></PopupboxContainer>
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
                    {/* <th>View Statments</th> */}
                    <th>Confirm/Reject</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.Customers.map((Customers) => (
                    <tr class="text-center" key={Customers.userId}>
                      <td>{Customers.userId}</td>
                      <td>{Customers.username}</td>
                      <td>{Customers.nic}</td>
                      <td>{Customers.email}</td>
                      <td>{Customers.age}</td>
                      <td>{Customers.userStatus}</td>
                      <td>{Customers.mobile}</td>
                      {/* <td>
                        <center><Button variant="danger" size="sm"  onClick={this.viewConfimationDetails.bind(this,Customers.statement)}>View</Button></center>
                        </td> */}
                      <td>

                        <Button variant="warning" size="sm" onClick={this.approve_rejectFunction.bind(this, Customers.userId, "APPROVED")}  >Approve</Button>  <Button variant="danger" size="sm" onClick={this.approve_rejectFunction.bind(this, Customers.userId, "REJECTED")} > Reject</Button>

                      </td>
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