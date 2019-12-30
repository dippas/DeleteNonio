browser.tabs.onUpdated.addListener((tabId, changeInfo) => {
	browser.browserAction.setBadgeBackgroundColor({
		color: changeInfo.status === 'complete' ? 'green' : '',
		tabId: tabId
	});
	browser.browserAction.setBadgeText({
		text: changeInfo.status === 'complete' ? 'OK' : ''
	})
});

function handleMessage(request, sender, sendResponse) {
	browser.browserAction.setBadgeBackgroundColor({
		color: 'green'
	});
	browser.browserAction.setBadgeText({
		text: 'OK'
	});
	sendResponse({
		response: 'Done'
	});
}

browser.runtime.onMessage.addListener(handleMessage);