import{S as f,i as m}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const g="42817939-fb8caefadf90676475c3fc719",p="https://pixabay.com/api/";function d(s){const o=new URLSearchParams({key:g,q:"cat",image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}/?${o}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function h(s){return s.map(o=>{const{webformatURL:t,tags:n,largeImageURL:e,likes:r,views:i,comments:c,downloads:u}=o;return` <li class="gallery-item"> 
              <a class="gallery-link" href="${e}">
              <img  
                class="gallery-image"
                src="${t}"
                alt="${n}"
              />
            </a>
              <ul class="property-list">
    <li class="list-property-item"><strong>Likes</strong> <br> ${r}</li>
    <li class="list-property-item"><strong>Views</strong> <br> ${i}</li>
    <li class="list-property-item"><strong>Comments</strong> <br> ${c}</li>
    <li class="list-property-item"><strong>Downloads</strong> <br> ${u}</li>
  </ul>
          </li>`}).join("")}const a=document.querySelector(".js-gallery "),y=document.querySelector(".js-search-form"),b=document.querySelector(".loader");y.addEventListener("submit",L);function L(s){if(s.preventDefault(),a.innerHTML="",!s.currentTarget.elements["user-search-query"].value.trim()){l();return}d().then(t=>{if(t.hits.length===0)return $();a.innerHTML=h(t.hits)}).catch(console.log).finally(()=>l()),s.currentTarget.reset()}const w=new f(".gallery a",{captionsData:"alt",captionDelay:250});S();function S(){w.refresh()}function l(){return b.classList.add("is-hidden")}function $(){return m.error({title:"",backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",message:"Sorry, there are no images matching <br/> your search query. Please, try again!",color:"#fff",position:"topRight",progressBarColor:"#B51B1B"})}
//# sourceMappingURL=commonHelpers.js.map
