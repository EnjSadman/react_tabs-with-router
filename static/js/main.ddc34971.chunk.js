(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{14:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var n=c(8),a=c.n(n),s=c(4),i=c(1),b=(c(14),c(9)),r=c.n(b),j=c(2),o=function(t){var e=t.tabs,c=Object(i.g)().tabId;return Object(j.jsxs)(j.Fragment,{children:[e.map((function(t){return Object(j.jsx)(s.b,{to:"/tabs/".concat(t.id),className:r()({active:c===t.id}),type:"button",children:t.title},t.id)})),e.map((function(t){return Object(j.jsx)(j.Fragment,{children:t.id===c&&Object(j.jsx)("p",{children:t.content},t.id)})}))]})},d=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],l=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Tabs with router"}),Object(j.jsxs)("nav",{children:[Object(j.jsx)(s.c,{className:function(t){return t.isActive?"active":void 0},to:"/tabs",children:"Tabs"}),Object(j.jsx)(s.c,{className:function(t){return t.isActive?"active":void 0},to:"/",children:"Home"})]}),Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{path:"/tabs",element:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{children:"Please select a tab"}),Object(j.jsx)(o,{tabs:d})]})}),Object(j.jsx)(i.a,{path:"/tabs/:tabId",element:Object(j.jsx)(o,{tabs:d})}),Object(j.jsx)(i.a,{path:"*",element:Object(j.jsx)("p",{children:"page not found"})})]})]})};a.a.render(Object(j.jsx)(s.a,{children:Object(j.jsx)(l,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ddc34971.chunk.js.map