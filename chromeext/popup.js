var SERVER_HOST='ojfinal.herokuapp.com';
// var SERVER_PORT='3000'; 
var socket = io.connect(SERVER_HOST); //,{port:SERVER_PORT}

//the following code captures any changes made to the textarea. We just need to have the socket emit the text
$('#pad').bind('input propertychange', function() {
	localStorage["pirateText"]=this.value;
	console.log('textarea val: ', this.value);
	// $("#yourBtnID").hide();

	// if(this.value.length){
	//   $("#yourBtnID").show();
	// }
	// socket.emit('pirateSock', { text: '' });

	if(this.value.length) {
		socket.emit('pirateSock',{ text: this.value });
	}
});

$(function () {
	socket.on('notifySock', function (data) {
		console.log('sData: ', data.type);
		var next = (parseInt($('#' + data.type).text()) + 1);
		$('#' + data.type).text(next);
	});
})

$("body").load(function() {
	$("#pad").val() = localStorage["pirateText"];
})

$('#reset').on('click', function () {
	localStorage['slow'] = 0
	localStorage['perfect'] = 0
	localStorage['speed'] = 0
});