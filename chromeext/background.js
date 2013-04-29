var SERVER_HOST='localhost';
var SERVER_PORT='3000';
var socket = new io.connect(SERVER_HOST,{port: SERVER_PORT});

chrome.tabs.onActivated.addListener(function(activeInfo) {
	chrome.tabs.get(activeInfo.tabId, function(tab) {
		console.log("tab change: "+tab.url);
		socket.emit('pageSock',{page: tab.url});
	})
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	console.log("url change: "+tab.url);
	socket.emit('pageSock',{page: tab.url});
});

chrome.windows.onFocusChanged.addListener(function(windowID) {
	chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
		tab=tabs[0];
		console.log("window change: "+tab.url);
		socket.emit('pageSock',{page: tab.url});
	})
});