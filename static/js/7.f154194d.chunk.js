(this.webpackJsonpmysite=this.webpackJsonpmysite||[]).push([[7],{123:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)({});t.a=r},126:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t}},135:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),r=a.isValidElement;function o(e,t){return function(e,t,n){return r(e)?a.cloneElement(e,"function"===typeof n?n():n):t}(e,e,t)}},136:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(a=n(137))&&a.__esModule?a:{default:a};t.default=r,e.exports=r},137:function(e,t,n){"use strict";var a=n(17),r=n(21);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),l=a(n(138)),c=a(n(28)),i=function(e,t){return o.createElement(c.default,Object.assign({},e,{ref:t,icon:l.default}))};i.displayName="LoadingOutlined";var s=o.forwardRef(i);t.default=s},138:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"}},239:function(e,t,n){e.exports=n.p+"static/media/about.c868296d.png"},243:function(e,t,n){"use strict";var a=n(2),r=n.n(a),o=n(5),l=n.n(o),c=n(26),i=n.n(c),s=n(39),d=n.n(s),u=n(0),p=n(8),m=n.n(p),f=n(98),g=n(123),h=n(126),v=["xxl","xl","lg","md","sm","xs"],b={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},y=new Map,E=-1,x={},w={matchHandlers:{},dispatch:function(e){return x=e,y.forEach((function(e){return e(x)})),y.size>=1},subscribe:function(e){return y.size||this.register(),E+=1,y.set(E,e),e(x),E},unsubscribe:function(e){y.delete(e),y.size||this.unregister()},unregister:function(){var e=this;Object.keys(b).forEach((function(t){var n=b[t],a=e.matchHandlers[n];null===a||void 0===a||a.mql.removeListener(null===a||void 0===a?void 0:a.listener)})),y.clear()},register:function(){var e=this;Object.keys(b).forEach((function(t){var n=b[t],a=function(n){var a=n.matches;e.dispatch(r()(r()({},x),l()({},t,a)))},o=window.matchMedia(n);o.addListener(a),e.matchHandlers[n]={mql:o,listener:a},a(o)}))}},O=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},I=(Object(h.a)("top","middle","bottom","stretch"),Object(h.a)("start","end","center","space-around","space-between"),u.forwardRef((function(e,t){var n=u.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),a=d()(n,2),o=a[0],c=a[1],s=u.useRef();s.current=e.gutter,u.useEffect((function(){var e=w.subscribe((function(e){var t=s.current||0;(!Array.isArray(t)&&"object"===i()(t)||Array.isArray(t)&&("object"===i()(t[0])||"object"===i()(t[1])))&&c(e)}));return function(){w.unsubscribe(e)}}),[]);var p=function(n){var a,c=n.getPrefixCls,s=n.direction,d=e.prefixCls,p=e.justify,f=e.align,h=e.className,b=e.style,y=e.children,E=O(e,["prefixCls","justify","align","className","style","children"]),x=c("row",d),w=function(){var t=[0,0],n=e.gutter,a=void 0===n?0:n;return(Array.isArray(a)?a:[a,0]).forEach((function(e,n){if("object"===i()(e))for(var a=0;a<v.length;a++){var r=v[a];if(o[r]&&void 0!==e[r]){t[n]=e[r];break}}else t[n]=e||0})),t}(),I=m()(x,(a={},l()(a,"".concat(x,"-").concat(p),p),l()(a,"".concat(x,"-").concat(f),f),l()(a,"".concat(x,"-rtl"),"rtl"===s),a),h),j=r()(r()(r()({},w[0]>0?{marginLeft:w[0]/-2,marginRight:w[0]/-2}:{}),w[1]>0?{marginTop:w[1]/-2,marginBottom:w[1]/2}:{}),b),C=r()({},E);return delete C.gutter,u.createElement(g.a.Provider,{value:{gutter:w}},u.createElement("div",r()({},C,{className:I,style:j,ref:t}),y))};return u.createElement(f.a,null,p)})));I.displayName="Row";var j=I;t.a=j},244:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(2),l=n.n(o),c=n(26),i=n.n(c),s=n(0),d=n(8),u=n.n(d),p=n(123),m=n(98),f=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};var g=s.forwardRef((function(e,t){var n=function(n){var a,o=n.getPrefixCls,c=n.direction,d=e.prefixCls,m=e.span,g=e.order,h=e.offset,v=e.push,b=e.pull,y=e.className,E=e.children,x=e.flex,w=e.style,O=f(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),I=o("col",d),j={};["xs","sm","md","lg","xl","xxl"].forEach((function(t){var n,a={},o=e[t];"number"===typeof o?a.span=o:"object"===i()(o)&&(a=o||{}),delete O[t],j=l()(l()({},j),(n={},r()(n,"".concat(I,"-").concat(t,"-").concat(a.span),void 0!==a.span),r()(n,"".concat(I,"-").concat(t,"-order-").concat(a.order),a.order||0===a.order),r()(n,"".concat(I,"-").concat(t,"-offset-").concat(a.offset),a.offset||0===a.offset),r()(n,"".concat(I,"-").concat(t,"-push-").concat(a.push),a.push||0===a.push),r()(n,"".concat(I,"-").concat(t,"-pull-").concat(a.pull),a.pull||0===a.pull),r()(n,"".concat(I,"-rtl"),"rtl"===c),n))}));var C=u()(I,(a={},r()(a,"".concat(I,"-").concat(m),void 0!==m),r()(a,"".concat(I,"-order-").concat(g),g),r()(a,"".concat(I,"-offset-").concat(h),h),r()(a,"".concat(I,"-push-").concat(v),v),r()(a,"".concat(I,"-pull-").concat(b),b),a),y,j);return s.createElement(p.a.Consumer,null,(function(e){var n=e.gutter,a=l()({},w);return n&&(a=l()(l()(l()({},n[0]>0?{paddingLeft:n[0]/2,paddingRight:n[0]/2}:{}),n[1]>0?{paddingTop:n[1]/2,paddingBottom:n[1]/2}:{}),a)),x&&(a.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(x)),s.createElement("div",l()({},O,{style:a,className:C,ref:t}),E)}))};return s.createElement(m.a,null,n)}));g.displayName="Col";var h=g;t.a=h},261:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var a=n(0),r=n.n(a),o=n(243),l=n(244),c=n(2),i=n.n(c),s=n(5),d=n.n(s),u=n(48),p=n.n(u),m=n(8),f=n.n(m),g=n(136),h=n.n(g),v=n(44),b=n(98),y=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},E=function(e){var t,n,r=a.useContext(b.b).getPrefixCls,o=e.prefixCls,l=e.className,c=e.color,s=e.children,u=e.pending,p=e.dot,m=e.label,g=y(e,["prefixCls","className","color","children","pending","dot","label"]),h=r("timeline",o),E=f()((t={},d()(t,"".concat(h,"-item"),!0),d()(t,"".concat(h,"-item-pending"),u),t),l),x=f()((n={},d()(n,"".concat(h,"-item-head"),!0),d()(n,"".concat(h,"-item-head-custom"),p),d()(n,"".concat(h,"-item-head-").concat(c),!0),n));return a.createElement("li",i()({},Object(v.a)(g,["position"]),{className:E}),m&&a.createElement("div",{className:"".concat(h,"-item-label")},m),a.createElement("div",{className:"".concat(h,"-item-tail")}),a.createElement("div",{className:x,style:{borderColor:/blue|red|green|gray/.test(c||"")?void 0:c}},p),a.createElement("div",{className:"".concat(h,"-item-content")},s))};E.defaultProps={color:"blue",pending:!1,position:""};var x=E,w=n(135),O=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},I=function(e){var t,n=a.useContext(b.b),r=n.getPrefixCls,o=n.direction,l=e.prefixCls,c=e.pending,s=void 0===c?null:c,u=e.pendingDot,m=e.children,g=e.className,v=e.reverse,y=e.mode,E=O(e,["prefixCls","pending","pendingDot","children","className","reverse","mode"]),I=r("timeline",l),j="boolean"===typeof s?null:s,C=s?a.createElement(x,{pending:!!s,dot:u||a.createElement(h.a,null)},j):null,k=v?[C].concat(p()(a.Children.toArray(m).reverse())):[].concat(p()(a.Children.toArray(m)),[C]),P=function(e,t){return"alternate"===y?"right"===e.props.position?"".concat(I,"-item-right"):"left"===e.props.position?"".concat(I,"-item-left"):"".concat(I,t%2===0?"-item-left":"-item-right"):"left"===y?"".concat(I,"-item-left"):"right"===y||"right"===e.props.position?"".concat(I,"-item-right"):""},S=k.filter((function(e){return!!e})),N=a.Children.count(S),U="".concat(I,"-item-last"),R=a.Children.map(S,(function(e,t){var n=t===N-2?U:"",a=t===N-1?U:"";return Object(w.a)(e,{className:f()([e.props.className,!v&&s?n:a,P(e,t)])})})),A=k.some((function(e){var t;return!!(null===(t=null===e||void 0===e?void 0:e.props)||void 0===t?void 0:t.label)})),M=f()(I,(t={},d()(t,"".concat(I,"-pending"),!!s),d()(t,"".concat(I,"-reverse"),!!v),d()(t,"".concat(I,"-").concat(y),!!y&&!A),d()(t,"".concat(I,"-label"),A),d()(t,"".concat(I,"-rtl"),"rtl"===o),t),g);return a.createElement("ul",i()({},E,{className:M}),R)};I.Item=x,I.defaultProps={reverse:!1,mode:""};var j=I;function C(){return(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)>780?r.a.createElement(j,{mode:"alternate"},r.a.createElement(j.Item,{label:"June 2018 - Present"},r.a.createElement("h3",null,"Freelance Front-end Developer"),r.a.createElement("p",null,"I work primarily as a Front-end developer to develop and launch multiple projects from scratch, carrying the development of its' front-end and back-end codebases."),r.a.createElement("p",null,"In front-end development, my current toolset includes React, Redux, ES6 and the other various frameworks, libraries and technologies related to them. I also care about UI design, providing elegant UI and graphic design for my clients."),r.a.createElement("p",null,"In back-end development, my current stack involves NodeJS, MongoDB, REST API, and GraphQL.")),r.a.createElement(j.Item,{label:"October 2014 - July 2019"},r.a.createElement("h3",null,"Frontend Web Developer in Globex People LLC "),r.a.createElement("p",null,"Created multiple web applications, participating in the whole process of their development: UI/UX design, code development, testing, deployment and maintenance."),r.a.createElement("p",null,"I also had to care about things like good planning of UI, consistency in design, typography, accessbility and responsive design."),r.a.createElement("p",null,"Main stack: JavaScript, JQuery, HTML, CSS3, Bootstrap, Wordpress, PHP and React."),r.a.createElement("p",null,"Design tools: Adobe Creative Suite, Balsamiq Mockups, Sketch")),r.a.createElement(j.Item,{label:"Feb 2014 - Sep 2014"},r.a.createElement("h3",null,"UI/UX Developer Intern in Accenture "),r.a.createElement("p",null,"Worked with a lead designer to provide UI/UX solutions, including wireframes, flowcharts, and prototypes."),r.a.createElement("p",null,"Focused on UI design to bring forth a compelling experience that coincides with their desired branding. Created and maintain websites."))):r.a.createElement(j,null,r.a.createElement(j.Item,null,r.a.createElement("h3",null,"Freelance Front-end Developer"),r.a.createElement("p",null,"I work primarily as a Front-end developer to develop and launch multiple projects from scratch, carrying the development of its' front-end and back-end codebases."),r.a.createElement("p",null,"In front-end development, my current toolset includes React, Redux, ES6 and the other various frameworks, libraries and technologies related to them. I also care about UI design, providing elegant UI and graphic design for my clients."),r.a.createElement("p",null,"In back-end development, my current stack involves NodeJS, MongoDB, REST API, and GraphQL.")),r.a.createElement(j.Item,null,r.a.createElement("h3",null,"Frontend Web Developer in Globex People LLC "),r.a.createElement("p",null,"Created multiple web applications, participating in the whole process of their development: UI/UX design, code development, testing, deployment and maintenance."),r.a.createElement("p",null,"I also had to care about things like good planning of UI, consistency in design, typography, accessbility and responsive design."),r.a.createElement("p",null,"Main stack: JavaScript, JQuery, HTML, CSS3, Bootstrap, Wordpress, PHP and React."),r.a.createElement("p",null,"Design tools: Adobe Creative Suite, Balsamiq Mockups, Sketch")),r.a.createElement(j.Item,null,r.a.createElement("h3",null,"UI/UX Developer Intern in Accenture "),r.a.createElement("p",null,"Worked with a lead designer to provide UI/UX solutions, including wireframes, flowcharts, and prototypes."),r.a.createElement("p",null,"Focused on UI design to bring forth a compelling experience that coincides with their desired branding. Created and maintain websites.")))}var k=n(239),P=n.n(k);function S(){return r.a.createElement("section",{id:"About",style:{minHeight:"100vh"}},r.a.createElement("div",{style:{textAlign:"center",width:"100%",backgroundColor:"#ffffff"}},r.a.createElement("div",{className:"container"},r.a.createElement(o.a,{justify:"center"},r.a.createElement(l.a,{xs:{span:20},sm:{span:20},md:{span:20},lg:{span:20},style:{paddingBottom:"6%"}},r.a.createElement("h2",{className:"subtitle"},"ABOUT ME"),r.a.createElement("h3",{className:"intro"},"Hi, I\u2019m Betty! I love programming, designing, ",r.a.createElement("br",null),"traveling, hiking, and cooking."),r.a.createElement("img",{src:P.a,alt:"about me",className:"about-img",width:"200",height:"205"}))))),r.a.createElement("div",{style:{backgroundColor:"#f4f4f4"}},r.a.createElement("div",{className:"container about-p"},r.a.createElement(o.a,{justify:"center"},r.a.createElement(l.a,{xs:{span:18},sm:{span:18},md:{span:16},lg:{span:16}},r.a.createElement("p",{style:{fontWeight:"700",fontSize:"18px"}},"I'm a freelance Front-end developer based in Portland, Oregon. I specializes in React, Redux, JavaScript/ES6, Node.js, HTML5, CSS3, UI design, and Responsive Design."),r.a.createElement("p",{style:{fontWeight:"700",fontSize:"18px"}},"On a personal level, I am highly-motivated, result oriented, self-driven, hard-working, fast learner and constantly seeking to improve my skills."))))),r.a.createElement("div",{className:"container"},r.a.createElement(o.a,{justify:"center",style:{borderRadius:"30px",marginTop:"-6%",marginBottom:"12%",backgroundColor:"#ffffff",border:"1px solid #eeeeee",boxShadow:"0 3px 5px #eeeeee"}},r.a.createElement(l.a,{xs:{span:22},sm:{span:22},md:{span:20},lg:{span:20},style:{paddingBottom:"4%"}},r.a.createElement("h2",{className:"subtitle"},"EXPERIENCE"),r.a.createElement(C,null)))))}}}]);
//# sourceMappingURL=7.f154194d.chunk.js.map