(self.webpackChunkyoonwaiyan=self.webpackChunkyoonwaiyan||[]).push([[942],{6132:function(e,t,n){"use strict";var r=n(4836);t.__esModule=!0,t.default=void 0;var a=r(n(6115)),l=r(n(7867)),o=r(n(8416)),s=r(n(7294)),i=r(n(5697)),u=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return t=e.call.apply(e,[this].concat(r))||this,(0,o.default)((0,a.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,l.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},n.toggleTheme=function(e){window.__setPreferredTheme(e)},n.render=function(){return s.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(s.default.Component);u.propTypes={children:i.default.func.isRequired};var c=u;t.default=c},3071:function(e,t,n){"use strict";var r=n(4836)(n(6132));t.L=r.default},7446:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7294),a=n(1883),l=n(3071);function o(){return r.createElement(l.L,null,(e=>{let{theme:t,toggleTheme:n}=e;return r.createElement(r.Fragment,null,r.createElement(s,{name:"darkMode",label:"Dark Mode",checked:"dark"===t,onChange:e=>n(e.target.checked?"dark":"light")}))}))}const s=e=>{let{name:t,label:n,checked:a,onChange:l}=e;return r.createElement("label",{htmlFor:t,className:"flex items-center cursor-pointer"},r.createElement("div",{className:"relative"},r.createElement("input",{id:t,type:"checkbox",className:"hidden",checked:a,onChange:l}),r.createElement("div",{className:"toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"}),r.createElement("div",{className:"toggle__dot absolute w-6 h-6 bg-gray-700 dark:bg-white rounded-full shadow inset-y-0 left-0"})),r.createElement("div",{className:"ml-2 text-xs text-gray-700 dark:text-gray-50 font-medium"},n))},i=[{url:"/about",pageTitle:"About",type:"internal"},{url:"https://github.com/yoonwaiyan",pageTitle:"Github",type:"external"}],u=e=>{let{item:{url:t,pageTitle:n,type:l}}=e;const o="shadow-none hover:underline";return"internal"===l?r.createElement(a.Link,{className:o,to:t},n):r.createElement("a",{href:t,key:t,className:o,target:"_blank",rel:"noreferrer"},n)};var c=e=>{let{title:t,children:n}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:"bg-white dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen"},r.createElement("div",{className:"container mx-auto max-w-prose px-10 py-6 flex flex-col sm:flex-row justify-between items-center"},r.createElement(a.Link,{className:"shadow-none font-bold prose-xl",to:"/"},t),r.createElement("nav",{className:"space-x-12 main-nav sm:flex mt-12 sm:mt-0 flex-col sm:flex-row items-center relative flex-1 justify-end"},i.map((e=>r.createElement(u,{item:e,key:e.url}))),r.createElement(o,null))),r.createElement("main",{className:"container flex flex-wrap flex-col mx-auto"},n),r.createElement("footer",{className:"container flex flex-wrap mx-auto max-w-prose px-10 py-6"},"© ",(new Date).getFullYear(),", Built with Gatsby")))}},6602:function(e,t,n){"use strict";n.r(t);var r=n(7294),a=n(1883),l=n(7446);const o=e=>{let{slug:t,children:n}=e;return r.createElement("li",{key:t,className:"mt-2"},r.createElement(a.Link,{to:t,className:"shadow-none hover:underline"},n))};t.default=e=>{let{pageContext:t,data:n,location:a}=e;const{tag:s}=t,{edges:i,totalCount:u}=n.allMarkdownRemark,c=n.site.siteMetadata.title,m=u+" post"+(1===u?"":"s")+' tagged with "'+s+'"';return r.createElement(l.Z,{location:a,title:c},r.createElement("div",{className:"mx-auto max-w-prose px-10 py-6"},r.createElement("div",{className:"mt-2 prose prose-2xl font-bold"},m),r.createElement("ul",{className:"mt-2"},i.map((e=>{let{node:t}=e;const{slug:n}=t.fields,{title:a}=t.frontmatter;return r.createElement(o,{key:n,slug:n},a)})),r.createElement(o,{slug:"/tags"},"All tags"))))}},8416:function(e,t,n){var r=n(4062);e.exports=function(e,t,n){return(t=r(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},5036:function(e,t,n){var r=n(8698).default;e.exports=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4062:function(e,t,n){var r=n(8698).default,a=n(5036);e.exports=function(e){var t=a(e,"string");return"symbol"===r(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-templates-tags-js-c3c3abe2fbdd37e07397.js.map