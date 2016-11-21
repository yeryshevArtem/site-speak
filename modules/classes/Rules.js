import { entries } from '../entries.js';

class Rules {
  constructor(fieldsObj) {
    for (let field in fieldsObj) {
      this[`${field}`] = fieldsObj[field];
    }
  }
}

export { Rules };
