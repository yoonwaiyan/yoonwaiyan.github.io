(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{NysD:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("Wbzz");t.a=function(e){var t=e.tag;return n.a.createElement(l.Link,{to:"/tags/"+t,key:t,className:"px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500 prose-sm"},t)}},vrFN:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("TJpk"),i=a.n(l),s=a("Wbzz"),o=function(e){var t=e.description,a=e.lang,r=e.meta,l=e.title,o=Object(s.useStaticQuery)("63159454").site,c=t||o.siteMetadata.description;return n.a.createElement(i.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:l},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:c}].concat(r)})};o.defaultProps={lang:"en",meta:[],description:""},t.a=o},yZlL:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),l=a("Wbzz"),i=function(){var e=Object(l.useStaticQuery)("2418676009").site.siteMetadata,t=e.author,a=e.social;return n.a.createElement("div",{className:"flex flex-col mb-10"},t,"'s sharing on web development.",n.a.createElement("a",{href:"https://twitter.com/"+a.twitter,className:"shadow-none hover:underline",target:"_blank",rel:"noreferrer"},"Follow on Twitter"))},s=a("Bl7J"),o=a("vrFN"),c=a("NysD");a("rMck"),t.default=function(e){var t=e.data,a=e.pageContext,r=e.location,m=t.markdownRemark,d=t.site.siteMetadata.title,p=m.frontmatter.tags,u=a.previous,f=a.next;return n.a.createElement(s.a,{location:r,title:d},n.a.createElement(o.a,{title:m.frontmatter.title,description:m.frontmatter.description||m.excerpt}),n.a.createElement("div",{className:"mx-auto w-screen xl:w-max max-w-prose px-10 py-6 break-words"},n.a.createElement("div",{className:"divide-y-2 divide-solid"},n.a.createElement("div",{className:"pb-6"},n.a.createElement("div",{className:"flex justify-between items-center"},n.a.createElement("span",{className:"font-light text-gray-600 dark:text-gray-50"},m.frontmatter.date)),n.a.createElement("h1",{className:"mt-2 prose prose-2xl font-bold dark:text-gray-50"},m.frontmatter.title),n.a.createElement("div",{className:"mt-2 space-x-2"},p.map((function(e){return n.a.createElement(c.a,{tag:e})}))),n.a.createElement("div",{className:"prose mt-2 dark:text-gray-50",dangerouslySetInnerHTML:{__html:m.html}})),n.a.createElement("div",{className:"pt-6"},n.a.createElement(i,null),n.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},n.a.createElement("li",null,u&&n.a.createElement(l.Link,{to:u.fields.slug,rel:"prev"},"← ",u.frontmatter.title)),n.a.createElement("li",null,f&&n.a.createElement(l.Link,{to:f.fields.slug,rel:"next"},f.frontmatter.title," →")))))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-12c604810db2ea4bebff.js.map