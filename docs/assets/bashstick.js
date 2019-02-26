/*jslint browser:true*/
"use strict";
import * as lib from './jslibs/chklib.js';

const run = lib.hasRuleSup("position","sticky") || false;
//console.log("Has Full CSS Frame:",lib.hasAtSup());
//console.log("Has Rule Support:",run);

if (run === true) {
    var h2t = document.getElementsByTagName("h2");
    var h3t = document.getElementsByTagName("h3");
    var h3h = h2t[0].offsetHeight;

    Object.keys(h3t).forEach(function(index) {
        h3t[index].style.top = h3h - 2 + "px";
    });
}
else {
    throw new Error("\"position: sticky\" isn't supported by this browser.");
}
