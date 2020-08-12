// ==UserScript==
// @name         Delete Nonio Popup
// @author       dippas
// @namespace    https://github.com/dippas/DeleteNonio/
// @homepage     https://github.com/dippas/DeleteNonio/
// @description  Remover NONIO. Sempre actualizado para remover o nonio dos sites. Disponível como script e Extensão para Firefox e Chrome.
// @version      1.6.2
// @supportURL   https://github.com/dippas/DeleteNonio/issues
// @downloadURL  https://raw.githubusercontent.com/dippas/DeleteNonio/master/js/userscript/deletenonio.user.js
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
// @match        http://*.destak.pt/*
// @match        http://*.empregosonline.pt/*
// @match        https://*.classificadoscm.pt/*
// @match        https://*.n-tv.pt/*
// @grant        none
// ==/UserScript==

const deleteNonio={el:{html:document.documentElement,body:document.body,globalmediaGroupUrls:["dinheirovivo.pt","tsf.pt","vdigital.pt","ojogo.pt","jn.pt","dn.pt","n-tv.pt"],cofinaGroupURLs:["record.pt","cmjornal.pt","cm-tv.pt","jornaldenegocios.pt","destak.pt","flash.pt","vidas.pt","maxima.pt","sabado.pt","empregosonline.pt","classficadoscm.pt","aquelamaquina.pt"],renascencaGroupUrls:["rr.sapo.pt","rfm.sapo.pt","megahits.sapo.pt","radiosim.sapo.pt"]},removeElement(e){document.querySelectorAll(e)[0]&&(clearInterval(this.hasElement),this.el.html.style="overflow: auto !important",this.el.body.style="overflow: auto !important",document.querySelectorAll(e)[0].outerHTML="")},events(){this.hasElement=setInterval(()=>{this.removeElement("#imp-content-gate-root"),this.removeElement("#nonio-basiclogin"),this.removeElement('[id^="layer_gatting"]'),this.removeElement(".nonioBox"),this.removeElement(".warning-nonio-overlay"),this.removeElement(".tp-modal"),this.removeElement(".tp-backdrop"),this.removeElement(".tp-iframe-wrapper"),this.removeElement("#wrapperContentGatingNonio"),this.removeElement('#contentGateLoginDiv'),this.removeElement(".brand__expresso")},100)},cofinaGroupVideosFix(){this.el.cofinaGroupURLs.forEach(e=>{window.location.href.indexOf(e)>-1&&this.hasElement&&document.cookie.split(";").forEach(e=>document.cookie=e.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`))})},globalmediaGroupFix(){this.el.globalmediaGroupUrls.forEach(e=>{window.location.href.indexOf(e)>-1&&(document.cookie.split(";").forEach(e=>document.cookie=e.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)),window.addEventListener("load",()=>this.removeElement('iframe[src^="/content"]')))})},renascencaGroupFix(){clearInterval(this.setOverflow),this.el.renascencaGroupUrls.forEach(e=>{window.location.href.indexOf(e)>-1&&(this.setOverflow=setInterval(()=>{this.el.html.style="overflow: auto !important",this.el.body.style="overflow: auto !important"},100))})},init(){this.events(),this.cofinaGroupVideosFix(),this.globalmediaGroupFix(),this.renascencaGroupFix()}};deleteNonio.init();