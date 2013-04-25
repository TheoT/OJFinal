var socket = io.connect()
var pos;
$("#followFrame").ready(function(){
	socket.on('scrollSock',function(data){
		pos=data.scroll
		$("#followFrame").contents().scrollTop(data.scroll);
		console.log(data.page)
	});
	socket.on('pageSock',function(data){
		$("#followFrame").attr('src',data.page)
	})

})

function sync(){
	$("#followFrame").contents().scrollTop(pos);
}		