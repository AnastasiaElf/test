import{s as d,n as e,c as u}from"./scheduler.65mkkQyi.js";import{S as m,i as f,u as i,v as p,d as l,h as _}from"./index.D8qVAbbg.js";import"./paths.BqN8CKaC.js";import{w as h}from"./index.DHRsPfaO.js";const b=h({});function k(n){return{c(){this.h()},l(o){this.h()},h(){document.title="AnastasiaElf's OCs"},m:e,d:e}}function y(n){return document.title=n[0].pageName+" ✦ AnastasiaElf's OCs",{c:e,l:e,m:e,d:e}}function g(n){return document.title=n[0].fullTitle,{c:e,l:e,m:e,d:e}}function S(n){let o;function s(a,c){return a[0].fullTitle?g:a[0].pageName?y:k}let r=s(n),t=r(n);return{c(){t.c(),o=i()},l(a){const c=p("svelte-wohpy",document.head);t.l(c),o=i(),c.forEach(l)},m(a,c){t.m(document.head,null),_(document.head,o)},p(a,[c]){r!==(r=s(a))&&(t.d(1),t=r(a),t&&(t.c(),t.m(o.parentNode,o)))},i:e,o:e,d(a){t.d(a),l(o)}}}function v(n,o,s){let r;return u(n,b,t=>s(0,r=t)),[r]}class $ extends m{constructor(o){super(),f(this,o,v,S,d,{})}}export{$ as H,b as m};