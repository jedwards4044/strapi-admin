(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[6750],{72653:(V,C,n)=>{"use strict";n.r(C),n.d(C,{default:()=>xt});var e=n(53547),i=n(16550),d=n(5504),T=n(19553),W=n(86896),x=n(64593),B=n(52861),L=n(45349),f=n(57713),Y=n(79371),z=n(15483),F=n(76687),r=n(19442),E=n(74273),p=n(37527),N=n(26789),l=n(46038),u=n(71029),v=n(91457),m=n(50781),O=n(81984),D=n(9370),$=n(61585),k=n(28469),q=n(47607),_=n(80606),ne=n(34263),He=n(78971),H=n(78549);const Ge=({data:t})=>{if(!t||!t.you||!t.bot)return null;const a={wordBreak:"keep-all"};return e.createElement(m.x,null,e.createElement("span",null,e.createElement(H.Z,{style:a},"You: ",t.you," ")),e.createElement("br",null),e.createElement("span",null,e.createElement(H.Z,{style:a},"ChatGPT: ",t.bot)))};var Ce=n(60881),Ne=n(18189),Se=n(48683);const ze=({isOpen:t,onClose:a})=>e.createElement(e.Fragment,null,t&&e.createElement(Ce.P,{onClose:()=>a(!t),labelledBy:"title"},e.createElement(Ne.x,null,e.createElement(H.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},"Help")),e.createElement(Se.f,null,e.createElement(H.Z,{variant:"omega"},"You may use prompts such as the followings to get meaningful response from chatGPT:"),e.createElement("br",null),e.createElement("br",null),e.createElement(H.Z,{variant:"omega"},e.createElement("ol",null,e.createElement("li",null,"1. Create a quiz with 5 multiple choice questions that assess students' understanding of [concept being taught]"),e.createElement("li",null,"2. Find the bug with this code: [post code below]"),e.createElement("li",null,"3. What exactly does this regex do? rege(x(es)?|xps?)"),e.createElement("li",null,"4. Describe [topic of your choice] in detail"),e.createElement("li",null,"5. Please provide a definition for the medical term 'tachycardia'"))),e.createElement("br",null),e.createElement(H.Z,{variant:"omega"},e.createElement("a",{href:"https://classplusplus.com/chatgpt/",target:"_blank"},"Click here")," ","for more ChatGPT prompts."))));var Fe=n(28809);const Ue=({isLoading:t})=>{const a={position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"black",opacity:"0.6",justifyContent:"center",alignItems:"center",display:t?"flex":"none"};return e.createElement(m.x,{style:a},e.createElement(Fe.a,null))};var Ke=n(94092),Ve=n(88294),Ye=n(75878),Xe=n(27964),Je=n(91330);const Qe=({isOpen:t,setIsOpen:a,onConfirm:s})=>e.createElement(Ke.V,{onClose:()=>a(!1),title:"Confirmation",isOpen:t},e.createElement(Ve.a,{icon:e.createElement(Je.Z,null)},e.createElement(F.K,{spacing:2},e.createElement(Ye.k,{justifyContent:"center"},e.createElement(H.Z,{id:"confirm-description"},"Are you sure you want to clear chatGPT history?")))),e.createElement(Xe.c,{startAction:e.createElement(r.z,{onClick:()=>a(!1),variant:"tertiary"},"Cancel"),endAction:e.createElement(r.z,{onClick:s,variant:"danger-light",startIcon:e.createElement(ne.Z,null)},"Confirm")}));var we=n(45987),ke=n(42982),Pe=n(4942),qe=n(87462);function Te(t,a){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);a&&(o=o.filter(function(c){return Object.getOwnPropertyDescriptor(t,c).enumerable})),s.push.apply(s,o)}return s}function oe(t){for(var a=1;a<arguments.length;a++){var s=arguments[a]!=null?arguments[a]:{};a%2?Te(Object(s),!0).forEach(function(o){(0,Pe.Z)(t,o,s[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):Te(Object(s)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(s,o))})}return t}function _e(t){var a=t.length;if(a===0||a===1)return t;if(a===2)return[t[0],t[1],"".concat(t[0],".").concat(t[1]),"".concat(t[1],".").concat(t[0])];if(a===3)return[t[0],t[1],t[2],"".concat(t[0],".").concat(t[1]),"".concat(t[0],".").concat(t[2]),"".concat(t[1],".").concat(t[0]),"".concat(t[1],".").concat(t[2]),"".concat(t[2],".").concat(t[0]),"".concat(t[2],".").concat(t[1]),"".concat(t[0],".").concat(t[1],".").concat(t[2]),"".concat(t[0],".").concat(t[2],".").concat(t[1]),"".concat(t[1],".").concat(t[0],".").concat(t[2]),"".concat(t[1],".").concat(t[2],".").concat(t[0]),"".concat(t[2],".").concat(t[0],".").concat(t[1]),"".concat(t[2],".").concat(t[1],".").concat(t[0])];if(a>=4)return[t[0],t[1],t[2],t[3],"".concat(t[0],".").concat(t[1]),"".concat(t[0],".").concat(t[2]),"".concat(t[0],".").concat(t[3]),"".concat(t[1],".").concat(t[0]),"".concat(t[1],".").concat(t[2]),"".concat(t[1],".").concat(t[3]),"".concat(t[2],".").concat(t[0]),"".concat(t[2],".").concat(t[1]),"".concat(t[2],".").concat(t[3]),"".concat(t[3],".").concat(t[0]),"".concat(t[3],".").concat(t[1]),"".concat(t[3],".").concat(t[2]),"".concat(t[0],".").concat(t[1],".").concat(t[2]),"".concat(t[0],".").concat(t[1],".").concat(t[3]),"".concat(t[0],".").concat(t[2],".").concat(t[1]),"".concat(t[0],".").concat(t[2],".").concat(t[3]),"".concat(t[0],".").concat(t[3],".").concat(t[1]),"".concat(t[0],".").concat(t[3],".").concat(t[2]),"".concat(t[1],".").concat(t[0],".").concat(t[2]),"".concat(t[1],".").concat(t[0],".").concat(t[3]),"".concat(t[1],".").concat(t[2],".").concat(t[0]),"".concat(t[1],".").concat(t[2],".").concat(t[3]),"".concat(t[1],".").concat(t[3],".").concat(t[0]),"".concat(t[1],".").concat(t[3],".").concat(t[2]),"".concat(t[2],".").concat(t[0],".").concat(t[1]),"".concat(t[2],".").concat(t[0],".").concat(t[3]),"".concat(t[2],".").concat(t[1],".").concat(t[0]),"".concat(t[2],".").concat(t[1],".").concat(t[3]),"".concat(t[2],".").concat(t[3],".").concat(t[0]),"".concat(t[2],".").concat(t[3],".").concat(t[1]),"".concat(t[3],".").concat(t[0],".").concat(t[1]),"".concat(t[3],".").concat(t[0],".").concat(t[2]),"".concat(t[3],".").concat(t[1],".").concat(t[0]),"".concat(t[3],".").concat(t[1],".").concat(t[2]),"".concat(t[3],".").concat(t[2],".").concat(t[0]),"".concat(t[3],".").concat(t[2],".").concat(t[1]),"".concat(t[0],".").concat(t[1],".").concat(t[2],".").concat(t[3]),"".concat(t[0],".").concat(t[1],".").concat(t[3],".").concat(t[2]),"".concat(t[0],".").concat(t[2],".").concat(t[1],".").concat(t[3]),"".concat(t[0],".").concat(t[2],".").concat(t[3],".").concat(t[1]),"".concat(t[0],".").concat(t[3],".").concat(t[1],".").concat(t[2]),"".concat(t[0],".").concat(t[3],".").concat(t[2],".").concat(t[1]),"".concat(t[1],".").concat(t[0],".").concat(t[2],".").concat(t[3]),"".concat(t[1],".").concat(t[0],".").concat(t[3],".").concat(t[2]),"".concat(t[1],".").concat(t[2],".").concat(t[0],".").concat(t[3]),"".concat(t[1],".").concat(t[2],".").concat(t[3],".").concat(t[0]),"".concat(t[1],".").concat(t[3],".").concat(t[0],".").concat(t[2]),"".concat(t[1],".").concat(t[3],".").concat(t[2],".").concat(t[0]),"".concat(t[2],".").concat(t[0],".").concat(t[1],".").concat(t[3]),"".concat(t[2],".").concat(t[0],".").concat(t[3],".").concat(t[1]),"".concat(t[2],".").concat(t[1],".").concat(t[0],".").concat(t[3]),"".concat(t[2],".").concat(t[1],".").concat(t[3],".").concat(t[0]),"".concat(t[2],".").concat(t[3],".").concat(t[0],".").concat(t[1]),"".concat(t[2],".").concat(t[3],".").concat(t[1],".").concat(t[0]),"".concat(t[3],".").concat(t[0],".").concat(t[1],".").concat(t[2]),"".concat(t[3],".").concat(t[0],".").concat(t[2],".").concat(t[1]),"".concat(t[3],".").concat(t[1],".").concat(t[0],".").concat(t[2]),"".concat(t[3],".").concat(t[1],".").concat(t[2],".").concat(t[0]),"".concat(t[3],".").concat(t[2],".").concat(t[0],".").concat(t[1]),"".concat(t[3],".").concat(t[2],".").concat(t[1],".").concat(t[0])]}var ye={};function et(t){if(t.length===0||t.length===1)return t;var a=t.join(".");return ye[a]||(ye[a]=_e(t)),ye[a]}function tt(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=arguments.length>2?arguments[2]:void 0,o=t.filter(function(g){return g!=="token"}),c=et(o);return c.reduce(function(g,y){return oe(oe({},g),s[y])},a)}function Oe(t){return t.join(" ")}function nt(t,a){var s=0;return function(o){return s+=1,o.map(function(c,g){return Ie({node:c,stylesheet:t,useInlineStyles:a,key:"code-segment-".concat(s,"-").concat(g)})})}}function Ie(t){var a=t.node,s=t.stylesheet,o=t.style,c=o===void 0?{}:o,g=t.useInlineStyles,y=t.key,h=a.properties,b=a.type,Z=a.tagName,S=a.value;if(b==="text")return S;if(Z){var j=nt(s,g),I;if(!g)I=oe(oe({},h),{},{className:Oe(h.className)});else{var P=Object.keys(s).reduce(function(G,Q){return Q.split(".").forEach(function(w){G.includes(w)||G.push(w)}),G},[]),ee=h.className&&h.className.includes("token")?["token"]:[],J=h.className&&ee.concat(h.className.filter(function(G){return!P.includes(G)}));I=oe(oe({},h),{},{className:Oe(J)||void 0,style:tt(h.className,Object.assign({},h.style,c),s)})}var U=j(a.children);return e.createElement(Z,(0,qe.Z)({key:y},I),U)}}const at=function(t,a){var s=t.listLanguages();return s.indexOf(a)!==-1};var ot=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function Ae(t,a){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);a&&(o=o.filter(function(c){return Object.getOwnPropertyDescriptor(t,c).enumerable})),s.push.apply(s,o)}return s}function X(t){for(var a=1;a<arguments.length;a++){var s=arguments[a]!=null?arguments[a]:{};a%2?Ae(Object(s),!0).forEach(function(o){(0,Pe.Z)(t,o,s[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):Ae(Object(s)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(s,o))})}return t}var st=/\n/g;function lt(t){return t.match(st)}function ct(t){var a=t.lines,s=t.startingLineNumber,o=t.style;return a.map(function(c,g){var y=g+s;return e.createElement("span",{key:"line-".concat(g),className:"react-syntax-highlighter-line-number",style:typeof o=="function"?o(y):o},"".concat(y,`
`))})}function gt(t){var a=t.codeString,s=t.codeStyle,o=t.containerStyle,c=o===void 0?{float:"left",paddingRight:"10px"}:o,g=t.numberStyle,y=g===void 0?{}:g,h=t.startingLineNumber;return e.createElement("code",{style:Object.assign({},s,c)},ct({lines:a.replace(/\n$/,"").split(`
`),style:y,startingLineNumber:h}))}function it(t){return"".concat(t.toString().length,".25em")}function Re(t,a){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(t),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:a},children:[{type:"text",value:t}]}}function Be(t,a,s){var o={display:"inline-block",minWidth:it(s),paddingRight:"1em",textAlign:"right",userSelect:"none"},c=typeof t=="function"?t(a):t,g=X(X({},o),c);return g}function ue(t){var a=t.children,s=t.lineNumber,o=t.lineNumberStyle,c=t.largestLineNumber,g=t.showInlineLineNumbers,y=t.lineProps,h=y===void 0?{}:y,b=t.className,Z=b===void 0?[]:b,S=t.showLineNumbers,j=t.wrapLongLines,I=typeof h=="function"?h(s):h;if(I.className=Z,s&&g){var P=Be(o,s,c);a.unshift(Re(s,P))}return j&S&&(I.style=X(X({},I.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:I,children:a}}function Ze(t){for(var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],o=0;o<t.length;o++){var c=t[o];if(c.type==="text")s.push(ue({children:[c],className:(0,ke.Z)(new Set(a))}));else if(c.children){var g=a.concat(c.properties.className);Ze(c.children,g).forEach(function(y){return s.push(y)})}}return s}function rt(t,a,s,o,c,g,y,h,b){var Z,S=Ze(t.value),j=[],I=-1,P=0;function ee(A,R){var M=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return ue({children:A,lineNumber:R,lineNumberStyle:h,largestLineNumber:y,showInlineLineNumbers:c,lineProps:s,className:M,showLineNumbers:o,wrapLongLines:b})}function J(A,R){if(o&&R&&c){var M=Be(h,R,y);A.unshift(Re(R,M))}return A}function U(A,R){var M=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return a||M.length>0?ee(A,R,M):J(A,R)}for(var G=function(){var R=S[P],M=R.children[0].value,de=lt(M);if(de){var se=M.split(`
`);se.forEach(function(ge,me){var te=o&&j.length+g,ie={type:"text",value:"".concat(ge,`
`)};if(me===0){var he=S.slice(I+1,P).concat(ue({children:[ie],className:R.properties.className})),fe=U(he,te);j.push(fe)}else if(me===se.length-1){var pe=S[P+1]&&S[P+1].children&&S[P+1].children[0],re={type:"text",value:"".concat(ge)};if(pe){var le=ue({children:[re],className:R.properties.className});S.splice(P+1,0,le)}else{var ae=[re],ce=U(ae,te,R.properties.className);j.push(ce)}}else{var ve=[ie],Ee=U(ve,te,R.properties.className);j.push(Ee)}}),I=P}P++};P<S.length;)G();if(I!==S.length-1){var Q=S.slice(I+1,S.length);if(Q&&Q.length){var w=o&&j.length+g,K=U(Q,w);j.push(K)}}return a?j:(Z=[]).concat.apply(Z,j)}function ut(t){var a=t.rows,s=t.stylesheet,o=t.useInlineStyles;return a.map(function(c,g){return Ie({node:c,stylesheet:s,useInlineStyles:o,key:"code-segement".concat(g)})})}function De(t){return t&&typeof t.highlightAuto<"u"}function dt(t){var a=t.astGenerator,s=t.language,o=t.code,c=t.defaultCodeValue;if(De(a)){var g=at(a,s);return s==="text"?{value:c,language:"text"}:g?a.highlight(s,o):a.highlightAuto(o)}try{return s&&s!=="text"?{value:a.highlight(o,s)}:{value:c}}catch{return{value:c}}}function mt(t,a){return function(o){var c=o.language,g=o.children,y=o.style,h=y===void 0?a:y,b=o.customStyle,Z=b===void 0?{}:b,S=o.codeTagProps,j=S===void 0?{className:c?"language-".concat(c):void 0,style:X(X({},h['code[class*="language-"]']),h['code[class*="language-'.concat(c,'"]')])}:S,I=o.useInlineStyles,P=I===void 0?!0:I,ee=o.showLineNumbers,J=ee===void 0?!1:ee,U=o.showInlineLineNumbers,G=U===void 0?!0:U,Q=o.startingLineNumber,w=Q===void 0?1:Q,K=o.lineNumberContainerStyle,A=o.lineNumberStyle,R=A===void 0?{}:A,M=o.wrapLines,de=o.wrapLongLines,se=de===void 0?!1:de,ge=o.lineProps,me=ge===void 0?{}:ge,te=o.renderer,ie=o.PreTag,he=ie===void 0?"pre":ie,fe=o.CodeTag,pe=fe===void 0?"code":fe,re=o.code,le=re===void 0?(Array.isArray(g)?g[0]:g)||"":re,ae=o.astGenerator,ce=(0,we.Z)(o,ot);ae=ae||t;var ve=J?e.createElement(gt,{containerStyle:K,codeStyle:j.style||{},numberStyle:R,startingLineNumber:w,codeString:le}):null,Ee=h.hljs||h['pre[class*="language-"]']||{backgroundColor:"#fff"},Me=De(ae)?"hljs":"prismjs",We=P?Object.assign({},ce,{style:Object.assign({},Ee,Z)}):Object.assign({},ce,{className:ce.className?"".concat(Me," ").concat(ce.className):Me,style:Object.assign({},Z)});if(se?j.style=X(X({},j.style),{},{whiteSpace:"pre-wrap"}):j.style=X(X({},j.style),{},{whiteSpace:"pre"}),!ae)return e.createElement(he,We,ve,e.createElement(pe,j,le));(M===void 0&&te||se)&&(M=!0),te=te||ut;var $e=[{type:"text",value:le}],Le=dt({astGenerator:ae,language:c,code:le,defaultCodeValue:$e});Le.language===null&&(Le.value=$e);var Et=Le.value.length+w,Ct=rt(Le,M,me,J,G,w,Et,R,se);return e.createElement(he,We,e.createElement(pe,j,!G&&ve,te({rows:Ct,stylesheet:h,useInlineStyles:P})))}}const ht={hljs:{display:"block",overflowX:"auto",padding:"0.5em",background:"#F0F0F0",color:"#444"},"hljs-subst":{color:"#444"},"hljs-comment":{color:"#888888"},"hljs-keyword":{fontWeight:"bold"},"hljs-attribute":{fontWeight:"bold"},"hljs-selector-tag":{fontWeight:"bold"},"hljs-meta-keyword":{fontWeight:"bold"},"hljs-doctag":{fontWeight:"bold"},"hljs-name":{fontWeight:"bold"},"hljs-type":{color:"#880000"},"hljs-string":{color:"#880000"},"hljs-number":{color:"#880000"},"hljs-selector-id":{color:"#880000"},"hljs-selector-class":{color:"#880000"},"hljs-quote":{color:"#880000"},"hljs-template-tag":{color:"#880000"},"hljs-deletion":{color:"#880000"},"hljs-title":{color:"#880000",fontWeight:"bold"},"hljs-section":{color:"#880000",fontWeight:"bold"},"hljs-regexp":{color:"#BC6060"},"hljs-symbol":{color:"#BC6060"},"hljs-variable":{color:"#BC6060"},"hljs-template-variable":{color:"#BC6060"},"hljs-link":{color:"#BC6060"},"hljs-selector-attr":{color:"#BC6060"},"hljs-selector-pseudo":{color:"#BC6060"},"hljs-literal":{color:"#78A960"},"hljs-built_in":{color:"#397300"},"hljs-bullet":{color:"#397300"},"hljs-code":{color:"#397300"},"hljs-addition":{color:"#397300"},"hljs-meta":{color:"#1f7199"},"hljs-meta-string":{color:"#4d99bf"},"hljs-emphasis":{fontStyle:"italic"},"hljs-strong":{fontWeight:"bold"}};var ft=n(26912),pt=n.n(ft);const vt=["1c","abnf","accesslog","actionscript","ada","angelscript","apache","applescript","arcade","arduino","armasm","asciidoc","aspectj","autohotkey","autoit","avrasm","awk","axapta","bash","basic","bnf","brainfuck","c-like","c","cal","capnproto","ceylon","clean","clojure-repl","clojure","cmake","coffeescript","coq","cos","cpp","crmsh","crystal","csharp","csp","css","d","dart","delphi","diff","django","dns","dockerfile","dos","dsconfig","dts","dust","ebnf","elixir","elm","erb","erlang-repl","erlang","excel","fix","flix","fortran","fsharp","gams","gauss","gcode","gherkin","glsl","gml","go","golo","gradle","groovy","haml","handlebars","haskell","haxe","hsp","htmlbars","http","hy","inform7","ini","irpf90","isbl","java","javascript","jboss-cli","json","julia-repl","julia","kotlin","lasso","latex","ldif","leaf","less","lisp","livecodeserver","livescript","llvm","lsl","lua","makefile","markdown","mathematica","matlab","maxima","mel","mercury","mipsasm","mizar","mojolicious","monkey","moonscript","n1ql","nginx","nim","nix","node-repl","nsis","objectivec","ocaml","openscad","oxygene","parser3","perl","pf","pgsql","php-template","php","plaintext","pony","powershell","processing","profile","prolog","properties","protobuf","puppet","purebasic","python-repl","python","q","qml","r","reasonml","rib","roboconf","routeros","rsl","ruby","ruleslanguage","rust","sas","scala","scheme","scilab","scss","shell","smali","smalltalk","sml","sqf","sql","sql_more","stan","stata","step21","stylus","subunit","swift","taggerscript","tap","tcl","thrift","tp","twig","typescript","vala","vbnet","vbscript-html","vbscript","verilog","vhdl","vim","x86asm","xl","xml","xquery","yaml","zephir"];var be=mt(pt(),ht);be.supportedLanguages=vt;const je=be,xe={hljs:{display:"block",overflowX:"auto",padding:"0.5em",background:"#2b2b2b",color:"#bababa"},"hljs-strong":{color:"#a8a8a2"},"hljs-emphasis":{color:"#a8a8a2",fontStyle:"italic"},"hljs-bullet":{color:"#6896ba"},"hljs-quote":{color:"#6896ba"},"hljs-link":{color:"#6896ba"},"hljs-number":{color:"#6896ba"},"hljs-regexp":{color:"#6896ba"},"hljs-literal":{color:"#6896ba"},"hljs-code":{color:"#a6e22e"},"hljs-selector-class":{color:"#a6e22e"},"hljs-keyword":{color:"#cb7832"},"hljs-selector-tag":{color:"#cb7832"},"hljs-section":{color:"#cb7832"},"hljs-attribute":{color:"#cb7832"},"hljs-name":{color:"#cb7832"},"hljs-variable":{color:"#cb7832"},"hljs-params":{color:"#b9b9b9"},"hljs-string":{color:"#6a8759"},"hljs-subst":{color:"#e0c46c"},"hljs-type":{color:"#e0c46c"},"hljs-built_in":{color:"#e0c46c"},"hljs-builtin-name":{color:"#e0c46c"},"hljs-symbol":{color:"#e0c46c"},"hljs-selector-id":{color:"#e0c46c"},"hljs-selector-attr":{color:"#e0c46c"},"hljs-selector-pseudo":{color:"#e0c46c"},"hljs-template-tag":{color:"#e0c46c"},"hljs-template-variable":{color:"#e0c46c"},"hljs-addition":{color:"#e0c46c"},"hljs-comment":{color:"#7f7f7f"},"hljs-deletion":{color:"#7f7f7f"},"hljs-meta":{color:"#7f7f7f"}},Lt=({isOpen:t,onClose:a})=>e.createElement(e.Fragment,null,t&&e.createElement(Ce.P,{onClose:()=>a(!t),labelledBy:"title"},e.createElement(Ne.x,null,e.createElement(H.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title-api-integration"},"API Integration")),e.createElement(Se.f,null,e.createElement(H.Z,{variant:"omega"},"1. Goto Settings -> Users & Permissions plugin -> Roles and enable strapi chatGPT endpoint for a role."),e.createElement(m.x,{paddingTop:6,paddingBottom:6},e.createElement(O.i,null)),e.createElement(H.Z,{variant:"omega"},"Sample request"),e.createElement("br",null),e.createElement(je,{language:"bash",style:xe,customStyle:{borderRadius:"12px",lineHeight:"1.5rem"}},`curl --location --request POST '/api/strapi-chatgpt/prompt' \\
                                --header 'Content-Type: application/json' \\
                                --header 'Authorization: Bearer YOUR_STRAPI_AUTH_TOKEN' \\
                                --data-raw '{"prompt": "Test prompt?"}'`),e.createElement(m.x,{paddingTop:6,paddingBottom:6},e.createElement(O.i,null)),e.createElement(H.Z,{variant:"omega"},"Sample request with additional OpenAi params"),e.createElement("br",null),e.createElement(je,{language:"bash",style:xe,customStyle:{borderRadius:"12px",lineHeight:"1.5rem"}},`curl --location --request POST '/api/strapi-chatgpt/prompt' \\
                                --header 'Content-Type: application/json' \\
                                --header 'Authorization: Bearer YOUR_STRAPI_AUTH_TOKEN' \\
                                --data-raw '{"prompt": "Test prompt?",
                                                        "model": "text-davinci-003",
                                                        "max_tokens": 100,
                                                        "temperature": 0.7,
                                                        "top_p": 1,
                                                        "frequency_penalty": 0,
                                                        "presence_penalty": 0,
                                                        "stop": ["\\n"] }'`),e.createElement(m.x,{paddingTop:6,paddingBottom:6},e.createElement(O.i,null)),e.createElement(H.Z,{variant:"omega"},"Sample response"),e.createElement("br",null),e.createElement(je,{language:"json",style:xe,customStyle:{borderRadius:"12px",lineHeight:"1.5rem"}},'{"response": "Sample response"}')))),yt=()=>{const{formatMessage:t}=(0,W.Z)(),[a,s]=(0,e.useState)(""),[o,c]=(0,e.useState)(""),[g,y]=(0,e.useState)([]),[h,b]=(0,e.useState)(!1),Z=(0,e.useRef)(null),[S,j]=(0,e.useState)(!1),[I,P]=(0,e.useState)(!1),[ee,J]=(0,e.useState)(!1),U=B.default.create({baseURL:"",headers:{Authorization:`Bearer ${d.auth.getToken()}`,"Content-Type":"application/json"}}),G=()=>{y([]),J(!1)},Q=K=>{c(!1),s(K.target.value)},w=async K=>{if(K.preventDefault(),c(!1),!a){c("Prompt is required");return}b(!0);const{data:A}=await U.post("/strapi-chatgpt/prompt",{prompt:a});if(A.error||!A.response){b(!1),c(A.error);return}y([...g,{you:a,bot:A.response}]),b(!1),s("")};return(0,e.useEffect)(()=>{Z.current&&Z.current.scrollIntoView({behavior:"smooth"})},[g]),e.createElement(L.A,null,e.createElement(x.q,{title:"Strapi ChatGPT"}),e.createElement(f.o,{"aria-busy":!1},e.createElement(Y.T,{title:"ChatGPT",subtitle:t({id:"chatgpt-headder",defaultMessage:"ChatGPT plugin for Strapi"})}),e.createElement(z.Z,{startActions:e.createElement(F.K,{horizontal:!0,gap:2},e.createElement(r.z,{variant:"secondary",startIcon:e.createElement(q.Z,null),onClick:()=>j(!0)},"Prompt"),e.createElement(r.z,{variant:"secondary",startIcon:e.createElement(_.Z,null),onClick:()=>P(!0)},"API Integration")),endActions:e.createElement(E.u,{description:"Clear chatGPT history",position:"left"},e.createElement(p.h,{disabled:h||g.length===0,onClick:()=>J(!0),icon:e.createElement(ne.Z,null)}))}),e.createElement(N.D,null,e.createElement(Qe,{isOpen:ee,setIsOpen:J,onConfirm:G}),e.createElement(l.Z,{style:{position:"relative"}},e.createElement(u.e,{style:{height:"64vh",overflowY:"scroll"}},e.createElement(v.a,null,e.createElement(Ue,{isLoading:h}),e.createElement("div",null,e.createElement("div",{style:{display:"flex",flexDirection:"column",height:"100%",overflow:"auto",justifyContent:"flex-end"}},g.map((K,A)=>e.createElement(e.Fragment,null,e.createElement(Ge,{key:A+"123",data:K}),e.createElement(m.x,{paddingTop:2,paddingBottom:4},e.createElement(O.i,null)))),e.createElement("div",{ref:Z})))))),e.createElement(m.x,null,e.createElement("form",{onSubmit:w},e.createElement(D.r,{gap:2,paddingTop:4},e.createElement($.P,{col:10},e.createElement(k.o,{id:"chatInput",placeholder:"Enter your prompt here","aria-label":"Content",name:"content",error:o,onChange:Q,value:a,disabled:h,onpaste:K=>{K.preventDefault(),c(!1)}})),e.createElement($.P,{col:2},e.createElement(r.z,{fullWidth:!0,size:"L",startIcon:e.createElement(He.Z,null),type:"submit",loading:h},"Send")))))),e.createElement(ze,{isOpen:S,onClose:()=>j(!1)}),e.createElement(Lt,{isOpen:I,onClose:()=>P(!1)})))},jt=()=>e.createElement(yt,null),xt=()=>e.createElement("div",null,e.createElement(i.rs,null,e.createElement(i.AW,{path:`/plugins/${T.Z}`,component:jt,exact:!0}),e.createElement(i.AW,{component:d.NotFound})))},21102:(V,C,n)=>{"use strict";var e=n(46291),i=d(Error);V.exports=i,i.eval=d(EvalError),i.range=d(RangeError),i.reference=d(ReferenceError),i.syntax=d(SyntaxError),i.type=d(TypeError),i.uri=d(URIError),i.create=d;function d(T){return W.displayName=T.displayName||T.name,W;function W(x){return x&&(x=e.apply(null,arguments)),new T(x)}}},46291:V=>{(function(){var C;C=V.exports=i,C.format=i,C.vsprintf=e,typeof console<"u"&&typeof console.log=="function"&&(C.printf=n);function n(){console.log(i.apply(null,arguments))}function e(d,T){return i.apply(null,[d].concat(T))}function i(d){for(var T=1,W=[].slice.call(arguments),x=0,B=d.length,L="",f,Y=!1,z,F,r=!1,E,p=function(){return W[T++]},N=function(){for(var l="";/\d/.test(d[x]);)l+=d[x++],f=d[x];return l.length>0?parseInt(l):null};x<B;++x)if(f=d[x],Y)switch(Y=!1,f=="."?(r=!1,f=d[++x]):f=="0"&&d[x+1]=="."?(r=!0,x+=2,f=d[x]):r=!0,E=N(),f){case"b":L+=parseInt(p(),10).toString(2);break;case"c":z=p(),typeof z=="string"||z instanceof String?L+=z:L+=String.fromCharCode(parseInt(z,10));break;case"d":L+=parseInt(p(),10);break;case"f":F=String(parseFloat(p()).toFixed(E||6)),L+=r?F:F.replace(/^0/,"");break;case"j":L+=JSON.stringify(p());break;case"o":L+="0"+parseInt(p(),10).toString(8);break;case"s":L+=p();break;case"x":L+="0x"+parseInt(p(),10).toString(16);break;case"X":L+="0x"+parseInt(p(),10).toString(16).toUpperCase();break;default:L+=f;break}else f==="%"?Y=!0:L+=f;return L}})()},26912:(V,C,n)=>{"use strict";var e=n(96470);V.exports=e,e.registerLanguage("1c",n(73870)),e.registerLanguage("abnf",n(1122)),e.registerLanguage("accesslog",n(63074)),e.registerLanguage("actionscript",n(39696)),e.registerLanguage("ada",n(19389)),e.registerLanguage("angelscript",n(46147)),e.registerLanguage("apache",n(96936)),e.registerLanguage("applescript",n(5460)),e.registerLanguage("arcade",n(43178)),e.registerLanguage("arduino",n(1232)),e.registerLanguage("armasm",n(71196)),e.registerLanguage("xml",n(42157)),e.registerLanguage("asciidoc",n(90630)),e.registerLanguage("aspectj",n(25044)),e.registerLanguage("autohotkey",n(67130)),e.registerLanguage("autoit",n(75039)),e.registerLanguage("avrasm",n(18324)),e.registerLanguage("awk",n(40070)),e.registerLanguage("axapta",n(80149)),e.registerLanguage("bash",n(61519)),e.registerLanguage("basic",n(56827)),e.registerLanguage("bnf",n(78349)),e.registerLanguage("brainfuck",n(44536)),e.registerLanguage("c-like",n(58212)),e.registerLanguage("c",n(25745)),e.registerLanguage("cal",n(45041)),e.registerLanguage("capnproto",n(51446)),e.registerLanguage("ceylon",n(1795)),e.registerLanguage("clean",n(82280)),e.registerLanguage("clojure",n(36134)),e.registerLanguage("clojure-repl",n(36746)),e.registerLanguage("cmake",n(71422)),e.registerLanguage("coffeescript",n(6691)),e.registerLanguage("coq",n(73621)),e.registerLanguage("cos",n(69586)),e.registerLanguage("cpp",n(74006)),e.registerLanguage("crmsh",n(37641)),e.registerLanguage("crystal",n(91139)),e.registerLanguage("csharp",n(681)),e.registerLanguage("csp",n(60530)),e.registerLanguage("css",n(68914)),e.registerLanguage("d",n(89968)),e.registerLanguage("markdown",n(93839)),e.registerLanguage("dart",n(65778)),e.registerLanguage("delphi",n(48008)),e.registerLanguage("diff",n(91833)),e.registerLanguage("django",n(45253)),e.registerLanguage("dns",n(65594)),e.registerLanguage("dockerfile",n(27055)),e.registerLanguage("dos",n(85215)),e.registerLanguage("dsconfig",n(71524)),e.registerLanguage("dts",n(29702)),e.registerLanguage("dust",n(27115)),e.registerLanguage("ebnf",n(26254)),e.registerLanguage("elixir",n(27204)),e.registerLanguage("elm",n(58259)),e.registerLanguage("ruby",n(58473)),e.registerLanguage("erb",n(328)),e.registerLanguage("erlang-repl",n(27670)),e.registerLanguage("erlang",n(87489)),e.registerLanguage("excel",n(94369)),e.registerLanguage("fix",n(51377)),e.registerLanguage("flix",n(72041)),e.registerLanguage("fortran",n(28362)),e.registerLanguage("fsharp",n(34639)),e.registerLanguage("gams",n(9392)),e.registerLanguage("gauss",n(44859)),e.registerLanguage("gcode",n(38036)),e.registerLanguage("gherkin",n(65962)),e.registerLanguage("glsl",n(85243)),e.registerLanguage("gml",n(94807)),e.registerLanguage("go",n(33048)),e.registerLanguage("golo",n(87140)),e.registerLanguage("gradle",n(88267)),e.registerLanguage("groovy",n(12175)),e.registerLanguage("haml",n(25268)),e.registerLanguage("handlebars",n(83512)),e.registerLanguage("haskell",n(56703)),e.registerLanguage("haxe",n(429)),e.registerLanguage("hsp",n(90793)),e.registerLanguage("htmlbars",n(93202)),e.registerLanguage("http",n(30786)),e.registerLanguage("hy",n(35359)),e.registerLanguage("inform7",n(68968)),e.registerLanguage("ini",n(29560)),e.registerLanguage("irpf90",n(10811)),e.registerLanguage("isbl",n(15044)),e.registerLanguage("java",n(37721)),e.registerLanguage("javascript",n(96344)),e.registerLanguage("jboss-cli",n(40412)),e.registerLanguage("json",n(82026)),e.registerLanguage("julia",n(47337)),e.registerLanguage("julia-repl",n(79989)),e.registerLanguage("kotlin",n(48099)),e.registerLanguage("lasso",n(54082)),e.registerLanguage("latex",n(850)),e.registerLanguage("ldif",n(33310)),e.registerLanguage("leaf",n(2774)),e.registerLanguage("less",n(23874)),e.registerLanguage("lisp",n(17169)),e.registerLanguage("livecodeserver",n(63909)),e.registerLanguage("livescript",n(39563)),e.registerLanguage("llvm",n(40119)),e.registerLanguage("lsl",n(12130)),e.registerLanguage("lua",n(31067)),e.registerLanguage("makefile",n(30465)),e.registerLanguage("mathematica",n(61083)),e.registerLanguage("matlab",n(41304)),e.registerLanguage("maxima",n(46747)),e.registerLanguage("mel",n(70483)),e.registerLanguage("mercury",n(53038)),e.registerLanguage("mipsasm",n(45802)),e.registerLanguage("mizar",n(90918)),e.registerLanguage("perl",n(78529)),e.registerLanguage("mojolicious",n(92210)),e.registerLanguage("monkey",n(97350)),e.registerLanguage("moonscript",n(18390)),e.registerLanguage("n1ql",n(77669)),e.registerLanguage("nginx",n(42387)),e.registerLanguage("nim",n(35587)),e.registerLanguage("nix",n(88170)),e.registerLanguage("node-repl",n(93668)),e.registerLanguage("nsis",n(29269)),e.registerLanguage("objectivec",n(61896)),e.registerLanguage("ocaml",n(78550)),e.registerLanguage("openscad",n(41078)),e.registerLanguage("oxygene",n(89015)),e.registerLanguage("parser3",n(6247)),e.registerLanguage("pf",n(15994)),e.registerLanguage("pgsql",n(86509)),e.registerLanguage("php",n(73306)),e.registerLanguage("php-template",n(75377)),e.registerLanguage("plaintext",n(76572)),e.registerLanguage("pony",n(28422)),e.registerLanguage("powershell",n(66336)),e.registerLanguage("processing",n(44148)),e.registerLanguage("profile",n(9129)),e.registerLanguage("prolog",n(58074)),e.registerLanguage("properties",n(81245)),e.registerLanguage("protobuf",n(3306)),e.registerLanguage("puppet",n(73736)),e.registerLanguage("purebasic",n(34055)),e.registerLanguage("python",n(30308)),e.registerLanguage("python-repl",n(93725)),e.registerLanguage("q",n(32989)),e.registerLanguage("qml",n(63259)),e.registerLanguage("r",n(30806)),e.registerLanguage("reasonml",n(82050)),e.registerLanguage("rib",n(44613)),e.registerLanguage("roboconf",n(33176)),e.registerLanguage("routeros",n(25096)),e.registerLanguage("rsl",n(61025)),e.registerLanguage("ruleslanguage",n(65506)),e.registerLanguage("rust",n(11374)),e.registerLanguage("sas",n(35457)),e.registerLanguage("scala",n(5818)),e.registerLanguage("scheme",n(10336)),e.registerLanguage("scilab",n(47691)),e.registerLanguage("scss",n(36632)),e.registerLanguage("shell",n(19514)),e.registerLanguage("smali",n(60522)),e.registerLanguage("smalltalk",n(75030)),e.registerLanguage("sml",n(79664)),e.registerLanguage("sqf",n(85168)),e.registerLanguage("sql_more",n(83224)),e.registerLanguage("sql",n(97181)),e.registerLanguage("stan",n(53413)),e.registerLanguage("stata",n(92417)),e.registerLanguage("step21",n(52706)),e.registerLanguage("stylus",n(82054)),e.registerLanguage("subunit",n(36886)),e.registerLanguage("swift",n(26306)),e.registerLanguage("taggerscript",n(54858)),e.registerLanguage("yaml",n(54587)),e.registerLanguage("tap",n(49113)),e.registerLanguage("tcl",n(74562)),e.registerLanguage("thrift",n(55063)),e.registerLanguage("tp",n(27092)),e.registerLanguage("twig",n(35488)),e.registerLanguage("typescript",n(91533)),e.registerLanguage("vala",n(65431)),e.registerLanguage("vbnet",n(86479)),e.registerLanguage("vbscript",n(80824)),e.registerLanguage("vbscript-html",n(3316)),e.registerLanguage("verilog",n(49115)),e.registerLanguage("vhdl",n(53260)),e.registerLanguage("vim",n(5298)),e.registerLanguage("x86asm",n(43377)),e.registerLanguage("xl",n(731)),e.registerLanguage("xquery",n(46629)),e.registerLanguage("zephir",n(58737))},96470:(V,C,n)=>{"use strict";var e=n(47802),i=n(21102);C.highlight=T,C.highlightAuto=W,C.registerLanguage=x,C.listLanguages=B,C.registerAlias=L,f.prototype.addText=F,f.prototype.addKeyword=Y,f.prototype.addSublanguage=z,f.prototype.openNode=r,f.prototype.closeNode=E,f.prototype.closeAllNodes=N,f.prototype.finalize=N,f.prototype.toHTML=p;var d="hljs-";function T(l,u,v){var m=e.configure({}),O=v||{},D=O.prefix,$;if(typeof l!="string")throw i("Expected `string` for name, got `%s`",l);if(!e.getLanguage(l))throw i("Unknown language: `%s` is not registered",l);if(typeof u!="string")throw i("Expected `string` for value, got `%s`",u);if(D==null&&(D=d),e.configure({__emitter:f,classPrefix:D}),$=e.highlight(u,{language:l,ignoreIllegals:!0}),e.configure(m||{}),$.errorRaised)throw $.errorRaised;return{relevance:$.relevance,language:$.language,value:$.emitter.rootNode.children}}function W(l,u){var v=u||{},m=v.subset||e.listLanguages(),O=v.prefix,D=m.length,$=-1,k,q,_,ne;if(O==null&&(O=d),typeof l!="string")throw i("Expected `string` for value, got `%s`",l);for(q={relevance:0,language:null,value:[]},k={relevance:0,language:null,value:[]};++$<D;)ne=m[$],e.getLanguage(ne)&&(_=T(ne,l,u),_.language=ne,_.relevance>q.relevance&&(q=_),_.relevance>k.relevance&&(q=k,k=_));return q.language&&(k.secondBest=q),k}function x(l,u){e.registerLanguage(l,u)}function B(){return e.listLanguages()}function L(l,u){var v=l,m;u&&(v={},v[l]=u);for(m in v)e.registerAliases(v[m],{languageName:m})}function f(l){this.options=l,this.rootNode={children:[]},this.stack=[this.rootNode]}function Y(l,u){this.openNode(u),this.addText(l),this.closeNode()}function z(l,u){var v=this.stack,m=v[v.length-1],O=l.rootNode.children,D=u?{type:"element",tagName:"span",properties:{className:[u]},children:O}:O;m.children=m.children.concat(D)}function F(l){var u=this.stack,v,m;l!==""&&(v=u[u.length-1],m=v.children[v.children.length-1],m&&m.type==="text"?m.value+=l:v.children.push({type:"text",value:l}))}function r(l){var u=this.stack,v=this.options.classPrefix+l,m=u[u.length-1],O={type:"element",tagName:"span",properties:{className:[v]},children:[]};m.children.push(O),u.push(O)}function E(){this.stack.pop()}function p(){return""}function N(){}},26789:(V,C,n)=>{"use strict";n.d(C,{D:()=>d});var e=n(2790),i=n(50781);const d=({children:T})=>(0,e.jsx)(i.x,{paddingLeft:10,paddingRight:10,children:T})},79371:(V,C,n)=>{"use strict";n.d(C,{T:()=>Y});var e=n(2790),i=n(53547),d=n(88972);const T=r=>{const E=(0,i.useRef)(null),[p,N]=(0,i.useState)(!0),l=([u])=>{N(u.isIntersecting)};return(0,i.useEffect)(()=>{const u=E.current,v=new IntersectionObserver(l,r);return u&&v.observe(E.current),()=>{u&&v.disconnect()}},[E,r]),[E,p]};var W=n(79698);const x=(r,E)=>{const p=(0,W.W)(E);(0,i.useLayoutEffect)(()=>{const N=new ResizeObserver(p);return Array.isArray(r)?r.forEach(l=>{l.current&&N.observe(l.current)}):r.current&&N.observe(r.current),()=>{N.disconnect()}},[r,p])};var B=n(50781),L=n(75878),f=n(78549);const Y=r=>{const E=(0,i.useRef)(null),[p,N]=(0,i.useState)(null),[l,u]=T({root:null,rootMargin:"0px",threshold:0});return x(l,()=>{l.current&&N(l.current.getBoundingClientRect())}),(0,i.useEffect)(()=>{E.current&&N(E.current.getBoundingClientRect())},[E]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:p?.height},ref:l,children:u&&(0,e.jsx)(F,{ref:E,...r})}),!u&&(0,e.jsx)(F,{...r,sticky:!0,width:p?.width})]})};Y.displayName="HeaderLayout";const z=(0,d.default)(B.x)`
  width: ${({width:r})=>r?`${r/16}rem`:void 0};
  z-index: ${({theme:r})=>r.zIndices[1]};
`,F=i.forwardRef(({navigationAction:r,primaryAction:E,secondaryAction:p,subtitle:N,title:l,sticky:u,width:v,...m},O)=>{const D=typeof N=="string";return u?(0,e.jsx)(z,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:v,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(L.k,{justifyContent:"space-between",children:[(0,e.jsxs)(L.k,{children:[r&&(0,e.jsx)(B.x,{paddingRight:3,children:r}),(0,e.jsxs)(B.x,{children:[(0,e.jsx)(f.Z,{variant:"beta",as:"h1",...m,children:l}),D?(0,e.jsx)(f.Z,{variant:"pi",textColor:"neutral600",children:N}):N]}),p?(0,e.jsx)(B.x,{paddingLeft:4,children:p}):null]}),(0,e.jsx)(L.k,{children:E?(0,e.jsx)(B.x,{paddingLeft:2,children:E}):void 0})]})}):(0,e.jsxs)(B.x,{ref:O,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:r?6:8,background:"neutral100","data-strapi-header":!0,children:[r?(0,e.jsx)(B.x,{paddingBottom:2,children:r}):null,(0,e.jsxs)(L.k,{justifyContent:"space-between",children:[(0,e.jsxs)(L.k,{minWidth:0,children:[(0,e.jsx)(f.Z,{as:"h1",variant:"alpha",...m,children:l}),p?(0,e.jsx)(B.x,{paddingLeft:4,children:p}):null]}),E]}),D?(0,e.jsx)(f.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:N}):N]})})},57713:(V,C,n)=>{"use strict";n.d(C,{o:()=>W});var e=n(2790),i=n(88972),d=n(50781);const T=(0,i.default)(d.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,W=({labelledBy:x="main-content-title",...B})=>(0,e.jsx)(T,{"aria-labelledby":x,as:"main",id:"main-content",tabIndex:-1,...B})}}]);