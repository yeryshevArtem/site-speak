import { FieldsForValidation } from './FieldsForValidation.js';
import { entries } from '../entries.js';
import { Sounds } from './Sounds.js';
import { playInvalidField } from '../playInvalidField';

class Form {
  constructor(selector) {
    this.selector = selector;
    this.formElement = document.querySelector(selector);
  }
  checkForm(event, rules) {
    let fieldsForValidation = new FieldsForValidation(this.selector);
    fieldsForValidation.checkFields.apply(null, [fieldsForValidation.fields, event, rules]).then(function (index) {
      if (index !== -1) {
        event.preventDefault();
        playInvalidField(index);

        /* Sending 'post' request, that tells about fail finished order and gives
        information about field, where detected error. */

      } else {
        alert("Ok!");

        /* Sending 'post' request, that tells about success finished order and submitting form. */

      }
    }).catch(function (error) {
      alert(error);
    });
  }
}

export { Form };
