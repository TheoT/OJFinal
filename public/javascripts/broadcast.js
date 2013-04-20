var socket = io.connect()
$(function(){
	socket.emit('talkback',{msg: 'is this a websocket?'})
})

$(window).scroll(function () {
	s = $('body').scrollTop();
	socket.emit('talkback',{msg: s})
});