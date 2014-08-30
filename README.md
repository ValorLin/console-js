如果在代码中使用了 IE 中缺少的 console 方法可能导致报错，中断代码执行。例如：
```js
console.debug('foo')
// "对象不支持“debug”属性或方法" 
```
为了避免问题的产生，当 console 方法不存在的时候，用 console.log 代替。这样就可以尽情的使用

```js
(function (_console) {
    "use strict";
    var method,
        log = _console.log || new Function,
        methods = 'debug,error,info,warn,dir,dirxml,table,trace,assert,count,markTimeline,profile,profileEnd,time,timeEnd,timeStamp,timeline,timelineEnd,group,groupCollapsed,groupEnd,clear'.split(',');
    while (method = methods.pop()) _console[method] = _console[method] || log;
    _console.memory = _console.memory || {};
})(window.console = window.console || {});
```