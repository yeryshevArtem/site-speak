let sounds = (function () {
  const urlForErrorAudio = 'http://172.16.208.7:8988/';
  return {
    username_required: `${urlForErrorAudio}?text=${window.encodeURIComponent(rules.username.message)}`,
    password_required: `${urlForErrorAudio}?text=${window.encodeURIComponent(rules.password.message)}`
  }
})(rules);
