import { entries } from './entries.js';

function Rules (fieldsObj) {
  for (let field in fieldsObj) {
    this[`${field}`] = fieldsObj[field];
  }
}

function usernameValidation (fieldForValidation) {
  let username = fieldForValidation.value;
  const usernameFormat = /^\w+$/ig;
  if (username.match(usernameFormat)) {
    return true;
  } else {
    return false;
  }
}
function passwordValidation (fieldForValidation) {
  const [maxLength, minLength] = [10, 5];
  let password = fieldForValidation.value;
  let passwordLength = password.length;
  if (passwordLength === 0 || passwordLength < minLength || passwordLength > maxLength) {
    return false;
  } else {
    return true;
  }
}
function emailValidation (fieldForValidation) {
  let email = fieldForValidation.value;
  var emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailFormat.test(email)) {
    return false;
  } else {
    return true;
  }
}

let rules = new Rules(
  {
    username: {
      type: 'required',
      message: 'This field is required. Username',
      validate: usernameValidation
    },
    password: {
      type: 'required',
      message: 'This field is required. Password',
      validate: passwordValidation
    },
    email: {
      type: 'required',
      message: 'This field is required. Email',
      validate: emailValidation
    }
  }
);

export { rules };
