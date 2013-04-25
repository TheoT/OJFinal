exports.sendPos = function(req){
	req.socket.broadcast.emit('scrollSock',{scroll:req.data.scroll})
	console.log(req.data.scroll)
}

exports.sendPage=function(req){
	req.socket.broadcast.emit('pageSock',{page:req.data.page})
	console.log(req.data.page)
}