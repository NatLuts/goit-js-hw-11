import{S as g,i as d}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p="42817939-fb8caefadf90676475c3fc719",h="https://pixabay.com/api/";function y(o){const t=new URLSearchParams({key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${h}/?${t}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function L(o){return o.map(t=>{const{webformatURL:s,tags:n,largeImageURL:e,likes:r,views:i,comments:f,downloads:m}=t;return` <li class="gallery-item"> 
              <a class="gallery-link" href="${e}">
              <img  
                class="gallery-image"
                src="${s}"
                alt="${n}"
              />
            </a>
              <ul class="property-list">
    <li class="list-property-item"><strong>Likes</strong> <br> ${r}</li>
    <li class="list-property-item"><strong>Views</strong> <br> ${i}</li>
    <li class="list-property-item"><strong>Comments</strong> <br> ${f}</li>
    <li class="list-property-item"><strong>Downloads</strong> <br> ${m}</li>
  </ul>
          </li>`}).join("")}let a;const l=document.querySelector(".js-gallery "),b=document.querySelector(".js-search-form"),u=document.querySelector(".loader");b.addEventListener("submit",w);function w(o){if(o.preventDefault(),l.innerHTML="",P(),a=o.currentTarget.elements["user-search-query"].value.trim(),!a){c();return}y(a).then(t=>{if(t.hits.length===0)return v();l.innerHTML=L(t.hits),$()}).catch(console.log).finally(()=>c()),o.currentTarget.reset()}const S=new g(".gallery a",{captionsData:"alt",captionDelay:250});function $(){S.refresh()}function P(){return u.classList.remove("is-hidden")}function c(){return u.classList.add("is-hidden")}function v(){return d.error({title:"",backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",message:"Sorry, there are no images matching <br/> your search query. Please, try again!",color:"#fff",position:"topRight",progressBarColor:"#B51B1B"})}
//# sourceMappingURL=commonHelpers.js.map
