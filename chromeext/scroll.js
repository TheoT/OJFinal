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