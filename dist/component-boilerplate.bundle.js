// base-component v1.0.9 https://github.com/viewdir/base-component#readme
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.baseComponent = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
///<reference path="../node_modules/typescript/lib/lib.es6.d.ts"/> 

var _Components;
(function (_Components) {
    var BaseComponent = (function () {
        function BaseComponent(options) {
            this.options = options;
            this.options.data = $.extend(this.data(), options.data);
        }
        BaseComponent.prototype._init = function () {
            this._$element = $(this.options.target);
            if (!this._$element.length) {
                console.warn('element not found');
                return false;
            }
            this._$element.empty();
            return true;
        };
        BaseComponent.prototype.data = function () {
            return {};
        };
        BaseComponent.prototype.on = function (name, callback, ctx) {
            var e = this._e || (this._e = {});
            (e[name] || (e[name] = [])).push({
                fn: callback,
                ctx: ctx
            });
        };
        BaseComponent.prototype.fire = function (name) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var data = [].slice.call(arguments, 1);
            var evtArr = ((this._e || (this._e = {}))[name] || []).slice();
            var i = 0;
            var len = evtArr.length;
            for (i; i < len; i++) {
                evtArr[i].fn.apply(evtArr[i].ctx, data);
            }
        };
        BaseComponent.prototype._resize = function () {
        };
        BaseComponent.prototype.set = function (data) {
        };
        return BaseComponent;
    }());
    _Components.BaseComponent = BaseComponent;
})(_Components || (_Components = {}));
(function (g) {
    if (!g._Components) {
        g._Components = _Components;
    }
})(global);



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});
!function(f){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=f();else if("function"==typeof define&&define.amd)define([],f);else{var g;g="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,g.componentBoilerplate=f()}}(function(){return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){(function(global){var MyComponents,__extends=this&&this.__extends||function(){var extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])};return function(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}}();!function(MyComponents){var ExampleComponent=function(_super){function ExampleComponent(options){var _this=_super.call(this,options)||this;return _this._init(),_this._resize(),_this}return __extends(ExampleComponent,_super),ExampleComponent.prototype.message=function(){this.fire(ExampleComponent.Events.MESSAGE,this.options.data.message)},ExampleComponent.prototype._init=function(){var success=_super.prototype._init.call(this);return success||console.error("Component failed to initialise"),this._$element.append("I am an example component"),success},ExampleComponent.prototype.data=function(){return{}},ExampleComponent.prototype._resize=function(){},ExampleComponent}(_Components.BaseComponent);MyComponents.ExampleComponent=ExampleComponent}(MyComponents||(MyComponents={})),function(MyComponents){var ExampleComponent;!function(ExampleComponent){var Events=function(){function Events(){}return Events}();Events.MESSAGE="message",ExampleComponent.Events=Events}(ExampleComponent=MyComponents.ExampleComponent||(MyComponents.ExampleComponent={}))}(MyComponents||(MyComponents={})),function(g){g.MyComponents?g.MyComponents.ExampleComponent=MyComponents.ExampleComponent:g.MyComponents=MyComponents}(global)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1])(1)});