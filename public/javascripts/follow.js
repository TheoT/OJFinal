var socket = io.connect()
var pos;
$(function(){
	socket.on('scrollSock',function(data){
		pos=data.scroll
		$("#fakeFrame").scrollTop(data.scroll);
		$("#followFrame").css("overflow","hidden");
		console.log(data)
		if($("#followFrame").height() != data.height){
			$("#followFrame").height(data.height+"px")
			console.log("doc height: "+data.height)
		}
	});
	socket.on('pageSock',function(data){
		$("#followFrame").attr('src',data.page);
	});
  socket.on('pirateSock', function (data) {
    $("#textpad").text(data.text);
  });
});

function sync(){
	$("#fakeFrame").scrollTop(100);
}		