var Dispatcher = require('./Dispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('./Constants');
var assign = require('object-assign');

var LOAD_COMPLETE_EVENT = 'loadComplete';
var DELETE_EVENT = 'delete';

var storeData = {
  _topics: [],
  _current: null
};


function update(data, current) {
  storeData = {
    _topics: data,
    _current: current
  };
}


function reset() {
  storeData = {
    _topics: [],
    _current: null
  };
}



var Store = assign({}, EventEmitter.prototype, {

  getAll: function () {
    return storeData;
  },
  
  /* 配信 */
  emitLoadComplete: function () {
    this.emit(LOAD_COMPLETE_EVENT);
  },

  emitDelete: function () {
    this.emit(DELETE_EVENT);
  },

  /* リスナー登録 */
  addChangeListener: function (callback) {
    this.on(LOAD_COMPLETE_EVENT, callback);
  },

  addDeleteListener: function (callback) {
    this.on(DELETE_EVENT, callback);
  },

  /* リスナー解除 */
  removeChangeListener: function (callback) {
    this.removeListener(LOAD_COMPLETE_EVENT, callback);
  },

  removeDeleteListener: function (callback) {
    this.removeListener(DELETE_EVENT, callback);
  },

});


Dispatcher.register(function (action) {
  switch (action.actionType) {
  case Constants.LOAD_COMPLETE:
    update(action.data, action.current);
    Store.emitLoadComplete();
    break;

  case Constants.DELETE_LIST:
    reset();
    Store.emitDelete();
    break;
  }
});


module.exports = Store;