var RequestButton = require('./RequestButton.react');
var DeleteButton = require('./DeleteButton.react');
var React = require('react');
var ReactPropTypes = React.PropTypes;

var Navi = React.createClass({


  render: function() {
    var current = this.props.appData._current;
    return (
      <div className="component__navi">
        <RequestButton current={current} label="Sample1" id='1' />
        <RequestButton current={current} label="Sample2" id='2' />
        <RequestButton current={current} label="Sample3" id='3' />
        <DeleteButton />
      </div>
    );
  }


});

module.exports = Navi;