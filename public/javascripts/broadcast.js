var socket = io.connect()
$(function(){
	socket.emit('talkback',{scroll: '0'})
})

$(window).scroll(function () {
	s = $('body').scrollTop();
	socket.emit('talkback',{scroll: s})
});