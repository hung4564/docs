import{u as A}from"./chunks/index.DGqdSCUH.js";import{u as x}from"./chunks/index.CV9KCYp8.js";import{d as b,s as h,D as c,o as t,c as l,j as s,a as k,I as o,k as D,F as _,E as F,t as n,w as Z,a5 as S}from"./chunks/framework.CTGY6mxV.js";import"./chunks/configurable.DoS0fK6c.js";import"./chunks/is.DGW30r2M.js";import"./chunks/index.8yTjE-xb.js";import"./chunks/index.rxAxMNzT.js";import"./chunks/index.BPPiZLzS.js";const z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAABIAAAASABGyWs+AAADCElEQVR42u2XA5BdMRSGa9vWoHafXdvGY23btm3bts1RO6htm+l/ZqbdvUnuWnozX7ubl3v+c7NHiRfpH8f+USkFDoxKaejUIWW5ii1Taqo5lVR3JlKzpanlTizsr9QqpXFA15SOg6MFHZCKHJgBToLj4AQBB05YpvY5oanhOgEj/jmFta7m3t3i8+KGNh0S4Lu+tEfxDGxYZvY9AQfI9j9IizQnkAOtwDvA/gEHmH3bcKZv045pqrRiMORHdecjbS23nncAaxZ891ixt6qT6du3J1uwSbYVvAUNyIEkYBlgCg6OYpbZ/Zi2tpuMKanhWqZr5Ev2T1zX0JcMa+v5ffSsdX5/2BrNixOzSPtfHJQFd4RNe0cyQ/dOwimAT5qarrr/HMDPzWmNf3tjny5kQyZOWqX4YBwubMSx2ZYPYtpGXjLI/Slch7V1PZlAZhz9SV5c29jLbCsHy46e6C/LhlzgvMwJ09DuggPgN968I+hNP/MOmEb2UBM/TVpqKekF34SA3DSM6VxtJKfgvAfuC4HnbkvPyBz4CpoFVBNSgR2ygDRP7k3BRyIBgz2W6X3VAm8dSBlYYaoEXvAP23eOYIYOHYSA5N/e0KUjs+8aIRMnm9agVMaEYI4kFpBSAxiCDkJycW09D7MuHqj29hNBgqCW5yLghmBk3yhKLfkpUNoN7Ep7ZOLXQaHg9og+4LeQlquHMF0zHwQV4lhrzWxrh8gCj2x0CUmTygyOS9NyVE/hBMzjeqml3QGyFdJO2QR8EtJyK/qErx29OUE9g9ZkDnwEtUPTqpOBdWJajmaUaihCTFPLRT1DLfAWk43Qzgsm8Egwvht9onNH6hX0s0z8IdCGxcASH0yQxQJqPYJStd4PD8upqQC4JnFCTfwyyB/Wo1tH8FMQE/kBPOExO6YD+4LgwDaQNrwG2FrgbQDib0Cl8JygE4MlATgwEyQK7zG+NLglEae1EhF1lxjCif8BfSLyMpMDnPXnwAlai+gblQt8A19B48i60u0A60CKyLpX6kGZ0NiI+/wFfs40RFTvXLsAAAAASUVORK5CYII=",O={class:"flex flex-col gap-2"},M={class:"w-full h-auto relative"},N=s("p",null,"Drop files on to drop zones",-1),R={class:"flex gap-6"},T={class:"flex flex-col items-center"},w=s("span",null,"PNG",-1),q={grid:"~ cols-2 gap-2"},I=s("div",{"font-bold":"",mb2:""},"General DropZone",-1),P={class:"flex flex-wrap justify-center items-center"},j=s("div",{"font-bold":"",mb2:""},"Image DropZone",-1),Q={class:"flex flex-wrap justify-center items-center"},H=b({__name:"demo",setup(v){const p=h([]),r=h([]);function d(e){p.value=[],e&&(p.value=e.map(i=>({name:i.name,size:i.size,type:i.type,lastModified:i.lastModified})))}function E(e){r.value=[],e&&(r.value=e.map(i=>({name:i.name,size:i.size,type:i.type,lastModified:i.lastModified})))}const y=h(),u=h(),m=h(),{isOverDropZone:C}=A(y,d);x(m,"dragstart",e=>{var i;(i=e.dataTransfer)==null||i.setData("image/png","./vue.png")});const{isOverDropZone:B}=A(u,{dataTypes:["image/png"],onDrop:E});return(e,i)=>{const f=c("BooleanDisplay");return t(),l("div",O,[s("div",M,[N,s("div",R,[s("div",T,[s("img",{ref_key:"pngRef",ref:m,src:z,alt:"Drag me","h-10":""},null,512),w])]),s("div",q,[s("div",{ref_key:"dropZoneRef",ref:y,class:"flex flex-col w-full min-h-200px h-auto bg-gray-400/10 justify-center items-center mt-6 rounded"},[I,s("div",null,[k(" isOverDropZone: "),o(f,{value:D(C)},null,8,["value"])]),s("div",P,[(t(!0),l(_,null,F(p.value,(a,g)=>(t(),l("div",{key:g,class:"w-200px bg-black-200/10 ma-2 pa-6"},[s("p",null,"Name: "+n(a.name),1),s("p",null,"Size: "+n(a.size),1),s("p",null,"Type: "+n(a.type),1),s("p",null,"Last modified: "+n(a.lastModified),1)]))),128))])],512),s("div",{ref_key:"imageDropZoneRef",ref:u,class:"flex flex-col w-full min-h-200px h-auto bg-gray-400/10 justify-center items-center mt-6 rounded"},[j,s("div",null,[k(" isOverDropZone: "),o(f,{value:D(B)},null,8,["value"])]),s("div",Q,[(t(!0),l(_,null,F(r.value,(a,g)=>(t(),l("div",{key:g,class:"w-200px bg-black-200/10 ma-2 pa-6"},[s("p",null,"Name: "+n(a.name),1),s("p",null,"Size: "+n(a.size),1),s("p",null,"Type: "+n(a.type),1),s("p",null,"Last modified: "+n(a.lastModified),1)]))),128))])],512)])])])}}}),L=s("h1",{id:"usedropzone",tabindex:"-1"},[k("useDropZone "),s("a",{class:"header-anchor",href:"#usedropzone","aria-label":'Permalink to "useDropZone"'},"​")],-1),Y=s("p",null,"Create a zone where files can be dropped.",-1),V=s("h2",{id:"demo",tabindex:"-1"},[k("Demo "),s("a",{class:"header-anchor",href:"#demo","aria-label":'Permalink to "Demo"'},"​")],-1),U=S(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { useDropZone } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@hungpvq/share-code&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dropZoneRef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">HTMLDivElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onDrop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">files</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> File</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // called when files are dropped on zone</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">isOverDropZone</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useDropZone</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dropZoneRef, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  onDrop,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // specify the types of data to be received.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  dataTypes: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;image/jpeg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dropZoneRef&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Drop files here&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,2),es=JSON.parse('{"title":"useDropZone","description":"","frontmatter":{"category":"Elements"},"headers":[],"relativePath":"shared-core/useDropZone/index.md","filePath":"libs/shared-core/src/useDropZone/index.md","lastUpdated":1718540219000}'),X={name:"shared-core/useDropZone/index.md"},ns=Object.assign(X,{setup(v){return(p,r)=>{const d=c("FunctionInfo"),E=c("DemoContainer");return t(),l("div",null,[L,o(d,{frontmatter:p.$frontmatter,package:"Share - Core",fn:"useDropZone"},null,8,["frontmatter"]),Y,V,o(E,null,{default:Z(()=>[o(H)]),_:1}),U])}}});export{es as __pageData,ns as default};
