let preloadAudio = (function () {
  return function (array) {
    if (!preloadAudio.list) {
      preloadAudio.list = [];
    }
    let list = preloadAudio.list;
    for (let urlForAudio of array) {
      let audio = new Audio();
      audio.onload = function () {
        let index = list.indexOf(this);
        if (index !== -1) {
          list.splice(index, 1);
        }
      };
      list.push(audio);
      audio.src = urlForAudio;
    }
  }
})();
