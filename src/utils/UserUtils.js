import axios from 'axios';
import Header from './Headers';

const BaseURL = 'http://localhost:8080/sachini/';
const MappedURL = 'api/user/';

class UserUtils {
  registerUser(user) {
    return axios.post(BaseURL + MappedURL + 'user_registration', user);
  }

  viewAllVehicles() {
    return axios.get(BaseURL + MappedURL + 'view_all_vehicle');
  }

  viewAllEquipment() {
    return axios.get(BaseURL + MappedURL + 'view_all_equipment');
  }

  // getWebScrapingVehicles() {
  //   return axios.get(BaseURL + 'api/admin/' + 'web_scrape');
  // }

  getWebScrapingVehicles() {
    return axios.get(BaseURL + 'web_scrape', {
      headers: Header.getHeader(),
    });
  }

  AuthenticateUserWithLogin(username, password) {
    return axios.post(BaseURL + MappedURL + 'user_login', {
      headers: Header.getHeaderContentType(),
      username: username,
      password: password,
    });
  }

  viewMybookings(props) {
    return axios.post(
      BaseURL + 'api/reservation/list_my_reservation',
      props,
      {
        headers: Header.getHeader(),
      }
    );
  }

  BookVehicle(props) {
    return axios.post(BaseURL + 'api/reservation/add_reservation', props, {
      headers: Header.getHeader(),
    });
  }

  cancleBooking(props) {
    return axios.post(
      BaseURL + 'api/reservation/cancel_reservation',
      props,
      {
        headers: Header.getHeader(),
      }
    );
  }

  getAvailbleEquipments(props) {
    return axios.post(
      BaseURL + 'api/reservation/get_available_equipment',
      props,
      {
        headers: Header.getHeader(),
      }
    );
  }

  getAvailableVehicles(props) {
    return axios.post(
      BaseURL + 'api/reservation/get_available_vehicle',
      props,
      {
        headers: Header.getHeader(),
      }
    );
  }

  checkUserStatus(props) {
    return axios.post(BaseURL + MappedURL + 'check_user_status', props, {
      headers: Header.getHeader(),
    });
  }

  submitConfimationDetails(props) {
    return axios.post(BaseURL + MappedURL + 'confirmation_details', props, {
      headers: Header.getHeader(),
    });
  }

  viewProfile(props) {
    return axios.post(BaseURL + MappedURL + 'my_profile', props, {
      headers: Header.getHeader(),
    });
  }

  addInquiry(InquiryDto) {
    return axios.post(BaseURL + 'add_inquiry', InquiryDto, {
      headers: Header.getHeader(),
    });
  }

}
export default new UserUtils();
