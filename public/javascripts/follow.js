var socket = io.connect()
var pos;
$("#followFrame").ready(function(){
	socket.on('talkback',function(data){
		pos=data.msg
		$("#followFrame").contents().scrollTop(data.msg);
	})

})

function sync(){
	$("#followFrame").contents().scrollTop(pos);
}		