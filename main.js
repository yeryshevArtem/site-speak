window.addEventListener('load', callback, false);
'use strict';
function callback () {

  let preload = new Promise (function (resolve, reject) {
    resolve(preloadAudio([sounds.username_required,
      sounds.password_required,
    ]));
  });
  
  preload.then(function () {
    let form = document.getElementById('myForm');
    form.addEventListener('submit', function (event) {
      let resultsOfValidation = [];
      for (let field of entries(fieldsForValidation)) {
        switch (field.getAttribute('data-speak')) {
          case 'username':
            resultsOfValidation.push(rules.username.validate(field));
            break;
          case 'password':
            resultsOfValidation.push(rules.password.validate(field));
            break;
        }
      }
      function isValid (element, index, array) {
        return element === true;
      }
      if (resultsOfValidation.every(isValid)) {
        alert('ok!');
        // send post request to server
      } else {
        event.preventDefault();
        for (let [indexOfInvalid, valueOfInvalid] of resultsOfValidation.entries()) {
          if (!valueOfInvalid) {
            preloadAudio.list[indexOfInvalid].play();
            break;
          }
        }
      }
    }, false);
  }).catch(function (error) {
    alert(error);
  });
};
