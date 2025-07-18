/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* BLAS level 1 routine to scale a double-precision complex floating-point vector by a double-precision floating-point constant.
*
* @module @stdlib/blas-base-zdscal
*
* @example
* var Complex128Array = require( '@stdlib/array-complex128' );
* var zdscal = require( '@stdlib/blas-base-zdscal' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* zdscal( 3, 2.0, x, 1 );
* // x => <Complex128Array>[ 2.0, 4.0, 6.0, 8.0, 10.0, 12.0 ]
*
* @example
* var Complex128Array = require( '@stdlib/array-complex128' );
* var zdscal = require( '@stdlib/blas-base-zdscal' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* zdscal.ndarray( 3, 2.0, x, 1, 0 );
* // x => <Complex128Array>[ 2.0, 4.0, 6.0, 8.0, 10.0, 12.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils-try-require' );
var isError = require( '@stdlib/assert-is-error' );
var main = require( './main.js' );


// MAIN //

var zdscal;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	zdscal = main;
} else {
	zdscal = tmp;
}


// EXPORTS //

module.exports = zdscal;

// exports: { "ndarray": "zdscal.ndarray" }
