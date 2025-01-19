"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=n(function(B,c){
var m=require('@stdlib/strided-base-reinterpret-complex128/dist');function z(e,r,a,i,j){var s,t,q,u;if(e<=0||r===1)return a;for(s=m(a,0),t=j*2,q=i*2,u=0;u<e;u++)s[t]*=r,s[t+1]*=r,t+=q;return a}c.exports=z
});var f=n(function(C,d){
var R=require('@stdlib/strided-base-stride2offset/dist'),_=v();function E(e,r,a,i){return _(e,r,a,i,R(e,i))}d.exports=E
});var x=n(function(D,p){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=f(),b=v();O(l,"ndarray",b);p.exports=l
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),w=x(),o,y=h(g(__dirname,"./native.js"));k(y)?o=w:o=y;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
