/*jslint browser:true*/
"use strict";
var supportCSS = Boolean((window.CSS && window.CSS.supports) || window.supportsCSS || false);
var supportCSSRule = Boolean((window.CSSRule) || false);
var supportAtSup = Boolean((window.CSSRule.SUPPORTS_RULE) || false);

export function hasAtSup() {
//  console.log("CSS Support:", supportCSS, ", CSSRule Support:", supportCSSRule, ", Has @support:", supportAtSup);
  return (supportCSS === true) && (supportCSSRule === true) && (supportAtSup === true);
}

export function hasRuleSup(rule1, rule2) {
  let rule = Boolean(CSS.supports(rule1, rule2) || false);
//  console.log("Checking for:  \"",rule1,":",rule2,"\"");
//  console.log("Rule Support:", rule);
  return (rule === true);
}
