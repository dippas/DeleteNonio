const deleteNonio = {
	el: {
		html: document.documentElement,
		body: document.body,
		globalmediaGroupUrls: ['dinheirovivo.pt', 'tsf.pt', 'vdigital.pt', 'ojogo.pt', 'jn.pt', 'dn.pt', 'n-tv.pt'],
		cofinaGroupURLs: ['record.pt', 'cmjornal.pt', 'cm-tv.pt', 'jornaldenegocios.pt', 'destak.pt', 'flash.pt', 'vidas.pt', 'maxima.pt', 'sabado.pt', 'empregosonline.pt', 'classficadoscm.pt', 'aquelamaquina.pt'],
		renascencaGroupUrls: ['rr.sapo.pt', 'rfm.sapo.pt', 'megahits.sapo.pt', 'radiosim.sapo.pt']
	},

	removeElement(element) {
		if (document.querySelectorAll(element)[0]) {
			clearInterval(this.hasElement)
			this.el.html.style = 'overflow: auto !important';
			this.el.body.style = 'overflow: auto !important';
			document.querySelectorAll(element)[0].outerHTML = '';
		}
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
			this.removeElement('#wrapperContentGatingNonio')
			this.removeElement('#contentGateLoginDiv')
			this.removeElement('.brand__expresso')
		}, 1000);
	},

	cofinaGroupVideosFix() {
		this.el.cofinaGroupURLs.forEach(url => {
			if (window.location.href.indexOf(url) > -1) {
				this.hasElement ? document.cookie.split(";").forEach(value => document.cookie = value.replace(/^ +/, "").replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`)) : '';
			}
		})
	},

	globalmediaGroupFix() {
		this.el.globalmediaGroupUrls.forEach(url => {
			if (window.location.href.indexOf(url) > -1) {
				document.cookie.split(";").forEach(value => document.cookie = value.replace(/^ +/, "").replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`));
				window.addEventListener('load', () => this.removeElement('iframe[src^="/content"]'))
			}
		})
	},

	renascencaGroupFix() {
		clearInterval(this.setOverflow)
		this.el.renascencaGroupUrls.forEach(url => {
			if (window.location.href.indexOf(url) > -1) {
				this.setOverflow = setInterval(() => {
					this.el.html.style = 'overflow: auto !important';
					this.el.body.style = 'overflow: auto !important';
				}, 1000)
			}
		})
	},

	init() {
		this.events();
		this.cofinaGroupVideosFix();
		this.globalmediaGroupFix();
		this.renascencaGroupFix();
	}
}

function handleResponse() {
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