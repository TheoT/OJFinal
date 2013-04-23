var socket = io.connect()
$(function(){
	socket.emit('talkback',{scroll: 'is this a websocket?'})
})

$(window).scroll(function () {
	s = $('body').scrollTop();
	socket.emit('talkback',{scroll: s})
});