(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{199:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return i});var a=n(0),r=n.n(a),o=n(208),l=n(210);e.default=function(t){var e=t.pageContext,n=t.data,a=t.location,i=e.tag,u=n.allMarkdownRemark,c=u.edges,s=u.totalCount,m=n.site.siteMetadata.title,p=s+" post"+(1===s?"":"s")+' tagged with "'+i+'"';return r.a.createElement(l.a,{location:a,title:m},r.a.createElement("h1",null,p),r.a.createElement("ul",null,c.map(function(t){var e=t.node,n=e.fields.slug,a=e.frontmatter.title;return r.a.createElement("li",{key:n},r.a.createElement(o.a,{to:n},a))})),r.a.createElement(o.a,{to:"/tags"},"All tags"))};var i="270761613"},206:function(t,e,n){"use strict";n.d(e,"a",function(){return u}),n.d(e,"b",function(){return c});var a=n(213),r=n.n(a),o=n(214),l=n.n(o);l.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete l.a.googleFonts;var i=new r.a(l.a);var u=i.rhythm,c=i.scale},207:function(t,e,n){var a;t.exports=(a=n(209))&&a.default||a},208:function(t,e,n){"use strict";var a=n(0),r=n.n(a),o=n(66),l=n.n(o);n.d(e,"a",function(){return l.a});n(207),n(9).default.enqueue,r.a.createContext({})},209:function(t,e,n){"use strict";n.r(e);n(18);var a=n(0),r=n.n(a),o=n(92);e.default=function(t){var e=t.location,n=t.pageResources;return n?r.a.createElement(o.a,Object.assign({location:e,pageResources:n},n.json)):null}},210:function(t,e,n){"use strict";var a=n(0),r=n.n(a),o=n(208),l=n(206),i=[{url:"/about",title:"About"},{url:"/now",title:"Now"},{url:"https://github.com/yoonwaiyan",title:"Github"},{url:"/contact",title:"Contact"}],u=function(t){var e=t.url,n=t.children;return r.a.createElement("a",{href:e,style:{marginLeft:""+Object(l.a)(1.5)}},n)},c=function(){return r.a.createElement("nav",{style:{display:"inline-block"}},i.map(function(t){var e=t.url,n=t.title;return r.a.createElement(u,{url:e},n)}))};var s=function(t){var e,n;function a(){return t.apply(this,arguments)||this}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t=this.props,e=(t.location,t.title),n=t.children;return r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(30),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},r.a.createElement("header",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement(m,{title:e}),r.a.createElement(c,null)),r.a.createElement("main",null,n),r.a.createElement(p,null))},a}(r.a.Component),m=function(t){var e=t.title;return r.a.createElement("span",{style:{marginBottom:Object(l.a)(.5),marginTop:0}},r.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},e))},p=function(){return r.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))};e.a=s}}]);
//# sourceMappingURL=component---src-templates-tags-js-7855d2601670fb598a67.js.map