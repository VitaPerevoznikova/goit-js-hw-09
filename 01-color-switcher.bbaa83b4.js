const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let o,n=!1;function r(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(()=>{n||(o=setInterval(r,1e3),n=!0)})),e.addEventListener("click",(()=>{n&&(clearInterval(o),n=!1)}));
//# sourceMappingURL=01-color-switcher.bbaa83b4.js.map
