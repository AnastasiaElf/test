import{s as Y,n as U,A as we,v as lt,w as ct,x as rt,y as nt,c as Te,g as ot,a as Ue}from"../chunks/scheduler.BISGLLOj.js";import{S as te,i as se,e as g,t as N,s as z,c as $,a as k,b as A,k as tt,d as m,f as y,l as p,g as B,h as d,B as st,A as Be,q as Re,C as qe,j as W,m as ie,D as it,H as ft,E as ut,F as ht,v as H,w as L,x as P,p as V,r as Ce,n as I,o as Ve,y as T}from"../chunks/index.BZ1zJ2VX.js";import{p as dt}from"../chunks/stores.CfWKYMvU.js";import{e as fe,A as mt,c as vt}from"../chunks/Avatar.Byord0z_.js";import{b as ke}from"../chunks/paths.BqBK6B3H.js";import{I as at}from"../chunks/ItemsDivider.WHeXbKFi.js";function _t(l){const e=parseInt(l.slice(1,3),16),s=parseInt(l.slice(3,5),16),t=parseInt(l.slice(5,7),16);return[e,s,t]}function pt(l){const[e,s,t]=l;return(e*299+s*587+t*114)/1e3}function gt(l){return pt(_t(l))>128?"#000":"#fff"}function Oe(l,e,s){const t=l.slice();return t[5]=e[s],t}function Ge(l,e,s){const t=l.slice();return t[8]=e[s],t}function Qe(l){let e,s,t;function a(){return l[4](l[8])}return{c(){e=g("div"),this.h()},l(c){e=$(c,"DIV",{class:!0,style:!0}),k(e).forEach(m),this.h()},h(){p(e,"class","color svelte-1u0by6"),Re(e,"background-color",l[8].hex),qe(e,"selected",l[1]&&l[1].hex===l[8].hex)},m(c,r){B(c,e,r),s||(t=st(e,"click",a),s=!0)},p(c,r){l=c,r&1&&Re(e,"background-color",l[8].hex),r&3&&qe(e,"selected",l[1]&&l[1].hex===l[8].hex)},d(c){c&&m(e),s=!1,t()}}}function We(l){let e,s,t,a,c=l[1].hex.toLocaleUpperCase()+"",r,n,o,i,_=fe(l[1].parts),h=[];for(let u=0;u<_.length;u+=1)h[u]=je(Oe(l,_,u));return{c(){e=g("div"),s=g("div"),t=N("Color "),a=g("span"),r=N(c),n=N(" copied to clipboard!"),o=z(),i=g("div");for(let u=0;u<h.length;u+=1)h[u].c();this.h()},l(u){e=$(u,"DIV",{class:!0});var v=k(e);s=$(v,"DIV",{});var f=k(s);t=A(f,"Color "),a=$(f,"SPAN",{class:!0});var C=k(a);r=A(C,c),C.forEach(m),n=A(f," copied to clipboard!"),f.forEach(m),o=y(v),i=$(v,"DIV",{class:!0});var b=k(i);for(let E=0;E<h.length;E+=1)h[E].l(b);b.forEach(m),v.forEach(m),this.h()},h(){p(a,"class","color-name svelte-1u0by6"),p(i,"class","parts svelte-1u0by6"),p(e,"class","color-details svelte-1u0by6")},m(u,v){B(u,e,v),d(e,s),d(s,t),d(s,a),d(a,r),d(s,n),d(e,o),d(e,i);for(let f=0;f<h.length;f+=1)h[f]&&h[f].m(i,null)},p(u,v){if(v&2&&c!==(c=u[1].hex.toLocaleUpperCase()+"")&&W(r,c),v&2){_=fe(u[1].parts);let f;for(f=0;f<_.length;f+=1){const C=Oe(u,_,f);h[f]?h[f].p(C,v):(h[f]=je(C),h[f].c(),h[f].m(i,null))}for(;f<h.length;f+=1)h[f].d(1);h.length=_.length}},d(u){u&&m(e),Be(h,u)}}}function je(l){let e,s=l[5]+"",t;return{c(){e=g("div"),t=N(s),this.h()},l(a){e=$(a,"DIV",{class:!0});var c=k(e);t=A(c,s),c.forEach(m),this.h()},h(){p(e,"class","part svelte-1u0by6")},m(a,c){B(a,e,c),d(e,t)},p(a,c){c&2&&s!==(s=a[5]+"")&&W(t,s)},d(a){a&&m(e)}}}function $t(l){let e,s,t,a,c="download the palette",r,n,o,i,_,h=fe(l[0].colorPalette),u=[];for(let f=0;f<h.length;f+=1)u[f]=Qe(Ge(l,h,f));let v=l[1]&&We(l);return{c(){e=g("div"),s=g("div"),t=N("Choose a color or "),a=g("div"),a.textContent=c,r=z(),n=g("div");for(let f=0;f<u.length;f+=1)u[f].c();o=z(),v&&v.c(),this.h()},l(f){e=$(f,"DIV",{class:!0});var C=k(e);s=$(C,"DIV",{class:!0});var b=k(s);t=A(b,"Choose a color or "),a=$(b,"DIV",{class:!0,"data-svelte-h":!0}),tt(a)!=="svelte-fq88n5"&&(a.textContent=c),b.forEach(m),r=y(C),n=$(C,"DIV",{class:!0});var E=k(n);for(let G=0;G<u.length;G+=1)u[G].l(E);E.forEach(m),o=y(C),v&&v.l(C),C.forEach(m),this.h()},h(){p(a,"class","text-link svelte-1u0by6"),p(s,"class","info svelte-1u0by6"),p(n,"class","colors svelte-1u0by6"),p(e,"class","color-palette svelte-1u0by6")},m(f,C){B(f,e,C),d(e,s),d(s,t),d(s,a),d(e,r),d(e,n);for(let b=0;b<u.length;b+=1)u[b]&&u[b].m(n,null);d(e,o),v&&v.m(e,null),i||(_=st(a,"click",l[3]),i=!0)},p(f,[C]){if(C&7){h=fe(f[0].colorPalette);let b;for(b=0;b<h.length;b+=1){const E=Ge(f,h,b);u[b]?u[b].p(E,C):(u[b]=Qe(E),u[b].c(),u[b].m(n,null))}for(;b<u.length;b+=1)u[b].d(1);u.length=h.length}f[1]?v?v.p(f,C):(v=We(f),v.c(),v.m(e,null)):v&&(v.d(1),v=null)},i:U,o:U,d(f){f&&m(e),Be(u,f),v&&v.d(),i=!1,_()}}}function bt(l,e,s){let{characterData:t}=e,a=null;function c(o){a&&a.hex===o.hex?s(1,a=null):(s(1,a=o),navigator.clipboard.writeText(o.hex.toLocaleUpperCase()))}function r(){const o=document.createElement("canvas"),i=o.getContext("2d"),_=300,{colorPalette:h}=t,u=h.length,v=_*u,f=1200,C=60,b=1200+C;if(o.width=v,o.height=b,!i)return;h.forEach(({hex:j},ae)=>{i.fillStyle=j,i.fillRect(ae/u*v,0,v/u,f);const M=j.toUpperCase(),R=(ae+.5)/u*v,q=f/2;i.fillStyle=gt(j),i.font="bold 36px Quicksand",i.textAlign="center",i.textBaseline="middle",i.fillText(M,R,q)}),i.fillStyle="#333333",i.fillRect(0,f,v,C);const E=`${t.name} ✦ AnastasiaElf's OCs ✦ ocs.anastasiaelf.com/${t.nameId}`,G=20,J=b-28;i.fillStyle="#eeeeee",i.font="26px Quicksand",i.textAlign="start",i.textBaseline="middle",i.fillText(E,G,J);const Q=document.createElement("a");Q.href=o.toDataURL("image/png"),Q.download=t.name.toLowerCase()+"_color_palette.png",Q.click()}const n=o=>c(o);return l.$$set=o=>{"characterData"in o&&s(0,t=o.characterData)},[t,a,c,r,n]}class wt extends te{constructor(e){super(),se(this,e,bt,$t,Y,{characterData:0})}}function kt(l){let e,s;return{c(){e=g("img"),this.h()},l(t){e=$(t,"IMG",{src:!0,class:!0,alt:!0}),this.h()},h(){we(e.src,s=ke+"/images/ref/"+l[0]+".webp")||p(e,"src",s),p(e,"class","reference svelte-1emtsp4"),p(e,"alt","Character reference")},m(t,a){B(t,e,a)},p(t,[a]){a&1&&!we(e.src,s=ke+"/images/ref/"+t[0]+".webp")&&p(e,"src",s)},i:U,o:U,d(t){t&&m(e)}}}function Ct(l,e,s){let{characterId:t}=e;return l.$$set=a=>{"characterId"in a&&s(0,t=a.characterId)},[t]}class Vt extends te{constructor(e){super(),se(this,e,Ct,kt,Y,{characterId:0})}}function Fe(l,e,s){const t=l.slice();return t[1]=e[s],t}function Xe(l){let e,s=fe(l[0].outfits),t=[];for(let a=0;a<s.length;a+=1)t[a]=Ye(Fe(l,s,a));return{c(){e=g("div");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=$(a,"DIV",{class:!0});var c=k(e);for(let r=0;r<t.length;r+=1)t[r].l(c);c.forEach(m),this.h()},h(){p(e,"class","outfits svelte-1f64ok2")},m(a,c){B(a,e,c);for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(e,null)},p(a,c){if(c&1){s=fe(a[0].outfits);let r;for(r=0;r<s.length;r+=1){const n=Fe(a,s,r);t[r]?t[r].p(n,c):(t[r]=Ye(n),t[r].c(),t[r].m(e,null))}for(;r<t.length;r+=1)t[r].d(1);t.length=s.length}},d(a){a&&m(e),Be(t,a)}}}function Ye(l){let e,s;return{c(){e=g("img"),this.h()},l(t){e=$(t,"IMG",{src:!0,class:!0,alt:!0}),this.h()},h(){we(e.src,s=ke+"/images/outfit/"+l[0].id+"/"+l[1].id+".webp")||p(e,"src",s),p(e,"class","outfit svelte-1f64ok2"),p(e,"alt","Character outfit")},m(t,a){B(t,e,a)},p(t,a){a&1&&!we(e.src,s=ke+"/images/outfit/"+t[0].id+"/"+t[1].id+".webp")&&p(e,"src",s)},d(t){t&&m(e)}}}function It(l){let e,s=l[0].outfits&&Xe(l);return{c(){s&&s.c(),e=ie()},l(t){s&&s.l(t),e=ie()},m(t,a){s&&s.m(t,a),B(t,e,a)},p(t,[a]){t[0].outfits?s?s.p(t,a):(s=Xe(t),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},i:U,o:U,d(t){t&&m(e),s&&s.d(t)}}}function Dt(l,e,s){let{characterData:t}=e;return l.$$set=a=>{"characterData"in a&&s(0,t=a.characterData)},[t]}class Et extends te{constructor(e){super(),se(this,e,Dt,It,Y,{characterData:0})}}function Je(l){return l.toLocaleDateString("en-US",{day:"numeric",month:"long"})}function zt(l){let e,s,t=l[3][l[0]].content+"",a,c;return{c(){e=it("svg"),s=new ft(!0),this.h()},l(r){e=ut(r,"svg",{class:!0,viewBox:!0,xmlns:!0});var n=k(e);s=ht(n,!0),n.forEach(m),this.h()},h(){s.a=null,p(e,"class",a="icon icon-"+l[1]+" icon-"+l[2]+" svelte-bhuw02"),p(e,"viewBox",c=l[3][l[0]].viewBox),p(e,"xmlns","http://www.w3.org/2000/svg")},m(r,n){B(r,e,n),s.m(t,e)},p(r,[n]){n&1&&t!==(t=r[3][r[0]].content+"")&&s.p(t),n&6&&a!==(a="icon icon-"+r[1]+" icon-"+r[2]+" svelte-bhuw02")&&p(e,"class",a),n&1&&c!==(c=r[3][r[0]].viewBox)&&p(e,"viewBox",c)},i:U,o:U,d(r){r&&m(e)}}}function yt(l,e,s){let{type:t}=e,{size:a="md"}=e,{color:c="accent"}=e;const r={birthday:{viewBox:"0 0 448 512",content:'<path d="M86.4 5.5L61.8 47.6C58 54.1 56 61.6 56 69.2V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.2c0-7.6-2-15-5.8-21.6L105.6 5.5C103.6 2.1 100 0 96 0s-7.6 2.1-9.6 5.5zm128 0L189.8 47.6c-3.8 6.5-5.8 14-5.8 21.6V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.2c0-7.6-2-15-5.8-21.6L233.6 5.5C231.6 2.1 228 0 224 0s-7.6 2.1-9.6 5.5zM317.8 47.6c-3.8 6.5-5.8 14-5.8 21.6V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.2c0-7.6-2-15-5.8-21.6L361.6 5.5C359.6 2.1 356 0 352 0s-7.6 2.1-9.6 5.5L317.8 47.6zM128 176c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c-35.3 0-64 28.7-64 64v71c8.3 5.2 18.1 9 28.8 9c13.5 0 27.2-6.1 38.4-13.4c5.4-3.5 9.9-7.1 13-9.7c1.5-1.3 2.7-2.4 3.5-3.1c.4-.4 .7-.6 .8-.8l.1-.1 0 0 0 0s0 0 0 0s0 0 0 0c3.1-3.2 7.4-4.9 11.9-4.8s8.6 2.1 11.6 5.4l0 0 0 0 .1 .1c.1 .1 .4 .4 .7 .7c.7 .7 1.7 1.7 3.1 3c2.8 2.6 6.8 6.1 11.8 9.5c10.2 7.1 23 13.1 36.3 13.1s26.1-6 36.3-13.1c5-3.5 9-6.9 11.8-9.5c1.4-1.3 2.4-2.3 3.1-3c.3-.3 .6-.6 .7-.7l.1-.1c3-3.5 7.4-5.4 12-5.4s9 2 12 5.4l.1 .1c.1 .1 .4 .4 .7 .7c.7 .7 1.7 1.7 3.1 3c2.8 2.6 6.8 6.1 11.8 9.5c10.2 7.1 23 13.1 36.3 13.1s26.1-6 36.3-13.1c5-3.5 9-6.9 11.8-9.5c1.4-1.3 2.4-2.3 3.1-3c.3-.3 .6-.6 .7-.7l.1-.1c2.9-3.4 7.1-5.3 11.6-5.4s8.7 1.6 11.9 4.8l0 0 0 0 0 0 .1 .1c.2 .2 .4 .4 .8 .8c.8 .7 1.9 1.8 3.5 3.1c3.1 2.6 7.5 6.2 13 9.7c11.2 7.3 24.9 13.4 38.4 13.4c10.7 0 20.5-3.9 28.8-9V288c0-35.3-28.7-64-64-64V176c0-17.7-14.3-32-32-32s-32 14.3-32 32v48H256V176c0-17.7-14.3-32-32-32s-32 14.3-32 32v48H128V176zM448 394.6c-8.5 3.3-18.2 5.4-28.8 5.4c-22.5 0-42.4-9.9-55.8-18.6c-4.1-2.7-7.8-5.4-10.9-7.8c-2.8 2.4-6.1 5-9.8 7.5C329.8 390 310.6 400 288 400s-41.8-10-54.6-18.9c-3.5-2.4-6.7-4.9-9.4-7.2c-2.7 2.3-5.9 4.7-9.4 7.2C201.8 390 182.6 400 160 400s-41.8-10-54.6-18.9c-3.7-2.6-7-5.2-9.8-7.5c-3.1 2.4-6.8 5.1-10.9 7.8C71.2 390.1 51.3 400 28.8 400c-10.6 0-20.3-2.2-28.8-5.4V480c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32V394.6z"/>'},world:{viewBox:"0 0 512 512",content:'<path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/>'},genderless:{viewBox:"0 0 512 512",content:'<path d="M192 144a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 288a176 176 0 1 0 0-352 176 176 0 1 0 0 352z"/>'},mars:{viewBox:"0 0 448 512",content:'<path d="M289.8 46.8c3.7-9 12.5-14.8 22.2-14.8H424c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-33.4-33.4L321 204.2c19.5 28.4 31 62.7 31 99.8c0 97.2-78.8 176-176 176S0 401.2 0 304s78.8-176 176-176c37 0 71.4 11.4 99.8 31l52.6-52.6L295 73c-6.9-6.9-8.9-17.2-5.2-26.2zM400 80l0 0h0v0zM176 416a112 112 0 1 0 0-224 112 112 0 1 0 0 224z"/>'},venus:{viewBox:"0 0 384 512",content:'<path d="M80 176a112 112 0 1 1 224 0A112 112 0 1 1 80 176zM224 349.1c81.9-15 144-86.8 144-173.1C368 78.8 289.2 0 192 0S16 78.8 16 176c0 86.3 62.1 158.1 144 173.1V384H128c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v32c0 17.7 14.3 32 32 32s32-14.3 32-32V448h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H224V349.1z"/>'},"mars-and-venus":{viewBox:"0 0 512 512",content:'<path d="M337.8 14.8C341.5 5.8 350.3 0 360 0H472c13.3 0 24 10.7 24 24V136c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-24.7 24.7C407 163.3 416 192.6 416 224c0 80.2-59 146.6-136 158.2V408h24c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V456H208c-13.3 0-24-10.7-24-24s10.7-24 24-24h24V382.2C155 370.6 96 304.2 96 224c0-88.4 71.6-160 160-160c39.6 0 75.9 14.4 103.8 38.2L382.1 80 343 41c-6.9-6.9-8.9-17.2-5.2-26.2zM448 48l0 0h0v0zM352 224a96 96 0 1 0 -192 0 96 96 0 1 0 192 0z"/>'},download:{viewBox:"0 0 640 512",content:'<path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"/>'}};return l.$$set=n=>{"type"in n&&s(0,t=n.type),"size"in n&&s(1,a=n.size),"color"in n&&s(2,c=n.color)},[t,a,c,r]}class Se extends te{constructor(e){super(),se(this,e,yt,zt,Y,{type:0,size:1,color:2})}}function Ke(l){let e,s,t,a=l[0].shortName+"",c,r;return e=new at({}),{c(){H(e.$$.fragment),s=z(),t=g("span"),c=N(a)},l(n){L(e.$$.fragment,n),s=y(n),t=$(n,"SPAN",{});var o=k(t);c=A(o,a),o.forEach(m)},m(n,o){P(e,n,o),B(n,s,o),B(n,t,o),d(t,c),r=!0},p(n,o){(!r||o&1)&&a!==(a=n[0].shortName+"")&&W(c,a)},i(n){r||(V(e.$$.fragment,n),r=!0)},o(n){I(e.$$.fragment,n),r=!1},d(n){n&&(m(s),m(t)),T(e,n)}}}function St(l){let e,s,t,a,c,r,n,o=l[0].name+"",i,_,h,u,v,f=l[0].species+"",C,b,E,G,J,Q=l[0].description+"",j,ae,M,R,q,Ie,le,ue=l[0].pronoun+"",me,De,F,K,Ee,ce,he=Je(l[0].birthday)+"",ve,ze,X,Z,ye,re,de=l[0].world+"",_e,O;s=new mt({props:{characterId:l[0].id}});let D=l[0].shortName&&Ke(l);return E=new at({}),q=new Se({props:{type:l[0].gender}}),K=new Se({props:{type:"birthday"}}),Z=new Se({props:{type:"world"}}),{c(){e=g("div"),H(s.$$.fragment),t=z(),a=g("div"),c=g("div"),r=g("div"),n=g("span"),i=N(o),_=z(),D&&D.c(),h=z(),u=g("div"),v=g("span"),C=N(f),b=z(),H(E.$$.fragment),G=z(),J=g("span"),j=N(Q),ae=z(),M=g("div"),R=g("div"),H(q.$$.fragment),Ie=z(),le=g("span"),me=N(ue),De=z(),F=g("div"),H(K.$$.fragment),Ee=z(),ce=g("span"),ve=N(he),ze=z(),X=g("div"),H(Z.$$.fragment),ye=z(),re=g("span"),_e=N(de),this.h()},l(w){e=$(w,"DIV",{class:!0});var S=k(e);L(s.$$.fragment,S),t=y(S),a=$(S,"DIV",{class:!0});var x=k(a);c=$(x,"DIV",{class:!0});var ee=k(c);r=$(ee,"DIV",{class:!0});var pe=k(r);n=$(pe,"SPAN",{});var Me=k(n);i=A(Me,o),Me.forEach(m),_=y(pe),D&&D.l(pe),pe.forEach(m),h=y(ee),u=$(ee,"DIV",{class:!0});var ne=k(u);v=$(ne,"SPAN",{});var Ne=k(v);C=A(Ne,f),Ne.forEach(m),b=y(ne),L(E.$$.fragment,ne),G=y(ne),J=$(ne,"SPAN",{});var Ae=k(J);j=A(Ae,Q),Ae.forEach(m),ne.forEach(m),ee.forEach(m),ae=y(x),M=$(x,"DIV",{class:!0});var oe=k(M);R=$(oe,"DIV",{class:!0});var ge=k(R);L(q.$$.fragment,ge),Ie=y(ge),le=$(ge,"SPAN",{class:!0});var He=k(le);me=A(He,ue),He.forEach(m),ge.forEach(m),De=y(oe),F=$(oe,"DIV",{class:!0});var $e=k(F);L(K.$$.fragment,$e),Ee=y($e),ce=$($e,"SPAN",{class:!0});var Le=k(ce);ve=A(Le,he),Le.forEach(m),$e.forEach(m),ze=y(oe),X=$(oe,"DIV",{class:!0});var be=k(X);L(Z.$$.fragment,be),ye=y(be),re=$(be,"SPAN",{class:!0});var Pe=k(re);_e=A(Pe,de),Pe.forEach(m),be.forEach(m),oe.forEach(m),x.forEach(m),S.forEach(m),this.h()},h(){p(r,"class","name svelte-181942w"),p(u,"class","description svelte-181942w"),p(c,"class","main-info svelte-181942w"),p(le,"class","svelte-181942w"),p(R,"class","icon-param svelte-181942w"),p(ce,"class","svelte-181942w"),p(F,"class","icon-param svelte-181942w"),p(re,"class","svelte-181942w"),p(X,"class","icon-param svelte-181942w"),p(M,"class","params svelte-181942w"),p(a,"class","info svelte-181942w"),p(e,"class","character-bio svelte-181942w")},m(w,S){B(w,e,S),P(s,e,null),d(e,t),d(e,a),d(a,c),d(c,r),d(r,n),d(n,i),d(r,_),D&&D.m(r,null),d(c,h),d(c,u),d(u,v),d(v,C),d(u,b),P(E,u,null),d(u,G),d(u,J),d(J,j),d(a,ae),d(a,M),d(M,R),P(q,R,null),d(R,Ie),d(R,le),d(le,me),d(M,De),d(M,F),P(K,F,null),d(F,Ee),d(F,ce),d(ce,ve),d(M,ze),d(M,X),P(Z,X,null),d(X,ye),d(X,re),d(re,_e),O=!0},p(w,[S]){const x={};S&1&&(x.characterId=w[0].id),s.$set(x),(!O||S&1)&&o!==(o=w[0].name+"")&&W(i,o),w[0].shortName?D?(D.p(w,S),S&1&&V(D,1)):(D=Ke(w),D.c(),V(D,1),D.m(r,null)):D&&(Ce(),I(D,1,1,()=>{D=null}),Ve()),(!O||S&1)&&f!==(f=w[0].species+"")&&W(C,f),(!O||S&1)&&Q!==(Q=w[0].description+"")&&W(j,Q);const ee={};S&1&&(ee.type=w[0].gender),q.$set(ee),(!O||S&1)&&ue!==(ue=w[0].pronoun+"")&&W(me,ue),(!O||S&1)&&he!==(he=Je(w[0].birthday)+"")&&W(ve,he),(!O||S&1)&&de!==(de=w[0].world+"")&&W(_e,de)},i(w){O||(V(s.$$.fragment,w),V(D),V(E.$$.fragment,w),V(q.$$.fragment,w),V(K.$$.fragment,w),V(Z.$$.fragment,w),O=!0)},o(w){I(s.$$.fragment,w),I(D),I(E.$$.fragment,w),I(q.$$.fragment,w),I(K.$$.fragment,w),I(Z.$$.fragment,w),O=!1},d(w){w&&m(e),T(s),D&&D.d(),T(E),T(q),T(K),T(Z)}}}function Bt(l,e,s){let{character:t}=e;return l.$$set=a=>{"character"in a&&s(0,t=a.character)},[t]}class Mt extends te{constructor(e){super(),se(this,e,Bt,St,Y,{character:0})}}function Nt(l){let e,s;const t=l[1].default,a=lt(t,l,l[0],null);return{c(){e=g("div"),a&&a.c(),this.h()},l(c){e=$(c,"DIV",{class:!0});var r=k(e);a&&a.l(r),r.forEach(m),this.h()},h(){p(e,"class","character-section svelte-1f251xg")},m(c,r){B(c,e,r),a&&a.m(e,null),s=!0},p(c,[r]){a&&a.p&&(!s||r&1)&&ct(a,t,c,c[0],s?nt(t,c[0],r,null):rt(c[0]),null)},i(c){s||(V(a,c),s=!0)},o(c){I(a,c),s=!1},d(c){c&&m(e),a&&a.d(c)}}}function At(l,e,s){let{$$slots:t={},$$scope:a}=e;return l.$$set=c=>{"$$scope"in c&&s(0,a=c.$$scope)},[a,t]}class Ze extends te{constructor(e){super(),se(this,e,At,Nt,Y,{})}}function Ht(l){let e,s="Character not found";return{c(){e=g("div"),e.textContent=s,this.h()},l(t){e=$(t,"DIV",{class:!0,"data-svelte-h":!0}),tt(e)!=="svelte-nhsgpl"&&(e.textContent=s),this.h()},h(){p(e,"class","error-message")},m(t,a){B(t,e,a)},p:U,i:U,o:U,d(t){t&&m(e)}}}function Lt(l){let e,s,t,a,c,r,n,o;s=new Ze({props:{$$slots:{default:[Pt]},$$scope:{ctx:l}}}),a=new Ze({props:{$$slots:{default:[Tt]},$$scope:{ctx:l}}}),r=new Vt({props:{characterId:l[0].id}});let i=l[0].outfits&&et(l);return{c(){e=g("div"),H(s.$$.fragment),t=z(),H(a.$$.fragment),c=z(),H(r.$$.fragment),n=z(),i&&i.c(),this.h()},l(_){e=$(_,"DIV",{class:!0});var h=k(e);L(s.$$.fragment,h),t=y(h),L(a.$$.fragment,h),c=y(h),L(r.$$.fragment,h),n=y(h),i&&i.l(h),h.forEach(m),this.h()},h(){p(e,"class","character svelte-2il6o6")},m(_,h){B(_,e,h),P(s,e,null),d(e,t),P(a,e,null),d(e,c),P(r,e,null),d(e,n),i&&i.m(e,null),o=!0},p(_,h){const u={};h&33&&(u.$$scope={dirty:h,ctx:_}),s.$set(u);const v={};h&33&&(v.$$scope={dirty:h,ctx:_}),a.$set(v);const f={};h&1&&(f.characterId=_[0].id),r.$set(f),_[0].outfits?i?(i.p(_,h),h&1&&V(i,1)):(i=et(_),i.c(),V(i,1),i.m(e,null)):i&&(Ce(),I(i,1,1,()=>{i=null}),Ve())},i(_){o||(V(s.$$.fragment,_),V(a.$$.fragment,_),V(r.$$.fragment,_),V(i),o=!0)},o(_){I(s.$$.fragment,_),I(a.$$.fragment,_),I(r.$$.fragment,_),I(i),o=!1},d(_){_&&m(e),T(s),T(a),T(r),i&&i.d()}}}function Pt(l){let e,s;return e=new Mt({props:{character:l[0]}}),{c(){H(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,a){P(e,t,a),s=!0},p(t,a){const c={};a&1&&(c.character=t[0]),e.$set(c)},i(t){s||(V(e.$$.fragment,t),s=!0)},o(t){I(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function xe(l){let e,s;return e=new wt({props:{characterData:l[0]}}),{c(){H(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,a){P(e,t,a),s=!0},p(t,a){const c={};a&1&&(c.characterData=t[0]),e.$set(c)},i(t){s||(V(e.$$.fragment,t),s=!0)},o(t){I(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function Tt(l){let e=l[0].id,s,t,a=xe(l);return{c(){a.c(),s=ie()},l(c){a.l(c),s=ie()},m(c,r){a.m(c,r),B(c,s,r),t=!0},p(c,r){r&1&&Y(e,e=c[0].id)?(Ce(),I(a,1,1,U),Ve(),a=xe(c),a.c(),V(a,1),a.m(s.parentNode,s)):a.p(c,r)},i(c){t||(V(a),t=!0)},o(c){I(a),t=!1},d(c){c&&m(s),a.d(c)}}}function et(l){let e,s;return e=new Et({props:{characterData:l[0]}}),{c(){H(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,a){P(e,t,a),s=!0},p(t,a){const c={};a&1&&(c.characterData=t[0]),e.$set(c)},i(t){s||(V(e.$$.fragment,t),s=!0)},o(t){I(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function Ut(l){let e,s,t,a;const c=[Lt,Ht],r=[];function n(o,i){return o[0]?0:1}return e=n(l),s=r[e]=c[e](l),{c(){s.c(),t=ie()},l(o){s.l(o),t=ie()},m(o,i){r[e].m(o,i),B(o,t,i),a=!0},p(o,[i]){let _=e;e=n(o),e===_?r[e].p(o,i):(Ce(),I(r[_],1,1,()=>{r[_]=null}),Ve(),s=r[e],s?s.p(o,i):(s=r[e]=c[e](o),s.c()),V(s,1),s.m(t.parentNode,t))},i(o){a||(V(s),a=!0)},o(o){I(s),a=!1},d(o){o&&m(t),r[e].d(o)}}}function Rt(l,e,s){let t,a,c,r;Te(l,dt,o=>s(3,r=o));const n=ot("metaStore");return Te(l,n,o=>s(4,c=o)),l.$$.update=()=>{l.$$.dirty&8&&s(2,t=r.params.character),l.$$.dirty&4&&s(0,a=vt.find(o=>o.id===t||o.nameId===t)),l.$$.dirty&1&&a&&(Ue(n,c.title=`${a.name} ✦ AnastasiaElf's OCs`,c),Ue(n,c.favicon=`favicons/${a.id}.png`,c))},[a,n,t,r]}class Ft extends te{constructor(e){super(),se(this,e,Rt,Ut,Y,{})}}export{Ft as component};
