(this.webpackJsonpwikib=this.webpackJsonpwikib||[]).push([[0],{109:function(e,t){},111:function(e,t){},127:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(48),i=n.n(a),u=(n(57),n(30)),s=n(51),o=n(3),l=(n(58),n(27)),j=n.n(l),b=n(49),p=n(15),f=(n(60),n(1)),h=function(e){var t=e.setTerm,n=e.label;return Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{htmlFor:"search",children:n}),Object(f.jsx)("input",{"aria-label":"inserisi parola da cercare",tabIndex:0,autoFocus:!0,type:"text",name:"search",onInput:function(e){return t(e.currentTarget.value)}})]})};n(62);var d=function(e){var t=e.result,n=e.selected,c=e.onEnter;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("ul",{children:t.map((function(e,t){return Object(f.jsx)("li",{tabIndex:0,onKeyPress:function(e){return function(e,t){"Enter"===e&&t()}(e.key,c)},onFocus:function(){return n(e)},children:e},t)}))})})},x=n(50),O={defaults:{namespace:"holly.accessible.wiki",defaultApi:"https://it.wikipedia.org/w/api.php"}},m=n.n(x)()({apiUrl:O.defaults.defaultApi}),v=function(e){return m.search(e)},k=[{path:"/",name:"Cerca parola",component:function(e){var t=e.history,n=Object(c.useState)(""),r=Object(p.a)(n,2),a=r[0],i=r[1],u=Object(c.useState)([]),s=Object(p.a)(u,2),o=s[0],l=s[1],x=Object(c.useState)(""),O=Object(p.a)(x,2),m=O[0],k=O[1];function y(){return(y=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(a.length>0)){e.next=7;break}return e.t0=l,e.next=5,v(a);case 5:e.t1=e.sent.results,(0,e.t0)(e.t1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(f.jsx)("div",{children:Object(f.jsxs)("form",{action:"",onSubmit:function(e){return function(e){return y.apply(this,arguments)}(e)},children:[Object(f.jsx)(h,{label:"Cerca Termine",setTerm:i}),Object(f.jsxs)("p",{children:["Trovati ",o.length," risultati"]}),Object(f.jsx)(d,{onEnter:function(){t.push("/article/".concat(m))},result:o,selected:k})]})})},exact:!0},{path:"/article/:term",name:"Articolo",component:function(e){var t=Object(c.useState)([]),n=Object(p.a)(t,2),r=n[0],a=n[1],i=Object(c.useRef)(null);return Object(c.useEffect)((function(){var t;console.log("fx"),(t=e.match.params.term,m.page(t)).then((function(e){return e.content()})).then((function(e){return a(e)})).then((function(){var e;return null===(e=i.current)||void 0===e?void 0:e.focus()}))}),[e.match.params.term]),Object(f.jsx)("div",{ref:i,tabIndex:0,onKeyUp:function(t){return function(t){"Backspace"===t.key&&e.history.push("/")}(t)},children:r.map((function(e,t){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h5",{tabIndex:0,children:e.title}),Object(f.jsx)("p",{tabIndex:0,children:e.content})]},t)}))})},exact:!0}],y=function(e){return Object(f.jsx)("div",{children:Object(f.jsx)(s.a,{children:Object(f.jsx)(o.c,{children:k.map((function(e,t){return Object(f.jsx)(o.a,{path:e.path,exact:e.exact,render:function(t){return Object(f.jsx)(e.component,Object(u.a)(Object(u.a)({name:e.name},t),e.props))}},t)}))})})})};i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(y,{})}),document.getElementById("root"))},57:function(e,t,n){},58:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){}},[[127,1,2]]]);
//# sourceMappingURL=main.8210078b.chunk.js.map