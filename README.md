Online inverter here: <http://harttle.land/invert-markdown-table/>, also available on [npm](https://www.npmjs.com/package/invert-markdown-table):

```bash
npm i invert-markdown-table
```

# Usage

```javascript
var invertMarkdownTable = require('invert-markdown-table');
var source = 'a | b\n---|---\nc | d'
var result = invertMarkdownTable(source);
console.log(result);
// Outputs:
// a | c\n---|---\nb | d
```

# Use in Browser

Global Variable:

```javascript
var source = 'a | b\n---|---\nc | d';
var result = window.invertMarkdownTable(source);
```

RequireJS:

```javascript
require(['invert-markdown-table'], function (invertMarkdownTable) {
    var source = 'a | b\n---|---\nc | d'
    var result = invertMarkdownTable(source);
});
```

