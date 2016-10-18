import { FieldsForValidation } from './FieldsForValidation.js';
import { entries } from './entries.js';
import { rules } from './Rules.js';
import { preloadAudio } from './preload.js';
import { Sounds } from './Sounds.js';

function speechForm (formSelector) {

  // Preloading all audio.

  let soundsList = new Sounds(rules).getList();
  preloadAudio(soundsList);

  // Getting form element and attaching to them listener.

  let form = document.querySelector(formSelector);

  form.addEventListener('submit', checkingForm, false);

  function checkingForm (event) {
    let resultsOfValidation = [];

    function isValid (element, index, array) {
      return element === true;
    }

    // Looping through object and validate each field. Result of validation saving in resultsOfValidation.

    let fieldsForValidation = new FieldsForValidation(formSelector).fields;

    for (let field of fieldsForValidation) {
      resultsOfValidation.push(rules[field.getAttribute('data-speak')].validate(field));
    }

    if (resultsOfValidation.every(isValid)) {
      alert('ok!');

      // Send post request to server.

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
}

export { speechForm };
