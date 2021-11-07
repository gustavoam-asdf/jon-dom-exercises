(()=>{"use strict";var t={48:(t,e,n)=>{t.exports=n.p+"9b59a2d3e4a4aa9e500a.mp3"}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var i=e.getElementsByTagName("script");i.length&&(t=i[i.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{const t=function(){var t=document.createElement("header");return t.classList.add("main-header"),t.innerHTML="<h1>Ejercicios del DOM</h1>",t};const e=function(){function t(t){var e=t.iconType,n=t.className,i=t.id;this.self=function(t){var e,n=t.iconType,i=t.className,s=t.id,r=document.createElement("span");return s&&r.setAttribute("id",s),r.classList.add("fas"),r.classList.add(n),i&&(e=r.classList).add.apply(e,i.split(" ")),r}({iconType:e,className:n,id:i}),this.iconType=e}return t.prototype.switchIcon=function(t){this.self.classList.contains(this.iconType)?(this.self.classList.remove(this.iconType),this.self.classList.add(t)):(this.self.classList.remove(t),this.self.classList.add(this.iconType))},t}();var i="fa-bars",s="fa-times",r=function(t){var e=document.createElement("div");return e.classList.add(o.className),e.append(t.self),e},o=function(){function t(t){void 0===t&&(t=new e({iconType:i,className:"menu-button__icon"})),this.icon=t,this.self=r(this.icon)}return t.prototype.clickEvent=function(t){var e=t.menu;this.icon.switchIcon(s),e.list.self.classList.toggle("hide"),e.self.classList.toggle("hide")},t.className="menu-button",t}();const c=o;var a=function(t){var e=t.href,n=void 0===e?"#":e,i=t.innerHTML,s=document.createElement("a");return s.classList.add(l.className),s.setAttribute("href",n),s.innerHTML=i,s},l=function(){function t(t){var e=t.href,n=void 0===e?"#":e,i=t.innerHTML;this.self=a({href:n,innerHTML:i})}return t.className="menu-item",t}();const u=l;var d=function(t){var e=t.itemsList,n=document.createElement("nav");n.classList.add(h.className),n.classList.add("hide");var i=document.createDocumentFragment();return e.forEach((function(t){return i.append(t.self)})),n.append(i),n},h=function(){function t(t){var e=t.itemsList;this.itemsList=e,this.self=d({itemsList:this.itemsList})}return t.prototype.clickEvent=function(t){var e=t.icon,n=t.menu;e.switchIcon(s),this.self.classList.add("hide"),n.self.classList.add("hide")},t.className="menu-list",t}();const m=h;const p=function(t){var e=t.children,n=void 0===e?[]:e;this.children=n,this.self=function(t){var e=t.children,n=document.createDocumentFragment();return Array.isArray(e)?e.forEach((function(t){return n.appendChild(t.self)})):n.appendChild(e.self),n}({children:this.children})};var f=function(t){var e=t,n="",i=/(a|p)m/i.test(t);if(i){var s=t.split(/\s/i);e=s[0],n=s[1]}var r=e.split(":"),o=r[0],c=r[1],a=r[2],l={hours:'<span class="'+g.className+'-part hours">'+o+"</span>",minutes:'<span class="'+g.className+'-part minutes">'+c+"</span>",seconds:'<span class="'+g.className+'-part seconds">'+a+"</span>",separator:'<span class="'+g.className+'-part separator">:</span>'};return i&&(l.format='<span class="'+g.className+'-part format">'+n+"</span>"),l},v=function(t){var e=t.hours,n=t.minutes,i=t.seconds,s=t.separator,r=t.format,o=document.createElement("div");return o.classList.add(g.className),o.classList.add("hide"),o.innerHTML=""+e+s+n+s+i+(r||""),o},g=function(){function t(){this.isShown=!1,this.currTime=f((new Date).toLocaleTimeString()),this.self=v(this.currTime)}return t.prototype.update=function(){var e=this,n=f((new Date).toLocaleTimeString()),i=function(t){return e.self.querySelector(t)};n.hours!==this.currTime.hours&&(i("."+t.className+"-part.hours").outerHTML=n.hours),n.minutes!==this.currTime.minutes&&(i("."+t.className+"-part.minutes").outerHTML=n.minutes),n.seconds!==this.currTime.seconds&&(i("."+t.className+"-part.seconds").outerHTML=n.seconds),this.currTime=n},t.prototype.show=function(){this.self.classList.remove("hide"),this.isShown=!0},t.prototype.hide=function(){this.self.classList.add("hide"),this.isShown=!1},t.className="clock",t}();const L=g;var w=function(t){var e=t.text,n=document.createElement("button");return n.classList.add(y.className),n.classList.add("button"),n.innerHTML=e,n},y=function(){function t(t){var e=t.text;this.self=w({text:e})}return t.prototype.changeText=function(t){this.self.innerHTML=t},t.updater=function(t){var e=t.clock;return setInterval((function(){e.update()}),1e3)},t.className="clock-controller",t}();const N=y;var b=function(t){var e=t.controller,n=t.clock,i=document.createElement("div");return i.classList.add(E.className),i.appendChild(e.self),i.appendChild(n.self),i},E=function(){function t(){this.clock=new L,this.controller=new N({text:"Iniciar reloj"}),this.self=b({controller:this.controller,clock:this.clock})}return t.prototype.clickEvent=function(t){return!!t.target.matches("."+N.className)&&(this.clock.isShown?(this.controller.changeText("Iniciar reloj"),this.updater&&clearInterval(this.updater),this.clock.hide()):(this.controller.changeText("Detener reloj"),this.clock.update(),this.updater=N.updater({clock:this.clock}),this.clock.show()),!0)},t.className="digital-clock",t}();const T=E;var k=n(48);const M=function(){function t(t){var e=t.src;this.src=e,this.self=this.template(),this.isRinging=!1}return t.prototype.template=function(){var t=document.createElement("audio");return t.setAttribute("src",this.src),t.setAttribute("loop",""),t.volume=.4,t.innerHTML="Your browser does not support the <code>audio</code> element.",t},t.prototype.play=function(){this.self.play(),this.isRinging=!0},t.prototype.pause=function(){this.self.pause(),this.isRinging=!1},t}();const x=function(){function t(t){var e=t.audio,n=t.text;this.audio=e,this.self=this.template({text:n})}return t.prototype.template=function(e){var n=e.text,i=void 0===n?"Start":n,s=document.createElement("button");return s.classList.add(t.className),s.classList.add("button"),s.innerHTML=i,s},t.prototype.changeText=function(t){this.self.innerHTML=t},t.className="alarm-controller",t}();var A=function(){function t(){this.audio=new M({src:k}),this.controller=new x({audio:this.audio,text:"Iniciar alarma"}),this.self=this.template()}return t.prototype.clickEvent=function(t){return!!t.target.matches("."+x.className)&&(this.audio.isRinging?(this.audio.pause(),this.controller.changeText("Iniciar alarma")):(this.audio.play(),this.controller.changeText("Detener alarma")),!0)},t.prototype.template=function(){var e=document.createElement("div");e.classList.add(t.className);var n=document.createElement("figure");return n.append(this.audio.self),e.append(n),e.append(this.controller.self),e},t.className="digital-alarm",t}();const D=A,S=new p({children:[new T,new D]});const H=function(){function t(){var e=this;this.move={up:function(n){return void 0===n&&(n=t.speed),e.positionY-=n,e.updateDOMPosition(),n},down:function(n){return void 0===n&&(n=t.speed),e.positionY+=n,e.updateDOMPosition(),n},left:function(n){return void 0===n&&(n=t.speed),e.positionX-=n,e.updateDOMPosition(),n},right:function(n){return void 0===n&&(n=t.speed),e.positionX+=n,e.updateDOMPosition(),n}},this.nextMove={up:function(n){return void 0===n&&(n=t.speed),e.limits.top-n},down:function(n){return void 0===n&&(n=t.speed),e.limits.bottom+n},left:function(n){return void 0===n&&(n=t.speed),e.limits.left-n},right:function(n){return void 0===n&&(n=t.speed),e.limits.right+n}},this.positionX=0,this.positionY=0,this.self=this.template()}return Object.defineProperty(t.prototype,"limits",{get:function(){return this.self.getBoundingClientRect()},enumerable:!1,configurable:!0}),t.prototype.template=function(){var e=document.createElement("div");return e.classList.add(t.className),e},t.prototype.updateDOMPosition=function(){this.self.setAttribute("style","transform: translate("+this.positionX+"px, "+this.positionY+"px)")},t.speed=10,t.className="actor",t}();var C=function(){function t(){this.actor=new H,this.self=this.template()}return t.prototype.template=function(){var e=document.createElement("div");return e.classList.add(t.className),e.append(this.actor.self),e},Object.defineProperty(t.prototype,"limits",{get:function(){return this.self.getBoundingClientRect()},enumerable:!1,configurable:!0}),t.prototype.keyboardEvent=function(t){return!!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&("ArrowUp"===t.code?(t.preventDefault(),this.limits.top<this.actor.nextMove.up()?this.actor.move.up():this.actor.move.up(this.actor.limits.top-this.limits.top)):"ArrowDown"===t.code?(t.preventDefault(),this.limits.bottom>this.actor.nextMove.down()?this.actor.move.down():this.actor.move.down(this.limits.bottom-this.actor.limits.bottom)):"ArrowLeft"===t.code?this.limits.left<this.actor.nextMove.left()?this.actor.move.left():this.actor.move.left(this.actor.limits.left-this.limits.left):"ArrowRight"===t.code&&(this.limits.right>this.actor.nextMove.right()?this.actor.move.right():this.actor.move.right(this.limits.right-this.actor.limits.right)),!0)},t.className="stage",t}();var j=[{id:"clocks",title:"Relojes",href:"#clocks",content:S},{id:"staging",title:"Escenario",href:"#staging",content:new p({children:new C})},{id:"section-3",title:"Sección 3",href:"#section-3"},{id:"section-4",title:"Sección 4",href:"#section-4"},{id:"section-5",title:"Sección 5",href:"#section-5"},{id:"section-6",title:"Sección 6",href:"#section-6"},{id:"section-7",title:"Sección 7",href:"#section-7"}];Object.freeze(j);const I=j;var O=I.map((function(t){var e=t.title,n=t.href;return new u({href:n,innerHTML:"<strong>Sección: </strong>"+e})})),R=function(t){var e=t.list,n=document.createElement("div");return n.classList.add(P.className),n.classList.add("hide"),n.append(e.self),n},P=function(){function t(){this.list=new m({itemsList:O}),this.self=R({list:this.list})}return t.className="menu",t}();const F=P;var Y=function(t){var e=t.menu,n=t.button,i=document.createElement("div");return i.classList.add(B.className),i.append(e.self),i.append(n.self),i},B=function(){function t(){this.menu=new F,this.button=new c,this.self=Y({menu:this.menu,button:this.button})}return t.prototype.clickEvent=function(t){return t.target.matches("."+c.className)||t.target.matches("."+c.className+" *")?(this.button.clickEvent({menu:this.menu}),!0):!!t.target.matches("."+m.className+" *")&&(this.menu.list.clickEvent({icon:this.button.icon,menu:this.menu}),!0)},t.className="panel",t}();const X=B;var $=function(t){var e=t.title,n=t.id,i=document.createElement("a");return i.classList.add(U.className),i.setAttribute("href","#"+n),i.innerHTML="<h2>"+e+"</h2>",i},U=function(){function t(t){var e=t.title,n=void 0===e?"Título de sección":e,i=t.id;this.self=$({title:n,id:i})}return t.className="section-title",t}();const _=U;var q=function(t){var e=t.id,n=t.title,i=t.content,s=document.createElement("section");return s.classList.add(z.className),e&&s.setAttribute("id",e),s.appendChild(n.self),i&&s.appendChild(i.self),s},z=function(){function t(t){var e=t.id,n=t.title,i=t.content,s=void 0===i?new p({children:[]}):i;this.title=new _({id:e,title:n}),this.content=s,this.self=q({id:e,title:this.title,content:this.content})}return t.className="section",t}();const G=z;var J=I.map((function(t){var e=t.id,n=t.title,i=t.content;return new G({id:e,title:n,content:i})})),K=function(t){var e=t.sectionsList,n=document.createElement("main");n.classList.add(Q.className);var i=document.createDocumentFragment();return e.forEach((function(t){return i.appendChild(t.self)})),n.appendChild(i),n},Q=function(){function t(){this.sectionsList=J,this.self=K({sectionsList:J})}return t.className="main",t}();const V=Q;var W=I.map((function(t){var e,n,i;return Array.isArray(null===(e=t.content)||void 0===e?void 0:e.children)?null===(n=t.content)||void 0===n?void 0:n.children.map((function(t){return t})):null===(i=t.content)||void 0===i?void 0:i.children})).flat(1);const Z=function(){var e=document.createDocumentFragment(),n=new X,i=new V;return e.prepend(t()),e.append(i.self),e.append(n.self),document.addEventListener("click",(function(t){n.clickEvent(t);for(var e=0;e<W.length;e++){var i=W[e];if(i)if(i.clickEvent)if(i.clickEvent(t))break}})),document.addEventListener("keydown",(function(t){for(var e=0;e<W.length;e++){var n=W[e];if(n)if(n.keyboardEvent)if(n.keyboardEvent(t))break}})),e};document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("root"),e=Z();t.prepend(e)}))})()})();