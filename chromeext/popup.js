// var SERVER_HOST='ojfinal.herokuapp.com';
var SERVER_HOST='localhost';
var SERVER_PORT='3000'; 
var socket = io.connect(SERVER_HOST, {port:SERVER_PORT});

//the following code captures any changes made to the textarea. We just need to have the socket emit the text
$('#pad').bind('input propertychange', function() {
	localStorage["pirateText"]=this.value;
	console.log('textarea val: ', this.value);
	if(this.value.length) {
		updatePirate();
	}
});

function updatePirate() {
	if (localStorage['leading'] == 'true') {
		socket.emit('pirateSock', { text: localStorage['pirateText'] });
	}
}

chrome.extension.onRequest.addListener(function(request) {                                                                                                                                                  
    if (request.data) {                                                                                                                                                                                
        updateText();                                                                                                                                                     
    }
});

//grab the text and counters from the local db
$(document).ready(function() {
	updateText();
	checkLeadership();
})

function checkLeadership() {
	var leading = (localStorage['leading'] == 'true');
	$(leading ? "#doLead" : "#dontLead").addClass("active");
	$(leading ? "#dontLead" : "#doLead").removeClass("active");
}

$("#clearCounter").click(function () {
	localStorage['slow'] = 0;
	localStorage['perfect'] = 0;
	localStorage['speed'] = 0;
	updateText();
})

//update counters
function updateText() {
	$("#pad").val(localStorage["pirateText"]);
	$("#slow").text(localStorage["slow"]);
	$("#perfect").text(localStorage["perfect"]);
	$("#speed").text(localStorage["speed"]);
	updatePirate();
}

//update pirate pad
$("body").load(function() {
	$("#pad").val() = localStorage["pirateText"];
})

//reset counters on button press
$('#reset').on('click', function () {
	localStorage['slow'] = 0
	localStorage['perfect'] = 0
	localStorage['speed'] = 0
});

//toggle leading
$(".leadToggle").on('click', function() {
	$(".leadToggle").toggleClass("active");
	localStorage['leading'] = ($(this).attr('id') == "doLead");
	updateText();
})