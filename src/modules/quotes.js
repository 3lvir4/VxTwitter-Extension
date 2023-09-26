import { insertBefore } from "../utils/insertElement";

const selectTweetArticleElement = () => document.querySelector('article[data-testid="tweet"]');

export function insertQuotesLink() {
  const tweet = selectTweetArticleElement();
  const tweetBodyWrapper = tweet.firstChild.firstChild.lastChild;
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
  <svg viewBox="0 0 24 24" aria-hidden="true" class="r-1nao33i r-4qtqp9 r-yyyyoo r-1q142lx r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path></g></svg>
  <span>Quotes</span>
  `;
  quotesLink.className = tweetBodyWrapper.querySelector('[data-testid="retweet"]').firstChild.className;
  quotesLink.setAttribute("data-vx-tweet-quotes", "");

  quotesLink.style.display = "flex";
  quotesLink.style.gap = "0.5rem";
  quotesLink.style.textDecoration = "none";

  quotesLinkWrapper.appendChild(quotesLink)

  //insertBefore(quotesLinkWrapper, userActionsWrapperElement)

  const k = tweetBodyWrapper.childNodes;
  const len = k.length;
  k[len-2].firstChild.appendChild(quotesLinkWrapper);
}