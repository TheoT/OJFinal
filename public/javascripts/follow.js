var socket = io.connect()
var pos;
socket.on('talkback',function(data){
	pos=data.msg
	$('body').scrollTop(data.msg);
})

function sync(){
	$('body').scrollTop(pos);
}