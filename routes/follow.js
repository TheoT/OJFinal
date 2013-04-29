exports.follow = function (req) {
  req.socket.broadcast.emit('notifySock', { type: req.body.type });
};