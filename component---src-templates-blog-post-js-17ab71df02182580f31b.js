(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{204:function(e,t,a){"use strict";a.r(t);a(18);var r=a(0),n=a.n(r),i=a(208),o=(a(219),a(223)),s=a(224),l=a.n(s),c=a(206),d=function(){var e=o.data,t=e.site.siteMetadata,a=t.author,r=t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(2.5)}},n.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(c.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,n.a.createElement("strong",null,a),"'s sharing on web development."," ",n.a.createElement("a",{href:"https://twitter.com/"+r.twitter},"Follow on Twitter")))},u=a(210),f=a(211);a.d(t,"pageQuery",function(){return p}),a.e(2).then(a.t.bind(null,205,7));var A=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=e.frontmatter.tags,r=this.props.pageContext,o=r.previous,s=r.next;return n.a.createElement(u.a,{location:this.props.location,title:t},n.a.createElement(f.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),n.a.createElement("h1",{style:{marginTop:Object(c.a)(1),marginBottom:0}},e.frontmatter.title),n.a.createElement("p",{style:Object.assign({},Object(c.b)(-.2),{display:"block",marginBottom:Object(c.a)(.8),marginTop:Object(c.a)(.5)})},e.frontmatter.date,n.a.createElement("span",{className:"tags-container"},a.map(function(e){return n.a.createElement("span",{className:"tag"},e)}))),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),n.a.createElement("hr",{style:{marginBottom:Object(c.a)(1)}}),n.a.createElement(d,null),n.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},n.a.createElement("li",null,o&&n.a.createElement(i.a,{to:o.fields.slug,rel:"prev"},"← ",o.frontmatter.title)),n.a.createElement("li",null,s&&n.a.createElement(i.a,{to:s.fields.slug,rel:"next"},s.frontmatter.title," →"))))},r}(n.a.Component),p=(t.default=A,"181058792")},206:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return c});var r=a(213),n=a.n(r),i=a(214),o=a.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var s=new n.a(o.a);var l=s.rhythm,c=s.scale},207:function(e,t,a){var r;e.exports=(r=a(209))&&r.default||r},208:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(66),o=a.n(i);a.d(t,"a",function(){return o.a});a(207),a(9).default.enqueue,n.a.createContext({})},209:function(e,t,a){"use strict";a.r(t);a(18);var r=a(0),n=a.n(r),i=a(92);t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},210:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(208),o=a(206),s=[{url:"/about",title:"About"},{url:"/now",title:"Now"},{url:"https://github.com/yoonwaiyan",title:"Github"},{url:"/contact",title:"Contact"}],l=function(e){var t=e.url,a=e.children;return n.a.createElement("a",{href:t,style:{marginLeft:""+Object(o.a)(1.5)}},a)},c=function(){return n.a.createElement("nav",{style:{display:"inline-block"}},s.map(function(e){var t=e.url,a=e.title;return n.a.createElement(l,{url:t},a)}))};var d=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=(e.location,e.title),a=e.children;return n.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(o.a)(30),padding:Object(o.a)(1.5)+" "+Object(o.a)(.75)}},n.a.createElement("header",{style:{display:"flex",justifyContent:"space-between"}},n.a.createElement(u,{title:t}),n.a.createElement(c,null)),n.a.createElement("main",null,a),n.a.createElement(f,null))},r}(n.a.Component),u=function(e){var t=e.title;return n.a.createElement("span",{style:{marginBottom:Object(o.a)(.5),marginTop:0}},n.a.createElement(i.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},t))},f=function(){return n.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",n.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))};t.a=d},211:function(e,t,a){"use strict";var r=a(212),n=a(0),i=a.n(n),o=a(216),s=a.n(o);function l(e){var t=e.description,a=e.lang,n=e.meta,o=e.title,l=r.data.site,c=t||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(n)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},212:function(e){e.exports={data:{site:{siteMetadata:{title:"waiyanyoon.com",description:"(dev) things I've learned",author:"Waiyan Yoon"}}}}},219:function(e,t,a){"use strict";a(222)("fixed",function(e){return function(){return e(this,"tt","","")}})},222:function(e,t,a){var r=a(1),n=a(7),i=a(32),o=/"/g,s=function(e,t,a,r){var n=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},223:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEBf/EABQBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAAexlvlL3oEJQC9oY/8QAGxAAAgIDAQAAAAAAAAAAAAAAAgMBMgAREzH/2gAIAQEAAQUCOc6SJiW4ZZmsVR3rLLr/AP/EABcRAQEBAQAAAAAAAAAAAAAAAAEQITH/2gAIAQMBAT8BDIcn/8QAFxEBAAMAAAAAAAAAAAAAAAAAEAExQf/aAAgBAgEBPwHSbP/EABsQAAEEAwAAAAAAAAAAAAAAAAABEBFBICEx/9oACAEBAAY/AotTfGQm8f/EABoQAAMAAwEAAAAAAAAAAAAAAAABESFBYbH/2gAIAQEAAT8hlEQKYnQiypGXpi6F6bGsHgJMT//aAAwDAQACAAMAAAAQd9iC/8QAFhEBAQEAAAAAAAAAAAAAAAAAEBEx/9oACAEDAQE/EKWan//EABgRAAMBAQAAAAAAAAAAAAAAAAABESEx/9oACAECAQE/EG5BDiNaf//EABwQAQEAAwADAQAAAAAAAAAAAAERACExQVFxof/aAAgBAQABPxBZpR7wDzmhepDv7kNxc26SgEZvWBkLUS5GNtt3EHgGk93BpVYO4ZCZ38M//9k=",width:50,height:50,src:"/static/f876cdbf3ad480454cc819cf5060c4c5/9b664/profile-pic.jpg",srcSet:"/static/f876cdbf3ad480454cc819cf5060c4c5/9b664/profile-pic.jpg 1x,\n/static/f876cdbf3ad480454cc819cf5060c4c5/06a10/profile-pic.jpg 1.5x,\n/static/f876cdbf3ad480454cc819cf5060c4c5/f1b5a/profile-pic.jpg 2x"}}},site:{siteMetadata:{author:"Waiyan Yoon",social:{twitter:"yoonwaiyan"}}}}}},224:function(e,t,a){"use strict";a(29),a(30),a(13),a(97),a(138),a(219);var r=a(15);t.__esModule=!0,t.default=void 0;var n,i=r(a(70)),o=r(a(75)),s=r(a(139)),l=r(a(140)),c=r(a(0)),d=r(a(52)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},A=Object.create({}),p=function(e){var t=u(e),a=f(t);return A[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,h=m&&window.IntersectionObserver,b=new WeakMap;function E(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),c.default.createElement("source",{media:n,srcSet:a,sizes:i}))})}function y(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function v(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})})}function S(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var j=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},B=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?S(e,!0):"")+S(e)}).join("")+"<img "+c+o+s+a+r+t+i+n+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=c.default.createElement(O,(0,l.default)({src:t},n));return a.length>1?c.default.createElement("picture",null,r(a),i):i},O=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,o=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,A=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:n},A,{onLoad:o,onError:d,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});O.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var L=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=m&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&h&&!t.critical&&!a.seenBefore;var r=t.critical||m&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),A[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,A=e.placeholderClassName,p=e.fluid,g=e.fixed,m=e.backgroundColor,h=e.durationFadeIn,b=e.Tag,y=e.itemProp,S=e.loading,j=e.draggable,L=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,l.default)({opacity:L?1:0,transition:R?"opacity "+h+"ms":"none"},s),Q="boolean"==typeof m?"lightgray":m,C={transitionDelay:h+"ms"},N=(0,l.default)({opacity:this.state.imgLoaded?0:1},R&&C,s,f),M={title:t,alt:this.state.isVisible?"":a,style:N,className:A};if(p){var T=p,V=T[0];return c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),Q&&c.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:Q,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&C)}),V.base64&&c.default.createElement(x,{src:V.base64,spreadProps:M,imageVariants:T,generateSources:w}),V.tracedSVG&&c.default.createElement(x,{src:V.tracedSVG,spreadProps:M,imageVariants:T,generateSources:v}),this.state.isVisible&&c.default.createElement("picture",null,E(T),c.default.createElement(O,{alt:a,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:j})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:B((0,l.default)({alt:a,title:t,loading:S},V,{imageVariants:T}))}}))}if(g){var Y=g,k=Y[0],z=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},i);return"inherit"===i.display&&delete z.display,c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:z,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},Q&&c.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:Q,width:k.width,opacity:this.state.imgLoaded?0:1,height:k.height},R&&C)}),k.base64&&c.default.createElement(x,{src:k.base64,spreadProps:M,imageVariants:Y,generateSources:w}),k.tracedSVG&&c.default.createElement(x,{src:k.tracedSVG,spreadProps:M,imageVariants:Y,generateSources:v}),this.state.isVisible&&c.default.createElement("picture",null,E(Y),c.default.createElement(O,{alt:a,title:t,width:k.width,height:k.height,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:j})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:B((0,l.default)({alt:a,title:t,loading:S},k,{imageVariants:Y}))}}))}return null},t}(c.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),I=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});L.propTypes={resolutions:R,sizes:I,fixed:d.default.oneOfType([R,d.default.arrayOf(R)]),fluid:d.default.oneOfType([I,d.default.arrayOf(I)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var Q=L;t.default=Q}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-17ab71df02182580f31b.js.map