class FieldsForValidation {
  constructor(formSelector) {
    let fields = [];
    let form = document.querySelector(formSelector);
    let allInputs = document.querySelectorAll("input");
    for (let input of allInputs) {
      if (form.contains(input)) {
        if (input.hasAttribute("data-speak")) {
          fields.push(input);
        }
      }
    }
    this.fields = fields;
  }
  checkFields(...arg) {
    let [arrayOfFields, rules] = [arg[0], arg[1]];

    return new Promise((resolve, reject) => {

      // Looping through arrayOfFields and validate each field.

      for (let [indexOfField, valueOfField] of arrayOfFields.entries()) {
        if (!rules[valueOfField.getAttribute('data-speak')].validate(valueOfField)) {
          resolve(indexOfField);
        }
      }

      // If all fields are valid, we resolving promise with -1 arg.

      resolve(-1);
    });
  }
}

export { FieldsForValidation };
