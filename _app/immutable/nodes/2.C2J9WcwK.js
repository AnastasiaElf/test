import{s as D,n as O}from"../chunks/scheduler.Cu_nLO_j.js";import{S as V,i as A,e as v,w as C,s as j,t as G,c as p,a as $,x as q,f as B,b as K,d as m,m as d,g as y,h as _,y as L,j as M,q as k,o as I,z as P,u as x,p as F,A as N,k as H}from"../chunks/index.BzBAjcrX.js";import{A as J,e as b,c as Q}from"../chunks/Avatar.DxVWmxUW.js";import{b as w}from"../chunks/paths.CYWTMZ3p.js";const R=[{type:"personal",title:"Personal Characters"},{type:"mascot",title:"Mascots"}];function T(o){let e,n,t,c,i,f=o[0].name+"",l,r,u;return t=new J({props:{characterId:o[0].id}}),{c(){e=v("a"),n=v("div"),C(t.$$.fragment),c=j(),i=v("div"),l=G(f),this.h()},l(a){e=p(a,"A",{href:!0});var h=$(e);n=p(h,"DIV",{class:!0});var s=$(n);q(t.$$.fragment,s),c=B(s),i=p(s,"DIV",{class:!0});var g=$(i);l=K(g,f),g.forEach(m),s.forEach(m),h.forEach(m),this.h()},h(){d(i,"class","name svelte-1dvjw40"),d(n,"class","character svelte-1dvjw40"),d(e,"href",r=w+"/"+o[0].nameId)},m(a,h){y(a,e,h),_(e,n),L(t,n,null),_(n,c),_(n,i),_(i,l),u=!0},p(a,[h]){const s={};h&1&&(s.characterId=a[0].id),t.$set(s),(!u||h&1)&&f!==(f=a[0].name+"")&&M(l,f),(!u||h&1&&r!==(r=w+"/"+a[0].nameId))&&d(e,"href",r)},i(a){u||(k(t.$$.fragment,a),u=!0)},o(a){I(t.$$.fragment,a),u=!1},d(a){a&&m(e),P(t)}}}function U(o,e,n){let{character:t}=e;return o.$$set=c=>{"character"in c&&n(0,t=c.character)},[t]}class W extends V{constructor(e){super(),A(this,e,U,T,D,{character:0})}}function S(o,e,n){const t=o.slice();return t[2]=e[n],t}function z(o){let e,n;return e=new W({props:{character:o[2]}}),{c(){C(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,c){L(e,t,c),n=!0},p(t,c){const i={};c&1&&(i.character=t[2]),e.$set(i)},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function X(o){let e,n,t,c,i,f,l=b(o[0]),r=[];for(let a=0;a<l.length;a+=1)r[a]=z(S(o,l,a));const u=a=>I(r[a],1,1,()=>{r[a]=null});return{c(){e=v("div"),n=v("div"),t=G(o[1]),c=j(),i=v("div");for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){e=p(a,"DIV",{class:!0});var h=$(e);n=p(h,"DIV",{class:!0});var s=$(n);t=K(s,o[1]),s.forEach(m),c=B(h),i=p(h,"DIV",{class:!0});var g=$(i);for(let E=0;E<r.length;E+=1)r[E].l(g);g.forEach(m),h.forEach(m),this.h()},h(){d(n,"class","character-group-title svelte-horo2g"),d(i,"class","character-list svelte-horo2g"),d(e,"class","character-group svelte-horo2g")},m(a,h){y(a,e,h),_(e,n),_(n,t),_(e,c),_(e,i);for(let s=0;s<r.length;s+=1)r[s]&&r[s].m(i,null);f=!0},p(a,[h]){if((!f||h&2)&&M(t,a[1]),h&1){l=b(a[0]);let s;for(s=0;s<l.length;s+=1){const g=S(a,l,s);r[s]?(r[s].p(g,h),k(r[s],1)):(r[s]=z(g),r[s].c(),k(r[s],1),r[s].m(i,null))}for(x(),s=l.length;s<r.length;s+=1)u(s);F()}},i(a){if(!f){for(let h=0;h<l.length;h+=1)k(r[h]);f=!0}},o(a){r=r.filter(Boolean);for(let h=0;h<r.length;h+=1)I(r[h]);f=!1},d(a){a&&m(e),N(r,a)}}}function Y(o,e,n){let{characters:t}=e,{title:c}=e;return o.$$set=i=>{"characters"in i&&n(0,t=i.characters),"title"in i&&n(1,c=i.title)},[t,c]}class Z extends V{constructor(e){super(),A(this,e,Y,X,D,{characters:0,title:1})}}function ee(o,e,n){const t=o.slice();return t[1]=e[n],t}function te(o){let e,n;function t(...c){return o[0](o[1],...c)}return e=new Z({props:{characters:Q.filter(t),title:o[1].title}}),{c(){C(e.$$.fragment)},l(c){q(e.$$.fragment,c)},m(c,i){L(e,c,i),n=!0},p(c,i){o=c},i(c){n||(k(e.$$.fragment,c),n=!0)},o(c){I(e.$$.fragment,c),n=!1},d(c){P(e,c)}}}function re(o){let e,n,t,c,i=b(R),f=[];for(let l=0;l<i.length;l+=1)f[l]=te(ee(o,i,l));return{c(){e=v("link"),n=j(),t=v("div");for(let l=0;l<f.length;l+=1)f[l].c();this.h()},l(l){const r=H("svelte-24okqn",document.head);e=p(r,"LINK",{rel:!0,type:!0,href:!0}),r.forEach(m),n=B(l),t=p(l,"DIV",{class:!0});var u=$(t);for(let a=0;a<f.length;a+=1)f[a].l(u);u.forEach(m),this.h()},h(){d(e,"rel","icon"),d(e,"type","image/png"),d(e,"href",w+"/favicon.png"),document.title="AnastasiaElf's OCs",d(t,"class","characters svelte-g4r38b")},m(l,r){_(document.head,e),y(l,n,r),y(l,t,r);for(let u=0;u<f.length;u+=1)f[u]&&f[u].m(t,null);c=!0},p:O,i(l){if(!c){for(let r=0;r<i.length;r+=1)k(f[r]);c=!0}},o(l){f=f.filter(Boolean);for(let r=0;r<f.length;r+=1)I(f[r]);c=!1},d(l){l&&(m(n),m(t)),m(e),N(f,l)}}}function ae(o){return[(n,t)=>t.category===n.type]}class oe extends V{constructor(e){super(),A(this,e,ae,re,D,{})}}export{oe as component};
