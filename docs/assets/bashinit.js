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
	if (wbIsFirefox && CSS.supports("scrollbar-color", "#000 #000")) {
		wbRoot.classList.add("scrlbarFF");
		wbRoot.style.marginLeft = "0.8125rem";
	}
	if ((wbIsChrome || wbIsSafari)) {
		wbRoot.classList.add("scrlbarWK");
		wbRoot.style.marginLeft = "0.8125rem";
	}
}

//* Engage
halt();
wbScrlApply();