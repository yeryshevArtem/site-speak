import { rules } from './Rules.js';
import { preloadAudio } from './preload.js';
import { Sounds } from './Sounds.js';
import { Form } from './Form.js';

function speechForm (formSelector) {

  // Preloading audio for each rule.

  let soundsList = new Sounds(rules).getList();
  preloadAudio(soundsList);

  // Getting form element and attaching to them listener.

  let form = new Form(formSelector);

  form.formElement.addEventListener('submit', function (event) {
    form.checkForm(event);
  }, false);
}

export { speechForm };
