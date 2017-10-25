# path-is-fresh 

A human-friendly tool for checking file freshness

## Installation

```sh
npm install path-is-fresh --save
```

## Usage

The module exports a single function:

```js
const pathIsFresh = require('path-is-fresh')
```

The first argument should be a fully-qualified path to a file or directory:

```js
pathIsFresh('/some/file-created-in-the-last-hour.txt')
// true

pathIsFresh('/some/file-created-ages-ago.txt')
// false
```

To customize the freshness threshold, specify a 
[human interval](http://ghub.io/human-interval)
string like `10 seconds` or `1 minute` or `3 days` as the second argument:

```js
pathIsFresh('/some/file.txt', '3 weeks')
// true
```

If the given path doesn't exist, the function will return false:

```js
pathIsFresh('nonexistent-file')
// false
```

## Tests

```sh
npm install
npm test
```

## Dependencies

- [human-interval](https://github.com/rschmukler/human-interval): Human readable time measurements

## Dev Dependencies

- [chai](https://github.com/chaijs/chai): BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework
- [standard](https://github.com/standard/standard): JavaScript Standard Style
- [standard-markdown](): Test your Markdown files for Standard JavaScript Style™
- [timekeeper](https://github.com/vesln/timekeeper): Easy testing of time-dependent code.
- [tmp](): Temporary file and directory creator


## License

MIT
