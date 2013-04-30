var socket = io.connect()
var pos;
var src;
var syncing=true;
$(function(){
	socket.on('scrollSock',function(data){
		pos=data.scroll
		if(syncing){
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
	syncing=true;
	if(("#followFrame").attr('src')!=src && src!=undefined){
		$("#followFrame").attr('src',src);
	}
	$("#fakeFrame").scrollTop(pos);
}		

$("#fakeFrame").scroll(function () {
	syncing=false;
}
