(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const u="https://pixabay.com/api/",l="36399234-af15385039238a4844768ffbd";class f{constructor(){this.searchQuery=""}getNews(){return fetch(`${u}?key=${l}&q=${this.searchQuery}&image_type="photo"&orientation="horizontal"&safesearch=true`).then(t=>{if(!t)throw new Error(`HTTP error! Status: ${t.status}, Text: ${t.statusText}`);return t.json()})}}const c=new f,a={formSearch:document.querySelector(".form"),listForm:document.querySelector(".list-form")};a.formSearch.addEventListener("submit",h);function h(o){o.preventDefault(),c.searchQuery=o.currentTarget.elements.searchQuery.value.trim(),c.getNews(c.searchQuery).then(({hits:t,totalHits:n})=>{console.log(t)}).catch(t=>console.log(t)).finally(d)}function d(){a.formSearch.reset()}
//# sourceMappingURL=commonHelpers.js.map
