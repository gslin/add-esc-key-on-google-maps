// ==UserScript==
// @name        Add Esc key on Google Maps
// @namespace   https://github.com/gslin/add-esc-key-on-google-maps
// @match       https://www.google.com/maps*
// @grant       none
// @version     0.20201231.0
// @author      Gea-Suan Lin <gslin@gslin.org>
// @description Add Esc key on Google Maps
// @license     MIT
// ==/UserScript==

(() => {
    'use strict';

    window.addEventListener('keydown', ev => {
        // Esc key
        if (27 === ev.keyCode) {
            let el = document.querySelector('a[guidedhelpid="clear_search"]');
            if (!el) {
                return;
            }

            el.click();
        }
    }, true);
})();
