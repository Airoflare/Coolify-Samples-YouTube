import{d as J,c as C,a as K,g as h,b as v,i as t,e as y,t as b,f as Q,h as U,s as g,r as V,F as X}from"./web.DKwjD-Ha.js";import{c as d,A as Y}from"./ArrowCard.BKTph8Fj.js";var Z=b('<div class="grid grid-cols-1 sm:grid-cols-3 gap-6"><div class="col-span-3 sm:col-span-1"><div class="sticky top-24"><div class="text-sm font-semibold uppercase mb-2 text-black dark:text-white">Filter</div><ul class="flex flex-wrap sm:flex-col gap-1.5"></ul></div></div><div class="col-span-3 sm:col-span-2"><div class="flex flex-col"><div class="text-sm uppercase mb-2">SHOWING <!$><!/> OF <!$><!/> POSTS</div><ul class="flex flex-col gap-3">'),ee=b("<li><button><svg><use href=/ui.svg#square></use><use href=/ui.svg#square-check></use></svg><!$><!/>"),le=b("<li>");function te({data:u,tags:E}){const[a,F]=C(new Set),[x,A]=C([]);K(()=>{A(u.filter(l=>Array.from(a()).every(i=>l.data.tags.some(r=>r.toLowerCase()===String(i).toLowerCase()))))});function N(l){F(i=>new Set(i.has(l)?[...i].filter(r=>r!==l):[...i,l]))}return(()=>{var l=h(Z),i=l.firstChild,r=i.firstChild,O=r.firstChild,q=O.nextSibling,H=i.nextSibling,L=H.firstChild,o=L.firstChild,P=o.firstChild,T=P.nextSibling,[$,z]=v(T.nextSibling),B=$.nextSibling,G=B.nextSibling,[_,I]=v(G.nextSibling);_.nextSibling;var M=o.nextSibling;return t(q,y(X,{each:E,children:s=>(()=>{var n=h(ee),c=n.firstChild,f=c.firstChild,m=f.firstChild,R=m.nextSibling,W=f.nextSibling,[j,D]=v(W.nextSibling);return c.$$click=()=>N(s),t(c,s,j,D),Q(e=>{var k=d("w-full px-2 py-1 rounded","whitespace-nowrap overflow-hidden overflow-ellipsis","flex gap-2 items-center","bg-black/5 dark:bg-white/10","hover:bg-black/10 hover:dark:bg-white/15","transition-colors duration-300 ease-in-out",a().has(s)&&"text-black dark:text-white"),p=d("size-5 fill-black/50 dark:fill-white/50","transition-colors duration-300 ease-in-out",a().has(s)&&"fill-black dark:fill-white"),S=d(a().has(s)?"hidden":"block"),w=d(a().has(s)?"block":"hidden");return k!==e.e&&U(c,e.e=k),p!==e.t&&g(f,"class",e.t=p),S!==e.a&&g(m,"class",e.a=S),w!==e.o&&g(R,"class",e.o=w),e},{e:void 0,t:void 0,a:void 0,o:void 0}),V(),n})()})),t(o,()=>x().length,$,z),t(o,()=>u.length,_,I),t(M,()=>x().map(s=>(()=>{var n=h(le);return t(n,y(Y,{entry:s})),n})())),l})()}J(["click"]);export{te as default};
