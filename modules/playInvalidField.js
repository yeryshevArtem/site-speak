import { preloadAudio } from './preload.js';

function playInvalidField (indexOfInvalid) {
  preloadAudio.list[indexOfInvalid].play();
}

export { playInvalidField };
