(()=>{var t={575:()=>{}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}(()=>{"use strict";async function t(t){try{await navigator.clipboard.writeText(t)}catch(t){}}var e=n(575);let r;chrome.storage.onChanged.addListener((function(t){for(let[e,{newValue:n}]of Object.entries(t))"extendedOptionsState"===e&&(r=n)})),setInterval((function(){document.querySelectorAll('article[data-testid="tweet"]').forEach((function(e){const n=e.querySelector('path[d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"]').parentNode.parentNode.closest('div[role="button"]');if(!n||void 0!==n.dataset.vxLinked)return;const i=[...e.querySelectorAll('a[href*="status"]')].map((function(t){return function(t){const e=t.match(/^http.*\/\d+/)[0];if(!e)return e;const n=e.split("//");return`${n[0]}//vx${n[1]}`}(t.href)})).filter((function(t){return!!t}))[0];n.setAttribute("data-vx-linked",""),n.addEventListener("click",function(e){return function(){setTimeout((function(){const n=document.querySelector('#layers div:nth-of-type(1)[role="menuitem"]');let i="vx";if(r){const t=n.cloneNode(!0);t.lastChild.firstChild.innerText="Copy Raw Link",t.id="raw-link-option",o=t,(c=n).parentNode.insertBefore(o,c.nextSibling),t.addEventListener("click",(()=>{i="raw",n.click()}),!1)}var o,c;n.setAttribute("data-vx-linked",""),n.addEventListener("click",(()=>function(n){setTimeout((async function(){switch(n){case"vx":t(e);break;case"raw":t(e=function(t){const e=t.match(/^http.*\/\d+/)[0];if(!e)return e;const n=e.split("//");return`${n[0]}//${n[1].replace(/^vx/,"")}`}(e))}}),50)}(i)),!1)}),50)}}(i),!0)}))}),1e3),window.addEventListener("keydown",e.handleKeyDown)})()})();