var Navi = require('./Navi.react');
var ListSection = require('./ListSection.react');
var React = require('react');
var Store = require('../Store');

function getAppState() {
  return {
    appData: Store.getAll()
  };
}

var App = React.createClass({


  getInitialState: function () {
    console.log('App.react getInitialState');
    return getAppState();
  },


  componentDidMount: function () {
    console.log('App.react componentDidMount');
    Store.addChangeListener(this._onLoadComplete);
    Store.addDeleteListener(this._onDelete);
  },


  render: function () {
    console.log('App.react render');
    return (
      <div>
        <Navi appData={this.state.appData} />
        <ListSection appData={this.state.appData} />
      </div>
    );
  },


  _onLoadComplete: function () {
    console.log('App.react _onLoadComplete');
    this.setState(getAppState());
  },


  _onDelete: function () {
    console.log('App.react _onDelete');
    this.setState(getAppState());
  }


});

module.exports = App;