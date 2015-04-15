var keyMirror = require('keymirror');
// keyMirror({key:null})ってやると{key:key}ってなる。使わなくてもOK

module.exports = keyMirror({
  LOAD_COMPLETE: null,
  DELETE_LIST: null
});