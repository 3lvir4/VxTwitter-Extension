(()=>{"use strict";async function t(t){try{await navigator.clipboard.writeText(t)}catch(t){}}function e(t){const e=t.match(/^http.*\/\d+/)[0];if(!e)return e;const n=e.split("//");return`${n[0]}//vx${n[1]}`}let n;chrome.storage.sync.get(["extendedOptionsState"]).then((t=>{n=t.extendedOptionsState})),chrome.storage.onChanged.addListener((function(t){for(let[e,{newValue:i}]of Object.entries(t))"extendedOptionsState"===e&&(n=i)})),setInterval((function(){setTimeout((()=>{(function(){const t=window.location.pathname.split("/");return 4===t.length&&t.includes("status")})()&&(document.querySelector("[data-vx-tweet-quotes]")||(function(){const t=document.querySelector('article[data-testid="tweet"]').firstChild.firstChild.lastChild,e=t.lastChild.className,n=document.createElement("div");n.className=e;const i=window.location.href+"/quotes",o=document.createElement("a");o.setAttribute("href",i),o.innerHTML='\n  <span class="icon"><svg viewBox="0 0 24 24" aria-hidden="true" class="r-1nao33i r-4qtqp9 r-yyyyoo r-1q142lx r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path></g></svg></span>\n  <span class="description">Quotes</span>\n  ',o.className=t.querySelector('[data-testid="retweet"]').firstChild.className,o.setAttribute("data-vx-tweet-quotes",""),o.classList.add("vx-quotes-link"),n.appendChild(o);const r=t.childNodes;r[r.length-2].firstChild.appendChild(n)}(),function(){const t="\n  .vx-quotes-link {\n    display: flex;\n    gap: 0.5rem;\n    text-decoration: none;\n  }\n\n  .vx-quotes-link .icon {\n    margin: -8px;\n    padding: 8px;\n    transition-property: background-color;\n    transition-duration: 0.2s;\n    border-radius: 9999px;\n  }\n\n  .vx-quotes-link:hover {\n    color: rgb(29, 155, 240);\n  }\n\n  .vx-quotes-link:hover .icon {\n    background-color: rgba(29, 155, 240, 0.1);\n    rgb(29, 155, 240);\n  }\n\n  .vx-quotes-link:hover .icon svg {\n    filter: invert(46%) sepia(65%) saturate(1338%) hue-rotate(179deg) brightness(100%) contrast(95%);\n  }\n  ",e=document.createElement("style");e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t)),document.getElementsByTagName("head")[0].appendChild(e)}()))}),100),document.querySelectorAll('article[data-testid="tweet"]').forEach((function(i){const o=i.querySelector('path[d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"]').parentNode.parentNode.closest('div[role="button"]');if(!o||void 0!==o.dataset.vxLinked)return;const r=[...i.querySelectorAll('a[href*="status"]')].map((function(t){return e(t.href)})).filter((function(t){return!!t}))[0];o.setAttribute("data-vx-linked",""),o.addEventListener("click",function(e){return function(){setTimeout((function(){const i=document.querySelector('#layers div:nth-of-type(1)[role="menuitem"]');let o="vx";if(n){const t=i.cloneNode(!0);t.lastChild.firstChild.innerText="Copy Raw Link",t.id="raw-link-option",r=t,(a=i).parentNode.insertBefore(r,a.nextSibling),t.addEventListener("click",(()=>{o="raw",i.click()}),!1)}var r,a;i.setAttribute("data-vx-linked",""),i.addEventListener("click",(()=>function(n){setTimeout((async function(){switch(n){case"vx":t(e);break;case"raw":t(e=function(t){const e=t.match(/^http.*\/\d+/)[0];if(!e)return e;const n=e.split("//");return`${n[0]}//${n[1].replace(/^vx/,"")}`}(e))}}),50)}(o)),!1)}),50)}}(r),!0)}))}),1e3),window.addEventListener("keydown",(function(n){const i=n.ctrlKey||n.metaKey,o="c"===n.key.toLowerCase();""===window.getSelection().toString()&&i&&o&&t(e(window.location.href))}))})();