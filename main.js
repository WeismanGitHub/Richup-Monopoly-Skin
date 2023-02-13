// ==UserScript==
// @name         Richup.io Monopoly Skin
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Makes richup.io look like regular Monopoly.
// @author       Liz Weisman
// @match        https://richup.io/*
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

    function changePropertyNames(event) {
        const property =  document.querySelector('.wm46CW8f')

        if (!property) {
            return
        }

        document.removeEventListener('DOMNodeInserted', changePropertyNames)

        for (let i = 0; i < 22; i++) {
            const fakePropertyElement = document.querySelector('.wm46CW8f');

            const realPropertyElement = document.createElement('p');
            realPropertyElement.innerHTML = `<div>${realPropertyNames[fakePropertyElement.innerText]}</div>`;
            
            fakePropertyElement.parentNode.replaceChild(realPropertyElement, fakePropertyElement);
        }

        document.addEventListener('DOMNodeInserted', (event) => {
            const fakePropertyElement = document.querySelector('.NaF9Aau7');

            if (!fakePropertyElement) {
                return
            }

            const realPropertyElement = document.createElement('p');
            realPropertyElement.innerHTML = `<div>${realPropertyNames[fakePropertyElement.innerText]}</div>`;
            
            fakePropertyElement.parentNode.replaceChild(realPropertyElement, fakePropertyElement);
        })
    }

    document.addEventListener('DOMNodeInserted', changePropertyNames);
})();