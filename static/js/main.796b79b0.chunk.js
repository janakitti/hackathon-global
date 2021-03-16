(this["webpackJsonphackathon-global"]=this["webpackJsonphackathon-global"]||[]).push([[0],{26:function(e){e.exports=JSON.parse('{"a":"https://api.hackthenorth.com/v3/graphql?query={ events { id name event_type permission start_time end_time description speakers { name profile_pic } public_url private_url related_events } }"}')},33:function(e,t,a){},35:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var c,n=a(0),s=a.n(n),r=a(11),i=a.n(r),l=(a(33),a(34),a(35),a(14)),d=a(5),o=a(8),j=a(15);!function(e){e.LOGIN_USER="LOGIN_USER",e.LOGOUT_USER="LOGOUT_USER"}(c||(c={}));var h=function(e,t){switch(t.type){case c.LOGIN_USER:return Object(j.a)({},t.payload);case c.LOGOUT_USER:return{username:"Guest Hacker",email:"",type:"public",profilePic:"./default_pfp.svg"};default:return e}},v=a(1),u={user:{username:"Guest Hacker",email:"",type:"public",profilePic:"./default_pfp.svg"}},m=Object(n.createContext)({state:u,dispatch:function(){return null}}),_=function(e,t){var a=e.user;return{user:h(a,t)}},b=function(e){var t=e.children,a=Object(n.useReducer)(_,u),c=Object(o.a)(a,2),s=c[0],r=c[1];return Object(v.jsx)(m.Provider,{value:{state:s,dispatch:r},children:t})},p=function(){var e=Object(n.useContext)(m).state.user;return Object(v.jsx)("div",{className:"dashboard__div--page",children:Object(v.jsxs)("div",{className:"dashboard__div--inner-container",children:[Object(v.jsx)("div",{className:"home__div--card",children:Object(v.jsxs)("h1",{id:"home__h1--welcome",children:["public"===e.type?"Hey there, ":"Welcome back, ",e.username," \ud83d\udc4b"]})}),Object(v.jsxs)("div",{id:"home__card-container",children:[Object(v.jsx)("div",{className:"home__card",style:{backgroundImage:'url("./resources.svg")'},children:Object(v.jsx)("div",{className:"home__card-body",id:"home__card--resources",children:"Resources"})}),Object(v.jsx)("div",{className:"home__card",style:{backgroundImage:'url("./mentors.svg")'},children:Object(v.jsx)("div",{className:"home__card-body",id:"home__card--mentors",children:"Mentors"})}),Object(v.jsx)("div",{className:"home__card",style:{backgroundImage:'url("./faq.svg")'},children:Object(v.jsx)("div",{className:"home__card-body",id:"home__card--faq",children:"FAQ"})})]}),Object(v.jsx)("span",{id:"home__note",children:"Note: these cards are not yet implemented!"})]})})},O=function(e){var t=e.searchValue,a=e.setSearchValue;return Object(v.jsx)("div",{id:"event-search__card",children:Object(v.jsx)("input",{className:"text-input",type:"text",name:"search",placeholder:"Search events",value:t,onChange:function(e){return a(e.target.value)},required:!0})})},x=function(e){var t=e.name,a=e.imgUrl,c=e.color,n=e.isSelected,s=e.setSelectedFilter;return Object(v.jsx)("div",{className:"event-filter__card",style:{backgroundImage:'url("'+a+'")',width:"".concat(n?"15em":"10em")},onClick:s,children:Object(v.jsx)("div",{className:"event-filter__card-color ".concat(c),children:t})})},f=a(19),g=a(18),N=a(17),y=a(52),k=a(13),w=function(e){switch(e){case"workshop":return Object(v.jsx)("h2",{className:"event-card__event-type event-card__h2--workshop",children:"WORKSHOP"});case"activity":return Object(v.jsx)("h2",{className:"event-card__event-type event-card__h2--activity",children:"ACTIVITY"});case"tech_talk":return Object(v.jsx)("h2",{className:"event-card__event-type event-card__h2--tech_talk",children:"TECH TALK"});default:return Object(v.jsx)("h2",{className:"event-card__event-type event-card__h2--default",children:"EVENT"})}},S=function(e){var t=e.event,a=e.eventsMap,c=Object(n.useContext)(m).state.user,s=t.speakers.map((function(e){return Object(v.jsx)(g.a,{placement:"bottom",delay:{show:250,hide:400},transition:!1,overlay:Object(v.jsx)(N.a,{id:"id",placement:"top",children:e.name}),children:e.profile_pic?Object(v.jsx)("img",{src:e.profile_pic,alt:"speaker profile",className:"event-card__presenter-pfp"}):Object(v.jsx)("div",{className:"event-card__presenter-pfp event-card__default-presenter-pfp event-card__pfp-color-".concat(t.event_type),children:e.name.slice(0,1)})},Object(y.a)())})),r=t.related_events.map((function(e){return Object(v.jsx)("div",{className:"event-card__related-pill",children:a.get(e)},Object(y.a)())}));return Object(v.jsxs)("div",{className:"event-card__card",children:[Object(v.jsx)("div",{className:"event-card__date-col",children:Object(v.jsxs)("div",{className:"event-card__cal-container",children:[Object(v.jsx)("span",{className:"event-card__cal-month",children:k.DateTime.fromMillis(t.start_time).monthShort.toUpperCase()}),Object(v.jsx)("span",{className:"event-card__cal-date",children:k.DateTime.fromMillis(t.start_time).day})]})}),Object(v.jsxs)("div",{className:"event-card__details-col",children:[w(t.event_type),Object(v.jsx)("h1",{className:"event-card__title",children:t.name}),Object(v.jsxs)("h3",{className:"event-card__time",children:[k.DateTime.fromMillis(t.start_time).toLocaleString(k.DateTime.TIME_SIMPLE)," - ",k.DateTime.fromMillis(t.end_time).toLocaleString(k.DateTime.TIME_SIMPLE)]}),Object(v.jsx)("p",{className:"event-card__desc",children:t.description}),Object(v.jsx)("p",{className:"event-card__related",children:"Related events"}),Object(v.jsx)("div",{className:"event-card__bottom-row",children:r}),Object(v.jsxs)("div",{className:"event-card__bottom-row",children:[Object(v.jsx)("div",{className:"presenter-container",children:s}),Object(v.jsx)("div",{className:"event-card__attend-button-container",children:Object(v.jsx)(f.a,{variant:t.event_type,className:"event-card__attend-button",href:"public"===c.type?t.public_url:t.private_url,target:"_blank",children:"Attend"})})]})]})]})},C=a(27),L=a(26),E=function(){var e=Object(n.useContext)(m).state.user,t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)("all"),i=Object(o.a)(r,2),l=i[0],d=i[1],j=Object(n.useState)([]),h=Object(o.a)(j,2),u=h[0],_=h[1],b=Object(n.useState)([]),p=Object(o.a)(b,2),f=p[0],g=p[1],N=Object(n.useState)(new Map),y=Object(o.a)(N,2),k=y[0],w=y[1],E=Object(n.useState)(!1),T=Object(o.a)(E,2),I=T[0],U=T[1];Object(n.useEffect)((function(){U(!0),fetch(L.a,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(t){t.data.events.forEach((function(e){return w((function(t){return t.set(e.id,e.name),t}))})),_(t.data.events.filter((function(t){return"public"===e.type&&"public"===t.permission||"public"!==e.type})).sort((function(e,t){return e.start_time>t.start_time?1:-1}))),U(!1)})).catch((function(){U(!1)}))}),[e.type]),Object(n.useEffect)((function(){g(u.filter((function(e){return"all"===l||e.event_type===l})).filter((function(e){var t;return e.name.toLowerCase().includes(c.toLowerCase())||(null===(t=e.description)||void 0===t?void 0:t.toLowerCase().includes(c.toLowerCase()))})).map((function(e){return Object(v.jsx)(S,{event:e,eventsMap:k},e.id)})))}),[u,l,c,k]);var M=[{name:"All Events",value:"all"},{name:"Workshops",value:"workshop"},{name:"Activities",value:"activity"},{name:"Tech Talks",value:"tech_talk"}].map((function(e){return Object(v.jsx)(x,{name:e.name,imgUrl:"./".concat(e.value,".svg"),color:"event-filter__div--".concat(e.value),isSelected:l===e.value,setSelectedFilter:function(){return d(e.value)}})}));return Object(v.jsx)("div",{className:"dashboard__div--page",children:Object(v.jsxs)("div",{className:"dashboard__div--inner-container",children:[Object(v.jsx)(O,{searchValue:c,setSearchValue:s}),Object(v.jsx)("div",{className:"events__filter-container",children:M}),I?Object(v.jsx)("div",{className:"events__container ",children:Object(v.jsx)(C.a,{animation:"border",role:"status",variant:"primary",children:Object(v.jsx)("span",{className:"sr-only",children:"Loading..."})})}):Object(v.jsx)(v.Fragment,{children:f.length>0?f:Object(v.jsxs)("div",{className:"events__container",children:[Object(v.jsx)("img",{src:"./empty.svg",alt:"no events",height:300,width:300}),Object(v.jsx)("br",{}),Object(v.jsx)("span",{children:"No events found"})]})})]})})},T=a(16),I="Goosey",U="hack@hon.com",M="1234",R=function(){var e=Object(d.f)(),t=Object(n.useContext)(m).dispatch,a=Object(n.useState)({email:"",password:""}),s=Object(o.a)(a,2),r=s[0],i=s[1],l=Object(n.useState)(""),h=Object(o.a)(l,2),u=h[0],_=h[1],b=function(e){var t=e.target,a=t.name,c=t.value;i(Object(j.a)(Object(j.a)({},r),{},Object(T.a)({},a,c)))};return Object(v.jsx)("div",{id:"login__wrapper",children:Object(v.jsxs)("div",{id:"login__card",children:[Object(v.jsx)("img",{src:"./logo_1.svg",alt:"logo",className:"login__logo",width:150,height:150}),Object(v.jsxs)("form",{onSubmit:function(a){a.preventDefault(),r.email===U&&r.password===M?(_(""),t(function(e){return{type:c.LOGIN_USER,payload:e}}({username:I,email:U,type:"hacker",profilePic:"./hacker_pfp.svg"})),e.push("/")):_("Invalid username or password")},children:[Object(v.jsx)("input",{className:"text-input mb-4",type:"email",name:"email",placeholder:"Email",value:r.email,onChange:b,required:!0}),Object(v.jsx)("input",{className:"text-input mb-4",type:"password",name:"password",placeholder:"Password",value:r.password,onChange:b,required:!0}),Object(v.jsx)(f.a,{variant:"primary",type:"submit",id:"login__login-button",children:"Log in"})]}),Object(v.jsx)("span",{id:"login__span--error",children:u})]})})},G=function(){var e=Object(n.useContext)(m),t=e.state.user,a=e.dispatch,s=Object(d.g)(),r=Object(d.f)();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{id:"side-nav__container",children:[Object(v.jsx)("img",{src:"./logo_1.svg",alt:"logo",className:"login__logo",width:100,height:100}),Object(v.jsx)("img",{src:t.profilePic,alt:"user profile",id:"side-nav__img--pfp"}),Object(v.jsx)("h1",{id:"side-nav__h1--username",children:t.username}),Object(v.jsx)(l.b,{to:"/",children:Object(v.jsxs)("div",{className:"/"===s.pathname?"nav-link side-nav__nav-link--selected":"nav-link",children:[Object(v.jsx)("img",{src:"/"===s.pathname?"./home_selected.svg":"./home.svg",alt:"home",className:"side-nav__img--nav-icon"}),Object(v.jsx)("span",{children:"Home"})]})}),Object(v.jsx)(l.b,{to:"/events",children:Object(v.jsxs)("div",{className:"/events"===s.pathname?"nav-link side-nav__nav-link--selected":"nav-link",children:[Object(v.jsx)("img",{src:"/events"===s.pathname?"./events_selected.svg":"./events.svg",alt:"events",className:"side-nav__img--nav-icon"}),Object(v.jsx)("span",{children:"Events"})]})}),"public"===t.type?Object(v.jsxs)("div",{className:"side-nav__div--account-action",children:[Object(v.jsx)("a",{href:"#/login",children:"Log in"})," for full access to the Dashboard!"]}):Object(v.jsx)("div",{className:"side-nav__div--account-action",children:Object(v.jsx)("p",{onClick:function(){a({type:c.LOGOUT_USER}),r.push("/")},id:"side-nav__p--logout",children:"Log out"})})]}),Object(v.jsx)(g.a,{placement:"top",delay:{show:250,hide:400},transition:!1,overlay:Object(v.jsx)(N.a,{id:"id",placement:"top",children:"Don't forget to drink water!"}),children:Object(v.jsx)("img",{src:"./drink_water.svg",alt:"drink water",height:100,width:100,id:"side-nav__img--drink-water"})})]})};var P=function(){return Object(v.jsx)(b,{children:Object(v.jsx)(l.a,{children:Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)(d.c,{children:[Object(v.jsx)(d.a,{path:"/login",children:Object(v.jsx)(R,{})}),Object(v.jsx)(d.a,{path:"/",children:Object(v.jsxs)("div",{id:"router-container",children:[Object(v.jsx)(G,{}),Object(v.jsx)("div",{id:"page-window",children:Object(v.jsxs)(d.c,{children:[Object(v.jsx)(d.a,{path:"/events",children:Object(v.jsx)(E,{})}),Object(v.jsx)(d.a,{path:"/",children:Object(v.jsx)(p,{})})]})})]})})]})})})})},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,53)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};i.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(P,{})}),document.getElementById("root")),D()}},[[46,1,2]]]);
//# sourceMappingURL=main.796b79b0.chunk.js.map