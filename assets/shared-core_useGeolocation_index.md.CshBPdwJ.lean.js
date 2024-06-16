import{t as v}from"./chunks/index.8yTjE-xb.js";import{b as A}from"./chunks/configurable.DoS0fK6c.js";import{u as F}from"./chunks/index.I-Cz6Flr.js";import{s as _,G as I,d as P,o as y,c as b,j as o,t as S,k as t,D as E,I as k,w as D,a as c,a5 as x}from"./chunks/framework.CTGY6mxV.js";import"./chunks/is.DGW30r2M.js";function G(h={}){const{enableHighAccuracy:e=!0,maximumAge:r=3e4,timeout:s=27e3,navigator:a=A,immediate:l=!0}=h,p=F(()=>a&&"geolocation"in a),i=_(null),n=I(null),g=_({accuracy:0,latitude:Number.POSITIVE_INFINITY,longitude:Number.POSITIVE_INFINITY,altitude:null,altitudeAccuracy:null,heading:null,speed:null});function C(d){i.value=d.timestamp,g.value=d.coords,n.value=null}let u;function m(){p.value&&(u=a.geolocation.watchPosition(C,d=>n.value=d,{enableHighAccuracy:e,maximumAge:r,timeout:s}))}l&&m();function f(){u&&a&&a.geolocation.clearWatch(u)}return v(()=>{f()}),{isSupported:p,coords:g,locatedAt:i,error:n,resume:m,pause:f}}const N={lang:"json"},T=P({__name:"demo",setup(h){const{coords:e,locatedAt:r,error:s,resume:a,pause:l}=G();return(p,i)=>(y(),b("div",null,[o("pre",N,S(JSON.stringify({coords:{accuracy:t(e).accuracy,latitude:t(e).latitude,longitude:t(e).longitude,altitude:t(e).altitude,altitudeAccuracy:t(e).altitudeAccuracy,heading:t(e).heading,speed:t(e).speed},locatedAt:t(r),error:t(s)?t(s).message:t(s)},null,2)),1),o("button",{onClick:i[0]||(i[0]=(...n)=>t(l)&&t(l)(...n))},"Pause watch"),o("button",{onClick:i[1]||(i[1]=(...n)=>t(a)&&t(a)(...n))},"Start watch")]))}}),B=o("h1",{id:"usegeolocation",tabindex:"-1"},[c("useGeolocation "),o("a",{class:"header-anchor",href:"#usegeolocation","aria-label":'Permalink to "useGeolocation"'},"​")],-1),w=o("p",null,[c("Reactive "),o("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API",target:"_blank",rel:"noreferrer"},"Geolocation API"),c(". It allows the user to provide their location to web applications if they so desire. For privacy reasons, the user is asked for permission to report location information.")],-1),O=o("h2",{id:"demo",tabindex:"-1"},[c("Demo "),o("a",{class:"header-anchor",href:"#demo","aria-label":'Permalink to "Demo"'},"​")],-1),V=x("",5),$=JSON.parse('{"title":"useGeolocation","description":"","frontmatter":{"category":"Sensors"},"headers":[],"relativePath":"shared-core/useGeolocation/index.md","filePath":"libs/shared-core/src/useGeolocation/index.md","lastUpdated":1718540219000}'),j={name:"shared-core/useGeolocation/index.md"},J=Object.assign(j,{setup(h){return(e,r)=>{const s=E("FunctionInfo"),a=E("DemoContainer");return y(),b("div",null,[B,k(s,{frontmatter:e.$frontmatter,package:"Share - Core",fn:"useGeolocation"},null,8,["frontmatter"]),w,O,k(a,null,{default:D(()=>[k(T)]),_:1}),V])}}});export{$ as __pageData,J as default};
