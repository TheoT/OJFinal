var socket = io.connect()
var pos;
$("#followFrame").ready(function(){
	socket.on('talkback',function(data){
		pos=data.scroll
		$("#followFrame").contents().scrollTop(data.scroll);
		console.log(data.page)
	})

})

function sync(){
	$("#followFrame").contents().scrollTop(pos);
}		