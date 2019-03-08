// ==UserScript==
// @name         Facebook no ads
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  Makes sponsored feeds invisible on facebook.com
// @author       Darmikon
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

const trimAds = () => {
    const feeds = document.getElementById('contentArea').querySelectorAll('[id*=hyperfeed_story_id]');
    feeds.forEach(feed => {
        try {
          const title = feed
                    .querySelector('[data-testid*="story"]');

          if(title.firstElementChild.nodeName === "S") {
             feed.style.display = "none";
          }
        } catch (e) {}
    });
}

(function() {
    window.addEventListener('scroll', () => {
        setTimeout(trimAds, 1000);
    });
})();
