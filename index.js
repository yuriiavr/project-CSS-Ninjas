import{y as c}from"./assets/vendor-Do8om3FS.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();document.querySelector(".burger-menu").addEventListener("click",function(){document.querySelector(".mobile-header-nav-sidebar-overlay").classList.toggle("is-open"),document.querySelector(".burger-menu").classList.toggle("is-active")});window.addEventListener("resize",function(){window.innerWidth>=1280&&(document.querySelector(".mobile-header-nav-sidebar-overlay").classList.remove("is-open"),document.querySelector(".burger-menu").classList.remove("is-active"))});document.addEventListener("DOMContentLoaded",function(){const o=document.querySelectorAll(".header-nav-link");o.forEach(n=>{n.addEventListener("click",function(i){o.forEach(r=>r.classList.remove("header-nav-link-active")),this.classList.add("header-nav-link-active")})}),window.addEventListener("scroll",function(){window.scrollY===0&&o.forEach(n=>n.classList.remove("header-nav-link-active"))})});const a=document.querySelector(".keen-slider"),d=o=>n=>{let i,r=!1;function e(){clearTimeout(i)}function t(){clearTimeout(i),!r&&(i=setTimeout(()=>{n.next()},o))}n.on("created",()=>{n.container.addEventListener("mouseover",()=>{r=!0,e()}),n.container.addEventListener("mouseout",()=>{r=!1,t()}),t()}),n.on("dragStarted",e),n.on("animationEnded",t),n.on("updated",t)};new c(a,{loop:!0,slides:{perView:1,spacing:16},breakpoints:{"(min-width: 768px)":{slides:{perView:2,spacing:32}},"(min-width: 1280px)":{slides:{perView:3,spacing:32}}}},[d(2800)]);
