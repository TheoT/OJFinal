exports.sendPos = function(req){
	room=req.data.roomName;
	req.socket.broadcast.to(room).emit('scrollSock',{scroll:req.data.scroll, height:req.data.height});
	console.log(room);
}

exports.sendPage=function(req){
	for(var room in (req.socket.manager.roomClients[req.socket.id])){
		room=room.replace('/','');
		console.log(room);
		// if(room!=''){
		req.socket.broadcast.to(room).emit('pageSock',{page:req.data.page});
		// }
	}
}

exports.sendText = function (req) {
	room=req.data.roomName;
  	req.socket.broadcast.to(room).emit('pirateSock', {text: req.data.text});
}