var SERVER_HOST='localhost';
var SERVER_PORT='3000'; 
var socket = io.connect(SERVER_HOST,{port:SERVER_PORT})
var s=0;
$(window).scroll(function () {
	s = $('body').scrollTop();
	console.log(s);
	socket.emit('scrollSock',{scroll: s})
});

$(function(){
	socket.emit('scrollSock',{scroll: '0'});
})