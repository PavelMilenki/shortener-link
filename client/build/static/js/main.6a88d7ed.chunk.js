(this["webpackJsonpshortener-link-client"]=this["webpackJsonpshortener-link-client"]||[]).push([[0],{22:function(e,t,a){e.exports=a(34)},27:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),c=a.n(r),s=(a(27),a(6)),o=a(8),u=a(2),i=a.n(u),m=a(3),d=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(null),c=Object(m.a)(r,2),s=c[0],o=c[1];return{loading:a,request:Object(n.useCallback)((function(e){var t,a,n,r,c,s=arguments;return i.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:"GET",a=s.length>2&&void 0!==s[2]?s[2]:null,n=s.length>3&&void 0!==s[3]?s[3]:{},l(!0),u.prev=4,a&&(a=JSON.stringify(a),n["Content-Type"]="application/json"),u.next=8,i.a.awrap(fetch(e,{method:t,body:a,headers:n}));case 8:return r=u.sent,u.next=11,i.a.awrap(r.json());case 11:if(c=u.sent,r.ok){u.next=14;break}throw new Error(c.message||"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 14:return l(!1),u.abrupt("return",c);case 18:throw u.prev=18,u.t0=u.catch(4),l(!1),o(u.t0.message),u.t0;case 23:case"end":return u.stop()}}),null,null,[[4,18]])}),[]),error:s,clearError:Object(n.useCallback)((function(){return o(null)}),[])}};function p(){}var E=Object(n.createContext)({token:null,userId:null,login:p,logout:p,isAuthenticated:!1}),f=function(){return l.a.createElement("div",{style:{display:"flex",justifyContent:"center",paddingTop:"2rem"}},l.a.createElement("div",{className:"preloader-wrapper active"},l.a.createElement("div",{className:"spinner-layer spinner-red-only"},l.a.createElement("div",{className:"circle-clipper left"},l.a.createElement("div",{className:"circle"})),l.a.createElement("div",{className:"gap-patch"},l.a.createElement("div",{className:"circle"})),l.a.createElement("div",{className:"circle-clipper right"},l.a.createElement("div",{className:"circle"})))))},b=function(e){var t=e.links;return t.length?l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u2116"),l.a.createElement("th",null,"\u041e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044c\u043d\u0430\u044f"),l.a.createElement("th",null,"\u0421\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u043d\u0430\u044f"),l.a.createElement("th",null,"\u041e\u0442\u043a\u0440\u044b\u0442\u044c"))),l.a.createElement("tbody",null,t.map((function(e,t){return l.a.createElement("tr",{key:e._id},l.a.createElement("td",null,t+1),l.a.createElement("td",null,e.from),l.a.createElement("td",null,e.to),l.a.createElement("td",null,l.a.createElement(s.b,{to:"/detail/".concat(e._id)},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c")))})))):l.a.createElement("p",{className:"center"},"\u0421\u0441\u044b\u043b\u043e\u043a \u043f\u043e\u043a\u0430 \u043d\u0435\u0442")},v=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],c=d(),s=c.loading,o=c.request,u=Object(n.useContext)(E).token,p=Object(n.useCallback)((function(){var e;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.awrap(o("/api/link","GET",null,{Authorization:"Bearer ".concat(u)}));case 3:e=t.sent,r(e),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),null,null,[[0,7]])}),[u,o]);return Object(n.useEffect)((function(){p()}),[p]),s?l.a.createElement(f,null):l.a.createElement(l.a.Fragment,null,!s&&l.a.createElement(b,{links:a}))},h=function(){var e=Object(o.g)(),t=Object(n.useContext)(E),a=d().request,r=Object(n.useState)(""),c=Object(m.a)(r,2),s=c[0],u=c[1];Object(n.useEffect)((function(){window.M.updateTextFields()}),[]);return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s8 offset-s2",style:{paddingTop:"2rem"}},l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{placeholder:"\u0412\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443",id:"link",type:"text",value:s,onChange:function(e){return u(e.target.value)},onKeyPress:function(n){var l;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if("Enter"!==n.key){r.next=10;break}return r.prev=1,r.next=4,i.a.awrap(a("/api/link/generate","POST",{from:s},{Authorization:"Bearer ".concat(t.token)}));case 4:l=r.sent,e.push("/detail/".concat(l.link._id)),r.next=10;break;case 8:r.prev=8,r.t0=r.catch(1);case 10:case"end":return r.stop()}}),null,null,[[1,8]])}}),l.a.createElement("label",{htmlFor:"link"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443"))))},g=function(e){var t=e.link;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"\u0421\u0441\u044b\u043b\u043a\u0430"),l.a.createElement("p",null,"\u0412\u0430\u0448\u0430 \u0441\u0441\u044b\u043b\u043a\u0430: ",l.a.createElement("a",{href:t.to,target:"_blank",rel:"noopener noreferrer"},t.to)),l.a.createElement("p",null,"\u041e\u0442\u043a\u0443\u0434\u0430: ",l.a.createElement("a",{href:t.from,target:"_blank",rel:"noopener noreferrer"},t.from)),l.a.createElement("p",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043b\u0438\u043a\u043e\u0432 \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435: ",l.a.createElement("strong",null,t.clicks)),l.a.createElement("p",null,"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f: ",l.a.createElement("strong",null,new Date(t.date).toLocaleDateString())))},k=function(){var e=Object(n.useContext)(E).token,t=d(),a=t.request,r=t.loading,c=Object(n.useState)(null),s=Object(m.a)(c,2),u=s[0],p=s[1],b=Object(o.h)().id,v=Object(n.useCallback)((function(){var t;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.a.awrap(a("/api/link/".concat(b),"GET",null,{Authorization:"Bearer ".concat(e)}));case 3:t=n.sent,p(t),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),null,null,[[0,7]])}),[e,b,a]);return Object(n.useEffect)((function(){v()}),[v]),r?l.a.createElement(f,null):l.a.createElement(l.a.Fragment,null,!r&&u&&l.a.createElement(g,{link:u}))},O=a(11),j=a(12),w=function(){var e=Object(n.useContext)(E),t=Object(n.useCallback)((function(e){window.M&&e&&window.M.toast({html:e})}),[]),a=d(),r=a.loading,c=a.request,s=a.error,o=a.clearError,u=Object(n.useState)({email:"",password:""}),p=Object(m.a)(u,2),f=p[0],b=p[1];Object(n.useEffect)((function(){t(s),o()}),[s,t,o]),Object(n.useEffect)((function(){window.M.updateTextFields()}),[]);var v=function(e){b(Object(j.a)({},f,Object(O.a)({},e.target.name,e.target.value)))};return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s6 offset-s3"},l.a.createElement("h1",null,"\u0421\u043e\u043a\u0440\u0430\u0442\u0438 \u0421\u0441\u044b\u043b\u043a\u0443"),l.a.createElement("div",{className:"card blue darken-1"},l.a.createElement("div",{className:"card-content white-text"},l.a.createElement("span",{className:"card-title"},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),l.a.createElement("div",null,l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",id:"email",type:"text",name:"email",className:"yellow-input",value:f.email,onChange:v}),l.a.createElement("label",{htmlFor:"email"},"Email")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",id:"password",type:"password",name:"password",className:"yellow-input",value:f.password,onChange:v}),l.a.createElement("label",{htmlFor:"email"},"\u041f\u0430\u0440\u043e\u043b\u044c")))),l.a.createElement("div",{className:"card-action"},l.a.createElement("button",{className:"btn yellow darken-4",style:{marginRight:10},disabled:r,onClick:function(){var t;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,i.a.awrap(c("/api/auth/login","POST",Object(j.a)({},f)));case 3:t=a.sent,e.login(t.token,t.userId),a.next=9;break;case 7:a.prev=7,a.t0=a.catch(0);case 9:case"end":return a.stop()}}),null,null,[[0,7]])}},"\u0412\u043e\u0439\u0442\u0438"),l.a.createElement("button",{className:"btn grey lighten-1 black-text",onClick:function(){var e;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,i.a.awrap(c("/api/auth/register","POST",Object(j.a)({},f)));case 3:e=a.sent,t(e.message),a.next=9;break;case 7:a.prev=7,a.t0=a.catch(0);case 9:case"end":return a.stop()}}),null,null,[[0,7]])},disabled:r},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")))))},x=function(e){return e?l.a.createElement(o.d,null,l.a.createElement(o.b,{path:"/links",exact:!0},l.a.createElement(v,null)),l.a.createElement(o.b,{path:"/create",exact:!0},l.a.createElement(h,null)),l.a.createElement(o.b,{path:"/detail/:id"},l.a.createElement(k,null)),l.a.createElement(o.a,{to:"/create"})):l.a.createElement(o.d,null,l.a.createElement(o.b,{path:"/",exact:!0},l.a.createElement(w,null)),l.a.createElement(o.a,{to:"/"}))},y=function(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(!1),c=Object(m.a)(r,2),s=c[0],o=c[1],u=Object(n.useState)(null),i=Object(m.a)(u,2),d=i[0],p=i[1],E=Object(n.useCallback)((function(e,t){l(e),p(t),localStorage.setItem("userData",JSON.stringify({userId:t,token:e}))}),[]),f=Object(n.useCallback)((function(){l(null),p(null),localStorage.removeItem("userData")}),[]);return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&E(e.token,e.userId),o(!0)}),[E]),{login:E,logout:f,token:a,userId:d,ready:s}},N=function(){var e=Object(o.g)(),t=Object(n.useContext)(E);return l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper blue darken-1",style:{padding:"0 2rem"}},l.a.createElement("span",{className:"brand-logo"},"\u0421\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u0441\u0441\u044b\u043b\u043e\u043a"),l.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},l.a.createElement("li",null,l.a.createElement(s.c,{to:"/create"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c")),l.a.createElement("li",null,l.a.createElement(s.c,{to:"/links"},"\u0421\u0441\u044b\u043b\u043a\u0438")),l.a.createElement("li",null,l.a.createElement("a",{href:"/",onClick:function(a){a.preventDefault(),t.logout(),e.push("/")}},"\u0412\u044b\u0439\u0442\u0438")))))};a(33);var C=function(){var e=y(),t=e.token,a=e.login,n=e.logout,r=e.userId,c=e.ready,o=!!t,u=x(o);return c?l.a.createElement(E.Provider,{value:{token:t,login:a,logout:n,userId:r,isAuthenticated:o}},l.a.createElement(s.a,null,o&&l.a.createElement(N,null),l.a.createElement("div",{className:"container"},u))):l.a.createElement(f,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.6a88d7ed.chunk.js.map