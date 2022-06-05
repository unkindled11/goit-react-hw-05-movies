"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[617],{8803:function(t,n,r){r.d(n,{Z:function(){return f}});var e=r(501),u=r(6871),a="movieList_list__TWtH3",c="movieList_item__4++3+",i="movieList_link__I+0hB",s=r(184),o=function(t){var n=t.items,r=(0,u.TH)(),o=n.map((function(t){var n=t.id,u=t.title,a=t.name;return(0,s.jsx)("li",{className:c,children:(0,s.jsx)(e.rU,{state:{from:r},to:"/movies/".concat(n),className:i,children:null!==u&&void 0!==u?u:a})},n)}));return(0,s.jsx)("ul",{className:a,children:o})},f=o;o.defaultProps={items:[]}},617:function(t,n,r){r.r(n),r.d(n,{default:function(){return x}});var e=r(1413),u=r(5861),a=r(885),c=r(7757),i=r.n(c),s=r(2791),o=r(501),f=r(8803),p=r(4942),v="searchForm_form__o5IOL",m="searchForm_input__5z1VD",l="searchForm_btn__ZOFJW",d=r(184),h=function(t){var n=t.onSubmit,r=(0,s.useState)({query:""}),u=(0,a.Z)(r,2),c=u[0],i=u[1],o=function(t){t.preventDefault(),n((0,e.Z)({},c)),i({query:""})};return(0,d.jsxs)("form",{action:"",onSubmit:o,className:v,children:[(0,d.jsx)("input",{value:c.query,name:"query",onChange:function(t){var n=t.target,r=n.name,u=n.value;i((function(t){return(0,e.Z)((0,e.Z)({},t),{},(0,p.Z)({},r,u))}))},type:"text",className:m}),(0,d.jsx)("button",{type:"button",onClick:o,className:l,children:"Search"})]})},_=r(9973),x=function(){var t=(0,s.useState)({items:[],loading:!1,error:null}),n=(0,a.Z)(t,2),r=n[0],c=n[1],p=(0,o.lr)(),v=(0,a.Z)(p,2),m=v[0],l=v[1],x=m.get("query");(0,s.useEffect)((function(){var t=function(){var t=(0,u.Z)(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c((function(t){return(0,e.Z)((0,e.Z)({},t),{},{loading:!0})})),t.prev=1,t.next=4,(0,_.UN)(x);case 4:n=t.sent,c((function(t){return(0,e.Z)((0,e.Z)({},t),{},{loading:!1,items:n})})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),c((function(n){return(0,e.Z)((0,e.Z)({},n),{},{loading:!1,error:t.t0.message})}));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}();x&&t()}),[x]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h,{onSubmit:function(t){var n=t.query;return l({query:n})}}),(0,d.jsx)(f.Z,{items:r.items})]})}},9973:function(t,n,r){r.d(n,{Pg:function(){return o},UN:function(){return v},XT:function(){return s},tx:function(){return p},zv:function(){return f}});var e=r(5861),u=r(7757),a=r.n(u),c=r(4569),i=r.n(c)().create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"95d99059b83ce58675fad807e29d492a"}}),s=function(){var t=(0,e.Z)(a().mark((function t(){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("trending/movie/day");case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,e.Z)(a().mark((function t(n){var r,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("movie/".concat(n));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(a().mark((function t(n){var r,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("movie/".concat(n,"/credits"));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(a().mark((function t(n){var r,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("movie/".concat(n,"/reviews"));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(a().mark((function t(n){var r,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("search/movie?query=".concat(n));case 2:return r=t.sent,e=r.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=617.a6daa763.chunk.js.map