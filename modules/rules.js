let rules = (function () {
  return {
    username: {
      type: 'required',
      message: 'This field is required. Username',
      validate: function (fieldForValidation) {
        let username = fieldForValidation.value;
        const usernameFormat = /^\w+$/ig;
        if (username.match(usernameFormat)) {
          return true;
        } else {
          return false;
        }
      }
    },
    password: {
      type: 'required',
      message: 'This field is required. Password',
      validate: function (fieldForValidation) {
        const maxLength = 10;
        const minLength = 5;
        let password = fieldForValidation.value;
        let passwordLength = password.length;
        if (passwordLength === 0 || passwordLength < minLength || passwordLength > maxLength) {
          return false;
        } else {
          return true;
        }
      }
    }
  };
})();
