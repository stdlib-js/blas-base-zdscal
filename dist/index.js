"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=v(function(D,d){
var j=require('@stdlib/strided-base-reinterpret-complex128/dist'),m=require('@stdlib/complex-float64-base-scale/dist').strided;function R(e,r,i,a,z){var s,t,c,u;if(e<=0||r===1)return i;for(s=j(i,0),t=z*2,c=a*2,u=0;u<e;u++)m(r,s,1,t,s,1,t),t+=c;return i}d.exports=R
});var f=v(function(F,o){
var _=require('@stdlib/strided-base-stride2offset/dist'),w=n();function E(e,r,i,a){return w(e,r,i,a,_(e,a))}o.exports=E
});var y=v(function(G,p){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=f(),b=n();O(l,"ndarray",b);p.exports=l
});var g=require("path").join,k=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=y(),q,x=k(g(__dirname,"./native.js"));A(x)?q=B:q=x;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
