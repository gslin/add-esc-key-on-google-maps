// ==UserScript==
// @name        Add Esc key on Google Maps
// @namespace   https://github.com/gslin/add-esc-key-on-google-maps
// @match       https://www.google.com/maps*
// @grant       none
// @version     0.20210101.1
// @author      Gea-Suan Lin <gslin@gslin.org>
// @description Add Esc key on Google Maps for better UX.
// @license     MIT
// ==/UserScript==

(() => {
    'use strict';

    window.addEventListener('keydown', ev => {
        // Esc key
        if (27 === ev.keyCode) {
            // User page (works only in traditional chinese environment).
            let el = document.querySelector('button[aria-label="關閉"]');
            if (el) {
                el.click();
                return;
            }

            // Comment page (works only in traditional chinese environment).
            el = document.querySelector('button[aria-label="返回"]');
            if (el) {
                el.click();
                return;
            }

            // Store page.
            el = document.querySelector('a[guidedhelpid="clear_search"]');
            if (el) {
                el.click();
                return;
            }
        }
    }, true);
})();
