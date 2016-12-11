site-speak
===========

Example Front-End form validation, written on ECMAScript 2015

Front-end: Vanilla JS

Try it out
==========
* Clone the project
* Select needed fields of form and add to them 'data-speak' attribute
```
<input type="text" class="form-control" placeholder="Username" data-speak="username">
```
* In your main .js file, create rules object with all name of fields what
you want validation. In every property (field of form) you must create
type, message properties and validate method.
```
let rules = new Rules(
  {
    username: {
      type: 'required',
      message: 'This field is required. Username',
      validate: validateFunctions.usernameValidation
    },
    password: {
      type: 'required',
      message: 'This field is required. Password',
      validate: validateFunctions.passwordValidation
    },
    email: {
      type: 'required',
      message: 'This field is required. Email',
      validate: validateFunctions.emailValidation
    }
  }
);
```
* Run speechForm() method and send to them the form element what
you want to validate.
```
speechForm("#myForm", null, rules);
```

But why?
========

This plugin can serve as a helper for people with disabilities.
