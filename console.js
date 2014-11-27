// console-js. MIT license.
// https://github.com/weilao/console-js
// @author Weilao
(function (_console) {
    var method,
        log = _console.log || new Function,
        methods = 'log,debug,error,info,warn,dir,dirxml,table,trace,assert,count,markTimeline,profile,profileEnd,time,timeEnd,timeStamp,timeline,timelineEnd,group,groupCollapsed,groupEnd,clear'.split(',');
    while (method = methods.pop()) _console[method] = _console[method] || log;
    _console.memory = _console.memory || {};
})(window.console = window.console || {});