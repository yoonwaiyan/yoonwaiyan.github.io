(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{NysD:function(t,e,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("Wbzz");e.a=function(t){var e=t.tag;return r.a.createElement(o.Link,{to:"/tags/"+e,key:e,className:"px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500 prose-sm"},e)}},RXBc:function(t,e,a){"use strict";a.r(e);var n=a("dI71"),r=a("q1tI"),o=a.n(r),s=a("Bl7J"),i=a("Wbzz"),l=a("NysD"),c=function(t){var e=t.node,a=e.frontmatter.title||e.fields.slug,n=e.frontmatter.tags;return o.a.createElement("div",{key:e.fields.slug,className:"mx-auto w-screen xl:w-max max-w-prose px-10 py-6"},o.a.createElement("div",{className:"flex flex-col justify-start sm:justify-between sm:flex-row sm:items-center max-w-full"},o.a.createElement("span",{className:"font-light text-gray-600"},e.frontmatter.date),o.a.createElement("div",{className:"space-x-2 overflow-x-hidden my-2 sm:mt-none break-words"},n.map((function(t){return o.a.createElement(l.a,{tag:t,key:t})})))),o.a.createElement(i.Link,{to:e.fields.slug,className:"mt-2 prose-xl font-bold text-gray-700 shadow-none no-underline hover:underline"},a),o.a.createElement("p",{className:"mt-2 prose",dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt}}))},m=a("vrFN"),p=function(t){function e(){return t.apply(this,arguments)||this}return Object(n.a)(e,t),e.prototype.render=function(){var t=this.props.data,e=t.site.siteMetadata.title,a=t.allMarkdownRemark.edges;return o.a.createElement(s.a,{location:this.props.location,title:e},o.a.createElement(m.a,{title:"All posts"}),a.map((function(t){var e=t.node;return o.a.createElement(c,{node:e,key:e.fields.slug})})))},e}(o.a.Component);e.default=p},vrFN:function(t,e,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("TJpk"),s=a.n(o),i=a("Wbzz");function l(t){var e=t.description,a=t.lang,n=t.meta,o=t.title,l=Object(i.useStaticQuery)("63159454").site,c=e||l.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(n)})}l.defaultProps={lang:"en",meta:[],description:""},e.a=l}}]);
//# sourceMappingURL=component---src-pages-index-js-db4fb95dea16616c451a.js.map