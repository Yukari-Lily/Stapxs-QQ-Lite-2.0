/*!
  * shared v10.0.5
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const qn=typeof window<"u",Zn=(e,t=!1)=>t?Symbol.for(e):Symbol(e),Nt=(e,t,n)=>Tt({l:e,k:t,s:n}),Tt=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),Y=e=>typeof e=="number"&&isFinite(e),gt=e=>Ce(e)==="[object Date]",Re=e=>Ce(e)==="[object RegExp]",ge=e=>k(e)&&Object.keys(e).length===0,Z=Object.assign,Ct=Object.create,W=(e=null)=>Ct(e);let Me;const we=()=>Me||(Me=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:W());function ve(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const St=Object.prototype.hasOwnProperty;function te(e,t){return St.call(e,t)}const H=Array.isArray,F=e=>typeof e=="function",I=e=>typeof e=="string",K=e=>typeof e=="boolean",R=e=>e!==null&&typeof e=="object",It=e=>R(e)&&F(e.then)&&F(e.catch),Be=Object.prototype.toString,Ce=e=>Be.call(e),k=e=>Ce(e)==="[object Object]",Ot=e=>e==null?"":H(e)||k(e)&&e.toString===Be?JSON.stringify(e,null,2):String(e);function Se(e,t=""){return e.reduce((n,s,i)=>i===0?n+s:n+t+s,"")}function At(e,t){typeof console<"u"&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}const oe=e=>!R(e)||H(e);function zn(e,t){if(oe(e)||oe(t))throw new Error("Invalid value");const n=[{src:e,des:t}];for(;n.length;){const{src:s,des:i}=n.pop();Object.keys(s).forEach(l=>{l!=="__proto__"&&(R(s[l])&&!R(i[l])&&(i[l]=Array.isArray(s[l])?[]:W()),oe(i[l])||oe(s[l])?i[l]=s[l]:n.push({src:s[l],des:i[l]}))})}}/*!
  * message-compiler v10.0.5
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */function bt(e,t,n){return{line:e,column:t,offset:n}}function pe(e,t,n){return{start:e,end:t}}const P={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16},yt=17;function Ie(e,t,n={}){const{domain:s,messages:i,args:l}=n,m=e,_=new SyntaxError(String(m));return _.code=e,t&&(_.location=t),_.domain=s,_}function Pt(e){throw e}const x=" ",kt="\r",$=`
`,Dt="\u2028",Rt="\u2029";function Mt(e){const t=e;let n=0,s=1,i=1,l=0;const m=O=>t[O]===kt&&t[O+1]===$,_=O=>t[O]===$,f=O=>t[O]===Rt,L=O=>t[O]===Dt,S=O=>m(O)||_(O)||f(O)||L(O),C=()=>n,N=()=>s,A=()=>i,y=()=>l,b=O=>m(O)||f(O)||L(O)?$:t[O],T=()=>b(n),c=()=>b(n+l);function d(){return l=0,S(n)&&(s++,i=0),m(n)&&n++,n++,i++,t[n]}function E(){return m(n+l)&&l++,l++,t[n+l]}function o(){n=0,s=1,i=1,l=0}function h(O=0){l=O}function p(){const O=n+l;for(;O!==n;)d();l=0}return{index:C,line:N,column:A,peekOffset:y,charAt:b,currentChar:T,currentPeek:c,next:d,peek:E,reset:o,resetPeek:h,skipToPeek:p}}const q=void 0,wt=".",Fe="'",vt="tokenizer";function Ft(e,t={}){const n=t.location!==!1,s=Mt(e),i=()=>s.index(),l=()=>bt(s.line(),s.column(),s.index()),m=l(),_=i(),f={currentType:13,offset:_,startLoc:m,endLoc:m,lastType:13,lastOffset:_,lastStartLoc:m,lastEndLoc:m,braceNest:0,inLinked:!1,text:""},L=()=>f,{onError:S}=t;function C(r,a,u,...g){const w=L();if(a.column+=u,a.offset+=u,S){const v=n?pe(w.startLoc,a):null,G=Ie(r,v,{domain:vt,args:g});S(G)}}function N(r,a,u){r.endLoc=l(),r.currentType=a;const g={type:a};return n&&(g.loc=pe(r.startLoc,r.endLoc)),u!=null&&(g.value=u),g}const A=r=>N(r,13);function y(r,a){return r.currentChar()===a?(r.next(),a):(C(P.EXPECTED_TOKEN,l(),0,a),"")}function b(r){let a="";for(;r.currentPeek()===x||r.currentPeek()===$;)a+=r.currentPeek(),r.peek();return a}function T(r){const a=b(r);return r.skipToPeek(),a}function c(r){if(r===q)return!1;const a=r.charCodeAt(0);return a>=97&&a<=122||a>=65&&a<=90||a===95}function d(r){if(r===q)return!1;const a=r.charCodeAt(0);return a>=48&&a<=57}function E(r,a){const{currentType:u}=a;if(u!==2)return!1;b(r);const g=c(r.currentPeek());return r.resetPeek(),g}function o(r,a){const{currentType:u}=a;if(u!==2)return!1;b(r);const g=r.currentPeek()==="-"?r.peek():r.currentPeek(),w=d(g);return r.resetPeek(),w}function h(r,a){const{currentType:u}=a;if(u!==2)return!1;b(r);const g=r.currentPeek()===Fe;return r.resetPeek(),g}function p(r,a){const{currentType:u}=a;if(u!==7)return!1;b(r);const g=r.currentPeek()===".";return r.resetPeek(),g}function O(r,a){const{currentType:u}=a;if(u!==8)return!1;b(r);const g=c(r.currentPeek());return r.resetPeek(),g}function D(r,a){const{currentType:u}=a;if(!(u===7||u===11))return!1;b(r);const g=r.currentPeek()===":";return r.resetPeek(),g}function M(r,a){const{currentType:u}=a;if(u!==9)return!1;const g=()=>{const v=r.currentPeek();return v==="{"?c(r.peek()):v==="@"||v==="|"||v===":"||v==="."||v===x||!v?!1:v===$?(r.peek(),g()):B(r,!1)},w=g();return r.resetPeek(),w}function V(r){b(r);const a=r.currentPeek()==="|";return r.resetPeek(),a}function B(r,a=!0){const u=(w=!1,v="")=>{const G=r.currentPeek();return G==="{"||G==="@"||!G?w:G==="|"?!(v===x||v===$):G===x?(r.peek(),u(!0,x)):G===$?(r.peek(),u(!0,$)):!0},g=u();return a&&r.resetPeek(),g}function U(r,a){const u=r.currentChar();return u===q?q:a(u)?(r.next(),u):null}function ce(r){const a=r.charCodeAt(0);return a>=97&&a<=122||a>=65&&a<=90||a>=48&&a<=57||a===95||a===36}function tt(r){return U(r,ce)}function nt(r){const a=r.charCodeAt(0);return a>=97&&a<=122||a>=65&&a<=90||a>=48&&a<=57||a===95||a===36||a===45}function rt(r){return U(r,nt)}function st(r){const a=r.charCodeAt(0);return a>=48&&a<=57}function at(r){return U(r,st)}function lt(r){const a=r.charCodeAt(0);return a>=48&&a<=57||a>=65&&a<=70||a>=97&&a<=102}function ct(r){return U(r,lt)}function ke(r){let a="",u="";for(;a=at(r);)u+=a;return u}function it(r){let a="";for(;;){const u=r.currentChar();if(u==="{"||u==="}"||u==="@"||u==="|"||!u)break;if(u===x||u===$)if(B(r))a+=u,r.next();else{if(V(r))break;a+=u,r.next()}else a+=u,r.next()}return a}function ot(r){T(r);let a="",u="";for(;a=rt(r);)u+=a;return r.currentChar()===q&&C(P.UNTERMINATED_CLOSING_BRACE,l(),0),u}function ut(r){T(r);let a="";return r.currentChar()==="-"?(r.next(),a+=`-${ke(r)}`):a+=ke(r),r.currentChar()===q&&C(P.UNTERMINATED_CLOSING_BRACE,l(),0),a}function ft(r){return r!==Fe&&r!==$}function dt(r){T(r),y(r,"'");let a="",u="";for(;a=U(r,ft);)a==="\\"?u+=mt(r):u+=a;const g=r.currentChar();return g===$||g===q?(C(P.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,l(),0),g===$&&(r.next(),y(r,"'")),u):(y(r,"'"),u)}function mt(r){const a=r.currentChar();switch(a){case"\\":case"'":return r.next(),`\\${a}`;case"u":return De(r,a,4);case"U":return De(r,a,6);default:return C(P.UNKNOWN_ESCAPE_SEQUENCE,l(),0,a),""}}function De(r,a,u){y(r,a);let g="";for(let w=0;w<u;w++){const v=ct(r);if(!v){C(P.INVALID_UNICODE_ESCAPE_SEQUENCE,l(),0,`\\${a}${g}${r.currentChar()}`);break}g+=v}return`\\${a}${g}`}function _t(r){return r!=="{"&&r!=="}"&&r!==x&&r!==$}function Et(r){T(r);let a="",u="";for(;a=U(r,_t);)u+=a;return u}function Lt(r){let a="",u="";for(;a=tt(r);)u+=a;return u}function ht(r){const a=u=>{const g=r.currentChar();return g==="{"||g==="@"||g==="|"||g==="("||g===")"||!g||g===x?u:(u+=g,r.next(),a(u))};return a("")}function de(r){T(r);const a=y(r,"|");return T(r),a}function me(r,a){let u=null;switch(r.currentChar()){case"{":return a.braceNest>=1&&C(P.NOT_ALLOW_NEST_PLACEHOLDER,l(),0),r.next(),u=N(a,2,"{"),T(r),a.braceNest++,u;case"}":return a.braceNest>0&&a.currentType===2&&C(P.EMPTY_PLACEHOLDER,l(),0),r.next(),u=N(a,3,"}"),a.braceNest--,a.braceNest>0&&T(r),a.inLinked&&a.braceNest===0&&(a.inLinked=!1),u;case"@":return a.braceNest>0&&C(P.UNTERMINATED_CLOSING_BRACE,l(),0),u=ie(r,a)||A(a),a.braceNest=0,u;default:{let w=!0,v=!0,G=!0;if(V(r))return a.braceNest>0&&C(P.UNTERMINATED_CLOSING_BRACE,l(),0),u=N(a,1,de(r)),a.braceNest=0,a.inLinked=!1,u;if(a.braceNest>0&&(a.currentType===4||a.currentType===5||a.currentType===6))return C(P.UNTERMINATED_CLOSING_BRACE,l(),0),a.braceNest=0,_e(r,a);if(w=E(r,a))return u=N(a,4,ot(r)),T(r),u;if(v=o(r,a))return u=N(a,5,ut(r)),T(r),u;if(G=h(r,a))return u=N(a,6,dt(r)),T(r),u;if(!w&&!v&&!G)return u=N(a,12,Et(r)),C(P.INVALID_TOKEN_IN_PLACEHOLDER,l(),0,u.value),T(r),u;break}}return u}function ie(r,a){const{currentType:u}=a;let g=null;const w=r.currentChar();switch((u===7||u===8||u===11||u===9)&&(w===$||w===x)&&C(P.INVALID_LINKED_FORMAT,l(),0),w){case"@":return r.next(),g=N(a,7,"@"),a.inLinked=!0,g;case".":return T(r),r.next(),N(a,8,".");case":":return T(r),r.next(),N(a,9,":");default:return V(r)?(g=N(a,1,de(r)),a.braceNest=0,a.inLinked=!1,g):p(r,a)||D(r,a)?(T(r),ie(r,a)):O(r,a)?(T(r),N(a,11,Lt(r))):M(r,a)?(T(r),w==="{"?me(r,a)||g:N(a,10,ht(r))):(u===7&&C(P.INVALID_LINKED_FORMAT,l(),0),a.braceNest=0,a.inLinked=!1,_e(r,a))}}function _e(r,a){let u={type:13};if(a.braceNest>0)return me(r,a)||A(a);if(a.inLinked)return ie(r,a)||A(a);switch(r.currentChar()){case"{":return me(r,a)||A(a);case"}":return C(P.UNBALANCED_CLOSING_BRACE,l(),0),r.next(),N(a,3,"}");case"@":return ie(r,a)||A(a);default:{if(V(r))return u=N(a,1,de(r)),a.braceNest=0,a.inLinked=!1,u;if(B(r))return N(a,0,it(r));break}}return u}function pt(){const{currentType:r,offset:a,startLoc:u,endLoc:g}=f;return f.lastType=r,f.lastOffset=a,f.lastStartLoc=u,f.lastEndLoc=g,f.offset=i(),f.startLoc=l(),s.currentChar()===q?N(f,13):_e(s,f)}return{nextToken:pt,currentOffset:i,currentPosition:l,context:L}}const Ut="parser",Wt=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function $t(e,t,n){switch(e){case"\\\\":return"\\";case"\\'":return"'";default:{const s=parseInt(t||n,16);return s<=55295||s>=57344?String.fromCodePoint(s):"�"}}}function Yt(e={}){const t=e.location!==!1,{onError:n}=e;function s(c,d,E,o,...h){const p=c.currentPosition();if(p.offset+=o,p.column+=o,n){const O=t?pe(E,p):null,D=Ie(d,O,{domain:Ut,args:h});n(D)}}function i(c,d,E){const o={type:c};return t&&(o.start=d,o.end=d,o.loc={start:E,end:E}),o}function l(c,d,E,o){t&&(c.end=d,c.loc&&(c.loc.end=E))}function m(c,d){const E=c.context(),o=i(3,E.offset,E.startLoc);return o.value=d,l(o,c.currentOffset(),c.currentPosition()),o}function _(c,d){const E=c.context(),{lastOffset:o,lastStartLoc:h}=E,p=i(5,o,h);return p.index=parseInt(d,10),c.nextToken(),l(p,c.currentOffset(),c.currentPosition()),p}function f(c,d){const E=c.context(),{lastOffset:o,lastStartLoc:h}=E,p=i(4,o,h);return p.key=d,c.nextToken(),l(p,c.currentOffset(),c.currentPosition()),p}function L(c,d){const E=c.context(),{lastOffset:o,lastStartLoc:h}=E,p=i(9,o,h);return p.value=d.replace(Wt,$t),c.nextToken(),l(p,c.currentOffset(),c.currentPosition()),p}function S(c){const d=c.nextToken(),E=c.context(),{lastOffset:o,lastStartLoc:h}=E,p=i(8,o,h);return d.type!==11?(s(c,P.UNEXPECTED_EMPTY_LINKED_MODIFIER,E.lastStartLoc,0),p.value="",l(p,o,h),{nextConsumeToken:d,node:p}):(d.value==null&&s(c,P.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,j(d)),p.value=d.value||"",l(p,c.currentOffset(),c.currentPosition()),{node:p})}function C(c,d){const E=c.context(),o=i(7,E.offset,E.startLoc);return o.value=d,l(o,c.currentOffset(),c.currentPosition()),o}function N(c){const d=c.context(),E=i(6,d.offset,d.startLoc);let o=c.nextToken();if(o.type===8){const h=S(c);E.modifier=h.node,o=h.nextConsumeToken||c.nextToken()}switch(o.type!==9&&s(c,P.UNEXPECTED_LEXICAL_ANALYSIS,d.lastStartLoc,0,j(o)),o=c.nextToken(),o.type===2&&(o=c.nextToken()),o.type){case 10:o.value==null&&s(c,P.UNEXPECTED_LEXICAL_ANALYSIS,d.lastStartLoc,0,j(o)),E.key=C(c,o.value||"");break;case 4:o.value==null&&s(c,P.UNEXPECTED_LEXICAL_ANALYSIS,d.lastStartLoc,0,j(o)),E.key=f(c,o.value||"");break;case 5:o.value==null&&s(c,P.UNEXPECTED_LEXICAL_ANALYSIS,d.lastStartLoc,0,j(o)),E.key=_(c,o.value||"");break;case 6:o.value==null&&s(c,P.UNEXPECTED_LEXICAL_ANALYSIS,d.lastStartLoc,0,j(o)),E.key=L(c,o.value||"");break;default:{s(c,P.UNEXPECTED_EMPTY_LINKED_KEY,d.lastStartLoc,0);const h=c.context(),p=i(7,h.offset,h.startLoc);return p.value="",l(p,h.offset,h.startLoc),E.key=p,l(E,h.offset,h.startLoc),{nextConsumeToken:o,node:E}}}return l(E,c.currentOffset(),c.currentPosition()),{node:E}}function A(c){const d=c.context(),E=d.currentType===1?c.currentOffset():d.offset,o=d.currentType===1?d.endLoc:d.startLoc,h=i(2,E,o);h.items=[];let p=null;do{const M=p||c.nextToken();switch(p=null,M.type){case 0:M.value==null&&s(c,P.UNEXPECTED_LEXICAL_ANALYSIS,d.lastStartLoc,0,j(M)),h.items.push(m(c,M.value||""));break;case 5:M.value==null&&s(c,P.UNEXPECTED_LEXICAL_ANALYSIS,d.lastStartLoc,0,j(M)),h.items.push(_(c,M.value||""));break;case 4:M.value==null&&s(c,P.UNEXPECTED_LEXICAL_ANALYSIS,d.lastStartLoc,0,j(M)),h.items.push(f(c,M.value||""));break;case 6:M.value==null&&s(c,P.UNEXPECTED_LEXICAL_ANALYSIS,d.lastStartLoc,0,j(M)),h.items.push(L(c,M.value||""));break;case 7:{const V=N(c);h.items.push(V.node),p=V.nextConsumeToken||null;break}}}while(d.currentType!==13&&d.currentType!==1);const O=d.currentType===1?d.lastOffset:c.currentOffset(),D=d.currentType===1?d.lastEndLoc:c.currentPosition();return l(h,O,D),h}function y(c,d,E,o){const h=c.context();let p=o.items.length===0;const O=i(1,d,E);O.cases=[],O.cases.push(o);do{const D=A(c);p||(p=D.items.length===0),O.cases.push(D)}while(h.currentType!==13);return p&&s(c,P.MUST_HAVE_MESSAGES_IN_PLURAL,E,0),l(O,c.currentOffset(),c.currentPosition()),O}function b(c){const d=c.context(),{offset:E,startLoc:o}=d,h=A(c);return d.currentType===13?h:y(c,E,o,h)}function T(c){const d=Ft(c,Z({},e)),E=d.context(),o=i(0,E.offset,E.startLoc);return t&&o.loc&&(o.loc.source=c),o.body=b(d),e.onCacheKey&&(o.cacheKey=e.onCacheKey(c)),E.currentType!==13&&s(d,P.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,c[E.offset]||""),l(o,d.currentOffset(),d.currentPosition()),o}return{parse:T}}function j(e){if(e.type===13)return"EOF";const t=(e.value||"").replace(/\r?\n/gu,"\\n");return t.length>10?t.slice(0,9)+"…":t}function Kt(e,t={}){const n={ast:e,helpers:new Set};return{context:()=>n,helper:l=>(n.helpers.add(l),l)}}function Ue(e,t){for(let n=0;n<e.length;n++)Oe(e[n],t)}function Oe(e,t){switch(e.type){case 1:Ue(e.cases,t),t.helper("plural");break;case 2:Ue(e.items,t);break;case 6:{Oe(e.key,t),t.helper("linked"),t.helper("type");break}case 5:t.helper("interpolate"),t.helper("list");break;case 4:t.helper("interpolate"),t.helper("named");break}}function Vt(e,t={}){const n=Kt(e);n.helper("normalize"),e.body&&Oe(e.body,n);const s=n.context();e.helpers=Array.from(s.helpers)}function Gt(e){const t=e.body;return t.type===2?We(t):t.cases.forEach(n=>We(n)),e}function We(e){if(e.items.length===1){const t=e.items[0];(t.type===3||t.type===9)&&(e.static=t.value,delete t.value)}else{const t=[];for(let n=0;n<e.items.length;n++){const s=e.items[n];if(!(s.type===3||s.type===9)||s.value==null)break;t.push(s.value)}if(t.length===e.items.length){e.static=Se(t);for(let n=0;n<e.items.length;n++){const s=e.items[n];(s.type===3||s.type===9)&&delete s.value}}}}function ne(e){switch(e.t=e.type,e.type){case 0:{const t=e;ne(t.body),t.b=t.body,delete t.body;break}case 1:{const t=e,n=t.cases;for(let s=0;s<n.length;s++)ne(n[s]);t.c=n,delete t.cases;break}case 2:{const t=e,n=t.items;for(let s=0;s<n.length;s++)ne(n[s]);t.i=n,delete t.items,t.static&&(t.s=t.static,delete t.static);break}case 3:case 9:case 8:case 7:{const t=e;t.value&&(t.v=t.value,delete t.value);break}case 6:{const t=e;ne(t.key),t.k=t.key,delete t.key,t.modifier&&(ne(t.modifier),t.m=t.modifier,delete t.modifier);break}case 5:{const t=e;t.i=t.index,delete t.index;break}case 4:{const t=e;t.k=t.key,delete t.key;break}}delete e.type}function Xt(e,t){const{sourceMap:n,filename:s,breakLineCode:i,needIndent:l}=t,m=t.location!==!1,_={filename:s,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:i,needIndent:l,indentLevel:0};m&&e.loc&&(_.source=e.loc.source);const f=()=>_;function L(T,c){_.code+=T}function S(T,c=!0){const d=c?i:"";L(l?d+"  ".repeat(T):d)}function C(T=!0){const c=++_.indentLevel;T&&S(c)}function N(T=!0){const c=--_.indentLevel;T&&S(c)}function A(){S(_.indentLevel)}return{context:f,push:L,indent:C,deindent:N,newline:A,helper:T=>`_${T}`,needIndent:()=>_.needIndent}}function Ht(e,t){const{helper:n}=e;e.push(`${n("linked")}(`),re(e,t.key),t.modifier?(e.push(", "),re(e,t.modifier),e.push(", _type")):e.push(", undefined, _type"),e.push(")")}function jt(e,t){const{helper:n,needIndent:s}=e;e.push(`${n("normalize")}([`),e.indent(s());const i=t.items.length;for(let l=0;l<i&&(re(e,t.items[l]),l!==i-1);l++)e.push(", ");e.deindent(s()),e.push("])")}function Bt(e,t){const{helper:n,needIndent:s}=e;if(t.cases.length>1){e.push(`${n("plural")}([`),e.indent(s());const i=t.cases.length;for(let l=0;l<i&&(re(e,t.cases[l]),l!==i-1);l++)e.push(", ");e.deindent(s()),e.push("])")}}function xt(e,t){t.body?re(e,t.body):e.push("null")}function re(e,t){const{helper:n}=e;switch(t.type){case 0:xt(e,t);break;case 1:Bt(e,t);break;case 2:jt(e,t);break;case 6:Ht(e,t);break;case 8:e.push(JSON.stringify(t.value),t);break;case 7:e.push(JSON.stringify(t.value),t);break;case 5:e.push(`${n("interpolate")}(${n("list")}(${t.index}))`,t);break;case 4:e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`,t);break;case 9:e.push(JSON.stringify(t.value),t);break;case 3:e.push(JSON.stringify(t.value),t);break}}const Jt=(e,t={})=>{const n=I(t.mode)?t.mode:"normal",s=I(t.filename)?t.filename:"message.intl",i=!!t.sourceMap,l=t.breakLineCode!=null?t.breakLineCode:n==="arrow"?";":`
`,m=t.needIndent?t.needIndent:n!=="arrow",_=e.helpers||[],f=Xt(e,{mode:n,filename:s,sourceMap:i,breakLineCode:l,needIndent:m});f.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),f.indent(m),_.length>0&&(f.push(`const { ${Se(_.map(C=>`${C}: _${C}`),", ")} } = ctx`),f.newline()),f.push("return "),re(f,e),f.deindent(m),f.push("}"),delete e.helpers;const{code:L,map:S}=f.context();return{ast:e,code:L,map:S?S.toJSON():void 0}};function Qt(e,t={}){const n=Z({},t),s=!!n.jit,i=!!n.minify,l=n.optimize==null?!0:n.optimize,_=Yt(n).parse(e);return s?(l&&Gt(_),i&&ne(_),{ast:_,code:""}):(Vt(_,n),Jt(_,n))}/*!
  * core-base v10.0.5
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */function qt(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(we().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(we().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function Ee(e){return n=>Zt(n,e)}function Zt(e,t){const n=en(t);if(n==null)throw se(0);if(Ae(n)===1){const l=nn(n);return e.plural(l.reduce((m,_)=>[...m,$e(e,_)],[]))}else return $e(e,n)}const zt=["b","body"];function en(e){return z(e,zt)}const tn=["c","cases"];function nn(e){return z(e,tn,[])}function $e(e,t){const n=sn(t);if(n!=null)return e.type==="text"?n:e.normalize([n]);{const s=ln(t).reduce((i,l)=>[...i,Ne(e,l)],[]);return e.normalize(s)}}const rn=["s","static"];function sn(e){return z(e,rn)}const an=["i","items"];function ln(e){return z(e,an,[])}function Ne(e,t){const n=Ae(t);switch(n){case 3:return ue(t,n);case 9:return ue(t,n);case 4:{const s=t;if(te(s,"k")&&s.k)return e.interpolate(e.named(s.k));if(te(s,"key")&&s.key)return e.interpolate(e.named(s.key));throw se(n)}case 5:{const s=t;if(te(s,"i")&&Y(s.i))return e.interpolate(e.list(s.i));if(te(s,"index")&&Y(s.index))return e.interpolate(e.list(s.index));throw se(n)}case 6:{const s=t,i=fn(s),l=mn(s);return e.linked(Ne(e,l),i?Ne(e,i):void 0,e.type)}case 7:return ue(t,n);case 8:return ue(t,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const cn=["t","type"];function Ae(e){return z(e,cn)}const on=["v","value"];function ue(e,t){const n=z(e,on);if(n)return n;throw se(t)}const un=["m","modifier"];function fn(e){return z(e,un)}const dn=["k","key"];function mn(e){const t=z(e,dn);if(t)return t;throw se(6)}function z(e,t,n){for(let s=0;s<t.length;s++){const i=t[s];if(te(e,i)&&e[i]!=null)return e[i]}return n}function se(e){return new Error(`unhandled node type: ${e}`)}const _n=e=>e;let fe=W();function ae(e){return R(e)&&Ae(e)===0&&(te(e,"b")||te(e,"body"))}function En(e,t={}){let n=!1;const s=t.onError||Pt;return t.onError=i=>{n=!0,s(i)},{...Qt(e,t),detectError:n}}function er(e,t){if(!__INTLIFY_DROP_MESSAGE_COMPILER__&&I(e)){K(t.warnHtmlMessage)&&t.warnHtmlMessage;const s=(t.onCacheKey||_n)(e),i=fe[s];if(i)return i;const{ast:l,detectError:m}=En(e,{...t,location:!1,jit:!0}),_=Ee(l);return m?_:fe[s]=_}else{const n=e.cacheKey;if(n){const s=fe[n];return s||(fe[n]=Ee(e))}else return Ee(e)}}let le=null;function tr(e){le=e}function Ln(e,t,n){le&&le.emit("i18n:init",{timestamp:Date.now(),i18n:e,version:t,meta:n})}const hn=pn("function:translate");function pn(e){return t=>le&&le.emit(e,t)}const J={INVALID_ARGUMENT:yt,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_NON_STRING_MESSAGE:20,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},nr=24;function Q(e){return Ie(e,null,void 0)}function be(e,t){return t.locale!=null?Ye(t.locale):Ye(e.locale)}let Le;function Ye(e){if(I(e))return e;if(F(e)){if(e.resolvedOnce&&Le!=null)return Le;if(e.constructor.name==="Function"){const t=e();if(It(t))throw Q(J.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return Le=t}else throw Q(J.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw Q(J.NOT_SUPPORT_LOCALE_TYPE)}function Nn(e,t,n){return[...new Set([n,...H(t)?t:R(t)?Object.keys(t):I(t)?[t]:[n]])]}function rr(e,t,n){const s=I(n)?n:Te,i=e;i.__localeChainCache||(i.__localeChainCache=new Map);let l=i.__localeChainCache.get(s);if(!l){l=[];let m=[n];for(;H(m);)m=Ke(l,m,t);const _=H(t)||!k(t)?t:t.default?t.default:null;m=I(_)?[_]:_,H(m)&&Ke(l,m,!1),i.__localeChainCache.set(s,l)}return l}function Ke(e,t,n){let s=!0;for(let i=0;i<t.length&&K(s);i++){const l=t[i];I(l)&&(s=Tn(e,t[i],n))}return s}function Tn(e,t,n){let s;const i=t.split("-");do{const l=i.join("-");s=gn(e,l,n),i.splice(-1,1)}while(i.length&&s===!0);return s}function gn(e,t,n){let s=!1;if(!e.includes(t)&&(s=!0,t)){s=t[t.length-1]!=="!";const i=t.replace(/!/g,"");e.push(i),(H(n)||k(n))&&n[i]&&(s=n[i])}return s}const ee=[];ee[0]={w:[0],i:[3,0],"[":[4],o:[7]};ee[1]={w:[1],".":[2],"[":[4],o:[7]};ee[2]={w:[2],i:[3,0],0:[3,0]};ee[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};ee[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};ee[5]={"'":[4,0],o:8,l:[5,0]};ee[6]={'"':[4,0],o:8,l:[6,0]};const Cn=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function Sn(e){return Cn.test(e)}function In(e){const t=e.charCodeAt(0),n=e.charCodeAt(e.length-1);return t===n&&(t===34||t===39)?e.slice(1,-1):e}function On(e){if(e==null)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function An(e){const t=e.trim();return e.charAt(0)==="0"&&isNaN(parseInt(e))?!1:Sn(t)?In(t):"*"+t}function bn(e){const t=[];let n=-1,s=0,i=0,l,m,_,f,L,S,C;const N=[];N[0]=()=>{m===void 0?m=_:m+=_},N[1]=()=>{m!==void 0&&(t.push(m),m=void 0)},N[2]=()=>{N[0](),i++},N[3]=()=>{if(i>0)i--,s=4,N[0]();else{if(i=0,m===void 0||(m=An(m),m===!1))return!1;N[1]()}};function A(){const y=e[n+1];if(s===5&&y==="'"||s===6&&y==='"')return n++,_="\\"+y,N[0](),!0}for(;s!==null;)if(n++,l=e[n],!(l==="\\"&&A())){if(f=On(l),C=ee[s],L=C[f]||C.l||8,L===8||(s=L[0],L[1]!==void 0&&(S=N[L[1]],S&&(_=l,S()===!1))))return;if(s===7)return t}}const Ve=new Map;function yn(e,t){return R(e)?e[t]:null}function sr(e,t){if(!R(e))return null;let n=Ve.get(t);if(n||(n=bn(t),n&&Ve.set(t,n)),!n)return null;const s=n.length;let i=e,l=0;for(;l<s;){const m=i[n[l]];if(m===void 0||F(i))return null;i=m,l++}return i}const Pn="10.0.5",ye=-1,Te="en-US",ar="",Ge=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;function kn(){return{upper:(e,t)=>t==="text"&&I(e)?e.toUpperCase():t==="vnode"&&R(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>t==="text"&&I(e)?e.toLowerCase():t==="vnode"&&R(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>t==="text"&&I(e)?Ge(e):t==="vnode"&&R(e)&&"__v_isVNode"in e?Ge(e.children):e}}let xe;function lr(e){xe=e}let Je;function cr(e){Je=e}let Qe;function ir(e){Qe=e}let qe=null;const or=e=>{qe=e},Dn=()=>qe;let Ze=null;const ur=e=>{Ze=e},fr=()=>Ze;let Xe=0;function dr(e={}){const t=F(e.onWarn)?e.onWarn:At,n=I(e.version)?e.version:Pn,s=I(e.locale)||F(e.locale)?e.locale:Te,i=F(s)?Te:s,l=H(e.fallbackLocale)||k(e.fallbackLocale)||I(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:i,m=k(e.messages)?e.messages:he(i),_=k(e.datetimeFormats)?e.datetimeFormats:he(i),f=k(e.numberFormats)?e.numberFormats:he(i),L=Z(W(),e.modifiers,kn()),S=e.pluralRules||W(),C=F(e.missing)?e.missing:null,N=K(e.missingWarn)||Re(e.missingWarn)?e.missingWarn:!0,A=K(e.fallbackWarn)||Re(e.fallbackWarn)?e.fallbackWarn:!0,y=!!e.fallbackFormat,b=!!e.unresolving,T=F(e.postTranslation)?e.postTranslation:null,c=k(e.processor)?e.processor:null,d=K(e.warnHtmlMessage)?e.warnHtmlMessage:!0,E=!!e.escapeParameter,o=F(e.messageCompiler)?e.messageCompiler:xe,h=F(e.messageResolver)?e.messageResolver:Je||yn,p=F(e.localeFallbacker)?e.localeFallbacker:Qe||Nn,O=R(e.fallbackContext)?e.fallbackContext:void 0,D=e,M=R(D.__datetimeFormatters)?D.__datetimeFormatters:new Map,V=R(D.__numberFormatters)?D.__numberFormatters:new Map,B=R(D.__meta)?D.__meta:{};Xe++;const U={version:n,cid:Xe,locale:s,fallbackLocale:l,messages:m,modifiers:L,pluralRules:S,missing:C,missingWarn:N,fallbackWarn:A,fallbackFormat:y,unresolving:b,postTranslation:T,processor:c,warnHtmlMessage:d,escapeParameter:E,messageCompiler:o,messageResolver:h,localeFallbacker:p,fallbackContext:O,onWarn:t,__meta:B};return U.datetimeFormats=_,U.numberFormats=f,U.__datetimeFormatters=M,U.__numberFormatters=V,__INTLIFY_PROD_DEVTOOLS__&&Ln(U,n,B),U}const he=e=>({[e]:W()});function Pe(e,t,n,s,i){const{missing:l,onWarn:m}=e;if(l!==null){const _=l(e,n,t,i);return I(_)?_:t}else return t}function mr(e,t,n){const s=e;s.__localeChainCache=new Map,e.localeFallbacker(e,n,t)}function Rn(e,t){return e===t?!1:e.split("-")[0]===t.split("-")[0]}function Mn(e,t){const n=t.indexOf(e);if(n===-1)return!1;for(let s=n+1;s<t.length;s++)if(Rn(e,t[s]))return!0;return!1}function _r(e,...t){const{datetimeFormats:n,unresolving:s,fallbackLocale:i,onWarn:l,localeFallbacker:m}=e,{__datetimeFormatters:_}=e,[f,L,S,C]=vn(...t),N=K(S.missingWarn)?S.missingWarn:e.missingWarn;K(S.fallbackWarn)?S.fallbackWarn:e.fallbackWarn;const A=!!S.part,y=be(e,S),b=m(e,i,y);if(!I(f)||f==="")return new Intl.DateTimeFormat(y,C).format(L);let T={},c,d=null;const E="datetime format";for(let p=0;p<b.length&&(c=b[p],T=n[c]||{},d=T[f],!k(d));p++)Pe(e,f,c,N,E);if(!k(d)||!I(c))return s?ye:f;let o=`${c}__${f}`;ge(C)||(o=`${o}__${JSON.stringify(C)}`);let h=_.get(o);return h||(h=new Intl.DateTimeFormat(c,Z({},d,C)),_.set(o,h)),A?h.formatToParts(L):h.format(L)}const wn=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function vn(...e){const[t,n,s,i]=e,l=W();let m=W(),_;if(I(t)){const f=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!f)throw Q(J.INVALID_ISO_DATE_ARGUMENT);const L=f[3]?f[3].trim().startsWith("T")?`${f[1].trim()}${f[3].trim()}`:`${f[1].trim()}T${f[3].trim()}`:f[1].trim();_=new Date(L);try{_.toISOString()}catch{throw Q(J.INVALID_ISO_DATE_ARGUMENT)}}else if(gt(t)){if(isNaN(t.getTime()))throw Q(J.INVALID_DATE_ARGUMENT);_=t}else if(Y(t))_=t;else throw Q(J.INVALID_ARGUMENT);return I(n)?l.key=n:k(n)&&Object.keys(n).forEach(f=>{wn.includes(f)?m[f]=n[f]:l[f]=n[f]}),I(s)?l.locale=s:k(s)&&(m=s),k(i)&&(m=i),[l.key||"",_,l,m]}function Er(e,t,n){const s=e;for(const i in n){const l=`${t}__${i}`;s.__datetimeFormatters.has(l)&&s.__datetimeFormatters.delete(l)}}function Lr(e,...t){const{numberFormats:n,unresolving:s,fallbackLocale:i,onWarn:l,localeFallbacker:m}=e,{__numberFormatters:_}=e,[f,L,S,C]=Un(...t),N=K(S.missingWarn)?S.missingWarn:e.missingWarn;K(S.fallbackWarn)?S.fallbackWarn:e.fallbackWarn;const A=!!S.part,y=be(e,S),b=m(e,i,y);if(!I(f)||f==="")return new Intl.NumberFormat(y,C).format(L);let T={},c,d=null;const E="number format";for(let p=0;p<b.length&&(c=b[p],T=n[c]||{},d=T[f],!k(d));p++)Pe(e,f,c,N,E);if(!k(d)||!I(c))return s?ye:f;let o=`${c}__${f}`;ge(C)||(o=`${o}__${JSON.stringify(C)}`);let h=_.get(o);return h||(h=new Intl.NumberFormat(c,Z({},d,C)),_.set(o,h)),A?h.formatToParts(L):h.format(L)}const Fn=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Un(...e){const[t,n,s,i]=e,l=W();let m=W();if(!Y(t))throw Q(J.INVALID_ARGUMENT);const _=t;return I(n)?l.key=n:k(n)&&Object.keys(n).forEach(f=>{Fn.includes(f)?m[f]=n[f]:l[f]=n[f]}),I(s)?l.locale=s:k(s)&&(m=s),k(i)&&(m=i),[l.key||"",_,l,m]}function hr(e,t,n){const s=e;for(const i in n){const l=`${t}__${i}`;s.__numberFormatters.has(l)&&s.__numberFormatters.delete(l)}}const Wn=e=>e,$n=e=>"",Yn="text",Kn=e=>e.length===0?"":Se(e),Vn=Ot;function He(e,t){return e=Math.abs(e),t===2?e?e>1?1:0:1:e?Math.min(e,2):0}function Gn(e){const t=Y(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(Y(e.named.count)||Y(e.named.n))?Y(e.named.count)?e.named.count:Y(e.named.n)?e.named.n:t:t}function Xn(e,t){t.count||(t.count=e),t.n||(t.n=e)}function Hn(e={}){const t=e.locale,n=Gn(e),s=R(e.pluralRules)&&I(t)&&F(e.pluralRules[t])?e.pluralRules[t]:He,i=R(e.pluralRules)&&I(t)&&F(e.pluralRules[t])?He:void 0,l=c=>c[s(n,c.length,i)],m=e.list||[],_=c=>m[c],f=e.named||W();Y(e.pluralIndex)&&Xn(n,f);const L=c=>f[c];function S(c,d){const E=F(e.messages)?e.messages(c,!!d):R(e.messages)?e.messages[c]:!1;return E||(e.parent?e.parent.message(c):$n)}const C=c=>e.modifiers?e.modifiers[c]:Wn,N=k(e.processor)&&F(e.processor.normalize)?e.processor.normalize:Kn,A=k(e.processor)&&F(e.processor.interpolate)?e.processor.interpolate:Vn,y=k(e.processor)&&I(e.processor.type)?e.processor.type:Yn,T={list:_,named:L,plural:l,linked:(c,...d)=>{const[E,o]=d;let h="text",p="";d.length===1?R(E)?(p=E.modifier||p,h=E.type||h):I(E)&&(p=E||p):d.length===2&&(I(E)&&(p=E||p),I(o)&&(h=o||h));const O=S(c,!0)(T),D=h==="vnode"&&H(O)&&p?O[0]:O;return p?C(p)(D,h):D},message:S,type:y,interpolate:A,normalize:N,values:Z(W(),m,f)};return T}const je=()=>"",X=e=>F(e);function pr(e,...t){const{fallbackFormat:n,postTranslation:s,unresolving:i,messageCompiler:l,fallbackLocale:m,messages:_}=e,[f,L]=xn(...t),S=K(L.missingWarn)?L.missingWarn:e.missingWarn,C=K(L.fallbackWarn)?L.fallbackWarn:e.fallbackWarn,N=K(L.escapeParameter)?L.escapeParameter:e.escapeParameter,A=!!L.resolvedMessage,y=I(L.default)||K(L.default)?K(L.default)?l?f:()=>f:L.default:n?l?f:()=>f:null,b=n||y!=null&&(I(y)||F(y)),T=be(e,L);N&&jn(L);let[c,d,E]=A?[f,T,_[T]||W()]:ze(e,f,T,m,C,S),o=c,h=f;if(!A&&!(I(o)||ae(o)||X(o))&&b&&(o=y,h=o),!A&&(!(I(o)||ae(o)||X(o))||!I(d)))return i?ye:f;let p=!1;const O=()=>{p=!0},D=X(o)?o:et(e,f,d,o,h,O);if(p)return o;const M=Qn(e,d,E,L),V=Hn(M),B=Bn(e,D,V),U=s?s(B,f):B;if(__INTLIFY_PROD_DEVTOOLS__){const ce={timestamp:Date.now(),key:I(f)?f:X(o)?o.key:"",locale:d||(X(o)?o.locale:""),format:I(o)?o:X(o)?o.source:"",message:U};ce.meta=Z({},e.__meta,Dn()||{}),hn(ce)}return U}function jn(e){H(e.list)?e.list=e.list.map(t=>I(t)?ve(t):t):R(e.named)&&Object.keys(e.named).forEach(t=>{I(e.named[t])&&(e.named[t]=ve(e.named[t]))})}function ze(e,t,n,s,i,l){const{messages:m,onWarn:_,messageResolver:f,localeFallbacker:L}=e,S=L(e,s,n);let C=W(),N,A=null;const y="translate";for(let b=0;b<S.length&&(N=S[b],C=m[N]||W(),(A=f(C,t))===null&&(A=C[t]),!(I(A)||ae(A)||X(A)));b++)if(!Mn(N,S)){const T=Pe(e,t,N,l,y);T!==t&&(A=T)}return[A,N,C]}function et(e,t,n,s,i,l){const{messageCompiler:m,warnHtmlMessage:_}=e;if(X(s)){const L=s;return L.locale=L.locale||n,L.key=L.key||t,L}if(m==null){const L=()=>s;return L.locale=n,L.key=t,L}const f=m(s,Jn(e,n,i,s,_,l));return f.locale=n,f.key=t,f.source=s,f}function Bn(e,t,n){return t(n)}function xn(...e){const[t,n,s]=e,i=W();if(!I(t)&&!Y(t)&&!X(t)&&!ae(t))throw Q(J.INVALID_ARGUMENT);const l=Y(t)?String(t):(X(t),t);return Y(n)?i.plural=n:I(n)?i.default=n:k(n)&&!ge(n)?i.named=n:H(n)&&(i.list=n),Y(s)?i.plural=s:I(s)?i.default=s:k(s)&&Z(i,s),[l,i]}function Jn(e,t,n,s,i,l){return{locale:t,key:n,warnHtmlMessage:i,onError:m=>{throw l&&l(m),m},onCacheKey:m=>Nt(t,n,m)}}function Qn(e,t,n,s){const{modifiers:i,pluralRules:l,messageResolver:m,fallbackLocale:_,fallbackWarn:f,missingWarn:L,fallbackContext:S}=e,N={locale:t,modifiers:i,pluralRules:l,messages:(A,y)=>{let b=m(n,A);if(b==null&&(S||y)){const[,,T]=ze(S||e,A,t,_,f,L);b=m(T,A)}if(I(b)||ae(b)){let T=!1;const d=et(e,A,t,b,A,()=>{T=!0});return T?je:d}else return X(b)?b:je}};return e.processor&&(N.processor=e.processor),s.list&&(N.list=s.list),s.named&&(N.named=s.named),Y(s.plural)&&(N.pluralIndex=s.plural),N}qt();export{xn as A,pr as B,nr as C,Te as D,vn as E,_r as F,Un as G,Lr as H,ae as I,X as J,rr as K,lr as L,ar as M,Fn as N,cr as O,ir as P,ur as Q,er as R,sr as S,Z as a,I as b,W as c,R as d,K as e,Ie as f,we as g,H as h,Y as i,k as j,Re as k,F as l,Zn as m,qn as n,wn as o,ge as p,zn as q,te as r,tr as s,dr as t,mr as u,Er as v,hr as w,or as x,fr as y,ye as z};