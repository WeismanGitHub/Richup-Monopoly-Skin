// ==UserScript==
// @name         Richup Monoply Skin
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Makes richup.io look like regular Monopoly.
// @author       Liz Weisman
// @match        https://richup.io/room/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener('DOMNodeInserted', (event) => {
        console.log(event.target.nodeValue)
        //event.target.replaceChildren("<div>test</div>")
        // document.getElementsByClassName("wm46CW8f");
    }, false);

    /* for (let i = 0; i < propertyNames.length; i++) {
        propertyNames[i].innerHTML = 'test'
    } */
})();