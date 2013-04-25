
var socket = io.connect()
var s=0;
$(window).scroll(function () {
	s = $('body').scrollTop();
	console.log(s);
	socket.emit('talkback',{scroll: s})
});

$(function(){
	socket.emit('talkback',{scroll: '0'});
})