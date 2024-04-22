import{s as y,n as H,g as J,c as K,a as B}from"../chunks/scheduler.BISGLLOj.js";import{S as w,i as C,e as v,v as D,s as G,t as L,c as p,a as $,w as V,f as M,b as O,d as u,l as d,g as A,h as g,x as S,j as z,p as b,n as I,y as j,r as N,o as Q,A as F}from"../chunks/index.BZ1zJ2VX.js";import{A as R,e as E,c as T}from"../chunks/Avatar.B3A0y5ii.js";import{b as P}from"../chunks/paths.DHiOfrhg.js";const U=[{type:"personal",title:"Personal Characters"},{type:"mascot",title:"Mascots"}];function W(l){let e,n,r,t,a,i=l[0].name+"",h,o,m;return r=new R({props:{characterId:l[0].id}}),{c(){e=v("a"),n=v("div"),D(r.$$.fragment),t=G(),a=v("div"),h=L(i),this.h()},l(c){e=p(c,"A",{href:!0});var f=$(e);n=p(f,"DIV",{class:!0});var s=$(n);V(r.$$.fragment,s),t=M(s),a=p(s,"DIV",{class:!0});var _=$(a);h=O(_,i),_.forEach(u),s.forEach(u),f.forEach(u),this.h()},h(){d(a,"class","name svelte-1dvjw40"),d(n,"class","character svelte-1dvjw40"),d(e,"href",o=P+"/"+l[0].nameId)},m(c,f){A(c,e,f),g(e,n),S(r,n,null),g(n,t),g(n,a),g(a,h),m=!0},p(c,[f]){const s={};f&1&&(s.characterId=c[0].id),r.$set(s),(!m||f&1)&&i!==(i=c[0].name+"")&&z(h,i),(!m||f&1&&o!==(o=P+"/"+c[0].nameId))&&d(e,"href",o)},i(c){m||(b(r.$$.fragment,c),m=!0)},o(c){I(r.$$.fragment,c),m=!1},d(c){c&&u(e),j(r)}}}function X(l,e,n){let{character:r}=e;return l.$$set=t=>{"character"in t&&n(0,r=t.character)},[r]}class Y extends w{constructor(e){super(),C(this,e,X,W,y,{character:0})}}function q(l,e,n){const r=l.slice();return r[2]=e[n],r}function x(l){let e,n;return e=new Y({props:{character:l[2]}}),{c(){D(e.$$.fragment)},l(r){V(e.$$.fragment,r)},m(r,t){S(e,r,t),n=!0},p(r,t){const a={};t&1&&(a.character=r[2]),e.$set(a)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){I(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}function Z(l){let e,n,r,t,a,i,h=E(l[0]),o=[];for(let c=0;c<h.length;c+=1)o[c]=x(q(l,h,c));const m=c=>I(o[c],1,1,()=>{o[c]=null});return{c(){e=v("div"),n=v("div"),r=L(l[1]),t=G(),a=v("div");for(let c=0;c<o.length;c+=1)o[c].c();this.h()},l(c){e=p(c,"DIV",{class:!0});var f=$(e);n=p(f,"DIV",{class:!0});var s=$(n);r=O(s,l[1]),s.forEach(u),t=M(f),a=p(f,"DIV",{class:!0});var _=$(a);for(let k=0;k<o.length;k+=1)o[k].l(_);_.forEach(u),f.forEach(u),this.h()},h(){d(n,"class","character-group-title svelte-horo2g"),d(a,"class","character-list svelte-horo2g"),d(e,"class","character-group svelte-horo2g")},m(c,f){A(c,e,f),g(e,n),g(n,r),g(e,t),g(e,a);for(let s=0;s<o.length;s+=1)o[s]&&o[s].m(a,null);i=!0},p(c,[f]){if((!i||f&2)&&z(r,c[1]),f&1){h=E(c[0]);let s;for(s=0;s<h.length;s+=1){const _=q(c,h,s);o[s]?(o[s].p(_,f),b(o[s],1)):(o[s]=x(_),o[s].c(),b(o[s],1),o[s].m(a,null))}for(N(),s=h.length;s<o.length;s+=1)m(s);Q()}},i(c){if(!i){for(let f=0;f<h.length;f+=1)b(o[f]);i=!0}},o(c){o=o.filter(Boolean);for(let f=0;f<o.length;f+=1)I(o[f]);i=!1},d(c){c&&u(e),F(o,c)}}}function ee(l,e,n){let{characters:r}=e,{title:t}=e;return l.$$set=a=>{"characters"in a&&n(0,r=a.characters),"title"in a&&n(1,t=a.title)},[r,t]}class te extends w{constructor(e){super(),C(this,e,ee,Z,y,{characters:0,title:1})}}function re(l,e,n){const r=l.slice();return r[3]=e[n],r}function ae(l){let e,n;function r(...t){return l[1](l[3],...t)}return e=new te({props:{characters:T.filter(r),title:l[3].title}}),{c(){D(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,a){S(e,t,a),n=!0},p(t,a){l=t},i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){j(e,t)}}}function ne(l){let e,n,r=E(U),t=[];for(let a=0;a<r.length;a+=1)t[a]=ae(re(l,r,a));return{c(){e=v("div");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=p(a,"DIV",{class:!0});var i=$(e);for(let h=0;h<t.length;h+=1)t[h].l(i);i.forEach(u),this.h()},h(){d(e,"class","characters svelte-g4r38b")},m(a,i){A(a,e,i);for(let h=0;h<t.length;h+=1)t[h]&&t[h].m(e,null);n=!0},p:H,i(a){if(!n){for(let i=0;i<r.length;i+=1)b(t[i]);n=!0}},o(a){t=t.filter(Boolean);for(let i=0;i<t.length;i+=1)I(t[i]);n=!1},d(a){a&&u(e),F(t,a)}}}function ce(l,e,n){let r;const t=J("metaStore");return K(l,t,i=>n(2,r=i)),B(t,r.title="AnastasiaElf's OCs",r),B(t,r.favicon="favicon.png",r),[t,(i,h)=>h.category===i.type]}class fe extends w{constructor(e){super(),C(this,e,ce,ne,y,{})}}export{fe as component};