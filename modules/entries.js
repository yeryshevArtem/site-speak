let entries = (function () {
  return function* (obj) {
      for (let prop of Object.keys(obj)) {
        yield obj[prop];
      }
    }
})();
