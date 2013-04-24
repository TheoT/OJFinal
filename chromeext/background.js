// chrome.tabs.onUpdated.addListener(function(tabID, changeInfo, tab) {
// 	// alert("GAY!");	
// });

// chrome.tabs.onCreated.addListener(function(tabID, changeInfo, tab) {
// 	// alert("GAYER!");
// });

chrome.tabs.onActivated.addListener(function(activeInfo) {
	chrome.tabs.get(activeInfo.tabId, function(tab) {
		console.log(tab.url);
		sendPost(tab.url);
	})
});

// chrome.tabs.onHighlighted.addListener(function(highlightInfo) {
// 	// alert("on highlighted");
// });

function sendPost(url) {
	$.get('http://localhost:3000/', {site: url}, function(data){
		console.log(data);
	});
}
