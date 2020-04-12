// ==UserScript==
// @name         Delete Nonio Popup
// @author       dippas
// @namespace    https://github.com/dippas/DeleteNonio/
// @homepage     https://github.com/dippas/DeleteNonio/
// @description  Remover Nonio Popup dos sites
// @version      1.4.0
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

const deleteNonio={el:{html:document.documentElement,body:document.body},removeElement(a){document.querySelectorAll(a)[0]&&(clearInterval(this.hasElement),this.el.html.style="overflow: auto !important",this.el.body.style="overflow: auto !important",document.querySelectorAll(a)[0].outerHTML="")},events(){this.hasElement=setInterval(()=>{this.removeElement("#imp-content-gate-root"),this.removeElement("#nonio-basiclogin"),this.removeElement("[id^=\"layer_gatting\"]"),this.removeElement(".nonioBox"),this.removeElement(".warning-nonio-overlay"),this.removeElement(".tp-modal"),this.removeElement(".tp-backdrop"),this.removeElement(".tp-iframe-wrapper")},100)},globalmediaGroupFix(){(-1<window.location.href.indexOf("dinheirovivo.pt")||-1<window.location.href.indexOf("tsf.pt")||-1<window.location.href.indexOf("vdigital.pt")||-1<window.location.href.indexOf("ojogo.pt")||-1<window.location.href.indexOf("jn.pt")||-1<window.location.href.indexOf("dn.pt"))&&(document.cookie.split(";").forEach(a=>document.cookie=a.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)),window.addEventListener("load",()=>this.removeElement("iframe[src^=\"/content\"]")))},init(){this.events(),this.globalmediaGroupFix()}};deleteNonio.init();