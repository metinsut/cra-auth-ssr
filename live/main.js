!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=15)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("styled-components")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("react-router-config")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-helmet")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("serialize-javascript")},function(e,t){e.exports=require("redux-thunk")},function(e,t){e.exports=require("redux-logger")},function(e,t){e.exports=require("@babel/polyfill")},function(e,t,n){"use strict";n.r(t);n(14);var r=n(8),o=n.n(r),a=n(3),u=n(0),i=n.n(u),c=n(9),l=n(10),f=n(2),s=n(11),p=n.n(s),y=n(4),m=n(1),d=n.n(m);function b(){var e=E(["\n    cursor:pointer;\n    color:transparent;\n    background-color: transparent;\n        &:not(:first-child) {\n            margin-left:10px;\n        }\n        &:focus, &:active {\n            color:transparent;\n            background-color: transparent;\n        }\n"]);return b=function(){return e},e}function h(){var e=E(["\npadding:5px 10px;\ncolor:white;\nfont-size:1.6rem;\nborder:0;\nbackground-color:",";\ncursor:pointer;\n&:not(:first-child) {\n    margin-left:10px;\n}\n&:hover, &:focus {\noutline:0;\n}\n"]);return h=function(){return e},e}function v(){var e=E(["\ndisplay:flex;\nalign-items:center;\npadding:10px;\n"]);return v=function(){return e},e}function g(){var e=E(["\ndisplay:flex;\nalign-items:center;\npadding:10px;\n"]);return g=function(){return e},e}function w(){var e=E(["\ndisplay:flex;\nalign-items:center;\npadding:10px;\n"]);return w=function(){return e},e}function O(){var e=E(["\n  display:flex;\n  align-items:center;\n  justify-content:space-between;\n  flex-wrap:wrap;\n  padding:10px;\n  background-color: #a76139;\n"]);return O=function(){return e},e}function E(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var j=d.a.header(O()),x=d.a.div(w()),P=d.a.div(g()),S=d.a.div(v()),_=d.a.button(h(),function(e){return e.primary?"#654369":"#433f80"}),k=d()(y.Link)(b());function T(){var e=D(["\ncolor: ",";\nfont-size:40px;\n"]);return T=function(){return e},e}function R(){var e=D(["\ncolor:",";\nfont-size:20px;\npadding:",";\n"]);return R=function(){return e},e}function D(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var U=d.a.p(R(),function(e){return e.color?"".concat(e.color):"#4a4a4a"},function(e){return e.p?"".concat(e.p):"0"}),C=d.a.h2(T(),function(e){return e.dark?"#4a4a4a":"#fafafa"}),F="/:pages?/:param?/:param1?/:param2?/:param3?";function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var q=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(N(N(n=function(e,t){return!t||"object"!==L(t)&&"function"!=typeof t?N(e):t}(this,(e=A(t)).call.apply(e,[this].concat(o))))),"logOut",function(){n.props.firebase.logout(),n.props.history.push("/")}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(t,u["Component"]),function(e,t,n){t&&M(e.prototype,t),n&&M(e,n)}(t,[{key:"render",value:function(){var e=this.props.auth,t=e.success;return i.a.createElement(j,null,i.a.createElement(x,null,i.a.createElement(k,{to:"/home"},i.a.createElement(U,{color:"white"},"FireStore Test"))),i.a.createElement(P,null,i.a.createElement(k,{to:"/home"},i.a.createElement(U,{color:"white"},"Home")),i.a.createElement(k,{to:"/users"},i.a.createElement(U,{color:"white"},"Users")),!0===t&&i.a.createElement(k,{to:"/protected"},i.a.createElement(U,{color:"white"},"Protected"))),i.a.createElement(S,null,!0===t?i.a.createElement(u.Fragment,null,i.a.createElement(U,{color:"white"},e.displayName),i.a.createElement(_,{onClick:this.logOut,second:!0},"Logout")):i.a.createElement(u.Fragment,null,i.a.createElement(k,{to:"/login"},i.a.createElement(_,{primary:!0},"Login")),i.a.createElement(k,{to:"/signup"},i.a.createElement(_,{second:!0},"Sign Up")))))}}]),t}(),I=Object(y.withRouter)(Object(f.connect)(function(e){return{auth:e.auth}})(q));function W(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  * {\n    padding:0;\n    margin:0;\n    box-sizing:border-box;\n  }\n  ul {\n    list-style: none;\n  }\n"]);return W=function(){return e},e}var H=Object(m.createGlobalStyle)(W()),G={component:function(e){var t=e.route;return i.a.createElement(u.Fragment,null,i.a.createElement(H,null),i.a.createElement(I,null),Object(a.renderRoutes)(t.routes))}};function B(){var e=V(["\n  display:flex;\n"]);return B=function(){return e},e}function J(){var e=V(["\n  display:flex;\n"]);return J=function(){return e},e}function V(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var X=d.a.section(J());d.a.div(B());function K(e){return(K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Y(e,t){return!t||"object"!==K(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Z(e){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function $(e,t){return($=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ee={component:function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Y(this,Z(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$(e,t)}(t,u["Component"]),function(e,t,n){t&&Q(e.prototype,t),n&&Q(e,n)}(t,[{key:"render",value:function(){return i.a.createElement(X,null,i.a.createElement(U,{dark:!0},"Home"))}}]),t}()},te=n(6),ne=n(7),re=n.n(ne);function oe(e,t,n,r,o,a,u){try{var i=e[a](u),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,o)}function ae(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function u(e){oe(a,r,o,u,i,"next",e)}function i(e){oe(a,r,o,u,i,"throw",e)}u(void 0)})}}var ue=function(){return function(){var e=ae(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re.a.get("https://jsonplaceholder.typicode.com/users");case 2:n=e.sent,t({type:"fetch_users",payload:n});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},ie=function(){return function(){var e=ae(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re.a.get("https://jsonplaceholder.typicode.com/posts");case 2:n=e.sent,t({type:"fetch_posts",payload:n});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()};function ce(e){return(ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function le(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function fe(e,t){return!t||"object"!==ce(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function se(e){return(se=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function pe(e,t){return(pe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ye(e){return(ye="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function me(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function de(e,t){return!t||"object"!==ye(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function be(e){return(be=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function he(e,t){return(he=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ve=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),de(this,be(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&he(e,t)}(t,u["Component"]),function(e,t,n){t&&me(e.prototype,t),n&&me(e,n)}(t,[{key:"componentDidMount",value:function(){this.props.fetchData()}},{key:"render",value:function(){var e=this.props.data;return console.log(e),i.a.createElement("div",null,i.a.createElement(C,null,"PROTECTED PAGE"))}}]),t}(),ge={loadData:function(e){return e.dispatch(function(){var e=ae(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re.a.get("https://jsonplaceholder.typicode.com/albums");case 2:n=e.sent,t({type:"fetch_data",payload:n});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}())},component:function(e){var t=function(t){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),fe(this,se(n).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&pe(e,t)}(n,u.Component),function(e,t,n){t&&le(e.prototype,t),n&&le(e,n)}(n,[{key:"componentDidMount",value:function(){this.shouldNavigateAway()}},{key:"componentDidUpdate",value:function(){this.shouldNavigateAway()}},{key:"shouldNavigateAway",value:function(){!1===(this.props.auth.isLoaded&&!this.props.auth.isEmpty)&&this.props.history.push("/")}},{key:"render",value:function(){return i.a.createElement(e,this.props)}}]),n}();return Object(f.connect)(function(e){return{auth:e.firebase.auth}})(t)}(Object(te.compose)(Object(f.connect)(function(e){return{data:e.protected}}))(ve))},we=n(5);function Oe(e){return(Oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function je(e,t){return!t||"object"!==Oe(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function xe(e){return(xe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Pe(e,t){return(Pe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Se=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),je(this,xe(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Pe(e,t)}(t,u["Component"]),function(e,t,n){t&&Ee(e.prototype,t),n&&Ee(e,n)}(t,[{key:"componentDidMount",value:function(){this.props.fetchUsers()}},{key:"renderUsers",value:function(){return this.props.users.map(function(e,t){return i.a.createElement("li",{key:t},e.name,i.a.createElement(y.Link,{to:"/users/"+e.id},e.id))})}},{key:"head",value:function(){return i.a.createElement(we.Helmet,null,i.a.createElement("title",null,"".concat(this.props.users.length," Users Loaded")),i.a.createElement("meta",{name:"description",content:"Users List"}),i.a.createElement("meta",{property:"og:title",content:"Users App"}),i.a.createElement("meta",{property:"og:description",content:"Users App Test Desc."}))}},{key:"render",value:function(){return i.a.createElement(u.Fragment,null,this.head(),i.a.createElement("h1",null,"List of users:"),i.a.createElement("ul",null,this.renderUsers()),Object(a.renderRoutes)(this.props.route.routes))}}]),t}(),_e={loadData:function(e){return e.dispatch(ue())},component:Object(f.connect)(function(e){return{users:e.users}},{fetchUsers:ue})(Se)};function ke(e){return(ke="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Te(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Re(e,t){return!t||"object"!==ke(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function De(e){return(De=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ue(e,t){return(Ue=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Ce=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Re(this,De(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ue(e,t)}(t,u["Component"]),function(e,t,n){t&&Te(e.prototype,t),n&&Te(e,n)}(t,[{key:"componentDidMount",value:function(){this.props.fetchPosts()}},{key:"renderUsers",value:function(){return this.props.posts.map(function(e,t){return i.a.createElement("li",{key:t},e.title)})}},{key:"head",value:function(){return i.a.createElement(we.Helmet,null,i.a.createElement("title",null,"User Posts"),i.a.createElement("meta",{name:"description",content:"Users List"}),i.a.createElement("meta",{property:"og:title",content:"Users App"}),i.a.createElement("meta",{property:"og:description",content:"Users App Test Desc."}))}},{key:"render",value:function(){return i.a.createElement(u.Fragment,null,this.head(),i.a.createElement("h1",null,"Posts"),i.a.createElement("ul",null,this.renderUsers()))}}]),t}(),Fe={loadData:function(e){return e.dispatch(ie())},component:Object(f.connect)(function(e){return{posts:e.posts}},{fetchPosts:ie})(Ce)};function Le(){var e=Ne(["\nbackground-color:white;\npadding:10px;\nborder-radius:5px;\n\n"]);return Le=function(){return e},e}function Me(){var e=Ne(["\nposition:absolute;\nleft:100%;\ncursor:pointer;\n\n"]);return Me=function(){return e},e}function Ae(){var e=Ne(["\nposition:relative;\npadding:0 20px 0;\nmargin:7% 0 20px;\nalign-self:flex-start;\n\n"]);return Ae=function(){return e},e}function ze(){var e=Ne(["\nposition:fixed;\ntop:0;\nleft:0;\nwidth: 100vw;\nheight: 100vh;\nbackground-color:rgba(0,0,0,0.5);\ndisplay:flex;\njustify-content:center;\npadding:20px;\n\n"]);return ze=function(){return e},e}function Ne(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var qe=d.a.div(ze()),Ie=d.a.div(Ae()),We=d.a.div(Me()),He=d.a.div(Le());function Ge(){var e=$e(["\nwidth:auto;\nborder-radius:6px;\nbackground-color:#4b5fbf;\ncolor:white;\ncursor:pointer;\n"]);return Ge=function(){return e},e}function Be(){var e=$e(["\nwidth:100%;\nheight: 40px;\nborder:0;\nfont-size:1.8rem;\npadding:0 10px;\noutline:0;\n"]);return Be=function(){return e},e}function Je(){var e=$e(["\nborder:2px solid #9e9ea5;\nborder-radius:6px;\noverflow:hidden;\nwidth:100%;\n"]);return Je=function(){return e},e}function Ve(){var e=$e(["\npadding:0 0 3px 0;\n\n"]);return Ve=function(){return e},e}function Xe(){var e=$e(["\nwidth:100%;\n\n"]);return Xe=function(){return e},e}function Ke(){var e=$e(["\npadding:10px;\ndisplay:flex;\njustify-content:",";\n\n"]);return Ke=function(){return e},e}function Qe(){var e=$e(["\npadding:10px 0;\n\n"]);return Qe=function(){return e},e}function Ye(){var e=$e(["\npadding:10px;\n"]);return Ye=function(){return e},e}function Ze(){var e=$e(["\nwidth:500px;\ndisplay:flex;\nflex-direction:column;\n\n"]);return Ze=function(){return e},e}function $e(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var et=d.a.form(Ze()),tt=d.a.div(Ye()),nt=d.a.div(Qe()),rt=d.a.div(Ke(),function(e){return e.end?"flex-end":"flex-start"}),ot=d.a.div(Xe()),at=d.a.div(Ve()),ut=d.a.div(Je()),it=d.a.input(Be()),ct=d()(it)(Ge());function lt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){ft(e,t,n[t])})}return e}function ft(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function st(e,t,n,r,o,a,u){try{var i=e[a](u),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,o)}var pt=function(e,t){return function(){var n=function(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function u(e){st(a,r,o,u,i,"next",e)}function i(e){st(a,r,o,u,i,"throw",e)}u(void 0)})}}(regeneratorRuntime.mark(function n(r,o,a){var u,i,c,l,f,s;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return u=a.getFirebase,i=a.getFirestore,c=u(),l=i(),n.prev=3,n.next=6,c.auth().createUserWithEmailAndPassword(e.email,e.password);case 6:return n.next=8,c.auth().currentUser;case 8:return f=n.sent,n.next=11,f.updateProfile({displayName:e.username});case 11:return s={displayName:e.username,email:e.email,createdAt:l.FieldValue.serverTimestamp()},n.next=14,l.set({collection:"users",doc:f.uid},lt({},s));case 14:t(),n.next=20;break;case 17:n.prev=17,n.t0=n.catch(3),console.log(n.t0);case 20:case"end":return n.stop()}},n,this,[[3,17]])}));return function(e,t,r){return n.apply(this,arguments)}}()};function yt(){var e=dt(["\n  background-color:",";\n  border-radius:4px;\n  cursor:pointer;\n"]);return yt=function(){return e},e}function mt(){var e=dt(["\n  display:flex;\n  flex-direction:column;\n"]);return mt=function(){return e},e}function dt(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var bt=d.a.section(mt()),ht=d.a.section(yt(),function(e){return e.bc?"".concat(e.bc):"transparent"});function vt(e,t,n,r,o,a,u){try{var i=e[a](u),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,o)}var gt=function(e,t){return function(){var n=function(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function u(e){vt(a,r,o,u,i,"next",e)}function i(e){vt(a,r,o,u,i,"throw",e)}u(void 0)})}}(regeneratorRuntime.mark(function n(r,o,a){var u,i,c,l,f;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return u=a.getFirebase,i=a.getFirestore,c=u(),l=i(),n.prev=3,n.next=6,c.login({provider:e,type:"popup"});case 6:if(!(f=n.sent).additionalUserInfo.isNewUser){n.next=10;break}return n.next=10,l.set({collection:"users",doc:f.user.uid},{displayName:f.profile.displayName,photoURL:f.profile.avatarUrl,createdAt:l.FieldValue.serverTimestamp()});case 10:t(),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(3),console.log(n.t0);case 16:case"end":return n.stop()}},n,this,[[3,13]])}));return function(e,t,r){return n.apply(this,arguments)}}()};function wt(e){return(wt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ot(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Et(e){return(Et=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function jt(e,t){return(jt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function xt(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Pt=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(xt(xt(n=function(e,t){return!t||"object"!==wt(t)&&"function"!=typeof t?xt(e):t}(this,(e=Et(t)).call.apply(e,[this].concat(o))))),"loginSocial",function(e){return function(){n.props.dispatch(gt(e,function(){n.props.history.push("/")}))}}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&jt(e,t)}(t,u["Component"]),function(e,t,n){t&&Ot(e.prototype,t),n&&Ot(e,n)}(t,[{key:"render",value:function(){return i.a.createElement(u.Fragment,null,i.a.createElement(bt,null,i.a.createElement(rt,null,i.a.createElement(ht,{bc:"blue",onClick:this.loginSocial("facebook")},i.a.createElement(U,{p:"10px",color:"white"},"Login With Facebook"))),i.a.createElement(rt,null,i.a.createElement(ht,{bc:"red",onClick:this.loginSocial("google")},i.a.createElement(U,{p:"10px",color:"white"},"Login With Google")))))}}]),t}(),St=Object(f.connect)()(Pt);function _t(e){return(_t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function kt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Tt(e){return(Tt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Rt(e,t){return(Rt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Dt(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ut(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ct=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return Ut(Dt(Dt(n=function(e,t){return!t||"object"!==_t(t)&&"function"!=typeof t?Dt(e):t}(this,(e=Tt(t)).call.apply(e,[this].concat(o))))),"loginRef",i.a.createRef()),Ut(Dt(Dt(n)),"closeModal",function(e){void 0!==window&&!1===n.loginRef.current.contains(e.target)&&n.run()}),Ut(Dt(Dt(n)),"run",function(){n.props.history.goBack()}),Ut(Dt(Dt(n)),"sendRegisterData",function(e){e.preventDefault();var t={username:e.target.username.value,email:e.target.email.value,password:e.target.password.value};n.props.dispatch(pt(t,function(){n.props.history.push("/")}))}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Rt(e,t)}(t,u["Component"]),function(e,t,n){t&&kt(e.prototype,t),n&&kt(e,n)}(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){window.addEventListener("click",e.closeModal)},0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.closeModal)}},{key:"render",value:function(){return i.a.createElement(qe,null,i.a.createElement(Ie,null,i.a.createElement(We,{onClick:this.run},i.a.createElement(U,{color:"white"},"EXIT")),i.a.createElement(He,{ref:this.loginRef},i.a.createElement(et,{onSubmit:this.sendRegisterData},i.a.createElement(tt,null,i.a.createElement(C,{dark:!0},"Register Form")),i.a.createElement(nt,null,i.a.createElement(rt,null,i.a.createElement(ot,null,i.a.createElement(at,null,i.a.createElement(U,null,"User Name")),i.a.createElement(ut,null,i.a.createElement(it,{name:"username"})))),i.a.createElement(rt,null,i.a.createElement(ot,null,i.a.createElement(at,null,i.a.createElement(U,{dark:!0},"E-mail")),i.a.createElement(ut,null,i.a.createElement(it,{name:"email"})))),i.a.createElement(rt,null,i.a.createElement(ot,null,i.a.createElement(at,null,i.a.createElement(U,{dark:!0},"Password")),i.a.createElement(ut,null,i.a.createElement(it,{name:"password"})))),i.a.createElement(rt,{end:"true"},i.a.createElement(ct,{type:"submit",value:"SEND"})))),i.a.createElement("hr",null),i.a.createElement(St,{history:this.props.history}))))}}]),t}(),Ft={component:Object(f.connect)()(Ct)};function Lt(e,t,n,r,o,a,u){try{var i=e[a](u),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,o)}var Mt=function(e,t){return function(){var n=function(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function u(e){Lt(a,r,o,u,i,"next",e)}function i(e){Lt(a,r,o,u,i,"throw",e)}u(void 0)})}}(regeneratorRuntime.mark(function n(r,o,a){var u,i;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return u=a.getFirebase,i=u(),n.prev=2,n.next=5,i.auth().signInWithEmailAndPassword(e.email,e.password);case 5:t(),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(2),console.log(n.t0);case 11:case"end":return n.stop()}},n,this,[[2,8]])}));return function(e,t,r){return n.apply(this,arguments)}}()};function At(e){return(At="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function zt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Nt(e){return(Nt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function qt(e,t){return(qt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function It(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Wt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ht=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return Wt(It(It(n=function(e,t){return!t||"object"!==At(t)&&"function"!=typeof t?It(e):t}(this,(e=Nt(t)).call.apply(e,[this].concat(o))))),"loginRef",i.a.createRef()),Wt(It(It(n)),"closeModal",function(e){void 0!==window&&!1===n.loginRef.current.contains(e.target)&&n.run()}),Wt(It(It(n)),"run",function(){n.props.history.goBack()}),Wt(It(It(n)),"sendLoginData",function(e){e.preventDefault();var t={email:e.target.email.value,password:e.target.password.value};n.props.dispatch(Mt(t,function(){n.props.history.goBack()}))}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&qt(e,t)}(t,u["Component"]),function(e,t,n){t&&zt(e.prototype,t),n&&zt(e,n)}(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){window.addEventListener("click",e.closeModal)},0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.closeModal)}},{key:"render",value:function(){return i.a.createElement(qe,null,i.a.createElement(Ie,null,i.a.createElement(We,{onClick:this.run},i.a.createElement(U,{color:"white"},"EXIT")),i.a.createElement(He,{ref:this.loginRef},i.a.createElement(et,{onSubmit:this.sendLoginData},i.a.createElement(tt,null,i.a.createElement(C,{dark:!0},"Login Form")),i.a.createElement(nt,null,i.a.createElement(rt,null,i.a.createElement(ot,null,i.a.createElement(at,null,i.a.createElement(U,{dark:!0},"E-mail")),i.a.createElement(ut,null,i.a.createElement(it,{name:"email"})))),i.a.createElement(rt,null,i.a.createElement(ot,null,i.a.createElement(at,null,i.a.createElement(U,{dark:!0},"Password")),i.a.createElement(ut,null,i.a.createElement(it,{name:"password"})))),i.a.createElement(rt,{end:"true"},i.a.createElement(ct,{type:"submit",value:"SEND"})))),i.a.createElement("hr",null),i.a.createElement(St,{history:this.props.history}))))}}]),t}(),Gt={component:Object(f.connect)()(Ht)},Bt={component:function(e){var t=e.staticContext;return(void 0===t?{}:t).notFound=!0,i.a.createElement(u.Fragment,null,i.a.createElement("h1",null,"PAGE NOT FOUND"))}};function Jt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){Vt(e,t,n[t])})}return e}function Vt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Xt=[Jt({},G,{routes:[Jt({},ee,{path:"/",exact:!0}),Jt({},ee,{path:"/home"}),Jt({},ge,{path:"/protected"}),Jt({},Gt,{path:F+"/login"}),Jt({},Ft,{path:F+"/signup"}),Jt({},_e,{path:"/users",routes:[Jt({path:"/users/:id"},Fe)]}),Jt({},Bt)]})],Kt=new m.ServerStyleSheet,Qt=n(12),Yt=n.n(Qt),Zt=n(13),$t=n.n(Zt);function en(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var tn={fail:null,state:null,success:null},nn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth_user":return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){en(e,t,n[t])})}return e}({},e,t.payload);default:return e}},rn=Object(te.combineReducers)({auth:nn,users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_users":return t.payload.data;default:return e}},posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_posts":return t.payload.data;default:return e}},protected:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_data":return t.payload.data;default:return e}}}),on=Object(te.applyMiddleware)(Yt.a,$t.a),an=Object(te.createStore)(rn,"undefined"!=typeof window&&window?window.INITIAL_STATE:{},on),un=o()();un.use(o.a.static("live")),un.get("*",function(e,t){var n=an,r=Object(a.matchRoutes)(Xt,e.path).map(function(e){var t=e.route;return t.loadData?t.loadData(n):null});Promise.all(r).then(function(){var r={},o=function(e,t,n){var r=Object(c.renderToString)(i.a.createElement(m.StyleSheetManager,{sheet:Kt.instance},i.a.createElement(f.Provider,{store:t},i.a.createElement(l.StaticRouter,{location:e.path,context:n},i.a.createElement(u.Fragment,null,Object(a.renderRoutes)(Xt)))))),o=we.Helmet.renderStatic();return"\n    <html>\n    <head>\n    ".concat(o.title.toString(),"\n    ").concat(o.meta.toString(),'\n    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">\n    ').concat(Kt.getStyleTags(),'\n    </head>\n    <body>\n        <div id="root">').concat(r,"</div>\n        <script>\n            window.INITIAL_STATE = ").concat(p()(t.getState()),"\n        <\/script>\n\n        <script>\n        !(function(l) {\n           function e(e) {\n              for (var r, t, n = e[0], o = e[1], u = e[2], f = 0, i = []; f < n.length; f++)\n                 (t = n[f]), p[t] && i.push(p[t][0]), (p[t] = 0);\n              for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (l[r] = o[r]);\n              for (s && s(e); i.length; ) i.shift()();\n              return c.push.apply(c, u || []), a();\n           }\n           function a() {\n              for (var e, r = 0; r < c.length; r++) {\n                 for (var t = c[r], n = !0, o = 1; o < t.length; o++) {\n                    var u = t[o];\n                    0 !== p[u] && (n = !1);\n                 }\n                 n && (c.splice(r--, 1), (e = f((f.s = t[0]))));\n              }\n              return e;\n           }\n           var t = {},\n              p = { 2: 0 },\n              c = [];\n           function f(e) {\n              if (t[e]) return t[e].exports;\n              var r = (t[e] = { i: e, l: !1, exports: {} });\n              return l[e].call(r.exports, r, r.exports, f), (r.l = !0), r.exports;\n           }\n           (f.m = l),\n              (f.c = t),\n              (f.d = function(e, r, t) {\n                 f.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: t });\n              }),\n              (f.r = function(e) {\n                 'undefined' != typeof Symbol &&\n                    Symbol.toStringTag &&\n                    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),\n                    Object.defineProperty(e, '__esModule', { value: !0 });\n              }),\n              (f.t = function(r, e) {\n                 if ((1 & e && (r = f(r)), 8 & e)) return r;\n                 if (4 & e && 'object' == typeof r && r && r.__esModule) return r;\n                 var t = Object.create(null);\n                 if (\n                    (f.r(t),\n                    Object.defineProperty(t, 'default', { enumerable: !0, value: r }),\n                    2 & e && 'string' != typeof r)\n                 )\n                    for (var n in r)\n                       f.d(\n                          t,\n                          n,\n                          function(e) {\n                             return r[e];\n                          }.bind(null, n)\n                       );\n                 return t;\n              }),\n              (f.n = function(e) {\n                 var r =\n                    e && e.__esModule\n                       ? function() {\n                             return e.default;\n                         }\n                       : function() {\n                             return e;\n                         };\n                 return f.d(r, 'a', r), r;\n              }),\n              (f.o = function(e, r) {\n                 return Object.prototype.hasOwnProperty.call(e, r);\n              }),\n              (f.p = '/');\n           var r = (window.webpackJsonp = window.webpackJsonp || []),\n              n = r.push.bind(r);\n           (r.push = e), (r = r.slice());\n           for (var o = 0; o < r.length; o++) e(r[o]);\n           var s = n;\n           a();\n        })([]);</script\n     ><script src=\"/static/js/1.7b6edb6b.chunk.js\"></script\n     ><script src=\"/static/js/main.0b98e1cc.chunk.js\"><\/script>\n\n    </body>\n    </html>\n    ")}(e,n,r);if(r.url)return t.redirect(301,o.url);r.notFound&&t.status(404),t.send(o)})}),un.listen(3005,function(){console.log("Listening on port 3005")})}]);