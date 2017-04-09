# Express SPA
Allows for single page apps to either be bookmarked or refreshed even when using front end routing.

## Usage
`npm install --save @jmarthernandez/express-spa`

```
var express = require('express');
var pushState = require('@jmarthernandez/express-spa');

var app = express();
var static = __dirname + 'path/to/static/directory';

app.use(express.static(root));
app.use(@jmarthernandez/express-spa('index.html', { root: root }));

app.listen(8080, function () {
  console.log('Now you can bookmark your single page application');
});
```