class Headers {

  getHeader(){
    const token = localStorage.getItem("jwtToken");
    if (token!==null) {
      return { Authorization: "Bearer " + token};
    } else {
      return {};
    }
  }

  getHeaderContentType(){
      return{"content-type": "application/json"}
  }

  getHeaderAll(){
    const token = localStorage.getItem("jwtToken");
    if (token!==null) {
      return { Authorization: "Bearer " + token, "content-type": "multipart/form-data"};
    } else {
      return {};
    }
}

  
}

export default new Headers();
