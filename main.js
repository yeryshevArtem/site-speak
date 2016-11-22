'use strict';
import { speechForm } from './modules/speechForm.js';
import { Rules } from './modules/classes/Rules.js';
import { validateFunctions } from './modules/validateFunctions.js';

window.addEventListener('load', siteSpeakVoice, false);

function siteSpeakVoice() {
  let rules = new Rules(
    {
      username: {
        type: 'required',
        message: 'This field is required. Username',
        validate: validateFunctions.usernameValidation
      },
      password: {
        type: 'required',
        message: 'This field is required. Password',
        validate: validateFunctions.passwordValidation
      },
      email: {
        type: 'required',
        message: 'This field is required. Email',
        validate: validateFunctions.emailValidation
      }
    }
  );
  // let resultOfValidation = [
  //   {
  //     id: 1,
  //     name: 'email',
  //     message: 'Incorrect email'
  //   },
  //   {
  //     id: 2,
  //     name: 'password',
  //     message: 'Incorrect password'
  //   },
  //   {
  //     id: 3,
  //     name: 'login',
  //     message: 'Incorrect login'
  //   }
  // ];
  speechForm("#myForm", null, rules);
}
