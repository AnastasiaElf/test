import{s as C,n as K,c as N,a as O}from"../chunks/scheduler.cEBr5s-v.js";import{S,i as j,e as p,k as w,s as q,t as L,c as $,a as b,l as y,f as B,b as z,d as m,n as d,g as I,h as g,o as E,j as F,p as v,q as k,r as D,y as Q,w as R,A as J}from"../chunks/index.DJPwxw4W.js";import{A as T,e as A,c as U}from"../chunks/Avatar.DZ4YCGiI.js";import{b as H}from"../chunks/paths.CvtpRdWe.js";import{H as W,m as M}from"../chunks/HeadMeta.Jnuo3Nwe.js";const X=[{type:"personal",title:"Personal Characters"},{type:"mascot",title:"Mascots"}];function Y(i){let e,a,t,c,l,f=i[0].name+"",s,r,u;return t=new T({props:{characterId:i[0].id}}),{c(){e=p("a"),a=p("div"),w(t.$$.fragment),c=q(),l=p("div"),s=L(f),this.h()},l(n){e=$(n,"A",{href:!0});var h=b(e);a=$(h,"DIV",{class:!0});var o=b(a);y(t.$$.fragment,o),c=B(o),l=$(o,"DIV",{class:!0});var _=b(l);s=z(_,f),_.forEach(m),o.forEach(m),h.forEach(m),this.h()},h(){d(l,"class","name svelte-1dvjw40"),d(a,"class","character svelte-1dvjw40"),d(e,"href",r=H+"/"+i[0].nameId)},m(n,h){I(n,e,h),g(e,a),E(t,a,null),g(a,c),g(a,l),g(l,s),u=!0},p(n,[h]){const o={};h&1&&(o.characterId=n[0].id),t.$set(o),(!u||h&1)&&f!==(f=n[0].name+"")&&F(s,f),(!u||h&1&&r!==(r=H+"/"+n[0].nameId))&&d(e,"href",r)},i(n){u||(v(t.$$.fragment,n),u=!0)},o(n){k(t.$$.fragment,n),u=!1},d(n){n&&m(e),D(t)}}}function Z(i,e,a){let{character:t}=e;return i.$$set=c=>{"character"in c&&a(0,t=c.character)},[t]}class x extends S{constructor(e){super(),j(this,e,Z,Y,C,{character:0})}}function P(i,e,a){const t=i.slice();return t[2]=e[a],t}function G(i){let e,a;return e=new x({props:{character:i[2]}}),{c(){w(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,c){E(e,t,c),a=!0},p(t,c){const l={};c&1&&(l.character=t[2]),e.$set(l)},i(t){a||(v(e.$$.fragment,t),a=!0)},o(t){k(e.$$.fragment,t),a=!1},d(t){D(e,t)}}}function ee(i){let e,a,t,c,l,f,s=A(i[0]),r=[];for(let n=0;n<s.length;n+=1)r[n]=G(P(i,s,n));const u=n=>k(r[n],1,1,()=>{r[n]=null});return{c(){e=p("div"),a=p("div"),t=L(i[1]),c=q(),l=p("div");for(let n=0;n<r.length;n+=1)r[n].c();this.h()},l(n){e=$(n,"DIV",{class:!0});var h=b(e);a=$(h,"DIV",{class:!0});var o=b(a);t=z(o,i[1]),o.forEach(m),c=B(h),l=$(h,"DIV",{class:!0});var _=b(l);for(let V=0;V<r.length;V+=1)r[V].l(_);_.forEach(m),h.forEach(m),this.h()},h(){d(a,"class","character-group-title svelte-horo2g"),d(l,"class","character-list svelte-horo2g"),d(e,"class","character-group svelte-horo2g")},m(n,h){I(n,e,h),g(e,a),g(a,t),g(e,c),g(e,l);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(l,null);f=!0},p(n,[h]){if((!f||h&2)&&F(t,n[1]),h&1){s=A(n[0]);let o;for(o=0;o<s.length;o+=1){const _=P(n,s,o);r[o]?(r[o].p(_,h),v(r[o],1)):(r[o]=G(_),r[o].c(),v(r[o],1),r[o].m(l,null))}for(Q(),o=s.length;o<r.length;o+=1)u(o);R()}},i(n){if(!f){for(let h=0;h<s.length;h+=1)v(r[h]);f=!0}},o(n){r=r.filter(Boolean);for(let h=0;h<r.length;h+=1)k(r[h]);f=!1},d(n){n&&m(e),J(r,n)}}}function te(i,e,a){let{characters:t}=e,{title:c}=e;return i.$$set=l=>{"characters"in l&&a(0,t=l.characters),"title"in l&&a(1,c=l.title)},[t,c]}class re extends S{constructor(e){super(),j(this,e,te,ee,C,{characters:0,title:1})}}function ae(i,e,a){const t=i.slice();return t[2]=e[a],t}function ne(i){let e,a;function t(...c){return i[0](i[2],...c)}return e=new re({props:{characters:U.filter(t),title:i[2].title}}),{c(){w(e.$$.fragment)},l(c){y(e.$$.fragment,c)},m(c,l){E(e,c,l),a=!0},p(c,l){i=c},i(c){a||(v(e.$$.fragment,c),a=!0)},o(c){k(e.$$.fragment,c),a=!1},d(c){D(e,c)}}}function ce(i){let e,a,t,c;e=new W({});let l=A(X),f=[];for(let s=0;s<l.length;s+=1)f[s]=ne(ae(i,l,s));return{c(){w(e.$$.fragment),a=q(),t=p("div");for(let s=0;s<f.length;s+=1)f[s].c();this.h()},l(s){y(e.$$.fragment,s),a=B(s),t=$(s,"DIV",{class:!0});var r=b(t);for(let u=0;u<f.length;u+=1)f[u].l(r);r.forEach(m),this.h()},h(){d(t,"class","characters svelte-g4r38b")},m(s,r){E(e,s,r),I(s,a,r),I(s,t,r);for(let u=0;u<f.length;u+=1)f[u]&&f[u].m(t,null);c=!0},p:K,i(s){if(!c){v(e.$$.fragment,s);for(let r=0;r<l.length;r+=1)v(f[r]);c=!0}},o(s){k(e.$$.fragment,s),f=f.filter(Boolean);for(let r=0;r<f.length;r+=1)k(f[r]);c=!1},d(s){s&&(m(a),m(t)),D(e,s),J(f,s)}}}function se(i,e,a){let t;return N(i,M,l=>a(1,t=l)),O(M,t={},t),[(l,f)=>f.category===l.type]}class ue extends S{constructor(e){super(),j(this,e,se,ce,C,{})}}export{ue as component};
