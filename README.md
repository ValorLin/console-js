如果在代码中使用了 IE 中缺少的 console 方法可能导致报错，中断代码执行。例如：
```js
console.debug('foo')
// "对象不支持“debug”属性或方法" 
```
为了避免问题的产生，当 console 方法不存在的时候，用 console.log 代替，这样就可以尽情的使用 console 下的所有方法了。