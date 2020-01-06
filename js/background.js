browser.tabs.onUpdated.addListener((tabId, changeInfo) => {
	if (typeof browser.browserAction.setBadgeBackgroundColor === 'function') {
		browser.browserAction.setBadgeBackgroundColor({
			color: changeInfo.status === 'complete' ? 'green' : '',
			tabId: tabId
		});
	}
	if (typeof browser.browserAction.setBadgeText === 'function') {
		browser.browserAction.setBadgeText({
			text: changeInfo.status === 'complete' ? 'OK' : ''
		});
	}
});

function handleMessage(request, sender, sendResponse) {
	if (typeof browser.browserAction.setBadgeBackgroundColor === 'function') {
		browser.browserAction.setBadgeBackgroundColor({
			color: 'green'
		});
	}
	if (typeof browser.browserAction.setBadgeText === 'function') {
		browser.browserAction.setBadgeText({
			text: 'OK'
		});
	}
	sendResponse({
		response: 'Done'
	});
}

browser.runtime.onMessage.addListener(handleMessage);