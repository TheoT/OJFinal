exports.sendPos = function(req){
	req.socket.broadcast.emit('scrollSock',{scroll:req.data.scroll, height:req.data.height})
	console.log("docHeight"+req.data.height)
}

exports.sendPage=function(req){
	req.socket.broadcast.emit('pageSock',{page:req.data.page})
	console.log(req.data.page)
}