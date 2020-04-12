const deleteNonio = {
	el: {
		html: document.documentElement,
		body: document.body
	},

	removeElement(element) {
		if (document.querySelectorAll(element)[0]) {
			clearInterval(this.hasElement)
			this.el.html.style = 'overflow: auto !important';
			this.el.body.style = 'overflow: auto !important';
			document.querySelectorAll(element)[0].outerHTML = '';
		}
		console.log('remove')
	},

	events() {
		this.hasElement = setInterval(() => {
			this.removeElement('#imp-content-gate-root')
			this.removeElement('#nonio-basiclogin')
			this.removeElement('[id^="layer_gatting"]')
			this.removeElement('.nonioBox')
			this.removeElement('.warning-nonio-overlay')
			this.removeElement('.tp-modal')
			this.removeElement('.tp-backdrop')
			this.removeElement('.tp-iframe-wrapper')
		}, 100);
		console.log('events')
	},

	globalmediaGroupFix() {
		if (window.location.href.indexOf('dinheirovivo.pt') > -1 || window.location.href.indexOf('tsf.pt') > -1 || window.location.href.indexOf('vdigital.pt') > -1 || window.location.href.indexOf('ojogo.pt') > -1 || window.location.href.indexOf('jn.pt') > -1 || window.location.href.indexOf('dn.pt') > -1) {
			document.cookie.split(";").forEach(value => document.cookie = value.replace(/^ +/, "").replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`));
			window.addEventListener('load', () => this.removeElement('iframe[src^="/content"]'))
		}
	},

	init() {
		this.events();
		this.globalmediaGroupFix();
		console.log('init')
	}  
}

function handleResponse(message) {
	console.log(message);
	deleteNonio.init();
}

function handleError(error) {
	console.log(`Error: ${error}`);
}

function sendMessageNotification() {
	const sending = browser.runtime.sendMessage({
		status: 'done'
	});
	sending.then(handleResponse, handleError);
}

sendMessageNotification();