var React = require('react');

var WaitingRoom = React.createClass({

  render: function() {
    return (
      <div className="panel panel-default">
          <embed width="800" height="512" base="http://external.kongregate-games.com/gamez/0021/6804/live/" src="http://external.kongregate-games.com/gamez/0021/6804/live/embeddable_216804.swf" type="application/x-shockwave-flash"></embed>s
          <p>There are no available people right now.</p>
          <p>So please wait and an available person will be connected with you automatically.</p>

      </div>
    )
  }

});

module.exports = WaitingRoom;
