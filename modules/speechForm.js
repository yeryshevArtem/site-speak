import { preloadAudio } from './preload.js';
import { Sounds } from './classes/Sounds.js';
import { Form } from './classes/Form.js';
import { playInvalidField } from './playInvalidField.js';

function speechForm(formSelector, validationResult, rules) {

  // Preloading audio for each rule.

  let soundsList = new Sounds(validationResult, rules).getList();

  // soundsList is array of urls for audio files

  preloadAudio(soundsList);

  if (validationResult) {
    playInvalidField(validationResult);

  } else if (rules) {

    // Getting form element and attaching to them listener.

    let form = new Form(formSelector);

    form.formElement.addEventListener('submit', function (event) {
      form.checkForm(rules).then((resultOfValidation) => {

        if (resultOfValidation !== -1) {

          /* Validation is failed. Result of validation is the index of invalid field,
           that falls into function 'playInvalidField' as input param. */

          event.preventDefault();
          playInvalidField(resultOfValidation);

          /* Sending 'post' request, that tells about fail finished order and gives
          information about field, where detected error. */

        } else {

          // Validation is success

          alert("All fields are valid!");

          /* Sending 'post' request, that tells about success finished order and submitting form. */

        }
      })

    }, false);
  }
}

export { speechForm };
