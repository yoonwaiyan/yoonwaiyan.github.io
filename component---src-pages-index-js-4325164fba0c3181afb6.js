"use strict";(self.webpackChunkyoonwaiyan=self.webpackChunkyoonwaiyan||[]).push([[678],{8771:function(e,t,a){var n=a(7294),r=a(1883);t.Z=()=>{var e,t;const a=(0,r.useStaticQuery)("3257411868"),o=null===(e=a.site.siteMetadata)||void 0===e?void 0:e.author,l=null===(t=a.site.siteMetadata)||void 0===t?void 0:t.social;return n.createElement("div",{className:"flex flex-col mb-10"},o.name,"'s sharing on web development.",n.createElement("a",{href:"https://twitter.com/"+l.twitter,className:"shadow-none hover:underline",target:"_blank",rel:"noreferrer"},"Follow on Twitter"))}},9357:function(e,t,a){var n=a(7294),r=a(4593),o=a(1883);const l=e=>{var t,a,l;let{description:s,lang:i,meta:c,title:m}=e;const{site:d}=(0,o.useStaticQuery)("2841359383"),u=s||d.siteMetadata.description,p=null===(t=d.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(r.q,{htmlAttributes:{lang:i},title:m,titleTemplate:p?"%s | "+p:null,meta:[{name:"description",content:u},{property:"og:title",content:m},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(a=d.siteMetadata)||void 0===a||null===(l=a.social)||void 0===l?void 0:l.twitter)||""},{name:"twitter:title",content:m},{name:"twitter:description",content:u}].concat(c)})};l.defaultProps={lang:"en",meta:[],description:""},t.Z=l},9373:function(e,t,a){var n=a(7294),r=a(1883);t.Z=e=>{let{tag:t}=e;return n.createElement(r.Link,{to:"/tags/"+t,key:t,className:"px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500 prose-sm"},t)}},9175:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var n=a(7294),r=a(8771),o=a(7446),l=a(9357),s=a(1883),i=a(9373);var c=e=>{let{node:t}=e;const a=t.frontmatter.title||t.fields.slug,r=t.frontmatter.tags;return n.createElement("div",{key:t.fields.slug,className:"mx-auto w-screen xl:w-max max-w-prose px-10 py-6"},n.createElement("div",{className:"flex flex-col justify-start sm:justify-between sm:flex-row sm:items-center max-w-full"},n.createElement("span",{className:"font-light text-gray-600 dark:text-gray-50"},t.frontmatter.date),n.createElement("div",{className:"space-x-2 overflow-x-hidden my-2 sm:mt-none break-words"},r.map((e=>n.createElement(i.Z,{tag:e,key:e}))))),n.createElement(s.Link,{to:t.fields.slug,className:"mt-2 prose-xl font-bold text-gray-700 dark:text-gray-50 shadow-none no-underline hover:underline"},a),n.createElement("p",{className:"mt-2 prose dark:text-gray-50",dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}))};var m=e=>{let{data:t,location:a}=e;const s=t.site.siteMetadata.title,i=t.allMarkdownRemark.nodes;return void 0===i||0===i.length?n.createElement(o.Z,{location:a,title:s},n.createElement(l.Z,{title:"All posts"}),n.createElement(r.Z,null),n.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):n.createElement(o.Z,{location:a,title:s},n.createElement(l.Z,{title:"All posts"}),i.map((e=>n.createElement(c,{node:e,key:e.fields.slug}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-4325164fba0c3181afb6.js.map