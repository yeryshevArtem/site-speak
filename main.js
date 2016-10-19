'use strict';
import { speechForm } from './modules/speechForm.js';

window.addEventListener('load', callback, false);

function callback() {
  speechForm("#myForm");
}
