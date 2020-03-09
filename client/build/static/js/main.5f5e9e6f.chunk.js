(this["webpackJsonpshortener-link-client"]=this["webpackJsonpshortener-link-client"]||[]).push([[0],{22:function(e,t,a){e.exports=a(34)},27:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),c=a.n(r),o=(a(27),a(6)),s=a(8),i=a(2),u=a.n(i),m=a(3),d=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(null),c=Object(m.a)(r,2),o=c[0],s=c[1];return{loading:a,request:Object(n.useCallback)((function(e){var t,a,n,r,c,o=arguments;return u.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:"GET",a=o.length>2&&void 0!==o[2]?o[2]:null,n=o.length>3&&void 0!==o[3]?o[3]:{},l(!0),i.prev=4,a&&(a=JSON.stringify(a),n["Content-Type"]="application/json"),i.next=8,u.a.awrap(fetch(e,{method:t,body:a,headers:n}));case 8:return r=i.sent,i.next=11,u.a.awrap(r.json());case 11:if(c=i.sent,r.ok){i.next=14;break}throw new Error(c.message||"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 14:return l(!1),i.abrupt("return",c);case 18:throw i.prev=18,i.t0=i.catch(4),l(!1),s(i.t0.message),i.t0;case 23:case"end":return i.stop()}}),null,null,[[4,18]])}),[]),error:o,clearError:Object(n.useCallback)((function(){return s(null)}),[])}};function E(){}var p=Object(n.createContext)({token:null,userId:null,login:E,logout:E,isAuthenticated:!1}),f=function(){return l.a.createElement("div",{style:{display:"flex",justifyContent:"center",paddingTop:"2rem"}},l.a.createElement("div",{className:"preloader-wrapper active"},l.a.createElement("div",{className:"spinner-layer spinner-red-only"},l.a.createElement("div",{className:"circle-clipper left"},l.a.createElement("div",{className:"circle"})),l.a.createElement("div",{className:"gap-patch"},l.a.createElement("div",{className:"circle"})),l.a.createElement("div",{className:"circle-clipper right"},l.a.createElement("div",{className:"circle"})))))},b=function(e){var t=e.links;return t.length?l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u2116"),l.a.createElement("th",null,"Original"),l.a.createElement("th",null,"Short link"),l.a.createElement("th",null,"Open"))),l.a.createElement("tbody",null,t.map((function(e,t){return l.a.createElement("tr",{key:e._id},l.a.createElement("td",null,t+1),l.a.createElement("td",null,e.from),l.a.createElement("td",null,e.to),l.a.createElement("td",null,l.a.createElement(o.b,{to:"/detail/".concat(e._id)},"Open")))})))):l.a.createElement("p",{className:"center"},"No links yet")},v=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],c=d(),o=c.loading,s=c.request,i=Object(n.useContext)(p).token,E=Object(n.useCallback)((function(){var e;return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.awrap(s("/api/link","GET",null,{Authorization:"Bearer ".concat(i)}));case 3:e=t.sent,r(e),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),null,null,[[0,7]])}),[i,s]);return Object(n.useEffect)((function(){E()}),[E]),o?l.a.createElement(f,null):l.a.createElement(l.a.Fragment,null,!o&&l.a.createElement(b,{links:a}))},h=function(){var e=Object(s.g)(),t=Object(n.useContext)(p),a=d().request,r=Object(n.useState)(""),c=Object(m.a)(r,2),o=c[0],i=c[1];Object(n.useEffect)((function(){window.M.updateTextFields()}),[]);var E=function(){var n;return u.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,u.a.awrap(a("/api/link/generate","POST",{from:o},{Authorization:"Bearer ".concat(t.token)}));case 3:n=l.sent,e.push("/detail/".concat(n.link._id)),l.next=9;break;case 7:l.prev=7,l.t0=l.catch(0);case 9:case"end":return l.stop()}}),null,null,[[0,7]])};return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s8 offset-s2",style:{paddingTop:"2rem"}},l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{placeholder:"Enter link",id:"link",type:"text",value:o,onChange:function(e){return i(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&E()}}),l.a.createElement("label",{htmlFor:"link"},"Enter link"),l.a.createElement("button",{className:"btn yellow darken-4",style:{marginRight:10},onClick:function(){E()}},"Create"))))},k=function(e){var t=e.link;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Link"),l.a.createElement("p",null,"Your Link: ",l.a.createElement("a",{href:t.to,target:"_blank",rel:"noopener noreferrer"},t.to)),l.a.createElement("p",null,"Where from: ",l.a.createElement("a",{href:t.from,target:"_blank",rel:"noopener noreferrer"},t.from)),l.a.createElement("p",null,"Number of clicks on the link: ",l.a.createElement("strong",null,t.clicks)),l.a.createElement("p",null,"Date of creation: ",l.a.createElement("strong",null,new Date(t.date).toLocaleDateString())))},g=function(){var e=Object(n.useContext)(p).token,t=d(),a=t.request,r=t.loading,c=Object(n.useState)(null),o=Object(m.a)(c,2),i=o[0],E=o[1],b=Object(s.h)().id,v=Object(n.useCallback)((function(){var t;return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.a.awrap(a("/api/link/".concat(b),"GET",null,{Authorization:"Bearer ".concat(e)}));case 3:t=n.sent,E(t),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),null,null,[[0,7]])}),[e,b,a]);return Object(n.useEffect)((function(){v()}),[v]),r?l.a.createElement(f,null):l.a.createElement(l.a.Fragment,null,!r&&i&&l.a.createElement(k,{link:i}))},O=a(11),w=a(12),j=function(){var e=Object(n.useContext)(p),t=Object(n.useCallback)((function(e){window.M&&e&&window.M.toast({html:e})}),[]),a=d(),r=a.loading,c=a.request,o=a.error,s=a.clearError,i=Object(n.useState)({email:"",password:""}),E=Object(m.a)(i,2),f=E[0],b=E[1];Object(n.useEffect)((function(){t(o),s()}),[o,t,s]),Object(n.useEffect)((function(){window.M.updateTextFields()}),[]);var v=function(e){b(Object(w.a)({},f,Object(O.a)({},e.target.name,e.target.value)))};return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s6 offset-s3"},l.a.createElement("h1",null,"Short link"),l.a.createElement("div",{className:"card blue darken-1"},l.a.createElement("div",{className:"card-content white-text"},l.a.createElement("span",{className:"card-title"},"Authorization"),l.a.createElement("div",null,l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{placeholder:"Enter email",id:"email",type:"text",name:"email",className:"yellow-input",value:f.email,onChange:v}),l.a.createElement("label",{htmlFor:"email"},"Email")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{placeholder:"Enter password",id:"password",type:"password",name:"password",className:"yellow-input",value:f.password,onChange:v}),l.a.createElement("label",{htmlFor:"email"},"Password")))),l.a.createElement("div",{className:"card-action"},l.a.createElement("button",{className:"btn yellow darken-4",style:{marginRight:10},disabled:r,onClick:function(){var t;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,u.a.awrap(c("/api/auth/login","POST",Object(w.a)({},f)));case 3:t=a.sent,e.login(t.token,t.userId),a.next=9;break;case 7:a.prev=7,a.t0=a.catch(0);case 9:case"end":return a.stop()}}),null,null,[[0,7]])}},"Sign in"),l.a.createElement("button",{className:"btn grey lighten-1 black-text",onClick:function(){var e;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,u.a.awrap(c("/api/auth/register","POST",Object(w.a)({},f)));case 3:e=a.sent,t(e.message),a.next=9;break;case 7:a.prev=7,a.t0=a.catch(0);case 9:case"end":return a.stop()}}),null,null,[[0,7]])},disabled:r},"Registration")))))},x=function(e){return e?l.a.createElement(s.d,null,l.a.createElement(s.b,{path:"/links",exact:!0},l.a.createElement(v,null)),l.a.createElement(s.b,{path:"/create",exact:!0},l.a.createElement(h,null)),l.a.createElement(s.b,{path:"/detail/:id"},l.a.createElement(g,null)),l.a.createElement(s.a,{to:"/create"})):l.a.createElement(s.d,null,l.a.createElement(s.b,{path:"/",exact:!0},l.a.createElement(j,null)),l.a.createElement(s.a,{to:"/"}))},y=function(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(!1),c=Object(m.a)(r,2),o=c[0],s=c[1],i=Object(n.useState)(null),u=Object(m.a)(i,2),d=u[0],E=u[1],p=Object(n.useCallback)((function(e,t){l(e),E(t),localStorage.setItem("userData",JSON.stringify({userId:t,token:e}))}),[]),f=Object(n.useCallback)((function(){l(null),E(null),localStorage.removeItem("userData")}),[]);return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&p(e.token,e.userId),s(!0)}),[p]),{login:p,logout:f,token:a,userId:d,ready:o}},N=function(){var e=Object(s.g)(),t=Object(n.useContext)(p);return l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper blue darken-1",style:{padding:"0 2rem"}},l.a.createElement("span",{className:"brand-logo"},"Short links"),l.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},l.a.createElement("li",null,l.a.createElement(o.c,{to:"/create"},"Create")),l.a.createElement("li",null,l.a.createElement(o.c,{to:"/links"},"Links")),l.a.createElement("li",null,l.a.createElement("a",{href:"/",onClick:function(a){a.preventDefault(),t.logout(),e.push("/")}},"Exit")))))};a(33);var C=function(){var e=y(),t=e.token,a=e.login,n=e.logout,r=e.userId,c=e.ready,s=!!t,i=x(s);return c?l.a.createElement(p.Provider,{value:{token:t,login:a,logout:n,userId:r,isAuthenticated:s}},l.a.createElement(o.a,null,s&&l.a.createElement(N,null),l.a.createElement("div",{className:"container"},i))):l.a.createElement(f,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.5f5e9e6f.chunk.js.map