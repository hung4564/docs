const n=typeof window<"u"&&typeof document<"u",a=t=>t!=null,e=Object.prototype.toString,i=t=>e.call(t)==="[object Object]",r=()=>+Date.now(),c=()=>{},d=(t,o)=>(t=Math.ceil(t),o=Math.floor(o),Math.floor(Math.random()*(o-t+1))+t),w=(t,o)=>Object.prototype.hasOwnProperty.call(t,o),l=s();function s(){var t,o;return n&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((o=window==null?void 0:window.navigator)==null?void 0:o.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}export{n as a,i as b,a as c,w as h,l as i,c as n,d as r,r as t};
