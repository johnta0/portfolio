(function(t){function n(n){for(var o,i,s=n[0],c=n[1],p=n[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(n);while(f.length)f.shift()();return a.push.apply(a,p||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],o=!0,s=1;s<e.length;s++){var c=e[s];0!==r[c]&&(o=!1)}o&&(a.splice(n--,1),t=i(i.s=e[0]))}return t}var o={},r={app:0},a=[];function i(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=o,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)i.d(e,o,function(n){return t[n]}.bind(null,o));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=n,s=s.slice();for(var p=0;p<s.length;p++)n(s[p]);var u=c;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"00c0":function(t,n,e){},"034f":function(t,n,e){"use strict";var o=e("64a9"),r=e.n(o);r.a},"08a9":function(t,n,e){t.exports=e.p+"img/icon.17c3a9d8.jpg"},1771:function(t,n,e){var o={"./ProductSans-Regular.woff":"be01","./ProductSans-Regular.woff2":"85f4","./airplane.png":"b4c3","./github.png":"359c","./icon.jpg":"08a9","./rss-blue.png":"ee57","./rss.png":"7f1f","./telegram.png":"c2ea","./twitter.png":"e4d7"};function r(t){var n=a(t);return e(n)}function a(t){if(!e.o(o,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return o[t]}r.keys=function(){return Object.keys(o)},r.resolve=a,t.exports=r,r.id="1771"},"18bf":function(t,n,e){},"31f6":function(t,n,e){"use strict";var o=e("7b20"),r=e.n(o);r.a},"359c":function(t,n,e){t.exports=e.p+"img/github.446333a2.png"},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var o=e("2b0e"),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("vue-particles",{staticClass:"particles",attrs:{color:"#0f4c81",particleOpacity:.3,particlesNumber:20,shapeType:"circle",particleSize:4,lineLinked:!1,moveSpeed:3,hoverEffect:!1,clickEffect:!1}}),e("vue-navigation-bar",{attrs:{options:t.navbarOptions},scopedSlots:t._u([{key:"custom-section",fn:function(){return[e("div",{staticClass:"link"},[e("router-link",{attrs:{to:"/"}},[t._v("HOME")])],1),e("div",{staticClass:"link"},[e("router-link",{attrs:{to:"/about"}},[t._v("ABOUT")])],1)]},proxy:!0}])}),e("transition",{attrs:{"enter-active-class":"animation-fade-in"}},[e("router-view")],1),e("div",{attrs:{id:"footer"}},[e("div",{attrs:{id:"footer-text"}},[t._m(0),t._m(1),e("p",{attrs:{id:"footer-copyright"}},[t._v("©"+t._s(t.getYear())+" Spencer Woo")])])])],1)},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("a",{attrs:{href:"https://github.com/spencerwooo/portfolio"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/spencerwooo/portfolio/master/public/copyright.png",alt:"copyright",width:"150px",height:"auto"}})])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("\n        Designed, coded, and deployed from scratch by Spencer Woo. Open source on\n        "),e("a",{attrs:{href:"https://github.com/spencerwooo/portfolio"}},[t._v("GitHub")]),t._v(".\n      ")])}],i=(e("debc"),{name:"app",data:function(){return{navbarOptions:{elementId:"main-navbar",mobileBreakpoint:992,ariaLabelMainNav:"Main Navigation",menuOptionsRight:[{type:"button",text:"🌟 ME ON GITHUB",path:"https://github.com/johnta0/portfolio",class:"button-github"}]}}},methods:{getYear:function(){return(new Date).getFullYear()}}}),s=i,c=(e("034f"),e("2877")),p=Object(c["a"])(s,r,a,!1,null,null,null),u=p.exports,l=e("8c4f"),f=e("98c9"),h=e("c235"),d=e("e37d"),g=e("bc3a"),v=e.n(g),b=e("bb51"),m=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("h1",[t._v("👓")]),e("h1",[t._v("About")]),e("p"),e("hr",{attrs:{id:"top-hr"}}),e("div",{staticClass:"article"},[e("p"),e("h2",[t._v("Education")]),e("p",[t._v("\n      BS, Physics.\n    ")]),e("p",[t._v("\n      I like Analytical Mechanics because it's more principle-based than any other\n      field in physics.\n    ")]),e("h2",[t._v("Interests")]),e("h2",[t._v("What I love to do")]),e("h3",[t._v("Travel")]),t._m(0),e("h3",[t._v("Poker")]),e("p",[t._v("\n      I'm into texas hold'em ever since I first played it at the casino in Phnom Penh\n      in June 2019. Though I usually play $1-3 as a beginner, I'm studying hard so that\n      I can play $2-5 profitably.\n    ")]),e("h2",[t._v("Contact")]),e("p",[e("font-awesome-icon",{attrs:{icon:["fab","keybase"]}}),e("a",{attrs:{href:"https://keybase.io/j0hnta/chat"}},[t._v(" Keybase chat")])],1)])])},S=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("\n      I'm a travelholic."),e("br"),t._v("\n      The countries and areas I have ever visited (excluding transit): "),e("br"),t._v("\n        🇲🇾🇹🇭🇨🇳🇰🇷🇹🇼🇭🇰🇲🇴🇰🇭🇻🇳\n    ")])}],w={data:function(){return{dowwwInfo:{stargazers_count:0,forks_count:0},bitcsInfo:{stargazers_count:0,forks_count:0},fatesInfo:{stargazers_count:0,forks_count:0},sspaiCardInfo:{stargazers_count:0,forks_count:0},dotfilesInfo:{stargazers_count:0,forks_count:0}}},mounted:function(){var t=this;this.axios.get("https://api.github.com/repos/spencerwooo/dowww").then((function(n){t.dowwwInfo=n.data})),this.axios.get("https://api.github.com/repos/spencerwooo/BITCS-Coursework").then((function(n){t.bitcsInfo=n.data})),this.axios.get("https://api.github.com/repos/SecureCats/Evaluation_BackEnd").then((function(n){t.fatesInfo=n.data})),this.axios.get("https://api.github.com/repos/spencerwooo/jsbox-sspai-namecard").then((function(n){t.sspaiCardInfo=n.data})),this.axios.get("https://api.github.com/repos/spencerwooo/dotfiles").then((function(n){t.dotfilesInfo=n.data}))}},_=w,k=(e("31f6"),Object(c["a"])(_,m,S,!1,null,"75dbb6a0",null)),A=k.exports,y=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("h1",[t._v("📩")]),e("h1",[t._v("Subscribe")]),e("p",[t._v("如何订阅我的文章，或跟踪我在其他平台的发布？")]),e("hr",{attrs:{id:"top-hr"}}),e("div",{staticClass:"article"},[e("p",[t._v("感谢大哥选择订阅我的发布！Big brother drink Coca Cola 🍻")]),e("h2",[t._v("如何订阅我在各个平台的发布内容？")]),e("p",[t._v("事实上，我除了在少数派更新文章、并用 Hugo 部署博客，还会在其他平台比如 Twitter 以及微博更新「碎碎念」，甚至还有可能在 Instagram 上发布照片等等。因此如果同学希望能够直接订阅我的全部发布，我推荐使用优秀的订阅抓取与管理 App ——「快知」。")]),t._m(0),e("AppCard",{attrs:{msg:"快知",stars:"⭐⭐⭐⭐⭐",description:"直接订阅我在各个平台的发布",icon:"kuaizhi.png",link1Tooltip:"下载「快知 App」",link2Tooltip:"快知 -「SpencerWoo」又开始发各种东西了",link1:"https://kzfeed.com/?r=F2Z5L",link2:"https://kz.sync163.com/web/topic/dP8yRN01yrwA6?uid=q1opr09GyJ58V",rightIcon1:"app.png",rightIcon2:"bookmark.png"}}),e("h2",[t._v("如何只订阅我的少数派文章？")]),e("p",[t._v("我的主要输出战场是少数派，因此如果希望只订阅我的少数派文章，可以通过 RSS 进行订阅管理。")]),t._m(1),e("AppCard",{attrs:{msg:"RSS 订阅",stars:"⭐⭐⭐⭐",description:"利用 RSS 订阅我的少数派文章更新",icon:"sspai-red.png",link1Tooltip:"下载「少数派」App",link2Tooltip:"我的少数派文章 RSS 订阅链接",link1:"https://apps.apple.com/cn/app/%E5%B0%91%E6%95%B0%E6%B4%BE/id1191720421",link2:"https://rsshub.app/sspai/author/800610",rightIcon1:"app.png",rightIcon2:"rss.png"}}),e("p",[t._v("另外，第一次接触 RSS 的同学如果感觉陌生，也可以先阅读这两篇文章，它们分别介绍了 RSS 具体怎么用，以及如何具体利用 RSS 订阅我的文章：")]),t._m(2),e("h2",[t._v("如何只订阅我的 Hugo 博客？")]),e("p",[t._v("Hugo 是「全世界最快的静态网站编译框架」，我选择 Hugo 作为我的博客引擎，部署于 Netlify 上面。同样，我提供了 RSS 订阅链接，利用上面介绍的方法就可以直接订阅我的个人博客啦~")]),e("AppCard",{attrs:{msg:"Hugo 博客",stars:"⭐⭐⭐⭐",description:"利用 RSS 订阅我的博客更新",icon:"bulb.png",link1Tooltip:"我的博客地址",link2Tooltip:"我的博客 RSS 订阅链接",link1:"https://blog.spencerwoo.com/",link2:"https://blog.spencerwoo.com/posts/index.xml",rightIcon1:"bookmark.png",rightIcon2:"rss-blue.png"}}),e("h2",[t._v("最后，感谢。")]),e("p",[t._v("感谢大哥的关注！您的支持是我更新的最大动力。ღ( ´･ᴗ･` )比心")])],1)])},x=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("直接点击下方链接，就可以进入「快知 - SpencerWoo」的主题订阅地址，下载「快知 App」即可订阅我的全部平台内容的更新。"),e("strong",[t._v("欢迎大家使用我的邀请码：F2Z5L")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("\n      RSS 是一个非常简单且方便管理的信息聚合管理协议，是一种\n      "),e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/RSS"}},[t._v("消息来源格式规范")]),t._v("，用以聚合经常发布更新数据的网站，例如博客文章、新闻、音频或视频的网摘。利用 RSS 同学们可以非常方便的订阅我的文章更新。借助于 RSSHub，我为我自己的文章生成了一个 RSS 订阅链接，点击下方链接并复制进入你的 RSS 阅读器即可实时获得我的文章更新。\n    ")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",[e("li",[e("a",{attrs:{href:"https://diygod.me/ohmyrss/"}},[t._v("DIYgod - 我有特别的 RSS 使用技巧")])]),e("li",[e("a",{attrs:{href:"https://archive.spencerwoo.com/posts/2019/07/11/an-easy-way-to-subscribe.html"}},[t._v("SpencerWoo - 如何利用 RSS 订阅我的文章")])])])}],E=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"app-card",style:t.cardStyles},[o("img",{attrs:{id:"icon",src:e("1771")("./"+this.icon)}}),o("div",{attrs:{id:"title"}},[o("div",{attrs:{id:"upper-container"}},[o("div",{attrs:{id:"msg"}},[t._v(t._s(t.msg))]),o("div",{attrs:{id:"stars"}},[t._v(t._s(t.stars))])]),o("div",{attrs:{id:"description"}},[t._v(t._s(t.description))])]),o("div",{attrs:{id:"links"}},[o("a",{attrs:{href:t.link1}},[o("img",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.link1Tooltip,expression:"link1Tooltip"}],staticClass:"app-icon",attrs:{src:e("1771")("./"+this.rightIcon1),alt:"Right icon 1"}})]),o("a",{attrs:{href:t.link2}},[o("img",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.link2Tooltip,expression:"link2Tooltip"}],staticClass:"app-icon",attrs:{src:e("1771")("./"+this.rightIcon2),alt:"Right icon 2"}})])])])},C=[],I={name:"Card",props:{msg:String,description:String,icon:String,link1:String,link1Tooltip:String,link2:String,link2Tooltip:String,stars:String,rightIcon1:String,rightIcon2:String},data:function(){return{backgroundColor:"#f7f7f7",textColor:"#2c2c2c",hoverColor:"#e6e6e6"}},computed:{cardStyles:function(){return{"--background-color":this.backgroundColor,"--color":this.textColor,"--color-hover":this.hoverColor}}}},R=I,T=(e("c177"),Object(c["a"])(R,E,C,!1,null,null,null)),O=T.exports,j={name:"subscribe",components:{AppCard:O}},B=j,W=(e("f3e4"),Object(c["a"])(B,y,x,!1,null,"0a28200f",null)),N=W.exports,Q=e("ecee"),G=e("c074"),Y=e("f2d1"),H=e("b702"),F=e("ad3d");Q["c"].add(G["a"],Y["a"],H["a"]),o["a"].component("font-awesome-icon",F["a"]),o["a"].config.productionTip=!1,o["a"].use(l["a"]),o["a"].use(f["a"]),o["a"].use(d["a"]),o["a"].component("vue-navigation-bar",h["a"]);var J=new l["a"]({mode:"history",base:"/",routes:[{path:"/",component:b["default"]},{path:"/about",component:A},{path:"/subscribe",component:N}]});o["a"].prototype.axios=v.a,new o["a"]({router:J,render:function(t){return t(u)}}).$mount("#app")},"64a9":function(t,n,e){},"7ad4":function(t,n,e){"use strict";var o=e("9cae"),r=e.n(o);n["default"]=r.a},"7b20":function(t,n,e){},"7f1f":function(t,n){t.exports="data:image/png;base64,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"},"85f4":function(t,n,e){t.exports=e.p+"fonts/ProductSans-Regular.c076a199.woff2"},"9cae":function(t,n){},b4c3:function(t,n,e){t.exports=e.p+"img/airplane.fe7ad351.png"},bb51:function(t,n,e){"use strict";var o=e("f5d5"),r=e("7ad4"),a=e("2877"),i=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,null,null);n["default"]=i.exports},be01:function(t,n,e){t.exports=e.p+"fonts/ProductSans-Regular.187d83d2.woff"},c177:function(t,n,e){"use strict";var o=e("18bf"),r=e.n(o);r.a},c2ea:function(t,n,e){t.exports=e.p+"img/telegram.96188f38.png"},e4d7:function(t,n,e){t.exports=e.p+"img/twitter.24b0fea3.png"},ee57:function(t,n,e){t.exports=e.p+"img/rss-blue.634e6f6c.png"},f3e4:function(t,n,e){"use strict";var o=e("00c0"),r=e.n(o);r.a},f5d5:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"container"},[o("img",{attrs:{id:"avatar",alt:"avatar",src:e("08a9")}}),o("h1",[t._v("Junta Ono")]),o("div",{staticClass:"social-links"},[o("a",{attrs:{href:"https://twitter.com/j0hnta0",target:"_blank"}},[o("font-awesome-icon",{staticClass:"iconfont",attrs:{icon:["fab","twitter"]}})],1),o("a",{attrs:{href:"https://linkedin.com/in/j0hnta",target:"_blank"}},[o("font-awesome-icon",{staticClass:"iconfont",attrs:{icon:["fab","linkedin"]}})],1),o("a",{attrs:{href:"https://github.com/johnta0",target:"_blank"}},[o("font-awesome-icon",{staticClass:"iconfont",attrs:{icon:["fab","github"]}})],1)]),o("p",[t._v(" ✈Travel lover, 👨🏻‍💻Software Develper, ♠Amateur Poker Player")])])},r=[];e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return r}))}});
//# sourceMappingURL=app.4ba47770.js.map