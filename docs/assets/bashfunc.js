/* eslint-disable no-unused-vars */
/*jslint browser:true*/
"use strict";

var supportCSS = Boolean((window.CSS && window.CSS.supports) || window.supportsCSS || false);
var supportCSSRule = Boolean((window.CSSRule) || false);
var supportAtSup = Boolean((window.CSSRule.SUPPORTS_RULE) || false);

function hasAtSup() {
//  console.log("CSS Support:", supportCSS, ", CSSRule Support:", supportCSSRule, ", Has @support:", supportAtSup);
  return supportCSS && supportCSSRule && supportAtSup;
}

function hasRuleSup(rule1, rule2) {
//  console.log("Checking support for:  \"",rule1,":",rule2,"\" =",CSS.supports(rule1, rule2));
  return CSS.supports(rule1, rule2);
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

var figures = document.getElementsByClassName("slideshow");
function figuresSlide(i) {
    return function () {
        nextImage(figures[i].getElementsByTagName("img"));
    };
}

if (figures != null) {
    for (var i = 0; i < figures.length; i++) {
        if (figures[i].className == "slideshow") {
            var wrapper = figuresSlide(i);
        }
        setTimeout(wrapper(i), 5000);
    }
}


/*
Sticky Code
*/

if (hasRuleSup("position","sticky")) {
    var h2t = document.getElementsByTagName("h2");
    var h3t = document.getElementsByTagName("h3");
    var h3h = h2t[0].offsetHeight;

    Object.keys(h3t).forEach(function(index) {
        h3t[index].style.top = h3h - 2 + "px";
    });    

    document.addEventListener('click', function(event) {
        if (event.target.tagName !== 'A') return;
        var href = event.target.getAttribute('href') || '';
        if (href === '#' || !href.startsWith('#')) return;
        var target = document.getElementById(href.slice(1));
        if (!target || target.tagName !== 'H3') return;
        setTimeout(offsetAnchor, 10);
    });

    window.setTimeout(offsetAnchor, 0);
}
else {
    throw new Error("\"position: sticky\" isn't supported by this browser.");
}

function offsetAnchor() {
    if (location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - (h3h - 2));
  }
}
