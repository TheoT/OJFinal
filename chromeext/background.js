// var SERVER_HOST='ojfinal.herokuapp.com';
var SERVER_HOST = 'localhost';
var SERVER_PORT='3000';
var socket = new io.connect(SERVER_HOST, {port: SERVER_PORT})

localStorage['leading'] = 'false'; //set default leadership false

chrome.tabs.onActivated.addListener(function(activeInfo) {
	chrome.tabs.get(activeInfo.tabId, function(tab) {
		console.log("tab change: "+tab.url);
		if (localStorage['leading'] == 'true') {
			socket.emit('pageSock',{page: tab.url});
		}
	})
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if (localStorage['leading'] == 'true') {
		console.log("url change: "+tab.url);
		socket.emit('pageSock',{page: tab.url});
	}
});

chrome.windows.onFocusChanged.addListener(function(windowID) {
	chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
		tab=tabs[0];
		if (localStorage['leading'] == 'true') {
			console.log("window change: "+tab.url);
			socket.emit('pageSock',{page: tab.url});
		}
	})
});

//handle sending leadership status to content script
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.method == "getStatus")
      sendResponse({status: localStorage['leading'],room:localStorage['roomName']});
    else
      sendResponse({status : "none"}); // snub them.
});

//handle speed notificaitons
socket.on('notifySock', function (data) {
	if (localStorage['leading'] == 'true') {
    	localStorage[data.type] = parseInt(localStorage[data.type]) + 1;   
		chrome.extension.sendRequest({ 'data': data }, function() {});                                        
	}
});

socket.emit('changeRoom',{roomName: localStorage['roomName']});