"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function abortableFetch(status, f) {
    var newFn = function (url, params) {
        var extra = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            extra[_i - 2] = arguments[_i];
        }
        return new Promise(function (resolve, reject) {
            if (status && status.cancelled) {
                return reject(Error('Cancelled'));
            }
            var controller = new AbortController();
            var signal = controller.signal;
            var newParams = __assign(__assign({}, (params || {})), { signal: signal });
            if (status) {
                var currentOnCancel_1 = status.onCancel;
                var newOnCancel = function () {
                    currentOnCancel_1();
                    controller.abort();
                };
                status.onCancel = newOnCancel;
            }
            return f.apply(void 0, __spreadArrays([url, newParams], extra)).then(resolve).catch(reject);
        });
    };
    return newFn;
}
exports.abortableFetch = abortableFetch;
function cancellable(status, f) {
    var newFn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new Promise(function (resolve, reject) {
            if (status && status.cancelled) {
                return reject(Error('Cancelled'));
            }
            return f.apply(void 0, args).then(resolve).catch(reject);
        });
    };
    return newFn;
}
exports.cancellable = cancellable;
