import{s as g,n as a,c as v,o as N}from"./scheduler.cEBr5s-v.js";import{S as I,i as S,u as m,v as C,d as u,h as p,e as k,c as b,n as f,g as y}from"./index.DJPwxw4W.js";import{b as _}from"./paths.DjlHRXt4.js";import{w as E}from"./index.D-JkfuOO.js";const $=E({});function w(n){let e;return{c(){e=k("link"),this.h()},l(t){e=b(t,"LINK",{rel:!0,type:!0,href:!0}),this.h()},h(){f(e,"rel","icon"),f(e,"type","image/png"),f(e,"href",_+"/favicon.png")},m(t,r){y(t,e,r)},p:a,d(t){t&&u(e)}}}function A(n){let e,t;return{c(){e=k("link"),this.h()},l(r){e=b(r,"LINK",{rel:!0,type:!0,href:!0}),this.h()},h(){f(e,"rel","icon"),f(e,"type","image/png"),f(e,"href",t=_+"/favicons/"+n[0].faviconId+".png")},m(r,l){y(r,e,l)},p(r,l){l&1&&t!==(t=_+"/favicons/"+r[0].faviconId+".png")&&f(e,"href",t)},d(r){r&&u(e)}}}function H(n){return{c(){this.h()},l(e){this.h()},h(){document.title="AnastasiaElf's OCs"},m:a,d:a}}function K(n){return document.title=n[0].pageName+" ✦ AnastasiaElf's OCs",{c:a,l:a,m:a,d:a}}function L(n){return document.title=n[0].fullTitle,{c:a,l:a,m:a,d:a}}function M(n){let e,t;function r(o,s){return o[0].faviconId?A:w}let l=r(n),i=l(n);function h(o,s){return o[0].fullTitle?L:o[0].pageName?K:H}let d=h(n),c=d(n);return{c(){i.c(),e=m(),c.c(),t=m()},l(o){const s=C("svelte-oizk0e",document.head);i.l(s),e=m(),c.l(s),t=m(),s.forEach(u)},m(o,s){i.m(document.head,null),p(document.head,e),c.m(document.head,null),p(document.head,t)},p(o,[s]){l===(l=r(o))&&i?i.p(o,s):(i.d(1),i=l(o),i&&(i.c(),i.m(e.parentNode,e))),d!==(d=h(o))&&(c.d(1),c=d(o),c&&(c.c(),c.m(t.parentNode,t)))},i:a,o:a,d(o){i.d(o),u(e),c.d(o),u(t)}}}function O(n,e,t){let r;return v(n,$,l=>t(0,r=l)),N(()=>{}),[r]}class B extends I{constructor(e){super(),S(this,e,O,M,g,{})}}export{B as H,$ as m};
