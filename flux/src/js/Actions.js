var Dispatcher = require('./Dispatcher');
var Constants = require('./Constants');
var Api = require('./DummyApi');

var Actions = {

  deleteList: function () {
    Dispatcher.dispatch({
      actionType: Constants.DELETE_LIST
    });
  },


  apiRequest: function (n) {
    Dispatcher.dispatch({
      actionType: Constants.LOAD_COMPLETE,
      data: Api.get(n),
      current: n
    });
  }

};

module.exports = Actions;