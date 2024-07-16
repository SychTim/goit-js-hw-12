import{a as f,S as L,i as l}from"./assets/vendor-b0d10f48.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const b="44874409-49a696090f67a7075082072ae";f.defaults.baseURL="https://pixabay.com";async function y(r,t=1){return await f.get("/api/",{params:{key:b,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:t}})}const w=document.querySelector(".gallery"),q=new L(".gallery a");function g(r){if(r.length===0){l.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red"});return}const t=r.map(({comments:i,downloads:c,views:e,likes:s,largeImageURL:n,webformatURL:h,tags:v})=>`
        <a class="gallery-item" href="${n}">
            <img src="${h}" alt="${v}">
            <div class="inscriptions">
            <div>
                <p class="insc-name">Likes</p>
                <p class="insc-value">${s}</p>
            </div>
            <div>
                <p class="insc-name">Views</p>
                <p class="insc-value">${e}</p>
            </div>
            <div>
                <p class="insc-name">Comments</p>
                <p class="insc-value">${i}</p>
            </div>
            <div>
                <p class="insc-name">Downloads</p>
                <p class="insc-value">${c}</p>
            </div>
            </div>
        </a>`).join("");w.insertAdjacentHTML("beforeend",t),q.refresh()}const u=document.querySelector(".form"),m=document.querySelector(".gallery"),o=document.querySelector(".load-more button");u.addEventListener("submit",S);let a,d;async function S(r){r.preventDefault(),m.innerHTML='<span class="loader"></span>',o.style.display="",o.removeEventListener("click",p),d=encodeURIComponent(u.imgName.value.trim()),a=1;try{const t=await y(d);m.innerHTML="",g(t.data.hits),console.log(t),t.data.totalHits>15&&(o.style.display="inline-block",o.addEventListener("click",p))}catch(t){console.error(t),l.error({message:t.message})}finally{u.reset()}}async function p(){a+=1,console.log(a);try{const r=await y(d,a);g(r.data.hits),console.log(r);const t=document.querySelector(".gallery a").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"}),r.data.totalHits-a*15>0||(o.style.display="",o.removeEventListener("click",p),l.show({message:"We're sorry, but you've reached the end of search results."}))}catch(r){console.error(r),l.error({message:r.message})}}
//# sourceMappingURL=commonHelpers.js.map
