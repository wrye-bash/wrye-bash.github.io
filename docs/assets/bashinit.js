/* eslint-disable no-console */
/*eslint-disable no-unused-vars */
/*jslint browser:true*/
"use strict";

//* Init: Shared vars
var wbDAEL = document.addEventListener;
var wbRoot = document.documentElement;
var wbSupAEL = false; //! Halts bashfunc.js if false
//* Init: Resource vars
var wbIsChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
var wbIsFirefox = typeof InstallTrigger !== "undefined";
var wbIsSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window["safari"] || (typeof safari !== "undefined" && safari.pushNotification));

//* BREAK IE<10, else apply JS class
var head = document.getElementsByTagName('head')[0];
var noTRex = "#box #oldie { display: none; opacity: 0; visibility: hidden; }"
var footer = "#footer { padding-bottom: 13px; padding-top: 13px; text-align: center; }"
function halt(){
	if ((!wbDAEL) || (!wbRoot.classList)) {
		console.log("wbDAEL:",wbDAEL," , wbRoot.classList:",wbRoot.classList)
		fixOldIE(footer);
		// if(!wbDAEL) {
		// 	fixOldIE("h1 { display: block; background-color: red; content: 'Alright Mr. Hammond, we need to talk about this dinosaur.' }");
		// }
		throw "Poor support!"; //! Halts both scripts
	}
	wbSupAEL = true; //! Allows bashfunc.js engage
	wbRoot.classList.add("JS-on"); //! Enables JS-specific styles
}
//* Function to fix footers for IE<10
function fixOldIE(style) {
	var node = document.createElement("style");
	if(!wbDAEL) {
		node.type = "text/css";
		node.text = style;
		console.log("Style:", style);
		console.log("Node:", node);
		return head.appendChild(node);
	}
	node.innerHTML = style + " " + noTRex;
	return head.appendChild(node);
}
//* Check scrollbar style support and apply
function wbScrlApply() {
	if (wbIsFirefox && CSS.supports("scrollbar-color", "#000 #000")) return wbRoot.classList.add("scrlbarFF");
	if ((wbIsChrome /* || wbIsSafari */)) return wbRoot.classList.add("scrlbarWK");
}

//* Engage
halt();
wbScrlApply();