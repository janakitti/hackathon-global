(this["webpackJsonphackathon-global"]=this["webpackJsonphackathon-global"]||[]).push([[0],{31:function(e,t,c){},33:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n,a=c(0),s=c.n(a),i=c(10),r=c.n(i),l=(c(31),c(32),c(33),c(14)),o=c(5),d=c(9),j=c(15);!function(e){e.LOGIN_USER="LOGIN_USER",e.LOGOUT_USER="LOGOUT_USER"}(n||(n={}));var h=function(e,t){switch(t.type){case n.LOGIN_USER:return Object(j.a)({},t.payload);case n.LOGOUT_USER:return{username:"Guest Hacker",email:"",type:"public",profilePic:"./default_pfp.svg"};default:return e}},u=c(1),v={user:{username:"Guest Hacker",email:"",type:"public",profilePic:"./default_pfp.svg"}},b=Object(a.createContext)({state:v,dispatch:function(){return null}}),p=function(e,t){var c=e.user;return{user:h(c,t)}},m=function(e){var t=e.children,c=Object(a.useReducer)(p,v),n=Object(d.a)(c,2),s=n[0],i=n[1];return Object(u.jsx)(b.Provider,{value:{state:s,dispatch:i},children:t})},O=function(){var e=Object(a.useContext)(b).state.user;return Object(u.jsx)("div",{className:"dashboard__div--page",children:Object(u.jsx)("div",{className:"dashboard__div--inner-container",children:Object(u.jsx)("div",{className:"home__div--card",children:Object(u.jsxs)("h1",{id:"home__h1--welcome",children:["public"===e.type?"Hey there,":"Welcome back,"," ",e.username," \ud83d\udc4b Z"]})})})})},_=function(e){var t=e.searchValue,c=e.setSearchValue;return Object(u.jsx)("div",{id:"event-search__div--card",children:Object(u.jsx)("input",{className:"text-input",type:"text",name:"search",placeholder:"Search events",value:t,onChange:function(e){return c(e.target.value)},required:!0})})},f=function(e){var t=e.name,c=e.imgUrl,n=e.color,a=e.setSelectedFilter;return Object(u.jsx)("div",{className:"event-filter__div--filter-card",style:{backgroundImage:'url("'+c+'")'},onClick:a,children:Object(u.jsx)("div",{className:"event-filter__div--filter-card-color ".concat(n),children:t})})},x=c(17),g=c(26),N=c(24),y=c(50),k=c(13),S=function(e){switch(e){case"workshop":return Object(u.jsx)("h2",{className:"event-type event-card__h2--workshop",children:"WORKSHOP"});case"activity":return Object(u.jsx)("h2",{className:"event-type event-card__h2--activity",children:"ACTIVITY"});case"tech_talk":return Object(u.jsx)("h2",{className:"event-type event-card__h2--tech_talk",children:"TECH TALK"});default:return Object(u.jsx)("h2",{className:"event-type event-card__h2--default",children:"EVENT"})}},w=function(e){var t=e.event,c=e.eventsMap,n=Object(a.useContext)(b).state.user,s=t.speakers.map((function(e){return Object(u.jsx)(g.a,{placement:"bottom",delay:{show:250,hide:400},transition:!1,overlay:Object(u.jsx)(N.a,{id:"id",placement:"top",children:e.name}),children:e.profile_pic?Object(u.jsx)("img",{src:e.profile_pic,className:"presenter-pfp"}):Object(u.jsx)("div",{className:"presenter-pfp default-presenter-pfp",children:e.name.slice(0,1)})},Object(y.a)())})),i=t.related_events.map((function(e){return Object(u.jsx)("div",{className:"related-pill",children:c.get(e)},Object(y.a)())}));return Object(u.jsxs)("div",{className:"event-card",children:[Object(u.jsx)("div",{className:"date-col",children:Object(u.jsxs)("div",{className:"cal-container",children:[Object(u.jsx)("span",{className:"cal-month",children:k.DateTime.fromMillis(t.start_time).monthShort.toUpperCase()}),Object(u.jsx)("span",{className:"cal-date",children:k.DateTime.fromMillis(t.start_time).day})]})}),Object(u.jsxs)("div",{className:"details-col",children:[S(t.event_type),Object(u.jsx)("h1",{className:"event-title",children:t.name}),Object(u.jsxs)("h3",{className:"event-time",children:[k.DateTime.fromMillis(t.start_time).toLocaleString(k.DateTime.TIME_SIMPLE)," - ",k.DateTime.fromMillis(t.end_time).toLocaleString(k.DateTime.TIME_SIMPLE)]}),Object(u.jsx)("p",{className:"event-desc",children:t.description}),Object(u.jsx)("div",{className:"event-bottom-row",children:i}),Object(u.jsxs)("div",{className:"event-bottom-row",children:[Object(u.jsx)("div",{className:"presenter-container",children:s}),Object(u.jsx)("div",{className:"attend-button-container",children:Object(u.jsx)(x.a,{variant:t.event_type,className:"attend-button",href:"public"===n.type?t.public_url:t.private_url,target:"_blank",children:"Attend"})})]})]})]})},E=function(){var e=Object(a.useContext)(b).state.user,t=Object(a.useState)([]),c=Object(d.a)(t,2),n=c[0],s=c[1],i=Object(a.useState)("all"),r=Object(d.a)(i,2),l=r[0],o=r[1],j=Object(a.useState)(),h=Object(d.a)(j,2),v=h[0],p=h[1],m=Object(a.useState)(""),O=Object(d.a)(m,2),x=O[0],g=O[1],N=Object(a.useState)(new Map),y=Object(d.a)(N,2),k=y[0],S=y[1];return Object(a.useEffect)((function(){fetch("https://api.hackthenorth.com/v3/graphql?query={ events { id name event_type permission start_time end_time description speakers { name profile_pic } public_url private_url related_events } }",{method:"GET",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer"}).then((function(e){return e.json()})).then((function(t){t.data.events.forEach((function(e){return S((function(t){return t.set(e.id,e.name),t}))})),s(t.data.events.filter((function(t){return"public"===e.type&&"public"===t.permission||"public"!==e.type})).sort((function(e,t){return e.start_time>t.start_time?1:-1})))}))}),[]),Object(a.useEffect)((function(){p(n.filter((function(e){return"all"===l||e.event_type===l})).filter((function(e){var t;return e.name.toLowerCase().includes(x.toLowerCase())||(null===(t=e.description)||void 0===t?void 0:t.toLowerCase().includes(x.toLowerCase()))})).map((function(e){return Object(u.jsx)(w,{event:e,eventsMap:k},e.id)})))}),[n,l,x]),Object(u.jsx)("div",{className:"dashboard__div--page",children:Object(u.jsxs)("div",{className:"dashboard__div--inner-container",children:[Object(u.jsx)(_,{searchValue:x,setSearchValue:g}),Object(u.jsxs)("div",{className:"events__div--event-filter-container",children:[Object(u.jsx)(f,{name:"All Events",imgUrl:"./all_events.svg",color:"event-filter__div--all-events",setSelectedFilter:function(){return o("all")}}),Object(u.jsx)(f,{name:"Workshops",imgUrl:"./workshops.svg",color:"event-filter__div--workshops",setSelectedFilter:function(){return o("workshop")}}),Object(u.jsx)(f,{name:"Activities",imgUrl:"./activities.svg",color:"event-filter__div--activities",setSelectedFilter:function(){return o("activity")}}),Object(u.jsx)(f,{name:"Tech Talks",imgUrl:"./tech_talks.svg",color:"event-filter__div--tech-talks",setSelectedFilter:function(){return o("tech_talk")}})]}),v]})})},T=c(16),C="Goosey",L="hack@hon.com",U="1234",I=function(){var e=Object(o.f)(),t=Object(a.useContext)(b).dispatch,c=Object(a.useState)({email:"",password:""}),s=Object(d.a)(c,2),i=s[0],r=s[1],l=Object(a.useState)(""),h=Object(d.a)(l,2),v=h[0],p=h[1],m=function(e){var t=e.target,c=t.name,n=t.value;r(Object(j.a)(Object(j.a)({},i),{},Object(T.a)({},c,n)))};return Object(u.jsx)("div",{id:"login__div--login-wrapper",children:Object(u.jsxs)("div",{id:"login__div--login-card",children:[Object(u.jsx)("img",{src:"./logo_1.svg",className:"login__h1--logo",width:150,height:150}),Object(u.jsxs)("form",{onSubmit:function(c){c.preventDefault(),i.email===L&&i.password===U?(p(""),t(function(e){return{type:n.LOGIN_USER,payload:e}}({username:C,email:L,type:"hacker",profilePic:"./hacker_pfp.svg"})),e.push("/")):p("Invalid username or password")},children:[Object(u.jsx)("input",{className:"text-input mb-4",type:"email",name:"email",placeholder:"Email",value:i.email,onChange:m,required:!0}),Object(u.jsx)("input",{className:"text-input mb-4",type:"password",name:"password",placeholder:"Password",value:i.password,onChange:m,required:!0}),Object(u.jsx)(x.a,{variant:"primary",type:"submit",id:"login__span--login-button",children:"Log in"})]}),Object(u.jsx)("span",{id:"login__span--login-error",children:v})]})})},G=function(){var e=Object(a.useContext)(b),t=e.state.user,c=e.dispatch,s=Object(o.g)(),i=Object(o.f)();return Object(u.jsxs)("div",{id:"side-nav",children:[Object(u.jsx)("img",{src:"./logo_1.svg",className:"login__h1--logo",width:100,height:100}),Object(u.jsx)("img",{src:t.profilePic,id:"side-nav__img--pfp"}),Object(u.jsx)("h1",{id:"side-nav__h1--username",children:t.username}),Object(u.jsx)(l.b,{to:"/",children:Object(u.jsxs)("div",{className:"/"===s.pathname?"nav-link selected":"nav-link",children:[Object(u.jsx)("img",{src:"/"===s.pathname?"./home_selected.svg":"./home.svg",className:"side-nav__img--nav-icon"}),Object(u.jsx)("span",{children:"Home"})]})}),Object(u.jsx)(l.b,{to:"/events",children:Object(u.jsxs)("div",{className:"/events"===s.pathname?"nav-link selected":"nav-link",children:[Object(u.jsx)("img",{src:"/events"===s.pathname?"./events_selected.svg":"./events.svg",className:"side-nav__img--nav-icon"}),Object(u.jsx)("span",{children:"Events"})]})}),"public"===t.type?Object(u.jsxs)("div",{className:"side-nav__div--account-action",children:[Object(u.jsx)("a",{href:"#/login",children:"Log in"})," to for full access to the Dashboard!"]}):Object(u.jsx)("div",{className:"side-nav__div--account-action",children:Object(u.jsx)("a",{href:"#",onClick:function(){c({type:n.LOGOUT_USER}),i.push("/")},children:"Log out"})})]})};var M=function(){return Object(u.jsx)(m,{children:Object(u.jsx)(l.a,{children:Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/login",children:Object(u.jsx)(I,{})}),Object(u.jsx)(o.a,{path:"/",children:Object(u.jsxs)("div",{id:"router-container",children:[Object(u.jsx)(G,{}),Object(u.jsx)("div",{id:"page-window",children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/events",children:Object(u.jsx)(E,{})}),Object(u.jsx)(o.a,{path:"/",children:Object(u.jsx)(O,{})})]})})]})})]})})})})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(M,{})}),document.getElementById("root")),P()}},[[44,1,2]]]);
//# sourceMappingURL=main.b90f03e9.chunk.js.map