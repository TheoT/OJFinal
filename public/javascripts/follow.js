var socket = io.connect()
var pos;
$("#followFrame").ready(function(){
	socket.on('scrollSock',function(data){
		pos=data.scroll
		$("#followFrame").contents().scrollTop(data.scroll);
		console.log(data.page)
	});
	socket.on('pageSock',function(data){
		$("#followFrame").attr('src',data.page);
	});
  socket.on('pirateSock', function (data) {
    $("#textpad").text(data.text);
  });
});

function sync(){
	$("#followFrame").contents().scrollTop(pos);
}		