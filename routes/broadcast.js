exports.sendPos = function(req){
	req.socket.broadcast.emit('scrollSock',{scroll:req.data.scroll, height:req.data.height})
}

exports.sendPage=function(req){
	req.socket.broadcast.emit('pageSock',{page:req.data.page})
}

exports.sendText = function (req) {
  req.socket.broadcast.emit('pirateSock', {text: req.data.text});
}

exports.sendNot = function (req) {
  req.socket.broadcast.emit('notifySock', { type: req.data.type });
};