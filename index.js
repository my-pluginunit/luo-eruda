"use strict";
!function (e, f) {
  typeof exports === "object" && typeof module === "object" ? module.exports = f() : typeof define === "function" && define.amd ? define([], f) : typeof exports === "object" ? exports.luoInfiniteScroll = f() : e.luoInfiniteScroll = f();
}(this, function () {
  var Vue = require('vue');
  var $ = require('jquery');

  var ctx = '@@LuoInfiniteScroll';

  var isAttached = function (element) {
    var currentNode = element.parentNode;
    while (currentNode) {
      if (currentNode.tagName === 'HTML') return true;
      if (currentNode.nodeType === 11) return false;
      currentNode = currentNode.parentNode;
    }
    return false;
  };

  var getScrollTop = function (element) {
    if (element === window) return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
    return element.scrollTop;
  };
  
  var getVisibleHeight = function (element) {
    if (element === window) return document.documentElement.clientHeight;
    return element.clientHeight;
  };

  var doBind = function (e) {
    var directive = this;
    var element = directive.el;
    directive.scrollEventTarget = element;
    directive.scrollListener = doCheck.bind(directive);
    $(directive.scrollEventTarget).off('mousewheel').on('mousewheel', directive.scrollListener);
  };

  var doCheck = function  (e) {
    var directive = this;
    var viewportScrollTop = getScrollTop(directive.el);
    var viewportBottom = viewportScrollTop + getVisibleHeight(directive.el);
    var distanceExpr = directive.el.getAttribute('luo-infinite-scroll-distance');
    var distance = 0;
    if (distanceExpr) {
      distance = Number(directive.vm[distanceExpr] || distanceExpr);
      if (isNaN(distance)) distance = 0;
    }
    directive.distance = distance;
    var img = directive.el.getAttribute('luo-infinite-scroll-loding-path');
  
    var shouldTrigger = directive.el.scrollHeight - viewportBottom <= distance;
  
    if (e.originalEvent.deltaY > 0 && shouldTrigger && directive.expression) {
      $('#__luo-infinite-scroll-loding__').remove();
      $(directive.el).append('<div id="__luo-infinite-scroll-loding__" style="display: flex;flex-direction: row;align-items: center;justify-content: center;"><img width="100px" src="' + img + '" /></div>');
      if (directive.v) clearTimeout(directive.v);
      directive.v = setTimeout(function () {directive.t = false; $('#__luo-infinite-scroll-loding__').remove();}, 100);
      if (directive.t) return;
      directive.t = true;
      directive.expression();
    }
  };

  var LuoInfiniteScroll = {
    bind: function bind (el, binding, vnode) {
      el[ctx] = {
        el: el,
        vm: vnode.context,
        expression: binding.value,
        t: false,
        v: null
      };
      var args = arguments;
      el[ctx].vm.$on('hook:mounted', function () {
        el[ctx].vm.$nextTick(function () {
          if (isAttached(el)) return doBind.call(el[ctx], args);

          el[ctx].bindTryCount = 0;
          var tryBind = function tryBind() {
            if (el[ctx].bindTryCount > 10) return;
            el[ctx].bindTryCount++;
            if (isAttached(el)) {
              doBind.call(el[ctx], args);
            } else {
              setTimeout(tryBind, 50);
            }
          };
          tryBind();
        });
      });
    },
    unbind: function unbind(el) {
      if (el && el[ctx] && el[ctx].scrollEventTarget) $(el[ctx].scrollEventTarget).off('mousewheel');
    }
  };

  var install = function install(Vue) {Vue.directive('LuoInfiniteScroll', LuoInfiniteScroll);};

  window.LuoInfiniteScroll = LuoInfiniteScroll;
  Vue.use(install);

  LuoInfiniteScroll.install = install;

  return LuoInfiniteScroll;
});
