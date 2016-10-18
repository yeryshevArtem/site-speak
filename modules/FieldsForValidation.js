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

export { FieldsForValidation };
