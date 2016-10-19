import { FieldsForValidation } from './FieldsForValidation.js';
import { entries } from './entries.js';
import { rules } from './Rules.js';
import { preloadAudio } from './preload.js';
import { Sounds } from './Sounds.js';

function Form (selector) {
  this.selector = selector;
  this.formElement = document.querySelector(selector);
}
Form.prototype.checkForm = function (event) {
  let resultsOfValidation = [];

  function isValid (element, index, array) {
    return element === true;
  }

  let fieldsForValidation = new FieldsForValidation(this.selector);

  resultsOfValidation = fieldsForValidation.checkFields(fieldsForValidation.fields, rules);

  if (resultsOfValidation.every(isValid)) {
    alert('ok!');

    // Success! Send post request to server.

  } else {
    event.preventDefault();

    // Finding invalid field and playing for them corresponding audio element.

    for (let [indexOfInvalid, valueOfInvalid] of resultsOfValidation.entries()) {
      if (!valueOfInvalid) {
        preloadAudio.list[indexOfInvalid].play(); //promise there
        break;
      }
    }
  }
}

export { Form };
