let validateFunctions = {
  usernameValidation: function (fieldForValidation) {
    let username = fieldForValidation.value;
    const usernameFormat = /^\w+$/ig;
    if (username.match(usernameFormat)) {
      return true;
    } else {
      return false;
    }
  },
  passwordValidation: function (fieldForValidation) {
    const [maxLength, minLength] = [10, 5];
    let password = fieldForValidation.value;
    let passwordLength = password.length;
    if (passwordLength === 0 || passwordLength < minLength || passwordLength > maxLength) {
      return false;
    } else {
      return true;
    }
  },
  emailValidation: function (fieldForValidation) {
    let email = fieldForValidation.value;
    var emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailFormat.test(email)) {
      return false;
    } else {
      return true;
    }
  }
};

export { validateFunctions };
