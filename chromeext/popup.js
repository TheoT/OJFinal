var SERVER_HOST='ojfinal.herokuapp.com';
// var SERVER_PORT='3000'; 
var socket = io.connect(SERVER_HOST); //,{port:SERVER_PORT}

//the following code captures any changes made to the textarea. We just need to have the socket emit the text
$('#pad').bind('input propertychange', function() {
	localStorage["pirateText"]=this.value;
	console.log('textarea val: ', this.value);
	if(this.value.length) {
		socket.emit('pirateSock',{ text: this.value });
	}
});



$(function () {
	socket.on('notifySock', function (data) {
		if (!localStorage[data.type]) {
			localStorage[data.type] = 0;
		}
		else {
			localStorage[data.type] = parseInt(localStorage[data.type]) + 1;
		}
		console.log('sData: ', data.type);
		$('#' + data.type).text(localStorage[data.type]);
	});
})

//grab the text and counters from the local db
$(document).ready(function() {

	$("#clearCounter").click(function () {
		localStorage['slow'] = 0;
		localStorage['perfect'] = 0;
		localStorage['speed'] = 0;
		updateText();
	})

	$("#leadToggle").click(function() {
		this.attr('id').toggleClo
	})

	updateText();
})

function updateText() {
	$("#pad").val(localStorage["pirateText"]);
	$("#slow").text(localStorage["slow"]);
	$("#perfect").text(localStorage["perfect"]);
	$("#speed").text(localStorage["speed"]);
}