/**
* console-js. MIT license.
* https://github.com/weilao/console-js
* @author Weilao
**/
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.console = factory();
  }
}(this, function() {
var method,
    console = window.console || {},
    log = console.log || function(){},
    methods = 'log,debug,error,info,warn,dir,dirxml,table,trace,assert,count,markTimeline,profile,profileEnd,time,timeEnd,timeStamp,timeline,timelineEnd,group,groupCollapsed,groupEnd,clear'.split(',');
while (method = methods.pop()) console[method] = console[method] || log;
console.memory = console.memory || {};
return console;
}));
