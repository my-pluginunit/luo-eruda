"use strict";
!function (e, f) {
  typeof exports === "object" && typeof module === "object" ? module.exports = f() : typeof define === "function" && define.amd ? define([], f) : typeof exports === "object" ? exports.luoEruda = f() : e.luoEruda = f();
}(this, function () {
  return function (va, vb) {
    if (va) {
      if (typeof va === "string" && window.location.host === va) return;
      if (typeof va === "string" && window.location.host !== va) return insertScript(function () {eruda.init();});
      if ((va instanceof Array) && (va.indexOf(window.location.host) > -1)) insertScript(function () {eruda.init();});
      if ((va instanceof Object) && va.exclude) {
        if (!(va.exclude instanceof Array)) throw new Error("参数类型有误！");
        if (va.exclude.indexOf(window.location.host) > -1) return;
        insertScript(function () {eruda.init();});
      }
    } else {
      insertScript(function () {eruda.init();});
    }
    function insertScript (callback) {
      if (vb && (!isMobile())) return;
      var script = document.createElement("script");
      script.src = "//cdn.jsdelivr.net/npm/eruda";
      window.document.head.appendChild(script);
      script.addEventListener("load", callback);
    }
    function isMobile () {
      return !!window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
    };
  }
});
