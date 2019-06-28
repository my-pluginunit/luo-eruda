"use strict";
!function (e, f) {
  typeof exports === "object" && typeof module === "object" ? module.exports = f() : typeof define === "function" && define.amd ? define([], f) : typeof exports === "object" ? exports.luoEruda = f() : e.luoEruda = f();
}(this, function () {
  return function (va) {
    if (va) {
      if (typeof va === "string" && window.location.host === va) return;
      if (typeof va === "string" && window.location.host !== va) return insertScript(function () {eruda.init();});
      if ((va instanceof Array) && (va.indexOf(window.location.host) > -1)) insertScript(function () {eruda.init();});
      if ((va instanceof Object) && va.exclude) {
        if (typeof va.exclude !== Array) throw new Error("参数类型有误！");
        if (va.exclude.indexOf(window.location.host) > -1) return;
        insertScript(function () {eruda.init();});
      }
    } else {
      insertScript(function () {eruda.init();});
    }
    function insertScript (callback) {
      var script = document.createElement("script");
      script.src = "http://cdn.jsdelivr.net/npm/eruda";
      window.document.head.appendChild(script);
      script.addEventListener("load", callback);
    }
  }
});
