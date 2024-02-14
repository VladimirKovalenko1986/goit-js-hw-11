import{S as f,i as u}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const d="https://pixabay.com/api/",m="36399234-af15385039238a4844768ffbd";class h{constructor(){this.searchQuery=""}getNews(){return fetch(`${d}?key=${m}&q=${this.searchQuery}&image_type="photo"&orientation="horizontal"&safesearch=true`).then(t=>{if(!t)throw new Error(`HTTP error! Status: ${t.status}, Text: ${t.statusText}`);return t.json()})}}function y(s){return s.map(({webformatURL:t,largeImageURL:o,tags:n,likes:e,views:r,comments:a,downloads:p})=>`<li class="list-item">
          <a class="list-link" href="${o}"
            ><img class="list-img" src="${t}" alt="${n}"
          /></a>
          <div class="list-conteiner">
            <div class="list-wrappar">
              <b class="list-pretext">Likes</b>
              <p class="list-text">${e}</p>
            </div>
            <div class="list-wrappar">
              <b class="list-pretext">Views</b>
              <p class="list-text">${r}</p>
            </div>
            <div class="list-wrappar">
              <b class="list-pretext"> Comments</b>
              <p class="list-text">${a}</p>
            </div>
            <div class="list-wrappar">
              <b class="list-pretext"> Downloads</b>
              <p class="list-text">${p}</p>
            </div>
          </div>
        </li>`).join("")}let g=new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});const c=new h,i={formSearch:document.querySelector(".form"),listForm:document.querySelector(".list-form"),spinner:document.querySelector(".conteiner-loader")};i.formSearch.addEventListener("submit",w);l();function w(s){s.preventDefault(),c.searchQuery=s.currentTarget.elements.searchQuery.value.trim(),L(),b(),c.getNews(c.searchQuery).then(({hits:t,totalHits:o})=>{if(!t.length||!c.searchQuery)throw new Error("No data");l(),$(o),i.listForm.innerHTML=y(t),g.refresh()}).catch(v).finally(S)}function S(){i.formSearch.reset()}function v(s){u.error({position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),console.log("Sorry, there are no images matching your search query. Please try again!"),l()}function b(){i.listForm.innerHTML=""}function $(s){console.log(`Hooray! We found ${s} images.`),u.success({position:"topRight",title:"OK",message:`Hooray! We found ${s} images.`})}function l(){i.spinner.classList.add("hidden")}function L(){i.spinner.classList.remove("hidden")}
//# sourceMappingURL=commonHelpers.js.map
