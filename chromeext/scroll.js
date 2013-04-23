$(window).scroll(function () {
	s = $('body').scrollTop();
	console.log(s);
	$.get('localhost:3000/', {site: "google"}, function(data){
		console.log(data);
	});
});

function sendPost() {

}
