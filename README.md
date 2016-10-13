# simple-markov [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Generate text using a Markov chain

## Installation

```sh
$ npm install --save simple-markov
```

## Usage 

```js
var SimpleMarkov = require('simple-markov');

var markov = new SimpleMarkov(3, 'I really like markov chains. They make generating text very hilarious.');
markov.learn('We can keep making it learn, too.');

console.log(markov.generateText(100));
```
## License

MIT © [Brian Simon](https://github.com/bsssshhhhhhh)


[npm-image]: https://badge.fury.io/js/simple-markov.svg
[npm-url]: https://npmjs.org/package/simple-markov
[travis-image]: https://travis-ci.org/bsssshhhhhhh/simple-markov.svg?branch=master
[travis-url]: https://travis-ci.org/bsssshhhhhhh/simple-markov
[daviddm-image]: https://david-dm.org/bsssshhhhhhh/simple-markov.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/bsssshhhhhhh/simple-markov
[coveralls-image]: https://coveralls.io/repos/bsssshhhhhhh/simple-markov/badge.svg
[coveralls-url]: https://coveralls.io/r/bsssshhhhhhh/simple-markov
