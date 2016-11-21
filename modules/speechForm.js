import { preloadAudio } from './preload.js';
import { Sounds } from './classes/Sounds.js';
import { Form } from './classes/Form.js';

function speechForm(formSelector, rules) {

  // Preloading audio for each rule.

  let soundsList = new Sounds(rules).getList();
  preloadAudio(soundsList);

  // Getting form element and attaching to them listener.

  let form = new Form(formSelector);

  form.formElement.addEventListener('submit', function (event) {
    form.checkForm(event, rules);
  }, false);
}

export { speechForm };
