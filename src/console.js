var method,
    console = window.console || {},
    log = console.log || function(){},
    methods = 'log,debug,error,info,warn,dir,dirxml,table,trace,assert,count,markTimeline,profile,profileEnd,time,timeEnd,timeStamp,timeline,timelineEnd,group,groupCollapsed,groupEnd,clear'.split(',');
while (method = methods.pop()) console[method] = console[method] || log;
console.memory = console.memory || {};