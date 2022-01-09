var ct=Object.defineProperty;var tt=Object.getOwnPropertySymbols;var rt=Object.prototype.hasOwnProperty,ot=Object.prototype.propertyIsEnumerable;var D=(i,t,e)=>t in i?ct(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,et=(i,t)=>{for(var e in t||(t={}))rt.call(t,e)&&D(i,e,t[e]);if(tt)for(var e of tt(t))ot.call(t,e)&&D(i,e,t[e]);return i};var s=(i,t,e)=>(D(i,typeof t!="symbol"?t+"":t,e),e);import{h as u}from"./vendor.e55d6dd0.js";const lt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function e(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerpolicy&&(c.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?c.credentials="include":n.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(n){if(n.ep)return;n.ep=!0;const c=e(n);fetch(n.href,c)}};lt();const ut=()=>{const i=document.createElement("header");return i.classList.add("main-header"),i.innerHTML="<h1>Ejercicios del DOM</h1>",i},dt=({iconType:i,className:t,id:e})=>{const a=document.createElement("span");return e&&a.setAttribute("id",e),a.classList.add("fas"),a.classList.add(i),t&&a.classList.add(...t.split(" ")),a};class ht{constructor({iconType:t,className:e,id:a}){s(this,"self");s(this,"iconType");this.self=dt({iconType:t,className:e,id:a}),this.iconType=t}switchIcon(t){this.self.classList.contains(this.iconType)?(this.self.classList.remove(this.iconType),this.self.classList.add(t)):(this.self.classList.remove(t),this.self.classList.add(this.iconType))}}const P={hamburger:"fa-bars",cross:"fa-times"},mt=i=>{const t=document.createElement("div");return t.classList.add(m.className),t.append(i.self),t};class m{constructor(t=new ht({iconType:P.hamburger,className:"menu-button__icon"})){s(this,"self");s(this,"icon");this.icon=t,this.self=mt(this.icon)}clickEvent({menu:t}){this.icon.switchIcon(P.cross),t.list.self.classList.toggle("hide"),t.self.classList.toggle("hide")}}s(m,"className","menu-button");const pt=({href:i="#",innerHTML:t})=>{const e=document.createElement("a");return e.classList.add(K.className),e.setAttribute("href",i),e.innerHTML=t,e};class K{constructor({href:t="#",innerHTML:e}){s(this,"self");this.self=pt({href:t,innerHTML:e})}}s(K,"className","menu-item");const ft=({itemsList:i})=>{const t=document.createElement("nav");t.classList.add(y.className),t.classList.add("hide");const e=document.createDocumentFragment();return i.forEach(a=>e.append(a.self)),t.append(e),t};class y{constructor({itemsList:t}){s(this,"self");s(this,"itemsList");this.itemsList=t,this.self=ft({itemsList:this.itemsList})}clickEvent({icon:t,menu:e}){t.switchIcon(P.cross),this.self.classList.add("hide"),e.self.classList.add("hide")}}s(y,"className","menu-list");const gt=({children:i})=>{const t=document.createDocumentFragment();return Array.isArray(i)?i.forEach(e=>t.appendChild(e.self)):t.appendChild(i.self),t};class p{constructor({children:t=[]}){s(this,"self");s(this,"children");this.children=t,this.self=gt({children:this.children})}}const b=(i,t)=>i.querySelector(t),st=i=>{let t=i,e="";const a=/(a|p)m/i.test(i);if(a){const[I,w]=i.split(/\s/i);t=I,e=w}const[n,c,l]=t.split(":"),L={hours:`<span class="${o.className}-part hours">${n}</span>`,minutes:`<span class="${o.className}-part minutes">${c}</span>`,seconds:`<span class="${o.className}-part seconds">${l}</span>`,separator:`<span class="${o.className}-part separator">:</span>`};return a&&(L.format=`<span class="${o.className}-part format">${e}</span>`),L},vt=({hours:i,minutes:t,seconds:e,separator:a,format:n})=>{const c=document.createElement("div");return c.classList.add(o.className),c.classList.add("hide"),c.innerHTML=`${i}${a}${t}${a}${e}${n||""}`,c},v=class{constructor(){s(this,"self");s(this,"currTime");s(this,"isShown");this.isShown=!1,this.currTime=st(new Date().toLocaleTimeString()),this.self=vt(this.currTime)}update(){const t=st(new Date().toLocaleTimeString());t.hours!==this.currTime.hours&&(b(this.self,`.${v.className}-part.hours`).outerHTML=t.hours),t.minutes!==this.currTime.minutes&&(b(this.self,`.${v.className}-part.minutes`).outerHTML=t.minutes),t.seconds!==this.currTime.seconds&&(b(this.self,`.${v.className}-part.seconds`).outerHTML=t.seconds),this.currTime=t}show(){this.self.classList.remove("hide"),this.isShown=!0}hide(){this.self.classList.add("hide"),this.isShown=!1}};let o=v;s(o,"className","clock");const Lt=({text:i})=>{const t=document.createElement("button");return t.classList.add(f.className),t.classList.add("button"),t.innerHTML=i,t};class f{constructor({text:t}){s(this,"self");this.self=Lt({text:t})}changeText(t){this.self.innerHTML=t}static updater({clock:t}){return setInterval(()=>{t.update()},1e3)}}s(f,"className","clock-controller");const wt=({controller:i,clock:t})=>{const e=document.createElement("div");return e.classList.add(B.className),e.appendChild(i.self),e.appendChild(t.self),e};class B{constructor(){s(this,"self");s(this,"controller");s(this,"clock");s(this,"updater");this.clock=new o,this.controller=new f({text:"Iniciar reloj"}),this.self=wt({controller:this.controller,clock:this.clock})}clickEvent(t){return t.target.matches(`.${f.className}`)?(this.clock.isShown?(this.controller.changeText("Iniciar reloj"),this.updater&&clearInterval(this.updater),this.clock.hide()):(this.controller.changeText("Detener reloj"),this.clock.update(),this.updater=f.updater({clock:this.clock}),this.clock.show()),!0):!1}}s(B,"className","digital-clock");var yt="/jon-dom-exercises/assets/alarm.5506f6f7.mp3";class bt{constructor({src:t}){s(this,"self");s(this,"src");s(this,"isRinging");this.src=t,this.self=this.template(),this.isRinging=!1}template(){const t=document.createElement("audio");return t.setAttribute("src",this.src),t.setAttribute("loop",""),t.volume=.4,t.innerHTML="Your browser does not support the <code>audio</code> element.",t}play(){this.self.play(),this.isRinging=!0}pause(){this.self.pause(),this.isRinging=!1}}const V=class{constructor({audio:t,text:e}){s(this,"self");s(this,"audio");this.audio=t,this.self=this.template({text:e})}template({text:t="Start"}){const e=document.createElement("button");return e.classList.add(V.className),e.classList.add("button"),e.innerHTML=t,e}changeText(t){this.self.innerHTML=t}};let $=V;s($,"className","alarm-controller");const W=class{constructor(){s(this,"self");s(this,"controller");s(this,"audio",new bt({src:yt}));this.controller=new $({audio:this.audio,text:"Iniciar alarma"}),this.self=this.template()}clickEvent(t){return t.target.matches(`.${$.className}`)?(this.audio.isRinging?(this.audio.pause(),this.controller.changeText("Iniciar alarma")):(this.audio.play(),this.controller.changeText("Detener alarma")),!0):!1}template(){const t=document.createElement("div");t.classList.add(W.className);const e=document.createElement("figure");return e.append(this.audio.self),t.append(e),t.append(this.controller.self),t}};let O=W;s(O,"className","digital-alarm");var $t=new p({children:[new B,new O]});const r=class{constructor(){s(this,"self");s(this,"move",{up:(t=r.speed)=>(this.positionY-=t,this.updateDOMPosition(),t),down:(t=r.speed)=>(this.positionY+=t,this.updateDOMPosition(),t),left:(t=r.speed)=>(this.positionX-=t,this.updateDOMPosition(),t),right:(t=r.speed)=>(this.positionX+=t,this.updateDOMPosition(),t)});s(this,"nextMove",{up:(t=r.speed)=>this.limits.top-t,down:(t=r.speed)=>this.limits.bottom+t,left:(t=r.speed)=>this.limits.left-t,right:(t=r.speed)=>this.limits.right+t});s(this,"positionX",0);s(this,"positionY",0);this.self=this.template()}get limits(){return this.self.getBoundingClientRect()}template(){const t=document.createElement("div");return t.classList.add(r.className),t}updateDOMPosition(){this.self.setAttribute("style",`transform: translate(${this.positionX}px, ${this.positionY}px)`)}};let E=r;s(E,"speed",10),s(E,"className","actor");const G=class{constructor(){s(this,"self");s(this,"actor");this.actor=new E,this.self=this.template()}template(){const t=document.createElement("div");return t.classList.add(G.className),t.append(this.actor.self),t}get limits(){return this.self.getBoundingClientRect()}keyboardEvent(t){return["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)?(t.code==="ArrowUp"?(t.preventDefault(),this.limits.top<this.actor.nextMove.up()?this.actor.move.up():this.actor.move.up(this.actor.limits.top-this.limits.top)):t.code==="ArrowDown"?(t.preventDefault(),this.limits.bottom>this.actor.nextMove.down()?this.actor.move.down():this.actor.move.down(this.limits.bottom-this.actor.limits.bottom)):t.code==="ArrowLeft"?this.limits.left<this.actor.nextMove.left()?this.actor.move.left():this.actor.move.left(this.actor.limits.left-this.limits.left):t.code==="ArrowRight"&&(this.limits.right>this.actor.nextMove.right()?this.actor.move.right():this.actor.move.right(this.limits.right-this.actor.limits.right)),!0):!1}};let S=G;s(S,"className","stage");var Et=new p({children:new S});const J=class{constructor({actionName:t,keyCombination:e,action:a}){s(this,"self");s(this,"keyCombination");s(this,"action");this.keyCombination=e,this.self=this.template(t,this.keyCombination),this.action=a}template(t,e){const a=document.createElement("div");return a.classList.add(J.className),a.innerHTML=`
      <div class="keys"> ${e.representation} </div>
      <span class="action">${t}</span>
    `,a}};let g=J;s(g,"className","shortcut");class k{constructor(t,e,a){s(this,"auxKeys");s(this,"key");s(this,"code");s(this,"separator","<span class='separator'>\uF44D</span>");this.key=t,this.code=e,this.auxKeys=et({meta:!1,ctrl:!1,shift:!1,alt:!1},a)}printKey(t){return`<span class="key">${t}</span>`}get representation(){return`
      ${this.auxKeys.meta?`${this.printKey("win")}${this.separator}`:""}
      ${this.auxKeys.ctrl?`${this.printKey("ctrl")}${this.separator}`:""}
      ${this.auxKeys.shift?`${this.printKey("shift")}${this.separator}`:""}
      ${this.auxKeys.alt?`${this.printKey("alt")}${this.separator}`:""}
      ${this.printKey(this.key)}
    `.trim()}compare(t){return this.auxKeys.meta===t.auxKeys.meta&&this.auxKeys.ctrl===t.auxKeys.ctrl&&this.auxKeys.shift===t.auxKeys.shift&&this.auxKeys.alt===t.auxKeys.alt&&this.code===t.code}}const F=[new g({actionName:"Do something",keyCombination:new k("v","KeyV",{ctrl:!0,shift:!0}),action(){window.alert("Do something")}}),new g({actionName:"Do something else",keyCombination:new k("w","KeyW",{ctrl:!0,alt:!0}),action(){window.alert("Do something else")}}),new g({actionName:"Do this",keyCombination:new k("c","KeyC",{ctrl:!0,alt:!0}),action(){window.alert("Do this")}})];Object.freeze(F);const Q=class{constructor(){s(this,"self");s(this,"clickEvent");this.self=this.template()}template(){const t=document.createElement("div");t.classList.add(Q.className);const e=F,a=document.createDocumentFragment();return a.append(...e.map(n=>n.self)),t.append(a),t}keyboardEvent(t){const{metaKey:e,ctrlKey:a,shiftKey:n,altKey:c,code:l}=t,L={meta:e,ctrl:a,shift:n,alt:c},I=new k("",l,L),w=F.find(nt=>nt.keyCombination.compare(I));return w?(w.action(),!0):!1}};let H=Q;s(H,"className","shortcuts-box");var kt=new p({children:new H});const d=class{constructor(){s(this,"self");s(this,"date");s(this,"usable",!1);this.self=this.template()}get value(){var t;if(!!this.usable)return(t=this.date)==null?void 0:t.value}template(){const t=document.createElement("div");t.classList.add(`${d.className}__date`);const e=document.createElement("label");e.innerText="Fecha:",e.setAttribute("for",d.inputId);const a=document.createElement("input");return a.setAttribute("type",d.inputId),a.setAttribute("name",d.inputId),a.setAttribute("id",d.inputId),t.appendChild(e),t.appendChild(a),this.date=a,this.date.addEventListener("change",()=>{this.usable=!0},{once:!0}),t}};let N=d;s(N,"className","date-target__date"),s(N,"inputId","date");const h=class{constructor(){s(this,"self");s(this,"time");s(this,"usable",!1);this.self=this.template()}get value(){var t;if(!!this.usable)return(t=this.time)==null?void 0:t.value}template(){const t=document.createElement("div");t.classList.add(`${h.className}__date`);const e=document.createElement("label");e.innerText="Hora:",e.setAttribute("for",h.inputId);const a=document.createElement("input");return a.setAttribute("type",h.inputId),a.setAttribute("name",h.inputId),a.setAttribute("id",h.inputId),t.appendChild(e),t.appendChild(a),this.time=a,this.time.addEventListener("change",()=>{this.usable=!0},{once:!0}),t}};let x=h;s(x,"className","date-target__time"),s(x,"inputId","time");const Z=class{constructor(){s(this,"self");s(this,"dateBox");s(this,"timeBox");this.dateBox=new N,this.timeBox=new x,this.self=this.template()}get usable(){return this.dateBox.usable&&this.timeBox.usable}get value(){var t,e,a;if(!this.usable)throw new Error("DatetimeTarget is not usable");return u(((e=(t=this.dateBox)==null?void 0:t.value)==null?void 0:e.split("/").reverse().join("-"))+" "+((a=this.timeBox)==null?void 0:a.value))}template(){const t=document.createElement("div");return t.classList.add(Z.className),t.appendChild(this.dateBox.self),t.appendChild(this.timeBox.self),t}};let T=Z;s(T,"className","date-target"),s(T,"inputId","dateTarget");function it(i,t){const e=t>i?u.duration(t.diff(i)):u.duration(i.diff(t));return{remaining:t>i,years:e.years(),months:e.months(),days:e.days(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds()}}const A=class{constructor(t){s(this,"self");s(this,"dtTarget");s(this,"dtDifference");this.dtTarget=t,this.dtDifference=it(u(),t),this.self=this.template(this.dtDifference)}update(){const t=this.dtDifference,e=it(u(),u(this.dtTarget)),a=this.messageParts(e);Object.keys(a).forEach(n=>{t[n]!==e[n]&&(b(this.self,`.${n}`).textContent=a[n])}),this.dtDifference=e}template(t){const e=document.createElement("p");e.classList.add(A.className);const a=this.messageParts(t);return e.innerHTML=Object.keys(a).map(n=>this.printPart(n,a[n])).join(""),e}messageParts(t){return{remaining:t.remaining?"Faltan: ":"Pasaron: ",years:`${t.years} a\xF1os`,months:`${t.months} meses`,days:`${t.days} d\xEDas`,hours:`${t.hours} horas`,minutes:`${t.minutes} minutos`,seconds:`${t.seconds} segundos`}}printPart(t,e){return`<span class="${A.classPart} ${t}">${e}</span>`}};let M=A;s(M,"className","time-diff-message"),s(M,"classPart","diff-message-part");function Nt(i){return setInterval(()=>{i.update()},1e3)}const _=class{constructor(){s(this,"self");s(this,"dateTarget");s(this,"message");s(this,"updater");this.dateTarget=new T,this.message=new M(u()),this.self=this.template()}changeEvent(t){return this.dateTarget.dateBox.date===t.target||this.dateTarget.timeBox.time===t.target?(this.dateTarget.usable&&(this.updater&&clearInterval(this.updater),this.message.dtTarget=this.dateTarget.value,this.message.update(),this.updater=Nt(this.message)),!0):!1}template(){const t=document.createElement("div");return t.classList.add(_.className),t.appendChild(this.dateTarget.self),t.appendChild(this.message.self),this.message.update(),t}};let j=_;s(j,"className","countdown");var xt=new p({children:new j});const C=[{id:"clocks",title:"Relojes",href:"#clocks",content:$t},{id:"staging",title:"Escenario",href:"#staging",content:Et},{id:"shortcuts",title:"Atajos de teclado",href:"#shortcuts",content:kt},{id:"countdown",title:"Cuenta regresiva",href:"#countdown",content:xt},{id:"section-5",title:"Secci\xF3n 5",href:"#section-5"},{id:"section-6",title:"Secci\xF3n 6",href:"#section-6"},{id:"section-7",title:"Secci\xF3n 7",href:"#section-7"}];Object.freeze(C);const Tt=C.map(({title:i,href:t})=>new K({href:t,innerHTML:`<strong>Secci\xF3n: </strong>${i}`})),Mt=({list:i})=>{const t=document.createElement("div");return t.classList.add(R.className),t.classList.add("hide"),t.append(i.self),t};class R{constructor(){s(this,"self");s(this,"list");this.list=new y({itemsList:Tt}),this.self=Mt({list:this.list})}}s(R,"className","menu");const Ct=({menu:i,button:t})=>{const e=document.createElement("div");return e.classList.add(Y.className),e.append(i.self),e.append(t.self),e};class Y{constructor(){s(this,"self");s(this,"menu");s(this,"button");this.menu=new R,this.button=new m,this.self=Ct({menu:this.menu,button:this.button})}clickEvent(t){return t.target.matches(`.${m.className}`)||t.target.matches(`.${m.className} *`)?(this.button.clickEvent({menu:this.menu}),!0):t.target.matches(`.${y.className} *`)?(this.menu.list.clickEvent({icon:this.button.icon,menu:this.menu}),!0):!1}}s(Y,"className","panel");const At=({title:i,id:t})=>{const e=document.createElement("a");return e.classList.add(X.className),e.setAttribute("href",`#${t}`),e.innerHTML=`<h2>${i}</h2>`,e};class X{constructor({title:t="T\xEDtulo de secci\xF3n",id:e}){s(this,"self");this.self=At({title:t,id:e})}}s(X,"className","section-title");const It=({id:i,title:t,content:e})=>{const a=document.createElement("section");return a.classList.add(z.className),i&&a.setAttribute("id",i),a.appendChild(t.self),e&&a.appendChild(e.self),a};class z{constructor({id:t,title:e,content:a=new p({children:[]})}){s(this,"self");s(this,"title");s(this,"content");this.title=new X({id:t,title:e}),this.content=a,this.self=It({id:t,title:this.title,content:this.content})}}s(z,"className","section");const at=C.map(({id:i,title:t,content:e})=>new z({id:i,title:t,content:e})),Dt=({sectionsList:i})=>{const t=document.createElement("main");t.classList.add(q.className);const e=document.createDocumentFragment();return i.forEach(a=>e.appendChild(a.self)),t.appendChild(e),t};class q{constructor(){s(this,"self");s(this,"sectionsList");this.sectionsList=at,this.self=Dt({sectionsList:at})}}s(q,"className","main");const U=C.map(i=>{var t,e,a;return Array.isArray((t=i.content)==null?void 0:t.children)?(e=i.content)==null?void 0:e.children.map(n=>n):(a=i.content)==null?void 0:a.children}).flat(1);function Pt(i,t,e){i.clickEvent(e);for(const a of t){if(!a||!a.clickEvent)continue;if(a.clickEvent(e))break}}function Kt(i,t){for(const e of i){if(!e||!e.keyboardEvent)continue;if(e.keyboardEvent(t))break}}function Bt(i,t){for(const e of i){if(!e||!e.changeEvent)continue;if(e.changeEvent(t))break}}const Ot=()=>{const i=document.createDocumentFragment(),t=new Y,e=new q;return i.prepend(ut()),i.append(e.self),i.append(t.self),document.addEventListener("click",a=>{Pt(t,U,a)}),document.addEventListener("keydown",a=>{Kt(U,a)}),document.addEventListener("change",a=>{Bt(U,a)}),i};document.addEventListener("DOMContentLoaded",()=>{const i=document.getElementById("root"),t=Ot();i.prepend(t)});
