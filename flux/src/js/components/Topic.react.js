var React = require('react');
var ReactPropTypes = React.PropTypes;


var Topic = React.createClass({


  propTypes: {
   data: ReactPropTypes.object.isRequired
  },


  render: function () {
    console.log('Topic.react render');
    var name = this.props.data.name;
    return (
      <li className="component__listItem">{name}</li>
    );
  }


});

module.exports = Topic;