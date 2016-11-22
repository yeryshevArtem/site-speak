import { entries } from '../entries.js';

const urlForErrorAudio = 'https://something-speach.herokuapp.com';

class Sounds {
  constructor(validationResult, rulesList) {
    if (rulesList) {

      /* Looping through all props of 'rulesList' object ('username', 'email', etc.)
      and each key of props from 'rulesList' object set to  instance of 'Sounds' props. */

      for (let rule in rulesList) {
        this[`${rule}_required`] = `${urlForErrorAudio}?text=${window.encodeURIComponent(rulesList[rule].message)}`;
      }
    } else {
      validationResult.forEach((errorObject) => {
        this[`${errorObject.name}`] = `${urlForErrorAudio}?text=${window.encodeURIComponent(errorObject.message)}`;
      });
    }
  }
  getList() {
    let soundsList = [];
    for (let sound of entries(this)) {
      soundsList.push(sound);
    }
    return soundsList;
  }
}

export { Sounds };
