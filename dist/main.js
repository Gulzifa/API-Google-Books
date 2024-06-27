(()=>{var t={410:()=>{document.addEventListener("DOMContentLoaded",(function(){let t=document.querySelectorAll(".slider__image"),e=document.querySelector(".slider__dots"),o=0;const n=[];function a(e){t[o].classList.remove("active-slide"),n[o].classList.remove("active-dot"),o=e,t[o].classList.add("active-slide"),n[o].classList.add("active-dot"),d(),setTimeout(i,5e3)}function c(){let e=o+1;e>=t.length&&(e=0),a(e)}let s;function i(){s=setInterval(c,5e3)}function d(){clearInterval(s)}t.forEach(((t,o)=>{let c=document.createElement("div");c.className="slider__dots-item",e.appendChild(c),n.push(c),c.addEventListener("click",(function(){a(o),d()}))})),n[0].classList.add("active-dot"),i()}))}},e={};function o(n){var a=e[n];if(void 0!==a)return a.exports;var c=e[n]={exports:{}};return t[n](c,c.exports,o),c.exports}(()=>{"use strict";o(410);const t=document.querySelector(".categories"),e=document.querySelector(".categories__burger"),n=document.querySelector(".books-wrap"),a=document.querySelector(".header__cart"),c=document.querySelector(".header__cart-counter");let s=0;const i=document.querySelectorAll(".category-link"),d=document.querySelector(".btn__load-books");let l=0,r=new Set;async function u(){async function o(t){try{const e=await fetch(`https://www.googleapis.com/books/v1/volumes?q=%22subject:${t}%22&key=AIzaSyBVpOv_v2QWwJ7tIBn0l90puNszL3MVqi8&printType=books&startIndex=${l}&maxResults=6&langRestrict=en`),o=(await e.json()).items||[];0===l&&(n.innerHTML="",r.clear()),o.forEach((t=>{r.has(t.id)||(r.add(t.id),function(t){const e=document.createElement("div");e.classList.add("book-item");const o=document.createElement("img");o.alt="Book image",o.classList.add("book-image");const a=t.volumeInfo?.imageLinks?.thumbnail||"https://www.svgrepo.com/show/508699/landscape-placeholder.svg";o.src=a,e.appendChild(o);const c=document.createElement("div");c.classList.add("book-info"),e.appendChild(c);const s=document.createElement("p");s.textContent=t.volumeInfo?.authors?t.volumeInfo.authors.join(", "):"Unknown Author",s.classList.add("book-info__autor"),c.appendChild(s);const i=document.createElement("h1");if(i.textContent=t.volumeInfo?.title||"No title",i.classList.add("book-info__title"),c.appendChild(i),t.volumeInfo?.averageRating){const e=document.createElement("div");e.classList.add("book-info__rating"),c.appendChild(e);const o=parseFloat(t.volumeInfo.averageRating),n=document.createElement("div");n.classList.add("rating-stars");const a=Math.round(o);for(let t=0;t<5;t++){const e=document.createElement("span");e.classList.add("star-element"),t<a?e.classList.add("star-filled"):e.classList.add("star-empty"),n.appendChild(e)}if(e.appendChild(n),t.volumeInfo?.ratingsCount){const o=document.createElement("p");o.classList.add("rating-count"),o.textContent=`${t.volumeInfo.ratingsCount} review${1!==t.volumeInfo.ratingsCount?"s":""}`,e.appendChild(o)}}const d=document.createElement("p");if(d.textContent=t.volumeInfo?.description||"No description",d.classList.add("book-info__description"),c.appendChild(d),t.saleInfo&&t.saleInfo.listPrice){const e=document.createElement("p");e.textContent=`${t.saleInfo.listPrice.amount} ${t.saleInfo.listPrice.currencyCode}`,e.classList.add("book-info__price"),c.appendChild(e);const o=document.createElement("button");o.textContent="Buy now",o.classList.add("book-info__buy-button"),c.appendChild(o)}n.appendChild(e)}(t))})),l+=6}catch(t){console.error("Error getting books:",t)}}function u(){document.querySelectorAll(".book-info__buy-button").forEach((t=>{t.addEventListener("click",(()=>{t.classList.add("buy-button-clicked"),s++,c.textContent=s.toString(),localStorage.setItem("cartCount",s.toString()),s>0&&(a.style.display="block")}))}))}i.forEach((t=>{t.addEventListener("click",(async e=>{e.preventDefault(),i.forEach((t=>{t.classList.remove("active")})),t.classList.add("active");const n=t.dataset.category;l=0,await o(n),u()}))})),d.addEventListener("click",(async()=>{const t=document.querySelector(".category-link.active").dataset.category;await o(t),u()})),await async function(){l=0;const t=Array.from(i).find((t=>t.classList.contains("active")));if(t){const e=t.dataset.category;await o(e)}else console.log("No active category found");u()}(),t&&e&&e.addEventListener("click",(e=>{e.preventDefault(),t.classList.toggle("show-menu")}))}document.addEventListener("DOMContentLoaded",(()=>{u();const t=document.querySelector(".header__cart-counter");let e=parseInt(localStorage.getItem("cartCount"))||0;t.textContent=e.toString(),e>0&&(a.style.display="block")}))})()})();
//# sourceMappingURL=main.js.map