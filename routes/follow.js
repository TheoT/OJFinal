exports.sendNot = function (req) {
  req.socket.broadcast.emit('notifySock', { type: req.data.type });
};

exports.notify = function (req, res) {
	console.log('sending notification', req.body)
	socket.emit('notifySock', {type: req.body.type })
};