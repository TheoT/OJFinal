exports.sendPos = function(req){
	req.socket.broadcast.emit('talkback',{scroll:req.data.scroll, page:req.data.page})
	console.log(req.data)
}