import{S as f,i as d}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const h="https://pixabay.com/api/",m="36399234-af15385039238a4844768ffbd";class y{constructor(){this.searchQuery=""}getNews(){return fetch(`${h}?key=${m}&q=${this.searchQuery}&image_type="photo"&orientation="horizontal"&safesearch=true`).then(t=>{if(!t)throw new Error(`HTTP error! Status: ${t.status}, Text: ${t.statusText}`);return t.json()})}}function g(s){return s.map(({webformatURL:t,largeImageURL:a,tags:n,likes:e,views:r,comments:o,downloads:p})=>`<li class="list-item">
          <a class="list-link" href="${a}"
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
              <p class="list-text">${o}</p>
            </div>
            <div class="list-wrappar">
              <b class="list-pretext"> Downloads</b>
              <p class="list-text">${p}</p>
            </div>
          </div>
        </li>`).join("")}let w=new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});const c=new y,i={formSearch:document.querySelector(".form"),listForm:document.querySelector(".list-form"),spinner:document.querySelector(".conteiner-loader")};i.formSearch.addEventListener("submit",S);l();function S(s){s.preventDefault(),c.searchQuery=s.currentTarget.elements.searchQuery.value.trim(),u(),L(),c.getNews(c.searchQuery).then(({hits:t,totalHits:a})=>{if(!t.length||!c.searchQuery)throw new Error("No data");l(),i.listForm.innerHTML=g(t),w.refresh()}).catch(b).finally(v)}function v(){i.formSearch.reset()}function b(s){d.error({position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),console.log("Sorry, there are no images matching your search query. Please try again!"),u()}function L(){i.listForm.innerHTML=""}function l(){i.spinner.classList.add("hidden")}function u(){i.spinner.classList.remove("hidden")}
//# sourceMappingURL=commonHelpers.js.map
