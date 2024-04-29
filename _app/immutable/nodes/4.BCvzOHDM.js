import{s as Y,n as U,y as we,u as rt,v as ct,w as nt,x as it,c as Ue,a as Re}from"../chunks/scheduler.cEBr5s-v.js";import{S as te,i as se,e as g,t as P,s as z,c as $,a as k,b as T,m as st,d as v,f as y,n as p,g as S,h as m,B as at,A as Ne,x as qe,C as Oe,j as W,u as oe,D as ot,H as ft,E as ut,F as ht,k as N,l as B,o as H,p as C,y as Ve,q as I,w as Ce,r as L}from"../chunks/index.DJPwxw4W.js";import{p as dt}from"../chunks/stores.DZ_k7tuZ.js";import{e as fe,A as mt,c as vt}from"../chunks/Avatar.DZ4YCGiI.js";import{b as ke}from"../chunks/paths.CvtpRdWe.js";import{I as lt}from"../chunks/ItemsDivider.4J14JI2a.js";import{H as _t,m as Se}from"../chunks/HeadMeta.Jnuo3Nwe.js";function pt(l){const e=parseInt(l.slice(1,3),16),a=parseInt(l.slice(3,5),16),t=parseInt(l.slice(5,7),16);return[e,a,t]}function gt(l){const[e,a,t]=l;return(e*299+a*587+t*114)/1e3}function $t(l){return gt(pt(l))>128?"#000":"#fff"}function Ge(l,e,a){const t=l.slice();return t[5]=e[a],t}function Qe(l,e,a){const t=l.slice();return t[8]=e[a],t}function We(l){let e,a,t;function s(){return l[4](l[8])}return{c(){e=g("div"),this.h()},l(r){e=$(r,"DIV",{class:!0,style:!0}),k(e).forEach(v),this.h()},h(){p(e,"class","color svelte-1u0by6"),qe(e,"background-color",l[8].hex),Oe(e,"selected",l[1]&&l[1].hex===l[8].hex)},m(r,c){S(r,e,c),a||(t=at(e,"click",s),a=!0)},p(r,c){l=r,c&1&&qe(e,"background-color",l[8].hex),c&3&&Oe(e,"selected",l[1]&&l[1].hex===l[8].hex)},d(r){r&&v(e),a=!1,t()}}}function je(l){let e,a,t,s,r=l[1].hex.toLocaleUpperCase()+"",c,n,d,h,i=fe(l[1].parts),f=[];for(let o=0;o<i.length;o+=1)f[o]=Fe(Ge(l,i,o));return{c(){e=g("div"),a=g("div"),t=P("Color "),s=g("span"),c=P(r),n=P(" copied to clipboard!"),d=z(),h=g("div");for(let o=0;o<f.length;o+=1)f[o].c();this.h()},l(o){e=$(o,"DIV",{class:!0});var _=k(e);a=$(_,"DIV",{});var u=k(a);t=T(u,"Color "),s=$(u,"SPAN",{class:!0});var V=k(s);c=T(V,r),V.forEach(v),n=T(u," copied to clipboard!"),u.forEach(v),d=y(_),h=$(_,"DIV",{class:!0});var b=k(h);for(let E=0;E<f.length;E+=1)f[E].l(b);b.forEach(v),_.forEach(v),this.h()},h(){p(s,"class","color-name svelte-1u0by6"),p(h,"class","parts svelte-1u0by6"),p(e,"class","color-details svelte-1u0by6")},m(o,_){S(o,e,_),m(e,a),m(a,t),m(a,s),m(s,c),m(a,n),m(e,d),m(e,h);for(let u=0;u<f.length;u+=1)f[u]&&f[u].m(h,null)},p(o,_){if(_&2&&r!==(r=o[1].hex.toLocaleUpperCase()+"")&&W(c,r),_&2){i=fe(o[1].parts);let u;for(u=0;u<i.length;u+=1){const V=Ge(o,i,u);f[u]?f[u].p(V,_):(f[u]=Fe(V),f[u].c(),f[u].m(h,null))}for(;u<f.length;u+=1)f[u].d(1);f.length=i.length}},d(o){o&&v(e),Ne(f,o)}}}function Fe(l){let e,a=l[5]+"",t;return{c(){e=g("div"),t=P(a),this.h()},l(s){e=$(s,"DIV",{class:!0});var r=k(e);t=T(r,a),r.forEach(v),this.h()},h(){p(e,"class","part svelte-1u0by6")},m(s,r){S(s,e,r),m(e,t)},p(s,r){r&2&&a!==(a=s[5]+"")&&W(t,a)},d(s){s&&v(e)}}}function bt(l){let e,a,t,s,r="download the palette",c,n,d,h,i,f=fe(l[0].colorPalette),o=[];for(let u=0;u<f.length;u+=1)o[u]=We(Qe(l,f,u));let _=l[1]&&je(l);return{c(){e=g("div"),a=g("div"),t=P("Choose a color or "),s=g("div"),s.textContent=r,c=z(),n=g("div");for(let u=0;u<o.length;u+=1)o[u].c();d=z(),_&&_.c(),this.h()},l(u){e=$(u,"DIV",{class:!0});var V=k(e);a=$(V,"DIV",{class:!0});var b=k(a);t=T(b,"Choose a color or "),s=$(b,"DIV",{class:!0,"data-svelte-h":!0}),st(s)!=="svelte-fq88n5"&&(s.textContent=r),b.forEach(v),c=y(V),n=$(V,"DIV",{class:!0});var E=k(n);for(let G=0;G<o.length;G+=1)o[G].l(E);E.forEach(v),d=y(V),_&&_.l(V),V.forEach(v),this.h()},h(){p(s,"class","text-link svelte-1u0by6"),p(a,"class","info svelte-1u0by6"),p(n,"class","colors svelte-1u0by6"),p(e,"class","color-palette svelte-1u0by6")},m(u,V){S(u,e,V),m(e,a),m(a,t),m(a,s),m(e,c),m(e,n);for(let b=0;b<o.length;b+=1)o[b]&&o[b].m(n,null);m(e,d),_&&_.m(e,null),h||(i=at(s,"click",l[3]),h=!0)},p(u,[V]){if(V&7){f=fe(u[0].colorPalette);let b;for(b=0;b<f.length;b+=1){const E=Qe(u,f,b);o[b]?o[b].p(E,V):(o[b]=We(E),o[b].c(),o[b].m(n,null))}for(;b<o.length;b+=1)o[b].d(1);o.length=f.length}u[1]?_?_.p(u,V):(_=je(u),_.c(),_.m(e,null)):_&&(_.d(1),_=null)},i:U,o:U,d(u){u&&v(e),Ne(o,u),_&&_.d(),h=!1,i()}}}function wt(l,e,a){let{characterData:t}=e,s=null;function r(d){s&&s.hex===d.hex?a(1,s=null):(a(1,s=d),navigator.clipboard.writeText(d.hex.toLocaleUpperCase()))}function c(){const d=document.createElement("canvas"),h=d.getContext("2d"),i=300,{colorPalette:f}=t,o=f.length,_=i*o,u=1200,V=60,b=1200+V;if(d.width=_,d.height=b,!h)return;f.forEach(({hex:j},ae)=>{h.fillStyle=j,h.fillRect(ae/o*_,0,_/o,u);const A=j.toUpperCase(),R=(ae+.5)/o*_,q=u/2;h.fillStyle=$t(j),h.font="bold 36px Quicksand",h.textAlign="center",h.textBaseline="middle",h.fillText(A,R,q)}),h.fillStyle="#333333",h.fillRect(0,u,_,V);const E=`${t.name} ✦ AnastasiaElf's OCs ✦ ocs.anastasiaelf.com/${t.nameId}`,G=20,J=b-28;h.fillStyle="#eeeeee",h.font="26px Quicksand",h.textAlign="start",h.textBaseline="middle",h.fillText(E,G,J);const Q=document.createElement("a");Q.href=d.toDataURL("image/png"),Q.download=t.name.toLowerCase()+"_color_palette.png",Q.click()}const n=d=>r(d);return l.$$set=d=>{"characterData"in d&&a(0,t=d.characterData)},[t,s,r,c,n]}class kt extends te{constructor(e){super(),se(this,e,wt,bt,Y,{characterData:0})}}function Vt(l){let e,a;return{c(){e=g("img"),this.h()},l(t){e=$(t,"IMG",{src:!0,class:!0,alt:!0}),this.h()},h(){we(e.src,a=ke+"/images/ref/"+l[0]+".webp")||p(e,"src",a),p(e,"class","reference svelte-1emtsp4"),p(e,"alt","Character reference")},m(t,s){S(t,e,s)},p(t,[s]){s&1&&!we(e.src,a=ke+"/images/ref/"+t[0]+".webp")&&p(e,"src",a)},i:U,o:U,d(t){t&&v(e)}}}function Ct(l,e,a){let{characterId:t}=e;return l.$$set=s=>{"characterId"in s&&a(0,t=s.characterId)},[t]}class It extends te{constructor(e){super(),se(this,e,Ct,Vt,Y,{characterId:0})}}function Xe(l,e,a){const t=l.slice();return t[1]=e[a],t}function Ye(l){let e,a=fe(l[0].outfits),t=[];for(let s=0;s<a.length;s+=1)t[s]=Je(Xe(l,a,s));return{c(){e=g("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=$(s,"DIV",{class:!0});var r=k(e);for(let c=0;c<t.length;c+=1)t[c].l(r);r.forEach(v),this.h()},h(){p(e,"class","outfits svelte-1f64ok2")},m(s,r){S(s,e,r);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(e,null)},p(s,r){if(r&1){a=fe(s[0].outfits);let c;for(c=0;c<a.length;c+=1){const n=Xe(s,a,c);t[c]?t[c].p(n,r):(t[c]=Je(n),t[c].c(),t[c].m(e,null))}for(;c<t.length;c+=1)t[c].d(1);t.length=a.length}},d(s){s&&v(e),Ne(t,s)}}}function Je(l){let e,a;return{c(){e=g("img"),this.h()},l(t){e=$(t,"IMG",{src:!0,class:!0,alt:!0}),this.h()},h(){we(e.src,a=ke+"/images/outfit/"+l[0].id+"/"+l[1].id+".webp")||p(e,"src",a),p(e,"class","outfit svelte-1f64ok2"),p(e,"alt","Character outfit")},m(t,s){S(t,e,s)},p(t,s){s&1&&!we(e.src,a=ke+"/images/outfit/"+t[0].id+"/"+t[1].id+".webp")&&p(e,"src",a)},d(t){t&&v(e)}}}function Dt(l){let e,a=l[0].outfits&&Ye(l);return{c(){a&&a.c(),e=oe()},l(t){a&&a.l(t),e=oe()},m(t,s){a&&a.m(t,s),S(t,e,s)},p(t,[s]){t[0].outfits?a?a.p(t,s):(a=Ye(t),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null)},i:U,o:U,d(t){t&&v(e),a&&a.d(t)}}}function Et(l,e,a){let{characterData:t}=e;return l.$$set=s=>{"characterData"in s&&a(0,t=s.characterData)},[t]}class zt extends te{constructor(e){super(),se(this,e,Et,Dt,Y,{characterData:0})}}function Ke(l){return l.toLocaleDateString("en-US",{day:"numeric",month:"long"})}function yt(l){let e,a,t=l[3][l[0]].content+"",s,r;return{c(){e=ot("svg"),a=new ft(!0),this.h()},l(c){e=ut(c,"svg",{class:!0,viewBox:!0,xmlns:!0});var n=k(e);a=ht(n,!0),n.forEach(v),this.h()},h(){a.a=null,p(e,"class",s="icon icon-"+l[1]+" icon-"+l[2]+" svelte-bhuw02"),p(e,"viewBox",r=l[3][l[0]].viewBox),p(e,"xmlns","http://www.w3.org/2000/svg")},m(c,n){S(c,e,n),a.m(t,e)},p(c,[n]){n&1&&t!==(t=c[3][c[0]].content+"")&&a.p(t),n&6&&s!==(s="icon icon-"+c[1]+" icon-"+c[2]+" svelte-bhuw02")&&p(e,"class",s),n&1&&r!==(r=c[3][c[0]].viewBox)&&p(e,"viewBox",r)},i:U,o:U,d(c){c&&v(e)}}}function St(l,e,a){let{type:t}=e,{size:s="md"}=e,{color:r="accent"}=e;const c={birthday:{viewBox:"0 0 448 512",content:'<path d="M86.4 5.5L61.8 47.6C58 54.1 56 61.6 56 69.2V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.2c0-7.6-2-15-5.8-21.6L105.6 5.5C103.6 2.1 100 0 96 0s-7.6 2.1-9.6 5.5zm128 0L189.8 47.6c-3.8 6.5-5.8 14-5.8 21.6V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.2c0-7.6-2-15-5.8-21.6L233.6 5.5C231.6 2.1 228 0 224 0s-7.6 2.1-9.6 5.5zM317.8 47.6c-3.8 6.5-5.8 14-5.8 21.6V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.2c0-7.6-2-15-5.8-21.6L361.6 5.5C359.6 2.1 356 0 352 0s-7.6 2.1-9.6 5.5L317.8 47.6zM128 176c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c-35.3 0-64 28.7-64 64v71c8.3 5.2 18.1 9 28.8 9c13.5 0 27.2-6.1 38.4-13.4c5.4-3.5 9.9-7.1 13-9.7c1.5-1.3 2.7-2.4 3.5-3.1c.4-.4 .7-.6 .8-.8l.1-.1 0 0 0 0s0 0 0 0s0 0 0 0c3.1-3.2 7.4-4.9 11.9-4.8s8.6 2.1 11.6 5.4l0 0 0 0 .1 .1c.1 .1 .4 .4 .7 .7c.7 .7 1.7 1.7 3.1 3c2.8 2.6 6.8 6.1 11.8 9.5c10.2 7.1 23 13.1 36.3 13.1s26.1-6 36.3-13.1c5-3.5 9-6.9 11.8-9.5c1.4-1.3 2.4-2.3 3.1-3c.3-.3 .6-.6 .7-.7l.1-.1c3-3.5 7.4-5.4 12-5.4s9 2 12 5.4l.1 .1c.1 .1 .4 .4 .7 .7c.7 .7 1.7 1.7 3.1 3c2.8 2.6 6.8 6.1 11.8 9.5c10.2 7.1 23 13.1 36.3 13.1s26.1-6 36.3-13.1c5-3.5 9-6.9 11.8-9.5c1.4-1.3 2.4-2.3 3.1-3c.3-.3 .6-.6 .7-.7l.1-.1c2.9-3.4 7.1-5.3 11.6-5.4s8.7 1.6 11.9 4.8l0 0 0 0 0 0 .1 .1c.2 .2 .4 .4 .8 .8c.8 .7 1.9 1.8 3.5 3.1c3.1 2.6 7.5 6.2 13 9.7c11.2 7.3 24.9 13.4 38.4 13.4c10.7 0 20.5-3.9 28.8-9V288c0-35.3-28.7-64-64-64V176c0-17.7-14.3-32-32-32s-32 14.3-32 32v48H256V176c0-17.7-14.3-32-32-32s-32 14.3-32 32v48H128V176zM448 394.6c-8.5 3.3-18.2 5.4-28.8 5.4c-22.5 0-42.4-9.9-55.8-18.6c-4.1-2.7-7.8-5.4-10.9-7.8c-2.8 2.4-6.1 5-9.8 7.5C329.8 390 310.6 400 288 400s-41.8-10-54.6-18.9c-3.5-2.4-6.7-4.9-9.4-7.2c-2.7 2.3-5.9 4.7-9.4 7.2C201.8 390 182.6 400 160 400s-41.8-10-54.6-18.9c-3.7-2.6-7-5.2-9.8-7.5c-3.1 2.4-6.8 5.1-10.9 7.8C71.2 390.1 51.3 400 28.8 400c-10.6 0-20.3-2.2-28.8-5.4V480c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32V394.6z"/>'},world:{viewBox:"0 0 512 512",content:'<path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/>'},genderless:{viewBox:"0 0 512 512",content:'<path d="M192 144a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 288a176 176 0 1 0 0-352 176 176 0 1 0 0 352z"/>'},mars:{viewBox:"0 0 448 512",content:'<path d="M289.8 46.8c3.7-9 12.5-14.8 22.2-14.8H424c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-33.4-33.4L321 204.2c19.5 28.4 31 62.7 31 99.8c0 97.2-78.8 176-176 176S0 401.2 0 304s78.8-176 176-176c37 0 71.4 11.4 99.8 31l52.6-52.6L295 73c-6.9-6.9-8.9-17.2-5.2-26.2zM400 80l0 0h0v0zM176 416a112 112 0 1 0 0-224 112 112 0 1 0 0 224z"/>'},venus:{viewBox:"0 0 384 512",content:'<path d="M80 176a112 112 0 1 1 224 0A112 112 0 1 1 80 176zM224 349.1c81.9-15 144-86.8 144-173.1C368 78.8 289.2 0 192 0S16 78.8 16 176c0 86.3 62.1 158.1 144 173.1V384H128c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v32c0 17.7 14.3 32 32 32s32-14.3 32-32V448h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H224V349.1z"/>'},"mars-and-venus":{viewBox:"0 0 512 512",content:'<path d="M337.8 14.8C341.5 5.8 350.3 0 360 0H472c13.3 0 24 10.7 24 24V136c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-24.7 24.7C407 163.3 416 192.6 416 224c0 80.2-59 146.6-136 158.2V408h24c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V456H208c-13.3 0-24-10.7-24-24s10.7-24 24-24h24V382.2C155 370.6 96 304.2 96 224c0-88.4 71.6-160 160-160c39.6 0 75.9 14.4 103.8 38.2L382.1 80 343 41c-6.9-6.9-8.9-17.2-5.2-26.2zM448 48l0 0h0v0zM352 224a96 96 0 1 0 -192 0 96 96 0 1 0 192 0z"/>'},download:{viewBox:"0 0 640 512",content:'<path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"/>'}};return l.$$set=n=>{"type"in n&&a(0,t=n.type),"size"in n&&a(1,s=n.size),"color"in n&&a(2,r=n.color)},[t,s,r,c]}class Me extends te{constructor(e){super(),se(this,e,St,yt,Y,{type:0,size:1,color:2})}}function Ze(l){let e,a,t,s=l[0].shortName+"",r,c;return e=new lt({}),{c(){N(e.$$.fragment),a=z(),t=g("span"),r=P(s)},l(n){B(e.$$.fragment,n),a=y(n),t=$(n,"SPAN",{});var d=k(t);r=T(d,s),d.forEach(v)},m(n,d){H(e,n,d),S(n,a,d),S(n,t,d),m(t,r),c=!0},p(n,d){(!c||d&1)&&s!==(s=n[0].shortName+"")&&W(r,s)},i(n){c||(C(e.$$.fragment,n),c=!0)},o(n){I(e.$$.fragment,n),c=!1},d(n){n&&(v(a),v(t)),L(e,n)}}}function Mt(l){let e,a,t,s,r,c,n,d=l[0].name+"",h,i,f,o,_,u=l[0].species+"",V,b,E,G,J,Q=l[0].description+"",j,ae,A,R,q,Ie,le,ue=l[0].pronoun+"",me,De,F,K,Ee,re,he=Ke(l[0].birthday)+"",ve,ze,X,Z,ye,ce,de=l[0].world+"",_e,O;a=new mt({props:{characterId:l[0].id}});let D=l[0].shortName&&Ze(l);return E=new lt({}),q=new Me({props:{type:l[0].gender}}),K=new Me({props:{type:"birthday"}}),Z=new Me({props:{type:"world"}}),{c(){e=g("div"),N(a.$$.fragment),t=z(),s=g("div"),r=g("div"),c=g("div"),n=g("span"),h=P(d),i=z(),D&&D.c(),f=z(),o=g("div"),_=g("span"),V=P(u),b=z(),N(E.$$.fragment),G=z(),J=g("span"),j=P(Q),ae=z(),A=g("div"),R=g("div"),N(q.$$.fragment),Ie=z(),le=g("span"),me=P(ue),De=z(),F=g("div"),N(K.$$.fragment),Ee=z(),re=g("span"),ve=P(he),ze=z(),X=g("div"),N(Z.$$.fragment),ye=z(),ce=g("span"),_e=P(de),this.h()},l(w){e=$(w,"DIV",{class:!0});var M=k(e);B(a.$$.fragment,M),t=y(M),s=$(M,"DIV",{class:!0});var x=k(s);r=$(x,"DIV",{class:!0});var ee=k(r);c=$(ee,"DIV",{class:!0});var pe=k(c);n=$(pe,"SPAN",{});var Be=k(n);h=T(Be,d),Be.forEach(v),i=y(pe),D&&D.l(pe),pe.forEach(v),f=y(ee),o=$(ee,"DIV",{class:!0});var ne=k(o);_=$(ne,"SPAN",{});var He=k(_);V=T(He,u),He.forEach(v),b=y(ne),B(E.$$.fragment,ne),G=y(ne),J=$(ne,"SPAN",{});var Le=k(J);j=T(Le,Q),Le.forEach(v),ne.forEach(v),ee.forEach(v),ae=y(x),A=$(x,"DIV",{class:!0});var ie=k(A);R=$(ie,"DIV",{class:!0});var ge=k(R);B(q.$$.fragment,ge),Ie=y(ge),le=$(ge,"SPAN",{class:!0});var Ae=k(le);me=T(Ae,ue),Ae.forEach(v),ge.forEach(v),De=y(ie),F=$(ie,"DIV",{class:!0});var $e=k(F);B(K.$$.fragment,$e),Ee=y($e),re=$($e,"SPAN",{class:!0});var Pe=k(re);ve=T(Pe,he),Pe.forEach(v),$e.forEach(v),ze=y(ie),X=$(ie,"DIV",{class:!0});var be=k(X);B(Z.$$.fragment,be),ye=y(be),ce=$(be,"SPAN",{class:!0});var Te=k(ce);_e=T(Te,de),Te.forEach(v),be.forEach(v),ie.forEach(v),x.forEach(v),M.forEach(v),this.h()},h(){p(c,"class","name svelte-181942w"),p(o,"class","description svelte-181942w"),p(r,"class","main-info svelte-181942w"),p(le,"class","svelte-181942w"),p(R,"class","icon-param svelte-181942w"),p(re,"class","svelte-181942w"),p(F,"class","icon-param svelte-181942w"),p(ce,"class","svelte-181942w"),p(X,"class","icon-param svelte-181942w"),p(A,"class","params svelte-181942w"),p(s,"class","info svelte-181942w"),p(e,"class","character-bio svelte-181942w")},m(w,M){S(w,e,M),H(a,e,null),m(e,t),m(e,s),m(s,r),m(r,c),m(c,n),m(n,h),m(c,i),D&&D.m(c,null),m(r,f),m(r,o),m(o,_),m(_,V),m(o,b),H(E,o,null),m(o,G),m(o,J),m(J,j),m(s,ae),m(s,A),m(A,R),H(q,R,null),m(R,Ie),m(R,le),m(le,me),m(A,De),m(A,F),H(K,F,null),m(F,Ee),m(F,re),m(re,ve),m(A,ze),m(A,X),H(Z,X,null),m(X,ye),m(X,ce),m(ce,_e),O=!0},p(w,[M]){const x={};M&1&&(x.characterId=w[0].id),a.$set(x),(!O||M&1)&&d!==(d=w[0].name+"")&&W(h,d),w[0].shortName?D?(D.p(w,M),M&1&&C(D,1)):(D=Ze(w),D.c(),C(D,1),D.m(c,null)):D&&(Ve(),I(D,1,1,()=>{D=null}),Ce()),(!O||M&1)&&u!==(u=w[0].species+"")&&W(V,u),(!O||M&1)&&Q!==(Q=w[0].description+"")&&W(j,Q);const ee={};M&1&&(ee.type=w[0].gender),q.$set(ee),(!O||M&1)&&ue!==(ue=w[0].pronoun+"")&&W(me,ue),(!O||M&1)&&he!==(he=Ke(w[0].birthday)+"")&&W(ve,he),(!O||M&1)&&de!==(de=w[0].world+"")&&W(_e,de)},i(w){O||(C(a.$$.fragment,w),C(D),C(E.$$.fragment,w),C(q.$$.fragment,w),C(K.$$.fragment,w),C(Z.$$.fragment,w),O=!0)},o(w){I(a.$$.fragment,w),I(D),I(E.$$.fragment,w),I(q.$$.fragment,w),I(K.$$.fragment,w),I(Z.$$.fragment,w),O=!1},d(w){w&&v(e),L(a),D&&D.d(),L(E),L(q),L(K),L(Z)}}}function Nt(l,e,a){let{character:t}=e;return l.$$set=s=>{"character"in s&&a(0,t=s.character)},[t]}class Bt extends te{constructor(e){super(),se(this,e,Nt,Mt,Y,{character:0})}}function Ht(l){let e,a;const t=l[1].default,s=rt(t,l,l[0],null);return{c(){e=g("div"),s&&s.c(),this.h()},l(r){e=$(r,"DIV",{class:!0});var c=k(e);s&&s.l(c),c.forEach(v),this.h()},h(){p(e,"class","character-section svelte-1f251xg")},m(r,c){S(r,e,c),s&&s.m(e,null),a=!0},p(r,[c]){s&&s.p&&(!a||c&1)&&ct(s,t,r,r[0],a?it(t,r[0],c,null):nt(r[0]),null)},i(r){a||(C(s,r),a=!0)},o(r){I(s,r),a=!1},d(r){r&&v(e),s&&s.d(r)}}}function Lt(l,e,a){let{$$slots:t={},$$scope:s}=e;return l.$$set=r=>{"$$scope"in r&&a(0,s=r.$$scope)},[s,t]}class xe extends te{constructor(e){super(),se(this,e,Lt,Ht,Y,{})}}function At(l){let e,a="Character not found";return{c(){e=g("div"),e.textContent=a,this.h()},l(t){e=$(t,"DIV",{class:!0,"data-svelte-h":!0}),st(e)!=="svelte-nhsgpl"&&(e.textContent=a),this.h()},h(){p(e,"class","error-message")},m(t,s){S(t,e,s)},p:U,i:U,o:U,d(t){t&&v(e)}}}function Pt(l){let e,a,t,s,r,c,n,d;a=new xe({props:{$$slots:{default:[Tt]},$$scope:{ctx:l}}}),s=new xe({props:{$$slots:{default:[Ut]},$$scope:{ctx:l}}}),c=new It({props:{characterId:l[0].id}});let h=l[0].outfits&&tt(l);return{c(){e=g("div"),N(a.$$.fragment),t=z(),N(s.$$.fragment),r=z(),N(c.$$.fragment),n=z(),h&&h.c(),this.h()},l(i){e=$(i,"DIV",{class:!0});var f=k(e);B(a.$$.fragment,f),t=y(f),B(s.$$.fragment,f),r=y(f),B(c.$$.fragment,f),n=y(f),h&&h.l(f),f.forEach(v),this.h()},h(){p(e,"class","character svelte-2il6o6")},m(i,f){S(i,e,f),H(a,e,null),m(e,t),H(s,e,null),m(e,r),H(c,e,null),m(e,n),h&&h.m(e,null),d=!0},p(i,f){const o={};f&17&&(o.$$scope={dirty:f,ctx:i}),a.$set(o);const _={};f&17&&(_.$$scope={dirty:f,ctx:i}),s.$set(_);const u={};f&1&&(u.characterId=i[0].id),c.$set(u),i[0].outfits?h?(h.p(i,f),f&1&&C(h,1)):(h=tt(i),h.c(),C(h,1),h.m(e,null)):h&&(Ve(),I(h,1,1,()=>{h=null}),Ce())},i(i){d||(C(a.$$.fragment,i),C(s.$$.fragment,i),C(c.$$.fragment,i),C(h),d=!0)},o(i){I(a.$$.fragment,i),I(s.$$.fragment,i),I(c.$$.fragment,i),I(h),d=!1},d(i){i&&v(e),L(a),L(s),L(c),h&&h.d()}}}function Tt(l){let e,a;return e=new Bt({props:{character:l[0]}}),{c(){N(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,s){H(e,t,s),a=!0},p(t,s){const r={};s&1&&(r.character=t[0]),e.$set(r)},i(t){a||(C(e.$$.fragment,t),a=!0)},o(t){I(e.$$.fragment,t),a=!1},d(t){L(e,t)}}}function et(l){let e,a;return e=new kt({props:{characterData:l[0]}}),{c(){N(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,s){H(e,t,s),a=!0},p(t,s){const r={};s&1&&(r.characterData=t[0]),e.$set(r)},i(t){a||(C(e.$$.fragment,t),a=!0)},o(t){I(e.$$.fragment,t),a=!1},d(t){L(e,t)}}}function Ut(l){let e=l[0].id,a,t,s=et(l);return{c(){s.c(),a=oe()},l(r){s.l(r),a=oe()},m(r,c){s.m(r,c),S(r,a,c),t=!0},p(r,c){c&1&&Y(e,e=r[0].id)?(Ve(),I(s,1,1,U),Ce(),s=et(r),s.c(),C(s,1),s.m(a.parentNode,a)):s.p(r,c)},i(r){t||(C(s),t=!0)},o(r){I(s),t=!1},d(r){r&&v(a),s.d(r)}}}function tt(l){let e,a;return e=new zt({props:{characterData:l[0]}}),{c(){N(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,s){H(e,t,s),a=!0},p(t,s){const r={};s&1&&(r.characterData=t[0]),e.$set(r)},i(t){a||(C(e.$$.fragment,t),a=!0)},o(t){I(e.$$.fragment,t),a=!1},d(t){L(e,t)}}}function Rt(l){let e,a,t,s,r,c;e=new _t({});const n=[Pt,At],d=[];function h(i,f){return i[0]?0:1}return t=h(l),s=d[t]=n[t](l),{c(){N(e.$$.fragment),a=z(),s.c(),r=oe()},l(i){B(e.$$.fragment,i),a=y(i),s.l(i),r=oe()},m(i,f){H(e,i,f),S(i,a,f),d[t].m(i,f),S(i,r,f),c=!0},p(i,[f]){let o=t;t=h(i),t===o?d[t].p(i,f):(Ve(),I(d[o],1,1,()=>{d[o]=null}),Ce(),s=d[t],s?s.p(i,f):(s=d[t]=n[t](i),s.c()),C(s,1),s.m(r.parentNode,r))},i(i){c||(C(e.$$.fragment,i),C(s),c=!0)},o(i){I(e.$$.fragment,i),I(s),c=!1},d(i){i&&(v(a),v(r)),L(e,i),d[t].d(i)}}}function qt(l,e,a){let t,s,r,c;return Ue(l,Se,n=>a(3,r=n)),Ue(l,dt,n=>a(2,c=n)),l.$$.update=()=>{l.$$.dirty&4&&a(1,t=c.params.character),l.$$.dirty&2&&a(0,s=vt.find(n=>n.id===t||n.nameId===t)),l.$$.dirty&1&&(s?Re(Se,r={pageName:s.name,faviconId:s.id},r):Re(Se,r={},r))},[s,t,c]}class Yt extends te{constructor(e){super(),se(this,e,qt,Rt,Y,{})}}export{Yt as component};
