(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Bl7J:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),o=[{url:"/about",pageTitle:"About",type:"internal"},{url:"/contact",pageTitle:"Contact",type:"internal"},{url:"https://github.com/yoonwaiyan",pageTitle:"Github",type:"external"}],s=function(e){var t=e.item,a=t.url,n=t.pageTitle,o="shadow-none hover:underline";return"internal"===t.type?l.a.createElement(r.Link,{className:o,to:a},n):l.a.createElement("a",{href:a,key:a,className:o,target:"_blank",rel:"noreferrer"},n)};t.a=function(e){var t=e.title,a=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container mx-auto max-w-prose px-10 py-6 flex flex-col sm:flex-row justify-between items-center"},l.a.createElement(r.Link,{className:"shadow-none font-bold prose-xl",to:"/"},t),l.a.createElement("nav",{className:"space-x-12 main-nav sm:flex mt-12 sm:mt-0 flex-col sm:flex-row items-center relative flex-1 justify-end"},o.map((function(e){return l.a.createElement(s,{item:e,key:e.url})})))),l.a.createElement("main",{className:"container flex flex-wrap flex-col mx-auto"},a),l.a.createElement("footer",{className:"container flex flex-wrap mx-auto max-w-prose px-10 py-6"},"© ",(new Date).getFullYear(),", Built with Gatsby"))}},MN1z:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),o=a("Bl7J"),s=function(e){var t=e.slug,a=e.children;return l.a.createElement("li",{key:t,className:"mt-2"},l.a.createElement(r.Link,{to:t,className:"shadow-none hover:underline"},a))};t.default=function(e){var t=e.pageContext,a=e.data,n=e.location,r=t.tag,c=a.allMarkdownRemark,i=c.edges,m=c.totalCount,u=a.site.siteMetadata.title,p=m+" post"+(1===m?"":"s")+' tagged with "'+r+'"';return l.a.createElement(o.a,{location:n,title:u},l.a.createElement("div",{className:"mx-auto max-w-prose px-10 py-6"},l.a.createElement("div",{className:"mt-2 prose prose-2xl font-bold"},p),l.a.createElement("ul",{className:"mt-2"},i.map((function(e){var t=e.node,a=t.fields.slug,n=t.frontmatter.title;return l.a.createElement(s,{slug:a},n)})),l.a.createElement(s,{slug:"/tags"},"All tags"))))}}}]);
//# sourceMappingURL=component---src-templates-tags-js-5b55af1f677bb1a3abf2.js.map