// *****************************************************************************************************************************************
// *************************************************** MOST OF THE CODE HERE IS BORROWING **************************************************
// ******************************************** FROM A PREVIOUS FIREFOX ADD-ON MADE BY ZashyShy ********************************************
// ************************************ sauce: https://addons.mozilla.org/fr/firefox/addon/vx-twitter/ *************************************
// *****************************************************************************************************************************************

import { writeToClipboard } from "./utils/clipboard.js";
import { getVxTweetLink, removeVxFromTweetLink } from "./utils/linkConverters.js";
import { insertBefore, insertAfter } from "./utils/insertElement.js";

import { handleKeyDown } from "./modules/autocopy.js"

let extendedOptionsState;

chrome.storage.sync.get(["extendedOptionsState"]).then(result => {
    extendedOptionsState = result.extendedOptionsState;
});

// storage changes handler
chrome.storage.onChanged.addListener(function (changes) {
    for (let [key, { newValue }] of Object.entries(changes)) {
        if (key === 'extendedOptionsState') {
            extendedOptionsState = newValue;
        }
    }
});

// infinite loop
setInterval(function timer() {
    const possibleTweets = document.querySelectorAll('article[data-testid="tweet"]')

    possibleTweets.forEach(function loop(tweet) {
        // get share btn from svg path
        const shareBtnSVGPathStr = "M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"
        const shareBtnSVGPath = tweet.querySelector(`path[d="${shareBtnSVGPathStr}"]`);
        const shareBtnSVG = (shareBtnSVGPath.parentNode).parentNode;

        const shareLink = shareBtnSVG.closest('div[role="button"]')

        if (!shareLink || typeof shareLink.dataset.vxLinked !== 'undefined') {
            return
        }
        // get the tweet link
        const link = [...tweet.querySelectorAll('a[href*="status"]')].map(function mapLinks(a) {
            return getVxTweetLink(a.href)
        }).filter(function getNumberLink(link) {
            return !!link
        })[0]

        // setup share logic
        shareLink.setAttribute('data-vx-linked', '')
        shareLink.addEventListener('click', createHandleShareClick(link), true)
    })
}, 1000)

function createHandleShareClick(link) {
    function handleClick(optionChoice) {
        setTimeout(async function hookToClipboard() {
            // update clipboard
            switch (optionChoice) {
                case 'vx':
                    writeToClipboard(link);
                    break;
                case 'raw':
                    link = removeVxFromTweetLink(link);
                    writeToClipboard(link);
                    break;
            }
        }, 50)
    }

    // handle share context menu upon click
    return function handleShareClick() {
        setTimeout(function hookToMenu() {
            const menuItem = document.querySelector('#layers div:nth-of-type(1)[role="menuitem"]');
            let optionChoice = 'vx';

            if (extendedOptionsState) {
                // add new item to share context menu
                const rawOptionMenuItem = menuItem.cloneNode(true);
                rawOptionMenuItem.lastChild.firstChild.innerText = 'Copy Raw Link'; // modify text description of the menu item
                rawOptionMenuItem.id = 'raw-link-option';
                insertAfter(rawOptionMenuItem, menuItem);
                rawOptionMenuItem.addEventListener('click', () => {
                    optionChoice = 'raw';
                    menuItem.click();
                }, false)
            }

            menuItem.setAttribute('data-vx-linked', '')
            menuItem.addEventListener('click', () => handleClick(optionChoice), false)
        }, 50)
    }
}

// CTRL + C when on post page automatically add the vx link to clipboard 
window.addEventListener('keydown', handleKeyDown)



