var React = require('react');
var ReactPropTypes = React.PropTypes;
var Actions = require('../Actions');

var DeleteButton = React.createClass({


  render: function() {
    return (
      <div className="component__naviItem component__naviItem--clear" onClick={this._onDelete}><span>Delete</span></div>
    );
  },


  _onDelete: function () {
    Actions.deleteList();
  }


});

module.exports = DeleteButton;