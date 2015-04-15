var React = require('react');
var ReactPropTypes = React.PropTypes;
var Store = require('../Store');
var Topic = require('./Topic.react');


var ListSection = React.createClass({


  propTypes: {
   appData: ReactPropTypes.object.isRequired
  },


  render: function () {
    console.log('List.react render');

    var allTopics = this.props.appData._topics;
    var topics = [];
    for (var i = 0, l = allTopics.length; i < l; i++) {
      topics.push(<Topic data={allTopics[i]} />);
    }

    return (
      <div className="component__content">
        <ul className="component__list">
          {topics}
        </ul>
      </div>
    );
  }


});

module.exports = ListSection;