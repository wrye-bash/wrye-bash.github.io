/* eslint-disable no-console */
/*eslint-disable no-unused-vars */
/*jslint browser:true*/
"use strict";

//* Init: Shared vars
var wbDAEL = document.addEventListener;
var wbRoot = document.documentElement;
var wbSupAEL = false; //! Halts bashfunc.js if false
//* BREAK IE<10, else apply JS class
function halt(){
	if ((!wbDAEL) || (!wbRoot.classList)) throw "Poor support!"; //! Halts both scripts
	wbSupAEL = true; //! Allows bashfunc.js engage
	wbRoot.classList.add("JS-on"); //! Enables JS-specific styles
}

//* Init: Resource vars
var wbIsChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
var wbIsFirefox = typeof InstallTrigger !== "undefined";
var wbIsSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window["safari"] || (typeof safari !== "undefined" && safari.pushNotification));
//* Check scrollbar style support and apply
function wbScrlApply() {
	if (wbIsFirefox && CSS.supports("scrollbar-color", "#000 #000")) return wbRoot.classList.add("scrlbarFF");
	if ((wbIsChrome /* || wbIsSafari */)) return wbRoot.classList.add("scrlbarWK");
}

//* Engage
halt();
wbScrlApply();