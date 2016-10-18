export let rules = {
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
      const [maxLength, minLength] = [10, 5];
      let password = fieldForValidation.value;
      let passwordLength = password.length;
      if (passwordLength === 0 || passwordLength < minLength || passwordLength > maxLength) {
        return false;
      } else {
        return true;
      }
    }
  },
  email: {
    type: 'required',
    message: 'This field is required. Email',
    validate: function (fieldForValidation) {
      let email = fieldForValidation.value;
      var emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailFormat.test(email)) {
        return false;
      } else {
        return true;
      }
    }
  }
};

// function usernameValidation (fieldForValidation) {
//   let username = fieldForValidation.value;
//   const usernameFormat = /^\w+$/ig;
//   if (username.match(usernameFormat)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// function passwordValidation (fieldForValidation) {
//   const [maxLength, minLength] = [10, 5];
//   let password = fieldForValidation.value;
//   let passwordLength = password.length;
//   if (passwordLength === 0 || passwordLength < minLength || passwordLength > maxLength) {
//     return false;
//   } else {
//     return true;
//   }
// }
// function emailValidation (fieldForValidation) {
//   let email = fieldForValidation.value;
//   var emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (!emailFormat.test(email)) {
//     return false;
//   } else {
//     return true;
//   }
// }
//
// function Rules (fields, arrayOfRulesType, arrayOfmessage, arrayOfValidateFunction) {
//   let self = this;
//   for (var i=0; i<fields.length; i++) {
//     this[`${fields[i]}`] = new Object();
//     for (let rule of arrayOfRulesType) {
//       this[`${fields[i]}`].type = rule;
//     }
//     for (let message of arrayOfmessage) {
//       this[`${fields[i]}`].message = message;
//     }
//     for (let validateFunction of arrayOfValidateFunction) {
//       this[`${fields[i]}`].validate = validateFunction;
//     }
//   }
// }
//
//
//
// let rules = new Rules(
//   ['username', 'password', 'email'],
//   ['required'],
//   ['This field is required. Username', 'This field is required. Password', 'This field is required. Email'],
//   [usernameValidation, passwordValidation, emailValidation]
// );
// console.log(rules);
// export { rules };
