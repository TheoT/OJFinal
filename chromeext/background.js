// chrome.tabs.onUpdated.addListener(function(tabID, changeInfo, tab) {
// 	// alert("GAY!");	
// });

// chrome.tabs.onCreated.addListener(function(tabID, changeInfo, tab) {
// 	// alert("GAYER!");
// });

chrome.tabs.onActivated.addListener(function(activeInfo) {
	chrome.tabs.get(activeInfo.tabId, function(tab) {
		console.log(tab.url);
		sendPost();
	})
});

// chrome.tabs.onHighlighted.addListener(function(highlightInfo) {
// 	// alert("on highlighted");
// });

function sendPost() {
	$.get('http://localhost:3000/', {site: "google"}, function(data){
		console.log(data);
	});
}
