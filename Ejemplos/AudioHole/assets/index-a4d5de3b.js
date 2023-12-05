var Jf=Object.defineProperty;var Qf=(i,e,t)=>e in i?Jf(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Ct=(i,e,t)=>(Qf(i,typeof e!="symbol"?e+"":e,t),t),wc=(i,e,t)=>{if(!e.has(i))throw TypeError("Cannot "+t)};var ep=(i,e,t)=>(wc(i,e,"read from private field"),t?t.call(i):e.get(i)),Rc=(i,e,t)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,t)},tp=(i,e,t,n)=>(wc(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t),Cc=(i,e,t,n)=>({set _(s){tp(i,e,s,t)},get _(){return ep(i,e,n)}});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hr="155",vs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},xs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},np=0,Pc=1,ip=2,Wh=1,sp=2,ri=3,Gn=0,It=1,Dt=2,zt=0,Ws=1,Lc=2,Dc=3,Ic=4,rp=5,ks=100,ap=101,op=102,Uc=103,Oc=104,lp=200,cp=201,up=202,hp=203,Xh=204,qh=205,dp=206,fp=207,pp=208,mp=209,gp=210,Yh=0,jh=1,cl=2,Na=3,$h=4,Kh=5,Zh=6,Jh=7,Qh=0,_p=1,vp=2,hi=0,xp=1,yp=2,Sp=3,Mp=4,Ep=5,ed=300,Ks=301,Zs=302,ul=303,hl=304,Za=306,Js=1e3,_n=1001,Fa=1002,ct=1003,dl=1004,Pa=1005,Lt=1006,td=1007,Ni=1008,Gt=1009,Tp=1010,Ap=1011,Bl=1012,nd=1013,li=1014,ci=1015,Qs=1016,id=1017,sd=1018,Di=1020,bp=1021,vn=1023,wp=1024,Rp=1025,as=1026,ds=1027,Cp=1028,rd=1029,Pp=1030,ad=1031,od=1033,uo=33776,ho=33777,fo=33778,po=33779,Nc=35840,Fc=35841,Bc=35842,zc=35843,Lp=36196,kc=37492,Hc=37496,Vc=37808,Gc=37809,Wc=37810,Xc=37811,qc=37812,Yc=37813,jc=37814,$c=37815,Kc=37816,Zc=37817,Jc=37818,Qc=37819,eu=37820,tu=37821,mo=36492,Dp=36283,nu=36284,iu=36285,su=36286,Fr=2300,er=2301,go=2302,ru=2400,au=2401,ou=2402,Ip=2500,Up=0,ld=1,fl=2,Ja=3e3,di=3001,Fi=3200,Op=3201,cd=0,Np=1,os="",Te="srgb",Wn="srgb-linear",ud="display-p3",_o=7680,Fp=519,Bp=512,zp=513,kp=514,Hp=515,Vp=516,Gp=517,Wp=518,Xp=519,pl=35044,lu="300 es",ml=1035,ui=2e3,Ba=2001;class Yn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cu=1234567;const Lr=Math.PI/180,tr=180/Math.PI;function Dn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toLowerCase()}function Nt(i,e,t){return Math.max(e,Math.min(t,i))}function zl(i,e){return(i%e+e)%e}function qp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Yp(i,e,t){return i!==e?(t-i)/(e-i):0}function Dr(i,e,t){return(1-t)*i+t*e}function jp(i,e,t,n){return Dr(i,e,1-Math.exp(-t*n))}function $p(i,e=1){return e-Math.abs(zl(i,e*2)-e)}function Kp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Zp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Jp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Qp(i,e){return i+Math.random()*(e-i)}function em(i){return i*(.5-Math.random())}function tm(i){i!==void 0&&(cu=i);let e=cu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nm(i){return i*Lr}function im(i){return i*tr}function gl(i){return(i&i-1)===0&&i!==0}function hd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function za(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function sm(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),_=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*_,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*_,o*c);break;case"ZYZ":i.set(l*_,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ze(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ka={DEG2RAD:Lr,RAD2DEG:tr,generateUUID:Dn,clamp:Nt,euclideanModulo:zl,mapLinear:qp,inverseLerp:Yp,lerp:Dr,damp:jp,pingpong:$p,smoothstep:Kp,smootherstep:Zp,randInt:Jp,randFloat:Qp,randFloatSpread:em,seededRandom:tm,degToRad:nm,radToDeg:im,isPowerOfTwo:gl,ceilPowerOfTwo:hd,floorPowerOfTwo:za,setQuaternionFromProperEuler:sm,normalize:Ze,denormalize:Bn};class pe{constructor(e=0,t=0){pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,t,n,s,r,a,o,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],_=n[8],g=s[0],m=s[3],f=s[6],y=s[1],v=s[4],S=s[7],M=s[2],w=s[5],T=s[8];return r[0]=a*g+o*y+l*M,r[3]=a*m+o*v+l*w,r[6]=a*f+o*S+l*T,r[1]=c*g+u*y+h*M,r[4]=c*m+u*v+h*w,r[7]=c*f+u*S+h*T,r[2]=d*g+p*y+_*M,r[5]=d*m+p*v+_*w,r[8]=d*f+p*S+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,p=c*r-a*l,_=t*h+n*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(s*c-u*n)*g,e[2]=(o*n-s*a)*g,e[3]=d*g,e[4]=(u*t-s*l)*g,e[5]=(s*r-o*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(vo.makeScale(e,t)),this}rotate(e){return this.premultiply(vo.makeRotation(-e)),this}translate(e,t){return this.premultiply(vo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vo=new ze;function dd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const uu={};function Ir(i){i in uu||(uu[i]=!0,console.warn(i))}function Xs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const rm=new ze().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),am=new ze().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function om(i){return i.convertSRGBToLinear().applyMatrix3(am)}function lm(i){return i.applyMatrix3(rm).convertLinearToSRGB()}const cm={[Wn]:i=>i,[Te]:i=>i.convertSRGBToLinear(),[ud]:om},um={[Wn]:i=>i,[Te]:i=>i.convertLinearToSRGB(),[ud]:lm},wn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Wn},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=cm[e],s=um[t];if(n===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let ys;class fd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ys===void 0&&(ys=Br("canvas")),ys.width=e.width,ys.height=e.height;const n=ys.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ys}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Br("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Xs(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xs(t[n]/255)*255):t[n]=Xs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hm=0;class pd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=Dn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(yo(s[a].image)):r.push(yo(s[a]))}else r=yo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function yo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dm=0;class St extends Yn{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=_n,s=_n,r=Lt,a=Ni,o=vn,l=Gt,c=St.DEFAULT_ANISOTROPY,u=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=Dn(),this.name="",this.source=new pd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===di?Te:os),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ed)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Js:e.x=e.x-Math.floor(e.x);break;case _n:e.x=e.x<0?0:1;break;case Fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Js:e.y=e.y-Math.floor(e.y);break;case _n:e.y=e.y<0?0:1;break;case Fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Te?di:Ja}set encoding(e){Ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===di?Te:os}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=ed;St.DEFAULT_ANISOTROPY=1;class je{constructor(e=0,t=0,n=0,s=1){je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],_=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(p+1)/2,M=(f+1)/2,w=(u+d)/4,T=(h+g)/4,C=(_+m)/4;return v>S&&v>M?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=w/n,r=T/n):S>M?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=w/s,r=C/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=T/r,s=C/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(h-g)/y,this.z=(d-u)/y,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fm extends Yn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new je(0,0,e,t),this.scissorTest=!1,this.viewport=new je(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(Ir("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===di?Te:os),this.texture=new St(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Lt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new pd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class At extends fm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class md extends St{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ct,this.minFilter=ct,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pm extends St{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ct,this.minFilter=ct,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=r[a+0],p=r[a+1],_=r[a+2],g=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==d||c!==p||u!==_){let m=1-o;const f=l*d+c*p+u*_+h*g,y=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const M=Math.sqrt(v),w=Math.atan2(M,f*y);m=Math.sin(m*w)/M,o=Math.sin(o*w)/M}const S=o*y;if(l=l*m+d*S,c=c*m+p*S,u=u*m+_*S,h=h*m+g*S,m===1-o){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],d=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+u*h+l*p-c*d,e[t+1]=l*_+u*d+c*h-o*p,e[t+2]=c*_+u*p+o*d-l*h,e[t+3]=u*_-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),d=l(n/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"YXZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"ZXY":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"ZYX":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"YZX":this._x=d*u*h+c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h-d*p*_;break;case"XZY":this._x=d*u*h-c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*s-o*n,u=l*n+o*t-r*s,h=l*s+r*n-a*t,d=-r*t-a*n-o*s;return this.x=c*l+d*-r+u*-o-h*-a,this.y=u*l+d*-a+h*-r-c*-o,this.z=h*l+d*-o+c*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return So.copy(this).projectOnVector(e),this.sub(So)}reflect(e){return this.sub(So.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const So=new L,hu=new Xn;class mi{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ss.copy(e.boundingBox),Ss.applyMatrix4(e.matrixWorld),this.union(Ss);else{const s=e.geometry;if(s!==void 0)if(t&&s.attributes!==void 0&&s.attributes.position!==void 0){const r=s.attributes.position;for(let a=0,o=r.count;a<o;a++)Jn.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Jn)}else s.boundingBox===null&&s.computeBoundingBox(),Ss.copy(s.boundingBox),Ss.applyMatrix4(e.matrixWorld),this.union(Ss)}const n=e.children;for(let s=0,r=n.length;s<r;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),na.subVectors(this.max,_r),Ms.subVectors(e.a,_r),Es.subVectors(e.b,_r),Ts.subVectors(e.c,_r),_i.subVectors(Es,Ms),vi.subVectors(Ts,Es),Xi.subVectors(Ms,Ts);let t=[0,-_i.z,_i.y,0,-vi.z,vi.y,0,-Xi.z,Xi.y,_i.z,0,-_i.x,vi.z,0,-vi.x,Xi.z,0,-Xi.x,-_i.y,_i.x,0,-vi.y,vi.x,0,-Xi.y,Xi.x,0];return!Mo(t,Ms,Es,Ts,na)||(t=[1,0,0,0,1,0,0,0,1],!Mo(t,Ms,Es,Ts,na))?!1:(ia.crossVectors(_i,vi),t=[ia.x,ia.y,ia.z],Mo(t,Ms,Es,Ts,na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new L,new L,new L,new L,new L,new L,new L,new L],Jn=new L,Ss=new mi,Ms=new L,Es=new L,Ts=new L,_i=new L,vi=new L,Xi=new L,_r=new L,na=new L,ia=new L,qi=new L;function Mo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){qi.fromArray(i,r);const o=s.x*Math.abs(qi.x)+s.y*Math.abs(qi.y)+s.z*Math.abs(qi.z),l=e.dot(qi),c=t.dot(qi),u=n.dot(qi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const mm=new mi,vr=new L,Eo=new L;class jn{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):mm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vr.subVectors(e,this.center);const t=vr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(vr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Eo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vr.copy(e.center).add(Eo)),this.expandByPoint(vr.copy(e.center).sub(Eo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new L,To=new L,sa=new L,xi=new L,Ao=new L,ra=new L,bo=new L;class Yr{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){To.copy(e).add(t).multiplyScalar(.5),sa.copy(t).sub(e).normalize(),xi.copy(this.origin).sub(To);const r=e.distanceTo(t)*.5,a=-this.direction.dot(sa),o=xi.dot(this.direction),l=-xi.dot(sa),c=xi.lengthSq(),u=Math.abs(1-a*a);let h,d,p,_;if(u>0)if(h=a*l-o,d=a*o-l,_=r*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(To).addScaledVector(sa,d),p}intersectSphere(e,t){Qn.subVectors(e.center,this.origin);const n=Qn.dot(this.direction),s=Qn.dot(Qn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,n,s,r){Ao.subVectors(t,e),ra.subVectors(n,e),bo.crossVectors(Ao,ra);let a=this.direction.dot(bo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xi.subVectors(this.origin,e);const l=o*this.direction.dot(ra.crossVectors(xi,ra));if(l<0)return null;const c=o*this.direction.dot(Ao.cross(xi));if(c<0||l+c>a)return null;const u=-o*xi.dot(bo);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ne{constructor(e,t,n,s,r,a,o,l,c,u,h,d,p,_,g,m){Ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,d,p,_,g,m)}set(e,t,n,s,r,a,o,l,c,u,h,d,p,_,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ne().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/As.setFromMatrixColumn(e,0).length(),r=1/As.setFromMatrixColumn(e,1).length(),a=1/As.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,p=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+_*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,_=c*u,g=c*h;t[0]=d+g*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-_,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,_=c*u,g=c*h;t[0]=d-g*o,t[4]=-a*h,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=_*c-p,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-d*h,t[8]=_*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+_,t[10]=d-g*h}else if(e.order==="XZY"){const d=a*l,p=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=a*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=o*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gm,e,_m)}lookAt(e,t,n){const s=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),yi.crossVectors(n,sn),yi.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),yi.crossVectors(n,sn)),yi.normalize(),aa.crossVectors(sn,yi),s[0]=yi.x,s[4]=aa.x,s[8]=sn.x,s[1]=yi.y,s[5]=aa.y,s[9]=sn.y,s[2]=yi.z,s[6]=aa.z,s[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],_=n[2],g=n[6],m=n[10],f=n[14],y=n[3],v=n[7],S=n[11],M=n[15],w=s[0],T=s[4],C=s[8],x=s[12],A=s[1],W=s[5],q=s[9],I=s[13],O=s[2],N=s[6],K=s[10],V=s[14],Y=s[3],Q=s[7],Z=s[11],z=s[15];return r[0]=a*w+o*A+l*O+c*Y,r[4]=a*T+o*W+l*N+c*Q,r[8]=a*C+o*q+l*K+c*Z,r[12]=a*x+o*I+l*V+c*z,r[1]=u*w+h*A+d*O+p*Y,r[5]=u*T+h*W+d*N+p*Q,r[9]=u*C+h*q+d*K+p*Z,r[13]=u*x+h*I+d*V+p*z,r[2]=_*w+g*A+m*O+f*Y,r[6]=_*T+g*W+m*N+f*Q,r[10]=_*C+g*q+m*K+f*Z,r[14]=_*x+g*I+m*V+f*z,r[3]=y*w+v*A+S*O+M*Y,r[7]=y*T+v*W+S*N+M*Q,r[11]=y*C+v*q+S*K+M*Z,r[15]=y*x+v*I+S*V+M*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],_=e[3],g=e[7],m=e[11],f=e[15];return _*(+r*l*h-s*c*h-r*o*d+n*c*d+s*o*p-n*l*p)+g*(+t*l*p-t*c*d+r*a*d-s*a*p+s*c*u-r*l*u)+m*(+t*c*h-t*o*p-r*a*h+n*a*p+r*o*u-n*c*u)+f*(-s*o*u-t*l*h+t*o*d+s*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],_=e[12],g=e[13],m=e[14],f=e[15],y=h*m*c-g*d*c+g*l*p-o*m*p-h*l*f+o*d*f,v=_*d*c-u*m*c-_*l*p+a*m*p+u*l*f-a*d*f,S=u*g*c-_*h*c+_*o*p-a*g*p-u*o*f+a*h*f,M=_*h*l-u*g*l-_*o*d+a*g*d+u*o*m-a*h*m,w=t*y+n*v+s*S+r*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=y*T,e[1]=(g*d*r-h*m*r-g*s*p+n*m*p+h*s*f-n*d*f)*T,e[2]=(o*m*r-g*l*r+g*s*c-n*m*c-o*s*f+n*l*f)*T,e[3]=(h*l*r-o*d*r-h*s*c+n*d*c+o*s*p-n*l*p)*T,e[4]=v*T,e[5]=(u*m*r-_*d*r+_*s*p-t*m*p-u*s*f+t*d*f)*T,e[6]=(_*l*r-a*m*r-_*s*c+t*m*c+a*s*f-t*l*f)*T,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*p+t*l*p)*T,e[8]=S*T,e[9]=(_*h*r-u*g*r-_*n*p+t*g*p+u*n*f-t*h*f)*T,e[10]=(a*g*r-_*o*r+_*n*c-t*g*c-a*n*f+t*o*f)*T,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*p-t*o*p)*T,e[12]=M*T,e[13]=(u*g*s-_*h*s+_*n*d-t*g*d-u*n*m+t*h*m)*T,e[14]=(_*o*s-a*g*s-_*n*l+t*g*l+a*n*m-t*o*m)*T,e[15]=(a*h*s-u*o*s+u*n*l-t*h*l-a*n*d+t*o*d)*T,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,p=r*u,_=r*h,g=a*u,m=a*h,f=o*h,y=l*c,v=l*u,S=l*h,M=n.x,w=n.y,T=n.z;return s[0]=(1-(g+f))*M,s[1]=(p+S)*M,s[2]=(_-v)*M,s[3]=0,s[4]=(p-S)*w,s[5]=(1-(d+f))*w,s[6]=(m+y)*w,s[7]=0,s[8]=(_+v)*T,s[9]=(m-y)*T,s[10]=(1-(d+g))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=As.set(s[0],s[1],s[2]).length();const a=As.set(s[4],s[5],s[6]).length(),o=As.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Rn.copy(this);const c=1/r,u=1/a,h=1/o;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=h,Rn.elements[9]*=h,Rn.elements[10]*=h,t.setFromRotationMatrix(Rn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=ui){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let p,_;if(o===ui)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ba)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ui){const l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(a-r),d=(t+e)*c,p=(n+s)*u;let _,g;if(o===ui)_=(a+r)*h,g=-2*h;else if(o===Ba)_=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const As=new L,Rn=new Ne,gm=new L(0,0,0),_m=new L(1,1,1),yi=new L,aa=new L,sn=new L,du=new Ne,fu=new Xn;class Qa{constructor(e=0,t=0,n=0,s=Qa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return du.makeRotationFromQuaternion(e),this.setFromRotationMatrix(du,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fu.setFromEuler(this),this.setFromQuaternion(fu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qa.DEFAULT_ORDER="XYZ";class gd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vm=0;const pu=new L,bs=new Xn,ei=new Ne,oa=new L,xr=new L,xm=new L,ym=new Xn,mu=new L(1,0,0),gu=new L(0,1,0),_u=new L(0,0,1),Sm={type:"added"},vu={type:"removed"};class at extends Yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=at.DEFAULT_UP.clone();const e=new L,t=new Qa,n=new Xn,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ne},normalMatrix:{value:new ze}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=at.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new gd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(mu,e)}rotateY(e){return this.rotateOnAxis(gu,e)}rotateZ(e){return this.rotateOnAxis(_u,e)}translateOnAxis(e,t){return pu.copy(e).applyQuaternion(this.quaternion),this.position.add(pu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mu,e)}translateY(e){return this.translateOnAxis(gu,e)}translateZ(e){return this.translateOnAxis(_u,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?oa.copy(e):oa.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(xr,oa,this.up):ei.lookAt(oa,xr,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),bs.setFromRotationMatrix(ei),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Sm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(vu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let s=0,r=this.children.length;s<r;s++){const a=this.children[s].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,xm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,ym,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}at.DEFAULT_UP=new L(0,1,0);at.DEFAULT_MATRIX_AUTO_UPDATE=!0;at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new L,ti=new L,wo=new L,ni=new L,ws=new L,Rs=new L,xu=new L,Ro=new L,Co=new L,Po=new L;let la=!1;class Ln{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Cn.subVectors(e,t),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Cn.subVectors(s,t),ti.subVectors(n,t),wo.subVectors(e,t);const a=Cn.dot(Cn),o=Cn.dot(ti),l=Cn.dot(wo),c=ti.dot(ti),u=ti.dot(wo),h=a*c-o*o;if(h===0)return r.set(-2,-1,-1);const d=1/h,p=(c*l-o*u)*d,_=(a*u-o*l)*d;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ni),ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getUV(e,t,n,s,r,a,o,l){return la===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),la=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ni),l.setScalar(0),l.addScaledVector(r,ni.x),l.addScaledVector(a,ni.y),l.addScaledVector(o,ni.z),l}static isFrontFacing(e,t,n,s){return Cn.subVectors(n,t),ti.subVectors(e,t),Cn.cross(ti).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Cn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ln.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return la===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),la=!0),Ln.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return Ln.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;ws.subVectors(s,n),Rs.subVectors(r,n),Ro.subVectors(e,n);const l=ws.dot(Ro),c=Rs.dot(Ro);if(l<=0&&c<=0)return t.copy(n);Co.subVectors(e,s);const u=ws.dot(Co),h=Rs.dot(Co);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ws,a);Po.subVectors(e,r);const p=ws.dot(Po),_=Rs.dot(Po);if(_>=0&&p<=_)return t.copy(r);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Rs,o);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return xu.subVectors(r,s),o=(h-u)/(h-u+(p-_)),t.copy(s).addScaledVector(xu,o);const f=1/(m+g+d);return a=g*f,o=d*f,t.copy(n).addScaledVector(ws,a).addScaledVector(Rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Mm=0;class Mn extends Yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=Ws,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xh,this.blendDst=qh,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_o,this.stencilZFail=_o,this.stencilZPass=_o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const _d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},ca={h:0,s:0,l:0};function Lo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Te){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=wn.workingColorSpace){return this.r=e,this.g=t,this.b=n,wn.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=wn.workingColorSpace){if(e=zl(e,1),t=Nt(t,0,1),n=Nt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Lo(a,r,e+1/3),this.g=Lo(a,r,e),this.b=Lo(a,r,e-1/3)}return wn.toWorkingColorSpace(this,s),this}setStyle(e,t=Te){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Te){const n=_d[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}copyLinearToSRGB(e){return this.r=xo(e.r),this.g=xo(e.g),this.b=xo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Te){return wn.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Nt(Ht.r*255,0,255))*65536+Math.round(Nt(Ht.g*255,0,255))*256+Math.round(Nt(Ht.b*255,0,255))}getHexString(e=Te){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wn.workingColorSpace){wn.fromWorkingColorSpace(Ht.copy(this),t);const n=Ht.r,s=Ht.g,r=Ht.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=wn.workingColorSpace){return wn.fromWorkingColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Te){wn.fromWorkingColorSpace(Ht.copy(this),e);const t=Ht.r,n=Ht.g,s=Ht.b;return e!==Te?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Pn),Pn.h+=e,Pn.s+=t,Pn.l+=n,this.setHSL(Pn.h,Pn.s,Pn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pn),e.getHSL(ca);const n=Dr(Pn.h,ca.h,t),s=Dr(Pn.s,ca.s,t),r=Dr(Pn.l,ca.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new ve;ve.NAMES=_d;class ss extends Mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new L,ua=new pe;class Tt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=pl,this.updateRange={offset:0,count:-1},this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ua.fromBufferAttribute(this,t),ua.applyMatrix3(e),this.setXY(t,ua.x,ua.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ze(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),s=Ze(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),s=Ze(s,this.array),r=Ze(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class vd extends Tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class xd extends Tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class En extends Tt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Em=0;const dn=new Ne,Do=new at,Cs=new L,rn=new mi,yr=new mi,Pt=new L;class An extends Yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dd(e)?xd:vd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return Do.lookAt(e),Do.updateMatrix(),this.applyMatrix4(Do.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new En(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];yr.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(rn.min,yr.min),rn.expandByPoint(Pt),Pt.addVectors(rn.max,yr.max),rn.expandByPoint(Pt)):(rn.expandByPoint(yr.min),rn.expandByPoint(yr.max))}rn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Pt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Pt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Pt.fromBufferAttribute(o,c),l&&(Cs.fromBufferAttribute(e,c),Pt.add(Cs)),s=Math.max(s,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<o;A++)c[A]=new L,u[A]=new L;const h=new L,d=new L,p=new L,_=new pe,g=new pe,m=new pe,f=new L,y=new L;function v(A,W,q){h.fromArray(s,A*3),d.fromArray(s,W*3),p.fromArray(s,q*3),_.fromArray(a,A*2),g.fromArray(a,W*2),m.fromArray(a,q*2),d.sub(h),p.sub(h),g.sub(_),m.sub(_);const I=1/(g.x*m.y-m.x*g.y);isFinite(I)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(I),y.copy(p).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(I),c[A].add(f),c[W].add(f),c[q].add(f),u[A].add(y),u[W].add(y),u[q].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let A=0,W=S.length;A<W;++A){const q=S[A],I=q.start,O=q.count;for(let N=I,K=I+O;N<K;N+=3)v(n[N+0],n[N+1],n[N+2])}const M=new L,w=new L,T=new L,C=new L;function x(A){T.fromArray(r,A*3),C.copy(T);const W=c[A];M.copy(W),M.sub(T.multiplyScalar(T.dot(W))).normalize(),w.crossVectors(C,W);const I=w.dot(u[A])<0?-1:1;l[A*4]=M.x,l[A*4+1]=M.y,l[A*4+2]=M.z,l[A*4+3]=I}for(let A=0,W=S.length;A<W;++A){const q=S[A],I=q.start,O=q.count;for(let N=I,K=I+O;N<K;N+=3)x(n[N+0]),x(n[N+1]),x(n[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*u;for(let f=0;f<u;f++)d[_++]=c[p++]}return new Tt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new An,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yu=new Ne,Yi=new Yr,ha=new jn,Su=new L,Ps=new L,Ls=new L,Ds=new L,Io=new L,da=new L,fa=new pe,pa=new pe,ma=new pe,Mu=new L,Eu=new L,Tu=new L,ga=new L,_a=new L;class dt extends at{constructor(e=new An,t=new ss){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){da.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Io.fromBufferAttribute(h,e),a?da.addScaledVector(Io,u):da.addScaledVector(Io.sub(t),u))}t.add(da)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(r),Yi.copy(e.ray).recast(e.near),!(ha.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(ha,Su)===null||Yi.origin.distanceToSquared(Su)>(e.far-e.near)**2))&&(yu.copy(r).invert(),Yi.copy(e.ray).applyMatrix4(yu),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=a[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=y,M=v;S<M;S+=3){const w=o.getX(S),T=o.getX(S+1),C=o.getX(S+2);s=va(this,f,e,n,c,u,h,w,T,C),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const y=o.getX(m),v=o.getX(m+1),S=o.getX(m+2);s=va(this,a,e,n,c,u,h,y,v,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=a[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=y,M=v;S<M;S+=3){const w=S,T=S+1,C=S+2;s=va(this,f,e,n,c,u,h,w,T,C),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const y=m,v=m+1,S=m+2;s=va(this,a,e,n,c,u,h,y,v,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Tm(i,e,t,n,s,r,a,o){let l;if(e.side===It?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Gn,o),l===null)return null;_a.copy(o),_a.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(_a);return c<t.near||c>t.far?null:{distance:c,point:_a.clone(),object:i}}function va(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ps),i.getVertexPosition(l,Ls),i.getVertexPosition(c,Ds);const u=Tm(i,e,t,n,Ps,Ls,Ds,ga);if(u){s&&(fa.fromBufferAttribute(s,o),pa.fromBufferAttribute(s,l),ma.fromBufferAttribute(s,c),u.uv=Ln.getInterpolation(ga,Ps,Ls,Ds,fa,pa,ma,new pe)),r&&(fa.fromBufferAttribute(r,o),pa.fromBufferAttribute(r,l),ma.fromBufferAttribute(r,c),u.uv1=Ln.getInterpolation(ga,Ps,Ls,Ds,fa,pa,ma,new pe),u.uv2=u.uv1),a&&(Mu.fromBufferAttribute(a,o),Eu.fromBufferAttribute(a,l),Tu.fromBufferAttribute(a,c),u.normal=Ln.getInterpolation(ga,Ps,Ls,Ds,Mu,Eu,Tu,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new L,materialIndex:0};Ln.getNormal(Ps,Ls,Ds,h.normal),u.face=h}return u}class jr extends An{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new En(c,3)),this.setAttribute("normal",new En(u,3)),this.setAttribute("uv",new En(h,2));function _(g,m,f,y,v,S,M,w,T,C,x){const A=S/T,W=M/C,q=S/2,I=M/2,O=w/2,N=T+1,K=C+1;let V=0,Y=0;const Q=new L;for(let Z=0;Z<K;Z++){const z=Z*W-I;for(let X=0;X<N;X++){const he=X*A-q;Q[g]=he*y,Q[m]=z*v,Q[f]=O,c.push(Q.x,Q.y,Q.z),Q[g]=0,Q[m]=0,Q[f]=w>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(X/T),h.push(1-Z/C),V+=1}}for(let Z=0;Z<C;Z++)for(let z=0;z<T;z++){const X=d+z+N*Z,he=d+z+N*(Z+1),re=d+(z+1)+N*(Z+1),le=d+(z+1)+N*Z;l.push(X,he,le),l.push(he,re,le),Y+=6}o.addGroup(p,Y,x),p+=Y,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function nr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Kt(i){const e={};for(let t=0;t<i.length;t++){const n=nr(i[t]);for(const s in n)e[s]=n[s]}return e}function Am(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function yd(i){return i.getRenderTarget()===null?i.outputColorSpace:Wn}const bm={clone:nr,merge:Kt};var wm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ot extends Mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wm,this.fragmentShader=Rm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=nr(e.uniforms),this.uniformsGroups=Am(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let kl=class extends at{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=ui}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class Ft extends kl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tr*2*Math.atan(Math.tan(Lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Lr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Is=-90,Us=1;class Cm extends at{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const s=new Ft(Is,Us,e,t);s.layers=this.layers,this.add(s);const r=new Ft(Is,Us,e,t);r.layers=this.layers,this.add(r);const a=new Ft(Is,Us,e,t);a.layers=this.layers,this.add(a);const o=new Ft(Is,Us,e,t);o.layers=this.layers,this.add(o);const l=new Ft(Is,Us,e,t);l.layers=this.layers,this.add(l);const c=new Ft(Is,Us,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===ui)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ba)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,o,l,c]=this.children,u=e.getRenderTarget(),h=e.xr.enabled;e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,s),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Sd extends St{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ks,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pm extends At{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Ir("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===di?Te:os),this.texture=new Sd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Lt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new jr(5,5,5),r=new ot({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:zt});r.uniforms.tEquirect.value=t;const a=new dt(s,r),o=t.minFilter;return t.minFilter===Ni&&(t.minFilter=Lt),new Cm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Uo=new L,Lm=new L,Dm=new ze;class Ai{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Uo.subVectors(n,t).cross(Lm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Uo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Dm.getNormalMatrix(e),s=this.coplanarPoint(Uo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new jn,xa=new L;class Hl{constructor(e=new Ai,t=new Ai,n=new Ai,s=new Ai,r=new Ai,a=new Ai){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ui){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],p=s[8],_=s[9],g=s[10],m=s[11],f=s[12],y=s[13],v=s[14],S=s[15];if(n[0].setComponents(l-r,d-c,m-p,S-f).normalize(),n[1].setComponents(l+r,d+c,m+p,S+f).normalize(),n[2].setComponents(l+a,d+u,m+_,S+y).normalize(),n[3].setComponents(l-a,d-u,m-_,S-y).normalize(),n[4].setComponents(l-o,d-h,m-g,S-v).normalize(),t===ui)n[5].setComponents(l+o,d+h,m+g,S+v).normalize();else if(t===Ba)n[5].setComponents(o,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){return ji.center.set(0,0,0),ji.radius=.7071067811865476,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(xa.x=s.normal.x>0?e.max.x:e.min.x,xa.y=s.normal.y>0?e.max.y:e.min.y,xa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Md(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Im(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,u){const h=c.array,d=c.usage,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,h,d),c.onUploadCallback();let _;if(h instanceof Float32Array)_=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=i.SHORT;else if(h instanceof Uint32Array)_=i.UNSIGNED_INT;else if(h instanceof Int32Array)_=i.INT;else if(h instanceof Int8Array)_=i.BYTE;else if(h instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const d=u.array,p=u.updateRange;i.bindBuffer(h,c),p.count===-1?i.bufferSubData(h,0,d):(t?i.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,s(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class ki extends An{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,p=[],_=[],g=[],m=[];for(let f=0;f<u;f++){const y=f*d-a;for(let v=0;v<c;v++){const S=v*h-r;_.push(S,-y,0),g.push(0,0,1),m.push(v/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const v=y+c*f,S=y+c*(f+1),M=y+1+c*(f+1),w=y+1+c*f;p.push(v,S,w),p.push(S,M,w)}this.setIndex(p),this.setAttribute("position",new En(_,3)),this.setAttribute("normal",new En(g,3)),this.setAttribute("uv",new En(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ki(e.width,e.height,e.widthSegments,e.heightSegments)}}var Um=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Om=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Nm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,zm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,km=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xm=`#ifdef USE_IRIDESCENCE
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
#endif`,qm=`#ifdef USE_BUMPMAP
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
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,eg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,tg=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
} // validated`,ng=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ig=`vec3 transformedNormal = objectNormal;
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
#endif`,sg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ag=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,og=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lg="gl_FragColor = linearToOutputTexel( gl_FragColor );",cg=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ug=`#ifdef USE_ENVMAP
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
#endif`,hg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dg=`#ifdef USE_ENVMAP
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
#endif`,fg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pg=`#ifdef USE_ENVMAP
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
#endif`,mg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_g=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xg=`#ifdef USE_GRADIENTMAP
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
}`,yg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Sg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tg=`uniform bool receiveShadow;
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
#endif`,Ag=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bg=`ToonMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pg=`PhysicalMaterial material;
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
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Lg=`struct PhysicalMaterial {
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
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
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
}`,Dg=`
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
#endif`,Ig=`#if defined( RE_IndirectDiffuse )
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
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ug=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Og=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ng=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Bg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,zg=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,kg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vg=`#if defined( USE_POINTS_UV )
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
#endif`,Gg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qg=`#ifdef USE_MORPHNORMALS
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
#endif`,Yg=`#ifdef USE_MORPHTARGETS
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
#endif`,jg=`#ifdef USE_MORPHTARGETS
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
#endif`,$g=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
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
vec3 geometryNormal = normal;`,Kg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,e_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
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
#endif`,t_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,n_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,i_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,s_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,r_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,a_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,o_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,l_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,c_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,u_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,h_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,d_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,f_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,p_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,m_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,g_=`float getShadowMask() {
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
}`,__=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,v_=`#ifdef USE_SKINNING
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
#endif`,x_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y_=`#ifdef USE_SKINNING
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
#endif`,S_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,M_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,E_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,T_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,A_=`#ifdef USE_TRANSMISSION
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
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,b_=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
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
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
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
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,w_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
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
#endif`,R_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
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
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
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
#endif`,C_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
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
#endif`,P_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const L_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,D_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U_=`#ifdef ENVMAP_TYPE_CUBE
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
	#include <colorspace_fragment>
}`,O_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F_=`#include <common>
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
}`,B_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,z_=`#define DISTANCE
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
}`,k_=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,H_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,V_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G_=`uniform float scale;
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
}`,W_=`uniform vec3 diffuse;
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,X_=`#include <common>
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
}`,q_=`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y_=`#define LAMBERT
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
}`,j_=`#define LAMBERT
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$_=`#define MATCAP
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
}`,K_=`#define MATCAP
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z_=`#define NORMAL
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
}`,J_=`#define NORMAL
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
}`,Q_=`#define PHONG
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
}`,e0=`#define PHONG
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t0=`#define STANDARD
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
}`,n0=`#define STANDARD
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
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i0=`#define TOON
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
}`,s0=`#define TOON
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r0=`uniform float size;
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
}`,a0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o0=`#include <common>
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
}`,l0=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,c0=`uniform float rotation;
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
}`,u0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:Um,alphahash_pars_fragment:Om,alphamap_fragment:Nm,alphamap_pars_fragment:Fm,alphatest_fragment:Bm,alphatest_pars_fragment:zm,aomap_fragment:km,aomap_pars_fragment:Hm,begin_vertex:Vm,beginnormal_vertex:Gm,bsdfs:Wm,iridescence_fragment:Xm,bumpmap_pars_fragment:qm,clipping_planes_fragment:Ym,clipping_planes_pars_fragment:jm,clipping_planes_pars_vertex:$m,clipping_planes_vertex:Km,color_fragment:Zm,color_pars_fragment:Jm,color_pars_vertex:Qm,color_vertex:eg,common:tg,cube_uv_reflection_fragment:ng,defaultnormal_vertex:ig,displacementmap_pars_vertex:sg,displacementmap_vertex:rg,emissivemap_fragment:ag,emissivemap_pars_fragment:og,colorspace_fragment:lg,colorspace_pars_fragment:cg,envmap_fragment:ug,envmap_common_pars_fragment:hg,envmap_pars_fragment:dg,envmap_pars_vertex:fg,envmap_physical_pars_fragment:Ag,envmap_vertex:pg,fog_vertex:mg,fog_pars_vertex:gg,fog_fragment:_g,fog_pars_fragment:vg,gradientmap_pars_fragment:xg,lightmap_fragment:yg,lightmap_pars_fragment:Sg,lights_lambert_fragment:Mg,lights_lambert_pars_fragment:Eg,lights_pars_begin:Tg,lights_toon_fragment:bg,lights_toon_pars_fragment:wg,lights_phong_fragment:Rg,lights_phong_pars_fragment:Cg,lights_physical_fragment:Pg,lights_physical_pars_fragment:Lg,lights_fragment_begin:Dg,lights_fragment_maps:Ig,lights_fragment_end:Ug,logdepthbuf_fragment:Og,logdepthbuf_pars_fragment:Ng,logdepthbuf_pars_vertex:Fg,logdepthbuf_vertex:Bg,map_fragment:zg,map_pars_fragment:kg,map_particle_fragment:Hg,map_particle_pars_fragment:Vg,metalnessmap_fragment:Gg,metalnessmap_pars_fragment:Wg,morphcolor_vertex:Xg,morphnormal_vertex:qg,morphtarget_pars_vertex:Yg,morphtarget_vertex:jg,normal_fragment_begin:$g,normal_fragment_maps:Kg,normal_pars_fragment:Zg,normal_pars_vertex:Jg,normal_vertex:Qg,normalmap_pars_fragment:e_,clearcoat_normal_fragment_begin:t_,clearcoat_normal_fragment_maps:n_,clearcoat_pars_fragment:i_,iridescence_pars_fragment:s_,opaque_fragment:r_,packing:a_,premultiplied_alpha_fragment:o_,project_vertex:l_,dithering_fragment:c_,dithering_pars_fragment:u_,roughnessmap_fragment:h_,roughnessmap_pars_fragment:d_,shadowmap_pars_fragment:f_,shadowmap_pars_vertex:p_,shadowmap_vertex:m_,shadowmask_pars_fragment:g_,skinbase_vertex:__,skinning_pars_vertex:v_,skinning_vertex:x_,skinnormal_vertex:y_,specularmap_fragment:S_,specularmap_pars_fragment:M_,tonemapping_fragment:E_,tonemapping_pars_fragment:T_,transmission_fragment:A_,transmission_pars_fragment:b_,uv_pars_fragment:w_,uv_pars_vertex:R_,uv_vertex:C_,worldpos_vertex:P_,background_vert:L_,background_frag:D_,backgroundCube_vert:I_,backgroundCube_frag:U_,cube_vert:O_,cube_frag:N_,depth_vert:F_,depth_frag:B_,distanceRGBA_vert:z_,distanceRGBA_frag:k_,equirect_vert:H_,equirect_frag:V_,linedashed_vert:G_,linedashed_frag:W_,meshbasic_vert:X_,meshbasic_frag:q_,meshlambert_vert:Y_,meshlambert_frag:j_,meshmatcap_vert:$_,meshmatcap_frag:K_,meshnormal_vert:Z_,meshnormal_frag:J_,meshphong_vert:Q_,meshphong_frag:e0,meshphysical_vert:t0,meshphysical_frag:n0,meshtoon_vert:i0,meshtoon_frag:s0,points_vert:r0,points_frag:a0,shadow_vert:o0,shadow_frag:l0,sprite_vert:c0,sprite_frag:u0},oe={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Fn={basic:{uniforms:Kt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Kt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new ve(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Kt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Kt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Kt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new ve(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Kt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Kt([oe.points,oe.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Kt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Kt([oe.common,oe.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Kt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Kt([oe.sprite,oe.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Kt([oe.common,oe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Kt([oe.lights,oe.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Fn.physical={uniforms:Kt([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const ya={r:0,b:0,g:0};function h0(i,e,t,n,s,r,a){const o=new ve(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function _(m,f){let y=!1,v=f.isScene===!0?f.background:null;switch(v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?g(o,l):v&&v.isColor&&(g(v,1),y=!0),i.xr.getEnvironmentBlendMode()){case"opaque":y=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),y=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),y=!0;break}(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Za)?(u===void 0&&(u=new dt(new jr(1,1,1),new ot({name:"BackgroundCubeMaterial",uniforms:nr(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=v.colorSpace!==Te,(h!==v||d!==v.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new dt(new ki(2,2),new ot({name:"BackgroundMaterial",uniforms:nr(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=v.colorSpace!==Te,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,f){m.getRGB(ya,yd(i)),n.buffers.color.setClear(ya.r,ya.g,ya.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:_}}function d0(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null);let c=l,u=!1;function h(O,N,K,V,Y){let Q=!1;if(a){const Z=g(V,K,N);c!==Z&&(c=Z,p(c.object)),Q=f(O,V,K,Y),Q&&y(O,V,K,Y)}else{const Z=N.wireframe===!0;(c.geometry!==V.id||c.program!==K.id||c.wireframe!==Z)&&(c.geometry=V.id,c.program=K.id,c.wireframe=Z,Q=!0)}Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(Q||u)&&(u=!1,C(O,N,K,V),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(O){return n.isWebGL2?i.bindVertexArray(O):r.bindVertexArrayOES(O)}function _(O){return n.isWebGL2?i.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function g(O,N,K){const V=K.wireframe===!0;let Y=o[O.id];Y===void 0&&(Y={},o[O.id]=Y);let Q=Y[N.id];Q===void 0&&(Q={},Y[N.id]=Q);let Z=Q[V];return Z===void 0&&(Z=m(d()),Q[V]=Z),Z}function m(O){const N=[],K=[],V=[];for(let Y=0;Y<s;Y++)N[Y]=0,K[Y]=0,V[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:K,attributeDivisors:V,object:O,attributes:{},index:null}}function f(O,N,K,V){const Y=c.attributes,Q=N.attributes;let Z=0;const z=K.getAttributes();for(const X in z)if(z[X].location>=0){const re=Y[X];let le=Q[X];if(le===void 0&&(X==="instanceMatrix"&&O.instanceMatrix&&(le=O.instanceMatrix),X==="instanceColor"&&O.instanceColor&&(le=O.instanceColor)),re===void 0||re.attribute!==le||le&&re.data!==le.data)return!0;Z++}return c.attributesNum!==Z||c.index!==V}function y(O,N,K,V){const Y={},Q=N.attributes;let Z=0;const z=K.getAttributes();for(const X in z)if(z[X].location>=0){let re=Q[X];re===void 0&&(X==="instanceMatrix"&&O.instanceMatrix&&(re=O.instanceMatrix),X==="instanceColor"&&O.instanceColor&&(re=O.instanceColor));const le={};le.attribute=re,re&&re.data&&(le.data=re.data),Y[X]=le,Z++}c.attributes=Y,c.attributesNum=Z,c.index=V}function v(){const O=c.newAttributes;for(let N=0,K=O.length;N<K;N++)O[N]=0}function S(O){M(O,0)}function M(O,N){const K=c.newAttributes,V=c.enabledAttributes,Y=c.attributeDivisors;K[O]=1,V[O]===0&&(i.enableVertexAttribArray(O),V[O]=1),Y[O]!==N&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,N),Y[O]=N)}function w(){const O=c.newAttributes,N=c.enabledAttributes;for(let K=0,V=N.length;K<V;K++)N[K]!==O[K]&&(i.disableVertexAttribArray(K),N[K]=0)}function T(O,N,K,V,Y,Q,Z){Z===!0?i.vertexAttribIPointer(O,N,K,Y,Q):i.vertexAttribPointer(O,N,K,V,Y,Q)}function C(O,N,K,V){if(n.isWebGL2===!1&&(O.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const Y=V.attributes,Q=K.getAttributes(),Z=N.defaultAttributeValues;for(const z in Q){const X=Q[z];if(X.location>=0){let he=Y[z];if(he===void 0&&(z==="instanceMatrix"&&O.instanceMatrix&&(he=O.instanceMatrix),z==="instanceColor"&&O.instanceColor&&(he=O.instanceColor)),he!==void 0){const re=he.normalized,le=he.itemSize,xe=t.get(he);if(xe===void 0)continue;const Re=xe.buffer,ye=xe.type,qe=xe.bytesPerElement,Ot=n.isWebGL2===!0&&(ye===i.INT||ye===i.UNSIGNED_INT||he.gpuType===nd);if(he.isInterleavedBufferAttribute){const De=he.data,B=De.stride,Mt=he.offset;if(De.isInstancedInterleavedBuffer){for(let Se=0;Se<X.locationSize;Se++)M(X.location+Se,De.meshPerAttribute);O.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let Se=0;Se<X.locationSize;Se++)S(X.location+Se);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let Se=0;Se<X.locationSize;Se++)T(X.location+Se,le/X.locationSize,ye,re,B*qe,(Mt+le/X.locationSize*Se)*qe,Ot)}else{if(he.isInstancedBufferAttribute){for(let De=0;De<X.locationSize;De++)M(X.location+De,he.meshPerAttribute);O.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let De=0;De<X.locationSize;De++)S(X.location+De);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let De=0;De<X.locationSize;De++)T(X.location+De,le/X.locationSize,ye,re,le*qe,le/X.locationSize*De*qe,Ot)}}else if(Z!==void 0){const re=Z[z];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(X.location,re);break;case 3:i.vertexAttrib3fv(X.location,re);break;case 4:i.vertexAttrib4fv(X.location,re);break;default:i.vertexAttrib1fv(X.location,re)}}}}w()}function x(){q();for(const O in o){const N=o[O];for(const K in N){const V=N[K];for(const Y in V)_(V[Y].object),delete V[Y];delete N[K]}delete o[O]}}function A(O){if(o[O.id]===void 0)return;const N=o[O.id];for(const K in N){const V=N[K];for(const Y in V)_(V[Y].object),delete V[Y];delete N[K]}delete o[O.id]}function W(O){for(const N in o){const K=o[N];if(K[O.id]===void 0)continue;const V=K[O.id];for(const Y in V)_(V[Y].object),delete V[Y];delete K[O.id]}}function q(){I(),u=!0,c!==l&&(c=l,p(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:q,resetDefaultState:I,dispose:x,releaseStatesOfGeometry:A,releaseStatesOfProgram:W,initAttributes:v,enableAttribute:S,disableUnusedAttributes:w}}function f0(i,e,t,n){const s=n.isWebGL2;let r;function a(c){r=c}function o(c,u){i.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let d,p;if(s)d=i,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,c,u,h),t.update(u,r,h)}this.setMode=a,this.render=o,this.renderInstances=l}function p0(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,S=a||e.has("OES_texture_float"),M=v&&S,w=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:M,maxSamples:w}}function m0(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Ai,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const y=r?0:n,v=y*4;let S=f.clippingState||null;l.value=S,S=u(_,d,v,p);for(let M=0;M!==v;++M)S[M]=t[M];f.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const f=p+g*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,S=p;v!==g;++v,S+=4)a.copy(h[v]).applyMatrix4(y,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function g0(i){let e=new WeakMap;function t(a,o){return o===ul?a.mapping=Ks:o===hl&&(a.mapping=Zs),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===ul||o===hl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Pm(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Vl extends kl{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Hs=4,Au=[.125,.215,.35,.446,.526,.582],is=20,Oo=new Vl,bu=new ve;let No=null;const es=(1+Math.sqrt(5))/2,Os=1/es,wu=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,es,Os),new L(0,es,-Os),new L(Os,0,es),new L(-Os,0,es),new L(es,Os,0),new L(-es,Os,0)];class Ru{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){No=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(No),e.scissorTest=!1,Sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ks||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),No=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:Qs,format:vn,colorSpace:Wn,depthBuffer:!1},s=Cu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_0(r)),this._blurMaterial=v0(r,e,t)}return s}_compileMaterial(e){const t=new dt(this._lodPlanes[0],e);this._renderer.compile(t,Oo)}_sceneToCubeUV(e,t,n,s){const o=new Ft(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(bu),u.toneMapping=hi,u.autoClear=!1;const p=new ss({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),_=new dt(new jr,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(bu),g=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):y===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const v=this._cubeSize;Sa(s,y*v,f>2?v:0,v,v),u.setRenderTarget(s),g&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ks||e.mapping===Zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new dt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Sa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Oo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=wu[(s-1)%wu.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new dt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*is-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):is;m>is&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${is}`);const f=[];let y=0;for(let T=0;T<is;++T){const C=T/g,x=Math.exp(-C*C/2);f.push(x),T===0?y+=x:T<m&&(y+=2*x)}for(let T=0;T<f.length;T++)f[T]=f[T]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-n;const S=this._sizeLods[s],M=3*S*(s>v-Hs?s-v+Hs:0),w=4*(this._cubeSize-S);Sa(t,M,w,3*S,2*S),l.setRenderTarget(t),l.render(h,Oo)}}function _0(i){const e=[],t=[],n=[];let s=i;const r=i-Hs+1+Au.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Hs?l=Au[a-i+Hs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,g=3,m=2,f=1,y=new Float32Array(g*_*p),v=new Float32Array(m*_*p),S=new Float32Array(f*_*p);for(let w=0;w<p;w++){const T=w%3*2/3-1,C=w>2?0:-1,x=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];y.set(x,g*_*w),v.set(d,m*_*w);const A=[w,w,w,w,w,w];S.set(A,f*_*w)}const M=new An;M.setAttribute("position",new Tt(y,g)),M.setAttribute("uv",new Tt(v,m)),M.setAttribute("faceIndex",new Tt(S,f)),e.push(M),s>Hs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Cu(i,e,t){const n=new At(i,e,t);return n.texture.mapping=Za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function v0(i,e,t){const n=new Float32Array(is),s=new L(0,1,0);return new ot({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gl(),fragmentShader:`

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
		`,blending:zt,depthTest:!1,depthWrite:!1})}function Pu(){return new ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gl(),fragmentShader:`

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
		`,blending:zt,depthTest:!1,depthWrite:!1})}function Lu(){return new ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zt,depthTest:!1,depthWrite:!1})}function Gl(){return`

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
	`}function x0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ul||l===hl,u=l===Ks||l===Zs;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Ru(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new Ru(i));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function y0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function S0(i,e,t,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let m=0,f=g.length;m<f;m++)e.remove(g[m])}d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,f=g.length;m<f;m++)e.update(g[m],i.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,_=h.attributes.position;let g=0;if(p!==null){const y=p.array;g=p.version;for(let v=0,S=y.length;v<S;v+=3){const M=y[v+0],w=y[v+1],T=y[v+2];d.push(M,w,w,T,T,M)}}else if(_!==void 0){const y=_.array;g=_.version;for(let v=0,S=y.length/3-1;v<S;v+=3){const M=v+0,w=v+1,T=v+2;d.push(M,w,w,T,T,M)}}else return;const m=new(dd(d)?xd:vd)(d,1);m.version=g;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function M0(i,e,t,n){const s=n.isWebGL2;let r;function a(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,p){i.drawElements(r,p,o,d*l),t.update(p,r,1)}function h(d,p,_){if(_===0)return;let g,m;if(s)g=i,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,p,o,d*l,_),t.update(p,r,_)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function E0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function T0(i,e){return i[0]-e[0]}function A0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function b0(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,a=new je,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let m=r.get(u);if(m===void 0||m.count!==g){let N=function(){I.dispose(),r.delete(u),u.removeEventListener("dispose",N)};var p=N;m!==void 0&&m.texture.dispose();const v=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let x=0;v===!0&&(x=1),S===!0&&(x=2),M===!0&&(x=3);let A=u.attributes.position.count*x,W=1;A>e.maxTextureSize&&(W=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const q=new Float32Array(A*W*4*g),I=new md(q,A,W,g);I.type=ci,I.needsUpdate=!0;const O=x*4;for(let K=0;K<g;K++){const V=w[K],Y=T[K],Q=C[K],Z=A*W*4*K;for(let z=0;z<V.count;z++){const X=z*O;v===!0&&(a.fromBufferAttribute(V,z),q[Z+X+0]=a.x,q[Z+X+1]=a.y,q[Z+X+2]=a.z,q[Z+X+3]=0),S===!0&&(a.fromBufferAttribute(Y,z),q[Z+X+4]=a.x,q[Z+X+5]=a.y,q[Z+X+6]=a.z,q[Z+X+7]=0),M===!0&&(a.fromBufferAttribute(Q,z),q[Z+X+8]=a.x,q[Z+X+9]=a.y,q[Z+X+10]=a.z,q[Z+X+11]=Q.itemSize===4?a.w:1)}}m={count:g,texture:I,size:new pe(A,W)},r.set(u,m),u.addEventListener("dispose",N)}let f=0;for(let v=0;v<d.length;v++)f+=d[v];const y=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(i,"morphTargetBaseInfluence",y),h.getUniforms().setValue(i,"morphTargetInfluences",d),h.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const _=d===void 0?0:d.length;let g=n[u.id];if(g===void 0||g.length!==_){g=[];for(let S=0;S<_;S++)g[S]=[S,0];n[u.id]=g}for(let S=0;S<_;S++){const M=g[S];M[0]=S,M[1]=d[S]}g.sort(A0);for(let S=0;S<8;S++)S<_&&g[S][1]?(o[S][0]=g[S][0],o[S][1]=g[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(T0);const m=u.morphAttributes.position,f=u.morphAttributes.normal;let y=0;for(let S=0;S<8;S++){const M=o[S],w=M[0],T=M[1];w!==Number.MAX_SAFE_INTEGER&&T?(m&&u.getAttribute("morphTarget"+S)!==m[w]&&u.setAttribute("morphTarget"+S,m[w]),f&&u.getAttribute("morphNormal"+S)!==f[w]&&u.setAttribute("morphNormal"+S,f[w]),s[S]=T,y+=T):(m&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),f&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),s[S]=0)}const v=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(i,"morphTargetBaseInfluence",v),h.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function w0(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Ed=new St,Td=new md,Ad=new pm,bd=new Sd,Du=[],Iu=[],Uu=new Float32Array(16),Ou=new Float32Array(9),Nu=new Float32Array(4);function dr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Du[s];if(r===void 0&&(r=new Float32Array(s),Du[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function eo(i,e){let t=Iu[e];t===void 0&&(t=new Int32Array(e),Iu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function R0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function C0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2fv(this.addr,e),wt(t,e)}}function P0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;i.uniform3fv(this.addr,e),wt(t,e)}}function L0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4fv(this.addr,e),wt(t,e)}}function D0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,n))return;Nu.set(n),i.uniformMatrix2fv(this.addr,!1,Nu),wt(t,n)}}function I0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,n))return;Ou.set(n),i.uniformMatrix3fv(this.addr,!1,Ou),wt(t,n)}}function U0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,n))return;Uu.set(n),i.uniformMatrix4fv(this.addr,!1,Uu),wt(t,n)}}function O0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function N0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2iv(this.addr,e),wt(t,e)}}function F0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3iv(this.addr,e),wt(t,e)}}function B0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4iv(this.addr,e),wt(t,e)}}function z0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function k0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2uiv(this.addr,e),wt(t,e)}}function H0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3uiv(this.addr,e),wt(t,e)}}function V0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4uiv(this.addr,e),wt(t,e)}}function G0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||Ed,s)}function W0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ad,s)}function X0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||bd,s)}function q0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Td,s)}function Y0(i){switch(i){case 5126:return R0;case 35664:return C0;case 35665:return P0;case 35666:return L0;case 35674:return D0;case 35675:return I0;case 35676:return U0;case 5124:case 35670:return O0;case 35667:case 35671:return N0;case 35668:case 35672:return F0;case 35669:case 35673:return B0;case 5125:return z0;case 36294:return k0;case 36295:return H0;case 36296:return V0;case 35678:case 36198:case 36298:case 36306:case 35682:return G0;case 35679:case 36299:case 36307:return W0;case 35680:case 36300:case 36308:case 36293:return X0;case 36289:case 36303:case 36311:case 36292:return q0}}function j0(i,e){i.uniform1fv(this.addr,e)}function $0(i,e){const t=dr(e,this.size,2);i.uniform2fv(this.addr,t)}function K0(i,e){const t=dr(e,this.size,3);i.uniform3fv(this.addr,t)}function Z0(i,e){const t=dr(e,this.size,4);i.uniform4fv(this.addr,t)}function J0(i,e){const t=dr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Q0(i,e){const t=dr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ev(i,e){const t=dr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function tv(i,e){i.uniform1iv(this.addr,e)}function nv(i,e){i.uniform2iv(this.addr,e)}function iv(i,e){i.uniform3iv(this.addr,e)}function sv(i,e){i.uniform4iv(this.addr,e)}function rv(i,e){i.uniform1uiv(this.addr,e)}function av(i,e){i.uniform2uiv(this.addr,e)}function ov(i,e){i.uniform3uiv(this.addr,e)}function lv(i,e){i.uniform4uiv(this.addr,e)}function cv(i,e,t){const n=this.cache,s=e.length,r=eo(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Ed,r[a])}function uv(i,e,t){const n=this.cache,s=e.length,r=eo(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ad,r[a])}function hv(i,e,t){const n=this.cache,s=e.length,r=eo(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||bd,r[a])}function dv(i,e,t){const n=this.cache,s=e.length,r=eo(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Td,r[a])}function fv(i){switch(i){case 5126:return j0;case 35664:return $0;case 35665:return K0;case 35666:return Z0;case 35674:return J0;case 35675:return Q0;case 35676:return ev;case 5124:case 35670:return tv;case 35667:case 35671:return nv;case 35668:case 35672:return iv;case 35669:case 35673:return sv;case 5125:return rv;case 36294:return av;case 36295:return ov;case 36296:return lv;case 35678:case 36198:case 36298:case 36306:case 35682:return cv;case 35679:case 36299:case 36307:return uv;case 35680:case 36300:case 36308:case 36293:return hv;case 36289:case 36303:case 36311:case 36292:return dv}}class pv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Y0(t.type)}}class mv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=fv(t.type)}}class gv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Fo=/(\w+)(\])?(\[|\.)?/g;function Fu(i,e){i.seq.push(e),i.map[e.id]=e}function _v(i,e,t){const n=i.name,s=n.length;for(Fo.lastIndex=0;;){const r=Fo.exec(n),a=Fo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Fu(t,c===void 0?new pv(o,i,e):new mv(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new gv(o),Fu(t,h)),t=h}}}class La{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);_v(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Bu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let vv=0;function xv(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function yv(i){switch(i){case Wn:return["Linear","( value )"];case Te:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function zu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+xv(i.getShaderSource(e),a)}else return s}function Sv(i,e){const t=yv(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Mv(i,e){let t;switch(e){case xp:t="Linear";break;case yp:t="Reinhard";break;case Sp:t="OptimizedCineon";break;case Mp:t="ACESFilmic";break;case Ep:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ev(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(wr).join(`
`)}function Tv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Av(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function wr(i){return i!==""}function ku(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bv=/^[ \t]*#include +<([\w\d./]+)>/gm;function _l(i){return i.replace(bv,Rv)}const wv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Rv(i,e){let t=Ue[e];if(t===void 0){const n=wv.get(e);if(n!==void 0)t=Ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _l(t)}const Cv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vu(i){return i.replace(Cv,Pv)}function Pv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Lv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Wh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===sp?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function Dv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ks:case Zs:e="ENVMAP_TYPE_CUBE";break;case Za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Iv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function Uv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Qh:e="ENVMAP_BLENDING_MULTIPLY";break;case _p:e="ENVMAP_BLENDING_MIX";break;case vp:e="ENVMAP_BLENDING_ADD";break}return e}function Ov(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Nv(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Lv(t),c=Dv(t),u=Iv(t),h=Uv(t),d=Ov(t),p=t.isWebGL2?"":Ev(t),_=Tv(r),g=s.createProgram();let m,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(wr).join(`
`),m.length>0&&(m+=`
`),f=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(wr).join(`
`),f.length>0&&(f+=`
`)):(m=[Gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),f=[p,Gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?Ue.tonemapping_pars_fragment:"",t.toneMapping!==hi?Mv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,Sv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wr).join(`
`)),a=_l(a),a=ku(a,t),a=Hu(a,t),o=_l(o),o=ku(o,t),o=Hu(o,t),a=Vu(a),o=Vu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=y+m+a,S=y+f+o,M=Bu(s,s.VERTEX_SHADER,v),w=Bu(s,s.FRAGMENT_SHADER,S);if(s.attachShader(g,M),s.attachShader(g,w),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g),i.debug.checkShaderErrors){const x=s.getProgramInfoLog(g).trim(),A=s.getShaderInfoLog(M).trim(),W=s.getShaderInfoLog(w).trim();let q=!0,I=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,M,w);else{const O=zu(s,M,"vertex"),N=zu(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+O+`
`+N)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(A===""||W==="")&&(I=!1);I&&(this.diagnostics={runnable:q,programLog:x,vertexShader:{log:A,prefix:m},fragmentShader:{log:W,prefix:f}})}s.deleteShader(M),s.deleteShader(w);let T;this.getUniforms=function(){return T===void 0&&(T=new La(s,g)),T};let C;return this.getAttributes=function(){return C===void 0&&(C=Av(s,g)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vv++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=w,this}let Fv=0;class Bv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new zv(e),t.set(e,n)),n}}class zv{constructor(e){this.id=Fv++,this.code=e,this.usedTimes=0}}function kv(i,e,t,n,s,r,a){const o=new gd,l=new Bv,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return x===0?"uv":`uv${x}`}function m(x,A,W,q,I){const O=q.fog,N=I.geometry,K=x.isMeshStandardMaterial?q.environment:null,V=(x.isMeshStandardMaterial?t:e).get(x.envMap||K),Y=V&&V.mapping===Za?V.image.height:null,Q=_[x.type];x.precision!==null&&(p=s.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const Z=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,z=Z!==void 0?Z.length:0;let X=0;N.morphAttributes.position!==void 0&&(X=1),N.morphAttributes.normal!==void 0&&(X=2),N.morphAttributes.color!==void 0&&(X=3);let he,re,le,xe;if(Q){const nt=Fn[Q];he=nt.vertexShader,re=nt.fragmentShader}else he=x.vertexShader,re=x.fragmentShader,l.update(x),le=l.getVertexShaderID(x),xe=l.getFragmentShaderID(x);const Re=i.getRenderTarget(),ye=I.isInstancedMesh===!0,qe=!!x.map,Ot=!!x.matcap,De=!!V,B=!!x.aoMap,Mt=!!x.lightMap,Se=!!x.bumpMap,Pe=!!x.normalMap,Ae=!!x.displacementMap,et=!!x.emissiveMap,Fe=!!x.metalnessMap,Le=!!x.roughnessMap,Xe=x.anisotropy>0,Et=x.clearcoat>0,Rt=x.iridescence>0,R=x.sheen>0,E=x.transmission>0,H=Xe&&!!x.anisotropyMap,ne=Et&&!!x.clearcoatMap,ee=Et&&!!x.clearcoatNormalMap,ie=Et&&!!x.clearcoatRoughnessMap,_e=Rt&&!!x.iridescenceMap,se=Rt&&!!x.iridescenceThicknessMap,G=R&&!!x.sheenColorMap,P=R&&!!x.sheenRoughnessMap,J=!!x.specularMap,fe=!!x.specularColorMap,ae=!!x.specularIntensityMap,de=E&&!!x.transmissionMap,Ce=E&&!!x.thicknessMap,Ve=!!x.gradientMap,D=!!x.alphaMap,ce=x.alphaTest>0,k=!!x.alphaHash,te=!!x.extensions,ue=!!N.attributes.uv1,Be=!!N.attributes.uv2,$e=!!N.attributes.uv3;let tt=hi;return x.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(tt=i.toneMapping),{isWebGL2:u,shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:he,fragmentShader:re,defines:x.defines,customVertexShaderID:le,customFragmentShaderID:xe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,instancing:ye,instancingColor:ye&&I.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Re===null?i.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Wn,map:qe,matcap:Ot,envMap:De,envMapMode:De&&V.mapping,envMapCubeUVHeight:Y,aoMap:B,lightMap:Mt,bumpMap:Se,normalMap:Pe,displacementMap:d&&Ae,emissiveMap:et,normalMapObjectSpace:Pe&&x.normalMapType===Np,normalMapTangentSpace:Pe&&x.normalMapType===cd,metalnessMap:Fe,roughnessMap:Le,anisotropy:Xe,anisotropyMap:H,clearcoat:Et,clearcoatMap:ne,clearcoatNormalMap:ee,clearcoatRoughnessMap:ie,iridescence:Rt,iridescenceMap:_e,iridescenceThicknessMap:se,sheen:R,sheenColorMap:G,sheenRoughnessMap:P,specularMap:J,specularColorMap:fe,specularIntensityMap:ae,transmission:E,transmissionMap:de,thicknessMap:Ce,gradientMap:Ve,opaque:x.transparent===!1&&x.blending===Ws,alphaMap:D,alphaTest:ce,alphaHash:k,combine:x.combine,mapUv:qe&&g(x.map.channel),aoMapUv:B&&g(x.aoMap.channel),lightMapUv:Mt&&g(x.lightMap.channel),bumpMapUv:Se&&g(x.bumpMap.channel),normalMapUv:Pe&&g(x.normalMap.channel),displacementMapUv:Ae&&g(x.displacementMap.channel),emissiveMapUv:et&&g(x.emissiveMap.channel),metalnessMapUv:Fe&&g(x.metalnessMap.channel),roughnessMapUv:Le&&g(x.roughnessMap.channel),anisotropyMapUv:H&&g(x.anisotropyMap.channel),clearcoatMapUv:ne&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ee&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:se&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:G&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:P&&g(x.sheenRoughnessMap.channel),specularMapUv:J&&g(x.specularMap.channel),specularColorMapUv:fe&&g(x.specularColorMap.channel),specularIntensityMapUv:ae&&g(x.specularIntensityMap.channel),transmissionMapUv:de&&g(x.transmissionMap.channel),thicknessMapUv:Ce&&g(x.thicknessMap.channel),alphaMapUv:D&&g(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Pe||Xe),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:ue,vertexUv2s:Be,vertexUv3s:$e,pointsUvs:I.isPoints===!0&&!!N.attributes.uv&&(qe||D),fog:!!O,useFog:x.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:I.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:X,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&W.length>0,shadowMapType:i.shadowMap.type,toneMapping:tt,useLegacyLights:i._useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Dt,flipSided:x.side===It,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:te&&x.extensions.derivatives===!0,extensionFragDepth:te&&x.extensions.fragDepth===!0,extensionDrawBuffers:te&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:te&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const W in x.defines)A.push(W),A.push(x.defines[W]);return x.isRawShaderMaterial===!1&&(y(A,x),v(A,x),A.push(i.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function y(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function v(x,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),x.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),x.push(o.mask)}function S(x){const A=_[x.type];let W;if(A){const q=Fn[A];W=bm.clone(q.uniforms)}else W=x.uniforms;return W}function M(x,A){let W;for(let q=0,I=c.length;q<I;q++){const O=c[q];if(O.cacheKey===A){W=O,++W.usedTimes;break}}return W===void 0&&(W=new Nv(i,A,x,r),c.push(W)),W}function w(x){if(--x.usedTimes===0){const A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),x.destroy()}}function T(x){l.remove(x)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:M,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:C}}function Hv(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Vv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Wu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Xu(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,p,_,g,m){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=g,f.group=m),e++,f}function o(h,d,p,_,g,m){const f=a(h,d,p,_,g,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(h,d,p,_,g,m){const f=a(h,d,p,_,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||Vv),n.length>1&&n.sort(d||Wu),s.length>1&&s.sort(d||Wu)}function u(){for(let h=e,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Gv(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Xu,i.set(n,[a])):s>=r.length?(a=new Xu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Wv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ve};break;case"SpotLight":t={position:new L,direction:new L,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Xv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let qv=0;function Yv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function jv(i,e){const t=new Wv,n=Xv(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new L);const r=new L,a=new Ne,o=new Ne;function l(u,h){let d=0,p=0,_=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let g=0,m=0,f=0,y=0,v=0,S=0,M=0,w=0,T=0,C=0;u.sort(Yv);const x=h===!0?Math.PI:1;for(let W=0,q=u.length;W<q;W++){const I=u[W],O=I.color,N=I.intensity,K=I.distance,V=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=O.r*N*x,p+=O.g*N*x,_+=O.b*N*x;else if(I.isLightProbe)for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(I.sh.coefficients[Y],N);else if(I.isDirectionalLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity*x),I.castShadow){const Q=I.shadow,Z=n.get(I);Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,s.directionalShadow[g]=Z,s.directionalShadowMap[g]=V,s.directionalShadowMatrix[g]=I.shadow.matrix,S++}s.directional[g]=Y,g++}else if(I.isSpotLight){const Y=t.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(O).multiplyScalar(N*x),Y.distance=K,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,s.spot[f]=Y;const Q=I.shadow;if(I.map&&(s.spotLightMap[T]=I.map,T++,Q.updateMatrices(I),I.castShadow&&C++),s.spotLightMatrix[f]=Q.matrix,I.castShadow){const Z=n.get(I);Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,s.spotShadow[f]=Z,s.spotShadowMap[f]=V,w++}f++}else if(I.isRectAreaLight){const Y=t.get(I);Y.color.copy(O).multiplyScalar(N),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),s.rectArea[y]=Y,y++}else if(I.isPointLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity*x),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const Q=I.shadow,Z=n.get(I);Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,Z.shadowCameraNear=Q.camera.near,Z.shadowCameraFar=Q.camera.far,s.pointShadow[m]=Z,s.pointShadowMap[m]=V,s.pointShadowMatrix[m]=I.shadow.matrix,M++}s.point[m]=Y,m++}else if(I.isHemisphereLight){const Y=t.get(I);Y.skyColor.copy(I.color).multiplyScalar(N*x),Y.groundColor.copy(I.groundColor).multiplyScalar(N*x),s.hemi[v]=Y,v++}}y>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=oe.LTC_FLOAT_1,s.rectAreaLTC2=oe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=oe.LTC_HALF_1,s.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=_;const A=s.hash;(A.directionalLength!==g||A.pointLength!==m||A.spotLength!==f||A.rectAreaLength!==y||A.hemiLength!==v||A.numDirectionalShadows!==S||A.numPointShadows!==M||A.numSpotShadows!==w||A.numSpotMaps!==T)&&(s.directional.length=g,s.spot.length=f,s.rectArea.length=y,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=S,s.directionalShadowMap.length=S,s.pointShadow.length=M,s.pointShadowMap.length=M,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=S,s.pointShadowMatrix.length=M,s.spotLightMatrix.length=w+T-C,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=C,A.directionalLength=g,A.pointLength=m,A.spotLength=f,A.rectAreaLength=y,A.hemiLength=v,A.numDirectionalShadows=S,A.numPointShadows=M,A.numSpotShadows=w,A.numSpotMaps=T,s.version=qv++)}function c(u,h){let d=0,p=0,_=0,g=0,m=0;const f=h.matrixWorldInverse;for(let y=0,v=u.length;y<v;y++){const S=u[y];if(S.isDirectionalLight){const M=s.directional[d];M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(f),d++}else if(S.isSpotLight){const M=s.spot[_];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(f),_++}else if(S.isRectAreaLight){const M=s.rectArea[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(f),o.identity(),a.copy(S.matrixWorld),a.premultiply(f),o.extractRotation(a),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const M=s.point[p];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const M=s.hemi[m];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function qu(i,e){const t=new jv(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(h){n.push(h)}function o(h){s.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function $v(i,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new qu(i,e),t.set(r,[l])):a>=o.length?(l=new qu(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class Kv extends Mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fi,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zv extends Mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Jv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qv=`uniform sampler2D shadow_pass;
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
}`;function ex(i,e,t){let n=new Hl;const s=new pe,r=new pe,a=new je,o=new Kv({depthPacking:Op}),l=new Zv,c={},u=t.maxTextureSize,h={[Gn]:It,[It]:Gn,[Dt]:Dt},d=new ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:Jv,fragmentShader:Qv}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new An;_.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new dt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wh;let f=this.type;this.render=function(M,w,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const C=i.getRenderTarget(),x=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),W=i.state;W.setBlending(zt),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const q=f!==ri&&this.type===ri,I=f===ri&&this.type!==ri;for(let O=0,N=M.length;O<N;O++){const K=M[O],V=K.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const Y=V.getFrameExtents();if(s.multiply(Y),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,V.mapSize.y=r.y)),V.map===null||q===!0||I===!0){const Z=this.type!==ri?{minFilter:ct,magFilter:ct}:{};V.map!==null&&V.map.dispose(),V.map=new At(s.x,s.y,Z),V.map.texture.name=K.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const Q=V.getViewportCount();for(let Z=0;Z<Q;Z++){const z=V.getViewport(Z);a.set(r.x*z.x,r.y*z.y,r.x*z.z,r.y*z.w),W.viewport(a),V.updateMatrices(K,Z),n=V.getFrustum(),S(w,T,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===ri&&y(V,T),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(C,x,A)};function y(M,w){const T=e.update(g);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new At(s.x,s.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(w,null,T,d,g,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(w,null,T,p,g,null)}function v(M,w,T,C){let x=null;const A=T.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(A!==void 0)x=A;else if(x=T.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const W=x.uuid,q=w.uuid;let I=c[W];I===void 0&&(I={},c[W]=I);let O=I[q];O===void 0&&(O=x.clone(),I[q]=O),x=O}if(x.visible=w.visible,x.wireframe=w.wireframe,C===ri?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:h[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,T.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const W=i.properties.get(x);W.light=T}return x}function S(M,w,T,C,x){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&x===ri)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,M.matrixWorld);const q=e.update(M),I=M.material;if(Array.isArray(I)){const O=q.groups;for(let N=0,K=O.length;N<K;N++){const V=O[N],Y=I[V.materialIndex];if(Y&&Y.visible){const Q=v(M,Y,C,x);i.renderBufferDirect(T,null,q,Q,M,V)}}}else if(I.visible){const O=v(M,I,C,x);i.renderBufferDirect(T,null,q,O,M,null)}}const W=M.children;for(let q=0,I=W.length;q<I;q++)S(W[q],w,T,C,x)}}function tx(i,e,t){const n=t.isWebGL2;function s(){let D=!1;const ce=new je;let k=null;const te=new je(0,0,0,0);return{setMask:function(ue){k!==ue&&!D&&(i.colorMask(ue,ue,ue,ue),k=ue)},setLocked:function(ue){D=ue},setClear:function(ue,Be,$e,tt,gi){gi===!0&&(ue*=tt,Be*=tt,$e*=tt),ce.set(ue,Be,$e,tt),te.equals(ce)===!1&&(i.clearColor(ue,Be,$e,tt),te.copy(ce))},reset:function(){D=!1,k=null,te.set(-1,0,0,0)}}}function r(){let D=!1,ce=null,k=null,te=null;return{setTest:function(ue){ue?Re(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(ue){ce!==ue&&!D&&(i.depthMask(ue),ce=ue)},setFunc:function(ue){if(k!==ue){switch(ue){case Yh:i.depthFunc(i.NEVER);break;case jh:i.depthFunc(i.ALWAYS);break;case cl:i.depthFunc(i.LESS);break;case Na:i.depthFunc(i.LEQUAL);break;case $h:i.depthFunc(i.EQUAL);break;case Kh:i.depthFunc(i.GEQUAL);break;case Zh:i.depthFunc(i.GREATER);break;case Jh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}k=ue}},setLocked:function(ue){D=ue},setClear:function(ue){te!==ue&&(i.clearDepth(ue),te=ue)},reset:function(){D=!1,ce=null,k=null,te=null}}}function a(){let D=!1,ce=null,k=null,te=null,ue=null,Be=null,$e=null,tt=null,gi=null;return{setTest:function(nt){D||(nt?Re(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(nt){ce!==nt&&!D&&(i.stencilMask(nt),ce=nt)},setFunc:function(nt,On,qt){(k!==nt||te!==On||ue!==qt)&&(i.stencilFunc(nt,On,qt),k=nt,te=On,ue=qt)},setOp:function(nt,On,qt){(Be!==nt||$e!==On||tt!==qt)&&(i.stencilOp(nt,On,qt),Be=nt,$e=On,tt=qt)},setLocked:function(nt){D=nt},setClear:function(nt){gi!==nt&&(i.clearStencil(nt),gi=nt)},reset:function(){D=!1,ce=null,k=null,te=null,ue=null,Be=null,$e=null,tt=null,gi=null}}}const o=new s,l=new r,c=new a,u=new WeakMap,h=new WeakMap;let d={},p={},_=new WeakMap,g=[],m=null,f=!1,y=null,v=null,S=null,M=null,w=null,T=null,C=null,x=!1,A=null,W=null,q=null,I=null,O=null;const N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,V=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Y)[1]),K=V>=1):Y.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),K=V>=2);let Q=null,Z={};const z=i.getParameter(i.SCISSOR_BOX),X=i.getParameter(i.VIEWPORT),he=new je().fromArray(z),re=new je().fromArray(X);function le(D,ce,k,te){const ue=new Uint8Array(4),Be=i.createTexture();i.bindTexture(D,Be),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<k;$e++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(ce,0,i.RGBA,1,1,te,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(ce+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return Be}const xe={};xe[i.TEXTURE_2D]=le(i.TEXTURE_2D,i.TEXTURE_2D,1),xe[i.TEXTURE_CUBE_MAP]=le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(xe[i.TEXTURE_2D_ARRAY]=le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xe[i.TEXTURE_3D]=le(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Re(i.DEPTH_TEST),l.setFunc(Na),Ae(!1),et(Pc),Re(i.CULL_FACE),Se(zt);function Re(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function ye(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function qe(D,ce){return p[D]!==ce?(i.bindFramebuffer(D,ce),p[D]=ce,n&&(D===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ce),D===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ce)),!0):!1}function Ot(D,ce){let k=g,te=!1;if(D)if(k=_.get(ce),k===void 0&&(k=[],_.set(ce,k)),D.isWebGLMultipleRenderTargets){const ue=D.texture;if(k.length!==ue.length||k[0]!==i.COLOR_ATTACHMENT0){for(let Be=0,$e=ue.length;Be<$e;Be++)k[Be]=i.COLOR_ATTACHMENT0+Be;k.length=ue.length,te=!0}}else k[0]!==i.COLOR_ATTACHMENT0&&(k[0]=i.COLOR_ATTACHMENT0,te=!0);else k[0]!==i.BACK&&(k[0]=i.BACK,te=!0);te&&(t.isWebGL2?i.drawBuffers(k):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(k))}function De(D){return m!==D?(i.useProgram(D),m=D,!0):!1}const B={[ks]:i.FUNC_ADD,[ap]:i.FUNC_SUBTRACT,[op]:i.FUNC_REVERSE_SUBTRACT};if(n)B[Uc]=i.MIN,B[Oc]=i.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(B[Uc]=D.MIN_EXT,B[Oc]=D.MAX_EXT)}const Mt={[lp]:i.ZERO,[cp]:i.ONE,[up]:i.SRC_COLOR,[Xh]:i.SRC_ALPHA,[gp]:i.SRC_ALPHA_SATURATE,[pp]:i.DST_COLOR,[dp]:i.DST_ALPHA,[hp]:i.ONE_MINUS_SRC_COLOR,[qh]:i.ONE_MINUS_SRC_ALPHA,[mp]:i.ONE_MINUS_DST_COLOR,[fp]:i.ONE_MINUS_DST_ALPHA};function Se(D,ce,k,te,ue,Be,$e,tt){if(D===zt){f===!0&&(ye(i.BLEND),f=!1);return}if(f===!1&&(Re(i.BLEND),f=!0),D!==rp){if(D!==y||tt!==x){if((v!==ks||w!==ks)&&(i.blendEquation(i.FUNC_ADD),v=ks,w=ks),tt)switch(D){case Ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lc:i.blendFunc(i.ONE,i.ONE);break;case Dc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ic:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Dc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ic:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,M=null,T=null,C=null,y=D,x=tt}return}ue=ue||ce,Be=Be||k,$e=$e||te,(ce!==v||ue!==w)&&(i.blendEquationSeparate(B[ce],B[ue]),v=ce,w=ue),(k!==S||te!==M||Be!==T||$e!==C)&&(i.blendFuncSeparate(Mt[k],Mt[te],Mt[Be],Mt[$e]),S=k,M=te,T=Be,C=$e),y=D,x=!1}function Pe(D,ce){D.side===Dt?ye(i.CULL_FACE):Re(i.CULL_FACE);let k=D.side===It;ce&&(k=!k),Ae(k),D.blending===Ws&&D.transparent===!1?Se(zt):Se(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const te=D.stencilWrite;c.setTest(te),te&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Le(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Re(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(D){A!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),A=D)}function et(D){D!==np?(Re(i.CULL_FACE),D!==W&&(D===Pc?i.cullFace(i.BACK):D===ip?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),W=D}function Fe(D){D!==q&&(K&&i.lineWidth(D),q=D)}function Le(D,ce,k){D?(Re(i.POLYGON_OFFSET_FILL),(I!==ce||O!==k)&&(i.polygonOffset(ce,k),I=ce,O=k)):ye(i.POLYGON_OFFSET_FILL)}function Xe(D){D?Re(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function Et(D){D===void 0&&(D=i.TEXTURE0+N-1),Q!==D&&(i.activeTexture(D),Q=D)}function Rt(D,ce,k){k===void 0&&(Q===null?k=i.TEXTURE0+N-1:k=Q);let te=Z[k];te===void 0&&(te={type:void 0,texture:void 0},Z[k]=te),(te.type!==D||te.texture!==ce)&&(Q!==k&&(i.activeTexture(k),Q=k),i.bindTexture(D,ce||xe[D]),te.type=D,te.texture=ce)}function R(){const D=Z[Q];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function E(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function H(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function G(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function P(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(D){he.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),he.copy(D))}function ae(D){re.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),re.copy(D))}function de(D,ce){let k=h.get(ce);k===void 0&&(k=new WeakMap,h.set(ce,k));let te=k.get(D);te===void 0&&(te=i.getUniformBlockIndex(ce,D.name),k.set(D,te))}function Ce(D,ce){const te=h.get(ce).get(D);u.get(ce)!==te&&(i.uniformBlockBinding(ce,te,D.__bindingPointIndex),u.set(ce,te))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Q=null,Z={},p={},_=new WeakMap,g=[],m=null,f=!1,y=null,v=null,S=null,M=null,w=null,T=null,C=null,x=!1,A=null,W=null,q=null,I=null,O=null,he.set(0,0,i.canvas.width,i.canvas.height),re.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Re,disable:ye,bindFramebuffer:qe,drawBuffers:Ot,useProgram:De,setBlending:Se,setMaterial:Pe,setFlipSided:Ae,setCullFace:et,setLineWidth:Fe,setPolygonOffset:Le,setScissorTest:Xe,activeTexture:Et,bindTexture:Rt,unbindTexture:R,compressedTexImage2D:E,compressedTexImage3D:H,texImage2D:P,texImage3D:J,updateUBOMapping:de,uniformBlockBinding:Ce,texStorage2D:se,texStorage3D:G,texSubImage2D:ne,texSubImage3D:ee,compressedTexSubImage2D:ie,compressedTexSubImage3D:_e,scissor:fe,viewport:ae,reset:Ve}}function nx(i,e,t,n,s,r,a){const o=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,h=s.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,E){return f?new OffscreenCanvas(R,E):Br("canvas")}function v(R,E,H,ne){let ee=1;if((R.width>ne||R.height>ne)&&(ee=ne/Math.max(R.width,R.height)),ee<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ie=E?za:Math.floor,_e=ie(ee*R.width),se=ie(ee*R.height);g===void 0&&(g=y(_e,se));const G=H?y(_e,se):g;return G.width=_e,G.height=se,G.getContext("2d").drawImage(R,0,0,_e,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+_e+"x"+se+")."),G}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function S(R){return gl(R.width)&&gl(R.height)}function M(R){return o?!1:R.wrapS!==_n||R.wrapT!==_n||R.minFilter!==ct&&R.minFilter!==Lt}function w(R,E){return R.generateMipmaps&&E&&R.minFilter!==ct&&R.minFilter!==Lt}function T(R){i.generateMipmap(R)}function C(R,E,H,ne,ee=!1){if(o===!1)return E;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ie=E;return E===i.RED&&(H===i.FLOAT&&(ie=i.R32F),H===i.HALF_FLOAT&&(ie=i.R16F),H===i.UNSIGNED_BYTE&&(ie=i.R8)),E===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(ie=i.R8UI),H===i.UNSIGNED_SHORT&&(ie=i.R16UI),H===i.UNSIGNED_INT&&(ie=i.R32UI),H===i.BYTE&&(ie=i.R8I),H===i.SHORT&&(ie=i.R16I),H===i.INT&&(ie=i.R32I)),E===i.RG&&(H===i.FLOAT&&(ie=i.RG32F),H===i.HALF_FLOAT&&(ie=i.RG16F),H===i.UNSIGNED_BYTE&&(ie=i.RG8)),E===i.RGBA&&(H===i.FLOAT&&(ie=i.RGBA32F),H===i.HALF_FLOAT&&(ie=i.RGBA16F),H===i.UNSIGNED_BYTE&&(ie=ne===Te&&ee===!1?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)),(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function x(R,E,H){return w(R,H)===!0||R.isFramebufferTexture&&R.minFilter!==ct&&R.minFilter!==Lt?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function A(R){return R===ct||R===dl||R===Pa?i.NEAREST:i.LINEAR}function W(R){const E=R.target;E.removeEventListener("dispose",W),I(E),E.isVideoTexture&&_.delete(E)}function q(R){const E=R.target;E.removeEventListener("dispose",q),N(E)}function I(R){const E=n.get(R);if(E.__webglInit===void 0)return;const H=R.source,ne=m.get(H);if(ne){const ee=ne[E.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&O(R),Object.keys(ne).length===0&&m.delete(H)}n.remove(R)}function O(R){const E=n.get(R);i.deleteTexture(E.__webglTexture);const H=R.source,ne=m.get(H);delete ne[E.__cacheKey],a.memory.textures--}function N(R){const E=R.texture,H=n.get(R),ne=n.get(E);if(ne.__webglTexture!==void 0&&(i.deleteTexture(ne.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(H.__webglFramebuffer[ee]))for(let ie=0;ie<H.__webglFramebuffer[ee].length;ie++)i.deleteFramebuffer(H.__webglFramebuffer[ee][ie]);else i.deleteFramebuffer(H.__webglFramebuffer[ee]);H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer[ee])}else{if(Array.isArray(H.__webglFramebuffer))for(let ee=0;ee<H.__webglFramebuffer.length;ee++)i.deleteFramebuffer(H.__webglFramebuffer[ee]);else i.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&i.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ee=0;ee<H.__webglColorRenderbuffer.length;ee++)H.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(H.__webglColorRenderbuffer[ee]);H.__webglDepthRenderbuffer&&i.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ee=0,ie=E.length;ee<ie;ee++){const _e=n.get(E[ee]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(E[ee])}n.remove(E),n.remove(R)}let K=0;function V(){K=0}function Y(){const R=K;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),K+=1,R}function Q(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function Z(R,E){const H=n.get(R);if(R.isVideoTexture&&Et(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const ne=R.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{qe(H,R,E);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+E)}function z(R,E){const H=n.get(R);if(R.version>0&&H.__version!==R.version){qe(H,R,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+E)}function X(R,E){const H=n.get(R);if(R.version>0&&H.__version!==R.version){qe(H,R,E);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+E)}function he(R,E){const H=n.get(R);if(R.version>0&&H.__version!==R.version){Ot(H,R,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+E)}const re={[Js]:i.REPEAT,[_n]:i.CLAMP_TO_EDGE,[Fa]:i.MIRRORED_REPEAT},le={[ct]:i.NEAREST,[dl]:i.NEAREST_MIPMAP_NEAREST,[Pa]:i.NEAREST_MIPMAP_LINEAR,[Lt]:i.LINEAR,[td]:i.LINEAR_MIPMAP_NEAREST,[Ni]:i.LINEAR_MIPMAP_LINEAR},xe={[Bp]:i.NEVER,[Xp]:i.ALWAYS,[zp]:i.LESS,[Hp]:i.LEQUAL,[kp]:i.EQUAL,[Wp]:i.GEQUAL,[Vp]:i.GREATER,[Gp]:i.NOTEQUAL};function Re(R,E,H){if(H?(i.texParameteri(R,i.TEXTURE_WRAP_S,re[E.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,re[E.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,re[E.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,le[E.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,le[E.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==_n||E.wrapT!==_n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,A(E.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,A(E.minFilter)),E.minFilter!==ct&&E.minFilter!==Lt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,xe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===ct||E.minFilter!==Pa&&E.minFilter!==Ni||E.type===ci&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===Qs&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(R,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function ye(R,E){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",W));const ne=E.source;let ee=m.get(ne);ee===void 0&&(ee={},m.set(ne,ee));const ie=Q(E);if(ie!==R.__cacheKey){ee[ie]===void 0&&(ee[ie]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ee[ie].usedTimes++;const _e=ee[R.__cacheKey];_e!==void 0&&(ee[R.__cacheKey].usedTimes--,_e.usedTimes===0&&O(E)),R.__cacheKey=ie,R.__webglTexture=ee[ie].texture}return H}function qe(R,E,H){let ne=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ne=i.TEXTURE_3D);const ee=ye(R,E),ie=E.source;t.bindTexture(ne,R.__webglTexture,i.TEXTURE0+H);const _e=n.get(ie);if(ie.version!==_e.__version||ee===!0){t.activeTexture(i.TEXTURE0+H),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const se=M(E)&&S(E.image)===!1;let G=v(E.image,se,!1,u);G=Rt(E,G);const P=S(G)||o,J=r.convert(E.format,E.colorSpace);let fe=r.convert(E.type),ae=C(E.internalFormat,J,fe,E.colorSpace);Re(ne,E,P);let de;const Ce=E.mipmaps,Ve=o&&E.isVideoTexture!==!0,D=_e.__version===void 0||ee===!0,ce=x(E,G,P);if(E.isDepthTexture)ae=i.DEPTH_COMPONENT,o?E.type===ci?ae=i.DEPTH_COMPONENT32F:E.type===li?ae=i.DEPTH_COMPONENT24:E.type===Di?ae=i.DEPTH24_STENCIL8:ae=i.DEPTH_COMPONENT16:E.type===ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===as&&ae===i.DEPTH_COMPONENT&&E.type!==Bl&&E.type!==li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=li,fe=r.convert(E.type)),E.format===ds&&ae===i.DEPTH_COMPONENT&&(ae=i.DEPTH_STENCIL,E.type!==Di&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Di,fe=r.convert(E.type))),D&&(Ve?t.texStorage2D(i.TEXTURE_2D,1,ae,G.width,G.height):t.texImage2D(i.TEXTURE_2D,0,ae,G.width,G.height,0,J,fe,null));else if(E.isDataTexture)if(Ce.length>0&&P){Ve&&D&&t.texStorage2D(i.TEXTURE_2D,ce,ae,Ce[0].width,Ce[0].height);for(let k=0,te=Ce.length;k<te;k++)de=Ce[k],Ve?t.texSubImage2D(i.TEXTURE_2D,k,0,0,de.width,de.height,J,fe,de.data):t.texImage2D(i.TEXTURE_2D,k,ae,de.width,de.height,0,J,fe,de.data);E.generateMipmaps=!1}else Ve?(D&&t.texStorage2D(i.TEXTURE_2D,ce,ae,G.width,G.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,G.width,G.height,J,fe,G.data)):t.texImage2D(i.TEXTURE_2D,0,ae,G.width,G.height,0,J,fe,G.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ve&&D&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,ae,Ce[0].width,Ce[0].height,G.depth);for(let k=0,te=Ce.length;k<te;k++)de=Ce[k],E.format!==vn?J!==null?Ve?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,de.width,de.height,G.depth,J,de.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,k,ae,de.width,de.height,G.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,de.width,de.height,G.depth,J,fe,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,k,ae,de.width,de.height,G.depth,0,J,fe,de.data)}else{Ve&&D&&t.texStorage2D(i.TEXTURE_2D,ce,ae,Ce[0].width,Ce[0].height);for(let k=0,te=Ce.length;k<te;k++)de=Ce[k],E.format!==vn?J!==null?Ve?t.compressedTexSubImage2D(i.TEXTURE_2D,k,0,0,de.width,de.height,J,de.data):t.compressedTexImage2D(i.TEXTURE_2D,k,ae,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage2D(i.TEXTURE_2D,k,0,0,de.width,de.height,J,fe,de.data):t.texImage2D(i.TEXTURE_2D,k,ae,de.width,de.height,0,J,fe,de.data)}else if(E.isDataArrayTexture)Ve?(D&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,ae,G.width,G.height,G.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,J,fe,G.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ae,G.width,G.height,G.depth,0,J,fe,G.data);else if(E.isData3DTexture)Ve?(D&&t.texStorage3D(i.TEXTURE_3D,ce,ae,G.width,G.height,G.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,J,fe,G.data)):t.texImage3D(i.TEXTURE_3D,0,ae,G.width,G.height,G.depth,0,J,fe,G.data);else if(E.isFramebufferTexture){if(D)if(Ve)t.texStorage2D(i.TEXTURE_2D,ce,ae,G.width,G.height);else{let k=G.width,te=G.height;for(let ue=0;ue<ce;ue++)t.texImage2D(i.TEXTURE_2D,ue,ae,k,te,0,J,fe,null),k>>=1,te>>=1}}else if(Ce.length>0&&P){Ve&&D&&t.texStorage2D(i.TEXTURE_2D,ce,ae,Ce[0].width,Ce[0].height);for(let k=0,te=Ce.length;k<te;k++)de=Ce[k],Ve?t.texSubImage2D(i.TEXTURE_2D,k,0,0,J,fe,de):t.texImage2D(i.TEXTURE_2D,k,ae,J,fe,de);E.generateMipmaps=!1}else Ve?(D&&t.texStorage2D(i.TEXTURE_2D,ce,ae,G.width,G.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,J,fe,G)):t.texImage2D(i.TEXTURE_2D,0,ae,J,fe,G);w(E,P)&&T(ne),_e.__version=ie.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Ot(R,E,H){if(E.image.length!==6)return;const ne=ye(R,E),ee=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+H);const ie=n.get(ee);if(ee.version!==ie.__version||ne===!0){t.activeTexture(i.TEXTURE0+H),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const _e=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,G=[];for(let k=0;k<6;k++)!_e&&!se?G[k]=v(E.image[k],!1,!0,c):G[k]=se?E.image[k].image:E.image[k],G[k]=Rt(E,G[k]);const P=G[0],J=S(P)||o,fe=r.convert(E.format,E.colorSpace),ae=r.convert(E.type),de=C(E.internalFormat,fe,ae,E.colorSpace),Ce=o&&E.isVideoTexture!==!0,Ve=ie.__version===void 0||ne===!0;let D=x(E,P,J);Re(i.TEXTURE_CUBE_MAP,E,J);let ce;if(_e){Ce&&Ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,D,de,P.width,P.height);for(let k=0;k<6;k++){ce=G[k].mipmaps;for(let te=0;te<ce.length;te++){const ue=ce[te];E.format!==vn?fe!==null?Ce?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,te,0,0,ue.width,ue.height,fe,ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,te,de,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,te,0,0,ue.width,ue.height,fe,ae,ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,te,de,ue.width,ue.height,0,fe,ae,ue.data)}}}else{ce=E.mipmaps,Ce&&Ve&&(ce.length>0&&D++,t.texStorage2D(i.TEXTURE_CUBE_MAP,D,de,G[0].width,G[0].height));for(let k=0;k<6;k++)if(se){Ce?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,G[k].width,G[k].height,fe,ae,G[k].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,de,G[k].width,G[k].height,0,fe,ae,G[k].data);for(let te=0;te<ce.length;te++){const Be=ce[te].image[k].image;Ce?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,te+1,0,0,Be.width,Be.height,fe,ae,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,te+1,de,Be.width,Be.height,0,fe,ae,Be.data)}}else{Ce?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,fe,ae,G[k]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,de,fe,ae,G[k]);for(let te=0;te<ce.length;te++){const ue=ce[te];Ce?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,te+1,0,0,fe,ae,ue.image[k]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,te+1,de,fe,ae,ue.image[k])}}}w(E,J)&&T(i.TEXTURE_CUBE_MAP),ie.__version=ee.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function De(R,E,H,ne,ee,ie){const _e=r.convert(H.format,H.colorSpace),se=r.convert(H.type),G=C(H.internalFormat,_e,se,H.colorSpace);if(!n.get(E).__hasExternalTextures){const J=Math.max(1,E.width>>ie),fe=Math.max(1,E.height>>ie);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,ie,G,J,fe,E.depth,0,_e,se,null):t.texImage2D(ee,ie,G,J,fe,0,_e,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Xe(E)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,ee,n.get(H).__webglTexture,0,Le(E)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,ee,n.get(H).__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function B(R,E,H){if(i.bindRenderbuffer(i.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let ne=i.DEPTH_COMPONENT16;if(H||Xe(E)){const ee=E.depthTexture;ee&&ee.isDepthTexture&&(ee.type===ci?ne=i.DEPTH_COMPONENT32F:ee.type===li&&(ne=i.DEPTH_COMPONENT24));const ie=Le(E);Xe(E)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,ne,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,ne,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,ne,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){const ne=Le(E);H&&Xe(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,E.width,E.height):Xe(E)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{const ne=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ee=0;ee<ne.length;ee++){const ie=ne[ee],_e=r.convert(ie.format,ie.colorSpace),se=r.convert(ie.type),G=C(ie.internalFormat,_e,se,ie.colorSpace),P=Le(E);H&&Xe(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,P,G,E.width,E.height):Xe(E)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P,G,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,G,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Z(E.depthTexture,0);const ne=n.get(E.depthTexture).__webglTexture,ee=Le(E);if(E.depthTexture.format===as)Xe(E)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(E.depthTexture.format===ds)Xe(E)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Se(R){const E=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Mt(E.__webglFramebuffer,R)}else if(H){E.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ne]),E.__webglDepthbuffer[ne]=i.createRenderbuffer(),B(E.__webglDepthbuffer[ne],R,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),B(E.__webglDepthbuffer,R,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(R,E,H){const ne=n.get(R);E!==void 0&&De(ne.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Se(R)}function Ae(R){const E=R.texture,H=n.get(R),ne=n.get(E);R.addEventListener("dispose",q),R.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=E.version,a.memory.textures++);const ee=R.isWebGLCubeRenderTarget===!0,ie=R.isWebGLMultipleRenderTargets===!0,_e=S(R)||o;if(ee){H.__webglFramebuffer=[];for(let se=0;se<6;se++)if(o&&E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[se]=[];for(let G=0;G<E.mipmaps.length;G++)H.__webglFramebuffer[se][G]=i.createFramebuffer()}else H.__webglFramebuffer[se]=i.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let se=0;se<E.mipmaps.length;se++)H.__webglFramebuffer[se]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(ie)if(s.drawBuffers){const se=R.texture;for(let G=0,P=se.length;G<P;G++){const J=n.get(se[G]);J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&Xe(R)===!1){const se=ie?E:[E];H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let G=0;G<se.length;G++){const P=se[G];H.__webglColorRenderbuffer[G]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[G]);const J=r.convert(P.format,P.colorSpace),fe=r.convert(P.type),ae=C(P.internalFormat,J,fe,P.colorSpace,R.isXRRenderTarget===!0),de=Le(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,de,ae,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+G,i.RENDERBUFFER,H.__webglColorRenderbuffer[G])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),B(H.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),Re(i.TEXTURE_CUBE_MAP,E,_e);for(let se=0;se<6;se++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let G=0;G<E.mipmaps.length;G++)De(H.__webglFramebuffer[se][G],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,G);else De(H.__webglFramebuffer[se],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);w(E,_e)&&T(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const se=R.texture;for(let G=0,P=se.length;G<P;G++){const J=se[G],fe=n.get(J);t.bindTexture(i.TEXTURE_2D,fe.__webglTexture),Re(i.TEXTURE_2D,J,_e),De(H.__webglFramebuffer,R,J,i.COLOR_ATTACHMENT0+G,i.TEXTURE_2D,0),w(J,_e)&&T(i.TEXTURE_2D)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?se=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,ne.__webglTexture),Re(se,E,_e),o&&E.mipmaps&&E.mipmaps.length>0)for(let G=0;G<E.mipmaps.length;G++)De(H.__webglFramebuffer[G],R,E,i.COLOR_ATTACHMENT0,se,G);else De(H.__webglFramebuffer,R,E,i.COLOR_ATTACHMENT0,se,0);w(E,_e)&&T(se),t.unbindTexture()}R.depthBuffer&&Se(R)}function et(R){const E=S(R)||o,H=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ne=0,ee=H.length;ne<ee;ne++){const ie=H[ne];if(w(ie,E)){const _e=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,se=n.get(ie).__webglTexture;t.bindTexture(_e,se),T(_e),t.unbindTexture()}}}function Fe(R){if(o&&R.samples>0&&Xe(R)===!1){const E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],H=R.width,ne=R.height;let ee=i.COLOR_BUFFER_BIT;const ie=[],_e=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=n.get(R),G=R.isWebGLMultipleRenderTargets===!0;if(G)for(let P=0;P<E.length;P++)t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let P=0;P<E.length;P++){ie.push(i.COLOR_ATTACHMENT0+P),R.depthBuffer&&ie.push(_e);const J=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(J===!1&&(R.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),G&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,se.__webglColorRenderbuffer[P]),J===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[_e]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_e])),G){const fe=n.get(E[P]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,fe,0)}i.blitFramebuffer(0,0,H,ne,0,0,H,ne,ee,i.NEAREST),p&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),G)for(let P=0;P<E.length;P++){t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.RENDERBUFFER,se.__webglColorRenderbuffer[P]);const J=n.get(E[P]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.TEXTURE_2D,J,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function Le(R){return Math.min(h,R.samples)}function Xe(R){const E=n.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Et(R){const E=a.render.frame;_.get(R)!==E&&(_.set(R,E),R.update())}function Rt(R,E){const H=R.colorSpace,ne=R.format,ee=R.type;return R.isCompressedTexture===!0||R.format===ml||H!==Wn&&H!==os&&(H===Te?o===!1?e.has("EXT_sRGB")===!0&&ne===vn?(R.format=ml,R.minFilter=Lt,R.generateMipmaps=!1):E=fd.sRGBToLinear(E):(ne!==vn||ee!==Gt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}this.allocateTextureUnit=Y,this.resetTextureUnits=V,this.setTexture2D=Z,this.setTexture2DArray=z,this.setTexture3D=X,this.setTextureCube=he,this.rebindTextures=Pe,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Xe}function ix(i,e,t){const n=t.isWebGL2;function s(r,a=os){let o;if(r===Gt)return i.UNSIGNED_BYTE;if(r===id)return i.UNSIGNED_SHORT_4_4_4_4;if(r===sd)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Tp)return i.BYTE;if(r===Ap)return i.SHORT;if(r===Bl)return i.UNSIGNED_SHORT;if(r===nd)return i.INT;if(r===li)return i.UNSIGNED_INT;if(r===ci)return i.FLOAT;if(r===Qs)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===bp)return i.ALPHA;if(r===vn)return i.RGBA;if(r===wp)return i.LUMINANCE;if(r===Rp)return i.LUMINANCE_ALPHA;if(r===as)return i.DEPTH_COMPONENT;if(r===ds)return i.DEPTH_STENCIL;if(r===ml)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Cp)return i.RED;if(r===rd)return i.RED_INTEGER;if(r===Pp)return i.RG;if(r===ad)return i.RG_INTEGER;if(r===od)return i.RGBA_INTEGER;if(r===uo||r===ho||r===fo||r===po)if(a===Te)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===uo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ho)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===fo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===po)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===uo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ho)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===fo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===po)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Nc||r===Fc||r===Bc||r===zc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Nc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Fc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Bc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===zc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Lp)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===kc||r===Hc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===kc)return a===Te?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Hc)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Vc||r===Gc||r===Wc||r===Xc||r===qc||r===Yc||r===jc||r===$c||r===Kc||r===Zc||r===Jc||r===Qc||r===eu||r===tu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Vc)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Gc)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Wc)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Xc)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===qc)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Yc)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===jc)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$c)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Kc)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Zc)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Jc)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Qc)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===eu)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===tu)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===mo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===mo)return a===Te?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Dp||r===nu||r===iu||r===su)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===mo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===nu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===iu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===su)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Di?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class sx extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ri extends at{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rx={type:"move"};class Bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ri;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Wl extends St{constructor(e,t,n,s,r,a,o,l,c,u){if(u=u!==void 0?u:as,u!==as&&u!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===as&&(n=li),n===void 0&&u===ds&&(n=Di),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ct,this.minFilter=l!==void 0?l:ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ax extends Yn{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,_=null;const g=t.getContextAttributes();let m=null,f=null;const y=[],v=[],S=new Ft;S.layers.enable(1),S.viewport=new je;const M=new Ft;M.layers.enable(2),M.viewport=new je;const w=[S,M],T=new sx;T.layers.enable(1),T.layers.enable(2);let C=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let X=y[z];return X===void 0&&(X=new Bo,y[z]=X),X.getTargetRaySpace()},this.getControllerGrip=function(z){let X=y[z];return X===void 0&&(X=new Bo,y[z]=X),X.getGripSpace()},this.getHand=function(z){let X=y[z];return X===void 0&&(X=new Bo,y[z]=X),X.getHandSpace()};function A(z){const X=v.indexOf(z.inputSource);if(X===-1)return;const he=y[X];he!==void 0&&(he.update(z.inputSource,z.frame,c||a),he.dispatchEvent({type:z.type,data:z.inputSource}))}function W(){s.removeEventListener("select",A),s.removeEventListener("selectstart",A),s.removeEventListener("selectend",A),s.removeEventListener("squeeze",A),s.removeEventListener("squeezestart",A),s.removeEventListener("squeezeend",A),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",q);for(let z=0;z<y.length;z++){const X=v[z];X!==null&&(v[z]=null,y[z].disconnect(X))}C=null,x=null,e.setRenderTarget(m),p=null,d=null,h=null,s=null,f=null,Z.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",A),s.addEventListener("selectstart",A),s.addEventListener("selectend",A),s.addEventListener("squeeze",A),s.addEventListener("squeezestart",A),s.addEventListener("squeezeend",A),s.addEventListener("end",W),s.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const X={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,X),s.updateRenderState({baseLayer:p}),f=new At(p.framebufferWidth,p.framebufferHeight,{format:vn,type:Gt,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let X=null,he=null,re=null;g.depth&&(re=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=g.stencil?ds:as,he=g.stencil?Di:li);const le={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(le),s.updateRenderState({layers:[d]}),f=new At(d.textureWidth,d.textureHeight,{format:vn,type:Gt,depthTexture:new Wl(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const xe=e.properties.get(f);xe.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Z.setContext(s),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function q(z){for(let X=0;X<z.removed.length;X++){const he=z.removed[X],re=v.indexOf(he);re>=0&&(v[re]=null,y[re].disconnect(he))}for(let X=0;X<z.added.length;X++){const he=z.added[X];let re=v.indexOf(he);if(re===-1){for(let xe=0;xe<y.length;xe++)if(xe>=v.length){v.push(he),re=xe;break}else if(v[xe]===null){v[xe]=he,re=xe;break}if(re===-1)break}const le=y[re];le&&le.connect(he)}}const I=new L,O=new L;function N(z,X,he){I.setFromMatrixPosition(X.matrixWorld),O.setFromMatrixPosition(he.matrixWorld);const re=I.distanceTo(O),le=X.projectionMatrix.elements,xe=he.projectionMatrix.elements,Re=le[14]/(le[10]-1),ye=le[14]/(le[10]+1),qe=(le[9]+1)/le[5],Ot=(le[9]-1)/le[5],De=(le[8]-1)/le[0],B=(xe[8]+1)/xe[0],Mt=Re*De,Se=Re*B,Pe=re/(-De+B),Ae=Pe*-De;X.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Ae),z.translateZ(Pe),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const et=Re+Pe,Fe=ye+Pe,Le=Mt-Ae,Xe=Se+(re-Ae),Et=qe*ye/Fe*et,Rt=Ot*ye/Fe*et;z.projectionMatrix.makePerspective(Le,Xe,Et,Rt,et,Fe),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function K(z,X){X===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(X.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;T.near=M.near=S.near=z.near,T.far=M.far=S.far=z.far,(C!==T.near||x!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),C=T.near,x=T.far);const X=z.parent,he=T.cameras;K(T,X);for(let re=0;re<he.length;re++)K(he[re],X);he.length===2?N(T,S,M):T.projectionMatrix.copy(S.projectionMatrix),V(z,T,X)};function V(z,X,he){he===null?z.matrix.copy(X.matrixWorld):(z.matrix.copy(he.matrixWorld),z.matrix.invert(),z.matrix.multiply(X.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0);const re=z.children;for(let le=0,xe=re.length;le<xe;le++)re[le].updateMatrixWorld(!0);z.projectionMatrix.copy(X.projectionMatrix),z.projectionMatrixInverse.copy(X.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=tr*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)};let Y=null;function Q(z,X){if(u=X.getViewerPose(c||a),_=X,u!==null){const he=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let re=!1;he.length!==T.cameras.length&&(T.cameras.length=0,re=!0);for(let le=0;le<he.length;le++){const xe=he[le];let Re=null;if(p!==null)Re=p.getViewport(xe);else{const qe=h.getViewSubImage(d,xe);Re=qe.viewport,le===0&&(e.setRenderTargetTextures(f,qe.colorTexture,d.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(f))}let ye=w[le];ye===void 0&&(ye=new Ft,ye.layers.enable(le),ye.viewport=new je,w[le]=ye),ye.matrix.fromArray(xe.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(xe.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Re.x,Re.y,Re.width,Re.height),le===0&&(T.matrix.copy(ye.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),re===!0&&T.cameras.push(ye)}}for(let he=0;he<y.length;he++){const re=v[he],le=y[he];re!==null&&le!==void 0&&le.update(re,X,c||a)}Y&&Y(z,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),_=null}const Z=new Md;Z.setAnimationLoop(Q),this.setAnimationLoop=function(z){Y=z},this.dispose=function(){}}}function ox(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,yd(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,y,v,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===It&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===It&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=e.get(f).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===It&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lx(i,e,t,n){let s={},r={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const S=v.program;n.uniformBlockBinding(y,S)}function c(y,v){let S=s[y.id];S===void 0&&(_(y),S=u(y),s[y.id]=S,y.addEventListener("dispose",m));const M=v.program;n.updateUBOMapping(y,M);const w=e.render.frame;r[y.id]!==w&&(d(y),r[y.id]=w)}function u(y){const v=h();y.__bindingPointIndex=v;const S=i.createBuffer(),M=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,M,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=s[y.id],S=y.uniforms,M=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let w=0,T=S.length;w<T;w++){const C=S[w];if(p(C,w,M)===!0){const x=C.__offset,A=Array.isArray(C.value)?C.value:[C.value];let W=0;for(let q=0;q<A.length;q++){const I=A[q],O=g(I);typeof I=="number"?(C.__data[0]=I,i.bufferSubData(i.UNIFORM_BUFFER,x+W,C.__data)):I.isMatrix3?(C.__data[0]=I.elements[0],C.__data[1]=I.elements[1],C.__data[2]=I.elements[2],C.__data[3]=I.elements[0],C.__data[4]=I.elements[3],C.__data[5]=I.elements[4],C.__data[6]=I.elements[5],C.__data[7]=I.elements[0],C.__data[8]=I.elements[6],C.__data[9]=I.elements[7],C.__data[10]=I.elements[8],C.__data[11]=I.elements[0]):(I.toArray(C.__data,W),W+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,x,C.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,v,S){const M=y.value;if(S[v]===void 0){if(typeof M=="number")S[v]=M;else{const w=Array.isArray(M)?M:[M],T=[];for(let C=0;C<w.length;C++)T.push(w[C].clone());S[v]=T}return!0}else if(typeof M=="number"){if(S[v]!==M)return S[v]=M,!0}else{const w=Array.isArray(S[v])?S[v]:[S[v]],T=Array.isArray(M)?M:[M];for(let C=0;C<w.length;C++){const x=w[C];if(x.equals(T[C])===!1)return x.copy(T[C]),!0}}return!1}function _(y){const v=y.uniforms;let S=0;const M=16;let w=0;for(let T=0,C=v.length;T<C;T++){const x=v[T],A={boundary:0,storage:0},W=Array.isArray(x.value)?x.value:[x.value];for(let q=0,I=W.length;q<I;q++){const O=W[q],N=g(O);A.boundary+=N.boundary,A.storage+=N.storage}if(x.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=S,T>0){w=S%M;const q=M-w;w!==0&&q-A.boundary<0&&(S+=M-w,x.__offset=S)}S+=A.storage}return w=S%M,w>0&&(S+=M-w),y.__size=S,y.__cache={},this}function g(y){const v={boundary:0,storage:0};return typeof y=="number"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}function cx(){const i=Br("canvas");return i.style.display="block",i}class wd{constructor(e={}){const{canvas:t=cx(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const f=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Te,this._useLegacyLights=!1,this.toneMapping=hi,this.toneMappingExposure=1;const v=this;let S=!1,M=0,w=0,T=null,C=-1,x=null;const A=new je,W=new je;let q=null;const I=new ve(0);let O=0,N=t.width,K=t.height,V=1,Y=null,Q=null;const Z=new je(0,0,N,K),z=new je(0,0,N,K);let X=!1;const he=new Hl;let re=!1,le=!1,xe=null;const Re=new Ne,ye=new pe,qe=new L,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return T===null?V:1}let B=n;function Mt(b,F){for(let $=0;$<b.length;$++){const U=b[$],j=t.getContext(U,F);if(j!==null)return j}return null}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hr}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",k,!1),t.addEventListener("webglcontextcreationerror",te,!1),B===null){const F=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&F.shift(),B=Mt(F,b),B===null)throw Mt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Se,Pe,Ae,et,Fe,Le,Xe,Et,Rt,R,E,H,ne,ee,ie,_e,se,G,P,J,fe,ae,de,Ce;function Ve(){Se=new y0(B),Pe=new p0(B,Se,e),Se.init(Pe),ae=new ix(B,Se,Pe),Ae=new tx(B,Se,Pe),et=new E0(B),Fe=new Hv,Le=new nx(B,Se,Ae,Fe,Pe,ae,et),Xe=new g0(v),Et=new x0(v),Rt=new Im(B,Pe),de=new d0(B,Se,Rt,Pe),R=new S0(B,Rt,et,de),E=new w0(B,R,Rt,et),P=new b0(B,Pe,Le),_e=new m0(Fe),H=new kv(v,Xe,Et,Se,Pe,de,_e),ne=new ox(v,Fe),ee=new Gv,ie=new $v(Se,Pe),G=new h0(v,Xe,Et,Ae,E,d,l),se=new ex(v,E,Pe),Ce=new lx(B,et,Pe,Ae),J=new f0(B,Se,et,Pe),fe=new M0(B,Se,et,Pe),et.programs=H.programs,v.capabilities=Pe,v.extensions=Se,v.properties=Fe,v.renderLists=ee,v.shadowMap=se,v.state=Ae,v.info=et}Ve();const D=new ax(v,B);this.xr=D,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const b=Se.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Se.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize(N,K,!1))},this.getSize=function(b){return b.set(N,K)},this.setSize=function(b,F,$=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=b,K=F,t.width=Math.floor(b*V),t.height=Math.floor(F*V),$===!0&&(t.style.width=b+"px",t.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(N*V,K*V).floor()},this.setDrawingBufferSize=function(b,F,$){N=b,K=F,V=$,t.width=Math.floor(b*$),t.height=Math.floor(F*$),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(A)},this.getViewport=function(b){return b.copy(Z)},this.setViewport=function(b,F,$,U){b.isVector4?Z.set(b.x,b.y,b.z,b.w):Z.set(b,F,$,U),Ae.viewport(A.copy(Z).multiplyScalar(V).floor())},this.getScissor=function(b){return b.copy(z)},this.setScissor=function(b,F,$,U){b.isVector4?z.set(b.x,b.y,b.z,b.w):z.set(b,F,$,U),Ae.scissor(W.copy(z).multiplyScalar(V).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(b){Ae.setScissorTest(X=b)},this.setOpaqueSort=function(b){Y=b},this.setTransparentSort=function(b){Q=b},this.getClearColor=function(b){return b.copy(G.getClearColor())},this.setClearColor=function(){G.setClearColor.apply(G,arguments)},this.getClearAlpha=function(){return G.getClearAlpha()},this.setClearAlpha=function(){G.setClearAlpha.apply(G,arguments)},this.clear=function(b=!0,F=!0,$=!0){let U=0;if(b){let j=!1;if(T!==null){const me=T.texture.format;j=me===od||me===ad||me===rd}if(j){const me=T.texture.type,Me=me===Gt||me===li||me===Bl||me===Di||me===id||me===sd,be=G.getClearColor(),we=G.getClearAlpha(),ke=be.r,Ee=be.g,Ie=be.b;Me?(p[0]=ke,p[1]=Ee,p[2]=Ie,p[3]=we,B.clearBufferuiv(B.COLOR,0,p)):(_[0]=ke,_[1]=Ee,_[2]=Ie,_[3]=we,B.clearBufferiv(B.COLOR,0,_))}else U|=B.COLOR_BUFFER_BIT}F&&(U|=B.DEPTH_BUFFER_BIT),$&&(U|=B.STENCIL_BUFFER_BIT),B.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",k,!1),t.removeEventListener("webglcontextcreationerror",te,!1),ee.dispose(),ie.dispose(),Fe.dispose(),Xe.dispose(),Et.dispose(),E.dispose(),de.dispose(),Ce.dispose(),H.dispose(),D.dispose(),D.removeEventListener("sessionstart",nt),D.removeEventListener("sessionend",On),xe&&(xe.dispose(),xe=null),qt.stop()};function ce(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=et.autoReset,F=se.enabled,$=se.autoUpdate,U=se.needsUpdate,j=se.type;Ve(),et.autoReset=b,se.enabled=F,se.autoUpdate=$,se.needsUpdate=U,se.type=j}function te(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ue(b){const F=b.target;F.removeEventListener("dispose",ue),Be(F)}function Be(b){$e(b),Fe.remove(b)}function $e(b){const F=Fe.get(b).programs;F!==void 0&&(F.forEach(function($){H.releaseProgram($)}),b.isShaderMaterial&&H.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,$,U,j,me){F===null&&(F=Ot);const Me=j.isMesh&&j.matrixWorld.determinant()<0,be=jf(b,F,$,U,j);Ae.setMaterial(U,Me);let we=$.index,ke=1;if(U.wireframe===!0){if(we=R.getWireframeAttribute($),we===void 0)return;ke=2}const Ee=$.drawRange,Ie=$.attributes.position;let lt=Ee.start*ke,pt=(Ee.start+Ee.count)*ke;me!==null&&(lt=Math.max(lt,me.start*ke),pt=Math.min(pt,(me.start+me.count)*ke)),we!==null?(lt=Math.max(lt,0),pt=Math.min(pt,we.count)):Ie!=null&&(lt=Math.max(lt,0),pt=Math.min(pt,Ie.count));const hn=pt-lt;if(hn<0||hn===1/0)return;de.setup(j,U,be,$,we);let Kn,_t=J;if(we!==null&&(Kn=Rt.get(we),_t=fe,_t.setIndex(Kn)),j.isMesh)U.wireframe===!0?(Ae.setLineWidth(U.wireframeLinewidth*De()),_t.setMode(B.LINES)):_t.setMode(B.TRIANGLES);else if(j.isLine){let He=U.linewidth;He===void 0&&(He=1),Ae.setLineWidth(He*De()),j.isLineSegments?_t.setMode(B.LINES):j.isLineLoop?_t.setMode(B.LINE_LOOP):_t.setMode(B.LINE_STRIP)}else j.isPoints?_t.setMode(B.POINTS):j.isSprite&&_t.setMode(B.TRIANGLES);if(j.isInstancedMesh)_t.renderInstances(lt,hn,j.count);else if($.isInstancedBufferGeometry){const He=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ao=Math.min($.instanceCount,He);_t.renderInstances(lt,hn,ao)}else _t.render(lt,hn)},this.compile=function(b,F){function $(U,j,me){U.transparent===!0&&U.side===Dt&&U.forceSinglePass===!1?(U.side=It,U.needsUpdate=!0,ta(U,j,me),U.side=Gn,U.needsUpdate=!0,ta(U,j,me),U.side=Dt):ta(U,j,me)}m=ie.get(b),m.init(),y.push(m),b.traverseVisible(function(U){U.isLight&&U.layers.test(F.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights(v._useLegacyLights),b.traverse(function(U){const j=U.material;if(j)if(Array.isArray(j))for(let me=0;me<j.length;me++){const Me=j[me];$(Me,b,U)}else $(j,b,U)}),y.pop(),m=null};let tt=null;function gi(b){tt&&tt(b)}function nt(){qt.stop()}function On(){qt.start()}const qt=new Md;qt.setAnimationLoop(gi),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(b){tt=b,D.setAnimationLoop(b),b===null?qt.stop():qt.start()},D.addEventListener("sessionstart",nt),D.addEventListener("sessionend",On),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(F),F=D.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,F,T),m=ie.get(b,y.length),m.init(),y.push(m),Re.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),he.setFromProjectionMatrix(Re),le=this.localClippingEnabled,re=_e.init(this.clippingPlanes,le),g=ee.get(b,f.length),g.init(),f.push(g),Sc(b,F,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(Y,Q),this.info.render.frame++,re===!0&&_e.beginShadows();const $=m.state.shadowsArray;if(se.render($,b,F),re===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),G.render(g,b),m.setupLights(v._useLegacyLights),F.isArrayCamera){const U=F.cameras;for(let j=0,me=U.length;j<me;j++){const Me=U[j];Mc(g,b,Me,Me.viewport)}}else Mc(g,b,F);T!==null&&(Le.updateMultisampleRenderTarget(T),Le.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(v,b,F),de.resetDefaultState(),C=-1,x=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function Sc(b,F,$,U){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||he.intersectsSprite(b)){U&&qe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Re);const Me=E.update(b),be=b.material;be.visible&&g.push(b,Me,be,$,qe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||he.intersectsObject(b))){const Me=E.update(b),be=b.material;if(U&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),qe.copy(b.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),qe.copy(Me.boundingSphere.center)),qe.applyMatrix4(b.matrixWorld).applyMatrix4(Re)),Array.isArray(be)){const we=Me.groups;for(let ke=0,Ee=we.length;ke<Ee;ke++){const Ie=we[ke],lt=be[Ie.materialIndex];lt&&lt.visible&&g.push(b,Me,lt,$,qe.z,Ie)}}else be.visible&&g.push(b,Me,be,$,qe.z,null)}}const me=b.children;for(let Me=0,be=me.length;Me<be;Me++)Sc(me[Me],F,$,U)}function Mc(b,F,$,U){const j=b.opaque,me=b.transmissive,Me=b.transparent;m.setupLightsView($),re===!0&&_e.setGlobalState(v.clippingPlanes,$),me.length>0&&Yf(j,me,F,$),U&&Ae.viewport(A.copy(U)),j.length>0&&ea(j,F,$),me.length>0&&ea(me,F,$),Me.length>0&&ea(Me,F,$),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Yf(b,F,$,U){const j=Pe.isWebGL2;xe===null&&(xe=new At(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?Qs:Gt,minFilter:Ni,samples:j?4:0})),v.getDrawingBufferSize(ye),j?xe.setSize(ye.x,ye.y):xe.setSize(za(ye.x),za(ye.y));const me=v.getRenderTarget();v.setRenderTarget(xe),v.getClearColor(I),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear();const Me=v.toneMapping;v.toneMapping=hi,ea(b,$,U),Le.updateMultisampleRenderTarget(xe),Le.updateRenderTargetMipmap(xe);let be=!1;for(let we=0,ke=F.length;we<ke;we++){const Ee=F[we],Ie=Ee.object,lt=Ee.geometry,pt=Ee.material,hn=Ee.group;if(pt.side===Dt&&Ie.layers.test(U.layers)){const Kn=pt.side;pt.side=It,pt.needsUpdate=!0,Ec(Ie,$,U,lt,pt,hn),pt.side=Kn,pt.needsUpdate=!0,be=!0}}be===!0&&(Le.updateMultisampleRenderTarget(xe),Le.updateRenderTargetMipmap(xe)),v.setRenderTarget(me),v.setClearColor(I,O),v.toneMapping=Me}function ea(b,F,$){const U=F.isScene===!0?F.overrideMaterial:null;for(let j=0,me=b.length;j<me;j++){const Me=b[j],be=Me.object,we=Me.geometry,ke=U===null?Me.material:U,Ee=Me.group;be.layers.test($.layers)&&Ec(be,F,$,we,ke,Ee)}}function Ec(b,F,$,U,j,me){b.onBeforeRender(v,F,$,U,j,me),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),j.onBeforeRender(v,F,$,U,b,me),j.transparent===!0&&j.side===Dt&&j.forceSinglePass===!1?(j.side=It,j.needsUpdate=!0,v.renderBufferDirect($,F,U,j,b,me),j.side=Gn,j.needsUpdate=!0,v.renderBufferDirect($,F,U,j,b,me),j.side=Dt):v.renderBufferDirect($,F,U,j,b,me),b.onAfterRender(v,F,$,U,j,me)}function ta(b,F,$){F.isScene!==!0&&(F=Ot);const U=Fe.get(b),j=m.state.lights,me=m.state.shadowsArray,Me=j.state.version,be=H.getParameters(b,j.state,me,F,$),we=H.getProgramCacheKey(be);let ke=U.programs;U.environment=b.isMeshStandardMaterial?F.environment:null,U.fog=F.fog,U.envMap=(b.isMeshStandardMaterial?Et:Xe).get(b.envMap||U.environment),ke===void 0&&(b.addEventListener("dispose",ue),ke=new Map,U.programs=ke);let Ee=ke.get(we);if(Ee!==void 0){if(U.currentProgram===Ee&&U.lightsStateVersion===Me)return Tc(b,be),Ee}else be.uniforms=H.getUniforms(b),b.onBuild($,be,v),b.onBeforeCompile(be,v),Ee=H.acquireProgram(be,we),ke.set(we,Ee),U.uniforms=be.uniforms;const Ie=U.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ie.clippingPlanes=_e.uniform),Tc(b,be),U.needsLights=Kf(b),U.lightsStateVersion=Me,U.needsLights&&(Ie.ambientLightColor.value=j.state.ambient,Ie.lightProbe.value=j.state.probe,Ie.directionalLights.value=j.state.directional,Ie.directionalLightShadows.value=j.state.directionalShadow,Ie.spotLights.value=j.state.spot,Ie.spotLightShadows.value=j.state.spotShadow,Ie.rectAreaLights.value=j.state.rectArea,Ie.ltc_1.value=j.state.rectAreaLTC1,Ie.ltc_2.value=j.state.rectAreaLTC2,Ie.pointLights.value=j.state.point,Ie.pointLightShadows.value=j.state.pointShadow,Ie.hemisphereLights.value=j.state.hemi,Ie.directionalShadowMap.value=j.state.directionalShadowMap,Ie.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ie.spotShadowMap.value=j.state.spotShadowMap,Ie.spotLightMatrix.value=j.state.spotLightMatrix,Ie.spotLightMap.value=j.state.spotLightMap,Ie.pointShadowMap.value=j.state.pointShadowMap,Ie.pointShadowMatrix.value=j.state.pointShadowMatrix);const lt=Ee.getUniforms(),pt=La.seqWithValue(lt.seq,Ie);return U.currentProgram=Ee,U.uniformsList=pt,Ee}function Tc(b,F){const $=Fe.get(b);$.outputColorSpace=F.outputColorSpace,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function jf(b,F,$,U,j){F.isScene!==!0&&(F=Ot),Le.resetTextureUnits();const me=F.fog,Me=U.isMeshStandardMaterial?F.environment:null,be=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Wn,we=(U.isMeshStandardMaterial?Et:Xe).get(U.envMap||Me),ke=U.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ee=!!$.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Ie=!!$.morphAttributes.position,lt=!!$.morphAttributes.normal,pt=!!$.morphAttributes.color;let hn=hi;U.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(hn=v.toneMapping);const Kn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,_t=Kn!==void 0?Kn.length:0,He=Fe.get(U),ao=m.state.lights;if(re===!0&&(le===!0||b!==x)){const nn=b===x&&U.id===C;_e.setState(U,b,nn)}let vt=!1;U.version===He.__version?(He.needsLights&&He.lightsStateVersion!==ao.state.version||He.outputColorSpace!==be||j.isInstancedMesh&&He.instancing===!1||!j.isInstancedMesh&&He.instancing===!0||j.isSkinnedMesh&&He.skinning===!1||!j.isSkinnedMesh&&He.skinning===!0||j.isInstancedMesh&&He.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&He.instancingColor===!1&&j.instanceColor!==null||He.envMap!==we||U.fog===!0&&He.fog!==me||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==_e.numPlanes||He.numIntersection!==_e.numIntersection)||He.vertexAlphas!==ke||He.vertexTangents!==Ee||He.morphTargets!==Ie||He.morphNormals!==lt||He.morphColors!==pt||He.toneMapping!==hn||Pe.isWebGL2===!0&&He.morphTargetsCount!==_t)&&(vt=!0):(vt=!0,He.__version=U.version);let Gi=He.currentProgram;vt===!0&&(Gi=ta(U,F,j));let Ac=!1,gr=!1,oo=!1;const Yt=Gi.getUniforms(),Wi=He.uniforms;if(Ae.useProgram(Gi.program)&&(Ac=!0,gr=!0,oo=!0),U.id!==C&&(C=U.id,gr=!0),Ac||x!==b){if(Yt.setValue(B,"projectionMatrix",b.projectionMatrix),Pe.logarithmicDepthBuffer&&Yt.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),x!==b&&(x=b,gr=!0,oo=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const nn=Yt.map.cameraPosition;nn!==void 0&&nn.setValue(B,qe.setFromMatrixPosition(b.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Yt.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||j.isSkinnedMesh)&&Yt.setValue(B,"viewMatrix",b.matrixWorldInverse)}if(j.isSkinnedMesh){Yt.setOptional(B,j,"bindMatrix"),Yt.setOptional(B,j,"bindMatrixInverse");const nn=j.skeleton;nn&&(Pe.floatVertexTextures?(nn.boneTexture===null&&nn.computeBoneTexture(),Yt.setValue(B,"boneTexture",nn.boneTexture,Le),Yt.setValue(B,"boneTextureSize",nn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const lo=$.morphAttributes;if((lo.position!==void 0||lo.normal!==void 0||lo.color!==void 0&&Pe.isWebGL2===!0)&&P.update(j,$,Gi),(gr||He.receiveShadow!==j.receiveShadow)&&(He.receiveShadow=j.receiveShadow,Yt.setValue(B,"receiveShadow",j.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Wi.envMap.value=we,Wi.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),gr&&(Yt.setValue(B,"toneMappingExposure",v.toneMappingExposure),He.needsLights&&$f(Wi,oo),me&&U.fog===!0&&ne.refreshFogUniforms(Wi,me),ne.refreshMaterialUniforms(Wi,U,V,K,xe),La.upload(B,He.uniformsList,Wi,Le)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(La.upload(B,He.uniformsList,Wi,Le),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Yt.setValue(B,"center",j.center),Yt.setValue(B,"modelViewMatrix",j.modelViewMatrix),Yt.setValue(B,"normalMatrix",j.normalMatrix),Yt.setValue(B,"modelMatrix",j.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const nn=U.uniformsGroups;for(let co=0,Zf=nn.length;co<Zf;co++)if(Pe.isWebGL2){const bc=nn[co];Ce.update(bc,Gi),Ce.bind(bc,Gi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gi}function $f(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function Kf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,F,$){Fe.get(b.texture).__webglTexture=F,Fe.get(b.depthTexture).__webglTexture=$;const U=Fe.get(b);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=$===void 0,U.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,F){const $=Fe.get(b);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,$=0){T=b,M=F,w=$;let U=!0,j=null,me=!1,Me=!1;if(b){const we=Fe.get(b);we.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(B.FRAMEBUFFER,null),U=!1):we.__webglFramebuffer===void 0?Le.setupRenderTarget(b):we.__hasExternalTextures&&Le.rebindTextures(b,Fe.get(b.texture).__webglTexture,Fe.get(b.depthTexture).__webglTexture);const ke=b.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Me=!0);const Ee=Fe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ee[F])?j=Ee[F][$]:j=Ee[F],me=!0):Pe.isWebGL2&&b.samples>0&&Le.useMultisampledRTT(b)===!1?j=Fe.get(b).__webglMultisampledFramebuffer:Array.isArray(Ee)?j=Ee[$]:j=Ee,A.copy(b.viewport),W.copy(b.scissor),q=b.scissorTest}else A.copy(Z).multiplyScalar(V).floor(),W.copy(z).multiplyScalar(V).floor(),q=X;if(Ae.bindFramebuffer(B.FRAMEBUFFER,j)&&Pe.drawBuffers&&U&&Ae.drawBuffers(b,j),Ae.viewport(A),Ae.scissor(W),Ae.setScissorTest(q),me){const we=Fe.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,we.__webglTexture,$)}else if(Me){const we=Fe.get(b.texture),ke=F||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,we.__webglTexture,$||0,ke)}C=-1},this.readRenderTargetPixels=function(b,F,$,U,j,me,Me){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Fe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me]),be){Ae.bindFramebuffer(B.FRAMEBUFFER,be);try{const we=b.texture,ke=we.format,Ee=we.type;if(ke!==vn&&ae.convert(ke)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=Ee===Qs&&(Se.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Ee!==Gt&&ae.convert(Ee)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ee===ci&&(Pe.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-U&&$>=0&&$<=b.height-j&&B.readPixels(F,$,U,j,ae.convert(ke),ae.convert(Ee),me)}finally{const we=T!==null?Fe.get(T).__webglFramebuffer:null;Ae.bindFramebuffer(B.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(b,F,$=0){const U=Math.pow(2,-$),j=Math.floor(F.image.width*U),me=Math.floor(F.image.height*U);Le.setTexture2D(F,0),B.copyTexSubImage2D(B.TEXTURE_2D,$,0,0,b.x,b.y,j,me),Ae.unbindTexture()},this.copyTextureToTexture=function(b,F,$,U=0){const j=F.image.width,me=F.image.height,Me=ae.convert($.format),be=ae.convert($.type);Le.setTexture2D($,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,$.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,$.unpackAlignment),F.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,U,b.x,b.y,j,me,Me,be,F.image.data):F.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,U,b.x,b.y,F.mipmaps[0].width,F.mipmaps[0].height,Me,F.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,U,b.x,b.y,Me,be,F.image),U===0&&$.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(b,F,$,U,j=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=b.max.x-b.min.x+1,Me=b.max.y-b.min.y+1,be=b.max.z-b.min.z+1,we=ae.convert(U.format),ke=ae.convert(U.type);let Ee;if(U.isData3DTexture)Le.setTexture3D(U,0),Ee=B.TEXTURE_3D;else if(U.isDataArrayTexture)Le.setTexture2DArray(U,0),Ee=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,U.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,U.unpackAlignment);const Ie=B.getParameter(B.UNPACK_ROW_LENGTH),lt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),pt=B.getParameter(B.UNPACK_SKIP_PIXELS),hn=B.getParameter(B.UNPACK_SKIP_ROWS),Kn=B.getParameter(B.UNPACK_SKIP_IMAGES),_t=$.isCompressedTexture?$.mipmaps[0]:$.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,_t.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,_t.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,b.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,b.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,b.min.z),$.isDataTexture||$.isData3DTexture?B.texSubImage3D(Ee,j,F.x,F.y,F.z,me,Me,be,we,ke,_t.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Ee,j,F.x,F.y,F.z,me,Me,be,we,_t.data)):B.texSubImage3D(Ee,j,F.x,F.y,F.z,me,Me,be,we,ke,_t),B.pixelStorei(B.UNPACK_ROW_LENGTH,Ie),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,lt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,pt),B.pixelStorei(B.UNPACK_SKIP_ROWS,hn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Kn),j===0&&U.generateMipmaps&&B.generateMipmap(Ee),Ae.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?Le.setTextureCube(b,0):b.isData3DTexture?Le.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Le.setTexture2DArray(b,0):Le.setTexture2D(b,0),Ae.unbindTexture()},this.resetState=function(){M=0,w=0,T=null,Ae.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Te?di:Ja}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===di?Te:Wn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ux extends wd{}ux.prototype.isWebGL1Renderer=!0;class Ha extends at{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class hx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pl,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const jt=new L;class Xl{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),s=Ze(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),s=Ze(s,this.array),r=Ze(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Tt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Yu=new L,ju=new je,$u=new je,dx=new L,Ku=new Ne,Ns=new L,zo=new jn,Zu=new Ne,ko=new Yr;class fx extends dt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new mi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Ns.fromBufferAttribute(t,n),this.applyBoneTransform(n,Ns),this.boundingBox.expandByPoint(Ns)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new jn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Ns.fromBufferAttribute(t,n),this.applyBoneTransform(n,Ns),this.boundingSphere.expandByPoint(Ns)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zo.copy(this.boundingSphere),zo.applyMatrix4(s),e.ray.intersectsSphere(zo)!==!1&&(Zu.copy(s).invert(),ko.copy(e.ray).applyMatrix4(Zu),!(this.boundingBox!==null&&ko.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ko)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new je,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;ju.fromBufferAttribute(s.attributes.skinIndex,e),$u.fromBufferAttribute(s.attributes.skinWeight,e),Yu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=$u.getComponent(r);if(a!==0){const o=ju.getComponent(r);Ku.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(dx.copy(Yu).applyMatrix4(Ku),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Rd extends at{constructor(){super(),this.isBone=!0,this.type="Bone"}}class px extends St{constructor(e=null,t=1,n=1,s,r,a,o,l,c=ct,u=ct,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ju=new Ne,mx=new Ne;class ql{constructor(e=[],t=[]){this.uuid=Dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ne;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:mx;Ju.multiplyMatrices(o,t[r]),Ju.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new ql(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=hd(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new px(t,e,e,vn,ci);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Rd),this.bones.push(a),this.boneInverses.push(new Ne().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class Qu extends Tt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Fs=new Ne,eh=new Ne,Ma=[],th=new mi,gx=new Ne,Sr=new dt,Mr=new jn;class _x extends dt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qu(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,gx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fs),th.copy(e.boundingBox).applyMatrix4(Fs),this.boundingBox.union(th)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fs),Mr.copy(e.boundingSphere).applyMatrix4(Fs),this.boundingSphere.union(Mr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Sr.geometry=this.geometry,Sr.material=this.material,Sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mr.copy(this.boundingSphere),Mr.applyMatrix4(n),e.ray.intersectsSphere(Mr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Fs),eh.multiplyMatrices(n,Fs),Sr.matrixWorld=eh,Sr.raycast(e,Ma);for(let a=0,o=Ma.length;a<o;a++){const l=Ma[a];l.instanceId=r,l.object=this,t.push(l)}Ma.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Qu(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Cd extends Mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const nh=new L,ih=new L,sh=new Ne,Ho=new Yr,Ea=new jn;class Yl extends at{constructor(e=new An,t=new Cd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)nh.fromBufferAttribute(t,s-1),ih.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=nh.distanceTo(ih);e.setAttribute("lineDistance",new En(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(s),Ea.radius+=r,e.ray.intersectsSphere(Ea)===!1)return;sh.copy(s).invert(),Ho.copy(e.ray).applyMatrix4(sh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new L,u=new L,h=new L,d=new L,p=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const f=Math.max(0,a.start),y=Math.min(_.count,a.start+a.count);for(let v=f,S=y-1;v<S;v+=p){const M=_.getX(v),w=_.getX(v+1);if(c.fromBufferAttribute(m,M),u.fromBufferAttribute(m,w),Ho.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||t.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let v=f,S=y-1;v<S;v+=p){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),Ho.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(d);w<e.near||w>e.far||t.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const rh=new L,ah=new L;class vx extends Yl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)rh.fromBufferAttribute(t,s),ah.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+rh.distanceTo(ah);e.setAttribute("lineDistance",new En(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xx extends Yl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Pd extends Mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const oh=new Ne,vl=new Yr,Ta=new jn,Aa=new L;class yx extends at{constructor(e=new An,t=new Pd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(s),Ta.radius+=r,e.ray.intersectsSphere(Ta)===!1)return;oh.copy(s).invert(),vl.copy(e.ray).applyMatrix4(oh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=d,g=p;_<g;_++){const m=c.getX(_);Aa.fromBufferAttribute(h,m),lh(Aa,m,l,s,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=d,g=p;_<g;_++)Aa.fromBufferAttribute(h,_),lh(Aa,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function lh(i,e,t,n,s,r,a){const o=vl.distanceSqToPoint(i);if(o<t){const l=new L;vl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Sx extends St{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class jl extends An{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],p=[];let _=0;const g=[],m=n/2;let f=0;y(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new En(h,3)),this.setAttribute("normal",new En(d,3)),this.setAttribute("uv",new En(p,2));function y(){const S=new L,M=new L;let w=0;const T=(t-e)/n;for(let C=0;C<=r;C++){const x=[],A=C/r,W=A*(t-e)+e;for(let q=0;q<=s;q++){const I=q/s,O=I*l+o,N=Math.sin(O),K=Math.cos(O);M.x=W*N,M.y=-A*n+m,M.z=W*K,h.push(M.x,M.y,M.z),S.set(N,T,K).normalize(),d.push(S.x,S.y,S.z),p.push(I,1-A),x.push(_++)}g.push(x)}for(let C=0;C<s;C++)for(let x=0;x<r;x++){const A=g[x][C],W=g[x+1][C],q=g[x+1][C+1],I=g[x][C+1];u.push(A,W,I),u.push(W,q,I),w+=6}c.addGroup(f,w,0),f+=w}function v(S){const M=_,w=new pe,T=new L;let C=0;const x=S===!0?e:t,A=S===!0?1:-1;for(let q=1;q<=s;q++)h.push(0,m*A,0),d.push(0,A,0),p.push(.5,.5),_++;const W=_;for(let q=0;q<=s;q++){const O=q/s*l+o,N=Math.cos(O),K=Math.sin(O);T.x=x*K,T.y=m*A,T.z=x*N,h.push(T.x,T.y,T.z),d.push(0,A,0),w.x=N*.5+.5,w.y=K*.5*A+.5,p.push(w.x,w.y),_++}for(let q=0;q<s;q++){const I=M+q,O=W+q;S===!0?u.push(O,O+1,I):u.push(O+1,O,I),C+=3}c.addGroup(f,C,S===!0?1:2),f+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $l extends Mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cd,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hi extends $l{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Si(i,e,t){return Ld(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)}function ba(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ld(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Mx(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function ch(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function Dd(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class $r{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ex extends $r{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ru,endingEnd:ru}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case au:r=e,o=2*t-n;break;case ou:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case au:a=e,l=2*n-t;break;case ou:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,_=(n-t)/(s-t),g=_*_,m=g*_,f=-d*m+2*d*g-d*_,y=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,v=(-1-p)*m+(1.5+p)*g+.5*_,S=p*m-p*g;for(let M=0;M!==o;++M)r[M]=f*a[u+M]+y*a[c+M]+v*a[l+M]+S*a[h+M];return r}}class Tx extends $r{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}}class Ax extends $r{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class $n{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ba(t,this.TimeBufferType),this.values=ba(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ba(e.times,Array),values:ba(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ax(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ex(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fr:t=this.InterpolantFactoryMethodDiscrete;break;case er:t=this.InterpolantFactoryMethodLinear;break;case go:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fr;case this.InterpolantFactoryMethodLinear:return er;case this.InterpolantFactoryMethodSmooth:return go}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=Si(n,r,a),this.values=Si(this.values,r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Ld(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=Si(this.times),t=Si(this.values),n=this.getValueSize(),s=this.getInterpolation()===go,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{const h=o*n,d=h-n,p=h+n;for(let _=0;_!==n;++_){const g=t[h+_];if(g!==t[d+_]||g!==t[p+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=Si(e,0,a),this.values=Si(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=Si(this.times,0),t=Si(this.values,0),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=er;class fr extends $n{}fr.prototype.ValueTypeName="bool";fr.prototype.ValueBufferType=Array;fr.prototype.DefaultInterpolation=Fr;fr.prototype.InterpolantFactoryMethodLinear=void 0;fr.prototype.InterpolantFactoryMethodSmooth=void 0;class Id extends $n{}Id.prototype.ValueTypeName="color";class ir extends $n{}ir.prototype.ValueTypeName="number";class bx extends $r{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Xn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class fs extends $n{InterpolantFactoryMethodLinear(e){return new bx(this.times,this.values,this.getValueSize(),e)}}fs.prototype.ValueTypeName="quaternion";fs.prototype.DefaultInterpolation=er;fs.prototype.InterpolantFactoryMethodSmooth=void 0;class pr extends $n{}pr.prototype.ValueTypeName="string";pr.prototype.ValueBufferType=Array;pr.prototype.DefaultInterpolation=Fr;pr.prototype.InterpolantFactoryMethodLinear=void 0;pr.prototype.InterpolantFactoryMethodSmooth=void 0;class sr extends $n{}sr.prototype.ValueTypeName="vector";class wx{constructor(e,t=-1,n,s=Ip){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Dn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Cx(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push($n.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=Mx(l);l=ch(l,1,u),c=ch(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new ir(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,p,_,g){if(p.length!==0){const m=[],f=[];Dd(p,m,f,_),m.length!==0&&g.push(new h(d,m,f))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let g=0;g<d[_].morphTargets.length;g++)p[d[_].morphTargets[g]]=-1;for(const g in p){const m=[],f=[];for(let y=0;y!==d[_].morphTargets.length;++y){const v=d[_];m.push(v.time),f.push(v.morphTarget===g?1:0)}s.push(new ir(".morphTargetInfluence["+g+"]",m,f))}l=p.length*a}else{const p=".bones["+t[h].name+"]";n(sr,p+".position",d,"pos",s),n(fs,p+".quaternion",d,"rot",s),n(sr,p+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Rx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ir;case"vector":case"vector2":case"vector3":case"vector4":return sr;case"color":return Id;case"quaternion":return fs;case"bool":case"boolean":return fr;case"string":return pr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Cx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Rx(i.type);if(i.times===void 0){const t=[],n=[];Dd(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const rr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Px{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],_=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const Lx=new Px;class mr{constructor(e){this.manager=e!==void 0?e:Lx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}mr.DEFAULT_MATERIAL_NAME="__DEFAULT";const ii={};class Dx extends Error{constructor(e,t){super(e),this.response=t}}class Ud extends mr{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=rr.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ii[e]!==void 0){ii[e].push({onLoad:t,onProgress:n,onError:s});return}ii[e]=[],ii[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ii[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,_=p!==0;let g=0;const m=new ReadableStream({start(f){y();function y(){h.read().then(({done:v,value:S})=>{if(v)f.close();else{g+=S.byteLength;const M=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:p});for(let w=0,T=u.length;w<T;w++){const C=u[w];C.onProgress&&C.onProgress(M)}f.enqueue(S),y()}})}}});return new Response(m)}else throw new Dx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{rr.add(e,c);const u=ii[e];delete ii[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=ii[e];if(u===void 0)throw this.manager.itemError(e),c;delete ii[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ix extends mr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=rr.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Br("img");function l(){u(),rr.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Od extends mr{constructor(e){super(e)}load(e,t,n,s){const r=new St,a=new Ix(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Kl extends at{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Vo=new Ne,uh=new L,hh=new L;class Zl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hl,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;uh.setFromMatrixPosition(e.matrixWorld),t.position.copy(uh),hh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hh),t.updateMatrixWorld(),Vo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ux extends Zl{constructor(){super(new Ft(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=tr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ox extends Kl{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ux}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const dh=new Ne,Er=new L,Go=new L;class Nx extends Zl{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pe(4,2),this._viewportCount=6,this._viewports=[new je(2,1,1,1),new je(0,1,1,1),new je(3,1,1,1),new je(1,1,1,1),new je(3,0,1,1),new je(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Er.setFromMatrixPosition(e.matrixWorld),n.position.copy(Er),Go.copy(n.position),Go.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Go),n.updateMatrixWorld(),s.makeTranslation(-Er.x,-Er.y,-Er.z),dh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dh)}}class Fx extends Kl{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Nx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Bx extends Zl{constructor(){super(new Vl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zx extends Kl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.shadow=new Bx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class xl{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class kx extends mr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=rr.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){rr.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}const Jl="\\[\\]\\.:\\/",Hx=new RegExp("["+Jl+"]","g"),Ql="[^"+Jl+"]",Vx="[^"+Jl.replace("\\.","")+"]",Gx=/((?:WC+[\/:])*)/.source.replace("WC",Ql),Wx=/(WCOD+)?/.source.replace("WCOD",Vx),Xx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ql),qx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ql),Yx=new RegExp("^"+Gx+Wx+Xx+qx+"$"),jx=["material","materials","bones","map"];class $x{constructor(e,t,n){const s=n||Ke.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ke{constructor(e,t,n){this.path=t,this.parsedPath=n||Ke.parseTrackName(t),this.node=Ke.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ke.Composite(e,t,n):new Ke(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Hx,"")}static parseTrackName(e){const t=Yx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);jx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Ke.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ke.Composite=$x;Ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ke.prototype.GetterByBindingType=[Ke.prototype._getValue_direct,Ke.prototype._getValue_array,Ke.prototype._getValue_arrayElement,Ke.prototype._getValue_toArray];Ke.prototype.SetterByBindingTypeAndVersioning=[[Ke.prototype._setValue_direct,Ke.prototype._setValue_direct_setNeedsUpdate,Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_array,Ke.prototype._setValue_array_setNeedsUpdate,Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_arrayElement,Ke.prototype._setValue_arrayElement_setNeedsUpdate,Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_fromArray,Ke.prototype._setValue_fromArray_setNeedsUpdate,Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ge{constructor(e){this.value=e}clone(){return new ge(this.value.clone===void 0?this.value:this.value.clone())}}class fh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hr);const Kx=[{name:"Kill City Kills",group:"Ride into the Badlands",path:"./songs/kill-city-kills/",url:"https://www.jamendo.com/track/1901190/kill-city-kills-ride-into-the-badlands",bpm:152},{name:"Nothing's Over",group:"In Camera",path:"./songs/nothings-over/",url:"https://www.jamendo.com/track/1397271/nothing-s-over",bpm:123},{name:"One Chance",group:"Fallen to Flux",path:"./songs/one-chance/",url:"https://www.jamendo.com/track/1155241/one-chance",bpm:123},{name:"Quantum Ocean",group:"From Sky to Abyss",path:"./songs/quantum-ocean/",url:"https://www.jamendo.com/track/1284951/quantum-ocean",bpm:96},{name:"Six Feet Under",group:"Convergence",path:"./songs/six-feet-under/",url:"https://www.jamendo.com/track/80122/six-feet-under",bpm:152},{name:"The Deep",group:"Anitek",path:"./songs/the-deep/",url:"https://www.jamendo.com/track/1884527/the-deep",bpm:117},{name:"Alone",group:"Color out",path:"./songs/alone/",url:"https://www.jamendo.com/track/1886257/alone",bpm:129},{name:"Lost",group:"Jount",path:"./songs/lost/",url:"https://www.jamendo.com/track/1910909/jount-lost",bpm:117}];class ec{constructor(){this.callbacks={},this.callbacks.base={}}on(e,t){return typeof e>"u"||e===""?(console.warn("wrong names"),!1):typeof t>"u"?(console.warn("wrong callback"),!1):(this.resolveNames(e).forEach(s=>{const r=this.resolveName(s);this.callbacks[r.namespace]instanceof Object||(this.callbacks[r.namespace]={}),this.callbacks[r.namespace][r.value]instanceof Array||(this.callbacks[r.namespace][r.value]=[]),this.callbacks[r.namespace][r.value].push(t)}),this)}off(e){return typeof e>"u"||e===""?(console.warn("wrong name"),!1):(this.resolveNames(e).forEach(n=>{const s=this.resolveName(n);if(s.namespace!=="base"&&s.value==="")delete this.callbacks[s.namespace];else if(s.namespace==="base")for(const r in this.callbacks)this.callbacks[r]instanceof Object&&this.callbacks[r][s.value]instanceof Array&&(delete this.callbacks[r][s.value],Object.keys(this.callbacks[r]).length===0&&delete this.callbacks[r]);else this.callbacks[s.namespace]instanceof Object&&this.callbacks[s.namespace][s.value]instanceof Array&&(delete this.callbacks[s.namespace][s.value],Object.keys(this.callbacks[s.namespace]).length===0&&delete this.callbacks[s.namespace])}),this)}trigger(e,t){if(typeof e>"u"||e==="")return console.warn("wrong name"),!1;let n=null;const s=t instanceof Array?t:[];let r=this.resolveNames(e);if(r=this.resolveName(r[0]),r.namespace==="base")for(const a in this.callbacks)this.callbacks[a]instanceof Object&&this.callbacks[a][r.value]instanceof Array&&this.callbacks[a][r.value].forEach(function(o){o.apply(this,s)});else if(this.callbacks[r.namespace]instanceof Object){if(r.value==="")return console.warn("wrong name"),this;this.callbacks[r.namespace][r.value].forEach(function(a){a.apply(this,s)})}return n}resolveNames(e){let t=e;return t=t.replace(/[^a-zA-Z0-9 ,/.]/g,""),t=t.replace(/[,/]+/g," "),t=t.split(" "),t}resolveName(e){const t={},n=e.split(".");return t.original=e,t.value=n[0],t.namespace="base",n.length>1&&n[1]!==""&&(t.namespace=n[1]),t}}class Zx extends ec{constructor(){super(),this.experience=new gt,this.options=this.experience.options,this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.hEventResize=this.eventResize.bind(this),window.addEventListener("resize",this.hEventResize)}eventResize(){this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.trigger("resize")}destroy(){window.removeEventListener("resize",this.hEventResize),this.hEventResize=null}}class Jx extends ec{constructor(){super(),this.experience=new gt,this.elements=this.experience.htmlElements,this.start=Date.now(),this.current=this.start,this.elapsed=0,this.delta=16,this.actualFrame=this.start+1e3,this.frameCounter=0,this.fps=0,this.experience.options.showFPS===!1&&(this.calculateFPS=this.calculateFPSSilent),window.requestAnimationFrame(()=>{this.tick()})}measureQuality(){this.qualityCounter=0,this.qualityTotal=0,this.qualityTimes=6,setTimeout(()=>{this.qualityInterval=setInterval(()=>{if(this.qualityCounter>this.qualityTimes){clearInterval(this.qualityInterval),this.qualityTotal=this.qualityTotal/this.qualityTimes,this.experience.recomended(this.qualityTotal);return}this.qualityCounter!=0&&(this.qualityTotal+=this.fps),this.qualityCounter++},250)},1500)}calculateFPS(){if(this.current>this.actualFrame){this.actualFrame=this.current+1e3,this.elements.elementFPS.innerHTML=this.frameCounter;const e=256/60;this.elements.elementFPS.style.color="rgb("+Math.round(255-this.frameCounter*e)+","+Math.round(this.frameCounter*e)+", 0)",this.fps=this.frameCounter,this.frameCounter=0}else this.frameCounter++}calculateFPSSilent(){this.current>this.actualFrame?(this.actualFrame=this.current+1e3,this.fps=this.frameCounter,this.frameCounter=0):this.frameCounter++}tick(){const e=Date.now();this.delta=e-this.current,this.current=e,this.elapsed=this.current-this.start,this.calculateFPS(),this.trigger("tick"),window.requestAnimationFrame(()=>{this.tick()})}}var Ka;const yc=class{constructor(){this.experience=new gt,this.options=this.experience.options,this.sizes=this.experience.sizes,this.songs=this.experience.songs,this.song=this.experience.song,this.create(),this.setupAudioControlEvents(),this.setupQualityEvents()}setupQualityEvents(){this.elementQualityHigh.addEventListener("click",()=>{this.experience.setQuality("high"),this.elementQuality.remove()}),this.elementQualityLow.addEventListener("click",()=>{this.experience.setQuality("low"),this.elementQuality.remove()})}setupAudioControlEvents(){this.dragTime=!1,this.defaultSong=!0,this.experience.options.debug===!0&&(this.elementAudioSongs.addEventListener("change",e=>{for(let t=0;t<this.songs.length;t++)if(e.currentTarget.value===this.songs[t].name){this.experience.song=this.songs[t],this.experience.currentSong=t;break}this.experience.audioAnalizer.loadSong(this.experience.song.path,this.experience.song.bpm),this.experience.audioAnalizer.playPause()}),this.elementAudioVolume.addEventListener("input",e=>{this.experience.debug===!1?this.experience.audioAnalizer.volume(e.currentTarget.value):(this.experience.audioAnalizer.volume(e.currentTarget.value,!0),this.elementAudioVolumeSong.value=0,this.elementAudioVolumeBass.value=e.currentTarget.value,this.elementAudioVolumeDrum.value=e.currentTarget.value,this.elementAudioVolumeOther.value=e.currentTarget.value,this.elementAudioVolumeVoice.value=e.currentTarget.value,this.elementAudioVolumePiano.value=e.currentTarget.value)}),this.experience.options.audioMultiChannel===!0&&(this.elementAudioVolumeSong.addEventListener("input",e=>{this.experience.audioAnalizer.channelSong.volume(e.currentTarget.value)}),this.elementAudioVolumeBass.addEventListener("input",e=>{this.experience.audioAnalizer.channelBass.volume(e.currentTarget.value)}),this.elementAudioVolumeDrum.addEventListener("input",e=>{this.experience.audioAnalizer.channelDrum.volume(e.currentTarget.value)}),this.elementAudioVolumeOther.addEventListener("input",e=>{this.experience.audioAnalizer.channelOther.volume(e.currentTarget.value)}),this.elementAudioVolumeVoice.addEventListener("input",e=>{this.experience.audioAnalizer.channelVocal.volume(e.currentTarget.value)}),this.elementAudioVolumePiano.addEventListener("input",e=>{this.experience.audioAnalizer.channelPiano.volume(e.currentTarget.value)})),this.elementAudioSpeed.addEventListener("input",e=>{this.experience.audioAnalizer.speed(e.currentTarget.value)}),this.experience.options.audioMultiChannel===!0&&(this.elementMuteSong.addEventListener("click",()=>{this.experience.audioAnalizer.channelSong.currentVolume===0?this.experience.audioAnalizer.channelSong.volume(this.experience.audioAnalizer.currentVolume):this.experience.audioAnalizer.channelSong.volume(0),this.elementAudioVolumeSong.value=this.experience.audioAnalizer.channelSong.currentVolume}),this.elementMuteBass.addEventListener("click",()=>{this.experience.audioAnalizer.channelBass.currentVolume===0?this.experience.audioAnalizer.channelBass.volume(this.experience.audioAnalizer.currentVolume):this.experience.audioAnalizer.channelBass.volume(0),this.elementAudioVolumeBass.value=this.experience.audioAnalizer.channelBass.currentVolume}),this.elementMuteDrum.addEventListener("click",()=>{this.experience.audioAnalizer.channelDrum.currentVolume===0?this.experience.audioAnalizer.channelDrum.volume(this.experience.audioAnalizer.currentVolume):this.experience.audioAnalizer.channelDrum.volume(0),this.elementAudioVolumeDrum.value=this.experience.audioAnalizer.channelDrum.currentVolume}),this.elementMuteOther.addEventListener("click",()=>{this.experience.audioAnalizer.channelOther.currentVolume===0?this.experience.audioAnalizer.channelOther.volume(this.experience.audioAnalizer.currentVolume):this.experience.audioAnalizer.channelOther.volume(0),this.elementAudioVolumeOther.value=this.experience.audioAnalizer.channelOther.currentVolume}),this.elementMuteVoice.addEventListener("click",()=>{this.experience.audioAnalizer.channelVocal.currentVolume===0?this.experience.audioAnalizer.channelVocal.volume(this.experience.audioAnalizer.currentVolume):this.experience.audioAnalizer.channelVocal.volume(0),this.elementAudioVolumeVoice.value=this.experience.audioAnalizer.channelVocal.currentVolume}),this.elementMutePiano.addEventListener("click",()=>{this.experience.audioAnalizer.channelPiano.currentVolume===0?this.experience.audioAnalizer.channelPiano.volume(this.experience.audioAnalizer.currentVolume):this.experience.audioAnalizer.channelPiano.volume(0),this.elementAudioVolumePiano.value=this.experience.audioAnalizer.channelPiano.currentVolume})),this.elementDefaultSpeed.addEventListener("click",()=>{this.elementAudioSpeed.value=1,this.experience.audioAnalizer.speed(1)}),this.elementAudioTime.addEventListener("mousedown",e=>{this.dragTime=!0}),this.elementAudioTime.addEventListener("touchstart",e=>{this.dragTime=!0},{passive:!0}),this.elementAudioTime.addEventListener("mouseup",e=>{this.dragTime=!1}),this.elementAudioTime.addEventListener("touchend",e=>{this.dragTime=!1},{passive:!0}),this.elementAudioTime.addEventListener("change",e=>{if(this.elementDebugEffects.innerHTML="",this.experience.audioAnalizer.setTime(this.elementAudioTime.value),this.experience.audioAnalizer.bpm!==0){const t=6e4/this.experience.audioAnalizer.bpm;this.experience.audioAnalizer.currentBpm=Math.floor(this.experience.audioAnalizer.channelSong.song.currentTime*1e3/t),this.experience.onAudioBpmChange(this.experience.audioAnalizer.currentBpm)}})),this.experience.options.debug===!0&&this.experience.options.showBPM===!0&&this.elementAudioTime.addEventListener("input",e=>{const t=6e4/this.experience.audioAnalizer.bpm;this.experience.audioAnalizer.currentBpm=Math.floor(e.target.value*1e3/t),this.experience.onAudioBpmChange(this.experience.audioAnalizer.currentBpm),this.experience.audioAnalizer.isPlaying===!1&&this.experience.audioAnalizer.setTime(this.elementAudioTime.value)})}audioUI(e){this.elementPlay.setAttribute("play",e),this.elementPause.setAttribute("play",e),this.elementSongInfoName.innerHTML="<a href='"+this.experience.song.url+"' target='_blank'>"+this.experience.song.name+"</a>",this.elementSongInfoArtist.innerHTML="<a href='"+this.experience.song.url+"' target='_blank'>"+this.experience.song.group+"</a>",this.defaultSong===!0&&(e==="true"||e===!0)?this.elementSongInfo.setAttribute("visible",!1):this.elementSongInfo.setAttribute("visible",!0)}create(){if(typeof this.id>"u"){const e=document.createElement("div");this.id=Cc(yc,Ka)._++,e.id="Experience"+this.id,e.className="Experience",this.options.rootElement.appendChild(e),this.elementExperience=document.getElementById(e.id),this.elementExperience.setAttribute("loading",!0);let t="";if(t+='<canvas id="Experience'+this.id+'_Canvas" class="Experience_Canvas"></canvas>',t+='<div class="Experience_Loading Experience_Panel"><span>Loading...</span></div>',t+=`<div id='Experience_Quality' class='Experience_Panel'> 
                <h2>Select experience quality</h2>                
                <div class='Experience_Quality_List' id='Experience_Quality_Low'>
                    <div>Low</div>
                    <div>
                        512 frequency values <br />
                        One channel analisis 
                    </div>
                </div>
                <div class='Experience_Quality_List' id='Experience_Quality_High'>
                    <div>High</div>
                    <div>
                        2048 frequency values <br />
                        Six channel analisis 
                    </div>
                </div>
            </div>`,t+=`<div id='Experience_PressPlay' class='Experience_Panel'>
            Press play to start
            </div>
            <div id='Experience_PressFullScreen' class='Experience_Panel' show='true'>
                Full screen button
            </div>            
            `,this.options.showBPM===!0&&(t+='<div class="Experience_DebugEffects"></div>'),t+='<div class="Experience_Controls">',this.options.showBPM===!0&&(t+="<div class='Experience_Panel Experience_Static' title='Beats per minute'><div class='Experience_BPM'>0</div><div class='Experience_TxtBPM'>cbpm</div></div>"),this.options.showFPS===!0&&(t+="<div class='Experience_Panel Experience_Static' title='Frames Per Second'><div class='Experience_FPS'>60</div><div class='Experience_TxtFPS'>fps</div></div>"),this.options.buttonFullScreen===!0&&(t+="<div id='fullScreen' class='Experience_Panel Experience_Control' title='Full screen mode'><img draggable='false' src='icos.svg#svg-pantalla-completa' /></div><div id='restoreScreen' class='Experience_Panel Experience_Control' title='Restore screen'><img draggable='false' src='icos.svg#svg-restaurar-pantalla' /></div>"),this.options.buttonGitHub===!0&&(t+="<a href='"+this.options.urlGitHub+"' target='_blank' class='Experience_Panel Experience_Control' title='GitHub project'><img draggable='false' src='icos.svg#svg-github' /></a>"),this.options.buttonLogo===!0&&(t+="<a href='https://devildrey33.es' target='_blank' id='Logo' class='Experience_Panel Experience_Control'><img draggable='false' src='icos.svg#svg-logo' /><div id='LogoText'><span>D</span><span>E</span><span>V</span><span>I</span><span>L</span><span>D</span><span>R</span><span>E</span><span>Y</span><span>&nbsp;</span><span>3</span><span>3</span></div></a>"),t+="</div>",t+=`<div class="Experience_Play Experience_Panel Experience_Control" play="true" disabled="true"><img draggable='false' src='https://devildrey33.es/Ejemplos/Three.js-Journey/Audio-PlayGround/icos.svg#svg-play' /></div>`,t+=`<div class="Experience_Pause Experience_Panel Experience_Control" play="true"><img draggable='false' src='https://devildrey33.es/Ejemplos/Three.js-Journey/Audio-PlayGround/icos.svg#svg-pause' /></div>`,t+=`<div class="Experience_Panel Experience_SongInfo">
                            <span>Name</span>
                            <span>:</span>
                            <span id='AudioInfo_Name'><a href="https://www.jamendo.com/track/1884527/the-deep" target="_blank">The Deep</a></span>
                            <span>Artist</span>
                            <span>:</span>
                            <span id='AudioInfo_Artist'><a href="https://www.jamendo.com/artist/359034/anitek" target="_blank">Anitek</a></span>
                        </div>`,this.experience.options.debug===!0){t+=`<div class='Experience_AudioControls'>
                    <div class="Experience_AC_SongsVolume">
                        <span>song</span>
                        <select name='songs'>`;for(let n=0;n<this.songs.length;n++)t+=this.songs[n].name===this.song.name?"<option selected>":"<option>",t+=this.songs[n].name+"</option>";t+=`</select>
                        <span>volume</span>
                        <div class='Experience_AC_Volume'>
                            <input id='volume' type='range' name='volume' min='0' max='1' value='0' step='0.01'></input>
                        </div>`,this.experience.options.audioMultiChannel===!0&&(t+=`<span id='muteSong'>song</span>
                    <div class='Experience_AC_Volume'>
                        <input id='volumeSong' type='range' name='song' min='0' max='1' value='${this.experience.options.audioVolume}' step='0.01'></input>
                    </div>
                    <span id='muteDrum'>drum</span>
                    <div class='Experience_AC_Volume'>
                        <input id='volumeDrum' type='range' name='drum' min='0' max='1' value='0' step='0.01'></input>
                    </div>
                    <span id='muteBass'>bass</span>
                    <div class='Experience_AC_Volume'>
                        <input id='volumeBass' type='range' name='bass' min='0' max='1' value='0' step='0.01'></input>
                    </div>
                    <span id='muteOther'>other</span>
                    <div class='Experience_AC_Volume'>
                        <input id='volumeOther' type='range' name='other' min='0' max='1' value='0' step='0.01'></input>
                    </div>
                    <span id='muteVoice'>voice</span>
                    <div class='Experience_AC_Volume'>
                        <input id='volumeVoice' type='range' name='voice' min='0' max='1' value='0' step='0.01'></input>
                    </div>
                    <span id='mutePiano'>piano</span>
                    <div class='Experience_AC_Volume'>
                        <input id='volumePiano' type='range' name='piano' min='0' max='1' value='0' step='0.01'></input>
                    </div>`),t+=`<span id='defaultSpeed'>speed</span>
                    <div class='Experience_AC_Volume'>
                        <input id='reproductionSpeed' type='range' name='speed' min='0.1' max='2' value='1' step='0.01'></input>
                    </div>`}t+="</div>",this.experience.options.debug===!0&&(t+=`<div class='Experience_AC_Time'>
                                <input type='range' step="0.1" value="0"></input>
                            </div>`),t+="</div>",this.elementExperience.innerHTML=t,this.options.buttonFullScreen===!0&&(this.elementFullScreen=document.getElementById("fullScreen"),this.elementRestoreScreen=document.getElementById("restoreScreen"),this.elementFullScreen.addEventListener("click",n=>{this.elementExperience.requestFullscreen(),this.elementFullScreen.style.display="none",this.elementRestoreScreen.style.display="block",this.elementPressFullScreen.setAttribute("show","false")}),this.elementRestoreScreen.addEventListener("click",n=>{document.exitFullscreen(),this.elementFullScreen.style.display="block",this.elementRestoreScreen.style.display="none"})),this.elementAudioControls=document.querySelector("#"+this.elementExperience.id+" > .Experience_AudioControls"),this.elementAudioSongs=document.querySelector("#"+this.elementExperience.id+" > .Experience_AudioControls > .Experience_AC_SongsVolume > select"),this.elementSongInfo=document.querySelector("#"+this.elementExperience.id+" > .Experience_SongInfo"),this.elementSongInfoName=document.getElementById("AudioInfo_Name"),this.elementSongInfoArtist=document.getElementById("AudioInfo_Artist"),this.elementAudioVolume=document.getElementById("volume"),this.elementAudioVolumeSong=document.getElementById("volumeSong"),this.elementAudioVolumeBass=document.getElementById("volumeBass"),this.elementAudioVolumeDrum=document.getElementById("volumeDrum"),this.elementAudioVolumeOther=document.getElementById("volumeOther"),this.elementAudioVolumeVoice=document.getElementById("volumeVoice"),this.elementAudioVolumePiano=document.getElementById("volumePiano"),this.elementAudioSpeed=document.getElementById("reproductionSpeed"),this.elementMuteSong=document.getElementById("muteSong"),this.elementMuteBass=document.getElementById("muteBass"),this.elementMuteDrum=document.getElementById("muteDrum"),this.elementMuteOther=document.getElementById("muteOther"),this.elementMuteVoice=document.getElementById("muteVoice"),this.elementMutePiano=document.getElementById("mutePiano"),this.elementDefaultSpeed=document.getElementById("defaultSpeed"),this.elementAudioTime=document.querySelector("#"+this.elementExperience.id+" > .Experience_AudioControls > .Experience_AC_Time > input"),this.elementAudioInfo=document.querySelector("#"+this.elementExperience.id+" > .Experience_AudioControls  .Experience_AC_Info"),this.elementPlay=document.querySelector("#"+this.elementExperience.id+" > .Experience_Play"),this.elementPause=document.querySelector("#"+this.elementExperience.id+" > .Experience_Pause"),this.elementPlay.addEventListener("click",n=>{this.audioUI(!this.experience.audioAnalizer.playPause(this.experience.song.path,this.experience.song.bpm)),this.elementPressPlay.setAttribute("show","false"),this.elementPressFullScreen.setAttribute("show","false")}),this.elementPause.addEventListener("click",n=>{this.audioUI(!this.experience.audioAnalizer.playPause())}),this.elementCanvas=document.querySelector("#"+this.elementExperience.id+" > .Experience_Canvas"),this.elementLoading=document.querySelector("#"+this.elementExperience.id+" > .Experience_Loading"),this.elementControls=document.querySelector("#"+this.elementExperience.id+" > .Experience_Controls"),this.elementQuality=document.getElementById("Experience_Quality"),this.elementQualityLow=document.getElementById("Experience_Quality_Low"),this.elementQualityHigh=document.getElementById("Experience_Quality_High"),this.elementPressPlay=document.getElementById("Experience_PressPlay"),this.elementPressFullScreen=document.getElementById("Experience_PressFullScreen"),this.options.showFPS===!0&&(this.elementFPS=document.querySelector("#"+this.elementExperience.id+" > .Experience_Controls > .Experience_Static > .Experience_FPS")),this.options.showBPM===!0&&(this.elementBPM=document.querySelector("#"+this.elementExperience.id+" > .Experience_Controls > .Experience_Panel > .Experience_BPM"),this.elementTxtBPM=document.querySelector("#"+this.elementExperience.id+" > .Experience_Controls > .Experience_Panel > .Experience_TxtBPM"),this.elementAudioLevelH0=document.getElementById("Experience_AudioLevelH0"),this.elementAudioLevelM0=document.getElementById("Experience_AudioLevelM0"),this.elementAudioLevelL0=document.getElementById("Experience_AudioLevelL0"),this.elementAudioLevelT0=document.getElementById("Experience_AudioLevelT0"),this.options.audioMultiChannel===!0&&(this.elementAudioLevelH1=document.getElementById("Experience_AudioLevelH1"),this.elementAudioLevelM1=document.getElementById("Experience_AudioLevelM1"),this.elementAudioLevelL1=document.getElementById("Experience_AudioLevelL1"),this.elementAudioLevelT1=document.getElementById("Experience_AudioLevelT1"),this.elementAudioLevelH2=document.getElementById("Experience_AudioLevelH2"),this.elementAudioLevelM2=document.getElementById("Experience_AudioLevelM2"),this.elementAudioLevelL2=document.getElementById("Experience_AudioLevelL2"),this.elementAudioLevelT2=document.getElementById("Experience_AudioLevelT2"),this.elementAudioLevelH3=document.getElementById("Experience_AudioLevelH3"),this.elementAudioLevelM3=document.getElementById("Experience_AudioLevelM3"),this.elementAudioLevelL3=document.getElementById("Experience_AudioLevelL3"),this.elementAudioLevelT3=document.getElementById("Experience_AudioLevelT3"),this.elementAudioLevelH4=document.getElementById("Experience_AudioLevelH4"),this.elementAudioLevelM4=document.getElementById("Experience_AudioLevelM4"),this.elementAudioLevelL4=document.getElementById("Experience_AudioLevelL4"),this.elementAudioLevelT4=document.getElementById("Experience_AudioLevelT4")),this.elementDebugEffects=document.querySelector("#"+this.elementExperience.id+" > .Experience_DebugEffects"))}}};let Da=yc;Ka=new WeakMap,Rc(Da,Ka,0);const wa=window.location.hash==="#debug",bi={debug:wa,showFPS:wa,showBPM:wa,buttonFullScreen:!0,buttonLogo:!0,buttonGitHub:!0,urlGitHub:"https://github.com/devildrey33/Audio-Hole",rootElement:document.body,songsDragDrop:!1,audioVolume:.25,audioFFTSize:4096,audioMultiChannel:!0,orbitControls:wa,spiralAudioStrength:.8,spiralAudioZoom:2,spiralAudioStrengthSin:.4,spiralAudioZoomSin:1,spiralFrequency:.1,spiralSpeed:.12,spiralThickness:.05,spiralMirrors:1,spiralFrequencySin:.5,spiralSpeedSin:.75,spiralThicknessSin:.04,spiralColorSin:new ve(1,1,1),sunAudioStrengthFreq:1,sunAudioStrengthSin:2.1,sunNoiseStrength:15,sunNoiseSpeed:1,sunColorSin:new ve(1,1,1),raysCount:50,barsAudioStrength:.5,barsAudioZoom:1.5,barsSpeed:1,hmsOsciloscopeAudioStrength:.5,hmsOsciloscopeSpeed:2,bloomPmndrsIntensity:.7,bloomPmndrsThreshold:15.4,bloomPmndrsSmoothing:-1.97,bloomPmndrsRadius:.98,bloomPmndrsEnabled:!0,godRaysDensity:.96,godRaysDecay:.88,godRaysWeigth:.3,godRaysExposure:.6,godRaysClampMax:1,godRaysSamples:60,godRaysEnabled:!0,colorCorrectionPowRGB:new L(3,3,3),colorCorrectionMulRGB:new L(2,2,2),colorCorrectionAddRGB:new L(.05,.05,.05)};class Qx{constructor(e,t){this.canvas=document.createElement("canvas"),this.canvas.setAttribute("width",e),this.canvas.setAttribute("height",t),this.context=this.canvas.getContext("2d",{willReadFrequently:!1}),this.width=e,this.height=t}debug_InsertCanvasIntoBody(){document.body.appendChild(this.canvas),this.canvas.style.zIndex=100,this.canvas.style.position="fixed",this.canvas.style.top=0}}class ts{constructor(e,t=!1){const n={onPlay:()=>{},onPause:()=>{},onTimeUpdate:()=>{},onDurationChange:()=>{},onEnded:()=>{},onError:()=>{},onCanPlay:()=>{},onLoading:()=>{},volume:.5,fftSize:1024};this.fistChannel=t,this.audioOptions={...n,...e},t===!1&&(this.audioOptions.volume=0),this.songLoaded=!1,this.currentVolume=this.audioOptions.volume,this.setupTextures(this.audioOptions.fftSize),this.averageFrequency=[0,0,0,0,0],this.averageFrequencyPeaks=[0,0,0,0,0],this.paintAudioTexture(),this.isPlaying=!1}volume(e){typeof e<"u"&&(this.currentVolume=e),typeof this.gainNode<"u"&&(this.gainNode.gain.value=this.currentVolume)}setupTextures(e){this.maxData=e*.5,this.analizerData=new Uint8Array(this.maxData),this.analizerDataSin=new Uint8Array(this.maxData);for(let t=0;t<this.maxData;t++)this.analizerData[t]=0,this.analizerDataSin[t]=128;this.bufferCanvasLinear=new Qx(this.maxData,1),this.bufferCanvasLinear.texture=new Sx(this.bufferCanvasLinear.canvas),this.imageDataLinear=this.bufferCanvasLinear.context.createImageData(this.maxData,1),this.bufferCanvasLinear.texture.generateMipMaps=!1,this.bufferCanvasLinear.texture.minFilter=ct,this.bufferCanvasLinear.texture.magFilter=ct}setupAudio(){typeof this.context<"u"||(this.context=new AudioContext,this.gainNode=this.context.createGain(),this.analizer=this.context.createAnalyser(),this.analizer.fftSize=this.audioOptions.fftSize,this.analizer.smoothingTimeConstant=.8)}loadSong(e){typeof this.song<"u"&&(this.song.pause(),this.songLoaded=!1,this.isPlaying=!1,this.audioOptions.onLoading()),this.song=new Audio,this.song.controls=!0,this.song.crossOrigin="anonymous",this.song.src=e,this.song.addEventListener("canplay",()=>{this.canPlay(),this.audioOptions.onCanPlay()}),this.song.addEventListener("error",()=>{this.isPlaying=!1,this.audioOptions.onError()}),this.song.addEventListener("ended",()=>{this.isPlaying=!1,this.audioOptions.onEnded()}),this.fistChannel===!0&&(this.song.addEventListener("durationchange",()=>{this.audioOptions.onDurationChange(this.song.duration)}),this.song.addEventListener("timeupdate",()=>{this.audioOptions.onTimeUpdate(this.song.currentTime)}),this.song.addEventListener("play",()=>{this.audioOptions.onPlay()}),this.song.addEventListener("pause",()=>{this.audioOptions.onPause()}))}playPause(e){return typeof this.context>"u"&&(this.setupAudio(),this.loadSong(e)),this.context.resume(),this.song.duration>0&&!this.song.paused?(this.song.pause(),this.isPlaying=!1):(this.song.play(),this.isPlaying=!0),this.volume(this.currentVolume),this.isPlaying}canPlay(){this.songLoaded!==!0&&(typeof this.context>"u"&&this.setupAudio(),this.songLoaded=!0,this.audioSource=this.context.createMediaElementSource(this.song),this.audioSource.connect(this.analizer),this.analizer.connect(this.gainNode),this.gainNode.connect(this.context.destination))}update(e,t){typeof this.analizer>"u"||(this.analizer.getByteFrequencyData(this.analizerData),this.analizer.getByteTimeDomainData(this.analizerDataSin),this.paintAudioTexture(),this.getAverageFrequency(e,t))}setTime(e){typeof this.song>"u"||(this.song.currentTime=e)}getAverageFrequency(e,t){let n=this.context.sampleRate/this.audioOptions.fftSize;const s=[256,2e3,16e3,5e4];let r=[0,0,0,0,0],a=[0,0,0,0,0],o=0;for(let h=0;h<this.maxData;h++)h*n>s[o]&&o++,r[o]++,a[o]+=this.analizerData[h],a[4]+=this.analizerData[h];this.averageFrequency=[a[0]/r[0]/t,a[1]/r[1]/t,a[2]/r[2]/t,a[3]/r[3]/t,a[4]/this.maxData/t];const l=this.averageFrequency,c=this.averageFrequencyPeaks,u=e/2500;for(let h=0;h<5;h++)l[h]>=c[h]?c[h]=l[h]:c[h]-=u}paintAudioTexture(){for(let e=0;e<this.maxData;e++){let t=e*4;this.imageDataLinear.data[t]=this.analizerData[e],this.imageDataLinear.data[t+1]=this.analizerDataSin[e],this.imageDataLinear.data[t+2]=0,this.imageDataLinear.data[t+3]=255}this.bufferCanvasLinear.context.putImageData(this.imageDataLinear,0,0,0,0,this.maxData,1),this.bufferCanvasLinear.texture.needsUpdate=!0}}let ey=class{constructor(e){const t={onPlay:()=>{},onPause:()=>{},onTimeUpdate:()=>{},onDurationChange:()=>{},onEnded:()=>{},onError:()=>{},onCanPlay:()=>{},onLoading:()=>{},onBpmChange:()=>{},allowDropSong:!1,volume:.5,fftSize:1024};this.audioOptions={...t,...e},this.experience=new gt,this.songsLoaded=!1,this.audioOptions.allowDropSong&&this.setupDragDropEvents(),this.currentVolume=this.audioOptions.volume,this.bpmTime=0,this.bpm=0,this.currentBpm=0,this.isPlaying=!1,this.channelOptions={onPlay:this.audioOptions.onPlay,onPause:this.audioOptions.onPause,onTimeUpdate:this.audioOptions.onTimeUpdate,onDurationChange:this.audioOptions.onDurationChange,onEnded:()=>{this.onEnded()},onError:this.audioOptions.onError,onCanPlay:this.audioOptions.onCanPlay,onLoading:this.audioOptions.onLoading,volume:this.audioOptions.volume,fftSize:this.audioOptions.fftSize},this.channelSong=new ts(this.channelOptions,!0),this.channelBass=this.channelSong,this.channelDrum=this.channelSong,this.channelOther=this.channelSong,this.channelPiano=this.channelSong,this.channelVocal=this.channelSong,this.channels=[this.channelSong,this.channelBass,this.channelDrum,this.channelOther,this.channelPiano,this.channelVocal],this.totalChannels=this.channels.length,this.canPlayChannels=0,this.endedChannels=0,this.resyncTime=0}setupDragDropEvents(){document.body.addEventListener("dragenter",e=>!1),document.body.addEventListener("dragover",e=>e.preventDefault()),document.body.addEventListener("drop",e=>{this.loadSongDrop(e.dataTransfer.files),e.stopPropagation(),e.preventDefault()})}loadSongDrop(e){this.loadSong(URL.createObjectURL(e[0]))}volume(e,t=!1){typeof e<"u"&&(this.currentVolume=e),this.channelSong.volume(this.currentVolume)}speed(e){typeof e<"u"&&(this.channelSong.song.playbackRate=e)}loadSong(e,t=0){this.bpm=t,this.bpmTime=6e4/t,this.canPlayChannels=0,this.endedChannels=0,this.resyncTime=0,this.channelSong.loadSong(e+"Song.mp3")}onEnded(){this.isPlaying=!1,this.audioOptions.onEnded()}setTime(e){this.channelSong.setTime(e)}playPause(e){this.isPlaying=this.channelSong.playPause(e)}update(e){this.channelSong.update(e,512),this.calculateCurrentBeat(e)}calculateCurrentBeat(){if(this.experience.htmlElements.dragTime===!0)return;let e=Math.floor(this.channelSong.song.currentTime*1e3/this.bpmTime);isNaN(e)&&(e=0),this.currentBpm!=e&&(this.currentBpm=e,this.audioOptions.onBpmChange(this.currentBpm),this.resync())}resync(){}setFFTSize(e){console.log(e),this.channelSong.setupTextures(e),this.channelSong.analizer.fftSize=e}};class ty{constructor(e){const t={onPlay:()=>{},onPause:()=>{},onTimeUpdate:()=>{},onDurationChange:()=>{},onEnded:()=>{},onError:()=>{},onCanPlay:()=>{},onLoading:()=>{},onBpmChange:()=>{},allowDropSong:!1,volume:.5,fftSize:1024};this.audioOptions={...t,...e},this.experience=new gt,this.songsLoaded=!1,this.audioOptions.allowDropSong&&this.setupDragDropEvents(),this.currentVolume=this.audioOptions.volume,this.bpmTime=0,this.bpm=0,this.currentBpm=0,this.isPlaying=!1,this.channelOptions={onPlay:this.audioOptions.onPlay,onPause:this.audioOptions.onPause,onTimeUpdate:this.audioOptions.onTimeUpdate,onDurationChange:this.audioOptions.onDurationChange,onEnded:()=>{this.onEnded()},onError:this.audioOptions.onError,onCanPlay:()=>{this.onCanPlay()},onLoading:this.audioOptions.onLoading,volume:this.audioOptions.volume,fftSize:this.audioOptions.fftSize},this.channelSong=new ts(this.channelOptions,!0),this.channelBass=new ts(this.channelOptions,!1),this.channelDrum=new ts(this.channelOptions,!1),this.channelOther=new ts(this.channelOptions,!1),this.channelPiano=new ts(this.channelOptions,!1),this.channelVocal=new ts(this.channelOptions,!1),this.channels=[this.channelSong,this.channelBass,this.channelDrum,this.channelOther,this.channelPiano,this.channelVocal],this.totalChannels=this.channels.length,this.canPlayChannels=0,this.endedChannels=0,this.resyncTime=0}volume(e,t=!1){if(typeof e<"u"&&(this.currentVolume=e),t===!1)this.channelSong.volume(this.currentVolume);else{this.channelSong.volume(0);for(let n=1;n<this.totalChannels;n++)this.channels[n].volume(this.currentVolume)}}speed(e){if(typeof e<"u")for(let t=0;t<this.totalChannels;t++)this.channels[t].song.playbackRate=e}loadSong(e,t=0){this.bpm=t,this.bpmTime=6e4/t,this.currentBpm=0,this.canPlayChannels=0,this.endedChannels=0,this.resyncTime=0,this.channelSong.loadSong(e+"Song.mp3"),this.channelBass.loadSong(e+"Bass.mp3"),this.channelDrum.loadSong(e+"Drum.mp3"),this.channelOther.loadSong(e+"Other.mp3"),this.channelPiano.loadSong(e+"Piano.mp3"),this.channelVocal.loadSong(e+"Vocal.mp3")}onCanPlay(){this.canPlayChannels++,this.canPlayChannels===this.totalChannels&&(this.audioOptions.onCanPlay(),this.canPlayChannels=0)}onEnded(){this.isPlaying=!1,this.endedChannels++,this.endedChannels===this.totalChannels&&(this.endedChannels=0,this.audioOptions.onEnded())}setTime(e){for(let t=0;t<this.totalChannels;t++)this.channels[t].setTime(e)}playPause(e){for(let t=0;t<this.totalChannels;t++)this.isPlaying=this.channels[t].playPause(e)}update(e){for(let t=0;t<this.totalChannels;t++)this.channels[t].update(e,255);this.calculateCurrentBeat(e)}calculateCurrentBeat(){if(this.experience.htmlElements.dragTime===!0)return;let e=Math.floor(this.channelSong.song.currentTime*1e3/this.bpmTime);isNaN(e)&&(e=0),this.currentBpm!=e&&(this.currentBpm=e,this.audioOptions.onBpmChange(this.currentBpm),this.resync())}resync(){if(this.resyncTime>0){this.resyncTime-=16;return}let e=this.channels[0].song.currentTime,t=e;for(let n=0;n<this.totalChannels;n++)this.channels[n].song.currentTime<e&&(e=this.channels[n].song.currentTime),this.channels[n].song.currentTime>t&&(t=this.channels[n].song.currentTime);if((t-e)*1e3>16){for(let n=1;n<this.totalChannels;n++)this.channels[n].song.currentTime=this.channelSong.song.currentTime;this.resyncTime=5e3}}setFFTSize(e){for(let t=0;t<this.totalChannels;t++)this.channels[t].setupTextures(e),this.channels[t].analizer.fftSize=e}}const ph={type:"change"},Wo={type:"start"},mh={type:"end"},Ra=new Yr,gh=new Ai,ny=Math.cos(70*ka.DEG2RAD);class iy extends Yn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vs.ROTATE,MIDDLE:vs.DOLLY,RIGHT:vs.PAN},this.touches={ONE:xs.ROTATE,TWO:xs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",E),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",E),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ph),n.update(),r=s.NONE},this.update=function(){const P=new L,J=new Xn().setFromUnitVectors(e.up,new L(0,1,0)),fe=J.clone().invert(),ae=new L,de=new Xn,Ce=new L,Ve=2*Math.PI;return function(){const ce=n.object.position;P.copy(ce).sub(n.target),P.applyQuaternion(J),o.setFromVector3(P),n.autoRotate&&r===s.NONE&&W(x()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let k=n.minAzimuthAngle,te=n.maxAzimuthAngle;isFinite(k)&&isFinite(te)&&(k<-Math.PI?k+=Ve:k>Math.PI&&(k-=Ve),te<-Math.PI?te+=Ve:te>Math.PI&&(te-=Ve),k<=te?o.theta=Math.max(k,Math.min(te,o.theta)):o.theta=o.theta>(k+te)/2?Math.max(k,o.theta):Math.min(te,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.zoomToCursor&&w||n.object.isOrthographicCamera?o.radius=Q(o.radius):o.radius=Q(o.radius*c),P.setFromSpherical(o),P.applyQuaternion(fe),ce.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let ue=!1;if(n.zoomToCursor&&w){let Be=null;if(n.object.isPerspectiveCamera){const $e=P.length();Be=Q($e*c);const tt=$e-Be;n.object.position.addScaledVector(S,tt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const $e=new L(M.x,M.y,0);$e.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ue=!0;const tt=new L(M.x,M.y,0);tt.unproject(n.object),n.object.position.sub(tt).add($e),n.object.updateMatrixWorld(),Be=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Be!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Be).add(n.object.position):(Ra.origin.copy(n.object.position),Ra.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ra.direction))<ny?e.lookAt(n.target):(gh.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ra.intersectPlane(gh,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ue=!0);return c=1,w=!1,ue||ae.distanceToSquared(n.object.position)>a||8*(1-de.dot(n.object.quaternion))>a||Ce.distanceToSquared(n.target)>0?(n.dispatchEvent(ph),ae.copy(n.object.position),de.copy(n.object.quaternion),Ce.copy(n.target),ue=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ee),n.domElement.removeEventListener("pointerdown",Fe),n.domElement.removeEventListener("pointercancel",Xe),n.domElement.removeEventListener("wheel",R),n.domElement.removeEventListener("pointermove",Le),n.domElement.removeEventListener("pointerup",Xe),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",E),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const a=1e-6,o=new fh,l=new fh;let c=1;const u=new L,h=new pe,d=new pe,p=new pe,_=new pe,g=new pe,m=new pe,f=new pe,y=new pe,v=new pe,S=new L,M=new pe;let w=!1;const T=[],C={};function x(){return 2*Math.PI/60/60*n.autoRotateSpeed}function A(){return Math.pow(.95,n.zoomSpeed)}function W(P){l.theta-=P}function q(P){l.phi-=P}const I=function(){const P=new L;return function(fe,ae){P.setFromMatrixColumn(ae,0),P.multiplyScalar(-fe),u.add(P)}}(),O=function(){const P=new L;return function(fe,ae){n.screenSpacePanning===!0?P.setFromMatrixColumn(ae,1):(P.setFromMatrixColumn(ae,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(fe),u.add(P)}}(),N=function(){const P=new L;return function(fe,ae){const de=n.domElement;if(n.object.isPerspectiveCamera){const Ce=n.object.position;P.copy(Ce).sub(n.target);let Ve=P.length();Ve*=Math.tan(n.object.fov/2*Math.PI/180),I(2*fe*Ve/de.clientHeight,n.object.matrix),O(2*ae*Ve/de.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(I(fe*(n.object.right-n.object.left)/n.object.zoom/de.clientWidth,n.object.matrix),O(ae*(n.object.top-n.object.bottom)/n.object.zoom/de.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function K(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(P){if(!n.zoomToCursor)return;w=!0;const J=n.domElement.getBoundingClientRect(),fe=P.clientX-J.left,ae=P.clientY-J.top,de=J.width,Ce=J.height;M.x=fe/de*2-1,M.y=-(ae/Ce)*2+1,S.set(M.x,M.y,1).unproject(e).sub(e.position).normalize()}function Q(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function Z(P){h.set(P.clientX,P.clientY)}function z(P){Y(P),f.set(P.clientX,P.clientY)}function X(P){_.set(P.clientX,P.clientY)}function he(P){d.set(P.clientX,P.clientY),p.subVectors(d,h).multiplyScalar(n.rotateSpeed);const J=n.domElement;W(2*Math.PI*p.x/J.clientHeight),q(2*Math.PI*p.y/J.clientHeight),h.copy(d),n.update()}function re(P){y.set(P.clientX,P.clientY),v.subVectors(y,f),v.y>0?K(A()):v.y<0&&V(A()),f.copy(y),n.update()}function le(P){g.set(P.clientX,P.clientY),m.subVectors(g,_).multiplyScalar(n.panSpeed),N(m.x,m.y),_.copy(g),n.update()}function xe(P){Y(P),P.deltaY<0?V(A()):P.deltaY>0&&K(A()),n.update()}function Re(P){let J=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,n.keyPanSpeed),J=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,-n.keyPanSpeed),J=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?W(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(n.keyPanSpeed,0),J=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?W(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(-n.keyPanSpeed,0),J=!0;break}J&&(P.preventDefault(),n.update())}function ye(){if(T.length===1)h.set(T[0].pageX,T[0].pageY);else{const P=.5*(T[0].pageX+T[1].pageX),J=.5*(T[0].pageY+T[1].pageY);h.set(P,J)}}function qe(){if(T.length===1)_.set(T[0].pageX,T[0].pageY);else{const P=.5*(T[0].pageX+T[1].pageX),J=.5*(T[0].pageY+T[1].pageY);_.set(P,J)}}function Ot(){const P=T[0].pageX-T[1].pageX,J=T[0].pageY-T[1].pageY,fe=Math.sqrt(P*P+J*J);f.set(0,fe)}function De(){n.enableZoom&&Ot(),n.enablePan&&qe()}function B(){n.enableZoom&&Ot(),n.enableRotate&&ye()}function Mt(P){if(T.length==1)d.set(P.pageX,P.pageY);else{const fe=G(P),ae=.5*(P.pageX+fe.x),de=.5*(P.pageY+fe.y);d.set(ae,de)}p.subVectors(d,h).multiplyScalar(n.rotateSpeed);const J=n.domElement;W(2*Math.PI*p.x/J.clientHeight),q(2*Math.PI*p.y/J.clientHeight),h.copy(d)}function Se(P){if(T.length===1)g.set(P.pageX,P.pageY);else{const J=G(P),fe=.5*(P.pageX+J.x),ae=.5*(P.pageY+J.y);g.set(fe,ae)}m.subVectors(g,_).multiplyScalar(n.panSpeed),N(m.x,m.y),_.copy(g)}function Pe(P){const J=G(P),fe=P.pageX-J.x,ae=P.pageY-J.y,de=Math.sqrt(fe*fe+ae*ae);y.set(0,de),v.set(0,Math.pow(y.y/f.y,n.zoomSpeed)),K(v.y),f.copy(y)}function Ae(P){n.enableZoom&&Pe(P),n.enablePan&&Se(P)}function et(P){n.enableZoom&&Pe(P),n.enableRotate&&Mt(P)}function Fe(P){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",Le),n.domElement.addEventListener("pointerup",Xe)),ie(P),P.pointerType==="touch"?H(P):Et(P))}function Le(P){n.enabled!==!1&&(P.pointerType==="touch"?ne(P):Rt(P))}function Xe(P){_e(P),T.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",Le),n.domElement.removeEventListener("pointerup",Xe)),n.dispatchEvent(mh),r=s.NONE}function Et(P){let J;switch(P.button){case 0:J=n.mouseButtons.LEFT;break;case 1:J=n.mouseButtons.MIDDLE;break;case 2:J=n.mouseButtons.RIGHT;break;default:J=-1}switch(J){case vs.DOLLY:if(n.enableZoom===!1)return;z(P),r=s.DOLLY;break;case vs.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;X(P),r=s.PAN}else{if(n.enableRotate===!1)return;Z(P),r=s.ROTATE}break;case vs.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;Z(P),r=s.ROTATE}else{if(n.enablePan===!1)return;X(P),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Wo)}function Rt(P){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;he(P);break;case s.DOLLY:if(n.enableZoom===!1)return;re(P);break;case s.PAN:if(n.enablePan===!1)return;le(P);break}}function R(P){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(P.preventDefault(),n.dispatchEvent(Wo),xe(P),n.dispatchEvent(mh))}function E(P){n.enabled===!1||n.enablePan===!1||Re(P)}function H(P){switch(se(P),T.length){case 1:switch(n.touches.ONE){case xs.ROTATE:if(n.enableRotate===!1)return;ye(),r=s.TOUCH_ROTATE;break;case xs.PAN:if(n.enablePan===!1)return;qe(),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case xs.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;De(),r=s.TOUCH_DOLLY_PAN;break;case xs.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;B(),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Wo)}function ne(P){switch(se(P),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Mt(P),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Se(P),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ae(P),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;et(P),n.update();break;default:r=s.NONE}}function ee(P){n.enabled!==!1&&P.preventDefault()}function ie(P){T.push(P)}function _e(P){delete C[P.pointerId];for(let J=0;J<T.length;J++)if(T[J].pointerId==P.pointerId){T.splice(J,1);return}}function se(P){let J=C[P.pointerId];J===void 0&&(J=new pe,C[P.pointerId]=J),J.set(P.pageX,P.pageY)}function G(P){const J=P.pointerId===T[0].pointerId?T[1]:T[0];return C[J.pointerId]}n.domElement.addEventListener("contextmenu",ee),n.domElement.addEventListener("pointerdown",Fe),n.domElement.addEventListener("pointercancel",Xe),n.domElement.addEventListener("wheel",R,{passive:!1}),this.update()}}class sy{constructor(){this.experience=new gt,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.time=this.experience.time,this.mouseX=0,this.mouseY=0,this.setInstance(),bi.orbitControls===!0?this.setOrbitControls():this.setCameraControls()}setInstance(){this.instance=new Ft(35,this.sizes.width/this.sizes.height,.1,2e4),this.instance.position.set(0,0,2),this.scene.add(this.instance),this.experience.options.debug===!0&&(this.update=()=>{})}setOrbitControls(){this.controls=new iy(this.instance,this.canvas)}setCameraControls(){this.experience.canvas.addEventListener("mousemove",e=>{this.mouseX=e.clientX-this.sizes.width*.5,this.mouseY=e.clientY-this.sizes.height*.5})}resize(){this.instance.aspect=this.sizes.width/this.sizes.height,this.instance.updateProjectionMatrix()}update(){this.instance.rotation.y=ka.lerp(this.instance.rotation.y,this.mouseX*Math.PI/1e4,.15),this.instance.rotation.x=ka.lerp(this.instance.rotation.x,this.mouseY*Math.PI/1e4,.15)}}/**
 * postprocessing v6.33.0 build Fri Aug 11 2023
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2023 Raoul van Rüschen
 * @license Zlib
 */var ry=`#include <packing>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
uniform lowp sampler2D luminanceBuffer0;uniform lowp sampler2D luminanceBuffer1;uniform float minLuminance;uniform float deltaTime;uniform float tau;varying vec2 vUv;void main(){float l0=unpackRGBAToFloat(texture2D(luminanceBuffer0,vUv));
#if __VERSION__ < 300
float l1=texture2DLodEXT(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#else
float l1=textureLod(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#endif
l0=max(minLuminance,l0);l1=max(minLuminance,l1);float adaptedLum=l0+(l1-l0)*(1.0-exp(-deltaTime*tau));gl_FragColor=(adaptedLum==1.0)?vec4(1.0):packFloatToRGBA(adaptedLum);}`,Kr="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",ay=class extends ot{constructor(){super({name:"AdaptiveLuminanceMaterial",defines:{MIP_LEVEL_1X1:"0.0"},uniforms:{luminanceBuffer0:new ge(null),luminanceBuffer1:new ge(null),minLuminance:new ge(.01),deltaTime:new ge(0),tau:new ge(1)},extensions:{shaderTextureLOD:!0},blending:zt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:ry,vertexShader:Kr})}set luminanceBuffer0(i){this.uniforms.luminanceBuffer0.value=i}setLuminanceBuffer0(i){this.uniforms.luminanceBuffer0.value=i}set luminanceBuffer1(i){this.uniforms.luminanceBuffer1.value=i}setLuminanceBuffer1(i){this.uniforms.luminanceBuffer1.value=i}set mipLevel1x1(i){this.defines.MIP_LEVEL_1X1=i.toFixed(1),this.needsUpdate=!0}setMipLevel1x1(i){this.mipLevel1x1=i}set deltaTime(i){this.uniforms.deltaTime.value=i}setDeltaTime(i){this.uniforms.deltaTime.value=i}get minLuminance(){return this.uniforms.minLuminance.value}set minLuminance(i){this.uniforms.minLuminance.value=i}getMinLuminance(){return this.uniforms.minLuminance.value}setMinLuminance(i){this.uniforms.minLuminance.value=i}get adaptationRate(){return this.uniforms.tau.value}set adaptationRate(i){this.uniforms.tau.value=i}getAdaptationRate(){return this.uniforms.tau.value}setAdaptationRate(i){this.uniforms.tau.value=i}},Oe={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},Nd="",ht="srgb",to="srgb-linear",Xo={DEFAULT:0,KEEP_MAX_DEPTH:1,DISCARD_MAX_DEPTH:2},Ii={NONE:0,DEPTH:1,CONVOLUTION:2},Ye={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},no={VERY_SMALL:0,SMALL:1,MEDIUM:2,LARGE:3,VERY_LARGE:4,HUGE:5},Nn={REINHARD:0,REINHARD2:1,REINHARD2_ADAPTIVE:2,OPTIMIZED_CINEON:3,ACES_FILMIC:4,UNCHARTED2:5},Fd=Number(hr.replace(/\D+/g,"")),Bd=Fd>=152,oy=new Map([[Ja,to],[di,ht]]),ly=new Map([[to,Ja],[ht,di]]);function ps(i){return i===null?null:Bd?i.outputColorSpace:oy.get(i.outputEncoding)}function In(i,e){i!==null&&(Bd?i.colorSpace=e:i.encoding=ly.get(e))}function Zr(i){return Fd<154?i.replace("colorspace_fragment","encodings_fragment"):i}var cy=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,uy="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",hy=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],dy=class extends ot{constructor(i=new je){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new ge(null),texelSize:new ge(new je),scale:new ge(1),kernel:new ge(0)},blending:zt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:cy,vertexShader:uy}),this.fragmentShader=Zr(this.fragmentShader),this.setTexelSize(i.x,i.y),this.kernelSize=no.MEDIUM}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.inputBuffer=i}get kernelSequence(){return hy[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(i){this.uniforms.scale.value=i}getScale(){return this.uniforms.scale.value}setScale(i){this.uniforms.scale.value=i}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(i){this.uniforms.kernel.value=i}setKernel(i){this.kernel=i}setTexelSize(i,e){this.uniforms.texelSize.value.set(i,e,i*.5,e*.5)}setSize(i,e){const t=1/i,n=1/e;this.uniforms.texelSize.value.set(t,n,t*.5,n*.5)}},fy=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`,zd=class extends ot{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new ge(null),opacity:new ge(1)},blending:zt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:fy,vertexShader:Kr}),this.fragmentShader=Zr(this.fragmentShader)}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.uniforms.inputBuffer.value=i}getOpacity(i){return this.uniforms.opacity.value}setOpacity(i){this.uniforms.opacity.value=i}},py=`#include <common>
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer0;uniform highp sampler2D depthBuffer1;
#else
uniform mediump sampler2D depthBuffer0;uniform mediump sampler2D depthBuffer1;
#endif
uniform sampler2D inputBuffer;uniform vec2 cameraNearFar;float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNearFar.x,cameraNearFar.y);
#else
return orthographicDepthToViewZ(depth,cameraNearFar.x,cameraNearFar.y);
#endif
}varying vec2 vUv;void main(){vec2 depth;
#if DEPTH_PACKING_0 == 3201
depth.x=unpackRGBAToDepth(texture2D(depthBuffer0,vUv));
#else
depth.x=texture2D(depthBuffer0,vUv).r;
#ifdef LOG_DEPTH
float d=pow(2.0,depth.x*log2(cameraNearFar.y+1.0))-1.0;float a=cameraNearFar.y/(cameraNearFar.y-cameraNearFar.x);float b=cameraNearFar.y*cameraNearFar.x/(cameraNearFar.x-cameraNearFar.y);depth.x=a+b/d;
#endif
#endif
#if DEPTH_PACKING_1 == 3201
depth.y=unpackRGBAToDepth(texture2D(depthBuffer1,vUv));
#else
depth.y=texture2D(depthBuffer1,vUv).r;
#ifdef LOG_DEPTH
float d=pow(2.0,depth.y*log2(cameraNearFar.y+1.0))-1.0;float a=cameraNearFar.y/(cameraNearFar.y-cameraNearFar.x);float b=cameraNearFar.y*cameraNearFar.x/(cameraNearFar.x-cameraNearFar.y);depth.y=a+b/d;
#endif
#endif
bool isMaxDepth=(depth.x==1.0);
#ifdef PERSPECTIVE_CAMERA
depth.x=viewZToOrthographicDepth(getViewZ(depth.x),cameraNearFar.x,cameraNearFar.y);depth.y=viewZToOrthographicDepth(getViewZ(depth.y),cameraNearFar.x,cameraNearFar.y);
#endif
#if DEPTH_TEST_STRATEGY == 0
bool keep=depthTest(depth.x,depth.y);
#elif DEPTH_TEST_STRATEGY == 1
bool keep=isMaxDepth||depthTest(depth.x,depth.y);
#else
bool keep=!isMaxDepth&&depthTest(depth.x,depth.y);
#endif
if(keep){gl_FragColor=texture2D(inputBuffer,vUv);}else{discard;}}`,my=class extends ot{constructor(){super({name:"DepthMaskMaterial",defines:{DEPTH_EPSILON:"0.0001",DEPTH_PACKING_0:"0",DEPTH_PACKING_1:"0",DEPTH_TEST_STRATEGY:Xo.KEEP_MAX_DEPTH},uniforms:{inputBuffer:new ge(null),depthBuffer0:new ge(null),depthBuffer1:new ge(null),cameraNearFar:new ge(new pe(1,1))},blending:zt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:py,vertexShader:Kr}),this.depthMode=cl}set depthBuffer0(i){this.uniforms.depthBuffer0.value=i}set depthPacking0(i){this.defines.DEPTH_PACKING_0=i.toFixed(0),this.needsUpdate=!0}setDepthBuffer0(i,e=Fi){this.depthBuffer0=i,this.depthPacking0=e}set depthBuffer1(i){this.uniforms.depthBuffer1.value=i}set depthPacking1(i){this.defines.DEPTH_PACKING_1=i.toFixed(0),this.needsUpdate=!0}setDepthBuffer1(i,e=Fi){this.depthBuffer1=i,this.depthPacking1=e}get maxDepthStrategy(){return Number(this.defines.DEPTH_TEST_STRATEGY)}set maxDepthStrategy(i){this.defines.DEPTH_TEST_STRATEGY=i.toFixed(0),this.needsUpdate=!0}get keepFar(){return this.maxDepthStrategy}set keepFar(i){this.maxDepthStrategy=i?Xo.KEEP_MAX_DEPTH:Xo.DISCARD_MAX_DEPTH}getMaxDepthStrategy(){return this.maxDepthStrategy}setMaxDepthStrategy(i){this.maxDepthStrategy=i}get epsilon(){return Number(this.defines.DEPTH_EPSILON)}set epsilon(i){this.defines.DEPTH_EPSILON=i.toFixed(16),this.needsUpdate=!0}getEpsilon(){return this.epsilon}setEpsilon(i){this.epsilon=i}get depthMode(){return Number(this.defines.DEPTH_MODE)}set depthMode(i){let e;switch(i){case Yh:e="false";break;case jh:e="true";break;case $h:e="abs(d1 - d0) <= DEPTH_EPSILON";break;case Jh:e="abs(d1 - d0) > DEPTH_EPSILON";break;case cl:e="d0 > d1";break;case Na:e="d0 >= d1";break;case Kh:e="d0 <= d1";break;case Zh:default:e="d0 < d1";break}this.defines.DEPTH_MODE=i.toFixed(0),this.defines["depthTest(d0, d1)"]=e,this.needsUpdate=!0}getDepthMode(){return this.depthMode}setDepthMode(i){this.depthMode=i}adoptCameraSettings(i){this.copyCameraSettings(i)}copyCameraSettings(i){i&&(this.uniforms.cameraNearFar.value.set(i.near,i.far),i instanceof Ft?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}},gy=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.0555555
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,_y="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",vy=class extends ot{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new ge(null),texelSize:new ge(new pe)},blending:zt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:gy,vertexShader:_y}),this.fragmentShader=Zr(this.fragmentShader)}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setSize(i,e){this.uniforms.texelSize.value.set(1/i,1/e)}},xy=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;
#if THREE_REVISION < 143
#define luminance(v) linearToRelativeLuminance(v)
#endif
#if THREE_REVISION >= 137
vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,yy="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",Sy=class extends ot{constructor(i,e,t,n,s=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:hr.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new ge(null),depthBuffer:new ge(null),resolution:new ge(new pe),texelSize:new ge(new pe),cameraNear:new ge(.3),cameraFar:new ge(1e3),aspect:new ge(1),time:new ge(0)},blending:zt,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:s}),i&&this.setShaderParts(i),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(n)}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.uniforms.inputBuffer.value=i}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(i){this.uniforms.depthBuffer.value=i}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(i){this.defines.DEPTH_PACKING=i.toFixed(0),this.needsUpdate=!0}setDepthBuffer(i,e=Fi){this.depthBuffer=i,this.depthPacking=e}setShaderData(i){this.setShaderParts(i.shaderParts),this.setDefines(i.defines),this.setUniforms(i.uniforms),this.setExtensions(i.extensions)}setShaderParts(i){return this.fragmentShader=xy.replace(Ye.FRAGMENT_HEAD,i.get(Ye.FRAGMENT_HEAD)||"").replace(Ye.FRAGMENT_MAIN_UV,i.get(Ye.FRAGMENT_MAIN_UV)||"").replace(Ye.FRAGMENT_MAIN_IMAGE,i.get(Ye.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=yy.replace(Ye.VERTEX_HEAD,i.get(Ye.VERTEX_HEAD)||"").replace(Ye.VERTEX_MAIN_SUPPORT,i.get(Ye.VERTEX_MAIN_SUPPORT)||""),this.fragmentShader=Zr(this.fragmentShader),this.needsUpdate=!0,this}setDefines(i){for(const e of i.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(i){for(const e of i.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(i){this.extensions={};for(const e of i)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(i){this.encodeOutput!==i&&(i?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(i){return this.encodeOutput}setOutputEncodingEnabled(i){this.encodeOutput=i}get time(){return this.uniforms.time.value}set time(i){this.uniforms.time.value=i}setDeltaTime(i){this.uniforms.time.value+=i}adoptCameraSettings(i){this.copyCameraSettings(i)}copyCameraSettings(i){i&&(this.uniforms.cameraNear.value=i.near,this.uniforms.cameraFar.value=i.far,i instanceof Ft?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(i,e){const t=this.uniforms;t.resolution.value.set(i,e),t.texelSize.value.set(1/i,1/e),t.aspect.value=i/e}static get Section(){return Ye}},My=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform vec2 lightPosition;uniform float exposure;uniform float decay;uniform float density;uniform float weight;uniform float clampMax;varying vec2 vUv;void main(){vec2 coord=vUv;vec2 delta=lightPosition-coord;delta*=1.0/SAMPLES_FLOAT*density;float illuminationDecay=1.0;vec4 color=vec4(0.0);for(int i=0;i<SAMPLES_INT;++i){coord+=delta;vec4 texel=texture2D(inputBuffer,coord);texel*=illuminationDecay*weight;color+=texel;illuminationDecay*=decay;}gl_FragColor=clamp(color*exposure,0.0,clampMax);
#include <dithering_fragment>
}`,Ey=class extends ot{constructor(i){super({name:"GodRaysMaterial",defines:{SAMPLES_INT:"60",SAMPLES_FLOAT:"60.0"},uniforms:{inputBuffer:new ge(null),lightPosition:new ge(i),density:new ge(1),decay:new ge(1),weight:new ge(1),exposure:new ge(1),clampMax:new ge(1)},blending:zt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:My,vertexShader:Kr})}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.uniforms.inputBuffer.value=i}get lightPosition(){return this.uniforms.lightPosition.value}getLightPosition(){return this.uniforms.lightPosition.value}setLightPosition(i){this.uniforms.lightPosition.value=i}get density(){return this.uniforms.density.value}set density(i){this.uniforms.density.value=i}getDensity(){return this.uniforms.density.value}setDensity(i){this.uniforms.density.value=i}get decay(){return this.uniforms.decay.value}set decay(i){this.uniforms.decay.value=i}getDecay(){return this.uniforms.decay.value}setDecay(i){this.uniforms.decay.value=i}get weight(){return this.uniforms.weight.value}set weight(i){this.uniforms.weight.value=i}getWeight(){return this.uniforms.weight.value}setWeight(i){this.uniforms.weight.value=i}get exposure(){return this.uniforms.exposure.value}set exposure(i){this.uniforms.exposure.value=i}getExposure(){return this.uniforms.exposure.value}setExposure(i){this.uniforms.exposure.value=i}get maxIntensity(){return this.uniforms.clampMax.value}set maxIntensity(i){this.uniforms.clampMax.value=i}getMaxIntensity(){return this.uniforms.clampMax.value}setMaxIntensity(i){this.uniforms.clampMax.value=i}get samples(){return Number(this.defines.SAMPLES_INT)}set samples(i){const e=Math.floor(i);this.defines.SAMPLES_INT=e.toFixed(0),this.defines.SAMPLES_FLOAT=e.toFixed(1),this.needsUpdate=!0}getSamples(){return this.samples}setSamples(i){this.samples=i}},Ty=`#include <common>
#if THREE_REVISION < 143
#define luminance(v) linearToRelativeLuminance(v)
#endif
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);l*=low*high;
#elif defined(THRESHOLD)
l=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=vec4(texel.rgb*l,l);
#else
gl_FragColor=vec4(l);
#endif
}`,Ay=class extends ot{constructor(i=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:hr.replace(/\D+/g,"")},uniforms:{inputBuffer:new ge(null),threshold:new ge(0),smoothing:new ge(1),range:new ge(null)},blending:zt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Ty,vertexShader:Kr}),this.colorOutput=i,this.luminanceRange=e}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.uniforms.inputBuffer.value=i}get threshold(){return this.uniforms.threshold.value}set threshold(i){this.smoothing>0||i>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=i}getThreshold(){return this.threshold}setThreshold(i){this.threshold=i}get smoothing(){return this.uniforms.smoothing.value}set smoothing(i){this.threshold>0||i>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=i}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(i){this.smoothing=i}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(i){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(i){i?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(i){return this.colorOutput}setColorOutputEnabled(i){this.colorOutput=i}get useRange(){return this.luminanceRange!==null}set useRange(i){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(i){i!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=i,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(i){this.luminanceRange=i}},by=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,wy="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",Ry=class extends ot{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new ge(null),supportBuffer:new ge(null),texelSize:new ge(new pe),radius:new ge(.85)},blending:zt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:by,vertexShader:wy}),this.fragmentShader=Zr(this.fragmentShader)}set inputBuffer(i){this.uniforms.inputBuffer.value=i}set supportBuffer(i){this.uniforms.supportBuffer.value=i}get radius(){return this.uniforms.radius.value}set radius(i){this.uniforms.radius.value=i}setSize(i,e){this.uniforms.texelSize.value.set(1/i,1/e)}},Cy=new kl,Mi=null;function Py(){if(Mi===null){const i=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]);Mi=new An,Mi.setAttribute!==void 0?(Mi.setAttribute("position",new Tt(i,3)),Mi.setAttribute("uv",new Tt(e,2))):(Mi.addAttribute("position",new Tt(i,3)),Mi.addAttribute("uv",new Tt(e,2)))}return Mi}var bn=class kd{constructor(e="Pass",t=new Ha,n=Cy){this.name=e,this.renderer=null,this.scene=t,this.camera=n,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new dt(Py(),e),t.frustumCulled=!1,this.scene===null&&(this.scene=new Ha),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=Fi){}render(e,t,n,s,r){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,n){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof At||t instanceof Mn||t instanceof St||t instanceof kd)&&this[e].dispose()}}},Hd=class extends bn{constructor(i,e=!0){super("CopyPass"),this.fullscreenMaterial=new zd,this.needsSwap=!1,this.renderTarget=i,i===void 0&&(this.renderTarget=new At(1,1,{minFilter:Lt,magFilter:Lt,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(i){this.autoResize=i}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(i){this.autoResize=i}render(i,e,t,n,s){this.fullscreenMaterial.inputBuffer=e.texture,i.setRenderTarget(this.renderToScreen?null:this.renderTarget),i.render(this.scene,this.camera)}setSize(i,e){this.autoResize&&this.renderTarget.setSize(i,e)}initialize(i,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==Gt?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":ps(i)===ht&&In(this.renderTarget.texture,ht))}},Ly=class extends bn{constructor(i,{minLuminance:e=.01,adaptationRate:t=1}={}){super("AdaptiveLuminancePass"),this.fullscreenMaterial=new ay,this.needsSwap=!1,this.renderTargetPrevious=new At(1,1,{minFilter:ct,magFilter:ct,depthBuffer:!1}),this.renderTargetPrevious.texture.name="Luminance.Previous";const n=this.fullscreenMaterial;n.luminanceBuffer0=this.renderTargetPrevious.texture,n.luminanceBuffer1=i,n.minLuminance=e,n.adaptationRate=t,this.renderTargetAdapted=this.renderTargetPrevious.clone(),this.renderTargetAdapted.texture.name="Luminance.Adapted",this.copyPass=new Hd(this.renderTargetPrevious,!1)}get texture(){return this.renderTargetAdapted.texture}getTexture(){return this.renderTargetAdapted.texture}set mipLevel1x1(i){this.fullscreenMaterial.mipLevel1x1=i}get adaptationRate(){return this.fullscreenMaterial.adaptationRate}set adaptationRate(i){this.fullscreenMaterial.adaptationRate=i}render(i,e,t,n,s){this.fullscreenMaterial.deltaTime=n,i.setRenderTarget(this.renderToScreen?null:this.renderTargetAdapted),i.render(this.scene,this.camera),this.copyPass.render(i,this.renderTargetAdapted)}},Dy=class extends bn{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(i,e,t,n,s){const r=i.state.buffers.stencil;r.setLocked(!1),r.setTest(!1)}},_h=new ve,tc=class extends bn{constructor(i=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=i,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(i,e,t){this.color=i,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(i){this.overrideClearColor=i}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(i){this.overrideClearAlpha=i}render(i,e,t,n,s){const r=this.overrideClearColor,a=this.overrideClearAlpha,o=i.getClearAlpha(),l=r!==null,c=a>=0;l?(i.getClearColor(_h),i.setClearColor(r,c?a:o)):c&&i.setClearAlpha(a),i.setRenderTarget(this.renderToScreen?null:e),i.clear(this.color,this.depth,this.stencil),l?i.setClearColor(_h,o):c&&i.setClearAlpha(o)}},Vd=class extends bn{constructor(i,e,t=null){super("RenderPass",i,e),this.needsSwap=!1,this.clearPass=new tc,this.overrideMaterialManager=t===null?null:new yh(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(i){this.scene=i}set mainCamera(i){this.camera=i}get renderToScreen(){return super.renderToScreen}set renderToScreen(i){super.renderToScreen=i,this.clearPass.renderToScreen=i}get overrideMaterial(){const i=this.overrideMaterialManager;return i!==null?i.material:null}set overrideMaterial(i){const e=this.overrideMaterialManager;i!==null?e!==null?e.setMaterial(i):this.overrideMaterialManager=new yh(i):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(i){this.overrideMaterial=i}get clear(){return this.clearPass.enabled}set clear(i){this.clearPass.enabled=i}getSelection(){return this.selection}setSelection(i){this.selection=i}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(i){this.ignoreBackground=i}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(i){this.skipShadowMapUpdate=i}getClearPass(){return this.clearPass}render(i,e,t,n,s){const r=this.scene,a=this.camera,o=this.selection,l=a.layers.mask,c=r.background,u=i.shadowMap.autoUpdate,h=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(i.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(r.background=null),this.clearPass.enabled&&this.clearPass.render(i,e),i.setRenderTarget(h),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(i,r,a):i.render(r,a),a.layers.mask=l,r.background=c,i.shadowMap.autoUpdate=u}};function vh(i,e,t){for(const n of e){const s="$1"+i+n.charAt(0).toUpperCase()+n.slice(1),r=new RegExp("([^\\.])(\\b"+n+"\\b)","g");for(const a of t.entries())a[1]!==null&&t.set(a[0],a[1].replace(r,s))}}function Iy(i,e,t){let n=e.getFragmentShader(),s=e.getVertexShader();const r=n!==void 0&&/mainImage/.test(n),a=n!==void 0&&/mainUv/.test(n);if(t.attributes|=e.getAttributes(),n===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&t.attributes&Ii.CONVOLUTION)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!r&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=t.shaderParts;let c=l.get(Ye.FRAGMENT_HEAD)||"",u=l.get(Ye.FRAGMENT_MAIN_UV)||"",h=l.get(Ye.FRAGMENT_MAIN_IMAGE)||"",d=l.get(Ye.VERTEX_HEAD)||"",p=l.get(Ye.VERTEX_MAIN_SUPPORT)||"";const _=new Set,g=new Set;if(a&&(u+=`	${i}MainUv(UV);
`,t.uvTransformation=!0),s!==null&&/mainSupport/.test(s)){const y=/mainSupport *\([\w\s]*?uv\s*?\)/.test(s);p+=`	${i}MainSupport(`,p+=y?`vUv);
`:`);
`;for(const v of s.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const S of v[1].split(/\s*,\s*/))t.varyings.add(S),_.add(S),g.add(S);for(const v of s.matchAll(o))g.add(v[1])}for(const y of n.matchAll(o))g.add(y[1]);for(const y of e.defines.keys())g.add(y.replace(/\([\w\s,]*\)/g,""));for(const y of e.uniforms.keys())g.add(y);g.delete("while"),g.delete("for"),g.delete("if"),e.uniforms.forEach((y,v)=>t.uniforms.set(i+v.charAt(0).toUpperCase()+v.slice(1),y)),e.defines.forEach((y,v)=>t.defines.set(i+v.charAt(0).toUpperCase()+v.slice(1),y));const m=new Map([["fragment",n],["vertex",s]]);vh(i,g,t.defines),vh(i,g,m),n=m.get("fragment"),s=m.get("vertex");const f=e.blendMode;if(t.blendModes.set(f.blendFunction,f),r){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(h+=e.inputColorSpace===ht?`color0 = LinearTosRGB(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==Nd?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const y=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;h+=`${i}MainImage(color0, UV, `,t.attributes&Ii.DEPTH&&y.test(n)&&(h+="depth, ",t.readDepth=!0),h+=`color1);
	`;const v=i+"BlendOpacity";t.uniforms.set(v,f.opacity),h+=`color0 = blend${f.blendFunction}(color0, color1, ${v});

	`,c+=`uniform float ${v};

`}if(c+=n+`
`,s!==null&&(d+=s+`
`),l.set(Ye.FRAGMENT_HEAD,c),l.set(Ye.FRAGMENT_MAIN_UV,u),l.set(Ye.FRAGMENT_MAIN_IMAGE,h),l.set(Ye.VERTEX_HEAD,d),l.set(Ye.VERTEX_MAIN_SUPPORT,p),e.extensions!==null)for(const y of e.extensions)t.extensions.add(y)}}var Tr=class extends bn{constructor(i,...e){super("EffectPass"),this.fullscreenMaterial=new Sy(null,null,null,i),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(i){for(const e of this.effects)e.mainScene=i}set mainCamera(i){this.fullscreenMaterial.copyCameraSettings(i);for(const e of this.effects)e.mainCamera=i}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(i){this.fullscreenMaterial.encodeOutput=i}get dithering(){return this.fullscreenMaterial.dithering}set dithering(i){const e=this.fullscreenMaterial;e.dithering=i,e.needsUpdate=!0}setEffects(i){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=i.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const i=new zy;let e=0;for(const a of this.effects)if(a.blendMode.blendFunction===Oe.DST)i.attributes|=a.getAttributes()&Ii.DEPTH;else{if(i.attributes&a.getAttributes()&Ii.CONVOLUTION)throw new Error(`Convolution effects cannot be merged (${a.name})`);Iy("e"+e++,a,i)}let t=i.shaderParts.get(Ye.FRAGMENT_HEAD),n=i.shaderParts.get(Ye.FRAGMENT_MAIN_IMAGE),s=i.shaderParts.get(Ye.FRAGMENT_MAIN_UV);const r=/\bblend\b/g;for(const a of i.blendModes.values())t+=a.getShaderCode().replace(r,`blend${a.blendFunction}`)+`
`;i.attributes&Ii.DEPTH?(i.readDepth&&(n=`float depth = readDepth(UV);

	`+n),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,i.colorSpace===ht&&(n+=`color0 = sRGBToLinear(color0);
	`),i.uvTransformation?(s=`vec2 transformedUv = vUv;
`+s,i.defines.set("UV","transformedUv")):i.defines.set("UV","vUv"),i.shaderParts.set(Ye.FRAGMENT_HEAD,t),i.shaderParts.set(Ye.FRAGMENT_MAIN_IMAGE,n),i.shaderParts.set(Ye.FRAGMENT_MAIN_UV,s);for(const[a,o]of i.shaderParts)o!==null&&i.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(i)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(i,e=Fi){this.fullscreenMaterial.depthBuffer=i,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(i,e)}render(i,e,t,n,s){for(const r of this.effects)r.update(i,e,n);if(!this.skipRendering||this.renderToScreen){const r=this.fullscreenMaterial;r.inputBuffer=e.texture,r.time+=n*this.timeScale,i.setRenderTarget(this.renderToScreen?null:t),i.render(this.scene,this.camera)}}setSize(i,e){this.fullscreenMaterial.setSize(i,e);for(const t of this.effects)t.setSize(i,e)}initialize(i,e,t){this.renderer=i;for(const n of this.effects)n.initialize(i,e,t);this.updateMaterial(),t!==void 0&&t!==Gt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const i of this.effects)i.removeEventListener("change",this.listener),i.dispose()}handleEvent(i){switch(i.type){case"change":this.recompile();break}}},Gd=class extends bn{constructor({kernelSize:i=no.MEDIUM,resolutionScale:e=.5,width:t=ln.AUTO_SIZE,height:n=ln.AUTO_SIZE,resolutionX:s=t,resolutionY:r=n}={}){super("KawaseBlurPass"),this.renderTargetA=new At(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const a=this.resolution=new ln(this,s,r,e);a.addEventListener("change",o=>this.setSize(a.baseWidth,a.baseHeight)),this._blurMaterial=new dy,this._blurMaterial.kernelSize=i,this.copyMaterial=new zd}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(i){this._blurMaterial=i}get dithering(){return this.copyMaterial.dithering}set dithering(i){this.copyMaterial.dithering=i}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(i){this.blurMaterial.kernelSize=i}get width(){return this.resolution.width}set width(i){this.resolution.preferredWidth=i}get height(){return this.resolution.height}set height(i){this.resolution.preferredHeight=i}get scale(){return this.blurMaterial.scale}set scale(i){this.blurMaterial.scale=i}getScale(){return this.blurMaterial.scale}setScale(i){this.blurMaterial.scale=i}getKernelSize(){return this.kernelSize}setKernelSize(i){this.kernelSize=i}getResolutionScale(){return this.resolution.scale}setResolutionScale(i){this.resolution.scale=i}render(i,e,t,n,s){const r=this.scene,a=this.camera,o=this.renderTargetA,l=this.renderTargetB,c=this.blurMaterial,u=c.kernelSequence;let h=e;this.fullscreenMaterial=c;for(let d=0,p=u.length;d<p;++d){const _=d&1?l:o;c.kernel=u[d],c.inputBuffer=h.texture,i.setRenderTarget(_),i.render(r,a),h=_}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=h.texture,i.setRenderTarget(this.renderToScreen?null:t),i.render(r,a)}setSize(i,e){const t=this.resolution;t.setBaseSize(i,e);const n=t.width,s=t.height;this.renderTargetA.setSize(n,s),this.renderTargetB.setSize(n,s),this.blurMaterial.setSize(i,e)}initialize(i,e,t){t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,t!==Gt?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):ps(i)===ht&&(In(this.renderTargetA.texture,ht),In(this.renderTargetB.texture,ht)))}static get AUTO_SIZE(){return ln.AUTO_SIZE}},Wd=class extends bn{constructor({renderTarget:i,luminanceRange:e,colorOutput:t,resolutionScale:n=1,width:s=ln.AUTO_SIZE,height:r=ln.AUTO_SIZE,resolutionX:a=s,resolutionY:o=r}={}){super("LuminancePass"),this.fullscreenMaterial=new Ay(t,e),this.needsSwap=!1,this.renderTarget=i,this.renderTarget===void 0&&(this.renderTarget=new At(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const l=this.resolution=new ln(this,a,o,n);l.addEventListener("change",c=>this.setSize(l.baseWidth,l.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(i,e,t,n,s){const r=this.fullscreenMaterial;r.inputBuffer=e.texture,i.setRenderTarget(this.renderToScreen?null:this.renderTarget),i.render(this.scene,this.camera)}setSize(i,e){const t=this.resolution;t.setBaseSize(i,e),this.renderTarget.setSize(t.width,t.height)}initialize(i,e,t){t!==void 0&&t!==Gt&&(this.renderTarget.texture.type=t,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},Uy=class extends bn{constructor(i,e){super("MaskPass",i,e),this.needsSwap=!1,this.clearPass=new tc(!1,!1,!0),this.inverse=!1}set mainScene(i){this.scene=i}set mainCamera(i){this.camera=i}get inverted(){return this.inverse}set inverted(i){this.inverse=i}get clear(){return this.clearPass.enabled}set clear(i){this.clearPass.enabled=i}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(i){this.inverted=i}render(i,e,t,n,s){const r=i.getContext(),a=i.state.buffers,o=this.scene,l=this.camera,c=this.clearPass,u=this.inverted?0:1,h=1-u;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.stencil.setFunc(r.ALWAYS,u,4294967295),a.stencil.setClear(h),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(i,null):(c.render(i,e),c.render(i,t))),this.renderToScreen?(i.setRenderTarget(null),i.render(o,l)):(i.setRenderTarget(e),i.render(o,l),i.setRenderTarget(t),i.render(o,l)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(r.EQUAL,1,4294967295),a.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.stencil.setLocked(!0)}},Oy=class extends bn{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new At(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new vy,this.upsamplingMaterial=new Ry,this.resolution=new pe}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(i){if(this.levels!==i){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let t=0;t<i;++t){const n=e.clone();n.texture.name="Downsampling.Mipmap"+t,this.downsamplingMipmaps.push(n)}this.upsamplingMipmaps.push(e);for(let t=1,n=i-1;t<n;++t){const s=e.clone();s.texture.name="Upsampling.Mipmap"+t,this.upsamplingMipmaps.push(s)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(i){this.upsamplingMaterial.radius=i}render(i,e,t,n,s){const{scene:r,camera:a}=this,{downsamplingMaterial:o,upsamplingMaterial:l}=this,{downsamplingMipmaps:c,upsamplingMipmaps:u}=this;let h=e;this.fullscreenMaterial=o;for(let d=0,p=c.length;d<p;++d){const _=c[d];o.setSize(h.width,h.height),o.inputBuffer=h.texture,i.setRenderTarget(_),i.render(r,a),h=_}this.fullscreenMaterial=l;for(let d=u.length-1;d>=0;--d){const p=u[d];l.setSize(h.width,h.height),l.inputBuffer=h.texture,l.supportBuffer=c[d].texture,i.setRenderTarget(p),i.render(r,a),h=p}}setSize(i,e){const t=this.resolution;t.set(i,e);let n=t.width,s=t.height;for(let r=0,a=this.downsamplingMipmaps.length;r<a;++r)n=Math.round(n*.5),s=Math.round(s*.5),this.downsamplingMipmaps[r].setSize(n,s),r<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[r].setSize(n,s)}initialize(i,e,t){if(t!==void 0){const n=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const s of n)s.texture.type=t;if(t!==Gt)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(ps(i)===ht)for(const s of n)In(s.texture,ht)}}dispose(){super.dispose();for(const i of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))i.dispose()}},xh=class extends bn{constructor(i,e="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=i,this.input=e}setInput(i){this.input=i}render(i,e,t,n,s){const r=this.fullscreenMaterial.uniforms;e!==null&&r!==void 0&&r[this.input]!==void 0&&(r[this.input].value=e.texture),i.setRenderTarget(this.renderToScreen?null:t),i.render(this.scene,this.camera)}initialize(i,e,t){t!==void 0&&t!==Gt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},qo=1/1e3,Ny=1e3,Fy=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(i){typeof document<"u"&&document.hidden!==void 0&&(i?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=i)}get delta(){return this._delta*qo}get fixedDelta(){return this._fixedDelta*qo}set fixedDelta(i){this._fixedDelta=i*Ny}get elapsed(){return this._elapsed*qo}update(i){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(i!==void 0?i:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}handleEvent(i){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},By=class{constructor(i=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:n=0,frameBufferType:s}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,s,n),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new Hd,this.depthTexture=null,this.passes=[],this.timer=new Fy,this.autoRenderToScreen=!0,this.setRenderer(i)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(i){const e=this.inputBuffer,t=this.multisampling;t>0&&i>0?(this.inputBuffer.samples=i,this.outputBuffer.samples=i,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==i&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,i),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(i){if(this.renderer=i,i!==null){const e=i.getSize(new pe),t=i.getContext().getContextAttributes().alpha,n=this.inputBuffer.texture.type;n===Gt&&ps(i)===ht&&(In(this.inputBuffer.texture,ht),In(this.outputBuffer.texture,ht),this.inputBuffer.dispose(),this.outputBuffer.dispose()),i.autoClear=!1,this.setSize(e.width,e.height);for(const s of this.passes)s.initialize(i,t,n)}}replaceRenderer(i,e=!0){const t=this.renderer,n=t.domElement.parentNode;return this.setRenderer(i),e&&n!==null&&(n.removeChild(t.domElement),n.appendChild(i.domElement)),t}createDepthTexture(){const i=this.depthTexture=new Wl;return this.inputBuffer.depthTexture=i,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(i.format=ds,i.type=Di):i.type=li,i}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const i of this.passes)i.setDepthTexture(null)}}createBuffer(i,e,t,n){const s=this.renderer,r=s===null?new pe:s.getDrawingBufferSize(new pe),a={minFilter:Lt,magFilter:Lt,stencilBuffer:e,depthBuffer:i,type:t},o=new At(r.width,r.height,a);return n>0&&(o.ignoreDepthForMultisampleCopy=!1,o.samples=n),t===Gt&&ps(s)===ht&&In(o.texture,ht),o.texture.name="EffectComposer.Buffer",o.texture.generateMipmaps=!1,o}setMainScene(i){for(const e of this.passes)e.mainScene=i}setMainCamera(i){for(const e of this.passes)e.mainCamera=i}addPass(i,e){const t=this.passes,n=this.renderer,s=n.getDrawingBufferSize(new pe),r=n.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(i.setRenderer(n),i.setSize(s.width,s.height),i.initialize(n,r,a),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),i.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,i):t.push(i),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),i.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const o=this.createDepthTexture();for(i of t)i.setDepthTexture(o)}else i.setDepthTexture(this.depthTexture)}removePass(i){const e=this.passes,t=e.indexOf(i);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){const r=(o,l)=>o||l.needsDepthTexture;e.reduce(r,!1)||(i.getDepthTexture()===this.depthTexture&&i.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&t===e.length&&(i.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const i=this.passes;this.deleteDepthTexture(),i.length>0&&(this.autoRenderToScreen&&(i[i.length-1].renderToScreen=!1),this.passes=[])}render(i){const e=this.renderer,t=this.copyPass;let n=this.inputBuffer,s=this.outputBuffer,r=!1,a,o,l;i===void 0&&(this.timer.update(),i=this.timer.delta);for(const c of this.passes)c.enabled&&(c.render(e,n,s,i,r),c.needsSwap&&(r&&(t.renderToScreen=c.renderToScreen,a=e.getContext(),o=e.state.buffers.stencil,o.setFunc(a.NOTEQUAL,1,4294967295),t.render(e,n,s,i,r),o.setFunc(a.EQUAL,1,4294967295)),l=n,n=s,s=l),c instanceof Uy?r=!0:c instanceof Dy&&(r=!1))}setSize(i,e,t){const n=this.renderer,s=n.getSize(new pe);(i===void 0||e===void 0)&&(i=s.width,e=s.height),(s.width!==i||s.height!==e)&&n.setSize(i,e,t);const r=n.getDrawingBufferSize(new pe);this.inputBuffer.setSize(r.width,r.height),this.outputBuffer.setSize(r.width,r.height);for(const a of this.passes)a.setSize(r.width,r.height)}reset(){const i=this.timer.autoReset;this.dispose(),this.autoRenderToScreen=!0,this.timer.autoReset=i}dispose(){for(const i of this.passes)i.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose()}},zy=class{constructor(){this.shaderParts=new Map([[Ye.FRAGMENT_HEAD,null],[Ye.FRAGMENT_MAIN_UV,null],[Ye.FRAGMENT_MAIN_IMAGE,null],[Ye.VERTEX_HEAD,null],[Ye.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Ii.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=to}},Yo=!1,yh=class{constructor(i=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(i),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case Dt:t=this.materialsFlatShadedDoubleSide;break;case It:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case Dt:t=this.materialsDoubleSide;break;case It:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(i){if(!(i instanceof ot))return i.clone();const e=i.uniforms,t=new Map;for(const s in e){const r=e[s].value;r.isRenderTargetTexture&&(e[s].value=null,t.set(s,r))}const n=i.clone();for(const s of t)e[s[0]].value=s[1],n.uniforms[s[0]].value=s[1];return n}setMaterial(i){if(this.disposeMaterials(),this.material=i,i!==null){const e=this.materials=[this.cloneMaterial(i),this.cloneMaterial(i),this.cloneMaterial(i)];for(const t of e)t.uniforms=Object.assign({},i.uniforms),t.side=Gn;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.side=It,n}),this.materialsDoubleSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.side=Dt,n}),this.materialsFlatShaded=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.flatShading=!0,n}),this.materialsFlatShadedBackSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.flatShading=!0,n.side=It,n}),this.materialsFlatShadedDoubleSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.flatShading=!0,n.side=Dt,n})}}render(i,e,t){const n=i.shadowMap.enabled;if(i.shadowMap.enabled=!1,Yo){const s=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),i.render(e,t);for(const r of s)r[0].material=r[1];this.meshCount!==s.size&&s.clear()}else{const s=e.overrideMaterial;e.overrideMaterial=this.material,i.render(e,t),e.overrideMaterial=s}i.shadowMap.enabled=n}disposeMaterials(){if(this.material!==null){const i=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of i)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Yo}static set workaroundEnabled(i){Yo=i}},Ei=-1,ln=class extends Yn{constructor(i,e=Ei,t=Ei,n=1){super(),this.resizable=i,this.baseSize=new pe(1,1),this.preferredSize=new pe(e,t),this.target=this.preferredSize,this.s=n,this.effectiveSize=new pe,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const i=this.baseSize,e=this.preferredSize,t=this.effectiveSize,n=this.scale;e.width!==Ei?t.width=e.width:e.height!==Ei?t.width=Math.round(e.height*(i.width/Math.max(i.height,1))):t.width=Math.round(i.width*n),e.height!==Ei?t.height=e.height:e.width!==Ei?t.height=Math.round(e.width/Math.max(i.width/Math.max(i.height,1),1)):t.height=Math.round(i.height*n)}get width(){return this.effectiveSize.width}set width(i){this.preferredWidth=i}get height(){return this.effectiveSize.height}set height(i){this.preferredHeight=i}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(i){this.s!==i&&(this.s=i,this.preferredSize.setScalar(Ei),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(i){this.scale=i}get baseWidth(){return this.baseSize.width}set baseWidth(i){this.baseSize.width!==i&&(this.baseSize.width=i,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(i){this.baseWidth=i}get baseHeight(){return this.baseSize.height}set baseHeight(i){this.baseSize.height!==i&&(this.baseSize.height=i,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(i){this.baseHeight=i}setBaseSize(i,e){(this.baseSize.width!==i||this.baseSize.height!==e)&&(this.baseSize.set(i,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(i){this.preferredSize.width!==i&&(this.preferredSize.width=i,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(i){this.preferredWidth=i}get preferredHeight(){return this.preferredSize.height}set preferredHeight(i){this.preferredSize.height!==i&&(this.preferredSize.height=i,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(i){this.preferredHeight=i}setPreferredSize(i,e){(this.preferredSize.width!==i||this.preferredSize.height!==e)&&(this.preferredSize.set(i,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(i){this.s=i.scale,this.baseSize.set(i.baseWidth,i.baseHeight),this.preferredSize.set(i.preferredWidth,i.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return Ei}},ky="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y,opacity);}",Hy="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,min(y.a,opacity));}",Vy="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y)*0.5,opacity);}",Gy="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.rg,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",Wy="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(step(0.0,y)*(1.0-min(vec4(1.0),(1.0-x)/y)),vec4(1.0),step(1.0,x));return mix(x,z,opacity);}",Xy="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=step(0.0,x)*mix(min(vec4(1.0),x/max(1.0-y,1e-9)),vec4(1.0),step(1.0,y));return mix(x,z,opacity);}",qy="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x,y),opacity);}",Yy="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,abs(x-y),opacity);}",jy="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x/max(y,1e-12),opacity);}",$y="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y-2.0*x*y),opacity);}",Ky="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 a=min(x,1.0),b=min(y,1.0);vec4 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,y));return mix(x,z,opacity);}",Zy="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,step(1.0,x+y),opacity);}",Jy="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.r,xHSL.gb));return vec4(mix(x.rgb,z,opacity),y.a);}",Qy="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-y,opacity);}",eS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y*(1.0-x),opacity);}",tS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x,y),opacity);}",nS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(y+x-1.0,0.0,1.0),opacity);}",iS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x+y,1.0),opacity);}",sS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(2.0*y+x-1.0,0.0,1.0),opacity);}",rS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.rg,yHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",aS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x*y,opacity);}",oS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-abs(1.0-x-y),opacity);}",lS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}",cS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(2.0*y*x,1.0-2.0*(1.0-y)*(1.0-x),step(0.5,x));return mix(x,z,opacity);}",uS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 z=mix(mix(y2,x,step(0.5*x,y)),max(vec4(0.0),y2-1.0),step(x,(y2-1.0)));return mix(x,z,opacity);}",hS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(min(x*x/max(1.0-y,1e-12),1.0),y,step(1.0,y));return mix(x,z,opacity);}",dS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.r,yHSL.g,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",fS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y-min(x*y,1.0),opacity);}",pS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 w=step(0.5,y);vec4 z=mix(x-(1.0-y2)*x*(1.0-x),mix(x+(y2-1.0)*(sqrt(x)-x),x+(y2-1.0)*x*((16.0*x-12.0)*x+3.0),w*(1.0-step(0.25,x))),w);return mix(x,z,opacity);}",mS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",gS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x+y-1.0,0.0),opacity);}",_S="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(max(1.0-min((1.0-x)/(2.0*y),1.0),0.0),min(x/(2.0*(1.0-y)),1.0),step(0.5,y));return mix(x,z,opacity);}",vS=new Map([[Oe.ADD,ky],[Oe.ALPHA,Hy],[Oe.AVERAGE,Vy],[Oe.COLOR,Gy],[Oe.COLOR_BURN,Wy],[Oe.COLOR_DODGE,Xy],[Oe.DARKEN,qy],[Oe.DIFFERENCE,Yy],[Oe.DIVIDE,jy],[Oe.DST,null],[Oe.EXCLUSION,$y],[Oe.HARD_LIGHT,Ky],[Oe.HARD_MIX,Zy],[Oe.HUE,Jy],[Oe.INVERT,Qy],[Oe.INVERT_RGB,eS],[Oe.LIGHTEN,tS],[Oe.LINEAR_BURN,nS],[Oe.LINEAR_DODGE,iS],[Oe.LINEAR_LIGHT,sS],[Oe.LUMINOSITY,rS],[Oe.MULTIPLY,aS],[Oe.NEGATION,oS],[Oe.NORMAL,lS],[Oe.OVERLAY,cS],[Oe.PIN_LIGHT,uS],[Oe.REFLECT,hS],[Oe.SATURATION,dS],[Oe.SCREEN,fS],[Oe.SOFT_LIGHT,pS],[Oe.SRC,mS],[Oe.SUBTRACT,gS],[Oe.VIVID_LIGHT,_S]]),xS=class extends Yn{constructor(i,e=1){super(),this._blendFunction=i,this.opacity=new ge(e)}getOpacity(){return this.opacity.value}setOpacity(i){this.opacity.value=i}get blendFunction(){return this._blendFunction}set blendFunction(i){this._blendFunction=i,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(i){this.blendFunction=i}getShaderCode(){return vS.get(this.blendFunction)}},Jr=class extends Yn{constructor(i,e,{attributes:t=Ii.NONE,blendFunction:n=Oe.NORMAL,defines:s=new Map,uniforms:r=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=i,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=o,this.defines=s,this.uniforms=r,this.extensions=a,this.blendMode=new xS(n),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=to,this._outputColorSpace=Nd}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(i){this._inputColorSpace=i,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(i){this._outputColorSpace=i,this.setChanged()}set mainScene(i){}set mainCamera(i){}getName(){return this.name}setRenderer(i){this.renderer=i}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(i){this.attributes=i,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(i){this.fragmentShader=i,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(i){this.vertexShader=i,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(i,e=Fi){}update(i,e,t){}setSize(i,e){}initialize(i,e,t){}dispose(){for(const i of Object.keys(this)){const e=this[i];(e instanceof At||e instanceof Mn||e instanceof St||e instanceof bn)&&this[i].dispose()}}},yS=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,SS=class extends Jr{constructor({blendFunction:i=Oe.SCREEN,luminanceThreshold:e=.9,luminanceSmoothing:t=.025,mipmapBlur:n=!1,intensity:s=1,radius:r=.85,levels:a=8,kernelSize:o=no.LARGE,resolutionScale:l=.5,width:c=ln.AUTO_SIZE,height:u=ln.AUTO_SIZE,resolutionX:h=c,resolutionY:d=u}={}){super("BloomEffect",yS,{blendFunction:i,uniforms:new Map([["map",new ge(null)],["intensity",new ge(s)]])}),this.renderTarget=new At(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new Gd({kernelSize:o}),this.luminancePass=new Wd({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=t,this.mipmapBlurPass=new Oy,this.mipmapBlurPass.enabled=n,this.mipmapBlurPass.radius=r,this.mipmapBlurPass.levels=a,this.uniforms.get("map").value=n?this.mipmapBlurPass.texture:this.renderTarget.texture;const p=this.resolution=new ln(this,h,d,l);p.addEventListener("change",_=>this.setSize(p.baseWidth,p.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(i){this.resolution.preferredWidth=i}get height(){return this.resolution.height}set height(i){this.resolution.preferredHeight=i}get dithering(){return this.blurPass.dithering}set dithering(i){this.blurPass.dithering=i}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(i){this.blurPass.kernelSize=i}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(i){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(i){this.uniforms.get("intensity").value=i}getIntensity(){return this.intensity}setIntensity(i){this.intensity=i}getResolutionScale(){return this.resolution.scale}setResolutionScale(i){this.resolution.scale=i}update(i,e,t){const n=this.renderTarget,s=this.luminancePass;s.enabled?(s.render(i,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(i,s.renderTarget):this.blurPass.render(i,s.renderTarget,n)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(i,e):this.blurPass.render(i,e,n)}setSize(i,e){const t=this.resolution;t.setBaseSize(i,e),this.renderTarget.setSize(t.width,t.height),this.blurPass.resolution.copy(t),this.luminancePass.setSize(i,e),this.mipmapBlurPass.setSize(i,e)}initialize(i,e,t){this.blurPass.initialize(i,e,t),this.luminancePass.initialize(i,e,t),this.mipmapBlurPass.initialize(i,e,t),t!==void 0&&(this.renderTarget.texture.type=t,ps(i)===ht&&In(this.renderTarget.texture,ht))}},MS=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv);}`,jo=new L,Sh=new Ne,ES=class extends Jr{constructor(i,e,{blendFunction:t=Oe.SCREEN,samples:n=60,density:s=.96,decay:r=.9,weight:a=.4,exposure:o=.6,clampMax:l=1,blur:c=!0,kernelSize:u=no.SMALL,resolutionScale:h=.5,width:d=ln.AUTO_SIZE,height:p=ln.AUTO_SIZE,resolutionX:_=d,resolutionY:g=p}={}){super("GodRaysEffect",MS,{blendFunction:t,attributes:Ii.DEPTH,uniforms:new Map([["map",new ge(null)]])}),this.camera=i,this._lightSource=e,this.lightSource=e,this.lightScene=new Ha,this.screenPosition=new pe,this.renderTargetA=new At(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="GodRays.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="GodRays.Target.B",this.uniforms.get("map").value=this.renderTargetB.texture,this.renderTargetLight=new At(1,1),this.renderTargetLight.texture.name="GodRays.Light",this.renderTargetLight.depthTexture=new Wl,this.renderPassLight=new Vd(this.lightScene,i),this.renderPassLight.clearPass.overrideClearColor=new ve(0),this.clearPass=new tc(!0,!1,!1),this.clearPass.overrideClearColor=new ve(0),this.blurPass=new Gd({kernelSize:u}),this.blurPass.enabled=c,this.depthMaskPass=new xh(new my);const m=this.depthMaskMaterial;m.depthBuffer1=this.renderTargetLight.depthTexture,m.copyCameraSettings(i),this.godRaysPass=new xh(new Ey(this.screenPosition));const f=this.godRaysMaterial;f.density=s,f.decay=r,f.weight=a,f.exposure=o,f.maxIntensity=l,f.samples=n;const y=this.resolution=new ln(this,_,g,h);y.addEventListener("change",v=>this.setSize(y.baseWidth,y.baseHeight))}set mainCamera(i){this.camera=i,this.renderPassLight.mainCamera=i,this.depthMaskMaterial.copyCameraSettings(i)}get lightSource(){return this._lightSource}set lightSource(i){this._lightSource=i,i!==null&&(i.material.depthWrite=!1,i.material.transparent=!0)}getBlurPass(){return this.blurPass}get texture(){return this.renderTargetB.texture}getTexture(){return this.texture}get depthMaskMaterial(){return this.depthMaskPass.fullscreenMaterial}get godRaysMaterial(){return this.godRaysPass.fullscreenMaterial}getGodRaysMaterial(){return this.godRaysMaterial}getResolution(){return this.resolution}get width(){return this.resolution.width}set width(i){this.resolution.preferredWidth=i}get height(){return this.resolution.height}set height(i){this.resolution.preferredHeight=i}get dithering(){return this.godRaysMaterial.dithering}set dithering(i){const e=this.godRaysMaterial;e.dithering=i,e.needsUpdate=!0}get blur(){return this.blurPass.enabled}set blur(i){this.blurPass.enabled=i}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(i){this.blurPass.kernelSize=i}getResolutionScale(){return this.resolution.scale}setResolutionScale(i){this.resolution.scale=i}get samples(){return this.godRaysMaterial.samples}set samples(i){this.godRaysMaterial.samples=i}setDepthTexture(i,e=Fi){this.depthMaskPass.fullscreenMaterial.depthBuffer0=i,this.depthMaskPass.fullscreenMaterial.depthPacking0=e}update(i,e,t){const n=this.lightSource,s=n.parent,r=n.matrixAutoUpdate,a=this.renderTargetA,o=this.renderTargetLight;n.material.depthWrite=!0,n.matrixAutoUpdate=!1,n.updateWorldMatrix(!0,!1),s!==null&&(r||Sh.copy(n.matrix),n.matrix.copy(n.matrixWorld)),this.lightScene.add(n),this.renderPassLight.render(i,o),this.clearPass.render(i,a),this.depthMaskPass.render(i,o,a),n.material.depthWrite=!1,n.matrixAutoUpdate=r,s!==null&&(r||n.matrix.copy(Sh),s.add(n)),jo.setFromMatrixPosition(n.matrixWorld).project(this.camera),this.screenPosition.set(Math.min(Math.max((jo.x+1)*.5,-1),2),Math.min(Math.max((jo.y+1)*.5,-1),2)),this.blurPass.enabled&&this.blurPass.render(i,a,a),this.godRaysPass.render(i,a,this.renderTargetB)}setSize(i,e){const t=this.resolution;t.setBaseSize(i,e);const n=t.width,s=t.height;this.renderTargetA.setSize(n,s),this.renderTargetB.setSize(n,s),this.renderTargetLight.setSize(n,s),this.blurPass.resolution.copy(t)}initialize(i,e,t){this.blurPass.initialize(i,e,t),this.renderPassLight.initialize(i,e,t),this.depthMaskPass.initialize(i,e,t),this.godRaysPass.initialize(i,e,t),t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,this.renderTargetLight.texture.type=t,ps(i)===ht&&(In(this.renderTargetA.texture,ht),In(this.renderTargetB.texture,ht),In(this.renderTargetLight.texture,ht)))}},TS=`#include <tonemapping_pars_fragment>
#if THREE_REVISION < 143
#define luminance(v) linearToRelativeLuminance(v)
#endif
uniform float whitePoint;
#if TONE_MAPPING_MODE == 1 || TONE_MAPPING_MODE == 2
uniform float middleGrey;
#if TONE_MAPPING_MODE == 2
uniform lowp sampler2D luminanceBuffer;
#else
uniform float averageLuminance;
#endif
vec3 Reinhard2ToneMapping(vec3 color){color*=toneMappingExposure;float l=luminance(color);
#if TONE_MAPPING_MODE == 2
float lumAvg=unpackRGBAToFloat(texture2D(luminanceBuffer,vec2(0.5)));
#else
float lumAvg=averageLuminance;
#endif
float lumScaled=(l*middleGrey)/max(lumAvg,1e-6);float lumCompressed=lumScaled*(1.0+lumScaled/(whitePoint*whitePoint));lumCompressed/=(1.0+lumScaled);return clamp(lumCompressed*color,0.0,1.0);}
#elif TONE_MAPPING_MODE == 5
#define A 0.15
#define B 0.50
#define C 0.10
#define D 0.20
#define E 0.02
#define F 0.30
vec3 Uncharted2Helper(const in vec3 x){return((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;}vec3 Uncharted2ToneMapping(vec3 color){color*=toneMappingExposure;return clamp(Uncharted2Helper(color)/Uncharted2Helper(vec3(whitePoint)),0.0,1.0);}
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){
#if TONE_MAPPING_MODE == 1 || TONE_MAPPING_MODE == 2
outputColor=vec4(Reinhard2ToneMapping(inputColor.rgb),inputColor.a);
#elif TONE_MAPPING_MODE == 5
outputColor=vec4(Uncharted2ToneMapping(inputColor.rgb),inputColor.a);
#else
outputColor=vec4(toneMapping(inputColor.rgb),inputColor.a);
#endif
}`,AS=class extends Jr{constructor({blendFunction:i=Oe.SRC,adaptive:e=!1,mode:t=e?Nn.REINHARD2_ADAPTIVE:Nn.ACES_FILMIC,resolution:n=256,maxLuminance:s=4,whitePoint:r=s,middleGrey:a=.6,minLuminance:o=.01,averageLuminance:l=1,adaptationRate:c=1}={}){super("ToneMappingEffect",TS,{blendFunction:i,uniforms:new Map([["luminanceBuffer",new ge(null)],["maxLuminance",new ge(s)],["whitePoint",new ge(r)],["middleGrey",new ge(a)],["averageLuminance",new ge(l)]])}),this.renderTargetLuminance=new At(1,1,{minFilter:Ni,depthBuffer:!1}),this.renderTargetLuminance.texture.generateMipmaps=!0,this.renderTargetLuminance.texture.name="Luminance",this.luminancePass=new Wd({renderTarget:this.renderTargetLuminance}),this.adaptiveLuminancePass=new Ly(this.luminancePass.texture,{minLuminance:o,adaptationRate:c}),this.uniforms.get("luminanceBuffer").value=this.adaptiveLuminancePass.texture,this.resolution=n,this.mode=t}get mode(){return Number(this.defines.get("TONE_MAPPING_MODE"))}set mode(i){if(this.mode!==i){switch(this.defines.clear(),this.defines.set("TONE_MAPPING_MODE",i.toFixed(0)),i){case Nn.REINHARD:this.defines.set("toneMapping(texel)","ReinhardToneMapping(texel)");break;case Nn.OPTIMIZED_CINEON:this.defines.set("toneMapping(texel)","OptimizedCineonToneMapping(texel)");break;case Nn.ACES_FILMIC:this.defines.set("toneMapping(texel)","ACESFilmicToneMapping(texel)");break;default:this.defines.set("toneMapping(texel)","texel");break}this.adaptiveLuminancePass.enabled=i===Nn.REINHARD2_ADAPTIVE,this.setChanged()}}getMode(){return this.mode}setMode(i){this.mode=i}get whitePoint(){return this.uniforms.get("whitePoint").value}set whitePoint(i){this.uniforms.get("whitePoint").value=i}get middleGrey(){return this.uniforms.get("middleGrey").value}set middleGrey(i){this.uniforms.get("middleGrey").value=i}get averageLuminance(){return this.uniforms.get("averageLuminance").value}set averageLuminance(i){this.uniforms.get("averageLuminance").value=i}get adaptiveLuminanceMaterial(){return this.adaptiveLuminancePass.fullscreenMaterial}getAdaptiveLuminanceMaterial(){return this.adaptiveLuminanceMaterial}get resolution(){return this.luminancePass.resolution.width}set resolution(i){const e=Math.max(0,Math.ceil(Math.log2(i))),t=Math.pow(2,e);this.luminancePass.resolution.setPreferredSize(t,t),this.adaptiveLuminanceMaterial.mipLevel1x1=e}getResolution(){return this.resolution}setResolution(i){this.resolution=i}get adaptive(){return this.mode===Nn.REINHARD2_ADAPTIVE}set adaptive(i){this.mode=i?Nn.REINHARD2_ADAPTIVE:Nn.REINHARD2}get adaptationRate(){return this.adaptiveLuminanceMaterial.adaptationRate}set adaptationRate(i){this.adaptiveLuminanceMaterial.adaptationRate=i}get distinction(){return console.warn(this.name,"distinction was removed."),1}set distinction(i){console.warn(this.name,"distinction was removed.")}update(i,e,t){this.adaptiveLuminancePass.enabled&&(this.luminancePass.render(i,e),this.adaptiveLuminancePass.render(i,null,null,t))}initialize(i,e,t){this.adaptiveLuminancePass.initialize(i,e,t)}},bS=`uniform vec3 powRGB;\r
uniform vec3 mulRGB;\r
uniform vec3 addRGB;

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {\r
    outputColor.rgb = mulRGB * pow( ( inputColor.rgb + addRGB ), powRGB );\r
}`;let wS=class extends Jr{constructor(){super("ColorCorrectionEffect",bS,{blendFunction:Oe.ADD,uniforms:new Map([["powRGB",new ge(new L(3,3,4))],["mulRGB",new ge(new L(2,2,5))],["addRGB",new ge(new L(.05,.05,.25))]])})}};var RS=`uniform float uTime;                
uniform float uStartTime;           
uniform float uEndTime;             

uniform float uTimeAnimationIn;     
uniform float uTimeAnimationOut;    
uniform float uDisplacement;        
uniform vec2  uSize;                

#define HALF_PI 1.5707963267948966\r
float elasticInOut(float t) {\r
  return t < 0.5\r
    ? 0.5 * sin(+13.0 * HALF_PI * 2.0 * t) * pow(2.0, 10.0 * (2.0 * t - 1.0))\r
    : 0.5 * sin(-13.0 * HALF_PI * ((2.0 * t - 1.0) + 1.0)) * pow(2.0, -10.0 * (2.0 * t - 1.0)) + 1.0;\r
}\r

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {

    if (uTime > uStartTime && uTime < uEndTime) {\r
        
        float curPosIn  = elasticInOut(clamp(uTime - uStartTime, 0.0, uTimeAnimationIn) * (1.0 / uTimeAnimationIn));\r
        
        float curPosOut = elasticInOut(clamp(uTime - (uEndTime - uTimeAnimationOut), 0.0, uTimeAnimationOut) * (1.0 / uTimeAnimationOut));\r
        
        float displacement = (curPosIn - curPosOut) * uDisplacement;\r
        
        vec2 pos = uv, pos2 = uv;\r
        float mixPos = uv.y; 
        
        if (uSize.x > uSize.y) { \r
            pos.x  = uv.x + displacement;\r
            pos2.x = uv.x - displacement;\r
            mixPos = uv.x;\r
        }\r
        
        else { \r
            pos.y  = uv.y + displacement;\r
            pos2.y = uv.y - displacement;\r
        }\r
        
        vec4 color  = texture2D(inputBuffer, pos);\r
        vec4 color2 = texture2D(inputBuffer, pos2);\r
        
        color.a  = 1.0 - uv.x;\r
        color2.a = uv.x;\r
        
        outputColor = mix(color, color2, mixPos);\r
        
    }\r
}\r

/*void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {\r
    outputColor = inputColor;\r
    if (uEnabled == 0.1) { 
        
        float curPos = clamp(uTime - uStartTime, 0.0, 2.0) * 0.5;\r
        float x = 2.0 * abs(uv.x - 0.5);\r
        vec4 color = texture2D(inputBuffer, vec2(x, uv.y));\r
        outputColor = vec4(color.rgb * (1.0 - curPos), 1.0);\r
    }\r
    else if (uEnabled == 1.0) { 
        
        float curPos = clamp(uTime - uStartTime, 0.0, 10.0) * 0.1;

        float x = 2.0 * abs(uv.x - 0.5);\r
        vec4 color = texture2D(inputBuffer, vec2(x, uv.y));\r
        outputColor = vec4(color.rgb * curPos, 1.0);\r
    }\r
    else if (uEnabled == 0.2) { 
        
        float curPos = clamp(uTime - uStartTime, 0.0, 2.0) * 0.5;\r
        float y = 2.0 * abs(uv.y - 0.5);\r
        vec4 color = texture2D(inputBuffer, vec2(uv.x, y));\r
        outputColor = vec4(color.rgb * (1.0 - curPos), 1.0);\r
    }\r
    else if (uEnabled == 2.0) { 
        float curPos = clamp(uTime - uStartTime, 0.0, 10.0) * 0.1;\r
        float y = 2.0 * abs(uv.y - 0.5);\r
        vec4 color = texture2D(inputBuffer, vec2(uv.x, y));\r
        outputColor = vec4(color.rgb * curPos, 1.0);\r
    }\r
/*    else if (uEnabled == 0.3) { 
        
        float curPos = clamp(uTime - uStartTime, 0.0, 2.0) * 0.5;\r
        float x = 2.0 * abs(uv.x - 0.5);\r
        float y = 2.0 * abs(uv.y - 0.5);\r
        vec4 color = texture2D(inputBuffer, vec2(x, y));\r
        outputColor = vec4(color.rgb * (1.0 - curPos), 1.0);\r
    }\r
    else if (uEnabled == 3.0) { 
        float curPos = clamp(uTime - uStartTime, 0.0, 10.0) * 0.1;\r
        float x = 2.0 * abs(uv.x - 0.5);\r
        float y = 2.0 * abs(uv.y - 0.5);\r
        vec4 color = texture2D(inputBuffer, vec2(x, y));\r
        outputColor = vec4(color.rgb * (1.0 - curPos), 1.0);\r
    }*/`;class CS extends Jr{constructor(){super("MirrorModeEffect",RS,{blendFunction:Oe.ALPHA,uniforms:new Map([["uStartTime",new ge(0)],["uEndTime",new ge(0)],["uTime",new ge(0)],["uTimeAnimationIn",new ge(0)],["uTimeAnimationOut",new ge(0)],["uDisplacement",new ge(0)],["uSize",new ge(new pe(0,0))]])})}init(e,t,n,s,r,a,o){this.uniforms.get("uStartTime").value=e,this.uniforms.get("uEndTime").value=t,this.uniforms.get("uTimeAnimationIn").value=r,this.uniforms.get("uTimeAnimationOut").value=a,this.uniforms.get("uDisplacement").value=o,this.uniforms.get("uSize").value=new pe(n,s)}}class PS{constructor(){this.experience=new gt,this.canvas=this.experience.canvas,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.camera=this.experience.camera,this.time=this.experience.time,this.world=this.experience.world,this.setInstance()}setInstance(){this.instance=new wd({canvas:this.canvas,powerPreference:"high-performance",antialias:!1,stencil:!1,depth:!1}),this.instance.outputColorSpace=Te,this.instance.toneMapping=hi,this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio),this.effectComposer=new By(this.instance,{frameBufferType:Qs}),this.effectComposer.addPass(new Vd(this.scene,this.camera.instance)),this.mirrorModeEffect=new CS,this.mirrorModePass=new Tr(this.camera.instance,this.mirrorModeEffect),this.effectComposer.addPass(this.mirrorModePass),this.bloomEffect=new SS({mipmapBlur:!0,levels:5}),this.bloomEffect.intensity=this.experience.options.bloomPmndrsIntensity,this.bloomEffect.luminanceMaterial.uniforms.threshold.value=this.experience.options.bloomPmndrsThreshold,this.bloomEffect.luminanceMaterial.uniforms.smoothing.value=this.experience.options.bloomPmndrsSmoothing,this.bloomEffect.mipmapBlurPass.radius=this.experience.options.bloomPmndrsRadius,this.bloomPass=new Tr(this.camera.instance,this.bloomEffect),this.effectComposer.addPass(this.bloomPass),this.colorCorrectionEffect=new wS,this.colorCorrectionEffect.uniforms.get("powRGB").value=this.experience.options.colorCorrectionPowRGB,this.colorCorrectionEffect.uniforms.get("mulRGB").value=this.experience.options.colorCorrectionMulRGB,this.colorCorrectionEffect.uniforms.get("addRGB").value=this.experience.options.colorCorrectionAddRGB,this.colorCorrectionPass=new Tr(this.camera.instance,this.colorCorrectionEffect),this.effectComposer.addPass(this.colorCorrectionPass),this.toneMappingEffect=new AS,this.toneMappingEffect.mode=Nn.OPTIMIZED_CINEON,this.toneMappingEffect.exposure=1.75,this.toneMappingPass=new Tr(this.camera.instance,this.toneMappingEffect),this.effectComposer.addPass(this.toneMappingPass),this.experience.options.audioMultiChannel===!1&&(this.updateGodRays=()=>{})}setGodRays(e){this.godRaysEffect=new ES(this.camera.instance,e),this.godRaysPass=new Tr(this.camera.instance,this.godRaysEffect),this.effectComposer.addPass(this.godRaysPass,1),this.godRaysEffect.godRaysMaterial.density=this.experience.options.godRaysDensity,this.godRaysEffect.godRaysMaterial.decay=this.experience.options.godRaysDecay,this.godRaysEffect.godRaysMaterial.weight=this.experience.options.godRaysWeigth,this.godRaysEffect.godRaysMaterial.exposure=this.experience.options.godRaysExposure,this.godRaysEffect.godRaysMaterial.clampMax=this.experience.options.godRaysClampMax,this.godRaysEffect.godRaysMaterial.samples=this.experience.options.godRaysSamples,this.updateGodRays=this.experience.options.audioMultiChannel?this.updateGodRaysMC:this.updateGodRaysSC,this.update=this.updateQuality}resize(){this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio),this.effectComposer.setSize(this.sizes.width,this.sizes.height)}update(){this.effectComposer.render()}updateQuality(){this.mirrorModeEffect.uniforms.get("uTime").value=this.experience.audioAnalizer.channelSong.song.currentTime,this.effectComposer.render(),this.updateGodRays()}updateGodRaysMC(){const e=this.world.songChannels.SunRays.averageFrequency[1]*.75;this.godRaysEffect.godRaysMaterial.weight=.3+e,this.godRaysEffect.godRaysMaterial.density=.96+e}updateGodRaysSC(){const e=this.world.songChannels.SunRays.averageFrequency[1]*.35;this.godRaysEffect.godRaysMaterial.weight=.3+e,this.godRaysEffect.godRaysMaterial.density=.96+e}}var LS=`varying vec2 vUv;

void main() {

    
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);\r
    vec4 viewPosition = viewMatrix * modelPosition;\r
    vec4 projectionPosition = projectionMatrix * viewPosition;

    
    gl_Position = projectionPosition;

    
    vUv = uv;\r
}`,DS=`uniform sampler2D   uAudioTexture;  
uniform sampler2D   uAudioTexture2; 
uniform float       uAudioStrength;\r
uniform float       uAudioZoom;\r
uniform float       uAudioStrengthSin;\r
uniform float       uAudioZoomSin;

uniform float       uFrequency; 
uniform float       uSpeed;\r
uniform float       uThickness;\r
uniform float       uMirrors;

uniform float       uFrequencySin; 
uniform float       uSpeedSin;\r
uniform float       uThicknessSin;\r
uniform vec3        uColorSin;

uniform float       uTime;

uniform float       uAudioValue;\r
uniform float       uAudioValue2;

varying vec2        vUv; 

vec3 hsl2rgb( in vec3 c ) {\r
    vec3 rgb = clamp( abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0, 0.0, 1.0 );

    return c.z + c.y * (rgb-0.5)*(1.0-abs(2.0*c.z-1.0));\r
}\r

vec4 drawAudio(vec2 pos) {\r
    
    
    
    float audioXSin = 2.0 * abs(pos.x - 0.5);\r
    
    float audioValueSin = (((texture2D(uAudioTexture2, vec2(audioXSin / uAudioZoomSin, 0.0)).g - 0.5) * 0.55) * uAudioStrengthSin) * uFrequencySin;

    
    vec2 nPosSin = vec2(pos.x, pos.y + (pos.x * uFrequencySin) + mod(uTime * uSpeedSin, 1.0) + audioValueSin);\r
    float pSin = mod(nPosSin.y, uFrequencySin);

    
    if (pSin < (uFrequencySin * uThicknessSin)) {        \r
        

            return vec4(uColorSin, (1.0 - pos.y) * uAudioValue * 0.75 );

    }\r

    
    
    
    float mirrorX = mod(pos.x * uMirrors, 1.0);\r
    
    float audioX = 2.0 * abs(mirrorX - 0.5);\r
    
    float audioValue = ((texture2D(uAudioTexture, vec2((audioX / uAudioZoom), 0.0)).r) * uAudioStrength) * uFrequency;

    
    vec2 nPos = vec2(pos.x, pos.y - (pos.x * uFrequency) + mod(uTime * uSpeed, 1.0) + audioValue);\r
    
    float p = mod(nPos.y, uFrequency);\r

 

    if (p < (uFrequency * uThickness)) {        

        return vec4(hsl2rgb(vec3(0.05 + (uTime * -0.05), 1.0 - p, (1.0 - pos.y) * 0.5 )), uAudioValue * ((1.0 - pos.y)));\r
    }\r
    \r
    discard;\r
}

vec4 drawAudio2(vec2 pos) {\r
    const float mirror    = 2.0;\r
    const float mirrorSin = 1.0;\r
    float       audioX    = 0.0;\r
    float       audioXSin = 0.0;\r
    
    
    float x = mod(pos.x * mirror, 1.0);\r
    audioX = (x < 0.5) ? 2.0 * x : 2.0 * (1.0 - x);\r
    
    
    x = mod(pos.x * mirrorSin, 1.0);\r
    audioXSin = (x < 0.5) ? 2.0 * x : 2.0 * (1.0 - x);

    
    float audioValue = ((texture2D(uAudioTexture, vec2((audioX / uAudioZoom), 0.0)).r) * uAudioStrength) * uFrequency;\r

    
    vec2 nPos = vec2(pos.x, pos.y - (pos.x * uFrequency) + mod(uTime * uSpeed, 1.0) + audioValue);

    
    float p = mod(nPos.y, uFrequency);\r

    
    float audioValueSin = (((texture2D(uAudioTexture2, vec2(audioXSin / uAudioZoomSin, 0.0)).g - 0.5) * 0.55) * uAudioStrengthSin) * uFrequencySin;

    
    vec2 nPosSin = vec2(pos.x, pos.y + (pos.x * uFrequencySin) + mod(uTime * uSpeedSin, 1.0) + audioValueSin);\r
    float pSin = mod(nPosSin.y, uFrequencySin);

    

    
    if (pSin < (uFrequencySin * uThicknessSin)) {        \r
        return vec4(uColorSin, ((uAudioValue + uAudioValue2) * 0.5) * ((1.0 - pos.y) * .5));\r
        
    }\r
    
    if (p < (uFrequency * uThickness)) {        \r
/*        vec3 col = smoothstep(\r
            hsl2rgb(vec3(uTime * 0.05, 1, (1.0 - pos.y) * 0.5 )),\r
            hsl2rgb(vec3(0.05 + (uTime * -0.05), 1, (1.0 - pos.y) * 0.5 )),\r
            vec3(p)\r
        );*/

        return vec4(hsl2rgb(vec3(uTime * -0.05, 1.0 - p, (1.0 - pos.y) * 0.5 )), uAudioValue * ((1.0 - pos.y) * 0.5));

    }\r
    if (p < (uFrequency * uThickness * 2.0)) {        

        return vec4(hsl2rgb(vec3(0.05 + (uTime * -0.05), 1.0 - p, (1.0 - pos.y) * 0.5 )), uAudioValue * ((1.0 - pos.y) * 0.5));\r
    }

    
/*    float time = mod(uTime, 1.0);\r
    float pos2 = 1.0 - clamp(time, 0.0, 0.5) * 2.0;\r
    const float thickness = 0.01;

    if (pos2 > vUv.y && pos2 < (vUv.y + thickness))  \r
    return vec4(.0, .0, 0.3, uAudioValue * vUv.y );**/\r

    discard;\r
}\r

void main() {\r
    vec4 color = drawAudio(vUv);

    gl_FragColor = color;

}`;class IS{constructor(e){this.experience=new gt,this.scene=this.experience.scene,this.time=this.experience.time,this.audioAnalizer=this.experience.audioAnalizer,this.world=e,this.setup()}setup(){this.geometry=new jl(.01,2,64,256,1,!0),this.material=new ot({uniforms:{uAudioTexture:{value:this.audioAnalizer.channelSong.bufferCanvasLinear.texture},uAudioTexture2:{value:this.audioAnalizer.channelVocal.bufferCanvasLinear.texture},uAudioStrength:{value:this.experience.options.spiralAudioStrength},uAudioZoom:{value:this.experience.options.spiralAudioZoom},uAudioStrengthSin:{value:this.experience.options.spiralAudioStrengthSin},uAudioZoomSin:{value:this.experience.options.spiralAudioZoomSin},uAudioValue:{value:0},uAudioValue2:{value:0},uTime:{value:0},uFrequency:{value:this.experience.options.spiralFrequency},uSpeed:{value:this.experience.options.spiralSpeed},uThickness:{value:this.experience.options.spiralThickness},uMirrors:{value:this.experience.options.spiralMirrors},uFrequencySin:{value:this.experience.options.spiralFrequencySin},uSpeedSin:{value:this.experience.options.spiralSpeedSin},uThicknessSin:{value:this.experience.options.spiralThicknessSin},uColorSin:{value:this.experience.options.spiralColorSin}},vertexShader:LS,fragmentShader:DS,transparent:!0,side:Dt}),this.mesh=new dt(this.geometry,this.material),this.mesh.rotation.x=Math.PI*-.5,this.mesh.name="Spirals",this.mesh.position.set(0,0,-27),this.world.group.add(this.mesh)}update(e){this.mesh.rotation.y+=e,this.material.uniforms.uAudioValue.value=this.world.songChannels.SpiralBars.averageFrequency[4]*4,this.material.uniforms.uAudioValue2.value=this.world.songChannels.SpiralOsciloscope.averageFrequency[0]+this.audioAnalizer.channelVocal.averageFrequency[1]/64+this.audioAnalizer.channelVocal.averageFrequency[2],this.material.uniforms.uTime.value+=e}}var US=`varying vec2 vUv;

void main() {

    
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);\r
    vec4 viewPosition = viewMatrix * modelPosition;\r
    vec4 projectionPosition = projectionMatrix * viewPosition;

    
    gl_Position = projectionPosition;

    
    vUv = uv;\r
}`,OS=`uniform sampler2D uAudioTexture;\r
uniform float     uAudioStrengthFreq;\r
uniform float     uAudioStrengthSin;\r
uniform float     uTime;\r
uniform float     uNoiseStrength;\r
uniform float     uNoiseSpeed;\r
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
}\r

vec3 getColor(float time) {\r
  float t = fract(time);  
  \r
  
  float red = cos(t * 6.2831);  
  float green = cos(t * 6.2831); 
  float blue = sin(t * 6.2831 * 2.0); 
  \r
  
  vec3 color = vec3(red, green, blue) * 0.5 + 0.75;\r
  \r
  return color;\r
}

vec4 circleFreq(vec4 currentColor, vec2 center) {

    const float radiusFreq = 0.325;

    vec2 pos = vec2(0.55, 0.5);\r
    float dist = length(vUv - pos);\r
    float rad = atan(vUv.y - pos.y, vUv.x - pos.x);

    float normAngle = rad < 0.0 ? (rad + PI) / PI : 1.0 - (1.0 + (rad - PI) / PI);

    float audioValue = (texture2D(uAudioTexture, vec2(normAngle, 0.0)).r - 0.5) * .25 * uAudioStrengthFreq;\r
    

    float strength = cnoise(vec3(rad * 2.0, dist * uNoiseStrength,  uTime * uNoiseSpeed)) * 0.1;\r

    if (dist - audioValue + strength + 0.005 < radiusFreq) {\r
        float angle = uTime * .5 * PI;  
        \r
        
        float cosAngle = cos(angle);\r
        float sinAngle = sin(angle);\r
        mat2 rotationMatrix = mat2(cosAngle, -sinAngle, sinAngle, cosAngle);\r
        vec2 rotatedUV = rotationMatrix * vUv;        \r
        return vec4(abs(sin(uTime * 0.1)), abs(rotatedUV.x), abs(rotatedUV.y), 0.5); 
    }\r
/*    else if (dist - audioValue + strength < uRadiusFreq) {\r
        return vec4(1.0, 1.0, 1.0, 1.0);\r
    } */\r
    return currentColor;\r
}

vec4 circleSin(vec4 currentColor, vec2 center) {\r
    
/*    float radiusSin = 0.125 + (sin(uTime) * 0.025);\r
    \r
    vec2 pos1 = vec2(0.4, 0.5);\r
    float dist = length(vUv - center);\r
    float rad = atan(vUv.y - center.y, vUv.x - center.x);

    float normAngle = 0.0;\r
    if (rad < 0.0) {\r
        normAngle = ((rad + PI) / PI);\r
    } else {\r
        normAngle = (1.0 + ((rad - PI) / PI));\r
    }*/\r
    float radiusSin = 0.165 + sin(uTime) * 0.025;

    vec2 pos1 = vec2(0.45, 0.5);\r
    float dist = length(vUv - center);\r
    float rad = atan(vUv.y - center.y, vUv.x - center.x);

    float normAngle = rad < 0.0 ? (rad + PI) / PI : (1.0 + (rad - PI) / PI);    

    float audioValue = (texture2D(uAudioTexture, vec2(normAngle, 0.0)).g - 0.5) * .5 * uAudioStrengthSin;\r
    
    float strength = 0.0; 

    if (dist - audioValue + strength + 0.01 < radiusSin) {

        \r
        

        return vec4(uColorSin, 0.5);

    }\r
/*    else if (dist - audioValue + strength < uRadiusSin) {

        return vec4(0.0, 0.0, 0.0, 1.0);\r
    } */\r
    return currentColor;\r
}

void main() {

    
    vec2 center = vec2(0.5, 0.5);\r
    
    vec4 color = vec4(0.0, 0.0, 0.0, 0.0);

    color = circleFreq(color, center);\r
    color = circleSin(color, center);

    if (color.a == 0.0) discard;

    color.a = clamp(uTime * 0.1, 0.0, 1.0);\r
    gl_FragColor = color;\r
}`;class NS{constructor(e){this.experience=new gt,this.scene=this.experience.scene,this.time=this.experience.time,this.audioAnalizer=this.experience.audioAnalizer,this.world=e,this.setupSun()}setupSun(){this.geometry=new ki(12,12),this.material=new ot({uniforms:{uAudioTexture:{value:this.audioAnalizer.channelVocal.bufferCanvasLinear.texture},uTime:{value:0},uAudioStrengthFreq:{value:this.experience.options.sunAudioStrengthFreq},uAudioStrengthSin:{value:this.experience.options.sunAudioStrengthSin},uNoiseStrength:{value:this.experience.options.sunNoiseStrength},uNoiseSpeed:{value:this.experience.options.sunNoiseSpeed},uColorSin:{value:this.experience.options.sunColorSin}},vertexShader:US,fragmentShader:OS,transparent:!0}),this.mesh=new dt(this.geometry,this.material),this.mesh.rotation.z=-Math.PI*.5,this.mesh.position.set(0,0,-135),this.mesh.name="Sun",this.scene.add(this.mesh)}update(e){this.material.uniforms.uTime.value+=e}}var FS=`varying vec2 vUv;

void main() {\r
    vec4 modelPosition      = modelMatrix       * vec4(position , 1.0);\r
    vec4 viewPosition       = viewMatrix        * modelPosition;\r
    vec4 projectionPosition = projectionMatrix  * viewPosition;

    gl_Position = projectionPosition;\r
    vUv = uv;\r
}`,BS=`uniform float     uAudioValue;      
uniform float     uSize;            
uniform vec3      uColor;           
varying vec2      vUv; 

void main() {\r
    

    float audioValue = 1.0;\r
    \r
    float curSize = uSize - ((1.0 - vUv.x) * uSize);\r
    
    if (abs(vUv.y - audioValue) < curSize) {\r
        gl_FragColor = vec4(uColor, uAudioValue * 1.0);\r
    }\r
/*    else if (abs(vUv.y - audioValue) < curSize+ 0.01) {\r
        gl_FragColor = vec4(1.0);\r
    }*/\r
    
    else {\r
        discard;\r
    }\r
}`;class zS{constructor(){this.experience=new gt,this.scene=this.experience.scene,this.sizes=this.experience.sizes,this.audioAnalizer=this.experience.audioAnalizer,this.createRandValues(),this.setup()}createRandValues(){this.color=new ve(Math.random(),Math.random(),Math.random()),this.speed=.3+Math.random()*1,this.size=.01+Math.random()*.2,this.rotationSpeed=Math.random()*.005,this.angle=Math.PI-Math.random(Math.PI*2),this.radius=.4+Math.random()*2.8,this.position=new L(Math.cos(this.angle*this.radius),Math.sin(this.angle*this.radius),-60)}appyRandValues(){this.material.uniforms.uColor.value=this.color,this.material.uniforms.uSize.value=this.size,this.mesh.position.copy(this.position)}setup(){this.geometry=new ki(3,.2),this.material=new ot({uniforms:{uAudioValue:{value:0},uSize:{value:this.size},uColor:{value:this.color}},vertexShader:FS,fragmentShader:BS,transparent:!0,side:Dt}),this.mesh=new dt(this.geometry,this.material),this.mesh.rotation.x=Math.PI*.5,this.mesh.rotation.z=Math.PI*.5,this.mesh.position.copy(this.position),this.scene.add(this.mesh)}update(){this.mesh.position.z+=this.speed,this.angle+=this.rotationSpeed,this.radius-=this.rotationSpeed*.5,this.mesh.position.x=Math.cos(this.angle*this.radius),this.mesh.position.y=Math.sin(this.angle*this.radius),this.material.uniforms.uAudioValue.value=.01+this.audioAnalizer.channelSong.averageFrequency[4]*4,this.mesh.position.z>5&&(this.createRandValues(),this.appyRandValues())}}class kS{constructor(){this.experience=new gt,this.numRays=this.experience.options.raysCount,this.setup()}setup(){this.Rays=[];for(let e=0;e<this.numRays;e++)this.Rays.push(new zS)}update(){for(let e=0;e<this.numRays;e++)this.Rays[e].update()}}var HS=`varying vec2 vUv;

void main() {\r
    vec4 modelPosition      = modelMatrix       * vec4(position , 1.0);\r
    vec4 viewPosition       = viewMatrix        * modelPosition;\r
    vec4 projectionPosition = projectionMatrix  * viewPosition;

    gl_Position = projectionPosition;\r
    vUv = uv;\r
}`,VS=`uniform sampler2D uAudioTexture;    
uniform sampler2D uAudioTexture2;    
uniform float     uAudioStrength;   
uniform float     uAudioZoom;       
uniform float     uAudioValue;      

uniform float     uTime;            
uniform float     uSpeed;           

varying vec2 vUv;

vec3 Bars(vec3 color, float speed, float amplitude) {\r
    vec2 pos = vec2(-0.5 + mod(vUv.x + uTime * 0.25 * speed, 1.0), -0.5 + vUv.y);    

    float audioValue1 = texture2D(uAudioTexture, vec2(abs(pos.x * 2.0) / uAudioZoom, 0.0)).r * uAudioStrength * amplitude * 0.5;\r
    float audioValue2 = texture2D(uAudioTexture2, vec2(abs(pos.x * 2.0) / uAudioZoom, 0.0)).r * uAudioStrength * amplitude * 0.5;\r
    float combinedAudioValue = (audioValue1 + audioValue2) * 0.5;

    if (abs(pos.y) < combinedAudioValue) {\r
        return color * uAudioValue * 0.125;\r
    }

    return vec3(0.0);\r
}

void main() {\r
    vec3 color = vec3(0.0);\r
    color += Bars(vec3(1.0, 0.20, 0.5), uSpeed * 1.6, 1.0);\r
    color += Bars(vec3(0.5, 1.0, 0.25), uSpeed * 1.3, 0.9);\r
    color += Bars(vec3(0.5, 0.25, 1.0), uSpeed * 1.0, 0.8);\r
    color -= Bars(vec3(0.7, 0.7, 0.0), uSpeed * 1.9, .50);\r
    if (color.r > 0.0 || color.g > 0.0 || color.b > 0.0) {

        gl_FragColor = vec4(color, .8 * (1.0 - vUv.x));        \r
    }\r
    else {\r
        discard;\r
    }\r
}`;class GS{constructor(e){this.experience=new gt,this.scene=this.experience.scene,this.audioAnalizer=this.experience.audioAnalizer,this.time=this.experience.time,this.world=e,this.setup()}setup(){this.geometry=new ki(2048*4,350),this.material=new ot({uniforms:{uAudioTexture:{value:this.audioAnalizer.channelOther.bufferCanvasLinear.texture},uAudioTexture2:{value:this.audioAnalizer.channelPiano.bufferCanvasLinear.texture},uAudioStrength:{value:this.experience.options.barsAudioStrength},uAudioZoom:{value:this.experience.options.barsAudioZoom},uAudioValue:{value:0},uSpeed:{value:this.experience.options.barsSpeed},uTime:{value:0}},vertexShader:HS,fragmentShader:VS,transparent:!0,side:Dt}),this.mesh=new dt(this.geometry,this.material),this.mesh2=new dt(this.geometry,this.material),this.mesh.rotation.y=Math.PI*.5,this.mesh.position.set(-500,0,-1024*4),this.mesh2.rotation.y=Math.PI*.5,this.mesh2.position.set(500,0,-1024*4),this.world.group.add(this.mesh),this.world.group.add(this.mesh2)}update(e){this.material.uniforms.uTime.value+=e,this.material.uniforms.uAudioValue.value=.01+(this.world.songChannels.LateralBars1.averageFrequency[0]+this.world.songChannels.LateralBars2.averageFrequency[1])*1.5,this.mesh.scale.y=1+(1+Math.cos(this.time.current/3e3))*this.material.uniforms.uAudioValue.value,this.mesh2.scale.y=this.mesh.scale.y}}var WS=`varying vec2 vUv;

void main() {\r
    vec4 modelPosition      = modelMatrix       * vec4(position , 1.0);\r
    vec4 viewPosition       = viewMatrix        * modelPosition;\r
    vec4 projectionPosition = projectionMatrix  * viewPosition;

    gl_Position = projectionPosition;\r
    vUv = uv;\r
}`,XS=`uniform sampler2D uAudioTexture;    
uniform float     uAudioStrength;   
uniform vec4      uAudioValue;      
uniform float     uTime;            
uniform float     uSpeed;           

varying vec2      vUv; \r

/*float Line(vec2 uv, float speed, float height, float audioValue, float pos) {\r
    uv.y += audioValue * 0.5 * smoothstep(.65, 0., abs(uv.x)) * sin((uTime * speed + uv.x * height) + pos) * .2;\r
    return smoothstep(.06 * smoothstep(.2, .9, abs(uv.x)), 0., abs(uv.y) - .02) * 0.5;
}*/\r

#define PI 3.1415

/*vec4 Line(vec3 color, float audioValue, float speed, float width) {\r
    const float freq = 15.0;\r
    const float amp = 1.0 / 15.0;\r
    vec2 uv = vUv - 0.5;\r
    float y = sin(uv.x * PI * freq * (uTime * 10.0) * speed) * amp;\r
    return vec4(color - abs(uv.y - (y + 0.01)), 1.0);\r
}*/

vec4 Line2(vec3 color, float audioValue, float speed, float width) {\r
    vec2 pos = vUv - 0.125;

    float curve = (0.25 * width) * sin((10.25 * pos.x) - (uSpeed * speed * uTime * 10.0));

    float lineAShape = smoothstep(1.0 - clamp(distance(curve + (pos.y) + (audioValue * 0.5), 0.5 ) * 1.0, 0.0, 1.0), 1.0, 0.99);\r
    vec4  lineACol = (1.0 - lineAShape) * vec4(mix(vec4(color, 1.0), vec4(0.0), lineAShape));\r
    return lineACol;\r
}

void main() {\r
    
/*    const float posMinH = 0.0;\r
    const float posMaxH = (1.0 / 25000.0) * 256.0;\r
    const float posMaxM = (1.0 / 25000.0) * 2000.0;\r
    float posH = (mod(vUv.x * 64.0, 1.0) / 25000.0) * 256.0;\r
    float posM = posMaxH + ((mod(vUv.x * 32.0, 1.0) / 25000.0) * 2000.0);\r
    float posL = posMaxM + ((mod(vUv.x * 4.0, 1.0) / 25000.0) * 10000.0);

    float audioValueH = ((texture2D(uAudioTexture, vec2(mod(posH * 512.0, posH) , 0.0)).g ) * uAudioStrength);    \r
    float audioValueM = ((texture2D(uAudioTexture, vec2(mod(posM * 4.0, posM), 0.0)).g ) * uAudioStrength);    \r
    float audioValueL = ((texture2D(uAudioTexture, vec2(posL, 0.0)).g ) * uAudioStrength);    \r
*/

    float audioValue0 = ((texture2D(uAudioTexture, vec2(mod(uTime + vUv.x * .230, 1.0), 0.0)).g ) * uAudioStrength);    \r
    float audioValue1 = ((texture2D(uAudioTexture, vec2(mod(uTime + vUv.x * .435, 1.0), 0.0)).g ) * uAudioStrength);    \r
    float audioValue2 = ((texture2D(uAudioTexture, vec2(mod(uTime + vUv.x * .640, 1.0), 0.0)).g ) * uAudioStrength);    \r
    float audioValue3 = ((texture2D(uAudioTexture, vec2(mod(uTime + vUv.x * .845, 1.0), 0.0)).g ) * uAudioStrength);    

    vec4 finalColor = vec4(0.0, 0.0, 0.0, 0.0);\r
    finalColor += Line2(vec3(0.5, 0.5, 1.0), audioValue0, .230, uAudioValue.r);\r
    finalColor += Line2(vec3(0.5, 1.0, 0.5), audioValue1, .435, uAudioValue.g);\r
    finalColor += Line2(vec3(1.0, 0.5, 0.5), audioValue2, .640, uAudioValue.b);

    vec4 tmpCol = Line2(vec3(1.0, 1.0, 1.0), audioValue3, .845, uAudioValue.a);\r
    if (tmpCol.a > 0.25) finalColor = tmpCol;

    
    if (finalColor.a == 0.0) discard;

    
    finalColor.a *= (0.001 + uAudioValue.g) * 0.75 * vUv.x;\r
    

    gl_FragColor = finalColor;

    

}`;class qS{constructor(e,t){this.experience=new gt,this.scene=this.experience.scene,this.audioAnalizer=this.experience.audioAnalizer,this.time=this.experience.time,this.world=e,this.timeline=e.timeline,this.setup()}setup(){this.geometry=new ki(2048*4,1280),this.material=new ot({uniforms:{uAudioTexture:{value:this.audioAnalizer.channelVocal.bufferCanvasLinear.texture},uAudioStrength:{value:this.experience.options.hmsOsciloscopeAudioStrength},uAudioValue:{value:new je(0,0,0,0)},uSpeed:{value:this.experience.options.hmsOsciloscopeSpeed},uTime:{value:0}},vertexShader:WS,fragmentShader:XS,transparent:!0,side:Dt}),this.mesh=new dt(this.geometry,this.material),this.mesh2=new dt(this.geometry,this.material),this.mesh.rotation.z=-Math.PI*.5,this.mesh.rotation.x=-Math.PI*.5,this.mesh.position.set(0,750,-1024*4),this.mesh2.rotation.z=-Math.PI*.5,this.mesh2.rotation.x=-Math.PI*.5,this.mesh2.position.set(0,-750,-1024*4),this.world.group.add(this.mesh),this.world.group.add(this.mesh2)}update(e){this.material.uniforms.uTime.value+=e,this.material.uniforms.uAudioValue.value=new je(this.world.songChannels.LateralOsciloscope.averageFrequencyPeaks[0]*1.5,this.world.songChannels.LateralOsciloscope.averageFrequencyPeaks[1]*1.5,this.world.songChannels.LateralOsciloscope.averageFrequencyPeaks[2]*1.5,this.world.songChannels.LateralOsciloscope.averageFrequencyPeaks[4]*1.5);const t=.5+this.audioAnalizer.channelDrum.averageFrequencyPeaks[1];this.mesh.scale.y=t,this.mesh2.scale.y=t}}class YS{constructor(e,t,n,s){this.experience=new gt,typeof this.experience.idDebugEffect>"u"?this.experience.idDebugEffect=0:this.experience.idDebugEffect++,this.name=e,this.params=s,this.start=t,this.end=n,this.createHTML()}createHTML(){this.element=document.createElement("div"),this.element.className="Experience_DebugEffect",this.element.id=`DebugEffect${this.experience.idDebugEffect}`;let e=`
                            <div>
                                ${this.name}
                            </div>
                            <div>
                                ${this.params}
                            </div>
                            <div>
                                ${this.start}
                            </div>
                            <div>
                                ${this.end}
                            </div>
                        `;this.element.innerHTML=e,this.experience.htmlElements.elementDebugEffects.firstChild===null?this.experience.htmlElements.elementDebugEffects.appendChild(this.element):this.experience.htmlElements.elementDebugEffects.insertBefore(this.element,this.experience.htmlElements.elementDebugEffects.firstChild),this.element=document.getElementById(`DebugEffect${this.experience.idDebugEffect}`),this.element.setAttribute("visible","true")}}class gs{constructor(){this.experience=new gt,this.name="BPMEffect",this.params="(0, 0)",this.start=0,this.duration=0,typeof this.experience.effectsId>"u"&&(this.experience.effectsId=0),this.id=`id${this.experience.effectsId++}`,this.experience.options.debug!==!0&&(this.onStart=()=>{},this.onComplete=()=>{},this.onUpdateProgress=()=>{})}onStart(e){const t=e.experience.song.bpmMS;let n=Math.round(e.start/t*1e3),s=n+Math.round(e.duration/t*1e3);e.debugEffect=new YS(e.name,n,s,e.params),e.element=e.debugEffect.element}onComplete(e){typeof e.element<"u"&&(e.element.setAttribute("visible","false"),setTimeout(()=>{e.element.remove()},500))}onUpdateProgress(e,t){let n=e/t*100;typeof this.element<"u"&&(this.element.style.backgroundPositionX=`${100-Math.floor(n)}%`)}}class $t extends gs{constructor({originIntensity:e=.7,originRadius:t=.98,destIntensity:n=.7,destRadius:s=.98,ease:r="none",yoyo:a=!1}){super(),this.ease=r,this.yoyo=a,this.name="Bloom",this.params=`(${n}, ${s})`,this.origin=[e,t],this.dest=[n,s]}setupAnimation(e,t,n){this.start=t,this.duration=n,this.bloomEffect=this.experience.renderer.bloomEffect,e.to(this.origin,{id:this.id,ease:this.ease,repeat:this.yoyo===!0?1:0,yoyo:this.yoyo,duration:this.duration,endArray:this.dest,onUpdate:this.onUpdate,onUpdateParams:[this],onStart:this.onStartBloom,onStartParams:[this],onComplete:this.onComplete,onCompleteParams:[this]},this.start),this.tween=e.getById(this.id)}onStartBloom(e){e.onStart(e)}onUpdate(e){e.bloomEffect.intensity=this.targets()[0][0],e.bloomEffect.mipmapBlurPass.radius=this.targets()[0][1],e.onUpdateProgress(this._tTime,this._tDur)}}class it extends gs{constructor({scaleX:e=1,scaleY:t=1,scaleZ:n=1,ease:s="bounce",yoyo:r=!0}){super(),this.dest=[e,t,n],this.name="SpiralsScale",this.params=`(${e}, ${t}, ${n})`,this.ease=s,this.yoyo=r}setupAnimation(e,t,n){this.start=t,this.duration=n,this.spiralsMesh=this.experience.world.spirals.mesh,this.origin=[this.spiralsMesh.scale.x,this.spiralsMesh.scale.y,this.spiralsMesh.scale.x],e.to(this.origin,{id:this.id,ease:this.ease,repeat:this.yoyo===!0?1:0,yoyo:this.yoyo,duration:this.duration,endArray:this.dest,onUpdate:this.onUpdate,onUpdateParams:[this],onStart:this.onStart,onStartParams:[this],onComplete:this.onComplete,onCompleteParams:[this]},this.start)}onUpdate(e){e.spiralsMesh.scale.x=this.targets()[0][0],e.spiralsMesh.scale.y=this.targets()[0][1],e.spiralsMesh.scale.z=this.targets()[0][2],e.onUpdateProgress(this._tTime,this._tDur)}}class Bs extends gs{constructor({originAudioStrength:e=bi.spiralAudioStrength,originThickness:t=bi.spiralThickness,originMirrors:n=bi.spiralMirrors,destAudioStrength:s=bi.spiralAudioStrength,destThickness:r=bi.spiralThickness,destMirrors:a=bi.spiralMirrors,ease:o="none",yoyo:l=!0}){super(),this.dest=[s,r,a],this.origin=[e,t,n],this.name="SpiralBars",this.params=`(${s}, ${r}, ${a})`,this.ease=o,this.yoyo=l}setupAnimation(e,t,n){this.start=t,this.duration=n,this.spiralUniforms=this.experience.world.spirals.material.uniforms,e.to(this.origin,{id:this.id,ease:this.ease,repeat:this.yoyo===!0?1:0,yoyo:this.yoyo,duration:this.duration,endArray:this.dest,onUpdate:this.onUpdate,onUpdateParams:[this],onStart:this.onStart,onStartParams:[this],onComplete:this.onComplete,onCompleteParams:[this]},this.start)}onUpdate(e){e.spiralUniforms.uAudioStrength.value=this.targets()[0][0],e.spiralUniforms.uThickness.value=this.targets()[0][1],e.spiralUniforms.uMirrors.value=Math.floor(this.targets()[0][2]),e.onUpdateProgress(this._tTime,this._tDur)}}class $i extends gs{constructor({audioStrength:e=.4,thickness:t=.05,color:n=new ve(1,1,1),ease:s="none",yoyo:r=!0}){super(),this.dest=[e,t,n.r,n.g,n.b],this.name="SpiralOsciloscope",this.params=`(${e}, ${t})`,this.ease=s,this.yoyo=r}setupAnimation(e,t,n){this.start=t,this.duration=n,this.spiralUniforms=this.experience.world.spirals.material.uniforms,this.sunUniforms=this.experience.world.sun.material.uniforms,this.origin=[this.spiralUniforms.uAudioStrengthSin.value,this.spiralUniforms.uThicknessSin.value,this.spiralUniforms.uColorSin.value.r,this.spiralUniforms.uColorSin.value.g,this.spiralUniforms.uColorSin.value.b],e.to(this.origin,{id:this.id,ease:this.ease,repeat:this.yoyo===!0?1:0,yoyo:this.yoyo,duration:this.duration,endArray:this.dest,onUpdate:this.onUpdate,onUpdateParams:[this],onStart:this.onStart,onStartParams:[this],onComplete:this.onComplete,onCompleteParams:[this]},this.start)}onUpdate(e){e.spiralUniforms.uAudioStrengthSin.value=this.targets()[0][0],e.spiralUniforms.uThicknessSin.value=this.targets()[0][1],e.spiralUniforms.uColorSin.value=new ve(this.targets()[0][2],this.targets()[0][3],this.targets()[0][4]),e.sunUniforms.uColorSin.value=e.spiralUniforms.uColorSin.value,e.onUpdateProgress(this._tTime,this._tDur)}}class si extends gs{constructor({position:e=500,ease:t="none",yoyo:n=!0}){super(),this.dest=[e],this.name="LateralBars",this.params=`(${e})`,this.ease=t,this.yoyo=n}setupAnimation(e,t,n){this.start=t,this.duration=n,this.lateralBars=this.experience.world.hmlBars,this.origin=[this.lateralBars.mesh2.position.x],e.to(this.origin,{id:this.id,ease:this.ease,repeat:this.yoyo===!0?1:0,yoyo:this.yoyo,duration:this.duration,endArray:this.dest,onUpdate:this.onUpdate,onUpdateParams:[this],onStart:this.onStart,onStartParams:[this],onComplete:this.onComplete,onCompleteParams:[this]},this.start)}onUpdate(e){const t=this.targets()[0][0];e.lateralBars.mesh.position.x=-t,e.lateralBars.mesh2.position.x=t,e.onUpdateProgress(this._tTime,this._tDur)}}function ai(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Xd(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var cn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ar={duration:.5,overwrite:!1,delay:0},nc,Wt,ut,xn=1e8,Qe=1/xn,yl=Math.PI*2,jS=yl/4,$S=0,qd=Math.sqrt,KS=Math.cos,ZS=Math.sin,Ut=function(e){return typeof e=="string"},ft=function(e){return typeof e=="function"},fi=function(e){return typeof e=="number"},ic=function(e){return typeof e>"u"},qn=function(e){return typeof e=="object"},Jt=function(e){return e!==!1},sc=function(){return typeof window<"u"},Ca=function(e){return ft(e)||Ut(e)},Yd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Xt=Array.isArray,Sl=/(?:-?\.?\d|\.)+/gi,jd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Vs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,$o=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,$d=/[+-]=-?[.\d]+/,Kd=/[^,'"\[\]\s]+/gi,JS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,st,mn,Ml,rc,un={},Va={},Zd,Jd=function(e){return(Va=ms(e,un))&&tn},ac=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ga=function(e,t){return!t&&console.warn(e)},Qd=function(e,t){return e&&(un[e]=t)&&Va&&(Va[e]=t)||un},zr=function(){return 0},QS={suppressEvents:!0,isStart:!0,kill:!1},Ia={suppressEvents:!0,kill:!1},eM={suppressEvents:!0},oc={},Ui=[],El={},ef,an={},Ko={},Mh=30,Ua=[],lc="",cc=function(e){var t=e[0],n,s;if(qn(t)||ft(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(s=Ua.length;s--&&!Ua[s].targetTest(t););n=Ua[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new Af(e[s],n)))||e.splice(s,1);return e},ls=function(e){return e._gsap||cc(yn(e))[0]._gsap},tf=function(e,t,n){return(n=e[t])&&ft(n)?e[t]():ic(n)&&e.getAttribute&&e.getAttribute(t)||n},Qt=function(e,t){return(e=e.split(",")).forEach(t)||e},mt=function(e){return Math.round(e*1e5)/1e5||0},Bt=function(e){return Math.round(e*1e7)/1e7||0},qs=function(e,t){var n=t.charAt(0),s=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+s:n==="-"?e-s:n==="*"?e*s:e/s},tM=function(e,t){for(var n=t.length,s=0;e.indexOf(t[s])<0&&++s<n;);return s<n},Wa=function(){var e=Ui.length,t=Ui.slice(0),n,s;for(El={},Ui.length=0,n=0;n<e;n++)s=t[n],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},nf=function(e,t,n,s){Ui.length&&!Wt&&Wa(),e.render(t,n,s||Wt&&t<0&&(e._initted||e._startAt)),Ui.length&&!Wt&&Wa()},sf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Kd).length<2?t:Ut(e)?e.trim():e},rf=function(e){return e},Tn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},nM=function(e){return function(t,n){for(var s in n)s in t||s==="duration"&&e||s==="ease"||(t[s]=n[s])}},ms=function(e,t){for(var n in t)e[n]=t[n];return e},Eh=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=qn(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Xa=function(e,t){var n={},s;for(s in e)s in t||(n[s]=e[s]);return n},Ur=function(e){var t=e.parent||st,n=e.keyframes?nM(Xt(e.keyframes)):Tn;if(Jt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},iM=function(e,t){for(var n=e.length,s=n===t.length;s&&n--&&e[n]===t[n];);return n<0},af=function(e,t,n,s,r){n===void 0&&(n="_first"),s===void 0&&(s="_last");var a=e[s],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[s]=t,t._prev=a,t.parent=t._dp=e,t},io=function(e,t,n,s){n===void 0&&(n="_first"),s===void 0&&(s="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[s]===t&&(e[s]=r),t._next=t._prev=t.parent=null},Bi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},cs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},sM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Tl=function(e,t,n,s){return e._startAt&&(Wt?e._startAt.revert(Ia):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,s))},rM=function i(e){return!e||e._ts&&i(e.parent)},Th=function(e){return e._repeat?or(e._tTime,e=e.duration()+e._rDelay)*e:0},or=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},qa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},so=function(e){return e._end=Bt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Qe)||0))},ro=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Bt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),so(e),n._dirty||cs(n,e)),e},of=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=qa(e.rawTime(),t),(!t._dur||Qr(0,t.totalDuration(),n)-t._tTime>Qe)&&t.render(n,!0)),cs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Qe}},zn=function(e,t,n,s){return t.parent&&Bi(t),t._start=Bt((fi(n)?n:n||e!==st?pn(e,n,t):e._time)+t._delay),t._end=Bt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),af(e,t,"_first","_last",e._sort?"_start":0),Al(t)||(e._recent=t),s||of(e,t),e._ts<0&&ro(e,e._tTime),e},lf=function(e,t){return(un.ScrollTrigger||ac("scrollTrigger",t))&&un.ScrollTrigger.create(t,e)},cf=function(e,t,n,s,r){if(hc(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Wt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ef!==on.frame)return Ui.push(e),e._lazy=[r,s],1},aM=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Al=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},oM=function(e,t,n,s){var r=e.ratio,a=t<0||!t&&(!e._start&&aM(e)&&!(!e._initted&&Al(e))||(e._ts<0||e._dp._ts<0)&&!Al(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=Qr(0,e._tDur,t),u=or(l,o),e._yoyo&&u&1&&(a=1-a),u!==or(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Wt||s||e._zTime===Qe||!t&&e._zTime){if(!e._initted&&cf(e,t,s,n,l))return;for(h=e._zTime,e._zTime=t||(n?Qe:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Tl(e,t,n,!0),e._onUpdate&&!n&&Sn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Sn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Bi(e,1),!n&&!Wt&&(Sn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},lM=function(e,t,n){var s;if(n>t)for(s=e._first;s&&s._start<=n;){if(s.data==="isPause"&&s._start>t)return s;s=s._next}else for(s=e._last;s&&s._start>=n;){if(s.data==="isPause"&&s._start<t)return s;s=s._prev}},lr=function(e,t,n,s){var r=e._repeat,a=Bt(t)||0,o=e._tTime/e._tDur;return o&&!s&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:Bt(a*(r+1)+e._rDelay*r):a,o>0&&!s&&ro(e,e._tTime=e._tDur*o),e.parent&&so(e),n||cs(e.parent,e),e},Ah=function(e){return e instanceof Zt?cs(e):lr(e,e._dur)},cM={_start:0,endTime:zr,totalDuration:zr},pn=function i(e,t,n){var s=e.labels,r=e._recent||cM,a=e.duration()>=xn?r.endTime(!1):e._dur,o,l,c;return Ut(t)&&(isNaN(t)||t in s)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in s||(s[t]=a),s[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Xt(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Or=function(e,t,n){var s=fi(t[1]),r=(s?2:1)+(e<2?0:1),a=t[r],o,l;if(s&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Jt(l.vars.inherit)&&l.parent;a.immediateRender=Jt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new yt(t[0],a,t[r+1])},Vi=function(e,t){return e||e===0?t(e):t},Qr=function(e,t,n){return n<e?e:n>t?t:n},Vt=function(e,t){return!Ut(e)||!(t=JS.exec(e))?"":t[1]},uM=function(e,t,n){return Vi(n,function(s){return Qr(e,t,s)})},bl=[].slice,uf=function(e,t){return e&&qn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&qn(e[0]))&&!e.nodeType&&e!==mn},hM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(s){var r;return Ut(s)&&!t||uf(s,1)?(r=n).push.apply(r,yn(s)):n.push(s)})||n},yn=function(e,t,n){return ut&&!t&&ut.selector?ut.selector(e):Ut(e)&&!n&&(Ml||!cr())?bl.call((t||rc).querySelectorAll(e),0):Xt(e)?hM(e,n):uf(e)?bl.call(e,0):e?[e]:[]},wl=function(e){return e=yn(e)[0]||Ga("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return yn(t,n.querySelectorAll?n:n===e?Ga("Invalid scope")||rc.createElement("div"):e)}},hf=function(e){return e.sort(function(){return .5-Math.random()})},df=function(e){if(ft(e))return e;var t=qn(e)?e:{each:e},n=us(t.ease),s=t.from||0,r=parseFloat(t.base)||0,a={},o=s>0&&s<1,l=isNaN(s)||o,c=t.axis,u=s,h=s;return Ut(s)?u=h={center:.5,edges:.5,end:1}[s]||0:!o&&l&&(u=s[0],h=s[1]),function(d,p,_){var g=(_||t).length,m=a[g],f,y,v,S,M,w,T,C,x;if(!m){if(x=t.grid==="auto"?0:(t.grid||[1,xn])[1],!x){for(T=-xn;T<(T=_[x++].getBoundingClientRect().left)&&x<g;);x--}for(m=a[g]=[],f=l?Math.min(x,g)*u-.5:s%x,y=x===xn?0:l?g*h/x-.5:s/x|0,T=0,C=xn,w=0;w<g;w++)v=w%x-f,S=y-(w/x|0),m[w]=M=c?Math.abs(c==="y"?S:v):qd(v*v+S*S),M>T&&(T=M),M<C&&(C=M);s==="random"&&hf(m),m.max=T-C,m.min=C,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(x>g?g-1:c?c==="y"?g/x:x:Math.max(x,g/x))||0)*(s==="edges"?-1:1),m.b=g<0?r-g:r,m.u=Vt(t.amount||t.each)||0,n=n&&g<0?Mf(n):n}return g=(m[d]-m.min)/m.max||0,Bt(m.b+(n?n(g):g)*m.v)+m.u}},Rl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var s=Bt(Math.round(parseFloat(n)/e)*e*t);return(s-s%1)/t+(fi(n)?0:Vt(n))}},ff=function(e,t){var n=Xt(e),s,r;return!n&&qn(e)&&(s=n=e.radius||xn,e.values?(e=yn(e.values),(r=!fi(e[0]))&&(s*=s)):e=Rl(e.increment)),Vi(t,n?ft(e)?function(a){return r=e(a),Math.abs(r-a)<=s?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=xn,u=0,h=e.length,d,p;h--;)r?(d=e[h].x-o,p=e[h].y-l,d=d*d+p*p):d=Math.abs(e[h]-o),d<c&&(c=d,u=h);return u=!s||c<=s?e[u]:a,r||u===a||fi(a)?u:u+Vt(a)}:Rl(e))},pf=function(e,t,n,s){return Vi(Xt(e)?!t:n===!0?!!(n=0):!s,function(){return Xt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(s=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*s)/s})},dM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(s){return t.reduce(function(r,a){return a(r)},s)}},fM=function(e,t){return function(n){return e(parseFloat(n))+(t||Vt(n))}},pM=function(e,t,n){return gf(e,t,0,1,n)},mf=function(e,t,n){return Vi(n,function(s){return e[~~t(s)]})},mM=function i(e,t,n){var s=t-e;return Xt(e)?mf(e,i(0,e.length),t):Vi(n,function(r){return(s+(r-e)%s)%s+e})},gM=function i(e,t,n){var s=t-e,r=s*2;return Xt(e)?mf(e,i(0,e.length-1),t):Vi(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>s?r-a:a)})},kr=function(e){for(var t=0,n="",s,r,a,o;~(s=e.indexOf("random(",t));)a=e.indexOf(")",s),o=e.charAt(s+7)==="[",r=e.substr(s+7,a-s-7).match(o?Kd:Sl),n+=e.substr(t,s-t)+pf(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},gf=function(e,t,n,s,r){var a=t-e,o=s-n;return Vi(r,function(l){return n+((l-e)/a*o||0)})},_M=function i(e,t,n,s){var r=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!r){var a=Ut(e),o={},l,c,u,h,d;if(n===!0&&(s=1)&&(n=null),a)e={p:e},t={p:t};else if(Xt(e)&&!Xt(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(i(e[c-1],e[c]));h--,r=function(_){_*=h;var g=Math.min(d,~~_);return u[g](_-g)},n=t}else s||(e=ms(Xt(e)?[]:{},e));if(!u){for(l in t)uc.call(o,e,l,"get",t[l]);r=function(_){return pc(_,o)||(a?e.p:e)}}}return Vi(n,r)},bh=function(e,t,n){var s=e.labels,r=xn,a,o,l;for(a in s)o=s[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},Sn=function(e,t,n){var s=e.vars,r=s[t],a=ut,o=e._ctx,l,c,u;if(r)return l=s[t+"Params"],c=s.callbackScope||e,n&&Ui.length&&Wa(),o&&(ut=o),u=l?r.apply(c,l):r.call(c),ut=a,u},Rr=function(e){return Bi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Wt),e.progress()<1&&Sn(e,"onInterrupt"),e},Gs,_f=[],vf=function(e){if(sc()&&e){e=!e.name&&e.default||e;var t=e.name,n=ft(e),s=t&&!n&&e.init?function(){this._props=[]}:e,r={init:zr,render:pc,add:uc,kill:IM,modifier:DM,rawVars:0},a={targetTest:0,get:0,getSetter:fc,aliases:{},register:0};if(cr(),e!==s){if(an[t])return;Tn(s,Tn(Xa(e,r),a)),ms(s.prototype,ms(r,Xa(e,a))),an[s.prop=t]=s,e.targetTest&&(Ua.push(s),oc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Qd(t,s),e.register&&e.register(tn,s,en)}else e&&_f.push(e)},Je=255,Cr={aqua:[0,Je,Je],lime:[0,Je,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Je],navy:[0,0,128],white:[Je,Je,Je],olive:[128,128,0],yellow:[Je,Je,0],orange:[Je,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Je,0,0],pink:[Je,192,203],cyan:[0,Je,Je],transparent:[Je,Je,Je,0]},Zo=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Je+.5|0},xf=function(e,t,n){var s=e?fi(e)?[e>>16,e>>8&Je,e&Je]:0:Cr.black,r,a,o,l,c,u,h,d,p,_;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Cr[e])s=Cr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&Je,s&Je,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&Je,e&Je]}else if(e.substr(0,3)==="hsl"){if(s=_=e.match(Sl),!t)l=+s[0]%360/360,c=+s[1]/100,u=+s[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,s.length>3&&(s[3]*=1),s[0]=Zo(l+1/3,r,a),s[1]=Zo(l,r,a),s[2]=Zo(l-1/3,r,a);else if(~e.indexOf("="))return s=e.match(jd),n&&s.length<4&&(s[3]=1),s}else s=e.match(Sl)||Cr.transparent;s=s.map(Number)}return t&&!_&&(r=s[0]/Je,a=s[1]/Je,o=s[2]/Je,h=Math.max(r,a,o),d=Math.min(r,a,o),u=(h+d)/2,h===d?l=c=0:(p=h-d,c=u>.5?p/(2-h-d):p/(h+d),l=h===r?(a-o)/p+(a<o?6:0):h===a?(o-r)/p+2:(r-a)/p+4,l*=60),s[0]=~~(l+.5),s[1]=~~(c*100+.5),s[2]=~~(u*100+.5)),n&&s.length<4&&(s[3]=1),s},yf=function(e){var t=[],n=[],s=-1;return e.split(Oi).forEach(function(r){var a=r.match(Vs)||[];t.push.apply(t,a),n.push(s+=a.length+1)}),t.c=n,t},wh=function(e,t,n){var s="",r=(e+s).match(Oi),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!r)return e;if(r=r.map(function(d){return(d=xf(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=yf(e),l=n.c,l.join(s)!==u.c.join(s)))for(c=e.replace(Oi,"1").split(Vs),h=c.length-1;o<h;o++)s+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Oi),h=c.length-1;o<h;o++)s+=c[o]+r[o];return s+c[h]},Oi=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Cr)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),vM=/hsl[a]?\(/,Sf=function(e){var t=e.join(" "),n;if(Oi.lastIndex=0,Oi.test(t))return n=vM.test(t),e[1]=wh(e[1],n),e[0]=wh(e[0],n,yf(e[1])),!0},Hr,on=function(){var i=Date.now,e=500,t=33,n=i(),s=n,r=1e3/240,a=r,o=[],l,c,u,h,d,p,_=function g(m){var f=i()-s,y=m===!0,v,S,M,w;if(f>e&&(n+=f-t),s+=f,M=s-n,v=M-a,(v>0||y)&&(w=++h.frame,d=M-h.time*1e3,h.time=M=M/1e3,a+=v+(v>=r?4:r-v),S=1),y||(l=c(g)),S)for(p=0;p<o.length;p++)o[p](M,d,w,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Zd&&(!Ml&&sc()&&(mn=Ml=window,rc=mn.document||{},un.gsap=tn,(mn.gsapVersions||(mn.gsapVersions=[])).push(tn.version),Jd(Va||mn.GreenSockGlobals||!mn.gsap&&mn||{}),u=mn.requestAnimationFrame,_f.forEach(vf)),l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},Hr=1,_(2))},sleep:function(){(u?mn.cancelAnimationFrame:clearTimeout)(l),Hr=0,c=zr},lagSmoothing:function(m,f){e=m||1/0,t=Math.min(f||33,e)},fps:function(m){r=1e3/(m||240),a=h.time*1e3+r},add:function(m,f,y){var v=f?function(S,M,w,T){m(S,M,w,T),h.remove(v)}:m;return h.remove(m),o[y?"unshift":"push"](v),cr(),v},remove:function(m,f){~(f=o.indexOf(m))&&o.splice(f,1)&&p>=f&&p--},_listeners:o},h}(),cr=function(){return!Hr&&on.wake()},We={},xM=/^[\d.\-M][\d.\-,\s]/,yM=/["']/g,SM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),s=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[s]=isNaN(c)?c.replace(yM,"").trim():+c,s=l.substr(o+1).trim();return t},MM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),s=e.indexOf("(",t);return e.substring(t,~s&&s<n?e.indexOf(")",n+1):n)},EM=function(e){var t=(e+"").split("("),n=We[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[SM(t[1])]:MM(e).split(",").map(sf)):We._CE&&xM.test(e)?We._CE("",e):n},Mf=function(e){return function(t){return 1-e(1-t)}},Ef=function i(e,t){for(var n=e._first,s;n;)n instanceof Zt?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(s=n._ease,n._ease=n._yEase,n._yEase=s,n._yoyo=t)),n=n._next},us=function(e,t){return e&&(ft(e)?e:We[e]||EM(e))||t},_s=function(e,t,n,s){n===void 0&&(n=function(l){return 1-t(1-l)}),s===void 0&&(s=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:s},a;return Qt(e,function(o){We[o]=un[o]=r,We[a=o.toLowerCase()]=n;for(var l in r)We[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=We[o+"."+l]=r[l]}),r},Tf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Jo=function i(e,t,n){var s=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/yl*(Math.asin(1/s)||0),o=function(u){return u===1?1:s*Math.pow(2,-10*u)*ZS((u-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Tf(o);return r=yl/r,l.config=function(c,u){return i(e,c,u)},l},Qo=function i(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},s=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Tf(n);return s.config=function(r){return i(e,r)},s};Qt("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;_s(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});We.Linear.easeNone=We.none=We.Linear.easeIn;_s("Elastic",Jo("in"),Jo("out"),Jo());(function(i,e){var t=1/e,n=2*t,s=2.5*t,r=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<s?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};_s("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);_s("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});_s("Circ",function(i){return-(qd(1-i*i)-1)});_s("Sine",function(i){return i===1?1:-KS(i*jS)+1});_s("Back",Qo("in"),Qo("out"),Qo());We.SteppedEase=We.steps=un.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,s=e+(t?0:1),r=t?1:0,a=1-Qe;return function(o){return((s*Qr(0,a,o)|0)+r)*n}}};ar.ease=We["quad.out"];Qt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return lc+=i+","+i+"Params,"});var Af=function(e,t){this.id=$S++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:tf,this.set=t?t.getSetter:fc},Vr=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,lr(this,+t.duration,1,1),this.data=t.data,ut&&(this._ctx=ut,ut.data.push(this)),Hr||on.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,lr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,s){if(cr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(ro(this,n),!r._dp||r.parent||of(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&zn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Qe||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),nf(this,n,s)),this},e.time=function(n,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Th(this))%(this._dur+this._rDelay)||(n?this._dur:0),s):this._time},e.totalProgress=function(n,s){return arguments.length?this.totalTime(this.totalDuration()*n,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Th(this),s):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,s){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,s):this._repeat?or(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Qe?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?qa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Qe?0:this._rts,this.totalTime(Qr(-Math.abs(this._delay),this._tDur,s),!0),so(this),sM(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(cr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Qe&&(this._tTime-=Qe)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&zn(s,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Jt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var s=this.parent||this._dp;return s?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?qa(s.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=eM);var s=Wt;return Wt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Wt=s,this},e.globalTime=function(n){for(var s=this,r=arguments.length?n:s.rawTime();s;)r=s._start+r/(s._ts||1),s=s._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ah(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var s=this._time;return this._rDelay=n,Ah(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,s){return this.totalTime(pn(this,n),Jt(s))},e.restart=function(n,s){return this.play().totalTime(n?-this._delay:0,Jt(s))},e.play=function(n,s){return n!=null&&this.seek(n,s),this.reversed(!1).paused(!1)},e.reverse=function(n,s){return n!=null&&this.seek(n||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(n,s){return n!=null&&this.seek(n,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Qe:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Qe,this},e.isActive=function(){var n=this.parent||this._dp,s=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=s&&r<this.endTime(!0)-Qe)},e.eventCallback=function(n,s,r){var a=this.vars;return arguments.length>1?(s?(a[n]=s,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=s)):delete a[n],this):a[n]},e.then=function(n){var s=this;return new Promise(function(r){var a=ft(n)?n:rf,o=function(){var c=s.then;s.then=null,ft(a)&&(a=a(s))&&(a.then||a===s)&&(s.then=c),r(a),s.then=c};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?o():s._prom=o})},e.kill=function(){Rr(this)},i}();Tn(Vr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Qe,_prom:0,_ps:!1,_rts:1});var Zt=function(i){Xd(e,i);function e(n,s){var r;return n===void 0&&(n={}),r=i.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Jt(n.sortChildren),st&&zn(n.parent||st,ai(r),s),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&lf(ai(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(s,r,a){return Or(0,arguments,this),this},t.from=function(s,r,a){return Or(1,arguments,this),this},t.fromTo=function(s,r,a,o){return Or(2,arguments,this),this},t.set=function(s,r,a){return r.duration=0,r.parent=this,Ur(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new yt(s,r,pn(this,a),1),this},t.call=function(s,r,a){return zn(this,yt.delayedCall(0,s,r),a)},t.staggerTo=function(s,r,a,o,l,c,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new yt(s,a,pn(this,l)),this},t.staggerFrom=function(s,r,a,o,l,c,u){return a.runBackwards=1,Ur(a).immediateRender=Jt(a.immediateRender),this.staggerTo(s,r,a,o,l,c,u)},t.staggerFromTo=function(s,r,a,o,l,c,u,h){return o.startAt=a,Ur(o).immediateRender=Jt(o.immediateRender),this.staggerTo(s,r,o,l,c,u,h)},t.render=function(s,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=s<=0?0:Bt(s),h=this._zTime<0!=s<0&&(this._initted||!c),d,p,_,g,m,f,y,v,S,M,w,T;if(this!==st&&u>l&&s>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,s+=this._time-o),d=u,S=this._start,v=this._ts,f=!v,h&&(c||(o=this._zTime),(s||!r)&&(this._zTime=s)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(m*100+s,r,a);if(d=Bt(u%m),u===l?(g=this._repeat,d=c):(g=~~(u/m),g&&g===u/m&&(d=c,g--),d>c&&(d=c)),M=or(this._tTime,m),!o&&this._tTime&&M!==g&&this._tTime-M*m-this._dur<=0&&(M=g),w&&g&1&&(d=c-d,T=1),g!==M&&!this._lock){var C=w&&M&1,x=C===(w&&g&1);if(g<M&&(C=!C),o=C?0:u%c?c:u,this._lock=1,this.render(o||(T?0:Bt(g*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Sn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),o&&o!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;Ef(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=lM(this,Bt(o),Bt(d)),y&&(u-=d-(d=y._start))),this._tTime=u,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,o=0),!o&&d&&!r&&!g&&(Sn(this,"onStart"),this._tTime!==u))return this;if(d>=o&&s>=0)for(p=this._first;p;){if(_=p._next,(p._act||d>=p._start)&&p._ts&&y!==p){if(p.parent!==this)return this.render(s,r,a);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,r,a),d!==this._time||!this._ts&&!f){y=0,_&&(u+=this._zTime=-Qe);break}}p=_}else{p=this._last;for(var A=s<0?s:d;p;){if(_=p._prev,(p._act||A<=p._end)&&p._ts&&y!==p){if(p.parent!==this)return this.render(s,r,a);if(p.render(p._ts>0?(A-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(A-p._start)*p._ts,r,a||Wt&&(p._initted||p._startAt)),d!==this._time||!this._ts&&!f){y=0,_&&(u+=this._zTime=A?-Qe:Qe);break}}p=_}}if(y&&!r&&(this.pause(),y.render(d>=o?0:-Qe)._zTime=d>=o?1:-1,this._ts))return this._start=S,so(this),this.render(s,r,a);this._onUpdate&&!r&&Sn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(S===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((s||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Bi(this,1),!r&&!(s<0&&!o)&&(u||o||!l)&&(Sn(this,u===l&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(s,r){var a=this;if(fi(r)||(r=pn(this,r,s)),!(s instanceof Vr)){if(Xt(s))return s.forEach(function(o){return a.add(o,r)}),this;if(Ut(s))return this.addLabel(s,r);if(ft(s))s=yt.delayedCall(0,s);else return this}return this!==s?zn(this,s,r):this},t.getChildren=function(s,r,a,o){s===void 0&&(s=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-xn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof yt?r&&l.push(c):(a&&l.push(c),s&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(s){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===s)return r[a]},t.remove=function(s){return Ut(s)?this.removeLabel(s):ft(s)?this.killTweensOf(s):(io(this,s),s===this._recent&&(this._recent=this._last),cs(this))},t.totalTime=function(s,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Bt(on.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),i.prototype.totalTime.call(this,s,r),this._forcing=0,this):this._tTime},t.addLabel=function(s,r){return this.labels[s]=pn(this,r),this},t.removeLabel=function(s){return delete this.labels[s],this},t.addPause=function(s,r,a){var o=yt.delayedCall(0,r||zr,a);return o.data="isPause",this._hasPause=1,zn(this,o,pn(this,s))},t.removePause=function(s){var r=this._first;for(s=pn(this,s);r;)r._start===s&&r.data==="isPause"&&Bi(r),r=r._next},t.killTweensOf=function(s,r,a){for(var o=this.getTweensOf(s,a),l=o.length;l--;)Ci!==o[l]&&o[l].kill(s,r);return this},t.getTweensOf=function(s,r){for(var a=[],o=yn(s),l=this._first,c=fi(r),u;l;)l instanceof yt?tM(l._targets,o)&&(c?(!Ci||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(o,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(s,r){r=r||{};var a=this,o=pn(a,s),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,p,_=yt.to(a,Tn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Qe,onStart:function(){if(a.pause(),!p){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&lr(_,m,0,1).render(_._time,!0,!0),p=1}u&&u.apply(_,h||[])}},r));return d?_.render(0):_},t.tweenFromTo=function(s,r,a){return this.tweenTo(r,Tn({startAt:{time:pn(this,s)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(s){return s===void 0&&(s=this._time),bh(this,pn(this,s))},t.previousLabel=function(s){return s===void 0&&(s=this._time),bh(this,pn(this,s),1)},t.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Qe)},t.shiftChildren=function(s,r,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=s,o._end+=s),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=s);return cs(this)},t.invalidate=function(s){var r=this._first;for(this._lock=0;r;)r.invalidate(s),r=r._next;return i.prototype.invalidate.call(this,s)},t.clear=function(s){s===void 0&&(s=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),cs(this)},t.totalDuration=function(s){var r=0,a=this,o=a._last,l=xn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-s:s));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,zn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;lr(a,a===st&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(s){if(st._ts&&(nf(st,qa(s,st)),ef=on.frame),on.frame>=Mh){Mh+=cn.autoSleep||120;var r=st._first;if((!r||!r._ts)&&cn.autoSleep&&on._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||on.sleep()}}},e}(Vr);Tn(Zt.prototype,{_lock:0,_hasPause:0,_forcing:0});var TM=function(e,t,n,s,r,a,o){var l=new en(this._pt,e,t,0,1,Lf,null,r),c=0,u=0,h,d,p,_,g,m,f,y;for(l.b=n,l.e=s,n+="",s+="",(f=~s.indexOf("random("))&&(s=kr(s)),a&&(y=[n,s],a(y,e,t),n=y[0],s=y[1]),d=n.match($o)||[];h=$o.exec(s);)_=h[0],g=s.substring(c,h.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?qs(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},c=$o.lastIndex);return l.c=c<s.length?s.substring(c,s.length):"",l.fp=o,($d.test(s)||f)&&(l.e=0),this._pt=l,l},uc=function(e,t,n,s,r,a,o,l,c,u){ft(s)&&(s=s(r||0,e,a));var h=e[t],d=n!=="get"?n:ft(h)?c?e[t.indexOf("set")||!ft(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,p=ft(h)?c?CM:Cf:dc,_;if(Ut(s)&&(~s.indexOf("random(")&&(s=kr(s)),s.charAt(1)==="="&&(_=qs(d,s)+(Vt(d)||0),(_||_===0)&&(s=_))),!u||d!==s||Cl)return!isNaN(d*s)&&s!==""?(_=new en(this._pt,e,t,+d||0,s-(d||0),typeof h=="boolean"?LM:Pf,0,p),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!h&&!(t in e)&&ac(t,s),TM.call(this,e,t,d,s,p,l||cn.stringFilter,c))},AM=function(e,t,n,s,r){if(ft(e)&&(e=Nr(e,r,t,n,s)),!qn(e)||e.style&&e.nodeType||Xt(e)||Yd(e))return Ut(e)?Nr(e,r,t,n,s):e;var a={},o;for(o in e)a[o]=Nr(e[o],r,t,n,s);return a},bf=function(e,t,n,s,r,a){var o,l,c,u;if(an[e]&&(o=new an[e]).init(r,o.rawVars?t[e]:AM(t[e],s,r,a,n),n,s,a)!==!1&&(n._pt=l=new en(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==Gs))for(c=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Ci,Cl,hc=function i(e,t,n){var s=e.vars,r=s.ease,a=s.startAt,o=s.immediateRender,l=s.lazy,c=s.onUpdate,u=s.onUpdateParams,h=s.callbackScope,d=s.runBackwards,p=s.yoyoEase,_=s.keyframes,g=s.autoRevert,m=e._dur,f=e._startAt,y=e._targets,v=e.parent,S=v&&v.data==="nested"?v.vars.targets:y,M=e._overwrite==="auto"&&!nc,w=e.timeline,T,C,x,A,W,q,I,O,N,K,V,Y,Q;if(w&&(!_||!r)&&(r="none"),e._ease=us(r,ar.ease),e._yEase=p?Mf(us(p===!0?r:p,ar.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!w&&!!s.runBackwards,!w||_&&!s.stagger){if(O=y[0]?ls(y[0]).harness:0,Y=O&&s[O.prop],T=Xa(s,oc),f&&(f._zTime<0&&f.progress(1),t<0&&d&&o&&!g?f.render(-1,!0):f.revert(d&&m?Ia:QS),f._lazy=0),a){if(Bi(e._startAt=yt.set(y,Tn({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!f&&Jt(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Wt||!o&&!g)&&e._startAt.revert(Ia),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(d&&m&&!f){if(t&&(o=!1),x=Tn({overwrite:!1,data:"isFromStart",lazy:o&&!f&&Jt(l),immediateRender:o,stagger:0,parent:v},T),Y&&(x[O.prop]=Y),Bi(e._startAt=yt.set(y,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Wt?e._startAt.revert(Ia):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,Qe,Qe);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&Jt(l)||l&&!m,C=0;C<y.length;C++){if(W=y[C],I=W._gsap||cc(y)[C]._gsap,e._ptLookup[C]=K={},El[I.id]&&Ui.length&&Wa(),V=S===y?C:S.indexOf(W),O&&(N=new O).init(W,Y||T,e,V,S)!==!1&&(e._pt=A=new en(e._pt,W,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(Z){K[Z]=A}),N.priority&&(q=1)),!O||Y)for(x in T)an[x]&&(N=bf(x,T,e,V,W,S))?N.priority&&(q=1):K[x]=A=uc.call(e,W,x,"get",T[x],V,S,0,s.stringFilter);e._op&&e._op[C]&&e.kill(W,e._op[C]),M&&e._pt&&(Ci=e,st.killTweensOf(W,K,e.globalTime(t)),Q=!e.parent,Ci=0),e._pt&&l&&(El[I.id]=1)}q&&Df(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Q,_&&t<=0&&w.render(xn,!0,!0)},bM=function(e,t,n,s,r,a,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,d;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(c=h[d][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Cl=1,e.vars[t]="+=0",hc(e,o),Cl=0,1;l.push(c)}for(d=l.length;d--;)u=l[d],c=u._pt||u,c.s=(s||s===0)&&!r?s:c.s+(s||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=mt(n)+Vt(u.e)),u.b&&(u.b=c.s+Vt(u.b))},wM=function(e,t){var n=e[0]?ls(e[0]).harness:0,s=n&&n.aliases,r,a,o,l;if(!s)return t;r=ms({},t);for(a in s)if(a in r)for(l=s[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},RM=function(e,t,n,s){var r=t.ease||s||"power1.inOut",a,o;if(Xt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},Nr=function(e,t,n,s,r){return ft(e)?e.call(t,n,s,r):Ut(e)&&~e.indexOf("random(")?kr(e):e},wf=lc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Rf={};Qt(wf+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Rf[i]=1});var yt=function(i){Xd(e,i);function e(n,s,r,a){var o;typeof s=="number"&&(r.duration=s,s=r,r=null),o=i.call(this,a?s:Ur(s))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,f=l.yoyoEase,y=s.parent||st,v=(Xt(n)||Yd(n)?fi(n[0]):"length"in s)?[n]:yn(n),S,M,w,T,C,x,A,W;if(o._targets=v.length?cc(v):Ga("GSAP target "+n+" not found. https://greensock.com",!cn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,_||d||Ca(c)||Ca(u)){if(s=o.vars,S=o.timeline=new Zt({data:"nested",defaults:g||{},targets:y&&y.data==="nested"?y.vars.targets:v}),S.kill(),S.parent=S._dp=ai(o),S._start=0,d||Ca(c)||Ca(u)){if(T=v.length,A=d&&df(d),qn(d))for(C in d)~wf.indexOf(C)&&(W||(W={}),W[C]=d[C]);for(M=0;M<T;M++)w=Xa(s,Rf),w.stagger=0,f&&(w.yoyoEase=f),W&&ms(w,W),x=v[M],w.duration=+Nr(c,ai(o),M,x,v),w.delay=(+Nr(u,ai(o),M,x,v)||0)-o._delay,!d&&T===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),S.to(x,w,A?A(M,x,v):0),S._ease=We.none;S.duration()?c=u=0:o.timeline=0}else if(_){Ur(Tn(S.vars.defaults,{ease:"none"})),S._ease=us(_.ease||s.ease||"none");var q=0,I,O,N;if(Xt(_))_.forEach(function(K){return S.to(v,K,">")}),S.duration();else{w={};for(C in _)C==="ease"||C==="easeEach"||RM(C,_[C],w,_.easeEach);for(C in w)for(I=w[C].sort(function(K,V){return K.t-V.t}),q=0,M=0;M<I.length;M++)O=I[M],N={ease:O.e,duration:(O.t-(M?I[M-1].t:0))/100*c},N[C]=O.v,S.to(v,N,q),q+=N.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return p===!0&&!nc&&(Ci=ai(o),st.killTweensOf(v),Ci=0),zn(y,ai(o),r),s.reversed&&o.reverse(),s.paused&&o.paused(!0),(h||!c&&!_&&o._start===Bt(y._time)&&Jt(h)&&rM(ai(o))&&y.data!=="nested")&&(o._tTime=-Qe,o.render(Math.max(0,-u)||0)),m&&lf(ai(o),m),o}var t=e.prototype;return t.render=function(s,r,a){var o=this._time,l=this._tDur,c=this._dur,u=s<0,h=s>l-Qe&&!u?l:s<Qe?0:s,d,p,_,g,m,f,y,v,S;if(!c)oM(this,s,r,a);else if(h!==this._tTime||!s||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=h,v=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+s,r,a);if(d=Bt(h%g),h===l?(_=this._repeat,d=c):(_=~~(h/g),_&&_===h/g&&(d=c,_--),d>c&&(d=c)),f=this._yoyo&&_&1,f&&(S=this._yEase,d=c-d),m=or(this._tTime,g),d===o&&!a&&this._initted)return this._tTime=h,this;_!==m&&(v&&this._yEase&&Ef(v,f),this.vars.repeatRefresh&&!f&&!this._lock&&(this._lock=a=1,this.render(Bt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(cf(this,u?s:d,a,r,h))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(s,r,a)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(S||this._ease)(d/c),this._from&&(this.ratio=y=1-y),d&&!o&&!r&&!_&&(Sn(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(y,p.d),p=p._next;v&&v.render(s<0?s:!d&&f?-Qe:v._dur*v._ease(d/this._dur),r,a)||this._startAt&&(this._zTime=s),this._onUpdate&&!r&&(u&&Tl(this,s,r,a),Sn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&Sn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Tl(this,s,!0,!0),(s||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Bi(this,1),!r&&!(u&&!o)&&(h||o||f)&&(Sn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),i.prototype.invalidate.call(this,s)},t.resetTo=function(s,r,a,o){Hr||on.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||hc(this,l),c=this._ease(l/this._dur),bM(this,s,r,a,o,c,l)?this.resetTo(s,r,a,o):(ro(this,0),this.parent||af(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(s,r){if(r===void 0&&(r="all"),!s&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Rr(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(s,r,Ci&&Ci.vars.overwrite!==!0)._first||Rr(this),this.parent&&a!==this.timeline.totalDuration()&&lr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=s?yn(s):o,c=this._ptLookup,u=this._pt,h,d,p,_,g,m,f;if((!r||r==="all")&&iM(o,l))return r==="all"&&(this._pt=0),Rr(this);for(h=this._op=this._op||[],r!=="all"&&(Ut(r)&&(g={},Qt(r,function(y){return g[y]=1}),r=g),r=wM(o,r)),f=o.length;f--;)if(~l.indexOf(o[f])){d=c[f],r==="all"?(h[f]=r,_=d,p={}):(p=h[f]=h[f]||{},_=r);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&io(this,m,"_pt"),delete d[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&u&&Rr(this),this},e.to=function(s,r){return new e(s,r,arguments[2])},e.from=function(s,r){return Or(1,arguments)},e.delayedCall=function(s,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(s,r,a){return Or(2,arguments)},e.set=function(s,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(s,r)},e.killTweensOf=function(s,r,a){return st.killTweensOf(s,r,a)},e}(Vr);Tn(yt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Qt("staggerTo,staggerFrom,staggerFromTo",function(i){yt[i]=function(){var e=new Zt,t=bl.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var dc=function(e,t,n){return e[t]=n},Cf=function(e,t,n){return e[t](n)},CM=function(e,t,n,s){return e[t](s.fp,n)},PM=function(e,t,n){return e.setAttribute(t,n)},fc=function(e,t){return ft(e[t])?Cf:ic(e[t])&&e.setAttribute?PM:dc},Pf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},LM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Lf=function(e,t){var n=t._pt,s="";if(!e&&t.b)s=t.b;else if(e===1&&t.e)s=t.e;else{for(;n;)s=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+s,n=n._next;s+=t.c}t.set(t.t,t.p,s,t)},pc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},DM=function(e,t,n,s){for(var r=this._pt,a;r;)a=r._next,r.p===s&&r.modifier(e,t,n),r=a},IM=function(e){for(var t=this._pt,n,s;t;)s=t._next,t.p===e&&!t.op||t.op===e?io(this,t,"_pt"):t.dep||(n=1),t=s;return!n},UM=function(e,t,n,s){s.mSet(e,t,s.m.call(s.tween,n,s.mt),s)},Df=function(e){for(var t=e._pt,n,s,r,a;t;){for(n=t._next,s=r;s&&s.pr>t.pr;)s=s._next;(t._prev=s?s._prev:a)?t._prev._next=t:r=t,(t._next=s)?s._prev=t:a=t,t=n}e._pt=r},en=function(){function i(t,n,s,r,a,o,l,c,u){this.t=n,this.s=r,this.c=a,this.p=s,this.r=o||Pf,this.d=l||this,this.set=c||dc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,s,r){this.mSet=this.mSet||this.set,this.set=UM,this.m=n,this.mt=r,this.tween=s},i}();Qt(lc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return oc[i]=1});un.TweenMax=un.TweenLite=yt;un.TimelineLite=un.TimelineMax=Zt;st=new Zt({sortChildren:!1,defaults:ar,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});cn.stringFilter=Sf;var hs=[],Oa={},OM=[],Rh=0,NM=0,el=function(e){return(Oa[e]||OM).map(function(t){return t()})},Pl=function(){var e=Date.now(),t=[];e-Rh>2&&(el("matchMediaInit"),hs.forEach(function(n){var s=n.queries,r=n.conditions,a,o,l,c;for(o in s)a=mn.matchMedia(s[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),el("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Rh=e,el("matchMedia"))},If=function(){function i(t,n){this.selector=n&&wl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=NM++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,s,r){ft(n)&&(r=s,s=n,n=ft);var a=this,o=function(){var c=ut,u=a.selector,h;return c&&c!==a&&c.data.push(a),r&&(a.selector=wl(r)),ut=a,h=s.apply(a,arguments),ft(h)&&a._r.push(h),ut=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===ft?o(a):n?a[n]=o:o},e.ignore=function(n){var s=ut;ut=null,n(this),ut=s},e.getTweens=function(){var n=[];return this.data.forEach(function(s){return s instanceof i?n.push.apply(n,s.getTweens()):s instanceof yt&&!(s.parent&&s.parent.data==="nested")&&n.push(s)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,s){var r=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1/0}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof yt)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),s)for(var o=hs.length;o--;)hs[o].id===this.id&&hs.splice(o,1)},e.revert=function(n){this.kill(n||{})},i}(),FM=function(){function i(t){this.contexts=[],this.scope=t}var e=i.prototype;return e.add=function(n,s,r){qn(n)||(n={matches:n});var a=new If(0,r||this.scope),o=a.conditions={},l,c,u;ut&&!a.selector&&(a.selector=ut.selector),this.contexts.push(a),s=a.add("onMatch",s),a.queries=n;for(c in n)c==="all"?u=1:(l=mn.matchMedia(n[c]),l&&(hs.indexOf(a)<0&&hs.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Pl):l.addEventListener("change",Pl)));return u&&s(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(s){return s.kill(n,!0)})},i}(),Ya={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(s){return vf(s)})},timeline:function(e){return new Zt(e)},getTweensOf:function(e,t){return st.getTweensOf(e,t)},getProperty:function(e,t,n,s){Ut(e)&&(e=yn(e)[0]);var r=ls(e||{}).get,a=n?rf:sf;return n==="native"&&(n=""),e&&(t?a((an[t]&&an[t].get||r)(e,t,n,s)):function(o,l,c){return a((an[o]&&an[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=yn(e),e.length>1){var s=e.map(function(u){return tn.quickSetter(u,t,n)}),r=s.length;return function(u){for(var h=r;h--;)s[h](u)}}e=e[0]||{};var a=an[t],o=ls(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;Gs._pt=0,h.init(e,n?u+n:u,Gs,0,[e]),h.render(1,h),Gs._pt&&pc(1,Gs)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var s,r=tn.to(e,ms((s={},s[t]="+=0.1",s.paused=!0,s),n||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return st.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=us(e.ease,ar.ease)),Eh(ar,e||{})},config:function(e){return Eh(cn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,s=e.plugins,r=e.defaults,a=e.extendTimeline;(s||"").split(",").forEach(function(o){return o&&!an[o]&&!un[o]&&Ga(t+" effect requires "+o+" plugin.")}),Ko[t]=function(o,l,c){return n(yn(o),Tn(l||{},r),c)},a&&(Zt.prototype[t]=function(o,l,c){return this.add(Ko[t](o,qn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){We[e]=us(t)},parseEase:function(e,t){return arguments.length?us(e,t):We},getById:function(e){return st.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Zt(e),s,r;for(n.smoothChildTiming=Jt(e.smoothChildTiming),st.remove(n),n._dp=0,n._time=n._tTime=st._time,s=st._first;s;)r=s._next,(t||!(!s._dur&&s instanceof yt&&s.vars.onComplete===s._targets[0]))&&zn(n,s,s._start-s._delay),s=r;return zn(st,n,0),n},context:function(e,t){return e?new If(e,t):ut},matchMedia:function(e){return new FM(e)},matchMediaRefresh:function(){return hs.forEach(function(e){var t=e.conditions,n,s;for(s in t)t[s]&&(t[s]=!1,n=1);n&&e.revert()})||Pl()},addEventListener:function(e,t){var n=Oa[e]||(Oa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Oa[e],s=n&&n.indexOf(t);s>=0&&n.splice(s,1)},utils:{wrap:mM,wrapYoyo:gM,distribute:df,random:pf,snap:ff,normalize:pM,getUnit:Vt,clamp:uM,splitColor:xf,toArray:yn,selector:wl,mapRange:gf,pipe:dM,unitize:fM,interpolate:_M,shuffle:hf},install:Jd,effects:Ko,ticker:on,updateRoot:Zt.updateRoot,plugins:an,globalTimeline:st,core:{PropTween:en,globals:Qd,Tween:yt,Timeline:Zt,Animation:Vr,getCache:ls,_removeLinkedListItem:io,reverting:function(){return Wt},context:function(e){return e&&ut&&(ut.data.push(e),e._ctx=ut),ut},suppressOverwrites:function(e){return nc=e}}};Qt("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Ya[i]=yt[i]});on.add(Zt.updateRoot);Gs=Ya.to({},{duration:0});var BM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},zM=function(e,t){var n=e._targets,s,r,a;for(s in t)for(r=n.length;r--;)a=e._ptLookup[r][s],a&&(a=a.d)&&(a._pt&&(a=BM(a,s)),a&&a.modifier&&a.modifier(t[s],e,n[r],s))},tl=function(e,t){return{name:e,rawVars:1,init:function(s,r,a){a._onInit=function(o){var l,c;if(Ut(r)&&(l={},Qt(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}zM(o,r)}}}},tn=Ya.registerPlugin({name:"attr",init:function(e,t,n,s,r){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],s,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Wt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},tl("roundProps",Rl),tl("modifiers"),tl("snap",ff))||Ya;yt.version=Zt.version=tn.version="3.12.2";Zd=1;sc()&&cr();We.Power0;We.Power1;We.Power2;We.Power3;We.Power4;We.Linear;We.Quad;We.Cubic;We.Quart;We.Quint;We.Strong;We.Elastic;We.Back;We.SteppedEase;We.Bounce;We.Sine;We.Expo;We.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ch,Pi,Ys,mc,rs,Ph,gc,kM=function(){return typeof window<"u"},pi={},ns=180/Math.PI,js=Math.PI/180,zs=Math.atan2,Lh=1e8,_c=/([A-Z])/g,HM=/(left|right|width|margin|padding|x)/i,VM=/[\s,\(]\S/,kn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ll=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},GM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},WM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},XM=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Uf=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Of=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},qM=function(e,t,n){return e.style[t]=n},YM=function(e,t,n){return e.style.setProperty(t,n)},jM=function(e,t,n){return e._gsap[t]=n},$M=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},KM=function(e,t,n,s,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},ZM=function(e,t,n,s,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},rt="transform",Un=rt+"Origin",JM=function i(e,t){var n=this,s=this.target,r=s.style;if(e in pi&&r){if(this.tfm=this.tfm||{},e!=="transform")e=kn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=oi(s,a)}):this.tfm[e]=s._gsap.x?s._gsap[e]:oi(s,e);else return kn.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(rt)>=0)return;s._gsap.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(Un,t,"")),e=rt}(r||t)&&this.props.push(e,t,r[e])},Nf=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},QM=function(){var e=this.props,t=this.target,n=t.style,s=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(_c,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)s[a]=this.tfm[a];s.svg&&(s.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=gc(),(!r||!r.isStart)&&!n[rt]&&(Nf(n),s.uncache=1)}},Ff=function(e,t){var n={target:e,props:[],revert:QM,save:JM};return e._gsap||tn.core.getCache(e),t&&t.split(",").forEach(function(s){return n.save(s)}),n},Bf,Dl=function(e,t){var n=Pi.createElementNS?Pi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Pi.createElement(e);return n.style?n:Pi.createElement(e)},Hn=function i(e,t,n){var s=getComputedStyle(e);return s[t]||s.getPropertyValue(t.replace(_c,"-$1").toLowerCase())||s.getPropertyValue(t)||!n&&i(e,ur(t)||t,1)||""},Dh="O,Moz,ms,Ms,Webkit".split(","),ur=function(e,t,n){var s=t||rs,r=s.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Dh[a]+e in r););return a<0?null:(a===3?"ms":a>=0?Dh[a]:"")+e},Il=function(){kM()&&window.document&&(Ch=window,Pi=Ch.document,Ys=Pi.documentElement,rs=Dl("div")||{style:{}},Dl("div"),rt=ur(rt),Un=rt+"Origin",rs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Bf=!!ur("perspective"),gc=tn.core.reverting,mc=1)},nl=function i(e){var t=Dl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,s=this.nextSibling,r=this.style.cssText,a;if(Ys.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(s?n.insertBefore(this,s):n.appendChild(this)),Ys.removeChild(t),this.style.cssText=r,a},Ih=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},zf=function(e){var t;try{t=e.getBBox()}catch{t=nl.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===nl||(t=nl.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Ih(e,["x","cx","x1"])||0,y:+Ih(e,["y","cy","y1"])||0,width:0,height:0}:t},kf=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&zf(e))},Gr=function(e,t){if(t){var n=e.style;t in pi&&t!==Un&&(t=rt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(_c,"-$1").toLowerCase())):n.removeAttribute(t)}},Li=function(e,t,n,s,r,a){var o=new en(e._pt,t,n,0,1,a?Of:Uf);return e._pt=o,o.b=s,o.e=r,e._props.push(n),o},Uh={deg:1,rad:1,turn:1},eE={grid:1,flex:1},zi=function i(e,t,n,s){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=rs.style,l=HM.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=s==="px",p=s==="%",_,g,m,f;return s===a||!r||Uh[s]||Uh[a]?r:(a!=="px"&&!d&&(r=i(e,t,n,"px")),f=e.getCTM&&kf(e),(p||a==="%")&&(pi[t]||~t.indexOf("adius"))?(_=f?e.getBBox()[l?"width":"height"]:e[u],mt(p?r/_*h:r/100*_)):(o[l?"width":"height"]=h+(d?a:s),g=~t.indexOf("adius")||s==="em"&&e.appendChild&&!c?e:e.parentNode,f&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Pi||!g.appendChild)&&(g=Pi.body),m=g._gsap,m&&p&&m.width&&l&&m.time===on.time&&!m.uncache?mt(r/m.width*h):((p||a==="%")&&!eE[Hn(g,"display")]&&(o.position=Hn(e,"position")),g===e&&(o.position="static"),g.appendChild(rs),_=rs[u],g.removeChild(rs),o.position="absolute",l&&p&&(m=ls(g),m.time=on.time,m.width=g[u]),mt(d?_*r/h:_&&r?h/_*r:0))))},oi=function(e,t,n,s){var r;return mc||Il(),t in kn&&t!=="transform"&&(t=kn[t],~t.indexOf(",")&&(t=t.split(",")[0])),pi[t]&&t!=="transform"?(r=Xr(e,s),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:$a(Hn(e,Un))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||s||~(r+"").indexOf("calc("))&&(r=ja[t]&&ja[t](e,t,n)||Hn(e,t)||tf(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?zi(e,t,r,n)+n:r},tE=function(e,t,n,s){if(!n||n==="none"){var r=ur(t,e,1),a=r&&Hn(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=Hn(e,"borderTopColor"))}var o=new en(this._pt,e.style,t,0,1,Lf),l=0,c=0,u,h,d,p,_,g,m,f,y,v,S,M;if(o.b=n,o.e=s,n+="",s+="",s==="auto"&&(e.style[t]=s,s=Hn(e,t)||s,e.style[t]=n),u=[n,s],Sf(u),n=u[0],s=u[1],d=n.match(Vs)||[],M=s.match(Vs)||[],M.length){for(;h=Vs.exec(s);)m=h[0],y=s.substring(l,h.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(p=parseFloat(g)||0,S=g.substr((p+"").length),m.charAt(1)==="="&&(m=qs(p,m)+S),f=parseFloat(m),v=m.substr((f+"").length),l=Vs.lastIndex-v.length,v||(v=v||cn.units[t]||S,l===s.length&&(s+=v,o.e+=v)),S!==v&&(p=zi(e,t,g,v)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:p,c:f-p,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<s.length?s.substring(l,s.length):""}else o.r=t==="display"&&s==="none"?Of:Uf;return $d.test(s)&&(o.e=0),this._pt=o,o},Oh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},nE=function(e){var t=e.split(" "),n=t[0],s=t[1]||"50%";return(n==="top"||n==="bottom"||s==="left"||s==="right")&&(e=n,n=s,s=e),t[0]=Oh[n]||n,t[1]=Oh[s]||s,t.join(" ")},iE=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,s=n.style,r=t.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)s.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],pi[o]&&(l=1,o=o==="transformOrigin"?Un:rt),Gr(n,o);l&&(Gr(n,rt),a&&(a.svg&&n.removeAttribute("transform"),Xr(n,1),a.uncache=1,Nf(s)))}},ja={clearProps:function(e,t,n,s,r){if(r.data!=="isFromStart"){var a=e._pt=new en(e._pt,t,n,0,0,iE);return a.u=s,a.pr=-10,a.tween=r,e._props.push(n),1}}},Wr=[1,0,0,1,0,0],Hf={},Vf=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Nh=function(e){var t=Hn(e,rt);return Vf(t)?Wr:t.substr(7).match(jd).map(mt)},vc=function(e,t){var n=e._gsap||ls(e),s=e.style,r=Nh(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Wr:r):(r===Wr&&!e.offsetParent&&e!==Ys&&!n.svg&&(l=s.display,s.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,Ys.appendChild(e)),r=Nh(e),l?s.display=l:Gr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ys.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Ul=function(e,t,n,s,r,a){var o=e._gsap,l=r||vc(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,p=l[0],_=l[1],g=l[2],m=l[3],f=l[4],y=l[5],v=t.split(" "),S=parseFloat(v[0])||0,M=parseFloat(v[1])||0,w,T,C,x;n?l!==Wr&&(T=p*m-_*g)&&(C=S*(m/T)+M*(-g/T)+(g*y-m*f)/T,x=S*(-_/T)+M*(p/T)-(p*y-_*f)/T,S=C,M=x):(w=zf(e),S=w.x+(~v[0].indexOf("%")?S/100*w.width:S),M=w.y+(~(v[1]||v[0]).indexOf("%")?M/100*w.height:M)),s||s!==!1&&o.smooth?(f=S-c,y=M-u,o.xOffset=h+(f*p+y*g)-f,o.yOffset=d+(f*_+y*m)-y):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=M,o.smooth=!!s,o.origin=t,o.originIsAbsolute=!!n,e.style[Un]="0px 0px",a&&(Li(a,o,"xOrigin",c,S),Li(a,o,"yOrigin",u,M),Li(a,o,"xOffset",h,o.xOffset),Li(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+M)},Xr=function(e,t){var n=e._gsap||new Af(e);if("x"in n&&!t&&!n.uncache)return n;var s=e.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Hn(e,Un)||"0",u,h,d,p,_,g,m,f,y,v,S,M,w,T,C,x,A,W,q,I,O,N,K,V,Y,Q,Z,z,X,he,re,le;return u=h=d=g=m=f=y=v=S=0,p=_=1,n.svg=!!(e.getCTM&&kf(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(s[rt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[rt]!=="none"?l[rt]:"")),s.scale=s.rotate=s.translate="none"),T=vc(e,n.svg),n.svg&&(n.uncache?(Y=e.getBBox(),c=n.xOrigin-Y.x+"px "+(n.yOrigin-Y.y)+"px",V=""):V=!t&&e.getAttribute("data-svg-origin"),Ul(e,V||c,!!V||n.originIsAbsolute,n.smooth!==!1,T)),M=n.xOrigin||0,w=n.yOrigin||0,T!==Wr&&(W=T[0],q=T[1],I=T[2],O=T[3],u=N=T[4],h=K=T[5],T.length===6?(p=Math.sqrt(W*W+q*q),_=Math.sqrt(O*O+I*I),g=W||q?zs(q,W)*ns:0,y=I||O?zs(I,O)*ns+g:0,y&&(_*=Math.abs(Math.cos(y*js))),n.svg&&(u-=M-(M*W+w*I),h-=w-(M*q+w*O))):(le=T[6],he=T[7],Z=T[8],z=T[9],X=T[10],re=T[11],u=T[12],h=T[13],d=T[14],C=zs(le,X),m=C*ns,C&&(x=Math.cos(-C),A=Math.sin(-C),V=N*x+Z*A,Y=K*x+z*A,Q=le*x+X*A,Z=N*-A+Z*x,z=K*-A+z*x,X=le*-A+X*x,re=he*-A+re*x,N=V,K=Y,le=Q),C=zs(-I,X),f=C*ns,C&&(x=Math.cos(-C),A=Math.sin(-C),V=W*x-Z*A,Y=q*x-z*A,Q=I*x-X*A,re=O*A+re*x,W=V,q=Y,I=Q),C=zs(q,W),g=C*ns,C&&(x=Math.cos(C),A=Math.sin(C),V=W*x+q*A,Y=N*x+K*A,q=q*x-W*A,K=K*x-N*A,W=V,N=Y),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,f=180-f),p=mt(Math.sqrt(W*W+q*q+I*I)),_=mt(Math.sqrt(K*K+le*le)),C=zs(N,K),y=Math.abs(C)>2e-4?C*ns:0,S=re?1/(re<0?-re:re):0),n.svg&&(V=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Vf(Hn(e,rt)),V&&e.setAttribute("transform",V))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(p*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=mt(p),n.scaleY=mt(_),n.rotation=mt(g)+o,n.rotationX=mt(m)+o,n.rotationY=mt(f)+o,n.skewX=y+o,n.skewY=v+o,n.transformPerspective=S+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(s[Un]=$a(c)),n.xOffset=n.yOffset=0,n.force3D=cn.force3D,n.renderTransform=n.svg?rE:Bf?Gf:sE,n.uncache=0,n},$a=function(e){return(e=e.split(" "))[0]+" "+e[1]},il=function(e,t,n){var s=Vt(t);return mt(parseFloat(t)+parseFloat(zi(e,"x",n+"px",s)))+s},sE=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Gf(e,t)},Ki="0deg",Ar="0px",Zi=") ",Gf=function(e,t){var n=t||this,s=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,p=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,f=n.force3D,y=n.target,v=n.zOrigin,S="",M=f==="auto"&&e&&e!==1||f===!0;if(v&&(h!==Ki||u!==Ki)){var w=parseFloat(u)*js,T=Math.sin(w),C=Math.cos(w),x;w=parseFloat(h)*js,x=Math.cos(w),a=il(y,a,T*x*-v),o=il(y,o,-Math.sin(w)*-v),l=il(y,l,C*x*-v+v)}m!==Ar&&(S+="perspective("+m+Zi),(s||r)&&(S+="translate("+s+"%, "+r+"%) "),(M||a!==Ar||o!==Ar||l!==Ar)&&(S+=l!==Ar||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Zi),c!==Ki&&(S+="rotate("+c+Zi),u!==Ki&&(S+="rotateY("+u+Zi),h!==Ki&&(S+="rotateX("+h+Zi),(d!==Ki||p!==Ki)&&(S+="skew("+d+", "+p+Zi),(_!==1||g!==1)&&(S+="scale("+_+", "+g+Zi),y.style[rt]=S||"translate(0, 0)"},rE=function(e,t){var n=t||this,s=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,p=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,f=n.yOffset,y=n.forceCSS,v=parseFloat(a),S=parseFloat(o),M,w,T,C,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=js,c*=js,M=Math.cos(l)*h,w=Math.sin(l)*h,T=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(u*=js,x=Math.tan(c-u),x=Math.sqrt(1+x*x),T*=x,C*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),M*=x,w*=x)),M=mt(M),w=mt(w),T=mt(T),C=mt(C)):(M=h,C=d,w=T=0),(v&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(v=zi(p,"x",a,"px"),S=zi(p,"y",o,"px")),(_||g||m||f)&&(v=mt(v+_-(_*M+g*T)+m),S=mt(S+g-(_*w+g*C)+f)),(s||r)&&(x=p.getBBox(),v=mt(v+s/100*x.width),S=mt(S+r/100*x.height)),x="matrix("+M+","+w+","+T+","+C+","+v+","+S+")",p.setAttribute("transform",x),y&&(p.style[rt]=x)},aE=function(e,t,n,s,r){var a=360,o=Ut(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?ns:1),c=l-s,u=s+c+"deg",h,d;return o&&(h=r.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Lh)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Lh)%a-~~(c/a)*a)),e._pt=d=new en(e._pt,t,n,s,c,GM),d.e=u,d.u="deg",e._props.push(n),d},Fh=function(e,t){for(var n in t)e[n]=t[n];return e},oE=function(e,t,n){var s=Fh({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,d,p,_;s.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[rt]=t,o=Xr(n,1),Gr(n,rt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[rt],a[rt]=t,o=Xr(n,1),a[rt]=c);for(l in pi)c=s[l],u=o[l],c!==u&&r.indexOf(l)<0&&(p=Vt(c),_=Vt(u),h=p!==_?zi(n,l,c,_):parseFloat(c),d=parseFloat(u),e._pt=new en(e._pt,o,l,h,d-h,Ll),e._pt.u=_||0,e._props.push(l));Fh(o,s)};Qt("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",s="Bottom",r="Left",a=(e<3?[t,n,s,r]:[t+r,t+n,s+n,s+r]).map(function(o){return e<2?i+o:"border"+o+i});ja[e>1?"border"+i:i]=function(o,l,c,u,h){var d,p;if(arguments.length<4)return d=a.map(function(_){return oi(o,_,c)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(u+"").split(" "),p={},a.forEach(function(_,g){return p[_]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,p,h)}});var Wf={name:"css",register:Il,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,s,r){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,d,p,_,g,m,f,y,v,S,M,w,T,C;mc||Il(),this.styles=this.styles||Ff(e),C=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(an[g]&&bf(g,t,n,s,e,r)))){if(p=typeof u,_=ja[g],p==="function"&&(u=u.call(n,s,e,r),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=kr(u)),_)_(this,e,g,u,n)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Oi.lastIndex=0,Oi.test(c)||(m=Vt(c),f=Vt(u)),f?m!==f&&(c=zi(e,g,c,f)+f):m&&(u+=m),this.add(o,"setProperty",c,u,s,r,0,0,g),a.push(g),C.push(g,0,o[g]);else if(p!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,s,e,r):l[g],Ut(c)&&~c.indexOf("random(")&&(c=kr(c)),Vt(c+"")||(c+=cn.units[g]||Vt(oi(e,g))||""),(c+"").charAt(1)==="="&&(c=oi(e,g))):c=oi(e,g),d=parseFloat(c),y=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),g in kn&&(g==="autoAlpha"&&(d===1&&oi(e,"visibility")==="hidden"&&h&&(d=0),C.push("visibility",0,o.visibility),Li(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=kn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in pi,v){if(this.styles.save(g),S||(M=e._gsap,M.renderTransform&&!t.parseTransform||Xr(e,t.parseTransform),w=t.smoothOrigin!==!1&&M.smooth,S=this._pt=new en(this._pt,o,rt,0,1,M.renderTransform,M,0,-1),S.dep=1),g==="scale")this._pt=new en(this._pt,M,"scaleY",M.scaleY,(y?qs(M.scaleY,y+h):h)-M.scaleY||0,Ll),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(Un,0,o[Un]),u=nE(u),M.svg?Ul(e,u,0,w,0,this):(f=parseFloat(u.split(" ")[2])||0,f!==M.zOrigin&&Li(this,M,"zOrigin",M.zOrigin,f),Li(this,o,g,$a(c),$a(u)));continue}else if(g==="svgOrigin"){Ul(e,u,1,w,0,this);continue}else if(g in Hf){aE(this,M,g,d,y?qs(d,y+u):u);continue}else if(g==="smoothOrigin"){Li(this,M,"smooth",M.smooth,u);continue}else if(g==="force3D"){M[g]=u;continue}else if(g==="transform"){oE(this,u,e);continue}}else g in o||(g=ur(g)||g);if(v||(h||h===0)&&(d||d===0)&&!VM.test(u)&&g in o)m=(c+"").substr((d+"").length),h||(h=0),f=Vt(u)||(g in cn.units?cn.units[g]:m),m!==f&&(d=zi(e,g,c,f)),this._pt=new en(this._pt,v?M:o,g,d,(y?qs(d,y+h):h)-d,!v&&(f==="px"||g==="zIndex")&&t.autoRound!==!1?XM:Ll),this._pt.u=f||0,m!==f&&f!=="%"&&(this._pt.b=c,this._pt.r=WM);else if(g in o)tE.call(this,e,g,c,y?y+u:u);else if(g in e)this.add(e,g,c||e[g],y?y+u:u,s,r);else if(g!=="parseTransform"){ac(g,u);continue}v||(g in o?C.push(g,0,o[g]):C.push(g,1,c||e[g])),a.push(g)}}T&&Df(this)},render:function(e,t){if(t.tween._time||!gc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:oi,aliases:kn,getSetter:function(e,t,n){var s=kn[t];return s&&s.indexOf(",")<0&&(t=s),t in pi&&t!==Un&&(e._gsap.x||oi(e,"x"))?n&&Ph===n?t==="scale"?$M:jM:(Ph=n||{})&&(t==="scale"?KM:ZM):e.style&&!ic(e.style[t])?qM:~t.indexOf("-")?YM:fc(e,t)},core:{_removeProperty:Gr,_getMatrix:vc}};tn.utils.checkPrefix=ur;tn.core.getStyleSaver=Ff;(function(i,e,t,n){var s=Qt(i+","+e+","+t,function(r){pi[r]=1});Qt(e,function(r){cn.units[r]="deg",Hf[r]=1}),kn[s[13]]=i+","+e,Qt(n,function(r){var a=r.split(":");kn[a[1]]=s[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Qt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){cn.units[i]="px"});tn.registerPlugin(Wf);var Pr=tn.registerPlugin(Wf)||tn;Pr.core.Tween;class Ji extends gs{constructor({originPow:e=[3,3,3],originMul:t=[2,2,2],originAdd:n=[.05,.05,.05],destPow:s=[3,3,3],destMul:r=[2,2,2],destAdd:a=[.05,.05,.05],ease:o="none",yoyo:l=!1}){super(),this.ease=o,this.yoyo=l,this.name="ColorCorrection",this.params="(...)",this.dest=[s[0],s[1],s[2],r[0],r[1],r[2],a[0],a[1],a[2]],this.origin=[e[0],e[1],e[2],t[0],t[1],t[2],n[0],n[1],n[2]]}setupAnimation(e,t,n){this.start=t,this.duration=n,this.colorCorrectionEffect=this.experience.renderer.colorCorrectionEffect,this.powOrigin=this.colorCorrectionEffect.uniforms.get("powRGB").value,this.mulOrigin=this.colorCorrectionEffect.uniforms.get("mulRGB").value,this.addOrigin=this.colorCorrectionEffect.uniforms.get("addRGB").value,e.to(this.origin,{id:this.id,ease:this.ease,repeat:this.yoyo===!0?1:0,yoyo:this.yoyo,duration:this.duration,endArray:this.dest,onUpdate:this.onUpdate,onUpdateParams:[this],onStart:this.onStart,onStartParams:[this],onComplete:this.onComplete,onCompleteParams:[this]},this.start)}onUpdate(e){e.colorCorrectionEffect.uniforms.get("powRGB").value.x=this.targets()[0][0],e.colorCorrectionEffect.uniforms.get("powRGB").value.y=this.targets()[0][1],e.colorCorrectionEffect.uniforms.get("powRGB").value.z=this.targets()[0][2],e.colorCorrectionEffect.uniforms.get("mulRGB").value.x=this.targets()[0][3],e.colorCorrectionEffect.uniforms.get("mulRGB").value.y=this.targets()[0][4],e.colorCorrectionEffect.uniforms.get("mulRGB").value.z=this.targets()[0][5],e.colorCorrectionEffect.uniforms.get("addRGB").value.x=this.targets()[0][6],e.colorCorrectionEffect.uniforms.get("addRGB").value.y=this.targets()[0][7],e.colorCorrectionEffect.uniforms.get("addRGB").value.z=this.targets()[0][8],e.onUpdateProgress(this._tTime,this._tDur)}}class fn extends gs{constructor({animationIn:e=.5,animationOut:t=.5,displacement:n=.125,ease:s="none",yoyo:r=!1}){super(),this.dest=[1],this.animationIn=e,this.animationOut=t,this.displacement=n,this.name="MirrorMode",this.params=`(${t})`,this.ease=s,this.yoyo=r}setupAnimation(e,t,n){this.start=t,this.duration=n,this.mirrorEffect=this.experience.renderer.mirrorModeEffect,this.origin=[0],e.to(this.origin,{id:this.id,ease:this.ease,repeat:this.yoyo===!0?1:0,yoyo:this.yoyo,duration:this.duration,endArray:this.dest,onUpdate:this.onUpdate,onUpdateParams:[this],onStart:this.onStart,onStartParams:[this],onComplete:this.onComplete,onCompleteParams:[this]},this.start)}onUpdate(e){this.targets()[0][0]>0&&e.mirrorEffect.init(e.start,e.start+e.duration,e.experience.sizes.width,e.experience.sizes.height,e.animationIn,e.animationOut,e.displacement),e.onUpdateProgress(this._tTime,this._tDur)}}class lE{constructor(e){Ct(this,"effects",[{start:1,end:30,effect:new Ji({destPow:[3,3,8],destMul:[2,2,15],destAdd:[.05,.05,.5]})},{start:8.5,end:9,effect:new it({scaleX:2,scaleZ:.65,ease:"bounce"})},{start:9,end:9.5,effect:new it({scaleZ:3,scaleX:.75,scaleY:.63,ease:"bounce"})},{start:12,end:12.5,effect:new si({position:50,ease:"bounce"})},{start:24.75,end:25.25,effect:new it({scaleX:3.5,ease:"bounce"})},{start:33,end:41,effect:new $i({audioStrength:1.75,thickness:.15,color:new ve(2,2,0)})},{start:49,end:51,effect:new $i({audioStrength:1.5,thickness:.2,color:new ve(2,0,0)})},{start:73,end:81,effect:new fn({animationIn:1,animationOut:2.5})},{start:89,end:98,effect:new fn({animationIn:1,animationOut:2.5})},{start:89,end:93,effect:new $t({destIntensity:2.48,destRadius:1.15,yoyo:!0})},{start:113.5,end:115,effect:new Ji({originPow:[3,3,8],originMul:[2,2,15],originAdd:[.05,.05,.5],destPow:[8,3,8],destMul:[15,2,15],destAdd:[.6,.05,.5],yoyo:!0})},{start:114,end:114.5,effect:new si({position:50,ease:"bounce"})},{start:114,end:114.25,effect:new it({scaleX:2.3,scaleZ:.75,ease:"bounce-inOut"})},{start:144,end:146,effect:new $t({destIntensity:1.48,destRadius:1.15,yoyo:!0})},{start:144.5,end:145,effect:new Bs({destThickness:.15,destAudioStrength:.75,ease:"bounce"})},{start:144.5,end:145,effect:new si({position:50,ease:"bounce"})},{start:144.5,end:145,effect:new Bs({originMirrors:1,destMirrors:2,yoyo:!1})},{start:145.5,end:146,effect:new Bs({originMirrors:2,destMirrors:2,destThickness:.15,destAudioStrength:.75,ease:"bounce"})},{start:145.5,end:146,effect:new si({position:50,ease:"bounce"})},{start:161.5,end:162,effect:new it({scaleX:2.3,scaleY:1.3,scaleZ:.75,ease:"bounce-inOut"})},{start:175,end:182,effect:new fn({animationIn:1,animationOut:2.5})},{start:182.5,end:184,effect:new $t({destIntensity:-1.1,destRadius:-1.85,yoyo:!0})},{start:184.5,end:185.5,effect:new $t({destIntensity:-3,destRadius:.85,yoyo:!0})},{start:192.5,end:194,effect:new $t({destIntensity:3,destRadius:1.35,yoyo:!0})},{start:202,end:211,effect:new fn({animationIn:1,animationOut:2.5})},{start:211,end:211.5,effect:new si({position:50,ease:"bounce"})},{start:218,end:227.5,effect:new fn({animationIn:1,animationOut:2.5,displacement:.35})},{start:243.5,end:245,effect:new Ji({originPow:[3,3,8],originMul:[2,2,15],originAdd:[.05,.05,.5],destPow:[8,3,8],destMul:[15,2,15],destAdd:[.6,.05,.5],yoyo:!0})},{start:244,end:244.5,effect:new si({position:50,ease:"bounce"})},{start:244,end:244.25,effect:new it({scaleX:2.3,scaleZ:.75,ease:"bounce-inOut"})},{start:274,end:274.75,effect:new it({scaleX:3.5,ease:"bounce"})},{start:274.75,end:275.5,effect:new it({scaleZ:2.75,ease:"bounce"})},{start:291,end:291.5,effect:new $t({destIntensity:3,destRadius:1.35,yoyo:!0})},{start:291.25,end:291.75,effect:new si({position:25,ease:"bounce"})},{start:304,end:311.5,effect:new fn({animationIn:1,animationOut:2.5})},{start:312.5,end:313.5,effect:new $t({destIntensity:-3,destRadius:.85,yoyo:!0})},{start:314.5,end:315.5,effect:new $t({destIntensity:-3,destRadius:.85,yoyo:!0})},{start:322.5,end:324,effect:new $t({destIntensity:3,destRadius:1.35,yoyo:!0})},{start:326,end:337,effect:new fn({animationIn:.5,animationOut:1.5,displacement:.025})},{start:341,end:354,effect:new fn({animationIn:.5,animationOut:1.5,displacement:.02})},{start:356,end:361,effect:new $i({audioStrength:.75,thickness:.25,color:new ve(0,2,3)})},{start:390,end:394,effect:new Bs({destThickness:.25,originMirrors:2,destMirrors:24,destAudioStrength:.5,yoyo:!1})},{start:390,end:394,effect:new $t({destIntensity:-1.5,destRadius:.65,yoyo:!1})},{start:394,end:395,effect:new si({position:50,ease:"elastic"})},{start:394.5,end:395,effect:new it({scaleZ:2.75,ease:"bounce"})},{start:394,end:395,effect:new Ji({originPow:[3,3,8],originMul:[2,2,15],originAdd:[.05,.05,.5],destPow:[3,3,3],destMul:[2,2,2],destAdd:[.35,.27,.5]})},{start:398,end:398.5,effect:new it({scaleY:1.5,ease:"bounce"})},{start:399,end:402,effect:new Bs({originAudioStrength:.5,destAudioStrength:.5,originThickness:.25,originMirrors:24,destMirrors:24,destThickness:.15,yoyo:!1})},{start:404,end:408,effect:new $t({originIntensity:-1.5,originRadius:.65,destIntensity:2,destRadius:1.12,yoyo:!1})},{start:406,end:415,effect:new Bs({originAudioStrength:.5,originThickness:.15,originMirrors:24,destMirrors:3,yoyo:!1})},{start:406,end:406.5,effect:new it({scaleX:1.75,ease:"bounce"})},{start:410,end:410.5,effect:new it({scaleX:.25,ease:"bounce"})},{start:413,end:423,effect:new fn({animationIn:1,animationOut:2.5,displacement:.2})},{start:414,end:420,effect:new Ji({originPow:[3,3,3],originMul:[2,2,2],originAdd:[.35,.27,.5],destPow:[3,3,8],destMul:[2,2,15],destAdd:[.05,.05,.5]})},{start:419,end:423,effect:new $t({originIntensity:2,originRadius:1.12,yoyo:!1})},{start:430,end:430.5,effect:new it({scaleX:2,scaleZ:.65,ease:"bounce"})},{start:430.5,end:431,effect:new it({scaleZ:3,scaleX:.75,scaleY:.63,ease:"bounce"})},{start:434,end:434.5,effect:new it({scaleX:.375,ease:"bounce"})},{start:445,end:449,effect:new Ji({originPow:[3,3,8],originMul:[2,2,15],originAdd:[.05,.05,.5],destPow:[3,8,8],destMul:[2,15,15],destAdd:[.05,.5,.5],yoyo:!0})},{start:446.75,end:447.25,effect:new it({scaleX:3.5,ease:"bounce"})},{start:454,end:460,effect:new $i({audioStrength:.75,thickness:.15,color:new ve(2,0,0)})},{start:467,end:473,effect:new fn({animationIn:.5,animationOut:1.5})},{start:475,end:476,effect:new $t({destIntensity:-3,destRadius:.85,yoyo:!0})},{start:477.5,end:478.5,effect:new $t({destIntensity:-3,destRadius:.85,yoyo:!0})},{start:485.5,end:487,effect:new $t({destIntensity:3,destRadius:1.35,yoyo:!0})},{start:488,end:499,effect:new fn({animationIn:.5,animationOut:1.5,displacement:.065})},{start:503,end:514,effect:new fn({animationIn:.5,animationOut:1.5,displacement:.065})},{start:520,end:521,effect:new $i({audioStrength:1.5,thickness:.15,color:new ve(2,0,0)})},{start:535,end:540,effect:new $i({audioStrength:1.75,thickness:.2,color:new ve(0,0,2)})},{start:553,end:556,effect:new $i({audioStrength:1.5,thickness:.15,color:new ve(2,0,0)})},{start:553.5,end:554,effect:new si({position:50,ease:"bounce"})},{start:553,end:553.5,effect:new it({scaleX:2.3,scaleZ:.75,ease:"bounce-inOut"})},{start:560,end:561,effect:new Ji({originPow:[3,3,8],originMul:[2,2,15],originAdd:[.05,.05,.5],destPow:[3,3,3],destMul:[2,2,2],destAdd:[.05,.05,.05]})}]);this.channels={LateralBars1:e.channelOther,LateralBars2:e.channelBass,LateralOsciloscope:e.channelDrum,Sun:e.channelVocal,SunRays:e.channelVocal,SpiralBars:e.channelSong,SpiralOsciloscope:e.channelVocal}}}class cE{constructor(e){Ct(this,"effects",[]);this.channels={LateralBars1:e.channelOther,LateralBars2:e.channelPiano,LateralOsciloscope:e.channelDrum,Sun:e.channelVocal,SunRays:e.channelVocal,SpiralBars:e.channelSong,SpiralOsciloscope:e.channelVocal}}}class uE{constructor(e){Ct(this,"effects",[]);this.channels={LateralBars1:e.channelOther,LateralBars2:e.channelBass,LateralOsciloscope:e.channelDrum,Sun:e.channelVocal,SunRays:e.channelVocal,SpiralBars:e.channelSong,SpiralOsciloscope:e.channelVocal}}}class hE{constructor(e){Ct(this,"effects",[]);this.channels={LateralBars1:e.channelOther,LateralBars2:e.channelBass,LateralOsciloscope:e.channelDrum,Sun:e.channelVocal,SunRays:e.channelVocal,SpiralBars:e.channelSong,SpiralOsciloscope:e.channelVocal}}}class dE{constructor(e){Ct(this,"effects",[]);this.channels={LateralBars1:e.channelOther,LateralBars2:e.channelBass,LateralOsciloscope:e.channelDrum,Sun:e.channelVocal,SunRays:e.channelVocal,SpiralBars:e.channelSong,SpiralOsciloscope:e.channelVocal}}}class fE{constructor(e){Ct(this,"effects",[]);this.channels={LateralBars1:e.channelOther,LateralBars2:e.channelBass,LateralOsciloscope:e.channelDrum,Sun:e.channelVocal,SunRays:e.channelVocal,SpiralBars:e.channelSong,SpiralOsciloscope:e.channelVocal}}}class pE{constructor(e){Ct(this,"effects",[]);this.channels={LateralBars1:e.channelOther,LateralBars2:e.channelBass,LateralOsciloscope:e.channelDrum,Sun:e.channelVocal,SunRays:e.channelVocal,SpiralBars:e.channelSong,SpiralOsciloscope:e.channelVocal}}}class mE{constructor(e){Ct(this,"effects",[{start:1.5,end:2,effect:new it({scaleX:2,scaleZ:.5,ease:"bounce"})},{start:9,end:9.5,effect:new it({scaleX:.125,scaleZ:2,ease:"bounce"})},{start:17,end:17.5,effect:new it({scaleX:2,scaleZ:.25,ease:"bounce"})},{start:24.5,end:25,effect:new it({scaleX:.125,scaleZ:2,ease:"bounce"})},{start:32.5,end:33,effect:new it({scaleX:2,scaleZ:.25,ease:"bounce"})},{start:40,end:40.5,effect:new it({scaleX:.25,scaleZ:2,ease:"bounce"})},{start:48,end:48.5,effect:new it({scaleX:2,scaleZ:.25,ease:"bounce"})},{start:56,end:56.5,effect:new it({scaleX:.25,scaleZ:2,ease:"bounce"})}]);this.channels={LateralBars1:e.channelOther,LateralBars2:e.channelBass,LateralOsciloscope:e.channelDrum,Sun:e.channelVocal,SunRays:e.channelVocal,SpiralBars:e.channelSong,SpiralOsciloscope:e.channelVocal}}}class gE{constructor(){this.experience=new gt,this.audioAnalizer=this.experience.audioAnalizer,this.killCityKills=new lE(this.audioAnalizer),this.nothingsOver=new cE(this.audioAnalizer),this.oneChance=new uE(this.audioAnalizer),this.quantumOcean=new hE(this.audioAnalizer),this.sixFeetUnder=new dE(this.audioAnalizer),this.theDeep=new fE(this.audioAnalizer),this.alone=new pE(this.audioAnalizer),this.lost=new mE(this.audioAnalizer),this.songChannels=[this.killCityKills.channels,this.nothingsOver.channels,this.oneChance.channels,this.quantumOcean.channels,this.sixFeetUnder.channels,this.theDeep.channels,this.alone.channels,this.lost.channels],this.songsEffects=[this.killCityKills.effects,this.nothingsOver.effects,this.oneChance.effects,this.quantumOcean.effects,this.sixFeetUnder.effects,this.theDeep.effects,this.alone.effects,this.lost.effects]}RecalculateAnimations(e){console.log("recalculate animations");const t=this.experience.currentSong,n=this.experience.song.bpmMS;this.songsEffects[t].forEach(s=>{let r=s.start*n/1e3,a=s.end*n/1e3-r;s.effect.setupAnimation(e,r,a)})}}var _E=`varying vec2 vUv;

void main() {

    
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);\r
    vec4 viewPosition = viewMatrix * modelPosition;\r
    vec4 projectionPosition = projectionMatrix * viewPosition;

    
    gl_Position = projectionPosition;

    
    vUv = uv;\r
}`,vE=`uniform sampler2D uTexture1;\r
uniform float     uActualTexture;\r
uniform float     uTime;\r
uniform float     uAlpha;\r
varying vec2      vUv; 

void main() {\r
    vec4 color1 = texture2D(uTexture1, vUv);\r
    gl_FragColor = vec4((color1.rgb ), color1.a * clamp(uTime, 0.0, uAlpha));

    \r
}`;class xE{constructor(e,t,n=22400,s=12600,r=0,a=0,o=-1e4){this.name=t,this.experience=new gt,this.scene=this.experience.scene,this.world=e,this.setup(n,s,r,a,o)}setup(e,t,n,s,r){this.geometry=new ki(e,t),this.material=new ot({uniforms:{uTexture1:{value:this.experience.resources.items[this.name]},uAlpha:{value:.125},uActualTexture:{value:1},uTime:{value:0}},vertexShader:_E,fragmentShader:vE,transparent:!0}),this.mesh=new dt(this.geometry,this.material),this.mesh.position.set(n,s,r),this.mesh.name=this.name,this.scene.add(this.mesh)}updateBackground(){this.material.uniforms.uTime.value=0,this.material.uniforms.uTexture1.value=this.experience.resources.items[this.name]}update(e){this.material.uniforms.uTime.value+=e}}class yE{constructor(){this.experience=new gt,this.canvas=this.experience.canvas,this.scene=this.experience.scene,this.resources=this.experience.resources,this.camera=this.experience.camera.instance,this.sizes=this.experience.sizes,this.time=this.experience.time,this.ready=!1,this.setup()}setup(){this.group=new Ri,this.scene.add(this.group),this.backgroundPosition=0,this.background=new xE(this,"background1"),this.group.position.z=5}setQuality(){Pr.ticker.remove(Pr.updateRoot),this.timeline=Pr.timeline(),this.spirals=new IS(this),this.sun=new NS(this),this.raysToHole=new kS,this.hmlBars=new GS(this),this.hmlOsciloscope=new qS(this),this.bpmEffects=new gE(this),this.songChannels=this.bpmEffects.songChannels[this.experience.currentSong],this.update=this.updateQuality}resourcesLoaded(){this.background.updateBackground(),this.ready=!0}update(e){const t=e/1e3;this.background.update(t),this.background.mesh.rotation.z+=t/75,this.group.rotation.z+=e/7500}updateQuality(){const e=this.time.delta/1e3;this.background.update(e),this.background.mesh.rotation.z+=e/75,this.timeline.time(this.experience.audioAnalizer.channelSong.song.currentTime),this.spirals.update(e),this.sun.update(e),this.raysToHole.update(),this.hmlOsciloscope.update(e),this.hmlBars.update(e),this.group.rotation.z+=this.time.delta/7500}asociateChannels(){this.songChannels=this.bpmEffects.songChannels[this.experience.currentSong],this.hmlBars.material.uniforms.uAudioTexture.value=this.songChannels.LateralBars1.bufferCanvasLinear.texture,this.hmlBars.material.uniforms.uAudioTexture2.value=this.songChannels.LateralBars2.bufferCanvasLinear.texture,this.hmlOsciloscope.material.uniforms.uAudioTexture.value=this.songChannels.LateralOsciloscope.bufferCanvasLinear.texture,this.sun.material.uniforms.uAudioTexture.value=this.songChannels.Sun.bufferCanvasLinear.texture,this.spirals.material.uniforms.uAudioTexture.value=this.songChannels.SpiralBars.bufferCanvasLinear.texture,this.spirals.material.uniforms.uAudioTexture2.value=this.songChannels.SpiralOsciloscope.bufferCanvasLinear.texture}setupSong(){this.asociateChannels(),this.timeline.kill(),this.timeline=Pr.timeline(),this.bpmEffects.RecalculateAnimations(this.timeline)}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class Vn{constructor(e,t,n,s,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),Vn.nextNameID=Vn.nextNameID||0,this.$name.id=`lil-gui-name-${++Vn.nextNameID}`,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class SE extends Vn{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Ol(i){let e,t;return(e=i.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const ME={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:Ol,toHexString:Ol},qr={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},EE={isPrimitive:!1,match:Array.isArray,fromHexString(i,e,t=1){const n=qr.fromHexString(i);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([i,e,t],n=1){n=255/n;const s=i*n<<16^e*n<<8^t*n<<0;return qr.toHexString(s)}},TE={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,e,t=1){const n=qr.fromHexString(i);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:i,g:e,b:t},n=1){n=255/n;const s=i*n<<16^e*n<<8^t*n<<0;return qr.toHexString(s)}},AE=[ME,qr,EE,TE];function bE(i){return AE.find(e=>e.match(i))}class wE extends Vn{constructor(e,t,n,s){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=bE(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Ol(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class sl extends Vn{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class RE extends Vn{constructor(e,t,n,s,r,a){super(e,t,n,"number"),this._initInput(),this.min(s),this.max(r);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let f=parseFloat(this.$input.value);isNaN(f)||(this._stepExplicit&&(f=this._snap(f)),this.setValue(this._clamp(f)))},t=f=>{const y=parseFloat(this.$input.value);isNaN(y)||(this._snapClampSetValue(y+f),this.$input.value=this.getValue())},n=f=>{f.code==="Enter"&&this.$input.blur(),f.code==="ArrowUp"&&(f.preventDefault(),t(this._step*this._arrowKeyMultiplier(f))),f.code==="ArrowDown"&&(f.preventDefault(),t(this._step*this._arrowKeyMultiplier(f)*-1))},s=f=>{this._inputFocused&&(f.preventDefault(),t(this._step*this._normalizeMouseWheel(f)))};let r=!1,a,o,l,c,u;const h=5,d=f=>{a=f.clientX,o=l=f.clientY,r=!0,c=this.getValue(),u=0,window.addEventListener("mousemove",p),window.addEventListener("mouseup",_)},p=f=>{if(r){const y=f.clientX-a,v=f.clientY-o;Math.abs(v)>h?(f.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(y)>h&&_()}if(!r){const y=f.clientY-l;u-=y*this._step*this._arrowKeyMultiplier(f),c+u>this._max?u=this._max-c:c+u<this._min&&(u=this._min-c),this._snapClampSetValue(c+u)}l=f.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",_)},g=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",g),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(f,y,v,S,M)=>(f-y)/(v-y)*(M-S)+S,t=f=>{const y=this.$slider.getBoundingClientRect();let v=e(f,y.left,y.right,this._min,this._max);this._snapClampSetValue(v)},n=f=>{this._setDraggingStyle(!0),t(f.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=f=>{t(f.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)};let a=!1,o,l;const c=f=>{f.preventDefault(),this._setDraggingStyle(!0),t(f.touches[0].clientX),a=!1},u=f=>{f.touches.length>1||(this._hasScrollBar?(o=f.touches[0].clientX,l=f.touches[0].clientY,a=!0):c(f),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",d))},h=f=>{if(a){const y=f.touches[0].clientX-o,v=f.touches[0].clientY-l;Math.abs(y)>Math.abs(v)?c(f):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d))}else f.preventDefault(),t(f.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d)},p=this._callOnFinishChange.bind(this),_=400;let g;const m=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const v=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+v),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(p,_)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class CE extends Vn{constructor(e,t,n,s){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(s)?s:Object.values(s),this._names=Array.isArray(s)?s:Object.keys(s),this._names.forEach(r=>{const a=document.createElement("option");a.innerHTML=r,this.$select.appendChild(a)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class PE extends Vn{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const LE=`.lil-gui {
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
}`;function DE(i){const e=document.createElement("style");e.innerHTML=i;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Bh=!1;class xc{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:s,title:r="Controls",injectStyles:a=!0,touchStyles:o=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{(l.code==="Enter"||l.code==="Space")&&(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),o&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!Bh&&a&&(DE(LE),Bh=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(e,t,n,s,r){if(Object(n)===n)return new CE(this,e,t,n);const a=e[t];switch(typeof a){case"number":return new RE(this,e,t,n,s,r);case"boolean":return new SE(this,e,t);case"string":return new PE(this,e,t);case"function":return new sl(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new wE(this,e,t,n)}addFolder(e){return new xc({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof sl||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof sl)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}class IE{constructor(){this.experience=new gt,this.setup()}setup(){this.gui=new xc({width:300,container:this.experience.htmlElements.elementExperience}),this.setupAudioChannels(),this.setupSpirals(),this.setupSun(),this.setupLateralBars(),this.setupLateralOsciloscope(),this.setupPostProcessingPmndrs(),this.setupBloomPmndrs(),this.setupGodRaysPmndrs(),this.setupColorCorrectionPmndrs()}setupLateralBars(e=!1){this.lateralBars=this.experience.world.hmlBars,this.lateralBarsUI=this.gui.addFolder("Lateral Bars").open(e),this.lateralBarsUI.add(this.experience.options,"barsAudioStrength").min(0).max(8).step(.1).name("Audio strength").onChange(()=>{this.lateralBars.material.uniforms.uAudioStrength.value=this.experience.options.barsAudioStrength}),this.lateralBarsUI.add(this.experience.options,"barsAudioZoom").min(0).max(8).step(.1).name("Audio zoom").onChange(()=>{this.lateralBars.material.uniforms.uAudioZoom.value=this.experience.options.barsAudioZoom}),this.lateralBarsUI.add(this.experience.options,"barsSpeed").min(.01).max(8).step(.1).name("Speed").onChange(()=>{this.lateralBars.material.uniforms.uSpeed.value=this.experience.options.barsSpeed})}setupLateralOsciloscope(e=!1){this.lateralOsciloscope=this.experience.world.hmlOsciloscope,this.lateralOsciloscopeUI=this.gui.addFolder("Lateral Osciloscope").open(e),this.lateralOsciloscopeUI.add(this.experience.options,"hmsOsciloscopeAudioStrength").min(0).max(8).step(.1).name("Audio strength").onChange(()=>{this.lateralOsciloscope.material.uniforms.uAudioStrength.value=this.experience.options.hmsOsciloscopeAudioStrength}),this.lateralOsciloscopeUI.add(this.experience.options,"hmsOsciloscopeSpeed").min(.01).max(8).step(.1).name("Speed").onChange(()=>{this.lateralOsciloscope.material.uniforms.uSpeed.value=this.experience.options.hmsOsciloscopeSpeed})}setupAudioChannels(e=!1){this.world=this.experience.world,this.audioAnalizer=this.experience.audioAnalizer,this.audioChannels=this.gui.addFolder("Audio Channels").open(e),this.fftOptions={32768:32768,16384:16384,8192:8192,4096:4096,2048:2048,1024:1024,512:512},this.fftSize={value:this.experience.options.audioFFTSize},this.channelOptions={All:0,Bass:1,Drum:2,Other:3,Piano:4,Vocal:5},this.LateralBar1={value:"Other"},this.LateralBar2={value:"Bass"},this.LateralOsciloscope={value:"Drum"},this.Sun1={value:"Vocal"},this.Sun2={value:"Vocal"},this.SpiralBars={value:"All"},this.SpiralOsciloscope={value:"Vocal"},this.audioChannels.add(this.LateralBar1,"value",this.channelOptions).name("Lateral bars 1").onChange(()=>{this.world.hmlBars.material.uniforms.uAudioTexture.value=this.audioAnalizer.channels[this.LateralBar1.value].bufferCanvasLinear.texture}),this.audioChannels.add(this.LateralBar2,"value",this.channelOptions).name("Lateral bars 2").onChange(()=>{this.world.hmlBars.material.uniforms.uAudioTexture2.value=this.audioAnalizer.channels[this.LateralBar2.value].bufferCanvasLinear.texture}),this.audioChannels.add(this.LateralOsciloscope,"value",this.channelOptions).name("Lateral osciloscope").onChange(()=>{this.world.hmlOsciloscope.material.uniforms.uAudioTexture.value=this.audioAnalizer.channels[this.LateralOsciloscope.value].bufferCanvasLinear.texture}),this.audioChannels.add(this.Sun1,"value",this.channelOptions).name("Sun").onChange(()=>{this.world.sun.material.uniforms.uAudioTexture.value=this.audioAnalizer.channels[this.Sun1.value].bufferCanvasLinear.texture}),this.audioChannels.add(this.Sun2,"value",this.channelOptions).name("Sun rays").onChange(()=>{this.world.sun.material.uniforms.uAudioTexture.value=this.audioAnalizer.channels[this.Sun2.value].bufferCanvasLinear.texture}),this.audioChannels.add(this.SpiralBars,"value",this.channelOptions).name("Spiral bars").onChange(()=>{this.world.spirals.material.uniforms.uAudioTexture.value=this.audioAnalizer.channels[this.SpiralBars.value].bufferCanvasLinear.texture}),this.audioChannels.add(this.SpiralOsciloscope,"value",this.channelOptions).name("Spiral osciloscope").onChange(()=>{this.world.spirals.material.uniforms.uAudioTexture2.value=this.audioAnalizer.channels[this.SpiralOsciloscope.value].bufferCanvasLinear.texture}),this.audioChannels.add(this.fftSize,"value",this.fftOptions).name("Fast fourier transform size").onChange(()=>{this.experience.audioAnalizer.setFFTSize(this.fftSize.value),this.experience.world.asociateChannels()})}setupPostProcessingPmndrs(e=!1){this.postProcessingPmndrs=this.gui.addFolder("Post processing (Pmndrs)").open(e)}setupBloomPmndrs(e=!1){e===!0&&this.postProcessingPmndrs.open(!0),this.bloomPmndrs=this.experience.renderer.bloomEffect,this.bloomPmndrsUI=this.postProcessingPmndrs.addFolder("Bloom").open(e),this.bloomPmndrsUI.add(this.experience.options,"bloomPmndrsIntensity").min(-3).max(3).step(.01).name("Intensity").onChange(()=>{this.bloomPmndrs.intensity=this.experience.options.bloomPmndrsIntensity}),this.bloomPmndrsUI.add(this.experience.options,"bloomPmndrsThreshold").min(-35).max(35).step(.01).name("Threshold").onChange(()=>{this.bloomPmndrs.luminanceMaterial.uniforms.threshold.value=this.experience.options.bloomPmndrsThreshold}),this.bloomPmndrsUI.add(this.experience.options,"bloomPmndrsSmoothing").min(-35).max(35).step(.01).name("Smoothing").onChange(()=>{this.bloomPmndrs.luminanceMaterial.uniforms.smoothing.value=this.experience.options.bloomPmndrsSmoothing}),this.bloomPmndrsUI.add(this.experience.options,"bloomPmndrsRadius").min(-3).max(3).step(.01).name("Radius").onChange(()=>{this.bloomPmndrs.mipmapBlurPass.radius=this.experience.options.bloomPmndrsRadius})}setupGodRaysPmndrs(e=!1){e===!0&&this.postProcessingPmndrs.open(!0),this.godRaysPmndrs=this.experience.renderer.godRaysEffect,this.godRaysPmndrsUI=this.postProcessingPmndrs.addFolder("God Rays").open(e),this.godRaysPmndrsUI.add(this.experience.options,"godRaysDensity").min(-5).max(5).step(.1).name("Density").onChange(()=>{this.godRaysPmndrs.godRaysMaterial.density=this.experience.options.godRaysDensity}),this.godRaysPmndrsUI.add(this.experience.options,"godRaysDecay").min(0).max(1).step(.01).name("Decay").onChange(()=>{this.godRaysPmndrs.godRaysMaterial.decay=this.experience.options.godRaysDecay}),this.godRaysPmndrsUI.add(this.experience.options,"godRaysWeigth").min(-5).max(5).step(.1).name("Weigth").onChange(()=>{this.godRaysPmndrs.godRaysMaterial.weight=this.experience.options.godRaysWeigth}),this.godRaysPmndrsUI.add(this.experience.options,"godRaysExposure").min(-5).max(5).step(.1).name("Exposure").onChange(()=>{this.godRaysPmndrs.godRaysMaterial.weight=this.experience.options.godRaysExposure}),this.godRaysPmndrsUI.add(this.experience.options,"godRaysClampMax").min(-5).max(5).step(.1).name("Max intensity").onChange(()=>{this.godRaysPmndrs.godRaysMaterial.clampMax=this.experience.options.godRaysClampMax}),this.godRaysPmndrsUI.add(this.experience.options,"godRaysSamples").min(1).max(200).step(1).name("Samples").onChange(()=>{this.godRaysPmndrs.godRaysMaterial.samples=this.experience.options.godRaysSamples})}setupColorCorrectionPmndrs(e=!1){e===!0&&this.postProcessingPmndrs.open(!0),this.colorCorrectionPmndrs=this.experience.renderer.colorCorrectionEffect,this.colorCorrectionPmndrsUI=this.postProcessingPmndrs.addFolder("Color correction (custom)").open(e),this.colorCorrectionPmndrsUI.add(this.experience.options.colorCorrectionPowRGB,"x").min(0).max(15).step(.1).name("Power R").onChange(()=>{this.colorCorrectionPmndrs.uniforms.get("powRGB").value.x=this.experience.options.colorCorrectionPowRGB.x}),this.colorCorrectionPmndrsUI.add(this.experience.options.colorCorrectionPowRGB,"y").min(0).max(15).step(.1).name("Power G").onChange(()=>{this.colorCorrectionPmndrs.uniforms.get("powRGB").value.y=this.experience.options.colorCorrectionPowRGB.y}),this.colorCorrectionPmndrsUI.add(this.experience.options.colorCorrectionPowRGB,"z").min(0).max(15).step(.1).name("Power B").onChange(()=>{this.colorCorrectionPmndrs.uniforms.get("powRGB").value.z=this.experience.options.colorCorrectionPowRGB.z}),this.colorCorrectionPmndrsUI.add(this.experience.options.colorCorrectionMulRGB,"x").min(0).max(15).step(.1).name("Multiplier R").onChange(()=>{this.colorCorrectionPmndrs.uniforms.get("mulRGB").value.x=this.experience.options.colorCorrectionMulRGB.x}),this.colorCorrectionPmndrsUI.add(this.experience.options.colorCorrectionMulRGB,"y").min(0).max(15).step(.1).name("Multiplier G").onChange(()=>{this.colorCorrectionPmndrs.uniforms.get("mulRGB").value.y=this.experience.options.colorCorrectionMulRGB.y}),this.colorCorrectionPmndrsUI.add(this.experience.options.colorCorrectionMulRGB,"z").min(0).max(15).step(.1).name("Multiplier B").onChange(()=>{this.colorCorrectionPmndrs.uniforms.get("mulRGB").value.z=this.experience.options.colorCorrectionMulRGB.z}),this.colorCorrectionPmndrsUI.add(this.experience.options.colorCorrectionAddRGB,"x").min(0).max(1).step(.01).name("Add extra R").onChange(()=>{this.colorCorrectionPmndrs.uniforms.get("addRGB").value.x=this.experience.options.colorCorrectionAddRGB.x}),this.colorCorrectionPmndrsUI.add(this.experience.options.colorCorrectionAddRGB,"y").min(0).max(1).step(.01).name("Add extra G").onChange(()=>{this.colorCorrectionPmndrs.uniforms.get("addRGB").value.y=this.experience.options.colorCorrectionAddRGB.y}),this.colorCorrectionPmndrsUI.add(this.experience.options.colorCorrectionAddRGB,"z").min(0).max(1).step(.01).name("Add extra B").onChange(()=>{this.colorCorrectionPmndrs.uniforms.get("addRGB").value.z=this.experience.options.colorCorrectionAddRGB.z})}setupSun(e=!1){this.sun=this.experience.world.sun,this.SunUI=this.gui.addFolder("Sun").open(e),this.SunUI.add(this.experience.options,"sunAudioStrengthSin").min(0).max(8).step(.1).name("Audio strength").onChange(()=>{this.sun.material.uniforms.uAudioStrengthSin.value=this.experience.options.sunAudioStrengthSin}),this.SunUI.add(this.experience.options,"sunAudioStrengthFreq").min(0).max(8).step(.1).name("Audio strength plasma").onChange(()=>{this.sun.material.uniforms.uAudioStrengthFreq.value=this.experience.options.sunAudioStrengthFreq}),this.SunUI.add(this.experience.options,"sunNoiseStrength").min(0).max(32).step(.1).name("Perlin noise strength").onChange(()=>{this.sun.material.uniforms.uNoiseStrength.value=this.experience.options.sunNoiseStrength}),this.SunUI.add(this.experience.options,"sunNoiseSpeed").min(0).max(4).step(.1).name("Perlin noise speed").onChange(()=>{this.sun.material.uniforms.uNoiseSpeed.value=this.experience.options.sunNoiseSpeed})}setupSpirals(e=!1){this.spirals=this.experience.world.spirals,this.spiralBarsUI=this.gui.addFolder("Spiral Bars").open(e),this.spiralBarsUI.add(this.experience.options,"spiralAudioStrength").min(0).max(8).step(.1).name("Audio strength").onChange(()=>{this.spirals.material.uniforms.uAudioStrength.value=this.experience.options.spiralAudioStrength}),this.spiralBarsUI.add(this.experience.options,"spiralAudioZoom").min(0).max(8).step(.1).name("Audio zoom").onChange(()=>{this.spirals.material.uniforms.uAudioZoom.value=this.experience.options.spiralAudioZoom}),this.spiralBarsUI.add(this.experience.options,"spiralFrequency").min(0).max(4).step(.1).name("Frequency").onChange(()=>{this.spirals.material.uniforms.uFrequency.value=this.experience.options.spiralFrequency}),this.spiralBarsUI.add(this.experience.options,"spiralSpeed").min(0).max(4).step(.01).name("Speed").onChange(()=>{this.spirals.material.uniforms.uSpeed.value=this.experience.options.spiralSpeed}),this.spiralBarsUI.add(this.experience.options,"spiralThickness").min(.01).max(.99).step(.001).name("Thickness").onChange(()=>{this.spirals.material.uniforms.uThickness.value=this.experience.options.spiralThickness}),this.spiralBarsUI.add(this.experience.options,"spiralMirrors").min(1).max(100).step(1).name("Mirrors").onChange(()=>{this.spirals.material.uniforms.uMirrors.value=this.experience.options.spiralMirrors}),this.spiralOsciloscopeUI=this.gui.addFolder("Spiral Osciloscope").open(e),this.spiralOsciloscopeUI.add(this.experience.options,"spiralAudioStrengthSin").min(0).max(8).step(.1).name("Audio strength").onChange(()=>{this.spirals.material.uniforms.uAudioStrengthSin.value=this.experience.options.spiralAudioStrengthSin}),this.spiralOsciloscopeUI.add(this.experience.options,"spiralAudioZoomSin").min(0).max(8).step(.1).name("Audio zoom").onChange(()=>{this.spirals.material.uniforms.uAudioZoomSin.value=this.experience.options.spiralAudioZoomSin}),this.spiralOsciloscopeUI.add(this.experience.options,"spiralFrequencySin").min(0).max(4).step(.1).name("Frequency").onChange(()=>{this.spirals.material.uniforms.uFrequencySin.value=this.experience.options.spiralFrequencySin}),this.spiralOsciloscopeUI.add(this.experience.options,"spiralSpeedSin").min(0).max(4).step(.01).name("Speed").onChange(()=>{this.spirals.material.uniforms.uSpeedSin.value=this.experience.options.spiralSpeedSin}),this.spiralOsciloscopeUI.add(this.experience.options,"spiralThicknessSin").min(.01).max(.99).step(.001).name("Thickness").onChange(()=>{this.spirals.material.uniforms.uThicknessSin.value=this.experience.options.spiralThicknessSin})}}function zh(i,e){if(e===Up)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===fl||e===ld){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===fl)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class UE extends mr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new zE(t)}),this.register(function(t){return new YE(t)}),this.register(function(t){return new jE(t)}),this.register(function(t){return new $E(t)}),this.register(function(t){return new HE(t)}),this.register(function(t){return new VE(t)}),this.register(function(t){return new GE(t)}),this.register(function(t){return new WE(t)}),this.register(function(t){return new BE(t)}),this.register(function(t){return new XE(t)}),this.register(function(t){return new kE(t)}),this.register(function(t){return new qE(t)}),this.register(function(t){return new NE(t)}),this.register(function(t){return new KE(t)}),this.register(function(t){return new ZE(t)})}load(e,t,n,s){const r=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=xl.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ud(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Xf){try{a[Ge.KHR_BINARY_GLTF]=new JE(e)}catch(h){s&&s(h);return}r=JSON.parse(a[Ge.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new hT(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case Ge.KHR_MATERIALS_UNLIT:a[h]=new FE;break;case Ge.KHR_DRACO_MESH_COMPRESSION:a[h]=new QE(r,this.dracoLoader);break;case Ge.KHR_TEXTURE_TRANSFORM:a[h]=new eT;break;case Ge.KHR_MESH_QUANTIZATION:a[h]=new tT;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function OE(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ge={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class NE{constructor(e){this.parser=e,this.name=Ge.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new ve(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new zx(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Fx(u),c.distance=h;break;case"spot":c=new Ox(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,wi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class FE{constructor(){this.name=Ge.KHR_MATERIALS_UNLIT}getMaterialType(){return ss}extendParams(e,t,n){const s=[];e.color=new ve(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Te))}return Promise.all(s)}}class BE{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class zE{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new pe(o,o)}return Promise.all(r)}}class kE{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class HE{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ve(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Te)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class VE{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class GE{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new ve(o[0],o[1],o[2]),Promise.all(r)}}class WE{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class XE{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new ve(o[0],o[1],o[2]),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Te)),Promise.all(r)}}class qE{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class YE{constructor(e){this.parser=e,this.name=Ge.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class jE{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class $E{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class KE{constructor(e){this.name=Ge.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(p),u,h,d,s.mode,s.filter),p})})}else return null}}class ZE{constructor(e){this.name=Ge.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==gn.TRIANGLES&&c.mode!==gn.TRIANGLE_STRIP&&c.mode!==gn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,p=[];for(const _ of h){const g=new Ne,m=new L,f=new Xn,y=new L(1,1,1),v=new _x(_.geometry,_.material,d);for(let S=0;S<d;S++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,S),l.SCALE&&y.fromBufferAttribute(l.SCALE,S),v.setMatrixAt(S,g.compose(m,f,y));for(const S in l)S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&_.geometry.setAttribute(S,l[S]);at.prototype.copy.call(v,_),this.parser.assignFinalMaterial(v),p.push(v)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Xf="glTF",br=12,kh={JSON:1313821514,BIN:5130562};class JE{constructor(e){this.name=Ge.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,br),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Xf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-br,r=new DataView(e,br);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===kh.JSON){const c=new Uint8Array(e,br+a,o);this.content=n.decode(c)}else if(l===kh.BIN){const c=br+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class QE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ge.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=Nl[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=Nl[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[e.attributes[u]],p=$s[d.componentType];c[h]=p.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){s.decodeDracoFile(u,function(d){for(const p in d.attributes){const _=d.attributes[p],g=l[p];g!==void 0&&(_.normalized=g)}h(d)},o,c)})})}}class eT{constructor(){this.name=Ge.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class tT{constructor(){this.name=Ge.KHR_MESH_QUANTIZATION}}class qf extends $r{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-t,h=(n-t)/u,d=h*h,p=d*h,_=e*c,g=_-c,m=-2*p+3*d,f=p-d,y=1-m,v=f-d+h;for(let S=0;S!==o;S++){const M=a[g+S+o],w=a[g+S+l]*u,T=a[_+S+o],C=a[_+S]*u;r[S]=y*M+v*w+m*T+f*C}return r}}const nT=new Xn;class iT extends qf{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return nT.fromArray(r).normalize().toArray(r),r}}const gn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},$s={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Hh={9728:ct,9729:Lt,9984:dl,9985:td,9986:Pa,9987:Ni},Vh={33071:_n,33648:Fa,10497:Js},rl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Nl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ti={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},sT={CUBICSPLINE:void 0,LINEAR:er,STEP:Fr},al={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function rT(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new $l({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gn})),i.DefaultMaterial}function Qi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function wi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function aT(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function oT(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function lT(i){let e;const t=i.extensions&&i.extensions[Ge.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ol(t.attributes):e=i.indices+":"+ol(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+ol(i.targets[n]);return e}function ol(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Fl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function cT(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const uT=new Ne;class hT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new OE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||s&&r<98?this.textureLoader=new Od(this.options.manager):this.textureLoader=new kx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ud(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};Qi(r,o,s),wi(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())r(u,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ge.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(xl.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=rl[s.type],o=$s[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Tt(c,a,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=rl[s.type],c=$s[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,_=s.normalized===!0;let g,m;if(p&&p!==h){const f=Math.floor(d/p),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+f+":"+s.count;let v=t.cache.get(y);v||(g=new c(o,f*p,s.count*p/u),v=new hx(g,p/u),t.cache.add(y,v)),m=new Xl(v,l,d%p/u,_)}else o===null?g=new c(s.count*l):g=new c(o,d,s.count*l),m=new Tt(g,l,_);if(s.sparse!==void 0){const f=rl.SCALAR,y=$s[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,S=s.sparse.values.byteOffset||0,M=new y(a[1],v,s.sparse.count*f),w=new c(a[2],S,s.sparse.count*l);o!==null&&(m=new Tt(m.array.slice(),m.itemSize,m.normalized));for(let T=0,C=M.length;T<C;T++){const x=M[T];if(m.setX(x,w[T*l]),l>=2&&m.setY(x,w[T*l+1]),l>=3&&m.setZ(x,w[T*l+2]),l>=4&&m.setW(x,w[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return u.magFilter=Hh[d.magFilter]||Lt,u.minFilter=Hh[d.minFilter]||Ni,u.wrapS=Vh[d.wrapS]||Js,u.wrapT=Vh[d.wrapT]||Js,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=s.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,p){let _=d;t.isImageBitmapLoader===!0&&(_=function(g){const m=new St(g);m.needsUpdate=!0,d(m)}),t.load(xl.resolveURL(h,r.path),_,void 0,p)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),h.userData.mimeType=a.mimeType||cT(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ge.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ge.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Ge.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Pd,Mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Cd,Mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return $l}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[Ge.KHR_MATERIALS_UNLIT]){const h=s[Ge.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new ve(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.fromArray(d),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Te)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Dt);const u=r.alphaMode||al.OPAQUE;if(u===al.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===al.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==ss&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new pe(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&a!==ss&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==ss&&(o.emissive=new ve().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&a!==ss&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Te)),Promise.all(c).then(function(){const h=new a(o);return r.name&&(h.name=r.name),wi(h,r),t.associations.set(h,{materials:e}),r.extensions&&Qi(s,h,r),h})}createUniqueName(e){const t=Ke.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Ge.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Gh(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=lT(c),h=s[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[Ge.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Gh(new An,c,t),s[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?rT(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,_=u.length;p<_;p++){const g=u[p],m=a[p];let f;const y=c[p];if(m.mode===gn.TRIANGLES||m.mode===gn.TRIANGLE_STRIP||m.mode===gn.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new fx(g,y):new dt(g,y),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===gn.TRIANGLE_STRIP?f.geometry=zh(f.geometry,ld):m.mode===gn.TRIANGLE_FAN&&(f.geometry=zh(f.geometry,fl));else if(m.mode===gn.LINES)f=new vx(g,y);else if(m.mode===gn.LINE_STRIP)f=new Yl(g,y);else if(m.mode===gn.LINE_LOOP)f=new xx(g,y);else if(m.mode===gn.POINTS)f=new yx(g,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&oT(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),wi(f,r),m.extensions&&Qi(s,f,m),t.assignFinalMaterial(f),h.push(f)}for(let p=0,_=h.length;p<_;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&Qi(s,h[0],r),h[0];const d=new Ri;r.extensions&&Qi(s,d,r),t.associations.set(d,{meshes:e});for(let p=0,_=h.length;p<_;p++)d.add(h[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ft(ka.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Vl(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),wi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const d=new Ne;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ql(o,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const p=s.channels[h],_=s.samplers[p.sampler],g=p.target,m=g.node,f=s.parameters!==void 0?s.parameters[_.input]:_.input,y=s.parameters!==void 0?s.parameters[_.output]:_.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",y)),c.push(_),u.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],p=h[1],_=h[2],g=h[3],m=h[4],f=[];for(let y=0,v=d.length;y<v;y++){const S=d[y],M=p[y],w=_[y],T=g[y],C=m[y];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const x=n._createAnimationTracks(S,M,w,T,C);if(x)for(let A=0;A<x.length;A++)f.push(x[A])}return new wx(r,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,uT)});for(let p=0,_=h.length;p<_;p++)u.add(h[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new Rd:c.length>1?u=new Ri:c.length===1?u=c[0]:u=new at,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),wi(u,r),r.extensions&&Qi(n,u,r),r.matrix!==void 0){const h=new Ne;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Ri;n.name&&(r.name=s.createUniqueName(n.name)),wi(r,n),n.extensions&&Qi(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[d,p]of s.associations)(d instanceof Mn||d instanceof St)&&h.set(d,p);return u.traverse(d=>{const p=s.associations.get(d);p!=null&&h.set(d,p)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,l=[];Ti[r.path]===Ti.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Ti[r.path]){case Ti.weights:c=ir;break;case Ti.rotation:c=fs;break;case Ti.position:case Ti.scale:c=sr;break;default:switch(n.itemSize){case 1:c=ir;break;case 2:case 3:default:c=sr;break}break}const u=s.interpolation!==void 0?sT[s.interpolation]:er,h=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){const _=new c(l[d]+"."+Ti[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Fl(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof fs?iT:qf;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function dT(i,e,t){const n=e.attributes,s=new mi;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),o.normalized){const u=Fl($s[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new L,l=new L;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],p=d.min,_=d.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),d.normalized){const g=Fl($s[d.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new jn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Gh(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(const a in n){const o=Nl[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return wi(i,e),dT(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?aT(i,e.targets,t):i})}class fT extends ec{constructor(e){super(),this.sources=e,this.items={},this.toLoad=this.sources.length,this.loaded=0,this.setLoaders(),this.startLoading()}setLoaders(){this.loaders={gltfLoader:new UE,textureLoader:new Od}}startLoading(){for(const e of this.sources)e.type==="gltfModel"?this.loaders.gltfLoader.load(e.path,t=>{this.sourceLoaded(e,t)}):e.type==="texture"&&this.loaders.textureLoader.load(e.path,t=>{this.sourceLoaded(e,t)})}sourceLoaded(e,t){this.items[e.name]=t,this.loaded++,this.loaded==this.toLoad&&this.trigger("ready")}get finished(){return this.loaded==this.toLoad}}const pT=[{name:"background1",type:"texture",path:"./textures/1.webp"}];class mT{constructor(e,t){this.canvas=document.createElement("canvas"),this.canvas.setAttribute("width",e),this.canvas.setAttribute("height",t),this.canvas.className="Experience_DebugAverages",this.context=this.canvas.getContext("2d",{willReadFrequently:!1}),this.width=e,this.height=t,this.experience=new gt,this.experience.htmlElements.elementExperience.appendChild(this.canvas),this.audioAnalizer=this.experience.audioAnalizer,this.context.fillStyle="white",this.context.fillText("song",10,this.height-5),this.context.fillText("bass",60,this.height-5),this.context.fillText("drum",110,this.height-5),this.context.fillText("other",160,this.height-5),this.context.fillText("piano",210,this.height-5),this.context.fillText("voice",260,this.height-5),this.peaks=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]}update(){let e=this.height-20;this.context.clearRect(0,0,this.width,e+1);for(let t=0;t<this.audioAnalizer.totalChannels;t++){const n=this.audioAnalizer.channels[t].averageFrequency,s=this.audioAnalizer.channels[t].averageFrequencyPeaks;let r=n[0]*e,a=n[1]*e,o=n[2]*e,l=n[4]*e;this.context.fillStyle="red",this.context.fillRect(50*t+1,e-r,10,r),this.context.fillRect(50*t+12,e-a,10,a),this.context.fillRect(50*t+23,e-o,10,o),this.context.fillRect(50*t+34,e-l,10,l),this.context.fillStyle="white",this.context.fillRect(50*t+1,e-s[0]*e,10,-2),this.context.fillRect(50*t+12,e-s[1]*e,10,-2),this.context.fillRect(50*t+23,e-s[2]*e,10,-2),this.context.fillRect(50*t+34,e-s[4]*e,10,-2)}}}let ll=null;class gt{constructor(){Ct(this,"onAudioPlay",()=>{this.htmlElements.audioUI(!1)});Ct(this,"onAudioPause",()=>{this.htmlElements.audioUI(!0)});Ct(this,"onAudioEnded",()=>{this.htmlElements.audioUI(!0),this.beats=0,this.options.showBPM===!0&&(this.htmlElements.elementDebugEffects.innerHTML="")});Ct(this,"onAudioTimeUpdate",e=>{this.htmlElements.dragTime==!1&&(this.htmlElements.elementAudioTime.value=e)});Ct(this,"onAudioDurationChange",e=>{this.options.debug===!0&&this.htmlElements.elementAudioTime.setAttribute("max",e),this.song.bpmMS=6e4/this.song.bpm,this.options.showBPM===!0&&(this.htmlElements.elementTxtBPM.innerHTML=Math.floor(this.song.bpmMS))});Ct(this,"onAudioError",()=>{this.songLoading=!1,this.beats=0,this.setLoading(),this.htmlElements.audioUI(!0),window.alert("error loading : "+this.song.path)});Ct(this,"onAudioCanPlay",()=>{this.songLoading===!0&&this.world.setupSong(),this.songLoading=!1,this.beats=0,this.setLoading()});Ct(this,"onAudioLoading",()=>{this.songLoading=!0,this.setLoading(),this.htmlElements.audioUI(!0)});Ct(this,"onAudioBpmChange",e=>{this.options.showBPM===!0&&(this.htmlElements.elementBPM.innerHTML=e)});if(ll)return ll;ll=this,this.songs=Kx,this.currentSong=0,this.song=this.songs[this.currentSong],this.songLoading=!0,this.options=bi,this.sizes=new Zx,this.htmlElements=new Da,this.time=new Jx,this.resources=new fT(pT),this.loading=!0,this.audioAnalizerOptions={onPlay:this.onAudioPlay,onPause:this.onAudioPause,onTimeUpdate:this.options.debug?this.onAudioTimeUpdate:function(){},onDurationChange:this.onAudioDurationChange,onEnded:this.onAudioEnded,onError:this.onAudioError,onCanPlay:this.onAudioCanPlay,onLoading:this.onAudioLoading,onBpmChange:this.onAudioBpmChange,allowDropSong:this.options.songsDragDrop,volume:this.options.audioVolume,fftSize:this.options.audioFFTSize},this.canvas=this.htmlElements.elementCanvas,this.scene=new Ha,this.camera=new sy,this.world=new yE,this.renderer=new PS,this.options.debug===!1&&(this.updateDebug=()=>{}),this.sizes.on("resize",()=>{this.resize()}),this.time.on("tick",()=>{this.update()}),this.resources.on("ready",()=>{this.resourcesLoaded()}),this.beats=0,this.time.measureQuality()}recomended(e){e>50?typeof this.htmlElements.elementQualityHigh<"u"&&this.htmlElements.elementQualityHigh.setAttribute("recomended","true"):typeof this.htmlElements.elementQualityLow<"u"&&this.htmlElements.elementQualityLow.setAttribute("recomended","true")}setQuality(e="high"){e==="low"&&(this.options.audioFFTSize=1024,this.options.audioMultiChannel=!1),this.setLoading=this.setLoadingAudio,this.setLoading(),this.options.audioMultiChannel===!0?this.audioAnalizer=new ty(this.audioAnalizerOptions):this.audioAnalizer=new ey(this.audioAnalizerOptions),this.world.setQuality(),this.renderer.setGodRays(this.world.sun.mesh),this.audioAnalizer.loadSong(this.song.path,this.song.bpm),this.update=this.updateQuality,this.htmlElements.elementPlay.setAttribute("disabled","false"),this.htmlElements.elementPressPlay.setAttribute("show","true"),this.htmlElements.elementPressFullScreen.setAttribute("show","false"),this.options.debug?(this.debug=new IE,this.debugAverages=new mT(this.options.audioMultiChannel?300:50,80)):this.debugAverages={update:()=>{}}}resize(){this.camera.resize(),this.renderer.resize()}update(){const e=this.time.delta;this.camera.update(),this.world.update(e),this.renderer.update(e)}updateQuality(){const e=this.time.delta;this.camera.update(),this.audioAnalizer.update(e),this.world.update(e),this.renderer.update(),this.debugAverages.update()}resourcesLoaded(){this.loading=!1,this.setLoading(),this.world.resourcesLoaded()}setLoading(){let e=!0;this.loading===!1&&(e=!1),this.htmlElements.elementExperience.setAttribute("loading",e)}setLoadingAudio(){let e=!0;this.loading===!1&&this.songLoading===!1&&(e=!1),this.htmlElements.elementExperience.setAttribute("loading",e)}destroy(){this.sizes.off("resize"),this.time.off("tick"),this.resources.off("ready"),this.scene.traverse(e=>{if(e instanceof dt){e.geometry.dispose();for(const t in e.material){const n=e.material[t];n&&typeof n.dispose=="function"&&n.dispose()}}}),this.camera.controls.dispose(),this.renderer.instance.dispose(),this.debug.active&&this.debug.ui.destroy()}}new gt;
//# sourceMappingURL=index-a4d5de3b.js.map
