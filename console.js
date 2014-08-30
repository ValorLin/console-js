// console-js. MIT license.
// @author Weilao
(function (_console) {
    var method,
        log = _console.log || new Function,
        methods = 'debug,error,info,warn,dir,dirxml,table,trace,assert,count,markTimeline,profile,profileEnd,time,timeEnd,timeStamp,timeline,timelineEnd,group,groupCollapsed,groupEnd,clear'.split(',');
    while (method = methods.pop()) _console[method] = _console[method] || log;
    _console.memory = _console.memory || {};
})(window.console = window.console || {});