(this["webpackJsonpkapusta-bl3-front"]=this["webpackJsonpkapusta-bl3-front"]||[]).push([[1],{118:function(e,t,c){"use strict";t.a=c.p+"static/media/sprite.6c7d0622.svg"},256:function(e,t,c){e.exports={Overlay:"Modal_Overlay__3xwxP",Modal:"Modal_Modal__1p8YX",confirmButton:"Modal_confirmButton__3y7Qz",declineButton:"Modal_declineButton__46ItH",buttonWrapper:"Modal_buttonWrapper__j-U0X",closeButtonIcon:"Modal_closeButtonIcon__1RrRq",closeButton:"Modal_closeButton__3Kf_3"}},257:function(e,t,c){e.exports={item:"userMenu_item__38-jg",personalInf:"userMenu_personalInf__33EdG",avatar:"userMenu_avatar__4cRWr",name:"userMenu_name__23qkf",vector:"userMenu_vector__yeB-p",text:"userMenu_text__3R2Rf",button:"userMenu_button__3GJAS",icon:"userMenu_icon__3czx8",icon_container:"userMenu_icon_container__3zu5k"}},258:function(e,t,c){e.exports={header:"headers_header__3wObe",logo:"headers_logo__1RJaH",logoLink:"headers_logoLink__1vaTn"}},508:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return x}));var n=c(18),a=c(17),s=c(0),o=c(6),r=c(19),i=c(256),l=c.n(i),u=c(118),d=c(1),j=document.querySelector("#modal-root");function b(e){var t=e.onClose,c=e.onLogout,n=e.children;Object(s.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]);return Object(r.createPortal)(Object(d.jsx)("div",{className:l.a.Overlay,onClick:function(e){e.target===e.currentTarget&&t()},children:Object(d.jsxs)("div",{className:l.a.Modal,children:[Object(d.jsx)("div",{className:l.a.closeButton,onClick:t,children:Object(d.jsx)("svg",{width:"14",height:"14",className:l.a.closeButtonIcon,children:Object(d.jsx)("use",{href:"".concat(u.a,"#icon-close")})})}),Object(d.jsx)("div",{children:n}),Object(d.jsxs)("div",{className:l.a.buttonWrapper,children:[Object(d.jsx)("button",{className:l.a.confirmButton,onClick:c,children:"\u0414\u0430"}),Object(d.jsx)("button",{className:l.a.declineButton,onClick:t,children:"\u041d\u0435\u0442"})]})]})}),j)}var h=c(20),O=(c(30),c(257)),p=c.n(O);function v(){var e=Object(s.useState)(!1),t=Object(a.a)(e,2),c=t[0],r=t[1],i=Object(n.b)(),l=Object(n.c)(h.getUserEmail),j=l.split("@")[0],O=l.substring(0,1),v=function(){r(!c)};return Object(d.jsxs)("div",{className:p.a.item,children:[Object(d.jsxs)("div",{className:p.a.personalInf,children:[Object(d.jsx)("span",{className:p.a.avatar,children:O}),Object(d.jsx)("span",{className:p.a.name,children:j}),Object(d.jsx)("span",{className:p.a.vector,children:"|"})]}),Object(d.jsx)("div",{className:p.a.icon_container,onClick:v,children:Object(d.jsx)("svg",{width:"16",height:"16",className:p.a.icon,children:Object(d.jsx)("use",{href:"".concat(u.a,"#logout-icon")})})}),Object(d.jsx)("button",{type:"button",className:p.a.button,onClick:v,children:"\u0412\u044b\u0439\u0442\u0438"}),c&&Object(d.jsx)(b,{onClose:v,onLogout:function(){i(Object(o.c)())},children:Object(d.jsx)("p",{className:p.a.text,children:"\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0432\u044b\u0439\u0442\u0438?"})})]})}var A=c(13),m=c(258),f=c.n(m);function x(){var e=Object(n.c)(h.getIsAuth);return Object(d.jsx)("div",{className:f.a.container,children:Object(d.jsxs)("header",{className:f.a.header,children:[Object(d.jsx)(A.c,{to:"/",className:f.a.logoLink,children:Object(d.jsx)("img",{src:"data:image/png;base64,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",alt:"",width:"90",className:f.a.logo})}),e?Object(d.jsx)(v,{}):Object(d.jsx)(d.Fragment,{})]})})}}}]);
//# sourceMappingURL=header-view.0dd7f7e7.chunk.js.map