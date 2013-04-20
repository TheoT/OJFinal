exports.sendPos = function(req){
	req.socket.broadcast.emit('talkback',{msg:req.data.msg})
	console.log(req.data.msg)
}