import { FieldsForValidation } from './FieldsForValidation.js';
import { entries } from '../entries.js';
import { Sounds } from './Sounds.js';

class Form {
  constructor(selector) {
    this.selector = selector;
    this.formElement = document.querySelector(selector);
  }
  checkForm(rules) {
    let fieldsForValidation = new FieldsForValidation(this.selector);
    return fieldsForValidation.checkFields.apply(null, [fieldsForValidation.fields, rules]).then((indexOfFailedValidField) => {
      return indexOfFailedValidField;
    }).catch((error) => {
      alert(error);
    });
  }
}

export { Form };
