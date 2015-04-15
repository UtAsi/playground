var React = require('react');
var ReactPropTypes = React.PropTypes;
var Actions = require('../Actions');

var RequestButton = React.createClass({


  propTypes: {
   label: ReactPropTypes.string.isRequired
  },


  render: function() {
    // ここもっと良い方法があるはず・・・。
    var cn = this.props.current === this.props.id ? 'component__naviItem is-active' : 'component__naviItem';
    return (
      <div className={cn} onClick={this._onRequest}><span>{this.props.label}</span></div>
    );
  },


  _onRequest: function () {
    Actions.apiRequest(this.props.id);
  }


});

module.exports = RequestButton;