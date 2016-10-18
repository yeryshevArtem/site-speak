import { entries } from './entries.js';

const urlForErrorAudio = 'http://172.16.208.7:8988/';

function Sounds (rulesList) {

  // Looping through all props of 'rulesList' object ('username', 'email', etc.) and each keys of props from 'rulesList' object set to 'Sounds' instance props.

  for (let rule in rulesList) {
    this[`${rule}_required`] = `${urlForErrorAudio}?text=${window.encodeURIComponent(rulesList[rule].message)}`;
  }
}
Sounds.prototype.getList = function () {
  let soundsList = [];
  for (let sound of entries(this)) {
    soundsList.push(sound);
  }
  return soundsList;
}

export { Sounds };
