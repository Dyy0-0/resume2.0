!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=12)}([function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";var r=document,i=function(e,t){return Array.from((t&&t||r).querySelectorAll(e))},s=function(e,t){if(void 0===t)return e.innerHTML;Array.isArray(e)?e.forEach(function(e,n){e.innerHTML=t}):e.innerHTML=t},o=function(e,t){for(var n in t)e.style[n]=t[n]},a=function(e,t){if(e.classList&&e.classList.add)return e.classList.add(t);-1===e.className.split(" ").indexOf(t)&&(e.className+=" "+t)};e.exports={$:i,html:s,css:o,addClass:a}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(i,s){try{var o=t[i](s),a=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(a).then(function(e){r("next",e)},function(e){r("throw",e)});e(a)}return r("next")})}}!function(){var e=i(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(0);case 2:return e.next=4,c();case 4:return e.next=6,u(1);case 6:return e.next=8,h();case 8:return e.next=10,u(2);case 10:case"end":return e.stop()}},e,this)}))}();n(8);var s=n(7),o=r(s),a=n(6),l=r(a),u=o.default.showStyles,c=l.default.showResume,h=l.default.markdownToHtml},function(e,t,n){(function(t,n){!function(t){"use strict";function r(e,t,n,r){var i=Object.create((t||s).prototype),o=new f(r||[]);return i._invoke=h(e,n,o),i}function i(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function s(){}function o(){}function a(){}function l(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function u(e){this.arg=e}function c(e){function t(t,n){var r=e[t](n),i=r.value;return i instanceof u?Promise.resolve(i.arg).then(s,o):Promise.resolve(i).then(function(e){return r.value=e,r})}function r(e,n){function r(){return t(e,n)}return i=i?i.then(r,r):new Promise(function(e){e(r())})}"object"==typeof n&&n.domain&&(t=n.domain.bind(t));var i,s=t.bind(e,"next"),o=t.bind(e,"throw");t.bind(e,"return");this._invoke=r}function h(e,t,n){var r=x;return function(s,o){if(r===L)throw new Error("Generator is already running");if(r===S){if("throw"===s)throw o;return m()}for(;;){var a=n.delegate;if(a){if("return"===s||"throw"===s&&a.iterator[s]===y){n.delegate=null;var l=a.iterator.return;if(l){var u=i(l,a.iterator,o);if("throw"===u.type){s="throw",o=u.arg;continue}}if("return"===s)continue}var u=i(a.iterator[s],a.iterator,o);if("throw"===u.type){n.delegate=null,s="throw",o=u.arg;continue}s="next",o=y;var c=u.arg;if(!c.done)return r=_,c;n[a.resultName]=c.value,n.next=a.nextLoc,n.delegate=null}if("next"===s)n._sent=o,n.sent=r===_?o:y;else if("throw"===s){if(r===x)throw r=S,o;n.dispatchException(o)&&(s="next",o=y)}else"return"===s&&n.abrupt("return",o);r=L;var u=i(e,t,n);if("normal"===u.type){r=n.done?S:_;var c={value:u.arg,done:n.done};if(u.arg!==E)return c;n.delegate&&"next"===s&&(o=y)}else"throw"===u.type&&(r=S,s="throw",o=u.arg)}}}function p(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function g(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function f(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(p,this),this.reset(!0)}function d(e){if(e){var t=e[v];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(b.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=y,t.done=!0,t};return r.next=r}}return{next:m}}function m(){return{value:y,done:!0}}var y,b=Object.prototype.hasOwnProperty,v="function"==typeof Symbol&&Symbol.iterator||"@@iterator",k="object"==typeof e,w=t.regeneratorRuntime;if(w)return void(k&&(e.exports=w));w=t.regeneratorRuntime=k?e.exports:{},w.wrap=r;var x="suspendedStart",_="suspendedYield",L="executing",S="completed",E={},$=a.prototype=s.prototype;o.prototype=$.constructor=a,a.constructor=o,o.displayName="GeneratorFunction",w.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===o||"GeneratorFunction"===(t.displayName||t.name))},w.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a,e.prototype=Object.create($),e},w.awrap=function(e){return new u(e)},l(c.prototype),w.async=function(e,t,n,i){var s=new c(r(e,t,n,i));return w.isGeneratorFunction(t)?s:s.next().then(function(e){return e.done?e.value:s.next()})},l($),$[v]=function(){return this},$.toString=function(){return"[object Generator]"},w.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},w.values=d,f.prototype={constructor:f,reset:function(e){if(this.prev=0,this.next=0,this.sent=y,this.done=!1,this.delegate=null,this.tryEntries.forEach(g),!e)for(var t in this)"t"===t.charAt(0)&&b.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=y)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){function t(t,r){return s.type="throw",s.arg=e,n.next=t,!!r}if(this.done)throw e;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],s=i.completion;if("root"===i.tryLoc)return t("end");if(i.tryLoc<=this.prev){var o=b.call(i,"catchLoc"),a=b.call(i,"finallyLoc");if(o&&a){if(this.prev<i.catchLoc)return t(i.catchLoc,!0);if(this.prev<i.finallyLoc)return t(i.finallyLoc)}else if(o){if(this.prev<i.catchLoc)return t(i.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return t(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&b.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=e,s.arg=t,i?this.next=i.finallyLoc:this.complete(s),E},complete:function(e,t){if("throw"===e.type)throw e.arg;"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=e.arg,this.next="end"):"normal"===e.type&&t&&(this.next=t)},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),g(n),E}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;g(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:d(e),resultName:t,nextLoc:n},E}}}("object"==typeof t?t:"object"==typeof window?window:"object"==typeof self?self:this)}).call(t,n(0),n(11))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default="王敏 qianlongo\n----\n\n一只迷途的前端小码农，徜徉在计算机的世界，渴望成为一名有点点厉害的全栈开发工程师\n\n技能\n----\n\n* 前端开发\n* node.js 开发\n* php\n* python\n\n工作经历\n----\n\n1. 阿里巴巴天猫集团实习\n2. 沪江网前端开发工程师\n3. ...\n\n链接\n----\n\n* [GitHub](https://github.com/qianlongo)\n* [我的文章](https://qianlongo.github.io/)\n\n> 如果你喜欢这个效果，Fork [我的项目](https://github.com/qianlongo/resume-native)，打造你自己的简历！\n\n"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=["\n/*\n* Inspired by http://strml.net/\n* 大家好，我是王敏\n* 看到首页链接的效果，自己也想实现一个\n* 说做就做，我也来写一份简历！\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  color: rgb(222,222,222); background: rgb(0,43,54); \n}\n/* 文字离边框太近了 */\n.styles-wrap {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw; height: 90vh;\n}\n/* 代码高亮 */\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n\n/* 加点 3D 效果呗 */\nhtml{\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n.styles-wrap {\n  position: fixed; left: 1rem; top: 0; \n  -webkit-transition: .5; \n  transition: .5;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* 接下来我给自己准备一个编辑器 */\n.resume-wrap{\n  position: fixed; right: .5rem; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 48vw; height: 90vh; \n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n  \n}\n/* 好了，我开始写简历了 */\n","\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n",'\n/* 再对 HTML 加点样式 */\n.resume-wrap{\n  padding: 2em;\n}\n.resume-wrap h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resume-wrap ul,.resume-wrap ol{\n  list-style: none;\n}\n.resume-wrap ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resume-wrap ol {\n  counter-reset: section;\n}\n.resume-wrap ol li::before {\n  counter-increment: section;            \n  content: counters(section, ".") " ";  \n  margin-right: .5em;\n}\n.resume-wrap blockquote \n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'];t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=n(4),s=r(i),o=n(1),a=r(o),l=n(9),u=r(l),c=a.default.$,h=a.default.html,p=a.default.css,g=a.default.addClass,f=c("#app .resume-wrap")[0],d=c(".resume-tag",f)[0],m=c(".resume-markdown",f)[0],y="",b=s.default.length,v=null,k=0,w=function(){return new Promise(function(e,t){p(m,{display:"none"}),g(f,"htmlMode"),h(d,(0,u.default)(s.default)),e()})},x=function(){return new Promise(function(e,t){clearInterval(v),v=setInterval(function(){y+=s.default.substring(k,k+1),y.length===b?(clearInterval(v),e()):(h(m,y),k++)},60)})};e.exports={showResume:x,markdownToHtml:w}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=n(5),s=r(i),o=n(1),a=r(o),l=n(10),u=r(l),c=a.default.$,h=a.default.html,p=c("#app .styles-wrap")[0],g=c("style",p)[0],f=c("pre",p)[0],d="",m=null,y=function(){p.scrollTop=1e4},b=function(e){return new Promise(function(t,n){var r=s.default[e],i=void 0,o=void 0;r&&(i=s.default.filter(function(t,n){return n<=e}).reduce(function(e,t){return e+=t.length},0),o=i-r.length,clearInterval(m),m=setInterval(function(){var e=d.length-o,n=r.substring(e,e+1)||"";d+=n,d.length===i?(clearInterval(m),t()):(y(),h(g,d),h(f,u.default.highlight(d,u.default.languages.css)))},60))})};e.exports={showStyles:b}},function(e,t){},function(e,t,n){(function(t){(function(){function t(e){this.tokens=[],this.tokens.links={},this.options=e||c.defaults,this.rules=h.normal,this.options.gfm&&(this.options.tables?this.rules=h.tables:this.rules=h.gfm)}function n(e,t){if(this.options=t||c.defaults,this.links=e,this.rules=p.normal,this.renderer=this.options.renderer||new r,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=p.breaks:this.rules=p.gfm:this.options.pedantic&&(this.rules=p.pedantic)}function r(e){this.options=e||{}}function i(e){this.tokens=[],this.token=null,this.options=e||c.defaults,this.options.renderer=this.options.renderer||new r,this.renderer=this.options.renderer,this.renderer.options=this.options}function s(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function o(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g,function(e,t){return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function a(e,t){return e=e.source,t=t||"",function n(r,i){return r?(i=i.source||i,i=i.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(r,i),n):new RegExp(e,t)}}function l(){}function u(e){for(var t,n,r=1;r<arguments.length;r++){t=arguments[r];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}function c(e,n,r){if(r||"function"==typeof n){r||(r=n,n=null),n=u({},c.defaults,n||{});var o,a,l=n.highlight,h=0;try{o=t.lex(e,n)}catch(e){return r(e)}a=o.length;var p=function(e){if(e)return n.highlight=l,r(e);var t;try{t=i.parse(o,n)}catch(t){e=t}return n.highlight=l,e?r(e):r(null,t)};if(!l||l.length<3)return p();if(delete n.highlight,!a)return p();for(;h<o.length;h++)!function(e){"code"!==e.type?--a||p():l(e.text,e.lang,function(t,n){return t?p(t):null==n||n===e.text?--a||p():(e.text=n,e.escaped=!0,void(--a||p()))})}(o[h])}else try{return n&&(n=u({},c.defaults,n)),i.parse(t.lex(e,n),n)}catch(e){if(e.message+="\nPlease report this to https://github.com/chjj/marked.",(n||c.defaults).silent)return"<p>An error occured:</p><pre>"+s(e.message+"",!0)+"</pre>";throw e}}var h={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:l,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:l,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:l,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};h.bullet=/(?:[*+-]|\d+\.)/,h.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,h.item=a(h.item,"gm")(/bull/g,h.bullet)(),h.list=a(h.list)(/bull/g,h.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+h.def.source+")")(),h.blockquote=a(h.blockquote)("def",h.def)(),h._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b",h.html=a(h.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,h._tag)(),h.paragraph=a(h.paragraph)("hr",h.hr)("heading",h.heading)("lheading",h.lheading)("blockquote",h.blockquote)("tag","<"+h._tag)("def",h.def)(),h.normal=u({},h),h.gfm=u({},h.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),h.gfm.paragraph=a(h.paragraph)("(?!","(?!"+h.gfm.fences.source.replace("\\1","\\2")+"|"+h.list.source.replace("\\1","\\3")+"|")(),h.tables=u({},h.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),t.rules=h,t.lex=function(e,n){return new t(n).lex(e)},t.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},t.prototype.token=function(e,t,n){for(var r,i,s,o,a,l,u,c,p,e=e.replace(/^ +$/gm,"");e;)if((s=this.rules.newline.exec(e))&&(e=e.substring(s[0].length),s[0].length>1&&this.tokens.push({type:"space"})),s=this.rules.code.exec(e))e=e.substring(s[0].length),s=s[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?s:s.replace(/\n+$/,"")});else if(s=this.rules.fences.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"code",lang:s[2],text:s[3]||""});else if(s=this.rules.heading.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"heading",depth:s[1].length,text:s[2]});else if(t&&(s=this.rules.nptable.exec(e))){for(e=e.substring(s[0].length),l={type:"table",header:s[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:s[3].replace(/\n$/,"").split("\n")},c=0;c<l.align.length;c++)/^ *-+: *$/.test(l.align[c])?l.align[c]="right":/^ *:-+: *$/.test(l.align[c])?l.align[c]="center":/^ *:-+ *$/.test(l.align[c])?l.align[c]="left":l.align[c]=null;for(c=0;c<l.cells.length;c++)l.cells[c]=l.cells[c].split(/ *\| */);this.tokens.push(l)}else if(s=this.rules.lheading.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"heading",depth:"="===s[2]?1:2,text:s[1]});else if(s=this.rules.hr.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"hr"});else if(s=this.rules.blockquote.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"blockquote_start"}),s=s[0].replace(/^ *> ?/gm,""),this.token(s,t,!0),this.tokens.push({type:"blockquote_end"});else if(s=this.rules.list.exec(e)){for(e=e.substring(s[0].length),o=s[2],this.tokens.push({type:"list_start",ordered:o.length>1}),s=s[0].match(this.rules.item),r=!1,p=s.length,c=0;c<p;c++)l=s[c],u=l.length,l=l.replace(/^ *([*+-]|\d+\.) +/,""),~l.indexOf("\n ")&&(u-=l.length,l=this.options.pedantic?l.replace(/^ {1,4}/gm,""):l.replace(new RegExp("^ {1,"+u+"}","gm"),"")),this.options.smartLists&&c!==p-1&&(a=h.bullet.exec(s[c+1])[0],o===a||o.length>1&&a.length>1||(e=s.slice(c+1).join("\n")+e,c=p-1)),i=r||/\n\n(?!\s*$)/.test(l),c!==p-1&&(r="\n"===l.charAt(l.length-1),i||(i=r)),this.tokens.push({type:i?"loose_item_start":"list_item_start"}),this.token(l,!1,n),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(s=this.rules.html.exec(e))e=e.substring(s[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===s[1]||"script"===s[1]||"style"===s[1]),text:s[0]});else if(!n&&t&&(s=this.rules.def.exec(e)))e=e.substring(s[0].length),this.tokens.links[s[1].toLowerCase()]={href:s[2],title:s[3]};else if(t&&(s=this.rules.table.exec(e))){for(e=e.substring(s[0].length),l={type:"table",header:s[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:s[3].replace(/(?: *\| *)?\n$/,"").split("\n")},c=0;c<l.align.length;c++)/^ *-+: *$/.test(l.align[c])?l.align[c]="right":/^ *:-+: *$/.test(l.align[c])?l.align[c]="center":/^ *:-+ *$/.test(l.align[c])?l.align[c]="left":l.align[c]=null;for(c=0;c<l.cells.length;c++)l.cells[c]=l.cells[c].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(l)}else if(t&&(s=this.rules.paragraph.exec(e)))e=e.substring(s[0].length),this.tokens.push({type:"paragraph",text:"\n"===s[1].charAt(s[1].length-1)?s[1].slice(0,-1):s[1]});else if(s=this.rules.text.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"text",text:s[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var p={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:l,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:l,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};p._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,p._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,p.link=a(p.link)("inside",p._inside)("href",p._href)(),p.reflink=a(p.reflink)("inside",p._inside)(),p.normal=u({},p),p.pedantic=u({},p.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),p.gfm=u({},p.normal,{escape:a(p.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:a(p.text)("]|","~]|")("|","|https?://|")()}),p.breaks=u({},p.gfm,{br:a(p.br)("{2,}","*")(),text:a(p.gfm.text)("{2,}","*")()}),n.rules=p,n.output=function(e,t,r){return new n(t,r).output(e)},n.prototype.output=function(e){for(var t,n,r,i,o="";e;)if(i=this.rules.escape.exec(e))e=e.substring(i[0].length),o+=i[1];else if(i=this.rules.autolink.exec(e))e=e.substring(i[0].length),"@"===i[2]?(n=":"===i[1].charAt(6)?this.mangle(i[1].substring(7)):this.mangle(i[1]),r=this.mangle("mailto:")+n):(n=s(i[1]),r=n),o+=this.renderer.link(r,null,n);else if(this.inLink||!(i=this.rules.url.exec(e))){if(i=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(i[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(i[0])&&(this.inLink=!1),e=e.substring(i[0].length),o+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):s(i[0]):i[0];else if(i=this.rules.link.exec(e))e=e.substring(i[0].length),this.inLink=!0,o+=this.outputLink(i,{href:i[2],title:i[3]}),this.inLink=!1;else if((i=this.rules.reflink.exec(e))||(i=this.rules.nolink.exec(e))){if(e=e.substring(i[0].length),t=(i[2]||i[1]).replace(/\s+/g," "),!(t=this.links[t.toLowerCase()])||!t.href){o+=i[0].charAt(0),e=i[0].substring(1)+e;continue}this.inLink=!0,o+=this.outputLink(i,t),this.inLink=!1}else if(i=this.rules.strong.exec(e))e=e.substring(i[0].length),o+=this.renderer.strong(this.output(i[2]||i[1]));else if(i=this.rules.em.exec(e))e=e.substring(i[0].length),o+=this.renderer.em(this.output(i[2]||i[1]));else if(i=this.rules.code.exec(e))e=e.substring(i[0].length),o+=this.renderer.codespan(s(i[2],!0));else if(i=this.rules.br.exec(e))e=e.substring(i[0].length),o+=this.renderer.br();else if(i=this.rules.del.exec(e))e=e.substring(i[0].length),o+=this.renderer.del(this.output(i[1]));else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),o+=this.renderer.text(s(this.smartypants(i[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else e=e.substring(i[0].length),n=s(i[1]),r=n,o+=this.renderer.link(r,null,n);return o},n.prototype.outputLink=function(e,t){var n=s(t.href),r=t.title?s(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,s(e[1]))},n.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},n.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,n="",r=e.length,i=0;i<r;i++)t=e.charCodeAt(i),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},r.prototype.code=function(e,t,n){if(this.options.highlight){var r=this.options.highlight(e,t);null!=r&&r!==e&&(n=!0,e=r)}return t?'<pre><code class="'+this.options.langPrefix+s(t,!0)+'">'+(n?e:s(e,!0))+"\n</code></pre>\n":"<pre><code>"+(n?e:s(e,!0))+"\n</code></pre>"},r.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},r.prototype.html=function(e){return e},r.prototype.heading=function(e,t,n){return"<h"+t+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"},r.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},r.prototype.list=function(e,t){var n=t?"ol":"ul";return"<"+n+">\n"+e+"</"+n+">\n"},r.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},r.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},r.prototype.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"},r.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},r.prototype.tablecell=function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' style="text-align:'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},r.prototype.strong=function(e){return"<strong>"+e+"</strong>"},r.prototype.em=function(e){return"<em>"+e+"</em>"},r.prototype.codespan=function(e){return"<code>"+e+"</code>"},r.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},r.prototype.del=function(e){return"<del>"+e+"</del>"},r.prototype.link=function(e,t,n){if(this.options.sanitize){try{var r=decodeURIComponent(o(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return""}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:"))return""}var i='<a href="'+e+'"';return t&&(i+=' title="'+t+'"'),i+=">"+n+"</a>"},r.prototype.image=function(e,t,n){var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">"},r.prototype.text=function(e){return e},i.parse=function(e,t,n){return new i(t,n).parse(e)},i.prototype.parse=function(e){this.inline=new n(e.links,this.options,this.renderer),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},i.prototype.next=function(){return this.token=this.tokens.pop()},i.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},i.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},i.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,r,i="",s="";for(n="",e=0;e<this.token.header.length;e++)({header:!0,align:this.token.align[e]}),n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(i+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",r=0;r<t.length;r++)n+=this.renderer.tablecell(this.inline.output(t[r]),{header:!1,align:this.token.align[r]});s+=this.renderer.tablerow(n)}return this.renderer.table(i,s);case"blockquote_start":for(var s="";"blockquote_end"!==this.next().type;)s+=this.tok();return this.renderer.blockquote(s);case"list_start":for(var s="",o=this.token.ordered;"list_end"!==this.next().type;)s+=this.tok();return this.renderer.list(s,o);case"list_item_start":for(var s="";"list_item_end"!==this.next().type;)s+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(s);case"loose_item_start":for(var s="";"list_item_end"!==this.next().type;)s+=this.tok();return this.renderer.listitem(s);case"html":var a=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);return this.renderer.html(a);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}},l.exec=l,c.options=c.setOptions=function(e){return u(c.defaults,e),c},c.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new r,xhtml:!1},c.Parser=i,c.parser=i.parse,c.Renderer=r,c.Lexer=t,c.lexer=t.lex,c.InlineLexer=n,c.inlineLexer=n.output,c.parse=c,e.exports=c}).call(function(){return this||("undefined"!=typeof window?window:t)}())}).call(t,n(0))},function(e,t,n){(function(t){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},r=function(){var e=/\blang(?:uage)?-(\w+)\b/i,t=0,r=n.Prism={util:{encode:function(e){return e instanceof i?new i(e.type,r.util.encode(e.content),e.alias):"Array"===r.util.type(e)?e.map(r.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e){switch(r.util.type(e)){case"Object":var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=r.util.clone(e[n]));return t;case"Array":return e.map&&e.map(function(e){return r.util.clone(e)})}return e}},languages:{extend:function(e,t){var n=r.util.clone(r.languages[e]);for(var i in t)n[i]=t[i];return n},insertBefore:function(e,t,n,i){i=i||r.languages;var s=i[e];if(2==arguments.length){n=arguments[1];for(var o in n)n.hasOwnProperty(o)&&(s[o]=n[o]);return s}var a={};for(var l in s)if(s.hasOwnProperty(l)){if(l==t)for(var o in n)n.hasOwnProperty(o)&&(a[o]=n[o]);a[l]=s[l]}return r.languages.DFS(r.languages,function(t,n){n===i[e]&&t!=e&&(this[t]=a)}),i[e]=a},DFS:function(e,t,n,i){i=i||{};for(var s in e)e.hasOwnProperty(s)&&(t.call(e,s,e[s],n||s),"Object"!==r.util.type(e[s])||i[r.util.objId(e[s])]?"Array"!==r.util.type(e[s])||i[r.util.objId(e[s])]||(i[r.util.objId(e[s])]=!0,r.languages.DFS(e[s],t,s,i)):(i[r.util.objId(e[s])]=!0,r.languages.DFS(e[s],t,null,i)))}},plugins:{},highlightAll:function(e,t){var n={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",n);for(var i,s=n.elements||document.querySelectorAll(n.selector),o=0;i=s[o++];)r.highlightElement(i,!0===e,n.callback)},highlightElement:function(t,i,s){for(var o,a,l=t;l&&!e.test(l.className);)l=l.parentNode;l&&(o=(l.className.match(e)||[,""])[1].toLowerCase(),a=r.languages[o]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+o,l=t.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+o);var u=t.textContent,c={element:t,language:o,grammar:a,code:u};if(r.hooks.run("before-sanity-check",c),!c.code||!c.grammar)return c.code&&(c.element.textContent=c.code),void r.hooks.run("complete",c);if(r.hooks.run("before-highlight",c),i&&n.Worker){var h=new Worker(r.filename);h.onmessage=function(e){c.highlightedCode=e.data,r.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,s&&s.call(c.element),r.hooks.run("after-highlight",c),r.hooks.run("complete",c)},h.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else c.highlightedCode=r.highlight(c.code,c.grammar,c.language),r.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,s&&s.call(t),r.hooks.run("after-highlight",c),r.hooks.run("complete",c)},highlight:function(e,t,n){var s=r.tokenize(e,t);return i.stringify(r.util.encode(s),n)},tokenize:function(e,t,n){var i=r.Token,s=[e],o=t.rest;if(o){for(var a in o)t[a]=o[a];delete t.rest}e:for(var a in t)if(t.hasOwnProperty(a)&&t[a]){var l=t[a];l="Array"===r.util.type(l)?l:[l];for(var u=0;u<l.length;++u){var c=l[u],h=c.inside,p=!!c.lookbehind,g=!!c.greedy,f=0,d=c.alias;if(g&&!c.pattern.global){var m=c.pattern.toString().match(/[imuy]*$/)[0];c.pattern=RegExp(c.pattern.source,m+"g")}c=c.pattern||c;for(var y=0,b=0;y<s.length;b+=s[y].length,++y){var v=s[y];if(s.length>e.length)break e;if(!(v instanceof i)){c.lastIndex=0;var k=c.exec(v),w=1;if(!k&&g&&y!=s.length-1){if(c.lastIndex=b,!(k=c.exec(e)))break;for(var x=k.index+(p?k[1].length:0),_=k.index+k[0].length,L=y,S=b,E=s.length;L<E&&S<_;++L)S+=s[L].length,x>=S&&(++y,b=S);if(s[y]instanceof i||s[L-1].greedy)continue;w=L-y,v=e.slice(b,S),k.index-=b}if(k){p&&(f=k[1].length);var x=k.index+f,k=k[0].slice(f),_=x+k.length,$=v.slice(0,x),j=v.slice(_),A=[y,w];$&&A.push($);var T=new i(a,h?r.tokenize(k,h):k,d,k,g);A.push(T),j&&A.push(j),Array.prototype.splice.apply(s,A)}}}}}return s},hooks:{all:{},add:function(e,t){var n=r.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=r.hooks.all[e];if(n&&n.length)for(var i,s=0;i=n[s++];)i(t)}}},i=r.Token=function(e,t,n,r,i){this.type=e,this.content=t,this.alias=n,this.length=0|(r||"").length,this.greedy=!!i};if(i.stringify=function(e,t,n){if("string"==typeof e)return e;if("Array"===r.util.type(e))return e.map(function(n){return i.stringify(n,t,e)}).join("");var s={type:e.type,content:i.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if("comment"==s.type&&(s.attributes.spellcheck="true"),e.alias){var o="Array"===r.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(s.classes,o)}r.hooks.run("wrap",s);var a=Object.keys(s.attributes).map(function(e){return e+'="'+(s.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+(a?" "+a:"")+">"+s.content+"</"+s.tag+">"},!n.document)return n.addEventListener?(n.addEventListener("message",function(e){var t=JSON.parse(e.data),i=t.language,s=t.code,o=t.immediateClose;n.postMessage(r.highlight(s,r.languages[i],i)),o&&n.close()},!1),n.Prism):n.Prism;var s=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return s&&(r.filename=s.src,document.addEventListener&&!s.hasAttribute("data-manual")&&("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(r.highlightAll):window.setTimeout(r.highlightAll,16):document.addEventListener("DOMContentLoaded",r.highlightAll))),n.Prism}();void 0!==e&&e.exports&&(e.exports=r),void 0!==t&&(t.Prism=r),r.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/i,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},r.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),r.languages.xml=r.languages.markup,r.languages.html=r.languages.markup,r.languages.mathml=r.languages.markup,r.languages.svg=r.languages.markup,r.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:{pattern:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},r.languages.css.atrule.inside.rest=r.util.clone(r.languages.css),r.languages.markup&&(r.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:r.languages.css,alias:"language-css"}}),r.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:r.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:r.languages.css}},alias:"language-css"}},r.languages.markup.tag)),r.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},r.languages.javascript=r.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,function:/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/}),r.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),r.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:r.languages.javascript}},string:/[\s\S]+/}}}),r.languages.markup&&r.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:r.languages.javascript,alias:"language-javascript"}}),r.languages.js=r.languages.javascript,function(){"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.forEach&&Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var n,i=t.getAttribute("data-src"),s=t,o=/\blang(?:uage)?-(?!\*)(\w+)\b/i;s&&!o.test(s.className);)s=s.parentNode;if(s&&(n=(t.className.match(o)||[,""])[1]),!n){var a=(i.match(/\.(\w+)$/)||[,""])[1];n=e[a]||a}var l=document.createElement("code");l.className="language-"+n,t.textContent="",l.textContent="Loading…",t.appendChild(l);var u=new XMLHttpRequest;u.open("GET",i,!0),u.onreadystatechange=function(){4==u.readyState&&(u.status<400&&u.responseText?(l.textContent=u.responseText,r.highlightElement(l)):u.status>=400?l.textContent="✖ Error "+u.status+" while fetching file: "+u.statusText:l.textContent="✖ Error: File does not exist or is empty")},u.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}()}).call(t,n(0))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(e){if(c===setTimeout)return setTimeout(e,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function s(e){if(h===clearTimeout)return clearTimeout(e);if((h===r||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(e);try{return h(e)}catch(t){try{return h.call(null,e)}catch(t){return h.call(this,e)}}}function o(){d&&g&&(d=!1,g.length?f=g.concat(f):m=-1,f.length&&a())}function a(){if(!d){var e=i(o);d=!0;for(var t=f.length;t;){for(g=f,f=[];++m<t;)g&&g[m].run();m=-1,t=f.length}g=null,d=!1,s(e)}}function l(e,t){this.fun=e,this.array=t}function u(){}var c,h,p=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(e){c=n}try{h="function"==typeof clearTimeout?clearTimeout:r}catch(e){h=r}}();var g,f=[],d=!1,m=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];f.push(new l(e,t)),1!==f.length||d||i(a)},l.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=u,p.addListener=u,p.once=u,p.off=u,p.removeListener=u,p.removeAllListeners=u,p.emit=u,p.prependListener=u,p.prependOnceListener=u,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t,n){n(3),e.exports=n(2)}]);