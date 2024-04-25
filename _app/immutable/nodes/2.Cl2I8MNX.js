import{s as E,n as H}from"../chunks/scheduler.Cu_nLO_j.js";import{S as w,i as D,e as v,v as V,s as z,t as G,c as p,a as $,w as C,f as L,b as M,d as u,l as d,g as j,h as g,x as A,j as x,p as I,n as k,y as B,r as J,o as K,z as F}from"../chunks/index.CTcjmRTp.js";import{A as N,e as y,c as O}from"../chunks/Avatar.DLYSp8xz.js";import{b as P}from"../chunks/paths.CVro4pdp.js";const Q=[{type:"personal",title:"Personal Characters"},{type:"mascot",title:"Mascots"}];function R(s){let e,n,r,t,a,h=s[0].name+"",f,o,m;return r=new N({props:{characterId:s[0].id}}),{c(){e=v("a"),n=v("div"),V(r.$$.fragment),t=z(),a=v("div"),f=G(h),this.h()},l(c){e=p(c,"A",{href:!0});var i=$(e);n=p(i,"DIV",{class:!0});var l=$(n);C(r.$$.fragment,l),t=L(l),a=p(l,"DIV",{class:!0});var _=$(a);f=M(_,h),_.forEach(u),l.forEach(u),i.forEach(u),this.h()},h(){d(a,"class","name svelte-1dvjw40"),d(n,"class","character svelte-1dvjw40"),d(e,"href",o=P+"/"+s[0].nameId)},m(c,i){j(c,e,i),g(e,n),A(r,n,null),g(n,t),g(n,a),g(a,f),m=!0},p(c,[i]){const l={};i&1&&(l.characterId=c[0].id),r.$set(l),(!m||i&1)&&h!==(h=c[0].name+"")&&x(f,h),(!m||i&1&&o!==(o=P+"/"+c[0].nameId))&&d(e,"href",o)},i(c){m||(I(r.$$.fragment,c),m=!0)},o(c){k(r.$$.fragment,c),m=!1},d(c){c&&u(e),B(r)}}}function T(s,e,n){let{character:r}=e;return s.$$set=t=>{"character"in t&&n(0,r=t.character)},[r]}class U extends w{constructor(e){super(),D(this,e,T,R,E,{character:0})}}function S(s,e,n){const r=s.slice();return r[2]=e[n],r}function q(s){let e,n;return e=new U({props:{character:s[2]}}),{c(){V(e.$$.fragment)},l(r){C(e.$$.fragment,r)},m(r,t){A(e,r,t),n=!0},p(r,t){const a={};t&1&&(a.character=r[2]),e.$set(a)},i(r){n||(I(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){B(e,r)}}}function W(s){let e,n,r,t,a,h,f=y(s[0]),o=[];for(let c=0;c<f.length;c+=1)o[c]=q(S(s,f,c));const m=c=>k(o[c],1,1,()=>{o[c]=null});return{c(){e=v("div"),n=v("div"),r=G(s[1]),t=z(),a=v("div");for(let c=0;c<o.length;c+=1)o[c].c();this.h()},l(c){e=p(c,"DIV",{class:!0});var i=$(e);n=p(i,"DIV",{class:!0});var l=$(n);r=M(l,s[1]),l.forEach(u),t=L(i),a=p(i,"DIV",{class:!0});var _=$(a);for(let b=0;b<o.length;b+=1)o[b].l(_);_.forEach(u),i.forEach(u),this.h()},h(){d(n,"class","character-group-title svelte-horo2g"),d(a,"class","character-list svelte-horo2g"),d(e,"class","character-group svelte-horo2g")},m(c,i){j(c,e,i),g(e,n),g(n,r),g(e,t),g(e,a);for(let l=0;l<o.length;l+=1)o[l]&&o[l].m(a,null);h=!0},p(c,[i]){if((!h||i&2)&&x(r,c[1]),i&1){f=y(c[0]);let l;for(l=0;l<f.length;l+=1){const _=S(c,f,l);o[l]?(o[l].p(_,i),I(o[l],1)):(o[l]=q(_),o[l].c(),I(o[l],1),o[l].m(a,null))}for(J(),l=f.length;l<o.length;l+=1)m(l);K()}},i(c){if(!h){for(let i=0;i<f.length;i+=1)I(o[i]);h=!0}},o(c){o=o.filter(Boolean);for(let i=0;i<o.length;i+=1)k(o[i]);h=!1},d(c){c&&u(e),F(o,c)}}}function X(s,e,n){let{characters:r}=e,{title:t}=e;return s.$$set=a=>{"characters"in a&&n(0,r=a.characters),"title"in a&&n(1,t=a.title)},[r,t]}class Y extends w{constructor(e){super(),D(this,e,X,W,E,{characters:0,title:1})}}function Z(s,e,n){const r=s.slice();return r[1]=e[n],r}function ee(s){let e,n;function r(...t){return s[0](s[1],...t)}return e=new Y({props:{characters:O.filter(r),title:s[1].title}}),{c(){V(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,a){A(e,t,a),n=!0},p(t,a){s=t},i(t){n||(I(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function te(s){let e,n,r=y(Q),t=[];for(let a=0;a<r.length;a+=1)t[a]=ee(Z(s,r,a));return{c(){e=v("div");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=p(a,"DIV",{class:!0});var h=$(e);for(let f=0;f<t.length;f+=1)t[f].l(h);h.forEach(u),this.h()},h(){d(e,"class","characters svelte-g4r38b")},m(a,h){j(a,e,h);for(let f=0;f<t.length;f+=1)t[f]&&t[f].m(e,null);n=!0},p:H,i(a){if(!n){for(let h=0;h<r.length;h+=1)I(t[h]);n=!0}},o(a){t=t.filter(Boolean);for(let h=0;h<t.length;h+=1)k(t[h]);n=!1},d(a){a&&u(e),F(t,a)}}}function re(s){return[(n,r)=>r.category===n.type]}class se extends w{constructor(e){super(),D(this,e,re,te,E,{})}}export{se as component};
