// ==UserScript==
// @name         Incognito trick
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Prevent sites detecting if you're in incognito by calling the success callback of webkitRequestFileSystem even if it's failing.
// @author       You
// @run-at       document-start
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function injectScript(script, node) {
        var element = document.createElement('script');
        element.setAttribute('type', 'text/javascript');
        element.setAttribute('async', false);
        element.text = script;
        node.appendChild(element);
    }
    var node = document.documentElement;
    var script = `(function(webkitRequestFileSystem) {
      window.webkitRequestFileSystem = function(type, size, successCallback, errorCallback) {
        webkitRequestFileSystem(type, size, successCallback, successCallback);
      }
    })(window.webkitRequestFileSystem);`;
    injectScript(script, node);
})();
