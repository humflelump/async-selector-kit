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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var async_selector_1 = __importDefault(require("async-selector"));
var reselect_1 = require("reselect");
var useDispatch_1 = require("./useDispatch");
var actions_1 = require("./actions");
var createdCount = 0;
var idSet = new Set();
function validate(params, selectors, id, idSet) {
    if (idSet.has(id)) {
        throw new Error("The id \"" + id + "\" was already given to another async selector");
    }
    if (!params || typeof params.async !== 'function') {
        throw new Error('No async function was passed in.');
    }
    if (!Array.isArray(selectors)) {
        throw new Error("Selectors must be an array. Instead got " + typeof selectors + ".");
    }
    for (var i = 0; i < selectors.length; i++) {
        if (typeof selectors[i] !== 'function') {
            throw new Error("All selectors must be functions. Instead got " + selectors.map(function (f) { return typeof f; }).join(', '));
        }
    }
}
function createAsyncSelectorResults(params, selectors) {
    var _this = this;
    if (selectors === void 0) { selectors = []; }
    var id = params.id || 'ASYNC_SELECTOR_' + (++createdCount);
    validate(params, selectors, id, idSet);
    idSet.add(id);
    var asyncSelector = async_selector_1.default(__assign(__assign({}, params), { onResolve: function (_a) {
            var result = _a.result, took = _a.took;
            useDispatch_1.getDispatcher()(actions_1.promiseResolved(result, took, params.id));
            params.onResolve && params.onResolve(result);
        }, onReject: function (error) {
            useDispatch_1.getDispatcher()(actions_1.promiseRejected(error, params.id));
            params.onReject && params.onReject(error);
        }, async: function () {
            var vals = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                vals[_i] = arguments[_i];
            }
            return __awaiter(_this, void 0, void 0, function () {
                var t, result, took;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            t = Date.now();
                            return [4 /*yield*/, params.async.apply(params, vals)];
                        case 1:
                            result = _a.sent();
                            took = Date.now() - t;
                            return [2 /*return*/, { result: result, took: took }];
                    }
                });
            });
        }, id: id }), selectors);
    var isWaiting = reselect_1.createSelector([asyncSelector], function (d) { return d.isWaiting; });
    var error = reselect_1.createSelector([asyncSelector], function (d) { return d.isRejected ? d.value : null; });
    var results = reselect_1.createSelector([asyncSelector], function (d) {
        if (d.previous === undefined) {
            if (params.defaultValue === undefined) {
                return [];
            }
            else {
                return params.defaultValue;
            }
        }
        else {
            return d.previous.result;
        }
    });
    return [
        results,
        isWaiting,
        error
    ];
}
exports.createAsyncSelectorResults = createAsyncSelectorResults;
