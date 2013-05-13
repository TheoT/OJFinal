var socket = io.connect('http://localhost:3000');
var pos;
var src;
var syncing = true;

$(function(){

	var roomName = window.location.pathname.split( '/' )[2];
	socket.emit('changeRoom',{roomName: roomName});
	// console.log(socket)
	// socket.emit('changeRoom',{})

	socket.on('scrollSock',function(data){
		pos=data.scroll;
		if (syncing) {
			$("#fakeFrame").scrollTop(data.scroll);
			$("#followFrame").css("overflow","hidden");
			console.log(data)
			if($("#followFrame").height() != data.height){
				$("#followFrame").height(data.height+"px")
				console.log("doc height: "+data.height)
			}
		}
	});

	socket.on('pageSock',function(data){
		src=data.page;
		if(syncing){
			$("#followFrame").attr('src',data.page);
		}
	});

	socket.on('pirateSock', function (data) {
		$("#textpad").text(data.text);
	});
	
	//post to server on "slow down", "perfect pace", or "speed up" button press
	$(".notify").on('click', function () {
		socket.emit('notifySock', { type: $(this).attr('id') });
	});

});

function sync(){
	syncing = !syncing;
	$("#sync").toggleClass("active");
	if( $("#followFrame").attr('src')!=src && src!=undefined){
		$("#followFrame").attr('src',src);
	}
	$("#fakeFrame").scrollTop(pos);
}		
