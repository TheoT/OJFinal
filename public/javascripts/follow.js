var socket = io.connect()
var pos;
var src;
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
		src=data.page;
		$("#followFrame").attr('src',data.page);
	});

	socket.on('pirateSock', function (data) {
		$("#textpad").text(data.text);
	});
});

function sync(){
	if(("#followFrame").attr('src')!=src && src!=undefined){
		$("#followFrame").attr('src',src);
	}
	$("#fakeFrame").scrollTop(pos);
}		

$(".notify").on('click', function () {
	$.post("/notify", { type: $(this).attr('id') });
});
