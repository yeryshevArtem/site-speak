import "babel-polyfill";

function* entries (obj) {
  for (let prop of Object.keys(obj)) {
    yield obj[prop];
  }
}
export { entries };
