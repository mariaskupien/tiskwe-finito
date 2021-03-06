!function(e,t){"use strict";
var n=function(){var t=e.createElement("dummy").style,n="Webkit Moz O ms Khtml".split(" "),
r={};return function(e){if("undefined"==typeof r[e]){var a=e.charAt(0).toUpperCase()+e.substr(1),
i=(e+" "+n.join(a+" ")+a).split(" ");r[e]=null;for(var s in i)if(void 0!==t[i[s]]){r[e]=i[s];break}}return r[e]}}(),
r=function(e){return[].slice.call(e)},a=function(e,t){var r,a;for(r in t)t.hasOwnProperty(r)&&(a=n(r),
null!==a&&(e.style[a]=t[r]));return e},
i=function(e,t){return isNaN(e)?t||0:Number(e)},s=function(t){return e.getElementById(t)},
o=function(t,n){return n=n||e,n.querySelector(t)},l=function(t,n){return n=n||e,r(n.querySelectorAll(t))},
c=function(t,n,r){var a=e.createEvent("CustomEvent");a.initCustomEvent(n,!0,!0,r),t.dispatchEvent(a)},
u=function(e){return" translate3d("+e.x+"px,"+e.y+"px,"+e.z+"px) "},
d=function(e,t){var n=" rotateX("+e.x+"deg) ",
r=" rotateY("+e.y+"deg) ",a=" rotateZ("+e.z+"deg) ";
return t?a+r+n:n+r+a},p=function(e){return" scale("+e+") "},
m=function(e){return" perspective("+e+"px) "},f=function(){return s(t.location.hash.replace(/^#\/?/,""))},
v=function(e){var n=t.innerHeight/e.height,r=t.innerWidth/e.width,
a=n>r?r:n;return e.maxScale&&a>e.maxScale&&(a=e.maxScale),e.minScale&&a<e.minScale&&(a=e.minScale),a},
h=e.body,y=navigator.userAgent.toLowerCase(),g=null!==n("perspective")&&h.classList&&h.dataset&&-1===y.search(/(iphone)|(ipod)|(android)/);
g?(h.classList.remove("impress-not-supported"),h.classList.add("impress-supported")):h.className+=" impress-not-supported ";
var x={},L={width:1024,height:768,maxScale:1,minScale:0,perspective:1e3,transitionDuration:1e3},E=function(){return!1},
S=t.impress=function(n){if(!g)return{init:E,"goto":E,prev:E,next:E};if(n=n||"impress",x["impress-root-"+n])return x["impress-root-"+n];
var y={},S=null,k=null,w=null,C=null,z=null,b=s(n),D=e.createElement("div"),N=!1,A=null,K=function(e){A!==e&&(c(e,"impress:stepenter"),A=e)},
O=function(e){A===e&&(c(e,"impress:stepleave"),A=null)},T=function(e,t){var n=e.dataset,
r={translate:{x:i(n.x),y:i(n.y),z:i(n.z)},rotate:{x:i(n.rotateX),y:i(n.rotateY),z:i(n.rotateZ||n.rotate)},scale:i(n.scale,1),el:e};
e.id||(e.id="step-"+(t+1)),y["impress-"+e.id]=r,a(e,{position:"absolute",transform:"translate(-50%,-50%)"+u(r.translate)+d(r.rotate)+p(r.scale),
transformStyle:"preserve-3d"})},W=function(){if(!N){var t=o("meta[name='viewport']")||e.createElement("meta");
t.content="width=device-width, minimum-scale=1, maximum-scale=1, user-scalable=no",t.parentNode!==e.head&&(t.name="viewport",
e.head.appendChild(t));var s=b.dataset;C={width:i(s.width,L.width),height:i(s.height,L.height),
maxScale:i(s.maxScale,L.maxScale),minScale:i(s.minScale,L.minScale),perspective:i(s.perspective,L.perspective),
transitionDuration:i(s.transitionDuration,L.transitionDuration)},z=v(C),r(b.childNodes).forEach(function(e){D.appendChild(e)}),
b.appendChild(D),e.documentElement.style.height="100%",a(h,{height:"100%",overflow:"hidden"});
var u={position:"absolute",transformOrigin:"top left",transition:"all 0s ease-in-out",transformStyle:"preserve-3d"};
a(b,u),a(b,{top:"50%",left:"50%",transform:m(C.perspective/z)+p(z)}),a(D,u),h.classList.remove("impress-disabled"),
h.classList.add("impress-enabled"),w=l(".step",b),w.forEach(T),k={translate:{x:0,y:0,z:0},rotate:{x:0,y:0,z:0},scale:1},
N=!0,c(b,"impress:init",{api:x["impress-root-"+n]})}},q=function(e){return"number"==typeof e?e=0>e?w[w.length+e]:w[e]:"string"==typeof e&&(e=s(e)),
e&&e.id&&y["impress-"+e.id]?e:null},I=null,X=function(e,n){if(!N||!(e=q(e)))return!1;t.scrollTo(0,0);var r=y["impress-"+e.id];
S&&(S.classList.remove("active"),h.classList.remove("impress-on-"+S.id)),e.classList.add("active"),h.classList.add("impress-on-"+e.id);
var s={rotate:{x:-r.rotate.x,y:-r.rotate.y,z:-r.rotate.z},translate:{x:-r.translate.x,y:-r.translate.y,z:-r.translate.z},scale:1/r.scale},
o=s.scale>=k.scale;n=i(n,C.transitionDuration);var l=n/2;e===S&&(z=v(C));var c=s.scale*z;return S&&S!==e&&O(S),
a(b,{transform:m(C.perspective/c)+p(c),transitionDuration:n+"ms",transitionDelay:(o?l:0)+"ms"}),a(D,{transform:d(s.rotate,!0)+u(s.translate),
transitionDuration:n+"ms",transitionDelay:(o?0:l)+"ms"}),(k.scale===s.scale||k.rotate.x===s.rotate.x&&k.rotate.y===s.rotate.y&&k.
rotate.z===s.rotate.z&&k.translate.x===s.translate.x&&k.translate.y===s.translate.y&&k.translate.z===s.translate.z)&&
(l=0),k=s,S=e,t.clearTimeout(I),I=t.setTimeout(function(){K(S)},n+l),e},
B=function(){var e=w.indexOf(S)-1;return e=e>=0?w[e]:w[w.length-1],X(e)},P=function(){var e=w.indexOf(S)+1;
return e=e<w.length?w[e]:w[0],X(e)};return b.addEventListener("impress:init",function(){w.forEach(function(e){e.classList.add("future")}),
b.addEventListener("impress:stepenter",function(e){e.target.classList.remove("past"),e.target.classList.remove("future"),
e.target.classList.add("present")},!1),b.addEventListener("impress:stepleave",function(e){e.target.classList.remove("present"),
e.target.classList.add("past")},!1)},!1),b.addEventListener("impress:init",function(){var e="";
b.addEventListener("impress:stepenter",function(n){t.location.hash=e="#/"+n.target.id},!1),
t.addEventListener("hashchange",function(){t.location.hash!==e&&X(f())},!1),X(f()||w[0],0)},!1),h.classList.add("impress-disabled"),
x["impress-root-"+n]={init:W,"goto":X,next:P,prev:B}};S.supported=g}(document,window),function(e,t){"use strict";
var n=function(e,t){var n=null;return function(){var r=this,a=arguments;clearTimeout(n),
n=setTimeout(function(){e.apply(r,a)},t)}};e.addEventListener("impress:init",function(r){var a=r.detail.api;
e.addEventListener("keydown",function(e){(9===e.keyCode||e.keyCode>=32&&e.keyCode<=34||e.keyCode>=37&&e.keyCode<=40)&&e.preventDefault()},
!1),e.addEventListener("keyup",function(e){if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey)&&(9===e.keyCode||e.keyCode>=32&&e.keyCode<=34||e.keyCode>=37&&e.keyCode<=40)){switch(e.keyCode){case 33:case 37:case 38:a.prev();break;case 9:case 32:case 34:case 39:case 40:a.next()}e.preventDefault()}},!1),
e.addEventListener("click",function(t){for(var n=t.target;"A"!==n.tagName&&n!==e.documentElement;)n=n.parentNode;
if("A"===n.tagName){var r=n.getAttribute("href");r&&"#"===r[0]&&(n=e.getElementById(r.slice(1)))}a["goto"](n)&&(t.stopImmediatePropagation(),
t.preventDefault())},!1),e.addEventListener("click",function(t){for(var n=t.target;(!n.classList.contains("step")||n.classList.contains("active"))&&n!==e.documentElement;)n=n.parentNode;a["goto"](n)&&t.preventDefault()},!1),
e.addEventListener("touchstart",function(e){if(1===e.touches.length)
{var n=e.touches[0].clientX,r=.3*t.innerWidth,i=null;
r>n?i=a.prev():n>t.innerWidth-r&&(i=a.next()),i&&e.preventDefault()}},!1),
t.addEventListener("resize",n(function(){a["goto"](e.querySelector(".step.active"),500)},250),!1)},!1)}(document,window);
