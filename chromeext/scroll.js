// var SERVER_HOST='localhost';
var SERVER_PORT='3000'; 
var SERVER_HOST='ojfinal.herokuapp.com'

var socket = io.connect(SERVER_HOST)//,{port:SERVER_PORT})
var s=0;
var docHeight=100;
var room;

$(function(){
	docHeight=$(document).height;
	s = $('body').scrollTop();
	chrome.extension.sendRequest({method: "getStatus"}, function(response) {
  		if (response.status == 'true') {
			socket.emit('scrollSock',{scroll: s, height:docHeight,roomName:response.room});
		}
	});
})

$(window).scroll(function () {
	s = $('body').scrollTop();
	docHeight=$(document).height();

	chrome.extension.sendRequest({method: "getStatus"}, function(response) {
  		if (response.status == 'true') {
  			room=response.room;
			socket.emit('scrollSock',{scroll: s, height:docHeight,roomName:response.room})
		}
	});


});
