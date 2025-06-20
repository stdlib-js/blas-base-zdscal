"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=v(function(D,d){
var j=require('@stdlib/strided-base-reinterpret-complex128/dist'),m=require('@stdlib/complex-float64-base-scale/dist').strided;function R(e,r,a,i,z){var s,t,c,u;if(e<=0||r===1)return a;for(s=j(a,0),t=z*2,c=i*2,u=0;u<e;u++)m(r,s,1,t,s,1,t),t+=c;return a}d.exports=R
});var f=v(function(F,o){
var _=require('@stdlib/strided-base-stride2offset/dist'),E=n();function O(e,r,a,i){return E(e,r,a,i,_(e,i))}o.exports=O
});var x=v(function(G,p){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=f(),g=n();b(l,"ndarray",g);p.exports=l
});var k=require("path").join,w=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=x(),q,y=w(k(__dirname,"./native.js"));A(y)?q=B:q=y;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
