var React = require('react');

var ReactPropTypes = React.PropTypes;

var MessageListItem = React.createClass({

  propTypes: {
    message: ReactPropTypes.object
  },

  render: function() {
    var message = this.props.message;
    return (
      <div className="message-list-item">
        <strong className="message-author-name">{message.username}</strong>
        <h3 className="message-text"> {message.text}</h3>
      </div>
    );
  }

});

module.exports = MessageListItem;
