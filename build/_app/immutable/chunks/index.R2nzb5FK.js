import{r as p,n as x,x as T,y as M,z as b,A as B,B as v,C as P,D as O,E as N,F as j,G,H as I}from"./scheduler.zQ9XRYPG.js";let $=!1;function R(){$=!0}function z(){$=!1}function F(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&r.push(u)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let r=0;r<e.length;r++){const a=e[r].claim_order,u=(s>0&&e[n[s]].claim_order<=a?s+1:F(1,s,d=>e[n[d]].claim_order,a))-1;i[r]=n[u]+1;const o=u+1;n[o]=r,s=Math.max(o,s)}const c=[],l=[];let f=e.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(c.push(e[r-1]);f>=r;f--)l.push(e[f]);f--}for(;f>=0;f--)l.push(e[f]);c.reverse(),l.sort((r,a)=>r.claim_order-a.claim_order);for(let r=0,a=0;r<l.length;r++){for(;a<c.length&&l[r].claim_order>=c[a].claim_order;)a++;const u=a<c.length?c[a]:null;t.insertBefore(l[r],u)}}function U(t,e){if($){for(q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function V(t,e,n){t.insertBefore(e,n||null)}function W(t,e,n){$&&!n?U(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function m(t){t.parentNode&&t.parentNode.removeChild(t)}function S(t){return document.createElement(t)}function H(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function g(t){return document.createTextNode(t)}function st(){return g(" ")}function rt(){return g("")}function lt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function J(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const K=["width","height"];function at(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&K.indexOf(i)===-1?t[i]=e[i]:J(t,i,e[i])}function ct(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function ft(t){return t.dataset.svelteH}function ot(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function Q(t){return Array.from(t.childNodes)}function C(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function L(t,e,n,i,s=!1){C(t);const c=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const f=t[l];if(e(f)){const r=n(f);return r===void 0?t.splice(l,1):t[l]=r,s||(t.claim_info.last_index=l),f}}for(let l=t.claim_info.last_index-1;l>=0;l--){const f=t[l];if(e(f)){const r=n(f);return r===void 0?t.splice(l,1):t[l]=r,s?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,f}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function D(t,e,n,i){return L(t,s=>s.nodeName===e,s=>{const c=[];for(let l=0;l<s.attributes.length;l++){const f=s.attributes[l];n[f.name]||c.push(f.name)}c.forEach(l=>s.removeAttribute(l))},()=>i(e))}function ut(t,e,n){return D(t,e,n,S)}function _t(t,e,n){return D(t,e,n,H)}function X(t,e){return L(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>g(e),!0)}function dt(t){return X(t," ")}function A(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function ht(t,e){const n=A(t,"HTML_TAG_START",0),i=A(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new y(e);C(t);const s=t.splice(n,i-n+1);m(s[0]),m(s[s.length-1]);const c=s.slice(1,s.length-1);if(c.length===0)return new y(e);for(const l of c)l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new y(e,c)}function mt(t,e){e=""+e,t.data!==e&&(t.data=e)}function pt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function $t(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(s)):c===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Y{is_svg=!1;e=void 0;n=void 0;t=void 0;a=void 0;constructor(e=!1){this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=H(n.nodeName):this.e=S(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)V(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(m)}}class y extends Y{l=void 0;constructor(e=!1,n){super(e),this.e=this.n=null,this.l=n}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)W(this.t,this.n[n],e)}}function yt(t,e){return new t(e)}const h=new Set;let _;function xt(){_={r:0,c:[],p:_}}function gt(){_.r||p(_.c),_=_.p}function Z(t,e){t&&t.i&&(h.delete(t),t.i(e))}function wt(t,e,n,i){if(t&&t.o){if(h.has(t))return;h.add(t),_.c.push(()=>{h.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Et(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Tt(t){t&&t.c()}function vt(t,e){t&&t.l(e)}function k(t,e,n){const{fragment:i,after_update:s}=t.$$;i&&i.m(e,n),v(()=>{const c=t.$$.on_mount.map(j).filter(b);t.$$.on_destroy?t.$$.on_destroy.push(...c):p(c),t.$$.on_mount=[]}),s.forEach(v)}function tt(t,e){const n=t.$$;n.fragment!==null&&(P(n.after_update),p(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function et(t,e){t.$$.dirty[0]===-1&&(G.push(t),I(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Nt(t,e,n,i,s,c,l=null,f=[-1]){const r=O;N(t);const a=t.$$={fragment:null,ctx:[],props:c,update:x,not_equal:s,bound:T(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:T(),dirty:f,skip_bound:!1,root:e.target||r.$$.root};l&&l(a.root);let u=!1;if(a.ctx=n?n(t,e.props||{},(o,d,...w)=>{const E=w.length?w[0]:d;return a.ctx&&s(a.ctx[o],a.ctx[o]=E)&&(!a.skip_bound&&a.bound[o]&&a.bound[o](E),u&&et(t,o)),d}):[],a.update(),u=!0,p(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){R();const o=Q(e.target);a.fragment&&a.fragment.l(o),o.forEach(m)}else a.fragment&&a.fragment.c();e.intro&&Z(t.$$.fragment),k(t,e.target,e.anchor),z(),M()}N(r)}class At{$$=void 0;$$set=void 0;$destroy(){tt(this,1),this.$destroy=x}$on(e,n){if(!b(n))return x;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!B(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const nt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(nt);export{$t as A,ht as B,_t as C,ft as D,ot as E,at as F,ct as G,y as H,Et as I,At as S,W as a,gt as b,dt as c,Z as d,rt as e,m as f,S as g,ut as h,Nt as i,Q as j,J as k,pt as l,g as m,X as n,mt as o,xt as p,yt as q,Tt as r,st as s,wt as t,vt as u,k as v,tt as w,U as x,lt as y,H as z};