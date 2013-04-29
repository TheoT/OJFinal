var SERVER_HOST='localhost';
var SERVER_PORT='3000'; 
var socket = io.connect(SERVER_HOST,{port:SERVER_PORT})
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

//the following code captures any changes made to the textarea. We just need to have the socket emit the text
$('#pad').bind('input propertychange', function() {
  console.log('textarea val: ', this.value);
  // $("#yourBtnID").hide();

  // if(this.value.length){
  //   $("#yourBtnID").show();
  // }
  socket.emit('pirateSock', { text: '' });

  if(this.value.length) {
    socket.emit('pirateSock',{ text: this.value });
  }
});