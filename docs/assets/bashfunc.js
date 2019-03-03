/* eslint-disable no-unused-vars */
/*jslint browser:true*/
"use strict";

// Support vars
var wbSupportCSS = Boolean((window.CSS && window.CSS.supports) || window.supportsCSS || false);
var wbSupportCSSRule = Boolean((window.CSSRule) || false);
var wbSupportAtSup = Boolean((window.CSSRule.SUPPORTS_RULE) || false);
// Support functions
function hasAtSup() {
//  console.log("CSS Support:", wbSupportCSS, ", CSSRule Support:", wbSupportCSSRule, ", Has @support:", wbSupportAtSup);
  return wbSupportCSS && wbSupportCSSRule && wbSupportAtSup;
}
function hasRuleSup(wbRule1, wbRule2) {
//  console.log("Checking support for:  \"",wbRule1,":",wbRule2,"\" =",CSS.supports(wbRule1, wbRule2));
  return CSS.supports(wbRule1, wbRule2);
}


/*
Slideshow Code
*/
function nextImage(imgs) {
    for (var i = 0; i < imgs.length; i++) {
        if (imgs[0].style.opacity == "") {
            imgs[0].style.opacity = "1";
            break;
        }
        else if (imgs[i].style.opacity == "1" || imgs[i].style.opacity == "") {
            imgs[i].style.opacity = "0";
            if (i + 1 < imgs.length) {
                imgs[i + 1].style.opacity = "1";
            } else {
                imgs[0].style.opacity = "1";
            }
            break;
        }
    }
    setTimeout(nextImage, 5000, imgs);
}
var wbFigures = document.getElementsByClassName("slideshow");
function figuresSlide(i) {
    return function () {
        nextImage(wbFigures[i].getElementsByTagName("img"));
    };
}
if (wbFigures != null) {
    for (var i = 0; i < wbFigures.length; i++) {
        if (wbFigures[i].className == "slideshow") {
            var wbWrapper = figuresSlide(i);
        }
        setTimeout(wbWrapper(i), 5000);
    }
}

/* 
Sticky Code

if (hasRuleSup("position","sticky")) {
// Gathering vars for sticky positioning
    var wbH1T = document.getElementsByTagName("H1");
    var wbH2T = document.getElementsByTagName("H2");
    var wbH3T = document.getElementsByTagName("H3");
// Resource vars for sticky positioning
    var wbH3H = wbH2T[0].offsetHeight;
// Setting H2 styles
    Object.keys(wbH2T).forEach(function(index) {
        wbH2T[index].style.marginBottom = - 1 + "px";
        wbH2T[index].style.marginTop = "0";
        wbH2T[index].style.position = "sticky";
        wbH2T[index].style.top =  - 1 + "px";
        wbH2T[index].style.zIndex = 100;
    });
// Setting H3 styles
    Object.keys(wbH3T).forEach(function(index) {
        wbH3T[index].style.marginBottom = - 1 + "px";
        wbH3T[index].style.marginTop = "0";
        wbH3T[index].style.position = "sticky";
        wbH3T[index].style.top = wbH3H - 2 + "px";
        wbH3T[index].style.zIndex = 50;
    });
// Setting anchor link offsets for stickied H3s
    document.addEventListener('click', function(event) {
        if (event.target.tagName !== 'A') return;
        var href = event.target.getAttribute('href') || '';
        if (href === '#' || !href.startsWith('#')) return;
        var target = document.getElementById(href.slice(1));
        if (!target || target.tagName !== 'H3') return;
        setTimeout(offsetAnchor, 10);
    });
// Offsets readme cross-page anchor links
    window.setTimeout(offsetAnchor, 5);
// String vars for sticky blocks and spacing
    var wbBodyStart = "<wbchap><wbsect>";
    var wbH2Before = "<wbcontend></wbcontend></wbsect></wbchap><wbchap>"
    var wbH2After = "<wbcontbgn></wbcontbgn><wbsect>"
    var wbH3Before = "<wbcontend></wbcontend></wbsect><wbsect>"
    var wbH3After = "<wbcontbgn></wbcontbgn>"
    var wbBodyEnd = "<wbcontend></wbcontend></wbsect></wbchap>";
// Applying boxes and spacers
    Object.keys(wbH1T).forEach(function(index) {
        wbH1T[index].insertAdjacentHTML('afterend', wbBodyStart);
    });
    Object.keys(wbH2T).forEach(function(index) {
        wbH2T[index].insertAdjacentHTML('beforebegin', wbH2Before);
        wbH2T[index].insertAdjacentHTML('afterend', wbH2After);
    });
    Object.keys(wbH3T).forEach(function(index) {
        wbH3T[index].insertAdjacentHTML('beforebegin', wbH3Before);
        wbH3T[index].insertAdjacentHTML('afterend', wbH3After);
    });
    document.body.insertAdjacentHTML('beforeend', wbBodyEnd);
// Block vars
    var wbChp = document.getElementsByTagName("wbchap");
    var wbSct = document.getElementsByTagName("wbsect");
// Spacer vars
    var wbCB = document.getElementsByTagName("wbcontbgn");
    var wbCE = document.getElementsByTagName("wbcontend");
    // Applying box and spacer styles
    Object.keys(wbChp).forEach(function(index) {
        wbChp[index].style.display = "block";
    });
    Object.keys(wbSct).forEach(function(index) {
        wbSct[index].style.display = "block";
    });
    Object.keys(wbCB).forEach(function(index) {
        wbCB[index].style.clear = "both";
        wbCB[index].style.content = "";
        wbCB[index].style.display = "block";
        wbCB[index].style.marginBottom = 1 + "rem";
    });
    Object.keys(wbCE).forEach(function(index) {
        wbCE[index].style.clear = "both";
        wbCE[index].style.content = "";
        wbCE[index].style.display = "block";
        wbCE[index].style.marginBottom = 1.6 + "rem";
    });

}
else {
    throw new Error("\"position: sticky\" isn't supported by this browser.");
}
// Archor link offset function
function offsetAnchor() {
    if (location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - (wbH3H - 2));
  }
} 
*/