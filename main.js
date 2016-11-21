'use strict';
import { speechForm } from './modules/speechForm.js';
import { Rules } from './modules/classes/Rules.js';
import { validateFunctions } from './modules/validateFunctions.js';

window.addEventListener('load', callback, false);

function callback() {
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
  speechForm("#myForm", rules);
}
