// ==UserScript==
// @name         Delete Nonio Popup
// @author       dippas
// @namespace    https://github.com/dippas/DeleteNonio/
// @homepage     https://github.com/dippas/DeleteNonio/
// @description  Remover Nonio Popup dos sites
// @version      1.3.1
// @supportURL   https://github.com/dippas/DeleteNonio/issues
// @match        https://*.aquelamaquina.pt/*
// @match        https://*.xl.pt/*
// @match        https://*.publico.pt/*
// @match        https://*.sapo.pt/*
// @match        https://*.blitz.pt/*
// @match        https://*.visao.pt/*
// @match        https://*.tribunaexpresso.pt/*
// @match        https://*.expresso.pt/*
// @match        https://*.expressoemprego.pt/*
// @match        https://*.cm-tv.pt/*
// @match        https://*.cmjornal.pt/*
// @match        https://*.record.pt/*
// @match        https://*.jornaldenegocios.pt/*
// @match        https://*.jn.pt/*
// @match        https://*.dn.pt/*
// @match        https://*.tsf.pt/*
// @match        https://*.sabado.pt/*
// @match        https://*.ojogo.pt/*
// @match        https://*.dinheirovivo.pt/*
// @match        https://*.iol.pt/*
// @match        https://*.flash.pt/*
// @match        https://*.vidas.pt/*
// @match        https://*.maxima.pt/*
// @match        https://*.sic.pt/*
// @match        https://*.sicnoticias.pt/*
// @match        https://*.famashow.pt/*
// @match        https://*.sickapa.pt/*
// @match        https://*.sicradical.pt/*
// @match        https://*.sicmulher.pt/*
// @match        https://*.siccaras.pt/*
// @match        https://*.vdigital.pt/*
// @grant        none
// ==/UserScript==



const deleteNonio = {
	el: {
		html: document.documentElement,
		body: document.body
	},

	events() {
		const hasElement = setInterval(() => {

			if (document.querySelectorAll('[id^="layer_gatting"]')[0]) {
				clearInterval(hasElement)
				this.el.html.style = 'overflow: auto !important';
				this.el.body.style = 'overflow: auto !important';
				document.querySelectorAll('[id^="layer_gatting"]')[0].outerHTML = '';
			}

			if (document.querySelectorAll('.nonioBox')[0]) {
				clearInterval(hasElement)
				this.el.html.style = 'overflow: auto !important';
				this.el.body.style = 'overflow: auto !important';
				document.querySelectorAll('.nonioBox')[0].outerHTML = '';
			}

			if (document.querySelectorAll('.warning-nonio-overlay')[0]) {
				clearInterval(hasElement)
				this.el.html.style = 'overflow: auto !important';
				this.el.body.style = 'overflow: auto !important';
				document.querySelectorAll('.warning-nonio-overlay')[0].outerHTML = '';
			}

			if (document.querySelectorAll('.tp-modal')[0]) {
				clearInterval(hasElement)
				this.el.html.style = 'overflow: auto !important';
				this.el.body.style = 'overflow: auto !important';
				document.querySelectorAll('.tp-modal')[0].outerHTML = '';
			}

			if (document.querySelectorAll('.tp-backdrop')[0]) {
				clearInterval(hasElement)
				this.el.html.style = 'overflow: auto !important';
				this.el.body.style = 'overflow: auto !important';
				document.querySelectorAll('.tp-backdrop')[0].outerHTML = '';
			}

			if (document.querySelectorAll('.tp-iframe-wrapper')[0]) {
				clearInterval(hasElement)
				this.el.html.style = 'overflow: auto !important';
				this.el.body.style = 'overflow: auto !important';
				document.querySelectorAll('.tp-iframe-wrapper')[0].outerHTML = '';
			}

			if (document.querySelectorAll('#imp-content-gate-root')[0]) {
				clearInterval(hasElement);
				this.el.html.style = 'overflow: auto !important';
				this.el.body.style = 'overflow: auto !important';
				document.querySelectorAll('#imp-content-gate-root')[0].outerHTML = '';
			}

		}, 100);
	},

	globalmediaGroupFix() {
		if (window.location.href.indexOf('dinheirovivo.pt') > -1 || window.location.href.indexOf('tsf.pt') > -1 || window.location.href.indexOf('vdigital.pt') > -1 || window.location.href.indexOf('ojogo.pt') > -1 || window.location.href.indexOf('jn.pt') > -1 || window.location.href.indexOf('dn.pt') > -1) {

			document.cookie.split(";").forEach(value => {
				document.cookie = value.replace(/^ +/, "").replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
			});

			window.addEventListener('load', () => {
				if (document.querySelectorAll('iframe[src^="/content"]')[0]) {
					this.el.html.style = 'overflow: auto !important';
					this.el.body.style = 'overflow: auto !important';
					document.querySelectorAll('iframe[src^="/content"]')[0].outerHTML = '';
				}
			})
		}
	},

	init() {
		this.events();
		this.globalmediaGroupFix();
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