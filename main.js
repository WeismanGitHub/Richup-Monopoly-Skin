// ==UserScript==
// @name         Richup Monoply Skin
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Makes richup.io look like regular Monopoly.
// @author       Liz Weisman
// @match        https://richup.io/room/*
// ==/UserScript==

(function() {
    'use strict';
    const realPropertyNames = {
        "Salvador": "Mediterranean Avenue",
        "Rio": "Baltic Avenue",
        "Tel Aviv": "Oriental Avenue",
        "Haifa": "Vermont Avenue",
        "Jerusalem": "Connecticut Avenue",
        "Venice": "St. Charles Place",
        "Milan": "States Avenue",
        "Rome": "Virginia Avenue",
        "Frankfurt": "St. James Place",
        "Munich": "Tennessee Avenue",
        "Berlin": "New York Avenue",
        "Shenzhen": "Kentucky Avenue",
        "Beijing": "Indiana",
        "Shanghai": "Martin Luther King Jr. Boulevard",
        "Lyon": "Atlantic Avenue",
        "Toulouse": "Ventnor Avenue",
        "Paris": "Marvin Gardens",
        "Liverpool": "Pacific Avenue",
        "Manchester": "North Carolina Avenue",
        "London": "Pennsylvania",
        "San Francisco": "Park Place",
        "New York": "Boardwalk",
    }

    document.addEventListener('DOMNodeInserted', (event) => {
        const fakePropertyName = event.target.nodeValue
        const realPropertyName = realPropertyNames[fakePropertyName]

        if (realPropertyName) {
            // const realPropertyElement = document.createElement('div')
            // realPropertyElement.innerHTML = realPropertyName

            // event.target.replaceWith(event.target, realPropertyElement);

            console.log(`${fakePropertyName}: ${realPropertyName}`)
        }

    }, false);
    
    // document.getElementsByClassName("wm46CW8f");
})();