// ==UserScript==
// @name         Delete Nonio Popup
// @author       dippas
// @namespace    https://github.com/dippas/DeleteNonio/
// @homepage     https://github.com/dippas/DeleteNonio/
// @description  Delete annoying popup for nonio registration - Privacy issues
// @version      0.1.3
// @supportURL   https://github.com/dippas/DeleteNonio/issues
// @match        https://*.aquelamaquina.pt/*
// @match        https://*.xl.pt/*
// @match        https://*.publico.pt/*
// @match        https://*.sapo.pt/*
// @match        https://*.blitz.pt/*
// @match        https://*.visao.pt/*
// @match        https://*.expressoemprego.pt/*
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
// @grant        none
// ==/UserScript==



const deleteNonio = {
	el: {
		html: document.documentElement,
		body: document.body
	},
	events() {
		this.el.html.style = 'overflow: auto !important';
		this.el.body.style = 'overflow: auto !important';
		document.querySelectorAll('#imp-content-gate-root')[0] ? document.querySelectorAll('#imp-content-gate-root')[0].outerHTML = '' : '';
		document.querySelectorAll('[id^="layer_gatting"]')[0] ? document.querySelectorAll('[id^="layer_gatting"]')[0].outerHTML = '' : '';
		document.querySelectorAll('.nonioBox')[0] ? document.querySelectorAll('.nonioBox')[0].outerHTML = '' : '';
		document.querySelectorAll('.warning-nonio-overlay')[0] ? document.querySelectorAll('.warning-nonio-overlay')[0].outerHTML = '' : '';
		document.querySelectorAll('.tp-modal')[0] ? document.querySelectorAll('.tp-modal')[0].outerHTML = '' : '';
		document.querySelectorAll('.tp-backdrop')[0] ? document.querySelectorAll('.tp-backdrop')[0].outerHTML = '' : '';
		document.querySelectorAll('.tp-iframe-wrapper')[0] ? document.querySelectorAll('.tp-iframe-wrapper')[0].outerHTML = '' : '';
	},
	init() {
		window.onload = () => {
			setTimeout(() => this.events(), 100);
		}
	}
};
deleteNonio.init();