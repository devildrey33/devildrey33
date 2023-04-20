var Yf=Object.defineProperty;var $f=(a,e,t)=>e in a?Yf(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var Qr=(a,e,t)=>($f(a,typeof e!="symbol"?e+"":e,t),t),vc=(a,e,t)=>{if(!e.has(a))throw TypeError("Cannot "+t)};var Kf=(a,e,t)=>(vc(a,e,"read from private field"),t?t.call(a):e.get(a)),xc=(a,e,t)=>{if(e.has(a))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(a):e.set(a,t)},Zf=(a,e,t,n)=>(vc(a,e,"write to private field"),n?n.call(a,t):e.set(a,t),t),yc=(a,e,t,n)=>({set _(i){Zf(a,e,i,t)},get _(){return Kf(a,e,n)}});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ll="151",Zi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ji={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jf=0,Sc=1,Qf=2,Gh=1,Wh=2,us=3,ei=0,Wt=1,at=2,_i=0,Mr=1,Ka=2,bc=3,Mc=4,ep=5,vr=100,tp=101,np=102,wc=103,Ac=104,ip=200,rp=201,sp=202,op=203,qh=204,jh=205,ap=206,lp=207,cp=208,up=209,hp=210,dp=0,Rl=1,fp=2,Za=3,pp=4,mp=5,gp=6,_p=7,Xh=0,vp=1,xp=2,Qn=0,yp=1,Sp=2,Yh=3,bp=4,Mp=5,$h=300,Rr=301,Dr=302,Eo=303,Ja=304,ko=306,Ir=1e3,Vt=1001,Co=1002,ut=1003,Qa=1004,yo=1005,yt=1006,Kh=1007,yi=1008,Wi=1009,wp=1010,Ap=1011,Zh=1012,Tp=1013,Fi=1014,wn=1015,Kn=1016,Ep=1017,Cp=1018,wr=1020,Pp=1021,dn=1023,Lp=1024,Rp=1025,Bi=1026,zr=1027,Dp=1028,Ip=1029,zp=1030,Up=1031,Op=1033,ta=33776,na=33777,ia=33778,ra=33779,Tc=35840,Ec=35841,Cc=35842,Pc=35843,Np=36196,Lc=37492,Rc=37496,Dc=37808,Ic=37809,zc=37810,Uc=37811,Oc=37812,Nc=37813,Fc=37814,kc=37815,Bc=37816,Hc=37817,Vc=37818,Gc=37819,Wc=37820,qc=37821,sa=36492,Fp=36283,jc=36284,Xc=36285,Yc=36286,bs=2300,Ur=2301,oa=2302,$c=2400,Kc=2401,Zc=2402,kp=2500,Bp=0,Jh=1,el=2,Si=3e3,Xe=3001,Hp=3200,Yt=3201,Qh=0,Vp=1,Pn="srgb",Ms="srgb-linear",ed="display-p3",aa=7680,Gp=519,tl=35044,Jc="300 es",nl=1035;class Yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qc=1234567;const ms=Math.PI/180,Or=180/Math.PI;function gn(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[a&255]+Dt[a>>8&255]+Dt[a>>16&255]+Dt[a>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function _t(a,e,t){return Math.max(e,Math.min(t,a))}function Dl(a,e){return(a%e+e)%e}function Wp(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function qp(a,e,t){return a!==e?(t-a)/(e-a):0}function gs(a,e,t){return(1-t)*a+t*e}function jp(a,e,t,n){return gs(a,e,1-Math.exp(-t*n))}function Xp(a,e=1){return e-Math.abs(Dl(a,e*2)-e)}function Yp(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function $p(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function Kp(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Zp(a,e){return a+Math.random()*(e-a)}function Jp(a){return a*(.5-Math.random())}function Qp(a){a!==void 0&&(Qc=a);let e=Qc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function em(a){return a*ms}function tm(a){return a*Or}function il(a){return(a&a-1)===0&&a!==0}function td(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function nd(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function nm(a,e,t,n,i){const r=Math.cos,s=Math.sin,o=r(t/2),l=s(t/2),c=r((e+n)/2),u=s((e+n)/2),h=r((e-n)/2),d=s((e-n)/2),p=r((n-e)/2),_=s((n-e)/2);switch(i){case"XYX":a.set(o*u,l*h,l*d,o*c);break;case"YZY":a.set(l*d,o*u,l*h,o*c);break;case"ZXZ":a.set(l*h,l*d,o*u,o*c);break;case"XZX":a.set(o*u,l*_,l*p,o*c);break;case"YXY":a.set(l*p,o*u,l*_,o*c);break;case"ZYZ":a.set(l*_,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Zn(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Je(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const im={DEG2RAD:ms,RAD2DEG:Or,generateUUID:gn,clamp:_t,euclideanModulo:Dl,mapLinear:Wp,inverseLerp:qp,lerp:gs,damp:jp,pingpong:Xp,smoothstep:Yp,smootherstep:$p,randInt:Kp,randFloat:Zp,randFloatSpread:Jp,seededRandom:Qp,degToRad:em,radToDeg:tm,isPowerOfTwo:il,ceilPowerOfTwo:td,floorPowerOfTwo:nd,setQuaternionFromProperEuler:nm,normalize:Je,denormalize:Zn};class re{constructor(e=0,t=0){re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],_=n[8],g=i[0],m=i[3],f=i[6],b=i[1],x=i[4],v=i[7],S=i[2],w=i[5],E=i[8];return r[0]=s*g+o*b+l*S,r[3]=s*m+o*x+l*w,r[6]=s*f+o*v+l*E,r[1]=c*g+u*b+h*S,r[4]=c*m+u*x+h*w,r[7]=c*f+u*v+h*E,r[2]=d*g+p*b+_*S,r[5]=d*m+p*x+_*w,r[8]=d*f+p*v+_*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-n*r*u+n*o*l+i*r*c-i*s*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*s-o*c,d=o*l-u*r,p=c*r-s*l,_=t*h+n*d+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(o*n-i*s)*g,e[3]=d*g,e[4]=(u*t-i*l)*g,e[5]=(i*r-o*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(s*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-i*c,i*l,-i*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(la.makeScale(e,t)),this}rotate(e){return this.premultiply(la.makeRotation(-e)),this}translate(e,t){return this.premultiply(la.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const la=new Ve;function id(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function ws(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Ar(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function ca(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const rm=new Ve().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),sm=new Ve().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function om(a){return a.convertSRGBToLinear().applyMatrix3(sm)}function am(a){return a.applyMatrix3(rm).convertLinearToSRGB()}const lm={[Ms]:a=>a,[Pn]:a=>a.convertSRGBToLinear(),[ed]:om},cm={[Ms]:a=>a,[Pn]:a=>a.convertLinearToSRGB(),[ed]:am},Jt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(a){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!a},get workingColorSpace(){return Ms},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const n=lm[e],i=cm[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}};let Qi;class rd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qi===void 0&&(Qi=ws("canvas")),Qi.width=e.width,Qi.height=e.height;const n=Qi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ws("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=Ar(r[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ar(t[n]/255)*255):t[n]=Ar(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class sd{constructor(e=null){this.isSource=!0,this.uuid=gn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push(ua(i[s].image)):r.push(ua(i[s]))}else r=ua(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ua(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?rd.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let um=0;class Tt extends Yi{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=Vt,i=Vt,r=yt,s=yi,o=dn,l=Wi,c=Tt.DEFAULT_ANISOTROPY,u=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=gn(),this.name="",this.source=new sd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$h)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ir:e.x=e.x-Math.floor(e.x);break;case Vt:e.x=e.x<0?0:1;break;case Co:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ir:e.y=e.y-Math.floor(e.y);break;case Vt:e.y=e.y<0?0:1;break;case Co:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=$h;Tt.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,n=0,i=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],_=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(p+1)/2,S=(f+1)/2,w=(u+d)/4,E=(h+g)/4,T=(_+m)/4;return x>v&&x>S?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=w/n,r=E/n):v>S?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=w/i,r=T/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=E/r,i=T/r),this.set(n,i,r,t),this}let b=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(h-g)/b,this.z=(d-u)/b,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class An extends Yi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Tt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:yt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new sd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class od extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ut,this.minFilter=ut,this.wrapR=Vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hm extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ut,this.minFilter=ut,this.wrapR=Vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class On{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,s,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=r[s+0],p=r[s+1],_=r[s+2],g=r[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==d||c!==p||u!==_){let m=1-o;const f=l*d+c*p+u*_+h*g,b=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const S=Math.sqrt(x),w=Math.atan2(S,f*b);m=Math.sin(m*w)/S,o=Math.sin(o*w)/S}const v=o*b;if(l=l*m+d*v,c=c*m+p*v,u=u*m+_*v,h=h*m+g*v,m===1-o){const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,s){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[s],d=r[s+1],p=r[s+2],_=r[s+3];return e[t]=o*_+u*h+l*p-c*d,e[t+1]=l*_+u*d+c*h-o*p,e[t+2]=c*_+u*p+o*d-l*h,e[t+3]=u*_-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),d=l(n/2),p=l(i/2),_=l(r/2);switch(s){case"XYZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"YXZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"ZXY":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"ZYX":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"YZX":this._x=d*u*h+c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h-d*p*_;break;case"XZY":this._x=d*u*h-c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(s-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+s)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(i+s)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(s-i)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*o+i*c-r*l,this._y=i*u+s*l+r*o-n*c,this._z=r*u+s*c+n*l-i*o,this._w=s*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,s=this._w;let o=s*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*s+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=s*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(eu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(eu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=l*t+s*i-o*n,u=l*n+o*t-r*i,h=l*i+r*n-s*t,d=-r*t-s*n-o*i;return this.x=c*l+d*-r+u*-o-h*-s,this.y=u*l+d*-s+h*-r-c*-o,this.z=h*l+d*-o+c*-s-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,s=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*s-n*l,this.z=n*o-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ha.copy(this).projectOnVector(e),this.sub(ha)}reflect(e){return this.sub(ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ha=new L,eu=new On;class ii{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),er.copy(e.boundingBox),er.applyMatrix4(e.matrixWorld),this.union(er);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let s=0,o=r.count;s<o;s++)Hn.fromBufferAttribute(r,s).applyMatrix4(e.matrixWorld),this.expandByPoint(Hn)}else i.boundingBox===null&&i.computeBoundingBox(),er.copy(i.boundingBox),er.applyMatrix4(e.matrixWorld),this.union(er)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(es),Vs.subVectors(this.max,es),tr.subVectors(e.a,es),nr.subVectors(e.b,es),ir.subVectors(e.c,es),oi.subVectors(nr,tr),ai.subVectors(ir,nr),Pi.subVectors(tr,ir);let t=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-Pi.z,Pi.y,oi.z,0,-oi.x,ai.z,0,-ai.x,Pi.z,0,-Pi.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-Pi.y,Pi.x,0];return!da(t,tr,nr,ir,Vs)||(t=[1,0,0,0,1,0,0,0,1],!da(t,tr,nr,ir,Vs))?!1:(Gs.crossVectors(oi,ai),t=[Gs.x,Gs.y,Gs.z],da(t,tr,nr,ir,Vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bn=[new L,new L,new L,new L,new L,new L,new L,new L],Hn=new L,er=new ii,tr=new L,nr=new L,ir=new L,oi=new L,ai=new L,Pi=new L,es=new L,Vs=new L,Gs=new L,Li=new L;function da(a,e,t,n,i){for(let r=0,s=a.length-3;r<=s;r+=3){Li.fromArray(a,r);const o=i.x*Math.abs(Li.x)+i.y*Math.abs(Li.y)+i.z*Math.abs(Li.z),l=e.dot(Li),c=t.dot(Li),u=n.dot(Li);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const dm=new ii,ts=new L,fa=new L;class ri{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):dm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ts.subVectors(e,this.center);const t=ts.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ts,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ts.copy(e.center).add(fa)),this.expandByPoint(ts.copy(e.center).sub(fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vn=new L,pa=new L,Ws=new L,li=new L,ma=new L,qs=new L,ga=new L;class Bo{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){pa.copy(e).add(t).multiplyScalar(.5),Ws.copy(t).sub(e).normalize(),li.copy(this.origin).sub(pa);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Ws),o=li.dot(this.direction),l=-li.dot(Ws),c=li.lengthSq(),u=Math.abs(1-s*s);let h,d,p,_;if(u>0)if(h=s*l-o,d=s*o-l,_=r*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,p=h*(h+s*d+2*o)+d*(s*h+d+2*l)+c}else d=r,h=Math.max(0,-(s*d+o)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(s*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-s*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(s*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=s>0?-r:r,h=Math.max(0,-(s*d+o)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(pa).addScaledVector(Ws,d),p}intersectSphere(e,t){Vn.subVectors(e.center,this.origin);const n=Vn.dot(this.direction),i=Vn.dot(Vn)-n*n,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,n,i,r){ma.subVectors(t,e),qs.subVectors(n,e),ga.crossVectors(ma,qs);let s=this.direction.dot(ga),o;if(s>0){if(i)return null;o=1}else if(s<0)o=-1,s=-s;else return null;li.subVectors(this.origin,e);const l=o*this.direction.dot(qs.crossVectors(li,qs));if(l<0)return null;const c=o*this.direction.dot(ma.cross(li));if(c<0||l+c>s)return null;const u=-o*li.dot(ga);return u<0?null:this.at(u/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,s,o,l,c,u,h,d,p,_,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=s,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/rr.setFromMatrixColumn(e,0).length(),r=1/rr.setFromMatrixColumn(e,1).length(),s=1/rr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=s*u,p=s*h,_=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+_*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=_+p*c,t[10]=s*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,_=c*u,g=c*h;t[0]=d+g*o,t[4]=_*o-p,t[8]=s*c,t[1]=s*h,t[5]=s*u,t[9]=-o,t[2]=p*o-_,t[6]=g+d*o,t[10]=s*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,_=c*u,g=c*h;t[0]=d-g*o,t[4]=-s*h,t[8]=_+p*o,t[1]=p+_*o,t[5]=s*u,t[9]=g-d*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const d=s*u,p=s*h,_=o*u,g=o*h;t[0]=l*u,t[4]=_*c-p,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const d=s*l,p=s*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-d*h,t[8]=_*h+p,t[1]=h,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+_,t[10]=d-g*h}else if(e.order==="XZY"){const d=s*l,p=s*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=s*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=o*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fm,e,pm)}lookAt(e,t,n){const i=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),ci.crossVectors(n,Qt),ci.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),ci.crossVectors(n,Qt)),ci.normalize(),js.crossVectors(Qt,ci),i[0]=ci.x,i[4]=js.x,i[8]=Qt.x,i[1]=ci.y,i[5]=js.y,i[9]=Qt.y,i[2]=ci.z,i[6]=js.z,i[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],_=n[2],g=n[6],m=n[10],f=n[14],b=n[3],x=n[7],v=n[11],S=n[15],w=i[0],E=i[4],T=i[8],y=i[12],M=i[1],I=i[5],N=i[9],R=i[13],z=i[2],O=i[6],W=i[10],q=i[14],H=i[3],ne=i[7],Q=i[11],xe=i[15];return r[0]=s*w+o*M+l*z+c*H,r[4]=s*E+o*I+l*O+c*ne,r[8]=s*T+o*N+l*W+c*Q,r[12]=s*y+o*R+l*q+c*xe,r[1]=u*w+h*M+d*z+p*H,r[5]=u*E+h*I+d*O+p*ne,r[9]=u*T+h*N+d*W+p*Q,r[13]=u*y+h*R+d*q+p*xe,r[2]=_*w+g*M+m*z+f*H,r[6]=_*E+g*I+m*O+f*ne,r[10]=_*T+g*N+m*W+f*Q,r[14]=_*y+g*R+m*q+f*xe,r[3]=b*w+x*M+v*z+S*H,r[7]=b*E+x*I+v*O+S*ne,r[11]=b*T+x*N+v*W+S*Q,r[15]=b*y+x*R+v*q+S*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],_=e[3],g=e[7],m=e[11],f=e[15];return _*(+r*l*h-i*c*h-r*o*d+n*c*d+i*o*p-n*l*p)+g*(+t*l*p-t*c*d+r*s*d-i*s*p+i*c*u-r*l*u)+m*(+t*c*h-t*o*p-r*s*h+n*s*p+r*o*u-n*c*u)+f*(-i*o*u-t*l*h+t*o*d+i*s*h-n*s*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],_=e[12],g=e[13],m=e[14],f=e[15],b=h*m*c-g*d*c+g*l*p-o*m*p-h*l*f+o*d*f,x=_*d*c-u*m*c-_*l*p+s*m*p+u*l*f-s*d*f,v=u*g*c-_*h*c+_*o*p-s*g*p-u*o*f+s*h*f,S=_*h*l-u*g*l-_*o*d+s*g*d+u*o*m-s*h*m,w=t*b+n*x+i*v+r*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=b*E,e[1]=(g*d*r-h*m*r-g*i*p+n*m*p+h*i*f-n*d*f)*E,e[2]=(o*m*r-g*l*r+g*i*c-n*m*c-o*i*f+n*l*f)*E,e[3]=(h*l*r-o*d*r-h*i*c+n*d*c+o*i*p-n*l*p)*E,e[4]=x*E,e[5]=(u*m*r-_*d*r+_*i*p-t*m*p-u*i*f+t*d*f)*E,e[6]=(_*l*r-s*m*r-_*i*c+t*m*c+s*i*f-t*l*f)*E,e[7]=(s*d*r-u*l*r+u*i*c-t*d*c-s*i*p+t*l*p)*E,e[8]=v*E,e[9]=(_*h*r-u*g*r-_*n*p+t*g*p+u*n*f-t*h*f)*E,e[10]=(s*g*r-_*o*r+_*n*c-t*g*c-s*n*f+t*o*f)*E,e[11]=(u*o*r-s*h*r-u*n*c+t*h*c+s*n*p-t*o*p)*E,e[12]=S*E,e[13]=(u*g*i-_*h*i+_*n*d-t*g*d-u*n*m+t*h*m)*E,e[14]=(_*o*i-s*g*i-_*n*l+t*g*l+s*n*m-t*o*m)*E,e[15]=(s*h*i-u*o*i+u*n*l-t*h*l-s*n*d+t*o*d)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,o=e.y,l=e.z,c=r*s,u=r*o;return this.set(c*s+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*s,0,c*l-i*o,u*l+i*s,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,s){return this.set(1,n,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,s=t._y,o=t._z,l=t._w,c=r+r,u=s+s,h=o+o,d=r*c,p=r*u,_=r*h,g=s*u,m=s*h,f=o*h,b=l*c,x=l*u,v=l*h,S=n.x,w=n.y,E=n.z;return i[0]=(1-(g+f))*S,i[1]=(p+v)*S,i[2]=(_-x)*S,i[3]=0,i[4]=(p-v)*w,i[5]=(1-(d+f))*w,i[6]=(m+b)*w,i[7]=0,i[8]=(_+x)*E,i[9]=(m-b)*E,i[10]=(1-(d+g))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=rr.set(i[0],i[1],i[2]).length();const s=rr.set(i[4],i[5],i[6]).length(),o=rr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],yn.copy(this);const c=1/r,u=1/s,h=1/o;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=h,yn.elements[9]*=h,yn.elements[10]*=h,t.setFromRotationMatrix(yn),n.x=r,n.y=s,n.z=o,this}makePerspective(e,t,n,i,r,s){const o=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(s+r)/(s-r),p=-2*s*r/(s-r);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,r,s){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(s-r),h=(t+e)*l,d=(n+i)*c,p=(s+r)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const rr=new L,yn=new Fe,fm=new L(0,0,0),pm=new L(1,1,1),ci=new L,js=new L,Qt=new L,tu=new Fe,nu=new On;class Ho{constructor(e=0,t=0,n=0,i=Ho.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],s=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-_t(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return tu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nu.setFromEuler(this),this.setFromQuaternion(nu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ho.DEFAULT_ORDER="XYZ";class Il{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mm=0;const iu=new L,sr=new On,Gn=new Fe,Xs=new L,ns=new L,gm=new L,_m=new On,ru=new L(1,0,0),su=new L(0,1,0),ou=new L(0,0,1),vm={type:"added"},au={type:"removed"};class it extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=it.DEFAULT_UP.clone();const e=new L,t=new Ho,n=new On,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Fe},normalMatrix:{value:new Ve}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=it.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Il,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.multiply(sr),this}rotateOnWorldAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.premultiply(sr),this}rotateX(e){return this.rotateOnAxis(ru,e)}rotateY(e){return this.rotateOnAxis(su,e)}rotateZ(e){return this.rotateOnAxis(ou,e)}translateOnAxis(e,t){return iu.copy(e).applyQuaternion(this.quaternion),this.position.add(iu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ru,e)}translateY(e){return this.translateOnAxis(su,e)}translateZ(e){return this.translateOnAxis(ou,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xs.copy(e):Xs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(ns,Xs,this.up):Gn.lookAt(Xs,ns,this.up),this.quaternion.setFromRotationMatrix(Gn),i&&(Gn.extractRotation(i.matrixWorld),sr.setFromRotationMatrix(Gn),this.quaternion.premultiply(sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(vm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(au)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(au)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectsByProperty(e,t);s.length>0&&(n=n.concat(s))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,e,gm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,_m,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),d=s(e.skeletons),p=s(e.animations),_=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}it.DEFAULT_UP=new L(0,1,0);it.DEFAULT_MATRIX_AUTO_UPDATE=!0;it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new L,Wn=new L,_a=new L,qn=new L,or=new L,ar=new L,lu=new L,va=new L,xa=new L,ya=new L;let Ys=!1;class Mn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Sn.subVectors(e,t),i.cross(Sn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Sn.subVectors(i,t),Wn.subVectors(n,t),_a.subVectors(e,t);const s=Sn.dot(Sn),o=Sn.dot(Wn),l=Sn.dot(_a),c=Wn.dot(Wn),u=Wn.dot(_a),h=s*c-o*o;if(h===0)return r.set(-2,-1,-1);const d=1/h,p=(c*l-o*u)*d,_=(s*u-o*l)*d;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,qn),qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getUV(e,t,n,i,r,s,o,l){return Ys===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ys=!0),this.getInterpolation(e,t,n,i,r,s,o,l)}static getInterpolation(e,t,n,i,r,s,o,l){return this.getBarycoord(e,t,n,i,qn),l.setScalar(0),l.addScaledVector(r,qn.x),l.addScaledVector(s,qn.y),l.addScaledVector(o,qn.z),l}static isFrontFacing(e,t,n,i){return Sn.subVectors(n,t),Wn.subVectors(e,t),Sn.cross(Wn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),Sn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Ys===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ys=!0),Mn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return Mn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let s,o;or.subVectors(i,n),ar.subVectors(r,n),va.subVectors(e,n);const l=or.dot(va),c=ar.dot(va);if(l<=0&&c<=0)return t.copy(n);xa.subVectors(e,i);const u=or.dot(xa),h=ar.dot(xa);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(or,s);ya.subVectors(e,r);const p=or.dot(ya),_=ar.dot(ya);if(_>=0&&p<=_)return t.copy(r);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(ar,o);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return lu.subVectors(r,i),o=(h-u)/(h-u+(p-_)),t.copy(i).addScaledVector(lu,o);const f=1/(m+g+d);return s=g*f,o=d*f,t.copy(n).addScaledVector(or,s).addScaledVector(ar,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let xm=0;class In extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=gn(),this.name="",this.type="Material",this.blending=Mr,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=qh,this.blendDst=jh,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=aa,this.stencilZFail=aa,this.stencilZPass=aa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mr&&(n.blending=this.blending),this.side!==ei&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ad={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},$s={h:0,s:0,l:0};function Sa(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Me{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Jt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Jt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Jt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Jt.workingColorSpace){if(e=Dl(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=Sa(s,r,e+1/3),this.g=Sa(s,r,e),this.b=Sa(s,r,e-1/3)}return Jt.toWorkingColorSpace(this,i),this}setStyle(e,t=Pn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Jt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Jt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pn){const n=ad[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}copyLinearToSRGB(e){return this.r=ca(e.r),this.g=ca(e.g),this.b=ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pn){return Jt.fromWorkingColorSpace(It.copy(this),e),_t(It.r*255,0,255)<<16^_t(It.g*255,0,255)<<8^_t(It.b*255,0,255)<<0}getHexString(e=Pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Jt.workingColorSpace){Jt.fromWorkingColorSpace(It.copy(this),t);const n=It.r,i=It.g,r=It.b,s=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const h=s-o;switch(c=u<=.5?h/(s+o):h/(2-s-o),s){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Pn){Jt.fromWorkingColorSpace(It.copy(this),e);const t=It.r,n=It.g,i=It.b;return e!==Pn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(bn),bn.h+=e,bn.s+=t,bn.l+=n,this.setHSL(bn.h,bn.s,bn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL($s);const n=gs(bn.h,$s.h,t),i=gs(bn.s,$s.s,t),r=gs(bn.l,$s.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new Me;Me.NAMES=ad;class fi extends In{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $n=ym();function ym(){const a=new ArrayBuffer(4),e=new Float32Array(a),t=new Uint32Array(a),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),s=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)s[l]=l<<23;s[31]=1199570944,s[32]=2147483648;for(let l=33;l<63;++l)s[l]=2147483648+(l-32<<23);s[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:s,offsetTable:o}}function Sm(a){Math.abs(a)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),a=_t(a,-65504,65504),$n.floatView[0]=a;const e=$n.uint32View[0],t=e>>23&511;return $n.baseTable[t]+((e&8388607)>>$n.shiftTable[t])}function bm(a){const e=a>>10;return $n.uint32View[0]=$n.mantissaTable[$n.offsetTable[e]+(a&1023)]+$n.exponentTable[e],$n.floatView[0]}const Ks={toHalfFloat:Sm,fromHalfFloat:bm},gt=new L,Zs=new re;class Pt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=tl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zs.fromBufferAttribute(this,t),Zs.applyMatrix3(e),this.setXY(t,Zs.x,Zs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array),r=Je(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ld extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cd extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class St extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Mm=0;const ln=new Fe,ba=new it,lr=new L,en=new ii,is=new ii,At=new L;class Lt extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=gn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(id(e)?cd:ld)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,n){return ln.makeTranslation(e,t,n),this.applyMatrix4(ln),this}scale(e,t,n){return ln.makeScale(e,t,n),this.applyMatrix4(ln),this}lookAt(e){return ba.lookAt(e),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new St(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];is.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(en.min,is.min),en.expandByPoint(At),At.addVectors(en.max,is.max),en.expandByPoint(At)):(en.expandByPoint(is.min),en.expandByPoint(is.max))}en.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)At.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(At));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)At.fromBufferAttribute(o,c),l&&(lr.fromBufferAttribute(e,c),At.add(lr)),i=Math.max(i,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,s=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let M=0;M<o;M++)c[M]=new L,u[M]=new L;const h=new L,d=new L,p=new L,_=new re,g=new re,m=new re,f=new L,b=new L;function x(M,I,N){h.fromArray(i,M*3),d.fromArray(i,I*3),p.fromArray(i,N*3),_.fromArray(s,M*2),g.fromArray(s,I*2),m.fromArray(s,N*2),d.sub(h),p.sub(h),g.sub(_),m.sub(_);const R=1/(g.x*m.y-m.x*g.y);isFinite(R)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(R),b.copy(p).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(R),c[M].add(f),c[I].add(f),c[N].add(f),u[M].add(b),u[I].add(b),u[N].add(b))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let M=0,I=v.length;M<I;++M){const N=v[M],R=N.start,z=N.count;for(let O=R,W=R+z;O<W;O+=3)x(n[O+0],n[O+1],n[O+2])}const S=new L,w=new L,E=new L,T=new L;function y(M){E.fromArray(r,M*3),T.copy(E);const I=c[M];S.copy(I),S.sub(E.multiplyScalar(E.dot(I))).normalize(),w.crossVectors(T,I);const R=w.dot(u[M])<0?-1:1;l[M*4]=S.x,l[M*4+1]=S.y,l[M*4+2]=S.z,l[M*4+3]=R}for(let M=0,I=v.length;M<I;++M){const N=v[M],R=N.start,z=N.count;for(let O=R,W=R+z;O<W;O+=3)y(n[O+0]),y(n[O+1]),y(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new L,r=new L,s=new L,o=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*u;for(let f=0;f<u;f++)d[_++]=c[p++]}return new Pt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cu=new Fe,Cn=new Bo,Js=new ri,uu=new L,cr=new L,ur=new L,hr=new L,Ma=new L,Qs=new L,eo=new re,to=new re,no=new re,hu=new L,du=new L,fu=new L,io=new L,ro=new L;class Ye extends it{constructor(e=new Lt,t=new fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Qs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Ma.fromBufferAttribute(h,e),s?Qs.addScaledVector(Ma,u):Qs.addScaledVector(Ma.sub(t),u))}t.add(Qs)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(r),Cn.copy(e.ray).recast(e.near),Js.containsPoint(Cn.origin)===!1&&(Cn.intersectSphere(Js,uu)===null||Cn.origin.distanceToSquared(uu)>(e.far-e.near)**2))||(cu.copy(r).invert(),Cn.copy(e.ray).applyMatrix4(cu),n.boundingBox!==null&&Cn.intersectsBox(n.boundingBox)===!1))return;let s;const o=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.attributes.normal,d=n.groups,p=n.drawRange;if(o!==null)if(Array.isArray(i))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=i[m.materialIndex],b=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=b,S=x;v<S;v+=3){const w=o.getX(v),E=o.getX(v+1),T=o.getX(v+2);s=so(this,f,e,Cn,c,u,h,w,E,T),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const b=o.getX(m),x=o.getX(m+1),v=o.getX(m+2);s=so(this,i,e,Cn,c,u,h,b,x,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(i))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=i[m.materialIndex],b=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=b,S=x;v<S;v+=3){const w=v,E=v+1,T=v+2;s=so(this,f,e,Cn,c,u,h,w,E,T),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const b=m,x=m+1,v=m+2;s=so(this,i,e,Cn,c,u,h,b,x,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function wm(a,e,t,n,i,r,s,o){let l;if(e.side===Wt?l=n.intersectTriangle(s,r,i,!0,o):l=n.intersectTriangle(i,r,s,e.side===ei,o),l===null)return null;ro.copy(o),ro.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(ro);return c<t.near||c>t.far?null:{distance:c,point:ro.clone(),object:a}}function so(a,e,t,n,i,r,s,o,l,c){a.getVertexPosition(o,cr),a.getVertexPosition(l,ur),a.getVertexPosition(c,hr);const u=wm(a,e,t,n,cr,ur,hr,io);if(u){i&&(eo.fromBufferAttribute(i,o),to.fromBufferAttribute(i,l),no.fromBufferAttribute(i,c),u.uv=Mn.getInterpolation(io,cr,ur,hr,eo,to,no,new re)),r&&(eo.fromBufferAttribute(r,o),to.fromBufferAttribute(r,l),no.fromBufferAttribute(r,c),u.uv2=Mn.getInterpolation(io,cr,ur,hr,eo,to,no,new re)),s&&(hu.fromBufferAttribute(s,o),du.fromBufferAttribute(s,l),fu.fromBufferAttribute(s,c),u.normal=Mn.getInterpolation(io,cr,ur,hr,hu,du,fu,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new L,materialIndex:0};Mn.getNormal(cr,ur,hr,h.normal),u.face=h}return u}class Xr extends Lt{constructor(e=1,t=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const o=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],u=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,n,t,e,s,r,0),_("z","y","x",1,-1,n,t,-e,s,r,1),_("x","z","y",1,1,e,n,t,i,s,2),_("x","z","y",1,-1,e,n,-t,i,s,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(u,3)),this.setAttribute("uv",new St(h,2));function _(g,m,f,b,x,v,S,w,E,T,y){const M=v/E,I=S/T,N=v/2,R=S/2,z=w/2,O=E+1,W=T+1;let q=0,H=0;const ne=new L;for(let Q=0;Q<W;Q++){const xe=Q*I-R;for(let se=0;se<O;se++){const j=se*M-N;ne[g]=j*b,ne[m]=xe*x,ne[f]=z,c.push(ne.x,ne.y,ne.z),ne[g]=0,ne[m]=0,ne[f]=w>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(se/E),h.push(1-Q/T),q+=1}}for(let Q=0;Q<T;Q++)for(let xe=0;xe<E;xe++){const se=d+xe+O*Q,j=d+xe+O*(Q+1),K=d+(xe+1)+O*(Q+1),ce=d+(xe+1)+O*Q;l.push(se,j,ce),l.push(j,K,ce),H+=6}o.addGroup(p,H,y),p+=H,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Nr(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Bt(a){const e={};for(let t=0;t<a.length;t++){const n=Nr(a[t]);for(const i in n)e[i]=n[i]}return e}function Am(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function ud(a){return a.getRenderTarget()===null&&a.outputEncoding===Xe?Pn:Ms}const Po={clone:Nr,merge:Bt};var Tm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Em=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tt extends In{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tm,this.fragmentShader=Em,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Nr(e.uniforms),this.uniformsGroups=Am(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let hd=class extends it{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class Ht extends hd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Or*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ms*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Or*2*Math.atan(Math.tan(ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ms*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/l,t-=s.offsetY*n/c,i*=s.width/l,n*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const dr=-90,fr=1;class Cm extends it{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ht(dr,fr,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Ht(dr,fr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const s=new Ht(dr,fr,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(0,1,0),this.add(s);const o=new Ht(dr,fr,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new Ht(dr,fr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Ht(dr,fr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,s,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=Qn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,s),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class zl extends Tt{constructor(e,t,n,i,r,s,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Rr,super(e,t,n,i,r,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pm extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new zl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Xr(5,5,5),r=new tt({name:"CubemapFromEquirect",uniforms:Nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:_i});r.uniforms.tEquirect.value=t;const s=new Ye(i,r),o=t.minFilter;return t.minFilter===yi&&(t.minFilter=yt),new Cm(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}}const wa=new L,Lm=new L,Rm=new Ve;class zi{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=wa.subVectors(n,t).cross(Lm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(wa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Rm.getNormalMatrix(e),i=this.coplanarPoint(wa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new ri,oo=new L;class Ul{constructor(e=new zi,t=new zi,n=new zi,i=new zi,r=new zi,s=new zi){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],s=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],p=n[9],_=n[10],g=n[11],m=n[12],f=n[13],b=n[14],x=n[15];return t[0].setComponents(o-i,h-l,g-d,x-m).normalize(),t[1].setComponents(o+i,h+l,g+d,x+m).normalize(),t[2].setComponents(o+r,h+c,g+p,x+f).normalize(),t[3].setComponents(o-r,h-c,g-p,x-f).normalize(),t[4].setComponents(o-s,h-u,g-_,x-b).normalize(),t[5].setComponents(o+s,h+u,g+_,x+b).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(oo.x=i.normal.x>0?e.max.x:e.min.x,oo.y=i.normal.y>0?e.max.y:e.min.y,oo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(oo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dd(){let a=null,e=!1,t=null,n=null;function i(r,s){t(r,s),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function Dm(a,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,p=a.createBuffer();a.bindBuffer(u,p),a.bufferData(u,h,d),c.onUploadCallback();let _;if(h instanceof Float32Array)_=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(h instanceof Int16Array)_=5122;else if(h instanceof Uint32Array)_=5125;else if(h instanceof Int32Array)_=5124;else if(h instanceof Int8Array)_=5120;else if(h instanceof Uint8Array)_=5121;else if(h instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const d=u.array,p=u.updateRange;a.bindBuffer(h,c),p.count===-1?a.bufferSubData(h,0,d):(t?a.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):a.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(a.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:s,remove:o,update:l}}class on extends Lt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,s=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,p=[],_=[],g=[],m=[];for(let f=0;f<u;f++){const b=f*d-s;for(let x=0;x<c;x++){const v=x*h-r;_.push(v,-b,0),g.push(0,0,1),m.push(x/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<o;b++){const x=b+c*f,v=b+c*(f+1),S=b+1+c*(f+1),w=b+1+c*f;p.push(x,v,w),p.push(v,S,w)}this.setIndex(p),this.setAttribute("position",new St(_,3)),this.setAttribute("normal",new St(g,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.width,e.height,e.widthSegments,e.heightSegments)}}var Im=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Um=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Om=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,km="vec3 transformed = vec3( position );",Bm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ym=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$m=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Km=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Zm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Jm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,eg=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ng=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ig=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sg="gl_FragColor = linearToOutputTexel( gl_FragColor );",og=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ag=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ug=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_g=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,vg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bg=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Mg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ag=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Eg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,Cg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Pg=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Dg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ig=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ug=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Og=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ng=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Wg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,qg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,jg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Xg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Jg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Qg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,e0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,n0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,r0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,s0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,o0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,l0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,c0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,u0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,h0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,d0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,f0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,p0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,m0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,g0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,v0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,x0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,y0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,S0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,b0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,M0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,w0=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,A0=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,T0=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,E0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const C0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,P0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,z0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,U0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,O0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,N0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,k0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,B0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,H0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V0=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,G0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,X0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,K0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Q0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,i_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,o_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,a_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Oe={alphamap_fragment:Im,alphamap_pars_fragment:zm,alphatest_fragment:Um,alphatest_pars_fragment:Om,aomap_fragment:Nm,aomap_pars_fragment:Fm,begin_vertex:km,beginnormal_vertex:Bm,bsdfs:Hm,iridescence_fragment:Vm,bumpmap_pars_fragment:Gm,clipping_planes_fragment:Wm,clipping_planes_pars_fragment:qm,clipping_planes_pars_vertex:jm,clipping_planes_vertex:Xm,color_fragment:Ym,color_pars_fragment:$m,color_pars_vertex:Km,color_vertex:Zm,common:Jm,cube_uv_reflection_fragment:Qm,defaultnormal_vertex:eg,displacementmap_pars_vertex:tg,displacementmap_vertex:ng,emissivemap_fragment:ig,emissivemap_pars_fragment:rg,encodings_fragment:sg,encodings_pars_fragment:og,envmap_fragment:ag,envmap_common_pars_fragment:lg,envmap_pars_fragment:cg,envmap_pars_vertex:ug,envmap_physical_pars_fragment:bg,envmap_vertex:hg,fog_vertex:dg,fog_pars_vertex:fg,fog_fragment:pg,fog_pars_fragment:mg,gradientmap_pars_fragment:gg,lightmap_fragment:_g,lightmap_pars_fragment:vg,lights_lambert_fragment:xg,lights_lambert_pars_fragment:yg,lights_pars_begin:Sg,lights_toon_fragment:Mg,lights_toon_pars_fragment:wg,lights_phong_fragment:Ag,lights_phong_pars_fragment:Tg,lights_physical_fragment:Eg,lights_physical_pars_fragment:Cg,lights_fragment_begin:Pg,lights_fragment_maps:Lg,lights_fragment_end:Rg,logdepthbuf_fragment:Dg,logdepthbuf_pars_fragment:Ig,logdepthbuf_pars_vertex:zg,logdepthbuf_vertex:Ug,map_fragment:Og,map_pars_fragment:Ng,map_particle_fragment:Fg,map_particle_pars_fragment:kg,metalnessmap_fragment:Bg,metalnessmap_pars_fragment:Hg,morphcolor_vertex:Vg,morphnormal_vertex:Gg,morphtarget_pars_vertex:Wg,morphtarget_vertex:qg,normal_fragment_begin:jg,normal_fragment_maps:Xg,normal_pars_fragment:Yg,normal_pars_vertex:$g,normal_vertex:Kg,normalmap_pars_fragment:Zg,clearcoat_normal_fragment_begin:Jg,clearcoat_normal_fragment_maps:Qg,clearcoat_pars_fragment:e0,iridescence_pars_fragment:t0,output_fragment:n0,packing:i0,premultiplied_alpha_fragment:r0,project_vertex:s0,dithering_fragment:o0,dithering_pars_fragment:a0,roughnessmap_fragment:l0,roughnessmap_pars_fragment:c0,shadowmap_pars_fragment:u0,shadowmap_pars_vertex:h0,shadowmap_vertex:d0,shadowmask_pars_fragment:f0,skinbase_vertex:p0,skinning_pars_vertex:m0,skinning_vertex:g0,skinnormal_vertex:_0,specularmap_fragment:v0,specularmap_pars_fragment:x0,tonemapping_fragment:y0,tonemapping_pars_fragment:S0,transmission_fragment:b0,transmission_pars_fragment:M0,uv_pars_fragment:w0,uv_pars_vertex:A0,uv_vertex:T0,worldpos_vertex:E0,background_vert:C0,background_frag:P0,backgroundCube_vert:L0,backgroundCube_frag:R0,cube_vert:D0,cube_frag:I0,depth_vert:z0,depth_frag:U0,distanceRGBA_vert:O0,distanceRGBA_frag:N0,equirect_vert:F0,equirect_frag:k0,linedashed_vert:B0,linedashed_frag:H0,meshbasic_vert:V0,meshbasic_frag:G0,meshlambert_vert:W0,meshlambert_frag:q0,meshmatcap_vert:j0,meshmatcap_frag:X0,meshnormal_vert:Y0,meshnormal_frag:$0,meshphong_vert:K0,meshphong_frag:Z0,meshphysical_vert:J0,meshphysical_frag:Q0,meshtoon_vert:e_,meshtoon_frag:t_,points_vert:n_,points_frag:i_,shadow_vert:r_,shadow_frag:s_,sprite_vert:o_,sprite_frag:a_},de={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaTest:{value:0}}},Ln={basic:{uniforms:Bt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Bt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Me(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Bt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Bt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Bt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Me(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Bt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Bt([de.points,de.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Bt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Bt([de.common,de.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Bt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Bt([de.sprite,de.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Bt([de.common,de.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Bt([de.lights,de.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Ln.physical={uniforms:Bt([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const ao={r:0,b:0,g:0};function l_(a,e,t,n,i,r,s){const o=new Me(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function _(m,f){let b=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x));const v=a.xr,S=v.getSession&&v.getSession();S&&S.environmentBlendMode==="additive"&&(x=null),x===null?g(o,l):x&&x.isColor&&(g(x,1),b=!0),(a.autoClear||b)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ko)?(u===void 0&&(u=new Ye(new Xr(1,1,1),new tt({name:"BackgroundCubeMaterial",uniforms:Nr(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=x.encoding!==Xe,(h!==x||d!==x.version||p!==a.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,p=a.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ye(new on(2,2),new tt({name:"BackgroundMaterial",uniforms:Nr(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=x.encoding!==Xe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||p!==a.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,p=a.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,f){m.getRGB(ao,ud(a)),n.buffers.color.setClear(ao.r,ao.g,ao.b,f,s)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:_}}function c_(a,e,t,n){const i=a.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||r!==null,o={},l=m(null);let c=l,u=!1;function h(z,O,W,q,H){let ne=!1;if(s){const Q=g(q,W,O);c!==Q&&(c=Q,p(c.object)),ne=f(z,q,W,H),ne&&b(z,q,W,H)}else{const Q=O.wireframe===!0;(c.geometry!==q.id||c.program!==W.id||c.wireframe!==Q)&&(c.geometry=q.id,c.program=W.id,c.wireframe=Q,ne=!0)}H!==null&&t.update(H,34963),(ne||u)&&(u=!1,T(z,O,W,q),H!==null&&a.bindBuffer(34963,t.get(H).buffer))}function d(){return n.isWebGL2?a.createVertexArray():r.createVertexArrayOES()}function p(z){return n.isWebGL2?a.bindVertexArray(z):r.bindVertexArrayOES(z)}function _(z){return n.isWebGL2?a.deleteVertexArray(z):r.deleteVertexArrayOES(z)}function g(z,O,W){const q=W.wireframe===!0;let H=o[z.id];H===void 0&&(H={},o[z.id]=H);let ne=H[O.id];ne===void 0&&(ne={},H[O.id]=ne);let Q=ne[q];return Q===void 0&&(Q=m(d()),ne[q]=Q),Q}function m(z){const O=[],W=[],q=[];for(let H=0;H<i;H++)O[H]=0,W[H]=0,q[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:W,attributeDivisors:q,object:z,attributes:{},index:null}}function f(z,O,W,q){const H=c.attributes,ne=O.attributes;let Q=0;const xe=W.getAttributes();for(const se in xe)if(xe[se].location>=0){const K=H[se];let ce=ne[se];if(ce===void 0&&(se==="instanceMatrix"&&z.instanceMatrix&&(ce=z.instanceMatrix),se==="instanceColor"&&z.instanceColor&&(ce=z.instanceColor)),K===void 0||K.attribute!==ce||ce&&K.data!==ce.data)return!0;Q++}return c.attributesNum!==Q||c.index!==q}function b(z,O,W,q){const H={},ne=O.attributes;let Q=0;const xe=W.getAttributes();for(const se in xe)if(xe[se].location>=0){let K=ne[se];K===void 0&&(se==="instanceMatrix"&&z.instanceMatrix&&(K=z.instanceMatrix),se==="instanceColor"&&z.instanceColor&&(K=z.instanceColor));const ce={};ce.attribute=K,K&&K.data&&(ce.data=K.data),H[se]=ce,Q++}c.attributes=H,c.attributesNum=Q,c.index=q}function x(){const z=c.newAttributes;for(let O=0,W=z.length;O<W;O++)z[O]=0}function v(z){S(z,0)}function S(z,O){const W=c.newAttributes,q=c.enabledAttributes,H=c.attributeDivisors;W[z]=1,q[z]===0&&(a.enableVertexAttribArray(z),q[z]=1),H[z]!==O&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,O),H[z]=O)}function w(){const z=c.newAttributes,O=c.enabledAttributes;for(let W=0,q=O.length;W<q;W++)O[W]!==z[W]&&(a.disableVertexAttribArray(W),O[W]=0)}function E(z,O,W,q,H,ne){n.isWebGL2===!0&&(W===5124||W===5125)?a.vertexAttribIPointer(z,O,W,H,ne):a.vertexAttribPointer(z,O,W,q,H,ne)}function T(z,O,W,q){if(n.isWebGL2===!1&&(z.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const H=q.attributes,ne=W.getAttributes(),Q=O.defaultAttributeValues;for(const xe in ne){const se=ne[xe];if(se.location>=0){let j=H[xe];if(j===void 0&&(xe==="instanceMatrix"&&z.instanceMatrix&&(j=z.instanceMatrix),xe==="instanceColor"&&z.instanceColor&&(j=z.instanceColor)),j!==void 0){const K=j.normalized,ce=j.itemSize,pe=t.get(j);if(pe===void 0)continue;const B=pe.buffer,Le=pe.type,Pe=pe.bytesPerElement;if(j.isInterleavedBufferAttribute){const le=j.data,ye=le.stride,te=j.offset;if(le.isInstancedInterleavedBuffer){for(let $=0;$<se.locationSize;$++)S(se.location+$,le.meshPerAttribute);z.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let $=0;$<se.locationSize;$++)v(se.location+$);a.bindBuffer(34962,B);for(let $=0;$<se.locationSize;$++)E(se.location+$,ce/se.locationSize,Le,K,ye*Pe,(te+ce/se.locationSize*$)*Pe)}else{if(j.isInstancedBufferAttribute){for(let le=0;le<se.locationSize;le++)S(se.location+le,j.meshPerAttribute);z.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let le=0;le<se.locationSize;le++)v(se.location+le);a.bindBuffer(34962,B);for(let le=0;le<se.locationSize;le++)E(se.location+le,ce/se.locationSize,Le,K,ce*Pe,ce/se.locationSize*le*Pe)}}else if(Q!==void 0){const K=Q[xe];if(K!==void 0)switch(K.length){case 2:a.vertexAttrib2fv(se.location,K);break;case 3:a.vertexAttrib3fv(se.location,K);break;case 4:a.vertexAttrib4fv(se.location,K);break;default:a.vertexAttrib1fv(se.location,K)}}}}w()}function y(){N();for(const z in o){const O=o[z];for(const W in O){const q=O[W];for(const H in q)_(q[H].object),delete q[H];delete O[W]}delete o[z]}}function M(z){if(o[z.id]===void 0)return;const O=o[z.id];for(const W in O){const q=O[W];for(const H in q)_(q[H].object),delete q[H];delete O[W]}delete o[z.id]}function I(z){for(const O in o){const W=o[O];if(W[z.id]===void 0)continue;const q=W[z.id];for(const H in q)_(q[H].object),delete q[H];delete W[z.id]}}function N(){R(),u=!0,c!==l&&(c=l,p(c.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:N,resetDefaultState:R,dispose:y,releaseStatesOfGeometry:M,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:v,disableUnusedAttributes:w}}function u_(a,e,t,n){const i=n.isWebGL2;let r;function s(c){r=c}function o(c,u){a.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let d,p;if(i)d=a,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,c,u,h),t.update(u,r,h)}this.setMode=s,this.render=o,this.renderInstances=l}function h_(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){if(E==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";E="mediump"}return E==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&a.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=a.getParameter(34930),d=a.getParameter(35660),p=a.getParameter(3379),_=a.getParameter(34076),g=a.getParameter(34921),m=a.getParameter(36347),f=a.getParameter(36348),b=a.getParameter(36349),x=d>0,v=s||e.has("OES_texture_float"),S=x&&v,w=s?a.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:S,maxSamples:w}}function d_(a){const e=this;let t=null,n=0,i=!1,r=!1;const s=new zi,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||i;return i=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,f=a.get(h);if(!i||_===null||_.length===0||r&&!m)r?u(null):c();else{const b=r?0:n,x=b*4;let v=f.clippingState||null;l.value=v,v=u(_,d,x,p);for(let S=0;S!==x;++S)v[S]=t[S];f.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const f=p+g*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,v=p;x!==g;++x,v+=4)s.copy(h[x]).applyMatrix4(b,o),s.normal.toArray(m,v),m[v+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function f_(a){let e=new WeakMap;function t(s,o){return o===Eo?s.mapping=Rr:o===Ja&&(s.mapping=Dr),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const o=s.mapping;if(o===Eo||o===Ja)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Pm(l.height/2);return c.fromEquirectangularTexture(a,s),e.set(s,c),s.addEventListener("dispose",i),t(c.texture,s.mapping)}else return null}}return s}function i(s){const o=s.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Vo extends hd{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,s=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xr=4,pu=[.125,.215,.35,.446,.526,.582],Ni=20,Aa=new Vo,mu=new Me;let Ta=null;const Ui=(1+Math.sqrt(5))/2,pr=1/Ui,gu=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Ui,pr),new L(0,Ui,-pr),new L(pr,0,Ui),new L(-pr,0,Ui),new L(Ui,pr,0),new L(-Ui,pr,0)];class _u{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ta=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ta),e.scissorTest=!1,lo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rr||e.mapping===Dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ta=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yt,minFilter:yt,generateMipmaps:!1,type:Kn,format:dn,encoding:Si,depthBuffer:!1},i=vu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=p_(r)),this._blurMaterial=m_(r,e,t)}return i}_compileMaterial(e){const t=new Ye(this._lodPlanes[0],e);this._renderer.compile(t,Aa)}_sceneToCubeUV(e,t,n,i){const o=new Ht(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(mu),u.toneMapping=Qn,u.autoClear=!1;const p=new fi({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),_=new Ye(new Xr,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(mu),g=!0);for(let f=0;f<6;f++){const b=f%3;b===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):b===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const x=this._cubeSize;lo(i,b*x,f>2?x:0,x,x),u.setRenderTarget(i),g&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Rr||e.mapping===Dr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=yu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xu());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new Ye(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;lo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Aa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=gu[(i-1)%gu.length];this._blur(e,i-1,i,r,s)}t.autoClear=n}_blur(e,t,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",r),this._halfBlur(s,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ye(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ni-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):Ni;m>Ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ni}`);const f=[];let b=0;for(let E=0;E<Ni;++E){const T=E/g,y=Math.exp(-T*T/2);f.push(y),E===0?b+=y:E<m&&(b+=2*y)}for(let E=0;E<f.length;E++)f[E]=f[E]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-n;const v=this._sizeLods[i],S=3*v*(i>x-xr?i-x+xr:0),w=4*(this._cubeSize-v);lo(t,S,w,3*v,2*v),l.setRenderTarget(t),l.render(h,Aa)}}function p_(a){const e=[],t=[],n=[];let i=a;const r=a-xr+1+pu.length;for(let s=0;s<r;s++){const o=Math.pow(2,i);t.push(o);let l=1/o;s>a-xr?l=pu[s-a+xr-1]:s===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,g=3,m=2,f=1,b=new Float32Array(g*_*p),x=new Float32Array(m*_*p),v=new Float32Array(f*_*p);for(let w=0;w<p;w++){const E=w%3*2/3-1,T=w>2?0:-1,y=[E,T,0,E+2/3,T,0,E+2/3,T+1,0,E,T,0,E+2/3,T+1,0,E,T+1,0];b.set(y,g*_*w),x.set(d,m*_*w);const M=[w,w,w,w,w,w];v.set(M,f*_*w)}const S=new Lt;S.setAttribute("position",new Pt(b,g)),S.setAttribute("uv",new Pt(x,m)),S.setAttribute("faceIndex",new Pt(v,f)),e.push(S),i>xr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function vu(a,e,t){const n=new An(a,e,t);return n.texture.mapping=ko,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lo(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function m_(a,e,t){const n=new Float32Array(Ni),i=new L(0,1,0);return new tt({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function xu(){return new tt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function yu(){return new tt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Ol(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function g_(a){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Eo||l===Ja,u=l===Rr||l===Dr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new _u(a)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new _u(a));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function __(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function v_(a,e,t,n){const i={},r=new WeakMap;function s(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",s),delete i[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",s),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],34962);const p=h.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,f=g.length;m<f;m++)e.update(g[m],34962)}}function c(h){const d=[],p=h.index,_=h.attributes.position;let g=0;if(p!==null){const b=p.array;g=p.version;for(let x=0,v=b.length;x<v;x+=3){const S=b[x+0],w=b[x+1],E=b[x+2];d.push(S,w,w,E,E,S)}}else{const b=_.array;g=_.version;for(let x=0,v=b.length/3-1;x<v;x+=3){const S=x+0,w=x+1,E=x+2;d.push(S,w,w,E,E,S)}}const m=new(id(d)?cd:ld)(d,1);m.version=g;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function x_(a,e,t,n){const i=n.isWebGL2;let r;function s(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,p){a.drawElements(r,p,o,d*l),t.update(p,r,1)}function h(d,p,_){if(_===0)return;let g,m;if(i)g=a,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,p,o,d*l,_),t.update(p,r,_)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=h}function y_(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(t.calls++,s){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function S_(a,e){return a[0]-e[0]}function b_(a,e){return Math.abs(e[1])-Math.abs(a[1])}function M_(a,e,t){const n={},i=new Float32Array(8),r=new WeakMap,s=new et,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let m=r.get(u);if(m===void 0||m.count!==g){let O=function(){R.dispose(),r.delete(u),u.removeEventListener("dispose",O)};var p=O;m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let y=0;x===!0&&(y=1),v===!0&&(y=2),S===!0&&(y=3);let M=u.attributes.position.count*y,I=1;M>e.maxTextureSize&&(I=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const N=new Float32Array(M*I*4*g),R=new od(N,M,I,g);R.type=wn,R.needsUpdate=!0;const z=y*4;for(let W=0;W<g;W++){const q=w[W],H=E[W],ne=T[W],Q=M*I*4*W;for(let xe=0;xe<q.count;xe++){const se=xe*z;x===!0&&(s.fromBufferAttribute(q,xe),N[Q+se+0]=s.x,N[Q+se+1]=s.y,N[Q+se+2]=s.z,N[Q+se+3]=0),v===!0&&(s.fromBufferAttribute(H,xe),N[Q+se+4]=s.x,N[Q+se+5]=s.y,N[Q+se+6]=s.z,N[Q+se+7]=0),S===!0&&(s.fromBufferAttribute(ne,xe),N[Q+se+8]=s.x,N[Q+se+9]=s.y,N[Q+se+10]=s.z,N[Q+se+11]=ne.itemSize===4?s.w:1)}}m={count:g,texture:R,size:new re(M,I)},r.set(u,m),u.addEventListener("dispose",O)}let f=0;for(let x=0;x<d.length;x++)f+=d[x];const b=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(a,"morphTargetBaseInfluence",b),h.getUniforms().setValue(a,"morphTargetInfluences",d),h.getUniforms().setValue(a,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(a,"morphTargetsTextureSize",m.size)}else{const _=d===void 0?0:d.length;let g=n[u.id];if(g===void 0||g.length!==_){g=[];for(let v=0;v<_;v++)g[v]=[v,0];n[u.id]=g}for(let v=0;v<_;v++){const S=g[v];S[0]=v,S[1]=d[v]}g.sort(b_);for(let v=0;v<8;v++)v<_&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(S_);const m=u.morphAttributes.position,f=u.morphAttributes.normal;let b=0;for(let v=0;v<8;v++){const S=o[v],w=S[0],E=S[1];w!==Number.MAX_SAFE_INTEGER&&E?(m&&u.getAttribute("morphTarget"+v)!==m[w]&&u.setAttribute("morphTarget"+v,m[w]),f&&u.getAttribute("morphNormal"+v)!==f[w]&&u.setAttribute("morphNormal"+v,f[w]),i[v]=E,b+=E):(m&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),f&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const x=u.morphTargetsRelative?1:1-b;h.getUniforms().setValue(a,"morphTargetBaseInfluence",x),h.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function w_(a,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function s(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}const fd=new Tt,pd=new od,md=new hm,gd=new zl,Su=[],bu=[],Mu=new Float32Array(16),wu=new Float32Array(9),Au=new Float32Array(4);function Yr(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let r=Su[i];if(r===void 0&&(r=new Float32Array(i),Su[i]=r),e!==0){n.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(r,o)}return r}function bt(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function Mt(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Go(a,e){let t=bu[e];t===void 0&&(t=new Int32Array(e),bu[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function A_(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function T_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;a.uniform2fv(this.addr,e),Mt(t,e)}}function E_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;a.uniform3fv(this.addr,e),Mt(t,e)}}function C_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;a.uniform4fv(this.addr,e),Mt(t,e)}}function P_(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(bt(t,n))return;Au.set(n),a.uniformMatrix2fv(this.addr,!1,Au),Mt(t,n)}}function L_(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(bt(t,n))return;wu.set(n),a.uniformMatrix3fv(this.addr,!1,wu),Mt(t,n)}}function R_(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(bt(t,n))return;Mu.set(n),a.uniformMatrix4fv(this.addr,!1,Mu),Mt(t,n)}}function D_(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function I_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;a.uniform2iv(this.addr,e),Mt(t,e)}}function z_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;a.uniform3iv(this.addr,e),Mt(t,e)}}function U_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;a.uniform4iv(this.addr,e),Mt(t,e)}}function O_(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function N_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;a.uniform2uiv(this.addr,e),Mt(t,e)}}function F_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;a.uniform3uiv(this.addr,e),Mt(t,e)}}function k_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;a.uniform4uiv(this.addr,e),Mt(t,e)}}function B_(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||fd,i)}function H_(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||md,i)}function V_(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||gd,i)}function G_(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||pd,i)}function W_(a){switch(a){case 5126:return A_;case 35664:return T_;case 35665:return E_;case 35666:return C_;case 35674:return P_;case 35675:return L_;case 35676:return R_;case 5124:case 35670:return D_;case 35667:case 35671:return I_;case 35668:case 35672:return z_;case 35669:case 35673:return U_;case 5125:return O_;case 36294:return N_;case 36295:return F_;case 36296:return k_;case 35678:case 36198:case 36298:case 36306:case 35682:return B_;case 35679:case 36299:case 36307:return H_;case 35680:case 36300:case 36308:case 36293:return V_;case 36289:case 36303:case 36311:case 36292:return G_}}function q_(a,e){a.uniform1fv(this.addr,e)}function j_(a,e){const t=Yr(e,this.size,2);a.uniform2fv(this.addr,t)}function X_(a,e){const t=Yr(e,this.size,3);a.uniform3fv(this.addr,t)}function Y_(a,e){const t=Yr(e,this.size,4);a.uniform4fv(this.addr,t)}function $_(a,e){const t=Yr(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function K_(a,e){const t=Yr(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Z_(a,e){const t=Yr(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function J_(a,e){a.uniform1iv(this.addr,e)}function Q_(a,e){a.uniform2iv(this.addr,e)}function ev(a,e){a.uniform3iv(this.addr,e)}function tv(a,e){a.uniform4iv(this.addr,e)}function nv(a,e){a.uniform1uiv(this.addr,e)}function iv(a,e){a.uniform2uiv(this.addr,e)}function rv(a,e){a.uniform3uiv(this.addr,e)}function sv(a,e){a.uniform4uiv(this.addr,e)}function ov(a,e,t){const n=this.cache,i=e.length,r=Go(t,i);bt(n,r)||(a.uniform1iv(this.addr,r),Mt(n,r));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||fd,r[s])}function av(a,e,t){const n=this.cache,i=e.length,r=Go(t,i);bt(n,r)||(a.uniform1iv(this.addr,r),Mt(n,r));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||md,r[s])}function lv(a,e,t){const n=this.cache,i=e.length,r=Go(t,i);bt(n,r)||(a.uniform1iv(this.addr,r),Mt(n,r));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||gd,r[s])}function cv(a,e,t){const n=this.cache,i=e.length,r=Go(t,i);bt(n,r)||(a.uniform1iv(this.addr,r),Mt(n,r));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||pd,r[s])}function uv(a){switch(a){case 5126:return q_;case 35664:return j_;case 35665:return X_;case 35666:return Y_;case 35674:return $_;case 35675:return K_;case 35676:return Z_;case 5124:case 35670:return J_;case 35667:case 35671:return Q_;case 35668:case 35672:return ev;case 35669:case 35673:return tv;case 5125:return nv;case 36294:return iv;case 36295:return rv;case 36296:return sv;case 35678:case 36198:case 36298:case 36306:case 35682:return ov;case 35679:case 36299:case 36307:return av;case 35680:case 36300:case 36308:case 36293:return lv;case 36289:case 36303:case 36311:case 36292:return cv}}class hv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=W_(t.type)}}class dv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=uv(t.type)}}class fv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Ea=/(\w+)(\])?(\[|\.)?/g;function Tu(a,e){a.seq.push(e),a.map[e.id]=e}function pv(a,e,t){const n=a.name,i=n.length;for(Ea.lastIndex=0;;){const r=Ea.exec(n),s=Ea.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===i){Tu(t,c===void 0?new hv(o,a,e):new dv(o,a,e));break}else{let h=t.map[o];h===void 0&&(h=new fv(o),Tu(t,h)),t=h}}}class So{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),s=e.getUniformLocation(t,r.name);pv(r,s,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in t&&n.push(s)}return n}}function Eu(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let mv=0;function gv(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=i;s<r;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}function _v(a){switch(a){case Si:return["Linear","( value )"];case Xe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function Cu(a,e,t){const n=a.getShaderParameter(e,35713),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const s=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+gv(a.getShaderSource(e),s)}else return i}function vv(a,e){const t=_v(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function xv(a,e){let t;switch(e){case yp:t="Linear";break;case Sp:t="Reinhard";break;case Yh:t="OptimizedCineon";break;case bp:t="ACESFilmic";break;case Mp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function yv(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.normalMapTangentSpace||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(hs).join(`
`)}function Sv(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function bv(a,e){const t={},n=a.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=a.getActiveAttrib(e,i),s=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),t[s]={type:r.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function hs(a){return a!==""}function Pu(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lu(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Mv=/^[ \t]*#include +<([\w\d./]+)>/gm;function rl(a){return a.replace(Mv,wv)}function wv(a,e){const t=Oe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return rl(t)}const Av=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ru(a){return a.replace(Av,Tv)}function Tv(a,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Du(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ev(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Gh?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Wh?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===us&&(e="SHADOWMAP_TYPE_VSM"),e}function Cv(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Rr:case Dr:e="ENVMAP_TYPE_CUBE";break;case ko:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Pv(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Dr:e="ENVMAP_MODE_REFRACTION";break}return e}function Lv(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Xh:e="ENVMAP_BLENDING_MULTIPLY";break;case vp:e="ENVMAP_BLENDING_MIX";break;case xp:e="ENVMAP_BLENDING_ADD";break}return e}function Rv(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Dv(a,e,t,n){const i=a.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=Ev(t),c=Cv(t),u=Pv(t),h=Lv(t),d=Rv(t),p=t.isWebGL2?"":yv(t),_=Sv(r),g=i.createProgram();let m,f,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[_].filter(hs).join(`
`),m.length>0&&(m+=`
`),f=[p,_].filter(hs).join(`
`),f.length>0&&(f+=`
`)):(m=[Du(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),f=[p,Du(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Qn?xv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.encodings_pars_fragment,vv("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hs).join(`
`)),s=rl(s),s=Pu(s,t),s=Lu(s,t),o=rl(o),o=Pu(o,t),o=Lu(o,t),s=Ru(s),o=Ru(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=b+m+s,v=b+f+o,S=Eu(i,35633,x),w=Eu(i,35632,v);if(i.attachShader(g,S),i.attachShader(g,w),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),a.debug.checkShaderErrors){const y=i.getProgramInfoLog(g).trim(),M=i.getShaderInfoLog(S).trim(),I=i.getShaderInfoLog(w).trim();let N=!0,R=!0;if(i.getProgramParameter(g,35714)===!1)if(N=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,g,S,w);else{const z=Cu(i,S,"vertex"),O=Cu(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,35715)+`

Program Info Log: `+y+`
`+z+`
`+O)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(M===""||I==="")&&(R=!1);R&&(this.diagnostics={runnable:N,programLog:y,vertexShader:{log:M,prefix:m},fragmentShader:{log:I,prefix:f}})}i.deleteShader(S),i.deleteShader(w);let E;this.getUniforms=function(){return E===void 0&&(E=new So(i,g)),E};let T;return this.getAttributes=function(){return T===void 0&&(T=bv(i,g)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=mv++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=w,this}let Iv=0;class zv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Uv(e),t.set(e,n)),n}}class Uv{constructor(e){this.id=Iv++,this.code=e,this.usedTimes=0}}function Ov(a,e,t,n,i,r,s){const o=new Il,l=new zv,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return y===1?"uv2":"uv"}function m(y,M,I,N,R){const z=N.fog,O=R.geometry,W=y.isMeshStandardMaterial?N.environment:null,q=(y.isMeshStandardMaterial?t:e).get(y.envMap||W),H=q&&q.mapping===ko?q.image.height:null,ne=_[y.type];y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const Q=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,xe=Q!==void 0?Q.length:0;let se=0;O.morphAttributes.position!==void 0&&(se=1),O.morphAttributes.normal!==void 0&&(se=2),O.morphAttributes.color!==void 0&&(se=3);let j,K,ce,pe;if(ne){const ge=Ln[ne];j=ge.vertexShader,K=ge.fragmentShader}else j=y.vertexShader,K=y.fragmentShader,l.update(y),ce=l.getVertexShaderID(y),pe=l.getFragmentShaderID(y);const B=a.getRenderTarget(),Le=R.isInstancedMesh===!0,Pe=!!y.map,le=!!y.matcap,ye=!!q,te=!!y.aoMap,$=!!y.lightMap,ee=!!y.bumpMap,_e=!!y.normalMap,ue=!!y.displacementMap,Ee=!!y.emissiveMap,Ce=!!y.metalnessMap,we=!!y.roughnessMap,ze=y.clearcoat>0,We=y.iridescence>0,P=y.sheen>0,A=y.transmission>0,G=ze&&!!y.clearcoatMap,ie=ze&&!!y.clearcoatNormalMap,oe=ze&&!!y.clearcoatRoughnessMap,he=We&&!!y.iridescenceMap,D=We&&!!y.iridescenceThicknessMap,J=P&&!!y.sheenColorMap,V=P&&!!y.sheenRoughnessMap,fe=!!y.specularMap,ve=!!y.specularColorMap,be=!!y.specularIntensityMap,me=A&&!!y.transmissionMap,Se=A&&!!y.thicknessMap,De=!!y.gradientMap,Ne=!!y.alphaMap,dt=y.alphaTest>0,U=!!y.extensions,Y=!!O.attributes.uv2;return{isWebGL2:u,shaderID:ne,shaderName:y.type,vertexShader:j,fragmentShader:K,defines:y.defines,customVertexShaderID:ce,customFragmentShaderID:pe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,instancing:Le,instancingColor:Le&&R.instanceColor!==null,supportsVertexTextures:d,outputEncoding:B===null?a.outputEncoding:B.isXRRenderTarget===!0?B.texture.encoding:Si,map:Pe,matcap:le,envMap:ye,envMapMode:ye&&q.mapping,envMapCubeUVHeight:H,aoMap:te,lightMap:$,bumpMap:ee,normalMap:_e,displacementMap:d&&ue,emissiveMap:Ee,normalMapObjectSpace:_e&&y.normalMapType===Vp,normalMapTangentSpace:_e&&y.normalMapType===Qh,decodeVideoTexture:Pe&&y.map.isVideoTexture===!0&&y.map.encoding===Xe,metalnessMap:Ce,roughnessMap:we,clearcoat:ze,clearcoatMap:G,clearcoatNormalMap:ie,clearcoatRoughnessMap:oe,iridescence:We,iridescenceMap:he,iridescenceThicknessMap:D,sheen:P,sheenColorMap:J,sheenRoughnessMap:V,specularMap:fe,specularColorMap:ve,specularIntensityMap:be,transmission:A,transmissionMap:me,thicknessMap:Se,gradientMap:De,opaque:y.transparent===!1&&y.blending===Mr,alphaMap:Ne,alphaTest:dt,combine:y.combine,mapUv:Pe&&g(y.map.channel),aoMapUv:te&&g(y.aoMap.channel),lightMapUv:$&&g(y.lightMap.channel),bumpMapUv:ee&&g(y.bumpMap.channel),normalMapUv:_e&&g(y.normalMap.channel),displacementMapUv:ue&&g(y.displacementMap.channel),emissiveMapUv:Ee&&g(y.emissiveMap.channel),metalnessMapUv:Ce&&g(y.metalnessMap.channel),roughnessMapUv:we&&g(y.roughnessMap.channel),clearcoatMapUv:G&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ie&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:D&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:J&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:V&&g(y.sheenRoughnessMap.channel),specularMapUv:fe&&g(y.specularMap.channel),specularColorMapUv:ve&&g(y.specularColorMap.channel),specularIntensityMapUv:be&&g(y.specularIntensityMap.channel),transmissionMapUv:me&&g(y.transmissionMap.channel),thicknessMapUv:Se&&g(y.thicknessMap.channel),alphaMapUv:Ne&&g(y.alphaMap.channel),vertexTangents:_e&&!!O.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs2:Y,pointsUvs:R.isPoints===!0&&!!O.attributes.uv&&(Pe||Ne),fog:!!z,useFog:y.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:R.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:se,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:a.shadowMap.enabled&&I.length>0,shadowMapType:a.shadowMap.type,toneMapping:y.toneMapped?a.toneMapping:Qn,useLegacyLights:a.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===at,flipSided:y.side===Wt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:U&&y.extensions.derivatives===!0,extensionFragDepth:U&&y.extensions.fragDepth===!0,extensionDrawBuffers:U&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:U&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)M.push(I),M.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(b(M,y),x(M,y),M.push(a.outputEncoding)),M.push(y.customProgramCacheKey),M.join()}function b(y,M){y.push(M.precision),y.push(M.outputEncoding),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function x(y,M){o.disableAll(),M.isWebGL2&&o.enable(0),M.supportsVertexTextures&&o.enable(1),M.instancing&&o.enable(2),M.instancingColor&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUvs2&&o.enable(13),M.vertexTangents&&o.enable(14),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.useLegacyLights&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.decodeVideoTexture&&o.enable(17),M.opaque&&o.enable(18),M.pointsUvs&&o.enable(19),y.push(o.mask)}function v(y){const M=_[y.type];let I;if(M){const N=Ln[M];I=Po.clone(N.uniforms)}else I=y.uniforms;return I}function S(y,M){let I;for(let N=0,R=c.length;N<R;N++){const z=c[N];if(z.cacheKey===M){I=z,++I.usedTimes;break}}return I===void 0&&(I=new Dv(a,M,y,r),c.push(I)),I}function w(y){if(--y.usedTimes===0){const M=c.indexOf(y);c[M]=c[c.length-1],c.pop(),y.destroy()}}function E(y){l.remove(y)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:S,releaseProgram:w,releaseShaderCache:E,programs:c,dispose:T}}function Nv(){let a=new WeakMap;function e(r){let s=a.get(r);return s===void 0&&(s={},a.set(r,s)),s}function t(r){a.delete(r)}function n(r,s,o){a.get(r)[s]=o}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Fv(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Iu(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function zu(){const a=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function s(h,d,p,_,g,m){let f=a[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},a[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=g,f.group=m),e++,f}function o(h,d,p,_,g,m){const f=s(h,d,p,_,g,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(h,d,p,_,g,m){const f=s(h,d,p,_,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||Fv),n.length>1&&n.sort(d||Iu),i.length>1&&i.sort(d||Iu)}function u(){for(let h=e,d=a.length;h<d;h++){const p=a[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function kv(){let a=new WeakMap;function e(n,i){const r=a.get(n);let s;return r===void 0?(s=new zu,a.set(n,[s])):i>=r.length?(s=new zu,r.push(s)):s=r[i],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function Bv(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Me};break;case"SpotLight":t={position:new L,direction:new L,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new L,halfWidth:new L,halfHeight:new L};break}return a[e.id]=t,t}}}function Hv(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let Vv=0;function Gv(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Wv(a,e){const t=new Bv,n=Hv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new L);const r=new L,s=new Fe,o=new Fe;function l(u,h){let d=0,p=0,_=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let g=0,m=0,f=0,b=0,x=0,v=0,S=0,w=0,E=0,T=0;u.sort(Gv);const y=h===!0?Math.PI:1;for(let I=0,N=u.length;I<N;I++){const R=u[I],z=R.color,O=R.intensity,W=R.distance,q=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=z.r*O*y,p+=z.g*O*y,_+=z.b*O*y;else if(R.isLightProbe)for(let H=0;H<9;H++)i.probe[H].addScaledVector(R.sh.coefficients[H],O);else if(R.isDirectionalLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity*y),R.castShadow){const ne=R.shadow,Q=n.get(R);Q.shadowBias=ne.bias,Q.shadowNormalBias=ne.normalBias,Q.shadowRadius=ne.radius,Q.shadowMapSize=ne.mapSize,i.directionalShadow[g]=Q,i.directionalShadowMap[g]=q,i.directionalShadowMatrix[g]=R.shadow.matrix,v++}i.directional[g]=H,g++}else if(R.isSpotLight){const H=t.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(z).multiplyScalar(O*y),H.distance=W,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,i.spot[f]=H;const ne=R.shadow;if(R.map&&(i.spotLightMap[E]=R.map,E++,ne.updateMatrices(R),R.castShadow&&T++),i.spotLightMatrix[f]=ne.matrix,R.castShadow){const Q=n.get(R);Q.shadowBias=ne.bias,Q.shadowNormalBias=ne.normalBias,Q.shadowRadius=ne.radius,Q.shadowMapSize=ne.mapSize,i.spotShadow[f]=Q,i.spotShadowMap[f]=q,w++}f++}else if(R.isRectAreaLight){const H=t.get(R);H.color.copy(z).multiplyScalar(O),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),i.rectArea[b]=H,b++}else if(R.isPointLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity*y),H.distance=R.distance,H.decay=R.decay,R.castShadow){const ne=R.shadow,Q=n.get(R);Q.shadowBias=ne.bias,Q.shadowNormalBias=ne.normalBias,Q.shadowRadius=ne.radius,Q.shadowMapSize=ne.mapSize,Q.shadowCameraNear=ne.camera.near,Q.shadowCameraFar=ne.camera.far,i.pointShadow[m]=Q,i.pointShadowMap[m]=q,i.pointShadowMatrix[m]=R.shadow.matrix,S++}i.point[m]=H,m++}else if(R.isHemisphereLight){const H=t.get(R);H.skyColor.copy(R.color).multiplyScalar(O*y),H.groundColor.copy(R.groundColor).multiplyScalar(O*y),i.hemi[x]=H,x++}}b>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=_;const M=i.hash;(M.directionalLength!==g||M.pointLength!==m||M.spotLength!==f||M.rectAreaLength!==b||M.hemiLength!==x||M.numDirectionalShadows!==v||M.numPointShadows!==S||M.numSpotShadows!==w||M.numSpotMaps!==E)&&(i.directional.length=g,i.spot.length=f,i.rectArea.length=b,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=w+E-T,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=T,M.directionalLength=g,M.pointLength=m,M.spotLength=f,M.rectAreaLength=b,M.hemiLength=x,M.numDirectionalShadows=v,M.numPointShadows=S,M.numSpotShadows=w,M.numSpotMaps=E,i.version=Vv++)}function c(u,h){let d=0,p=0,_=0,g=0,m=0;const f=h.matrixWorldInverse;for(let b=0,x=u.length;b<x;b++){const v=u[b];if(v.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(f),d++}else if(v.isSpotLight){const S=i.spot[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(f),_++}else if(v.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(f),o.identity(),s.copy(v.matrixWorld),s.premultiply(f),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const S=i.point[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(f),p++}else if(v.isHemisphereLight){const S=i.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:i}}function Uu(a,e){const t=new Wv(a,e),n=[],i=[];function r(){n.length=0,i.length=0}function s(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function qv(a,e){let t=new WeakMap;function n(r,s=0){const o=t.get(r);let l;return o===void 0?(l=new Uu(a,e),t.set(r,[l])):s>=o.length?(l=new Uu(a,e),o.push(l)):l=o[s],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class $t extends In{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jv extends In{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $v(a,e,t){let n=new Ul;const i=new re,r=new re,s=new et,o=new $t({depthPacking:Yt}),l=new jv,c={},u=t.maxTextureSize,h={[ei]:Wt,[Wt]:ei,[at]:at},d=new tt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:Xv,fragmentShader:Yv}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Lt;_.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ye(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gh,this.render=function(v,S,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;const E=a.getRenderTarget(),T=a.getActiveCubeFace(),y=a.getActiveMipmapLevel(),M=a.state;M.setBlending(_i),M.buffers.color.setClear(1,1,1,1),M.buffers.depth.setTest(!0),M.setScissorTest(!1);for(let I=0,N=v.length;I<N;I++){const R=v[I],z=R.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",R,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const O=z.getFrameExtents();if(i.multiply(O),r.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/O.x),i.x=r.x*O.x,z.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/O.y),i.y=r.y*O.y,z.mapSize.y=r.y)),z.map===null){const q=this.type!==us?{minFilter:ut,magFilter:ut}:{};z.map=new An(i.x,i.y,q),z.map.texture.name=R.name+".shadowMap",z.camera.updateProjectionMatrix()}a.setRenderTarget(z.map),a.clear();const W=z.getViewportCount();for(let q=0;q<W;q++){const H=z.getViewport(q);s.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),M.viewport(s),z.updateMatrices(R,q),n=z.getFrustum(),x(S,w,z.camera,R,this.type)}z.isPointLightShadow!==!0&&this.type===us&&f(z,w),z.needsUpdate=!1}m.needsUpdate=!1,a.setRenderTarget(E,T,y)};function f(v,S){const w=e.update(g);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,p.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new An(i.x,i.y)),d.uniforms.shadow_pass.value=v.map.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,a.setRenderTarget(v.mapPass),a.clear(),a.renderBufferDirect(S,null,w,d,g,null),p.uniforms.shadow_pass.value=v.mapPass.texture,p.uniforms.resolution.value=v.mapSize,p.uniforms.radius.value=v.radius,a.setRenderTarget(v.map),a.clear(),a.renderBufferDirect(S,null,w,p,g,null)}function b(v,S,w,E){let T=null;const y=w.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(y!==void 0)T=y;else if(T=w.isPointLight===!0?l:o,a.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const M=T.uuid,I=S.uuid;let N=c[M];N===void 0&&(N={},c[M]=N);let R=N[I];R===void 0&&(R=T.clone(),N[I]=R),T=R}if(T.visible=S.visible,T.wireframe=S.wireframe,E===us?T.side=S.shadowSide!==null?S.shadowSide:S.side:T.side=S.shadowSide!==null?S.shadowSide:h[S.side],T.alphaMap=S.alphaMap,T.alphaTest=S.alphaTest,T.map=S.map,T.clipShadows=S.clipShadows,T.clippingPlanes=S.clippingPlanes,T.clipIntersection=S.clipIntersection,T.displacementMap=S.displacementMap,T.displacementScale=S.displacementScale,T.displacementBias=S.displacementBias,T.wireframeLinewidth=S.wireframeLinewidth,T.linewidth=S.linewidth,w.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const M=a.properties.get(T);M.light=w}return T}function x(v,S,w,E,T){if(v.visible===!1)return;if(v.layers.test(S.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&T===us)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,v.matrixWorld);const I=e.update(v),N=v.material;if(Array.isArray(N)){const R=I.groups;for(let z=0,O=R.length;z<O;z++){const W=R[z],q=N[W.materialIndex];if(q&&q.visible){const H=b(v,q,E,T);a.renderBufferDirect(w,null,I,H,v,W)}}}else if(N.visible){const R=b(v,N,E,T);a.renderBufferDirect(w,null,I,R,v,null)}}const M=v.children;for(let I=0,N=M.length;I<N;I++)x(M[I],S,w,E,T)}}function Kv(a,e,t){const n=t.isWebGL2;function i(){let U=!1;const Y=new et;let ae=null;const ge=new et(0,0,0,0);return{setMask:function(Ae){ae!==Ae&&!U&&(a.colorMask(Ae,Ae,Ae,Ae),ae=Ae)},setLocked:function(Ae){U=Ae},setClear:function(Ae,nt,st,Rt,si){si===!0&&(Ae*=Rt,nt*=Rt,st*=Rt),Y.set(Ae,nt,st,Rt),ge.equals(Y)===!1&&(a.clearColor(Ae,nt,st,Rt),ge.copy(Y))},reset:function(){U=!1,ae=null,ge.set(-1,0,0,0)}}}function r(){let U=!1,Y=null,ae=null,ge=null;return{setTest:function(Ae){Ae?B(2929):Le(2929)},setMask:function(Ae){Y!==Ae&&!U&&(a.depthMask(Ae),Y=Ae)},setFunc:function(Ae){if(ae!==Ae){switch(Ae){case dp:a.depthFunc(512);break;case Rl:a.depthFunc(519);break;case fp:a.depthFunc(513);break;case Za:a.depthFunc(515);break;case pp:a.depthFunc(514);break;case mp:a.depthFunc(518);break;case gp:a.depthFunc(516);break;case _p:a.depthFunc(517);break;default:a.depthFunc(515)}ae=Ae}},setLocked:function(Ae){U=Ae},setClear:function(Ae){ge!==Ae&&(a.clearDepth(Ae),ge=Ae)},reset:function(){U=!1,Y=null,ae=null,ge=null}}}function s(){let U=!1,Y=null,ae=null,ge=null,Ae=null,nt=null,st=null,Rt=null,si=null;return{setTest:function(ft){U||(ft?B(2960):Le(2960))},setMask:function(ft){Y!==ft&&!U&&(a.stencilMask(ft),Y=ft)},setFunc:function(ft,an,En){(ae!==ft||ge!==an||Ae!==En)&&(a.stencilFunc(ft,an,En),ae=ft,ge=an,Ae=En)},setOp:function(ft,an,En){(nt!==ft||st!==an||Rt!==En)&&(a.stencilOp(ft,an,En),nt=ft,st=an,Rt=En)},setLocked:function(ft){U=ft},setClear:function(ft){si!==ft&&(a.clearStencil(ft),si=ft)},reset:function(){U=!1,Y=null,ae=null,ge=null,Ae=null,nt=null,st=null,Rt=null,si=null}}}const o=new i,l=new r,c=new s,u=new WeakMap,h=new WeakMap;let d={},p={},_=new WeakMap,g=[],m=null,f=!1,b=null,x=null,v=null,S=null,w=null,E=null,T=null,y=!1,M=null,I=null,N=null,R=null,z=null;const O=a.getParameter(35661);let W=!1,q=0;const H=a.getParameter(7938);H.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=q>=1):H.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=q>=2);let ne=null,Q={};const xe=a.getParameter(3088),se=a.getParameter(2978),j=new et().fromArray(xe),K=new et().fromArray(se);function ce(U,Y,ae){const ge=new Uint8Array(4),Ae=a.createTexture();a.bindTexture(U,Ae),a.texParameteri(U,10241,9728),a.texParameteri(U,10240,9728);for(let nt=0;nt<ae;nt++)a.texImage2D(Y+nt,0,6408,1,1,0,6408,5121,ge);return Ae}const pe={};pe[3553]=ce(3553,3553,1),pe[34067]=ce(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),B(2929),l.setFunc(Za),ue(!1),Ee(Sc),B(2884),ee(_i);function B(U){d[U]!==!0&&(a.enable(U),d[U]=!0)}function Le(U){d[U]!==!1&&(a.disable(U),d[U]=!1)}function Pe(U,Y){return p[U]!==Y?(a.bindFramebuffer(U,Y),p[U]=Y,n&&(U===36009&&(p[36160]=Y),U===36160&&(p[36009]=Y)),!0):!1}function le(U,Y){let ae=g,ge=!1;if(U)if(ae=_.get(Y),ae===void 0&&(ae=[],_.set(Y,ae)),U.isWebGLMultipleRenderTargets){const Ae=U.texture;if(ae.length!==Ae.length||ae[0]!==36064){for(let nt=0,st=Ae.length;nt<st;nt++)ae[nt]=36064+nt;ae.length=Ae.length,ge=!0}}else ae[0]!==36064&&(ae[0]=36064,ge=!0);else ae[0]!==1029&&(ae[0]=1029,ge=!0);ge&&(t.isWebGL2?a.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function ye(U){return m!==U?(a.useProgram(U),m=U,!0):!1}const te={[vr]:32774,[tp]:32778,[np]:32779};if(n)te[wc]=32775,te[Ac]=32776;else{const U=e.get("EXT_blend_minmax");U!==null&&(te[wc]=U.MIN_EXT,te[Ac]=U.MAX_EXT)}const $={[ip]:0,[rp]:1,[sp]:768,[qh]:770,[hp]:776,[cp]:774,[ap]:772,[op]:769,[jh]:771,[up]:775,[lp]:773};function ee(U,Y,ae,ge,Ae,nt,st,Rt){if(U===_i){f===!0&&(Le(3042),f=!1);return}if(f===!1&&(B(3042),f=!0),U!==ep){if(U!==b||Rt!==y){if((x!==vr||w!==vr)&&(a.blendEquation(32774),x=vr,w=vr),Rt)switch(U){case Mr:a.blendFuncSeparate(1,771,1,771);break;case Ka:a.blendFunc(1,1);break;case bc:a.blendFuncSeparate(0,769,0,1);break;case Mc:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Mr:a.blendFuncSeparate(770,771,1,771);break;case Ka:a.blendFunc(770,1);break;case bc:a.blendFuncSeparate(0,769,0,1);break;case Mc:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,S=null,E=null,T=null,b=U,y=Rt}return}Ae=Ae||Y,nt=nt||ae,st=st||ge,(Y!==x||Ae!==w)&&(a.blendEquationSeparate(te[Y],te[Ae]),x=Y,w=Ae),(ae!==v||ge!==S||nt!==E||st!==T)&&(a.blendFuncSeparate($[ae],$[ge],$[nt],$[st]),v=ae,S=ge,E=nt,T=st),b=U,y=!1}function _e(U,Y){U.side===at?Le(2884):B(2884);let ae=U.side===Wt;Y&&(ae=!ae),ue(ae),U.blending===Mr&&U.transparent===!1?ee(_i):ee(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),o.setMask(U.colorWrite);const ge=U.stencilWrite;c.setTest(ge),ge&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),we(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?B(32926):Le(32926)}function ue(U){M!==U&&(U?a.frontFace(2304):a.frontFace(2305),M=U)}function Ee(U){U!==Jf?(B(2884),U!==I&&(U===Sc?a.cullFace(1029):U===Qf?a.cullFace(1028):a.cullFace(1032))):Le(2884),I=U}function Ce(U){U!==N&&(W&&a.lineWidth(U),N=U)}function we(U,Y,ae){U?(B(32823),(R!==Y||z!==ae)&&(a.polygonOffset(Y,ae),R=Y,z=ae)):Le(32823)}function ze(U){U?B(3089):Le(3089)}function We(U){U===void 0&&(U=33984+O-1),ne!==U&&(a.activeTexture(U),ne=U)}function P(U,Y,ae){ae===void 0&&(ne===null?ae=33984+O-1:ae=ne);let ge=Q[ae];ge===void 0&&(ge={type:void 0,texture:void 0},Q[ae]=ge),(ge.type!==U||ge.texture!==Y)&&(ne!==ae&&(a.activeTexture(ae),ne=ae),a.bindTexture(U,Y||pe[U]),ge.type=U,ge.texture=Y)}function A(){const U=Q[ne];U!==void 0&&U.type!==void 0&&(a.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function G(){try{a.compressedTexImage2D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{a.compressedTexImage3D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{a.texSubImage2D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{a.texSubImage3D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function D(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function V(){try{a.texStorage2D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{a.texStorage3D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{a.texImage2D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{a.texImage3D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(U){j.equals(U)===!1&&(a.scissor(U.x,U.y,U.z,U.w),j.copy(U))}function Se(U){K.equals(U)===!1&&(a.viewport(U.x,U.y,U.z,U.w),K.copy(U))}function De(U,Y){let ae=h.get(Y);ae===void 0&&(ae=new WeakMap,h.set(Y,ae));let ge=ae.get(U);ge===void 0&&(ge=a.getUniformBlockIndex(Y,U.name),ae.set(U,ge))}function Ne(U,Y){const ge=h.get(Y).get(U);u.get(Y)!==ge&&(a.uniformBlockBinding(Y,ge,U.__bindingPointIndex),u.set(Y,ge))}function dt(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),d={},ne=null,Q={},p={},_=new WeakMap,g=[],m=null,f=!1,b=null,x=null,v=null,S=null,w=null,E=null,T=null,y=!1,M=null,I=null,N=null,R=null,z=null,j.set(0,0,a.canvas.width,a.canvas.height),K.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:B,disable:Le,bindFramebuffer:Pe,drawBuffers:le,useProgram:ye,setBlending:ee,setMaterial:_e,setFlipSided:ue,setCullFace:Ee,setLineWidth:Ce,setPolygonOffset:we,setScissorTest:ze,activeTexture:We,bindTexture:P,unbindTexture:A,compressedTexImage2D:G,compressedTexImage3D:ie,texImage2D:ve,texImage3D:be,updateUBOMapping:De,uniformBlockBinding:Ne,texStorage2D:V,texStorage3D:fe,texSubImage2D:oe,texSubImage3D:he,compressedTexSubImage2D:D,compressedTexSubImage3D:J,scissor:me,viewport:Se,reset:dt}}function Zv(a,e,t,n,i,r,s){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(P,A){return f?new OffscreenCanvas(P,A):ws("canvas")}function x(P,A,G,ie){let oe=1;if((P.width>ie||P.height>ie)&&(oe=ie/Math.max(P.width,P.height)),oe<1||A===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const he=A?nd:Math.floor,D=he(oe*P.width),J=he(oe*P.height);g===void 0&&(g=b(D,J));const V=G?b(D,J):g;return V.width=D,V.height=J,V.getContext("2d").drawImage(P,0,0,D,J),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+D+"x"+J+")."),V}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function v(P){return il(P.width)&&il(P.height)}function S(P){return o?!1:P.wrapS!==Vt||P.wrapT!==Vt||P.minFilter!==ut&&P.minFilter!==yt}function w(P,A){return P.generateMipmaps&&A&&P.minFilter!==ut&&P.minFilter!==yt}function E(P){a.generateMipmap(P)}function T(P,A,G,ie,oe=!1){if(o===!1)return A;if(P!==null){if(a[P]!==void 0)return a[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let he=A;return A===6403&&(G===5126&&(he=33326),G===5131&&(he=33325),G===5121&&(he=33321)),A===33319&&(G===5126&&(he=33328),G===5131&&(he=33327),G===5121&&(he=33323)),A===6408&&(G===5126&&(he=34836),G===5131&&(he=34842),G===5121&&(he=ie===Xe&&oe===!1?35907:32856),G===32819&&(he=32854),G===32820&&(he=32855)),(he===33325||he===33326||he===33327||he===33328||he===34842||he===34836)&&e.get("EXT_color_buffer_float"),he}function y(P,A,G){return w(P,G)===!0||P.isFramebufferTexture&&P.minFilter!==ut&&P.minFilter!==yt?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function M(P){return P===ut||P===Qa||P===yo?9728:9729}function I(P){const A=P.target;A.removeEventListener("dispose",I),R(A),A.isVideoTexture&&_.delete(A)}function N(P){const A=P.target;A.removeEventListener("dispose",N),O(A)}function R(P){const A=n.get(P);if(A.__webglInit===void 0)return;const G=P.source,ie=m.get(G);if(ie){const oe=ie[A.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&z(P),Object.keys(ie).length===0&&m.delete(G)}n.remove(P)}function z(P){const A=n.get(P);a.deleteTexture(A.__webglTexture);const G=P.source,ie=m.get(G);delete ie[A.__cacheKey],s.memory.textures--}function O(P){const A=P.texture,G=n.get(P),ie=n.get(A);if(ie.__webglTexture!==void 0&&(a.deleteTexture(ie.__webglTexture),s.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++)a.deleteFramebuffer(G.__webglFramebuffer[oe]),G.__webglDepthbuffer&&a.deleteRenderbuffer(G.__webglDepthbuffer[oe]);else{if(a.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&a.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&a.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let oe=0;oe<G.__webglColorRenderbuffer.length;oe++)G.__webglColorRenderbuffer[oe]&&a.deleteRenderbuffer(G.__webglColorRenderbuffer[oe]);G.__webglDepthRenderbuffer&&a.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let oe=0,he=A.length;oe<he;oe++){const D=n.get(A[oe]);D.__webglTexture&&(a.deleteTexture(D.__webglTexture),s.memory.textures--),n.remove(A[oe])}n.remove(A),n.remove(P)}let W=0;function q(){W=0}function H(){const P=W;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),W+=1,P}function ne(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.encoding),A.join()}function Q(P,A){const G=n.get(P);if(P.isVideoTexture&&ze(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){const ie=P.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(G,P,A);return}}t.bindTexture(3553,G.__webglTexture,33984+A)}function xe(P,A){const G=n.get(P);if(P.version>0&&G.__version!==P.version){Le(G,P,A);return}t.bindTexture(35866,G.__webglTexture,33984+A)}function se(P,A){const G=n.get(P);if(P.version>0&&G.__version!==P.version){Le(G,P,A);return}t.bindTexture(32879,G.__webglTexture,33984+A)}function j(P,A){const G=n.get(P);if(P.version>0&&G.__version!==P.version){Pe(G,P,A);return}t.bindTexture(34067,G.__webglTexture,33984+A)}const K={[Ir]:10497,[Vt]:33071,[Co]:33648},ce={[ut]:9728,[Qa]:9984,[yo]:9986,[yt]:9729,[Kh]:9985,[yi]:9987};function pe(P,A,G){if(G?(a.texParameteri(P,10242,K[A.wrapS]),a.texParameteri(P,10243,K[A.wrapT]),(P===32879||P===35866)&&a.texParameteri(P,32882,K[A.wrapR]),a.texParameteri(P,10240,ce[A.magFilter]),a.texParameteri(P,10241,ce[A.minFilter])):(a.texParameteri(P,10242,33071),a.texParameteri(P,10243,33071),(P===32879||P===35866)&&a.texParameteri(P,32882,33071),(A.wrapS!==Vt||A.wrapT!==Vt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(P,10240,M(A.magFilter)),a.texParameteri(P,10241,M(A.minFilter)),A.minFilter!==ut&&A.minFilter!==yt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===ut||A.minFilter!==yo&&A.minFilter!==yi||A.type===wn&&e.has("OES_texture_float_linear")===!1||o===!1&&A.type===Kn&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(a.texParameterf(P,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function B(P,A){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",I));const ie=A.source;let oe=m.get(ie);oe===void 0&&(oe={},m.set(ie,oe));const he=ne(A);if(he!==P.__cacheKey){oe[he]===void 0&&(oe[he]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,G=!0),oe[he].usedTimes++;const D=oe[P.__cacheKey];D!==void 0&&(oe[P.__cacheKey].usedTimes--,D.usedTimes===0&&z(A)),P.__cacheKey=he,P.__webglTexture=oe[he].texture}return G}function Le(P,A,G){let ie=3553;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ie=35866),A.isData3DTexture&&(ie=32879);const oe=B(P,A),he=A.source;t.bindTexture(ie,P.__webglTexture,33984+G);const D=n.get(he);if(he.version!==D.__version||oe===!0){t.activeTexture(33984+G),a.pixelStorei(37440,A.flipY),a.pixelStorei(37441,A.premultiplyAlpha),a.pixelStorei(3317,A.unpackAlignment),a.pixelStorei(37443,0);const J=S(A)&&v(A.image)===!1;let V=x(A.image,J,!1,u);V=We(A,V);const fe=v(V)||o,ve=r.convert(A.format,A.encoding);let be=r.convert(A.type),me=T(A.internalFormat,ve,be,A.encoding,A.isVideoTexture);pe(ie,A,fe);let Se;const De=A.mipmaps,Ne=o&&A.isVideoTexture!==!0,dt=D.__version===void 0||oe===!0,U=y(A,V,fe);if(A.isDepthTexture)me=6402,o?A.type===wn?me=36012:A.type===Fi?me=33190:A.type===wr?me=35056:me=33189:A.type===wn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Bi&&me===6402&&A.type!==Zh&&A.type!==Fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Fi,be=r.convert(A.type)),A.format===zr&&me===6402&&(me=34041,A.type!==wr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=wr,be=r.convert(A.type))),dt&&(Ne?t.texStorage2D(3553,1,me,V.width,V.height):t.texImage2D(3553,0,me,V.width,V.height,0,ve,be,null));else if(A.isDataTexture)if(De.length>0&&fe){Ne&&dt&&t.texStorage2D(3553,U,me,De[0].width,De[0].height);for(let Y=0,ae=De.length;Y<ae;Y++)Se=De[Y],Ne?t.texSubImage2D(3553,Y,0,0,Se.width,Se.height,ve,be,Se.data):t.texImage2D(3553,Y,me,Se.width,Se.height,0,ve,be,Se.data);A.generateMipmaps=!1}else Ne?(dt&&t.texStorage2D(3553,U,me,V.width,V.height),t.texSubImage2D(3553,0,0,0,V.width,V.height,ve,be,V.data)):t.texImage2D(3553,0,me,V.width,V.height,0,ve,be,V.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ne&&dt&&t.texStorage3D(35866,U,me,De[0].width,De[0].height,V.depth);for(let Y=0,ae=De.length;Y<ae;Y++)Se=De[Y],A.format!==dn?ve!==null?Ne?t.compressedTexSubImage3D(35866,Y,0,0,0,Se.width,Se.height,V.depth,ve,Se.data,0,0):t.compressedTexImage3D(35866,Y,me,Se.width,Se.height,V.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?t.texSubImage3D(35866,Y,0,0,0,Se.width,Se.height,V.depth,ve,be,Se.data):t.texImage3D(35866,Y,me,Se.width,Se.height,V.depth,0,ve,be,Se.data)}else{Ne&&dt&&t.texStorage2D(3553,U,me,De[0].width,De[0].height);for(let Y=0,ae=De.length;Y<ae;Y++)Se=De[Y],A.format!==dn?ve!==null?Ne?t.compressedTexSubImage2D(3553,Y,0,0,Se.width,Se.height,ve,Se.data):t.compressedTexImage2D(3553,Y,me,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?t.texSubImage2D(3553,Y,0,0,Se.width,Se.height,ve,be,Se.data):t.texImage2D(3553,Y,me,Se.width,Se.height,0,ve,be,Se.data)}else if(A.isDataArrayTexture)Ne?(dt&&t.texStorage3D(35866,U,me,V.width,V.height,V.depth),t.texSubImage3D(35866,0,0,0,0,V.width,V.height,V.depth,ve,be,V.data)):t.texImage3D(35866,0,me,V.width,V.height,V.depth,0,ve,be,V.data);else if(A.isData3DTexture)Ne?(dt&&t.texStorage3D(32879,U,me,V.width,V.height,V.depth),t.texSubImage3D(32879,0,0,0,0,V.width,V.height,V.depth,ve,be,V.data)):t.texImage3D(32879,0,me,V.width,V.height,V.depth,0,ve,be,V.data);else if(A.isFramebufferTexture){if(dt)if(Ne)t.texStorage2D(3553,U,me,V.width,V.height);else{let Y=V.width,ae=V.height;for(let ge=0;ge<U;ge++)t.texImage2D(3553,ge,me,Y,ae,0,ve,be,null),Y>>=1,ae>>=1}}else if(De.length>0&&fe){Ne&&dt&&t.texStorage2D(3553,U,me,De[0].width,De[0].height);for(let Y=0,ae=De.length;Y<ae;Y++)Se=De[Y],Ne?t.texSubImage2D(3553,Y,0,0,ve,be,Se):t.texImage2D(3553,Y,me,ve,be,Se);A.generateMipmaps=!1}else Ne?(dt&&t.texStorage2D(3553,U,me,V.width,V.height),t.texSubImage2D(3553,0,0,0,ve,be,V)):t.texImage2D(3553,0,me,ve,be,V);w(A,fe)&&E(ie),D.__version=he.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function Pe(P,A,G){if(A.image.length!==6)return;const ie=B(P,A),oe=A.source;t.bindTexture(34067,P.__webglTexture,33984+G);const he=n.get(oe);if(oe.version!==he.__version||ie===!0){t.activeTexture(33984+G),a.pixelStorei(37440,A.flipY),a.pixelStorei(37441,A.premultiplyAlpha),a.pixelStorei(3317,A.unpackAlignment),a.pixelStorei(37443,0);const D=A.isCompressedTexture||A.image[0].isCompressedTexture,J=A.image[0]&&A.image[0].isDataTexture,V=[];for(let Y=0;Y<6;Y++)!D&&!J?V[Y]=x(A.image[Y],!1,!0,c):V[Y]=J?A.image[Y].image:A.image[Y],V[Y]=We(A,V[Y]);const fe=V[0],ve=v(fe)||o,be=r.convert(A.format,A.encoding),me=r.convert(A.type),Se=T(A.internalFormat,be,me,A.encoding),De=o&&A.isVideoTexture!==!0,Ne=he.__version===void 0||ie===!0;let dt=y(A,fe,ve);pe(34067,A,ve);let U;if(D){De&&Ne&&t.texStorage2D(34067,dt,Se,fe.width,fe.height);for(let Y=0;Y<6;Y++){U=V[Y].mipmaps;for(let ae=0;ae<U.length;ae++){const ge=U[ae];A.format!==dn?be!==null?De?t.compressedTexSubImage2D(34069+Y,ae,0,0,ge.width,ge.height,be,ge.data):t.compressedTexImage2D(34069+Y,ae,Se,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(34069+Y,ae,0,0,ge.width,ge.height,be,me,ge.data):t.texImage2D(34069+Y,ae,Se,ge.width,ge.height,0,be,me,ge.data)}}}else{U=A.mipmaps,De&&Ne&&(U.length>0&&dt++,t.texStorage2D(34067,dt,Se,V[0].width,V[0].height));for(let Y=0;Y<6;Y++)if(J){De?t.texSubImage2D(34069+Y,0,0,0,V[Y].width,V[Y].height,be,me,V[Y].data):t.texImage2D(34069+Y,0,Se,V[Y].width,V[Y].height,0,be,me,V[Y].data);for(let ae=0;ae<U.length;ae++){const Ae=U[ae].image[Y].image;De?t.texSubImage2D(34069+Y,ae+1,0,0,Ae.width,Ae.height,be,me,Ae.data):t.texImage2D(34069+Y,ae+1,Se,Ae.width,Ae.height,0,be,me,Ae.data)}}else{De?t.texSubImage2D(34069+Y,0,0,0,be,me,V[Y]):t.texImage2D(34069+Y,0,Se,be,me,V[Y]);for(let ae=0;ae<U.length;ae++){const ge=U[ae];De?t.texSubImage2D(34069+Y,ae+1,0,0,be,me,ge.image[Y]):t.texImage2D(34069+Y,ae+1,Se,be,me,ge.image[Y])}}}w(A,ve)&&E(34067),he.__version=oe.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function le(P,A,G,ie,oe){const he=r.convert(G.format,G.encoding),D=r.convert(G.type),J=T(G.internalFormat,he,D,G.encoding);n.get(A).__hasExternalTextures||(oe===32879||oe===35866?t.texImage3D(oe,0,J,A.width,A.height,A.depth,0,he,D,null):t.texImage2D(oe,0,J,A.width,A.height,0,he,D,null)),t.bindFramebuffer(36160,P),we(A)?d.framebufferTexture2DMultisampleEXT(36160,ie,oe,n.get(G).__webglTexture,0,Ce(A)):(oe===3553||oe>=34069&&oe<=34074)&&a.framebufferTexture2D(36160,ie,oe,n.get(G).__webglTexture,0),t.bindFramebuffer(36160,null)}function ye(P,A,G){if(a.bindRenderbuffer(36161,P),A.depthBuffer&&!A.stencilBuffer){let ie=33189;if(G||we(A)){const oe=A.depthTexture;oe&&oe.isDepthTexture&&(oe.type===wn?ie=36012:oe.type===Fi&&(ie=33190));const he=Ce(A);we(A)?d.renderbufferStorageMultisampleEXT(36161,he,ie,A.width,A.height):a.renderbufferStorageMultisample(36161,he,ie,A.width,A.height)}else a.renderbufferStorage(36161,ie,A.width,A.height);a.framebufferRenderbuffer(36160,36096,36161,P)}else if(A.depthBuffer&&A.stencilBuffer){const ie=Ce(A);G&&we(A)===!1?a.renderbufferStorageMultisample(36161,ie,35056,A.width,A.height):we(A)?d.renderbufferStorageMultisampleEXT(36161,ie,35056,A.width,A.height):a.renderbufferStorage(36161,34041,A.width,A.height),a.framebufferRenderbuffer(36160,33306,36161,P)}else{const ie=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let oe=0;oe<ie.length;oe++){const he=ie[oe],D=r.convert(he.format,he.encoding),J=r.convert(he.type),V=T(he.internalFormat,D,J,he.encoding),fe=Ce(A);G&&we(A)===!1?a.renderbufferStorageMultisample(36161,fe,V,A.width,A.height):we(A)?d.renderbufferStorageMultisampleEXT(36161,fe,V,A.width,A.height):a.renderbufferStorage(36161,V,A.width,A.height)}}a.bindRenderbuffer(36161,null)}function te(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),Q(A.depthTexture,0);const ie=n.get(A.depthTexture).__webglTexture,oe=Ce(A);if(A.depthTexture.format===Bi)we(A)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,ie,0,oe):a.framebufferTexture2D(36160,36096,3553,ie,0);else if(A.depthTexture.format===zr)we(A)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,ie,0,oe):a.framebufferTexture2D(36160,33306,3553,ie,0);else throw new Error("Unknown depthTexture format")}function $(P){const A=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");te(A.__webglFramebuffer,P)}else if(G){A.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(36160,A.__webglFramebuffer[ie]),A.__webglDepthbuffer[ie]=a.createRenderbuffer(),ye(A.__webglDepthbuffer[ie],P,!1)}else t.bindFramebuffer(36160,A.__webglFramebuffer),A.__webglDepthbuffer=a.createRenderbuffer(),ye(A.__webglDepthbuffer,P,!1);t.bindFramebuffer(36160,null)}function ee(P,A,G){const ie=n.get(P);A!==void 0&&le(ie.__webglFramebuffer,P,P.texture,36064,3553),G!==void 0&&$(P)}function _e(P){const A=P.texture,G=n.get(P),ie=n.get(A);P.addEventListener("dispose",N),P.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=a.createTexture()),ie.__version=A.version,s.memory.textures++);const oe=P.isWebGLCubeRenderTarget===!0,he=P.isWebGLMultipleRenderTargets===!0,D=v(P)||o;if(oe){G.__webglFramebuffer=[];for(let J=0;J<6;J++)G.__webglFramebuffer[J]=a.createFramebuffer()}else{if(G.__webglFramebuffer=a.createFramebuffer(),he)if(i.drawBuffers){const J=P.texture;for(let V=0,fe=J.length;V<fe;V++){const ve=n.get(J[V]);ve.__webglTexture===void 0&&(ve.__webglTexture=a.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&we(P)===!1){const J=he?A:[A];G.__webglMultisampledFramebuffer=a.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer);for(let V=0;V<J.length;V++){const fe=J[V];G.__webglColorRenderbuffer[V]=a.createRenderbuffer(),a.bindRenderbuffer(36161,G.__webglColorRenderbuffer[V]);const ve=r.convert(fe.format,fe.encoding),be=r.convert(fe.type),me=T(fe.internalFormat,ve,be,fe.encoding,P.isXRRenderTarget===!0),Se=Ce(P);a.renderbufferStorageMultisample(36161,Se,me,P.width,P.height),a.framebufferRenderbuffer(36160,36064+V,36161,G.__webglColorRenderbuffer[V])}a.bindRenderbuffer(36161,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=a.createRenderbuffer(),ye(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(36160,null)}}if(oe){t.bindTexture(34067,ie.__webglTexture),pe(34067,A,D);for(let J=0;J<6;J++)le(G.__webglFramebuffer[J],P,A,36064,34069+J);w(A,D)&&E(34067),t.unbindTexture()}else if(he){const J=P.texture;for(let V=0,fe=J.length;V<fe;V++){const ve=J[V],be=n.get(ve);t.bindTexture(3553,be.__webglTexture),pe(3553,ve,D),le(G.__webglFramebuffer,P,ve,36064+V,3553),w(ve,D)&&E(3553)}t.unbindTexture()}else{let J=3553;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?J=P.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(J,ie.__webglTexture),pe(J,A,D),le(G.__webglFramebuffer,P,A,36064,J),w(A,D)&&E(J),t.unbindTexture()}P.depthBuffer&&$(P)}function ue(P){const A=v(P)||o,G=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ie=0,oe=G.length;ie<oe;ie++){const he=G[ie];if(w(he,A)){const D=P.isWebGLCubeRenderTarget?34067:3553,J=n.get(he).__webglTexture;t.bindTexture(D,J),E(D),t.unbindTexture()}}}function Ee(P){if(o&&P.samples>0&&we(P)===!1){const A=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],G=P.width,ie=P.height;let oe=16384;const he=[],D=P.stencilBuffer?33306:36096,J=n.get(P),V=P.isWebGLMultipleRenderTargets===!0;if(V)for(let fe=0;fe<A.length;fe++)t.bindFramebuffer(36160,J.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+fe,36161,null),t.bindFramebuffer(36160,J.__webglFramebuffer),a.framebufferTexture2D(36009,36064+fe,3553,null,0);t.bindFramebuffer(36008,J.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,J.__webglFramebuffer);for(let fe=0;fe<A.length;fe++){he.push(36064+fe),P.depthBuffer&&he.push(D);const ve=J.__ignoreDepthValues!==void 0?J.__ignoreDepthValues:!1;if(ve===!1&&(P.depthBuffer&&(oe|=256),P.stencilBuffer&&(oe|=1024)),V&&a.framebufferRenderbuffer(36008,36064,36161,J.__webglColorRenderbuffer[fe]),ve===!0&&(a.invalidateFramebuffer(36008,[D]),a.invalidateFramebuffer(36009,[D])),V){const be=n.get(A[fe]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,be,0)}a.blitFramebuffer(0,0,G,ie,0,0,G,ie,oe,9728),p&&a.invalidateFramebuffer(36008,he)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),V)for(let fe=0;fe<A.length;fe++){t.bindFramebuffer(36160,J.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+fe,36161,J.__webglColorRenderbuffer[fe]);const ve=n.get(A[fe]).__webglTexture;t.bindFramebuffer(36160,J.__webglFramebuffer),a.framebufferTexture2D(36009,36064+fe,3553,ve,0)}t.bindFramebuffer(36009,J.__webglMultisampledFramebuffer)}}function Ce(P){return Math.min(h,P.samples)}function we(P){const A=n.get(P);return o&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ze(P){const A=s.render.frame;_.get(P)!==A&&(_.set(P,A),P.update())}function We(P,A){const G=P.encoding,ie=P.format,oe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===nl||G!==Si&&(G===Xe?o===!1?e.has("EXT_sRGB")===!0&&ie===dn?(P.format=nl,P.minFilter=yt,P.generateMipmaps=!1):A=rd.sRGBToLinear(A):(ie!==dn||oe!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),A}this.allocateTextureUnit=H,this.resetTextureUnits=q,this.setTexture2D=Q,this.setTexture2DArray=xe,this.setTexture3D=se,this.setTextureCube=j,this.rebindTextures=ee,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=le,this.useMultisampledRTT=we}function Jv(a,e,t){const n=t.isWebGL2;function i(r,s=null){let o;if(r===Wi)return 5121;if(r===Ep)return 32819;if(r===Cp)return 32820;if(r===wp)return 5120;if(r===Ap)return 5122;if(r===Zh)return 5123;if(r===Tp)return 5124;if(r===Fi)return 5125;if(r===wn)return 5126;if(r===Kn)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Pp)return 6406;if(r===dn)return 6408;if(r===Lp)return 6409;if(r===Rp)return 6410;if(r===Bi)return 6402;if(r===zr)return 34041;if(r===nl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Dp)return 6403;if(r===Ip)return 36244;if(r===zp)return 33319;if(r===Up)return 33320;if(r===Op)return 36249;if(r===ta||r===na||r===ia||r===ra)if(s===Xe)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ta)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===na)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ia)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ra)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ta)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===na)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ia)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ra)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Tc||r===Ec||r===Cc||r===Pc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Tc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ec)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Cc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Pc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Np)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Lc||r===Rc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Lc)return s===Xe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Rc)return s===Xe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Dc||r===Ic||r===zc||r===Uc||r===Oc||r===Nc||r===Fc||r===kc||r===Bc||r===Hc||r===Vc||r===Gc||r===Wc||r===qc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Dc)return s===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ic)return s===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===zc)return s===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Uc)return s===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Oc)return s===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Nc)return s===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Fc)return s===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===kc)return s===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Bc)return s===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Hc)return s===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Vc)return s===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Gc)return s===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Wc)return s===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===qc)return s===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===sa)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===sa)return s===Xe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Fp||r===jc||r===Xc||r===Yc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===sa)return o.COMPRESSED_RED_RGTC1_EXT;if(r===jc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Xc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Yc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===wr?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[r]!==void 0?a[r]:null}return{convert:i}}class Qv extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Jn extends it{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ex={type:"move"};class Ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ex)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Jn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class tx extends Tt{constructor(e,t,n,i,r,s,o,l,c,u){if(u=u!==void 0?u:Bi,u!==Bi&&u!==zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Bi&&(n=Fi),n===void 0&&u===zr&&(n=wr),super(null,i,r,s,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ut,this.minFilter=l!==void 0?l:ut,this.flipY=!1,this.generateMipmaps=!1}}class nx extends Yi{constructor(e,t){super();const n=this;let i=null,r=1,s=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,_=null;const g=t.getContextAttributes();let m=null,f=null;const b=[],x=[],v=new Set,S=new Map,w=new Ht;w.layers.enable(1),w.viewport=new et;const E=new Ht;E.layers.enable(2),E.viewport=new et;const T=[w,E],y=new Qv;y.layers.enable(1),y.layers.enable(2);let M=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let K=b[j];return K===void 0&&(K=new Ca,b[j]=K),K.getTargetRaySpace()},this.getControllerGrip=function(j){let K=b[j];return K===void 0&&(K=new Ca,b[j]=K),K.getGripSpace()},this.getHand=function(j){let K=b[j];return K===void 0&&(K=new Ca,b[j]=K),K.getHandSpace()};function N(j){const K=x.indexOf(j.inputSource);if(K===-1)return;const ce=b[K];ce!==void 0&&ce.dispatchEvent({type:j.type,data:j.inputSource})}function R(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",R),i.removeEventListener("inputsourceschange",z);for(let j=0;j<b.length;j++){const K=x[j];K!==null&&(x[j]=null,b[j].disconnect(K))}M=null,I=null,e.setRenderTarget(m),p=null,d=null,h=null,i=null,f=null,se.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",R),i.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:p}),f=new An(p.framebufferWidth,p.framebufferHeight,{format:dn,type:Wi,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let K=null,ce=null,pe=null;g.depth&&(pe=g.stencil?35056:33190,K=g.stencil?zr:Bi,ce=g.stencil?wr:Fi);const B={colorFormat:32856,depthFormat:pe,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(B),i.updateRenderState({layers:[d]}),f=new An(d.textureWidth,d.textureHeight,{format:dn,type:Wi,depthTexture:new tx(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const Le=e.properties.get(f);Le.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await i.requestReferenceSpace(o),se.setContext(i),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function z(j){for(let K=0;K<j.removed.length;K++){const ce=j.removed[K],pe=x.indexOf(ce);pe>=0&&(x[pe]=null,b[pe].disconnect(ce))}for(let K=0;K<j.added.length;K++){const ce=j.added[K];let pe=x.indexOf(ce);if(pe===-1){for(let Le=0;Le<b.length;Le++)if(Le>=x.length){x.push(ce),pe=Le;break}else if(x[Le]===null){x[Le]=ce,pe=Le;break}if(pe===-1)break}const B=b[pe];B&&B.connect(ce)}}const O=new L,W=new L;function q(j,K,ce){O.setFromMatrixPosition(K.matrixWorld),W.setFromMatrixPosition(ce.matrixWorld);const pe=O.distanceTo(W),B=K.projectionMatrix.elements,Le=ce.projectionMatrix.elements,Pe=B[14]/(B[10]-1),le=B[14]/(B[10]+1),ye=(B[9]+1)/B[5],te=(B[9]-1)/B[5],$=(B[8]-1)/B[0],ee=(Le[8]+1)/Le[0],_e=Pe*$,ue=Pe*ee,Ee=pe/(-$+ee),Ce=Ee*-$;K.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ce),j.translateZ(Ee),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const we=Pe+Ee,ze=le+Ee,We=_e-Ce,P=ue+(pe-Ce),A=ye*le/ze*we,G=te*le/ze*we;j.projectionMatrix.makePerspective(We,P,A,G,we,ze),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function H(j,K){K===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(K.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;y.near=E.near=w.near=j.near,y.far=E.far=w.far=j.far,(M!==y.near||I!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),M=y.near,I=y.far);const K=j.parent,ce=y.cameras;H(y,K);for(let pe=0;pe<ce.length;pe++)H(ce[pe],K);ce.length===2?q(y,w,E):y.projectionMatrix.copy(w.projectionMatrix),ne(j,y,K)};function ne(j,K,ce){ce===null?j.matrix.copy(K.matrixWorld):(j.matrix.copy(ce.matrixWorld),j.matrix.invert(),j.matrix.multiply(K.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0);const pe=j.children;for(let B=0,Le=pe.length;B<Le;B++)pe[B].updateMatrixWorld(!0);j.projectionMatrix.copy(K.projectionMatrix),j.projectionMatrixInverse.copy(K.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Or*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.getPlanes=function(){return v};let Q=null;function xe(j,K){if(u=K.getViewerPose(c||s),_=K,u!==null){const ce=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let pe=!1;ce.length!==y.cameras.length&&(y.cameras.length=0,pe=!0);for(let B=0;B<ce.length;B++){const Le=ce[B];let Pe=null;if(p!==null)Pe=p.getViewport(Le);else{const ye=h.getViewSubImage(d,Le);Pe=ye.viewport,B===0&&(e.setRenderTargetTextures(f,ye.colorTexture,d.ignoreDepthValues?void 0:ye.depthStencilTexture),e.setRenderTarget(f))}let le=T[B];le===void 0&&(le=new Ht,le.layers.enable(B),le.viewport=new et,T[B]=le),le.matrix.fromArray(Le.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(Le.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),B===0&&(y.matrix.copy(le.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),pe===!0&&y.cameras.push(le)}}for(let ce=0;ce<b.length;ce++){const pe=x[ce],B=b[ce];pe!==null&&B!==void 0&&B.update(pe,K,c||s)}if(Q&&Q(j,K),K.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:K.detectedPlanes});let ce=null;for(const pe of v)K.detectedPlanes.has(pe)||(ce===null&&(ce=[]),ce.push(pe));if(ce!==null)for(const pe of ce)v.delete(pe),S.delete(pe),n.dispatchEvent({type:"planeremoved",data:pe});for(const pe of K.detectedPlanes)if(!v.has(pe))v.add(pe),S.set(pe,K.lastChangedTime),n.dispatchEvent({type:"planeadded",data:pe});else{const B=S.get(pe);pe.lastChangedTime>B&&(S.set(pe,pe.lastChangedTime),n.dispatchEvent({type:"planechanged",data:pe}))}}_=null}const se=new dd;se.setAnimationLoop(xe),this.setAnimationLoop=function(j){Q=j},this.dispose=function(){}}}function ix(a,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,ud(a)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,b,x,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,b,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Wt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Wt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const b=e.get(f).envMap;if(b&&(m.envMap.value=b,m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const x=a.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*x,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,b,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=x*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Wt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const b=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function rx(a,e,t,n){let i={},r={},s=[];const o=t.isWebGL2?a.getParameter(35375):0;function l(b,x){const v=x.program;n.uniformBlockBinding(b,v)}function c(b,x){let v=i[b.id];v===void 0&&(_(b),v=u(b),i[b.id]=v,b.addEventListener("dispose",m));const S=x.program;n.updateUBOMapping(b,S);const w=e.render.frame;r[b.id]!==w&&(d(b),r[b.id]=w)}function u(b){const x=h();b.__bindingPointIndex=x;const v=a.createBuffer(),S=b.__size,w=b.usage;return a.bindBuffer(35345,v),a.bufferData(35345,S,w),a.bindBuffer(35345,null),a.bindBufferBase(35345,x,v),v}function h(){for(let b=0;b<o;b++)if(s.indexOf(b)===-1)return s.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const x=i[b.id],v=b.uniforms,S=b.__cache;a.bindBuffer(35345,x);for(let w=0,E=v.length;w<E;w++){const T=v[w];if(p(T,w,S)===!0){const y=T.__offset,M=Array.isArray(T.value)?T.value:[T.value];let I=0;for(let N=0;N<M.length;N++){const R=M[N],z=g(R);typeof R=="number"?(T.__data[0]=R,a.bufferSubData(35345,y+I,T.__data)):R.isMatrix3?(T.__data[0]=R.elements[0],T.__data[1]=R.elements[1],T.__data[2]=R.elements[2],T.__data[3]=R.elements[0],T.__data[4]=R.elements[3],T.__data[5]=R.elements[4],T.__data[6]=R.elements[5],T.__data[7]=R.elements[0],T.__data[8]=R.elements[6],T.__data[9]=R.elements[7],T.__data[10]=R.elements[8],T.__data[11]=R.elements[0]):(R.toArray(T.__data,I),I+=z.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,y,T.__data)}}a.bindBuffer(35345,null)}function p(b,x,v){const S=b.value;if(v[x]===void 0){if(typeof S=="number")v[x]=S;else{const w=Array.isArray(S)?S:[S],E=[];for(let T=0;T<w.length;T++)E.push(w[T].clone());v[x]=E}return!0}else if(typeof S=="number"){if(v[x]!==S)return v[x]=S,!0}else{const w=Array.isArray(v[x])?v[x]:[v[x]],E=Array.isArray(S)?S:[S];for(let T=0;T<w.length;T++){const y=w[T];if(y.equals(E[T])===!1)return y.copy(E[T]),!0}}return!1}function _(b){const x=b.uniforms;let v=0;const S=16;let w=0;for(let E=0,T=x.length;E<T;E++){const y=x[E],M={boundary:0,storage:0},I=Array.isArray(y.value)?y.value:[y.value];for(let N=0,R=I.length;N<R;N++){const z=I[N],O=g(z);M.boundary+=O.boundary,M.storage+=O.storage}if(y.__data=new Float32Array(M.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=v,E>0){w=v%S;const N=S-w;w!==0&&N-M.boundary<0&&(v+=S-w,y.__offset=v)}v+=M.storage}return w=v%S,w>0&&(v+=S-w),b.__size=v,b.__cache={},this}function g(b){const x={boundary:0,storage:0};return typeof b=="number"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function m(b){const x=b.target;x.removeEventListener("dispose",m);const v=s.indexOf(x.__bindingPointIndex);s.splice(v,1),a.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function f(){for(const b in i)a.deleteBuffer(i[b]);s=[],i={},r={}}return{bind:l,update:c,dispose:f}}function sx(){const a=ws("canvas");return a.style.display="block",a}class ox{constructor(e={}){const{canvas:t=sx(),context:n=null,depth:i=!0,stencil:r=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=s;let p=null,_=null;const g=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Si,this.useLegacyLights=!0,this.toneMapping=Qn,this.toneMappingExposure=1;const f=this;let b=!1,x=0,v=0,S=null,w=-1,E=null;const T=new et,y=new et;let M=null,I=t.width,N=t.height,R=1,z=null,O=null;const W=new et(0,0,I,N),q=new et(0,0,I,N);let H=!1;const ne=new Ul;let Q=!1,xe=!1,se=null;const j=new Fe,K=new L,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pe(){return S===null?R:1}let B=n;function Le(C,k){for(let X=0;X<C.length;X++){const F=C[X],Z=t.getContext(F,k);if(Z!==null)return Z}return null}try{const C={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ll}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),B===null){const k=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&k.shift(),B=Le(k,C),B===null)throw Le(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Pe,le,ye,te,$,ee,_e,ue,Ee,Ce,we,ze,We,P,A,G,ie,oe,he,D,J,V,fe,ve;function be(){Pe=new __(B),le=new h_(B,Pe,e),Pe.init(le),V=new Jv(B,Pe,le),ye=new Kv(B,Pe,le),te=new y_,$=new Nv,ee=new Zv(B,Pe,ye,$,le,V,te),_e=new f_(f),ue=new g_(f),Ee=new Dm(B,le),fe=new c_(B,Pe,Ee,le),Ce=new v_(B,Ee,te,fe),we=new w_(B,Ce,Ee,te),he=new M_(B,le,ee),G=new d_($),ze=new Ov(f,_e,ue,Pe,le,fe,G),We=new ix(f,$),P=new kv,A=new qv(Pe,le),oe=new l_(f,_e,ue,ye,we,d,l),ie=new $v(f,we,le),ve=new rx(B,te,le,ye),D=new u_(B,Pe,te,le),J=new x_(B,Pe,te,le),te.programs=ze.programs,f.capabilities=le,f.extensions=Pe,f.properties=$,f.renderLists=P,f.shadowMap=ie,f.state=ye,f.info=te}be();const me=new nx(f,B);this.xr=me,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const C=Pe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Pe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return R},this.setPixelRatio=function(C){C!==void 0&&(R=C,this.setSize(I,N,!1))},this.getSize=function(C){return C.set(I,N)},this.setSize=function(C,k,X=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=C,N=k,t.width=Math.floor(C*R),t.height=Math.floor(k*R),X===!0&&(t.style.width=C+"px",t.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(I*R,N*R).floor()},this.setDrawingBufferSize=function(C,k,X){I=C,N=k,R=X,t.width=Math.floor(C*X),t.height=Math.floor(k*X),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(W)},this.setViewport=function(C,k,X,F){C.isVector4?W.set(C.x,C.y,C.z,C.w):W.set(C,k,X,F),ye.viewport(T.copy(W).multiplyScalar(R).floor())},this.getScissor=function(C){return C.copy(q)},this.setScissor=function(C,k,X,F){C.isVector4?q.set(C.x,C.y,C.z,C.w):q.set(C,k,X,F),ye.scissor(y.copy(q).multiplyScalar(R).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(C){ye.setScissorTest(H=C)},this.setOpaqueSort=function(C){z=C},this.setTransparentSort=function(C){O=C},this.getClearColor=function(C){return C.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(C=!0,k=!0,X=!0){let F=0;C&&(F|=16384),k&&(F|=256),X&&(F|=1024),B.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),P.dispose(),A.dispose(),$.dispose(),_e.dispose(),ue.dispose(),we.dispose(),fe.dispose(),ve.dispose(),ze.dispose(),me.dispose(),me.removeEventListener("sessionstart",Ae),me.removeEventListener("sessionend",nt),se&&(se.dispose(),se=null),st.stop()};function Se(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const C=te.autoReset,k=ie.enabled,X=ie.autoUpdate,F=ie.needsUpdate,Z=ie.type;be(),te.autoReset=C,ie.enabled=k,ie.autoUpdate=X,ie.needsUpdate=F,ie.type=Z}function Ne(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function dt(C){const k=C.target;k.removeEventListener("dispose",dt),U(k)}function U(C){Y(C),$.remove(C)}function Y(C){const k=$.get(C).programs;k!==void 0&&(k.forEach(function(X){ze.releaseProgram(X)}),C.isShaderMaterial&&ze.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,X,F,Z,Te){k===null&&(k=ce);const Re=Z.isMesh&&Z.matrixWorld.determinant()<0,Ie=Wf(C,k,X,F,Z);ye.setMaterial(F,Re);let Ue=X.index,ke=1;F.wireframe===!0&&(Ue=Ce.getWireframeAttribute(X),ke=2);const Be=X.drawRange,He=X.attributes.position;let Ke=Be.start*ke,Nt=(Be.start+Be.count)*ke;Te!==null&&(Ke=Math.max(Ke,Te.start*ke),Nt=Math.min(Nt,(Te.start+Te.count)*ke)),Ue!==null?(Ke=Math.max(Ke,0),Nt=Math.min(Nt,Ue.count)):He!=null&&(Ke=Math.max(Ke,0),Nt=Math.min(Nt,He.count));const xn=Nt-Ke;if(xn<0||xn===1/0)return;fe.setup(Z,F,Ie,X,Ue);let Ti,mt=D;if(Ue!==null&&(Ti=Ee.get(Ue),mt=J,mt.setIndex(Ti)),Z.isMesh)F.wireframe===!0?(ye.setLineWidth(F.wireframeLinewidth*pe()),mt.setMode(1)):mt.setMode(4);else if(Z.isLine){let qe=F.linewidth;qe===void 0&&(qe=1),ye.setLineWidth(qe*pe()),Z.isLineSegments?mt.setMode(1):Z.isLineLoop?mt.setMode(2):mt.setMode(3)}else Z.isPoints?mt.setMode(0):Z.isSprite&&mt.setMode(4);if(Z.isInstancedMesh)mt.renderInstances(Ke,xn,Z.count);else if(X.isInstancedBufferGeometry){const qe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Zo=Math.min(X.instanceCount,qe);mt.renderInstances(Ke,xn,Zo)}else mt.render(Ke,xn)},this.compile=function(C,k){function X(F,Z,Te){F.transparent===!0&&F.side===at&&F.forceSinglePass===!1?(F.side=Wt,F.needsUpdate=!0,Hs(F,Z,Te),F.side=ei,F.needsUpdate=!0,Hs(F,Z,Te),F.side=at):Hs(F,Z,Te)}_=A.get(C),_.init(),m.push(_),C.traverseVisible(function(F){F.isLight&&F.layers.test(k.layers)&&(_.pushLight(F),F.castShadow&&_.pushShadow(F))}),_.setupLights(f.useLegacyLights),C.traverse(function(F){const Z=F.material;if(Z)if(Array.isArray(Z))for(let Te=0;Te<Z.length;Te++){const Re=Z[Te];X(Re,C,F)}else X(Z,C,F)}),m.pop(),_=null};let ae=null;function ge(C){ae&&ae(C)}function Ae(){st.stop()}function nt(){st.start()}const st=new dd;st.setAnimationLoop(ge),typeof self<"u"&&st.setContext(self),this.setAnimationLoop=function(C){ae=C,me.setAnimationLoop(C),C===null?st.stop():st.start()},me.addEventListener("sessionstart",Ae),me.addEventListener("sessionend",nt),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(k),k=me.getCamera()),C.isScene===!0&&C.onBeforeRender(f,C,k,S),_=A.get(C,m.length),_.init(),m.push(_),j.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ne.setFromProjectionMatrix(j),xe=this.localClippingEnabled,Q=G.init(this.clippingPlanes,xe),p=P.get(C,g.length),p.init(),g.push(p),Rt(C,k,0,f.sortObjects),p.finish(),f.sortObjects===!0&&p.sort(z,O),Q===!0&&G.beginShadows();const X=_.state.shadowsArray;if(ie.render(X,C,k),Q===!0&&G.endShadows(),this.info.autoReset===!0&&this.info.reset(),oe.render(p,C),_.setupLights(f.useLegacyLights),k.isArrayCamera){const F=k.cameras;for(let Z=0,Te=F.length;Z<Te;Z++){const Re=F[Z];si(p,C,Re,Re.viewport)}}else si(p,C,k);S!==null&&(ee.updateMultisampleRenderTarget(S),ee.updateRenderTargetMipmap(S)),C.isScene===!0&&C.onAfterRender(f,C,k),fe.resetDefaultState(),w=-1,E=null,m.pop(),m.length>0?_=m[m.length-1]:_=null,g.pop(),g.length>0?p=g[g.length-1]:p=null};function Rt(C,k,X,F){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)X=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ne.intersectsSprite(C)){F&&K.setFromMatrixPosition(C.matrixWorld).applyMatrix4(j);const Re=we.update(C),Ie=C.material;Ie.visible&&p.push(C,Re,Ie,X,K.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==te.render.frame&&(C.skeleton.update(),C.skeleton.frame=te.render.frame),!C.frustumCulled||ne.intersectsObject(C))){F&&K.setFromMatrixPosition(C.matrixWorld).applyMatrix4(j);const Re=we.update(C),Ie=C.material;if(Array.isArray(Ie)){const Ue=Re.groups;for(let ke=0,Be=Ue.length;ke<Be;ke++){const He=Ue[ke],Ke=Ie[He.materialIndex];Ke&&Ke.visible&&p.push(C,Re,Ke,X,K.z,He)}}else Ie.visible&&p.push(C,Re,Ie,X,K.z,null)}}const Te=C.children;for(let Re=0,Ie=Te.length;Re<Ie;Re++)Rt(Te[Re],k,X,F)}function si(C,k,X,F){const Z=C.opaque,Te=C.transmissive,Re=C.transparent;_.setupLightsView(X),Q===!0&&G.setGlobalState(f.clippingPlanes,X),Te.length>0&&ft(Z,Te,k,X),F&&ye.viewport(T.copy(F)),Z.length>0&&an(Z,k,X),Te.length>0&&an(Te,k,X),Re.length>0&&an(Re,k,X),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function ft(C,k,X,F){if(se===null){const Ie=le.isWebGL2;se=new An(1024,1024,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")?Kn:Wi,minFilter:yi,samples:Ie&&o===!0?4:0})}const Z=f.getRenderTarget();f.setRenderTarget(se),f.clear();const Te=f.toneMapping;f.toneMapping=Qn,an(C,X,F),ee.updateMultisampleRenderTarget(se),ee.updateRenderTargetMipmap(se);let Re=!1;for(let Ie=0,Ue=k.length;Ie<Ue;Ie++){const ke=k[Ie],Be=ke.object,He=ke.geometry,Ke=ke.material,Nt=ke.group;if(Ke.side===at&&Be.layers.test(F.layers)){const xn=Ke.side;Ke.side=Wt,Ke.needsUpdate=!0,En(Be,X,F,He,Ke,Nt),Ke.side=xn,Ke.needsUpdate=!0,Re=!0}}Re===!0&&(ee.updateMultisampleRenderTarget(se),ee.updateRenderTargetMipmap(se)),f.setRenderTarget(Z),f.toneMapping=Te}function an(C,k,X){const F=k.isScene===!0?k.overrideMaterial:null;for(let Z=0,Te=C.length;Z<Te;Z++){const Re=C[Z],Ie=Re.object,Ue=Re.geometry,ke=F===null?Re.material:F,Be=Re.group;Ie.layers.test(X.layers)&&En(Ie,k,X,Ue,ke,Be)}}function En(C,k,X,F,Z,Te){C.onBeforeRender(f,k,X,F,Z,Te),C.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Z.onBeforeRender(f,k,X,F,C,Te),Z.transparent===!0&&Z.side===at&&Z.forceSinglePass===!1?(Z.side=Wt,Z.needsUpdate=!0,f.renderBufferDirect(X,k,F,Z,C,Te),Z.side=ei,Z.needsUpdate=!0,f.renderBufferDirect(X,k,F,Z,C,Te),Z.side=at):f.renderBufferDirect(X,k,F,Z,C,Te),C.onAfterRender(f,k,X,F,Z,Te)}function Hs(C,k,X){k.isScene!==!0&&(k=ce);const F=$.get(C),Z=_.state.lights,Te=_.state.shadowsArray,Re=Z.state.version,Ie=ze.getParameters(C,Z.state,Te,k,X),Ue=ze.getProgramCacheKey(Ie);let ke=F.programs;F.environment=C.isMeshStandardMaterial?k.environment:null,F.fog=k.fog,F.envMap=(C.isMeshStandardMaterial?ue:_e).get(C.envMap||F.environment),ke===void 0&&(C.addEventListener("dispose",dt),ke=new Map,F.programs=ke);let Be=ke.get(Ue);if(Be!==void 0){if(F.currentProgram===Be&&F.lightsStateVersion===Re)return mc(C,Ie),Be}else Ie.uniforms=ze.getUniforms(C),C.onBuild(X,Ie,f),C.onBeforeCompile(Ie,f),Be=ze.acquireProgram(Ie,Ue),ke.set(Ue,Be),F.uniforms=Ie.uniforms;const He=F.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(He.clippingPlanes=G.uniform),mc(C,Ie),F.needsLights=jf(C),F.lightsStateVersion=Re,F.needsLights&&(He.ambientLightColor.value=Z.state.ambient,He.lightProbe.value=Z.state.probe,He.directionalLights.value=Z.state.directional,He.directionalLightShadows.value=Z.state.directionalShadow,He.spotLights.value=Z.state.spot,He.spotLightShadows.value=Z.state.spotShadow,He.rectAreaLights.value=Z.state.rectArea,He.ltc_1.value=Z.state.rectAreaLTC1,He.ltc_2.value=Z.state.rectAreaLTC2,He.pointLights.value=Z.state.point,He.pointLightShadows.value=Z.state.pointShadow,He.hemisphereLights.value=Z.state.hemi,He.directionalShadowMap.value=Z.state.directionalShadowMap,He.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,He.spotShadowMap.value=Z.state.spotShadowMap,He.spotLightMatrix.value=Z.state.spotLightMatrix,He.spotLightMap.value=Z.state.spotLightMap,He.pointShadowMap.value=Z.state.pointShadowMap,He.pointShadowMatrix.value=Z.state.pointShadowMatrix);const Ke=Be.getUniforms(),Nt=So.seqWithValue(Ke.seq,He);return F.currentProgram=Be,F.uniformsList=Nt,Be}function mc(C,k){const X=$.get(C);X.outputEncoding=k.outputEncoding,X.instancing=k.instancing,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function Wf(C,k,X,F,Z){k.isScene!==!0&&(k=ce),ee.resetTextureUnits();const Te=k.fog,Re=F.isMeshStandardMaterial?k.environment:null,Ie=S===null?f.outputEncoding:S.isXRRenderTarget===!0?S.texture.encoding:Si,Ue=(F.isMeshStandardMaterial?ue:_e).get(F.envMap||Re),ke=F.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Be=!!F.normalMap&&!!X.attributes.tangent,He=!!X.morphAttributes.position,Ke=!!X.morphAttributes.normal,Nt=!!X.morphAttributes.color,xn=F.toneMapped?f.toneMapping:Qn,Ti=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,mt=Ti!==void 0?Ti.length:0,qe=$.get(F),Zo=_.state.lights;if(Q===!0&&(xe===!0||C!==E)){const Zt=C===E&&F.id===w;G.setState(F,C,Zt)}let wt=!1;F.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Zo.state.version||qe.outputEncoding!==Ie||Z.isInstancedMesh&&qe.instancing===!1||!Z.isInstancedMesh&&qe.instancing===!0||Z.isSkinnedMesh&&qe.skinning===!1||!Z.isSkinnedMesh&&qe.skinning===!0||qe.envMap!==Ue||F.fog===!0&&qe.fog!==Te||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==G.numPlanes||qe.numIntersection!==G.numIntersection)||qe.vertexAlphas!==ke||qe.vertexTangents!==Be||qe.morphTargets!==He||qe.morphNormals!==Ke||qe.morphColors!==Nt||qe.toneMapping!==xn||le.isWebGL2===!0&&qe.morphTargetsCount!==mt)&&(wt=!0):(wt=!0,qe.__version=F.version);let Ei=qe.currentProgram;wt===!0&&(Ei=Hs(F,k,Z));let gc=!1,Jr=!1,Jo=!1;const Ft=Ei.getUniforms(),Ci=qe.uniforms;if(ye.useProgram(Ei.program)&&(gc=!0,Jr=!0,Jo=!0),F.id!==w&&(w=F.id,Jr=!0),gc||E!==C){if(Ft.setValue(B,"projectionMatrix",C.projectionMatrix),le.logarithmicDepthBuffer&&Ft.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),E!==C&&(E=C,Jr=!0,Jo=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const Zt=Ft.map.cameraPosition;Zt!==void 0&&Zt.setValue(B,K.setFromMatrixPosition(C.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Ft.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||Z.isSkinnedMesh)&&Ft.setValue(B,"viewMatrix",C.matrixWorldInverse)}if(Z.isSkinnedMesh){Ft.setOptional(B,Z,"bindMatrix"),Ft.setOptional(B,Z,"bindMatrixInverse");const Zt=Z.skeleton;Zt&&(le.floatVertexTextures?(Zt.boneTexture===null&&Zt.computeBoneTexture(),Ft.setValue(B,"boneTexture",Zt.boneTexture,ee),Ft.setValue(B,"boneTextureSize",Zt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Qo=X.morphAttributes;if((Qo.position!==void 0||Qo.normal!==void 0||Qo.color!==void 0&&le.isWebGL2===!0)&&he.update(Z,X,Ei),(Jr||qe.receiveShadow!==Z.receiveShadow)&&(qe.receiveShadow=Z.receiveShadow,Ft.setValue(B,"receiveShadow",Z.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Ci.envMap.value=Ue,Ci.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Jr&&(Ft.setValue(B,"toneMappingExposure",f.toneMappingExposure),qe.needsLights&&qf(Ci,Jo),Te&&F.fog===!0&&We.refreshFogUniforms(Ci,Te),We.refreshMaterialUniforms(Ci,F,R,N,se),So.upload(B,qe.uniformsList,Ci,ee)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(So.upload(B,qe.uniformsList,Ci,ee),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Ft.setValue(B,"center",Z.center),Ft.setValue(B,"modelViewMatrix",Z.modelViewMatrix),Ft.setValue(B,"normalMatrix",Z.normalMatrix),Ft.setValue(B,"modelMatrix",Z.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Zt=F.uniformsGroups;for(let ea=0,Xf=Zt.length;ea<Xf;ea++)if(le.isWebGL2){const _c=Zt[ea];ve.update(_c,Ei),ve.bind(_c,Ei)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ei}function qf(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function jf(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(C,k,X){$.get(C.texture).__webglTexture=k,$.get(C.depthTexture).__webglTexture=X;const F=$.get(C);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=X===void 0,F.__autoAllocateDepthBuffer||Pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,k){const X=$.get(C);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,X=0){S=C,x=k,v=X;let F=!0,Z=null,Te=!1,Re=!1;if(C){const Ue=$.get(C);Ue.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(36160,null),F=!1):Ue.__webglFramebuffer===void 0?ee.setupRenderTarget(C):Ue.__hasExternalTextures&&ee.rebindTextures(C,$.get(C.texture).__webglTexture,$.get(C.depthTexture).__webglTexture);const ke=C.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Re=!0);const Be=$.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Z=Be[k],Te=!0):le.isWebGL2&&C.samples>0&&ee.useMultisampledRTT(C)===!1?Z=$.get(C).__webglMultisampledFramebuffer:Z=Be,T.copy(C.viewport),y.copy(C.scissor),M=C.scissorTest}else T.copy(W).multiplyScalar(R).floor(),y.copy(q).multiplyScalar(R).floor(),M=H;if(ye.bindFramebuffer(36160,Z)&&le.drawBuffers&&F&&ye.drawBuffers(C,Z),ye.viewport(T),ye.scissor(y),ye.setScissorTest(M),Te){const Ue=$.get(C.texture);B.framebufferTexture2D(36160,36064,34069+k,Ue.__webglTexture,X)}else if(Re){const Ue=$.get(C.texture),ke=k||0;B.framebufferTextureLayer(36160,36064,Ue.__webglTexture,X||0,ke)}w=-1},this.readRenderTargetPixels=function(C,k,X,F,Z,Te,Re){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=$.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie){ye.bindFramebuffer(36160,Ie);try{const Ue=C.texture,ke=Ue.format,Be=Ue.type;if(ke!==dn&&V.convert(ke)!==B.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Be===Kn&&(Pe.has("EXT_color_buffer_half_float")||le.isWebGL2&&Pe.has("EXT_color_buffer_float"));if(Be!==Wi&&V.convert(Be)!==B.getParameter(35738)&&!(Be===wn&&(le.isWebGL2||Pe.has("OES_texture_float")||Pe.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-F&&X>=0&&X<=C.height-Z&&B.readPixels(k,X,F,Z,V.convert(ke),V.convert(Be),Te)}finally{const Ue=S!==null?$.get(S).__webglFramebuffer:null;ye.bindFramebuffer(36160,Ue)}}},this.copyFramebufferToTexture=function(C,k,X=0){const F=Math.pow(2,-X),Z=Math.floor(k.image.width*F),Te=Math.floor(k.image.height*F);ee.setTexture2D(k,0),B.copyTexSubImage2D(3553,X,0,0,C.x,C.y,Z,Te),ye.unbindTexture()},this.copyTextureToTexture=function(C,k,X,F=0){const Z=k.image.width,Te=k.image.height,Re=V.convert(X.format),Ie=V.convert(X.type);ee.setTexture2D(X,0),B.pixelStorei(37440,X.flipY),B.pixelStorei(37441,X.premultiplyAlpha),B.pixelStorei(3317,X.unpackAlignment),k.isDataTexture?B.texSubImage2D(3553,F,C.x,C.y,Z,Te,Re,Ie,k.image.data):k.isCompressedTexture?B.compressedTexSubImage2D(3553,F,C.x,C.y,k.mipmaps[0].width,k.mipmaps[0].height,Re,k.mipmaps[0].data):B.texSubImage2D(3553,F,C.x,C.y,Re,Ie,k.image),F===0&&X.generateMipmaps&&B.generateMipmap(3553),ye.unbindTexture()},this.copyTextureToTexture3D=function(C,k,X,F,Z=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=C.max.x-C.min.x+1,Re=C.max.y-C.min.y+1,Ie=C.max.z-C.min.z+1,Ue=V.convert(F.format),ke=V.convert(F.type);let Be;if(F.isData3DTexture)ee.setTexture3D(F,0),Be=32879;else if(F.isDataArrayTexture)ee.setTexture2DArray(F,0),Be=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(37440,F.flipY),B.pixelStorei(37441,F.premultiplyAlpha),B.pixelStorei(3317,F.unpackAlignment);const He=B.getParameter(3314),Ke=B.getParameter(32878),Nt=B.getParameter(3316),xn=B.getParameter(3315),Ti=B.getParameter(32877),mt=X.isCompressedTexture?X.mipmaps[0]:X.image;B.pixelStorei(3314,mt.width),B.pixelStorei(32878,mt.height),B.pixelStorei(3316,C.min.x),B.pixelStorei(3315,C.min.y),B.pixelStorei(32877,C.min.z),X.isDataTexture||X.isData3DTexture?B.texSubImage3D(Be,Z,k.x,k.y,k.z,Te,Re,Ie,Ue,ke,mt.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Be,Z,k.x,k.y,k.z,Te,Re,Ie,Ue,mt.data)):B.texSubImage3D(Be,Z,k.x,k.y,k.z,Te,Re,Ie,Ue,ke,mt),B.pixelStorei(3314,He),B.pixelStorei(32878,Ke),B.pixelStorei(3316,Nt),B.pixelStorei(3315,xn),B.pixelStorei(32877,Ti),Z===0&&F.generateMipmaps&&B.generateMipmap(Be),ye.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?ee.setTextureCube(C,0):C.isData3DTexture?ee.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ee.setTexture2DArray(C,0):ee.setTexture2D(C,0),ye.unbindTexture()},this.resetState=function(){x=0,v=0,S=null,ye.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class _d extends ox{}_d.prototype.isWebGL1Renderer=!0;class ax extends it{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class lx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=tl,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kt=new L;class Nl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array),r=Je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Nl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ou=new L,Nu=new et,Fu=new et,cx=new L,ku=new Fe,mr=new L;class ux extends Ye{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ii),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)mr.fromBufferAttribute(t,n),this.applyBoneTransform(n,mr),this.boundingBox.expandByPoint(mr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ri),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)mr.fromBufferAttribute(t,n),this.applyBoneTransform(n,mr),this.boundingSphere.expandByPoint(mr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new et,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Nu.fromBufferAttribute(i.attributes.skinIndex,e),Fu.fromBufferAttribute(i.attributes.skinWeight,e),Ou.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const s=Fu.getComponent(r);if(s!==0){const o=Nu.getComponent(r);ku.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(cx.copy(Ou).applyMatrix4(ku),s)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class vd extends it{constructor(){super(),this.isBone=!0,this.type="Bone"}}class xd extends Tt{constructor(e=null,t=1,n=1,i,r,s,o,l,c=ut,u=ut,h,d){super(null,s,o,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bu=new Fe,hx=new Fe;class Fl{constructor(e=[],t=[]){this.uuid=gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=e.length;r<s;r++){const o=e[r]?e[r].matrixWorld:hx;Bu.multiplyMatrices(o,t[r]),Bu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Fl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=td(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new xd(t,e,e,dn,wn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let s=t[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new vd),this.bones.push(s),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const s=t[i];e.bones.push(s.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Hu extends Pt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const gr=new Fe,Vu=new Fe,co=[],Gu=new ii,dx=new Fe,rs=new Ye,ss=new ri;class fx extends Ye{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Hu(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,dx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ii),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gr),Gu.copy(e.boundingBox).applyMatrix4(gr),this.boundingBox.union(Gu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ri),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gr),ss.copy(e.boundingSphere).applyMatrix4(gr),this.boundingSphere.union(ss)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(rs.geometry=this.geometry,rs.material=this.material,rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ss.copy(this.boundingSphere),ss.applyMatrix4(n),e.ray.intersectsSphere(ss)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,gr),Vu.multiplyMatrices(n,gr),rs.matrixWorld=Vu,rs.raycast(e,co);for(let s=0,o=co.length;s<o;s++){const l=co[s];l.instanceId=r,l.object=this,t.push(l)}co.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Hu(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Wo extends In{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wu=new L,qu=new L,ju=new Fe,Pa=new Bo,uo=new ri;class As extends it{constructor(e=new Lt,t=new Wo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Wu.fromBufferAttribute(t,i-1),qu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Wu.distanceTo(qu);e.setAttribute("lineDistance",new St(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(i),uo.radius+=r,e.ray.intersectsSphere(uo)===!1)return;ju.copy(i).invert(),Pa.copy(e.ray).applyMatrix4(ju);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new L,u=new L,h=new L,d=new L,p=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const f=Math.max(0,s.start),b=Math.min(_.count,s.start+s.count);for(let x=f,v=b-1;x<v;x+=p){const S=_.getX(x),w=_.getX(x+1);if(c.fromBufferAttribute(m,S),u.fromBufferAttribute(m,w),Pa.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||t.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,s.start),b=Math.min(m.count,s.start+s.count);for(let x=f,v=b-1;x<v;x+=p){if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),Pa.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(d);w<e.near||w>e.far||t.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Xu=new L,Yu=new L;class yd extends As{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Xu.fromBufferAttribute(t,i),Yu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Xu.distanceTo(Yu);e.setAttribute("lineDistance",new St(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class px extends As{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Sd extends In{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $u=new Fe,sl=new Bo,ho=new ri,fo=new L;class mx extends it{constructor(e=new Lt,t=new Sd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(i),ho.radius+=r,e.ray.intersectsSphere(ho)===!1)return;$u.copy(i).invert(),sl.copy(e.ray).applyMatrix4($u);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let _=d,g=p;_<g;_++){const m=c.getX(_);fo.fromBufferAttribute(h,m),Ku(fo,m,l,i,e,t,this)}}else{const d=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let _=d,g=p;_<g;_++)fo.fromBufferAttribute(h,_),Ku(fo,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ku(a,e,t,n,i,r,s){const o=sl.distanceSqToPoint(a);if(o<t){const l=new L;sl.closestPointToPoint(a,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:s})}}class Zu extends Tt{constructor(e,t,n,i,r,s,o,l,c){super(e,t,n,i,r,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let s;t?s=t:s=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-s,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===s)return i/(r-1);const u=n[i],d=n[i+1]-u,p=(s-u)/d;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),o=this.getPoint(r),l=t||(s.isVector2?new re:new L);return l.copy(o).sub(s).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,i=[],r=[],s=[],o=new L,l=new Fe;for(let p=0;p<=e;p++){const _=p/e;i[p]=this.getTangentAt(_,new L)}r[0]=new L,s[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),s[p]=s[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(_t(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,_))}s[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(_t(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(i[_],p*_)),s[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class kl extends Fn{constructor(e=0,t=0,n=1,i=1,r=0,s=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new re,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(s?r=0:r=i),this.aClockwise===!0&&!s&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class gx extends kl{constructor(e,t,n,i,r,s){super(e,t,n,n,i,r,s),this.isArcCurve=!0,this.type="ArcCurve"}}function Bl(){let a=0,e=0,t=0,n=0;function i(r,s,o,l){a=r,e=o,t=-3*r+3*s-2*o-l,n=2*r-2*s+o+l}return{initCatmullRom:function(r,s,o,l,c){i(s,o,c*(o-r),c*(l-s))},initNonuniformCatmullRom:function(r,s,o,l,c,u,h){let d=(s-r)/c-(o-r)/(c+u)+(o-s)/u,p=(o-s)/u-(l-s)/(u+h)+(l-o)/h;d*=u,p*=u,i(s,o,d,p)},calc:function(r){const s=r*r,o=s*r;return a+e*r+t*s+n*o}}}const po=new L,La=new Bl,Ra=new Bl,Da=new Bl;class _x extends Fn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){const n=t,i=this.points,r=i.length,s=(r-(this.closed?0:1))*e;let o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%r]:(po.subVectors(i[0],i[1]).add(i[0]),c=po);const h=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?u=i[(o+2)%r]:(po.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=po),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),p),g=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),La.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,_,g,m),Ra.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,_,g,m),Da.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,_,g,m)}else this.curveType==="catmullrom"&&(La.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Ra.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Da.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(La.calc(l),Ra.calc(l),Da.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ju(a,e,t,n,i){const r=(n-e)*.5,s=(i-t)*.5,o=a*a,l=a*o;return(2*t-2*n+r+s)*l+(-3*t+3*n-2*r-s)*o+r*a+t}function vx(a,e){const t=1-a;return t*t*e}function xx(a,e){return 2*(1-a)*a*e}function yx(a,e){return a*a*e}function _s(a,e,t,n){return vx(a,e)+xx(a,t)+yx(a,n)}function Sx(a,e){const t=1-a;return t*t*t*e}function bx(a,e){const t=1-a;return 3*t*t*a*e}function Mx(a,e){return 3*(1-a)*a*a*e}function wx(a,e){return a*a*a*e}function vs(a,e,t,n,i){return Sx(a,e)+bx(a,t)+Mx(a,n)+wx(a,i)}class bd extends Fn{constructor(e=new re,t=new re,n=new re,i=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new re){const n=t,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(vs(e,i.x,r.x,s.x,o.x),vs(e,i.y,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ax extends Fn{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){const n=t,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(vs(e,i.x,r.x,s.x,o.x),vs(e,i.y,r.y,s.y,o.y),vs(e,i.z,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Hl extends Fn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tx extends Fn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Md extends Fn{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){const n=t,i=this.v0,r=this.v1,s=this.v2;return n.set(_s(e,i.x,r.x,s.x),_s(e,i.y,r.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ex extends Fn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,i=this.v0,r=this.v1,s=this.v2;return n.set(_s(e,i.x,r.x,s.x),_s(e,i.y,r.y,s.y),_s(e,i.z,r.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wd extends Fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){const n=t,i=this.points,r=(i.length-1)*e,s=Math.floor(r),o=r-s,l=i[s===0?s:s-1],c=i[s],u=i[s>i.length-2?i.length-1:s+1],h=i[s>i.length-3?i.length-1:s+2];return n.set(Ju(o,l.x,c.x,u.x,h.x),Ju(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new re().fromArray(i))}return this}}var Ad=Object.freeze({__proto__:null,ArcCurve:gx,CatmullRomCurve3:_x,CubicBezierCurve:bd,CubicBezierCurve3:Ax,EllipseCurve:kl,LineCurve:Hl,LineCurve3:Tx,QuadraticBezierCurve:Md,QuadraticBezierCurve3:Ex,SplineCurve:wd});class Cx extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Hl(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const s=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-s/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const s=r[i],o=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,l=s.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Ad[i.type]().fromJSON(i))}return this}}class ol extends Cx{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Hl(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Md(this.currentPoint.clone(),new re(e,t),new re(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,s){const o=new bd(this.currentPoint.clone(),new re(e,t),new re(n,i),new re(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new wd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,s){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,s),this}absarc(e,t,n,i,r,s){return this.absellipse(e,t,n,n,i,r,s),this}ellipse(e,t,n,i,r,s,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,s,o,l),this}absellipse(e,t,n,i,r,s,o,l){const c=new kl(e,t,n,i,r,s,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class qo extends Lt{constructor(e=1,t=1,n=1,i=32,r=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],d=[],p=[];let _=0;const g=[],m=n/2;let f=0;b(),s===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new St(h,3)),this.setAttribute("normal",new St(d,3)),this.setAttribute("uv",new St(p,2));function b(){const v=new L,S=new L;let w=0;const E=(t-e)/n;for(let T=0;T<=r;T++){const y=[],M=T/r,I=M*(t-e)+e;for(let N=0;N<=i;N++){const R=N/i,z=R*l+o,O=Math.sin(z),W=Math.cos(z);S.x=I*O,S.y=-M*n+m,S.z=I*W,h.push(S.x,S.y,S.z),v.set(O,E,W).normalize(),d.push(v.x,v.y,v.z),p.push(R,1-M),y.push(_++)}g.push(y)}for(let T=0;T<i;T++)for(let y=0;y<r;y++){const M=g[y][T],I=g[y+1][T],N=g[y+1][T+1],R=g[y][T+1];u.push(M,I,R),u.push(I,N,R),w+=6}c.addGroup(f,w,0),f+=w}function x(v){const S=_,w=new re,E=new L;let T=0;const y=v===!0?e:t,M=v===!0?1:-1;for(let N=1;N<=i;N++)h.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),_++;const I=_;for(let N=0;N<=i;N++){const z=N/i*l+o,O=Math.cos(z),W=Math.sin(z);E.x=y*W,E.y=m*M,E.z=y*O,h.push(E.x,E.y,E.z),d.push(0,M,0),w.x=O*.5+.5,w.y=W*.5*M+.5,p.push(w.x,w.y),_++}for(let N=0;N<i;N++){const R=S+N,z=I+N;v===!0?u.push(z,z+1,R):u.push(z+1,z,R),T+=3}c.addGroup(f,T,v===!0?1:2),f+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bo extends ol{constructor(e){super(e),this.uuid=gn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new ol().fromJSON(i))}return this}}const Px={triangulate:function(a,e,t=2){const n=e&&e.length,i=n?e[0]*t:a.length;let r=Td(a,0,i,t,!0);const s=[];if(!r||r.next===r.prev)return s;let o,l,c,u,h,d,p;if(n&&(r=zx(a,e,r,t)),a.length>80*t){o=c=a[0],l=u=a[1];for(let _=t;_<i;_+=t)h=a[_],d=a[_+1],h<o&&(o=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);p=Math.max(c-o,u-l),p=p!==0?32767/p:0}return Ts(r,s,t,o,l,p,0),s}};function Td(a,e,t,n,i){let r,s;if(i===qx(a,e,t,n)>0)for(r=e;r<t;r+=n)s=Qu(r,a[r],a[r+1],s);else for(r=t-n;r>=e;r-=n)s=Qu(r,a[r],a[r+1],s);return s&&jo(s,s.next)&&(Cs(s),s=s.next),s}function qi(a,e){if(!a)return a;e||(e=a);let t=a,n;do if(n=!1,!t.steiner&&(jo(t,t.next)||lt(t.prev,t,t.next)===0)){if(Cs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ts(a,e,t,n,i,r,s){if(!a)return;!s&&r&&kx(a,n,i,r);let o=a,l,c;for(;a.prev!==a.next;){if(l=a.prev,c=a.next,r?Rx(a,n,i,r):Lx(a)){e.push(l.i/t|0),e.push(a.i/t|0),e.push(c.i/t|0),Cs(a),a=c.next,o=c.next;continue}if(a=c,a===o){s?s===1?(a=Dx(qi(a),e,t),Ts(a,e,t,n,i,r,2)):s===2&&Ix(a,e,t,n,i,r):Ts(qi(a),e,t,n,i,r,1);break}}}function Lx(a){const e=a.prev,t=a,n=a.next;if(lt(e,t,n)>=0)return!1;const i=e.x,r=t.x,s=n.x,o=e.y,l=t.y,c=n.y,u=i<r?i<s?i:s:r<s?r:s,h=o<l?o<c?o:c:l<c?l:c,d=i>r?i>s?i:s:r>s?r:s,p=o>l?o>c?o:c:l>c?l:c;let _=n.next;for(;_!==e;){if(_.x>=u&&_.x<=d&&_.y>=h&&_.y<=p&&yr(i,o,r,l,s,c,_.x,_.y)&&lt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Rx(a,e,t,n){const i=a.prev,r=a,s=a.next;if(lt(i,r,s)>=0)return!1;const o=i.x,l=r.x,c=s.x,u=i.y,h=r.y,d=s.y,p=o<l?o<c?o:c:l<c?l:c,_=u<h?u<d?u:d:h<d?h:d,g=o>l?o>c?o:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,f=al(p,_,e,t,n),b=al(g,m,e,t,n);let x=a.prevZ,v=a.nextZ;for(;x&&x.z>=f&&v&&v.z<=b;){if(x.x>=p&&x.x<=g&&x.y>=_&&x.y<=m&&x!==i&&x!==s&&yr(o,u,l,h,c,d,x.x,x.y)&&lt(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=p&&v.x<=g&&v.y>=_&&v.y<=m&&v!==i&&v!==s&&yr(o,u,l,h,c,d,v.x,v.y)&&lt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=f;){if(x.x>=p&&x.x<=g&&x.y>=_&&x.y<=m&&x!==i&&x!==s&&yr(o,u,l,h,c,d,x.x,x.y)&&lt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=b;){if(v.x>=p&&v.x<=g&&v.y>=_&&v.y<=m&&v!==i&&v!==s&&yr(o,u,l,h,c,d,v.x,v.y)&&lt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Dx(a,e,t){let n=a;do{const i=n.prev,r=n.next.next;!jo(i,r)&&Ed(i,n,n.next,r)&&Es(i,r)&&Es(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Cs(n),Cs(n.next),n=a=r),n=n.next}while(n!==a);return qi(n)}function Ix(a,e,t,n,i,r){let s=a;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&Vx(s,o)){let l=Cd(s,o);s=qi(s,s.next),l=qi(l,l.next),Ts(s,e,t,n,i,r,0),Ts(l,e,t,n,i,r,0);return}o=o.next}s=s.next}while(s!==a)}function zx(a,e,t,n){const i=[];let r,s,o,l,c;for(r=0,s=e.length;r<s;r++)o=e[r]*n,l=r<s-1?e[r+1]*n:a.length,c=Td(a,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Hx(c));for(i.sort(Ux),r=0;r<i.length;r++)t=Ox(i[r],t);return t}function Ux(a,e){return a.x-e.x}function Ox(a,e){const t=Nx(a,e);if(!t)return e;const n=Cd(t,a);return qi(n,n.next),qi(t,t.next)}function Nx(a,e){let t=e,n=-1/0,i;const r=a.x,s=a.y;do{if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,l=i.x,c=i.y;let u=1/0,h;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&yr(s<c?r:n,s,l,c,s<c?n:r,s,t.x,t.y)&&(h=Math.abs(s-t.y)/(r-t.x),Es(t,a)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&Fx(i,t)))&&(i=t,u=h)),t=t.next;while(t!==o);return i}function Fx(a,e){return lt(a.prev,a,e.prev)<0&&lt(e.next,a,a.next)<0}function kx(a,e,t,n){let i=a;do i.z===0&&(i.z=al(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==a);i.prevZ.nextZ=null,i.prevZ=null,Bx(i)}function Bx(a){let e,t,n,i,r,s,o,l,c=1;do{for(t=a,a=null,r=null,s=0;t;){for(s++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:a=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(s>1);return a}function al(a,e,t,n,i){return a=(a-t)*i|0,e=(e-n)*i|0,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,a|e<<1}function Hx(a){let e=a,t=a;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==a);return t}function yr(a,e,t,n,i,r,s,o){return(i-s)*(e-o)>=(a-s)*(r-o)&&(a-s)*(n-o)>=(t-s)*(e-o)&&(t-s)*(r-o)>=(i-s)*(n-o)}function Vx(a,e){return a.next.i!==e.i&&a.prev.i!==e.i&&!Gx(a,e)&&(Es(a,e)&&Es(e,a)&&Wx(a,e)&&(lt(a.prev,a,e.prev)||lt(a,e.prev,e))||jo(a,e)&&lt(a.prev,a,a.next)>0&&lt(e.prev,e,e.next)>0)}function lt(a,e,t){return(e.y-a.y)*(t.x-e.x)-(e.x-a.x)*(t.y-e.y)}function jo(a,e){return a.x===e.x&&a.y===e.y}function Ed(a,e,t,n){const i=go(lt(a,e,t)),r=go(lt(a,e,n)),s=go(lt(t,n,a)),o=go(lt(t,n,e));return!!(i!==r&&s!==o||i===0&&mo(a,t,e)||r===0&&mo(a,n,e)||s===0&&mo(t,a,n)||o===0&&mo(t,e,n))}function mo(a,e,t){return e.x<=Math.max(a.x,t.x)&&e.x>=Math.min(a.x,t.x)&&e.y<=Math.max(a.y,t.y)&&e.y>=Math.min(a.y,t.y)}function go(a){return a>0?1:a<0?-1:0}function Gx(a,e){let t=a;do{if(t.i!==a.i&&t.next.i!==a.i&&t.i!==e.i&&t.next.i!==e.i&&Ed(t,t.next,a,e))return!0;t=t.next}while(t!==a);return!1}function Es(a,e){return lt(a.prev,a,a.next)<0?lt(a,e,a.next)>=0&&lt(a,a.prev,e)>=0:lt(a,e,a.prev)<0||lt(a,a.next,e)<0}function Wx(a,e){let t=a,n=!1;const i=(a.x+e.x)/2,r=(a.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==a);return n}function Cd(a,e){const t=new ll(a.i,a.x,a.y),n=new ll(e.i,e.x,e.y),i=a.next,r=e.prev;return a.next=e,e.prev=a,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Qu(a,e,t,n){const i=new ll(a,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Cs(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function ll(a,e,t){this.i=a,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function qx(a,e,t,n){let i=0;for(let r=e,s=t-n;r<t;r+=n)i+=(a[s]-a[r])*(a[r+1]+a[s+1]),s=r;return i}class Tr{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Tr.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];eh(e),th(n,e);let s=e.length;t.forEach(eh);for(let l=0;l<t.length;l++)i.push(s),s+=t[l].length,th(n,t[l]);const o=Px.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function eh(a){const e=a.length;e>2&&a[e-1].equals(a[0])&&a.pop()}function th(a,e){for(let t=0;t<e.length;t++)a.push(e[t].x),a.push(e[t].y)}class Vl extends Lt{constructor(e=new bo([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];s(c)}this.setAttribute("position",new St(i,3)),this.setAttribute("uv",new St(r,2)),this.computeVertexNormals();function s(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:p-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:jx;let x,v=!1,S,w,E,T;f&&(x=f.getSpacedPoints(u),v=!0,d=!1,S=f.computeFrenetFrames(u,!1),w=new L,E=new L,T=new L),d||(m=0,p=0,_=0,g=0);const y=o.extractPoints(c);let M=y.shape;const I=y.holes;if(!Tr.isClockWise(M)){M=M.reverse();for(let te=0,$=I.length;te<$;te++){const ee=I[te];Tr.isClockWise(ee)&&(I[te]=ee.reverse())}}const R=Tr.triangulateShape(M,I),z=M;for(let te=0,$=I.length;te<$;te++){const ee=I[te];M=M.concat(ee)}function O(te,$,ee){return $||console.error("THREE.ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector($,ee)}const W=M.length,q=R.length;function H(te,$,ee){let _e,ue,Ee;const Ce=te.x-$.x,we=te.y-$.y,ze=ee.x-te.x,We=ee.y-te.y,P=Ce*Ce+we*we,A=Ce*We-we*ze;if(Math.abs(A)>Number.EPSILON){const G=Math.sqrt(P),ie=Math.sqrt(ze*ze+We*We),oe=$.x-we/G,he=$.y+Ce/G,D=ee.x-We/ie,J=ee.y+ze/ie,V=((D-oe)*We-(J-he)*ze)/(Ce*We-we*ze);_e=oe+Ce*V-te.x,ue=he+we*V-te.y;const fe=_e*_e+ue*ue;if(fe<=2)return new re(_e,ue);Ee=Math.sqrt(fe/2)}else{let G=!1;Ce>Number.EPSILON?ze>Number.EPSILON&&(G=!0):Ce<-Number.EPSILON?ze<-Number.EPSILON&&(G=!0):Math.sign(we)===Math.sign(We)&&(G=!0),G?(_e=-we,ue=Ce,Ee=Math.sqrt(P)):(_e=Ce,ue=we,Ee=Math.sqrt(P/2))}return new re(_e/Ee,ue/Ee)}const ne=[];for(let te=0,$=z.length,ee=$-1,_e=te+1;te<$;te++,ee++,_e++)ee===$&&(ee=0),_e===$&&(_e=0),ne[te]=H(z[te],z[ee],z[_e]);const Q=[];let xe,se=ne.concat();for(let te=0,$=I.length;te<$;te++){const ee=I[te];xe=[];for(let _e=0,ue=ee.length,Ee=ue-1,Ce=_e+1;_e<ue;_e++,Ee++,Ce++)Ee===ue&&(Ee=0),Ce===ue&&(Ce=0),xe[_e]=H(ee[_e],ee[Ee],ee[Ce]);Q.push(xe),se=se.concat(xe)}for(let te=0;te<m;te++){const $=te/m,ee=p*Math.cos($*Math.PI/2),_e=_*Math.sin($*Math.PI/2)+g;for(let ue=0,Ee=z.length;ue<Ee;ue++){const Ce=O(z[ue],ne[ue],_e);B(Ce.x,Ce.y,-ee)}for(let ue=0,Ee=I.length;ue<Ee;ue++){const Ce=I[ue];xe=Q[ue];for(let we=0,ze=Ce.length;we<ze;we++){const We=O(Ce[we],xe[we],_e);B(We.x,We.y,-ee)}}}const j=_+g;for(let te=0;te<W;te++){const $=d?O(M[te],se[te],j):M[te];v?(E.copy(S.normals[0]).multiplyScalar($.x),w.copy(S.binormals[0]).multiplyScalar($.y),T.copy(x[0]).add(E).add(w),B(T.x,T.y,T.z)):B($.x,$.y,0)}for(let te=1;te<=u;te++)for(let $=0;$<W;$++){const ee=d?O(M[$],se[$],j):M[$];v?(E.copy(S.normals[te]).multiplyScalar(ee.x),w.copy(S.binormals[te]).multiplyScalar(ee.y),T.copy(x[te]).add(E).add(w),B(T.x,T.y,T.z)):B(ee.x,ee.y,h/u*te)}for(let te=m-1;te>=0;te--){const $=te/m,ee=p*Math.cos($*Math.PI/2),_e=_*Math.sin($*Math.PI/2)+g;for(let ue=0,Ee=z.length;ue<Ee;ue++){const Ce=O(z[ue],ne[ue],_e);B(Ce.x,Ce.y,h+ee)}for(let ue=0,Ee=I.length;ue<Ee;ue++){const Ce=I[ue];xe=Q[ue];for(let we=0,ze=Ce.length;we<ze;we++){const We=O(Ce[we],xe[we],_e);v?B(We.x,We.y+x[u-1].y,x[u-1].x+ee):B(We.x,We.y,h+ee)}}}K(),ce();function K(){const te=i.length/3;if(d){let $=0,ee=W*$;for(let _e=0;_e<q;_e++){const ue=R[_e];Le(ue[2]+ee,ue[1]+ee,ue[0]+ee)}$=u+m*2,ee=W*$;for(let _e=0;_e<q;_e++){const ue=R[_e];Le(ue[0]+ee,ue[1]+ee,ue[2]+ee)}}else{for(let $=0;$<q;$++){const ee=R[$];Le(ee[2],ee[1],ee[0])}for(let $=0;$<q;$++){const ee=R[$];Le(ee[0]+W*u,ee[1]+W*u,ee[2]+W*u)}}n.addGroup(te,i.length/3-te,0)}function ce(){const te=i.length/3;let $=0;pe(z,$),$+=z.length;for(let ee=0,_e=I.length;ee<_e;ee++){const ue=I[ee];pe(ue,$),$+=ue.length}n.addGroup(te,i.length/3-te,1)}function pe(te,$){let ee=te.length;for(;--ee>=0;){const _e=ee;let ue=ee-1;ue<0&&(ue=te.length-1);for(let Ee=0,Ce=u+m*2;Ee<Ce;Ee++){const we=W*Ee,ze=W*(Ee+1),We=$+_e+we,P=$+ue+we,A=$+ue+ze,G=$+_e+ze;Pe(We,P,A,G)}}}function B(te,$,ee){l.push(te),l.push($),l.push(ee)}function Le(te,$,ee){le(te),le($),le(ee);const _e=i.length/3,ue=b.generateTopUV(n,i,_e-3,_e-2,_e-1);ye(ue[0]),ye(ue[1]),ye(ue[2])}function Pe(te,$,ee,_e){le(te),le($),le(_e),le($),le(ee),le(_e);const ue=i.length/3,Ee=b.generateSideWallUV(n,i,ue-6,ue-3,ue-2,ue-1);ye(Ee[0]),ye(Ee[1]),ye(Ee[3]),ye(Ee[1]),ye(Ee[2]),ye(Ee[3])}function le(te){i.push(l[te*3+0]),i.push(l[te*3+1]),i.push(l[te*3+2])}function ye(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Xx(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Ad[i.type]().fromJSON(i)),new Vl(n,e.options)}}const jx={generateTopUV:function(a,e,t,n,i){const r=e[t*3],s=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new re(r,s),new re(o,l),new re(c,u)]},generateSideWallUV:function(a,e,t,n,i,r){const s=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[i*3],p=e[i*3+1],_=e[i*3+2],g=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(o-u)<Math.abs(s-c)?[new re(s,1-l),new re(c,1-h),new re(d,1-_),new re(g,1-f)]:[new re(o,1-l),new re(u,1-h),new re(p,1-_),new re(m,1-f)]}};function Xx(a,e,t){if(t.shapes=[],Array.isArray(a))for(let n=0,i=a.length;n<i;n++){const r=a[n];t.shapes.push(r.uuid)}else t.shapes.push(a.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class $r extends In{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qh,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $i extends $r{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Me(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function ui(a,e,t){return Pd(a)?new a.constructor(a.subarray(e,t!==void 0?t:a.length)):a.slice(e,t)}function _o(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function Pd(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function Yx(a){function e(i,r){return a[i]-a[r]}const t=a.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function nh(a,e,t){const n=a.length,i=new a.constructor(n);for(let r=0,s=0;s!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[s++]=a[o+l]}return i}function Ld(a,e,t,n){let i=1,r=a[0];for(;r!==void 0&&r[n]===void 0;)r=a[i++];if(r===void 0)return;let s=r[n];if(s!==void 0)if(Array.isArray(s))do s=r[n],s!==void 0&&(e.push(r.time),t.push.apply(t,s)),r=a[i++];while(r!==void 0);else if(s.toArray!==void 0)do s=r[n],s!==void 0&&(e.push(r.time),s.toArray(t,t.length)),r=a[i++];while(r!==void 0);else do s=r[n],s!==void 0&&(e.push(r.time),t.push(s)),r=a[i++];while(r!==void 0)}class Fs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let s;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}s=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}s=n,n=0;break t}break n}for(;n<s;){const o=n+s>>>1;e<t[o]?s=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class $x extends Fs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$c,endingEnd:$c}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,s=e+1,o=i[r],l=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case Kc:r=e,o=2*t-n;break;case Zc:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Kc:s=e,l=2*n-t;break;case Zc:s=1,l=n+i[1]-i[0];break;default:s=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=s*u}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,f=-d*m+2*d*g-d*_,b=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,x=(-1-p)*m+(1.5+p)*g+.5*_,v=p*m-p*g;for(let S=0;S!==o;++S)r[S]=f*s[u+S]+b*s[c+S]+x*s[l+S]+v*s[h+S];return r}}class Kx extends Fs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)r[d]=s[c+d]*h+s[l+d]*u;return r}}class Zx extends Fs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class kn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_o(t,this.TimeBufferType),this.values=_o(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_o(e.times,Array),values:_o(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Zx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Kx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $x(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case bs:t=this.InterpolantFactoryMethodDiscrete;break;case Ur:t=this.InterpolantFactoryMethodLinear;break;case oa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bs;case this.InterpolantFactoryMethodLinear:return Ur;case this.InterpolantFactoryMethodSmooth:return oa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const o=this.getValueSize();this.times=ui(n,r,s),this.values=ui(this.values,r*o,s*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(i!==void 0&&Pd(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=ui(this.times),t=ui(this.values),n=this.getValueSize(),i=this.getInterpolation()===oa,r=e.length-1;let s=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,d=h-n,p=h+n;for(let _=0;_!==n;++_){const g=t[h+_];if(g!==t[d+_]||g!==t[p+_]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];const h=o*n,d=s*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++s}}if(r>0){e[s]=e[r];for(let o=r*n,l=s*n,c=0;c!==n;++c)t[l+c]=t[o+c];++s}return s!==e.length?(this.times=ui(e,0,s),this.values=ui(t,0,s*n)):(this.times=e,this.values=t),this}clone(){const e=ui(this.times,0),t=ui(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Ur;class Kr extends kn{}Kr.prototype.ValueTypeName="bool";Kr.prototype.ValueBufferType=Array;Kr.prototype.DefaultInterpolation=bs;Kr.prototype.InterpolantFactoryMethodLinear=void 0;Kr.prototype.InterpolantFactoryMethodSmooth=void 0;class Rd extends kn{}Rd.prototype.ValueTypeName="color";class Ps extends kn{}Ps.prototype.ValueTypeName="number";class Jx extends Fs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)On.slerpFlat(r,0,s,c-o,s,c,l);return r}}class ji extends kn{InterpolantFactoryMethodLinear(e){return new Jx(this.times,this.values,this.getValueSize(),e)}}ji.prototype.ValueTypeName="quaternion";ji.prototype.DefaultInterpolation=Ur;ji.prototype.InterpolantFactoryMethodSmooth=void 0;class Zr extends kn{}Zr.prototype.ValueTypeName="string";Zr.prototype.ValueBufferType=Array;Zr.prototype.DefaultInterpolation=bs;Zr.prototype.InterpolantFactoryMethodLinear=void 0;Zr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ls extends kn{}Ls.prototype.ValueTypeName="vector";class Qx{constructor(e,t=-1,n,i=kp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=gn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let s=0,o=n.length;s!==o;++s)t.push(ty(n[s]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,s=n.length;r!==s;++r)t.push(kn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,s=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=Yx(l);l=nh(l,1,u),c=nh(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),s.push(new Ps(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,s)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const s=[];for(const o in i)s.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,p,_,g){if(p.length!==0){const m=[],f=[];Ld(p,m,f,_),m.length!==0&&g.push(new h(d,m,f))}},i=[],r=e.name||"default",s=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let g=0;g<d[_].morphTargets.length;g++)p[d[_].morphTargets[g]]=-1;for(const g in p){const m=[],f=[];for(let b=0;b!==d[_].morphTargets.length;++b){const x=d[_];m.push(x.time),f.push(x.morphTarget===g?1:0)}i.push(new Ps(".morphTargetInfluence["+g+"]",m,f))}l=p.length*s}else{const p=".bones["+t[h].name+"]";n(Ls,p+".position",d,"pos",i),n(ji,p+".quaternion",d,"rot",i),n(Ls,p+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ey(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ps;case"vector":case"vector2":case"vector3":case"vector4":return Ls;case"color":return Rd;case"quaternion":return ji;case"bool":case"boolean":return Kr;case"string":return Zr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function ty(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ey(a.type);if(a.times===void 0){const t=[],n=[];Ld(a.keys,t,n,"value"),a.times=t,a.values=n}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const Fr={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class ny{constructor(e,t,n){const i=this;let r=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,s,o),r=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],_=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const iy=new ny;class wi{constructor(e){this.manager=e!==void 0?e:iy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const jn={};class ry extends Error{constructor(e,t){super(e),this.response=t}}class Xo extends wi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Fr.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(jn[e]!==void 0){jn[e].push({onLoad:t,onProgress:n,onError:i});return}jn[e]=[],jn[e].push({onLoad:t,onProgress:n,onError:i});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=jn[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,_=p!==0;let g=0;const m=new ReadableStream({start(f){b();function b(){h.read().then(({done:x,value:v})=>{if(x)f.close();else{g+=v.byteLength;const S=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:p});for(let w=0,E=u.length;w<E;w++){const T=u[w];T.onProgress&&T.onProgress(S)}f.enqueue(v),b()}})}}});return new Response(m)}else throw new ry(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{Fr.add(e,c);const u=jn[e];delete jn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=jn[e];if(u===void 0)throw this.manager.itemError(e),c;delete jn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Dd extends wi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Fr.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const o=ws("img");function l(){u(),Fr.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class sy extends wi{constructor(e){super(e)}load(e,t,n,i){const r=new zl,s=new Dd(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;function l(c){s.load(e[c],function(u){r.images[c]=u,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}}class oy extends wi{constructor(e){super(e)}load(e,t,n,i){const r=this,s=new xd,o=new Xo(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){const c=r.parse(l);c&&(c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:Vt,s.wrapT=c.wrapT!==void 0?c.wrapT:Vt,s.magFilter=c.magFilter!==void 0?c.magFilter:yt,s.minFilter=c.minFilter!==void 0?c.minFilter:yt,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(s.encoding=c.encoding),c.flipY!==void 0&&(s.flipY=c.flipY),c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=yi),c.mipmapCount===1&&(s.minFilter=yt),c.generateMipmaps!==void 0&&(s.generateMipmaps=c.generateMipmaps),s.needsUpdate=!0,t&&t(s,c))},n,i),s}}class Id extends wi{constructor(e){super(e)}load(e,t,n,i){const r=new Tt,s=new Dd(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Gl extends it{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ia=new Fe,ih=new L,rh=new L;class Wl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ul,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ih.setFromMatrixPosition(e.matrixWorld),t.position.copy(ih),rh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rh),t.updateMatrixWorld(),Ia.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ia),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ia)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ay extends Wl{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Or*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class zd extends Gl{constructor(e,t,n=0,i=Math.PI/3,r=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.target=new it,this.distance=n,this.angle=i,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new ay}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const sh=new Fe,os=new L,za=new L;class ly extends Wl{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),os.setFromMatrixPosition(e.matrixWorld),n.position.copy(os),za.copy(n.position),za.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(za),n.updateMatrixWorld(),i.makeTranslation(-os.x,-os.y,-os.z),sh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sh)}}class cy extends Gl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ly}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class uy extends Wl{constructor(){super(new Vo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cl extends Gl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.target=new it,this.shadow=new uy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ul{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class hy extends wi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Fr.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Fr.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}class dy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=oh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=oh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function oh(){return(typeof performance>"u"?Date:performance).now()}const ql="\\[\\]\\.:\\/",fy=new RegExp("["+ql+"]","g"),jl="[^"+ql+"]",py="[^"+ql.replace("\\.","")+"]",my=/((?:WC+[\/:])*)/.source.replace("WC",jl),gy=/(WCOD+)?/.source.replace("WCOD",py),_y=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jl),vy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jl),xy=new RegExp("^"+my+gy+_y+vy+"$"),yy=["material","materials","bones","map"];class Sy{constructor(e,t,n){const i=n||$e.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class $e{constructor(e,t,n){this.path=t,this.parsedPath=n||$e.parseTrackName(t),this.node=$e.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new $e.Composite(e,t,n):new $e(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(fy,"")}static parseTrackName(e){const t=xy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);yy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let s=0;s<r.length;s++){const o=r[s];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=$e.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[i];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}$e.Composite=Sy;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class by{constructor(e,t,n=0,i=1/0){this.ray=new Bo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Il,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return hl(e,this,n,t),n.sort(ah),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)hl(e[i],this,n,t);return n.sort(ah),n}}function ah(a,e){return a.distance-e.distance}function hl(a,e,t,n){if(a.layers.test(e.layers)&&a.raycast(e,t),n===!0){const i=a.children;for(let r=0,s=i.length;r<s;r++)hl(i[r],e,t,!0)}}class lh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const ch=new L;class My extends it{constructor(e,t){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new Lt,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let s=0,o=1,l=32;s<l;s++,o++){const c=s/l*Math.PI*2,u=o/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new St(i,3));const r=new Wo({fog:!1,toneMapped:!1});this.cone=new yd(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),ch.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(ch),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const uh=new L,vo=new L,hh=new L;class dh extends it{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new Lt;i.setAttribute("position",new St([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new Wo({fog:!1,toneMapped:!1});this.lightPlane=new As(i,r),this.add(this.lightPlane),i=new Lt,i.setAttribute("position",new St([0,0,0,0,0,1],3)),this.targetLine=new As(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),uh.setFromMatrixPosition(this.light.matrixWorld),vo.setFromMatrixPosition(this.light.target.matrixWorld),hh.subVectors(vo,uh),this.lightPlane.lookAt(vo),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(vo),this.targetLine.scale.z=hh.length()}}class wy{constructor(){this.type="ShapePath",this.color=new Me,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new ol,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,s){return this.currentPath.bezierCurveTo(e,t,n,i,r,s),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(f){const b=[];for(let x=0,v=f.length;x<v;x++){const S=f[x],w=new bo;w.curves=S.curves,b.push(w)}return b}function n(f,b){const x=b.length;let v=!1;for(let S=x-1,w=0;w<x;S=w++){let E=b[S],T=b[w],y=T.x-E.x,M=T.y-E.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(E=b[w],y=-y,T=b[S],M=-M),f.y<E.y||f.y>T.y)continue;if(f.y===E.y){if(f.x===E.x)return!0}else{const I=M*(f.x-E.x)-y*(f.y-E.y);if(I===0)return!0;if(I<0)continue;v=!v}}else{if(f.y!==E.y)continue;if(T.x<=f.x&&f.x<=E.x||E.x<=f.x&&f.x<=T.x)return!0}}return v}const i=Tr.isClockWise,r=this.subPaths;if(r.length===0)return[];let s,o,l;const c=[];if(r.length===1)return o=r[0],l=new bo,l.curves=o.curves,c.push(l),c;let u=!i(r[0].getPoints());u=e?!u:u;const h=[],d=[];let p=[],_=0,g;d[_]=void 0,p[_]=[];for(let f=0,b=r.length;f<b;f++)o=r[f],g=o.getPoints(),s=i(g),s=e?!s:s,s?(!u&&d[_]&&_++,d[_]={s:new bo,p:g},d[_].s.curves=o.curves,u&&_++,p[_]=[]):p[_].push({h:o,p:g[0]});if(!d[0])return t(r);if(d.length>1){let f=!1,b=0;for(let x=0,v=d.length;x<v;x++)h[x]=[];for(let x=0,v=d.length;x<v;x++){const S=p[x];for(let w=0;w<S.length;w++){const E=S[w];let T=!0;for(let y=0;y<d.length;y++)n(E.p,d[y].p)&&(x!==y&&b++,T?(T=!1,h[y].push(E)):f=!0);T&&h[x].push(E)}}b>0&&f===!1&&(p=h)}let m;for(let f=0,b=d.length;f<b;f++){l=d[f].s,c.push(l),m=p[f];for(let x=0,v=m.length;x<v;x++)l.holes.push(m[x].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ll}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ll);class Xl{constructor(){this.callbacks={},this.callbacks.base={}}on(e,t){return typeof e>"u"||e===""?(console.warn("wrong names"),!1):typeof t>"u"?(console.warn("wrong callback"),!1):(this.resolveNames(e).forEach(i=>{const r=this.resolveName(i);this.callbacks[r.namespace]instanceof Object||(this.callbacks[r.namespace]={}),this.callbacks[r.namespace][r.value]instanceof Array||(this.callbacks[r.namespace][r.value]=[]),this.callbacks[r.namespace][r.value].push(t)}),this)}off(e){return typeof e>"u"||e===""?(console.warn("wrong name"),!1):(this.resolveNames(e).forEach(n=>{const i=this.resolveName(n);if(i.namespace!=="base"&&i.value==="")delete this.callbacks[i.namespace];else if(i.namespace==="base")for(const r in this.callbacks)this.callbacks[r]instanceof Object&&this.callbacks[r][i.value]instanceof Array&&(delete this.callbacks[r][i.value],Object.keys(this.callbacks[r]).length===0&&delete this.callbacks[r]);else this.callbacks[i.namespace]instanceof Object&&this.callbacks[i.namespace][i.value]instanceof Array&&(delete this.callbacks[i.namespace][i.value],Object.keys(this.callbacks[i.namespace]).length===0&&delete this.callbacks[i.namespace])}),this)}trigger(e,t){if(typeof e>"u"||e==="")return console.warn("wrong name"),!1;let n=null;const i=t instanceof Array?t:[];let r=this.resolveNames(e);if(r=this.resolveName(r[0]),r.namespace==="base")for(const s in this.callbacks)this.callbacks[s]instanceof Object&&this.callbacks[s][r.value]instanceof Array&&this.callbacks[s][r.value].forEach(function(o){o.apply(this,i)});else if(this.callbacks[r.namespace]instanceof Object){if(r.value==="")return console.warn("wrong name"),this;this.callbacks[r.namespace][r.value].forEach(function(s){s.apply(this,i)})}return n}resolveNames(e){let t=e;return t=t.replace(/[^a-zA-Z0-9 ,/.]/g,""),t=t.replace(/[,/]+/g," "),t=t.split(" "),t}resolveName(e){const t={},n=e.split(".");return t.original=e,t.value=n[0],t.namespace="base",n.length>1&&n[1]!==""&&(t.namespace=n[1]),t}}class Ay extends Xl{constructor(){super(),this.experience=new rt,this.options=this.experience.options,this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.hEventResize=this.eventResize.bind(this),window.addEventListener("resize",this.hEventResize)}eventResize(){this.options.width==="auto"&&(this.width=window.innerWidth),this.options.height==="auto"&&(this.height=window.innerHeight),this.pixelRatio=Math.min(window.devicePixelRatio,2),console.log("resize"),this.trigger("resize")}destroy(){window.removeEventListener("resize",this.hEventResize),this.hEventResize=null}}class Ty extends Xl{constructor(){super(),this.experience=new rt,this.elements=this.experience.htmlElements,this.start=Date.now(),this.current=this.start,this.elapsed=0,this.delta=16,this.actualFrame=this.start+1e3,this.frameCounter=0,window.requestAnimationFrame(()=>{this.tick()})}getFPS(){if(this.current>this.actualFrame){if(this.actualFrame=this.current+1e3,typeof this.elements.elementFPS=="object"){this.elements.elementFPS.innerHTML=this.frameCounter;const e=256/60;this.elements.elementFPS.style.color="rgb("+Math.round(255-this.frameCounter*e)+","+Math.round(this.frameCounter*e)+", 0)"}this.frameCounter=0}else this.frameCounter++}tick(){const e=Date.now();this.delta=e-this.current,this.current=e,this.elapsed=this.current-this.start,this.getFPS(),this.trigger("tick"),window.requestAnimationFrame(()=>{this.tick()})}}const fh={type:"change"},Ua={type:"start"},ph={type:"end"};class Ey extends Yi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zi.ROTATE,MIDDLE:Zi.DOLLY,RIGHT:Zi.PAN},this.touches={ONE:Ji.ROTATE,TWO:Ji.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",ze),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ze),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(fh),n.update(),r=i.NONE},this.update=function(){const D=new L,J=new On().setFromUnitVectors(e.up,new L(0,1,0)),V=J.clone().invert(),fe=new L,ve=new On,be=2*Math.PI;return function(){const Se=n.object.position;D.copy(Se).sub(n.target),D.applyQuaternion(J),o.setFromVector3(D),n.autoRotate&&r===i.NONE&&y(E()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let De=n.minAzimuthAngle,Ne=n.maxAzimuthAngle;return isFinite(De)&&isFinite(Ne)&&(De<-Math.PI?De+=be:De>Math.PI&&(De-=be),Ne<-Math.PI?Ne+=be:Ne>Math.PI&&(Ne-=be),De<=Ne?o.theta=Math.max(De,Math.min(Ne,o.theta)):o.theta=o.theta>(De+Ne)/2?Math.max(De,o.theta):Math.min(Ne,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),D.setFromSpherical(o),D.applyQuaternion(V),Se.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||fe.distanceToSquared(n.object.position)>s||8*(1-ve.dot(n.object.quaternion))>s?(n.dispatchEvent(fh),fe.copy(n.object.position),ve.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",A),n.domElement.removeEventListener("pointerdown",ee),n.domElement.removeEventListener("pointercancel",ue),n.domElement.removeEventListener("wheel",we),n.domElement.removeEventListener("pointermove",_e),n.domElement.removeEventListener("pointerup",ue),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ze),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const s=1e-6,o=new lh,l=new lh;let c=1;const u=new L;let h=!1;const d=new re,p=new re,_=new re,g=new re,m=new re,f=new re,b=new re,x=new re,v=new re,S=[],w={};function E(){return 2*Math.PI/60/60*n.autoRotateSpeed}function T(){return Math.pow(.95,n.zoomSpeed)}function y(D){l.theta-=D}function M(D){l.phi-=D}const I=function(){const D=new L;return function(V,fe){D.setFromMatrixColumn(fe,0),D.multiplyScalar(-V),u.add(D)}}(),N=function(){const D=new L;return function(V,fe){n.screenSpacePanning===!0?D.setFromMatrixColumn(fe,1):(D.setFromMatrixColumn(fe,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(V),u.add(D)}}(),R=function(){const D=new L;return function(V,fe){const ve=n.domElement;if(n.object.isPerspectiveCamera){const be=n.object.position;D.copy(be).sub(n.target);let me=D.length();me*=Math.tan(n.object.fov/2*Math.PI/180),I(2*V*me/ve.clientHeight,n.object.matrix),N(2*fe*me/ve.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(I(V*(n.object.right-n.object.left)/n.object.zoom/ve.clientWidth,n.object.matrix),N(fe*(n.object.top-n.object.bottom)/n.object.zoom/ve.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function z(D){n.object.isPerspectiveCamera?c/=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*D)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(D){n.object.isPerspectiveCamera?c*=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/D)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(D){d.set(D.clientX,D.clientY)}function q(D){b.set(D.clientX,D.clientY)}function H(D){g.set(D.clientX,D.clientY)}function ne(D){p.set(D.clientX,D.clientY),_.subVectors(p,d).multiplyScalar(n.rotateSpeed);const J=n.domElement;y(2*Math.PI*_.x/J.clientHeight),M(2*Math.PI*_.y/J.clientHeight),d.copy(p),n.update()}function Q(D){x.set(D.clientX,D.clientY),v.subVectors(x,b),v.y>0?z(T()):v.y<0&&O(T()),b.copy(x),n.update()}function xe(D){m.set(D.clientX,D.clientY),f.subVectors(m,g).multiplyScalar(n.panSpeed),R(f.x,f.y),g.copy(m),n.update()}function se(D){D.deltaY<0?O(T()):D.deltaY>0&&z(T()),n.update()}function j(D){let J=!1;switch(D.code){case n.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?M(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(0,n.keyPanSpeed),J=!0;break;case n.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?M(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(0,-n.keyPanSpeed),J=!0;break;case n.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(n.keyPanSpeed,0),J=!0;break;case n.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(-n.keyPanSpeed,0),J=!0;break}J&&(D.preventDefault(),n.update())}function K(){if(S.length===1)d.set(S[0].pageX,S[0].pageY);else{const D=.5*(S[0].pageX+S[1].pageX),J=.5*(S[0].pageY+S[1].pageY);d.set(D,J)}}function ce(){if(S.length===1)g.set(S[0].pageX,S[0].pageY);else{const D=.5*(S[0].pageX+S[1].pageX),J=.5*(S[0].pageY+S[1].pageY);g.set(D,J)}}function pe(){const D=S[0].pageX-S[1].pageX,J=S[0].pageY-S[1].pageY,V=Math.sqrt(D*D+J*J);b.set(0,V)}function B(){n.enableZoom&&pe(),n.enablePan&&ce()}function Le(){n.enableZoom&&pe(),n.enableRotate&&K()}function Pe(D){if(S.length==1)p.set(D.pageX,D.pageY);else{const V=he(D),fe=.5*(D.pageX+V.x),ve=.5*(D.pageY+V.y);p.set(fe,ve)}_.subVectors(p,d).multiplyScalar(n.rotateSpeed);const J=n.domElement;y(2*Math.PI*_.x/J.clientHeight),M(2*Math.PI*_.y/J.clientHeight),d.copy(p)}function le(D){if(S.length===1)m.set(D.pageX,D.pageY);else{const J=he(D),V=.5*(D.pageX+J.x),fe=.5*(D.pageY+J.y);m.set(V,fe)}f.subVectors(m,g).multiplyScalar(n.panSpeed),R(f.x,f.y),g.copy(m)}function ye(D){const J=he(D),V=D.pageX-J.x,fe=D.pageY-J.y,ve=Math.sqrt(V*V+fe*fe);x.set(0,ve),v.set(0,Math.pow(x.y/b.y,n.zoomSpeed)),z(v.y),b.copy(x)}function te(D){n.enableZoom&&ye(D),n.enablePan&&le(D)}function $(D){n.enableZoom&&ye(D),n.enableRotate&&Pe(D)}function ee(D){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",_e),n.domElement.addEventListener("pointerup",ue)),G(D),D.pointerType==="touch"?We(D):Ee(D))}function _e(D){n.enabled!==!1&&(D.pointerType==="touch"?P(D):Ce(D))}function ue(D){ie(D),S.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",_e),n.domElement.removeEventListener("pointerup",ue)),n.dispatchEvent(ph),r=i.NONE}function Ee(D){let J;switch(D.button){case 0:J=n.mouseButtons.LEFT;break;case 1:J=n.mouseButtons.MIDDLE;break;case 2:J=n.mouseButtons.RIGHT;break;default:J=-1}switch(J){case Zi.DOLLY:if(n.enableZoom===!1)return;q(D),r=i.DOLLY;break;case Zi.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;H(D),r=i.PAN}else{if(n.enableRotate===!1)return;W(D),r=i.ROTATE}break;case Zi.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;W(D),r=i.ROTATE}else{if(n.enablePan===!1)return;H(D),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Ua)}function Ce(D){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;ne(D);break;case i.DOLLY:if(n.enableZoom===!1)return;Q(D);break;case i.PAN:if(n.enablePan===!1)return;xe(D);break}}function we(D){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(D.preventDefault(),n.dispatchEvent(Ua),se(D),n.dispatchEvent(ph))}function ze(D){n.enabled===!1||n.enablePan===!1||j(D)}function We(D){switch(oe(D),S.length){case 1:switch(n.touches.ONE){case Ji.ROTATE:if(n.enableRotate===!1)return;K(),r=i.TOUCH_ROTATE;break;case Ji.PAN:if(n.enablePan===!1)return;ce(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Ji.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;B(),r=i.TOUCH_DOLLY_PAN;break;case Ji.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Le(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Ua)}function P(D){switch(oe(D),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Pe(D),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;le(D),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;te(D),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;$(D),n.update();break;default:r=i.NONE}}function A(D){n.enabled!==!1&&D.preventDefault()}function G(D){S.push(D)}function ie(D){delete w[D.pointerId];for(let J=0;J<S.length;J++)if(S[J].pointerId==D.pointerId){S.splice(J,1);return}}function oe(D){let J=w[D.pointerId];J===void 0&&(J=new re,w[D.pointerId]=J),J.set(D.pageX,D.pageY)}function he(D){const J=D.pointerId===S[0].pointerId?S[1]:S[0];return w[J.pointerId]}n.domElement.addEventListener("contextmenu",A),n.domElement.addEventListener("pointerdown",ee),n.domElement.addEventListener("pointercancel",ue),n.domElement.addEventListener("wheel",we,{passive:!1}),this.update()}}class Cy{constructor(){this.experience=new rt,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.setInstance(),this.setOrbitControls()}setInstance(){this.instance=new Ht(35,this.sizes.width/this.sizes.height,.1,1e3);const e=this.sizes.width>this.sizes.height?25:50;this.instance.position.set(-e*.5,13,e),this.scene.add(this.instance)}setOrbitControls(){this.controls=new Ey(this.instance,this.canvas)}resize(){this.instance.aspect=this.sizes.width/this.sizes.height,this.instance.updateProjectionMatrix()}update(){}}const Ud={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class ks{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Py=new Vo(-1,1,1,-1,0,1),Yl=new Lt;Yl.setAttribute("position",new St([-1,3,0,-1,-1,0,3,-1,0],3));Yl.setAttribute("uv",new St([0,2,0,0,2,0],2));class Od{constructor(e){this._mesh=new Ye(Yl,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Py)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ly extends ks{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof tt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Po.clone(e.uniforms),this.material=new tt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Od(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class mh extends ks{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,s,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class Ry extends ks{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Dy{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new re);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new An(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ly(Ud),this.clock=new dy}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const s=this.passes[i];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),s.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}mh!==void 0&&(s instanceof mh?n=!0:s instanceof Ry&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Iy extends ks{constructor(e,t,n,i,r){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Me}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,s;this.overrideMaterial!==void 0&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=s),e.autoClear=i}}const zy={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Me(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class kr extends ks{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new re(e.x,e.y):new re(256,256),this.clearColor=new Me(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new An(r,s),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new An(r,s);d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new An(r,s);p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),s=Math.round(s/2)}const o=zy;this.highPassUniforms=Po.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new tt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.texSize.value=new re(r,s),r=Math.round(r/2),s=Math.round(s/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Ud;this.copyUniforms=Po.clone(u.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new tt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Ka,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Me,this.oldClearAlpha=1,this.basic=new fi,this.fsQuad=new Od(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.texSize.value=new re(n,i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=kr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=kr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=s}getSeperableBlurMaterial(e){return new tt({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new re(.5,.5)},direction:{value:new re(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new tt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}kr.BlurDirectionX=new re(1,0);kr.BlurDirectionY=new re(0,1);class Uy{constructor(){this.experience=new rt,this.canvas=this.experience.canvas,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.camera=this.experience.camera,this.setInstance()}setInstance(){this.instance=new _d({canvas:this.canvas,antialias:!0}),this.instance.useLegacyLights=!0,this.instance.outputEncoding=Xe,this.instance.toneMapping=Yh,this.instance.toneMappingExposure=1.75,this.instance.shadowMap.enabled=!0,this.instance.shadowMap.type=Wh,this.instance.setClearColor("#211d20"),this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio),this.effectComposer=new Dy(this.instance),this.effectComposer.setSize(this.sizes.width,this.sizes.height),this.effectComposer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderPass=new Iy(this.scene,this.camera.instance),this.effectComposer.addPass(this.renderPass),this.bloomPass=new kr(new re(this.sizes.width,this.sizes.height),1.5,.4,.85),this.bloomPass.threshold=this.experience.debugOptions.bloomThreshold,this.bloomPass.strength=this.experience.debugOptions.bloomStrength,this.bloomPass.radius=this.experience.debugOptions.bloomRadius,this.effectComposer.addPass(this.bloomPass),this.bloomPass.enabled=this.experience.debugOptions.bloomEnabled}resize(){this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio)}update(){this.effectComposer.render()}}function Oy(a,e=!1){const t=a[0].index!==null,n=new Set(Object.keys(a[0].attributes)),i=new Set(Object.keys(a[0].morphAttributes)),r={},s={},o=a[0].morphTargetsRelative,l=new Lt;let c=0;for(let u=0;u<a.length;++u){const h=a[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;s[p]===void 0&&(s[p]=[]),s[p].push(h.morphAttributes[p])}if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0;const h=[];for(let d=0;d<a.length;++d){const p=a[d].index;for(let _=0;_<p.count;++_)h.push(p.getX(_)+u);u+=a[d].attributes.position.count}l.setIndex(h)}for(const u in r){const h=gh(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in s){const h=s[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const p=[];for(let g=0;g<s[u].length;++g)p.push(s[u][g][d]);const _=gh(p);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(_)}}return l}function gh(a){let e,t,n,i=0;for(let o=0;o<a.length;++o){const l=a[o];if(l.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=l.array.constructor),e!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=l.itemSize),t!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;i+=l.array.length}const r=new e(i);let s=0;for(let o=0;o<a.length;++o)r.set(a[o].array,s),s+=a[o].array.length;return new Pt(r,t,n)}function _h(a,e){if(e===Bp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===el||e===Jh){let t=a.getIndex();if(t===null){const s=[],o=a.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)s.push(l);a.setIndex(s),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const n=t.count-2,i=[];if(e===el)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=a.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}var Ny=`uniform sampler2D uAudioTexture;  
uniform float     uAudioStrength; 
attribute float   aId;            
varying vec2      vUv;

void main() {\r
    \r
    vec4 modelPosition      = modelMatrix       * vec4(position , 1.0);\r
    
    vec4 data = texture2D(uAudioTexture, vec2(aId, 0.0));\r
    if (uv.y > 0.1) {\r
        
        modelPosition.y +=  data.r * uAudioStrength;\r
    }\r
    else {\r
        modelPosition.y -=  data.r * uAudioStrength;\r
    }\r
 \r
    vec4 viewPosition       = viewMatrix        * modelPosition;\r
    vec4 projectionPosition = projectionMatrix  * viewPosition;

    gl_Position = projectionPosition;

    vUv = uv;\r
}`,Fy=`varying vec2 vUv;

void main() {\r
    float dist = length(vUv - vec2(0.5)) * 0.25;\r

    
    gl_FragColor = vec4(0.35 + dist, 0.25 - dist, 0.0, 1.0);\r
}`,ky=`uniform sampler2D uAudioTexture;  
uniform float     uAudioStrength; 
attribute float   aId;            \r

#include <common>\r
#include <uv_pars_vertex>\r
#include <displacementmap_pars_vertex>\r
#include <morphtarget_pars_vertex>\r
#include <skinning_pars_vertex>\r
#include <logdepthbuf_pars_vertex>\r
#include <clipping_planes_pars_vertex>\r
varying vec2 vHighPrecisionZW;\r
void main() {\r
	#include <uv_vertex>\r
	#include <skinbase_vertex>\r
	#ifdef USE_DISPLACEMENTMAP\r
		#include <beginnormal_vertex>\r
		#include <morphnormal_vertex>\r
		#include <skinnormal_vertex>\r
	#endif\r
	#include <begin_vertex>

    vec4 audioValue = texture2D(uAudioTexture, vec2(aId, 0.0));

    if (uv.y > 0.5) {\r
        
        transformed.y +=  audioValue.r * uAudioStrength;\r
    }\r
    else {\r
        transformed.y -=  audioValue.r * uAudioStrength;\r
    }\r
    

	#include <morphtarget_vertex>\r
	#include <skinning_vertex>\r
	#include <displacementmap_vertex>\r
	#include <project_vertex>\r
	#include <logdepthbuf_vertex>\r
	#include <clipping_planes_vertex>\r
	vHighPrecisionZW = gl_Position.zw;\r
}`;class By{constructor(e){this.experience=new rt,this.fftSize=this.experience.audioAnalizer.analizer.fftSize,this.scene=this.experience.scene,this.data=this.experience.audioAnalizer.analizerData,this.world=e,this.createBars(256,1)}visible(e){e===!0?this.scene.add(this.bars):this.scene.remove(this.bars)}createBars(e,t){typeof this.bars<"u"&&(this.scene.remove(this.bars),this.geometry.dispose(),this.material.dispose());let n=e*t,i=[];this.material=new tt({uniforms:{uAudioTexture:{value:this.world.frequencyTexture.bufferCanvasLinear.texture},uAudioStrength:{value:this.experience.debugOptions.barsAudioStrength}},vertexShader:Ny,fragmentShader:Fy});for(let o=0;o<t;o++)for(let l=0;l<e;l++){const c=new Xr(.09,.1,.09),u=(-(e*.5)+l)*.1,h=(-(t*.5)+o)*.1;c.translate(u,0,h),i.push(c)}const r=24;this.idArray=new Float32Array(n*r),this.geometry=Oy(i);let s=0;for(let o=0;o<n*r;o+=r){for(let l=0;l<r;l++)this.idArray[o+l]=s/n;s++}this.geometry.setAttribute("aId",new Pt(this.idArray,1));for(let o=0;o<n;o++)i[o].dispose();this.mesh=new Ye(this.geometry,this.material),this.mesh.castShadow=this.experience.debugOptions.shadows,this.mesh.position.z+=4.5,this.mesh.name="Bars",this.mesh.customDepthMaterial=new $t({depthPacking:Yt}),this.mesh.customDepthMaterial.onBeforeCompile=o=>{o.uniforms.uAudioTexture={value:this.world.frequencyTexture.bufferCanvasLinear.texture},o.uniforms.uAudioStrength={value:this.experience.debugOptions.barsAudioStrength},o.vertexShader=ky},this.scene.add(this.mesh)}update(){}isMobile(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}}var $l=`varying vec2 vUv;

void main() {\r
    \r
    vec4 modelPosition      = modelMatrix       * vec4(position , 1.0);\r
    vec4 viewPosition       = viewMatrix        * modelPosition;\r
    vec4 projectionPosition = projectionMatrix  * viewPosition;

    gl_Position = projectionPosition;

    vUv = uv;\r
}`,Hy=`uniform sampler2D uAudioTexture;\r
uniform float     uAudioStrength;\r
uniform float     uSize;\r
uniform float     uAlpha;\r
uniform float     uTime;\r
uniform float     uHover;\r
varying vec2      vUv;

#define PI   3.14159265

vec4 borderRoundRect(vec4 currentColor, vec2 size, float radius) {\r
    vec2  position   = vUv * size;\r
    vec2  rounded    = vec2(clamp(position.x, radius, size.x - radius), clamp(position.y, radius, size.y - radius));\r
    vec2  difference = position - rounded;\r
    float dist       = length(difference);\r
    vec4  color      = vec4(1.0, 1.0, 1.0, uHover); 
    float borderSize = 0.015;                       
    float alpha      = step(0.2, smoothstep(radius - borderSize, radius- borderSize, dist) - smoothstep(radius, radius + borderSize, dist));\r
    color.a = alpha * uHover;\r
    
    if (dist > radius - borderSize) {\r
        return color;\r
    }\r
    
    return currentColor;\r
}\r

void main() {\r
    vec2  center       = vec2(0.65, 0.5); 
    float radius       = 0.2;\r
    float thickness    = uSize;\r
    

    float dist = length(vUv - center);\r
    
    float rad = atan(vUv.y - center.y, vUv.x - center.x);\r
    float normAngle = 0.0;

    
    
    if (rad < 0.0) {\r
        normAngle = (rad + PI) / PI;\r
    } else {\r
        normAngle = 1.0 - (1.0 + ((rad - PI) / PI));\r
    }

    
    float audioValue = texture2D(uAudioTexture, vec2(normAngle, 0.0)).r * uAudioStrength;\r
    dist -= audioValue;

    
    vec4 color = vec4(0.0, 0.0, 0.0, (uAlpha + uHover) * 0.80);\r

    
    if (dist > radius - thickness && dist < radius) { 
        color = vec4(1.0, 0.0, 0.0, 1.0);\r
    } 

    
    color = borderRoundRect(color, vec2(1.0, 1.0), 0.125);

    gl_FragColor = color;\r
}`,_n=`varying vec2 vUv;

#include <common>\r
#include <uv_pars_vertex>\r
#include <displacementmap_pars_vertex>\r
#include <morphtarget_pars_vertex>\r
#include <skinning_pars_vertex>\r
#include <logdepthbuf_pars_vertex>\r
#include <clipping_planes_pars_vertex>\r
varying vec2 vHighPrecisionZW;\r
void main() {\r
	#include <uv_vertex>\r
	#include <skinbase_vertex>\r
	#ifdef USE_DISPLACEMENTMAP\r
		#include <beginnormal_vertex>\r
		#include <morphnormal_vertex>\r
		#include <skinnormal_vertex>\r
	#endif\r
	#include <begin_vertex>

    vUv = uv;

	#include <morphtarget_vertex>\r
	#include <skinning_vertex>\r
	#include <displacementmap_vertex>\r
	#include <project_vertex>\r
	#include <logdepthbuf_vertex>\r
	#include <clipping_planes_vertex>\r
	vHighPrecisionZW = gl_Position.zw;\r
}`,Vy=`uniform sampler2D uAudioTexture;\r
uniform float     uAudioStrength;\r
uniform float     uSize;\r
uniform float     uAlpha;\r
uniform float     uTime;\r
uniform float     uHover;\r
varying vec2      vUv;\r

#if DEPTH_PACKING == 3200\r
	uniform float opacity;\r
#endif\r
#include <common>\r
#include <packing>\r
#include <uv_pars_fragment>\r
#include <map_pars_fragment>\r
#include <alphamap_pars_fragment>\r
#include <alphatest_pars_fragment>\r
#include <logdepthbuf_pars_fragment>\r
#include <clipping_planes_pars_fragment>\r
varying vec2 vHighPrecisionZW;\r
void main() {\r
	#include <clipping_planes_fragment>\r
	vec4 diffuseColor = vec4( 1.0 );\r
	#if DEPTH_PACKING == 3200\r
		diffuseColor.a = opacity;\r
	#endif\r

    vec2  center       = vec2(0.75, 0.5); 
    float radius       = 0.2;\r
    float thickness    = uSize;\r
    

    float dist = length(vUv - center);\r
    
    float rad = atan(vUv.y - center.y, vUv.x - center.x);\r
    float normAngle = 0.0;

    
    
    if (rad < 0.0) {\r
        normAngle = (rad + PI) / PI;\r
    } else {\r
        normAngle = 1.0 - (1.0 + ((rad - PI) / PI));\r
    }

    
    float audioValue = texture2D(uAudioTexture, vec2(normAngle, 0.0)).r * uAudioStrength;\r
    dist -= audioValue;

    
    vec4 color = vec4(0.0, 0.0, 0.0, (uAlpha + uHover) * 0.80);\r

    
    if (dist > radius - thickness && dist < radius) { 
        color = vec4(1.0, 0.0, 0.0, 1.0);\r
    } \r
    

    \r
    diffuseColor = color;

    if (color.a == 0.0) discard;\r

	#include <map_fragment>\r
	#include <alphamap_fragment>\r
	#include <alphatest_fragment>\r
	#include <logdepthbuf_fragment>\r
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\r
	\r
    #if DEPTH_PACKING == 3200\r
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\r
	#elif DEPTH_PACKING == 3201\r
		gl_FragColor = packDepthToRGBA( fragCoordZ );\r
	#endif

}`;class Gy{constructor(e){this.experience=new rt,this.scene=this.experience.scene,this.world=e,this.time=this.experience.time,this.setup()}setup(){this.geometry=new on(3,3),this.material=new tt({uniforms:{uAudioTexture:{value:this.world.frequencyTexture.bufferCanvasLinear.texture},uAudioStrength:{value:this.experience.debugOptions.circularAudioStrength},uAlpha:{value:this.experience.debugOptions.circularAlpha},uSize:{value:this.experience.debugOptions.circularLineSize},uTime:{value:0},uHover:{value:0}},vertexShader:$l,fragmentShader:Hy,transparent:!0,side:at,depthWrite:!0}),this.mesh=new Ye(this.geometry,this.material),this.mesh.rotation.z=-Math.PI*.5,this.mesh.position.y+=3,this.mesh.position.x-=3,this.mesh.name="Circular",this.mesh.castShadow=this.experience.debugOptions.shadows,this.mesh.customDepthMaterial=new $t({depthPacking:Yt}),this.mesh.customDepthMaterial.onBeforeCompile=e=>{e.uniforms.uAudioTexture={value:this.world.frequencyTexture.bufferCanvasLinear.texture},e.uniforms.uAudioStrength={value:this.experience.debugOptions.circularAudioStrength},e.uniforms.uAlpha={value:this.experience.debugOptions.circularAlpha},e.uniforms.uSize={value:this.experience.debugOptions.circularLineSize},e.uniforms.uTime={value:0},e.uniforms.uHover={value:0},e.vertexShader=_n,e.fragmentShader=Vy,this.mesh.customDepthMaterial.uniforms=e.uniforms},this.scene.add(this.mesh)}visible(e){e===!0?this.scene.add(this.mesh):this.scene.remove(this.mesh)}update(){this.material.uniforms.uTime.value+=this.time.delta/1e3}}var Wy=`uniform sampler2D uAudioTexture;\r
uniform float     uAudioStrength;\r
uniform float     uSize;\r
uniform float     uAlpha;\r
uniform float     uHover;\r
varying vec2      vUv;

vec4 borderRoundRect(vec4 currentColor, vec2 size, float radius) {\r
    vec2  position   = vUv * size;\r
    vec2  rounded    = vec2(clamp(position.x, radius, size.x - radius), clamp(position.y, radius, size.y - radius));\r
    vec2  difference = position - rounded;\r
    float dist       = length(difference);\r
    vec4  color      = vec4(1.0, 1.0, 1.0, uHover); 
    float borderSize = 0.015;                       
    float alpha      = step(0.2, smoothstep(radius - borderSize, radius- borderSize, dist) - smoothstep(radius, radius + borderSize, dist));\r
    color.a = alpha * uHover;\r
    
    if (dist > radius - borderSize) {\r
        return color;\r
    }\r
    
    return currentColor;\r
}

void main() {\r
    float radius    = 0.25;\r
    float thickness = uSize;\r
    vec2  center    = vUv - 0.5;\r
    float dist      = length(center);

    float audioValue = texture2D(uAudioTexture, vec2(vUv.x * radius, 0.5)).r; 
    dist -= audioValue * uAudioStrength;

    
    vec4 color = vec4(0.0, 0.0, 0.0, (uAlpha + uHover) * 0.80);

    \r
    if (dist > radius - thickness && dist < radius) {\r
        color = vec4(0.75, 0.0, 0.0, 1.0);\r
    }

    
    color = borderRoundRect(color, vec2(1.0, 1.0), 0.125);

    gl_FragColor = color;

}`,qy=`uniform sampler2D uAudioTexture;\r
uniform float     uAudioStrength;\r
uniform float     uSize;\r
uniform float     uAlpha;\r
uniform float     uTime;\r
uniform float     uHover;\r
varying vec2      vUv;\r

#if DEPTH_PACKING == 3200\r
	uniform float opacity;\r
#endif\r
#include <common>\r
#include <packing>\r
#include <uv_pars_fragment>\r
#include <map_pars_fragment>\r
#include <alphamap_pars_fragment>\r
#include <alphatest_pars_fragment>\r
#include <logdepthbuf_pars_fragment>\r
#include <clipping_planes_pars_fragment>\r
varying vec2 vHighPrecisionZW;\r
void main() {\r
	#include <clipping_planes_fragment>\r
	vec4 diffuseColor = vec4( 1.0 );\r
	#if DEPTH_PACKING == 3200\r
		diffuseColor.a = opacity;\r
	#endif

    float radius    = 0.20;\r
    float thickness = uSize;\r
    vec2  center    = vUv - 0.5;\r
    float dist      = length(center);

    float audioValue = texture2D(uAudioTexture, vec2(vUv.x * radius, 0.5)).r; 
    dist -= audioValue * uAudioStrength;

    
    vec4 color = vec4(0.0, 0.0, 0.0, (uAlpha + uHover) * 0.80);\r

    if (dist > radius - thickness && dist < radius) {\r
        color = vec4(0.75, 0.0, 0.0, 1.0);\r
    }\r
    else {\r
        discard;\r
    }

    diffuseColor = color;\r

	#include <map_fragment>\r
	#include <alphamap_fragment>\r
	#include <alphatest_fragment>\r
	#include <logdepthbuf_fragment>\r
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\r
	\r
    #if DEPTH_PACKING == 3200\r
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\r
	#elif DEPTH_PACKING == 3201\r
		gl_FragColor = packDepthToRGBA( fragCoordZ );\r
	#endif

}`;class jy{constructor(e){this.experience=new rt,this.scene=this.experience.scene,this.world=e,this.time=this.experience.time,this.setup()}setup(){this.geometry=new on(3,3),this.material=new tt({uniforms:{uAudioTexture:{value:this.world.frequencyTexture.bufferCanvasLinear.texture},uAudioStrength:{value:this.experience.debugOptions.circularAudioStrength*.6},uAlpha:{value:this.experience.debugOptions.circularAlpha},uSize:{value:this.experience.debugOptions.circularLineSize},uTime:{value:0},uHover:{value:0}},vertexShader:$l,fragmentShader:Wy,transparent:!0,side:at,depthWrite:!1}),this.mesh=new Ye(this.geometry,this.material),this.mesh.rotation.z=Math.PI*.5,this.mesh.position.y+=3,this.mesh.position.x-=7,this.mesh.name="CircularDistorsion",this.mesh.castShadow=this.experience.debugOptions.shadows,this.mesh.customDepthMaterial=new $t({depthPacking:Yt}),this.mesh.customDepthMaterial.onBeforeCompile=e=>{e.uniforms.uAudioTexture={value:this.world.frequencyTexture.bufferCanvasLinear.texture},e.uniforms.uAudioStrength={value:this.experience.debugOptions.circularAudioStrength*.75},e.uniforms.uAlpha={value:this.experience.debugOptions.circularAlpha},e.uniforms.uSize={value:this.experience.debugOptions.circularLineSize},e.uniforms.uTime={value:0},e.uniforms.uHover={value:0},e.vertexShader=_n,e.fragmentShader=qy,this.mesh.customDepthMaterial.uniforms=e.uniforms},this.scene.add(this.mesh)}visible(e){e===!0?this.scene.add(this.mesh):this.scene.remove(this.mesh)}update(){this.material.uniforms.uTime.value+=this.time.delta/1e3}}var Xy=`uniform sampler2D uAudioTexture;\r
uniform float     uAudioStrength;\r
uniform float     uSize;\r
uniform float     uAlpha;\r
uniform float     uHover;\r
varying vec2      vUv;

#define PI   3.14159265

vec4 borderRoundRect(vec4 currentColor, vec2 size, float radius) {\r
    vec2  position   = vUv * size;\r
    vec2  rounded    = vec2(clamp(position.x, radius, size.x - radius), clamp(position.y, radius, size.y - radius));\r
    vec2  difference = position - rounded;\r
    float dist       = length(difference);\r
    vec4  color      = vec4(1.0, 1.0, 1.0, uHover); 
    float borderSize = 0.015;                       
    float alpha      = step(0.2, smoothstep(radius - borderSize, radius- borderSize, dist) - smoothstep(radius, radius + borderSize, dist));\r
    color.a = alpha * uHover;\r
    
    if (dist > radius - borderSize) {\r
        return color;\r
    }\r
    
    return currentColor;\r
}

void main() {\r
    float radius    = 0.2;\r
    float thickness = uSize;\r
    float space     = 0.5 - (thickness * 2.0) - radius;\r
    vec2  center    = vec2(vUv.x - 0.5, vUv.y - 0.5);\r
    float dist      = length(center);

    float rad = atan(vUv.y - 0.5, vUv.x - 0.5);\r
    
    float normAngle = 0.0;\r
    
    if (rad < 0.0) {\r
        normAngle = (rad + PI) / PI;\r
    }\r
    
    else {\r
        
        normAngle = 1.0 - (1.0 + ((rad - PI) / PI));\r
    }\r
 \r
    
    
    float audioValue = texture2D(uAudioTexture, vec2(normAngle, 0.0)).g; \r
    dist -= audioValue * uAudioStrength;

    vec4 color = vec4(0.0, 0.0, 0.0, (uAlpha + uHover) * 0.80);

    if (dist > radius - thickness && dist < radius) {\r
        color = vec4(0.0, 0.75, 0.0, 1.0);\r
    }

    
    color = borderRoundRect(color, vec2(1.0, 1.0), 0.125);\r

    gl_FragColor = color;\r
}`,Yy=`uniform sampler2D uAudioTexture;\r
uniform float     uAudioStrength;\r
uniform float     uSize;\r
uniform float     uAlpha;\r
uniform float     uTime;\r
uniform float     uHover;\r
varying vec2      vUv;\r

#if DEPTH_PACKING == 3200\r
	uniform float opacity;\r
#endif\r
#include <common>\r
#include <packing>\r
#include <uv_pars_fragment>\r
#include <map_pars_fragment>\r
#include <alphamap_pars_fragment>\r
#include <alphatest_pars_fragment>\r
#include <logdepthbuf_pars_fragment>\r
#include <clipping_planes_pars_fragment>\r
varying vec2 vHighPrecisionZW;\r
void main() {\r
	#include <clipping_planes_fragment>\r
	vec4 diffuseColor = vec4( 1.0 );\r
	#if DEPTH_PACKING == 3200\r
		diffuseColor.a = opacity;\r
	#endif\r

    float radius    = 0.2;\r
    float thickness = uSize;\r
    float space     = 0.5 - (thickness * 2.0) - radius;\r
    vec2  center    = vec2(vUv.x - 0.5, vUv.y - 0.5);\r
    float dist      = length(center);

    float rad = atan(vUv.y - 0.5, vUv.x - 0.5);\r
    
    float normAngle = 0.0;\r
    
    if (rad < 0.0) {\r
        normAngle = (rad + PI) / PI;\r
    }\r
    
    else {\r
        
        normAngle = 1.0 - (1.0 + ((rad - PI) / PI));\r
    }\r
 \r
    
    
    float audioValue = texture2D(uAudioTexture, vec2(normAngle, 0.0)).g; \r
    dist -= audioValue * uAudioStrength;

    vec4 color = vec4(0.0, 0.0, 0.0, (uAlpha + uHover) * 0.80);

    if (dist > radius - thickness && dist < radius) {\r
        color = vec4(0.0, 0.75, 0.0, 1.0);\r
    }\r
    else {\r
        discard;\r
    }

    diffuseColor = color;\r

	#include <map_fragment>\r
	#include <alphamap_fragment>\r
	#include <alphatest_fragment>\r
	#include <logdepthbuf_fragment>\r
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\r
	\r
    #if DEPTH_PACKING == 3200\r
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\r
	#elif DEPTH_PACKING == 3201\r
		gl_FragColor = packDepthToRGBA( fragCoordZ );\r
	#endif

}`;class $y{constructor(e){this.experience=new rt,this.scene=this.experience.scene,this.world=e,this.time=this.experience.time,this.setup()}setup(){this.geometry=new on(3,3),this.material=new tt({uniforms:{uAudioTexture:{value:this.world.frequencyTexture.bufferCanvasLinear.texture},uAudioStrength:{value:this.experience.debugOptions.circularAudioStrength},uAlpha:{value:this.experience.debugOptions.circularAlpha},uSize:{value:this.experience.debugOptions.circularLineSize},uTime:{value:0},uHover:{value:0}},vertexShader:$l,fragmentShader:Xy,transparent:!0,side:at,depthWrite:!1}),this.mesh=new Ye(this.geometry,this.material),this.mesh.rotation.z=-Math.PI*.5,this.mesh.position.y+=7,this.mesh.position.x-=3,this.mesh.name="CircularSin",this.mesh.castShadow=this.experience.debugOptions.shadows,this.mesh.customDepthMaterial=new $t({depthPacking:Yt}),this.mesh.customDepthMaterial.onBeforeCompile=e=>{e.uniforms.uAudioTexture={value:this.world.frequencyTexture.bufferCanvasLinear.texture},e.uniforms.uAudioStrength={value:this.experience.debugOptions.circularAudioStrength},e.uniforms.uAlpha={value:this.experience.debugOptions.circularAlpha},e.uniforms.uSize={value:this.experience.debugOptions.circularLineSize},e.uniforms.uTime={value:0},e.uniforms.uHover={value:0},e.vertexShader=_n,e.fragmentShader=Yy,this.mesh.customDepthMaterial.uniforms=e.uniforms},this.scene.add(this.mesh)}visible(e){e===!0?this.scene.add(this.mesh):this.scene.remove(this.mesh)}update(){this.material.uniforms.uTime.value+=this.time.delta/1e3}}class Ky{constructor(){this.experience=new rt,this.scene=this.experience.scene,this.resources=this.experience.resources,this.debug=this.experience.debug,this.setSunLight()}setSpotLight(){this.spotLight=new zd(13421772,2,100,Math.PI*.1,.25,.25),this.spotLight.position.set(-5,18,27),this.spotLight.castShadow=!0,this.spotLight.shadow.mapSize.set(1024,1024),this.spotLight.shadow.camera.near=.1,this.spotLight.shadow.camera.far=1,this.spotLight.shadow.focus=1,this.scene.add(this.spotLight,this.spotLight.target),this.debug.active&&(this.splhelper=new My(this.spotLight),this.splhelper.visible=!0,this.scene.add(this.splhelper))}setSunLight(){this.sunLight=new cl("#ffffff",2),this.sunLight.castShadow=this.experience.debugOptions.shadows,this.sunLight.shadow.camera.far=64,this.sunLight.shadow.mapSize.set(1024,1024),this.sunLight.shadow.normalBias=.05,this.sunLight.shadow.camera.bottom=-16,this.sunLight.shadow.camera.top=16,this.sunLight.shadow.camera.left=-16,this.sunLight.shadow.camera.right=16,this.sunLight.position.set(-5,18,27),this.scene.add(this.sunLight),this.debug.active&&(this.sunLightHelper=new dh(this.sunLight,1),this.scene.add(this.sunLightHelper))}setSunLight2(){this.sunLight2=new cl("#ffffff",2),this.sunLight2.castShadow=!0,this.sunLight2.shadow.camera.far=64,this.sunLight2.shadow.mapSize.set(1024,1024),this.sunLight2.shadow.normalBias=.05,this.sunLight2.shadow.camera.bottom=-16,this.sunLight2.shadow.camera.top=16,this.sunLight2.shadow.camera.left=-16,this.sunLight2.shadow.camera.right=16,this.sunLight2.position.set(5,12,18),this.scene.add(this.sunLight2),this.debug.active&&(this.sunLightHelper2=new dh(this.sunLight2,1),this.scene.add(this.sunLightHelper2))}setEnvironmentMap(){this.environmentMap={},this.environmentMap.intensity=.5,this.environmentMap.texture=this.resources.items.environmentMapTexture,this.environmentMap.texture.encoding=Xe,this.scene.environment=this.environmentMap.texture,this.environmentMap.updateMaterials=()=>{this.scene.traverse(e=>{e instanceof Ye&&e.material instanceof $r&&(e.material.envMap=this.environmentMap.texture,e.material.envMapIntensity=this.environmentMap.intensity,e.material.needsUpdate=!0)})},this.environmentMap.updateMaterials()}}var Zy=`uniform sampler2D uAudioTexture;\r
uniform float uTime;\r
uniform float uAudioStrength;\r
varying vec2  vUv;

/*vec4 permute(vec4 x)       { return mod(((x*34.0)+1.0)*x, 289.0);            }\r
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }\r
vec3 fade(vec3 t)          { return t*t*t*(t*(t*6.0-15.0)+10.0);             }

float cnoise(vec3 P) {\r
  vec3 Pi0 = floor(P); 
  vec3 Pi1 = Pi0 + vec3(1.0); 
  Pi0 = mod(Pi0, 289.0);\r
  Pi1 = mod(Pi1, 289.0);\r
  vec3 Pf0 = fract(P); 
  vec3 Pf1 = Pf0 - vec3(1.0); 
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\r
  vec4 iy = vec4(Pi0.yy, Pi1.yy);\r
  vec4 iz0 = Pi0.zzzz;\r
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);\r
  vec4 ixy0 = permute(ixy + iz0);\r
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;\r
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;\r
  gx0 = fract(gx0);\r
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\r
  vec4 sz0 = step(gz0, vec4(0.0));\r
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\r
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;\r
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;\r
  gx1 = fract(gx1);\r
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\r
  vec4 sz1 = step(gz1, vec4(0.0));\r
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\r
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\r
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\r
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\r
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\r
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\r
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\r
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\r
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\r
  g000 *= norm0.x;\r
  g010 *= norm0.y;\r
  g100 *= norm0.z;\r
  g110 *= norm0.w;\r
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\r
  g001 *= norm1.x;\r
  g011 *= norm1.y;\r
  g101 *= norm1.z;\r
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);\r
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\r
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\r
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\r
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\r
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\r
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\r
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);\r
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\r
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\r
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \r
  return 2.2 * n_xyz;\r
}*/

/* \r
 * Three.js globals\r
 */\r
#define STANDARD\r
varying vec3 vViewPosition;\r
#ifdef USE_TRANSMISSION\r
	varying vec3 vWorldPosition;\r
#endif\r
#include <common>\r
#include <uv_pars_vertex>\r
#include <displacementmap_pars_vertex>\r
#include <color_pars_vertex>\r
#include <fog_pars_vertex>\r
#include <normal_pars_vertex>\r
#include <morphtarget_pars_vertex>\r
#include <skinning_pars_vertex>\r
#include <shadowmap_pars_vertex>\r
#include <logdepthbuf_pars_vertex>\r
#include <clipping_planes_pars_vertex>

/* \r
 * Three.js main\r
 */\r
void main() {\r
    #include <uv_vertex>\r
    #include <color_vertex>\r
    #include <morphcolor_vertex>\r
    #include <beginnormal_vertex>\r
    #include <morphnormal_vertex>\r
    #include <skinbase_vertex>\r
    #include <skinnormal_vertex>\r
    #include <defaultnormal_vertex>\r
    #include <normal_vertex>\r
    #include <begin_vertex>

    /* \r
     * Perlin noise audio floor main\r
     */\r
    
    vec4 textureColor = texture2D(uAudioTexture, uv);\r
    transformed.z += textureColor.r * uAudioStrength;

    vUv = uv;

    
/*    vec2 displacement = uv + cnoise(vec3(uv * .3, uTime * 0.0001)) * 1.0;\r
    float strength = cnoise(vec3(displacement, uTime *0.0004));\r
    transformed.x += strength;\r
    transformed.y += strength;*/

    /*\r
     * Three.js main end\r
     */\r

    #include <morphtarget_vertex>\r
    #include <skinning_vertex>\r
    #include <displacementmap_vertex>\r
    #include <project_vertex>\r
    #include <logdepthbuf_vertex>\r
    #include <clipping_planes_vertex>\r
    vViewPosition = - mvPosition.xyz;\r
    #include <worldpos_vertex>\r
    #include <shadowmap_vertex>\r
    #include <fog_vertex>\r
  #ifdef USE_TRANSMISSION\r
    vWorldPosition = worldPosition.xyz;\r
  #endif\r
}`,Jy=`varying vec2 vUv;

#define STANDARD\r
#ifdef PHYSICAL\r
	#define IOR\r
	#define USE_SPECULAR\r
#endif\r
uniform vec3 diffuse;\r
uniform vec3 emissive;\r
uniform float roughness;\r
uniform float metalness;\r
uniform float opacity;\r
#ifdef IOR\r
	uniform float ior;\r
#endif\r
#ifdef USE_SPECULAR\r
	uniform float specularIntensity;\r
	uniform vec3 specularColor;\r
	#ifdef USE_SPECULAR_COLORMAP\r
		uniform sampler2D specularColorMap;\r
	#endif\r
	#ifdef USE_SPECULAR_INTENSITYMAP\r
		uniform sampler2D specularIntensityMap;\r
	#endif\r
#endif\r
#ifdef USE_CLEARCOAT\r
	uniform float clearcoat;\r
	uniform float clearcoatRoughness;\r
#endif\r
#ifdef USE_IRIDESCENCE\r
	uniform float iridescence;\r
	uniform float iridescenceIOR;\r
	uniform float iridescenceThicknessMinimum;\r
	uniform float iridescenceThicknessMaximum;\r
#endif\r
#ifdef USE_SHEEN\r
	uniform vec3 sheenColor;\r
	uniform float sheenRoughness;\r
	#ifdef USE_SHEEN_COLORMAP\r
		uniform sampler2D sheenColorMap;\r
	#endif\r
	#ifdef USE_SHEEN_ROUGHNESSMAP\r
		uniform sampler2D sheenRoughnessMap;\r
	#endif\r
#endif\r
varying vec3 vViewPosition;\r
#include <common>\r
#include <packing>\r
#include <dithering_pars_fragment>\r
#include <color_pars_fragment>\r
#include <uv_pars_fragment>\r
#include <map_pars_fragment>\r
#include <alphamap_pars_fragment>\r
#include <alphatest_pars_fragment>\r
#include <aomap_pars_fragment>\r
#include <lightmap_pars_fragment>\r
#include <emissivemap_pars_fragment>\r
#include <iridescence_fragment>\r
#include <cube_uv_reflection_fragment>\r
#include <envmap_common_pars_fragment>\r
#include <envmap_physical_pars_fragment>\r
#include <fog_pars_fragment>\r
#include <lights_pars_begin>\r
#include <normal_pars_fragment>\r
#include <lights_physical_pars_fragment>\r
#include <transmission_pars_fragment>\r
#include <shadowmap_pars_fragment>\r
#include <bumpmap_pars_fragment>\r
#include <normalmap_pars_fragment>\r
#include <clearcoat_pars_fragment>\r
#include <iridescence_pars_fragment>\r
#include <roughnessmap_pars_fragment>\r
#include <metalnessmap_pars_fragment>\r
#include <logdepthbuf_pars_fragment>\r
#include <clipping_planes_pars_fragment>\r
void main() {\r
	#include <clipping_planes_fragment>\r
	vec4 diffuseColor = vec4( diffuse, opacity );\r
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\r
	vec3 totalEmissiveRadiance = emissive;\r
	#include <logdepthbuf_fragment>\r
	#include <map_fragment>\r
	#include <color_fragment>

    #define GRID_SIZE 16.0\r
    #define BORDER_SIZE 0.1

    
    vec2 position = mod((vUv * GRID_SIZE * GRID_SIZE), vec2(GRID_SIZE)) / GRID_SIZE;\r
    
    float ratio = BORDER_SIZE / GRID_SIZE;\r
    
    float border =  step(position.x, ratio) + \r
                    step(position.y, ratio) + \r
                    step(1.0 - position.x, ratio) + \r
                    step(1.0 - position.y, ratio);\r
    \r
    
    vec3 color = mix(diffuse, vec3(1.0, 1.0, 1.0), step(position.x, ratio) + step(position.y, ratio));\r
    color = mix(color, vec3(1.0, 1.0, 1.0), border);\r
        \r
    
    diffuseColor = vec4(color, opacity);

	#include <alphamap_fragment>\r
	#include <alphatest_fragment>\r
	#include <roughnessmap_fragment>\r
	#include <metalnessmap_fragment>\r
	#include <normal_fragment_begin>\r
	#include <normal_fragment_maps>\r
	#include <clearcoat_normal_fragment_begin>\r
	#include <clearcoat_normal_fragment_maps>\r
	#include <emissivemap_fragment>\r
	#include <lights_physical_fragment>\r
	#include <lights_fragment_begin>\r
	#include <lights_fragment_maps>\r
	#include <lights_fragment_end>\r
	#include <aomap_fragment>\r
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\r
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\r
	#include <transmission_fragment>\r
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\r
	#ifdef USE_SHEEN\r
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\r
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\r
	#endif\r
	#ifdef USE_CLEARCOAT\r
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\r
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\r
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\r
	#endif\r
	#include <output_fragment>\r
	#include <tonemapping_fragment>\r
	#include <encodings_fragment>\r
	#include <fog_fragment>\r
	#include <premultiplied_alpha_fragment>\r
	#include <dithering_fragment>\r
}`;class Qy{constructor(e){this.experience=new rt,this.scene=this.experience.scene,this.time=this.experience.time,this.world=e,this.setup()}setup(){this.geometry=new on(32,32,32,32),this.material=new $r({onBeforeCompile:e=>{e.uniforms.uAudioTexture={value:this.world.frequencyTexture.bufferCanvasSquare.texture},e.uniforms.uAudioStrength={value:this.experience.debugOptions.floorAudioStrength},e.uniforms.uTime={value:0},e.vertexShader=Zy,e.fragmentShader=Jy,this.material.uniforms=e.uniforms},color:new Me("#0505e0"),wireframe:!1,side:at,transparent:!0,opacity:1}),this.mesh=new Ye(this.geometry,this.material),this.mesh.rotation.x=-Math.PI*.5,this.mesh.position.y=-8,this.mesh.position.z=-12,this.mesh.name="Floor",this.mesh.receiveShadow=this.experience.debugOptions.shadows,this.mesh.castShadow=this.experience.debugOptions.shadows,this.scene.add(this.mesh)}update(){typeof this.material.uniforms<"u"&&(this.material.uniforms.uTime.value+=this.time.delta/1e3)}}class vh{constructor(e,t){this.canvas=document.createElement("canvas"),this.canvas.setAttribute("width",e),this.canvas.setAttribute("height",t),this.context=this.canvas.getContext("2d",{willReadFrequently:!0}),this.width=e,this.height=t}debug_InsertCanvasIntoBody(){document.body.appendChild(this.canvas),this.canvas.style.zIndex=100,this.canvas.style.position="fixed",this.canvas.style.top=0}}var xh=`varying vec2 vUv;

void main() {\r
    vec4 modelPosition      = modelMatrix       * vec4(position , 1.0);\r
    vec4 viewPosition       = viewMatrix        * modelPosition;\r
    vec4 projectionPosition = projectionMatrix  * viewPosition;

    gl_Position = projectionPosition;\r
    vUv = uv;\r
}`,eS=`uniform sampler2D uAudioTexture;\r
uniform float     uHover;\r
varying vec2      vUv;           

vec4 borderRoundRect(vec4 currentColor, vec2 size, float radius) {\r
    vec2  position   = vUv * size;\r
    vec2  rounded    = vec2(clamp(position.x, radius, size.x - radius), clamp(position.y, radius, size.y - radius));\r
    vec2  difference = position - rounded;\r
    float dist       = length(difference);\r
    vec4  color      = vec4(1.0, 1.0, 1.0, uHover); 
    float borderSize = 0.015;                       
    float alpha      = step(0.2, smoothstep(radius - borderSize, radius- borderSize, dist) - smoothstep(radius, radius + borderSize, dist));\r
    color.a = alpha * uHover;\r
    
    if (dist > radius - borderSize) {\r
        return color;\r
    }\r
    
    return currentColor;\r
}

void main() {\r
    float audioValue = texture2D(uAudioTexture, vUv).r;\r
    vec4 color = vec4(audioValue * 0.125, 0.0, 0.0, 1.0);

    
    color = borderRoundRect(color, vec2(1.0, 1.0), 0.125);

    gl_FragColor = color;\r
}`,tS=`uniform sampler2D uAudioTexture;\r
uniform float     uHover;\r
varying vec2      vUv;           

vec4 borderRoundRect(vec4 currentColor, vec2 size, float radius) {\r
    vec2  position   = vUv * size;\r
    vec2  rounded    = vec2(clamp(position.x, radius, size.x - radius), clamp(position.y, radius, size.y - radius));\r
    vec2  difference = position - rounded;\r
    float dist       = length(difference);\r
    vec4  color      = vec4(1.0, 1.0, 1.0, uHover); 
    float borderSize = 0.015;                       
    float alpha      = step(0.2, smoothstep(radius - borderSize, radius- borderSize, dist) - smoothstep(radius, radius + borderSize, dist));\r
    color.a = alpha * uHover;\r
    
    if (dist > radius - borderSize) {\r
        return color;\r
    }\r
    
    return currentColor;\r
}

void main() {\r
    float audioValue = texture2D(uAudioTexture, vUv).g;\r
    vec4 color = vec4(0.0, audioValue * 0.125, 0.0, 1.0);

    
    color = borderRoundRect(color, vec2(1.0, 1.0), 0.125);

    gl_FragColor = color;\r
}`,yh=`uniform float     uHover;\r
varying vec2      vUv; 

vec4 borderRoundRect(vec4 currentColor, vec2 size, float radius) {\r
    vec2  position   = vUv * size;\r
    vec2  rounded    = vec2(clamp(position.x, radius, size.x - radius), clamp(position.y, radius, size.y - radius));\r
    vec2  difference = position - rounded;\r
    float dist       = length(difference);\r
    vec4  color      = vec4(1.0, 1.0, 1.0, uHover); 
    float borderSize = 0.015;                       
    float alpha      = step(0.2, smoothstep(radius - borderSize, radius- borderSize, dist) - smoothstep(radius, radius + borderSize, dist));\r
    color.a = alpha * uHover;\r
    
    if (dist > radius - borderSize) {\r
        return color;\r
    }\r
    
    return currentColor;\r
}\r

#if DEPTH_PACKING == 3200\r
	uniform float opacity;\r
#endif\r
#include <common>\r
#include <packing>\r
#include <uv_pars_fragment>\r
#include <map_pars_fragment>\r
#include <alphamap_pars_fragment>\r
#include <alphatest_pars_fragment>\r
#include <logdepthbuf_pars_fragment>\r
#include <clipping_planes_pars_fragment>\r
varying vec2 vHighPrecisionZW;\r
void main() {\r
	#include <clipping_planes_fragment>\r
	vec4 diffuseColor = vec4( 1.0 );\r
	#if DEPTH_PACKING == 3200\r
		diffuseColor.a = opacity;\r
	#endif

    \r
    
    vec4 color = borderRoundRect(vec4(1.0), vec2(1.0, 1.0), 0.125);

    if (color.a == 0.0) {\r
        discard;\r
    }

    diffuseColor = color;\r

	#include <map_fragment>\r
	#include <alphamap_fragment>\r
	#include <alphatest_fragment>\r
	#include <logdepthbuf_fragment>\r
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\r
	\r
    #if DEPTH_PACKING == 3200\r
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\r
	#elif DEPTH_PACKING == 3201\r
		gl_FragColor = packDepthToRGBA( fragCoordZ );\r
	#endif

}`;class nS{constructor(){this.experience=new rt,this.scene=this.experience.scene,this.audioAnalizer=this.experience.audioAnalizer,this.square=this.audioAnalizer.square,this.bufferCanvasSquare=new vh(this.square,this.square),this.bufferCanvasSquare.texture=new Zu(this.bufferCanvasSquare.canvas),this.imageDataSquare=this.bufferCanvasSquare.context.createImageData(this.square,this.square),this.bufferCanvasLinear=new vh(1024,1),this.bufferCanvasLinear.texture=new Zu(this.bufferCanvasLinear.canvas),this.imageDataLinear=this.bufferCanvasLinear.context.createImageData(1024,1),this.bufferCanvasSquare.texture.generateMipMaps=!1,this.bufferCanvasSquare.texture.minFilter=ut,this.bufferCanvasSquare.texture.magFilter=ut,this.bufferCanvasLinear.texture.generateMipMaps=!1,this.bufferCanvasLinear.texture.minFilter=ut,this.bufferCanvasLinear.texture.magFilter=ut}setup(){this.geometry=new on(3,3),this.materialR=new tt({uniforms:{uAudioTexture:{value:this.bufferCanvasSquare.texture},uHover:{value:0}},vertexShader:xh,fragmentShader:eS,transparent:!0,depthWrite:!1}),this.meshR=new Ye(this.geometry,this.materialR),this.meshR.material.side=at,this.meshR.position.y+=3,this.meshR.position.x-=11,this.meshR.name="FrequencyTexture",this.meshR.castShadow=this.experience.debugOptions.shadows,this.meshR.customDepthMaterial=new $t({depthPacking:Yt}),this.meshR.customDepthMaterial.onBeforeCompile=e=>{e.uniforms.uHover={value:0},e.vertexShader=_n,e.fragmentShader=yh,this.meshR.customDepthMaterial.uniforms=e.uniforms},this.scene.add(this.meshR),this.materialG=new tt({uniforms:{uAudioTexture:{value:this.bufferCanvasSquare.texture},uHover:{value:0}},vertexShader:xh,fragmentShader:tS,transparent:!0,depthWrite:!1}),this.meshG=new Ye(this.geometry,this.materialG),this.meshG.material.side=at,this.meshG.position.y+=7,this.meshG.position.x-=11,this.meshG.name="FrequencyTextureSin",this.meshG.castShadow=this.experience.debugOptions.shadows,this.meshG.customDepthMaterial=new $t({depthPacking:Yt}),this.meshG.customDepthMaterial.onBeforeCompile=e=>{e.uniforms.uHover={value:0},e.vertexShader=_n,e.fragmentShader=yh,this.meshG.customDepthMaterial.uniforms=e.uniforms},this.scene.add(this.meshG)}update(){for(let e=0;e<this.audioAnalizer.square;e++)for(let t=0;t<this.audioAnalizer.square*2;t++){let n=t+e*this.audioAnalizer.square,i=Math.clamp(this.audioAnalizer.analizerData[n],0,255),r=Math.clamp(this.audioAnalizer.analizerDataSin[n],0,255);n=n*4,this.imageDataSquare.data[n]=i,this.imageDataSquare.data[n+1]=r,this.imageDataSquare.data[n+2]=0,this.imageDataSquare.data[n+3]=255,this.imageDataLinear.data[n]=i,this.imageDataLinear.data[n+1]=r,this.imageDataLinear.data[n+2]=0,this.imageDataLinear.data[n+3]=255}this.bufferCanvasSquare.context.putImageData(this.imageDataSquare,0,0,0,0,32,32),this.bufferCanvasSquare.texture.needsUpdate=!0,this.bufferCanvasLinear.context.putImageData(this.imageDataLinear,0,0,0,0,1024,1),this.bufferCanvasLinear.texture.needsUpdate=!0}}var iS=`varying vec2 vUv;

void main() {\r
    vec4 modelPosition      = modelMatrix       * vec4(position , 1.0);\r
    vec4 viewPosition       = viewMatrix        * modelPosition;\r
    vec4 projectionPosition = projectionMatrix  * viewPosition;

    gl_Position = projectionPosition;\r
    vUv = uv;\r
}`,rS=`uniform float     uSize;\r
uniform float     uAlpha;\r
uniform sampler2D uAudioTexture;\r
uniform float     uAudioStrength;\r
uniform float     uAudioZoom;\r
uniform float     uHover;\r
varying vec2      vUv; 

vec4 borderRoundRect(vec4 currentColor, vec2 size, float radius) {\r
    vec2  position   = vUv * size;\r
    vec2  rounded    = vec2(clamp(position.x, radius, size.x - radius), clamp(position.y, radius, size.y - radius));\r
    vec2  difference = position - rounded;\r
    float dist       = length(difference);\r
    vec4  color      = vec4(1.0, 1.0, 1.0, uHover); 
    float borderSize = 0.015;                       
    float alpha      = step(0.2, smoothstep(radius - borderSize, radius- borderSize, dist) - smoothstep(radius, radius + borderSize, dist));\r
    color.a = alpha * uHover;\r
    
    if (dist > radius - borderSize) {\r
        return color;\r
    }\r
    
    return currentColor;\r
}\r

void main() {\r
    
    float audioValue = ((texture2D(uAudioTexture, vec2(vUv.x / uAudioZoom, 0.0)).g - .5) * uAudioStrength) + .5;

    
    vec4 color = vec4(0.0, 0.0, 0.0, (uAlpha + uHover) * 0.80);

    if (abs(vUv.y - audioValue) < uSize) {\r
        color = vec4(0.0, 0.75, 0.0, 1.0);\r
    }

    
    color = borderRoundRect(color, vec2(1.0, 1.0), 0.125);

    gl_FragColor = color;\r
}`,Nd=`uniform float     uSize;\r
uniform float     uAlpha;\r
uniform sampler2D uAudioTexture;\r
uniform float     uAudioStrength;\r
uniform float     uAudioZoom;\r
uniform float     uHover;\r
varying vec2      vUv; \r

#if DEPTH_PACKING == 3200\r
	uniform float opacity;\r
#endif\r
#include <common>\r
#include <packing>\r
#include <uv_pars_fragment>\r
#include <map_pars_fragment>\r
#include <alphamap_pars_fragment>\r
#include <alphatest_pars_fragment>\r
#include <logdepthbuf_pars_fragment>\r
#include <clipping_planes_pars_fragment>\r
varying vec2 vHighPrecisionZW;\r
void main() {\r
	#include <clipping_planes_fragment>\r
	vec4 diffuseColor = vec4( 1.0 );\r
	#if DEPTH_PACKING == 3200\r
		diffuseColor.a = opacity;\r
	#endif

    
    float audioValue = ((texture2D(uAudioTexture, vec2(vUv.x / uAudioZoom, 0.0)).g - .5) * uAudioStrength) + .5;

    
    vec4 color = vec4(0.0, 0.0, 0.0, (uAlpha + uHover) * 0.80);

    if (abs(vUv.y - audioValue) < uSize) {\r
        color = vec4(0.0, 0.75, 0.0, 1.0);\r
    }\r
    else {\r
        discard;\r
    }

    diffuseColor = color;\r

	#include <map_fragment>\r
	#include <alphamap_fragment>\r
	#include <alphatest_fragment>\r
	#include <logdepthbuf_fragment>\r
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\r
	\r
    #if DEPTH_PACKING == 3200\r
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\r
	#elif DEPTH_PACKING == 3201\r
		gl_FragColor = packDepthToRGBA( fragCoordZ );\r
	#endif

}`;class sS{constructor(e){this.experience=new rt,this.scene=this.experience.scene,this.sizes=this.experience.sizes,this.world=e,this.setup()}setup(){this.geometry=new on(3,3),this.material=new tt({uniforms:{uAudioTexture:{value:this.world.frequencyTexture.bufferCanvasLinear.texture},uAudioStrength:{value:this.experience.debugOptions.osciloscopeAudioStrength},uAudioZoom:{value:this.experience.debugOptions.osciloscopeAudioZoom},uSize:{value:this.experience.debugOptions.osciloscopeLineSize},uAlpha:{value:this.experience.debugOptions.osciloscopeAlpha},uHover:{value:0}},vertexShader:iS,fragmentShader:rS,transparent:!0,side:at,depthWrite:!1}),this.mesh=new Ye(this.geometry,this.material),this.mesh.position.y+=7,this.mesh.position.x-=7,this.mesh.name="Osciloscope",this.mesh.castShadow=this.experience.debugOptions.shadows,this.mesh.customDepthMaterial=new $t({depthPacking:Yt}),this.mesh.customDepthMaterial.onBeforeCompile=e=>{e.uniforms.uAudioTexture={value:this.world.frequencyTexture.bufferCanvasLinear.texture},e.uniforms.uAudioStrength={value:this.experience.debugOptions.osciloscopeAudioStrength},e.uniforms.uAudioZoom={value:this.experience.debugOptions.osciloscopeAudioZoom},e.uniforms.uAlpha={value:this.experience.debugOptions.osciloscopeAlpha},e.uniforms.uSize={value:this.experience.debugOptions.osciloscopeLineSize},e.uniforms.uTime={value:0},e.uniforms.uHover={value:0},e.vertexShader=_n,e.fragmentShader=Nd,this.mesh.customDepthMaterial.uniforms=e.uniforms},this.scene.add(this.mesh)}}var Fd=`varying vec2 vUv;

void main() {

    
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);\r
    vec4 viewPosition = viewMatrix * modelPosition;\r
    vec4 projectionPosition = projectionMatrix * viewPosition;

    
    gl_Position = projectionPosition;

    
    vUv = uv;\r
}`,oS=`uniform float     uAlpha;\r
uniform sampler2D uAudioTexture;\r
uniform float     uTime;\r
uniform float     uHighFrequency;\r
uniform float     uLowFrequency;\r
uniform float     uColorStrength;\r
uniform float     uHover;\r
uniform float     uRotate;\r
varying vec2      vUv; 

#define PI   3.14159265

vec4 circle(vec4 currentColor, vec2 st, vec2 center, float radius, vec3 color) {\r
    float dist = length(st - center);

    if (dist < radius) {\r
        return vec4(color, 1.0);\r
    } \r
    return currentColor;\r
}

vec4 borderRoundRect(vec4 currentColor, vec2 size, float radius) {\r
    vec2  position   = vUv * size;\r
    vec2  rounded    = vec2(clamp(position.x, radius, size.x - radius), clamp(position.y, radius, size.y - radius));\r
    vec2  difference = position - rounded;\r
    float dist       = length(difference);\r
    vec4  color      = vec4(1.0, 1.0, 1.0, uHover); 
    float borderSize = 0.015;                       
    float alpha      = step(0.2, smoothstep(radius - borderSize, radius- borderSize, dist) - smoothstep(radius, radius + borderSize, dist));\r
    color.a = alpha * uHover;\r
    
    if (dist > radius - borderSize) {\r
        return color;\r
    }\r
    
    return currentColor;\r
}\r

void main() {

    
    vec2 center = vec2(0.5, 0.5);

    
    float angle = -sin(uTime * 0.025) * 32.0 * 3.14159265 * uRotate;  
    mat2 rotation = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));\r
    
    vec2 translated = vUv - center;\r
    
    vec2 rotated = rotation * translated;    \r
    
    vec2 finalCoords = rotated + center;

    
    float radius = 0.25;\r
    
    vec4 color = vec4(0.0, 0.0, 0.0, (uAlpha + uHover) * 0.80);

    float dist = length(finalCoords - center);\r
    
    float rad = atan(finalCoords.y - center.y, finalCoords.x - center.x);\r
    float normAngle = 0.0;

    
    
    if (rad < 0.0) {\r
        normAngle = (rad + PI) / PI;            
    } \r
    else {\r
        normAngle = (1.0 + ((rad - PI) / PI));  
    }

    \r
    
    float audioValue = texture2D(uAudioTexture, vec2(normAngle, 0.0)).r * 0.25;\r
    dist -= audioValue;

    if (dist < radius) { 
    
        
        if (rad < 0.0) {\r
            color = vec4(uColorStrength, 0.0, 0.0, 1.0);

        }\r
        
        else {\r
            color = vec4(1.0, 1.0, 1.0, 1.0);

        }\r
    } 

    
    color = circle(color, finalCoords, vec2(0.25 + 0.125, 0.5), 0.125, vec3(1.0, 1.0, 1.0));\r
    
    color = circle(color, finalCoords, vec2(0.75 - 0.125, 0.5), 0.125, vec3(uColorStrength, 0.0, 0.0));\r
    
    float miniRadiusB = 0.0625 * 0.35 + uHighFrequency;\r
    color = circle(color, finalCoords, vec2(0.25 + 0.125, 0.5), miniRadiusB, vec3(uColorStrength, 0.0, 0.0));\r
    
    float miniRadiusW = 0.0625 * 0.35 + uLowFrequency;\r
    color = circle(color, finalCoords, vec2(0.75 - 0.125, 0.5), miniRadiusW, vec3(1.0, 1.0, 1.0));\r
    \r
    \r
    
    color = borderRoundRect(color, vec2(1.0, 1.0), 0.125);\r
    \r

    
    gl_FragColor = color;\r
}`,aS=`uniform float     uAlpha;\r
uniform sampler2D uAudioTexture;\r
uniform float     uTime;\r
uniform float     uHighFrequency;\r
uniform float     uLowFrequency;\r
uniform float     uColorStrength;\r
uniform float     uHover;\r
uniform float     uRotate;\r
varying vec2      vUv; 

vec4 circle(vec4 currentColor, vec2 st, vec2 center, float radius, vec3 color) {\r
    float dist = length(st - center);

    if (dist < radius) {\r
        return vec4(color, 1.0);\r
    } \r
    return currentColor;\r
}

#if DEPTH_PACKING == 3200\r
	uniform float opacity;\r
#endif\r
#include <common>\r
#include <packing>\r
#include <uv_pars_fragment>\r
#include <map_pars_fragment>\r
#include <alphamap_pars_fragment>\r
#include <alphatest_pars_fragment>\r
#include <logdepthbuf_pars_fragment>\r
#include <clipping_planes_pars_fragment>\r
varying vec2 vHighPrecisionZW;\r
void main() {\r
	#include <clipping_planes_fragment>\r
	vec4 diffuseColor = vec4( 1.0 );\r
	#if DEPTH_PACKING == 3200\r
		diffuseColor.a = opacity;\r
	#endif\r

    
    vec2 center = vec2(0.5, 0.5);

    
    float angle = -sin(uTime * 0.025) * 32.0 * 3.14159265 * uRotate;  
    mat2 rotation = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));\r
    
    vec2 translated = vUv - center;\r
    
    vec2 rotated = rotation * translated;    \r
    
    vec2 finalCoords = rotated + center;

    
    float radius = 0.25;\r
    
    vec4 color = vec4(0.0, 0.0, 0.0, (uAlpha + uHover) * 0.80);

    float dist = length(finalCoords - center);\r
    
    float rad = atan(finalCoords.y - center.y, finalCoords.x - center.x);\r
    float normAngle = 0.0;

    
    
    if (rad < 0.0) {\r
        normAngle = (rad + PI) / PI;            
    } \r
    else {\r
        normAngle = (1.0 + ((rad - PI) / PI));  
    }

    \r
    
    float audioValue = texture2D(uAudioTexture, vec2(normAngle, 0.0)).r * 0.25;\r
    dist -= audioValue;

    if (dist < radius) { 
    
        
        if (rad < 0.0) {\r
            color = vec4(uColorStrength, 0.0, 0.0, 1.0);

        }\r
        
        else {\r
            color = vec4(1.0, 1.0, 1.0, 1.0);

        }\r
    } 

    
    color = circle(color, finalCoords, vec2(0.25 + 0.125, 0.5), 0.125, vec3(1.0, 1.0, 1.0));\r
    
    color = circle(color, finalCoords, vec2(0.75 - 0.125, 0.5), 0.125, vec3(uColorStrength, 0.0, 0.0));\r
    
    float miniRadiusB = 0.0625 * 0.35 + uHighFrequency;\r
    color = circle(color, finalCoords, vec2(0.25 + 0.125, 0.5), miniRadiusB, vec3(uColorStrength, 0.0, 0.0));\r
    
    float miniRadiusW = 0.0625 * 0.35 + uLowFrequency;\r
    color = circle(color, finalCoords, vec2(0.75 - 0.125, 0.5), miniRadiusW, vec3(1.0, 1.0, 1.0));\r
    \r
    \r
    \r

    diffuseColor = color;

    if (color.a == 0.0) discard;\r

	#include <map_fragment>\r
	#include <alphamap_fragment>\r
	#include <alphatest_fragment>\r
	#include <logdepthbuf_fragment>\r
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\r
	\r
    #if DEPTH_PACKING == 3200\r
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\r
	#elif DEPTH_PACKING == 3201\r
		gl_FragColor = packDepthToRGBA( fragCoordZ );\r
	#endif

}`;class lS{constructor(e){this.experience=new rt,this.scene=this.experience.scene,this.audioAnalizer=this.experience.audioAnalizer,this.time=this.experience.time,this.world=e,this.setup()}setup(){this.geometry=new on(3,3),this.material=new tt({uniforms:{uAudioTexture:{value:this.world.frequencyTexture.bufferCanvasLinear.texture},uHighFrequency:{value:0},uLowFrequency:{value:0},uTime:{value:0},uAlpha:{value:this.experience.debugOptions.yinYangAlpha},uRotate:{value:1},uHover:{value:0},uColorStrength:{value:0}},vertexShader:Fd,fragmentShader:oS,transparent:!0,side:at,depthWrite:!1}),this.mesh=new Ye(this.geometry,this.material),this.mesh.rotation.z=-Math.PI,this.mesh.position.y+=3,this.mesh.position.x+=1,this.mesh.castShadow=this.experience.debugOptions.shadows,this.mesh.name="YinYang",this.mesh.customDepthMaterial=new $t({depthPacking:Yt}),this.mesh.customDepthMaterial.uniforms={uTime:{value:0}},this.mesh.customDepthMaterial.onBeforeCompile=e=>{e.uniforms.uAudioTexture={value:this.world.frequencyTexture.bufferCanvasLinear.texture},e.uniforms.uHighFrequency={value:0},e.uniforms.uLowFrequency={value:0},e.uniforms.uTime={value:0},e.uniforms.uAlpha={value:this.experience.debugOptions.yinYangAlpha},e.uniforms.uRotate={value:1},e.uniforms.uHover={value:0},e.uniforms.uColorStrength={value:0},e.vertexShader=_n,e.fragmentShader=aS,this.mesh.customDepthMaterial.uniforms=e.uniforms},this.scene.add(this.mesh)}update(){this.material.uniforms.uHighFrequency.value=(255-this.audioAnalizer.averageFrequency[2])/5024,this.material.uniforms.uLowFrequency.value=this.audioAnalizer.averageFrequency[2]/5024,this.material.uniforms.uColorStrength.value=.125+this.audioAnalizer.averageFrequency[2]/192,this.material.uniforms.uTime.value+=this.time.delta/1e3,this.mesh.customDepthMaterial.uniforms.uTime.value=this.material.uniforms.uTime.value}}var cS=`uniform float     uAlpha;\r
uniform sampler2D uAudioTexture;\r
uniform float     uTime;\r
uniform float     uHighFrequency;\r
uniform float     uLowFrequency;\r
uniform float     uColorStrength;\r
uniform float     uHover;\r
uniform float     uRotate;\r
varying vec2      vUv; 

#define PI   3.14159265

vec4 circleBW(vec4 currentColor, vec2 st, vec2 center, float radius) {\r
    float dist = length(st - center);

    if (dist < radius) {\r
        vec3 color = vec3(0.0);\r
        if (st.y > center.y) {\r
            color += vec3(1.0);\r
        }\r
        if (st.y < center.y) {\r
            color += vec3(0.0, uColorStrength, 0.0);\r
        }\r
        return vec4(color, 1.0);\r
    } \r
    return currentColor;    \r
}

vec4 circle(vec4 currentColor, vec2 st, vec2 center, float radius, vec3 color) {\r
    float dist = length(st - center);

    if (dist < radius) {\r
        return vec4(color, 1.0);\r
    } \r
    return currentColor;\r
}

vec4 borderRoundRect(vec4 currentColor, vec2 size, float radius) {\r
    vec2  position   = vUv * size;\r
    vec2  rounded    = vec2(clamp(position.x, radius, size.x - radius), clamp(position.y, radius, size.y - radius));\r
    vec2  difference = position - rounded;\r
    float dist       = length(difference);\r
    vec4  color      = vec4(1.0, 1.0, 1.0, uHover); 
    float borderSize = 0.015;                       
    float alpha      = step(0.2, smoothstep(radius - borderSize, radius- borderSize, dist) - smoothstep(radius, radius + borderSize, dist));\r
    color.a = alpha * uHover;\r
    
    if (dist > radius - borderSize) {\r
        return color;\r
    }\r
    
    return currentColor;\r
}\r

void main() {

    
    vec2 center = vec2(0.5, 0.5);

    
    float angle = sin(uTime * 0.025) * 32.0 * 3.14159265 * uRotate;  
    mat2 rotation = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));\r
    
    vec2 translated = vUv - center;\r
    
    vec2 rotated = rotation * translated;    \r
    
    vec2 finalCoords = rotated + center;

    
    float radius = 0.25;\r
    
    vec4 color = vec4(0.0, 0.0, 0.0, (uAlpha + uHover) * 0.80);\r

    float dist = length(finalCoords - center);\r
    
    float rad = atan(finalCoords.y - center.y, finalCoords.x - center.x);\r
    float normAngle = 0.0;\r

    
    
    if (rad < 0.0) {\r
        normAngle = ((rad + PI) / PI);\r
    } else {\r
        normAngle = (1.0 + ((rad - PI) / PI));\r
    }

    normAngle = mod(normAngle + uTime * 0.25, 1.0);\r
    \r
    
    float audioValue = (texture2D(uAudioTexture, vec2(normAngle, 0.0)).g - 0.5) * 0.55;

    dist -= audioValue;

    if (dist < radius) { 
    
        if (rad >= 0.0) {\r
            color = vec4(1.0, 1.0, 1.0, 1.0);\r
        }\r
        else {\r
            color = vec4(0.0, uColorStrength, 0.0, 1.0);\r
        }\r
    } 

    
   
    
    color = circle(color, finalCoords, vec2(0.25 + 0.125, 0.5), 0.125, vec3(1.0, 1.0, 1.0));\r
    
    color = circle(color, finalCoords, vec2(0.75 - 0.125, 0.5), 0.125, vec3(0.0, uColorStrength, 0.0));\r
    
    float miniRadiusB = 0.0625 * 0.35 + uHighFrequency;\r
    color = circle(color, finalCoords, vec2(0.25 + 0.125, 0.5), miniRadiusB, vec3(0.0, uColorStrength, 0.0));\r
    
    float miniRadiusW = 0.0625 * 0.35 + uLowFrequency;\r
    color = circle(color, finalCoords, vec2(0.75 - 0.125, 0.5), miniRadiusW, vec3(1.0, 1.0, 1.0));\r
    \r
    \r
    
    color = borderRoundRect(color, vec2(1.0, 1.0), 0.125);\r
    \r
    \r
    
    gl_FragColor = color;\r
}`,uS=`uniform float     uAlpha;\r
uniform sampler2D uAudioTexture;\r
uniform float     uTime;\r
uniform float     uHighFrequency;\r
uniform float     uLowFrequency;\r
uniform float     uColorStrength;\r
uniform float     uHover;\r
uniform float     uRotate;\r
varying vec2      vUv; 

vec4 circleBW(vec4 currentColor, vec2 st, vec2 center, float radius) {\r
    float dist = length(st - center);

    if (dist < radius) {\r
        vec3 color = vec3(0.0);\r
        if (st.y > center.y) {\r
            color += vec3(1.0);\r
        }\r
        if (st.y < center.y) {\r
            color += vec3(0.0, uColorStrength, 0.0);\r
        }\r
        return vec4(color, 1.0);\r
    } \r
    return currentColor;    \r
}

vec4 circle(vec4 currentColor, vec2 st, vec2 center, float radius, vec3 color) {\r
    float dist = length(st - center);

    if (dist < radius) {\r
        return vec4(color, 1.0);\r
    } \r
    return currentColor;\r
}\r

#if DEPTH_PACKING == 3200\r
	uniform float opacity;\r
#endif\r
#include <common>\r
#include <packing>\r
#include <uv_pars_fragment>\r
#include <map_pars_fragment>\r
#include <alphamap_pars_fragment>\r
#include <alphatest_pars_fragment>\r
#include <logdepthbuf_pars_fragment>\r
#include <clipping_planes_pars_fragment>\r
varying vec2 vHighPrecisionZW;\r
void main() {\r
	#include <clipping_planes_fragment>\r
	vec4 diffuseColor = vec4( 1.0 );\r
	#if DEPTH_PACKING == 3200\r
		diffuseColor.a = opacity;\r
	#endif\r

    
    vec2 center = vec2(0.5, 0.5);

    
    float angle = sin(uTime * 0.025) * 32.0 * 3.14159265 * uRotate;  
    mat2 rotation = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));\r
    
    vec2 translated = vUv - center;\r
    
    vec2 rotated = rotation * translated;    \r
    
    vec2 finalCoords = rotated + center;

    
    float radius = 0.25;\r
    
    vec4 color = vec4(0.0, 0.0, 0.0, (uAlpha + uHover) * 0.80);\r

    float dist = length(finalCoords - center);\r
    
    float rad = atan(finalCoords.y - center.y, finalCoords.x - center.x);\r
    float normAngle = 0.0;\r

    
    
    if (rad < 0.0) {\r
        normAngle = ((rad + PI) / PI);\r
    } else {\r
        normAngle = (1.0 + ((rad - PI) / PI));\r
    }

    normAngle = mod(normAngle + uTime * 0.25, 1.0);\r
    \r
    
    float audioValue = (texture2D(uAudioTexture, vec2(normAngle, 0.0)).g - 0.5) * 0.55;

    dist -= audioValue;

    if (dist < radius) { 
    
        if (rad >= 0.0) {\r
            color = vec4(1.0, 1.0, 1.0, 1.0);\r
        }\r
        else {\r
            color = vec4(0.0, uColorStrength, 0.0, 1.0);\r
        }\r
    } 

    
   
    
    color = circle(color, finalCoords, vec2(0.25 + 0.125, 0.5), 0.125, vec3(1.0, 1.0, 1.0));\r
    
    color = circle(color, finalCoords, vec2(0.75 - 0.125, 0.5), 0.125, vec3(0.0, uColorStrength, 0.0));\r
    
    float miniRadiusB = 0.0625 * 0.35 + uHighFrequency;\r
    color = circle(color, finalCoords, vec2(0.25 + 0.125, 0.5), miniRadiusB, vec3(0.0, uColorStrength, 0.0));\r
    
    float miniRadiusW = 0.0625 * 0.35 + uLowFrequency;\r
    color = circle(color, finalCoords, vec2(0.75 - 0.125, 0.5), miniRadiusW, vec3(1.0, 1.0, 1.0));\r
    \r
    \r
    \r

    diffuseColor = color;

    if (color.a == 0.0) discard;\r

	#include <map_fragment>\r
	#include <alphamap_fragment>\r
	#include <alphatest_fragment>\r
	#include <logdepthbuf_fragment>\r
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\r
	\r
    #if DEPTH_PACKING == 3200\r
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\r
	#elif DEPTH_PACKING == 3201\r
		gl_FragColor = packDepthToRGBA( fragCoordZ );\r
	#endif

}`;class hS{constructor(e){this.experience=new rt,this.scene=this.experience.scene,this.audioAnalizer=this.experience.audioAnalizer,this.time=this.experience.time,this.world=e,this.setup()}setup(){this.geometry=new on(3,3),this.material=new tt({uniforms:{uAudioTexture:{value:this.world.frequencyTexture.bufferCanvasLinear.texture},uHighFrequency:{value:0},uLowFrequency:{value:0},uTime:{value:0},uAlpha:{value:this.experience.debugOptions.yinYangAlpha},uRotate:{value:1},uHover:{value:0},uColorStrength:{value:0}},vertexShader:Fd,fragmentShader:cS,transparent:!0,side:at,depthWrite:!1}),this.mesh=new Ye(this.geometry,this.material),this.mesh.position.y+=7,this.mesh.position.x+=1,this.mesh.name="YinYangSin",this.mesh.castShadow=this.experience.debugOptions.shadows,this.mesh.customDepthMaterial=new $t({depthPacking:Yt}),this.mesh.customDepthMaterial.uniforms={uTime:{value:0}},this.mesh.customDepthMaterial.onBeforeCompile=e=>{e.uniforms.uAudioTexture={value:this.world.frequencyTexture.bufferCanvasLinear.texture},e.uniforms.uHighFrequency={value:0},e.uniforms.uLowFrequency={value:0},e.uniforms.uTime={value:0},e.uniforms.uAlpha={value:this.experience.debugOptions.yinYangAlpha},e.uniforms.uRotate={value:1},e.uniforms.uHover={value:0},e.uniforms.uColorStrength={value:0},e.vertexShader=_n,e.fragmentShader=uS,this.mesh.customDepthMaterial.uniforms=e.uniforms},this.scene.add(this.mesh)}update(){this.material.uniforms.uHighFrequency.value=(255-this.audioAnalizer.averageFrequency[0])/5024,this.material.uniforms.uLowFrequency.value=this.audioAnalizer.averageFrequency[2]/5024,this.material.uniforms.uColorStrength.value=.125+this.audioAnalizer.averageFrequency[2]/192,this.material.uniforms.uTime.value+=this.time.delta/1e3,this.mesh.customDepthMaterial.uniforms.uTime.value=this.material.uniforms.uTime.value}}function Xn(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function kd(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var rn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Br={duration:.5,overwrite:!1,delay:0},Kl,Ut,vt,fn=1e8,Qe=1/fn,dl=Math.PI*2,dS=dl/4,fS=0,Bd=Math.sqrt,pS=Math.cos,mS=Math.sin,Et=function(e){return typeof e=="string"},ht=function(e){return typeof e=="function"},ti=function(e){return typeof e=="number"},Zl=function(e){return typeof e>"u"},Nn=function(e){return typeof e=="object"},qt=function(e){return e!==!1},Jl=function(){return typeof window<"u"},xo=function(e){return ht(e)||Et(e)},Hd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ot=Array.isArray,fl=/(?:-?\.?\d|\.)+/gi,Vd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Sr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Oa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Gd=/[+-]=-?[.\d]+/,Wd=/[^,'"\[\]\s]+/gi,gS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ot,un,pl,Ql,sn={},Lo={},qd,jd=function(e){return(Lo=Xi(e,sn))&&Kt},ec=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ro=function(e,t){return!t&&console.warn(e)},Xd=function(e,t){return e&&(sn[e]=t)&&Lo&&(Lo[e]=t)||sn},Rs=function(){return 0},_S={suppressEvents:!0,isStart:!0,kill:!1},Mo={suppressEvents:!0,kill:!1},vS={suppressEvents:!0},tc={},vi=[],ml={},Yd,tn={},Na={},Sh=30,wo=[],nc="",ic=function(e){var t=e[0],n,i;if(Nn(t)||ht(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=wo.length;i--&&!wo[i].targetTest(t););n=wo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new xf(e[i],n)))||e.splice(i,1);return e},Hi=function(e){return e._gsap||ic(pn(e))[0]._gsap},$d=function(e,t,n){return(n=e[t])&&ht(n)?e[t]():Zl(n)&&e.getAttribute&&e.getAttribute(t)||n},jt=function(e,t){return(e=e.split(",")).forEach(t)||e},pt=function(e){return Math.round(e*1e5)/1e5||0},Ct=function(e){return Math.round(e*1e7)/1e7||0},Er=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},xS=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Do=function(){var e=vi.length,t=vi.slice(0),n,i;for(ml={},vi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Kd=function(e,t,n,i){vi.length&&!Ut&&Do(),e.render(t,n,i||Ut&&t<0&&(e._initted||e._startAt)),vi.length&&!Ut&&Do()},Zd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Wd).length<2?t:Et(e)?e.trim():e},Jd=function(e){return e},vn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},yS=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Xi=function(e,t){for(var n in t)e[n]=t[n];return e},bh=function a(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Nn(t[n])?a(e[n]||(e[n]={}),t[n]):t[n]);return e},Io=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},xs=function(e){var t=e.parent||ot,n=e.keyframes?yS(Ot(e.keyframes)):vn;if(qt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},SS=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Qd=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e[i],o;if(r)for(o=t[r];s&&s[r]>o;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=s,t.parent=t._dp=e,t},Yo=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,s=t._next;r?r._next=s:e[n]===t&&(e[n]=s),s?s._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},bi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Vi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},bS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},gl=function(e,t,n,i){return e._startAt&&(Ut?e._startAt.revert(Mo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},MS=function a(e){return!e||e._ts&&a(e.parent)},Mh=function(e){return e._repeat?Hr(e._tTime,e=e.duration()+e._rDelay)*e:0},Hr=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},zo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},$o=function(e){return e._end=Ct(e._start+(e._tDur/Math.abs(e._ts||e._rts||Qe)||0))},Ko=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ct(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),$o(e),n._dirty||Vi(n,e)),e},ef=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=zo(e.rawTime(),t),(!t._dur||Bs(0,t.totalDuration(),n)-t._tTime>Qe)&&t.render(n,!0)),Vi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Qe}},Rn=function(e,t,n,i){return t.parent&&bi(t),t._start=Ct((ti(n)?n:n||e!==ot?cn(e,n,t):e._time)+t._delay),t._end=Ct(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Qd(e,t,"_first","_last",e._sort?"_start":0),_l(t)||(e._recent=t),i||ef(e,t),e._ts<0&&Ko(e,e._tTime),e},tf=function(e,t){return(sn.ScrollTrigger||ec("scrollTrigger",t))&&sn.ScrollTrigger.create(t,e)},nf=function(e,t,n,i,r){if(sc(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Ut&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Yd!==nn.frame)return vi.push(e),e._lazy=[r,i],1},wS=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},_l=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},AS=function(e,t,n,i){var r=e.ratio,s=t<0||!t&&(!e._start&&wS(e)&&!(!e._initted&&_l(e))||(e._ts<0||e._dp._ts<0)&&!_l(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=Bs(0,e._tDur,t),u=Hr(l,o),e._yoyo&&u&1&&(s=1-s),u!==Hr(e._tTime,o)&&(r=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==r||Ut||i||e._zTime===Qe||!t&&e._zTime){if(!e._initted&&nf(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Qe:0),n||(n=t&&!h),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;t<0&&gl(e,t,n,!0),e._onUpdate&&!n&&mn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&mn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&bi(e,1),!n&&!Ut&&(mn(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},TS=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Vr=function(e,t,n,i){var r=e._repeat,s=Ct(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=s/e._dur),e._dur=s,e._tDur=r?r<0?1e10:Ct(s*(r+1)+e._rDelay*r):s,o>0&&!i&&Ko(e,e._tTime=e._tDur*o),e.parent&&$o(e),n||Vi(e.parent,e),e},wh=function(e){return e instanceof Gt?Vi(e):Vr(e,e._dur)},ES={_start:0,endTime:Rs,totalDuration:Rs},cn=function a(e,t,n){var i=e.labels,r=e._recent||ES,s=e.duration()>=fn?r.endTime(!1):e._dur,o,l,c;return Et(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=s),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Ot(n)?n[0]:n).totalDuration()),o>1?a(e,t.substr(0,o-1),n)+l:s+l)):t==null?s:+t},ys=function(e,t,n){var i=ti(t[1]),r=(i?2:1)+(e<2?0:1),s=t[r],o,l;if(i&&(s.duration=t[1]),s.parent=n,e){for(o=s,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=qt(l.vars.inherit)&&l.parent;s.immediateRender=qt(o.immediateRender),e<2?s.runBackwards=1:s.startAt=t[r-1]}return new xt(t[0],s,t[r+1])},Ai=function(e,t){return e||e===0?t(e):t},Bs=function(e,t,n){return n<e?e:n>t?t:n},zt=function(e,t){return!Et(e)||!(t=gS.exec(e))?"":t[1]},CS=function(e,t,n){return Ai(n,function(i){return Bs(e,t,i)})},vl=[].slice,rf=function(e,t){return e&&Nn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Nn(e[0]))&&!e.nodeType&&e!==un},PS=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Et(i)&&!t||rf(i,1)?(r=n).push.apply(r,pn(i)):n.push(i)})||n},pn=function(e,t,n){return vt&&!t&&vt.selector?vt.selector(e):Et(e)&&!n&&(pl||!Gr())?vl.call((t||Ql).querySelectorAll(e),0):Ot(e)?PS(e,n):rf(e)?vl.call(e,0):e?[e]:[]},xl=function(e){return e=pn(e)[0]||Ro("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return pn(t,n.querySelectorAll?n:n===e?Ro("Invalid scope")||Ql.createElement("div"):e)}},sf=function(e){return e.sort(function(){return .5-Math.random()})},of=function(e){if(ht(e))return e;var t=Nn(e)?e:{each:e},n=Gi(t.ease),i=t.from||0,r=parseFloat(t.base)||0,s={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return Et(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(d,p,_){var g=(_||t).length,m=s[g],f,b,x,v,S,w,E,T,y;if(!m){if(y=t.grid==="auto"?0:(t.grid||[1,fn])[1],!y){for(E=-fn;E<(E=_[y++].getBoundingClientRect().left)&&y<g;);y--}for(m=s[g]=[],f=l?Math.min(y,g)*u-.5:i%y,b=y===fn?0:l?g*h/y-.5:i/y|0,E=0,T=fn,w=0;w<g;w++)x=w%y-f,v=b-(w/y|0),m[w]=S=c?Math.abs(c==="y"?v:x):Bd(x*x+v*v),S>E&&(E=S),S<T&&(T=S);i==="random"&&sf(m),m.max=E-T,m.min=T,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=zt(t.amount||t.each)||0,n=n&&g<0?gf(n):n}return g=(m[d]-m.min)/m.max||0,Ct(m.b+(n?n(g):g)*m.v)+m.u}},yl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ct(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ti(n)?0:zt(n))}},af=function(e,t){var n=Ot(e),i,r;return!n&&Nn(e)&&(i=n=e.radius||fn,e.values?(e=pn(e.values),(r=!ti(e[0]))&&(i*=i)):e=yl(e.increment)),Ai(t,n?ht(e)?function(s){return r=e(s),Math.abs(r-s)<=i?r:s}:function(s){for(var o=parseFloat(r?s.x:s),l=parseFloat(r?s.y:0),c=fn,u=0,h=e.length,d,p;h--;)r?(d=e[h].x-o,p=e[h].y-l,d=d*d+p*p):d=Math.abs(e[h]-o),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:s,r||u===s||ti(s)?u:u+zt(s)}:yl(e))},lf=function(e,t,n,i){return Ai(Ot(e)?!t:n===!0?!!(n=0):!i,function(){return Ot(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},LS=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,s){return s(r)},i)}},RS=function(e,t){return function(n){return e(parseFloat(n))+(t||zt(n))}},DS=function(e,t,n){return uf(e,t,0,1,n)},cf=function(e,t,n){return Ai(n,function(i){return e[~~t(i)]})},IS=function a(e,t,n){var i=t-e;return Ot(e)?cf(e,a(0,e.length),t):Ai(n,function(r){return(i+(r-e)%i)%i+e})},zS=function a(e,t,n){var i=t-e,r=i*2;return Ot(e)?cf(e,a(0,e.length-1),t):Ai(n,function(s){return s=(r+(s-e)%r)%r||0,e+(s>i?r-s:s)})},Ds=function(e){for(var t=0,n="",i,r,s,o;~(i=e.indexOf("random(",t));)s=e.indexOf(")",i),o=e.charAt(i+7)==="[",r=e.substr(i+7,s-i-7).match(o?Wd:fl),n+=e.substr(t,i-t)+lf(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=s+1;return n+e.substr(t,e.length-t)},uf=function(e,t,n,i,r){var s=t-e,o=i-n;return Ai(r,function(l){return n+((l-e)/s*o||0)})},US=function a(e,t,n,i){var r=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!r){var s=Et(e),o={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),s)e={p:e},t={p:t};else if(Ot(e)&&!Ot(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(a(e[c-1],e[c]));h--,r=function(_){_*=h;var g=Math.min(d,~~_);return u[g](_-g)},n=t}else i||(e=Xi(Ot(e)?[]:{},e));if(!u){for(l in t)rc.call(o,e,l,"get",t[l]);r=function(_){return lc(_,o)||(s?e.p:e)}}}return Ai(n,r)},Ah=function(e,t,n){var i=e.labels,r=fn,s,o,l;for(s in i)o=i[s]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=s,r=o);return l},mn=function(e,t,n){var i=e.vars,r=i[t],s=vt,o=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&vi.length&&Do(),o&&(vt=o),u=l?r.apply(c,l):r.call(c),vt=s,u},ds=function(e){return bi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ut),e.progress()<1&&mn(e,"onInterrupt"),e},br,hf=[],df=function(e){if(!Jl()){hf.push(e);return}e=!e.name&&e.default||e;var t=e.name,n=ht(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Rs,render:lc,add:rc,kill:ZS,modifier:KS,rawVars:0},s={targetTest:0,get:0,getSetter:ac,aliases:{},register:0};if(Gr(),e!==i){if(tn[t])return;vn(i,vn(Io(e,r),s)),Xi(i.prototype,Xi(r,Io(e,s))),tn[i.prop=t]=i,e.targetTest&&(wo.push(i),tc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Xd(t,i),e.register&&e.register(Kt,i,Xt)},Ze=255,fs={aqua:[0,Ze,Ze],lime:[0,Ze,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ze],navy:[0,0,128],white:[Ze,Ze,Ze],olive:[128,128,0],yellow:[Ze,Ze,0],orange:[Ze,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ze,0,0],pink:[Ze,192,203],cyan:[0,Ze,Ze],transparent:[Ze,Ze,Ze,0]},Fa=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ze+.5|0},ff=function(e,t,n){var i=e?ti(e)?[e>>16,e>>8&Ze,e&Ze]:0:fs.black,r,s,o,l,c,u,h,d,p,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),fs[e])i=fs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),s=e.charAt(2),o=e.charAt(3),e="#"+r+r+s+s+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ze,i&Ze,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ze,e&Ze]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(fl),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,s=u<=.5?u*(c+1):u+c-u*c,r=u*2-s,i.length>3&&(i[3]*=1),i[0]=Fa(l+1/3,r,s),i[1]=Fa(l,r,s),i[2]=Fa(l-1/3,r,s);else if(~e.indexOf("="))return i=e.match(Vd),n&&i.length<4&&(i[3]=1),i}else i=e.match(fl)||fs.transparent;i=i.map(Number)}return t&&!_&&(r=i[0]/Ze,s=i[1]/Ze,o=i[2]/Ze,h=Math.max(r,s,o),d=Math.min(r,s,o),u=(h+d)/2,h===d?l=c=0:(p=h-d,c=u>.5?p/(2-h-d):p/(h+d),l=h===r?(s-o)/p+(s<o?6:0):h===s?(o-r)/p+2:(r-s)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},pf=function(e){var t=[],n=[],i=-1;return e.split(xi).forEach(function(r){var s=r.match(Sr)||[];t.push.apply(t,s),n.push(i+=s.length+1)}),t.c=n,t},Th=function(e,t,n){var i="",r=(e+i).match(xi),s=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!r)return e;if(r=r.map(function(d){return(d=ff(d,t,1))&&s+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=pf(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(xi,"1").split(Sr),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||s+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(xi),h=c.length-1;o<h;o++)i+=c[o]+r[o];return i+c[h]},xi=function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in fs)a+="|"+e+"\\b";return new RegExp(a+")","gi")}(),OS=/hsl[a]?\(/,mf=function(e){var t=e.join(" "),n;if(xi.lastIndex=0,xi.test(t))return n=OS.test(t),e[1]=Th(e[1],n),e[0]=Th(e[0],n,pf(e[1])),!0},Is,nn=function(){var a=Date.now,e=500,t=33,n=a(),i=n,r=1e3/240,s=r,o=[],l,c,u,h,d,p,_=function g(m){var f=a()-i,b=m===!0,x,v,S,w;if(f>e&&(n+=f-t),i+=f,S=i-n,x=S-s,(x>0||b)&&(w=++h.frame,d=S-h.time*1e3,h.time=S=S/1e3,s+=x+(x>=r?4:r-x),v=1),b||(l=c(g)),v)for(p=0;p<o.length;p++)o[p](S,d,w,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){qd&&(!pl&&Jl()&&(un=pl=window,Ql=un.document||{},sn.gsap=Kt,(un.gsapVersions||(un.gsapVersions=[])).push(Kt.version),jd(Lo||un.GreenSockGlobals||!un.gsap&&un||{}),u=un.requestAnimationFrame,hf.forEach(df)),l&&h.sleep(),c=u||function(m){return setTimeout(m,s-h.time*1e3+1|0)},Is=1,_(2))},sleep:function(){(u?un.cancelAnimationFrame:clearTimeout)(l),Is=0,c=Rs},lagSmoothing:function(m,f){e=m||1/0,t=Math.min(f||33,e)},fps:function(m){r=1e3/(m||240),s=h.time*1e3+r},add:function(m,f,b){var x=f?function(v,S,w,E){m(v,S,w,E),h.remove(x)}:m;return h.remove(m),o[b?"unshift":"push"](x),Gr(),x},remove:function(m,f){~(f=o.indexOf(m))&&o.splice(f,1)&&p>=f&&p--},_listeners:o},h}(),Gr=function(){return!Is&&nn.wake()},Ge={},NS=/^[\d.\-M][\d.\-,\s]/,FS=/["']/g,kS=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,s=n.length,o,l,c;r<s;r++)l=n[r],o=r!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(FS,"").trim():+c,i=l.substr(o+1).trim();return t},BS=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},HS=function(e){var t=(e+"").split("("),n=Ge[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[kS(t[1])]:BS(e).split(",").map(Zd)):Ge._CE&&NS.test(e)?Ge._CE("",e):n},gf=function(e){return function(t){return 1-e(1-t)}},_f=function a(e,t){for(var n=e._first,i;n;)n instanceof Gt?a(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?a(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Gi=function(e,t){return e&&(ht(e)?e:Ge[e]||HS(e))||t},Ki=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},s;return jt(e,function(o){Ge[o]=sn[o]=r,Ge[s=o.toLowerCase()]=n;for(var l in r)Ge[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ge[o+"."+l]=r[l]}),r},vf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ka=function a(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),s=r/dl*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*mS((u-s)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:vf(o);return r=dl/r,l.config=function(c,u){return a(e,c,u)},l},Ba=function a(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:vf(n);return i.config=function(r){return a(e,r)},i};jt("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;Ki(a+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ge.Linear.easeNone=Ge.none=Ge.Linear.easeIn;Ki("Elastic",ka("in"),ka("out"),ka());(function(a,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?a*o*o:o<n?a*Math.pow(o-1.5/e,2)+.75:o<i?a*(o-=2.25/e)*o+.9375:a*Math.pow(o-2.625/e,2)+.984375};Ki("Bounce",function(s){return 1-r(1-s)},r)})(7.5625,2.75);Ki("Expo",function(a){return a?Math.pow(2,10*(a-1)):0});Ki("Circ",function(a){return-(Bd(1-a*a)-1)});Ki("Sine",function(a){return a===1?1:-pS(a*dS)+1});Ki("Back",Ba("in"),Ba("out"),Ba());Ge.SteppedEase=Ge.steps=sn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,s=1-Qe;return function(o){return((i*Bs(0,s,o)|0)+r)*n}}};Br.ease=Ge["quad.out"];jt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return nc+=a+","+a+"Params,"});var xf=function(e,t){this.id=fS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:$d,this.set=t?t.getSetter:ac},Wr=function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Vr(this,+t.duration,1,1),this.data=t.data,vt&&(this._ctx=vt,vt.data.push(this)),Is||nn.wake()}var e=a.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Vr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Gr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ko(this,n),!r._dp||r.parent||ef(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Rn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Qe||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Kd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Mh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Mh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Hr(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Qe?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?zo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Qe?0:this._rts,this.totalTime(Bs(-Math.abs(this._delay),this._tDur,i),!0),$o(this),bS(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Gr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Qe&&(this._tTime-=Qe)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Rn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(qt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?zo(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=vS);var i=Ut;return Ut=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ut=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,wh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,wh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(cn(this,n),qt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,qt(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Qe:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Qe,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Qe)},e.eventCallback=function(n,i,r){var s=this.vars;return arguments.length>1?(i?(s[n]=i,r&&(s[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete s[n],this):s[n]},e.then=function(n){var i=this;return new Promise(function(r){var s=ht(n)?n:Jd,o=function(){var c=i.then;i.then=null,ht(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=c),r(s),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){ds(this)},a}();vn(Wr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Qe,_prom:0,_ps:!1,_rts:1});var Gt=function(a){kd(e,a);function e(n,i){var r;return n===void 0&&(n={}),r=a.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=qt(n.sortChildren),ot&&Rn(n.parent||ot,Xn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&tf(Xn(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,s){return ys(0,arguments,this),this},t.from=function(i,r,s){return ys(1,arguments,this),this},t.fromTo=function(i,r,s,o){return ys(2,arguments,this),this},t.set=function(i,r,s){return r.duration=0,r.parent=this,xs(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new xt(i,r,cn(this,s),1),this},t.call=function(i,r,s){return Rn(this,xt.delayedCall(0,i,r),s)},t.staggerTo=function(i,r,s,o,l,c,u){return s.duration=r,s.stagger=s.stagger||o,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new xt(i,s,cn(this,l)),this},t.staggerFrom=function(i,r,s,o,l,c,u){return s.runBackwards=1,xs(s).immediateRender=qt(s.immediateRender),this.staggerTo(i,r,s,o,l,c,u)},t.staggerFromTo=function(i,r,s,o,l,c,u,h){return o.startAt=s,xs(o).immediateRender=qt(o.immediateRender),this.staggerTo(i,r,o,l,c,u,h)},t.render=function(i,r,s){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ct(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,p,_,g,m,f,b,x,v,S,w,E;if(this!==ot&&u>l&&i>=0&&(u=l),u!==this._tTime||s||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),d=u,v=this._start,x=this._ts,f=!x,h&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,s);if(d=Ct(u%m),u===l?(g=this._repeat,d=c):(g=~~(u/m),g&&g===u/m&&(d=c,g--),d>c&&(d=c)),S=Hr(this._tTime,m),!o&&this._tTime&&S!==g&&this._tTime-S*m-this._dur<=0&&(S=g),w&&g&1&&(d=c-d,E=1),g!==S&&!this._lock){var T=w&&S&1,y=T===(w&&g&1);if(g<S&&(T=!T),o=T?0:c,this._lock=1,this.render(o||(E?0:Ct(g*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&mn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),o&&o!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,o=T?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;_f(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=TS(this,Ct(o),Ct(d)),b&&(u-=d-(d=b._start))),this._tTime=u,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&d&&!r&&!g&&(mn(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(p=this._first;p;){if(_=p._next,(p._act||d>=p._start)&&p._ts&&b!==p){if(p.parent!==this)return this.render(i,r,s);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,r,s),d!==this._time||!this._ts&&!f){b=0,_&&(u+=this._zTime=-Qe);break}}p=_}else{p=this._last;for(var M=i<0?i:d;p;){if(_=p._prev,(p._act||M<=p._end)&&p._ts&&b!==p){if(p.parent!==this)return this.render(i,r,s);if(p.render(p._ts>0?(M-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(M-p._start)*p._ts,r,s||Ut&&(p._initted||p._startAt)),d!==this._time||!this._ts&&!f){b=0,_&&(u+=this._zTime=M?-Qe:Qe);break}}p=_}}if(b&&!r&&(this.pause(),b.render(d>=o?0:-Qe)._zTime=d>=o?1:-1,this._ts))return this._start=v,$o(this),this.render(i,r,s);this._onUpdate&&!r&&mn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&bi(this,1),!r&&!(i<0&&!o)&&(u||o||!l)&&(mn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var s=this;if(ti(r)||(r=cn(this,r,i)),!(i instanceof Wr)){if(Ot(i))return i.forEach(function(o){return s.add(o,r)}),this;if(Et(i))return this.addLabel(i,r);if(ht(i))i=xt.delayedCall(0,i);else return this}return this!==i?Rn(this,i,r):this},t.getChildren=function(i,r,s,o){i===void 0&&(i=!0),r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=-fn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof xt?r&&l.push(c):(s&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,s)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),s=r.length;s--;)if(r[s].vars.id===i)return r[s]},t.remove=function(i){return Et(i)?this.removeLabel(i):ht(i)?this.killTweensOf(i):(Yo(this,i),i===this._recent&&(this._recent=this._last),Vi(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ct(nn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),a.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=cn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,s){var o=xt.delayedCall(0,r||Rs,s);return o.data="isPause",this._hasPause=1,Rn(this,o,cn(this,i))},t.removePause=function(i){var r=this._first;for(i=cn(this,i);r;)r._start===i&&r.data==="isPause"&&bi(r),r=r._next},t.killTweensOf=function(i,r,s){for(var o=this.getTweensOf(i,s),l=o.length;l--;)pi!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var s=[],o=pn(i),l=this._first,c=ti(r),u;l;)l instanceof xt?xS(l._targets,o)&&(c?(!pi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&s.push(l):(u=l.getTweensOf(o,r)).length&&s.push.apply(s,u),l=l._next;return s},t.tweenTo=function(i,r){r=r||{};var s=this,o=cn(s,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,p,_=xt.to(s,vn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale())||Qe,onStart:function(){if(s.pause(),!p){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale());_._dur!==m&&Vr(_,m,0,1).render(_._time,!0,!0),p=1}u&&u.apply(_,h||[])}},r));return d?_.render(0):_},t.tweenFromTo=function(i,r,s){return this.tweenTo(r,vn({startAt:{time:cn(this,i)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Ah(this,cn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Ah(this,cn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Qe)},t.shiftChildren=function(i,r,s){s===void 0&&(s=0);for(var o=this._first,l=this.labels,c;o;)o._start>=s&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=s&&(l[c]+=i);return Vi(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return a.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,s;r;)s=r._next,this.remove(r),r=s;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Vi(this)},t.totalDuration=function(i){var r=0,s=this,o=s._last,l=fn,c,u,h;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-i:i));if(s._dirty){for(h=s.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&s._sort&&o._ts&&!s._lock?(s._lock=1,Rn(s,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!h&&!s._dp||h&&h.smoothChildTiming)&&(s._start+=u/s._ts,s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Vr(s,s===ot&&s._time>r?s._time:r,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(i){if(ot._ts&&(Kd(ot,zo(i,ot)),Yd=nn.frame),nn.frame>=Sh){Sh+=rn.autoSleep||120;var r=ot._first;if((!r||!r._ts)&&rn.autoSleep&&nn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||nn.sleep()}}},e}(Wr);vn(Gt.prototype,{_lock:0,_hasPause:0,_forcing:0});var VS=function(e,t,n,i,r,s,o){var l=new Xt(this._pt,e,t,0,1,Af,null,r),c=0,u=0,h,d,p,_,g,m,f,b;for(l.b=n,l.e=i,n+="",i+="",(f=~i.indexOf("random("))&&(i=Ds(i)),s&&(b=[n,i],s(b,e,t),n=b[0],i=b[1]),d=n.match(Oa)||[];h=Oa.exec(i);)_=h[0],g=i.substring(c,h.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?Er(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},c=Oa.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Gd.test(i)||f)&&(l.e=0),this._pt=l,l},rc=function(e,t,n,i,r,s,o,l,c,u){ht(i)&&(i=i(r||0,e,s));var h=e[t],d=n!=="get"?n:ht(h)?c?e[t.indexOf("set")||!ht(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,p=ht(h)?c?XS:Mf:oc,_;if(Et(i)&&(~i.indexOf("random(")&&(i=Ds(i)),i.charAt(1)==="="&&(_=Er(d,i)+(zt(d)||0),(_||_===0)&&(i=_))),!u||d!==i||Sl)return!isNaN(d*i)&&i!==""?(_=new Xt(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?$S:wf,0,p),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!h&&!(t in e)&&ec(t,i),VS.call(this,e,t,d,i,p,l||rn.stringFilter,c))},GS=function(e,t,n,i,r){if(ht(e)&&(e=Ss(e,r,t,n,i)),!Nn(e)||e.style&&e.nodeType||Ot(e)||Hd(e))return Et(e)?Ss(e,r,t,n,i):e;var s={},o;for(o in e)s[o]=Ss(e[o],r,t,n,i);return s},yf=function(e,t,n,i,r,s){var o,l,c,u;if(tn[e]&&(o=new tn[e]).init(r,o.rawVars?t[e]:GS(t[e],i,r,s,n),n,i,s)!==!1&&(n._pt=l=new Xt(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==br))for(c=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},pi,Sl,sc=function a(e,t,n){var i=e.vars,r=i.ease,s=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,d=i.runBackwards,p=i.yoyoEase,_=i.keyframes,g=i.autoRevert,m=e._dur,f=e._startAt,b=e._targets,x=e.parent,v=x&&x.data==="nested"?x.vars.targets:b,S=e._overwrite==="auto"&&!Kl,w=e.timeline,E,T,y,M,I,N,R,z,O,W,q,H,ne;if(w&&(!_||!r)&&(r="none"),e._ease=Gi(r,Br.ease),e._yEase=p?gf(Gi(p===!0?r:p,Br.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!w&&!!i.runBackwards,!w||_&&!i.stagger){if(z=b[0]?Hi(b[0]).harness:0,H=z&&i[z.prop],E=Io(i,tc),f&&(f._zTime<0&&f.progress(1),t<0&&d&&o&&!g?f.render(-1,!0):f.revert(d&&m?Mo:_S),f._lazy=0),s){if(bi(e._startAt=xt.set(b,vn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!f&&qt(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ut||!o&&!g)&&e._startAt.revert(Mo),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(d&&m&&!f){if(t&&(o=!1),y=vn({overwrite:!1,data:"isFromStart",lazy:o&&!f&&qt(l),immediateRender:o,stagger:0,parent:x},E),H&&(y[z.prop]=H),bi(e._startAt=xt.set(b,y)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ut?e._startAt.revert(Mo):e._startAt.render(-1,!0)),e._zTime=t,!o)a(e._startAt,Qe,Qe);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&qt(l)||l&&!m,T=0;T<b.length;T++){if(I=b[T],R=I._gsap||ic(b)[T]._gsap,e._ptLookup[T]=W={},ml[R.id]&&vi.length&&Do(),q=v===b?T:v.indexOf(I),z&&(O=new z).init(I,H||E,e,q,v)!==!1&&(e._pt=M=new Xt(e._pt,I,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(Q){W[Q]=M}),O.priority&&(N=1)),!z||H)for(y in E)tn[y]&&(O=yf(y,E,e,q,I,v))?O.priority&&(N=1):W[y]=M=rc.call(e,I,y,"get",E[y],q,v,0,i.stringFilter);e._op&&e._op[T]&&e.kill(I,e._op[T]),S&&e._pt&&(pi=e,ot.killTweensOf(I,W,e.globalTime(t)),ne=!e.parent,pi=0),e._pt&&l&&(ml[R.id]=1)}N&&Tf(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!ne,_&&t<=0&&w.render(fn,!0,!0)},WS=function(e,t,n,i,r,s,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,d;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(c=h[d][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Sl=1,e.vars[t]="+=0",sc(e,o),Sl=0,1;l.push(c)}for(d=l.length;d--;)u=l[d],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+s*c.c,c.c=n-c.s,u.e&&(u.e=pt(n)+zt(u.e)),u.b&&(u.b=c.s+zt(u.b))},qS=function(e,t){var n=e[0]?Hi(e[0]).harness:0,i=n&&n.aliases,r,s,o,l;if(!i)return t;r=Xi({},t);for(s in i)if(s in r)for(l=i[s].split(","),o=l.length;o--;)r[l[o]]=r[s];return r},jS=function(e,t,n,i){var r=t.ease||i||"power1.inOut",s,o;if(Ot(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(s in t)o=n[s]||(n[s]=[]),s==="ease"||o.push({t:parseFloat(e),v:t[s],e:r})},Ss=function(e,t,n,i,r){return ht(e)?e.call(t,n,i,r):Et(e)&&~e.indexOf("random(")?Ds(e):e},Sf=nc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",bf={};jt(Sf+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return bf[a]=1});var xt=function(a){kd(e,a);function e(n,i,r,s){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=a.call(this,s?i:xs(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,f=l.yoyoEase,b=i.parent||ot,x=(Ot(n)||Hd(n)?ti(n[0]):"length"in i)?[n]:pn(n),v,S,w,E,T,y,M,I;if(o._targets=x.length?ic(x):Ro("GSAP target "+n+" not found. https://greensock.com",!rn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,_||d||xo(c)||xo(u)){if(i=o.vars,v=o.timeline=new Gt({data:"nested",defaults:g||{},targets:b&&b.data==="nested"?b.vars.targets:x}),v.kill(),v.parent=v._dp=Xn(o),v._start=0,d||xo(c)||xo(u)){if(E=x.length,M=d&&of(d),Nn(d))for(T in d)~Sf.indexOf(T)&&(I||(I={}),I[T]=d[T]);for(S=0;S<E;S++)w=Io(i,bf),w.stagger=0,f&&(w.yoyoEase=f),I&&Xi(w,I),y=x[S],w.duration=+Ss(c,Xn(o),S,y,x),w.delay=(+Ss(u,Xn(o),S,y,x)||0)-o._delay,!d&&E===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),v.to(y,w,M?M(S,y,x):0),v._ease=Ge.none;v.duration()?c=u=0:o.timeline=0}else if(_){xs(vn(v.vars.defaults,{ease:"none"})),v._ease=Gi(_.ease||i.ease||"none");var N=0,R,z,O;if(Ot(_))_.forEach(function(W){return v.to(x,W,">")}),v.duration();else{w={};for(T in _)T==="ease"||T==="easeEach"||jS(T,_[T],w,_.easeEach);for(T in w)for(R=w[T].sort(function(W,q){return W.t-q.t}),N=0,S=0;S<R.length;S++)z=R[S],O={ease:z.e,duration:(z.t-(S?R[S-1].t:0))/100*c},O[T]=z.v,v.to(x,O,N),N+=O.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return p===!0&&!Kl&&(pi=Xn(o),ot.killTweensOf(x),pi=0),Rn(b,Xn(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!_&&o._start===Ct(b._time)&&qt(h)&&MS(Xn(o))&&b.data!=="nested")&&(o._tTime=-Qe,o.render(Math.max(0,-u)||0)),m&&tf(Xn(o),m),o}var t=e.prototype;return t.render=function(i,r,s){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Qe&&!u?l:i<Qe?0:i,d,p,_,g,m,f,b,x,v;if(!c)AS(this,i,r,s);else if(h!==this._tTime||!i||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=h,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,r,s);if(d=Ct(h%g),h===l?(_=this._repeat,d=c):(_=~~(h/g),_&&_===h/g&&(d=c,_--),d>c&&(d=c)),f=this._yoyo&&_&1,f&&(v=this._yEase,d=c-d),m=Hr(this._tTime,g),d===o&&!s&&this._initted)return this._tTime=h,this;_!==m&&(x&&this._yEase&&_f(x,f),this.vars.repeatRefresh&&!f&&!this._lock&&(this._lock=s=1,this.render(Ct(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(nf(this,u?i:d,s,r,h))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,r,s)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(v||this._ease)(d/c),this._from&&(this.ratio=b=1-b),d&&!o&&!r&&!_&&(mn(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(b,p.d),p=p._next;x&&x.render(i<0?i:!d&&f?-Qe:x._dur*x._ease(d/this._dur),r,s)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&gl(this,i,r,s),mn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&mn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&gl(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&bi(this,1),!r&&!(u&&!o)&&(h||o||f)&&(mn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),a.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,s,o){Is||nn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||sc(this,l),c=this._ease(l/this._dur),WS(this,i,r,s,o,c,l)?this.resetTo(i,r,s,o):(Ko(this,0),this.parent||Qd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ds(this):this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,pi&&pi.vars.overwrite!==!0)._first||ds(this),this.parent&&s!==this.timeline.totalDuration()&&Vr(this,this._dur*this.timeline._tDur/s,0,1),this}var o=this._targets,l=i?pn(i):o,c=this._ptLookup,u=this._pt,h,d,p,_,g,m,f;if((!r||r==="all")&&SS(o,l))return r==="all"&&(this._pt=0),ds(this);for(h=this._op=this._op||[],r!=="all"&&(Et(r)&&(g={},jt(r,function(b){return g[b]=1}),r=g),r=qS(o,r)),f=o.length;f--;)if(~l.indexOf(o[f])){d=c[f],r==="all"?(h[f]=r,_=d,p={}):(p=h[f]=h[f]||{},_=r);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Yo(this,m,"_pt"),delete d[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&u&&ds(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return ys(1,arguments)},e.delayedCall=function(i,r,s,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:o})},e.fromTo=function(i,r,s){return ys(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,s){return ot.killTweensOf(i,r,s)},e}(Wr);vn(xt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});jt("staggerTo,staggerFrom,staggerFromTo",function(a){xt[a]=function(){var e=new Gt,t=vl.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var oc=function(e,t,n){return e[t]=n},Mf=function(e,t,n){return e[t](n)},XS=function(e,t,n,i){return e[t](i.fp,n)},YS=function(e,t,n){return e.setAttribute(t,n)},ac=function(e,t){return ht(e[t])?Mf:Zl(e[t])&&e.setAttribute?YS:oc},wf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},$S=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Af=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},lc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},KS=function(e,t,n,i){for(var r=this._pt,s;r;)s=r._next,r.p===i&&r.modifier(e,t,n),r=s},ZS=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Yo(this,t,"_pt"):t.dep||(n=1),t=i;return!n},JS=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Tf=function(e){for(var t=e._pt,n,i,r,s;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:s)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:s=t,t=n}e._pt=r},Xt=function(){function a(t,n,i,r,s,o,l,c,u){this.t=n,this.s=r,this.c=s,this.p=i,this.r=o||wf,this.d=l||this,this.set=c||oc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=JS,this.m=n,this.mt=r,this.tween=i},a}();jt(nc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return tc[a]=1});sn.TweenMax=sn.TweenLite=xt;sn.TimelineLite=sn.TimelineMax=Gt;ot=new Gt({sortChildren:!1,defaults:Br,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});rn.stringFilter=mf;var qr=[],Ao={},QS=[],Eh=0,Ha=function(e){return(Ao[e]||QS).map(function(t){return t()})},bl=function(){var e=Date.now(),t=[];e-Eh>2&&(Ha("matchMediaInit"),qr.forEach(function(n){var i=n.queries,r=n.conditions,s,o,l,c;for(o in i)s=un.matchMedia(i[o]).matches,s&&(l=1),s!==r[o]&&(r[o]=s,c=1);c&&(n.revert(),l&&t.push(n))}),Ha("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Eh=e,Ha("matchMedia"))},Ef=function(){function a(t,n){this.selector=n&&xl(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=a.prototype;return e.add=function(n,i,r){ht(n)&&(r=i,i=n,n=ht);var s=this,o=function(){var c=vt,u=s.selector,h;return c&&c!==s&&c.data.push(s),r&&(s.selector=xl(r)),vt=s,h=i.apply(s,arguments),ht(h)&&s._r.push(h),vt=c,s.selector=u,s.isReverted=!1,h};return s.last=o,n===ht?o(s):n?s[n]=o:o},e.ignore=function(n){var i=vt;vt=null,n(this),vt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof a?n.push.apply(n,i.getTweens()):i instanceof xt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var s=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return s.splice(s.indexOf(c),1)}))}),s.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof Wr)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var o=qr.indexOf(this);~o&&qr.splice(o,1)}},e.revert=function(n){this.kill(n||{})},a}(),eb=function(){function a(t){this.contexts=[],this.scope=t}var e=a.prototype;return e.add=function(n,i,r){Nn(n)||(n={matches:n});var s=new Ef(0,r||this.scope),o=s.conditions={},l,c,u;this.contexts.push(s),i=s.add("onMatch",i),s.queries=n;for(c in n)c==="all"?u=1:(l=un.matchMedia(n[c]),l&&(qr.indexOf(s)<0&&qr.push(s),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(bl):l.addEventListener("change",bl)));return u&&i(s),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},a}(),Uo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return df(i)})},timeline:function(e){return new Gt(e)},getTweensOf:function(e,t){return ot.getTweensOf(e,t)},getProperty:function(e,t,n,i){Et(e)&&(e=pn(e)[0]);var r=Hi(e||{}).get,s=n?Jd:Zd;return n==="native"&&(n=""),e&&(t?s((tn[t]&&tn[t].get||r)(e,t,n,i)):function(o,l,c){return s((tn[o]&&tn[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=pn(e),e.length>1){var i=e.map(function(u){return Kt.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var s=tn[t],o=Hi(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=s?function(u){var h=new s;br._pt=0,h.init(e,n?u+n:u,br,0,[e]),h.render(1,h),br._pt&&lc(1,br)}:o.set(e,l);return s?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=Kt.to(e,Xi((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),s=function(l,c,u){return r.resetTo(t,l,c,u)};return s.tween=r,s},isTweening:function(e){return ot.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Gi(e.ease,Br.ease)),bh(Br,e||{})},config:function(e){return bh(rn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,s=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!tn[o]&&!sn[o]&&Ro(t+" effect requires "+o+" plugin.")}),Na[t]=function(o,l,c){return n(pn(o),vn(l||{},r),c)},s&&(Gt.prototype[t]=function(o,l,c){return this.add(Na[t](o,Nn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ge[e]=Gi(t)},parseEase:function(e,t){return arguments.length?Gi(e,t):Ge},getById:function(e){return ot.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Gt(e),i,r;for(n.smoothChildTiming=qt(e.smoothChildTiming),ot.remove(n),n._dp=0,n._time=n._tTime=ot._time,i=ot._first;i;)r=i._next,(t||!(!i._dur&&i instanceof xt&&i.vars.onComplete===i._targets[0]))&&Rn(n,i,i._start-i._delay),i=r;return Rn(ot,n,0),n},context:function(e,t){return e?new Ef(e,t):vt},matchMedia:function(e){return new eb(e)},matchMediaRefresh:function(){return qr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||bl()},addEventListener:function(e,t){var n=Ao[e]||(Ao[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ao[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:IS,wrapYoyo:zS,distribute:of,random:lf,snap:af,normalize:DS,getUnit:zt,clamp:CS,splitColor:ff,toArray:pn,selector:xl,mapRange:uf,pipe:LS,unitize:RS,interpolate:US,shuffle:sf},install:jd,effects:Na,ticker:nn,updateRoot:Gt.updateRoot,plugins:tn,globalTimeline:ot,core:{PropTween:Xt,globals:Xd,Tween:xt,Timeline:Gt,Animation:Wr,getCache:Hi,_removeLinkedListItem:Yo,reverting:function(){return Ut},context:function(e){return e&&vt&&(vt.data.push(e),e._ctx=vt),vt},suppressOverwrites:function(e){return Kl=e}}};jt("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return Uo[a]=xt[a]});nn.add(Gt.updateRoot);br=Uo.to({},{duration:0});var tb=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},nb=function(e,t){var n=e._targets,i,r,s;for(i in t)for(r=n.length;r--;)s=e._ptLookup[r][i],s&&(s=s.d)&&(s._pt&&(s=tb(s,i)),s&&s.modifier&&s.modifier(t[i],e,n[r],i))},Va=function(e,t){return{name:e,rawVars:1,init:function(i,r,s){s._onInit=function(o){var l,c;if(Et(r)&&(l={},jt(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}nb(o,r)}}}},Kt=Uo.registerPlugin({name:"attr",init:function(e,t,n,i,r){var s,o,l;this.tween=n;for(s in t)l=e.getAttribute(s)||"",o=this.add(e,"setAttribute",(l||0)+"",t[s],i,r,0,0,s),o.op=s,o.b=l,this._props.push(s)},render:function(e,t){for(var n=t._pt;n;)Ut?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Va("roundProps",yl),Va("modifiers"),Va("snap",af))||Uo;xt.version=Gt.version=Kt.version="3.11.5";qd=1;Jl()&&Gr();Ge.Power0;Ge.Power1;Ge.Power2;Ge.Power3;Ge.Power4;Ge.Linear;Ge.Quad;Ge.Cubic;Ge.Quart;Ge.Quint;Ge.Strong;Ge.Elastic;Ge.Back;Ge.SteppedEase;Ge.Bounce;Ge.Sine;Ge.Expo;Ge.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ch,mi,Cr,cc,ki,Ph,uc,ib=function(){return typeof window<"u"},ni={},Oi=180/Math.PI,Pr=Math.PI/180,_r=Math.atan2,Lh=1e8,hc=/([A-Z])/g,rb=/(left|right|width|margin|padding|x)/i,sb=/[\s,\(]\S/,Dn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ml=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ob=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ab=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},lb=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Cf=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Pf=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},cb=function(e,t,n){return e.style[t]=n},ub=function(e,t,n){return e.style.setProperty(t,n)},hb=function(e,t,n){return e._gsap[t]=n},db=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},fb=function(e,t,n,i,r){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(r,s)},pb=function(e,t,n,i,r){var s=e._gsap;s[t]=n,s.renderTransform(r,s)},ct="transform",Tn=ct+"Origin",mb=function a(e,t){var n=this,i=this.target,r=i.style;if(e in ni){if(this.tfm=this.tfm||{},e!=="transform")e=Dn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return n.tfm[s]=Yn(i,s)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Yn(i,e);else return Dn.transform.split(",").forEach(function(s){return a.call(n,s,t)});if(this.props.indexOf(ct)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Tn,t,"")),e=ct}(r||t)&&this.props.push(e,t,r[e])},Lf=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},gb=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,s;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(hc,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)i[s]=this.tfm[s];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=uc(),(!r||!r.isStart)&&!n[ct]&&(Lf(n),i.uncache=1)}},Rf=function(e,t){var n={target:e,props:[],revert:gb,save:mb};return e._gsap||Kt.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},Df,wl=function(e,t){var n=mi.createElementNS?mi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):mi.createElement(e);return n.style?n:mi.createElement(e)},zn=function a(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(hc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&a(e,jr(t)||t,1)||""},Rh="O,Moz,ms,Ms,Webkit".split(","),jr=function(e,t,n){var i=t||ki,r=i.style,s=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(Rh[s]+e in r););return s<0?null:(s===3?"ms":s>=0?Rh[s]:"")+e},Al=function(){ib()&&window.document&&(Ch=window,mi=Ch.document,Cr=mi.documentElement,ki=wl("div")||{style:{}},wl("div"),ct=jr(ct),Tn=ct+"Origin",ki.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Df=!!jr("perspective"),uc=Kt.core.reverting,cc=1)},Ga=function a(e){var t=wl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,s;if(Cr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{s=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=a}catch{}else this._gsapBBox&&(s=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Cr.removeChild(t),this.style.cssText=r,s},Dh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},If=function(e){var t;try{t=e.getBBox()}catch{t=Ga.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Ga||(t=Ga.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Dh(e,["x","cx","x1"])||0,y:+Dh(e,["y","cy","y1"])||0,width:0,height:0}:t},zf=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&If(e))},zs=function(e,t){if(t){var n=e.style;t in ni&&t!==Tn&&(t=ct),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(hc,"-$1").toLowerCase())):n.removeAttribute(t)}},gi=function(e,t,n,i,r,s){var o=new Xt(e._pt,t,n,0,1,s?Pf:Cf);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},Ih={deg:1,rad:1,turn:1},_b={grid:1,flex:1},Mi=function a(e,t,n,i){var r=parseFloat(n)||0,s=(n+"").trim().substr((r+"").length)||"px",o=ki.style,l=rb.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",p=i==="%",_,g,m,f;return i===s||!r||Ih[i]||Ih[s]?r:(s!=="px"&&!d&&(r=a(e,t,n,"px")),f=e.getCTM&&zf(e),(p||s==="%")&&(ni[t]||~t.indexOf("adius"))?(_=f?e.getBBox()[l?"width":"height"]:e[u],pt(p?r/_*h:r/100*_)):(o[l?"width":"height"]=h+(d?s:i),g=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,f&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===mi||!g.appendChild)&&(g=mi.body),m=g._gsap,m&&p&&m.width&&l&&m.time===nn.time&&!m.uncache?pt(r/m.width*h):((p||s==="%")&&!_b[zn(g,"display")]&&(o.position=zn(e,"position")),g===e&&(o.position="static"),g.appendChild(ki),_=ki[u],g.removeChild(ki),o.position="absolute",l&&p&&(m=Hi(g),m.time=nn.time,m.width=g[u]),pt(d?_*r/h:_&&r?h/_*r:0))))},Yn=function(e,t,n,i){var r;return cc||Al(),t in Dn&&t!=="transform"&&(t=Dn[t],~t.indexOf(",")&&(t=t.split(",")[0])),ni[t]&&t!=="transform"?(r=Os(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:No(zn(e,Tn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Oo[t]&&Oo[t](e,t,n)||zn(e,t)||$d(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Mi(e,t,r,n)+n:r},vb=function(e,t,n,i){if(!n||n==="none"){var r=jr(t,e,1),s=r&&zn(e,r,1);s&&s!==n?(t=r,n=s):t==="borderColor"&&(n=zn(e,"borderTopColor"))}var o=new Xt(this._pt,e.style,t,0,1,Af),l=0,c=0,u,h,d,p,_,g,m,f,b,x,v,S;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=zn(e,t)||i,e.style[t]=n),u=[n,i],mf(u),n=u[0],i=u[1],d=n.match(Sr)||[],S=i.match(Sr)||[],S.length){for(;h=Sr.exec(i);)m=h[0],b=i.substring(l,h.index),_?_=(_+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(p=parseFloat(g)||0,v=g.substr((p+"").length),m.charAt(1)==="="&&(m=Er(p,m)+v),f=parseFloat(m),x=m.substr((f+"").length),l=Sr.lastIndex-x.length,x||(x=x||rn.units[t]||v,l===i.length&&(i+=x,o.e+=x)),v!==x&&(p=Mi(e,t,g,x)||0),o._pt={_next:o._pt,p:b||c===1?b:",",s:p,c:f-p,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Pf:Cf;return Gd.test(i)&&(o.e=0),this._pt=o,o},zh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},xb=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=zh[n]||n,t[1]=zh[i]||i,t.join(" ")},yb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,s=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],ni[o]&&(l=1,o=o==="transformOrigin"?Tn:ct),zs(n,o);l&&(zs(n,ct),s&&(s.svg&&n.removeAttribute("transform"),Os(n,1),s.uncache=1,Lf(i)))}},Oo={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var s=e._pt=new Xt(e._pt,t,n,0,0,yb);return s.u=i,s.pr=-10,s.tween=r,e._props.push(n),1}}},Us=[1,0,0,1,0,0],Uf={},Of=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Uh=function(e){var t=zn(e,ct);return Of(t)?Us:t.substr(7).match(Vd).map(pt)},dc=function(e,t){var n=e._gsap||Hi(e),i=e.style,r=Uh(e),s,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Us:r):(r===Us&&!e.offsetParent&&e!==Cr&&!n.svg&&(l=i.display,i.display="block",s=e.parentNode,(!s||!e.offsetParent)&&(c=1,o=e.nextElementSibling,Cr.appendChild(e)),r=Uh(e),l?i.display=l:zs(e,"display"),c&&(o?s.insertBefore(e,o):s?s.appendChild(e):Cr.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Tl=function(e,t,n,i,r,s){var o=e._gsap,l=r||dc(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,p=l[0],_=l[1],g=l[2],m=l[3],f=l[4],b=l[5],x=t.split(" "),v=parseFloat(x[0])||0,S=parseFloat(x[1])||0,w,E,T,y;n?l!==Us&&(E=p*m-_*g)&&(T=v*(m/E)+S*(-g/E)+(g*b-m*f)/E,y=v*(-_/E)+S*(p/E)-(p*b-_*f)/E,v=T,S=y):(w=If(e),v=w.x+(~x[0].indexOf("%")?v/100*w.width:v),S=w.y+(~(x[1]||x[0]).indexOf("%")?S/100*w.height:S)),i||i!==!1&&o.smooth?(f=v-c,b=S-u,o.xOffset=h+(f*p+b*g)-f,o.yOffset=d+(f*_+b*m)-b):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=S,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Tn]="0px 0px",s&&(gi(s,o,"xOrigin",c,v),gi(s,o,"yOrigin",u,S),gi(s,o,"xOffset",h,o.xOffset),gi(s,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+S)},Os=function(e,t){var n=e._gsap||new xf(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,s="px",o="deg",l=getComputedStyle(e),c=zn(e,Tn)||"0",u,h,d,p,_,g,m,f,b,x,v,S,w,E,T,y,M,I,N,R,z,O,W,q,H,ne,Q,xe,se,j,K,ce;return u=h=d=g=m=f=b=x=v=0,p=_=1,n.svg=!!(e.getCTM&&zf(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ct]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ct]!=="none"?l[ct]:"")),i.scale=i.rotate=i.translate="none"),E=dc(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),Tl(e,q||c,!!q||n.originIsAbsolute,n.smooth!==!1,E)),S=n.xOrigin||0,w=n.yOrigin||0,E!==Us&&(I=E[0],N=E[1],R=E[2],z=E[3],u=O=E[4],h=W=E[5],E.length===6?(p=Math.sqrt(I*I+N*N),_=Math.sqrt(z*z+R*R),g=I||N?_r(N,I)*Oi:0,b=R||z?_r(R,z)*Oi+g:0,b&&(_*=Math.abs(Math.cos(b*Pr))),n.svg&&(u-=S-(S*I+w*R),h-=w-(S*N+w*z))):(ce=E[6],j=E[7],Q=E[8],xe=E[9],se=E[10],K=E[11],u=E[12],h=E[13],d=E[14],T=_r(ce,se),m=T*Oi,T&&(y=Math.cos(-T),M=Math.sin(-T),q=O*y+Q*M,H=W*y+xe*M,ne=ce*y+se*M,Q=O*-M+Q*y,xe=W*-M+xe*y,se=ce*-M+se*y,K=j*-M+K*y,O=q,W=H,ce=ne),T=_r(-R,se),f=T*Oi,T&&(y=Math.cos(-T),M=Math.sin(-T),q=I*y-Q*M,H=N*y-xe*M,ne=R*y-se*M,K=z*M+K*y,I=q,N=H,R=ne),T=_r(N,I),g=T*Oi,T&&(y=Math.cos(T),M=Math.sin(T),q=I*y+N*M,H=O*y+W*M,N=N*y-I*M,W=W*y-O*M,I=q,O=H),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,f=180-f),p=pt(Math.sqrt(I*I+N*N+R*R)),_=pt(Math.sqrt(W*W+ce*ce)),T=_r(O,W),b=Math.abs(T)>2e-4?T*Oi:0,v=K?1/(K<0?-K:K):0),n.svg&&(q=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Of(zn(e,ct)),q&&e.setAttribute("transform",q))),Math.abs(b)>90&&Math.abs(b)<270&&(r?(p*=-1,b+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=d+s,n.scaleX=pt(p),n.scaleY=pt(_),n.rotation=pt(g)+o,n.rotationX=pt(m)+o,n.rotationY=pt(f)+o,n.skewX=b+o,n.skewY=x+o,n.transformPerspective=v+s,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[Tn]=No(c)),n.xOffset=n.yOffset=0,n.force3D=rn.force3D,n.renderTransform=n.svg?bb:Df?Nf:Sb,n.uncache=0,n},No=function(e){return(e=e.split(" "))[0]+" "+e[1]},Wa=function(e,t,n){var i=zt(t);return pt(parseFloat(t)+parseFloat(Mi(e,"x",n+"px",i)))+i},Sb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Nf(e,t)},Di="0deg",as="0px",Ii=") ",Nf=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,p=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,f=n.force3D,b=n.target,x=n.zOrigin,v="",S=f==="auto"&&e&&e!==1||f===!0;if(x&&(h!==Di||u!==Di)){var w=parseFloat(u)*Pr,E=Math.sin(w),T=Math.cos(w),y;w=parseFloat(h)*Pr,y=Math.cos(w),s=Wa(b,s,E*y*-x),o=Wa(b,o,-Math.sin(w)*-x),l=Wa(b,l,T*y*-x+x)}m!==as&&(v+="perspective("+m+Ii),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(S||s!==as||o!==as||l!==as)&&(v+=l!==as||S?"translate3d("+s+", "+o+", "+l+") ":"translate("+s+", "+o+Ii),c!==Di&&(v+="rotate("+c+Ii),u!==Di&&(v+="rotateY("+u+Ii),h!==Di&&(v+="rotateX("+h+Ii),(d!==Di||p!==Di)&&(v+="skew("+d+", "+p+Ii),(_!==1||g!==1)&&(v+="scale("+_+", "+g+Ii),b.style[ct]=v||"translate(0, 0)"},bb=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,p=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,f=n.yOffset,b=n.forceCSS,x=parseFloat(s),v=parseFloat(o),S,w,E,T,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Pr,c*=Pr,S=Math.cos(l)*h,w=Math.sin(l)*h,E=Math.sin(l-c)*-d,T=Math.cos(l-c)*d,c&&(u*=Pr,y=Math.tan(c-u),y=Math.sqrt(1+y*y),E*=y,T*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),S*=y,w*=y)),S=pt(S),w=pt(w),E=pt(E),T=pt(T)):(S=h,T=d,w=E=0),(x&&!~(s+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(x=Mi(p,"x",s,"px"),v=Mi(p,"y",o,"px")),(_||g||m||f)&&(x=pt(x+_-(_*S+g*E)+m),v=pt(v+g-(_*w+g*T)+f)),(i||r)&&(y=p.getBBox(),x=pt(x+i/100*y.width),v=pt(v+r/100*y.height)),y="matrix("+S+","+w+","+E+","+T+","+x+","+v+")",p.setAttribute("transform",y),b&&(p.style[ct]=y)},Mb=function(e,t,n,i,r){var s=360,o=Et(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Oi:1),c=l-i,u=i+c+"deg",h,d;return o&&(h=r.split("_")[1],h==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),h==="cw"&&c<0?c=(c+s*Lh)%s-~~(c/s)*s:h==="ccw"&&c>0&&(c=(c-s*Lh)%s-~~(c/s)*s)),e._pt=d=new Xt(e._pt,t,n,i,c,ob),d.e=u,d.u="deg",e._props.push(n),d},Oh=function(e,t){for(var n in t)e[n]=t[n];return e},wb=function(e,t,n){var i=Oh({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",s=n.style,o,l,c,u,h,d,p,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),s[ct]=t,o=Os(n,1),zs(n,ct),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ct],s[ct]=t,o=Os(n,1),s[ct]=c);for(l in ni)c=i[l],u=o[l],c!==u&&r.indexOf(l)<0&&(p=zt(c),_=zt(u),h=p!==_?Mi(n,l,c,_):parseFloat(c),d=parseFloat(u),e._pt=new Xt(e._pt,o,l,h,d-h,Ml),e._pt.u=_||0,e._props.push(l));Oh(o,i)};jt("padding,margin,Width,Radius",function(a,e){var t="Top",n="Right",i="Bottom",r="Left",s=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?a+o:"border"+o+a});Oo[e>1?"border"+a:a]=function(o,l,c,u,h){var d,p;if(arguments.length<4)return d=s.map(function(_){return Yn(o,_,c)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(u+"").split(" "),p={},s.forEach(function(_,g){return p[_]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,p,h)}});var Ff={name:"css",register:Al,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var s=this._props,o=e.style,l=n.vars.startAt,c,u,h,d,p,_,g,m,f,b,x,v,S,w,E,T;cc||Al(),this.styles=this.styles||Rf(e),T=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(tn[g]&&yf(g,t,n,i,e,r)))){if(p=typeof u,_=Oo[g],p==="function"&&(u=u.call(n,i,e,r),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=Ds(u)),_)_(this,e,g,u,n)&&(E=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",xi.lastIndex=0,xi.test(c)||(m=zt(c),f=zt(u)),f?m!==f&&(c=Mi(e,g,c,f)+f):m&&(u+=m),this.add(o,"setProperty",c,u,i,r,0,0,g),s.push(g),T.push(g,0,o[g]);else if(p!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,r):l[g],Et(c)&&~c.indexOf("random(")&&(c=Ds(c)),zt(c+"")||(c+=rn.units[g]||zt(Yn(e,g))||""),(c+"").charAt(1)==="="&&(c=Yn(e,g))):c=Yn(e,g),d=parseFloat(c),b=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),h=parseFloat(u),g in Dn&&(g==="autoAlpha"&&(d===1&&Yn(e,"visibility")==="hidden"&&h&&(d=0),T.push("visibility",0,o.visibility),gi(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Dn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in ni,x){if(this.styles.save(g),v||(S=e._gsap,S.renderTransform&&!t.parseTransform||Os(e,t.parseTransform),w=t.smoothOrigin!==!1&&S.smooth,v=this._pt=new Xt(this._pt,o,ct,0,1,S.renderTransform,S,0,-1),v.dep=1),g==="scale")this._pt=new Xt(this._pt,S,"scaleY",S.scaleY,(b?Er(S.scaleY,b+h):h)-S.scaleY||0,Ml),this._pt.u=0,s.push("scaleY",g),g+="X";else if(g==="transformOrigin"){T.push(Tn,0,o[Tn]),u=xb(u),S.svg?Tl(e,u,0,w,0,this):(f=parseFloat(u.split(" ")[2])||0,f!==S.zOrigin&&gi(this,S,"zOrigin",S.zOrigin,f),gi(this,o,g,No(c),No(u)));continue}else if(g==="svgOrigin"){Tl(e,u,1,w,0,this);continue}else if(g in Uf){Mb(this,S,g,d,b?Er(d,b+u):u);continue}else if(g==="smoothOrigin"){gi(this,S,"smooth",S.smooth,u);continue}else if(g==="force3D"){S[g]=u;continue}else if(g==="transform"){wb(this,u,e);continue}}else g in o||(g=jr(g)||g);if(x||(h||h===0)&&(d||d===0)&&!sb.test(u)&&g in o)m=(c+"").substr((d+"").length),h||(h=0),f=zt(u)||(g in rn.units?rn.units[g]:m),m!==f&&(d=Mi(e,g,c,f)),this._pt=new Xt(this._pt,x?S:o,g,d,(b?Er(d,b+h):h)-d,!x&&(f==="px"||g==="zIndex")&&t.autoRound!==!1?lb:Ml),this._pt.u=f||0,m!==f&&f!=="%"&&(this._pt.b=c,this._pt.r=ab);else if(g in o)vb.call(this,e,g,c,b?b+u:u);else if(g in e)this.add(e,g,c||e[g],b?b+u:u,i,r);else if(g!=="parseTransform"){ec(g,u);continue}x||(g in o?T.push(g,0,o[g]):T.push(g,1,c||e[g])),s.push(g)}}E&&Tf(this)},render:function(e,t){if(t.tween._time||!uc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Yn,aliases:Dn,getSetter:function(e,t,n){var i=Dn[t];return i&&i.indexOf(",")<0&&(t=i),t in ni&&t!==Tn&&(e._gsap.x||Yn(e,"x"))?n&&Ph===n?t==="scale"?db:hb:(Ph=n||{})&&(t==="scale"?fb:pb):e.style&&!Zl(e.style[t])?cb:~t.indexOf("-")?ub:ac(e,t)},core:{_removeProperty:zs,_getMatrix:dc}};Kt.utils.checkPrefix=jr;Kt.core.getStyleSaver=Rf;(function(a,e,t,n){var i=jt(a+","+e+","+t,function(r){ni[r]=1});jt(e,function(r){rn.units[r]="deg",Uf[r]=1}),Dn[i[13]]=a+","+e,jt(n,function(r){var s=r.split(":");Dn[s[1]]=i[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");jt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){rn.units[a]="px"});Kt.registerPlugin(Ff);var ps=Kt.registerPlugin(Ff)||Kt;ps.core.Tween;var kf=`varying vec2 vUv;

void main() {

    
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);\r
    vec4 viewPosition = viewMatrix * modelPosition;\r
    vec4 projectionPosition = projectionMatrix * viewPosition;

    
    gl_Position = projectionPosition;

    
    vUv = uv;\r
}`,Bf=`uniform float     uAlpha;\r
uniform sampler2D uAudioTexture;\r
uniform float     uTime;\r
uniform float     uHover;

uniform vec3      uColorFrequency;\r
uniform vec3      uColorSin;

varying vec2      vUv; 

#define PI   3.14159265\r
#define TAU  PI * 2.0

vec4 permute(vec4 x)       { return mod(((x*34.0)+1.0)*x, 289.0);            }\r
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }\r
vec3 fade(vec3 t)          { return t*t*t*(t*(t*6.0-15.0)+10.0);             }

float cnoise(vec3 P){\r
    vec3 Pi0 = floor(P); 
    vec3 Pi1 = Pi0 + vec3(1.0); 
    Pi0 = mod(Pi0, 289.0);\r
    Pi1 = mod(Pi1, 289.0);\r
    vec3 Pf0 = fract(P); 
    vec3 Pf1 = Pf0 - vec3(1.0); 
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\r
    vec4 iy = vec4(Pi0.yy, Pi1.yy);\r
    vec4 iz0 = Pi0.zzzz;\r
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);\r
    vec4 ixy0 = permute(ixy + iz0);\r
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 / 7.0;\r
    vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;\r
    gx0 = fract(gx0);\r
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\r
    vec4 sz0 = step(gz0, vec4(0.0));\r
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);\r
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 / 7.0;\r
    vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;\r
    gx1 = fract(gx1);\r
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\r
    vec4 sz1 = step(gz1, vec4(0.0));\r
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);\r
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\r
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\r
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\r
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\r
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\r
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\r
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\r
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\r
    g000 *= norm0.x;\r
    g010 *= norm0.y;\r
    g100 *= norm0.z;\r
    g110 *= norm0.w;\r
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\r
    g001 *= norm1.x;\r
    g011 *= norm1.y;\r
    g101 *= norm1.z;\r
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);\r
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\r
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\r
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\r
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\r
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\r
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\r
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = fade(Pf0);\r
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\r
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\r
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \r
    return 2.2 * n_xyz;\r
}

vec4 borderRoundRect(vec4 currentColor, vec2 size, float radius) {\r
    vec2  position   = vUv * size;\r
    vec2  rounded    = vec2(clamp(position.x, radius, size.x - radius), clamp(position.y, radius, size.y - radius));\r
    vec2  difference = position - rounded;\r
    float dist       = length(difference);\r
    vec4  color      = vec4(1.0, 1.0, 1.0, uHover); 
    float borderSize = 0.015;                       
    float alpha      = step(0.2, smoothstep(radius - borderSize, radius- borderSize, dist) - smoothstep(radius, radius + borderSize, dist));\r
    color.a = alpha * uHover;\r
    
    if (dist > radius - borderSize) {\r
        return color;\r
    }\r
    
    return currentColor;\r
}

vec4 circleFreq(vec4 currentColor, vec2 center, float radius, vec3 color) {\r
    vec2 pos = vec2(0.55, 0.5);\r
    float dist = length(vUv - pos);\r
    float rad = atan(vUv.y - pos.y, vUv.x - pos.x);

    float normAngle = 0.0;\r
    if (rad < 0.0) {\r
        normAngle = ((rad + PI) / PI);\r
    } else {\r
        normAngle = 1.0 - (1.0 + ((rad - PI) / PI));\r
    }

    float audioValue = (texture2D(uAudioTexture, vec2(normAngle, 0.0)).r - 0.5) * .25;\r
    
    float strength = cnoise(vec3(rad * 2.0, dist * 150.0,  uTime + color.b)) * radius * 0.1;

    if (dist - audioValue + strength < radius) {\r
        color.r += audioValue * 0.5;\r
        color.b += audioValue * 0.5;\r
        return vec4(color, 1.0);\r
    } \r
    return currentColor;\r
}

vec4 circleSin(vec4 currentColor, vec2 center, float radius, vec3 color) {\r
    vec2 pos1 = vec2(0.4, 0.5);\r
    float dist = length(vUv - center);\r
    float rad = atan(vUv.y - center.y, vUv.x - center.x);

    float normAngle = 0.0;\r
    if (rad < 0.0) {\r
        normAngle = ((rad + PI) / PI);\r
    } else {\r
        normAngle = (1.0 + ((rad - PI) / PI));\r
    }

    float audioValue = (texture2D(uAudioTexture, vec2(normAngle, 0.0)).g - 0.5) * .5;\r
    
    float strength = 0.0; 

    if (dist - audioValue + strength < radius) {\r
        color.g += 1.0 - audioValue;\r
        return vec4(color, 1.0);\r
    } \r
    return currentColor;\r
}

void main() {

    
    vec2 center = vec2(0.5, 0.5);\r
    
    vec4 color = vec4(0.0, 0.0, 0.0, (uAlpha + uHover) * 0.80);\r

    color = circleFreq(color, center, 0.4, uColorFrequency);\r
    color = circleSin(color, center, 0.25, uColorSin);

    
    color = borderRoundRect(color, vec2(1.0, 1.0), 0.125);\r

    gl_FragColor = color;\r
}`,Hf=`uniform float     uAlpha;\r
uniform sampler2D uAudioTexture;\r
uniform float     uTime;\r
uniform float     uHover;

uniform vec3      uColorFrequency;\r
uniform vec3      uColorSin;

varying vec2      vUv; 

#define NPI   3.14159265 
#define TAU  PI * 2.0

vec4 permute(vec4 x)       { return mod(((x*34.0)+1.0)*x, 289.0);            }\r
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }\r
vec3 fade(vec3 t)          { return t*t*t*(t*(t*6.0-15.0)+10.0);             }

float cnoise(vec3 P){\r
    vec3 Pi0 = floor(P); 
    vec3 Pi1 = Pi0 + vec3(1.0); 
    Pi0 = mod(Pi0, 289.0);\r
    Pi1 = mod(Pi1, 289.0);\r
    vec3 Pf0 = fract(P); 
    vec3 Pf1 = Pf0 - vec3(1.0); 
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\r
    vec4 iy = vec4(Pi0.yy, Pi1.yy);\r
    vec4 iz0 = Pi0.zzzz;\r
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);\r
    vec4 ixy0 = permute(ixy + iz0);\r
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 / 7.0;\r
    vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;\r
    gx0 = fract(gx0);\r
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\r
    vec4 sz0 = step(gz0, vec4(0.0));\r
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);\r
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 / 7.0;\r
    vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;\r
    gx1 = fract(gx1);\r
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\r
    vec4 sz1 = step(gz1, vec4(0.0));\r
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);\r
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\r
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\r
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\r
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\r
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\r
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\r
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\r
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\r
    g000 *= norm0.x;\r
    g010 *= norm0.y;\r
    g100 *= norm0.z;\r
    g110 *= norm0.w;\r
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\r
    g001 *= norm1.x;\r
    g011 *= norm1.y;\r
    g101 *= norm1.z;\r
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);\r
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\r
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\r
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\r
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\r
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\r
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\r
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = fade(Pf0);\r
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\r
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\r
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \r
    return 2.2 * n_xyz;\r
}

vec4 circleFreq(vec4 currentColor, vec2 center, float radius, vec3 color) {\r
    vec2 pos = vec2(0.55, 0.5);\r
    float dist = length(vUv - pos);\r
    float rad = atan(vUv.y - pos.y, vUv.x - pos.x);

    float normAngle = 0.0;\r
    if (rad < 0.0) {\r
        normAngle = ((rad + NPI) / NPI);\r
    } else {\r
        normAngle = 1.0 - (1.0 + ((rad - NPI) / NPI));\r
    }

    float audioValue = (texture2D(uAudioTexture, vec2(normAngle, 0.0)).r - 0.5) * .25;\r
    
    float strength = cnoise(vec3(rad * 2.0, dist * 150.0,  uTime + color.b)) * radius * 0.1;

    if (dist - audioValue + strength < radius) {\r
        color.r += audioValue * 0.5;\r
        color.b += audioValue * 0.5;\r
        return vec4(color, 1.0);\r
    } \r
    return currentColor;\r
}

vec4 circleSin(vec4 currentColor, vec2 center, float radius, vec3 color) {\r
    vec2 pos1 = vec2(0.4, 0.5);\r
    float dist = length(vUv - center);\r
    float rad = atan(vUv.y - center.y, vUv.x - center.x);

    float normAngle = 0.0;\r
    if (rad < 0.0) {\r
        normAngle = ((rad + NPI) / NPI);\r
    } else {\r
        normAngle = (1.0 + ((rad - NPI) / NPI));\r
    }

    float audioValue = (texture2D(uAudioTexture, vec2(normAngle, 0.0)).g - 0.5) * .5;\r
    
    float strength = 0.0; 

    if (dist - audioValue + strength < radius) {\r
        color.g += 1.0 - audioValue;\r
        return vec4(color, 1.0);\r
    } \r
    return currentColor;\r
}\r

#if DEPTH_PACKING == 3200\r
	uniform float opacity;\r
#endif\r
#include <common>\r
#include <packing>\r
#include <uv_pars_fragment>\r
#include <map_pars_fragment>\r
#include <alphamap_pars_fragment>\r
#include <alphatest_pars_fragment>\r
#include <logdepthbuf_pars_fragment>\r
#include <clipping_planes_pars_fragment>\r
varying vec2 vHighPrecisionZW;\r
void main() {\r
	#include <clipping_planes_fragment>\r
	vec4 diffuseColor = vec4( 1.0 );\r
	#if DEPTH_PACKING == 3200\r
		diffuseColor.a = opacity;\r
	#endif\r

    
    vec2 center = vec2(0.5, 0.5);\r
    
    vec4 color = vec4(0.0, 0.0, 0.0, (uAlpha + uHover) * 0.80);\r

    color = circleFreq(color, center, 0.4, uColorFrequency);\r
    color = circleSin(color, center, 0.25, uColorSin);

    \r

    diffuseColor = color;

    if (color.a == 0.0) discard;\r

	#include <map_fragment>\r
	#include <alphamap_fragment>\r
	#include <alphatest_fragment>\r
	#include <logdepthbuf_fragment>\r
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\r
	\r
    #if DEPTH_PACKING == 3200\r
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\r
	#elif DEPTH_PACKING == 3201\r
		gl_FragColor = packDepthToRGBA( fragCoordZ );\r
	#endif

}`;class Ab{constructor(e){this.experience=new rt,this.scene=this.experience.scene,this.time=this.experience.time,this.audioAnalizer=this.experience.audioAnalizer,this.world=e,this.setup()}setup(){this.geometry=new on(7,7),this.material=new tt({uniforms:{uAudioTexture:{value:this.world.frequencyTexture.bufferCanvasLinear.texture},uTime:{value:0},uAlpha:{value:this.experience.debugOptions.perlinSunAlpha},uRotate:{value:1},uHover:{value:0},uColorFrequency:{value:this.experience.debugOptions.perlinSunColorFrequency},uColorSin:{value:this.experience.debugOptions.perlinSunColorSin}},vertexShader:kf,fragmentShader:Bf,transparent:!0,side:at,depthFunc:Rl,depthWrite:!1}),this.mesh=new Ye(this.geometry,this.material),this.mesh.rotation.z=-Math.PI*.5,this.mesh.position.y+=5,this.mesh.position.x+=7,this.mesh.name="PerlinSun",this.mesh.castShadow=this.experience.debugOptions.shadows,this.mesh.customDepthMaterial=new $t({depthPacking:Yt}),this.mesh.customDepthMaterial.onBeforeCompile=e=>{e.uniforms.uAudioTexture={value:this.world.frequencyTexture.bufferCanvasLinear.texture},e.uniforms.uTime={value:0},e.uniforms.uAlpha={value:this.experience.debugOptions.perlinSunAlpha},e.uniforms.uRotate={value:1},e.uniforms.uHover={value:0},e.uniforms.uColorFrequency={value:this.experience.debugOptions.perlinSunColorFrequency},e.uniforms.uColorSin={value:this.experience.debugOptions.perlinSunColorSin},e.vertexShader=_n,e.fragmentShader=Hf,this.mesh.customDepthMaterial.uniforms=e.uniforms},this.scene.add(this.mesh)}update(){this.material.uniforms.uTime.value+=this.time.delta/1e3}}class Tb extends Vl{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const i=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t)}this.type="TextGeometry"}}class Eb{constructor(e){this.experience=new rt,this.scene=this.experience.scene,this.world=e,this.font=this.experience.resources.items.jsonFont,this.material=new $r({color:"#070707"}),this.setup()}setup(){typeof this.geometry<"u"&&this.scene.remove(this.mesh),this.geometry=new Tb(this.experience.song.name+`
`+this.experience.song.group,{font:this.font,size:1,height:.01,curveSegments:4,bevelThickness:.02,bevelSize:.05,bevelEnabled:!0}),this.geometry.computeBoundingBox();const e=-.5*(this.geometry.boundingBox.max.x-this.geometry.boundingBox.min.x);this.mesh=new Ye(this.geometry,this.material),this.mesh.position.x=e,this.mesh.position.z=7,this.mesh.position.y=-2,this.mesh.rotation.x=Math.PI*-.25,this.mesh.name="AudioInfo",this.mesh.castShadow=this.experience.debugOptions.shadows,this.scene.add(this.mesh)}}var Cb=`uniform float     uSize;\r
uniform float     uAlpha;\r
uniform sampler2D uAudioTexture;\r
uniform float     uAudioStrength;\r
uniform float     uAudioZoom;\r
uniform float     uHover;\r
uniform float     uTime;\r
uniform vec3      uColor;\r
varying vec2      vUv; \r

vec4 posColor(float alpha, float x) {\r
    
    float interval = 5.0;\r
    \r
    
    float t = mod(uTime, interval) / interval;\r
    \r
    
    vec3 color = mix(vec3(1.0, 0.0, 0.0), mix(vec3(0.0, 1.0, 0.0), mix(vec3(0.0, 0.0, 1.0), vec3(1.0, 1.0, 0.0), t), t), t);\r
    \r
    
    float alphaGradient = smoothstep(0.0, 1.0, x);\r
    \r
    
    float smoothstepX = smoothstep(0.05, 0.95, x);\r
    \r
    
    return vec4(color * smoothstepX, alpha * smoothstep(alphaGradient, 1.0 - alphaGradient, smoothstepX));\r
}\r

void main() {\r
    
    float audioValue = ((texture2D(uAudioTexture, vec2(vUv.x / uAudioZoom, 0.0)).g - .5) * uAudioStrength) + .5;

    

    if (abs(vUv.y - audioValue) < uSize) {\r
        gl_FragColor = vec4(uColor, 1.0);\r
    }\r
    else {\r
        discard;\r
    }

    
}`,Pb=`varying vec2 vUv;

void main() {\r
    vec4 modelPosition      = modelMatrix       * vec4(position , 1.0);\r
    vec4 viewPosition       = viewMatrix        * modelPosition;\r
    vec4 projectionPosition = projectionMatrix  * viewPosition;

    gl_Position = projectionPosition;\r
    vUv = uv;\r
}`;class qa{constructor(e,t,n=new L(0,0,0),i){this.experience=new rt,this.scene=this.experience.scene,this.sizes=this.experience.sizes,this.world=e,this.time=this.experience.time,this.setup(t,n,i)}setup(e,t,n){this.geometry=new qo(4,4,3,32,32,!0),this.material=new tt({uniforms:{uAudioTexture:{value:this.world.frequencyTexture.bufferCanvasLinear.texture},uAudioStrength:{value:this.experience.debugOptions.osciloscopeCylinderAudioStrength},uAudioZoom:{value:this.experience.debugOptions.osciloscopeCylinderAudioZoom},uSize:{value:this.experience.debugOptions.osciloscopeCylinderLineSize},uAlpha:{value:this.experience.debugOptions.osciloscopeCylinderAlpha},uColor:{value:new Me(n)},uHover:{value:0},uTime:{value:0}},vertexShader:Pb,fragmentShader:Cb,transparent:!0,side:at,depthWrite:!1}),this.mesh=new Ye(this.geometry,this.material),this.mesh.rotation.set(t.x,t.y,t.z),this.mesh.name="OsciloscopeCilinder",this.mesh.castShadow=this.experience.debugOptions.shadows,this.mesh.customDepthMaterial=new $t({depthPacking:Yt}),this.mesh.customDepthMaterial.onBeforeCompile=i=>{i.uniforms.uAudioTexture={value:this.world.frequencyTexture.bufferCanvasLinear.texture},i.uniforms.uAudioStrength={value:this.experience.debugOptions.osciloscopeAudioStrength},i.uniforms.uAudioZoom={value:this.experience.debugOptions.osciloscopeAudioZoom},i.uniforms.uAlpha={value:this.experience.debugOptions.osciloscopeAlpha},i.uniforms.uSize={value:this.experience.debugOptions.osciloscopeLineSize},i.uniforms.uTime={value:0},i.uniforms.uHover={value:0},i.vertexShader=_n,i.fragmentShader=Nd,this.mesh.customDepthMaterial.uniforms=i.uniforms},e.add(this.mesh)}update(){this.material.uniforms.uTime.value+=this.time.delta/1e3}}var Lb=`varying vec2 vUv;

void main() {\r
    \r
    vec4 modelPosition      = modelMatrix       * vec4(position , 1.0);\r
    vec4 viewPosition       = viewMatrix        * modelPosition;\r
    vec4 projectionPosition = projectionMatrix  * viewPosition;

    gl_Position = projectionPosition;

    vUv = uv;\r
}`,Rb=`uniform sampler2D uAudioTexture;\r
uniform float     uAudioStrength;\r
uniform vec3      uColor;\r
uniform vec3      uColor2;\r
varying vec2      vUv;\r

void main () {

    float normPos = 0.0;\r
    if (vUv.x > 0.5) {\r
        normPos = 1.0 - vUv.x;\r
    }\r
    else {\r
        normPos = vUv.x * 2.0;\r
    }\r
    float audioValue = 0.1 + texture2D(uAudioTexture, vec2(normPos, 0.0)).r;\r

    if ((vUv.y - audioValue) < 0.0) {\r
        gl_FragColor = vec4(mix(uColor, uColor2, vUv.y), 0.6);\r
    }\r
    else {\r
        discard;\r
    }

}`,Db=`uniform sampler2D uAudioTexture;

varying vec2      vUv;\r

#if DEPTH_PACKING == 3200\r
	uniform float opacity;\r
#endif\r
#include <common>\r
#include <packing>\r
#include <uv_pars_fragment>\r
#include <map_pars_fragment>\r
#include <alphamap_pars_fragment>\r
#include <alphatest_pars_fragment>\r
#include <logdepthbuf_pars_fragment>\r
#include <clipping_planes_pars_fragment>\r
varying vec2 vHighPrecisionZW;\r
void main() {\r
	#include <clipping_planes_fragment>\r
	vec4 diffuseColor = vec4( 1.0 );\r
	#if DEPTH_PACKING == 3200\r
		diffuseColor.a = opacity;\r
	#endif

    float normPos = 0.0;\r
    if (vUv.x > 0.5) {\r
        normPos = 1.0 - vUv.x;\r
    }\r
    else {\r
        normPos = vUv.x * 2.0;\r
    }\r
    float audioValue = 0.1 + texture2D(uAudioTexture, vec2(normPos, 0.0)).r;\r

    vec4 color = vec4(1.0, 1.0, 1.0, 1.0);\r
    if ((vUv.y - audioValue) < 0.0) {

    }\r
    else {\r
        discard;\r
    }\r

    diffuseColor = color;\r

	#include <map_fragment>\r
	#include <alphamap_fragment>\r
	#include <alphatest_fragment>\r
	#include <logdepthbuf_fragment>\r
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\r
	\r
    #if DEPTH_PACKING == 3200\r
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\r
	#elif DEPTH_PACKING == 3201\r
		gl_FragColor = packDepthToRGBA( fragCoordZ );\r
	#endif

}`;class Ib{constructor(e,t,n,i){this.experience=new rt,this.world=e,this.setup(t,n,i)}setup(e,t,n){this.geometry=new qo(4,2,4,32,32,!0),this.material=new tt({uniforms:{uAudioTexture:{value:this.world.frequencyTexture.bufferCanvasLinear.texture},uAudioStrength:{value:this.experience.debugOptions.osciloscopeCylinderAudioStrength},uSize:{value:this.experience.debugOptions.osciloscopeCylinderLineSize},uColor:{value:new Me(t)},uColor2:{value:new Me(n)},uHover:{value:0},uTime:{value:0}},vertexShader:Lb,fragmentShader:Rb,transparent:!0,side:at,depthWrite:!1}),this.mesh=new Ye(this.geometry,this.material),this.mesh.castShadow=this.experience.debugOptions.shadows,this.mesh.name="BarsCilinder",this.mesh.position.y=-2.5,this.mesh.customDepthMaterial=new $t({depthPacking:Yt}),this.mesh.customDepthMaterial.onBeforeCompile=i=>{i.uniforms.uAudioTexture={value:this.world.frequencyTexture.bufferCanvasLinear.texture},i.uniforms.uAudioStrength={value:this.experience.debugOptions.circularAudioStrength},i.vertexShader=_n,i.fragmentShader=Db,this.mesh.customDepthMaterial.uniforms=i.uniforms},e.add(this.mesh)}update(){}}class zb{constructor(e){this.experience=new rt,this.scene=this.experience.scene,this.time=this.experience.time,this.audioAnalizer=this.experience.audioAnalizer,this.world=e,this.setup(),this.setupOsciloscopeCylinder(),this.setupBarsCylinder()}setup(){this.group=new Jn,this.groupLookAt=new Jn,this.geometry=new on(7,7),this.material=new tt({uniforms:{uAudioTexture:{value:this.world.frequencyTexture.bufferCanvasLinear.texture},uTime:{value:0},uAlpha:{value:this.experience.debugOptions.perlinSunAlpha},uRotate:{value:1},uHover:{value:0},uColorFrequency:{value:this.experience.debugOptions.perlinSunColorFrequency},uColorSin:{value:this.experience.debugOptions.perlinSunColorSin}},vertexShader:kf,fragmentShader:Bf,transparent:!0,side:at,depthFunc:Rl,depthWrite:!1}),this.mesh=new Ye(this.geometry,this.material),this.mesh.rotation.z=-Math.PI*.5,this.mesh.name="SSPerlinSun",this.mesh.castShadow=this.experience.debugOptions.shadows,this.mesh.customDepthMaterial=new $t({depthPacking:Yt}),this.mesh.customDepthMaterial.onBeforeCompile=e=>{e.uniforms.uAudioTexture={value:this.world.frequencyTexture.bufferCanvasLinear.texture},e.uniforms.uTime={value:0},e.uniforms.uAlpha={value:this.experience.debugOptions.perlinSunAlpha},e.uniforms.uRotate={value:1},e.uniforms.uHover={value:0},e.uniforms.uColorFrequency={value:this.experience.debugOptions.perlinSunColorFrequency},e.uniforms.uColorSin={value:this.experience.debugOptions.perlinSunColorSin},e.vertexShader=_n,e.fragmentShader=Hf,this.mesh.customDepthMaterial.uniforms=e.uniforms},this.groupLookAt.add(this.mesh),this.group.add(this.groupLookAt),this.group.position.set(-12,1,-7),this.scene.add(this.group)}setupOsciloscopeCylinder(){const e=Math.PI*2*Math.random()*.66,t=Math.PI*2*Math.random()*.66,n=Math.PI*2*Math.random()*.66;this.osciloscopeCylinder1=new qa(this.world,this.group,new L(e,0,0),"#ff6666"),this.osciloscopeCylinder2=new qa(this.world,this.group,new L(0,t,0),"#66ff66"),this.osciloscopeCylinder3=new qa(this.world,this.group,new L(0,0,n),"#6666ff")}setupBarsCylinder(){this.barsCylinder=new Ib(this.world,this.group,"#0000ff","#ff0000")}update(){const e=this.time.delta/1e3;this.material.uniforms.uTime.value+=e,this.groupLookAt.lookAt(this.experience.camera.instance.position),this.osciloscopeCylinder1.mesh.scale.set(.01+this.audioAnalizer.averageFrequency[0]/255,.01+this.audioAnalizer.averageFrequency[0]/255,.01+this.audioAnalizer.averageFrequency[0]/255),this.osciloscopeCylinder2.mesh.scale.set(.1+this.audioAnalizer.averageFrequency[1]/255,.1+this.audioAnalizer.averageFrequency[1]/255,.1+this.audioAnalizer.averageFrequency[1]/255),this.osciloscopeCylinder3.mesh.scale.set(.2+this.audioAnalizer.averageFrequency[2]/255,.2+this.audioAnalizer.averageFrequency[2]/255,.2+this.audioAnalizer.averageFrequency[2]/255);const t=Math.abs(Math.sin(this.material.uniforms.uTime.value)*.05);this.osciloscopeCylinder1.material.uniforms.uSize.value=t*.75,this.osciloscopeCylinder2.material.uniforms.uSize.value=t*.66,this.osciloscopeCylinder3.material.uniforms.uSize.value=t*.52,this.osciloscopeCylinder1.mesh.rotation.set(-this.osciloscopeCylinder1.mesh.rotation.x-e*.33,0,-this.osciloscopeCylinder2.mesh.rotation.z-e*.66),this.osciloscopeCylinder2.mesh.rotation.set(this.osciloscopeCylinder2.mesh.rotation.x+e*.66,0,this.osciloscopeCylinder2.mesh.rotation.z+e*.66),this.osciloscopeCylinder3.mesh.rotation.set(this.osciloscopeCylinder3.mesh.rotation.x+e,0,-this.osciloscopeCylinder3.mesh.rotation.z-e),this.barsCylinder.mesh.rotation.set(0,this.barsCylinder.mesh.rotation.y+e*15,0),this.osciloscopeCylinder1.update(),this.osciloscopeCylinder2.update(),this.osciloscopeCylinder3.update()}}class Ub{constructor(){this.experience=new rt,this.canvas=this.experience.canvas,this.scene=this.experience.scene,this.resources=this.experience.resources,this.camera=this.experience.camera.instance,this.sizes=this.experience.sizes,this.ready=!1,this.ani={duration:.5,ease:"slowmo"},this.setup()}setup(){this.frequencyTexture=new nS,this.floor=new Qy(this),this.bars=new By(this),this.osciloscope=new sS(this),this.circular=new Gy(this),this.circularSin=new $y(this),this.circularDistorsion=new jy(this),this.yinYang=new lS(this),this.yinYangSin=new hS(this),this.perlinSun=new Ab(this),this.ssPerlinSun=new zb(this),this.experience.camera.controls.target.set(this.ssPerlinSun.group.position.x,this.ssPerlinSun.group.position.y,this.ssPerlinSun.group.position.z),this.experience.camera.controls.update(),this.lastCameraPosition=this.camera.position.clone(),this.cameraFocus="free",this.raycaster=new by,this.mouse=new re(0,0),this.hEventClick=this.eventClick.bind(this),this.canvas.addEventListener("click",this.hEventClick),this.hEventMouseMove=this.eventMouseMouve.bind(this),this.canvas.addEventListener("mousemove",this.hEventMouseMove),this.lastHover="",this.hover="",this.resources.on("ready",()=>{this.environment=new Ky,this.audioInfo=new Eb(this),this.objects={circular:{name:"Circular",hover:!1,object:this.circular},circularSin:{name:"CircularSin",hover:!1,object:this.circularSin},circularDistorsion:{name:"CircularDistorsion",hover:!1,object:this.circularDistorsion},osciloscope:{name:"Osciloscope",hover:!1,object:this.osciloscope},yinYang:{name:"YinYang",hover:!1,object:this.yinYang},yinYangSin:{name:"YinYangSin",hover:!1,object:this.yinYangSin},perlinSun:{name:"PerlinSun",hover:!1,object:this.perlinSun},audioInfo:{name:"AudioInfo",hover:!1,object:this.audioInfo}},this.ready=!0})}eventMouseMouve(e){this.mouse.x=e.clientX/this.sizes.width*2-1,this.mouse.y=-(e.clientY/this.sizes.height)*2+1,this.hover!==""?this.canvas.style.cursor="pointer":this.canvas.style.cursor="auto"}eventClick(e){if(e.preventDefault(),this.hover==="AudioInfo"){for(const t in this.objects)if(this.objects[t].name===this.hover){window.open(this.experience.song.url,"_blank");return}}if(this.cameraFocus==="free"){let t,n;for(const s in this.objects)this.objects[s].name===this.hover&&(t=this.objects[s].object.mesh.position,n=this.objects[s].object.mesh.geometry);if(this.lastCameraPosition=this.camera.position.clone(),this.camera.position.tx=0,this.camera.position.ty=0,this.camera.position.tz=0,typeof n>"u")return;this.cameraFocus=this.hover,n.computeBoundingBox();const i=n.boundingBox.max.x-n.boundingBox.min.x;let r=this.camera.position.z>t.z?2.5*i:-2.5*i;ps.to(this.camera.position,{duration:this.ani.duration,ease:this.ani.ease,x:t.x,y:t.y,z:t.z+r,tx:t.x,ty:t.y,tz:t.z,onUpdate:()=>{this.experience.camera.controls.target.set(this.camera.position.tx,this.camera.position.ty,this.camera.position.tz),this.experience.camera.controls.update()}})}else ps.to(this.camera.position,{duration:this.ani.duration,ease:this.ani.ease,x:this.lastCameraPosition.x,y:this.lastCameraPosition.y,z:this.lastCameraPosition.z,tx:0,ty:0,tz:0,onUpdate:()=>{this.experience.camera.controls.target.set(this.camera.position.tx,this.camera.position.ty,this.camera.position.tz),this.experience.camera.controls.update()}}),this.cameraFocus="free"}updateRaycaster(){this.raycaster.setFromCamera(this.mouse,this.camera);const e=this.raycaster.intersectObjects(this.scene.children);for(const t in this.objects)this.objects[t].hover=!1;this.hover="";for(let t=0;t<e.length;t++)for(const n in this.objects)if(e[t].object.name===this.objects[n].name){this.hover=this.objects[n].name,this.objects[n].hover=!0;break}for(const t in this.objects){const n=this.objects[t];n.hover===!0&&n.name!=="AudioInfo"&&n.object.material.uniforms.uHover.value<.01&&ps.to(n.object.material.uniforms.uHover,{duration:this.ani.duration,ease:this.ani.ease,value:1})}if(this.lastHover!==this.hover){for(const t in this.objects){const n=this.objects[t];if(n.name===this.lastHover&&n.name!=="AudioInfo"){ps.to(n.object.material.uniforms.uHover,{duration:this.ani.duration,ease:this.ani.ease,value:0});break}}this.lastHover=this.hover}}update(){this.ready===!0&&(this.updateRaycaster(),this.frequencyTexture.update(),this.floor.update(),this.circular.update(),this.circularSin.update(),this.circularDistorsion.update(),this.yinYang.update(),this.yinYangSin.update(),this.perlinSun.update(),this.ssPerlinSun.update())}}class Ob extends wi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Hb(t)}),this.register(function(t){return new Yb(t)}),this.register(function(t){return new $b(t)}),this.register(function(t){return new Kb(t)}),this.register(function(t){return new Gb(t)}),this.register(function(t){return new Wb(t)}),this.register(function(t){return new qb(t)}),this.register(function(t){return new jb(t)}),this.register(function(t){return new Bb(t)}),this.register(function(t){return new Xb(t)}),this.register(function(t){return new Vb(t)}),this.register(function(t){return new Fb(t)}),this.register(function(t){return new Zb(t)}),this.register(function(t){return new Jb(t)})}load(e,t,n,i){const r=this;let s;this.resourcePath!==""?s=this.resourcePath:this.path!==""?s=this.path:s=ul.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Xo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,s,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const s={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Vf){try{s[je.KHR_BINARY_GLTF]=new Qb(e)}catch(h){i&&i(h);return}r=JSON.parse(s[je.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new dM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);o[h.name]=h,s[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case je.KHR_MATERIALS_UNLIT:s[h]=new kb;break;case je.KHR_DRACO_MESH_COMPRESSION:s[h]=new eM(r,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:s[h]=new tM;break;case je.KHR_MESH_QUANTIZATION:s[h]=new nM;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(s),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Nb(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Fb{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Me(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new cl(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new cy(u),c.distance=h;break;case"spot":c=new zd(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,di(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class kb{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return fi}extendParams(e,t,n){const i=[];e.color=new Me(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const s=r.baseColorFactor;e.color.fromArray(s),e.opacity=s[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Xe))}return Promise.all(i)}}class Bb{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Hb{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$i}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const o=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new re(o,o)}return Promise.all(r)}}class Vb{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$i}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(r)}}class Gb{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$i}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Me(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=i.extensions[this.name];return s.sheenColorFactor!==void 0&&t.sheenColor.fromArray(s.sheenColorFactor),s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",s.sheenColorTexture,Xe)),s.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(r)}}class Wb{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$i}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(r)}}class qb{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$i}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const o=s.attenuationColor||[1,1,1];return t.attenuationColor=new Me(o[0],o[1],o[2]),Promise.all(r)}}class jb{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$i}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Xb{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$i}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",s.specularTexture));const o=s.specularColorFactor||[1,1,1];return t.specularColor=new Me(o[0],o[1],o[2]),s.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",s.specularColorTexture,Xe)),Promise.all(r)}}class Yb{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,s)}}class $b{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],o=i.images[s.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,s.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Kb{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],o=i.images[s.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,s.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Zb{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(o,l,c);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(p){return p.buffer}):s.ready.then(function(){const p=new ArrayBuffer(u*h);return s.decodeGltfBuffer(new Uint8Array(p),u,h,d,i.mode,i.filter),p})})}else return null}}class Jb{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==hn.TRIANGLES&&c.mode!==hn.TRIANGLE_STRIP&&c.mode!==hn.TRIANGLE_FAN&&c.mode!==void 0)return null;const s=n.extensions[this.name].attributes,o=[],l={};for(const c in s)o.push(this.parser.getDependency("accessor",s[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,p=[];for(const _ of h){const g=new Fe,m=new L,f=new On,b=new L(1,1,1),x=new fx(_.geometry,_.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,v),l.SCALE&&b.fromBufferAttribute(l.SCALE,v),x.setMatrixAt(v,g.compose(m,f,b));for(const v in l)v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&_.geometry.setAttribute(v,l[v]);it.prototype.copy.call(x,_),this.parser.assignFinalMaterial(x),p.push(x)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Vf="glTF",ls=12,Nh={JSON:1313821514,BIN:5130562};class Qb{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ls),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Vf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ls,r=new DataView(e,ls);let s=0;for(;s<i;){const o=r.getUint32(s,!0);s+=4;const l=r.getUint32(s,!0);if(s+=4,l===Nh.JSON){const c=new Uint8Array(e,ls+s,o);this.content=n.decode(c)}else if(l===Nh.BIN){const c=ls+s;this.body=e.slice(c,c+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class eM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,o={},l={},c={};for(const u in s){const h=El[u]||u.toLowerCase();o[h]=s[u]}for(const u in e.attributes){const h=El[u]||u.toLowerCase();if(s[u]!==void 0){const d=n.accessors[e.attributes[u]],p=Lr[d.componentType];c[h]=p.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(d){for(const p in d.attributes){const _=d.attributes[p],g=l[p];g!==void 0&&(_.normalized=g)}h(d)},o,c)})})}}class tM{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class nM{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class Gf extends Fs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let s=0;s!==i;s++)t[s]=n[r+s];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,d=h*h,p=d*h,_=e*c,g=_-c,m=-2*p+3*d,f=p-d,b=1-m,x=f-d+h;for(let v=0;v!==o;v++){const S=s[g+v+o],w=s[g+v+l]*u,E=s[_+v+o],T=s[_+v]*u;r[v]=b*S+x*w+m*E+f*T}return r}}const iM=new On;class rM extends Gf{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return iM.fromArray(r).normalize().toArray(r),r}}const hn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Lr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Fh={9728:ut,9729:yt,9984:Qa,9985:Kh,9986:yo,9987:yi},kh={33071:Vt,33648:Co,10497:Ir},ja={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},El={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},hi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},sM={CUBICSPLINE:void 0,LINEAR:Ur,STEP:bs},Xa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function oM(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new $r({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ei})),a.DefaultMaterial}function cs(a,e,t){for(const n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function di(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function aM(a,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(a);const s=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):a.attributes.position;s.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):a.attributes.normal;o.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):a.attributes.color;l.push(d)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(a.morphAttributes.position=u),i&&(a.morphAttributes.normal=h),r&&(a.morphAttributes.color=d),a.morphTargetsRelative=!0,a})}function lM(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function cM(a){const e=a.extensions&&a.extensions[je.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Bh(e.attributes):t=a.indices+":"+Bh(a.attributes)+":"+a.mode,t}function Bh(a){let e="";const t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function Cl(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function uM(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const hM=new Fe;class dM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Nb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Id(this.options.manager):this.textureLoader=new hy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Xo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){const o={scene:s[0][i.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:i.asset,parser:n,userData:{}};cs(r,o,i),di(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i].joints;for(let o=0,l=s.length;o<l;o++)e[s[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const s=e[i];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(n[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(s,o)=>{const l=this.associations.get(s);l!=null&&this.associations.set(o,l);for(const[c,u]of s.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,s){return n.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,s){n.load(ul.resolveURL(t.uri,i.path),r,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const s=ja[i.type],o=Lr[i.componentType],l=i.normalized===!0,c=new o(i.count*s);return Promise.resolve(new Pt(c,s,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(s){const o=s[0],l=ja[i.type],c=Lr[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,m;if(p&&p!==h){const f=Math.floor(d/p),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let x=t.cache.get(b);x||(g=new c(o,f*p,i.count*p/u),x=new lx(g,p/u),t.cache.add(b,x)),m=new Nl(x,l,d%p/u,_)}else o===null?g=new c(i.count*l):g=new c(o,d,i.count*l),m=new Pt(g,l,_);if(i.sparse!==void 0){const f=ja.SCALAR,b=Lr[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,S=new b(s[1],x,i.sparse.count*f),w=new c(s[2],v,i.sparse.count*l);o!==null&&(m=new Pt(m.array.slice(),m.itemSize,m.normalized));for(let E=0,T=S.length;E<T;E++){const y=S[E];if(m.setX(y,w[E*l]),l>=2&&m.setY(y,w[E*l+1]),l>=3&&m.setZ(y,w[E*l+2]),l>=4&&m.setW(y,w[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,s=t.images[r];let o=this.textureLoader;if(s.uri){const l=n.manager.getHandler(s.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,s=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=s.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(r.samplers||{})[s.sampler]||{};return u.magFilter=Fh[d.magFilter]||yt,u.minFilter=Fh[d.minFilter]||yi,u.wrapS=kh[d.wrapS]||Ir,u.wrapT=kh[d.wrapT]||Ir,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const s=i.images[e],o=self.URL||self.webkitURL;let l=s.uri||"",c=!1;if(s.bufferView!==void 0)l=n.getDependency("bufferView",s.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:s.mimeType});return l=o.createObjectURL(d),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,p){let _=d;t.isImageBitmapLoader===!0&&(_=function(g){const m=new Tt(g);m.needsUpdate=!0,d(m)}),t.load(ul.resolveURL(h,r.path),_,void 0,p)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),h.userData.mimeType=s.mimeType||uM(s.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(s){if(!s)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(s=s.clone(),s.channel=n.texCoord),r.extensions[je.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(s);s=r.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),r.associations.set(s,l)}}return i!==void 0&&(s.encoding=i),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Sd,In.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Wo,In.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||s){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),s&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),s&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return $r}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let s;const o={},l=r.extensions||{},c=[];if(l[je.KHR_MATERIALS_UNLIT]){const h=i[je.KHR_MATERIALS_UNLIT];s=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Me(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.fromArray(d),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Xe)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),s=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=at);const u=r.alphaMode||Xa.OPAQUE;if(u===Xa.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Xa.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&s!==fi&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new re(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&s!==fi&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&s!==fi&&(o.emissive=new Me().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&s!==fi&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Xe)),Promise.all(c).then(function(){const h=new s(o);return r.name&&(h.name=r.name),di(h,r),t.associations.set(h,{materials:e}),r.extensions&&cs(i,h,r),h})}createUniqueName(e){const t=$e.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Hh(l,o,t)})}const s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=cM(c),h=i[u];if(h)s.push(h.promise);else{let d;c.extensions&&c.extensions[je.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Hh(new Lt,c,t),i[u]={primitive:c,promise:d},s.push(d)}}return Promise.all(s)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],s=r.primitives,o=[];for(let l=0,c=s.length;l<c;l++){const u=s[l].material===void 0?oM(this.cache):this.getDependency("material",s[l].material);o.push(u)}return o.push(t.loadGeometries(s)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,_=u.length;p<_;p++){const g=u[p],m=s[p];let f;const b=c[p];if(m.mode===hn.TRIANGLES||m.mode===hn.TRIANGLE_STRIP||m.mode===hn.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new ux(g,b):new Ye(g,b),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===hn.TRIANGLE_STRIP?f.geometry=_h(f.geometry,Jh):m.mode===hn.TRIANGLE_FAN&&(f.geometry=_h(f.geometry,el));else if(m.mode===hn.LINES)f=new yd(g,b);else if(m.mode===hn.LINE_STRIP)f=new As(g,b);else if(m.mode===hn.LINE_LOOP)f=new px(g,b);else if(m.mode===hn.POINTS)f=new mx(g,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&lM(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),di(f,r),m.extensions&&cs(i,f,m),t.assignFinalMaterial(f),h.push(f)}for(let p=0,_=h.length;p<_;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return h[0];const d=new Jn;t.associations.set(d,{meshes:e});for(let p=0,_=h.length;p<_;p++)d.add(h[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ht(im.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Vo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),di(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),s=i,o=[],l=[];for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h){o.push(h);const d=new Fe;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Fl(o,l)})}loadAnimation(e){const n=this.json.animations[e],i=n.name?n.name:"animation_"+e,r=[],s=[],o=[],l=[],c=[];for(let u=0,h=n.channels.length;u<h;u++){const d=n.channels[u],p=n.samplers[d.sampler],_=d.target,g=_.node,m=n.parameters!==void 0?n.parameters[p.input]:p.input,f=n.parameters!==void 0?n.parameters[p.output]:p.output;_.node!==void 0&&(r.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",m)),o.push(this.getDependency("accessor",f)),l.push(p),c.push(_))}return Promise.all([Promise.all(r),Promise.all(s),Promise.all(o),Promise.all(l),Promise.all(c)]).then(function(u){const h=u[0],d=u[1],p=u[2],_=u[3],g=u[4],m=[];for(let f=0,b=h.length;f<b;f++){const x=h[f],v=d[f],S=p[f],w=_[f],E=g[f];if(x===void 0)continue;x.updateMatrix();let T;switch(hi[E.path]){case hi.weights:T=Ps;break;case hi.rotation:T=ji;break;case hi.position:case hi.scale:default:T=Ls;break}const y=x.name?x.name:x.uuid,M=w.interpolation!==void 0?sM[w.interpolation]:Ur,I=[];hi[E.path]===hi.weights?x.traverse(function(R){R.morphTargetInfluences&&I.push(R.name?R.name:R.uuid)}):I.push(y);let N=S.array;if(S.normalized){const R=Cl(N.constructor),z=new Float32Array(N.length);for(let O=0,W=N.length;O<W;O++)z[O]=N[O]*R;N=z}for(let R=0,z=I.length;R<z;R++){const O=new T(I[R]+"."+hi[E.path],v.array,N,M);w.interpolation==="CUBICSPLINE"&&(O.createInterpolant=function(q){const H=this instanceof ji?rM:Gf;return new H(this.times,this.values,this.getValueSize()/3,q)},O.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(O)}}return new Qx(i,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const s=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&s.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),s})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),s=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)s.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(s),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,hM)});for(let p=0,_=h.length;p<_;p++)u.add(h[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],s=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new vd:c.length>1?u=new Jn:c.length===1?u=c[0]:u=new it,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=s),di(u,r),r.extensions&&cs(n,u,r),r.matrix!==void 0){const h=new Fe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Jn;n.name&&(r.name=i.createUniqueName(n.name)),di(r,n),n.extensions&&cs(t,r,n);const s=n.nodes||[],o=[];for(let l=0,c=s.length;l<c;l++)o.push(i.getDependency("node",s[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[d,p]of i.associations)(d instanceof In||d instanceof Tt)&&h.set(d,p);return u.traverse(d=>{const p=i.associations.get(d);p!=null&&h.set(d,p)}),h};return i.associations=c(r),r})}}function fM(a,e,t){const n=e.attributes,i=new ii;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),o.normalized){const u=Cl(Lr[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new L,l=new L;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],p=d.min,_=d.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),d.normalized){const g=Cl(Lr[d.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}a.boundingBox=i;const s=new ri;i.getCenter(s.center),s.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=s}function Hh(a,e,t){const n=e.attributes,i=[];function r(s,o){return t.getDependency("accessor",s).then(function(l){a.setAttribute(o,l)})}for(const s in n){const o=El[s]||s.toLowerCase();o in a.attributes||i.push(r(n[s],o))}if(e.indices!==void 0&&!a.index){const s=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});i.push(s)}return di(a,e),fM(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?aM(a,e.targets,t):a})}class pM extends oy{constructor(e){super(e),this.type=Kn}parse(e){const o=function(x,v){switch(x){case 1:console.error("THREE.RGBELoader Read Error: "+(v||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(v||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(v||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(v||""))}return-1},h=`
`,d=function(x,v,S){v=v||1024;let E=x.pos,T=-1,y=0,M="",I=String.fromCharCode.apply(null,new Uint16Array(x.subarray(E,E+128)));for(;0>(T=I.indexOf(h))&&y<v&&E<x.byteLength;)M+=I,y+=I.length,E+=128,I+=String.fromCharCode.apply(null,new Uint16Array(x.subarray(E,E+128)));return-1<T?(S!==!1&&(x.pos+=y+T+1),M+I.slice(0,T)):!1},p=function(x){const v=/^#\?(\S+)/,S=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,w=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,E=/^\s*FORMAT=(\S+)\s*$/,T=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,y={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let M,I;if(x.pos>=x.byteLength||!(M=d(x)))return o(1,"no header found");if(!(I=M.match(v)))return o(3,"bad initial token");for(y.valid|=1,y.programtype=I[1],y.string+=M+`
`;M=d(x),M!==!1;){if(y.string+=M+`
`,M.charAt(0)==="#"){y.comments+=M+`
`;continue}if((I=M.match(S))&&(y.gamma=parseFloat(I[1])),(I=M.match(w))&&(y.exposure=parseFloat(I[1])),(I=M.match(E))&&(y.valid|=2,y.format=I[1]),(I=M.match(T))&&(y.valid|=4,y.height=parseInt(I[1],10),y.width=parseInt(I[2],10)),y.valid&2&&y.valid&4)break}return y.valid&2?y.valid&4?y:o(3,"missing image size specifier"):o(3,"missing format specifier")},_=function(x,v,S){const w=v;if(w<8||w>32767||x[0]!==2||x[1]!==2||x[2]&128)return new Uint8Array(x);if(w!==(x[2]<<8|x[3]))return o(3,"wrong scanline width");const E=new Uint8Array(4*v*S);if(!E.length)return o(4,"unable to allocate buffer space");let T=0,y=0;const M=4*w,I=new Uint8Array(4),N=new Uint8Array(M);let R=S;for(;R>0&&y<x.byteLength;){if(y+4>x.byteLength)return o(1);if(I[0]=x[y++],I[1]=x[y++],I[2]=x[y++],I[3]=x[y++],I[0]!=2||I[1]!=2||(I[2]<<8|I[3])!=w)return o(3,"bad rgbe scanline format");let z=0,O;for(;z<M&&y<x.byteLength;){O=x[y++];const q=O>128;if(q&&(O-=128),O===0||z+O>M)return o(3,"bad scanline data");if(q){const H=x[y++];for(let ne=0;ne<O;ne++)N[z++]=H}else N.set(x.subarray(y,y+O),z),z+=O,y+=O}const W=w;for(let q=0;q<W;q++){let H=0;E[T]=N[q+H],H+=w,E[T+1]=N[q+H],H+=w,E[T+2]=N[q+H],H+=w,E[T+3]=N[q+H],T+=4}R--}return E},g=function(x,v,S,w){const E=x[v+3],T=Math.pow(2,E-128)/255;S[w+0]=x[v+0]*T,S[w+1]=x[v+1]*T,S[w+2]=x[v+2]*T,S[w+3]=1},m=function(x,v,S,w){const E=x[v+3],T=Math.pow(2,E-128)/255;S[w+0]=Ks.toHalfFloat(Math.min(x[v+0]*T,65504)),S[w+1]=Ks.toHalfFloat(Math.min(x[v+1]*T,65504)),S[w+2]=Ks.toHalfFloat(Math.min(x[v+2]*T,65504)),S[w+3]=Ks.toHalfFloat(1)},f=new Uint8Array(e);f.pos=0;const b=p(f);if(b!==-1){const x=b.width,v=b.height,S=_(f.subarray(f.pos),x,v);if(S!==-1){let w,E,T;switch(this.type){case wn:T=S.length/4;const y=new Float32Array(T*4);for(let I=0;I<T;I++)g(S,I*4,y,I*4);w=y,E=wn;break;case Kn:T=S.length/4;const M=new Uint16Array(T*4);for(let I=0;I<T;I++)m(S,I*4,M,I*4);w=M,E=Kn;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:x,height:v,data:w,header:b.string,gamma:b.gamma,exposure:b.exposure,type:E}}}return null}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(s,o){switch(s.type){case wn:case Kn:s.encoding=Si,s.minFilter=yt,s.magFilter=yt,s.generateMipmaps=!1,s.flipY=!0;break}t&&t(s,o)}return super.load(e,r,n,i)}}class mM extends wi{constructor(e){super(e)}load(e,t,n,i){const r=this,s=new Xo(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(o){const l=r.parse(JSON.parse(o));t&&t(l)},n,i)}parse(e){return new gM(e)}}class gM{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=_M(e,t,this.data);for(let r=0,s=i.length;r<s;r++)n.push(...i[r].toShapes());return n}}function _M(a,e,t){const n=Array.from(a),i=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,s=[];let o=0,l=0;for(let c=0;c<n.length;c++){const u=n[c];if(u===`
`)o=0,l-=r;else{const h=vM(u,i,o,l,t);o+=h.offsetX,s.push(h.path)}}return s}function vM(a,e,t,n,i){const r=i.glyphs[a]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+a+'" does not exists in font family '+i.familyName+".");return}const s=new wy;let o,l,c,u,h,d,p,_;if(r.o){const g=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let m=0,f=g.length;m<f;)switch(g[m++]){case"m":o=g[m++]*e+t,l=g[m++]*e+n,s.moveTo(o,l);break;case"l":o=g[m++]*e+t,l=g[m++]*e+n,s.lineTo(o,l);break;case"q":c=g[m++]*e+t,u=g[m++]*e+n,h=g[m++]*e+t,d=g[m++]*e+n,s.quadraticCurveTo(h,d,c,u);break;case"b":c=g[m++]*e+t,u=g[m++]*e+n,h=g[m++]*e+t,d=g[m++]*e+n,p=g[m++]*e+t,_=g[m++]*e+n,s.bezierCurveTo(h,d,p,_,c,u);break}}return{offsetX:r.ha*e,path:s}}class xM extends Xl{constructor(e){super(),this.experience=new rt,this.sources=e,this.items={},this.toLoad=this.sources.length,this.loaded=0,this.setLoaders(),this.startLoading()}setLoaders(){this.loaders={gltfLoader:new Ob,textureLoader:new Id,cubeTextureLoader:new sy,rgbeLoader:new pM,fontLoader:new mM}}startLoading(){for(const e of this.sources)e.type==="gltfModel"?this.loaders.gltfLoader.load(e.path,t=>{this.sourceLoaded(e,t)}):e.type==="texture"?this.loaders.textureLoader.load(e.path,t=>{this.sourceLoaded(e,t)}):e.type==="cubeTexture"?this.loaders.cubeTextureLoader.load(e.path,t=>{this.sourceLoaded(e,t)}):e.type==="hdrTexture"?this.loaders.rgbeLoader.load(e.path,t=>{t.mapping=Eo,this.sourceLoaded(e,t)}):e.type==="jsonFont"&&this.loaders.fontLoader.load(e.path,t=>{this.sourceLoaded(e,t)});this.toLoad===0&&(this.experience.loading=!1,this.trigger("ready"))}sourceLoaded(e,t){this.items[e.name]=t,this.loaded++,this.loaded===this.toLoad&&(this.experience.loading=!1,this.trigger("ready"))}}const yM=[{name:"jsonFont",type:"jsonFont",path:"./fonts/helvetiker_regular.typeface.json"}];/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class Un{constructor(e,t,n,i,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),Un.nextNameID=Un.nextNameID||0,this.$name.id=`lil-gui-name-${++Un.nextNameID}`,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class SM extends Un{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Pl(a){let e,t;return(e=a.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=a.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=a.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const bM={isPrimitive:!0,match:a=>typeof a=="string",fromHexString:Pl,toHexString:Pl},Ns={isPrimitive:!0,match:a=>typeof a=="number",fromHexString:a=>parseInt(a.substring(1),16),toHexString:a=>"#"+a.toString(16).padStart(6,0)},MM={isPrimitive:!1,match:Array.isArray,fromHexString(a,e,t=1){const n=Ns.fromHexString(a);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([a,e,t],n=1){n=255/n;const i=a*n<<16^e*n<<8^t*n<<0;return Ns.toHexString(i)}},wM={isPrimitive:!1,match:a=>Object(a)===a,fromHexString(a,e,t=1){const n=Ns.fromHexString(a);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:a,g:e,b:t},n=1){n=255/n;const i=a*n<<16^e*n<<8^t*n<<0;return Ns.toHexString(i)}},AM=[bM,Ns,MM,wM];function TM(a){return AM.find(e=>e.match(a))}class EM extends Un{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=TM(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Pl(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Ya extends Un{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class CM extends Un{constructor(e,t,n,i,r,s){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(r);const o=s!==void 0;this.step(o?s:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let f=parseFloat(this.$input.value);isNaN(f)||(this._stepExplicit&&(f=this._snap(f)),this.setValue(this._clamp(f)))},t=f=>{const b=parseFloat(this.$input.value);isNaN(b)||(this._snapClampSetValue(b+f),this.$input.value=this.getValue())},n=f=>{f.code==="Enter"&&this.$input.blur(),f.code==="ArrowUp"&&(f.preventDefault(),t(this._step*this._arrowKeyMultiplier(f))),f.code==="ArrowDown"&&(f.preventDefault(),t(this._step*this._arrowKeyMultiplier(f)*-1))},i=f=>{this._inputFocused&&(f.preventDefault(),t(this._step*this._normalizeMouseWheel(f)))};let r=!1,s,o,l,c,u;const h=5,d=f=>{s=f.clientX,o=l=f.clientY,r=!0,c=this.getValue(),u=0,window.addEventListener("mousemove",p),window.addEventListener("mouseup",_)},p=f=>{if(r){const b=f.clientX-s,x=f.clientY-o;Math.abs(x)>h?(f.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(b)>h&&_()}if(!r){const b=f.clientY-l;u-=b*this._step*this._arrowKeyMultiplier(f),c+u>this._max?u=this._max-c:c+u<this._min&&(u=this._min-c),this._snapClampSetValue(c+u)}l=f.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",_)},g=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",i,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",g),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(f,b,x,v,S)=>(f-b)/(x-b)*(S-v)+v,t=f=>{const b=this.$slider.getBoundingClientRect();let x=e(f,b.left,b.right,this._min,this._max);this._snapClampSetValue(x)},n=f=>{this._setDraggingStyle(!0),t(f.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=f=>{t(f.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let s=!1,o,l;const c=f=>{f.preventDefault(),this._setDraggingStyle(!0),t(f.touches[0].clientX),s=!1},u=f=>{f.touches.length>1||(this._hasScrollBar?(o=f.touches[0].clientX,l=f.touches[0].clientY,s=!0):c(f),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",d))},h=f=>{if(s){const b=f.touches[0].clientX-o,x=f.touches[0].clientY-l;Math.abs(b)>Math.abs(x)?c(f):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d))}else f.preventDefault(),t(f.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d)},p=this._callOnFinishChange.bind(this),_=400;let g;const m=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const x=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(p,_)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class PM extends Un{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(r=>{const s=document.createElement("option");s.innerHTML=r,this.$select.appendChild(s)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class LM extends Un{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const RM=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function DM(a){const e=document.createElement("style");e.innerHTML=a;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Vh=!1;class fc{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:r="Controls",injectStyles:s=!0,touchStyles:o=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{(l.code==="Enter"||l.code==="Space")&&(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),o&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!Vh&&s&&(DM(RM),Vh=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(e,t,n,i,r){if(Object(n)===n)return new PM(this,e,t,n);const s=e[t];switch(typeof s){case"number":return new CM(this,e,t,n,i,r);case"boolean":return new SM(this,e,t);case"string":return new LM(this,e,t);case"function":return new Ya(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,s)}addColor(e,t,n=1){return new EM(this,e,t,n)}addFolder(e){return new fc({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Ya||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Ya)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}class IM{constructor(){if(this.experience=new rt,this.environment=this.experience.world.environment,this.osciloscope=this.experience.world.osciloscope,this.floor=this.experience.world.floor,this.frequencyTexture=this.experience.world.frequencyTexture,this.bars=this.experience.world.bars,this.circular=this.experience.world.circular,this.circularSin=this.experience.world.circularSin,this.circularDistorsion=this.experience.world.circularDistorsion,this.yinYang=this.experience.world.yinYang,this.yinYangSin=this.experience.world.yinYangSin,this.perlinSun=this.experience.world.perlinSun,this.ssPerlinSun=this.experience.world.ssPerlinSun,this.bloomPass=this.experience.renderer.bloomPass,this.options=this.experience.debugOptions,this.songs=this.experience.songs,this.active=window.location.hash==="#debug",this.active){this.ui=new fc,this.debugAudio=this.ui.addFolder("Audio"),this.playPauseButton={playPause:()=>{this.experience.audioAnalizer.playPause()}},this.debugAudio.add(this.playPauseButton,"playPause").name("Play / Pause"),this.songNames=[];for(let e=0;e<this.songs.length;e++)this.songNames.push(this.songs[e].name);this.debugAudio.add(this.options,"songName",this.songNames).name("Song name").onChange(()=>{for(let e=0;e<this.songs.length;e++)if(this.options.songName===this.songs[e].name){this.experience.song=this.songs[e];break}this.experience.audioAnalizer.loadSong(this.experience.song.path),this.experience.audioAnalizer.playPause()}),this.debugBars=this.ui.addFolder("Bars").open(!1),this.debugBars.add(this.options,"barsCount").min(32).max(512).step(1).name("Count").onChange(()=>{this.experience.world.bars.createBars(this.options.barsCount,1)}),this.debugBars.add(this.options,"barsAudioStrength").min(.5).max(10).step(.1).name("Audio strength").onChange(()=>{this.bars.material.uniforms.uAudioStrength.value=this.options.barsAudioStrength}),this.debugFloor=this.ui.addFolder("Floor").open(!1),this.debugFloor.addColor(this.options,"floorColorGrid").name("Grid color").onChange(()=>{this.perlinSun.material.uniforms.uColorGrid=new Me(this.options.floorColorGrid)}),this.debugFloor.addColor(this.options,"floorColorBackground").name("Background color").onChange(()=>{this.perlinSun.material.uniforms.uColorBackground=new Me(this.options.floorColorBackground)}),this.debugFloor.add(this.options,"floorAudioStrength").min(1).max(20).step(.1).name("Audio strength").onChange(()=>{this.floor.material.uniforms.uAudioStrength.value=this.options.floorAudioStrength}),this.debugOsciloscope=this.ui.addFolder("Osciloscope").open(!1),this.debugOsciloscope.add(this.options,"osciloscopeAudioStrength").min(0).max(1).step(.01).name("Audio strength").onChange(()=>{this.osciloscope.material.uniforms.uAudioStrength.value=this.options.osciloscopeAudioStrength}),this.debugOsciloscope.add(this.options,"osciloscopeAudioZoom").min(1).max(32).step(.1).name("Audio zoom").onChange(()=>{this.osciloscope.material.uniforms.uAudioZoom.value=this.options.osciloscopeAudioZoom}),this.debugOsciloscope.add(this.options,"osciloscopeAlpha").min(0).max(1).step(.01).name("Background apha").onChange(()=>{this.osciloscope.material.uniforms.uAlpha.value=this.options.osciloscopeAlpha}),this.debugOsciloscope.add(this.options,"osciloscopeLineSize").min(.001).max(.2).step(.001).name("Line size").onChange(()=>{this.osciloscope.material.uniforms.uSize.value=this.options.osciloscopeLineSize}),this.debugOsciloscopeCylinder=this.ui.addFolder("Osciloscope Cylinder").open(!1),this.debugOsciloscopeCylinder.add(this.options,"osciloscopeCylinderAudioStrength").min(0).max(1).step(.01).name("Audio strength").onChange(()=>{this.ssPerlinSun.osciloscopeCylinder1.material.uniforms.uAudioStrength.value=this.options.osciloscopeCylinderAudioStrength,this.ssPerlinSun.osciloscopeCylinder2.material.uniforms.uAudioStrength.value=this.options.osciloscopeCylinderAudioStrength,this.ssPerlinSun.osciloscopeCylinder3.material.uniforms.uAudioStrength.value=this.options.osciloscopeCylinderAudioStrength}),this.debugOsciloscopeCylinder.add(this.options,"osciloscopeCylinderAudioZoom").min(1).max(32).step(.1).name("Audio zoom").onChange(()=>{this.ssPerlinSun.osciloscopeCylinder1.material.uniforms.uAudioZoom.value=this.options.osciloscopeCylinderAudioZoom,this.ssPerlinSun.osciloscopeCylinder2.material.uniforms.uAudioZoom.value=this.options.osciloscopeCylinderAudioZoom,this.ssPerlinSun.osciloscopeCylinder3.material.uniforms.uAudioZoom.value=this.options.osciloscopeCylinderAudioZoom}),this.debugOsciloscopeCylinder.add(this.options,"osciloscopeCylinderLineSize").min(.001).max(.2).step(.001).name("Line size").onChange(()=>{this.ssPerlinSun.osciloscopeCylinder1.material.uniforms.uSize.value=this.options.osciloscopeCylinderLineSize,this.ssPerlinSun.osciloscopeCylinder2.material.uniforms.uSize.value=this.options.osciloscopeCylinderLineSize,this.ssPerlinSun.osciloscopeCylinder3.material.uniforms.uSize.value=this.options.osciloscopeCylinderLineSize}),this.debugCircular=this.ui.addFolder("Circular").open(!1),this.debugCircular.add(this.options,"circularAudioStrength").min(.1).max(.5).step(.01).name("Audio strength").onChange(()=>{this.circular.material.uniforms.uAudioStrength.value=this.options.circularAudioStrength,this.circularSin.material.uniforms.uAudioStrength.value=this.options.circularAudioStrength,this.circularDistorsion.material.uniforms.uAudioStrength.value=this.options.circularAudioStrength*.5}),this.debugCircular.add(this.options,"circularAlpha").min(0).max(1).step(.01).name("Background apha").onChange(()=>{this.circular.material.uniforms.uAlpha.value=this.options.circularAlpha,this.circularSin.material.uniforms.uAlpha.value=this.options.circularAlpha,this.circularDistorsion.material.uniforms.uAlpha.value=this.options.circularAlpha}),this.debugCircular.add(this.options,"circularLineSize").min(.001).max(.1).step(.001).name("Line Size").onChange(()=>{this.circular.material.uniforms.uSize.value=this.options.circularLineSize,this.circularSin.material.uniforms.uSize.value=this.options.circularLineSize,this.circularDistorsion.material.uniforms.uSize.value=this.options.circularLineSize}),this.debugYinYang=this.ui.addFolder("Yin Yang").open(!1),this.debugYinYang.add(this.options,"yinYangAlpha").min(0).max(1).step(.01).name("Background apha").onChange(()=>{this.yinYang.material.uniforms.uAlpha.value=this.options.yinYangAlpha,this.yinYangSin.material.uniforms.uAlpha.value=this.options.yinYangAlpha}),this.debugYinYang.add(this.options,"yinYangRotate").name("Rotate").onChange(()=>{this.yinYang.material.uniforms.uRotate.value=this.options.yinYangRotate,this.yinYangSin.material.uniforms.uRotate.value=this.options.yinYangRotate}),this.debugPerlinSun=this.ui.addFolder("Perlin sun").open(!1),this.debugPerlinSun.add(this.options,"perlinSunAlpha").min(0).max(1).step(.01).name("Background apha").onChange(()=>{this.perlinSun.material.uniforms.uAlpha.value=this.options.perlinSunAlpha,this.perlinSun.material.uniforms.uAlpha.value=this.options.perlinSunAlpha}),this.debugPerlinSun.addColor(this.options,"perlinSunColorFrequency").name("Color freq.").onChange(()=>{this.perlinSun.material.uniforms.perlinSunColorFrequency=new Me(this.options.perlinSunColorFrequency)}),this.debugPerlinSun.addColor(this.options,"perlinSunColorSin").name("Color sin").onChange(()=>{this.perlinSun.material.uniforms.perlinSunColorFrequency=new Me(this.options.perlinSunColorSin)}),this.debugBloom=this.ui.addFolder("Bloom (postprocessing)").open(!1),this.debugBloom.add(this.options,"bloomEnabled").onChange(()=>{this.bloomPass.enabled=this.options.bloomEnabled}),this.debugBloom.add(this.options,"bloomThreshold").min(-20).max(20).step(.01).name("Threshold").onChange(()=>{this.bloomPass.threshold=this.options.bloomThreshold}),this.debugBloom.add(this.options,"bloomRadius").min(-20).max(20).step(.01).name("Radius").onChange(()=>{this.bloomPass.radius=this.options.bloomRadius}),this.debugBloom.add(this.options,"bloomStrength").min(0).max(1).step(.01).name("Strength").onChange(()=>{this.bloomPass.strength=this.options.bloomStrength})}}exponent(e){return Math.floor(1024/2**(e-1))}}var Fo;const pc=class{constructor(){this.experience=new rt,this.options=this.experience.options,this.sizes=this.experience.sizes,this.songs=this.experience.songs,this.song=this.experience.song,this.create(),this.setupAudioControlEvents()}setupAudioControlEvents(){this.dragTime=!1,this.elementAudioSongs.addEventListener("change",e=>{for(let t=0;t<this.songs.length;t++)if(e.currentTarget.value===this.songs[t].name){this.experience.song=this.songs[t];break}this.experience.audioAnalizer.loadSong(this.experience.song.path),this.experience.audioAnalizer.playPause(),this.experience.world.audioInfo.setup()}),this.elementAudioPlay.addEventListener("click",e=>{this.experience.audioAnalizer.playPause()==!1?this.elementAudioPlay.innerHTML="Play":this.elementAudioPlay.innerHTML="Pause"}),this.elementAudioVolume.addEventListener("input",e=>{this.experience.audioAnalizer.gainNode.gain.value=e.currentTarget.value}),this.elementAudioTime.addEventListener("mousedown",e=>{this.dragTime=!0}),this.elementAudioTime.addEventListener("touchstart",e=>{this.dragTime=!0}),this.elementAudioTime.addEventListener("mouseup",e=>{this.dragTime=!1}),this.elementAudioTime.addEventListener("touchend",e=>{this.dragTime=!1}),this.elementAudioTime.addEventListener("change",e=>{this.experience.audioAnalizer.song.currentTime=this.elementAudioTime.value})}createAudioControls(){let e="<div class='Experience_AudioControls Experience_Panel'>";e+="</div>",document.body.innerHTML=document.body.innerHTML+e,this.elementAudioControls=document.querySelector("#"+this.elementExperience.id+" > .Experience_AudioControls")}create(){if(typeof this.id>"u"){const e=document.createElement("div");this.id=yc(pc,Fo)._++,e.id="Experience"+this.id,e.className="Experience",this.options.rootElement.appendChild(e),this.elementExperience=document.getElementById(e.id),this.elementExperience.setAttribute("loading",!0);let t="";t+='<canvas id="Experience'+this.id+'_Canvas" class="Experience_Canvas"></canvas>',t+='<div class="Experience_Loading Experience_Panel"><span>Loading...</span></div>',t+='<div class="Experience_Controls">',this.options.showFPS===!0&&(t+="<div class='Experience_Panel Experience_Control' title='Frames Per Second'><div class='Experience_FPS'>60</div><div class='Experience_TxtFPS'>fps</div></div>"),this.options.buttonFullScreen===!0&&(t+="<div class='Experience_Panel Experience_Control' title='Togle Full Screen'></div>"),this.options.buttonLogo===!0&&(t+="<div class='Experience_Panel Experience_Control' title='devildrey33 home page'></div>"),t+="</div>",t+="<div class='Experience_AudioControls'>",t+="<table style='width:300px'><tr><td style='width:70px'>",t+="<div class='Experience_AC_Play'><button>Play</button></div>",t+="</td><td style='width:200px'><table><tr><td><span>song</span></td><td>",t+="<div class='Experience_AC_Songs'><select name='songs'>";for(let n=0;n<this.songs.length;n++)t+=this.songs[n].name===this.song.name?"<option selected>":"<option>",t+=this.songs[n].name+"</option>";t+="</select></div></td></tr><tr><td>volume</td><td>",t+="<div class='Experience_AC_Volume'><input type='range' name='volume' min='0' max='2' value='1' step='0.01' ></input></div>",t+="</td></tr></table></td>",t+="</tr></table>",t+="<div class='Experience_AC_Time'><input type='range'></input></div>",t+="</div>",this.elementExperience.innerHTML=t,this.elementAudioControls=document.querySelector("#"+this.elementExperience.id+" > .Experience_AudioControls"),this.elementAudioSongs=document.querySelector("#"+this.elementExperience.id+" > .Experience_AudioControls  .Experience_AC_Songs select"),this.elementAudioPlay=document.querySelector("#"+this.elementExperience.id+" > .Experience_AudioControls  .Experience_AC_Play button"),this.elementAudioVolume=document.querySelector("#"+this.elementExperience.id+" > .Experience_AudioControls  .Experience_AC_Volume input"),this.elementAudioTime=document.querySelector("#"+this.elementExperience.id+" > .Experience_AudioControls > .Experience_AC_Time > input"),this.elementAudioInfo=document.querySelector("#"+this.elementExperience.id+" > .Experience_AudioControls  .Experience_AC_Info"),this.elementCanvas=document.querySelector("#"+this.elementExperience.id+" > .Experience_Canvas"),this.elementLoading=document.querySelector("#"+this.elementExperience.id+" > .Experience_Loading"),this.elementControls=document.querySelector("#"+this.elementExperience.id+" > .Experience_Controls"),this.options.showFPS===!0&&(this.elementFPS=document.querySelector("#"+this.elementExperience.id+" > .Experience_Controls > .Experience_Control > .Experience_FPS"))}this.options.width==="auto"&&(this.width=this.options.width),this.options.height==="auto"&&(this.height=this.options.height),this.options.width!=="auto"&&(this.sizes.width=this.options.width,this.elementCanvas.style.width=this.sizes.width+"px"),this.options.left==="auto"&&(this.elementCanvas.style.left="calc(50% - ("+this.width+"px / 2))"),this.options.height!=="auto"&&(this.sizes.height=this.options.height,this.elementCanvas.style.height=this.height+"px"),this.options.top==="auto"&&(this.elementCanvas.style.top="calc(50% - ("+this.height+"px / 2))")}};let To=pc;Fo=new WeakMap,xc(To,Fo,0);Math.clamp=(a,e,t)=>Math.min(Math.max(a,e),t);Math.mix=(a,e,t)=>a*(1-t)+e*t;Math.cubicBezier=(a,e,t,n,i)=>{const r=Math.mix(a,e,i),s=Math.mix(e,t,i),o=Math.mix(t,n,i),l=Math.mix(r,s,i),c=Math.mix(s,o,i);return Math.mix(l,c,i)};class zM{constructor(){this.experience=new rt,this.audioSourceDD={context:{currentTime:0}},this.context=new AudioContext,this.songLoaded=!1,this.htmlElements=this.experience.htmlElements}start(e,t=()=>{},n=()=>{}){this.fftSize=e,this.square=Math.sqrt(this.fftSize*.5),this.analizerData=new Uint8Array(e*.5),this.analizerDataSin=new Uint8Array(e*.5),this.gainNode=this.context.createGain(),this.analizer=this.context.createAnalyser(),this.analizer.fftSize=e,this.analizer.smoothingTimeConstant=.8,this.fnEnded=n,this.fnReady=t,this.hEventDragEnter=this.eventDragEnter.bind(this),this.hEventDragOver=this.eventDragOver.bind(this),this.hEventDrop=this.eventDrop.bind(this),this.experience.canvas.addEventListener("dragenter",this.hEventDragEnter),this.experience.canvas.addEventListener("dragover",this.hEventDragOver),this.experience.canvas.addEventListener("drop",this.hEventDrop)}loadSong(e){typeof this.song<"u"&&(this.song.pause(),this.songLoaded=!1,this.experience.loading=!0),this.song=new Audio,this.song.controls=!0,this.song.crossOrigin="anonymous",this.song.src=e,this.song.addEventListener("canplay",this.canPlay.bind(this)),this.song.addEventListener("ended",()=>{this.experience.htmlElements.elementAudioPlay.innerHTML="Play",this.fnEnded.bind(this)})}loadSongDrop(e){this.experience.loading=!0,this.songLoaded=!1,typeof this.song=="object"&&(this.song.pause(),this.song.currentTime=0),this.song=new Audio,this.song.controls=!0,this.song.crossOrigin="anonymous",this.song.src=URL.createObjectURL(e[0]),this.song.addEventListener("canplay",this.canPlayDrop.bind(this)),this.song.addEventListener("ended",()=>{this.experience.htmlElements.elementAudioPlay.innerHTML="Play",this.fnEnded.bind(this)})}playPause(){return this.context.resume(),this.song.duration>0&&!this.song.paused?(this.song.pause(),!1):(this.song.play(),!0)}canPlay(){this.songLoaded!==!0&&(this.experience.loading=!1,this.songLoaded=!0,this.audioSource=this.context.createMediaElementSource(this.song),this.audioSource.connect(this.analizer),this.analizer.connect(this.gainNode),this.gainNode.connect(this.context.destination),this.fnReady(),this.htmlElements.elementAudioTime.setAttribute("max",this.song.duration))}canPlayDrop(){this.canPlay(),this.song.play()}eventDragEnter(e){return!1}eventDragOver(e){return e.preventDefault()}eventDrop(e){this.loadSongDrop(e.dataTransfer.files),e.stopPropagation(),e.preventDefault()}update(){this.analizer.getByteFrequencyData(this.analizerData),this.analizer.getByteTimeDomainData(this.analizerDataSin),this.averageFrequency=this.getAverageFrequency(),this.htmlElements.dragTime===!1&&(this.htmlElements.elementAudioTime.value=this.song.currentTime)}getAverageFrequency(){for(var e=this.context.sampleRate/this.fftSize,t=[256,2e3,16e3,5e4],n=[0,0,0,0,0],i=[0,0,0,0,0],r=0,s=this.fftSize/2,o=0;o<s;o++)o*e>t[r]&&r++,n[r]++,i[r]+=this.analizerData[o],i[4]+=this.analizerData[o];return[i[0]/n[0],i[1]/n[1],i[2]/n[2],i[3]/n[3],i[4]/s]}destroy(){this.experience.canvas.removeEventListener("dragenter",this.hEventDragEnter),this.experience.canvas.removeEventListener("dragover",this.hEventDragOver),this.experience.canvas.removeEventListener("drop",this.hEventDrop)}}let $a=null;class rt{constructor(e){Qr(this,"songs",[{name:"Cyberpunk Metal",group:"Vikhlyantsev Evgeny",path:"./songs/Вихлянцев_Евгений_-_Cyberpunk_Metal(Game,Videos).mp3",url:"https://www.jamendo.com/track/1892989/cyberpunk-metal-game-videos"},{name:"Kill City Kills",group:"Ride into the Badlands",path:"./songs/Kill_City_Kills_-_Ride_into_the_Badlands_-_Kill_City_Kills.mp3",url:"https://www.jamendo.com/track/1901190/kill-city-kills-ride-into-the-badlands"},{name:"Battle Trance",group:"JT Bruce",path:"./songs/BattleTrance.mp3",url:"https://www.jamendo.com/track/1237162/battle-trance"},{name:"Nothing's Over",group:"In Camera",path:"./songs/In_Camera_-_Nothing_s_Over.mp3",url:"https://www.jamendo.com/track/1397271/nothing-s-over"},{name:"One Chance",group:"Fallen to Flux",path:"./songs/OneChance.mp3",url:"https://www.jamendo.com/track/1155241/one-chance"},{name:"Quantum Ocean",group:"From Sky to Abyss",path:"./songs/QuantumOcean.mp3",url:"https://www.jamendo.com/track/1284951/quantum-ocean"},{name:"Six Feet Under",group:"Convergence",path:"./songs/Convergence_-_Six_feet_under.mp3",url:"https://www.jamendo.com/track/80122/six-feet-under"}]);Qr(this,"optionsExperienceByDefault",{top:0,left:0,width:"auto",height:"auto",showFPS:!0,buttonFullScreen:!1,buttonLogo:!1,rootElement:document.body,antialias:!0});Qr(this,"panelAlpha",0);Qr(this,"debugOptions",{songName:"",shadows:!0,osciloscopeLineSize:.02,osciloscopeAlpha:this.panelAlpha,osciloscopeAudioStrength:.5,osciloscopeAudioZoom:1,osciloscopeVisible:!0,osciloscopeCylinderLineSize:.005,osciloscopeCylinderAlpha:this.panelAlpha,osciloscopeCylinderAudioStrength:.5,osciloscopeCylinderAudioZoom:1,floorAudioStrength:5,floorVisible:!0,floorColorBackground:new Me("#000007"),floorColorGrid:new Me("#1a1aff"),barsAudioStrength:2,barsCount:256,barsVisible:!0,circularAudioStrength:.4,circularLineSize:.07,circularAlpha:this.panelAlpha,circularRVisible:!0,circularGVisible:!0,circularDistorsionVisible:!0,yinYangAlpha:this.panelAlpha,yinYangRotate:!0,perlinSunAlpha:this.panelAlpha,perlinSunColorFrequency:new Me("#972020"),perlinSunColorSin:new Me("#1e1f33"),bloomThreshold:-.8,bloomRadius:-1.32,bloomStrength:.55,bloomEnabled:!0,frequencyTextureVisible:!0});if($a)return $a;if($a=this,this.options=this.optionsExperienceByDefault,typeof e=="object")for(let t in e)this.options[t]=e[t];this.song=this.songs[Math.floor(Math.random()*this.songs.length)],this.debugOptions.songName=this.song.name,this.htmlElements=new To,this.sizes=new Ay,this.canvas=this.htmlElements.elementCanvas,this.audioAnalizer=new zM,this.audioAnalizer.start(2048,()=>{},()=>{}),this.audioAnalizer.loadSong(this.song.path),this.time=new Ty,this.scene=new ax,this.resources=new xM(yM),this.camera=new Cy,this.renderer=new Uy,this.world=new Ub,this.debug=new IM,this.sizes.on("resize",()=>{this.resize()}),this.time.on("tick",()=>{this.update()})}get loading(){let e=this.htmlElements.elementExperience.getAttribute("loading");return e==="true"||e===!0}set loading(e){this.htmlElements.elementExperience.setAttribute("loading",e)}resize(){this.camera.resize(),this.renderer.resize()}update(){this.camera.update(),this.audioAnalizer.update(),this.world.update(),this.renderer.update()}destroy(){this.sizes.off("resize"),this.time.off("tick"),this.scene.traverse(e=>{if(e instanceof Ye){e.geometry.dispose();for(const t in e.material){const n=e.material[t];n&&typeof n.dispose=="function"&&n.dispose()}}}),this.camera.controls.dispose(),this.renderer.instance.dispose(),this.debug.active&&this.debug.ui.destroy()}}new rt;
//# sourceMappingURL=index-5cb3083f.js.map
