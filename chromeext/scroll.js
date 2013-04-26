var SERVER_HOST='localhost';
var SERVER_PORT='3000'; 
var socket = io.connect(SERVER_HOST,{port:SERVER_PORT})
var s=0;
var docHeight=100;
$(window).scroll(function () {
	s = $('body').scrollTop();
	docHeight=$(document).height();
	socket.emit('scrollSock',{scroll: s, height:docHeight})
	console.log("doc height: "+docHeight)
});

$(function(){
	docHeight=$(document).height;
	socket.emit('scrollSock',{scroll: '0', height:docHeight});
})