exports.sendPos = function(req){
	req.socket.broadcast.emit('talkback',{scroll:req.data.scroll})
}