import{S as p,i as f}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d="42817939-fb8caefadf90676475c3fc719",h="https://pixabay.com/api/";function y(o){const t=new URLSearchParams({key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${h}/?${t}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function L(o){return o.map(t=>{const{webformatURL:s,tags:n,largeImageURL:e,likes:r,views:i,comments:m,downloads:g}=t;return` <li class="gallery-item"> 
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
    <li class="list-property-item"><strong>Comments</strong> <br> ${m}</li>
    <li class="list-property-item"><strong>Downloads</strong> <br> ${g}</li>
  </ul>
          </li>`}).join("")}let l;const a=document.querySelector(".js-gallery "),b=document.querySelector(".js-search-form"),u=document.querySelector(".loader");b.addEventListener("submit",w);function w(o){if(o.preventDefault(),a.innerHTML="",C(),l=o.currentTarget.elements["user-search-query"].value.trim(),!l){P(),c();return}y(l).then(t=>{if(t.hits.length===0)return $();a.innerHTML=L(t.hits),B()}).catch(console.log).finally(()=>c()),o.currentTarget.reset()}const S=new p(".gallery a",{captionsData:"alt",captionDelay:250});function B(){S.refresh()}function C(){return u.classList.remove("is-hidden")}function c(){return u.classList.add("is-hidden")}function P(){return f.error({title:"",backgroundColor:"#c55f5f",titleColor:"#fff",messageColor:"#fff",message:"Please write your request",color:"#fff",position:"topRight",progressBarColor:"#B51B1B"})}function $(){return f.error({title:"",backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",message:"Sorry, there are no images matching <br/> your search query. Please, try again!",color:"#fff",position:"topRight",progressBarColor:"#B51B1B"})}
//# sourceMappingURL=commonHelpers.js.map
