export function isValidUsername(username){
    const usernameRegexp = /.{4}/g;
    return usernameRegexp.test(username);
}

export function isValidPassword(password){
    const passwordRegexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g;
    return passwordRegexp.test(password);
}

export function isValidEmail(email){
    const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return emailRegexp.test(email);
}

export function isValidMobileNumber(mobileNumber){
    const mobileNumberRegexp = /^[0-9]*$/g;
    return mobileNumberRegexp.test(mobileNumber);
}


// phone number => /^\(?([0-9]{10})\)?$/g
//for numbers /^[0-9]*$/g