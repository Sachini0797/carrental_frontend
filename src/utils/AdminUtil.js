import axios from 'axios';
import Header from './Headers';

const BaseURL = 'http://localhost:8080/sachini/';
const MappedURL = 'api/admin/';

class AdminUtil {
  addNewVehicle(vehicle) {
    return axios.post(BaseURL + MappedURL + 'add_vehicle', vehicle, {
      headers: Header.getHeaderAll(),
    });
  }



  addEquipments(equipment) {
    return axios.post(BaseURL + MappedURL + 'add_equipment', equipment, {
      headers: Header.getHeaderAll(),
    });
  }

  viewVehicles() {
    return axios.get(BaseURL + MappedURL + 'list_vehicle', {
      headers: Header.getHeader(),
    });
  }

  veiwCustomers() {
    return axios.get(BaseURL + MappedURL + 'list_user', {
      headers: Header.getHeader(),
    });
  }
  viewPendingCustomers() {
    return axios.get(BaseURL + MappedURL + 'view_pending_users', {
      headers: Header.getHeader(),
    });
  }

  viewBookings() {
    return axios.get(BaseURL + MappedURL + 'list_reservation', {
      headers: Header.getHeader(),
    });
  }

  viewEquipments() {
    return axios.get(BaseURL + MappedURL + 'list_equipment', {
      headers: Header.getHeader(),
    });
  }

  getWebScrapingVehicles() {
    return axios.get(BaseURL + 'web_scrape', {
      headers: Header.getHeaderAll(),
    });
  }

  deleteBooking(props) {
    return axios.post(BaseURL + MappedURL + 'delete_reservation', props, {
      headers: Header.getHeader(),
    });
  }

  // 1st code
  deleteVehicle(props) {
    return axios.post(BaseURL + MappedURL + 'delete_vehicle', props, {
      headers: Header.getHeader(),
    });
  }

  deleteEquipment(props) {
    return axios.post(BaseURL + MappedURL + 'delete_equipment', props, {
      headers: Header.getHeader(),
    });
  }

  deleteUser(props) {
    return axios.post(BaseURL + MappedURL + 'delete_user', props, {
      headers: Header.getHeader(),
    });
  }

  updateVehicle(props) {
    return axios.post(BaseURL + MappedURL + 'update', props, {
      headers: Header.getHeader(),
    });
  }

  updateEquipment(props) {
    return axios.post(BaseURL + MappedURL + 'update_Equipment', props, {
      headers: Header.getHeader(),
    });
  }

  completeBooking(props) {
    return axios.post(BaseURL + MappedURL + 'complete_reservation', props, {
      headers: Header.getHeader(),
    });
  }

  approveRejctConfirmationDetails(props) {
    return axios.post(
      BaseURL + MappedURL + 'approve_reject_confirmationDetails',
      props,
      {
        headers: Header.getHeader(),
      }
    );
  }

  
  viewInquiries() {
    return axios.get(BaseURL + MappedURL + 'view_all_inquiries', {
      headers: Header.getHeader(),
    });
  }


}

export default new AdminUtil();
