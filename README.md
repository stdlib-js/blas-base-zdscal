<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# zdscal

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Scale a double-precision complex floating-point vector by a double-precision floating-point constant.



<section class="usage">

## Usage

```javascript
import zdscal from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-zdscal@deno/mod.js';
```

#### zdscal( N, da, zx, strideZX )

Scales a double-precision complex floating-point vector by a double-precision floating-point constant.

```javascript
import Complex128Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@deno/mod.js';
import real from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-real@deno/mod.js';
import imag from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-imag@deno/mod.js';

var zx = new Complex128Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );

zdscal( 3, 2.0, zx, 1 );

var z = zx.get( 0 );
// returns <Complex128>

var re = real( z );
// returns 2.0

var im = imag( z );
// returns 2.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **da**: scalar constant.
-   **zx**: input [`Complex128Array`][@stdlib/array/complex128].
-   **strideZX**: stride length for `zx`.

The `N` and stride parameters determine which elements in `zx` are scaled by `da`. For example, to scale every other element in `zx` by `da`,

```javascript
import Complex128Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@deno/mod.js';
import real from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-real@deno/mod.js';
import imag from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-imag@deno/mod.js';

var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

zdscal( 2, 2.0, zx, 2 );

var z = zx.get( 2 );
// returns <Complex128>

var re = real( z );
// returns 10.0

var im = imag( z );
// returns 12.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
import Complex128Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@deno/mod.js';
import real from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-real@deno/mod.js';
import imag from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-imag@deno/mod.js';

// Initial array:
var zx0 = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

// Create an offset view:
var zx1 = new Complex128Array( zx0.buffer, zx0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Scale every element in `zx1`:
zdscal( 3, 2.0, zx1, 1 );

var z = zx0.get( 0 );
// returns <Complex128>

var re = real( z );
// returns 1.0

var im = imag( z );
// returns 2.0

z = zx0.get( 1 );
// returns <Complex128>

re = real( z );
// returns 6.0

im = imag( z );
// returns 8.0
```

#### zdscal.ndarray( N, da, zx, strideZX, offsetZX )

Scales a double-precision complex floating-point vector by a double-precision floating-point constant using alternative indexing semantics.

```javascript
import Complex128Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@deno/mod.js';
import real from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-real@deno/mod.js';
import imag from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-imag@deno/mod.js';

var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

zdscal.ndarray( 3, 2.0, zx, 1, 0 );

var z = zx.get( 0 );
// returns <Complex128>

var re = real( z );
// returns 2.0

var im = imag( z );
// returns 4.0
```

The function has the following additional parameters:

-   **offsetZX**: starting index for `zx`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to scale every other element in the input strided array starting from the second element,

```javascript
import Complex128Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@deno/mod.js';
import real from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-real@deno/mod.js';
import imag from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-imag@deno/mod.js';

var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

zdscal.ndarray( 2, 2.0, zx, 2, 1 );

var z = zx.get( 3 );
// returns <Complex128>

var re = real( z );
// returns 14.0

var im = imag( z );
// returns 16.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `zx` unchanged.
-   `zdscal()` corresponds to the [BLAS][blas] level 1 function [`zdscal`][zdscal].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@deno/mod.js';
import filledarrayBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-filled-by@deno/mod.js';
import Complex128 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-ctor@deno/mod.js';
import zdscal from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-zdscal@deno/mod.js';

function rand() {
    return new Complex128( discreteUniform( 0, 10 ), discreteUniform( -5, 5 ) );
}

var zx = filledarrayBy( 10, 'complex128', rand );
console.log( zx.toString() );

zdscal( zx.length, 2.0, zx, 1 );
console.log( zx.toString() );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-zdscal.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-zdscal

[test-image]: https://github.com/stdlib-js/blas-base-zdscal/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-base-zdscal/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-zdscal/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-zdscal?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-zdscal.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-zdscal/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-base-zdscal/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-base-zdscal/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-base-zdscal/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-base-zdscal/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-base-zdscal/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-base-zdscal/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-base-zdscal/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-zdscal/main/LICENSE

[blas]: http://www.netlib.org/blas

[zdscal]: https://www.netlib.org/lapack/explore-html/d2/de8/group__scal_ga40d50a435a5fcf16cf41fa80d746819f.html#ga40d50a435a5fcf16cf41fa80d746819f

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128/tree/deno

</section>

<!-- /.links -->
