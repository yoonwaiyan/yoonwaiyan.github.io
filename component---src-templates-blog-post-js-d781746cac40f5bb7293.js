"use strict";(self.webpackChunkyoonwaiyan=self.webpackChunkyoonwaiyan||[]).push([[989],{8771:function(e,t,a){var n=a(7294),r=a(1082);t.Z=()=>{var e,t;const a=(0,r.useStaticQuery)("3257411868"),l=null===(e=a.site.siteMetadata)||void 0===e?void 0:e.author,i=null===(t=a.site.siteMetadata)||void 0===t?void 0:t.social;return n.createElement("div",{className:"flex flex-col mb-10"},l.name,"'s sharing on web development.",n.createElement("a",{href:"https://twitter.com/"+i.twitter,className:"shadow-none hover:underline",target:"_blank",rel:"noreferrer"},"Follow on Twitter"))}},9357:function(e,t,a){var n=a(7294),r=a(5414),l=a(1082);const i=e=>{var t,a,i;let{description:o,lang:s,meta:c,title:m}=e;const{site:d}=(0,l.useStaticQuery)("2841359383"),p=o||d.siteMetadata.description,u=null===(t=d.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(r.q,{htmlAttributes:{lang:s},title:m,titleTemplate:u?"%s | "+u:null,meta:[{name:"description",content:p},{property:"og:title",content:m},{property:"og:description",content:p},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(a=d.siteMetadata)||void 0===a||null===(i=a.social)||void 0===i?void 0:i.twitter)||""},{name:"twitter:title",content:m},{name:"twitter:description",content:p}].concat(c)})};i.defaultProps={lang:"en",meta:[],description:""},t.Z=i},9373:function(e,t,a){var n=a(7294),r=a(1082);t.Z=e=>{let{tag:t}=e;return n.createElement(r.Link,{to:"/tags/"+t,key:t,className:"px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500 prose-sm"},t)}},4982:function(e,t,a){a.r(t);var n=a(7294),r=a(1082),l=a(8771),i=a(7446),o=a(9357),s=a(9373);t.default=e=>{var t;let{data:a,location:c}=e;const m=a.markdownRemark,d=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",p=m.frontmatter.tags,{previous:u,next:v}=a;return n.createElement(i.Z,{location:c,title:d},n.createElement(o.Z,{title:m.frontmatter.title,description:m.frontmatter.description||m.excerpt}),n.createElement("div",{className:"mx-auto w-screen xl:w-max max-w-prose px-10 py-6 break-words"},n.createElement("div",{className:"divide-y-2 divide-solid"},n.createElement("div",{className:"pb-6"},n.createElement("div",{className:"flex justify-between items-center"},n.createElement("span",{className:"font-light text-gray-600 dark:text-gray-50"},m.frontmatter.date)),n.createElement("h1",{className:"mt-2 prose prose-2xl font-bold dark:text-gray-50"},m.frontmatter.title),n.createElement("div",{className:"mt-2 space-x-2"},p.map((e=>n.createElement(s.Z,{key:e,tag:e})))),n.createElement("div",{className:"prose mt-2 dark:text-gray-50",dangerouslySetInnerHTML:{__html:m.html}})),n.createElement("div",{className:"pt-6"},n.createElement(l.Z,null),n.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},n.createElement("li",null,u&&n.createElement(r.Link,{to:u.fields.slug,rel:"prev"},"← ",u.frontmatter.title)),n.createElement("li",null,v&&n.createElement(r.Link,{to:v.fields.slug,rel:"next"},v.frontmatter.title," →")))))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-d781746cac40f5bb7293.js.map