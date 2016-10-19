function FieldsForValidation (formSelector) {
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
FieldsForValidation.prototype.checkFields = function (arrayOfFields, rules) {
  let resultsOfValidation = [];

  // Looping through arrayOfFields and validate each field. Result of validation saving in resultsOfValidation.

  for (let field of arrayOfFields) {
    resultsOfValidation.push(rules[field.getAttribute('data-speak')].validate(field));
  }
  return resultsOfValidation;
};

export { FieldsForValidation };
