import { insertBefore } from "../utils/insertElement";

const selectTweetArticleElement = () => document.querySelector('article[data-testid="tweet"]');

export async function insertQuotesLink() {
  const tweet = selectTweetArticleElement();
  const tweetBodyWrapper = tweet.firstChild.firstChild.lastChild;

  /**
   * Avoids quotes button showing on circle exclusive tweets.
   * s/o vypez for the travaux investigation
   */
  const circleLink = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(tweetBodyWrapper.querySelector('a[href="https://help.x.com/using-twitter/twitter-circle"]'))
    }, 150)
  }) 
  if (circleLink) return;


  /** @type HTMLElement */
  const userActionsWrapperElement = tweetBodyWrapper.lastChild;
  const wrapperStyle = userActionsWrapperElement.className;

  const quotesLinkWrapper = document.createElement('div');
  quotesLinkWrapper.className = wrapperStyle;

  const currHref = window.location.href;
  const quotesHref = currHref + "/quotes";
  const quotesLink = document.createElement('a');
  quotesLink.setAttribute("href", quotesHref);
  quotesLink.innerHTML = `
  <span class="icon"><svg viewBox="0 0 24 24" aria-hidden="true" class="r-1nao33i r-4qtqp9 r-yyyyoo r-1q142lx r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path></g></svg></span>
  <span class="description">Quotes</span>
  `;
  quotesLink.className = tweetBodyWrapper.querySelector('[data-testid="retweet"]').firstChild.className;
  quotesLink.setAttribute("data-vx-tweet-quotes", "");

  quotesLink.classList.add("vx-quotes-link")

  quotesLinkWrapper.appendChild(quotesLink)

  const k = tweetBodyWrapper.childNodes;
  const len = k.length;
  k[len - 2].firstChild.appendChild(quotesLinkWrapper);
}

// fast styling just to have something more clean
export function addQuotesLinkStyle() {
  const css = `
  .vx-quotes-link {
    display: flex;
    gap: 0.5rem;
    text-decoration: none;
  }

  .vx-quotes-link .icon {
    margin: -8px;
    padding: 8px;
    transition-property: background-color;
    transition-duration: 0.2s;
    border-radius: 9999px;
  }

  .vx-quotes-link:hover {
    color: rgb(29, 155, 240);
  }

  .vx-quotes-link:hover .icon {
    background-color: rgba(29, 155, 240, 0.1);
    rgb(29, 155, 240);
  }

  .vx-quotes-link:hover .icon svg {
    filter: invert(46%) sepia(65%) saturate(1338%) hue-rotate(179deg) brightness(100%) contrast(95%); //hihihi
  }
  `;
  const style = document.createElement('style');

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  document.getElementsByTagName('head')[0].appendChild(style);
}
