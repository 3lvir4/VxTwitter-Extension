// *****************************************************************************************************************************************
// *************************************************** MOST OF THE CODE HERE IS BORROWING **************************************************
// ******************************************** FROM A PREVIOUS FIREFOX ADD-ON MADE BY ZashyShy ********************************************
// ************************************ sauce: https://addons.mozilla.org/fr/firefox/addon/vx-twitter/ *************************************
// *****************************************************************************************************************************************


function createHandleShareClick(link) {
    function handleClick() {
        setTimeout(async function hookToClipboard() {
            writeToClipboard(link) // update clipboard
        }, 50)
    }

    // handle share context menu upon click
    return function handleShareClick() {
        setTimeout(function hookToMenu() {
            const menuItem = document.querySelector('#layers div:nth-of-type(1)[role="menuitem"]')
            menuItem.setAttribute('data-vx-linked', '')
            menuItem.addEventListener('click', handleClick, false)
        }, 50)
    } 
}

// infinite loop
setInterval(function timer() {
    const possibleTweets = document.querySelectorAll('article[data-testid="tweet"]')

    possibleTweets.forEach(function loop(tweet) {
        // get share svg btn from svg path
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


// shared clipboard function
async function writeToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text)
    } catch (e) {
        // ignore error
    }
}

// shared function to get valid link from string
function getVxTweetLink(text) {
    const link = text.match(/^http.*\/\d+/)[0]
    if (!link) {
        return link
    }
    const splitLink = link.split('//')
    return `${splitLink[0]}//vx${splitLink[1]}`
}


// CTRL + C when on post page automatically add the vx link to clipboard 
function handleKeyDown(event) {
    const isCtrlOrCmd = event.ctrlKey || event.metaKey
    const isC = event.key.toLowerCase() === 'c'
    const isSelecting = window.getSelection().toString() !== ''
    if (!isSelecting && isCtrlOrCmd && isC) {
        // write current url, if valid, to clipboard
        const link = getVxTweetLink(window.location.href)
        writeToClipboard(link)
    }
}

window.addEventListener('keydown', handleKeyDown)



