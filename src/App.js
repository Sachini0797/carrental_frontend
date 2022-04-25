import React from 'react';
import './App.css';
import NavigationBar from './Components/Navigationbar';
import Vehicles from './Components/Vehicles';
import Footer from './Components/Footer';
import Bookings from './Components/Bookings';
import Register from './Components/Register';
import Login from './Components/Login';
import HomePage from './Components/HomePage';
import Services from './Components/Services';
// import About from './Components/About';
import Contact from './Components/Contact';
import CustomerConfirmDetails from './Components/CustomerConfirmationDetails';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminHome from './Components/Admin/AdminHome';
import AdminVehicle from './Components/Admin/AdminVehicle';
import AdminAddVehicleForm from './Components/Admin/AdminAddVehicleForm';
import AdminCustomer from './Components/Admin/AdminCustomer';
import AdminBookings from './Components/Admin/AdminBookings';
import AdminEquipments from './Components/Admin/AdminEquipments';
import AdminAddEquipmentsForm from './Components/Admin/AdminAddEquipments';
import AdminCompareRatings from './Components/Admin/AdminCompareRatings';
import AdminPendingUsers from './Components/Admin/AdminPedingUsers';
import About from './Components/Section/About';
import CarListing from './Components/Section/CarListing';
import CustomerCompareRatings from './Components/CustomerCompareRatings';
import Profile from './Components/Profile';
import CheckAvailability from './Components/CheckAvailability';
import AdminViewInquiry from './Components/Admin/AdminViewInquiry';





function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/admin" exact component={AdminHome} />
        <Route path="/adminVehicle" exact component={AdminVehicle} />
        <Route path="/adminCustomer" exact component={AdminCustomer} />
        <Route path="/adminBookings" exact component={AdminBookings} />
        <Route path="/adminCompareRatings" exact component={AdminCompareRatings} />
        <Route path="/adminEquipments" exact component={AdminEquipments} />
        <Route path="/adminPendingUsers" exact component={AdminPendingUsers} />
        <Route path="/admin_add_equipments" exact component={AdminAddEquipmentsForm} />
        <Route path="/admin_add_vehicle" exact component={AdminAddVehicleForm} />
        <Route path="/adminViewInquiries" exact component={AdminViewInquiry} />

        <NavigationBar />
      </Switch>
      <Switch>
        <Route path="/bookings" exact component={Bookings} />
        {/* <Route path="/myDetails" exact component={ViewProfile} /> */}
        <Route path="/details_confirmation" exact component={CustomerConfirmDetails} />
        <Route path="/services" exact component={Services} />
        <Route path="/about" exact component={About} />
        <Route path="/profile" exact component={Profile} />
        {/* <Route path="/adminCompareRatings" exact component={AdminCompareRatings} /> */}
        <Route path="/contact" exact component={Contact} />
        <Route path="/vehicles" exact component={Vehicles} />
        <Route path="/checkAvailability" exact component={CheckAvailability} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/carlisting" exact component={CarListing} />
        <Route path="/customerCompareRatings" exact component={CustomerCompareRatings} />
        
        {/* <Route path="/home" exact component={HomePage} /> */}

      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
