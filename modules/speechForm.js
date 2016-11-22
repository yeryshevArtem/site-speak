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
      form.checkForm(event, rules);
    }, false);
  }
}

export { speechForm };
