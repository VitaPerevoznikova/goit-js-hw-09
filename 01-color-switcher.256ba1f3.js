!function(){var t,n=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=!1;function c(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}n.addEventListener("click",(function(){o||(t=setInterval(c,1e3),o=!0)})),e.addEventListener("click",(function(){o&&(clearInterval(t),o=!1)}))}();
//# sourceMappingURL=01-color-switcher.256ba1f3.js.map
