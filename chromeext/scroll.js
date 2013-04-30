var SERVER_HOST='ojfinal.herokuapp.com';
// var SERVER_PORT='3000'; 
var socket = io.connect(SERVER_HOST); //,{port:SERVER_PORT}
var s=0;
var docHeight=100;
$(function(){
	docHeight=$(document).height;
	s = $('body').scrollTop();
	socket.emit('scrollSock',{scroll: s, height:docHeight});
})

$(window).scroll(function () {
	s = $('body').scrollTop();
	docHeight=$(document).height();
	socket.emit('scrollSock',{scroll: s, height:docHeight})
	console.log("doc height: "+docHeight)

});
