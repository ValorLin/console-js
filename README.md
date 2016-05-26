With this tiny script, Chrome/Firefox's console API won't break your code anymore.

Now you can use all of these without worrying about anything:

[https://developer.chrome.com/devtools/docs/console-api](https://developer.chrome.com/devtools/docs/console-api)

## Usage
### global
```html
<script src="console-js/dist/console.min.js"></script>
```

```js
console.debug('Do what you want.');
```

### via npm
```shell
npm i -S console-js
```

```js
var console = require('console-js');
console.debug('It works');
```
