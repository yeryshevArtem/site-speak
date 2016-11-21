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
      } else {
        alert("Ok!");

        // Success! Submit form!
      }
    }).catch(function (error) {
      alert(error);
    });
  }
}

export { Form };
