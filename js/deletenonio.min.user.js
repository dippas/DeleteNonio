// ==UserScript==
// @name         Delete Nonio Popup
// @author       dippas
// @namespace    https://github.com/dippas/DeleteNonio/
// @homepage     https://github.com/dippas/DeleteNonio/
// @description  Remover Nonio Popup dos sites
// @version      1.0.0
// @supportURL   https://github.com/dippas/DeleteNonio/issues
// @match        https://*.aquelamaquina.pt/*
// @match        https://*.xl.pt/*
// @match        https://*.publico.pt/*
// @match        https://*.sapo.pt/*
// @match        https://*.blitz.pt/*
// @match        https://*.visao.pt/*
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
// @grant        none
// ==/UserScript==

const deleteNonio={el:{html:document.documentElement,body:document.body},events(){this.el.html.style='overflow: auto !important';this.el.body.style='overflow: auto !important';const hasElement=setInterval(()=>{if(document.querySelectorAll('[id^="layer_gatting"]')[0]){clearInterval(hasElement)
	document.querySelectorAll('[id^="layer_gatting"]')[0].outerHTML=''}
	if(document.querySelectorAll('.nonioBox')[0]){clearInterval(hasElement)
	document.querySelectorAll('.nonioBox')[0].outerHTML=''}
	if(document.querySelectorAll('.warning-nonio-overlay')[0]){clearInterval(hasElement)
	document.querySelectorAll('.warning-nonio-overlay')[0].outerHTML=''}
	if(document.querySelectorAll('.tp-modal')[0]){clearInterval(hasElement)
	document.querySelectorAll('.tp-modal')[0].outerHTML=''}
	if(document.querySelectorAll('.tp-backdrop')[0]){clearInterval(hasElement)
	document.querySelectorAll('.tp-backdrop')[0].outerHTML=''}
	if(document.querySelectorAll('.tp-iframe-wrapper')[0]){clearInterval(hasElement)
	document.querySelectorAll('.tp-iframe-wrapper')[0].outerHTML=''}
	if(document.querySelectorAll('iframe[src^="/content"]')[0]){clearInterval(hasElement);document.querySelectorAll('iframe[src^="/content"]')[0].outerHTML=''}
	if(document.querySelectorAll('#imp-content-gate-root')[0]){clearInterval(hasElement);document.querySelectorAll('#imp-content-gate-root')[0].outerHTML=''}},100)},saveContentInFakeElement(){if(window.location.href.indexOf('ojogo.pt')>-1){const element=document.getElementsByTagName('article')[0],newElement=document.createElement('deletenonio');newElement.innerHTML=element.innerHTML;element.parentNode.insertBefore(newElement,element);element.parentNode.removeChild(element)}},init(){this.events();this.saveContentInFakeElement()}}
	deleteNonio.init()