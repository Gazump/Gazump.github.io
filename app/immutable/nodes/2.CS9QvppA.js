var tt=Object.defineProperty;var lt=(s,e,t)=>e in s?tt(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var se=(s,e,t)=>(lt(s,typeof e!="symbol"?e+"":e,t),t);import{s as Ze,n as de,r as we,b as st,o as nt,e as ot}from"../chunks/scheduler.BvLojk_z.js";import{S as $e,i as et,y as ve,z as pe,d as L,g as v,o as _,j as U,k as a,A as ue,e as d,b as $,s as R,u as rt,c as m,f as ee,h as x,B as N,v as it,w as at,C as W,l as fe,t as ct,a as ft,x as ht,p as Ce}from"../chunks/index.BVbBP3S1.js";import{p as ut}from"../chunks/stores.FG3sDoAO.js";function ne(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}class Se{constructor(e=5){se(this,"isDarkMode",!1);se(this,"gameIndex",-1);se(this,"code",[]);se(this,"randomCode",[]);se(this,"codeLength");this.codeLength=e,this.generateCode(),this.calculateGameIndex()}generateCode(){const e=this.getDate(),t=parseInt(e.toISOString().split("T")[0].replace(/-/g,""),10),r=this.lcg(t);this.code=Array.from({length:5},()=>Math.floor(r()*10)),this.randomCode=Array.from({length:this.codeLength},()=>Math.floor(Math.random()*10))}getGameIndex(){return this.gameIndex}getCode(){return this.code}getRandomCode(){return this.randomCode}checkGuess(e,t=!1){if(e.length!==this.codeLength)throw new Error("Guess length does not match code length");return e.map((r,l)=>{const n=Math.abs(r-(t?this.randomCode[l]:this.code[l]));return n===0?"green":n===1?"yellow":n===2?"orange":"gray"})}compareGameIndex(e){return this.gameIndex===e}getDate(){const e=new Date,t=new Date(e);return t.setDate(e.getDate()),t}calculateGameIndex(){const e=new Date("2024-05-20"),r=this.getDate().getTime()-e.getTime(),l=Math.floor(r/(1e3*3600*24));this.gameIndex=l}lcg(e){return()=>(e=(e*1664525+1013904223)%4294967296,e/4294967296)}}function Ge(s,e,t){const r=s.slice();return r[2]=e[t],r[4]=t,r}function Me(s){let e,t,r,l;return{c(){e=ve("g"),t=ve("rect"),this.h()},l(n){e=pe(n,"g",{transform:!0});var o=L(e);t=pe(o,"rect",{y:!0,width:!0,height:!0,fill:!0,class:!0}),L(t).forEach(v),o.forEach(v),this.h()},h(){_(t,"y",r=100-s[2]),_(t,"width","20"),_(t,"height","50"),_(t,"fill",l=s[1][s[4]]),_(t,"class","svelte-1aegubf"),_(e,"transform","translate("+(56+s[4]*25)+", 60)")},m(n,o){U(n,e,o),a(e,t)},p(n,o){o&1&&r!==(r=100-n[2])&&_(t,"y",r),o&2&&l!==(l=n[1][n[4]])&&_(t,"fill",l)},d(n){n&&v(e)}}}function dt(s){let e,t,r=ne(s[0]),l=[];for(let n=0;n<r.length;n+=1)l[n]=Me(Ge(s,r,n));return{c(){e=ve("svg"),t=ve("rect");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){e=pe(n,"svg",{viewBox:!0,width:!0,height:!0});var o=L(e);t=pe(o,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0,stroke:!0,"stroke-width":!0,class:!0}),L(t).forEach(v);for(let i=0;i<l.length;i+=1)l[i].l(o);o.forEach(v),this.h()},h(){_(t,"x","50"),_(t,"y","50"),_(t,"width","132"),_(t,"height","158"),_(t,"fill","#ccc"),_(t,"stroke","#000"),_(t,"stroke-width","2"),_(t,"class","svelte-1aegubf"),_(e,"viewBox","0 0 232 300"),_(e,"width","264"),_(e,"height","300")},m(n,o){U(n,e,o),a(e,t);for(let i=0;i<l.length;i+=1)l[i]&&l[i].m(e,null)},p(n,[o]){if(o&3){r=ne(n[0]);let i;for(i=0;i<r.length;i+=1){const f=Ge(n,r,i);l[i]?l[i].p(f,o):(l[i]=Me(f),l[i].c(),l[i].m(e,null))}for(;i<l.length;i+=1)l[i].d(1);l.length=r.length}},i:de,o:de,d(n){n&&v(e),ue(l,n)}}}function mt(s,e,t){let{pinPositions:r=[0,0,0,0,0]}=e,{correctPositions:l=["","","","",""]}=e;return s.$$set=n=>{"pinPositions"in n&&t(0,r=n.pinPositions),"correctPositions"in n&&t(1,l=n.correctPositions)},[r,l]}class gt extends $e{constructor(e){super(),et(this,e,mt,dt,Ze,{pinPositions:0,correctPositions:1})}}function vt(s){localStorage.setItem("lockleGameState",JSON.stringify(s))}function ze(s){let e=[-1,-1,-1,-1,-1],t=[],r=[],l=5,n=-1,o=!1,i=!1,f,h;const g=localStorage.getItem("lockleGameState");if(g){const{currentGuess:u,feedback:k,code:p,guesses:c,gameIndex:D,timeStarted:V,timeFinished:P}=JSON.parse(g),I=s.getGameIndex();D!==I?(n=I,r=s.getCode()):(e=u,t=k,r=p,l=c,n=D,f=V,h=P,o=t.some(S=>S.colors.every(C=>C==="green")),i=!o&&l===0)}else n=s.getGameIndex(),r=s.getCode();return{currentGuess:e,feedback:t,code:r,guesses:l,gameIndex:n,gameWon:o,gameLost:i,timeStarted:f,timeFinished:h}}function ye(){const s=localStorage.getItem("isDarkMode");return s?JSON.parse(s):!1}function Le(s){localStorage.setItem("isDarkMode",JSON.stringify(s))}function ge(s){const e=document.documentElement;s?(e.style.setProperty("background-color","#1e1e1e"),e.style.setProperty("--background-color","#1e1e1e"),e.style.setProperty("--text-color","#d3d3d3"),e.style.setProperty("--input-background-color","#AAA"),e.style.setProperty("--input-text-color","#383838"),e.style.setProperty("--button-background-color","#444"),e.style.setProperty("--button-text-color","#d3d3d3")):(e.style.setProperty("background-color","#ffffff"),e.style.setProperty("--background-color","#ffffff"),e.style.setProperty("--text-color","#000000"),e.style.setProperty("--input-background-color","#ffffff"),e.style.setProperty("--input-text-color","#000000"),e.style.setProperty("--button-background-color","#ffffff"),e.style.setProperty("--button-text-color","#000000"))}function pt(){return/Mobi|Android/i.test(navigator.userAgent)}function _t(s){return{green:"🟩",yellow:"🟨",orange:"🟧",red:"🟥",gray:"⬛"}[s]||"⬛"}function kt(s){return s.map(e=>e.colors.map(_t).join("")).join(`
`)}function bt(s,e,t,r){const l=kt(s),n=`Lockle #${t?e:"Randomized"}:
${l}
I picked the Lockle in ${r}!`;pt()&&navigator.share?navigator.share({title:"Lockle Guess",text:n}):navigator.clipboard.writeText(n).then(()=>{alert("Copied to clipboard!")})}class Te{constructor(e){se(this,"startTime",null);se(this,"endTime",null);se(this,"startTimeRandom",null);se(this,"endTimeRandom",null);se(this,"startKey");se(this,"endKey");this.startKey=`${e}_startTime`,this.endKey=`${e}_endTime`,this.loadStartTime(),this.loadEndTime()}loadStartTime(){const e=localStorage.getItem(this.startKey);e&&(this.startTime=parseInt(e,10))}loadEndTime(){const e=localStorage.getItem(this.endKey);e&&(this.endTime=parseInt(e,10))}start(){this.startTime||(this.startTime=Date.now(),localStorage.setItem(this.startKey,this.startTime.toString())),this.startTimeRandom=Date.now()}end(){this.endTime||(this.endTime=Date.now(),localStorage.setItem(this.endKey,this.endTime.toString())),this.endTimeRandom=Date.now()}getElapsedTime(e=!0){return!e&&this.startTimeRandom&&this.endTimeRandom?this.endTimeRandom-this.startTimeRandom:this.startTime&&this.endTime?this.endTime-this.startTime:0}reset(){this.startTime=null,this.endTime=null,this.startTimeRandom=null,this.endTimeRandom=null,localStorage.removeItem(this.startKey),localStorage.removeItem(this.endKey)}getFormattedTime(e=!0){const t=this.getElapsedTime(e),r=t%1e3,l=Math.floor(t/1e3%60),n=Math.floor(t/(1e3*60)%60),o=Math.floor(t/(1e3*60*60)%24),i=Math.floor(t/(1e3*60*60*24));return i>0?`${i}:${o}:${n}:${l}`:o>0?`${o}:${n}:${l}`:n>0?`${n}:${l}`:`${l}.${r}s`}}function Re(s,e,t){const r=s.slice();return r[33]=e[t],r}function xe(s,e,t){const r=s.slice();return r[33]=e[t],r[36]=e,r[37]=t,r}function Ve(s,e,t){const r=s.slice();return r[37]=e[t],r}function Be(s,e,t){const r=s.slice();return r[40]=e[t],r}function Ne(s,e,t){const r=s.slice();return r[43]=e[t],r[37]=t,r}function Oe(s){let e,t,r,l="×",n,o,i="How To Play:",f,h,g="You are trying to pick a lock and only have 5 tries.",u,k,p="<li>Each tumbler is represented by a digit 0 to 9.</li> <li>&quot;Pick&quot; a tumbler by guessing a number for each tumbler.</li> <li>If you lock the tumbler, it goes green 🟩.</li> <li>If you&#39;re 1 notch away, it goes yellow 🟨.</li> <li>If you&#39;re 2 notches away, it goes orange 🟧.</li> <li>If it&#39;s further away, it goes gray ⬛.</li>",c,D,V="For example, let's say you guess:",P,I,S="12345 which gives you 🟩🟩🟨🟧⬛.",C,G,E="This means that:",H,B,Q="<li>1 and 2 are correct,</li> <li>3 is 1 notch away (so a 2 or 4)</li> <li>4 is 2 notches away (so 2 or 6)</li> <li>and 5 is more than 2 notches away.</li>",oe,F,ae="Try to get all green before your picks run out!",re,Z,ie="(There is also a thematic visualization of the tumblers in the lock!)",te,K,ce="Have fun!",le,y;return{c(){e=d("div"),t=d("div"),r=d("button"),r.textContent=l,n=R(),o=d("h2"),o.textContent=i,f=R(),h=d("p"),h.textContent=g,u=R(),k=d("ul"),k.innerHTML=p,c=R(),D=d("p"),D.textContent=V,P=R(),I=d("p"),I.textContent=S,C=R(),G=d("p"),G.textContent=E,H=R(),B=d("ul"),B.innerHTML=Q,oe=R(),F=d("p"),F.textContent=ae,re=R(),Z=d("p"),Z.textContent=ie,te=R(),K=d("p"),K.textContent=ce,this.h()},l(T){e=m(T,"DIV",{class:!0});var M=L(e);t=m(M,"DIV",{class:!0});var w=L(t);r=m(w,"BUTTON",{class:!0,"data-svelte-h":!0}),N(r)!=="svelte-1egw0do"&&(r.textContent=l),n=x(w),o=m(w,"H2",{class:!0,"data-svelte-h":!0}),N(o)!=="svelte-nr43kh"&&(o.textContent=i),f=x(w),h=m(w,"P",{"data-svelte-h":!0}),N(h)!=="svelte-17ckyrl"&&(h.textContent=g),u=x(w),k=m(w,"UL",{"data-svelte-h":!0}),N(k)!=="svelte-18w721k"&&(k.innerHTML=p),c=x(w),D=m(w,"P",{"data-svelte-h":!0}),N(D)!=="svelte-oda6k5"&&(D.textContent=V),P=x(w),I=m(w,"P",{"data-svelte-h":!0}),N(I)!=="svelte-l2ww4b"&&(I.textContent=S),C=x(w),G=m(w,"P",{"data-svelte-h":!0}),N(G)!=="svelte-9emhql"&&(G.textContent=E),H=x(w),B=m(w,"UL",{"data-svelte-h":!0}),N(B)!=="svelte-oh7zx5"&&(B.innerHTML=Q),oe=x(w),F=m(w,"P",{"data-svelte-h":!0}),N(F)!=="svelte-12krjwa"&&(F.textContent=ae),re=x(w),Z=m(w,"P",{"data-svelte-h":!0}),N(Z)!=="svelte-u111va"&&(Z.textContent=ie),te=x(w),K=m(w,"P",{"data-svelte-h":!0}),N(K)!=="svelte-9vrod6"&&(K.textContent=ce),w.forEach(v),M.forEach(v),this.h()},h(){_(r,"class","close-button svelte-1vz0htc"),_(o,"class","svelte-1vz0htc"),_(t,"class","instructions-content svelte-1vz0htc"),_(e,"class","instructions-overlay svelte-1vz0htc")},m(T,M){U(T,e,M),a(e,t),a(t,r),a(t,n),a(t,o),a(t,f),a(t,h),a(t,u),a(t,k),a(t,c),a(t,D),a(t,P),a(t,I),a(t,C),a(t,G),a(t,H),a(t,B),a(t,oe),a(t,F),a(t,re),a(t,Z),a(t,te),a(t,K),le||(y=W(r,"click",s[18]),le=!0)},p:de,d(T){T&&v(e),le=!1,y()}}}function Ae(s){let e,t=s[40].guess[s[37]]+"",r;return{c(){e=d("div"),r=$(t),this.h()},l(l){e=m(l,"DIV",{class:!0,style:!0});var n=L(e);r=ee(n,t),n.forEach(v),this.h()},h(){_(e,"class","feedback-cell svelte-1vz0htc"),Ce(e,"background-color",s[43])},m(l,n){U(l,e,n),a(e,r)},p(l,n){n[0]&2&&t!==(t=l[40].guess[l[37]]+"")&&fe(r,t),n[0]&2&&Ce(e,"background-color",l[43])},d(l){l&&v(e)}}}function Ue(s){let e,t,r=ne(s[40].colors),l=[];for(let n=0;n<r.length;n+=1)l[n]=Ae(Ne(s,r,n));return{c(){e=d("div");for(let n=0;n<l.length;n+=1)l[n].c();t=R(),this.h()},l(n){e=m(n,"DIV",{class:!0});var o=L(e);for(let i=0;i<l.length;i+=1)l[i].l(o);t=x(o),o.forEach(v),this.h()},h(){_(e,"class","feedback-row svelte-1vz0htc")},m(n,o){U(n,e,o);for(let i=0;i<l.length;i+=1)l[i]&&l[i].m(e,null);a(e,t)},p(n,o){if(o[0]&2){r=ne(n[40].colors);let i;for(i=0;i<r.length;i+=1){const f=Ne(n,r,i);l[i]?l[i].p(f,o):(l[i]=Ae(f),l[i].c(),l[i].m(e,t))}for(;i<l.length;i+=1)l[i].d(1);l.length=r.length}},d(n){n&&v(e),ue(l,n)}}}function He(s){let e,t,r="You picked the lock!",l,n,o,i,f,h,g="Share",u,k,p,c=!s[11]&&Fe(s);return{c(){e=d("div"),t=d("p"),t.textContent=r,l=R(),n=d("p"),o=$("Time to solve: "),i=$(s[12]),f=R(),h=d("button"),h.textContent=g,u=R(),c&&c.c(),this.h()},l(D){e=m(D,"DIV",{class:!0});var V=L(e);t=m(V,"P",{"data-svelte-h":!0}),N(t)!=="svelte-18bb638"&&(t.textContent=r),l=x(V),n=m(V,"P",{});var P=L(n);o=ee(P,"Time to solve: "),i=ee(P,s[12]),P.forEach(v),f=x(V),h=m(V,"BUTTON",{class:!0,"data-svelte-h":!0}),N(h)!=="svelte-16vxa03"&&(h.textContent=g),u=x(V),c&&c.l(V),V.forEach(v),this.h()},h(){_(h,"class","share-button svelte-1vz0htc"),_(e,"class","win-message svelte-1vz0htc")},m(D,V){U(D,e,V),a(e,t),a(e,l),a(e,n),a(n,o),a(n,i),a(e,f),a(e,h),a(e,u),c&&c.m(e,null),k||(p=W(h,"click",s[21]),k=!0)},p(D,V){V[0]&4096&&fe(i,D[12]),D[11]?c&&(c.d(1),c=null):c?c.p(D,V):(c=Fe(D),c.c(),c.m(e,null))},d(D){D&&v(e),c&&c.d(),k=!1,p()}}}function Fe(s){let e,t,r="New Code!",l,n;return{c(){e=d("div"),t=d("button"),t.textContent=r,this.h()},l(o){e=m(o,"DIV",{class:!0});var i=L(e);t=m(i,"BUTTON",{"data-svelte-h":!0}),N(t)!=="svelte-p9hji7"&&(t.textContent=r),i.forEach(v),this.h()},h(){_(e,"class","win-message svelte-1vz0htc")},m(o,i){U(o,e,i),a(e,t),l||(n=W(t,"click",s[13]),l=!0)},p:de,d(o){o&&v(e),l=!1,n()}}}function Ke(s){let e,t,r="You fail...",l,n,o,i,f,h,g="Share",u,k,p,c,D,V,P=!s[11]&&je(s),I=ne(s[0]),S=[];for(let C=0;C<I.length;C+=1)S[C]=qe(Ve(s,I,C));return{c(){e=d("div"),t=d("p"),t.textContent=r,l=R(),n=d("p"),o=$("Time to solve: "),i=$(s[12]),f=R(),h=d("button"),h.textContent=g,u=R(),P&&P.c(),k=R(),p=d("div"),c=d("div");for(let C=0;C<S.length;C+=1)S[C].c();this.h()},l(C){e=m(C,"DIV",{class:!0});var G=L(e);t=m(G,"P",{"data-svelte-h":!0}),N(t)!=="svelte-1crkit9"&&(t.textContent=r),l=x(G),n=m(G,"P",{});var E=L(n);o=ee(E,"Time to solve: "),i=ee(E,s[12]),E.forEach(v),f=x(G),h=m(G,"BUTTON",{class:!0,"data-svelte-h":!0}),N(h)!=="svelte-16vxa03"&&(h.textContent=g),u=x(G),P&&P.l(G),G.forEach(v),k=x(C),p=m(C,"DIV",{class:!0});var H=L(p);c=m(H,"DIV",{class:!0});var B=L(c);for(let Q=0;Q<S.length;Q+=1)S[Q].l(B);B.forEach(v),H.forEach(v),this.h()},h(){_(h,"class","share-button svelte-1vz0htc"),_(e,"class","win-message svelte-1vz0htc"),_(c,"class","feedback-row svelte-1vz0htc"),_(p,"class","answer-container svelte-1vz0htc")},m(C,G){U(C,e,G),a(e,t),a(e,l),a(e,n),a(n,o),a(n,i),a(e,f),a(e,h),a(e,u),P&&P.m(e,null),U(C,k,G),U(C,p,G),a(p,c);for(let E=0;E<S.length;E+=1)S[E]&&S[E].m(c,null);D||(V=W(h,"click",s[21]),D=!0)},p(C,G){if(G[0]&4096&&fe(i,C[12]),C[11]?P&&(P.d(1),P=null):P?P.p(C,G):(P=je(C),P.c(),P.m(e,null)),G[0]&1){I=ne(C[0]);let E;for(E=0;E<I.length;E+=1){const H=Ve(C,I,E);S[E]?S[E].p(H,G):(S[E]=qe(H),S[E].c(),S[E].m(c,null))}for(;E<S.length;E+=1)S[E].d(1);S.length=I.length}},d(C){C&&(v(e),v(k),v(p)),P&&P.d(),ue(S,C),D=!1,V()}}}function je(s){let e,t,r="New Code!",l,n;return{c(){e=d("div"),t=d("button"),t.textContent=r,this.h()},l(o){e=m(o,"DIV",{class:!0});var i=L(e);t=m(i,"BUTTON",{"data-svelte-h":!0}),N(t)!=="svelte-p9hji7"&&(t.textContent=r),i.forEach(v),this.h()},h(){_(e,"class","win-message svelte-1vz0htc")},m(o,i){U(o,e,i),a(e,t),l||(n=W(t,"click",s[13]),l=!0)},p:de,d(o){o&&v(e),l=!1,n()}}}function qe(s){let e,t=s[37]+"",r;return{c(){e=d("div"),r=$(t),this.h()},l(l){e=m(l,"DIV",{class:!0,style:!0});var n=L(e);r=ee(n,t),n.forEach(v),this.h()},h(){_(e,"class","feedback-cell svelte-1vz0htc"),Ce(e,"background-color","Green")},m(l,n){U(l,e,n),a(e,r)},p(l,n){n[0]&1&&t!==(t=l[37]+"")&&fe(r,t)},d(l){l&&v(e)}}}function Je(s){let e,t=ne(s[0]),r=[];for(let l=0;l<t.length;l+=1)r[l]=Xe(xe(s,t,l));return{c(){e=d("div");for(let l=0;l<r.length;l+=1)r[l].c();this.h()},l(l){e=m(l,"DIV",{class:!0});var n=L(e);for(let o=0;o<r.length;o+=1)r[o].l(n);n.forEach(v),this.h()},h(){_(e,"class","guess-container svelte-1vz0htc")},m(l,n){U(l,e,n);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null)},p(l,n){if(n[0]&49157){t=ne(l[0]);let o;for(o=0;o<t.length;o+=1){const i=xe(l,t,o);r[o]?r[o].p(i,n):(r[o]=Xe(i),r[o].c(),r[o].m(e,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=t.length}},d(l){l&&v(e),ue(r,l)}}}function Xe(s){let e,t,r=s[37],l,n;const o=()=>s[23](e,r),i=()=>s[23](null,r);function f(...g){return s[24](s[37],...g)}function h(...g){return s[25](s[37],...g)}return{c(){e=d("input"),this.h()},l(g){e=m(g,"INPUT",{type:!0,maxlength:!0,class:!0}),this.h()},h(){_(e,"type","text"),_(e,"maxlength","1"),e.value=t=s[33]!==-1?s[33]:"",e.readOnly=!0,_(e,"class","svelte-1vz0htc")},m(g,u){U(g,e,u),o(),l||(n=[W(e,"input",f),W(e,"keydown",h)],l=!0)},p(g,u){s=g,u[0]&1&&t!==(t=s[33]!==-1?s[33]:"")&&e.value!==t&&(e.value=t),r!==s[37]&&(i(),r=s[37],o())},d(g){g&&v(e),i(),l=!1,we(n)}}}function Ye(s){let e,t,r="Enter",l,n,o,i='<svg fill="#000000" height="35px" width="26px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g><g><g><path d="M490.667,64H133.077c-7.196,0-13.906,3.627-17.848,9.647L3.485,244.314c-4.647,7.098-4.647,16.274,0,23.372 l111.744,170.667c3.942,6.02,10.652,9.647,17.848,9.647h357.589c11.782,0,21.333-9.551,21.333-21.333V85.333 C512,73.551,502.449,64,490.667,64z M469.333,405.333H144.609L46.833,256l97.776-149.333h324.725V405.333z"></path><path d="M198.246,356.418c8.331,8.331,21.839,8.331,30.17,0l70.248-70.248l70.248,70.248c8.331,8.331,21.839,8.331,30.17,0 s8.331-21.839,0-30.17L328.834,256l70.248-70.248c8.331-8.331,8.331-21.839,0-30.17s-21.839-8.331-30.17,0l-70.248,70.248 l-70.248-70.248c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17L268.495,256l-70.248,70.248 C189.915,334.58,189.915,348.087,198.246,356.418z"></path></g></g></g></g></svg>',f,h,g=ne(Array.from({length:10}).map(Qe)),u=[];for(let k=0;k<g.length;k+=1)u[k]=We(Re(s,g,k));return{c(){e=d("footer"),t=d("button"),t.textContent=r,l=R();for(let k=0;k<u.length;k+=1)u[k].c();n=R(),o=d("button"),o.innerHTML=i,this.h()},l(k){e=m(k,"FOOTER",{class:!0});var p=L(e);t=m(p,"BUTTON",{class:!0,"data-svelte-h":!0}),N(t)!=="svelte-jiris3"&&(t.textContent=r),l=x(p);for(let c=0;c<u.length;c+=1)u[c].l(p);n=x(p),o=m(p,"BUTTON",{class:!0,"data-svelte-h":!0}),N(o)!=="svelte-1dj4i8z"&&(o.innerHTML=i),p.forEach(v),this.h()},h(){_(t,"class","svelte-1vz0htc"),_(o,"class","svelte-1vz0htc"),_(e,"class","buttons svelte-1vz0htc")},m(k,p){U(k,e,p),a(e,t),a(e,l);for(let c=0;c<u.length;c+=1)u[c]&&u[c].m(e,null);a(e,n),a(e,o),f||(h=[W(t,"click",s[16]),W(o,"click",s[17])],f=!0)},p(k,p){if(p[0]&5){g=ne(Array.from({length:10}).map(Qe));let c;for(c=0;c<g.length;c+=1){const D=Re(k,g,c);u[c]?u[c].p(D,p):(u[c]=We(D),u[c].c(),u[c].m(e,n))}for(;c<u.length;c+=1)u[c].d(1);u.length=g.length}},d(k){k&&v(e),ue(u,k),f=!1,we(h)}}}function We(s){let e,t=s[33]+"",r,l,n;function o(){return s[26](s[33])}return{c(){e=d("button"),r=$(t),this.h()},l(i){e=m(i,"BUTTON",{class:!0});var f=L(e);r=ee(f,t),f.forEach(v),this.h()},h(){_(e,"class","svelte-1vz0htc")},m(i,f){U(i,e,f),a(e,r),l||(n=W(e,"click",o),l=!0)},p(i,f){s=i},d(i){i&&v(e),l=!1,n()}}}function yt(s){let e,t,r,l,n,o=s[11]?`#${s[6]}`:"Randomized!",i,f,h,g,u="How to Play",k,p,c=s[11]?"Play Random Games":"Back to Daily Game",D,V,P,I,S,C,G,E,H,B,Q,oe,F,ae,re,Z,ie,te,K,ce,le,y,T,M=s[10]&&Oe(s),w=ne(s[1]),O=[];for(let b=0;b<w.length;b+=1)O[b]=Ue(Be(s,w,b));let j=s[3]&&He(s),q=s[4]&&Ke(s),J=!s[3]&&!s[4]&&Je(s);K=new gt({props:{pinPositions:s[8],correctPositions:s[9]}});let X=!s[3]&&!s[4]&&Ye(s);return{c(){e=d("main"),t=d("header"),r=d("div"),l=d("b"),n=$("LOCKLE "),i=$(o),f=R(),h=d("div"),g=d("button"),g.textContent=u,k=R(),p=d("button"),D=$(c),V=R(),P=d("div"),I=d("b"),S=$("Picks left: "),C=$(s[5]),G=R(),E=d("label"),H=$(`Dark Mode
			`),B=d("input"),Q=R(),M&&M.c(),oe=R(),F=d("div");for(let b=0;b<O.length;b+=1)O[b].c();ae=R(),j&&j.c(),re=R(),q&&q.c(),Z=R(),J&&J.c(),ie=R(),te=d("div"),rt(K.$$.fragment),ce=R(),X&&X.c(),this.h()},l(b){e=m(b,"MAIN",{class:!0});var z=L(e);t=m(z,"HEADER",{});var Y=L(t);r=m(Y,"DIV",{class:!0});var A=L(r);l=m(A,"B",{});var he=L(l);n=ee(he,"LOCKLE "),i=ee(he,o),he.forEach(v),f=x(A),h=m(A,"DIV",{});var me=L(h);g=m(me,"BUTTON",{"data-svelte-h":!0}),N(g)!=="svelte-1cjt4g4"&&(g.textContent=u),k=x(me),p=m(me,"BUTTON",{});var Ie=L(p);D=ee(Ie,c),Ie.forEach(v),me.forEach(v),A.forEach(v),V=x(Y),P=m(Y,"DIV",{});var Pe=L(P);I=m(Pe,"B",{});var _e=L(I);S=ee(_e,"Picks left: "),C=ee(_e,s[5]),_e.forEach(v),Pe.forEach(v),G=x(Y),E=m(Y,"LABEL",{});var ke=L(E);H=ee(ke,`Dark Mode
			`),B=m(ke,"INPUT",{type:!0}),ke.forEach(v),Y.forEach(v),Q=x(z),M&&M.l(z),oe=x(z),F=m(z,"DIV",{class:!0});var De=L(F);for(let be=0;be<O.length;be+=1)O[be].l(De);De.forEach(v),ae=x(z),j&&j.l(z),re=x(z),q&&q.l(z),Z=x(z),J&&J.l(z),ie=x(z),te=m(z,"DIV",{class:!0});var Ee=L(te);it(K.$$.fragment,Ee),Ee.forEach(v),ce=x(z),X&&X.l(z),z.forEach(v),this.h()},h(){_(r,"class","header svelte-1vz0htc"),_(B,"type","checkbox"),_(F,"class","feedback-container svelte-1vz0htc"),_(te,"class","feedback-lock-container svelte-1vz0htc"),_(e,"class","svelte-1vz0htc")},m(b,z){U(b,e,z),a(e,t),a(t,r),a(r,l),a(l,n),a(l,i),a(r,f),a(r,h),a(h,g),a(h,k),a(h,p),a(p,D),a(t,V),a(t,P),a(P,I),a(I,S),a(I,C),a(t,G),a(t,E),a(E,H),a(E,B),B.checked=s[7],a(e,Q),M&&M.m(e,null),a(e,oe),a(e,F);for(let Y=0;Y<O.length;Y+=1)O[Y]&&O[Y].m(F,null);a(e,ae),j&&j.m(e,null),a(e,re),q&&q.m(e,null),a(e,Z),J&&J.m(e,null),a(e,ie),a(e,te),at(K,te,null),a(e,ce),X&&X.m(e,null),le=!0,y||(T=[W(g,"click",s[18]),W(p,"click",s[20]),W(B,"change",s[22]),W(B,"change",s[19])],y=!0)},p(b,z){if((!le||z[0]&2112)&&o!==(o=b[11]?`#${b[6]}`:"Randomized!")&&fe(i,o),(!le||z[0]&2048)&&c!==(c=b[11]?"Play Random Games":"Back to Daily Game")&&fe(D,c),(!le||z[0]&32)&&fe(C,b[5]),z[0]&128&&(B.checked=b[7]),b[10]?M?M.p(b,z):(M=Oe(b),M.c(),M.m(e,oe)):M&&(M.d(1),M=null),z[0]&2){w=ne(b[1]);let A;for(A=0;A<w.length;A+=1){const he=Be(b,w,A);O[A]?O[A].p(he,z):(O[A]=Ue(he),O[A].c(),O[A].m(F,null))}for(;A<O.length;A+=1)O[A].d(1);O.length=w.length}b[3]?j?j.p(b,z):(j=He(b),j.c(),j.m(e,re)):j&&(j.d(1),j=null),b[4]?q?q.p(b,z):(q=Ke(b),q.c(),q.m(e,Z)):q&&(q.d(1),q=null),!b[3]&&!b[4]?J?J.p(b,z):(J=Je(b),J.c(),J.m(e,ie)):J&&(J.d(1),J=null);const Y={};z[0]&256&&(Y.pinPositions=b[8]),z[0]&512&&(Y.correctPositions=b[9]),K.$set(Y),!b[3]&&!b[4]?X?X.p(b,z):(X=Ye(b),X.c(),X.m(e,null)):X&&(X.d(1),X=null)},i(b){le||(ct(K.$$.fragment,b),le=!0)},o(b){ft(K.$$.fragment,b),le=!1},d(b){b&&v(e),M&&M.d(),ue(O,b),j&&j.d(),q&&q.d(),J&&J.d(),ht(K),X&&X.d(),y=!1,we(T)}}}const Qe=(s,e)=>e;function Tt(s,e,t){let r;st(s,ut,y=>t(30,r=y));let l,n,o=[-1,-1,-1,-1,-1],i=[],f=[],h=!1,g=!1,u=5,k=[],p=-1,c=!1,D=[0,0,0,0,0],V=["","","","",""],P=!1,I=!0,S="X";nt(()=>{var T;l=new Se;const y=r.url.pathname;if(t(11,I=y==="/"||y==="/index"),n=new Te(I?"daily":"random"),(T=f[0])==null||T.focus(),I){const M=ze(l);t(0,{currentGuess:o,feedback:i,code:k,guesses:u,gameIndex:p,gameWon:h,gameLost:g}=M,o,t(1,i),t(5,u),t(6,p),t(3,h),t(4,g));const w=l.getGameIndex();p!==w?(t(6,p=w),t(0,o=[-1,-1,-1,-1,-1]),t(1,i=[]),t(3,h=!1),t(4,g=!1),t(5,u=5),k=l.getCode(),n.reset()):t(12,S=h?n.getFormattedTime():"X")}else G();t(7,c=ye()),l.isDarkMode=c,ge(c)});function C(){I&&vt({currentGuess:o,feedback:i,code:k,guesses:u,gameIndex:p}),Le(c)}function G(){var y;l||(l=new Se),n=new Te("random"),t(6,p=l.getGameIndex()),l.generateCode(),k=l.getRandomCode(),t(0,o=[-1,-1,-1,-1,-1]),t(1,i=[]),t(3,h=!1),t(4,g=!1),t(5,u=5),t(7,c=l.isDarkMode),(y=f[0])==null||y.focus(),ge(c)}function E(y,T){const M=y.target,w=parseInt(M.value);!isNaN(w)&&w>=0&&w<=9?(t(0,o[T]=w,o),T<3&&f[T+1].focus()):M.value=""}function H(y,T){y.key==="Enter"?B():y.key==="Backspace"&&(T>0?f[T-1].focus():(t(0,o[T]=-1,o),t(2,f[T].value="",f),f[T].focus()))}function B(){if(o.every(y=>y!==-1)){u===5&&n.start(),t(5,u--,u);const y=l.checkGuess(o,!I);if(t(1,i=[...i,{guess:[...o],colors:y}]),Q(o,y),y.every(T=>T==="green"))t(3,h=!0),n.end(),t(12,S=n.getFormattedTime(I));else if(t(0,o=[-1,-1,-1,-1,-1]),f[0].focus(),u===0){t(0,o=I?l.getCode():l.getRandomCode());const T=l.checkGuess(o,!I);Q(o,T),t(4,g=!0),n.end()}}C()}function Q(y,T){t(8,D=y.map((M,w)=>(10-M)*10)),t(9,V=T.map(M=>M))}function oe(){const y=o.length-1-o.slice().reverse().findIndex(T=>T!==-1);y>=0&&y<o.length&&(t(0,o[y]=-1,o),t(2,f[y].value="",f),f[y].focus())}function F(){t(10,P=!P)}function ae(){Le(c),ge(c)}function re(){if(I)C(),G(),t(11,I=!1),t(7,c=ye());else{const y=ze(l);t(0,{currentGuess:o,feedback:i,code:k,guesses:u,gameIndex:p,gameWon:h,gameLost:g}=y,o,t(1,i),t(5,u),t(6,p),t(3,h),t(4,g));const T=l.getGameIndex();p!==T?(t(6,p=T),t(0,o=[-1,-1,-1,-1,-1]),t(1,i=[]),t(3,h=!1),t(4,g=!1),t(5,u=5),k=l.getCode(),n.reset()):(n=new Te("daily"),t(12,S=h?n.getFormattedTime():"X")),t(11,I=!0),t(7,c=ye())}ge(c)}function Z(){bt(i,p,I,S)}function ie(){c=this.checked,t(7,c)}function te(y,T){ot[y?"unshift":"push"](()=>{f[T]=y,t(2,f)})}return[o,i,f,h,g,u,p,c,D,V,P,I,S,G,E,H,B,oe,F,ae,re,Z,ie,te,(y,T)=>E(T,y),(y,T)=>H(T,y),y=>{const T=o.findIndex(M=>M===-1);T!==-1&&(t(0,o[T]=y,o),t(2,f[T].value=y.toString(),f),T<3&&f[T+1].focus())}]}class Dt extends $e{constructor(e){super(),et(this,e,Tt,yt,Ze,{},null,[-1,-1])}}export{Dt as component};
