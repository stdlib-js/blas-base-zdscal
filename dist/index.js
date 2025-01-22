"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=v(function(C,o){
var m=require('@stdlib/strided-base-reinterpret-complex128/dist'),z=require('@stdlib/complex-float64-base-scale/dist').strided;function R(e,r,a,i,j){var s,t,c,u;if(e<=0||r===1)return a;for(s=m(a,0),t=j*2,c=i*2,u=0;u<e;u++)z(r,s,1,t,s,1,t),t+=c;return a}o.exports=R
});var f=v(function(D,d){
var _=require('@stdlib/strided-base-stride2offset/dist'),E=n();function O(e,r,a,i){return E(e,r,a,i,_(e,i))}d.exports=O
});var x=v(function(F,p){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=f(),g=n();b(l,"ndarray",g);p.exports=l
});var h=require("path").join,k=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),A=x(),q,y=k(h(__dirname,"./native.js"));w(y)?q=A:q=y;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
