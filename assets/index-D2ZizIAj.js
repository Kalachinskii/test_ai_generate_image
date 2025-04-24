(function () {
    const J = document.createElement("link").relList;
    if (J && J.supports && J.supports("modulepreload")) return;
    for (const j of document.querySelectorAll('link[rel="modulepreload"]'))
        v(j);
    new MutationObserver((j) => {
        for (const G of j)
            if (G.type === "childList")
                for (const I of G.addedNodes)
                    I.tagName === "LINK" && I.rel === "modulepreload" && v(I);
    }).observe(document, { childList: !0, subtree: !0 });
    function Q(j) {
        const G = {};
        return (
            j.integrity && (G.integrity = j.integrity),
            j.referrerPolicy && (G.referrerPolicy = j.referrerPolicy),
            j.crossOrigin === "use-credentials"
                ? (G.credentials = "include")
                : j.crossOrigin === "anonymous"
                ? (G.credentials = "omit")
                : (G.credentials = "same-origin"),
            G
        );
    }
    function v(j) {
        if (j.ep) return;
        j.ep = !0;
        const G = Q(j);
        fetch(j.href, G);
    }
})();
var Ic = { exports: {} },
    be = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var td;
function x0() {
    if (td) return be;
    td = 1;
    var E = Symbol.for("react.transitional.element"),
        J = Symbol.for("react.fragment");
    function Q(v, j, G) {
        var I = null;
        if (
            (G !== void 0 && (I = "" + G),
            j.key !== void 0 && (I = "" + j.key),
            "key" in j)
        ) {
            G = {};
            for (var Ml in j) Ml !== "key" && (G[Ml] = j[Ml]);
        } else G = j;
        return (
            (j = G.ref),
            {
                $$typeof: E,
                type: v,
                key: I,
                ref: j !== void 0 ? j : null,
                props: G,
            }
        );
    }
    return (be.Fragment = J), (be.jsx = Q), (be.jsxs = Q), be;
}
var ad;
function j0() {
    return ad || ((ad = 1), (Ic.exports = x0())), Ic.exports;
}
var x = j0(),
    Pc = { exports: {} },
    C = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ud;
function G0() {
    if (ud) return C;
    ud = 1;
    var E = Symbol.for("react.transitional.element"),
        J = Symbol.for("react.portal"),
        Q = Symbol.for("react.fragment"),
        v = Symbol.for("react.strict_mode"),
        j = Symbol.for("react.profiler"),
        G = Symbol.for("react.consumer"),
        I = Symbol.for("react.context"),
        Ml = Symbol.for("react.forward_ref"),
        D = Symbol.for("react.suspense"),
        T = Symbol.for("react.memo"),
        R = Symbol.for("react.lazy"),
        tl = Symbol.iterator;
    function al(s) {
        return s === null || typeof s != "object"
            ? null
            : ((s = (tl && s[tl]) || s["@@iterator"]),
              typeof s == "function" ? s : null);
    }
    var Dl = {
            isMounted: function () {
                return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
        },
        Ul = Object.assign,
        Vl = {};
    function sl(s, _, O) {
        (this.props = s),
            (this.context = _),
            (this.refs = Vl),
            (this.updater = O || Dl);
    }
    (sl.prototype.isReactComponent = {}),
        (sl.prototype.setState = function (s, _) {
            if (typeof s != "object" && typeof s != "function" && s != null)
                throw Error(
                    "takes an object of state variables to update or a function which returns an object of state variables."
                );
            this.updater.enqueueSetState(this, s, _, "setState");
        }),
        (sl.prototype.forceUpdate = function (s) {
            this.updater.enqueueForceUpdate(this, s, "forceUpdate");
        });
    function Wl() {}
    Wl.prototype = sl.prototype;
    function Cl(s, _, O) {
        (this.props = s),
            (this.context = _),
            (this.refs = Vl),
            (this.updater = O || Dl);
    }
    var Al = (Cl.prototype = new Wl());
    (Al.constructor = Cl), Ul(Al, sl.prototype), (Al.isPureReactComponent = !0);
    var Rl = Array.isArray,
        L = { H: null, A: null, T: null, S: null, V: null },
        vl = Object.prototype.hasOwnProperty;
    function Bl(s, _, O, z, N, $) {
        return (
            (O = $.ref),
            {
                $$typeof: E,
                type: s,
                key: _,
                ref: O !== void 0 ? O : null,
                props: $,
            }
        );
    }
    function Yl(s, _) {
        return Bl(s.type, _, void 0, void 0, void 0, s.props);
    }
    function Ll(s) {
        return typeof s == "object" && s !== null && s.$$typeof === E;
    }
    function xa(s) {
        var _ = { "=": "=0", ":": "=2" };
        return (
            "$" +
            s.replace(/[=:]/g, function (O) {
                return _[O];
            })
        );
    }
    var Ot = /\/+/g;
    function xl(s, _) {
        return typeof s == "object" && s !== null && s.key != null
            ? xa("" + s.key)
            : _.toString(36);
    }
    function ma() {}
    function ga(s) {
        switch (s.status) {
            case "fulfilled":
                return s.value;
            case "rejected":
                throw s.reason;
            default:
                switch (
                    (typeof s.status == "string"
                        ? s.then(ma, ma)
                        : ((s.status = "pending"),
                          s.then(
                              function (_) {
                                  s.status === "pending" &&
                                      ((s.status = "fulfilled"), (s.value = _));
                              },
                              function (_) {
                                  s.status === "pending" &&
                                      ((s.status = "rejected"), (s.reason = _));
                              }
                          )),
                    s.status)
                ) {
                    case "fulfilled":
                        return s.value;
                    case "rejected":
                        throw s.reason;
                }
        }
        throw s;
    }
    function jl(s, _, O, z, N) {
        var $ = typeof s;
        ($ === "undefined" || $ === "boolean") && (s = null);
        var X = !1;
        if (s === null) X = !0;
        else
            switch ($) {
                case "bigint":
                case "string":
                case "number":
                    X = !0;
                    break;
                case "object":
                    switch (s.$$typeof) {
                        case E:
                        case J:
                            X = !0;
                            break;
                        case R:
                            return (X = s._init), jl(X(s._payload), _, O, z, N);
                    }
            }
        if (X)
            return (
                (N = N(s)),
                (X = z === "" ? "." + xl(s, 0) : z),
                Rl(N)
                    ? ((O = ""),
                      X != null && (O = X.replace(Ot, "$&/") + "/"),
                      jl(N, _, O, "", function (Kt) {
                          return Kt;
                      }))
                    : N != null &&
                      (Ll(N) &&
                          (N = Yl(
                              N,
                              O +
                                  (N.key == null || (s && s.key === N.key)
                                      ? ""
                                      : ("" + N.key).replace(Ot, "$&/") + "/") +
                                  X
                          )),
                      _.push(N)),
                1
            );
        X = 0;
        var Fl = z === "" ? "." : z + ":";
        if (Rl(s))
            for (var ol = 0; ol < s.length; ol++)
                (z = s[ol]), ($ = Fl + xl(z, ol)), (X += jl(z, _, O, $, N));
        else if (((ol = al(s)), typeof ol == "function"))
            for (s = ol.call(s), ol = 0; !(z = s.next()).done; )
                (z = z.value), ($ = Fl + xl(z, ol++)), (X += jl(z, _, O, $, N));
        else if ($ === "object") {
            if (typeof s.then == "function") return jl(ga(s), _, O, z, N);
            throw (
                ((_ = String(s)),
                Error(
                    "Objects are not valid as a React child (found: " +
                        (_ === "[object Object]"
                            ? "object with keys {" +
                              Object.keys(s).join(", ") +
                              "}"
                            : _) +
                        "). If you meant to render a collection of children, use an array instead."
                ))
            );
        }
        return X;
    }
    function S(s, _, O) {
        if (s == null) return s;
        var z = [],
            N = 0;
        return (
            jl(s, z, "", "", function ($) {
                return _.call(O, $, N++);
            }),
            z
        );
    }
    function p(s) {
        if (s._status === -1) {
            var _ = s._result;
            (_ = _()),
                _.then(
                    function (O) {
                        (s._status === 0 || s._status === -1) &&
                            ((s._status = 1), (s._result = O));
                    },
                    function (O) {
                        (s._status === 0 || s._status === -1) &&
                            ((s._status = 2), (s._result = O));
                    }
                ),
                s._status === -1 && ((s._status = 0), (s._result = _));
        }
        if (s._status === 1) return s._result.default;
        throw s._result;
    }
    var B =
        typeof reportError == "function"
            ? reportError
            : function (s) {
                  if (
                      typeof window == "object" &&
                      typeof window.ErrorEvent == "function"
                  ) {
                      var _ = new window.ErrorEvent("error", {
                          bubbles: !0,
                          cancelable: !0,
                          message:
                              typeof s == "object" &&
                              s !== null &&
                              typeof s.message == "string"
                                  ? String(s.message)
                                  : String(s),
                          error: s,
                      });
                      if (!window.dispatchEvent(_)) return;
                  } else if (
                      typeof process == "object" &&
                      typeof process.emit == "function"
                  ) {
                      process.emit("uncaughtException", s);
                      return;
                  }
                  console.error(s);
              };
    function il() {}
    return (
        (C.Children = {
            map: S,
            forEach: function (s, _, O) {
                S(
                    s,
                    function () {
                        _.apply(this, arguments);
                    },
                    O
                );
            },
            count: function (s) {
                var _ = 0;
                return (
                    S(s, function () {
                        _++;
                    }),
                    _
                );
            },
            toArray: function (s) {
                return (
                    S(s, function (_) {
                        return _;
                    }) || []
                );
            },
            only: function (s) {
                if (!Ll(s))
                    throw Error(
                        "React.Children.only expected to receive a single React element child."
                    );
                return s;
            },
        }),
        (C.Component = sl),
        (C.Fragment = Q),
        (C.Profiler = j),
        (C.PureComponent = Cl),
        (C.StrictMode = v),
        (C.Suspense = D),
        (C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = L),
        (C.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function (s) {
                return L.H.useMemoCache(s);
            },
        }),
        (C.cache = function (s) {
            return function () {
                return s.apply(null, arguments);
            };
        }),
        (C.cloneElement = function (s, _, O) {
            if (s == null)
                throw Error(
                    "The argument must be a React element, but you passed " +
                        s +
                        "."
                );
            var z = Ul({}, s.props),
                N = s.key,
                $ = void 0;
            if (_ != null)
                for (X in (_.ref !== void 0 && ($ = void 0),
                _.key !== void 0 && (N = "" + _.key),
                _))
                    !vl.call(_, X) ||
                        X === "key" ||
                        X === "__self" ||
                        X === "__source" ||
                        (X === "ref" && _.ref === void 0) ||
                        (z[X] = _[X]);
            var X = arguments.length - 2;
            if (X === 1) z.children = O;
            else if (1 < X) {
                for (var Fl = Array(X), ol = 0; ol < X; ol++)
                    Fl[ol] = arguments[ol + 2];
                z.children = Fl;
            }
            return Bl(s.type, N, void 0, void 0, $, z);
        }),
        (C.createContext = function (s) {
            return (
                (s = {
                    $$typeof: I,
                    _currentValue: s,
                    _currentValue2: s,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                }),
                (s.Provider = s),
                (s.Consumer = { $$typeof: G, _context: s }),
                s
            );
        }),
        (C.createElement = function (s, _, O) {
            var z,
                N = {},
                $ = null;
            if (_ != null)
                for (z in (_.key !== void 0 && ($ = "" + _.key), _))
                    vl.call(_, z) &&
                        z !== "key" &&
                        z !== "__self" &&
                        z !== "__source" &&
                        (N[z] = _[z]);
            var X = arguments.length - 2;
            if (X === 1) N.children = O;
            else if (1 < X) {
                for (var Fl = Array(X), ol = 0; ol < X; ol++)
                    Fl[ol] = arguments[ol + 2];
                N.children = Fl;
            }
            if (s && s.defaultProps)
                for (z in ((X = s.defaultProps), X))
                    N[z] === void 0 && (N[z] = X[z]);
            return Bl(s, $, void 0, void 0, null, N);
        }),
        (C.createRef = function () {
            return { current: null };
        }),
        (C.forwardRef = function (s) {
            return { $$typeof: Ml, render: s };
        }),
        (C.isValidElement = Ll),
        (C.lazy = function (s) {
            return {
                $$typeof: R,
                _payload: { _status: -1, _result: s },
                _init: p,
            };
        }),
        (C.memo = function (s, _) {
            return { $$typeof: T, type: s, compare: _ === void 0 ? null : _ };
        }),
        (C.startTransition = function (s) {
            var _ = L.T,
                O = {};
            L.T = O;
            try {
                var z = s(),
                    N = L.S;
                N !== null && N(O, z),
                    typeof z == "object" &&
                        z !== null &&
                        typeof z.then == "function" &&
                        z.then(il, B);
            } catch ($) {
                B($);
            } finally {
                L.T = _;
            }
        }),
        (C.unstable_useCacheRefresh = function () {
            return L.H.useCacheRefresh();
        }),
        (C.use = function (s) {
            return L.H.use(s);
        }),
        (C.useActionState = function (s, _, O) {
            return L.H.useActionState(s, _, O);
        }),
        (C.useCallback = function (s, _) {
            return L.H.useCallback(s, _);
        }),
        (C.useContext = function (s) {
            return L.H.useContext(s);
        }),
        (C.useDebugValue = function () {}),
        (C.useDeferredValue = function (s, _) {
            return L.H.useDeferredValue(s, _);
        }),
        (C.useEffect = function (s, _, O) {
            var z = L.H;
            if (typeof O == "function")
                throw Error(
                    "useEffect CRUD overload is not enabled in this build of React."
                );
            return z.useEffect(s, _);
        }),
        (C.useId = function () {
            return L.H.useId();
        }),
        (C.useImperativeHandle = function (s, _, O) {
            return L.H.useImperativeHandle(s, _, O);
        }),
        (C.useInsertionEffect = function (s, _) {
            return L.H.useInsertionEffect(s, _);
        }),
        (C.useLayoutEffect = function (s, _) {
            return L.H.useLayoutEffect(s, _);
        }),
        (C.useMemo = function (s, _) {
            return L.H.useMemo(s, _);
        }),
        (C.useOptimistic = function (s, _) {
            return L.H.useOptimistic(s, _);
        }),
        (C.useReducer = function (s, _, O) {
            return L.H.useReducer(s, _, O);
        }),
        (C.useRef = function (s) {
            return L.H.useRef(s);
        }),
        (C.useState = function (s) {
            return L.H.useState(s);
        }),
        (C.useSyncExternalStore = function (s, _, O) {
            return L.H.useSyncExternalStore(s, _, O);
        }),
        (C.useTransition = function () {
            return L.H.useTransition();
        }),
        (C.version = "19.1.0"),
        C
    );
}
var ed;
function cf() {
    return ed || ((ed = 1), (Pc.exports = G0())), Pc.exports;
}
var Lt = cf(),
    lf = { exports: {} },
    Ae = {},
    tf = { exports: {} },
    af = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nd;
function X0() {
    return (
        nd ||
            ((nd = 1),
            (function (E) {
                function J(S, p) {
                    var B = S.length;
                    S.push(p);
                    l: for (; 0 < B; ) {
                        var il = (B - 1) >>> 1,
                            s = S[il];
                        if (0 < j(s, p)) (S[il] = p), (S[B] = s), (B = il);
                        else break l;
                    }
                }
                function Q(S) {
                    return S.length === 0 ? null : S[0];
                }
                function v(S) {
                    if (S.length === 0) return null;
                    var p = S[0],
                        B = S.pop();
                    if (B !== p) {
                        S[0] = B;
                        l: for (
                            var il = 0, s = S.length, _ = s >>> 1;
                            il < _;

                        ) {
                            var O = 2 * (il + 1) - 1,
                                z = S[O],
                                N = O + 1,
                                $ = S[N];
                            if (0 > j(z, B))
                                N < s && 0 > j($, z)
                                    ? ((S[il] = $), (S[N] = B), (il = N))
                                    : ((S[il] = z), (S[O] = B), (il = O));
                            else if (N < s && 0 > j($, B))
                                (S[il] = $), (S[N] = B), (il = N);
                            else break l;
                        }
                    }
                    return p;
                }
                function j(S, p) {
                    var B = S.sortIndex - p.sortIndex;
                    return B !== 0 ? B : S.id - p.id;
                }
                if (
                    ((E.unstable_now = void 0),
                    typeof performance == "object" &&
                        typeof performance.now == "function")
                ) {
                    var G = performance;
                    E.unstable_now = function () {
                        return G.now();
                    };
                } else {
                    var I = Date,
                        Ml = I.now();
                    E.unstable_now = function () {
                        return I.now() - Ml;
                    };
                }
                var D = [],
                    T = [],
                    R = 1,
                    tl = null,
                    al = 3,
                    Dl = !1,
                    Ul = !1,
                    Vl = !1,
                    sl = !1,
                    Wl = typeof setTimeout == "function" ? setTimeout : null,
                    Cl =
                        typeof clearTimeout == "function" ? clearTimeout : null,
                    Al = typeof setImmediate < "u" ? setImmediate : null;
                function Rl(S) {
                    for (var p = Q(T); p !== null; ) {
                        if (p.callback === null) v(T);
                        else if (p.startTime <= S)
                            v(T), (p.sortIndex = p.expirationTime), J(D, p);
                        else break;
                        p = Q(T);
                    }
                }
                function L(S) {
                    if (((Vl = !1), Rl(S), !Ul))
                        if (Q(D) !== null) (Ul = !0), vl || ((vl = !0), xl());
                        else {
                            var p = Q(T);
                            p !== null && jl(L, p.startTime - S);
                        }
                }
                var vl = !1,
                    Bl = -1,
                    Yl = 5,
                    Ll = -1;
                function xa() {
                    return sl ? !0 : !(E.unstable_now() - Ll < Yl);
                }
                function Ot() {
                    if (((sl = !1), vl)) {
                        var S = E.unstable_now();
                        Ll = S;
                        var p = !0;
                        try {
                            l: {
                                (Ul = !1),
                                    Vl && ((Vl = !1), Cl(Bl), (Bl = -1)),
                                    (Dl = !0);
                                var B = al;
                                try {
                                    t: {
                                        for (
                                            Rl(S), tl = Q(D);
                                            tl !== null &&
                                            !(tl.expirationTime > S && xa());

                                        ) {
                                            var il = tl.callback;
                                            if (typeof il == "function") {
                                                (tl.callback = null),
                                                    (al = tl.priorityLevel);
                                                var s = il(
                                                    tl.expirationTime <= S
                                                );
                                                if (
                                                    ((S = E.unstable_now()),
                                                    typeof s == "function")
                                                ) {
                                                    (tl.callback = s),
                                                        Rl(S),
                                                        (p = !0);
                                                    break t;
                                                }
                                                tl === Q(D) && v(D), Rl(S);
                                            } else v(D);
                                            tl = Q(D);
                                        }
                                        if (tl !== null) p = !0;
                                        else {
                                            var _ = Q(T);
                                            _ !== null &&
                                                jl(L, _.startTime - S),
                                                (p = !1);
                                        }
                                    }
                                    break l;
                                } finally {
                                    (tl = null), (al = B), (Dl = !1);
                                }
                                p = void 0;
                            }
                        } finally {
                            p ? xl() : (vl = !1);
                        }
                    }
                }
                var xl;
                if (typeof Al == "function")
                    xl = function () {
                        Al(Ot);
                    };
                else if (typeof MessageChannel < "u") {
                    var ma = new MessageChannel(),
                        ga = ma.port2;
                    (ma.port1.onmessage = Ot),
                        (xl = function () {
                            ga.postMessage(null);
                        });
                } else
                    xl = function () {
                        Wl(Ot, 0);
                    };
                function jl(S, p) {
                    Bl = Wl(function () {
                        S(E.unstable_now());
                    }, p);
                }
                (E.unstable_IdlePriority = 5),
                    (E.unstable_ImmediatePriority = 1),
                    (E.unstable_LowPriority = 4),
                    (E.unstable_NormalPriority = 3),
                    (E.unstable_Profiling = null),
                    (E.unstable_UserBlockingPriority = 2),
                    (E.unstable_cancelCallback = function (S) {
                        S.callback = null;
                    }),
                    (E.unstable_forceFrameRate = function (S) {
                        0 > S || 125 < S
                            ? console.error(
                                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                              )
                            : (Yl = 0 < S ? Math.floor(1e3 / S) : 5);
                    }),
                    (E.unstable_getCurrentPriorityLevel = function () {
                        return al;
                    }),
                    (E.unstable_next = function (S) {
                        switch (al) {
                            case 1:
                            case 2:
                            case 3:
                                var p = 3;
                                break;
                            default:
                                p = al;
                        }
                        var B = al;
                        al = p;
                        try {
                            return S();
                        } finally {
                            al = B;
                        }
                    }),
                    (E.unstable_requestPaint = function () {
                        sl = !0;
                    }),
                    (E.unstable_runWithPriority = function (S, p) {
                        switch (S) {
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                break;
                            default:
                                S = 3;
                        }
                        var B = al;
                        al = S;
                        try {
                            return p();
                        } finally {
                            al = B;
                        }
                    }),
                    (E.unstable_scheduleCallback = function (S, p, B) {
                        var il = E.unstable_now();
                        switch (
                            (typeof B == "object" && B !== null
                                ? ((B = B.delay),
                                  (B =
                                      typeof B == "number" && 0 < B
                                          ? il + B
                                          : il))
                                : (B = il),
                            S)
                        ) {
                            case 1:
                                var s = -1;
                                break;
                            case 2:
                                s = 250;
                                break;
                            case 5:
                                s = 1073741823;
                                break;
                            case 4:
                                s = 1e4;
                                break;
                            default:
                                s = 5e3;
                        }
                        return (
                            (s = B + s),
                            (S = {
                                id: R++,
                                callback: p,
                                priorityLevel: S,
                                startTime: B,
                                expirationTime: s,
                                sortIndex: -1,
                            }),
                            B > il
                                ? ((S.sortIndex = B),
                                  J(T, S),
                                  Q(D) === null &&
                                      S === Q(T) &&
                                      (Vl ? (Cl(Bl), (Bl = -1)) : (Vl = !0),
                                      jl(L, B - il)))
                                : ((S.sortIndex = s),
                                  J(D, S),
                                  Ul ||
                                      Dl ||
                                      ((Ul = !0), vl || ((vl = !0), xl()))),
                            S
                        );
                    }),
                    (E.unstable_shouldYield = xa),
                    (E.unstable_wrapCallback = function (S) {
                        var p = al;
                        return function () {
                            var B = al;
                            al = p;
                            try {
                                return S.apply(this, arguments);
                            } finally {
                                al = B;
                            }
                        };
                    });
            })(af)),
        af
    );
}
var id;
function Q0() {
    return id || ((id = 1), (tf.exports = X0())), tf.exports;
}
var uf = { exports: {} },
    Ql = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cd;
function C0() {
    if (cd) return Ql;
    cd = 1;
    var E = cf();
    function J(D) {
        var T = "https://react.dev/errors/" + D;
        if (1 < arguments.length) {
            T += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var R = 2; R < arguments.length; R++)
                T += "&args[]=" + encodeURIComponent(arguments[R]);
        }
        return (
            "Minified React error #" +
            D +
            "; visit " +
            T +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
    }
    function Q() {}
    var v = {
            d: {
                f: Q,
                r: function () {
                    throw Error(J(522));
                },
                D: Q,
                C: Q,
                L: Q,
                m: Q,
                X: Q,
                S: Q,
                M: Q,
            },
            p: 0,
            findDOMNode: null,
        },
        j = Symbol.for("react.portal");
    function G(D, T, R) {
        var tl =
            3 < arguments.length && arguments[3] !== void 0
                ? arguments[3]
                : null;
        return {
            $$typeof: j,
            key: tl == null ? null : "" + tl,
            children: D,
            containerInfo: T,
            implementation: R,
        };
    }
    var I = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function Ml(D, T) {
        if (D === "font") return "";
        if (typeof T == "string") return T === "use-credentials" ? T : "";
    }
    return (
        (Ql.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = v),
        (Ql.createPortal = function (D, T) {
            var R =
                2 < arguments.length && arguments[2] !== void 0
                    ? arguments[2]
                    : null;
            if (
                !T ||
                (T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11)
            )
                throw Error(J(299));
            return G(D, T, null, R);
        }),
        (Ql.flushSync = function (D) {
            var T = I.T,
                R = v.p;
            try {
                if (((I.T = null), (v.p = 2), D)) return D();
            } finally {
                (I.T = T), (v.p = R), v.d.f();
            }
        }),
        (Ql.preconnect = function (D, T) {
            typeof D == "string" &&
                (T
                    ? ((T = T.crossOrigin),
                      (T =
                          typeof T == "string"
                              ? T === "use-credentials"
                                  ? T
                                  : ""
                              : void 0))
                    : (T = null),
                v.d.C(D, T));
        }),
        (Ql.prefetchDNS = function (D) {
            typeof D == "string" && v.d.D(D);
        }),
        (Ql.preinit = function (D, T) {
            if (typeof D == "string" && T && typeof T.as == "string") {
                var R = T.as,
                    tl = Ml(R, T.crossOrigin),
                    al = typeof T.integrity == "string" ? T.integrity : void 0,
                    Dl =
                        typeof T.fetchPriority == "string"
                            ? T.fetchPriority
                            : void 0;
                R === "style"
                    ? v.d.S(
                          D,
                          typeof T.precedence == "string"
                              ? T.precedence
                              : void 0,
                          { crossOrigin: tl, integrity: al, fetchPriority: Dl }
                      )
                    : R === "script" &&
                      v.d.X(D, {
                          crossOrigin: tl,
                          integrity: al,
                          fetchPriority: Dl,
                          nonce: typeof T.nonce == "string" ? T.nonce : void 0,
                      });
            }
        }),
        (Ql.preinitModule = function (D, T) {
            if (typeof D == "string")
                if (typeof T == "object" && T !== null) {
                    if (T.as == null || T.as === "script") {
                        var R = Ml(T.as, T.crossOrigin);
                        v.d.M(D, {
                            crossOrigin: R,
                            integrity:
                                typeof T.integrity == "string"
                                    ? T.integrity
                                    : void 0,
                            nonce:
                                typeof T.nonce == "string" ? T.nonce : void 0,
                        });
                    }
                } else T == null && v.d.M(D);
        }),
        (Ql.preload = function (D, T) {
            if (
                typeof D == "string" &&
                typeof T == "object" &&
                T !== null &&
                typeof T.as == "string"
            ) {
                var R = T.as,
                    tl = Ml(R, T.crossOrigin);
                v.d.L(D, R, {
                    crossOrigin: tl,
                    integrity:
                        typeof T.integrity == "string" ? T.integrity : void 0,
                    nonce: typeof T.nonce == "string" ? T.nonce : void 0,
                    type: typeof T.type == "string" ? T.type : void 0,
                    fetchPriority:
                        typeof T.fetchPriority == "string"
                            ? T.fetchPriority
                            : void 0,
                    referrerPolicy:
                        typeof T.referrerPolicy == "string"
                            ? T.referrerPolicy
                            : void 0,
                    imageSrcSet:
                        typeof T.imageSrcSet == "string"
                            ? T.imageSrcSet
                            : void 0,
                    imageSizes:
                        typeof T.imageSizes == "string" ? T.imageSizes : void 0,
                    media: typeof T.media == "string" ? T.media : void 0,
                });
            }
        }),
        (Ql.preloadModule = function (D, T) {
            if (typeof D == "string")
                if (T) {
                    var R = Ml(T.as, T.crossOrigin);
                    v.d.m(D, {
                        as:
                            typeof T.as == "string" && T.as !== "script"
                                ? T.as
                                : void 0,
                        crossOrigin: R,
                        integrity:
                            typeof T.integrity == "string"
                                ? T.integrity
                                : void 0,
                    });
                } else v.d.m(D);
        }),
        (Ql.requestFormReset = function (D) {
            v.d.r(D);
        }),
        (Ql.unstable_batchedUpdates = function (D, T) {
            return D(T);
        }),
        (Ql.useFormState = function (D, T, R) {
            return I.H.useFormState(D, T, R);
        }),
        (Ql.useFormStatus = function () {
            return I.H.useHostTransitionStatus();
        }),
        (Ql.version = "19.1.0"),
        Ql
    );
}
var fd;
function Z0() {
    if (fd) return uf.exports;
    fd = 1;
    function E() {
        if (
            !(
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
            )
        )
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E);
            } catch (J) {
                console.error(J);
            }
    }
    return E(), (uf.exports = C0()), uf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sd;
function V0() {
    if (sd) return Ae;
    sd = 1;
    var E = Q0(),
        J = cf(),
        Q = Z0();
    function v(l) {
        var t = "https://react.dev/errors/" + l;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var a = 2; a < arguments.length; a++)
                t += "&args[]=" + encodeURIComponent(arguments[a]);
        }
        return (
            "Minified React error #" +
            l +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
    }
    function j(l) {
        return !(
            !l ||
            (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11)
        );
    }
    function G(l) {
        var t = l,
            a = l;
        if (l.alternate) for (; t.return; ) t = t.return;
        else {
            l = t;
            do
                (t = l),
                    (t.flags & 4098) !== 0 && (a = t.return),
                    (l = t.return);
            while (l);
        }
        return t.tag === 3 ? a : null;
    }
    function I(l) {
        if (l.tag === 13) {
            var t = l.memoizedState;
            if (
                (t === null &&
                    ((l = l.alternate), l !== null && (t = l.memoizedState)),
                t !== null)
            )
                return t.dehydrated;
        }
        return null;
    }
    function Ml(l) {
        if (G(l) !== l) throw Error(v(188));
    }
    function D(l) {
        var t = l.alternate;
        if (!t) {
            if (((t = G(l)), t === null)) throw Error(v(188));
            return t !== l ? null : l;
        }
        for (var a = l, u = t; ; ) {
            var e = a.return;
            if (e === null) break;
            var n = e.alternate;
            if (n === null) {
                if (((u = e.return), u !== null)) {
                    a = u;
                    continue;
                }
                break;
            }
            if (e.child === n.child) {
                for (n = e.child; n; ) {
                    if (n === a) return Ml(e), l;
                    if (n === u) return Ml(e), t;
                    n = n.sibling;
                }
                throw Error(v(188));
            }
            if (a.return !== u.return) (a = e), (u = n);
            else {
                for (var i = !1, c = e.child; c; ) {
                    if (c === a) {
                        (i = !0), (a = e), (u = n);
                        break;
                    }
                    if (c === u) {
                        (i = !0), (u = e), (a = n);
                        break;
                    }
                    c = c.sibling;
                }
                if (!i) {
                    for (c = n.child; c; ) {
                        if (c === a) {
                            (i = !0), (a = n), (u = e);
                            break;
                        }
                        if (c === u) {
                            (i = !0), (u = n), (a = e);
                            break;
                        }
                        c = c.sibling;
                    }
                    if (!i) throw Error(v(189));
                }
            }
            if (a.alternate !== u) throw Error(v(190));
        }
        if (a.tag !== 3) throw Error(v(188));
        return a.stateNode.current === a ? l : t;
    }
    function T(l) {
        var t = l.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return l;
        for (l = l.child; l !== null; ) {
            if (((t = T(l)), t !== null)) return t;
            l = l.sibling;
        }
        return null;
    }
    var R = Object.assign,
        tl = Symbol.for("react.element"),
        al = Symbol.for("react.transitional.element"),
        Dl = Symbol.for("react.portal"),
        Ul = Symbol.for("react.fragment"),
        Vl = Symbol.for("react.strict_mode"),
        sl = Symbol.for("react.profiler"),
        Wl = Symbol.for("react.provider"),
        Cl = Symbol.for("react.consumer"),
        Al = Symbol.for("react.context"),
        Rl = Symbol.for("react.forward_ref"),
        L = Symbol.for("react.suspense"),
        vl = Symbol.for("react.suspense_list"),
        Bl = Symbol.for("react.memo"),
        Yl = Symbol.for("react.lazy"),
        Ll = Symbol.for("react.activity"),
        xa = Symbol.for("react.memo_cache_sentinel"),
        Ot = Symbol.iterator;
    function xl(l) {
        return l === null || typeof l != "object"
            ? null
            : ((l = (Ot && l[Ot]) || l["@@iterator"]),
              typeof l == "function" ? l : null);
    }
    var ma = Symbol.for("react.client.reference");
    function ga(l) {
        if (l == null) return null;
        if (typeof l == "function")
            return l.$$typeof === ma ? null : l.displayName || l.name || null;
        if (typeof l == "string") return l;
        switch (l) {
            case Ul:
                return "Fragment";
            case sl:
                return "Profiler";
            case Vl:
                return "StrictMode";
            case L:
                return "Suspense";
            case vl:
                return "SuspenseList";
            case Ll:
                return "Activity";
        }
        if (typeof l == "object")
            switch (l.$$typeof) {
                case Dl:
                    return "Portal";
                case Al:
                    return (l.displayName || "Context") + ".Provider";
                case Cl:
                    return (l._context.displayName || "Context") + ".Consumer";
                case Rl:
                    var t = l.render;
                    return (
                        (l = l.displayName),
                        l ||
                            ((l = t.displayName || t.name || ""),
                            (l =
                                l !== ""
                                    ? "ForwardRef(" + l + ")"
                                    : "ForwardRef")),
                        l
                    );
                case Bl:
                    return (
                        (t = l.displayName || null),
                        t !== null ? t : ga(l.type) || "Memo"
                    );
                case Yl:
                    (t = l._payload), (l = l._init);
                    try {
                        return ga(l(t));
                    } catch {}
            }
        return null;
    }
    var jl = Array.isArray,
        S = J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        p = Q.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        B = { pending: !1, data: null, method: null, action: null },
        il = [],
        s = -1;
    function _(l) {
        return { current: l };
    }
    function O(l) {
        0 > s || ((l.current = il[s]), (il[s] = null), s--);
    }
    function z(l, t) {
        s++, (il[s] = l.current), (l.current = t);
    }
    var N = _(null),
        $ = _(null),
        X = _(null),
        Fl = _(null);
    function ol(l, t) {
        switch ((z(X, t), z($, l), z(N, null), t.nodeType)) {
            case 9:
            case 11:
                l = (l = t.documentElement) && (l = l.namespaceURI) ? Ur(l) : 0;
                break;
            default:
                if (((l = t.tagName), (t = t.namespaceURI)))
                    (t = Ur(t)), (l = Rr(t, l));
                else
                    switch (l) {
                        case "svg":
                            l = 1;
                            break;
                        case "math":
                            l = 2;
                            break;
                        default:
                            l = 0;
                    }
        }
        O(N), z(N, l);
    }
    function Kt() {
        O(N), O($), O(X);
    }
    function jn(l) {
        l.memoizedState !== null && z(Fl, l);
        var t = N.current,
            a = Rr(t, l.type);
        t !== a && (z($, l), z(N, a));
    }
    function Te(l) {
        $.current === l && (O(N), O($)),
            Fl.current === l && (O(Fl), (ye._currentValue = B));
    }
    var Gn = Object.prototype.hasOwnProperty,
        Xn = E.unstable_scheduleCallback,
        Qn = E.unstable_cancelCallback,
        yd = E.unstable_shouldYield,
        vd = E.unstable_requestPaint,
        bt = E.unstable_now,
        md = E.unstable_getCurrentPriorityLevel,
        ff = E.unstable_ImmediatePriority,
        sf = E.unstable_UserBlockingPriority,
        _e = E.unstable_NormalPriority,
        gd = E.unstable_LowPriority,
        of = E.unstable_IdlePriority,
        Sd = E.log,
        bd = E.unstable_setDisableYieldValue,
        _u = null,
        Il = null;
    function wt(l) {
        if (
            (typeof Sd == "function" && bd(l),
            Il && typeof Il.setStrictMode == "function")
        )
            try {
                Il.setStrictMode(_u, l);
            } catch {}
    }
    var Pl = Math.clz32 ? Math.clz32 : _d,
        Ad = Math.log,
        Td = Math.LN2;
    function _d(l) {
        return (l >>>= 0), l === 0 ? 32 : (31 - ((Ad(l) / Td) | 0)) | 0;
    }
    var Ee = 256,
        ze = 4194304;
    function Sa(l) {
        var t = l & 42;
        if (t !== 0) return t;
        switch (l & -l) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
                return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return l & 4194048;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return l & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return l;
        }
    }
    function pe(l, t, a) {
        var u = l.pendingLanes;
        if (u === 0) return 0;
        var e = 0,
            n = l.suspendedLanes,
            i = l.pingedLanes;
        l = l.warmLanes;
        var c = u & 134217727;
        return (
            c !== 0
                ? ((u = c & ~n),
                  u !== 0
                      ? (e = Sa(u))
                      : ((i &= c),
                        i !== 0
                            ? (e = Sa(i))
                            : a || ((a = c & ~l), a !== 0 && (e = Sa(a)))))
                : ((c = u & ~n),
                  c !== 0
                      ? (e = Sa(c))
                      : i !== 0
                      ? (e = Sa(i))
                      : a || ((a = u & ~l), a !== 0 && (e = Sa(a)))),
            e === 0
                ? 0
                : t !== 0 &&
                  t !== e &&
                  (t & n) === 0 &&
                  ((n = e & -e),
                  (a = t & -t),
                  n >= a || (n === 32 && (a & 4194048) !== 0))
                ? t
                : e
        );
    }
    function Eu(l, t) {
        return (
            (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0
        );
    }
    function Ed(l, t) {
        switch (l) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return t + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1;
        }
    }
    function rf() {
        var l = Ee;
        return (Ee <<= 1), (Ee & 4194048) === 0 && (Ee = 256), l;
    }
    function df() {
        var l = ze;
        return (ze <<= 1), (ze & 62914560) === 0 && (ze = 4194304), l;
    }
    function Cn(l) {
        for (var t = [], a = 0; 31 > a; a++) t.push(l);
        return t;
    }
    function zu(l, t) {
        (l.pendingLanes |= t),
            t !== 268435456 &&
                ((l.suspendedLanes = 0),
                (l.pingedLanes = 0),
                (l.warmLanes = 0));
    }
    function zd(l, t, a, u, e, n) {
        var i = l.pendingLanes;
        (l.pendingLanes = a),
            (l.suspendedLanes = 0),
            (l.pingedLanes = 0),
            (l.warmLanes = 0),
            (l.expiredLanes &= a),
            (l.entangledLanes &= a),
            (l.errorRecoveryDisabledLanes &= a),
            (l.shellSuspendCounter = 0);
        var c = l.entanglements,
            f = l.expirationTimes,
            h = l.hiddenUpdates;
        for (a = i & ~a; 0 < a; ) {
            var g = 31 - Pl(a),
                A = 1 << g;
            (c[g] = 0), (f[g] = -1);
            var y = h[g];
            if (y !== null)
                for (h[g] = null, g = 0; g < y.length; g++) {
                    var m = y[g];
                    m !== null && (m.lane &= -536870913);
                }
            a &= ~A;
        }
        u !== 0 && hf(l, u, 0),
            n !== 0 &&
                e === 0 &&
                l.tag !== 0 &&
                (l.suspendedLanes |= n & ~(i & ~t));
    }
    function hf(l, t, a) {
        (l.pendingLanes |= t), (l.suspendedLanes &= ~t);
        var u = 31 - Pl(t);
        (l.entangledLanes |= t),
            (l.entanglements[u] =
                l.entanglements[u] | 1073741824 | (a & 4194090));
    }
    function yf(l, t) {
        var a = (l.entangledLanes |= t);
        for (l = l.entanglements; a; ) {
            var u = 31 - Pl(a),
                e = 1 << u;
            (e & t) | (l[u] & t) && (l[u] |= t), (a &= ~e);
        }
    }
    function Zn(l) {
        switch (l) {
            case 2:
                l = 1;
                break;
            case 8:
                l = 4;
                break;
            case 32:
                l = 16;
                break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                l = 128;
                break;
            case 268435456:
                l = 134217728;
                break;
            default:
                l = 0;
        }
        return l;
    }
    function Vn(l) {
        return (
            (l &= -l),
            2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
        );
    }
    function vf() {
        var l = p.p;
        return l !== 0
            ? l
            : ((l = window.event), l === void 0 ? 32 : $r(l.type));
    }
    function pd(l, t) {
        var a = p.p;
        try {
            return (p.p = l), t();
        } finally {
            p.p = a;
        }
    }
    var Jt = Math.random().toString(36).slice(2),
        Gl = "__reactFiber$" + Jt,
        Kl = "__reactProps$" + Jt,
        ja = "__reactContainer$" + Jt,
        Ln = "__reactEvents$" + Jt,
        Od = "__reactListeners$" + Jt,
        Md = "__reactHandles$" + Jt,
        mf = "__reactResources$" + Jt,
        pu = "__reactMarker$" + Jt;
    function Kn(l) {
        delete l[Gl], delete l[Kl], delete l[Ln], delete l[Od], delete l[Md];
    }
    function Ga(l) {
        var t = l[Gl];
        if (t) return t;
        for (var a = l.parentNode; a; ) {
            if ((t = a[ja] || a[Gl])) {
                if (
                    ((a = t.alternate),
                    t.child !== null || (a !== null && a.child !== null))
                )
                    for (l = Br(l); l !== null; ) {
                        if ((a = l[Gl])) return a;
                        l = Br(l);
                    }
                return t;
            }
            (l = a), (a = l.parentNode);
        }
        return null;
    }
    function Xa(l) {
        if ((l = l[Gl] || l[ja])) {
            var t = l.tag;
            if (
                t === 5 ||
                t === 6 ||
                t === 13 ||
                t === 26 ||
                t === 27 ||
                t === 3
            )
                return l;
        }
        return null;
    }
    function Ou(l) {
        var t = l.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
        throw Error(v(33));
    }
    function Qa(l) {
        var t = l[mf];
        return (
            t ||
                (t = l[mf] =
                    {
                        hoistableStyles: new Map(),
                        hoistableScripts: new Map(),
                    }),
            t
        );
    }
    function El(l) {
        l[pu] = !0;
    }
    var gf = new Set(),
        Sf = {};
    function ba(l, t) {
        Ca(l, t), Ca(l + "Capture", t);
    }
    function Ca(l, t) {
        for (Sf[l] = t, l = 0; l < t.length; l++) gf.add(t[l]);
    }
    var Dd = RegExp(
            "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
        ),
        bf = {},
        Af = {};
    function Ud(l) {
        return Gn.call(Af, l)
            ? !0
            : Gn.call(bf, l)
            ? !1
            : Dd.test(l)
            ? (Af[l] = !0)
            : ((bf[l] = !0), !1);
    }
    function Oe(l, t, a) {
        if (Ud(t))
            if (a === null) l.removeAttribute(t);
            else {
                switch (typeof a) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        l.removeAttribute(t);
                        return;
                    case "boolean":
                        var u = t.toLowerCase().slice(0, 5);
                        if (u !== "data-" && u !== "aria-") {
                            l.removeAttribute(t);
                            return;
                        }
                }
                l.setAttribute(t, "" + a);
            }
    }
    function Me(l, t, a) {
        if (a === null) l.removeAttribute(t);
        else {
            switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    l.removeAttribute(t);
                    return;
            }
            l.setAttribute(t, "" + a);
        }
    }
    function Mt(l, t, a, u) {
        if (u === null) l.removeAttribute(a);
        else {
            switch (typeof u) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    l.removeAttribute(a);
                    return;
            }
            l.setAttributeNS(t, a, "" + u);
        }
    }
    var wn, Tf;
    function Za(l) {
        if (wn === void 0)
            try {
                throw Error();
            } catch (a) {
                var t = a.stack.trim().match(/\n( *(at )?)/);
                (wn = (t && t[1]) || ""),
                    (Tf =
                        -1 <
                        a.stack.indexOf(`
    at`)
                            ? " (<anonymous>)"
                            : -1 < a.stack.indexOf("@")
                            ? "@unknown:0:0"
                            : "");
            }
        return (
            `
` +
            wn +
            l +
            Tf
        );
    }
    var Jn = !1;
    function kn(l, t) {
        if (!l || Jn) return "";
        Jn = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var u = {
                DetermineComponentFrameRoot: function () {
                    try {
                        if (t) {
                            var A = function () {
                                throw Error();
                            };
                            if (
                                (Object.defineProperty(A.prototype, "props", {
                                    set: function () {
                                        throw Error();
                                    },
                                }),
                                typeof Reflect == "object" && Reflect.construct)
                            ) {
                                try {
                                    Reflect.construct(A, []);
                                } catch (m) {
                                    var y = m;
                                }
                                Reflect.construct(l, [], A);
                            } else {
                                try {
                                    A.call();
                                } catch (m) {
                                    y = m;
                                }
                                l.call(A.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (m) {
                                y = m;
                            }
                            (A = l()) &&
                                typeof A.catch == "function" &&
                                A.catch(function () {});
                        }
                    } catch (m) {
                        if (m && y && typeof m.stack == "string")
                            return [m.stack, y.stack];
                    }
                    return [null, null];
                },
            };
            u.DetermineComponentFrameRoot.displayName =
                "DetermineComponentFrameRoot";
            var e = Object.getOwnPropertyDescriptor(
                u.DetermineComponentFrameRoot,
                "name"
            );
            e &&
                e.configurable &&
                Object.defineProperty(u.DetermineComponentFrameRoot, "name", {
                    value: "DetermineComponentFrameRoot",
                });
            var n = u.DetermineComponentFrameRoot(),
                i = n[0],
                c = n[1];
            if (i && c) {
                var f = i.split(`
`),
                    h = c.split(`
`);
                for (
                    e = u = 0;
                    u < f.length &&
                    !f[u].includes("DetermineComponentFrameRoot");

                )
                    u++;
                for (
                    ;
                    e < h.length &&
                    !h[e].includes("DetermineComponentFrameRoot");

                )
                    e++;
                if (u === f.length || e === h.length)
                    for (
                        u = f.length - 1, e = h.length - 1;
                        1 <= u && 0 <= e && f[u] !== h[e];

                    )
                        e--;
                for (; 1 <= u && 0 <= e; u--, e--)
                    if (f[u] !== h[e]) {
                        if (u !== 1 || e !== 1)
                            do
                                if ((u--, e--, 0 > e || f[u] !== h[e])) {
                                    var g =
                                        `
` + f[u].replace(" at new ", " at ");
                                    return (
                                        l.displayName &&
                                            g.includes("<anonymous>") &&
                                            (g = g.replace(
                                                "<anonymous>",
                                                l.displayName
                                            )),
                                        g
                                    );
                                }
                            while (1 <= u && 0 <= e);
                        break;
                    }
            }
        } finally {
            (Jn = !1), (Error.prepareStackTrace = a);
        }
        return (a = l ? l.displayName || l.name : "") ? Za(a) : "";
    }
    function Rd(l) {
        switch (l.tag) {
            case 26:
            case 27:
            case 5:
                return Za(l.type);
            case 16:
                return Za("Lazy");
            case 13:
                return Za("Suspense");
            case 19:
                return Za("SuspenseList");
            case 0:
            case 15:
                return kn(l.type, !1);
            case 11:
                return kn(l.type.render, !1);
            case 1:
                return kn(l.type, !0);
            case 31:
                return Za("Activity");
            default:
                return "";
        }
    }
    function _f(l) {
        try {
            var t = "";
            do (t += Rd(l)), (l = l.return);
            while (l);
            return t;
        } catch (a) {
            return (
                `
Error generating stack: ` +
                a.message +
                `
` +
                a.stack
            );
        }
    }
    function ct(l) {
        switch (typeof l) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return l;
            case "object":
                return l;
            default:
                return "";
        }
    }
    function Ef(l) {
        var t = l.type;
        return (
            (l = l.nodeName) &&
            l.toLowerCase() === "input" &&
            (t === "checkbox" || t === "radio")
        );
    }
    function Nd(l) {
        var t = Ef(l) ? "checked" : "value",
            a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t),
            u = "" + l[t];
        if (
            !l.hasOwnProperty(t) &&
            typeof a < "u" &&
            typeof a.get == "function" &&
            typeof a.set == "function"
        ) {
            var e = a.get,
                n = a.set;
            return (
                Object.defineProperty(l, t, {
                    configurable: !0,
                    get: function () {
                        return e.call(this);
                    },
                    set: function (i) {
                        (u = "" + i), n.call(this, i);
                    },
                }),
                Object.defineProperty(l, t, { enumerable: a.enumerable }),
                {
                    getValue: function () {
                        return u;
                    },
                    setValue: function (i) {
                        u = "" + i;
                    },
                    stopTracking: function () {
                        (l._valueTracker = null), delete l[t];
                    },
                }
            );
        }
    }
    function De(l) {
        l._valueTracker || (l._valueTracker = Nd(l));
    }
    function zf(l) {
        if (!l) return !1;
        var t = l._valueTracker;
        if (!t) return !0;
        var a = t.getValue(),
            u = "";
        return (
            l && (u = Ef(l) ? (l.checked ? "true" : "false") : l.value),
            (l = u),
            l !== a ? (t.setValue(l), !0) : !1
        );
    }
    function Ue(l) {
        if (
            ((l = l || (typeof document < "u" ? document : void 0)),
            typeof l > "u")
        )
            return null;
        try {
            return l.activeElement || l.body;
        } catch {
            return l.body;
        }
    }
    var Hd = /[\n"\\]/g;
    function ft(l) {
        return l.replace(Hd, function (t) {
            return "\\" + t.charCodeAt(0).toString(16) + " ";
        });
    }
    function $n(l, t, a, u, e, n, i, c) {
        (l.name = ""),
            i != null &&
            typeof i != "function" &&
            typeof i != "symbol" &&
            typeof i != "boolean"
                ? (l.type = i)
                : l.removeAttribute("type"),
            t != null
                ? i === "number"
                    ? ((t === 0 && l.value === "") || l.value != t) &&
                      (l.value = "" + ct(t))
                    : l.value !== "" + ct(t) && (l.value = "" + ct(t))
                : (i !== "submit" && i !== "reset") ||
                  l.removeAttribute("value"),
            t != null
                ? Wn(l, i, ct(t))
                : a != null
                ? Wn(l, i, ct(a))
                : u != null && l.removeAttribute("value"),
            e == null && n != null && (l.defaultChecked = !!n),
            e != null &&
                (l.checked =
                    e && typeof e != "function" && typeof e != "symbol"),
            c != null &&
            typeof c != "function" &&
            typeof c != "symbol" &&
            typeof c != "boolean"
                ? (l.name = "" + ct(c))
                : l.removeAttribute("name");
    }
    function pf(l, t, a, u, e, n, i, c) {
        if (
            (n != null &&
                typeof n != "function" &&
                typeof n != "symbol" &&
                typeof n != "boolean" &&
                (l.type = n),
            t != null || a != null)
        ) {
            if (!((n !== "submit" && n !== "reset") || t != null)) return;
            (a = a != null ? "" + ct(a) : ""),
                (t = t != null ? "" + ct(t) : a),
                c || t === l.value || (l.value = t),
                (l.defaultValue = t);
        }
        (u = u ?? e),
            (u = typeof u != "function" && typeof u != "symbol" && !!u),
            (l.checked = c ? l.checked : !!u),
            (l.defaultChecked = !!u),
            i != null &&
                typeof i != "function" &&
                typeof i != "symbol" &&
                typeof i != "boolean" &&
                (l.name = i);
    }
    function Wn(l, t, a) {
        (t === "number" && Ue(l.ownerDocument) === l) ||
            l.defaultValue === "" + a ||
            (l.defaultValue = "" + a);
    }
    function Va(l, t, a, u) {
        if (((l = l.options), t)) {
            t = {};
            for (var e = 0; e < a.length; e++) t["$" + a[e]] = !0;
            for (a = 0; a < l.length; a++)
                (e = t.hasOwnProperty("$" + l[a].value)),
                    l[a].selected !== e && (l[a].selected = e),
                    e && u && (l[a].defaultSelected = !0);
        } else {
            for (a = "" + ct(a), t = null, e = 0; e < l.length; e++) {
                if (l[e].value === a) {
                    (l[e].selected = !0), u && (l[e].defaultSelected = !0);
                    return;
                }
                t !== null || l[e].disabled || (t = l[e]);
            }
            t !== null && (t.selected = !0);
        }
    }
    function Of(l, t, a) {
        if (
            t != null &&
            ((t = "" + ct(t)), t !== l.value && (l.value = t), a == null)
        ) {
            l.defaultValue !== t && (l.defaultValue = t);
            return;
        }
        l.defaultValue = a != null ? "" + ct(a) : "";
    }
    function Mf(l, t, a, u) {
        if (t == null) {
            if (u != null) {
                if (a != null) throw Error(v(92));
                if (jl(u)) {
                    if (1 < u.length) throw Error(v(93));
                    u = u[0];
                }
                a = u;
            }
            a == null && (a = ""), (t = a);
        }
        (a = ct(t)),
            (l.defaultValue = a),
            (u = l.textContent),
            u === a && u !== "" && u !== null && (l.value = u);
    }
    function La(l, t) {
        if (t) {
            var a = l.firstChild;
            if (a && a === l.lastChild && a.nodeType === 3) {
                a.nodeValue = t;
                return;
            }
        }
        l.textContent = t;
    }
    var qd = new Set(
        "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
            " "
        )
    );
    function Df(l, t, a) {
        var u = t.indexOf("--") === 0;
        a == null || typeof a == "boolean" || a === ""
            ? u
                ? l.setProperty(t, "")
                : t === "float"
                ? (l.cssFloat = "")
                : (l[t] = "")
            : u
            ? l.setProperty(t, a)
            : typeof a != "number" || a === 0 || qd.has(t)
            ? t === "float"
                ? (l.cssFloat = a)
                : (l[t] = ("" + a).trim())
            : (l[t] = a + "px");
    }
    function Uf(l, t, a) {
        if (t != null && typeof t != "object") throw Error(v(62));
        if (((l = l.style), a != null)) {
            for (var u in a)
                !a.hasOwnProperty(u) ||
                    (t != null && t.hasOwnProperty(u)) ||
                    (u.indexOf("--") === 0
                        ? l.setProperty(u, "")
                        : u === "float"
                        ? (l.cssFloat = "")
                        : (l[u] = ""));
            for (var e in t)
                (u = t[e]), t.hasOwnProperty(e) && a[e] !== u && Df(l, e, u);
        } else for (var n in t) t.hasOwnProperty(n) && Df(l, n, t[n]);
    }
    function Fn(l) {
        if (l.indexOf("-") === -1) return !1;
        switch (l) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0;
        }
    }
    var Bd = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"],
        ]),
        Yd =
            /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Re(l) {
        return Yd.test("" + l)
            ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
            : l;
    }
    var In = null;
    function Pn(l) {
        return (
            (l = l.target || l.srcElement || window),
            l.correspondingUseElement && (l = l.correspondingUseElement),
            l.nodeType === 3 ? l.parentNode : l
        );
    }
    var Ka = null,
        wa = null;
    function Rf(l) {
        var t = Xa(l);
        if (t && (l = t.stateNode)) {
            var a = l[Kl] || null;
            l: switch (((l = t.stateNode), t.type)) {
                case "input":
                    if (
                        ($n(
                            l,
                            a.value,
                            a.defaultValue,
                            a.defaultValue,
                            a.checked,
                            a.defaultChecked,
                            a.type,
                            a.name
                        ),
                        (t = a.name),
                        a.type === "radio" && t != null)
                    ) {
                        for (a = l; a.parentNode; ) a = a.parentNode;
                        for (
                            a = a.querySelectorAll(
                                'input[name="' + ft("" + t) + '"][type="radio"]'
                            ),
                                t = 0;
                            t < a.length;
                            t++
                        ) {
                            var u = a[t];
                            if (u !== l && u.form === l.form) {
                                var e = u[Kl] || null;
                                if (!e) throw Error(v(90));
                                $n(
                                    u,
                                    e.value,
                                    e.defaultValue,
                                    e.defaultValue,
                                    e.checked,
                                    e.defaultChecked,
                                    e.type,
                                    e.name
                                );
                            }
                        }
                        for (t = 0; t < a.length; t++)
                            (u = a[t]), u.form === l.form && zf(u);
                    }
                    break l;
                case "textarea":
                    Of(l, a.value, a.defaultValue);
                    break l;
                case "select":
                    (t = a.value), t != null && Va(l, !!a.multiple, t, !1);
            }
        }
    }
    var li = !1;
    function Nf(l, t, a) {
        if (li) return l(t, a);
        li = !0;
        try {
            var u = l(t);
            return u;
        } finally {
            if (
                ((li = !1),
                (Ka !== null || wa !== null) &&
                    (mn(),
                    Ka && ((t = Ka), (l = wa), (wa = Ka = null), Rf(t), l)))
            )
                for (t = 0; t < l.length; t++) Rf(l[t]);
        }
    }
    function Mu(l, t) {
        var a = l.stateNode;
        if (a === null) return null;
        var u = a[Kl] || null;
        if (u === null) return null;
        a = u[t];
        l: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (u = !u.disabled) ||
                    ((l = l.type),
                    (u = !(
                        l === "button" ||
                        l === "input" ||
                        l === "select" ||
                        l === "textarea"
                    ))),
                    (l = !u);
                break l;
            default:
                l = !1;
        }
        if (l) return null;
        if (a && typeof a != "function") throw Error(v(231, t, typeof a));
        return a;
    }
    var Dt = !(
            typeof window > "u" ||
            typeof window.document > "u" ||
            typeof window.document.createElement > "u"
        ),
        ti = !1;
    if (Dt)
        try {
            var Du = {};
            Object.defineProperty(Du, "passive", {
                get: function () {
                    ti = !0;
                },
            }),
                window.addEventListener("test", Du, Du),
                window.removeEventListener("test", Du, Du);
        } catch {
            ti = !1;
        }
    var kt = null,
        ai = null,
        Ne = null;
    function Hf() {
        if (Ne) return Ne;
        var l,
            t = ai,
            a = t.length,
            u,
            e = "value" in kt ? kt.value : kt.textContent,
            n = e.length;
        for (l = 0; l < a && t[l] === e[l]; l++);
        var i = a - l;
        for (u = 1; u <= i && t[a - u] === e[n - u]; u++);
        return (Ne = e.slice(l, 1 < u ? 1 - u : void 0));
    }
    function He(l) {
        var t = l.keyCode;
        return (
            "charCode" in l
                ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
                : (l = t),
            l === 10 && (l = 13),
            32 <= l || l === 13 ? l : 0
        );
    }
    function qe() {
        return !0;
    }
    function qf() {
        return !1;
    }
    function wl(l) {
        function t(a, u, e, n, i) {
            (this._reactName = a),
                (this._targetInst = e),
                (this.type = u),
                (this.nativeEvent = n),
                (this.target = i),
                (this.currentTarget = null);
            for (var c in l)
                l.hasOwnProperty(c) &&
                    ((a = l[c]), (this[c] = a ? a(n) : n[c]));
            return (
                (this.isDefaultPrevented = (
                    n.defaultPrevented != null
                        ? n.defaultPrevented
                        : n.returnValue === !1
                )
                    ? qe
                    : qf),
                (this.isPropagationStopped = qf),
                this
            );
        }
        return (
            R(t.prototype, {
                preventDefault: function () {
                    this.defaultPrevented = !0;
                    var a = this.nativeEvent;
                    a &&
                        (a.preventDefault
                            ? a.preventDefault()
                            : typeof a.returnValue != "unknown" &&
                              (a.returnValue = !1),
                        (this.isDefaultPrevented = qe));
                },
                stopPropagation: function () {
                    var a = this.nativeEvent;
                    a &&
                        (a.stopPropagation
                            ? a.stopPropagation()
                            : typeof a.cancelBubble != "unknown" &&
                              (a.cancelBubble = !0),
                        (this.isPropagationStopped = qe));
                },
                persist: function () {},
                isPersistent: qe,
            }),
            t
        );
    }
    var Aa = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (l) {
                return l.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
        },
        Be = wl(Aa),
        Uu = R({}, Aa, { view: 0, detail: 0 }),
        xd = wl(Uu),
        ui,
        ei,
        Ru,
        Ye = R({}, Uu, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: ii,
            button: 0,
            buttons: 0,
            relatedTarget: function (l) {
                return l.relatedTarget === void 0
                    ? l.fromElement === l.srcElement
                        ? l.toElement
                        : l.fromElement
                    : l.relatedTarget;
            },
            movementX: function (l) {
                return "movementX" in l
                    ? l.movementX
                    : (l !== Ru &&
                          (Ru && l.type === "mousemove"
                              ? ((ui = l.screenX - Ru.screenX),
                                (ei = l.screenY - Ru.screenY))
                              : (ei = ui = 0),
                          (Ru = l)),
                      ui);
            },
            movementY: function (l) {
                return "movementY" in l ? l.movementY : ei;
            },
        }),
        Bf = wl(Ye),
        jd = R({}, Ye, { dataTransfer: 0 }),
        Gd = wl(jd),
        Xd = R({}, Uu, { relatedTarget: 0 }),
        ni = wl(Xd),
        Qd = R({}, Aa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
        Cd = wl(Qd),
        Zd = R({}, Aa, {
            clipboardData: function (l) {
                return "clipboardData" in l
                    ? l.clipboardData
                    : window.clipboardData;
            },
        }),
        Vd = wl(Zd),
        Ld = R({}, Aa, { data: 0 }),
        Yf = wl(Ld),
        Kd = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
        },
        wd = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
        },
        Jd = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
        };
    function kd(l) {
        var t = this.nativeEvent;
        return t.getModifierState
            ? t.getModifierState(l)
            : (l = Jd[l])
            ? !!t[l]
            : !1;
    }
    function ii() {
        return kd;
    }
    var $d = R({}, Uu, {
            key: function (l) {
                if (l.key) {
                    var t = Kd[l.key] || l.key;
                    if (t !== "Unidentified") return t;
                }
                return l.type === "keypress"
                    ? ((l = He(l)), l === 13 ? "Enter" : String.fromCharCode(l))
                    : l.type === "keydown" || l.type === "keyup"
                    ? wd[l.keyCode] || "Unidentified"
                    : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: ii,
            charCode: function (l) {
                return l.type === "keypress" ? He(l) : 0;
            },
            keyCode: function (l) {
                return l.type === "keydown" || l.type === "keyup"
                    ? l.keyCode
                    : 0;
            },
            which: function (l) {
                return l.type === "keypress"
                    ? He(l)
                    : l.type === "keydown" || l.type === "keyup"
                    ? l.keyCode
                    : 0;
            },
        }),
        Wd = wl($d),
        Fd = R({}, Ye, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
        }),
        xf = wl(Fd),
        Id = R({}, Uu, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: ii,
        }),
        Pd = wl(Id),
        lh = R({}, Aa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
        th = wl(lh),
        ah = R({}, Ye, {
            deltaX: function (l) {
                return "deltaX" in l
                    ? l.deltaX
                    : "wheelDeltaX" in l
                    ? -l.wheelDeltaX
                    : 0;
            },
            deltaY: function (l) {
                return "deltaY" in l
                    ? l.deltaY
                    : "wheelDeltaY" in l
                    ? -l.wheelDeltaY
                    : "wheelDelta" in l
                    ? -l.wheelDelta
                    : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
        }),
        uh = wl(ah),
        eh = R({}, Aa, { newState: 0, oldState: 0 }),
        nh = wl(eh),
        ih = [9, 13, 27, 32],
        ci = Dt && "CompositionEvent" in window,
        Nu = null;
    Dt && "documentMode" in document && (Nu = document.documentMode);
    var ch = Dt && "TextEvent" in window && !Nu,
        jf = Dt && (!ci || (Nu && 8 < Nu && 11 >= Nu)),
        Gf = " ",
        Xf = !1;
    function Qf(l, t) {
        switch (l) {
            case "keyup":
                return ih.indexOf(t.keyCode) !== -1;
            case "keydown":
                return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1;
        }
    }
    function Cf(l) {
        return (
            (l = l.detail), typeof l == "object" && "data" in l ? l.data : null
        );
    }
    var Ja = !1;
    function fh(l, t) {
        switch (l) {
            case "compositionend":
                return Cf(t);
            case "keypress":
                return t.which !== 32 ? null : ((Xf = !0), Gf);
            case "textInput":
                return (l = t.data), l === Gf && Xf ? null : l;
            default:
                return null;
        }
    }
    function sh(l, t) {
        if (Ja)
            return l === "compositionend" || (!ci && Qf(l, t))
                ? ((l = Hf()), (Ne = ai = kt = null), (Ja = !1), l)
                : null;
        switch (l) {
            case "paste":
                return null;
            case "keypress":
                if (
                    !(t.ctrlKey || t.altKey || t.metaKey) ||
                    (t.ctrlKey && t.altKey)
                ) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which);
                }
                return null;
            case "compositionend":
                return jf && t.locale !== "ko" ? null : t.data;
            default:
                return null;
        }
    }
    var oh = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
    };
    function Zf(l) {
        var t = l && l.nodeName && l.nodeName.toLowerCase();
        return t === "input" ? !!oh[l.type] : t === "textarea";
    }
    function Vf(l, t, a, u) {
        Ka ? (wa ? wa.push(u) : (wa = [u])) : (Ka = u),
            (t = _n(t, "onChange")),
            0 < t.length &&
                ((a = new Be("onChange", "change", null, a, u)),
                l.push({ event: a, listeners: t }));
    }
    var Hu = null,
        qu = null;
    function rh(l) {
        zr(l, 0);
    }
    function xe(l) {
        var t = Ou(l);
        if (zf(t)) return l;
    }
    function Lf(l, t) {
        if (l === "change") return t;
    }
    var Kf = !1;
    if (Dt) {
        var fi;
        if (Dt) {
            var si = "oninput" in document;
            if (!si) {
                var wf = document.createElement("div");
                wf.setAttribute("oninput", "return;"),
                    (si = typeof wf.oninput == "function");
            }
            fi = si;
        } else fi = !1;
        Kf = fi && (!document.documentMode || 9 < document.documentMode);
    }
    function Jf() {
        Hu && (Hu.detachEvent("onpropertychange", kf), (qu = Hu = null));
    }
    function kf(l) {
        if (l.propertyName === "value" && xe(qu)) {
            var t = [];
            Vf(t, qu, l, Pn(l)), Nf(rh, t);
        }
    }
    function dh(l, t, a) {
        l === "focusin"
            ? (Jf(), (Hu = t), (qu = a), Hu.attachEvent("onpropertychange", kf))
            : l === "focusout" && Jf();
    }
    function hh(l) {
        if (l === "selectionchange" || l === "keyup" || l === "keydown")
            return xe(qu);
    }
    function yh(l, t) {
        if (l === "click") return xe(t);
    }
    function vh(l, t) {
        if (l === "input" || l === "change") return xe(t);
    }
    function mh(l, t) {
        return (
            (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t)
        );
    }
    var lt = typeof Object.is == "function" ? Object.is : mh;
    function Bu(l, t) {
        if (lt(l, t)) return !0;
        if (
            typeof l != "object" ||
            l === null ||
            typeof t != "object" ||
            t === null
        )
            return !1;
        var a = Object.keys(l),
            u = Object.keys(t);
        if (a.length !== u.length) return !1;
        for (u = 0; u < a.length; u++) {
            var e = a[u];
            if (!Gn.call(t, e) || !lt(l[e], t[e])) return !1;
        }
        return !0;
    }
    function $f(l) {
        for (; l && l.firstChild; ) l = l.firstChild;
        return l;
    }
    function Wf(l, t) {
        var a = $f(l);
        l = 0;
        for (var u; a; ) {
            if (a.nodeType === 3) {
                if (((u = l + a.textContent.length), l <= t && u >= t))
                    return { node: a, offset: t - l };
                l = u;
            }
            l: {
                for (; a; ) {
                    if (a.nextSibling) {
                        a = a.nextSibling;
                        break l;
                    }
                    a = a.parentNode;
                }
                a = void 0;
            }
            a = $f(a);
        }
    }
    function Ff(l, t) {
        return l && t
            ? l === t
                ? !0
                : l && l.nodeType === 3
                ? !1
                : t && t.nodeType === 3
                ? Ff(l, t.parentNode)
                : "contains" in l
                ? l.contains(t)
                : l.compareDocumentPosition
                ? !!(l.compareDocumentPosition(t) & 16)
                : !1
            : !1;
    }
    function If(l) {
        l =
            l != null &&
            l.ownerDocument != null &&
            l.ownerDocument.defaultView != null
                ? l.ownerDocument.defaultView
                : window;
        for (var t = Ue(l.document); t instanceof l.HTMLIFrameElement; ) {
            try {
                var a = typeof t.contentWindow.location.href == "string";
            } catch {
                a = !1;
            }
            if (a) l = t.contentWindow;
            else break;
            t = Ue(l.document);
        }
        return t;
    }
    function oi(l) {
        var t = l && l.nodeName && l.nodeName.toLowerCase();
        return (
            t &&
            ((t === "input" &&
                (l.type === "text" ||
                    l.type === "search" ||
                    l.type === "tel" ||
                    l.type === "url" ||
                    l.type === "password")) ||
                t === "textarea" ||
                l.contentEditable === "true")
        );
    }
    var gh = Dt && "documentMode" in document && 11 >= document.documentMode,
        ka = null,
        ri = null,
        Yu = null,
        di = !1;
    function Pf(l, t, a) {
        var u =
            a.window === a
                ? a.document
                : a.nodeType === 9
                ? a
                : a.ownerDocument;
        di ||
            ka == null ||
            ka !== Ue(u) ||
            ((u = ka),
            "selectionStart" in u && oi(u)
                ? (u = { start: u.selectionStart, end: u.selectionEnd })
                : ((u = (
                      (u.ownerDocument && u.ownerDocument.defaultView) ||
                      window
                  ).getSelection()),
                  (u = {
                      anchorNode: u.anchorNode,
                      anchorOffset: u.anchorOffset,
                      focusNode: u.focusNode,
                      focusOffset: u.focusOffset,
                  })),
            (Yu && Bu(Yu, u)) ||
                ((Yu = u),
                (u = _n(ri, "onSelect")),
                0 < u.length &&
                    ((t = new Be("onSelect", "select", null, t, a)),
                    l.push({ event: t, listeners: u }),
                    (t.target = ka))));
    }
    function Ta(l, t) {
        var a = {};
        return (
            (a[l.toLowerCase()] = t.toLowerCase()),
            (a["Webkit" + l] = "webkit" + t),
            (a["Moz" + l] = "moz" + t),
            a
        );
    }
    var $a = {
            animationend: Ta("Animation", "AnimationEnd"),
            animationiteration: Ta("Animation", "AnimationIteration"),
            animationstart: Ta("Animation", "AnimationStart"),
            transitionrun: Ta("Transition", "TransitionRun"),
            transitionstart: Ta("Transition", "TransitionStart"),
            transitioncancel: Ta("Transition", "TransitionCancel"),
            transitionend: Ta("Transition", "TransitionEnd"),
        },
        hi = {},
        ls = {};
    Dt &&
        ((ls = document.createElement("div").style),
        "AnimationEvent" in window ||
            (delete $a.animationend.animation,
            delete $a.animationiteration.animation,
            delete $a.animationstart.animation),
        "TransitionEvent" in window || delete $a.transitionend.transition);
    function _a(l) {
        if (hi[l]) return hi[l];
        if (!$a[l]) return l;
        var t = $a[l],
            a;
        for (a in t) if (t.hasOwnProperty(a) && a in ls) return (hi[l] = t[a]);
        return l;
    }
    var ts = _a("animationend"),
        as = _a("animationiteration"),
        us = _a("animationstart"),
        Sh = _a("transitionrun"),
        bh = _a("transitionstart"),
        Ah = _a("transitioncancel"),
        es = _a("transitionend"),
        ns = new Map(),
        yi =
            "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
                " "
            );
    yi.push("scrollEnd");
    function mt(l, t) {
        ns.set(l, t), ba(t, [l]);
    }
    var is = new WeakMap();
    function st(l, t) {
        if (typeof l == "object" && l !== null) {
            var a = is.get(l);
            return a !== void 0
                ? a
                : ((t = { value: l, source: t, stack: _f(t) }),
                  is.set(l, t),
                  t);
        }
        return { value: l, source: t, stack: _f(t) };
    }
    var ot = [],
        Wa = 0,
        vi = 0;
    function je() {
        for (var l = Wa, t = (vi = Wa = 0); t < l; ) {
            var a = ot[t];
            ot[t++] = null;
            var u = ot[t];
            ot[t++] = null;
            var e = ot[t];
            ot[t++] = null;
            var n = ot[t];
            if (((ot[t++] = null), u !== null && e !== null)) {
                var i = u.pending;
                i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
                    (u.pending = e);
            }
            n !== 0 && cs(a, e, n);
        }
    }
    function Ge(l, t, a, u) {
        (ot[Wa++] = l),
            (ot[Wa++] = t),
            (ot[Wa++] = a),
            (ot[Wa++] = u),
            (vi |= u),
            (l.lanes |= u),
            (l = l.alternate),
            l !== null && (l.lanes |= u);
    }
    function mi(l, t, a, u) {
        return Ge(l, t, a, u), Xe(l);
    }
    function Fa(l, t) {
        return Ge(l, null, null, t), Xe(l);
    }
    function cs(l, t, a) {
        l.lanes |= a;
        var u = l.alternate;
        u !== null && (u.lanes |= a);
        for (var e = !1, n = l.return; n !== null; )
            (n.childLanes |= a),
                (u = n.alternate),
                u !== null && (u.childLanes |= a),
                n.tag === 22 &&
                    ((l = n.stateNode),
                    l === null || l._visibility & 1 || (e = !0)),
                (l = n),
                (n = n.return);
        return l.tag === 3
            ? ((n = l.stateNode),
              e &&
                  t !== null &&
                  ((e = 31 - Pl(a)),
                  (l = n.hiddenUpdates),
                  (u = l[e]),
                  u === null ? (l[e] = [t]) : u.push(t),
                  (t.lane = a | 536870912)),
              n)
            : null;
    }
    function Xe(l) {
        if (50 < ie) throw ((ie = 0), (_c = null), Error(v(185)));
        for (var t = l.return; t !== null; ) (l = t), (t = l.return);
        return l.tag === 3 ? l.stateNode : null;
    }
    var Ia = {};
    function Th(l, t, a, u) {
        (this.tag = l),
            (this.key = a),
            (this.sibling =
                this.child =
                this.return =
                this.stateNode =
                this.type =
                this.elementType =
                    null),
            (this.index = 0),
            (this.refCleanup = this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
                this.memoizedState =
                this.updateQueue =
                this.memoizedProps =
                    null),
            (this.mode = u),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
    }
    function tt(l, t, a, u) {
        return new Th(l, t, a, u);
    }
    function gi(l) {
        return (l = l.prototype), !(!l || !l.isReactComponent);
    }
    function Ut(l, t) {
        var a = l.alternate;
        return (
            a === null
                ? ((a = tt(l.tag, t, l.key, l.mode)),
                  (a.elementType = l.elementType),
                  (a.type = l.type),
                  (a.stateNode = l.stateNode),
                  (a.alternate = l),
                  (l.alternate = a))
                : ((a.pendingProps = t),
                  (a.type = l.type),
                  (a.flags = 0),
                  (a.subtreeFlags = 0),
                  (a.deletions = null)),
            (a.flags = l.flags & 65011712),
            (a.childLanes = l.childLanes),
            (a.lanes = l.lanes),
            (a.child = l.child),
            (a.memoizedProps = l.memoizedProps),
            (a.memoizedState = l.memoizedState),
            (a.updateQueue = l.updateQueue),
            (t = l.dependencies),
            (a.dependencies =
                t === null
                    ? null
                    : { lanes: t.lanes, firstContext: t.firstContext }),
            (a.sibling = l.sibling),
            (a.index = l.index),
            (a.ref = l.ref),
            (a.refCleanup = l.refCleanup),
            a
        );
    }
    function fs(l, t) {
        l.flags &= 65011714;
        var a = l.alternate;
        return (
            a === null
                ? ((l.childLanes = 0),
                  (l.lanes = t),
                  (l.child = null),
                  (l.subtreeFlags = 0),
                  (l.memoizedProps = null),
                  (l.memoizedState = null),
                  (l.updateQueue = null),
                  (l.dependencies = null),
                  (l.stateNode = null))
                : ((l.childLanes = a.childLanes),
                  (l.lanes = a.lanes),
                  (l.child = a.child),
                  (l.subtreeFlags = 0),
                  (l.deletions = null),
                  (l.memoizedProps = a.memoizedProps),
                  (l.memoizedState = a.memoizedState),
                  (l.updateQueue = a.updateQueue),
                  (l.type = a.type),
                  (t = a.dependencies),
                  (l.dependencies =
                      t === null
                          ? null
                          : { lanes: t.lanes, firstContext: t.firstContext })),
            l
        );
    }
    function Qe(l, t, a, u, e, n) {
        var i = 0;
        if (((u = l), typeof l == "function")) gi(l) && (i = 1);
        else if (typeof l == "string")
            i = E0(l, a, N.current)
                ? 26
                : l === "html" || l === "head" || l === "body"
                ? 27
                : 5;
        else
            l: switch (l) {
                case Ll:
                    return (
                        (l = tt(31, a, t, e)),
                        (l.elementType = Ll),
                        (l.lanes = n),
                        l
                    );
                case Ul:
                    return Ea(a.children, e, n, t);
                case Vl:
                    (i = 8), (e |= 24);
                    break;
                case sl:
                    return (
                        (l = tt(12, a, t, e | 2)),
                        (l.elementType = sl),
                        (l.lanes = n),
                        l
                    );
                case L:
                    return (
                        (l = tt(13, a, t, e)),
                        (l.elementType = L),
                        (l.lanes = n),
                        l
                    );
                case vl:
                    return (
                        (l = tt(19, a, t, e)),
                        (l.elementType = vl),
                        (l.lanes = n),
                        l
                    );
                default:
                    if (typeof l == "object" && l !== null)
                        switch (l.$$typeof) {
                            case Wl:
                            case Al:
                                i = 10;
                                break l;
                            case Cl:
                                i = 9;
                                break l;
                            case Rl:
                                i = 11;
                                break l;
                            case Bl:
                                i = 14;
                                break l;
                            case Yl:
                                (i = 16), (u = null);
                                break l;
                        }
                    (i = 29),
                        (a = Error(v(130, l === null ? "null" : typeof l, ""))),
                        (u = null);
            }
        return (
            (t = tt(i, a, t, e)),
            (t.elementType = l),
            (t.type = u),
            (t.lanes = n),
            t
        );
    }
    function Ea(l, t, a, u) {
        return (l = tt(7, l, u, t)), (l.lanes = a), l;
    }
    function Si(l, t, a) {
        return (l = tt(6, l, null, t)), (l.lanes = a), l;
    }
    function bi(l, t, a) {
        return (
            (t = tt(4, l.children !== null ? l.children : [], l.key, t)),
            (t.lanes = a),
            (t.stateNode = {
                containerInfo: l.containerInfo,
                pendingChildren: null,
                implementation: l.implementation,
            }),
            t
        );
    }
    var Pa = [],
        lu = 0,
        Ce = null,
        Ze = 0,
        rt = [],
        dt = 0,
        za = null,
        Rt = 1,
        Nt = "";
    function pa(l, t) {
        (Pa[lu++] = Ze), (Pa[lu++] = Ce), (Ce = l), (Ze = t);
    }
    function ss(l, t, a) {
        (rt[dt++] = Rt), (rt[dt++] = Nt), (rt[dt++] = za), (za = l);
        var u = Rt;
        l = Nt;
        var e = 32 - Pl(u) - 1;
        (u &= ~(1 << e)), (a += 1);
        var n = 32 - Pl(t) + e;
        if (30 < n) {
            var i = e - (e % 5);
            (n = (u & ((1 << i) - 1)).toString(32)),
                (u >>= i),
                (e -= i),
                (Rt = (1 << (32 - Pl(t) + e)) | (a << e) | u),
                (Nt = n + l);
        } else (Rt = (1 << n) | (a << e) | u), (Nt = l);
    }
    function Ai(l) {
        l.return !== null && (pa(l, 1), ss(l, 1, 0));
    }
    function Ti(l) {
        for (; l === Ce; )
            (Ce = Pa[--lu]), (Pa[lu] = null), (Ze = Pa[--lu]), (Pa[lu] = null);
        for (; l === za; )
            (za = rt[--dt]),
                (rt[dt] = null),
                (Nt = rt[--dt]),
                (rt[dt] = null),
                (Rt = rt[--dt]),
                (rt[dt] = null);
    }
    var Zl = null,
        hl = null,
        F = !1,
        Oa = null,
        At = !1,
        _i = Error(v(519));
    function Ma(l) {
        var t = Error(v(418, ""));
        throw (Gu(st(t, l)), _i);
    }
    function os(l) {
        var t = l.stateNode,
            a = l.type,
            u = l.memoizedProps;
        switch (((t[Gl] = l), (t[Kl] = u), a)) {
            case "dialog":
                w("cancel", t), w("close", t);
                break;
            case "iframe":
            case "object":
            case "embed":
                w("load", t);
                break;
            case "video":
            case "audio":
                for (a = 0; a < fe.length; a++) w(fe[a], t);
                break;
            case "source":
                w("error", t);
                break;
            case "img":
            case "image":
            case "link":
                w("error", t), w("load", t);
                break;
            case "details":
                w("toggle", t);
                break;
            case "input":
                w("invalid", t),
                    pf(
                        t,
                        u.value,
                        u.defaultValue,
                        u.checked,
                        u.defaultChecked,
                        u.type,
                        u.name,
                        !0
                    ),
                    De(t);
                break;
            case "select":
                w("invalid", t);
                break;
            case "textarea":
                w("invalid", t),
                    Mf(t, u.value, u.defaultValue, u.children),
                    De(t);
        }
        (a = u.children),
            (typeof a != "string" &&
                typeof a != "number" &&
                typeof a != "bigint") ||
            t.textContent === "" + a ||
            u.suppressHydrationWarning === !0 ||
            Dr(t.textContent, a)
                ? (u.popover != null && (w("beforetoggle", t), w("toggle", t)),
                  u.onScroll != null && w("scroll", t),
                  u.onScrollEnd != null && w("scrollend", t),
                  u.onClick != null && (t.onclick = En),
                  (t = !0))
                : (t = !1),
            t || Ma(l);
    }
    function rs(l) {
        for (Zl = l.return; Zl; )
            switch (Zl.tag) {
                case 5:
                case 13:
                    At = !1;
                    return;
                case 27:
                case 3:
                    At = !0;
                    return;
                default:
                    Zl = Zl.return;
            }
    }
    function xu(l) {
        if (l !== Zl) return !1;
        if (!F) return rs(l), (F = !0), !1;
        var t = l.tag,
            a;
        if (
            ((a = t !== 3 && t !== 27) &&
                ((a = t === 5) &&
                    ((a = l.type),
                    (a =
                        !(a !== "form" && a !== "button") ||
                        Gc(l.type, l.memoizedProps))),
                (a = !a)),
            a && hl && Ma(l),
            rs(l),
            t === 13)
        ) {
            if (
                ((l = l.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
            )
                throw Error(v(317));
            l: {
                for (l = l.nextSibling, t = 0; l; ) {
                    if (l.nodeType === 8)
                        if (((a = l.data), a === "/$")) {
                            if (t === 0) {
                                hl = St(l.nextSibling);
                                break l;
                            }
                            t--;
                        } else (a !== "$" && a !== "$!" && a !== "$?") || t++;
                    l = l.nextSibling;
                }
                hl = null;
            }
        } else
            t === 27
                ? ((t = hl),
                  oa(l.type) ? ((l = Zc), (Zc = null), (hl = l)) : (hl = t))
                : (hl = Zl ? St(l.stateNode.nextSibling) : null);
        return !0;
    }
    function ju() {
        (hl = Zl = null), (F = !1);
    }
    function ds() {
        var l = Oa;
        return (
            l !== null &&
                ($l === null ? ($l = l) : $l.push.apply($l, l), (Oa = null)),
            l
        );
    }
    function Gu(l) {
        Oa === null ? (Oa = [l]) : Oa.push(l);
    }
    var Ei = _(null),
        Da = null,
        Ht = null;
    function $t(l, t, a) {
        z(Ei, t._currentValue), (t._currentValue = a);
    }
    function qt(l) {
        (l._currentValue = Ei.current), O(Ei);
    }
    function zi(l, t, a) {
        for (; l !== null; ) {
            var u = l.alternate;
            if (
                ((l.childLanes & t) !== t
                    ? ((l.childLanes |= t), u !== null && (u.childLanes |= t))
                    : u !== null &&
                      (u.childLanes & t) !== t &&
                      (u.childLanes |= t),
                l === a)
            )
                break;
            l = l.return;
        }
    }
    function pi(l, t, a, u) {
        var e = l.child;
        for (e !== null && (e.return = l); e !== null; ) {
            var n = e.dependencies;
            if (n !== null) {
                var i = e.child;
                n = n.firstContext;
                l: for (; n !== null; ) {
                    var c = n;
                    n = e;
                    for (var f = 0; f < t.length; f++)
                        if (c.context === t[f]) {
                            (n.lanes |= a),
                                (c = n.alternate),
                                c !== null && (c.lanes |= a),
                                zi(n.return, a, l),
                                u || (i = null);
                            break l;
                        }
                    n = c.next;
                }
            } else if (e.tag === 18) {
                if (((i = e.return), i === null)) throw Error(v(341));
                (i.lanes |= a),
                    (n = i.alternate),
                    n !== null && (n.lanes |= a),
                    zi(i, a, l),
                    (i = null);
            } else i = e.child;
            if (i !== null) i.return = e;
            else
                for (i = e; i !== null; ) {
                    if (i === l) {
                        i = null;
                        break;
                    }
                    if (((e = i.sibling), e !== null)) {
                        (e.return = i.return), (i = e);
                        break;
                    }
                    i = i.return;
                }
            e = i;
        }
    }
    function Xu(l, t, a, u) {
        l = null;
        for (var e = t, n = !1; e !== null; ) {
            if (!n) {
                if ((e.flags & 524288) !== 0) n = !0;
                else if ((e.flags & 262144) !== 0) break;
            }
            if (e.tag === 10) {
                var i = e.alternate;
                if (i === null) throw Error(v(387));
                if (((i = i.memoizedProps), i !== null)) {
                    var c = e.type;
                    lt(e.pendingProps.value, i.value) ||
                        (l !== null ? l.push(c) : (l = [c]));
                }
            } else if (e === Fl.current) {
                if (((i = e.alternate), i === null)) throw Error(v(387));
                i.memoizedState.memoizedState !==
                    e.memoizedState.memoizedState &&
                    (l !== null ? l.push(ye) : (l = [ye]));
            }
            e = e.return;
        }
        l !== null && pi(t, l, a, u), (t.flags |= 262144);
    }
    function Ve(l) {
        for (l = l.firstContext; l !== null; ) {
            if (!lt(l.context._currentValue, l.memoizedValue)) return !0;
            l = l.next;
        }
        return !1;
    }
    function Ua(l) {
        (Da = l),
            (Ht = null),
            (l = l.dependencies),
            l !== null && (l.firstContext = null);
    }
    function Xl(l) {
        return hs(Da, l);
    }
    function Le(l, t) {
        return Da === null && Ua(l), hs(l, t);
    }
    function hs(l, t) {
        var a = t._currentValue;
        if (((t = { context: t, memoizedValue: a, next: null }), Ht === null)) {
            if (l === null) throw Error(v(308));
            (Ht = t),
                (l.dependencies = { lanes: 0, firstContext: t }),
                (l.flags |= 524288);
        } else Ht = Ht.next = t;
        return a;
    }
    var _h =
            typeof AbortController < "u"
                ? AbortController
                : function () {
                      var l = [],
                          t = (this.signal = {
                              aborted: !1,
                              addEventListener: function (a, u) {
                                  l.push(u);
                              },
                          });
                      this.abort = function () {
                          (t.aborted = !0),
                              l.forEach(function (a) {
                                  return a();
                              });
                      };
                  },
        Eh = E.unstable_scheduleCallback,
        zh = E.unstable_NormalPriority,
        Tl = {
            $$typeof: Al,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0,
        };
    function Oi() {
        return { controller: new _h(), data: new Map(), refCount: 0 };
    }
    function Qu(l) {
        l.refCount--,
            l.refCount === 0 &&
                Eh(zh, function () {
                    l.controller.abort();
                });
    }
    var Cu = null,
        Mi = 0,
        tu = 0,
        au = null;
    function ph(l, t) {
        if (Cu === null) {
            var a = (Cu = []);
            (Mi = 0),
                (tu = Uc()),
                (au = {
                    status: "pending",
                    value: void 0,
                    then: function (u) {
                        a.push(u);
                    },
                });
        }
        return Mi++, t.then(ys, ys), t;
    }
    function ys() {
        if (--Mi === 0 && Cu !== null) {
            au !== null && (au.status = "fulfilled");
            var l = Cu;
            (Cu = null), (tu = 0), (au = null);
            for (var t = 0; t < l.length; t++) (0, l[t])();
        }
    }
    function Oh(l, t) {
        var a = [],
            u = {
                status: "pending",
                value: null,
                reason: null,
                then: function (e) {
                    a.push(e);
                },
            };
        return (
            l.then(
                function () {
                    (u.status = "fulfilled"), (u.value = t);
                    for (var e = 0; e < a.length; e++) (0, a[e])(t);
                },
                function (e) {
                    for (
                        u.status = "rejected", u.reason = e, e = 0;
                        e < a.length;
                        e++
                    )
                        (0, a[e])(void 0);
                }
            ),
            u
        );
    }
    var vs = S.S;
    S.S = function (l, t) {
        typeof t == "object" &&
            t !== null &&
            typeof t.then == "function" &&
            ph(l, t),
            vs !== null && vs(l, t);
    };
    var Ra = _(null);
    function Di() {
        var l = Ra.current;
        return l !== null ? l : fl.pooledCache;
    }
    function Ke(l, t) {
        t === null ? z(Ra, Ra.current) : z(Ra, t.pool);
    }
    function ms() {
        var l = Di();
        return l === null ? null : { parent: Tl._currentValue, pool: l };
    }
    var Zu = Error(v(460)),
        gs = Error(v(474)),
        we = Error(v(542)),
        Ui = { then: function () {} };
    function Ss(l) {
        return (l = l.status), l === "fulfilled" || l === "rejected";
    }
    function Je() {}
    function bs(l, t, a) {
        switch (
            ((a = l[a]),
            a === void 0 ? l.push(t) : a !== t && (t.then(Je, Je), (t = a)),
            t.status)
        ) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw ((l = t.reason), Ts(l), l);
            default:
                if (typeof t.status == "string") t.then(Je, Je);
                else {
                    if (((l = fl), l !== null && 100 < l.shellSuspendCounter))
                        throw Error(v(482));
                    (l = t),
                        (l.status = "pending"),
                        l.then(
                            function (u) {
                                if (t.status === "pending") {
                                    var e = t;
                                    (e.status = "fulfilled"), (e.value = u);
                                }
                            },
                            function (u) {
                                if (t.status === "pending") {
                                    var e = t;
                                    (e.status = "rejected"), (e.reason = u);
                                }
                            }
                        );
                }
                switch (t.status) {
                    case "fulfilled":
                        return t.value;
                    case "rejected":
                        throw ((l = t.reason), Ts(l), l);
                }
                throw ((Vu = t), Zu);
        }
    }
    var Vu = null;
    function As() {
        if (Vu === null) throw Error(v(459));
        var l = Vu;
        return (Vu = null), l;
    }
    function Ts(l) {
        if (l === Zu || l === we) throw Error(v(483));
    }
    var Wt = !1;
    function Ri(l) {
        l.updateQueue = {
            baseState: l.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, lanes: 0, hiddenCallbacks: null },
            callbacks: null,
        };
    }
    function Ni(l, t) {
        (l = l.updateQueue),
            t.updateQueue === l &&
                (t.updateQueue = {
                    baseState: l.baseState,
                    firstBaseUpdate: l.firstBaseUpdate,
                    lastBaseUpdate: l.lastBaseUpdate,
                    shared: l.shared,
                    callbacks: null,
                });
    }
    function Ft(l) {
        return { lane: l, tag: 0, payload: null, callback: null, next: null };
    }
    function It(l, t, a) {
        var u = l.updateQueue;
        if (u === null) return null;
        if (((u = u.shared), (P & 2) !== 0)) {
            var e = u.pending;
            return (
                e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
                (u.pending = t),
                (t = Xe(l)),
                cs(l, null, a),
                t
            );
        }
        return Ge(l, u, t, a), Xe(l);
    }
    function Lu(l, t, a) {
        if (
            ((t = t.updateQueue),
            t !== null && ((t = t.shared), (a & 4194048) !== 0))
        ) {
            var u = t.lanes;
            (u &= l.pendingLanes), (a |= u), (t.lanes = a), yf(l, a);
        }
    }
    function Hi(l, t) {
        var a = l.updateQueue,
            u = l.alternate;
        if (u !== null && ((u = u.updateQueue), a === u)) {
            var e = null,
                n = null;
            if (((a = a.firstBaseUpdate), a !== null)) {
                do {
                    var i = {
                        lane: a.lane,
                        tag: a.tag,
                        payload: a.payload,
                        callback: null,
                        next: null,
                    };
                    n === null ? (e = n = i) : (n = n.next = i), (a = a.next);
                } while (a !== null);
                n === null ? (e = n = t) : (n = n.next = t);
            } else e = n = t;
            (a = {
                baseState: u.baseState,
                firstBaseUpdate: e,
                lastBaseUpdate: n,
                shared: u.shared,
                callbacks: u.callbacks,
            }),
                (l.updateQueue = a);
            return;
        }
        (l = a.lastBaseUpdate),
            l === null ? (a.firstBaseUpdate = t) : (l.next = t),
            (a.lastBaseUpdate = t);
    }
    var qi = !1;
    function Ku() {
        if (qi) {
            var l = au;
            if (l !== null) throw l;
        }
    }
    function wu(l, t, a, u) {
        qi = !1;
        var e = l.updateQueue;
        Wt = !1;
        var n = e.firstBaseUpdate,
            i = e.lastBaseUpdate,
            c = e.shared.pending;
        if (c !== null) {
            e.shared.pending = null;
            var f = c,
                h = f.next;
            (f.next = null), i === null ? (n = h) : (i.next = h), (i = f);
            var g = l.alternate;
            g !== null &&
                ((g = g.updateQueue),
                (c = g.lastBaseUpdate),
                c !== i &&
                    (c === null ? (g.firstBaseUpdate = h) : (c.next = h),
                    (g.lastBaseUpdate = f)));
        }
        if (n !== null) {
            var A = e.baseState;
            (i = 0), (g = h = f = null), (c = n);
            do {
                var y = c.lane & -536870913,
                    m = y !== c.lane;
                if (m ? (k & y) === y : (u & y) === y) {
                    y !== 0 && y === tu && (qi = !0),
                        g !== null &&
                            (g = g.next =
                                {
                                    lane: 0,
                                    tag: c.tag,
                                    payload: c.payload,
                                    callback: null,
                                    next: null,
                                });
                    l: {
                        var Y = l,
                            H = c;
                        y = t;
                        var nl = a;
                        switch (H.tag) {
                            case 1:
                                if (((Y = H.payload), typeof Y == "function")) {
                                    A = Y.call(nl, A, y);
                                    break l;
                                }
                                A = Y;
                                break l;
                            case 3:
                                Y.flags = (Y.flags & -65537) | 128;
                            case 0:
                                if (
                                    ((Y = H.payload),
                                    (y =
                                        typeof Y == "function"
                                            ? Y.call(nl, A, y)
                                            : Y),
                                    y == null)
                                )
                                    break l;
                                A = R({}, A, y);
                                break l;
                            case 2:
                                Wt = !0;
                        }
                    }
                    (y = c.callback),
                        y !== null &&
                            ((l.flags |= 64),
                            m && (l.flags |= 8192),
                            (m = e.callbacks),
                            m === null ? (e.callbacks = [y]) : m.push(y));
                } else
                    (m = {
                        lane: y,
                        tag: c.tag,
                        payload: c.payload,
                        callback: c.callback,
                        next: null,
                    }),
                        g === null ? ((h = g = m), (f = A)) : (g = g.next = m),
                        (i |= y);
                if (((c = c.next), c === null)) {
                    if (((c = e.shared.pending), c === null)) break;
                    (m = c),
                        (c = m.next),
                        (m.next = null),
                        (e.lastBaseUpdate = m),
                        (e.shared.pending = null);
                }
            } while (!0);
            g === null && (f = A),
                (e.baseState = f),
                (e.firstBaseUpdate = h),
                (e.lastBaseUpdate = g),
                n === null && (e.shared.lanes = 0),
                (ia |= i),
                (l.lanes = i),
                (l.memoizedState = A);
        }
    }
    function _s(l, t) {
        if (typeof l != "function") throw Error(v(191, l));
        l.call(t);
    }
    function Es(l, t) {
        var a = l.callbacks;
        if (a !== null)
            for (l.callbacks = null, l = 0; l < a.length; l++) _s(a[l], t);
    }
    var uu = _(null),
        ke = _(0);
    function zs(l, t) {
        (l = Qt), z(ke, l), z(uu, t), (Qt = l | t.baseLanes);
    }
    function Bi() {
        z(ke, Qt), z(uu, uu.current);
    }
    function Yi() {
        (Qt = ke.current), O(uu), O(ke);
    }
    var Pt = 0,
        Z = null,
        ul = null,
        Sl = null,
        $e = !1,
        eu = !1,
        Na = !1,
        We = 0,
        Ju = 0,
        nu = null,
        Mh = 0;
    function ml() {
        throw Error(v(321));
    }
    function xi(l, t) {
        if (t === null) return !1;
        for (var a = 0; a < t.length && a < l.length; a++)
            if (!lt(l[a], t[a])) return !1;
        return !0;
    }
    function ji(l, t, a, u, e, n) {
        return (
            (Pt = n),
            (Z = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (S.H = l === null || l.memoizedState === null ? co : fo),
            (Na = !1),
            (n = a(u, e)),
            (Na = !1),
            eu && (n = Os(t, a, u, e)),
            ps(l),
            n
        );
    }
    function ps(l) {
        S.H = an;
        var t = ul !== null && ul.next !== null;
        if (
            ((Pt = 0),
            (Sl = ul = Z = null),
            ($e = !1),
            (Ju = 0),
            (nu = null),
            t)
        )
            throw Error(v(300));
        l === null ||
            zl ||
            ((l = l.dependencies), l !== null && Ve(l) && (zl = !0));
    }
    function Os(l, t, a, u) {
        Z = l;
        var e = 0;
        do {
            if ((eu && (nu = null), (Ju = 0), (eu = !1), 25 <= e))
                throw Error(v(301));
            if (((e += 1), (Sl = ul = null), l.updateQueue != null)) {
                var n = l.updateQueue;
                (n.lastEffect = null),
                    (n.events = null),
                    (n.stores = null),
                    n.memoCache != null && (n.memoCache.index = 0);
            }
            (S.H = Bh), (n = t(a, u));
        } while (eu);
        return n;
    }
    function Dh() {
        var l = S.H,
            t = l.useState()[0];
        return (
            (t = typeof t.then == "function" ? ku(t) : t),
            (l = l.useState()[0]),
            (ul !== null ? ul.memoizedState : null) !== l && (Z.flags |= 1024),
            t
        );
    }
    function Gi() {
        var l = We !== 0;
        return (We = 0), l;
    }
    function Xi(l, t, a) {
        (t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~a);
    }
    function Qi(l) {
        if ($e) {
            for (l = l.memoizedState; l !== null; ) {
                var t = l.queue;
                t !== null && (t.pending = null), (l = l.next);
            }
            $e = !1;
        }
        (Pt = 0), (Sl = ul = Z = null), (eu = !1), (Ju = We = 0), (nu = null);
    }
    function Jl() {
        var l = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
        };
        return (
            Sl === null ? (Z.memoizedState = Sl = l) : (Sl = Sl.next = l), Sl
        );
    }
    function bl() {
        if (ul === null) {
            var l = Z.alternate;
            l = l !== null ? l.memoizedState : null;
        } else l = ul.next;
        var t = Sl === null ? Z.memoizedState : Sl.next;
        if (t !== null) (Sl = t), (ul = l);
        else {
            if (l === null)
                throw Z.alternate === null ? Error(v(467)) : Error(v(310));
            (ul = l),
                (l = {
                    memoizedState: ul.memoizedState,
                    baseState: ul.baseState,
                    baseQueue: ul.baseQueue,
                    queue: ul.queue,
                    next: null,
                }),
                Sl === null ? (Z.memoizedState = Sl = l) : (Sl = Sl.next = l);
        }
        return Sl;
    }
    function Ci() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null,
        };
    }
    function ku(l) {
        var t = Ju;
        return (
            (Ju += 1),
            nu === null && (nu = []),
            (l = bs(nu, l, t)),
            (t = Z),
            (Sl === null ? t.memoizedState : Sl.next) === null &&
                ((t = t.alternate),
                (S.H = t === null || t.memoizedState === null ? co : fo)),
            l
        );
    }
    function Fe(l) {
        if (l !== null && typeof l == "object") {
            if (typeof l.then == "function") return ku(l);
            if (l.$$typeof === Al) return Xl(l);
        }
        throw Error(v(438, String(l)));
    }
    function Zi(l) {
        var t = null,
            a = Z.updateQueue;
        if ((a !== null && (t = a.memoCache), t == null)) {
            var u = Z.alternate;
            u !== null &&
                ((u = u.updateQueue),
                u !== null &&
                    ((u = u.memoCache),
                    u != null &&
                        (t = {
                            data: u.data.map(function (e) {
                                return e.slice();
                            }),
                            index: 0,
                        })));
        }
        if (
            (t == null && (t = { data: [], index: 0 }),
            a === null && ((a = Ci()), (Z.updateQueue = a)),
            (a.memoCache = t),
            (a = t.data[t.index]),
            a === void 0)
        )
            for (a = t.data[t.index] = Array(l), u = 0; u < l; u++) a[u] = xa;
        return t.index++, a;
    }
    function Bt(l, t) {
        return typeof t == "function" ? t(l) : t;
    }
    function Ie(l) {
        var t = bl();
        return Vi(t, ul, l);
    }
    function Vi(l, t, a) {
        var u = l.queue;
        if (u === null) throw Error(v(311));
        u.lastRenderedReducer = a;
        var e = l.baseQueue,
            n = u.pending;
        if (n !== null) {
            if (e !== null) {
                var i = e.next;
                (e.next = n.next), (n.next = i);
            }
            (t.baseQueue = e = n), (u.pending = null);
        }
        if (((n = l.baseState), e === null)) l.memoizedState = n;
        else {
            t = e.next;
            var c = (i = null),
                f = null,
                h = t,
                g = !1;
            do {
                var A = h.lane & -536870913;
                if (A !== h.lane ? (k & A) === A : (Pt & A) === A) {
                    var y = h.revertLane;
                    if (y === 0)
                        f !== null &&
                            (f = f.next =
                                {
                                    lane: 0,
                                    revertLane: 0,
                                    action: h.action,
                                    hasEagerState: h.hasEagerState,
                                    eagerState: h.eagerState,
                                    next: null,
                                }),
                            A === tu && (g = !0);
                    else if ((Pt & y) === y) {
                        (h = h.next), y === tu && (g = !0);
                        continue;
                    } else
                        (A = {
                            lane: 0,
                            revertLane: h.revertLane,
                            action: h.action,
                            hasEagerState: h.hasEagerState,
                            eagerState: h.eagerState,
                            next: null,
                        }),
                            f === null
                                ? ((c = f = A), (i = n))
                                : (f = f.next = A),
                            (Z.lanes |= y),
                            (ia |= y);
                    (A = h.action),
                        Na && a(n, A),
                        (n = h.hasEagerState ? h.eagerState : a(n, A));
                } else
                    (y = {
                        lane: A,
                        revertLane: h.revertLane,
                        action: h.action,
                        hasEagerState: h.hasEagerState,
                        eagerState: h.eagerState,
                        next: null,
                    }),
                        f === null ? ((c = f = y), (i = n)) : (f = f.next = y),
                        (Z.lanes |= A),
                        (ia |= A);
                h = h.next;
            } while (h !== null && h !== t);
            if (
                (f === null ? (i = n) : (f.next = c),
                !lt(n, l.memoizedState) &&
                    ((zl = !0), g && ((a = au), a !== null)))
            )
                throw a;
            (l.memoizedState = n),
                (l.baseState = i),
                (l.baseQueue = f),
                (u.lastRenderedState = n);
        }
        return e === null && (u.lanes = 0), [l.memoizedState, u.dispatch];
    }
    function Li(l) {
        var t = bl(),
            a = t.queue;
        if (a === null) throw Error(v(311));
        a.lastRenderedReducer = l;
        var u = a.dispatch,
            e = a.pending,
            n = t.memoizedState;
        if (e !== null) {
            a.pending = null;
            var i = (e = e.next);
            do (n = l(n, i.action)), (i = i.next);
            while (i !== e);
            lt(n, t.memoizedState) || (zl = !0),
                (t.memoizedState = n),
                t.baseQueue === null && (t.baseState = n),
                (a.lastRenderedState = n);
        }
        return [n, u];
    }
    function Ms(l, t, a) {
        var u = Z,
            e = bl(),
            n = F;
        if (n) {
            if (a === void 0) throw Error(v(407));
            a = a();
        } else a = t();
        var i = !lt((ul || e).memoizedState, a);
        i && ((e.memoizedState = a), (zl = !0)), (e = e.queue);
        var c = Rs.bind(null, u, e, l);
        if (
            ($u(2048, 8, c, [l]),
            e.getSnapshot !== t ||
                i ||
                (Sl !== null && Sl.memoizedState.tag & 1))
        ) {
            if (
                ((u.flags |= 2048),
                iu(9, Pe(), Us.bind(null, u, e, a, t), null),
                fl === null)
            )
                throw Error(v(349));
            n || (Pt & 124) !== 0 || Ds(u, t, a);
        }
        return a;
    }
    function Ds(l, t, a) {
        (l.flags |= 16384),
            (l = { getSnapshot: t, value: a }),
            (t = Z.updateQueue),
            t === null
                ? ((t = Ci()), (Z.updateQueue = t), (t.stores = [l]))
                : ((a = t.stores), a === null ? (t.stores = [l]) : a.push(l));
    }
    function Us(l, t, a, u) {
        (t.value = a), (t.getSnapshot = u), Ns(t) && Hs(l);
    }
    function Rs(l, t, a) {
        return a(function () {
            Ns(t) && Hs(l);
        });
    }
    function Ns(l) {
        var t = l.getSnapshot;
        l = l.value;
        try {
            var a = t();
            return !lt(l, a);
        } catch {
            return !0;
        }
    }
    function Hs(l) {
        var t = Fa(l, 2);
        t !== null && it(t, l, 2);
    }
    function Ki(l) {
        var t = Jl();
        if (typeof l == "function") {
            var a = l;
            if (((l = a()), Na)) {
                wt(!0);
                try {
                    a();
                } finally {
                    wt(!1);
                }
            }
        }
        return (
            (t.memoizedState = t.baseState = l),
            (t.queue = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Bt,
                lastRenderedState: l,
            }),
            t
        );
    }
    function qs(l, t, a, u) {
        return (l.baseState = a), Vi(l, ul, typeof u == "function" ? u : Bt);
    }
    function Uh(l, t, a, u, e) {
        if (tn(l)) throw Error(v(485));
        if (((l = t.action), l !== null)) {
            var n = {
                payload: e,
                action: l,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function (i) {
                    n.listeners.push(i);
                },
            };
            S.T !== null ? a(!0) : (n.isTransition = !1),
                u(n),
                (a = t.pending),
                a === null
                    ? ((n.next = t.pending = n), Bs(t, n))
                    : ((n.next = a.next), (t.pending = a.next = n));
        }
    }
    function Bs(l, t) {
        var a = t.action,
            u = t.payload,
            e = l.state;
        if (t.isTransition) {
            var n = S.T,
                i = {};
            S.T = i;
            try {
                var c = a(e, u),
                    f = S.S;
                f !== null && f(i, c), Ys(l, t, c);
            } catch (h) {
                wi(l, t, h);
            } finally {
                S.T = n;
            }
        } else
            try {
                (n = a(e, u)), Ys(l, t, n);
            } catch (h) {
                wi(l, t, h);
            }
    }
    function Ys(l, t, a) {
        a !== null && typeof a == "object" && typeof a.then == "function"
            ? a.then(
                  function (u) {
                      xs(l, t, u);
                  },
                  function (u) {
                      return wi(l, t, u);
                  }
              )
            : xs(l, t, a);
    }
    function xs(l, t, a) {
        (t.status = "fulfilled"),
            (t.value = a),
            js(t),
            (l.state = a),
            (t = l.pending),
            t !== null &&
                ((a = t.next),
                a === t
                    ? (l.pending = null)
                    : ((a = a.next), (t.next = a), Bs(l, a)));
    }
    function wi(l, t, a) {
        var u = l.pending;
        if (((l.pending = null), u !== null)) {
            u = u.next;
            do (t.status = "rejected"), (t.reason = a), js(t), (t = t.next);
            while (t !== u);
        }
        l.action = null;
    }
    function js(l) {
        l = l.listeners;
        for (var t = 0; t < l.length; t++) (0, l[t])();
    }
    function Gs(l, t) {
        return t;
    }
    function Xs(l, t) {
        if (F) {
            var a = fl.formState;
            if (a !== null) {
                l: {
                    var u = Z;
                    if (F) {
                        if (hl) {
                            t: {
                                for (var e = hl, n = At; e.nodeType !== 8; ) {
                                    if (!n) {
                                        e = null;
                                        break t;
                                    }
                                    if (((e = St(e.nextSibling)), e === null)) {
                                        e = null;
                                        break t;
                                    }
                                }
                                (n = e.data),
                                    (e = n === "F!" || n === "F" ? e : null);
                            }
                            if (e) {
                                (hl = St(e.nextSibling)), (u = e.data === "F!");
                                break l;
                            }
                        }
                        Ma(u);
                    }
                    u = !1;
                }
                u && (t = a[0]);
            }
        }
        return (
            (a = Jl()),
            (a.memoizedState = a.baseState = t),
            (u = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Gs,
                lastRenderedState: t,
            }),
            (a.queue = u),
            (a = eo.bind(null, Z, u)),
            (u.dispatch = a),
            (u = Ki(!1)),
            (n = Fi.bind(null, Z, !1, u.queue)),
            (u = Jl()),
            (e = { state: t, dispatch: null, action: l, pending: null }),
            (u.queue = e),
            (a = Uh.bind(null, Z, e, n, a)),
            (e.dispatch = a),
            (u.memoizedState = l),
            [t, a, !1]
        );
    }
    function Qs(l) {
        var t = bl();
        return Cs(t, ul, l);
    }
    function Cs(l, t, a) {
        if (
            ((t = Vi(l, t, Gs)[0]),
            (l = Ie(Bt)[0]),
            typeof t == "object" && t !== null && typeof t.then == "function")
        )
            try {
                var u = ku(t);
            } catch (i) {
                throw i === Zu ? we : i;
            }
        else u = t;
        t = bl();
        var e = t.queue,
            n = e.dispatch;
        return (
            a !== t.memoizedState &&
                ((Z.flags |= 2048), iu(9, Pe(), Rh.bind(null, e, a), null)),
            [u, n, l]
        );
    }
    function Rh(l, t) {
        l.action = t;
    }
    function Zs(l) {
        var t = bl(),
            a = ul;
        if (a !== null) return Cs(t, a, l);
        bl(), (t = t.memoizedState), (a = bl());
        var u = a.queue.dispatch;
        return (a.memoizedState = l), [t, u, !1];
    }
    function iu(l, t, a, u) {
        return (
            (l = { tag: l, create: a, deps: u, inst: t, next: null }),
            (t = Z.updateQueue),
            t === null && ((t = Ci()), (Z.updateQueue = t)),
            (a = t.lastEffect),
            a === null
                ? (t.lastEffect = l.next = l)
                : ((u = a.next),
                  (a.next = l),
                  (l.next = u),
                  (t.lastEffect = l)),
            l
        );
    }
    function Pe() {
        return { destroy: void 0, resource: void 0 };
    }
    function Vs() {
        return bl().memoizedState;
    }
    function ln(l, t, a, u) {
        var e = Jl();
        (u = u === void 0 ? null : u),
            (Z.flags |= l),
            (e.memoizedState = iu(1 | t, Pe(), a, u));
    }
    function $u(l, t, a, u) {
        var e = bl();
        u = u === void 0 ? null : u;
        var n = e.memoizedState.inst;
        ul !== null && u !== null && xi(u, ul.memoizedState.deps)
            ? (e.memoizedState = iu(t, n, a, u))
            : ((Z.flags |= l), (e.memoizedState = iu(1 | t, n, a, u)));
    }
    function Ls(l, t) {
        ln(8390656, 8, l, t);
    }
    function Ks(l, t) {
        $u(2048, 8, l, t);
    }
    function ws(l, t) {
        return $u(4, 2, l, t);
    }
    function Js(l, t) {
        return $u(4, 4, l, t);
    }
    function ks(l, t) {
        if (typeof t == "function") {
            l = l();
            var a = t(l);
            return function () {
                typeof a == "function" ? a() : t(null);
            };
        }
        if (t != null)
            return (
                (l = l()),
                (t.current = l),
                function () {
                    t.current = null;
                }
            );
    }
    function $s(l, t, a) {
        (a = a != null ? a.concat([l]) : null),
            $u(4, 4, ks.bind(null, t, l), a);
    }
    function Ji() {}
    function Ws(l, t) {
        var a = bl();
        t = t === void 0 ? null : t;
        var u = a.memoizedState;
        return t !== null && xi(t, u[1])
            ? u[0]
            : ((a.memoizedState = [l, t]), l);
    }
    function Fs(l, t) {
        var a = bl();
        t = t === void 0 ? null : t;
        var u = a.memoizedState;
        if (t !== null && xi(t, u[1])) return u[0];
        if (((u = l()), Na)) {
            wt(!0);
            try {
                l();
            } finally {
                wt(!1);
            }
        }
        return (a.memoizedState = [u, t]), u;
    }
    function ki(l, t, a) {
        return a === void 0 || (Pt & 1073741824) !== 0
            ? (l.memoizedState = t)
            : ((l.memoizedState = a), (l = tr()), (Z.lanes |= l), (ia |= l), a);
    }
    function Is(l, t, a, u) {
        return lt(a, t)
            ? a
            : uu.current !== null
            ? ((l = ki(l, a, u)), lt(l, t) || (zl = !0), l)
            : (Pt & 42) === 0
            ? ((zl = !0), (l.memoizedState = a))
            : ((l = tr()), (Z.lanes |= l), (ia |= l), t);
    }
    function Ps(l, t, a, u, e) {
        var n = p.p;
        p.p = n !== 0 && 8 > n ? n : 8;
        var i = S.T,
            c = {};
        (S.T = c), Fi(l, !1, t, a);
        try {
            var f = e(),
                h = S.S;
            if (
                (h !== null && h(c, f),
                f !== null &&
                    typeof f == "object" &&
                    typeof f.then == "function")
            ) {
                var g = Oh(f, u);
                Wu(l, t, g, nt(l));
            } else Wu(l, t, u, nt(l));
        } catch (A) {
            Wu(
                l,
                t,
                { then: function () {}, status: "rejected", reason: A },
                nt()
            );
        } finally {
            (p.p = n), (S.T = i);
        }
    }
    function Nh() {}
    function $i(l, t, a, u) {
        if (l.tag !== 5) throw Error(v(476));
        var e = lo(l).queue;
        Ps(
            l,
            e,
            t,
            B,
            a === null
                ? Nh
                : function () {
                      return to(l), a(u);
                  }
        );
    }
    function lo(l) {
        var t = l.memoizedState;
        if (t !== null) return t;
        t = {
            memoizedState: B,
            baseState: B,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Bt,
                lastRenderedState: B,
            },
            next: null,
        };
        var a = {};
        return (
            (t.next = {
                memoizedState: a,
                baseState: a,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Bt,
                    lastRenderedState: a,
                },
                next: null,
            }),
            (l.memoizedState = t),
            (l = l.alternate),
            l !== null && (l.memoizedState = t),
            t
        );
    }
    function to(l) {
        var t = lo(l).next.queue;
        Wu(l, t, {}, nt());
    }
    function Wi() {
        return Xl(ye);
    }
    function ao() {
        return bl().memoizedState;
    }
    function uo() {
        return bl().memoizedState;
    }
    function Hh(l) {
        for (var t = l.return; t !== null; ) {
            switch (t.tag) {
                case 24:
                case 3:
                    var a = nt();
                    l = Ft(a);
                    var u = It(t, l, a);
                    u !== null && (it(u, t, a), Lu(u, t, a)),
                        (t = { cache: Oi() }),
                        (l.payload = t);
                    return;
            }
            t = t.return;
        }
    }
    function qh(l, t, a) {
        var u = nt();
        (a = {
            lane: u,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
            tn(l)
                ? no(t, a)
                : ((a = mi(l, t, a, u)),
                  a !== null && (it(a, l, u), io(a, t, u)));
    }
    function eo(l, t, a) {
        var u = nt();
        Wu(l, t, a, u);
    }
    function Wu(l, t, a, u) {
        var e = {
            lane: u,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        };
        if (tn(l)) no(t, e);
        else {
            var n = l.alternate;
            if (
                l.lanes === 0 &&
                (n === null || n.lanes === 0) &&
                ((n = t.lastRenderedReducer), n !== null)
            )
                try {
                    var i = t.lastRenderedState,
                        c = n(i, a);
                    if (((e.hasEagerState = !0), (e.eagerState = c), lt(c, i)))
                        return Ge(l, t, e, 0), fl === null && je(), !1;
                } catch {
                } finally {
                }
            if (((a = mi(l, t, e, u)), a !== null))
                return it(a, l, u), io(a, t, u), !0;
        }
        return !1;
    }
    function Fi(l, t, a, u) {
        if (
            ((u = {
                lane: 2,
                revertLane: Uc(),
                action: u,
                hasEagerState: !1,
                eagerState: null,
                next: null,
            }),
            tn(l))
        ) {
            if (t) throw Error(v(479));
        } else (t = mi(l, a, u, 2)), t !== null && it(t, l, 2);
    }
    function tn(l) {
        var t = l.alternate;
        return l === Z || (t !== null && t === Z);
    }
    function no(l, t) {
        eu = $e = !0;
        var a = l.pending;
        a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
            (l.pending = t);
    }
    function io(l, t, a) {
        if ((a & 4194048) !== 0) {
            var u = t.lanes;
            (u &= l.pendingLanes), (a |= u), (t.lanes = a), yf(l, a);
        }
    }
    var an = {
            readContext: Xl,
            use: Fe,
            useCallback: ml,
            useContext: ml,
            useEffect: ml,
            useImperativeHandle: ml,
            useLayoutEffect: ml,
            useInsertionEffect: ml,
            useMemo: ml,
            useReducer: ml,
            useRef: ml,
            useState: ml,
            useDebugValue: ml,
            useDeferredValue: ml,
            useTransition: ml,
            useSyncExternalStore: ml,
            useId: ml,
            useHostTransitionStatus: ml,
            useFormState: ml,
            useActionState: ml,
            useOptimistic: ml,
            useMemoCache: ml,
            useCacheRefresh: ml,
        },
        co = {
            readContext: Xl,
            use: Fe,
            useCallback: function (l, t) {
                return (Jl().memoizedState = [l, t === void 0 ? null : t]), l;
            },
            useContext: Xl,
            useEffect: Ls,
            useImperativeHandle: function (l, t, a) {
                (a = a != null ? a.concat([l]) : null),
                    ln(4194308, 4, ks.bind(null, t, l), a);
            },
            useLayoutEffect: function (l, t) {
                return ln(4194308, 4, l, t);
            },
            useInsertionEffect: function (l, t) {
                ln(4, 2, l, t);
            },
            useMemo: function (l, t) {
                var a = Jl();
                t = t === void 0 ? null : t;
                var u = l();
                if (Na) {
                    wt(!0);
                    try {
                        l();
                    } finally {
                        wt(!1);
                    }
                }
                return (a.memoizedState = [u, t]), u;
            },
            useReducer: function (l, t, a) {
                var u = Jl();
                if (a !== void 0) {
                    var e = a(t);
                    if (Na) {
                        wt(!0);
                        try {
                            a(t);
                        } finally {
                            wt(!1);
                        }
                    }
                } else e = t;
                return (
                    (u.memoizedState = u.baseState = e),
                    (l = {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: l,
                        lastRenderedState: e,
                    }),
                    (u.queue = l),
                    (l = l.dispatch = qh.bind(null, Z, l)),
                    [u.memoizedState, l]
                );
            },
            useRef: function (l) {
                var t = Jl();
                return (l = { current: l }), (t.memoizedState = l);
            },
            useState: function (l) {
                l = Ki(l);
                var t = l.queue,
                    a = eo.bind(null, Z, t);
                return (t.dispatch = a), [l.memoizedState, a];
            },
            useDebugValue: Ji,
            useDeferredValue: function (l, t) {
                var a = Jl();
                return ki(a, l, t);
            },
            useTransition: function () {
                var l = Ki(!1);
                return (
                    (l = Ps.bind(null, Z, l.queue, !0, !1)),
                    (Jl().memoizedState = l),
                    [!1, l]
                );
            },
            useSyncExternalStore: function (l, t, a) {
                var u = Z,
                    e = Jl();
                if (F) {
                    if (a === void 0) throw Error(v(407));
                    a = a();
                } else {
                    if (((a = t()), fl === null)) throw Error(v(349));
                    (k & 124) !== 0 || Ds(u, t, a);
                }
                e.memoizedState = a;
                var n = { value: a, getSnapshot: t };
                return (
                    (e.queue = n),
                    Ls(Rs.bind(null, u, n, l), [l]),
                    (u.flags |= 2048),
                    iu(9, Pe(), Us.bind(null, u, n, a, t), null),
                    a
                );
            },
            useId: function () {
                var l = Jl(),
                    t = fl.identifierPrefix;
                if (F) {
                    var a = Nt,
                        u = Rt;
                    (a = (u & ~(1 << (32 - Pl(u) - 1))).toString(32) + a),
                        (t = "«" + t + "R" + a),
                        (a = We++),
                        0 < a && (t += "H" + a.toString(32)),
                        (t += "»");
                } else (a = Mh++), (t = "«" + t + "r" + a.toString(32) + "»");
                return (l.memoizedState = t);
            },
            useHostTransitionStatus: Wi,
            useFormState: Xs,
            useActionState: Xs,
            useOptimistic: function (l) {
                var t = Jl();
                t.memoizedState = t.baseState = l;
                var a = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null,
                };
                return (
                    (t.queue = a),
                    (t = Fi.bind(null, Z, !0, a)),
                    (a.dispatch = t),
                    [l, t]
                );
            },
            useMemoCache: Zi,
            useCacheRefresh: function () {
                return (Jl().memoizedState = Hh.bind(null, Z));
            },
        },
        fo = {
            readContext: Xl,
            use: Fe,
            useCallback: Ws,
            useContext: Xl,
            useEffect: Ks,
            useImperativeHandle: $s,
            useInsertionEffect: ws,
            useLayoutEffect: Js,
            useMemo: Fs,
            useReducer: Ie,
            useRef: Vs,
            useState: function () {
                return Ie(Bt);
            },
            useDebugValue: Ji,
            useDeferredValue: function (l, t) {
                var a = bl();
                return Is(a, ul.memoizedState, l, t);
            },
            useTransition: function () {
                var l = Ie(Bt)[0],
                    t = bl().memoizedState;
                return [typeof l == "boolean" ? l : ku(l), t];
            },
            useSyncExternalStore: Ms,
            useId: ao,
            useHostTransitionStatus: Wi,
            useFormState: Qs,
            useActionState: Qs,
            useOptimistic: function (l, t) {
                var a = bl();
                return qs(a, ul, l, t);
            },
            useMemoCache: Zi,
            useCacheRefresh: uo,
        },
        Bh = {
            readContext: Xl,
            use: Fe,
            useCallback: Ws,
            useContext: Xl,
            useEffect: Ks,
            useImperativeHandle: $s,
            useInsertionEffect: ws,
            useLayoutEffect: Js,
            useMemo: Fs,
            useReducer: Li,
            useRef: Vs,
            useState: function () {
                return Li(Bt);
            },
            useDebugValue: Ji,
            useDeferredValue: function (l, t) {
                var a = bl();
                return ul === null
                    ? ki(a, l, t)
                    : Is(a, ul.memoizedState, l, t);
            },
            useTransition: function () {
                var l = Li(Bt)[0],
                    t = bl().memoizedState;
                return [typeof l == "boolean" ? l : ku(l), t];
            },
            useSyncExternalStore: Ms,
            useId: ao,
            useHostTransitionStatus: Wi,
            useFormState: Zs,
            useActionState: Zs,
            useOptimistic: function (l, t) {
                var a = bl();
                return ul !== null
                    ? qs(a, ul, l, t)
                    : ((a.baseState = l), [l, a.queue.dispatch]);
            },
            useMemoCache: Zi,
            useCacheRefresh: uo,
        },
        cu = null,
        Fu = 0;
    function un(l) {
        var t = Fu;
        return (Fu += 1), cu === null && (cu = []), bs(cu, l, t);
    }
    function Iu(l, t) {
        (t = t.props.ref), (l.ref = t !== void 0 ? t : null);
    }
    function en(l, t) {
        throw t.$$typeof === tl
            ? Error(v(525))
            : ((l = Object.prototype.toString.call(t)),
              Error(
                  v(
                      31,
                      l === "[object Object]"
                          ? "object with keys {" +
                                Object.keys(t).join(", ") +
                                "}"
                          : l
                  )
              ));
    }
    function so(l) {
        var t = l._init;
        return t(l._payload);
    }
    function oo(l) {
        function t(r, o) {
            if (l) {
                var d = r.deletions;
                d === null ? ((r.deletions = [o]), (r.flags |= 16)) : d.push(o);
            }
        }
        function a(r, o) {
            if (!l) return null;
            for (; o !== null; ) t(r, o), (o = o.sibling);
            return null;
        }
        function u(r) {
            for (var o = new Map(); r !== null; )
                r.key !== null ? o.set(r.key, r) : o.set(r.index, r),
                    (r = r.sibling);
            return o;
        }
        function e(r, o) {
            return (r = Ut(r, o)), (r.index = 0), (r.sibling = null), r;
        }
        function n(r, o, d) {
            return (
                (r.index = d),
                l
                    ? ((d = r.alternate),
                      d !== null
                          ? ((d = d.index),
                            d < o ? ((r.flags |= 67108866), o) : d)
                          : ((r.flags |= 67108866), o))
                    : ((r.flags |= 1048576), o)
            );
        }
        function i(r) {
            return l && r.alternate === null && (r.flags |= 67108866), r;
        }
        function c(r, o, d, b) {
            return o === null || o.tag !== 6
                ? ((o = Si(d, r.mode, b)), (o.return = r), o)
                : ((o = e(o, d)), (o.return = r), o);
        }
        function f(r, o, d, b) {
            var M = d.type;
            return M === Ul
                ? g(r, o, d.props.children, b, d.key)
                : o !== null &&
                  (o.elementType === M ||
                      (typeof M == "object" &&
                          M !== null &&
                          M.$$typeof === Yl &&
                          so(M) === o.type))
                ? ((o = e(o, d.props)), Iu(o, d), (o.return = r), o)
                : ((o = Qe(d.type, d.key, d.props, null, r.mode, b)),
                  Iu(o, d),
                  (o.return = r),
                  o);
        }
        function h(r, o, d, b) {
            return o === null ||
                o.tag !== 4 ||
                o.stateNode.containerInfo !== d.containerInfo ||
                o.stateNode.implementation !== d.implementation
                ? ((o = bi(d, r.mode, b)), (o.return = r), o)
                : ((o = e(o, d.children || [])), (o.return = r), o);
        }
        function g(r, o, d, b, M) {
            return o === null || o.tag !== 7
                ? ((o = Ea(d, r.mode, b, M)), (o.return = r), o)
                : ((o = e(o, d)), (o.return = r), o);
        }
        function A(r, o, d) {
            if (
                (typeof o == "string" && o !== "") ||
                typeof o == "number" ||
                typeof o == "bigint"
            )
                return (o = Si("" + o, r.mode, d)), (o.return = r), o;
            if (typeof o == "object" && o !== null) {
                switch (o.$$typeof) {
                    case al:
                        return (
                            (d = Qe(o.type, o.key, o.props, null, r.mode, d)),
                            Iu(d, o),
                            (d.return = r),
                            d
                        );
                    case Dl:
                        return (o = bi(o, r.mode, d)), (o.return = r), o;
                    case Yl:
                        var b = o._init;
                        return (o = b(o._payload)), A(r, o, d);
                }
                if (jl(o) || xl(o))
                    return (o = Ea(o, r.mode, d, null)), (o.return = r), o;
                if (typeof o.then == "function") return A(r, un(o), d);
                if (o.$$typeof === Al) return A(r, Le(r, o), d);
                en(r, o);
            }
            return null;
        }
        function y(r, o, d, b) {
            var M = o !== null ? o.key : null;
            if (
                (typeof d == "string" && d !== "") ||
                typeof d == "number" ||
                typeof d == "bigint"
            )
                return M !== null ? null : c(r, o, "" + d, b);
            if (typeof d == "object" && d !== null) {
                switch (d.$$typeof) {
                    case al:
                        return d.key === M ? f(r, o, d, b) : null;
                    case Dl:
                        return d.key === M ? h(r, o, d, b) : null;
                    case Yl:
                        return (
                            (M = d._init), (d = M(d._payload)), y(r, o, d, b)
                        );
                }
                if (jl(d) || xl(d))
                    return M !== null ? null : g(r, o, d, b, null);
                if (typeof d.then == "function") return y(r, o, un(d), b);
                if (d.$$typeof === Al) return y(r, o, Le(r, d), b);
                en(r, d);
            }
            return null;
        }
        function m(r, o, d, b, M) {
            if (
                (typeof b == "string" && b !== "") ||
                typeof b == "number" ||
                typeof b == "bigint"
            )
                return (r = r.get(d) || null), c(o, r, "" + b, M);
            if (typeof b == "object" && b !== null) {
                switch (b.$$typeof) {
                    case al:
                        return (
                            (r = r.get(b.key === null ? d : b.key) || null),
                            f(o, r, b, M)
                        );
                    case Dl:
                        return (
                            (r = r.get(b.key === null ? d : b.key) || null),
                            h(o, r, b, M)
                        );
                    case Yl:
                        var V = b._init;
                        return (b = V(b._payload)), m(r, o, d, b, M);
                }
                if (jl(b) || xl(b))
                    return (r = r.get(d) || null), g(o, r, b, M, null);
                if (typeof b.then == "function") return m(r, o, d, un(b), M);
                if (b.$$typeof === Al) return m(r, o, d, Le(o, b), M);
                en(o, b);
            }
            return null;
        }
        function Y(r, o, d, b) {
            for (
                var M = null, V = null, U = o, q = (o = 0), Ol = null;
                U !== null && q < d.length;
                q++
            ) {
                U.index > q ? ((Ol = U), (U = null)) : (Ol = U.sibling);
                var W = y(r, U, d[q], b);
                if (W === null) {
                    U === null && (U = Ol);
                    break;
                }
                l && U && W.alternate === null && t(r, U),
                    (o = n(W, o, q)),
                    V === null ? (M = W) : (V.sibling = W),
                    (V = W),
                    (U = Ol);
            }
            if (q === d.length) return a(r, U), F && pa(r, q), M;
            if (U === null) {
                for (; q < d.length; q++)
                    (U = A(r, d[q], b)),
                        U !== null &&
                            ((o = n(U, o, q)),
                            V === null ? (M = U) : (V.sibling = U),
                            (V = U));
                return F && pa(r, q), M;
            }
            for (U = u(U); q < d.length; q++)
                (Ol = m(U, r, q, d[q], b)),
                    Ol !== null &&
                        (l &&
                            Ol.alternate !== null &&
                            U.delete(Ol.key === null ? q : Ol.key),
                        (o = n(Ol, o, q)),
                        V === null ? (M = Ol) : (V.sibling = Ol),
                        (V = Ol));
            return (
                l &&
                    U.forEach(function (va) {
                        return t(r, va);
                    }),
                F && pa(r, q),
                M
            );
        }
        function H(r, o, d, b) {
            if (d == null) throw Error(v(151));
            for (
                var M = null,
                    V = null,
                    U = o,
                    q = (o = 0),
                    Ol = null,
                    W = d.next();
                U !== null && !W.done;
                q++, W = d.next()
            ) {
                U.index > q ? ((Ol = U), (U = null)) : (Ol = U.sibling);
                var va = y(r, U, W.value, b);
                if (va === null) {
                    U === null && (U = Ol);
                    break;
                }
                l && U && va.alternate === null && t(r, U),
                    (o = n(va, o, q)),
                    V === null ? (M = va) : (V.sibling = va),
                    (V = va),
                    (U = Ol);
            }
            if (W.done) return a(r, U), F && pa(r, q), M;
            if (U === null) {
                for (; !W.done; q++, W = d.next())
                    (W = A(r, W.value, b)),
                        W !== null &&
                            ((o = n(W, o, q)),
                            V === null ? (M = W) : (V.sibling = W),
                            (V = W));
                return F && pa(r, q), M;
            }
            for (U = u(U); !W.done; q++, W = d.next())
                (W = m(U, r, q, W.value, b)),
                    W !== null &&
                        (l &&
                            W.alternate !== null &&
                            U.delete(W.key === null ? q : W.key),
                        (o = n(W, o, q)),
                        V === null ? (M = W) : (V.sibling = W),
                        (V = W));
            return (
                l &&
                    U.forEach(function (Y0) {
                        return t(r, Y0);
                    }),
                F && pa(r, q),
                M
            );
        }
        function nl(r, o, d, b) {
            if (
                (typeof d == "object" &&
                    d !== null &&
                    d.type === Ul &&
                    d.key === null &&
                    (d = d.props.children),
                typeof d == "object" && d !== null)
            ) {
                switch (d.$$typeof) {
                    case al:
                        l: {
                            for (var M = d.key; o !== null; ) {
                                if (o.key === M) {
                                    if (((M = d.type), M === Ul)) {
                                        if (o.tag === 7) {
                                            a(r, o.sibling),
                                                (b = e(o, d.props.children)),
                                                (b.return = r),
                                                (r = b);
                                            break l;
                                        }
                                    } else if (
                                        o.elementType === M ||
                                        (typeof M == "object" &&
                                            M !== null &&
                                            M.$$typeof === Yl &&
                                            so(M) === o.type)
                                    ) {
                                        a(r, o.sibling),
                                            (b = e(o, d.props)),
                                            Iu(b, d),
                                            (b.return = r),
                                            (r = b);
                                        break l;
                                    }
                                    a(r, o);
                                    break;
                                } else t(r, o);
                                o = o.sibling;
                            }
                            d.type === Ul
                                ? ((b = Ea(d.props.children, r.mode, b, d.key)),
                                  (b.return = r),
                                  (r = b))
                                : ((b = Qe(
                                      d.type,
                                      d.key,
                                      d.props,
                                      null,
                                      r.mode,
                                      b
                                  )),
                                  Iu(b, d),
                                  (b.return = r),
                                  (r = b));
                        }
                        return i(r);
                    case Dl:
                        l: {
                            for (M = d.key; o !== null; ) {
                                if (o.key === M)
                                    if (
                                        o.tag === 4 &&
                                        o.stateNode.containerInfo ===
                                            d.containerInfo &&
                                        o.stateNode.implementation ===
                                            d.implementation
                                    ) {
                                        a(r, o.sibling),
                                            (b = e(o, d.children || [])),
                                            (b.return = r),
                                            (r = b);
                                        break l;
                                    } else {
                                        a(r, o);
                                        break;
                                    }
                                else t(r, o);
                                o = o.sibling;
                            }
                            (b = bi(d, r.mode, b)), (b.return = r), (r = b);
                        }
                        return i(r);
                    case Yl:
                        return (
                            (M = d._init), (d = M(d._payload)), nl(r, o, d, b)
                        );
                }
                if (jl(d)) return Y(r, o, d, b);
                if (xl(d)) {
                    if (((M = xl(d)), typeof M != "function"))
                        throw Error(v(150));
                    return (d = M.call(d)), H(r, o, d, b);
                }
                if (typeof d.then == "function") return nl(r, o, un(d), b);
                if (d.$$typeof === Al) return nl(r, o, Le(r, d), b);
                en(r, d);
            }
            return (typeof d == "string" && d !== "") ||
                typeof d == "number" ||
                typeof d == "bigint"
                ? ((d = "" + d),
                  o !== null && o.tag === 6
                      ? (a(r, o.sibling),
                        (b = e(o, d)),
                        (b.return = r),
                        (r = b))
                      : (a(r, o),
                        (b = Si(d, r.mode, b)),
                        (b.return = r),
                        (r = b)),
                  i(r))
                : a(r, o);
        }
        return function (r, o, d, b) {
            try {
                Fu = 0;
                var M = nl(r, o, d, b);
                return (cu = null), M;
            } catch (U) {
                if (U === Zu || U === we) throw U;
                var V = tt(29, U, null, r.mode);
                return (V.lanes = b), (V.return = r), V;
            } finally {
            }
        };
    }
    var fu = oo(!0),
        ro = oo(!1),
        ht = _(null),
        Tt = null;
    function la(l) {
        var t = l.alternate;
        z(_l, _l.current & 1),
            z(ht, l),
            Tt === null &&
                (t === null ||
                    uu.current !== null ||
                    t.memoizedState !== null) &&
                (Tt = l);
    }
    function ho(l) {
        if (l.tag === 22) {
            if ((z(_l, _l.current), z(ht, l), Tt === null)) {
                var t = l.alternate;
                t !== null && t.memoizedState !== null && (Tt = l);
            }
        } else ta();
    }
    function ta() {
        z(_l, _l.current), z(ht, ht.current);
    }
    function Yt(l) {
        O(ht), Tt === l && (Tt = null), O(_l);
    }
    var _l = _(0);
    function nn(l) {
        for (var t = l; t !== null; ) {
            if (t.tag === 13) {
                var a = t.memoizedState;
                if (
                    a !== null &&
                    ((a = a.dehydrated), a === null || a.data === "$?" || Cc(a))
                )
                    return t;
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0) return t;
            } else if (t.child !== null) {
                (t.child.return = t), (t = t.child);
                continue;
            }
            if (t === l) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === l) return null;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
        return null;
    }
    function Ii(l, t, a, u) {
        (t = l.memoizedState),
            (a = a(u, t)),
            (a = a == null ? t : R({}, t, a)),
            (l.memoizedState = a),
            l.lanes === 0 && (l.updateQueue.baseState = a);
    }
    var Pi = {
        enqueueSetState: function (l, t, a) {
            l = l._reactInternals;
            var u = nt(),
                e = Ft(u);
            (e.payload = t),
                a != null && (e.callback = a),
                (t = It(l, e, u)),
                t !== null && (it(t, l, u), Lu(t, l, u));
        },
        enqueueReplaceState: function (l, t, a) {
            l = l._reactInternals;
            var u = nt(),
                e = Ft(u);
            (e.tag = 1),
                (e.payload = t),
                a != null && (e.callback = a),
                (t = It(l, e, u)),
                t !== null && (it(t, l, u), Lu(t, l, u));
        },
        enqueueForceUpdate: function (l, t) {
            l = l._reactInternals;
            var a = nt(),
                u = Ft(a);
            (u.tag = 2),
                t != null && (u.callback = t),
                (t = It(l, u, a)),
                t !== null && (it(t, l, a), Lu(t, l, a));
        },
    };
    function yo(l, t, a, u, e, n, i) {
        return (
            (l = l.stateNode),
            typeof l.shouldComponentUpdate == "function"
                ? l.shouldComponentUpdate(u, n, i)
                : t.prototype && t.prototype.isPureReactComponent
                ? !Bu(a, u) || !Bu(e, n)
                : !0
        );
    }
    function vo(l, t, a, u) {
        (l = t.state),
            typeof t.componentWillReceiveProps == "function" &&
                t.componentWillReceiveProps(a, u),
            typeof t.UNSAFE_componentWillReceiveProps == "function" &&
                t.UNSAFE_componentWillReceiveProps(a, u),
            t.state !== l && Pi.enqueueReplaceState(t, t.state, null);
    }
    function Ha(l, t) {
        var a = t;
        if ("ref" in t) {
            a = {};
            for (var u in t) u !== "ref" && (a[u] = t[u]);
        }
        if ((l = l.defaultProps)) {
            a === t && (a = R({}, a));
            for (var e in l) a[e] === void 0 && (a[e] = l[e]);
        }
        return a;
    }
    var cn =
        typeof reportError == "function"
            ? reportError
            : function (l) {
                  if (
                      typeof window == "object" &&
                      typeof window.ErrorEvent == "function"
                  ) {
                      var t = new window.ErrorEvent("error", {
                          bubbles: !0,
                          cancelable: !0,
                          message:
                              typeof l == "object" &&
                              l !== null &&
                              typeof l.message == "string"
                                  ? String(l.message)
                                  : String(l),
                          error: l,
                      });
                      if (!window.dispatchEvent(t)) return;
                  } else if (
                      typeof process == "object" &&
                      typeof process.emit == "function"
                  ) {
                      process.emit("uncaughtException", l);
                      return;
                  }
                  console.error(l);
              };
    function mo(l) {
        cn(l);
    }
    function go(l) {
        console.error(l);
    }
    function So(l) {
        cn(l);
    }
    function fn(l, t) {
        try {
            var a = l.onUncaughtError;
            a(t.value, { componentStack: t.stack });
        } catch (u) {
            setTimeout(function () {
                throw u;
            });
        }
    }
    function bo(l, t, a) {
        try {
            var u = l.onCaughtError;
            u(a.value, {
                componentStack: a.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null,
            });
        } catch (e) {
            setTimeout(function () {
                throw e;
            });
        }
    }
    function lc(l, t, a) {
        return (
            (a = Ft(a)),
            (a.tag = 3),
            (a.payload = { element: null }),
            (a.callback = function () {
                fn(l, t);
            }),
            a
        );
    }
    function Ao(l) {
        return (l = Ft(l)), (l.tag = 3), l;
    }
    function To(l, t, a, u) {
        var e = a.type.getDerivedStateFromError;
        if (typeof e == "function") {
            var n = u.value;
            (l.payload = function () {
                return e(n);
            }),
                (l.callback = function () {
                    bo(t, a, u);
                });
        }
        var i = a.stateNode;
        i !== null &&
            typeof i.componentDidCatch == "function" &&
            (l.callback = function () {
                bo(t, a, u),
                    typeof e != "function" &&
                        (ca === null ? (ca = new Set([this])) : ca.add(this));
                var c = u.stack;
                this.componentDidCatch(u.value, {
                    componentStack: c !== null ? c : "",
                });
            });
    }
    function Yh(l, t, a, u, e) {
        if (
            ((a.flags |= 32768),
            u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
            if (
                ((t = a.alternate),
                t !== null && Xu(t, a, e, !0),
                (a = ht.current),
                a !== null)
            ) {
                switch (a.tag) {
                    case 13:
                        return (
                            Tt === null
                                ? zc()
                                : a.alternate === null && yl === 0 && (yl = 3),
                            (a.flags &= -257),
                            (a.flags |= 65536),
                            (a.lanes = e),
                            u === Ui
                                ? (a.flags |= 16384)
                                : ((t = a.updateQueue),
                                  t === null
                                      ? (a.updateQueue = new Set([u]))
                                      : t.add(u),
                                  Oc(l, u, e)),
                            !1
                        );
                    case 22:
                        return (
                            (a.flags |= 65536),
                            u === Ui
                                ? (a.flags |= 16384)
                                : ((t = a.updateQueue),
                                  t === null
                                      ? ((t = {
                                            transitions: null,
                                            markerInstances: null,
                                            retryQueue: new Set([u]),
                                        }),
                                        (a.updateQueue = t))
                                      : ((a = t.retryQueue),
                                        a === null
                                            ? (t.retryQueue = new Set([u]))
                                            : a.add(u)),
                                  Oc(l, u, e)),
                            !1
                        );
                }
                throw Error(v(435, a.tag));
            }
            return Oc(l, u, e), zc(), !1;
        }
        if (F)
            return (
                (t = ht.current),
                t !== null
                    ? ((t.flags & 65536) === 0 && (t.flags |= 256),
                      (t.flags |= 65536),
                      (t.lanes = e),
                      u !== _i &&
                          ((l = Error(v(422), { cause: u })), Gu(st(l, a))))
                    : (u !== _i &&
                          ((t = Error(v(423), { cause: u })), Gu(st(t, a))),
                      (l = l.current.alternate),
                      (l.flags |= 65536),
                      (e &= -e),
                      (l.lanes |= e),
                      (u = st(u, a)),
                      (e = lc(l.stateNode, u, e)),
                      Hi(l, e),
                      yl !== 4 && (yl = 2)),
                !1
            );
        var n = Error(v(520), { cause: u });
        if (
            ((n = st(n, a)),
            ne === null ? (ne = [n]) : ne.push(n),
            yl !== 4 && (yl = 2),
            t === null)
        )
            return !0;
        (u = st(u, a)), (a = t);
        do {
            switch (a.tag) {
                case 3:
                    return (
                        (a.flags |= 65536),
                        (l = e & -e),
                        (a.lanes |= l),
                        (l = lc(a.stateNode, u, l)),
                        Hi(a, l),
                        !1
                    );
                case 1:
                    if (
                        ((t = a.type),
                        (n = a.stateNode),
                        (a.flags & 128) === 0 &&
                            (typeof t.getDerivedStateFromError == "function" ||
                                (n !== null &&
                                    typeof n.componentDidCatch == "function" &&
                                    (ca === null || !ca.has(n)))))
                    )
                        return (
                            (a.flags |= 65536),
                            (e &= -e),
                            (a.lanes |= e),
                            (e = Ao(e)),
                            To(e, l, a, u),
                            Hi(a, e),
                            !1
                        );
            }
            a = a.return;
        } while (a !== null);
        return !1;
    }
    var _o = Error(v(461)),
        zl = !1;
    function Nl(l, t, a, u) {
        t.child = l === null ? ro(t, null, a, u) : fu(t, l.child, a, u);
    }
    function Eo(l, t, a, u, e) {
        a = a.render;
        var n = t.ref;
        if ("ref" in u) {
            var i = {};
            for (var c in u) c !== "ref" && (i[c] = u[c]);
        } else i = u;
        return (
            Ua(t),
            (u = ji(l, t, a, i, n, e)),
            (c = Gi()),
            l !== null && !zl
                ? (Xi(l, t, e), xt(l, t, e))
                : (F && c && Ai(t), (t.flags |= 1), Nl(l, t, u, e), t.child)
        );
    }
    function zo(l, t, a, u, e) {
        if (l === null) {
            var n = a.type;
            return typeof n == "function" &&
                !gi(n) &&
                n.defaultProps === void 0 &&
                a.compare === null
                ? ((t.tag = 15), (t.type = n), po(l, t, n, u, e))
                : ((l = Qe(a.type, null, u, t, t.mode, e)),
                  (l.ref = t.ref),
                  (l.return = t),
                  (t.child = l));
        }
        if (((n = l.child), !fc(l, e))) {
            var i = n.memoizedProps;
            if (
                ((a = a.compare),
                (a = a !== null ? a : Bu),
                a(i, u) && l.ref === t.ref)
            )
                return xt(l, t, e);
        }
        return (
            (t.flags |= 1),
            (l = Ut(n, u)),
            (l.ref = t.ref),
            (l.return = t),
            (t.child = l)
        );
    }
    function po(l, t, a, u, e) {
        if (l !== null) {
            var n = l.memoizedProps;
            if (Bu(n, u) && l.ref === t.ref)
                if (((zl = !1), (t.pendingProps = u = n), fc(l, e)))
                    (l.flags & 131072) !== 0 && (zl = !0);
                else return (t.lanes = l.lanes), xt(l, t, e);
        }
        return tc(l, t, a, u, e);
    }
    function Oo(l, t, a) {
        var u = t.pendingProps,
            e = u.children,
            n = l !== null ? l.memoizedState : null;
        if (u.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (((u = n !== null ? n.baseLanes | a : a), l !== null)) {
                    for (e = t.child = l.child, n = 0; e !== null; )
                        (n = n | e.lanes | e.childLanes), (e = e.sibling);
                    t.childLanes = n & ~u;
                } else (t.childLanes = 0), (t.child = null);
                return Mo(l, t, u, a);
            }
            if ((a & 536870912) !== 0)
                (t.memoizedState = { baseLanes: 0, cachePool: null }),
                    l !== null && Ke(t, n !== null ? n.cachePool : null),
                    n !== null ? zs(t, n) : Bi(),
                    ho(t);
            else
                return (
                    (t.lanes = t.childLanes = 536870912),
                    Mo(l, t, n !== null ? n.baseLanes | a : a, a)
                );
        } else
            n !== null
                ? (Ke(t, n.cachePool), zs(t, n), ta(), (t.memoizedState = null))
                : (l !== null && Ke(t, null), Bi(), ta());
        return Nl(l, t, e, a), t.child;
    }
    function Mo(l, t, a, u) {
        var e = Di();
        return (
            (e = e === null ? null : { parent: Tl._currentValue, pool: e }),
            (t.memoizedState = { baseLanes: a, cachePool: e }),
            l !== null && Ke(t, null),
            Bi(),
            ho(t),
            l !== null && Xu(l, t, u, !0),
            null
        );
    }
    function sn(l, t) {
        var a = t.ref;
        if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof a != "function" && typeof a != "object")
                throw Error(v(284));
            (l === null || l.ref !== a) && (t.flags |= 4194816);
        }
    }
    function tc(l, t, a, u, e) {
        return (
            Ua(t),
            (a = ji(l, t, a, u, void 0, e)),
            (u = Gi()),
            l !== null && !zl
                ? (Xi(l, t, e), xt(l, t, e))
                : (F && u && Ai(t), (t.flags |= 1), Nl(l, t, a, e), t.child)
        );
    }
    function Do(l, t, a, u, e, n) {
        return (
            Ua(t),
            (t.updateQueue = null),
            (a = Os(t, u, a, e)),
            ps(l),
            (u = Gi()),
            l !== null && !zl
                ? (Xi(l, t, n), xt(l, t, n))
                : (F && u && Ai(t), (t.flags |= 1), Nl(l, t, a, n), t.child)
        );
    }
    function Uo(l, t, a, u, e) {
        if ((Ua(t), t.stateNode === null)) {
            var n = Ia,
                i = a.contextType;
            typeof i == "object" && i !== null && (n = Xl(i)),
                (n = new a(u, n)),
                (t.memoizedState =
                    n.state !== null && n.state !== void 0 ? n.state : null),
                (n.updater = Pi),
                (t.stateNode = n),
                (n._reactInternals = t),
                (n = t.stateNode),
                (n.props = u),
                (n.state = t.memoizedState),
                (n.refs = {}),
                Ri(t),
                (i = a.contextType),
                (n.context = typeof i == "object" && i !== null ? Xl(i) : Ia),
                (n.state = t.memoizedState),
                (i = a.getDerivedStateFromProps),
                typeof i == "function" &&
                    (Ii(t, a, i, u), (n.state = t.memoizedState)),
                typeof a.getDerivedStateFromProps == "function" ||
                    typeof n.getSnapshotBeforeUpdate == "function" ||
                    (typeof n.UNSAFE_componentWillMount != "function" &&
                        typeof n.componentWillMount != "function") ||
                    ((i = n.state),
                    typeof n.componentWillMount == "function" &&
                        n.componentWillMount(),
                    typeof n.UNSAFE_componentWillMount == "function" &&
                        n.UNSAFE_componentWillMount(),
                    i !== n.state && Pi.enqueueReplaceState(n, n.state, null),
                    wu(t, u, n, e),
                    Ku(),
                    (n.state = t.memoizedState)),
                typeof n.componentDidMount == "function" &&
                    (t.flags |= 4194308),
                (u = !0);
        } else if (l === null) {
            n = t.stateNode;
            var c = t.memoizedProps,
                f = Ha(a, c);
            n.props = f;
            var h = n.context,
                g = a.contextType;
            (i = Ia), typeof g == "object" && g !== null && (i = Xl(g));
            var A = a.getDerivedStateFromProps;
            (g =
                typeof A == "function" ||
                typeof n.getSnapshotBeforeUpdate == "function"),
                (c = t.pendingProps !== c),
                g ||
                    (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
                        typeof n.componentWillReceiveProps != "function") ||
                    ((c || h !== i) && vo(t, n, u, i)),
                (Wt = !1);
            var y = t.memoizedState;
            (n.state = y),
                wu(t, u, n, e),
                Ku(),
                (h = t.memoizedState),
                c || y !== h || Wt
                    ? (typeof A == "function" &&
                          (Ii(t, a, A, u), (h = t.memoizedState)),
                      (f = Wt || yo(t, a, f, u, y, h, i))
                          ? (g ||
                                (typeof n.UNSAFE_componentWillMount !=
                                    "function" &&
                                    typeof n.componentWillMount !=
                                        "function") ||
                                (typeof n.componentWillMount == "function" &&
                                    n.componentWillMount(),
                                typeof n.UNSAFE_componentWillMount ==
                                    "function" &&
                                    n.UNSAFE_componentWillMount()),
                            typeof n.componentDidMount == "function" &&
                                (t.flags |= 4194308))
                          : (typeof n.componentDidMount == "function" &&
                                (t.flags |= 4194308),
                            (t.memoizedProps = u),
                            (t.memoizedState = h)),
                      (n.props = u),
                      (n.state = h),
                      (n.context = i),
                      (u = f))
                    : (typeof n.componentDidMount == "function" &&
                          (t.flags |= 4194308),
                      (u = !1));
        } else {
            (n = t.stateNode),
                Ni(l, t),
                (i = t.memoizedProps),
                (g = Ha(a, i)),
                (n.props = g),
                (A = t.pendingProps),
                (y = n.context),
                (h = a.contextType),
                (f = Ia),
                typeof h == "object" && h !== null && (f = Xl(h)),
                (c = a.getDerivedStateFromProps),
                (h =
                    typeof c == "function" ||
                    typeof n.getSnapshotBeforeUpdate == "function") ||
                    (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
                        typeof n.componentWillReceiveProps != "function") ||
                    ((i !== A || y !== f) && vo(t, n, u, f)),
                (Wt = !1),
                (y = t.memoizedState),
                (n.state = y),
                wu(t, u, n, e),
                Ku();
            var m = t.memoizedState;
            i !== A ||
            y !== m ||
            Wt ||
            (l !== null && l.dependencies !== null && Ve(l.dependencies))
                ? (typeof c == "function" &&
                      (Ii(t, a, c, u), (m = t.memoizedState)),
                  (g =
                      Wt ||
                      yo(t, a, g, u, y, m, f) ||
                      (l !== null &&
                          l.dependencies !== null &&
                          Ve(l.dependencies)))
                      ? (h ||
                            (typeof n.UNSAFE_componentWillUpdate !=
                                "function" &&
                                typeof n.componentWillUpdate != "function") ||
                            (typeof n.componentWillUpdate == "function" &&
                                n.componentWillUpdate(u, m, f),
                            typeof n.UNSAFE_componentWillUpdate == "function" &&
                                n.UNSAFE_componentWillUpdate(u, m, f)),
                        typeof n.componentDidUpdate == "function" &&
                            (t.flags |= 4),
                        typeof n.getSnapshotBeforeUpdate == "function" &&
                            (t.flags |= 1024))
                      : (typeof n.componentDidUpdate != "function" ||
                            (i === l.memoizedProps && y === l.memoizedState) ||
                            (t.flags |= 4),
                        typeof n.getSnapshotBeforeUpdate != "function" ||
                            (i === l.memoizedProps && y === l.memoizedState) ||
                            (t.flags |= 1024),
                        (t.memoizedProps = u),
                        (t.memoizedState = m)),
                  (n.props = u),
                  (n.state = m),
                  (n.context = f),
                  (u = g))
                : (typeof n.componentDidUpdate != "function" ||
                      (i === l.memoizedProps && y === l.memoizedState) ||
                      (t.flags |= 4),
                  typeof n.getSnapshotBeforeUpdate != "function" ||
                      (i === l.memoizedProps && y === l.memoizedState) ||
                      (t.flags |= 1024),
                  (u = !1));
        }
        return (
            (n = u),
            sn(l, t),
            (u = (t.flags & 128) !== 0),
            n || u
                ? ((n = t.stateNode),
                  (a =
                      u && typeof a.getDerivedStateFromError != "function"
                          ? null
                          : n.render()),
                  (t.flags |= 1),
                  l !== null && u
                      ? ((t.child = fu(t, l.child, null, e)),
                        (t.child = fu(t, null, a, e)))
                      : Nl(l, t, a, e),
                  (t.memoizedState = n.state),
                  (l = t.child))
                : (l = xt(l, t, e)),
            l
        );
    }
    function Ro(l, t, a, u) {
        return ju(), (t.flags |= 256), Nl(l, t, a, u), t.child;
    }
    var ac = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null,
    };
    function uc(l) {
        return { baseLanes: l, cachePool: ms() };
    }
    function ec(l, t, a) {
        return (l = l !== null ? l.childLanes & ~a : 0), t && (l |= yt), l;
    }
    function No(l, t, a) {
        var u = t.pendingProps,
            e = !1,
            n = (t.flags & 128) !== 0,
            i;
        if (
            ((i = n) ||
                (i =
                    l !== null && l.memoizedState === null
                        ? !1
                        : (_l.current & 2) !== 0),
            i && ((e = !0), (t.flags &= -129)),
            (i = (t.flags & 32) !== 0),
            (t.flags &= -33),
            l === null)
        ) {
            if (F) {
                if ((e ? la(t) : ta(), F)) {
                    var c = hl,
                        f;
                    if ((f = c)) {
                        l: {
                            for (f = c, c = At; f.nodeType !== 8; ) {
                                if (!c) {
                                    c = null;
                                    break l;
                                }
                                if (((f = St(f.nextSibling)), f === null)) {
                                    c = null;
                                    break l;
                                }
                            }
                            c = f;
                        }
                        c !== null
                            ? ((t.memoizedState = {
                                  dehydrated: c,
                                  treeContext:
                                      za !== null
                                          ? { id: Rt, overflow: Nt }
                                          : null,
                                  retryLane: 536870912,
                                  hydrationErrors: null,
                              }),
                              (f = tt(18, null, null, 0)),
                              (f.stateNode = c),
                              (f.return = t),
                              (t.child = f),
                              (Zl = t),
                              (hl = null),
                              (f = !0))
                            : (f = !1);
                    }
                    f || Ma(t);
                }
                if (
                    ((c = t.memoizedState),
                    c !== null && ((c = c.dehydrated), c !== null))
                )
                    return Cc(c) ? (t.lanes = 32) : (t.lanes = 536870912), null;
                Yt(t);
            }
            return (
                (c = u.children),
                (u = u.fallback),
                e
                    ? (ta(),
                      (e = t.mode),
                      (c = on({ mode: "hidden", children: c }, e)),
                      (u = Ea(u, e, a, null)),
                      (c.return = t),
                      (u.return = t),
                      (c.sibling = u),
                      (t.child = c),
                      (e = t.child),
                      (e.memoizedState = uc(a)),
                      (e.childLanes = ec(l, i, a)),
                      (t.memoizedState = ac),
                      u)
                    : (la(t), nc(t, c))
            );
        }
        if (
            ((f = l.memoizedState),
            f !== null && ((c = f.dehydrated), c !== null))
        ) {
            if (n)
                t.flags & 256
                    ? (la(t), (t.flags &= -257), (t = ic(l, t, a)))
                    : t.memoizedState !== null
                    ? (ta(), (t.child = l.child), (t.flags |= 128), (t = null))
                    : (ta(),
                      (e = u.fallback),
                      (c = t.mode),
                      (u = on({ mode: "visible", children: u.children }, c)),
                      (e = Ea(e, c, a, null)),
                      (e.flags |= 2),
                      (u.return = t),
                      (e.return = t),
                      (u.sibling = e),
                      (t.child = u),
                      fu(t, l.child, null, a),
                      (u = t.child),
                      (u.memoizedState = uc(a)),
                      (u.childLanes = ec(l, i, a)),
                      (t.memoizedState = ac),
                      (t = e));
            else if ((la(t), Cc(c))) {
                if (((i = c.nextSibling && c.nextSibling.dataset), i))
                    var h = i.dgst;
                (i = h),
                    (u = Error(v(419))),
                    (u.stack = ""),
                    (u.digest = i),
                    Gu({ value: u, source: null, stack: null }),
                    (t = ic(l, t, a));
            } else if (
                (zl || Xu(l, t, a, !1), (i = (a & l.childLanes) !== 0), zl || i)
            ) {
                if (
                    ((i = fl),
                    i !== null &&
                        ((u = a & -a),
                        (u = (u & 42) !== 0 ? 1 : Zn(u)),
                        (u = (u & (i.suspendedLanes | a)) !== 0 ? 0 : u),
                        u !== 0 && u !== f.retryLane))
                )
                    throw ((f.retryLane = u), Fa(l, u), it(i, l, u), _o);
                c.data === "$?" || zc(), (t = ic(l, t, a));
            } else
                c.data === "$?"
                    ? ((t.flags |= 192), (t.child = l.child), (t = null))
                    : ((l = f.treeContext),
                      (hl = St(c.nextSibling)),
                      (Zl = t),
                      (F = !0),
                      (Oa = null),
                      (At = !1),
                      l !== null &&
                          ((rt[dt++] = Rt),
                          (rt[dt++] = Nt),
                          (rt[dt++] = za),
                          (Rt = l.id),
                          (Nt = l.overflow),
                          (za = t)),
                      (t = nc(t, u.children)),
                      (t.flags |= 4096));
            return t;
        }
        return e
            ? (ta(),
              (e = u.fallback),
              (c = t.mode),
              (f = l.child),
              (h = f.sibling),
              (u = Ut(f, { mode: "hidden", children: u.children })),
              (u.subtreeFlags = f.subtreeFlags & 65011712),
              h !== null
                  ? (e = Ut(h, e))
                  : ((e = Ea(e, c, a, null)), (e.flags |= 2)),
              (e.return = t),
              (u.return = t),
              (u.sibling = e),
              (t.child = u),
              (u = e),
              (e = t.child),
              (c = l.child.memoizedState),
              c === null
                  ? (c = uc(a))
                  : ((f = c.cachePool),
                    f !== null
                        ? ((h = Tl._currentValue),
                          (f = f.parent !== h ? { parent: h, pool: h } : f))
                        : (f = ms()),
                    (c = { baseLanes: c.baseLanes | a, cachePool: f })),
              (e.memoizedState = c),
              (e.childLanes = ec(l, i, a)),
              (t.memoizedState = ac),
              u)
            : (la(t),
              (a = l.child),
              (l = a.sibling),
              (a = Ut(a, { mode: "visible", children: u.children })),
              (a.return = t),
              (a.sibling = null),
              l !== null &&
                  ((i = t.deletions),
                  i === null
                      ? ((t.deletions = [l]), (t.flags |= 16))
                      : i.push(l)),
              (t.child = a),
              (t.memoizedState = null),
              a);
    }
    function nc(l, t) {
        return (
            (t = on({ mode: "visible", children: t }, l.mode)),
            (t.return = l),
            (l.child = t)
        );
    }
    function on(l, t) {
        return (
            (l = tt(22, l, null, t)),
            (l.lanes = 0),
            (l.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null,
            }),
            l
        );
    }
    function ic(l, t, a) {
        return (
            fu(t, l.child, null, a),
            (l = nc(t, t.pendingProps.children)),
            (l.flags |= 2),
            (t.memoizedState = null),
            l
        );
    }
    function Ho(l, t, a) {
        l.lanes |= t;
        var u = l.alternate;
        u !== null && (u.lanes |= t), zi(l.return, t, a);
    }
    function cc(l, t, a, u, e) {
        var n = l.memoizedState;
        n === null
            ? (l.memoizedState = {
                  isBackwards: t,
                  rendering: null,
                  renderingStartTime: 0,
                  last: u,
                  tail: a,
                  tailMode: e,
              })
            : ((n.isBackwards = t),
              (n.rendering = null),
              (n.renderingStartTime = 0),
              (n.last = u),
              (n.tail = a),
              (n.tailMode = e));
    }
    function qo(l, t, a) {
        var u = t.pendingProps,
            e = u.revealOrder,
            n = u.tail;
        if ((Nl(l, t, u.children, a), (u = _l.current), (u & 2) !== 0))
            (u = (u & 1) | 2), (t.flags |= 128);
        else {
            if (l !== null && (l.flags & 128) !== 0)
                l: for (l = t.child; l !== null; ) {
                    if (l.tag === 13) l.memoizedState !== null && Ho(l, a, t);
                    else if (l.tag === 19) Ho(l, a, t);
                    else if (l.child !== null) {
                        (l.child.return = l), (l = l.child);
                        continue;
                    }
                    if (l === t) break l;
                    for (; l.sibling === null; ) {
                        if (l.return === null || l.return === t) break l;
                        l = l.return;
                    }
                    (l.sibling.return = l.return), (l = l.sibling);
                }
            u &= 1;
        }
        switch ((z(_l, u), e)) {
            case "forwards":
                for (a = t.child, e = null; a !== null; )
                    (l = a.alternate),
                        l !== null && nn(l) === null && (e = a),
                        (a = a.sibling);
                (a = e),
                    a === null
                        ? ((e = t.child), (t.child = null))
                        : ((e = a.sibling), (a.sibling = null)),
                    cc(t, !1, e, a, n);
                break;
            case "backwards":
                for (a = null, e = t.child, t.child = null; e !== null; ) {
                    if (((l = e.alternate), l !== null && nn(l) === null)) {
                        t.child = e;
                        break;
                    }
                    (l = e.sibling), (e.sibling = a), (a = e), (e = l);
                }
                cc(t, !0, a, null, n);
                break;
            case "together":
                cc(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
        return t.child;
    }
    function xt(l, t, a) {
        if (
            (l !== null && (t.dependencies = l.dependencies),
            (ia |= t.lanes),
            (a & t.childLanes) === 0)
        )
            if (l !== null) {
                if ((Xu(l, t, a, !1), (a & t.childLanes) === 0)) return null;
            } else return null;
        if (l !== null && t.child !== l.child) throw Error(v(153));
        if (t.child !== null) {
            for (
                l = t.child,
                    a = Ut(l, l.pendingProps),
                    t.child = a,
                    a.return = t;
                l.sibling !== null;

            )
                (l = l.sibling),
                    (a = a.sibling = Ut(l, l.pendingProps)),
                    (a.return = t);
            a.sibling = null;
        }
        return t.child;
    }
    function fc(l, t) {
        return (l.lanes & t) !== 0
            ? !0
            : ((l = l.dependencies), !!(l !== null && Ve(l)));
    }
    function xh(l, t, a) {
        switch (t.tag) {
            case 3:
                ol(t, t.stateNode.containerInfo),
                    $t(t, Tl, l.memoizedState.cache),
                    ju();
                break;
            case 27:
            case 5:
                jn(t);
                break;
            case 4:
                ol(t, t.stateNode.containerInfo);
                break;
            case 10:
                $t(t, t.type, t.memoizedProps.value);
                break;
            case 13:
                var u = t.memoizedState;
                if (u !== null)
                    return u.dehydrated !== null
                        ? (la(t), (t.flags |= 128), null)
                        : (a & t.child.childLanes) !== 0
                        ? No(l, t, a)
                        : (la(t),
                          (l = xt(l, t, a)),
                          l !== null ? l.sibling : null);
                la(t);
                break;
            case 19:
                var e = (l.flags & 128) !== 0;
                if (
                    ((u = (a & t.childLanes) !== 0),
                    u || (Xu(l, t, a, !1), (u = (a & t.childLanes) !== 0)),
                    e)
                ) {
                    if (u) return qo(l, t, a);
                    t.flags |= 128;
                }
                if (
                    ((e = t.memoizedState),
                    e !== null &&
                        ((e.rendering = null),
                        (e.tail = null),
                        (e.lastEffect = null)),
                    z(_l, _l.current),
                    u)
                )
                    break;
                return null;
            case 22:
            case 23:
                return (t.lanes = 0), Oo(l, t, a);
            case 24:
                $t(t, Tl, l.memoizedState.cache);
        }
        return xt(l, t, a);
    }
    function Bo(l, t, a) {
        if (l !== null)
            if (l.memoizedProps !== t.pendingProps) zl = !0;
            else {
                if (!fc(l, a) && (t.flags & 128) === 0)
                    return (zl = !1), xh(l, t, a);
                zl = (l.flags & 131072) !== 0;
            }
        else (zl = !1), F && (t.flags & 1048576) !== 0 && ss(t, Ze, t.index);
        switch (((t.lanes = 0), t.tag)) {
            case 16:
                l: {
                    l = t.pendingProps;
                    var u = t.elementType,
                        e = u._init;
                    if (
                        ((u = e(u._payload)),
                        (t.type = u),
                        typeof u == "function")
                    )
                        gi(u)
                            ? ((l = Ha(u, l)),
                              (t.tag = 1),
                              (t = Uo(null, t, u, l, a)))
                            : ((t.tag = 0), (t = tc(null, t, u, l, a)));
                    else {
                        if (u != null) {
                            if (((e = u.$$typeof), e === Rl)) {
                                (t.tag = 11), (t = Eo(null, t, u, l, a));
                                break l;
                            } else if (e === Bl) {
                                (t.tag = 14), (t = zo(null, t, u, l, a));
                                break l;
                            }
                        }
                        throw ((t = ga(u) || u), Error(v(306, t, "")));
                    }
                }
                return t;
            case 0:
                return tc(l, t, t.type, t.pendingProps, a);
            case 1:
                return (
                    (u = t.type), (e = Ha(u, t.pendingProps)), Uo(l, t, u, e, a)
                );
            case 3:
                l: {
                    if ((ol(t, t.stateNode.containerInfo), l === null))
                        throw Error(v(387));
                    u = t.pendingProps;
                    var n = t.memoizedState;
                    (e = n.element), Ni(l, t), wu(t, u, null, a);
                    var i = t.memoizedState;
                    if (
                        ((u = i.cache),
                        $t(t, Tl, u),
                        u !== n.cache && pi(t, [Tl], a, !0),
                        Ku(),
                        (u = i.element),
                        n.isDehydrated)
                    )
                        if (
                            ((n = {
                                element: u,
                                isDehydrated: !1,
                                cache: i.cache,
                            }),
                            (t.updateQueue.baseState = n),
                            (t.memoizedState = n),
                            t.flags & 256)
                        ) {
                            t = Ro(l, t, u, a);
                            break l;
                        } else if (u !== e) {
                            (e = st(Error(v(424)), t)),
                                Gu(e),
                                (t = Ro(l, t, u, a));
                            break l;
                        } else {
                            switch (
                                ((l = t.stateNode.containerInfo), l.nodeType)
                            ) {
                                case 9:
                                    l = l.body;
                                    break;
                                default:
                                    l =
                                        l.nodeName === "HTML"
                                            ? l.ownerDocument.body
                                            : l;
                            }
                            for (
                                hl = St(l.firstChild),
                                    Zl = t,
                                    F = !0,
                                    Oa = null,
                                    At = !0,
                                    a = ro(t, null, u, a),
                                    t.child = a;
                                a;

                            )
                                (a.flags = (a.flags & -3) | 4096),
                                    (a = a.sibling);
                        }
                    else {
                        if ((ju(), u === e)) {
                            t = xt(l, t, a);
                            break l;
                        }
                        Nl(l, t, u, a);
                    }
                    t = t.child;
                }
                return t;
            case 26:
                return (
                    sn(l, t),
                    l === null
                        ? (a = Gr(t.type, null, t.pendingProps, null))
                            ? (t.memoizedState = a)
                            : F ||
                              ((a = t.type),
                              (l = t.pendingProps),
                              (u = zn(X.current).createElement(a)),
                              (u[Gl] = t),
                              (u[Kl] = l),
                              ql(u, a, l),
                              El(u),
                              (t.stateNode = u))
                        : (t.memoizedState = Gr(
                              t.type,
                              l.memoizedProps,
                              t.pendingProps,
                              l.memoizedState
                          )),
                    null
                );
            case 27:
                return (
                    jn(t),
                    l === null &&
                        F &&
                        ((u = t.stateNode =
                            Yr(t.type, t.pendingProps, X.current)),
                        (Zl = t),
                        (At = !0),
                        (e = hl),
                        oa(t.type)
                            ? ((Zc = e), (hl = St(u.firstChild)))
                            : (hl = e)),
                    Nl(l, t, t.pendingProps.children, a),
                    sn(l, t),
                    l === null && (t.flags |= 4194304),
                    t.child
                );
            case 5:
                return (
                    l === null &&
                        F &&
                        ((e = u = hl) &&
                            ((u = o0(u, t.type, t.pendingProps, At)),
                            u !== null
                                ? ((t.stateNode = u),
                                  (Zl = t),
                                  (hl = St(u.firstChild)),
                                  (At = !1),
                                  (e = !0))
                                : (e = !1)),
                        e || Ma(t)),
                    jn(t),
                    (e = t.type),
                    (n = t.pendingProps),
                    (i = l !== null ? l.memoizedProps : null),
                    (u = n.children),
                    Gc(e, n)
                        ? (u = null)
                        : i !== null && Gc(e, i) && (t.flags |= 32),
                    t.memoizedState !== null &&
                        ((e = ji(l, t, Dh, null, null, a)),
                        (ye._currentValue = e)),
                    sn(l, t),
                    Nl(l, t, u, a),
                    t.child
                );
            case 6:
                return (
                    l === null &&
                        F &&
                        ((l = a = hl) &&
                            ((a = r0(a, t.pendingProps, At)),
                            a !== null
                                ? ((t.stateNode = a),
                                  (Zl = t),
                                  (hl = null),
                                  (l = !0))
                                : (l = !1)),
                        l || Ma(t)),
                    null
                );
            case 13:
                return No(l, t, a);
            case 4:
                return (
                    ol(t, t.stateNode.containerInfo),
                    (u = t.pendingProps),
                    l === null ? (t.child = fu(t, null, u, a)) : Nl(l, t, u, a),
                    t.child
                );
            case 11:
                return Eo(l, t, t.type, t.pendingProps, a);
            case 7:
                return Nl(l, t, t.pendingProps, a), t.child;
            case 8:
                return Nl(l, t, t.pendingProps.children, a), t.child;
            case 12:
                return Nl(l, t, t.pendingProps.children, a), t.child;
            case 10:
                return (
                    (u = t.pendingProps),
                    $t(t, t.type, u.value),
                    Nl(l, t, u.children, a),
                    t.child
                );
            case 9:
                return (
                    (e = t.type._context),
                    (u = t.pendingProps.children),
                    Ua(t),
                    (e = Xl(e)),
                    (u = u(e)),
                    (t.flags |= 1),
                    Nl(l, t, u, a),
                    t.child
                );
            case 14:
                return zo(l, t, t.type, t.pendingProps, a);
            case 15:
                return po(l, t, t.type, t.pendingProps, a);
            case 19:
                return qo(l, t, a);
            case 31:
                return (
                    (u = t.pendingProps),
                    (a = t.mode),
                    (u = { mode: u.mode, children: u.children }),
                    l === null
                        ? ((a = on(u, a)),
                          (a.ref = t.ref),
                          (t.child = a),
                          (a.return = t),
                          (t = a))
                        : ((a = Ut(l.child, u)),
                          (a.ref = t.ref),
                          (t.child = a),
                          (a.return = t),
                          (t = a)),
                    t
                );
            case 22:
                return Oo(l, t, a);
            case 24:
                return (
                    Ua(t),
                    (u = Xl(Tl)),
                    l === null
                        ? ((e = Di()),
                          e === null &&
                              ((e = fl),
                              (n = Oi()),
                              (e.pooledCache = n),
                              n.refCount++,
                              n !== null && (e.pooledCacheLanes |= a),
                              (e = n)),
                          (t.memoizedState = { parent: u, cache: e }),
                          Ri(t),
                          $t(t, Tl, e))
                        : ((l.lanes & a) !== 0 &&
                              (Ni(l, t), wu(t, null, null, a), Ku()),
                          (e = l.memoizedState),
                          (n = t.memoizedState),
                          e.parent !== u
                              ? ((e = { parent: u, cache: u }),
                                (t.memoizedState = e),
                                t.lanes === 0 &&
                                    (t.memoizedState = t.updateQueue.baseState =
                                        e),
                                $t(t, Tl, u))
                              : ((u = n.cache),
                                $t(t, Tl, u),
                                u !== e.cache && pi(t, [Tl], a, !0))),
                    Nl(l, t, t.pendingProps.children, a),
                    t.child
                );
            case 29:
                throw t.pendingProps;
        }
        throw Error(v(156, t.tag));
    }
    function jt(l) {
        l.flags |= 4;
    }
    function Yo(l, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            l.flags &= -16777217;
        else if (((l.flags |= 16777216), !Vr(t))) {
            if (
                ((t = ht.current),
                t !== null &&
                    ((k & 4194048) === k
                        ? Tt !== null
                        : ((k & 62914560) !== k && (k & 536870912) === 0) ||
                          t !== Tt))
            )
                throw ((Vu = Ui), gs);
            l.flags |= 8192;
        }
    }
    function rn(l, t) {
        t !== null && (l.flags |= 4),
            l.flags & 16384 &&
                ((t = l.tag !== 22 ? df() : 536870912),
                (l.lanes |= t),
                (du |= t));
    }
    function Pu(l, t) {
        if (!F)
            switch (l.tailMode) {
                case "hidden":
                    t = l.tail;
                    for (var a = null; t !== null; )
                        t.alternate !== null && (a = t), (t = t.sibling);
                    a === null ? (l.tail = null) : (a.sibling = null);
                    break;
                case "collapsed":
                    a = l.tail;
                    for (var u = null; a !== null; )
                        a.alternate !== null && (u = a), (a = a.sibling);
                    u === null
                        ? t || l.tail === null
                            ? (l.tail = null)
                            : (l.tail.sibling = null)
                        : (u.sibling = null);
            }
    }
    function dl(l) {
        var t = l.alternate !== null && l.alternate.child === l.child,
            a = 0,
            u = 0;
        if (t)
            for (var e = l.child; e !== null; )
                (a |= e.lanes | e.childLanes),
                    (u |= e.subtreeFlags & 65011712),
                    (u |= e.flags & 65011712),
                    (e.return = l),
                    (e = e.sibling);
        else
            for (e = l.child; e !== null; )
                (a |= e.lanes | e.childLanes),
                    (u |= e.subtreeFlags),
                    (u |= e.flags),
                    (e.return = l),
                    (e = e.sibling);
        return (l.subtreeFlags |= u), (l.childLanes = a), t;
    }
    function jh(l, t, a) {
        var u = t.pendingProps;
        switch ((Ti(t), t.tag)) {
            case 31:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return dl(t), null;
            case 1:
                return dl(t), null;
            case 3:
                return (
                    (a = t.stateNode),
                    (u = null),
                    l !== null && (u = l.memoizedState.cache),
                    t.memoizedState.cache !== u && (t.flags |= 2048),
                    qt(Tl),
                    Kt(),
                    a.pendingContext &&
                        ((a.context = a.pendingContext),
                        (a.pendingContext = null)),
                    (l === null || l.child === null) &&
                        (xu(t)
                            ? jt(t)
                            : l === null ||
                              (l.memoizedState.isDehydrated &&
                                  (t.flags & 256) === 0) ||
                              ((t.flags |= 1024), ds())),
                    dl(t),
                    null
                );
            case 26:
                return (
                    (a = t.memoizedState),
                    l === null
                        ? (jt(t),
                          a !== null
                              ? (dl(t), Yo(t, a))
                              : (dl(t), (t.flags &= -16777217)))
                        : a
                        ? a !== l.memoizedState
                            ? (jt(t), dl(t), Yo(t, a))
                            : (dl(t), (t.flags &= -16777217))
                        : (l.memoizedProps !== u && jt(t),
                          dl(t),
                          (t.flags &= -16777217)),
                    null
                );
            case 27:
                Te(t), (a = X.current);
                var e = t.type;
                if (l !== null && t.stateNode != null)
                    l.memoizedProps !== u && jt(t);
                else {
                    if (!u) {
                        if (t.stateNode === null) throw Error(v(166));
                        return dl(t), null;
                    }
                    (l = N.current),
                        xu(t)
                            ? os(t)
                            : ((l = Yr(e, u, a)), (t.stateNode = l), jt(t));
                }
                return dl(t), null;
            case 5:
                if ((Te(t), (a = t.type), l !== null && t.stateNode != null))
                    l.memoizedProps !== u && jt(t);
                else {
                    if (!u) {
                        if (t.stateNode === null) throw Error(v(166));
                        return dl(t), null;
                    }
                    if (((l = N.current), xu(t))) os(t);
                    else {
                        switch (((e = zn(X.current)), l)) {
                            case 1:
                                l = e.createElementNS(
                                    "http://www.w3.org/2000/svg",
                                    a
                                );
                                break;
                            case 2:
                                l = e.createElementNS(
                                    "http://www.w3.org/1998/Math/MathML",
                                    a
                                );
                                break;
                            default:
                                switch (a) {
                                    case "svg":
                                        l = e.createElementNS(
                                            "http://www.w3.org/2000/svg",
                                            a
                                        );
                                        break;
                                    case "math":
                                        l = e.createElementNS(
                                            "http://www.w3.org/1998/Math/MathML",
                                            a
                                        );
                                        break;
                                    case "script":
                                        (l = e.createElement("div")),
                                            (l.innerHTML = "<script></script>"),
                                            (l = l.removeChild(l.firstChild));
                                        break;
                                    case "select":
                                        (l =
                                            typeof u.is == "string"
                                                ? e.createElement("select", {
                                                      is: u.is,
                                                  })
                                                : e.createElement("select")),
                                            u.multiple
                                                ? (l.multiple = !0)
                                                : u.size && (l.size = u.size);
                                        break;
                                    default:
                                        l =
                                            typeof u.is == "string"
                                                ? e.createElement(a, {
                                                      is: u.is,
                                                  })
                                                : e.createElement(a);
                                }
                        }
                        (l[Gl] = t), (l[Kl] = u);
                        l: for (e = t.child; e !== null; ) {
                            if (e.tag === 5 || e.tag === 6)
                                l.appendChild(e.stateNode);
                            else if (
                                e.tag !== 4 &&
                                e.tag !== 27 &&
                                e.child !== null
                            ) {
                                (e.child.return = e), (e = e.child);
                                continue;
                            }
                            if (e === t) break l;
                            for (; e.sibling === null; ) {
                                if (e.return === null || e.return === t)
                                    break l;
                                e = e.return;
                            }
                            (e.sibling.return = e.return), (e = e.sibling);
                        }
                        t.stateNode = l;
                        l: switch ((ql(l, a, u), a)) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l = !!u.autoFocus;
                                break l;
                            case "img":
                                l = !0;
                                break l;
                            default:
                                l = !1;
                        }
                        l && jt(t);
                    }
                }
                return dl(t), (t.flags &= -16777217), null;
            case 6:
                if (l && t.stateNode != null) l.memoizedProps !== u && jt(t);
                else {
                    if (typeof u != "string" && t.stateNode === null)
                        throw Error(v(166));
                    if (((l = X.current), xu(t))) {
                        if (
                            ((l = t.stateNode),
                            (a = t.memoizedProps),
                            (u = null),
                            (e = Zl),
                            e !== null)
                        )
                            switch (e.tag) {
                                case 27:
                                case 5:
                                    u = e.memoizedProps;
                            }
                        (l[Gl] = t),
                            (l = !!(
                                l.nodeValue === a ||
                                (u !== null &&
                                    u.suppressHydrationWarning === !0) ||
                                Dr(l.nodeValue, a)
                            )),
                            l || Ma(t);
                    } else
                        (l = zn(l).createTextNode(u)),
                            (l[Gl] = t),
                            (t.stateNode = l);
                }
                return dl(t), null;
            case 13:
                if (
                    ((u = t.memoizedState),
                    l === null ||
                        (l.memoizedState !== null &&
                            l.memoizedState.dehydrated !== null))
                ) {
                    if (((e = xu(t)), u !== null && u.dehydrated !== null)) {
                        if (l === null) {
                            if (!e) throw Error(v(318));
                            if (
                                ((e = t.memoizedState),
                                (e = e !== null ? e.dehydrated : null),
                                !e)
                            )
                                throw Error(v(317));
                            e[Gl] = t;
                        } else
                            ju(),
                                (t.flags & 128) === 0 &&
                                    (t.memoizedState = null),
                                (t.flags |= 4);
                        dl(t), (e = !1);
                    } else
                        (e = ds()),
                            l !== null &&
                                l.memoizedState !== null &&
                                (l.memoizedState.hydrationErrors = e),
                            (e = !0);
                    if (!e) return t.flags & 256 ? (Yt(t), t) : (Yt(t), null);
                }
                if ((Yt(t), (t.flags & 128) !== 0)) return (t.lanes = a), t;
                if (
                    ((a = u !== null),
                    (l = l !== null && l.memoizedState !== null),
                    a)
                ) {
                    (u = t.child),
                        (e = null),
                        u.alternate !== null &&
                            u.alternate.memoizedState !== null &&
                            u.alternate.memoizedState.cachePool !== null &&
                            (e = u.alternate.memoizedState.cachePool.pool);
                    var n = null;
                    u.memoizedState !== null &&
                        u.memoizedState.cachePool !== null &&
                        (n = u.memoizedState.cachePool.pool),
                        n !== e && (u.flags |= 2048);
                }
                return (
                    a !== l && a && (t.child.flags |= 8192),
                    rn(t, t.updateQueue),
                    dl(t),
                    null
                );
            case 4:
                return (
                    Kt(),
                    l === null && qc(t.stateNode.containerInfo),
                    dl(t),
                    null
                );
            case 10:
                return qt(t.type), dl(t), null;
            case 19:
                if ((O(_l), (e = t.memoizedState), e === null))
                    return dl(t), null;
                if (
                    ((u = (t.flags & 128) !== 0), (n = e.rendering), n === null)
                )
                    if (u) Pu(e, !1);
                    else {
                        if (yl !== 0 || (l !== null && (l.flags & 128) !== 0))
                            for (l = t.child; l !== null; ) {
                                if (((n = nn(l)), n !== null)) {
                                    for (
                                        t.flags |= 128,
                                            Pu(e, !1),
                                            l = n.updateQueue,
                                            t.updateQueue = l,
                                            rn(t, l),
                                            t.subtreeFlags = 0,
                                            l = a,
                                            a = t.child;
                                        a !== null;

                                    )
                                        fs(a, l), (a = a.sibling);
                                    return z(_l, (_l.current & 1) | 2), t.child;
                                }
                                l = l.sibling;
                            }
                        e.tail !== null &&
                            bt() > yn &&
                            ((t.flags |= 128),
                            (u = !0),
                            Pu(e, !1),
                            (t.lanes = 4194304));
                    }
                else {
                    if (!u)
                        if (((l = nn(n)), l !== null)) {
                            if (
                                ((t.flags |= 128),
                                (u = !0),
                                (l = l.updateQueue),
                                (t.updateQueue = l),
                                rn(t, l),
                                Pu(e, !0),
                                e.tail === null &&
                                    e.tailMode === "hidden" &&
                                    !n.alternate &&
                                    !F)
                            )
                                return dl(t), null;
                        } else
                            2 * bt() - e.renderingStartTime > yn &&
                                a !== 536870912 &&
                                ((t.flags |= 128),
                                (u = !0),
                                Pu(e, !1),
                                (t.lanes = 4194304));
                    e.isBackwards
                        ? ((n.sibling = t.child), (t.child = n))
                        : ((l = e.last),
                          l !== null ? (l.sibling = n) : (t.child = n),
                          (e.last = n));
                }
                return e.tail !== null
                    ? ((t = e.tail),
                      (e.rendering = t),
                      (e.tail = t.sibling),
                      (e.renderingStartTime = bt()),
                      (t.sibling = null),
                      (l = _l.current),
                      z(_l, u ? (l & 1) | 2 : l & 1),
                      t)
                    : (dl(t), null);
            case 22:
            case 23:
                return (
                    Yt(t),
                    Yi(),
                    (u = t.memoizedState !== null),
                    l !== null
                        ? (l.memoizedState !== null) !== u && (t.flags |= 8192)
                        : u && (t.flags |= 8192),
                    u
                        ? (a & 536870912) !== 0 &&
                          (t.flags & 128) === 0 &&
                          (dl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                        : dl(t),
                    (a = t.updateQueue),
                    a !== null && rn(t, a.retryQueue),
                    (a = null),
                    l !== null &&
                        l.memoizedState !== null &&
                        l.memoizedState.cachePool !== null &&
                        (a = l.memoizedState.cachePool.pool),
                    (u = null),
                    t.memoizedState !== null &&
                        t.memoizedState.cachePool !== null &&
                        (u = t.memoizedState.cachePool.pool),
                    u !== a && (t.flags |= 2048),
                    l !== null && O(Ra),
                    null
                );
            case 24:
                return (
                    (a = null),
                    l !== null && (a = l.memoizedState.cache),
                    t.memoizedState.cache !== a && (t.flags |= 2048),
                    qt(Tl),
                    dl(t),
                    null
                );
            case 25:
                return null;
            case 30:
                return null;
        }
        throw Error(v(156, t.tag));
    }
    function Gh(l, t) {
        switch ((Ti(t), t.tag)) {
            case 1:
                return (
                    (l = t.flags),
                    l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
                );
            case 3:
                return (
                    qt(Tl),
                    Kt(),
                    (l = t.flags),
                    (l & 65536) !== 0 && (l & 128) === 0
                        ? ((t.flags = (l & -65537) | 128), t)
                        : null
                );
            case 26:
            case 27:
            case 5:
                return Te(t), null;
            case 13:
                if (
                    (Yt(t),
                    (l = t.memoizedState),
                    l !== null && l.dehydrated !== null)
                ) {
                    if (t.alternate === null) throw Error(v(340));
                    ju();
                }
                return (
                    (l = t.flags),
                    l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
                );
            case 19:
                return O(_l), null;
            case 4:
                return Kt(), null;
            case 10:
                return qt(t.type), null;
            case 22:
            case 23:
                return (
                    Yt(t),
                    Yi(),
                    l !== null && O(Ra),
                    (l = t.flags),
                    l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
                );
            case 24:
                return qt(Tl), null;
            case 25:
                return null;
            default:
                return null;
        }
    }
    function xo(l, t) {
        switch ((Ti(t), t.tag)) {
            case 3:
                qt(Tl), Kt();
                break;
            case 26:
            case 27:
            case 5:
                Te(t);
                break;
            case 4:
                Kt();
                break;
            case 13:
                Yt(t);
                break;
            case 19:
                O(_l);
                break;
            case 10:
                qt(t.type);
                break;
            case 22:
            case 23:
                Yt(t), Yi(), l !== null && O(Ra);
                break;
            case 24:
                qt(Tl);
        }
    }
    function le(l, t) {
        try {
            var a = t.updateQueue,
                u = a !== null ? a.lastEffect : null;
            if (u !== null) {
                var e = u.next;
                a = e;
                do {
                    if ((a.tag & l) === l) {
                        u = void 0;
                        var n = a.create,
                            i = a.inst;
                        (u = n()), (i.destroy = u);
                    }
                    a = a.next;
                } while (a !== e);
            }
        } catch (c) {
            cl(t, t.return, c);
        }
    }
    function aa(l, t, a) {
        try {
            var u = t.updateQueue,
                e = u !== null ? u.lastEffect : null;
            if (e !== null) {
                var n = e.next;
                u = n;
                do {
                    if ((u.tag & l) === l) {
                        var i = u.inst,
                            c = i.destroy;
                        if (c !== void 0) {
                            (i.destroy = void 0), (e = t);
                            var f = a,
                                h = c;
                            try {
                                h();
                            } catch (g) {
                                cl(e, f, g);
                            }
                        }
                    }
                    u = u.next;
                } while (u !== n);
            }
        } catch (g) {
            cl(t, t.return, g);
        }
    }
    function jo(l) {
        var t = l.updateQueue;
        if (t !== null) {
            var a = l.stateNode;
            try {
                Es(t, a);
            } catch (u) {
                cl(l, l.return, u);
            }
        }
    }
    function Go(l, t, a) {
        (a.props = Ha(l.type, l.memoizedProps)), (a.state = l.memoizedState);
        try {
            a.componentWillUnmount();
        } catch (u) {
            cl(l, t, u);
        }
    }
    function te(l, t) {
        try {
            var a = l.ref;
            if (a !== null) {
                switch (l.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var u = l.stateNode;
                        break;
                    case 30:
                        u = l.stateNode;
                        break;
                    default:
                        u = l.stateNode;
                }
                typeof a == "function"
                    ? (l.refCleanup = a(u))
                    : (a.current = u);
            }
        } catch (e) {
            cl(l, t, e);
        }
    }
    function _t(l, t) {
        var a = l.ref,
            u = l.refCleanup;
        if (a !== null)
            if (typeof u == "function")
                try {
                    u();
                } catch (e) {
                    cl(l, t, e);
                } finally {
                    (l.refCleanup = null),
                        (l = l.alternate),
                        l != null && (l.refCleanup = null);
                }
            else if (typeof a == "function")
                try {
                    a(null);
                } catch (e) {
                    cl(l, t, e);
                }
            else a.current = null;
    }
    function Xo(l) {
        var t = l.type,
            a = l.memoizedProps,
            u = l.stateNode;
        try {
            l: switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    a.autoFocus && u.focus();
                    break l;
                case "img":
                    a.src ? (u.src = a.src) : a.srcSet && (u.srcset = a.srcSet);
            }
        } catch (e) {
            cl(l, l.return, e);
        }
    }
    function sc(l, t, a) {
        try {
            var u = l.stateNode;
            n0(u, l.type, a, t), (u[Kl] = t);
        } catch (e) {
            cl(l, l.return, e);
        }
    }
    function Qo(l) {
        return (
            l.tag === 5 ||
            l.tag === 3 ||
            l.tag === 26 ||
            (l.tag === 27 && oa(l.type)) ||
            l.tag === 4
        );
    }
    function oc(l) {
        l: for (;;) {
            for (; l.sibling === null; ) {
                if (l.return === null || Qo(l.return)) return null;
                l = l.return;
            }
            for (
                l.sibling.return = l.return, l = l.sibling;
                l.tag !== 5 && l.tag !== 6 && l.tag !== 18;

            ) {
                if (
                    (l.tag === 27 && oa(l.type)) ||
                    l.flags & 2 ||
                    l.child === null ||
                    l.tag === 4
                )
                    continue l;
                (l.child.return = l), (l = l.child);
            }
            if (!(l.flags & 2)) return l.stateNode;
        }
    }
    function rc(l, t, a) {
        var u = l.tag;
        if (u === 5 || u === 6)
            (l = l.stateNode),
                t
                    ? (a.nodeType === 9
                          ? a.body
                          : a.nodeName === "HTML"
                          ? a.ownerDocument.body
                          : a
                      ).insertBefore(l, t)
                    : ((t =
                          a.nodeType === 9
                              ? a.body
                              : a.nodeName === "HTML"
                              ? a.ownerDocument.body
                              : a),
                      t.appendChild(l),
                      (a = a._reactRootContainer),
                      a != null || t.onclick !== null || (t.onclick = En));
        else if (
            u !== 4 &&
            (u === 27 && oa(l.type) && ((a = l.stateNode), (t = null)),
            (l = l.child),
            l !== null)
        )
            for (rc(l, t, a), l = l.sibling; l !== null; )
                rc(l, t, a), (l = l.sibling);
    }
    function dn(l, t, a) {
        var u = l.tag;
        if (u === 5 || u === 6)
            (l = l.stateNode), t ? a.insertBefore(l, t) : a.appendChild(l);
        else if (
            u !== 4 &&
            (u === 27 && oa(l.type) && (a = l.stateNode),
            (l = l.child),
            l !== null)
        )
            for (dn(l, t, a), l = l.sibling; l !== null; )
                dn(l, t, a), (l = l.sibling);
    }
    function Co(l) {
        var t = l.stateNode,
            a = l.memoizedProps;
        try {
            for (var u = l.type, e = t.attributes; e.length; )
                t.removeAttributeNode(e[0]);
            ql(t, u, a), (t[Gl] = l), (t[Kl] = a);
        } catch (n) {
            cl(l, l.return, n);
        }
    }
    var Gt = !1,
        gl = !1,
        dc = !1,
        Zo = typeof WeakSet == "function" ? WeakSet : Set,
        pl = null;
    function Xh(l, t) {
        if (((l = l.containerInfo), (xc = Rn), (l = If(l)), oi(l))) {
            if ("selectionStart" in l)
                var a = { start: l.selectionStart, end: l.selectionEnd };
            else
                l: {
                    a = ((a = l.ownerDocument) && a.defaultView) || window;
                    var u = a.getSelection && a.getSelection();
                    if (u && u.rangeCount !== 0) {
                        a = u.anchorNode;
                        var e = u.anchorOffset,
                            n = u.focusNode;
                        u = u.focusOffset;
                        try {
                            a.nodeType, n.nodeType;
                        } catch {
                            a = null;
                            break l;
                        }
                        var i = 0,
                            c = -1,
                            f = -1,
                            h = 0,
                            g = 0,
                            A = l,
                            y = null;
                        t: for (;;) {
                            for (
                                var m;
                                A !== a ||
                                    (e !== 0 && A.nodeType !== 3) ||
                                    (c = i + e),
                                    A !== n ||
                                        (u !== 0 && A.nodeType !== 3) ||
                                        (f = i + u),
                                    A.nodeType === 3 &&
                                        (i += A.nodeValue.length),
                                    (m = A.firstChild) !== null;

                            )
                                (y = A), (A = m);
                            for (;;) {
                                if (A === l) break t;
                                if (
                                    (y === a && ++h === e && (c = i),
                                    y === n && ++g === u && (f = i),
                                    (m = A.nextSibling) !== null)
                                )
                                    break;
                                (A = y), (y = A.parentNode);
                            }
                            A = m;
                        }
                        a = c === -1 || f === -1 ? null : { start: c, end: f };
                    } else a = null;
                }
            a = a || { start: 0, end: 0 };
        } else a = null;
        for (
            jc = { focusedElem: l, selectionRange: a }, Rn = !1, pl = t;
            pl !== null;

        )
            if (
                ((t = pl),
                (l = t.child),
                (t.subtreeFlags & 1024) !== 0 && l !== null)
            )
                (l.return = t), (pl = l);
            else
                for (; pl !== null; ) {
                    switch (
                        ((t = pl), (n = t.alternate), (l = t.flags), t.tag)
                    ) {
                        case 0:
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((l & 1024) !== 0 && n !== null) {
                                (l = void 0),
                                    (a = t),
                                    (e = n.memoizedProps),
                                    (n = n.memoizedState),
                                    (u = a.stateNode);
                                try {
                                    var Y = Ha(
                                        a.type,
                                        e,
                                        a.elementType === a.type
                                    );
                                    (l = u.getSnapshotBeforeUpdate(Y, n)),
                                        (u.__reactInternalSnapshotBeforeUpdate =
                                            l);
                                } catch (H) {
                                    cl(a, a.return, H);
                                }
                            }
                            break;
                        case 3:
                            if ((l & 1024) !== 0) {
                                if (
                                    ((l = t.stateNode.containerInfo),
                                    (a = l.nodeType),
                                    a === 9)
                                )
                                    Qc(l);
                                else if (a === 1)
                                    switch (l.nodeName) {
                                        case "HEAD":
                                        case "HTML":
                                        case "BODY":
                                            Qc(l);
                                            break;
                                        default:
                                            l.textContent = "";
                                    }
                            }
                            break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            if ((l & 1024) !== 0) throw Error(v(163));
                    }
                    if (((l = t.sibling), l !== null)) {
                        (l.return = t.return), (pl = l);
                        break;
                    }
                    pl = t.return;
                }
    }
    function Vo(l, t, a) {
        var u = a.flags;
        switch (a.tag) {
            case 0:
            case 11:
            case 15:
                ua(l, a), u & 4 && le(5, a);
                break;
            case 1:
                if ((ua(l, a), u & 4))
                    if (((l = a.stateNode), t === null))
                        try {
                            l.componentDidMount();
                        } catch (i) {
                            cl(a, a.return, i);
                        }
                    else {
                        var e = Ha(a.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            l.componentDidUpdate(
                                e,
                                t,
                                l.__reactInternalSnapshotBeforeUpdate
                            );
                        } catch (i) {
                            cl(a, a.return, i);
                        }
                    }
                u & 64 && jo(a), u & 512 && te(a, a.return);
                break;
            case 3:
                if ((ua(l, a), u & 64 && ((l = a.updateQueue), l !== null))) {
                    if (((t = null), a.child !== null))
                        switch (a.child.tag) {
                            case 27:
                            case 5:
                                t = a.child.stateNode;
                                break;
                            case 1:
                                t = a.child.stateNode;
                        }
                    try {
                        Es(l, t);
                    } catch (i) {
                        cl(a, a.return, i);
                    }
                }
                break;
            case 27:
                t === null && u & 4 && Co(a);
            case 26:
            case 5:
                ua(l, a),
                    t === null && u & 4 && Xo(a),
                    u & 512 && te(a, a.return);
                break;
            case 12:
                ua(l, a);
                break;
            case 13:
                ua(l, a),
                    u & 4 && wo(l, a),
                    u & 64 &&
                        ((l = a.memoizedState),
                        l !== null &&
                            ((l = l.dehydrated),
                            l !== null && ((a = kh.bind(null, a)), d0(l, a))));
                break;
            case 22:
                if (((u = a.memoizedState !== null || Gt), !u)) {
                    (t = (t !== null && t.memoizedState !== null) || gl),
                        (e = Gt);
                    var n = gl;
                    (Gt = u),
                        (gl = t) && !n
                            ? ea(l, a, (a.subtreeFlags & 8772) !== 0)
                            : ua(l, a),
                        (Gt = e),
                        (gl = n);
                }
                break;
            case 30:
                break;
            default:
                ua(l, a);
        }
    }
    function Lo(l) {
        var t = l.alternate;
        t !== null && ((l.alternate = null), Lo(t)),
            (l.child = null),
            (l.deletions = null),
            (l.sibling = null),
            l.tag === 5 && ((t = l.stateNode), t !== null && Kn(t)),
            (l.stateNode = null),
            (l.return = null),
            (l.dependencies = null),
            (l.memoizedProps = null),
            (l.memoizedState = null),
            (l.pendingProps = null),
            (l.stateNode = null),
            (l.updateQueue = null);
    }
    var rl = null,
        kl = !1;
    function Xt(l, t, a) {
        for (a = a.child; a !== null; ) Ko(l, t, a), (a = a.sibling);
    }
    function Ko(l, t, a) {
        if (Il && typeof Il.onCommitFiberUnmount == "function")
            try {
                Il.onCommitFiberUnmount(_u, a);
            } catch {}
        switch (a.tag) {
            case 26:
                gl || _t(a, t),
                    Xt(l, t, a),
                    a.memoizedState
                        ? a.memoizedState.count--
                        : a.stateNode &&
                          ((a = a.stateNode), a.parentNode.removeChild(a));
                break;
            case 27:
                gl || _t(a, t);
                var u = rl,
                    e = kl;
                oa(a.type) && ((rl = a.stateNode), (kl = !1)),
                    Xt(l, t, a),
                    oe(a.stateNode),
                    (rl = u),
                    (kl = e);
                break;
            case 5:
                gl || _t(a, t);
            case 6:
                if (
                    ((u = rl),
                    (e = kl),
                    (rl = null),
                    Xt(l, t, a),
                    (rl = u),
                    (kl = e),
                    rl !== null)
                )
                    if (kl)
                        try {
                            (rl.nodeType === 9
                                ? rl.body
                                : rl.nodeName === "HTML"
                                ? rl.ownerDocument.body
                                : rl
                            ).removeChild(a.stateNode);
                        } catch (n) {
                            cl(a, t, n);
                        }
                    else
                        try {
                            rl.removeChild(a.stateNode);
                        } catch (n) {
                            cl(a, t, n);
                        }
                break;
            case 18:
                rl !== null &&
                    (kl
                        ? ((l = rl),
                          qr(
                              l.nodeType === 9
                                  ? l.body
                                  : l.nodeName === "HTML"
                                  ? l.ownerDocument.body
                                  : l,
                              a.stateNode
                          ),
                          Se(l))
                        : qr(rl, a.stateNode));
                break;
            case 4:
                (u = rl),
                    (e = kl),
                    (rl = a.stateNode.containerInfo),
                    (kl = !0),
                    Xt(l, t, a),
                    (rl = u),
                    (kl = e);
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                gl || aa(2, a, t), gl || aa(4, a, t), Xt(l, t, a);
                break;
            case 1:
                gl ||
                    (_t(a, t),
                    (u = a.stateNode),
                    typeof u.componentWillUnmount == "function" && Go(a, t, u)),
                    Xt(l, t, a);
                break;
            case 21:
                Xt(l, t, a);
                break;
            case 22:
                (gl = (u = gl) || a.memoizedState !== null),
                    Xt(l, t, a),
                    (gl = u);
                break;
            default:
                Xt(l, t, a);
        }
    }
    function wo(l, t) {
        if (
            t.memoizedState === null &&
            ((l = t.alternate),
            l !== null &&
                ((l = l.memoizedState),
                l !== null && ((l = l.dehydrated), l !== null)))
        )
            try {
                Se(l);
            } catch (a) {
                cl(t, t.return, a);
            }
    }
    function Qh(l) {
        switch (l.tag) {
            case 13:
            case 19:
                var t = l.stateNode;
                return t === null && (t = l.stateNode = new Zo()), t;
            case 22:
                return (
                    (l = l.stateNode),
                    (t = l._retryCache),
                    t === null && (t = l._retryCache = new Zo()),
                    t
                );
            default:
                throw Error(v(435, l.tag));
        }
    }
    function hc(l, t) {
        var a = Qh(l);
        t.forEach(function (u) {
            var e = $h.bind(null, l, u);
            a.has(u) || (a.add(u), u.then(e, e));
        });
    }
    function at(l, t) {
        var a = t.deletions;
        if (a !== null)
            for (var u = 0; u < a.length; u++) {
                var e = a[u],
                    n = l,
                    i = t,
                    c = i;
                l: for (; c !== null; ) {
                    switch (c.tag) {
                        case 27:
                            if (oa(c.type)) {
                                (rl = c.stateNode), (kl = !1);
                                break l;
                            }
                            break;
                        case 5:
                            (rl = c.stateNode), (kl = !1);
                            break l;
                        case 3:
                        case 4:
                            (rl = c.stateNode.containerInfo), (kl = !0);
                            break l;
                    }
                    c = c.return;
                }
                if (rl === null) throw Error(v(160));
                Ko(n, i, e),
                    (rl = null),
                    (kl = !1),
                    (n = e.alternate),
                    n !== null && (n.return = null),
                    (e.return = null);
            }
        if (t.subtreeFlags & 13878)
            for (t = t.child; t !== null; ) Jo(t, l), (t = t.sibling);
    }
    var gt = null;
    function Jo(l, t) {
        var a = l.alternate,
            u = l.flags;
        switch (l.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                at(t, l),
                    ut(l),
                    u & 4 && (aa(3, l, l.return), le(3, l), aa(5, l, l.return));
                break;
            case 1:
                at(t, l),
                    ut(l),
                    u & 512 && (gl || a === null || _t(a, a.return)),
                    u & 64 &&
                        Gt &&
                        ((l = l.updateQueue),
                        l !== null &&
                            ((u = l.callbacks),
                            u !== null &&
                                ((a = l.shared.hiddenCallbacks),
                                (l.shared.hiddenCallbacks =
                                    a === null ? u : a.concat(u)))));
                break;
            case 26:
                var e = gt;
                if (
                    (at(t, l),
                    ut(l),
                    u & 512 && (gl || a === null || _t(a, a.return)),
                    u & 4)
                ) {
                    var n = a !== null ? a.memoizedState : null;
                    if (((u = l.memoizedState), a === null))
                        if (u === null)
                            if (l.stateNode === null) {
                                l: {
                                    (u = l.type),
                                        (a = l.memoizedProps),
                                        (e = e.ownerDocument || e);
                                    t: switch (u) {
                                        case "title":
                                            (n =
                                                e.getElementsByTagName(
                                                    "title"
                                                )[0]),
                                                (!n ||
                                                    n[pu] ||
                                                    n[Gl] ||
                                                    n.namespaceURI ===
                                                        "http://www.w3.org/2000/svg" ||
                                                    n.hasAttribute(
                                                        "itemprop"
                                                    )) &&
                                                    ((n = e.createElement(u)),
                                                    e.head.insertBefore(
                                                        n,
                                                        e.querySelector(
                                                            "head > title"
                                                        )
                                                    )),
                                                ql(n, u, a),
                                                (n[Gl] = l),
                                                El(n),
                                                (u = n);
                                            break l;
                                        case "link":
                                            var i = Cr("link", "href", e).get(
                                                u + (a.href || "")
                                            );
                                            if (i) {
                                                for (
                                                    var c = 0;
                                                    c < i.length;
                                                    c++
                                                )
                                                    if (
                                                        ((n = i[c]),
                                                        n.getAttribute(
                                                            "href"
                                                        ) ===
                                                            (a.href == null ||
                                                            a.href === ""
                                                                ? null
                                                                : a.href) &&
                                                            n.getAttribute(
                                                                "rel"
                                                            ) ===
                                                                (a.rel == null
                                                                    ? null
                                                                    : a.rel) &&
                                                            n.getAttribute(
                                                                "title"
                                                            ) ===
                                                                (a.title == null
                                                                    ? null
                                                                    : a.title) &&
                                                            n.getAttribute(
                                                                "crossorigin"
                                                            ) ===
                                                                (a.crossOrigin ==
                                                                null
                                                                    ? null
                                                                    : a.crossOrigin))
                                                    ) {
                                                        i.splice(c, 1);
                                                        break t;
                                                    }
                                            }
                                            (n = e.createElement(u)),
                                                ql(n, u, a),
                                                e.head.appendChild(n);
                                            break;
                                        case "meta":
                                            if (
                                                (i = Cr(
                                                    "meta",
                                                    "content",
                                                    e
                                                ).get(u + (a.content || "")))
                                            ) {
                                                for (c = 0; c < i.length; c++)
                                                    if (
                                                        ((n = i[c]),
                                                        n.getAttribute(
                                                            "content"
                                                        ) ===
                                                            (a.content == null
                                                                ? null
                                                                : "" +
                                                                  a.content) &&
                                                            n.getAttribute(
                                                                "name"
                                                            ) ===
                                                                (a.name == null
                                                                    ? null
                                                                    : a.name) &&
                                                            n.getAttribute(
                                                                "property"
                                                            ) ===
                                                                (a.property ==
                                                                null
                                                                    ? null
                                                                    : a.property) &&
                                                            n.getAttribute(
                                                                "http-equiv"
                                                            ) ===
                                                                (a.httpEquiv ==
                                                                null
                                                                    ? null
                                                                    : a.httpEquiv) &&
                                                            n.getAttribute(
                                                                "charset"
                                                            ) ===
                                                                (a.charSet ==
                                                                null
                                                                    ? null
                                                                    : a.charSet))
                                                    ) {
                                                        i.splice(c, 1);
                                                        break t;
                                                    }
                                            }
                                            (n = e.createElement(u)),
                                                ql(n, u, a),
                                                e.head.appendChild(n);
                                            break;
                                        default:
                                            throw Error(v(468, u));
                                    }
                                    (n[Gl] = l), El(n), (u = n);
                                }
                                l.stateNode = u;
                            } else Zr(e, l.type, l.stateNode);
                        else l.stateNode = Qr(e, u, l.memoizedProps);
                    else
                        n !== u
                            ? (n === null
                                  ? a.stateNode !== null &&
                                    ((a = a.stateNode),
                                    a.parentNode.removeChild(a))
                                  : n.count--,
                              u === null
                                  ? Zr(e, l.type, l.stateNode)
                                  : Qr(e, u, l.memoizedProps))
                            : u === null &&
                              l.stateNode !== null &&
                              sc(l, l.memoizedProps, a.memoizedProps);
                }
                break;
            case 27:
                at(t, l),
                    ut(l),
                    u & 512 && (gl || a === null || _t(a, a.return)),
                    a !== null &&
                        u & 4 &&
                        sc(l, l.memoizedProps, a.memoizedProps);
                break;
            case 5:
                if (
                    (at(t, l),
                    ut(l),
                    u & 512 && (gl || a === null || _t(a, a.return)),
                    l.flags & 32)
                ) {
                    e = l.stateNode;
                    try {
                        La(e, "");
                    } catch (m) {
                        cl(l, l.return, m);
                    }
                }
                u & 4 &&
                    l.stateNode != null &&
                    ((e = l.memoizedProps),
                    sc(l, e, a !== null ? a.memoizedProps : e)),
                    u & 1024 && (dc = !0);
                break;
            case 6:
                if ((at(t, l), ut(l), u & 4)) {
                    if (l.stateNode === null) throw Error(v(162));
                    (u = l.memoizedProps), (a = l.stateNode);
                    try {
                        a.nodeValue = u;
                    } catch (m) {
                        cl(l, l.return, m);
                    }
                }
                break;
            case 3:
                if (
                    ((Mn = null),
                    (e = gt),
                    (gt = pn(t.containerInfo)),
                    at(t, l),
                    (gt = e),
                    ut(l),
                    u & 4 && a !== null && a.memoizedState.isDehydrated)
                )
                    try {
                        Se(t.containerInfo);
                    } catch (m) {
                        cl(l, l.return, m);
                    }
                dc && ((dc = !1), ko(l));
                break;
            case 4:
                (u = gt),
                    (gt = pn(l.stateNode.containerInfo)),
                    at(t, l),
                    ut(l),
                    (gt = u);
                break;
            case 12:
                at(t, l), ut(l);
                break;
            case 13:
                at(t, l),
                    ut(l),
                    l.child.flags & 8192 &&
                        (l.memoizedState !== null) !=
                            (a !== null && a.memoizedState !== null) &&
                        (bc = bt()),
                    u & 4 &&
                        ((u = l.updateQueue),
                        u !== null && ((l.updateQueue = null), hc(l, u)));
                break;
            case 22:
                e = l.memoizedState !== null;
                var f = a !== null && a.memoizedState !== null,
                    h = Gt,
                    g = gl;
                if (
                    ((Gt = h || e),
                    (gl = g || f),
                    at(t, l),
                    (gl = g),
                    (Gt = h),
                    ut(l),
                    u & 8192)
                )
                    l: for (
                        t = l.stateNode,
                            t._visibility = e
                                ? t._visibility & -2
                                : t._visibility | 1,
                            e && (a === null || f || Gt || gl || qa(l)),
                            a = null,
                            t = l;
                        ;

                    ) {
                        if (t.tag === 5 || t.tag === 26) {
                            if (a === null) {
                                f = a = t;
                                try {
                                    if (((n = f.stateNode), e))
                                        (i = n.style),
                                            typeof i.setProperty == "function"
                                                ? i.setProperty(
                                                      "display",
                                                      "none",
                                                      "important"
                                                  )
                                                : (i.display = "none");
                                    else {
                                        c = f.stateNode;
                                        var A = f.memoizedProps.style,
                                            y =
                                                A != null &&
                                                A.hasOwnProperty("display")
                                                    ? A.display
                                                    : null;
                                        c.style.display =
                                            y == null || typeof y == "boolean"
                                                ? ""
                                                : ("" + y).trim();
                                    }
                                } catch (m) {
                                    cl(f, f.return, m);
                                }
                            }
                        } else if (t.tag === 6) {
                            if (a === null) {
                                f = t;
                                try {
                                    f.stateNode.nodeValue = e
                                        ? ""
                                        : f.memoizedProps;
                                } catch (m) {
                                    cl(f, f.return, m);
                                }
                            }
                        } else if (
                            ((t.tag !== 22 && t.tag !== 23) ||
                                t.memoizedState === null ||
                                t === l) &&
                            t.child !== null
                        ) {
                            (t.child.return = t), (t = t.child);
                            continue;
                        }
                        if (t === l) break l;
                        for (; t.sibling === null; ) {
                            if (t.return === null || t.return === l) break l;
                            a === t && (a = null), (t = t.return);
                        }
                        a === t && (a = null),
                            (t.sibling.return = t.return),
                            (t = t.sibling);
                    }
                u & 4 &&
                    ((u = l.updateQueue),
                    u !== null &&
                        ((a = u.retryQueue),
                        a !== null && ((u.retryQueue = null), hc(l, a))));
                break;
            case 19:
                at(t, l),
                    ut(l),
                    u & 4 &&
                        ((u = l.updateQueue),
                        u !== null && ((l.updateQueue = null), hc(l, u)));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                at(t, l), ut(l);
        }
    }
    function ut(l) {
        var t = l.flags;
        if (t & 2) {
            try {
                for (var a, u = l.return; u !== null; ) {
                    if (Qo(u)) {
                        a = u;
                        break;
                    }
                    u = u.return;
                }
                if (a == null) throw Error(v(160));
                switch (a.tag) {
                    case 27:
                        var e = a.stateNode,
                            n = oc(l);
                        dn(l, n, e);
                        break;
                    case 5:
                        var i = a.stateNode;
                        a.flags & 32 && (La(i, ""), (a.flags &= -33));
                        var c = oc(l);
                        dn(l, c, i);
                        break;
                    case 3:
                    case 4:
                        var f = a.stateNode.containerInfo,
                            h = oc(l);
                        rc(l, h, f);
                        break;
                    default:
                        throw Error(v(161));
                }
            } catch (g) {
                cl(l, l.return, g);
            }
            l.flags &= -3;
        }
        t & 4096 && (l.flags &= -4097);
    }
    function ko(l) {
        if (l.subtreeFlags & 1024)
            for (l = l.child; l !== null; ) {
                var t = l;
                ko(t),
                    t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                    (l = l.sibling);
            }
    }
    function ua(l, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
                Vo(l, t.alternate, t), (t = t.sibling);
    }
    function qa(l) {
        for (l = l.child; l !== null; ) {
            var t = l;
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    aa(4, t, t.return), qa(t);
                    break;
                case 1:
                    _t(t, t.return);
                    var a = t.stateNode;
                    typeof a.componentWillUnmount == "function" &&
                        Go(t, t.return, a),
                        qa(t);
                    break;
                case 27:
                    oe(t.stateNode);
                case 26:
                case 5:
                    _t(t, t.return), qa(t);
                    break;
                case 22:
                    t.memoizedState === null && qa(t);
                    break;
                case 30:
                    qa(t);
                    break;
                default:
                    qa(t);
            }
            l = l.sibling;
        }
    }
    function ea(l, t, a) {
        for (
            a = a && (t.subtreeFlags & 8772) !== 0, t = t.child;
            t !== null;

        ) {
            var u = t.alternate,
                e = l,
                n = t,
                i = n.flags;
            switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    ea(e, n, a), le(4, n);
                    break;
                case 1:
                    if (
                        (ea(e, n, a),
                        (u = n),
                        (e = u.stateNode),
                        typeof e.componentDidMount == "function")
                    )
                        try {
                            e.componentDidMount();
                        } catch (h) {
                            cl(u, u.return, h);
                        }
                    if (((u = n), (e = u.updateQueue), e !== null)) {
                        var c = u.stateNode;
                        try {
                            var f = e.shared.hiddenCallbacks;
                            if (f !== null)
                                for (
                                    e.shared.hiddenCallbacks = null, e = 0;
                                    e < f.length;
                                    e++
                                )
                                    _s(f[e], c);
                        } catch (h) {
                            cl(u, u.return, h);
                        }
                    }
                    a && i & 64 && jo(n), te(n, n.return);
                    break;
                case 27:
                    Co(n);
                case 26:
                case 5:
                    ea(e, n, a),
                        a && u === null && i & 4 && Xo(n),
                        te(n, n.return);
                    break;
                case 12:
                    ea(e, n, a);
                    break;
                case 13:
                    ea(e, n, a), a && i & 4 && wo(e, n);
                    break;
                case 22:
                    n.memoizedState === null && ea(e, n, a), te(n, n.return);
                    break;
                case 30:
                    break;
                default:
                    ea(e, n, a);
            }
            t = t.sibling;
        }
    }
    function yc(l, t) {
        var a = null;
        l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (a = l.memoizedState.cachePool.pool),
            (l = null),
            t.memoizedState !== null &&
                t.memoizedState.cachePool !== null &&
                (l = t.memoizedState.cachePool.pool),
            l !== a && (l != null && l.refCount++, a != null && Qu(a));
    }
    function vc(l, t) {
        (l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && Qu(l));
    }
    function Et(l, t, a, u) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) $o(l, t, a, u), (t = t.sibling);
    }
    function $o(l, t, a, u) {
        var e = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                Et(l, t, a, u), e & 2048 && le(9, t);
                break;
            case 1:
                Et(l, t, a, u);
                break;
            case 3:
                Et(l, t, a, u),
                    e & 2048 &&
                        ((l = null),
                        t.alternate !== null &&
                            (l = t.alternate.memoizedState.cache),
                        (t = t.memoizedState.cache),
                        t !== l && (t.refCount++, l != null && Qu(l)));
                break;
            case 12:
                if (e & 2048) {
                    Et(l, t, a, u), (l = t.stateNode);
                    try {
                        var n = t.memoizedProps,
                            i = n.id,
                            c = n.onPostCommit;
                        typeof c == "function" &&
                            c(
                                i,
                                t.alternate === null ? "mount" : "update",
                                l.passiveEffectDuration,
                                -0
                            );
                    } catch (f) {
                        cl(t, t.return, f);
                    }
                } else Et(l, t, a, u);
                break;
            case 13:
                Et(l, t, a, u);
                break;
            case 23:
                break;
            case 22:
                (n = t.stateNode),
                    (i = t.alternate),
                    t.memoizedState !== null
                        ? n._visibility & 2
                            ? Et(l, t, a, u)
                            : ae(l, t)
                        : n._visibility & 2
                        ? Et(l, t, a, u)
                        : ((n._visibility |= 2),
                          su(l, t, a, u, (t.subtreeFlags & 10256) !== 0)),
                    e & 2048 && yc(i, t);
                break;
            case 24:
                Et(l, t, a, u), e & 2048 && vc(t.alternate, t);
                break;
            default:
                Et(l, t, a, u);
        }
    }
    function su(l, t, a, u, e) {
        for (
            e = e && (t.subtreeFlags & 10256) !== 0, t = t.child;
            t !== null;

        ) {
            var n = l,
                i = t,
                c = a,
                f = u,
                h = i.flags;
            switch (i.tag) {
                case 0:
                case 11:
                case 15:
                    su(n, i, c, f, e), le(8, i);
                    break;
                case 23:
                    break;
                case 22:
                    var g = i.stateNode;
                    i.memoizedState !== null
                        ? g._visibility & 2
                            ? su(n, i, c, f, e)
                            : ae(n, i)
                        : ((g._visibility |= 2), su(n, i, c, f, e)),
                        e && h & 2048 && yc(i.alternate, i);
                    break;
                case 24:
                    su(n, i, c, f, e), e && h & 2048 && vc(i.alternate, i);
                    break;
                default:
                    su(n, i, c, f, e);
            }
            t = t.sibling;
        }
    }
    function ae(l, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var a = l,
                    u = t,
                    e = u.flags;
                switch (u.tag) {
                    case 22:
                        ae(a, u), e & 2048 && yc(u.alternate, u);
                        break;
                    case 24:
                        ae(a, u), e & 2048 && vc(u.alternate, u);
                        break;
                    default:
                        ae(a, u);
                }
                t = t.sibling;
            }
    }
    var ue = 8192;
    function ou(l) {
        if (l.subtreeFlags & ue)
            for (l = l.child; l !== null; ) Wo(l), (l = l.sibling);
    }
    function Wo(l) {
        switch (l.tag) {
            case 26:
                ou(l),
                    l.flags & ue &&
                        l.memoizedState !== null &&
                        p0(gt, l.memoizedState, l.memoizedProps);
                break;
            case 5:
                ou(l);
                break;
            case 3:
            case 4:
                var t = gt;
                (gt = pn(l.stateNode.containerInfo)), ou(l), (gt = t);
                break;
            case 22:
                l.memoizedState === null &&
                    ((t = l.alternate),
                    t !== null && t.memoizedState !== null
                        ? ((t = ue), (ue = 16777216), ou(l), (ue = t))
                        : ou(l));
                break;
            default:
                ou(l);
        }
    }
    function Fo(l) {
        var t = l.alternate;
        if (t !== null && ((l = t.child), l !== null)) {
            t.child = null;
            do (t = l.sibling), (l.sibling = null), (l = t);
            while (l !== null);
        }
    }
    function ee(l) {
        var t = l.deletions;
        if ((l.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var u = t[a];
                    (pl = u), Po(u, l);
                }
            Fo(l);
        }
        if (l.subtreeFlags & 10256)
            for (l = l.child; l !== null; ) Io(l), (l = l.sibling);
    }
    function Io(l) {
        switch (l.tag) {
            case 0:
            case 11:
            case 15:
                ee(l), l.flags & 2048 && aa(9, l, l.return);
                break;
            case 3:
                ee(l);
                break;
            case 12:
                ee(l);
                break;
            case 22:
                var t = l.stateNode;
                l.memoizedState !== null &&
                t._visibility & 2 &&
                (l.return === null || l.return.tag !== 13)
                    ? ((t._visibility &= -3), hn(l))
                    : ee(l);
                break;
            default:
                ee(l);
        }
    }
    function hn(l) {
        var t = l.deletions;
        if ((l.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var u = t[a];
                    (pl = u), Po(u, l);
                }
            Fo(l);
        }
        for (l = l.child; l !== null; ) {
            switch (((t = l), t.tag)) {
                case 0:
                case 11:
                case 15:
                    aa(8, t, t.return), hn(t);
                    break;
                case 22:
                    (a = t.stateNode),
                        a._visibility & 2 && ((a._visibility &= -3), hn(t));
                    break;
                default:
                    hn(t);
            }
            l = l.sibling;
        }
    }
    function Po(l, t) {
        for (; pl !== null; ) {
            var a = pl;
            switch (a.tag) {
                case 0:
                case 11:
                case 15:
                    aa(8, a, t);
                    break;
                case 23:
                case 22:
                    if (
                        a.memoizedState !== null &&
                        a.memoizedState.cachePool !== null
                    ) {
                        var u = a.memoizedState.cachePool.pool;
                        u != null && u.refCount++;
                    }
                    break;
                case 24:
                    Qu(a.memoizedState.cache);
            }
            if (((u = a.child), u !== null)) (u.return = a), (pl = u);
            else
                l: for (a = l; pl !== null; ) {
                    u = pl;
                    var e = u.sibling,
                        n = u.return;
                    if ((Lo(u), u === a)) {
                        pl = null;
                        break l;
                    }
                    if (e !== null) {
                        (e.return = n), (pl = e);
                        break l;
                    }
                    pl = n;
                }
        }
    }
    var Ch = {
            getCacheForType: function (l) {
                var t = Xl(Tl),
                    a = t.data.get(l);
                return a === void 0 && ((a = l()), t.data.set(l, a)), a;
            },
        },
        Zh = typeof WeakMap == "function" ? WeakMap : Map,
        P = 0,
        fl = null,
        K = null,
        k = 0,
        ll = 0,
        et = null,
        na = !1,
        ru = !1,
        mc = !1,
        Qt = 0,
        yl = 0,
        ia = 0,
        Ba = 0,
        gc = 0,
        yt = 0,
        du = 0,
        ne = null,
        $l = null,
        Sc = !1,
        bc = 0,
        yn = 1 / 0,
        vn = null,
        ca = null,
        Hl = 0,
        fa = null,
        hu = null,
        yu = 0,
        Ac = 0,
        Tc = null,
        lr = null,
        ie = 0,
        _c = null;
    function nt() {
        if ((P & 2) !== 0 && k !== 0) return k & -k;
        if (S.T !== null) {
            var l = tu;
            return l !== 0 ? l : Uc();
        }
        return vf();
    }
    function tr() {
        yt === 0 && (yt = (k & 536870912) === 0 || F ? rf() : 536870912);
        var l = ht.current;
        return l !== null && (l.flags |= 32), yt;
    }
    function it(l, t, a) {
        ((l === fl && (ll === 2 || ll === 9)) ||
            l.cancelPendingCommit !== null) &&
            (vu(l, 0), sa(l, k, yt, !1)),
            zu(l, a),
            ((P & 2) === 0 || l !== fl) &&
                (l === fl &&
                    ((P & 2) === 0 && (Ba |= a), yl === 4 && sa(l, k, yt, !1)),
                zt(l));
    }
    function ar(l, t, a) {
        if ((P & 6) !== 0) throw Error(v(327));
        var u =
                (!a && (t & 124) === 0 && (t & l.expiredLanes) === 0) ||
                Eu(l, t),
            e = u ? Kh(l, t) : pc(l, t, !0),
            n = u;
        do {
            if (e === 0) {
                ru && !u && sa(l, t, 0, !1);
                break;
            } else {
                if (((a = l.current.alternate), n && !Vh(a))) {
                    (e = pc(l, t, !1)), (n = !1);
                    continue;
                }
                if (e === 2) {
                    if (((n = t), l.errorRecoveryDisabledLanes & n)) var i = 0;
                    else
                        (i = l.pendingLanes & -536870913),
                            (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0);
                    if (i !== 0) {
                        t = i;
                        l: {
                            var c = l;
                            e = ne;
                            var f = c.current.memoizedState.isDehydrated;
                            if (
                                (f && (vu(c, i).flags |= 256),
                                (i = pc(c, i, !1)),
                                i !== 2)
                            ) {
                                if (mc && !f) {
                                    (c.errorRecoveryDisabledLanes |= n),
                                        (Ba |= n),
                                        (e = 4);
                                    break l;
                                }
                                (n = $l),
                                    ($l = e),
                                    n !== null &&
                                        ($l === null
                                            ? ($l = n)
                                            : $l.push.apply($l, n));
                            }
                            e = i;
                        }
                        if (((n = !1), e !== 2)) continue;
                    }
                }
                if (e === 1) {
                    vu(l, 0), sa(l, t, 0, !0);
                    break;
                }
                l: {
                    switch (((u = l), (n = e), n)) {
                        case 0:
                        case 1:
                            throw Error(v(345));
                        case 4:
                            if ((t & 4194048) !== t) break;
                        case 6:
                            sa(u, t, yt, !na);
                            break l;
                        case 2:
                            $l = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(v(329));
                    }
                    if (
                        (t & 62914560) === t &&
                        ((e = bc + 300 - bt()), 10 < e)
                    ) {
                        if ((sa(u, t, yt, !na), pe(u, 0, !0) !== 0)) break l;
                        u.timeoutHandle = Nr(
                            ur.bind(
                                null,
                                u,
                                a,
                                $l,
                                vn,
                                Sc,
                                t,
                                yt,
                                Ba,
                                du,
                                na,
                                n,
                                2,
                                -0,
                                0
                            ),
                            e
                        );
                        break l;
                    }
                    ur(u, a, $l, vn, Sc, t, yt, Ba, du, na, n, 0, -0, 0);
                }
            }
            break;
        } while (!0);
        zt(l);
    }
    function ur(l, t, a, u, e, n, i, c, f, h, g, A, y, m) {
        if (
            ((l.timeoutHandle = -1),
            (A = t.subtreeFlags),
            (A & 8192 || (A & 16785408) === 16785408) &&
                ((he = { stylesheets: null, count: 0, unsuspend: z0 }),
                Wo(t),
                (A = O0()),
                A !== null))
        ) {
            (l.cancelPendingCommit = A(
                or.bind(null, l, t, n, a, u, e, i, c, f, g, 1, y, m)
            )),
                sa(l, n, i, !h);
            return;
        }
        or(l, t, n, a, u, e, i, c, f);
    }
    function Vh(l) {
        for (var t = l; ; ) {
            var a = t.tag;
            if (
                (a === 0 || a === 11 || a === 15) &&
                t.flags & 16384 &&
                ((a = t.updateQueue),
                a !== null && ((a = a.stores), a !== null))
            )
                for (var u = 0; u < a.length; u++) {
                    var e = a[u],
                        n = e.getSnapshot;
                    e = e.value;
                    try {
                        if (!lt(n(), e)) return !1;
                    } catch {
                        return !1;
                    }
                }
            if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
                (a.return = t), (t = a);
            else {
                if (t === l) break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === l) return !0;
                    t = t.return;
                }
                (t.sibling.return = t.return), (t = t.sibling);
            }
        }
        return !0;
    }
    function sa(l, t, a, u) {
        (t &= ~gc),
            (t &= ~Ba),
            (l.suspendedLanes |= t),
            (l.pingedLanes &= ~t),
            u && (l.warmLanes |= t),
            (u = l.expirationTimes);
        for (var e = t; 0 < e; ) {
            var n = 31 - Pl(e),
                i = 1 << n;
            (u[n] = -1), (e &= ~i);
        }
        a !== 0 && hf(l, a, t);
    }
    function mn() {
        return (P & 6) === 0 ? (ce(0), !1) : !0;
    }
    function Ec() {
        if (K !== null) {
            if (ll === 0) var l = K.return;
            else
                (l = K),
                    (Ht = Da = null),
                    Qi(l),
                    (cu = null),
                    (Fu = 0),
                    (l = K);
            for (; l !== null; ) xo(l.alternate, l), (l = l.return);
            K = null;
        }
    }
    function vu(l, t) {
        var a = l.timeoutHandle;
        a !== -1 && ((l.timeoutHandle = -1), c0(a)),
            (a = l.cancelPendingCommit),
            a !== null && ((l.cancelPendingCommit = null), a()),
            Ec(),
            (fl = l),
            (K = a = Ut(l.current, null)),
            (k = t),
            (ll = 0),
            (et = null),
            (na = !1),
            (ru = Eu(l, t)),
            (mc = !1),
            (du = yt = gc = Ba = ia = yl = 0),
            ($l = ne = null),
            (Sc = !1),
            (t & 8) !== 0 && (t |= t & 32);
        var u = l.entangledLanes;
        if (u !== 0)
            for (l = l.entanglements, u &= t; 0 < u; ) {
                var e = 31 - Pl(u),
                    n = 1 << e;
                (t |= l[e]), (u &= ~n);
            }
        return (Qt = t), je(), a;
    }
    function er(l, t) {
        (Z = null),
            (S.H = an),
            t === Zu || t === we
                ? ((t = As()), (ll = 3))
                : t === gs
                ? ((t = As()), (ll = 4))
                : (ll =
                      t === _o
                          ? 8
                          : t !== null &&
                            typeof t == "object" &&
                            typeof t.then == "function"
                          ? 6
                          : 1),
            (et = t),
            K === null && ((yl = 1), fn(l, st(t, l.current)));
    }
    function nr() {
        var l = S.H;
        return (S.H = an), l === null ? an : l;
    }
    function ir() {
        var l = S.A;
        return (S.A = Ch), l;
    }
    function zc() {
        (yl = 4),
            na || ((k & 4194048) !== k && ht.current !== null) || (ru = !0),
            ((ia & 134217727) === 0 && (Ba & 134217727) === 0) ||
                fl === null ||
                sa(fl, k, yt, !1);
    }
    function pc(l, t, a) {
        var u = P;
        P |= 2;
        var e = nr(),
            n = ir();
        (fl !== l || k !== t) && ((vn = null), vu(l, t)), (t = !1);
        var i = yl;
        l: do
            try {
                if (ll !== 0 && K !== null) {
                    var c = K,
                        f = et;
                    switch (ll) {
                        case 8:
                            Ec(), (i = 6);
                            break l;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            ht.current === null && (t = !0);
                            var h = ll;
                            if (
                                ((ll = 0), (et = null), mu(l, c, f, h), a && ru)
                            ) {
                                i = 0;
                                break l;
                            }
                            break;
                        default:
                            (h = ll), (ll = 0), (et = null), mu(l, c, f, h);
                    }
                }
                Lh(), (i = yl);
                break;
            } catch (g) {
                er(l, g);
            }
        while (!0);
        return (
            t && l.shellSuspendCounter++,
            (Ht = Da = null),
            (P = u),
            (S.H = e),
            (S.A = n),
            K === null && ((fl = null), (k = 0), je()),
            i
        );
    }
    function Lh() {
        for (; K !== null; ) cr(K);
    }
    function Kh(l, t) {
        var a = P;
        P |= 2;
        var u = nr(),
            e = ir();
        fl !== l || k !== t
            ? ((vn = null), (yn = bt() + 500), vu(l, t))
            : (ru = Eu(l, t));
        l: do
            try {
                if (ll !== 0 && K !== null) {
                    t = K;
                    var n = et;
                    t: switch (ll) {
                        case 1:
                            (ll = 0), (et = null), mu(l, t, n, 1);
                            break;
                        case 2:
                        case 9:
                            if (Ss(n)) {
                                (ll = 0), (et = null), fr(t);
                                break;
                            }
                            (t = function () {
                                (ll !== 2 && ll !== 9) || fl !== l || (ll = 7),
                                    zt(l);
                            }),
                                n.then(t, t);
                            break l;
                        case 3:
                            ll = 7;
                            break l;
                        case 4:
                            ll = 5;
                            break l;
                        case 7:
                            Ss(n)
                                ? ((ll = 0), (et = null), fr(t))
                                : ((ll = 0), (et = null), mu(l, t, n, 7));
                            break;
                        case 5:
                            var i = null;
                            switch (K.tag) {
                                case 26:
                                    i = K.memoizedState;
                                case 5:
                                case 27:
                                    var c = K;
                                    if (!i || Vr(i)) {
                                        (ll = 0), (et = null);
                                        var f = c.sibling;
                                        if (f !== null) K = f;
                                        else {
                                            var h = c.return;
                                            h !== null
                                                ? ((K = h), gn(h))
                                                : (K = null);
                                        }
                                        break t;
                                    }
                            }
                            (ll = 0), (et = null), mu(l, t, n, 5);
                            break;
                        case 6:
                            (ll = 0), (et = null), mu(l, t, n, 6);
                            break;
                        case 8:
                            Ec(), (yl = 6);
                            break l;
                        default:
                            throw Error(v(462));
                    }
                }
                wh();
                break;
            } catch (g) {
                er(l, g);
            }
        while (!0);
        return (
            (Ht = Da = null),
            (S.H = u),
            (S.A = e),
            (P = a),
            K !== null ? 0 : ((fl = null), (k = 0), je(), yl)
        );
    }
    function wh() {
        for (; K !== null && !yd(); ) cr(K);
    }
    function cr(l) {
        var t = Bo(l.alternate, l, Qt);
        (l.memoizedProps = l.pendingProps), t === null ? gn(l) : (K = t);
    }
    function fr(l) {
        var t = l,
            a = t.alternate;
        switch (t.tag) {
            case 15:
            case 0:
                t = Do(a, t, t.pendingProps, t.type, void 0, k);
                break;
            case 11:
                t = Do(a, t, t.pendingProps, t.type.render, t.ref, k);
                break;
            case 5:
                Qi(t);
            default:
                xo(a, t), (t = K = fs(t, Qt)), (t = Bo(a, t, Qt));
        }
        (l.memoizedProps = l.pendingProps), t === null ? gn(l) : (K = t);
    }
    function mu(l, t, a, u) {
        (Ht = Da = null), Qi(t), (cu = null), (Fu = 0);
        var e = t.return;
        try {
            if (Yh(l, e, t, a, k)) {
                (yl = 1), fn(l, st(a, l.current)), (K = null);
                return;
            }
        } catch (n) {
            if (e !== null) throw ((K = e), n);
            (yl = 1), fn(l, st(a, l.current)), (K = null);
            return;
        }
        t.flags & 32768
            ? (F || u === 1
                  ? (l = !0)
                  : ru || (k & 536870912) !== 0
                  ? (l = !1)
                  : ((na = l = !0),
                    (u === 2 || u === 9 || u === 3 || u === 6) &&
                        ((u = ht.current),
                        u !== null && u.tag === 13 && (u.flags |= 16384))),
              sr(t, l))
            : gn(t);
    }
    function gn(l) {
        var t = l;
        do {
            if ((t.flags & 32768) !== 0) {
                sr(t, na);
                return;
            }
            l = t.return;
            var a = jh(t.alternate, t, Qt);
            if (a !== null) {
                K = a;
                return;
            }
            if (((t = t.sibling), t !== null)) {
                K = t;
                return;
            }
            K = t = l;
        } while (t !== null);
        yl === 0 && (yl = 5);
    }
    function sr(l, t) {
        do {
            var a = Gh(l.alternate, l);
            if (a !== null) {
                (a.flags &= 32767), (K = a);
                return;
            }
            if (
                ((a = l.return),
                a !== null &&
                    ((a.flags |= 32768),
                    (a.subtreeFlags = 0),
                    (a.deletions = null)),
                !t && ((l = l.sibling), l !== null))
            ) {
                K = l;
                return;
            }
            K = l = a;
        } while (l !== null);
        (yl = 6), (K = null);
    }
    function or(l, t, a, u, e, n, i, c, f) {
        l.cancelPendingCommit = null;
        do Sn();
        while (Hl !== 0);
        if ((P & 6) !== 0) throw Error(v(327));
        if (t !== null) {
            if (t === l.current) throw Error(v(177));
            if (
                ((n = t.lanes | t.childLanes),
                (n |= vi),
                zd(l, a, n, i, c, f),
                l === fl && ((K = fl = null), (k = 0)),
                (hu = t),
                (fa = l),
                (yu = a),
                (Ac = n),
                (Tc = e),
                (lr = u),
                (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
                    ? ((l.callbackNode = null),
                      (l.callbackPriority = 0),
                      Wh(_e, function () {
                          return vr(), null;
                      }))
                    : ((l.callbackNode = null), (l.callbackPriority = 0)),
                (u = (t.flags & 13878) !== 0),
                (t.subtreeFlags & 13878) !== 0 || u)
            ) {
                (u = S.T),
                    (S.T = null),
                    (e = p.p),
                    (p.p = 2),
                    (i = P),
                    (P |= 4);
                try {
                    Xh(l, t, a);
                } finally {
                    (P = i), (p.p = e), (S.T = u);
                }
            }
            (Hl = 1), rr(), dr(), hr();
        }
    }
    function rr() {
        if (Hl === 1) {
            Hl = 0;
            var l = fa,
                t = hu,
                a = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || a) {
                (a = S.T), (S.T = null);
                var u = p.p;
                p.p = 2;
                var e = P;
                P |= 4;
                try {
                    Jo(t, l);
                    var n = jc,
                        i = If(l.containerInfo),
                        c = n.focusedElem,
                        f = n.selectionRange;
                    if (
                        i !== c &&
                        c &&
                        c.ownerDocument &&
                        Ff(c.ownerDocument.documentElement, c)
                    ) {
                        if (f !== null && oi(c)) {
                            var h = f.start,
                                g = f.end;
                            if (
                                (g === void 0 && (g = h), "selectionStart" in c)
                            )
                                (c.selectionStart = h),
                                    (c.selectionEnd = Math.min(
                                        g,
                                        c.value.length
                                    ));
                            else {
                                var A = c.ownerDocument || document,
                                    y = (A && A.defaultView) || window;
                                if (y.getSelection) {
                                    var m = y.getSelection(),
                                        Y = c.textContent.length,
                                        H = Math.min(f.start, Y),
                                        nl =
                                            f.end === void 0
                                                ? H
                                                : Math.min(f.end, Y);
                                    !m.extend &&
                                        H > nl &&
                                        ((i = nl), (nl = H), (H = i));
                                    var r = Wf(c, H),
                                        o = Wf(c, nl);
                                    if (
                                        r &&
                                        o &&
                                        (m.rangeCount !== 1 ||
                                            m.anchorNode !== r.node ||
                                            m.anchorOffset !== r.offset ||
                                            m.focusNode !== o.node ||
                                            m.focusOffset !== o.offset)
                                    ) {
                                        var d = A.createRange();
                                        d.setStart(r.node, r.offset),
                                            m.removeAllRanges(),
                                            H > nl
                                                ? (m.addRange(d),
                                                  m.extend(o.node, o.offset))
                                                : (d.setEnd(o.node, o.offset),
                                                  m.addRange(d));
                                    }
                                }
                            }
                        }
                        for (A = [], m = c; (m = m.parentNode); )
                            m.nodeType === 1 &&
                                A.push({
                                    element: m,
                                    left: m.scrollLeft,
                                    top: m.scrollTop,
                                });
                        for (
                            typeof c.focus == "function" && c.focus(), c = 0;
                            c < A.length;
                            c++
                        ) {
                            var b = A[c];
                            (b.element.scrollLeft = b.left),
                                (b.element.scrollTop = b.top);
                        }
                    }
                    (Rn = !!xc), (jc = xc = null);
                } finally {
                    (P = e), (p.p = u), (S.T = a);
                }
            }
            (l.current = t), (Hl = 2);
        }
    }
    function dr() {
        if (Hl === 2) {
            Hl = 0;
            var l = fa,
                t = hu,
                a = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || a) {
                (a = S.T), (S.T = null);
                var u = p.p;
                p.p = 2;
                var e = P;
                P |= 4;
                try {
                    Vo(l, t.alternate, t);
                } finally {
                    (P = e), (p.p = u), (S.T = a);
                }
            }
            Hl = 3;
        }
    }
    function hr() {
        if (Hl === 4 || Hl === 3) {
            (Hl = 0), vd();
            var l = fa,
                t = hu,
                a = yu,
                u = lr;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
                ? (Hl = 5)
                : ((Hl = 0), (hu = fa = null), yr(l, l.pendingLanes));
            var e = l.pendingLanes;
            if (
                (e === 0 && (ca = null),
                Vn(a),
                (t = t.stateNode),
                Il && typeof Il.onCommitFiberRoot == "function")
            )
                try {
                    Il.onCommitFiberRoot(
                        _u,
                        t,
                        void 0,
                        (t.current.flags & 128) === 128
                    );
                } catch {}
            if (u !== null) {
                (t = S.T), (e = p.p), (p.p = 2), (S.T = null);
                try {
                    for (
                        var n = l.onRecoverableError, i = 0;
                        i < u.length;
                        i++
                    ) {
                        var c = u[i];
                        n(c.value, { componentStack: c.stack });
                    }
                } finally {
                    (S.T = t), (p.p = e);
                }
            }
            (yu & 3) !== 0 && Sn(),
                zt(l),
                (e = l.pendingLanes),
                (a & 4194090) !== 0 && (e & 42) !== 0
                    ? l === _c
                        ? ie++
                        : ((ie = 0), (_c = l))
                    : (ie = 0),
                ce(0);
        }
    }
    function yr(l, t) {
        (l.pooledCacheLanes &= t) === 0 &&
            ((t = l.pooledCache), t != null && ((l.pooledCache = null), Qu(t)));
    }
    function Sn(l) {
        return rr(), dr(), hr(), vr();
    }
    function vr() {
        if (Hl !== 5) return !1;
        var l = fa,
            t = Ac;
        Ac = 0;
        var a = Vn(yu),
            u = S.T,
            e = p.p;
        try {
            (p.p = 32 > a ? 32 : a), (S.T = null), (a = Tc), (Tc = null);
            var n = fa,
                i = yu;
            if (((Hl = 0), (hu = fa = null), (yu = 0), (P & 6) !== 0))
                throw Error(v(331));
            var c = P;
            if (
                ((P |= 4),
                Io(n.current),
                $o(n, n.current, i, a),
                (P = c),
                ce(0, !1),
                Il && typeof Il.onPostCommitFiberRoot == "function")
            )
                try {
                    Il.onPostCommitFiberRoot(_u, n);
                } catch {}
            return !0;
        } finally {
            (p.p = e), (S.T = u), yr(l, t);
        }
    }
    function mr(l, t, a) {
        (t = st(a, t)),
            (t = lc(l.stateNode, t, 2)),
            (l = It(l, t, 2)),
            l !== null && (zu(l, 2), zt(l));
    }
    function cl(l, t, a) {
        if (l.tag === 3) mr(l, l, a);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    mr(t, l, a);
                    break;
                } else if (t.tag === 1) {
                    var u = t.stateNode;
                    if (
                        typeof t.type.getDerivedStateFromError == "function" ||
                        (typeof u.componentDidCatch == "function" &&
                            (ca === null || !ca.has(u)))
                    ) {
                        (l = st(a, l)),
                            (a = Ao(2)),
                            (u = It(t, a, 2)),
                            u !== null && (To(a, u, t, l), zu(u, 2), zt(u));
                        break;
                    }
                }
                t = t.return;
            }
    }
    function Oc(l, t, a) {
        var u = l.pingCache;
        if (u === null) {
            u = l.pingCache = new Zh();
            var e = new Set();
            u.set(t, e);
        } else (e = u.get(t)), e === void 0 && ((e = new Set()), u.set(t, e));
        e.has(a) ||
            ((mc = !0), e.add(a), (l = Jh.bind(null, l, t, a)), t.then(l, l));
    }
    function Jh(l, t, a) {
        var u = l.pingCache;
        u !== null && u.delete(t),
            (l.pingedLanes |= l.suspendedLanes & a),
            (l.warmLanes &= ~a),
            fl === l &&
                (k & a) === a &&
                (yl === 4 ||
                (yl === 3 && (k & 62914560) === k && 300 > bt() - bc)
                    ? (P & 2) === 0 && vu(l, 0)
                    : (gc |= a),
                du === k && (du = 0)),
            zt(l);
    }
    function gr(l, t) {
        t === 0 && (t = df()), (l = Fa(l, t)), l !== null && (zu(l, t), zt(l));
    }
    function kh(l) {
        var t = l.memoizedState,
            a = 0;
        t !== null && (a = t.retryLane), gr(l, a);
    }
    function $h(l, t) {
        var a = 0;
        switch (l.tag) {
            case 13:
                var u = l.stateNode,
                    e = l.memoizedState;
                e !== null && (a = e.retryLane);
                break;
            case 19:
                u = l.stateNode;
                break;
            case 22:
                u = l.stateNode._retryCache;
                break;
            default:
                throw Error(v(314));
        }
        u !== null && u.delete(t), gr(l, a);
    }
    function Wh(l, t) {
        return Xn(l, t);
    }
    var bn = null,
        gu = null,
        Mc = !1,
        An = !1,
        Dc = !1,
        Ya = 0;
    function zt(l) {
        l !== gu &&
            l.next === null &&
            (gu === null ? (bn = gu = l) : (gu = gu.next = l)),
            (An = !0),
            Mc || ((Mc = !0), Ih());
    }
    function ce(l, t) {
        if (!Dc && An) {
            Dc = !0;
            do
                for (var a = !1, u = bn; u !== null; ) {
                    if (l !== 0) {
                        var e = u.pendingLanes;
                        if (e === 0) var n = 0;
                        else {
                            var i = u.suspendedLanes,
                                c = u.pingedLanes;
                            (n = (1 << (31 - Pl(42 | l) + 1)) - 1),
                                (n &= e & ~(i & ~c)),
                                (n =
                                    n & 201326741
                                        ? (n & 201326741) | 1
                                        : n
                                        ? n | 2
                                        : 0);
                        }
                        n !== 0 && ((a = !0), Tr(u, n));
                    } else
                        (n = k),
                            (n = pe(
                                u,
                                u === fl ? n : 0,
                                u.cancelPendingCommit !== null ||
                                    u.timeoutHandle !== -1
                            )),
                            (n & 3) === 0 || Eu(u, n) || ((a = !0), Tr(u, n));
                    u = u.next;
                }
            while (a);
            Dc = !1;
        }
    }
    function Fh() {
        Sr();
    }
    function Sr() {
        An = Mc = !1;
        var l = 0;
        Ya !== 0 && (i0() && (l = Ya), (Ya = 0));
        for (var t = bt(), a = null, u = bn; u !== null; ) {
            var e = u.next,
                n = br(u, t);
            n === 0
                ? ((u.next = null),
                  a === null ? (bn = e) : (a.next = e),
                  e === null && (gu = a))
                : ((a = u), (l !== 0 || (n & 3) !== 0) && (An = !0)),
                (u = e);
        }
        ce(l);
    }
    function br(l, t) {
        for (
            var a = l.suspendedLanes,
                u = l.pingedLanes,
                e = l.expirationTimes,
                n = l.pendingLanes & -62914561;
            0 < n;

        ) {
            var i = 31 - Pl(n),
                c = 1 << i,
                f = e[i];
            f === -1
                ? ((c & a) === 0 || (c & u) !== 0) && (e[i] = Ed(c, t))
                : f <= t && (l.expiredLanes |= c),
                (n &= ~c);
        }
        if (
            ((t = fl),
            (a = k),
            (a = pe(
                l,
                l === t ? a : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            )),
            (u = l.callbackNode),
            a === 0 ||
                (l === t && (ll === 2 || ll === 9)) ||
                l.cancelPendingCommit !== null)
        )
            return (
                u !== null && u !== null && Qn(u),
                (l.callbackNode = null),
                (l.callbackPriority = 0)
            );
        if ((a & 3) === 0 || Eu(l, a)) {
            if (((t = a & -a), t === l.callbackPriority)) return t;
            switch ((u !== null && Qn(u), Vn(a))) {
                case 2:
                case 8:
                    a = sf;
                    break;
                case 32:
                    a = _e;
                    break;
                case 268435456:
                    a = of;
                    break;
                default:
                    a = _e;
            }
            return (
                (u = Ar.bind(null, l)),
                (a = Xn(a, u)),
                (l.callbackPriority = t),
                (l.callbackNode = a),
                t
            );
        }
        return (
            u !== null && u !== null && Qn(u),
            (l.callbackPriority = 2),
            (l.callbackNode = null),
            2
        );
    }
    function Ar(l, t) {
        if (Hl !== 0 && Hl !== 5)
            return (l.callbackNode = null), (l.callbackPriority = 0), null;
        var a = l.callbackNode;
        if (Sn() && l.callbackNode !== a) return null;
        var u = k;
        return (
            (u = pe(
                l,
                l === fl ? u : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            )),
            u === 0
                ? null
                : (ar(l, u, t),
                  br(l, bt()),
                  l.callbackNode != null && l.callbackNode === a
                      ? Ar.bind(null, l)
                      : null)
        );
    }
    function Tr(l, t) {
        if (Sn()) return null;
        ar(l, t, !0);
    }
    function Ih() {
        f0(function () {
            (P & 6) !== 0 ? Xn(ff, Fh) : Sr();
        });
    }
    function Uc() {
        return Ya === 0 && (Ya = rf()), Ya;
    }
    function _r(l) {
        return l == null || typeof l == "symbol" || typeof l == "boolean"
            ? null
            : typeof l == "function"
            ? l
            : Re("" + l);
    }
    function Er(l, t) {
        var a = t.ownerDocument.createElement("input");
        return (
            (a.name = t.name),
            (a.value = t.value),
            l.id && a.setAttribute("form", l.id),
            t.parentNode.insertBefore(a, t),
            (l = new FormData(l)),
            a.parentNode.removeChild(a),
            l
        );
    }
    function Ph(l, t, a, u, e) {
        if (t === "submit" && a && a.stateNode === e) {
            var n = _r((e[Kl] || null).action),
                i = u.submitter;
            i &&
                ((t = (t = i[Kl] || null)
                    ? _r(t.formAction)
                    : i.getAttribute("formAction")),
                t !== null && ((n = t), (i = null)));
            var c = new Be("action", "action", null, u, e);
            l.push({
                event: c,
                listeners: [
                    {
                        instance: null,
                        listener: function () {
                            if (u.defaultPrevented) {
                                if (Ya !== 0) {
                                    var f = i ? Er(e, i) : new FormData(e);
                                    $i(
                                        a,
                                        {
                                            pending: !0,
                                            data: f,
                                            method: e.method,
                                            action: n,
                                        },
                                        null,
                                        f
                                    );
                                }
                            } else
                                typeof n == "function" &&
                                    (c.preventDefault(),
                                    (f = i ? Er(e, i) : new FormData(e)),
                                    $i(
                                        a,
                                        {
                                            pending: !0,
                                            data: f,
                                            method: e.method,
                                            action: n,
                                        },
                                        n,
                                        f
                                    ));
                        },
                        currentTarget: e,
                    },
                ],
            });
        }
    }
    for (var Rc = 0; Rc < yi.length; Rc++) {
        var Nc = yi[Rc],
            l0 = Nc.toLowerCase(),
            t0 = Nc[0].toUpperCase() + Nc.slice(1);
        mt(l0, "on" + t0);
    }
    mt(ts, "onAnimationEnd"),
        mt(as, "onAnimationIteration"),
        mt(us, "onAnimationStart"),
        mt("dblclick", "onDoubleClick"),
        mt("focusin", "onFocus"),
        mt("focusout", "onBlur"),
        mt(Sh, "onTransitionRun"),
        mt(bh, "onTransitionStart"),
        mt(Ah, "onTransitionCancel"),
        mt(es, "onTransitionEnd"),
        Ca("onMouseEnter", ["mouseout", "mouseover"]),
        Ca("onMouseLeave", ["mouseout", "mouseover"]),
        Ca("onPointerEnter", ["pointerout", "pointerover"]),
        Ca("onPointerLeave", ["pointerout", "pointerover"]),
        ba(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
                " "
            )
        ),
        ba(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
                " "
            )
        ),
        ba("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
        ]),
        ba(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
                " "
            )
        ),
        ba(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
                " "
            )
        ),
        ba(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
                " "
            )
        );
    var fe =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
                " "
            ),
        a0 = new Set(
            "beforetoggle cancel close invalid load scroll scrollend toggle"
                .split(" ")
                .concat(fe)
        );
    function zr(l, t) {
        t = (t & 4) !== 0;
        for (var a = 0; a < l.length; a++) {
            var u = l[a],
                e = u.event;
            u = u.listeners;
            l: {
                var n = void 0;
                if (t)
                    for (var i = u.length - 1; 0 <= i; i--) {
                        var c = u[i],
                            f = c.instance,
                            h = c.currentTarget;
                        if (
                            ((c = c.listener),
                            f !== n && e.isPropagationStopped())
                        )
                            break l;
                        (n = c), (e.currentTarget = h);
                        try {
                            n(e);
                        } catch (g) {
                            cn(g);
                        }
                        (e.currentTarget = null), (n = f);
                    }
                else
                    for (i = 0; i < u.length; i++) {
                        if (
                            ((c = u[i]),
                            (f = c.instance),
                            (h = c.currentTarget),
                            (c = c.listener),
                            f !== n && e.isPropagationStopped())
                        )
                            break l;
                        (n = c), (e.currentTarget = h);
                        try {
                            n(e);
                        } catch (g) {
                            cn(g);
                        }
                        (e.currentTarget = null), (n = f);
                    }
            }
        }
    }
    function w(l, t) {
        var a = t[Ln];
        a === void 0 && (a = t[Ln] = new Set());
        var u = l + "__bubble";
        a.has(u) || (pr(t, l, 2, !1), a.add(u));
    }
    function Hc(l, t, a) {
        var u = 0;
        t && (u |= 4), pr(a, l, u, t);
    }
    var Tn = "_reactListening" + Math.random().toString(36).slice(2);
    function qc(l) {
        if (!l[Tn]) {
            (l[Tn] = !0),
                gf.forEach(function (a) {
                    a !== "selectionchange" &&
                        (a0.has(a) || Hc(a, !1, l), Hc(a, !0, l));
                });
            var t = l.nodeType === 9 ? l : l.ownerDocument;
            t === null || t[Tn] || ((t[Tn] = !0), Hc("selectionchange", !1, t));
        }
    }
    function pr(l, t, a, u) {
        switch ($r(t)) {
            case 2:
                var e = U0;
                break;
            case 8:
                e = R0;
                break;
            default:
                e = Jc;
        }
        (a = e.bind(null, t, a, l)),
            (e = void 0),
            !ti ||
                (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
                (e = !0),
            u
                ? e !== void 0
                    ? l.addEventListener(t, a, { capture: !0, passive: e })
                    : l.addEventListener(t, a, !0)
                : e !== void 0
                ? l.addEventListener(t, a, { passive: e })
                : l.addEventListener(t, a, !1);
    }
    function Bc(l, t, a, u, e) {
        var n = u;
        if ((t & 1) === 0 && (t & 2) === 0 && u !== null)
            l: for (;;) {
                if (u === null) return;
                var i = u.tag;
                if (i === 3 || i === 4) {
                    var c = u.stateNode.containerInfo;
                    if (c === e) break;
                    if (i === 4)
                        for (i = u.return; i !== null; ) {
                            var f = i.tag;
                            if (
                                (f === 3 || f === 4) &&
                                i.stateNode.containerInfo === e
                            )
                                return;
                            i = i.return;
                        }
                    for (; c !== null; ) {
                        if (((i = Ga(c)), i === null)) return;
                        if (
                            ((f = i.tag),
                            f === 5 || f === 6 || f === 26 || f === 27)
                        ) {
                            u = n = i;
                            continue l;
                        }
                        c = c.parentNode;
                    }
                }
                u = u.return;
            }
        Nf(function () {
            var h = n,
                g = Pn(a),
                A = [];
            l: {
                var y = ns.get(l);
                if (y !== void 0) {
                    var m = Be,
                        Y = l;
                    switch (l) {
                        case "keypress":
                            if (He(a) === 0) break l;
                        case "keydown":
                        case "keyup":
                            m = Wd;
                            break;
                        case "focusin":
                            (Y = "focus"), (m = ni);
                            break;
                        case "focusout":
                            (Y = "blur"), (m = ni);
                            break;
                        case "beforeblur":
                        case "afterblur":
                            m = ni;
                            break;
                        case "click":
                            if (a.button === 2) break l;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            m = Bf;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            m = Gd;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            m = Pd;
                            break;
                        case ts:
                        case as:
                        case us:
                            m = Cd;
                            break;
                        case es:
                            m = th;
                            break;
                        case "scroll":
                        case "scrollend":
                            m = xd;
                            break;
                        case "wheel":
                            m = uh;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            m = Vd;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            m = xf;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            m = nh;
                    }
                    var H = (t & 4) !== 0,
                        nl = !H && (l === "scroll" || l === "scrollend"),
                        r = H ? (y !== null ? y + "Capture" : null) : y;
                    H = [];
                    for (var o = h, d; o !== null; ) {
                        var b = o;
                        if (
                            ((d = b.stateNode),
                            (b = b.tag),
                            (b !== 5 && b !== 26 && b !== 27) ||
                                d === null ||
                                r === null ||
                                ((b = Mu(o, r)),
                                b != null && H.push(se(o, b, d))),
                            nl)
                        )
                            break;
                        o = o.return;
                    }
                    0 < H.length &&
                        ((y = new m(y, Y, null, a, g)),
                        A.push({ event: y, listeners: H }));
                }
            }
            if ((t & 7) === 0) {
                l: {
                    if (
                        ((y = l === "mouseover" || l === "pointerover"),
                        (m = l === "mouseout" || l === "pointerout"),
                        y &&
                            a !== In &&
                            (Y = a.relatedTarget || a.fromElement) &&
                            (Ga(Y) || Y[ja]))
                    )
                        break l;
                    if (
                        (m || y) &&
                        ((y =
                            g.window === g
                                ? g
                                : (y = g.ownerDocument)
                                ? y.defaultView || y.parentWindow
                                : window),
                        m
                            ? ((Y = a.relatedTarget || a.toElement),
                              (m = h),
                              (Y = Y ? Ga(Y) : null),
                              Y !== null &&
                                  ((nl = G(Y)),
                                  (H = Y.tag),
                                  Y !== nl ||
                                      (H !== 5 && H !== 27 && H !== 6)) &&
                                  (Y = null))
                            : ((m = null), (Y = h)),
                        m !== Y)
                    ) {
                        if (
                            ((H = Bf),
                            (b = "onMouseLeave"),
                            (r = "onMouseEnter"),
                            (o = "mouse"),
                            (l === "pointerout" || l === "pointerover") &&
                                ((H = xf),
                                (b = "onPointerLeave"),
                                (r = "onPointerEnter"),
                                (o = "pointer")),
                            (nl = m == null ? y : Ou(m)),
                            (d = Y == null ? y : Ou(Y)),
                            (y = new H(b, o + "leave", m, a, g)),
                            (y.target = nl),
                            (y.relatedTarget = d),
                            (b = null),
                            Ga(g) === h &&
                                ((H = new H(r, o + "enter", Y, a, g)),
                                (H.target = d),
                                (H.relatedTarget = nl),
                                (b = H)),
                            (nl = b),
                            m && Y)
                        )
                            t: {
                                for (H = m, r = Y, o = 0, d = H; d; d = Su(d))
                                    o++;
                                for (d = 0, b = r; b; b = Su(b)) d++;
                                for (; 0 < o - d; ) (H = Su(H)), o--;
                                for (; 0 < d - o; ) (r = Su(r)), d--;
                                for (; o--; ) {
                                    if (
                                        H === r ||
                                        (r !== null && H === r.alternate)
                                    )
                                        break t;
                                    (H = Su(H)), (r = Su(r));
                                }
                                H = null;
                            }
                        else H = null;
                        m !== null && Or(A, y, m, H, !1),
                            Y !== null && nl !== null && Or(A, nl, Y, H, !0);
                    }
                }
                l: {
                    if (
                        ((y = h ? Ou(h) : window),
                        (m = y.nodeName && y.nodeName.toLowerCase()),
                        m === "select" || (m === "input" && y.type === "file"))
                    )
                        var M = Lf;
                    else if (Zf(y))
                        if (Kf) M = vh;
                        else {
                            M = hh;
                            var V = dh;
                        }
                    else
                        (m = y.nodeName),
                            !m ||
                            m.toLowerCase() !== "input" ||
                            (y.type !== "checkbox" && y.type !== "radio")
                                ? h && Fn(h.elementType) && (M = Lf)
                                : (M = yh);
                    if (M && (M = M(l, h))) {
                        Vf(A, M, a, g);
                        break l;
                    }
                    V && V(l, y, h),
                        l === "focusout" &&
                            h &&
                            y.type === "number" &&
                            h.memoizedProps.value != null &&
                            Wn(y, "number", y.value);
                }
                switch (((V = h ? Ou(h) : window), l)) {
                    case "focusin":
                        (Zf(V) || V.contentEditable === "true") &&
                            ((ka = V), (ri = h), (Yu = null));
                        break;
                    case "focusout":
                        Yu = ri = ka = null;
                        break;
                    case "mousedown":
                        di = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        (di = !1), Pf(A, a, g);
                        break;
                    case "selectionchange":
                        if (gh) break;
                    case "keydown":
                    case "keyup":
                        Pf(A, a, g);
                }
                var U;
                if (ci)
                    l: {
                        switch (l) {
                            case "compositionstart":
                                var q = "onCompositionStart";
                                break l;
                            case "compositionend":
                                q = "onCompositionEnd";
                                break l;
                            case "compositionupdate":
                                q = "onCompositionUpdate";
                                break l;
                        }
                        q = void 0;
                    }
                else
                    Ja
                        ? Qf(l, a) && (q = "onCompositionEnd")
                        : l === "keydown" &&
                          a.keyCode === 229 &&
                          (q = "onCompositionStart");
                q &&
                    (jf &&
                        a.locale !== "ko" &&
                        (Ja || q !== "onCompositionStart"
                            ? q === "onCompositionEnd" && Ja && (U = Hf())
                            : ((kt = g),
                              (ai = "value" in kt ? kt.value : kt.textContent),
                              (Ja = !0))),
                    (V = _n(h, q)),
                    0 < V.length &&
                        ((q = new Yf(q, l, null, a, g)),
                        A.push({ event: q, listeners: V }),
                        U
                            ? (q.data = U)
                            : ((U = Cf(a)), U !== null && (q.data = U)))),
                    (U = ch ? fh(l, a) : sh(l, a)) &&
                        ((q = _n(h, "onBeforeInput")),
                        0 < q.length &&
                            ((V = new Yf(
                                "onBeforeInput",
                                "beforeinput",
                                null,
                                a,
                                g
                            )),
                            A.push({ event: V, listeners: q }),
                            (V.data = U))),
                    Ph(A, l, h, a, g);
            }
            zr(A, t);
        });
    }
    function se(l, t, a) {
        return { instance: l, listener: t, currentTarget: a };
    }
    function _n(l, t) {
        for (var a = t + "Capture", u = []; l !== null; ) {
            var e = l,
                n = e.stateNode;
            if (
                ((e = e.tag),
                (e !== 5 && e !== 26 && e !== 27) ||
                    n === null ||
                    ((e = Mu(l, a)),
                    e != null && u.unshift(se(l, e, n)),
                    (e = Mu(l, t)),
                    e != null && u.push(se(l, e, n))),
                l.tag === 3)
            )
                return u;
            l = l.return;
        }
        return [];
    }
    function Su(l) {
        if (l === null) return null;
        do l = l.return;
        while (l && l.tag !== 5 && l.tag !== 27);
        return l || null;
    }
    function Or(l, t, a, u, e) {
        for (var n = t._reactName, i = []; a !== null && a !== u; ) {
            var c = a,
                f = c.alternate,
                h = c.stateNode;
            if (((c = c.tag), f !== null && f === u)) break;
            (c !== 5 && c !== 26 && c !== 27) ||
                h === null ||
                ((f = h),
                e
                    ? ((h = Mu(a, n)), h != null && i.unshift(se(a, h, f)))
                    : e || ((h = Mu(a, n)), h != null && i.push(se(a, h, f)))),
                (a = a.return);
        }
        i.length !== 0 && l.push({ event: t, listeners: i });
    }
    var u0 = /\r\n?/g,
        e0 = /\u0000|\uFFFD/g;
    function Mr(l) {
        return (typeof l == "string" ? l : "" + l)
            .replace(
                u0,
                `
`
            )
            .replace(e0, "");
    }
    function Dr(l, t) {
        return (t = Mr(t)), Mr(l) === t;
    }
    function En() {}
    function el(l, t, a, u, e, n) {
        switch (a) {
            case "children":
                typeof u == "string"
                    ? t === "body" || (t === "textarea" && u === "") || La(l, u)
                    : (typeof u == "number" || typeof u == "bigint") &&
                      t !== "body" &&
                      La(l, "" + u);
                break;
            case "className":
                Me(l, "class", u);
                break;
            case "tabIndex":
                Me(l, "tabindex", u);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                Me(l, a, u);
                break;
            case "style":
                Uf(l, u, n);
                break;
            case "data":
                if (t !== "object") {
                    Me(l, "data", u);
                    break;
                }
            case "src":
            case "href":
                if (u === "" && (t !== "a" || a !== "href")) {
                    l.removeAttribute(a);
                    break;
                }
                if (
                    u == null ||
                    typeof u == "function" ||
                    typeof u == "symbol" ||
                    typeof u == "boolean"
                ) {
                    l.removeAttribute(a);
                    break;
                }
                (u = Re("" + u)), l.setAttribute(a, u);
                break;
            case "action":
            case "formAction":
                if (typeof u == "function") {
                    l.setAttribute(
                        a,
                        "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
                    );
                    break;
                } else
                    typeof n == "function" &&
                        (a === "formAction"
                            ? (t !== "input" &&
                                  el(l, t, "name", e.name, e, null),
                              el(l, t, "formEncType", e.formEncType, e, null),
                              el(l, t, "formMethod", e.formMethod, e, null),
                              el(l, t, "formTarget", e.formTarget, e, null))
                            : (el(l, t, "encType", e.encType, e, null),
                              el(l, t, "method", e.method, e, null),
                              el(l, t, "target", e.target, e, null)));
                if (
                    u == null ||
                    typeof u == "symbol" ||
                    typeof u == "boolean"
                ) {
                    l.removeAttribute(a);
                    break;
                }
                (u = Re("" + u)), l.setAttribute(a, u);
                break;
            case "onClick":
                u != null && (l.onclick = En);
                break;
            case "onScroll":
                u != null && w("scroll", l);
                break;
            case "onScrollEnd":
                u != null && w("scrollend", l);
                break;
            case "dangerouslySetInnerHTML":
                if (u != null) {
                    if (typeof u != "object" || !("__html" in u))
                        throw Error(v(61));
                    if (((a = u.__html), a != null)) {
                        if (e.children != null) throw Error(v(60));
                        l.innerHTML = a;
                    }
                }
                break;
            case "multiple":
                l.multiple =
                    u && typeof u != "function" && typeof u != "symbol";
                break;
            case "muted":
                l.muted = u && typeof u != "function" && typeof u != "symbol";
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                break;
            case "autoFocus":
                break;
            case "xlinkHref":
                if (
                    u == null ||
                    typeof u == "function" ||
                    typeof u == "boolean" ||
                    typeof u == "symbol"
                ) {
                    l.removeAttribute("xlink:href");
                    break;
                }
                (a = Re("" + u)),
                    l.setAttributeNS(
                        "http://www.w3.org/1999/xlink",
                        "xlink:href",
                        a
                    );
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                u != null && typeof u != "function" && typeof u != "symbol"
                    ? l.setAttribute(a, "" + u)
                    : l.removeAttribute(a);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                u && typeof u != "function" && typeof u != "symbol"
                    ? l.setAttribute(a, "")
                    : l.removeAttribute(a);
                break;
            case "capture":
            case "download":
                u === !0
                    ? l.setAttribute(a, "")
                    : u !== !1 &&
                      u != null &&
                      typeof u != "function" &&
                      typeof u != "symbol"
                    ? l.setAttribute(a, u)
                    : l.removeAttribute(a);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                u != null &&
                typeof u != "function" &&
                typeof u != "symbol" &&
                !isNaN(u) &&
                1 <= u
                    ? l.setAttribute(a, u)
                    : l.removeAttribute(a);
                break;
            case "rowSpan":
            case "start":
                u == null ||
                typeof u == "function" ||
                typeof u == "symbol" ||
                isNaN(u)
                    ? l.removeAttribute(a)
                    : l.setAttribute(a, u);
                break;
            case "popover":
                w("beforetoggle", l), w("toggle", l), Oe(l, "popover", u);
                break;
            case "xlinkActuate":
                Mt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
                break;
            case "xlinkArcrole":
                Mt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
                break;
            case "xlinkRole":
                Mt(l, "http://www.w3.org/1999/xlink", "xlink:role", u);
                break;
            case "xlinkShow":
                Mt(l, "http://www.w3.org/1999/xlink", "xlink:show", u);
                break;
            case "xlinkTitle":
                Mt(l, "http://www.w3.org/1999/xlink", "xlink:title", u);
                break;
            case "xlinkType":
                Mt(l, "http://www.w3.org/1999/xlink", "xlink:type", u);
                break;
            case "xmlBase":
                Mt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
                break;
            case "xmlLang":
                Mt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
                break;
            case "xmlSpace":
                Mt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
                break;
            case "is":
                Oe(l, "is", u);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < a.length) ||
                    (a[0] !== "o" && a[0] !== "O") ||
                    (a[1] !== "n" && a[1] !== "N")) &&
                    ((a = Bd.get(a) || a), Oe(l, a, u));
        }
    }
    function Yc(l, t, a, u, e, n) {
        switch (a) {
            case "style":
                Uf(l, u, n);
                break;
            case "dangerouslySetInnerHTML":
                if (u != null) {
                    if (typeof u != "object" || !("__html" in u))
                        throw Error(v(61));
                    if (((a = u.__html), a != null)) {
                        if (e.children != null) throw Error(v(60));
                        l.innerHTML = a;
                    }
                }
                break;
            case "children":
                typeof u == "string"
                    ? La(l, u)
                    : (typeof u == "number" || typeof u == "bigint") &&
                      La(l, "" + u);
                break;
            case "onScroll":
                u != null && w("scroll", l);
                break;
            case "onScrollEnd":
                u != null && w("scrollend", l);
                break;
            case "onClick":
                u != null && (l.onclick = En);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                if (!Sf.hasOwnProperty(a))
                    l: {
                        if (
                            a[0] === "o" &&
                            a[1] === "n" &&
                            ((e = a.endsWith("Capture")),
                            (t = a.slice(2, e ? a.length - 7 : void 0)),
                            (n = l[Kl] || null),
                            (n = n != null ? n[a] : null),
                            typeof n == "function" &&
                                l.removeEventListener(t, n, e),
                            typeof u == "function")
                        ) {
                            typeof n != "function" &&
                                n !== null &&
                                (a in l
                                    ? (l[a] = null)
                                    : l.hasAttribute(a) &&
                                      l.removeAttribute(a)),
                                l.addEventListener(t, u, e);
                            break l;
                        }
                        a in l
                            ? (l[a] = u)
                            : u === !0
                            ? l.setAttribute(a, "")
                            : Oe(l, a, u);
                    }
        }
    }
    function ql(l, t, a) {
        switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                w("error", l), w("load", l);
                var u = !1,
                    e = !1,
                    n;
                for (n in a)
                    if (a.hasOwnProperty(n)) {
                        var i = a[n];
                        if (i != null)
                            switch (n) {
                                case "src":
                                    u = !0;
                                    break;
                                case "srcSet":
                                    e = !0;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    throw Error(v(137, t));
                                default:
                                    el(l, t, n, i, a, null);
                            }
                    }
                e && el(l, t, "srcSet", a.srcSet, a, null),
                    u && el(l, t, "src", a.src, a, null);
                return;
            case "input":
                w("invalid", l);
                var c = (n = i = e = null),
                    f = null,
                    h = null;
                for (u in a)
                    if (a.hasOwnProperty(u)) {
                        var g = a[u];
                        if (g != null)
                            switch (u) {
                                case "name":
                                    e = g;
                                    break;
                                case "type":
                                    i = g;
                                    break;
                                case "checked":
                                    f = g;
                                    break;
                                case "defaultChecked":
                                    h = g;
                                    break;
                                case "value":
                                    n = g;
                                    break;
                                case "defaultValue":
                                    c = g;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    if (g != null) throw Error(v(137, t));
                                    break;
                                default:
                                    el(l, t, u, g, a, null);
                            }
                    }
                pf(l, n, c, f, h, i, e, !1), De(l);
                return;
            case "select":
                w("invalid", l), (u = i = n = null);
                for (e in a)
                    if (a.hasOwnProperty(e) && ((c = a[e]), c != null))
                        switch (e) {
                            case "value":
                                n = c;
                                break;
                            case "defaultValue":
                                i = c;
                                break;
                            case "multiple":
                                u = c;
                            default:
                                el(l, t, e, c, a, null);
                        }
                (t = n),
                    (a = i),
                    (l.multiple = !!u),
                    t != null
                        ? Va(l, !!u, t, !1)
                        : a != null && Va(l, !!u, a, !0);
                return;
            case "textarea":
                w("invalid", l), (n = e = u = null);
                for (i in a)
                    if (a.hasOwnProperty(i) && ((c = a[i]), c != null))
                        switch (i) {
                            case "value":
                                u = c;
                                break;
                            case "defaultValue":
                                e = c;
                                break;
                            case "children":
                                n = c;
                                break;
                            case "dangerouslySetInnerHTML":
                                if (c != null) throw Error(v(91));
                                break;
                            default:
                                el(l, t, i, c, a, null);
                        }
                Mf(l, u, e, n), De(l);
                return;
            case "option":
                for (f in a)
                    if (a.hasOwnProperty(f) && ((u = a[f]), u != null))
                        switch (f) {
                            case "selected":
                                l.selected =
                                    u &&
                                    typeof u != "function" &&
                                    typeof u != "symbol";
                                break;
                            default:
                                el(l, t, f, u, a, null);
                        }
                return;
            case "dialog":
                w("beforetoggle", l),
                    w("toggle", l),
                    w("cancel", l),
                    w("close", l);
                break;
            case "iframe":
            case "object":
                w("load", l);
                break;
            case "video":
            case "audio":
                for (u = 0; u < fe.length; u++) w(fe[u], l);
                break;
            case "image":
                w("error", l), w("load", l);
                break;
            case "details":
                w("toggle", l);
                break;
            case "embed":
            case "source":
            case "link":
                w("error", l), w("load", l);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (h in a)
                    if (a.hasOwnProperty(h) && ((u = a[h]), u != null))
                        switch (h) {
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(v(137, t));
                            default:
                                el(l, t, h, u, a, null);
                        }
                return;
            default:
                if (Fn(t)) {
                    for (g in a)
                        a.hasOwnProperty(g) &&
                            ((u = a[g]),
                            u !== void 0 && Yc(l, t, g, u, a, void 0));
                    return;
                }
        }
        for (c in a)
            a.hasOwnProperty(c) &&
                ((u = a[c]), u != null && el(l, t, c, u, a, null));
    }
    function n0(l, t, a, u) {
        switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "input":
                var e = null,
                    n = null,
                    i = null,
                    c = null,
                    f = null,
                    h = null,
                    g = null;
                for (m in a) {
                    var A = a[m];
                    if (a.hasOwnProperty(m) && A != null)
                        switch (m) {
                            case "checked":
                                break;
                            case "value":
                                break;
                            case "defaultValue":
                                f = A;
                            default:
                                u.hasOwnProperty(m) || el(l, t, m, null, u, A);
                        }
                }
                for (var y in u) {
                    var m = u[y];
                    if (
                        ((A = a[y]),
                        u.hasOwnProperty(y) && (m != null || A != null))
                    )
                        switch (y) {
                            case "type":
                                n = m;
                                break;
                            case "name":
                                e = m;
                                break;
                            case "checked":
                                h = m;
                                break;
                            case "defaultChecked":
                                g = m;
                                break;
                            case "value":
                                i = m;
                                break;
                            case "defaultValue":
                                c = m;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (m != null) throw Error(v(137, t));
                                break;
                            default:
                                m !== A && el(l, t, y, m, u, A);
                        }
                }
                $n(l, i, c, f, h, g, n, e);
                return;
            case "select":
                m = i = c = y = null;
                for (n in a)
                    if (((f = a[n]), a.hasOwnProperty(n) && f != null))
                        switch (n) {
                            case "value":
                                break;
                            case "multiple":
                                m = f;
                            default:
                                u.hasOwnProperty(n) || el(l, t, n, null, u, f);
                        }
                for (e in u)
                    if (
                        ((n = u[e]),
                        (f = a[e]),
                        u.hasOwnProperty(e) && (n != null || f != null))
                    )
                        switch (e) {
                            case "value":
                                y = n;
                                break;
                            case "defaultValue":
                                c = n;
                                break;
                            case "multiple":
                                i = n;
                            default:
                                n !== f && el(l, t, e, n, u, f);
                        }
                (t = c),
                    (a = i),
                    (u = m),
                    y != null
                        ? Va(l, !!a, y, !1)
                        : !!u != !!a &&
                          (t != null
                              ? Va(l, !!a, t, !0)
                              : Va(l, !!a, a ? [] : "", !1));
                return;
            case "textarea":
                m = y = null;
                for (c in a)
                    if (
                        ((e = a[c]),
                        a.hasOwnProperty(c) &&
                            e != null &&
                            !u.hasOwnProperty(c))
                    )
                        switch (c) {
                            case "value":
                                break;
                            case "children":
                                break;
                            default:
                                el(l, t, c, null, u, e);
                        }
                for (i in u)
                    if (
                        ((e = u[i]),
                        (n = a[i]),
                        u.hasOwnProperty(i) && (e != null || n != null))
                    )
                        switch (i) {
                            case "value":
                                y = e;
                                break;
                            case "defaultValue":
                                m = e;
                                break;
                            case "children":
                                break;
                            case "dangerouslySetInnerHTML":
                                if (e != null) throw Error(v(91));
                                break;
                            default:
                                e !== n && el(l, t, i, e, u, n);
                        }
                Of(l, y, m);
                return;
            case "option":
                for (var Y in a)
                    if (
                        ((y = a[Y]),
                        a.hasOwnProperty(Y) &&
                            y != null &&
                            !u.hasOwnProperty(Y))
                    )
                        switch (Y) {
                            case "selected":
                                l.selected = !1;
                                break;
                            default:
                                el(l, t, Y, null, u, y);
                        }
                for (f in u)
                    if (
                        ((y = u[f]),
                        (m = a[f]),
                        u.hasOwnProperty(f) &&
                            y !== m &&
                            (y != null || m != null))
                    )
                        switch (f) {
                            case "selected":
                                l.selected =
                                    y &&
                                    typeof y != "function" &&
                                    typeof y != "symbol";
                                break;
                            default:
                                el(l, t, f, y, u, m);
                        }
                return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
                for (var H in a)
                    (y = a[H]),
                        a.hasOwnProperty(H) &&
                            y != null &&
                            !u.hasOwnProperty(H) &&
                            el(l, t, H, null, u, y);
                for (h in u)
                    if (
                        ((y = u[h]),
                        (m = a[h]),
                        u.hasOwnProperty(h) &&
                            y !== m &&
                            (y != null || m != null))
                    )
                        switch (h) {
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (y != null) throw Error(v(137, t));
                                break;
                            default:
                                el(l, t, h, y, u, m);
                        }
                return;
            default:
                if (Fn(t)) {
                    for (var nl in a)
                        (y = a[nl]),
                            a.hasOwnProperty(nl) &&
                                y !== void 0 &&
                                !u.hasOwnProperty(nl) &&
                                Yc(l, t, nl, void 0, u, y);
                    for (g in u)
                        (y = u[g]),
                            (m = a[g]),
                            !u.hasOwnProperty(g) ||
                                y === m ||
                                (y === void 0 && m === void 0) ||
                                Yc(l, t, g, y, u, m);
                    return;
                }
        }
        for (var r in a)
            (y = a[r]),
                a.hasOwnProperty(r) &&
                    y != null &&
                    !u.hasOwnProperty(r) &&
                    el(l, t, r, null, u, y);
        for (A in u)
            (y = u[A]),
                (m = a[A]),
                !u.hasOwnProperty(A) ||
                    y === m ||
                    (y == null && m == null) ||
                    el(l, t, A, y, u, m);
    }
    var xc = null,
        jc = null;
    function zn(l) {
        return l.nodeType === 9 ? l : l.ownerDocument;
    }
    function Ur(l) {
        switch (l) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0;
        }
    }
    function Rr(l, t) {
        if (l === 0)
            switch (t) {
                case "svg":
                    return 1;
                case "math":
                    return 2;
                default:
                    return 0;
            }
        return l === 1 && t === "foreignObject" ? 0 : l;
    }
    function Gc(l, t) {
        return (
            l === "textarea" ||
            l === "noscript" ||
            typeof t.children == "string" ||
            typeof t.children == "number" ||
            typeof t.children == "bigint" ||
            (typeof t.dangerouslySetInnerHTML == "object" &&
                t.dangerouslySetInnerHTML !== null &&
                t.dangerouslySetInnerHTML.__html != null)
        );
    }
    var Xc = null;
    function i0() {
        var l = window.event;
        return l && l.type === "popstate"
            ? l === Xc
                ? !1
                : ((Xc = l), !0)
            : ((Xc = null), !1);
    }
    var Nr = typeof setTimeout == "function" ? setTimeout : void 0,
        c0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Hr = typeof Promise == "function" ? Promise : void 0,
        f0 =
            typeof queueMicrotask == "function"
                ? queueMicrotask
                : typeof Hr < "u"
                ? function (l) {
                      return Hr.resolve(null).then(l).catch(s0);
                  }
                : Nr;
    function s0(l) {
        setTimeout(function () {
            throw l;
        });
    }
    function oa(l) {
        return l === "head";
    }
    function qr(l, t) {
        var a = t,
            u = 0,
            e = 0;
        do {
            var n = a.nextSibling;
            if ((l.removeChild(a), n && n.nodeType === 8))
                if (((a = n.data), a === "/$")) {
                    if (0 < u && 8 > u) {
                        a = u;
                        var i = l.ownerDocument;
                        if (
                            (a & 1 && oe(i.documentElement),
                            a & 2 && oe(i.body),
                            a & 4)
                        )
                            for (a = i.head, oe(a), i = a.firstChild; i; ) {
                                var c = i.nextSibling,
                                    f = i.nodeName;
                                i[pu] ||
                                    f === "SCRIPT" ||
                                    f === "STYLE" ||
                                    (f === "LINK" &&
                                        i.rel.toLowerCase() === "stylesheet") ||
                                    a.removeChild(i),
                                    (i = c);
                            }
                    }
                    if (e === 0) {
                        l.removeChild(n), Se(t);
                        return;
                    }
                    e--;
                } else
                    a === "$" || a === "$?" || a === "$!"
                        ? e++
                        : (u = a.charCodeAt(0) - 48);
            else u = 0;
            a = n;
        } while (a);
        Se(t);
    }
    function Qc(l) {
        var t = l.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var a = t;
            switch (((t = t.nextSibling), a.nodeName)) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    Qc(a), Kn(a);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (a.rel.toLowerCase() === "stylesheet") continue;
            }
            l.removeChild(a);
        }
    }
    function o0(l, t, a, u) {
        for (; l.nodeType === 1; ) {
            var e = a;
            if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden"))
                    break;
            } else if (u) {
                if (!l[pu])
                    switch (t) {
                        case "meta":
                            if (!l.hasAttribute("itemprop")) break;
                            return l;
                        case "link":
                            if (
                                ((n = l.getAttribute("rel")),
                                n === "stylesheet" &&
                                    l.hasAttribute("data-precedence"))
                            )
                                break;
                            if (
                                n !== e.rel ||
                                l.getAttribute("href") !==
                                    (e.href == null || e.href === ""
                                        ? null
                                        : e.href) ||
                                l.getAttribute("crossorigin") !==
                                    (e.crossOrigin == null
                                        ? null
                                        : e.crossOrigin) ||
                                l.getAttribute("title") !==
                                    (e.title == null ? null : e.title)
                            )
                                break;
                            return l;
                        case "style":
                            if (l.hasAttribute("data-precedence")) break;
                            return l;
                        case "script":
                            if (
                                ((n = l.getAttribute("src")),
                                (n !== (e.src == null ? null : e.src) ||
                                    l.getAttribute("type") !==
                                        (e.type == null ? null : e.type) ||
                                    l.getAttribute("crossorigin") !==
                                        (e.crossOrigin == null
                                            ? null
                                            : e.crossOrigin)) &&
                                    n &&
                                    l.hasAttribute("async") &&
                                    !l.hasAttribute("itemprop"))
                            )
                                break;
                            return l;
                        default:
                            return l;
                    }
            } else if (t === "input" && l.type === "hidden") {
                var n = e.name == null ? null : "" + e.name;
                if (e.type === "hidden" && l.getAttribute("name") === n)
                    return l;
            } else return l;
            if (((l = St(l.nextSibling)), l === null)) break;
        }
        return null;
    }
    function r0(l, t, a) {
        if (t === "") return null;
        for (; l.nodeType !== 3; )
            if (
                ((l.nodeType !== 1 ||
                    l.nodeName !== "INPUT" ||
                    l.type !== "hidden") &&
                    !a) ||
                ((l = St(l.nextSibling)), l === null)
            )
                return null;
        return l;
    }
    function Cc(l) {
        return (
            l.data === "$!" ||
            (l.data === "$?" && l.ownerDocument.readyState === "complete")
        );
    }
    function d0(l, t) {
        var a = l.ownerDocument;
        if (l.data !== "$?" || a.readyState === "complete") t();
        else {
            var u = function () {
                t(), a.removeEventListener("DOMContentLoaded", u);
            };
            a.addEventListener("DOMContentLoaded", u), (l._reactRetry = u);
        }
    }
    function St(l) {
        for (; l != null; l = l.nextSibling) {
            var t = l.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (
                    ((t = l.data),
                    t === "$" ||
                        t === "$!" ||
                        t === "$?" ||
                        t === "F!" ||
                        t === "F")
                )
                    break;
                if (t === "/$") return null;
            }
        }
        return l;
    }
    var Zc = null;
    function Br(l) {
        l = l.previousSibling;
        for (var t = 0; l; ) {
            if (l.nodeType === 8) {
                var a = l.data;
                if (a === "$" || a === "$!" || a === "$?") {
                    if (t === 0) return l;
                    t--;
                } else a === "/$" && t++;
            }
            l = l.previousSibling;
        }
        return null;
    }
    function Yr(l, t, a) {
        switch (((t = zn(a)), l)) {
            case "html":
                if (((l = t.documentElement), !l)) throw Error(v(452));
                return l;
            case "head":
                if (((l = t.head), !l)) throw Error(v(453));
                return l;
            case "body":
                if (((l = t.body), !l)) throw Error(v(454));
                return l;
            default:
                throw Error(v(451));
        }
    }
    function oe(l) {
        for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
        Kn(l);
    }
    var vt = new Map(),
        xr = new Set();
    function pn(l) {
        return typeof l.getRootNode == "function"
            ? l.getRootNode()
            : l.nodeType === 9
            ? l
            : l.ownerDocument;
    }
    var Ct = p.d;
    p.d = { f: h0, r: y0, D: v0, C: m0, L: g0, m: S0, X: A0, S: b0, M: T0 };
    function h0() {
        var l = Ct.f(),
            t = mn();
        return l || t;
    }
    function y0(l) {
        var t = Xa(l);
        t !== null && t.tag === 5 && t.type === "form" ? to(t) : Ct.r(l);
    }
    var bu = typeof document > "u" ? null : document;
    function jr(l, t, a) {
        var u = bu;
        if (u && typeof t == "string" && t) {
            var e = ft(t);
            (e = 'link[rel="' + l + '"][href="' + e + '"]'),
                typeof a == "string" && (e += '[crossorigin="' + a + '"]'),
                xr.has(e) ||
                    (xr.add(e),
                    (l = { rel: l, crossOrigin: a, href: t }),
                    u.querySelector(e) === null &&
                        ((t = u.createElement("link")),
                        ql(t, "link", l),
                        El(t),
                        u.head.appendChild(t)));
        }
    }
    function v0(l) {
        Ct.D(l), jr("dns-prefetch", l, null);
    }
    function m0(l, t) {
        Ct.C(l, t), jr("preconnect", l, t);
    }
    function g0(l, t, a) {
        Ct.L(l, t, a);
        var u = bu;
        if (u && l && t) {
            var e = 'link[rel="preload"][as="' + ft(t) + '"]';
            t === "image" && a && a.imageSrcSet
                ? ((e += '[imagesrcset="' + ft(a.imageSrcSet) + '"]'),
                  typeof a.imageSizes == "string" &&
                      (e += '[imagesizes="' + ft(a.imageSizes) + '"]'))
                : (e += '[href="' + ft(l) + '"]');
            var n = e;
            switch (t) {
                case "style":
                    n = Au(l);
                    break;
                case "script":
                    n = Tu(l);
            }
            vt.has(n) ||
                ((l = R(
                    {
                        rel: "preload",
                        href: t === "image" && a && a.imageSrcSet ? void 0 : l,
                        as: t,
                    },
                    a
                )),
                vt.set(n, l),
                u.querySelector(e) !== null ||
                    (t === "style" && u.querySelector(re(n))) ||
                    (t === "script" && u.querySelector(de(n))) ||
                    ((t = u.createElement("link")),
                    ql(t, "link", l),
                    El(t),
                    u.head.appendChild(t)));
        }
    }
    function S0(l, t) {
        Ct.m(l, t);
        var a = bu;
        if (a && l) {
            var u = t && typeof t.as == "string" ? t.as : "script",
                e =
                    'link[rel="modulepreload"][as="' +
                    ft(u) +
                    '"][href="' +
                    ft(l) +
                    '"]',
                n = e;
            switch (u) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    n = Tu(l);
            }
            if (
                !vt.has(n) &&
                ((l = R({ rel: "modulepreload", href: l }, t)),
                vt.set(n, l),
                a.querySelector(e) === null)
            ) {
                switch (u) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (a.querySelector(de(n))) return;
                }
                (u = a.createElement("link")),
                    ql(u, "link", l),
                    El(u),
                    a.head.appendChild(u);
            }
        }
    }
    function b0(l, t, a) {
        Ct.S(l, t, a);
        var u = bu;
        if (u && l) {
            var e = Qa(u).hoistableStyles,
                n = Au(l);
            t = t || "default";
            var i = e.get(n);
            if (!i) {
                var c = { loading: 0, preload: null };
                if ((i = u.querySelector(re(n)))) c.loading = 5;
                else {
                    (l = R(
                        { rel: "stylesheet", href: l, "data-precedence": t },
                        a
                    )),
                        (a = vt.get(n)) && Vc(l, a);
                    var f = (i = u.createElement("link"));
                    El(f),
                        ql(f, "link", l),
                        (f._p = new Promise(function (h, g) {
                            (f.onload = h), (f.onerror = g);
                        })),
                        f.addEventListener("load", function () {
                            c.loading |= 1;
                        }),
                        f.addEventListener("error", function () {
                            c.loading |= 2;
                        }),
                        (c.loading |= 4),
                        On(i, t, u);
                }
                (i = { type: "stylesheet", instance: i, count: 1, state: c }),
                    e.set(n, i);
            }
        }
    }
    function A0(l, t) {
        Ct.X(l, t);
        var a = bu;
        if (a && l) {
            var u = Qa(a).hoistableScripts,
                e = Tu(l),
                n = u.get(e);
            n ||
                ((n = a.querySelector(de(e))),
                n ||
                    ((l = R({ src: l, async: !0 }, t)),
                    (t = vt.get(e)) && Lc(l, t),
                    (n = a.createElement("script")),
                    El(n),
                    ql(n, "link", l),
                    a.head.appendChild(n)),
                (n = { type: "script", instance: n, count: 1, state: null }),
                u.set(e, n));
        }
    }
    function T0(l, t) {
        Ct.M(l, t);
        var a = bu;
        if (a && l) {
            var u = Qa(a).hoistableScripts,
                e = Tu(l),
                n = u.get(e);
            n ||
                ((n = a.querySelector(de(e))),
                n ||
                    ((l = R({ src: l, async: !0, type: "module" }, t)),
                    (t = vt.get(e)) && Lc(l, t),
                    (n = a.createElement("script")),
                    El(n),
                    ql(n, "link", l),
                    a.head.appendChild(n)),
                (n = { type: "script", instance: n, count: 1, state: null }),
                u.set(e, n));
        }
    }
    function Gr(l, t, a, u) {
        var e = (e = X.current) ? pn(e) : null;
        if (!e) throw Error(v(446));
        switch (l) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof a.precedence == "string" &&
                    typeof a.href == "string"
                    ? ((t = Au(a.href)),
                      (a = Qa(e).hoistableStyles),
                      (u = a.get(t)),
                      u ||
                          ((u = {
                              type: "style",
                              instance: null,
                              count: 0,
                              state: null,
                          }),
                          a.set(t, u)),
                      u)
                    : { type: "void", instance: null, count: 0, state: null };
            case "link":
                if (
                    a.rel === "stylesheet" &&
                    typeof a.href == "string" &&
                    typeof a.precedence == "string"
                ) {
                    l = Au(a.href);
                    var n = Qa(e).hoistableStyles,
                        i = n.get(l);
                    if (
                        (i ||
                            ((e = e.ownerDocument || e),
                            (i = {
                                type: "stylesheet",
                                instance: null,
                                count: 0,
                                state: { loading: 0, preload: null },
                            }),
                            n.set(l, i),
                            (n = e.querySelector(re(l))) &&
                                !n._p &&
                                ((i.instance = n), (i.state.loading = 5)),
                            vt.has(l) ||
                                ((a = {
                                    rel: "preload",
                                    as: "style",
                                    href: a.href,
                                    crossOrigin: a.crossOrigin,
                                    integrity: a.integrity,
                                    media: a.media,
                                    hrefLang: a.hrefLang,
                                    referrerPolicy: a.referrerPolicy,
                                }),
                                vt.set(l, a),
                                n || _0(e, l, a, i.state))),
                        t && u === null)
                    )
                        throw Error(v(528, ""));
                    return i;
                }
                if (t && u !== null) throw Error(v(529, ""));
                return null;
            case "script":
                return (
                    (t = a.async),
                    (a = a.src),
                    typeof a == "string" &&
                    t &&
                    typeof t != "function" &&
                    typeof t != "symbol"
                        ? ((t = Tu(a)),
                          (a = Qa(e).hoistableScripts),
                          (u = a.get(t)),
                          u ||
                              ((u = {
                                  type: "script",
                                  instance: null,
                                  count: 0,
                                  state: null,
                              }),
                              a.set(t, u)),
                          u)
                        : {
                              type: "void",
                              instance: null,
                              count: 0,
                              state: null,
                          }
                );
            default:
                throw Error(v(444, l));
        }
    }
    function Au(l) {
        return 'href="' + ft(l) + '"';
    }
    function re(l) {
        return 'link[rel="stylesheet"][' + l + "]";
    }
    function Xr(l) {
        return R({}, l, { "data-precedence": l.precedence, precedence: null });
    }
    function _0(l, t, a, u) {
        l.querySelector('link[rel="preload"][as="style"][' + t + "]")
            ? (u.loading = 1)
            : ((t = l.createElement("link")),
              (u.preload = t),
              t.addEventListener("load", function () {
                  return (u.loading |= 1);
              }),
              t.addEventListener("error", function () {
                  return (u.loading |= 2);
              }),
              ql(t, "link", a),
              El(t),
              l.head.appendChild(t));
    }
    function Tu(l) {
        return '[src="' + ft(l) + '"]';
    }
    function de(l) {
        return "script[async]" + l;
    }
    function Qr(l, t, a) {
        if ((t.count++, t.instance === null))
            switch (t.type) {
                case "style":
                    var u = l.querySelector(
                        'style[data-href~="' + ft(a.href) + '"]'
                    );
                    if (u) return (t.instance = u), El(u), u;
                    var e = R({}, a, {
                        "data-href": a.href,
                        "data-precedence": a.precedence,
                        href: null,
                        precedence: null,
                    });
                    return (
                        (u = (l.ownerDocument || l).createElement("style")),
                        El(u),
                        ql(u, "style", e),
                        On(u, a.precedence, l),
                        (t.instance = u)
                    );
                case "stylesheet":
                    e = Au(a.href);
                    var n = l.querySelector(re(e));
                    if (n)
                        return (
                            (t.state.loading |= 4), (t.instance = n), El(n), n
                        );
                    (u = Xr(a)),
                        (e = vt.get(e)) && Vc(u, e),
                        (n = (l.ownerDocument || l).createElement("link")),
                        El(n);
                    var i = n;
                    return (
                        (i._p = new Promise(function (c, f) {
                            (i.onload = c), (i.onerror = f);
                        })),
                        ql(n, "link", u),
                        (t.state.loading |= 4),
                        On(n, a.precedence, l),
                        (t.instance = n)
                    );
                case "script":
                    return (
                        (n = Tu(a.src)),
                        (e = l.querySelector(de(n)))
                            ? ((t.instance = e), El(e), e)
                            : ((u = a),
                              (e = vt.get(n)) && ((u = R({}, a)), Lc(u, e)),
                              (l = l.ownerDocument || l),
                              (e = l.createElement("script")),
                              El(e),
                              ql(e, "link", u),
                              l.head.appendChild(e),
                              (t.instance = e))
                    );
                case "void":
                    return null;
                default:
                    throw Error(v(443, t.type));
            }
        else
            t.type === "stylesheet" &&
                (t.state.loading & 4) === 0 &&
                ((u = t.instance),
                (t.state.loading |= 4),
                On(u, a.precedence, l));
        return t.instance;
    }
    function On(l, t, a) {
        for (
            var u = a.querySelectorAll(
                    'link[rel="stylesheet"][data-precedence],style[data-precedence]'
                ),
                e = u.length ? u[u.length - 1] : null,
                n = e,
                i = 0;
            i < u.length;
            i++
        ) {
            var c = u[i];
            if (c.dataset.precedence === t) n = c;
            else if (n !== e) break;
        }
        n
            ? n.parentNode.insertBefore(l, n.nextSibling)
            : ((t = a.nodeType === 9 ? a.head : a),
              t.insertBefore(l, t.firstChild));
    }
    function Vc(l, t) {
        l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
            l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
            l.title == null && (l.title = t.title);
    }
    function Lc(l, t) {
        l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
            l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
            l.integrity == null && (l.integrity = t.integrity);
    }
    var Mn = null;
    function Cr(l, t, a) {
        if (Mn === null) {
            var u = new Map(),
                e = (Mn = new Map());
            e.set(a, u);
        } else (e = Mn), (u = e.get(a)), u || ((u = new Map()), e.set(a, u));
        if (u.has(l)) return u;
        for (
            u.set(l, null), a = a.getElementsByTagName(l), e = 0;
            e < a.length;
            e++
        ) {
            var n = a[e];
            if (
                !(
                    n[pu] ||
                    n[Gl] ||
                    (l === "link" && n.getAttribute("rel") === "stylesheet")
                ) &&
                n.namespaceURI !== "http://www.w3.org/2000/svg"
            ) {
                var i = n.getAttribute(t) || "";
                i = l + i;
                var c = u.get(i);
                c ? c.push(n) : u.set(i, [n]);
            }
        }
        return u;
    }
    function Zr(l, t, a) {
        (l = l.ownerDocument || l),
            l.head.insertBefore(
                a,
                t === "title" ? l.querySelector("head > title") : null
            );
    }
    function E0(l, t, a) {
        if (a === 1 || t.itemProp != null) return !1;
        switch (l) {
            case "meta":
            case "title":
                return !0;
            case "style":
                if (
                    typeof t.precedence != "string" ||
                    typeof t.href != "string" ||
                    t.href === ""
                )
                    break;
                return !0;
            case "link":
                if (
                    typeof t.rel != "string" ||
                    typeof t.href != "string" ||
                    t.href === "" ||
                    t.onLoad ||
                    t.onError
                )
                    break;
                switch (t.rel) {
                    case "stylesheet":
                        return (
                            (l = t.disabled),
                            typeof t.precedence == "string" && l == null
                        );
                    default:
                        return !0;
                }
            case "script":
                if (
                    t.async &&
                    typeof t.async != "function" &&
                    typeof t.async != "symbol" &&
                    !t.onLoad &&
                    !t.onError &&
                    t.src &&
                    typeof t.src == "string"
                )
                    return !0;
        }
        return !1;
    }
    function Vr(l) {
        return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
    }
    var he = null;
    function z0() {}
    function p0(l, t, a) {
        if (he === null) throw Error(v(475));
        var u = he;
        if (
            t.type === "stylesheet" &&
            (typeof a.media != "string" ||
                matchMedia(a.media).matches !== !1) &&
            (t.state.loading & 4) === 0
        ) {
            if (t.instance === null) {
                var e = Au(a.href),
                    n = l.querySelector(re(e));
                if (n) {
                    (l = n._p),
                        l !== null &&
                            typeof l == "object" &&
                            typeof l.then == "function" &&
                            (u.count++, (u = Dn.bind(u)), l.then(u, u)),
                        (t.state.loading |= 4),
                        (t.instance = n),
                        El(n);
                    return;
                }
                (n = l.ownerDocument || l),
                    (a = Xr(a)),
                    (e = vt.get(e)) && Vc(a, e),
                    (n = n.createElement("link")),
                    El(n);
                var i = n;
                (i._p = new Promise(function (c, f) {
                    (i.onload = c), (i.onerror = f);
                })),
                    ql(n, "link", a),
                    (t.instance = n);
            }
            u.stylesheets === null && (u.stylesheets = new Map()),
                u.stylesheets.set(t, l),
                (l = t.state.preload) &&
                    (t.state.loading & 3) === 0 &&
                    (u.count++,
                    (t = Dn.bind(u)),
                    l.addEventListener("load", t),
                    l.addEventListener("error", t));
        }
    }
    function O0() {
        if (he === null) throw Error(v(475));
        var l = he;
        return (
            l.stylesheets && l.count === 0 && Kc(l, l.stylesheets),
            0 < l.count
                ? function (t) {
                      var a = setTimeout(function () {
                          if (
                              (l.stylesheets && Kc(l, l.stylesheets),
                              l.unsuspend)
                          ) {
                              var u = l.unsuspend;
                              (l.unsuspend = null), u();
                          }
                      }, 6e4);
                      return (
                          (l.unsuspend = t),
                          function () {
                              (l.unsuspend = null), clearTimeout(a);
                          }
                      );
                  }
                : null
        );
    }
    function Dn() {
        if ((this.count--, this.count === 0)) {
            if (this.stylesheets) Kc(this, this.stylesheets);
            else if (this.unsuspend) {
                var l = this.unsuspend;
                (this.unsuspend = null), l();
            }
        }
    }
    var Un = null;
    function Kc(l, t) {
        (l.stylesheets = null),
            l.unsuspend !== null &&
                (l.count++,
                (Un = new Map()),
                t.forEach(M0, l),
                (Un = null),
                Dn.call(l));
    }
    function M0(l, t) {
        if (!(t.state.loading & 4)) {
            var a = Un.get(l);
            if (a) var u = a.get(null);
            else {
                (a = new Map()), Un.set(l, a);
                for (
                    var e = l.querySelectorAll(
                            "link[data-precedence],style[data-precedence]"
                        ),
                        n = 0;
                    n < e.length;
                    n++
                ) {
                    var i = e[n];
                    (i.nodeName === "LINK" ||
                        i.getAttribute("media") !== "not all") &&
                        (a.set(i.dataset.precedence, i), (u = i));
                }
                u && a.set(null, u);
            }
            (e = t.instance),
                (i = e.getAttribute("data-precedence")),
                (n = a.get(i) || u),
                n === u && a.set(null, e),
                a.set(i, e),
                this.count++,
                (u = Dn.bind(this)),
                e.addEventListener("load", u),
                e.addEventListener("error", u),
                n
                    ? n.parentNode.insertBefore(e, n.nextSibling)
                    : ((l = l.nodeType === 9 ? l.head : l),
                      l.insertBefore(e, l.firstChild)),
                (t.state.loading |= 4);
        }
    }
    var ye = {
        $$typeof: Al,
        Provider: null,
        Consumer: null,
        _currentValue: B,
        _currentValue2: B,
        _threadCount: 0,
    };
    function D0(l, t, a, u, e, n, i, c) {
        (this.tag = 1),
            (this.containerInfo = l),
            (this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.callbackNode =
                this.next =
                this.pendingContext =
                this.context =
                this.cancelPendingCommit =
                    null),
            (this.callbackPriority = 0),
            (this.expirationTimes = Cn(-1)),
            (this.entangledLanes =
                this.shellSuspendCounter =
                this.errorRecoveryDisabledLanes =
                this.expiredLanes =
                this.warmLanes =
                this.pingedLanes =
                this.suspendedLanes =
                this.pendingLanes =
                    0),
            (this.entanglements = Cn(0)),
            (this.hiddenUpdates = Cn(null)),
            (this.identifierPrefix = u),
            (this.onUncaughtError = e),
            (this.onCaughtError = n),
            (this.onRecoverableError = i),
            (this.pooledCache = null),
            (this.pooledCacheLanes = 0),
            (this.formState = c),
            (this.incompleteTransitions = new Map());
    }
    function Lr(l, t, a, u, e, n, i, c, f, h, g, A) {
        return (
            (l = new D0(l, t, a, i, c, f, h, A)),
            (t = 1),
            n === !0 && (t |= 24),
            (n = tt(3, null, null, t)),
            (l.current = n),
            (n.stateNode = l),
            (t = Oi()),
            t.refCount++,
            (l.pooledCache = t),
            t.refCount++,
            (n.memoizedState = { element: u, isDehydrated: a, cache: t }),
            Ri(n),
            l
        );
    }
    function Kr(l) {
        return l ? ((l = Ia), l) : Ia;
    }
    function wr(l, t, a, u, e, n) {
        (e = Kr(e)),
            u.context === null ? (u.context = e) : (u.pendingContext = e),
            (u = Ft(t)),
            (u.payload = { element: a }),
            (n = n === void 0 ? null : n),
            n !== null && (u.callback = n),
            (a = It(l, u, t)),
            a !== null && (it(a, l, t), Lu(a, l, t));
    }
    function Jr(l, t) {
        if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
            var a = l.retryLane;
            l.retryLane = a !== 0 && a < t ? a : t;
        }
    }
    function wc(l, t) {
        Jr(l, t), (l = l.alternate) && Jr(l, t);
    }
    function kr(l) {
        if (l.tag === 13) {
            var t = Fa(l, 67108864);
            t !== null && it(t, l, 67108864), wc(l, 67108864);
        }
    }
    var Rn = !0;
    function U0(l, t, a, u) {
        var e = S.T;
        S.T = null;
        var n = p.p;
        try {
            (p.p = 2), Jc(l, t, a, u);
        } finally {
            (p.p = n), (S.T = e);
        }
    }
    function R0(l, t, a, u) {
        var e = S.T;
        S.T = null;
        var n = p.p;
        try {
            (p.p = 8), Jc(l, t, a, u);
        } finally {
            (p.p = n), (S.T = e);
        }
    }
    function Jc(l, t, a, u) {
        if (Rn) {
            var e = kc(u);
            if (e === null) Bc(l, t, u, Nn, a), Wr(l, u);
            else if (H0(e, l, t, a, u)) u.stopPropagation();
            else if ((Wr(l, u), t & 4 && -1 < N0.indexOf(l))) {
                for (; e !== null; ) {
                    var n = Xa(e);
                    if (n !== null)
                        switch (n.tag) {
                            case 3:
                                if (
                                    ((n = n.stateNode),
                                    n.current.memoizedState.isDehydrated)
                                ) {
                                    var i = Sa(n.pendingLanes);
                                    if (i !== 0) {
                                        var c = n;
                                        for (
                                            c.pendingLanes |= 2,
                                                c.entangledLanes |= 2;
                                            i;

                                        ) {
                                            var f = 1 << (31 - Pl(i));
                                            (c.entanglements[1] |= f),
                                                (i &= ~f);
                                        }
                                        zt(n),
                                            (P & 6) === 0 &&
                                                ((yn = bt() + 500), ce(0));
                                    }
                                }
                                break;
                            case 13:
                                (c = Fa(n, 2)),
                                    c !== null && it(c, n, 2),
                                    mn(),
                                    wc(n, 2);
                        }
                    if (
                        ((n = kc(u)), n === null && Bc(l, t, u, Nn, a), n === e)
                    )
                        break;
                    e = n;
                }
                e !== null && u.stopPropagation();
            } else Bc(l, t, u, null, a);
        }
    }
    function kc(l) {
        return (l = Pn(l)), $c(l);
    }
    var Nn = null;
    function $c(l) {
        if (((Nn = null), (l = Ga(l)), l !== null)) {
            var t = G(l);
            if (t === null) l = null;
            else {
                var a = t.tag;
                if (a === 13) {
                    if (((l = I(t)), l !== null)) return l;
                    l = null;
                } else if (a === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return t.tag === 3 ? t.stateNode.containerInfo : null;
                    l = null;
                } else t !== l && (l = null);
            }
        }
        return (Nn = l), null;
    }
    function $r(l) {
        switch (l) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch (md()) {
                    case ff:
                        return 2;
                    case sf:
                        return 8;
                    case _e:
                    case gd:
                        return 32;
                    case of:
                        return 268435456;
                    default:
                        return 32;
                }
            default:
                return 32;
        }
    }
    var Wc = !1,
        ra = null,
        da = null,
        ha = null,
        ve = new Map(),
        me = new Map(),
        ya = [],
        N0 =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
                " "
            );
    function Wr(l, t) {
        switch (l) {
            case "focusin":
            case "focusout":
                ra = null;
                break;
            case "dragenter":
            case "dragleave":
                da = null;
                break;
            case "mouseover":
            case "mouseout":
                ha = null;
                break;
            case "pointerover":
            case "pointerout":
                ve.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                me.delete(t.pointerId);
        }
    }
    function ge(l, t, a, u, e, n) {
        return l === null || l.nativeEvent !== n
            ? ((l = {
                  blockedOn: t,
                  domEventName: a,
                  eventSystemFlags: u,
                  nativeEvent: n,
                  targetContainers: [e],
              }),
              t !== null && ((t = Xa(t)), t !== null && kr(t)),
              l)
            : ((l.eventSystemFlags |= u),
              (t = l.targetContainers),
              e !== null && t.indexOf(e) === -1 && t.push(e),
              l);
    }
    function H0(l, t, a, u, e) {
        switch (t) {
            case "focusin":
                return (ra = ge(ra, l, t, a, u, e)), !0;
            case "dragenter":
                return (da = ge(da, l, t, a, u, e)), !0;
            case "mouseover":
                return (ha = ge(ha, l, t, a, u, e)), !0;
            case "pointerover":
                var n = e.pointerId;
                return ve.set(n, ge(ve.get(n) || null, l, t, a, u, e)), !0;
            case "gotpointercapture":
                return (
                    (n = e.pointerId),
                    me.set(n, ge(me.get(n) || null, l, t, a, u, e)),
                    !0
                );
        }
        return !1;
    }
    function Fr(l) {
        var t = Ga(l.target);
        if (t !== null) {
            var a = G(t);
            if (a !== null) {
                if (((t = a.tag), t === 13)) {
                    if (((t = I(a)), t !== null)) {
                        (l.blockedOn = t),
                            pd(l.priority, function () {
                                if (a.tag === 13) {
                                    var u = nt();
                                    u = Zn(u);
                                    var e = Fa(a, u);
                                    e !== null && it(e, a, u), wc(a, u);
                                }
                            });
                        return;
                    }
                } else if (
                    t === 3 &&
                    a.stateNode.current.memoizedState.isDehydrated
                ) {
                    l.blockedOn =
                        a.tag === 3 ? a.stateNode.containerInfo : null;
                    return;
                }
            }
        }
        l.blockedOn = null;
    }
    function Hn(l) {
        if (l.blockedOn !== null) return !1;
        for (var t = l.targetContainers; 0 < t.length; ) {
            var a = kc(l.nativeEvent);
            if (a === null) {
                a = l.nativeEvent;
                var u = new a.constructor(a.type, a);
                (In = u), a.target.dispatchEvent(u), (In = null);
            } else
                return (t = Xa(a)), t !== null && kr(t), (l.blockedOn = a), !1;
            t.shift();
        }
        return !0;
    }
    function Ir(l, t, a) {
        Hn(l) && a.delete(t);
    }
    function q0() {
        (Wc = !1),
            ra !== null && Hn(ra) && (ra = null),
            da !== null && Hn(da) && (da = null),
            ha !== null && Hn(ha) && (ha = null),
            ve.forEach(Ir),
            me.forEach(Ir);
    }
    function qn(l, t) {
        l.blockedOn === t &&
            ((l.blockedOn = null),
            Wc ||
                ((Wc = !0),
                E.unstable_scheduleCallback(E.unstable_NormalPriority, q0)));
    }
    var Bn = null;
    function Pr(l) {
        Bn !== l &&
            ((Bn = l),
            E.unstable_scheduleCallback(E.unstable_NormalPriority, function () {
                Bn === l && (Bn = null);
                for (var t = 0; t < l.length; t += 3) {
                    var a = l[t],
                        u = l[t + 1],
                        e = l[t + 2];
                    if (typeof u != "function") {
                        if ($c(u || a) === null) continue;
                        break;
                    }
                    var n = Xa(a);
                    n !== null &&
                        (l.splice(t, 3),
                        (t -= 3),
                        $i(
                            n,
                            {
                                pending: !0,
                                data: e,
                                method: a.method,
                                action: u,
                            },
                            u,
                            e
                        ));
                }
            }));
    }
    function Se(l) {
        function t(f) {
            return qn(f, l);
        }
        ra !== null && qn(ra, l),
            da !== null && qn(da, l),
            ha !== null && qn(ha, l),
            ve.forEach(t),
            me.forEach(t);
        for (var a = 0; a < ya.length; a++) {
            var u = ya[a];
            u.blockedOn === l && (u.blockedOn = null);
        }
        for (; 0 < ya.length && ((a = ya[0]), a.blockedOn === null); )
            Fr(a), a.blockedOn === null && ya.shift();
        if (((a = (l.ownerDocument || l).$$reactFormReplay), a != null))
            for (u = 0; u < a.length; u += 3) {
                var e = a[u],
                    n = a[u + 1],
                    i = e[Kl] || null;
                if (typeof n == "function") i || Pr(a);
                else if (i) {
                    var c = null;
                    if (n && n.hasAttribute("formAction")) {
                        if (((e = n), (i = n[Kl] || null))) c = i.formAction;
                        else if ($c(e) !== null) continue;
                    } else c = i.action;
                    typeof c == "function"
                        ? (a[u + 1] = c)
                        : (a.splice(u, 3), (u -= 3)),
                        Pr(a);
                }
            }
    }
    function Fc(l) {
        this._internalRoot = l;
    }
    (Yn.prototype.render = Fc.prototype.render =
        function (l) {
            var t = this._internalRoot;
            if (t === null) throw Error(v(409));
            var a = t.current,
                u = nt();
            wr(a, u, l, t, null, null);
        }),
        (Yn.prototype.unmount = Fc.prototype.unmount =
            function () {
                var l = this._internalRoot;
                if (l !== null) {
                    this._internalRoot = null;
                    var t = l.containerInfo;
                    wr(l.current, 2, null, l, null, null), mn(), (t[ja] = null);
                }
            });
    function Yn(l) {
        this._internalRoot = l;
    }
    Yn.prototype.unstable_scheduleHydration = function (l) {
        if (l) {
            var t = vf();
            l = { blockedOn: null, target: l, priority: t };
            for (
                var a = 0;
                a < ya.length && t !== 0 && t < ya[a].priority;
                a++
            );
            ya.splice(a, 0, l), a === 0 && Fr(l);
        }
    };
    var ld = J.version;
    if (ld !== "19.1.0") throw Error(v(527, ld, "19.1.0"));
    p.findDOMNode = function (l) {
        var t = l._reactInternals;
        if (t === void 0)
            throw typeof l.render == "function"
                ? Error(v(188))
                : ((l = Object.keys(l).join(",")), Error(v(268, l)));
        return (
            (l = D(t)),
            (l = l !== null ? T(l) : null),
            (l = l === null ? null : l.stateNode),
            l
        );
    };
    var B0 = {
        bundleType: 0,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: S,
        reconcilerVersion: "19.1.0",
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var xn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!xn.isDisabled && xn.supportsFiber)
            try {
                (_u = xn.inject(B0)), (Il = xn);
            } catch {}
    }
    return (
        (Ae.createRoot = function (l, t) {
            if (!j(l)) throw Error(v(299));
            var a = !1,
                u = "",
                e = mo,
                n = go,
                i = So,
                c = null;
            return (
                t != null &&
                    (t.unstable_strictMode === !0 && (a = !0),
                    t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
                    t.onUncaughtError !== void 0 && (e = t.onUncaughtError),
                    t.onCaughtError !== void 0 && (n = t.onCaughtError),
                    t.onRecoverableError !== void 0 &&
                        (i = t.onRecoverableError),
                    t.unstable_transitionCallbacks !== void 0 &&
                        (c = t.unstable_transitionCallbacks)),
                (t = Lr(l, 1, !1, null, null, a, u, e, n, i, c, null)),
                (l[ja] = t.current),
                qc(l),
                new Fc(t)
            );
        }),
        (Ae.hydrateRoot = function (l, t, a) {
            if (!j(l)) throw Error(v(299));
            var u = !1,
                e = "",
                n = mo,
                i = go,
                c = So,
                f = null,
                h = null;
            return (
                a != null &&
                    (a.unstable_strictMode === !0 && (u = !0),
                    a.identifierPrefix !== void 0 && (e = a.identifierPrefix),
                    a.onUncaughtError !== void 0 && (n = a.onUncaughtError),
                    a.onCaughtError !== void 0 && (i = a.onCaughtError),
                    a.onRecoverableError !== void 0 &&
                        (c = a.onRecoverableError),
                    a.unstable_transitionCallbacks !== void 0 &&
                        (f = a.unstable_transitionCallbacks),
                    a.formState !== void 0 && (h = a.formState)),
                (t = Lr(l, 1, !0, t, a ?? null, u, e, n, i, c, f, h)),
                (t.context = Kr(null)),
                (a = t.current),
                (u = nt()),
                (u = Zn(u)),
                (e = Ft(u)),
                (e.callback = null),
                It(a, e, u),
                (a = u),
                (t.current.lanes = a),
                zu(t, a),
                zt(t),
                (l[ja] = t.current),
                qc(l),
                new Yn(t)
            );
        }),
        (Ae.version = "19.1.0"),
        Ae
    );
}
var od;
function L0() {
    if (od) return lf.exports;
    od = 1;
    function E() {
        if (
            !(
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
            )
        )
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E);
            } catch (J) {
                console.error(J);
            }
    }
    return E(), (lf.exports = V0()), lf.exports;
}
var K0 = L0();
const w0 = "_container_gumq0_1",
    J0 = "_mainContent_gumq0_53",
    k0 = "_promptContainer_gumq0_61",
    $0 = "_logoIcon_gumq0_73",
    W0 = "_promptBtn_gumq0_81",
    F0 = "_promptActions_gumq0_123",
    I0 = "_generateBtn_gumq0_137",
    P0 = "_galleryGrid_gumq0_247",
    Zt = {
        container: w0,
        mainContent: J0,
        promptContainer: k0,
        logoIcon: $0,
        promptBtn: W0,
        promptActions: F0,
        generateBtn: I0,
        galleryGrid: P0,
    },
    ly = "_spinner_1sg6m_1",
    ty = { spinner: ly };
function ay() {
    return x.jsx("div", { className: ty.spinner });
}
const uy = "_imgCard_1nnc2_1",
    ey = "_loading_1nnc2_1",
    ny = "_statusContainer_1nnc2_1",
    iy = "_statusText_1nnc2_65",
    cy = "_resultImg_1nnc2_75",
    fy = "_imgOverlay_1nnc2_79",
    sy = "_imgDownloadBtn_1nnc2_89",
    oy = "_logoIcon_1nnc2_225",
    pt = {
        imgCard: uy,
        loading: ey,
        statusContainer: ny,
        statusText: iy,
        resultImg: cy,
        imgOverlay: fy,
        imgDownloadBtn: sy,
        logoIcon: oy,
    };
function rd({ imgUrl: E, loading: J }) {
    return x.jsx(x.Fragment, {
        children: x.jsxs("div", {
            className: `
                    ${pt.imgCard} 
                    ${J && pt.loading} 
                    `,
            children: [
                x.jsxs("div", {
                    className: `${pt.statusContainer} ${pt.logoIcon}`,
                    children: [
                        x.jsx(ay, {}),
                        x.jsx("i", {
                            className: "fa-solid fa-triangle-exclamation",
                        }),
                        x.jsx("p", {
                            className: `${pt.statusText} ${pt.logoIcon}`,
                            children: "Генерация...",
                        }),
                    ],
                }),
                x.jsx("img", {
                    className: pt.resultImg,
                    src: E,
                    alt: "Сгенерировання картинка",
                }),
                x.jsx("div", {
                    className: pt.imgOverlay,
                    children: x.jsx("a", {
                        href: E,
                        download: `${Date.now()}.png`,
                        className: pt.imgDownloadBtn,
                        children: x.jsx("i", {
                            className: `fa-solid fa-download ${pt.logoIcon}`,
                        }),
                    }),
                }),
            ],
        }),
    });
}
const dd = [
        "A futuristic cyberpunk city at night, neon lights reflecting on wet streets, towering skyscrapers with holographic ads, a lone figure in a high-tech coat walking past neon signs, cinematic lighting, 8K ultra-detailed.",
        "A majestic dragon soaring over a medieval castle at sunset, its scales shimmering in gold and red, fiery breath illuminating the clouds, highly detailed fantasy art, dramatic composition.",
        "An adorable kitten wearing a tiny astronaut helmet, floating in zero gravity with stars and Earth visible through a spaceship window, Pixar-style 3D rendering, soft lighting.",
        "A serene Japanese garden in autumn, vibrant red maple leaves covering stone paths, a wooden bridge over a koi pond, soft sunlight filtering through trees, Studio Ghibli-inspired watercolor style.",
        "A post-apocalyptic wasteland with rusted cars and overgrown vegetation, a stormy sky casting eerie green light, a masked scavenger holding a makeshift weapon, photorealistic textures.",
        "A steampunk airship flying above Victorian London, intricate brass gears and smokestacks, passengers in goggles and corsets leaning over the railing, sepia-toned with cinematic depth.",
        "A mystical elf archer standing on a tree branch in an enchanted forest, glowing blue tattoos on her skin, aiming at an unseen target, magical particles floating around, digital painting.",
        "A surreal landscape where giant jellyfish float through a sky of liquid gold, upside-down mountains in the distance, dreamlike atmosphere, vibrant colors, art by Moebius.",
        "A cybernetic samurai with a glowing katana, standing in a neon-lit alley, rain falling slowly as his visor displays targeting data, hyper-realistic cyberpunk aesthetic.",
        "A cozy cabin in the snowy woods, smoke rising from the chimney, warm light glowing through windows, northern lights dancing in the starry sky, Disney-style illustration.",
        "A terrifying cosmic horror entity emerging from a black hole, tentacles made of galaxies, eyes like supernovae, Lovecraftian style, dark and intricate artwork.",
        "A bustling alien marketplace on a desert planet, exotic creatures bartering under twin suns, stalls with glowing crystals and strange artifacts, sci-fi realism.",
        "A warrior queen riding a armored war rhino through a battlefield, flaming arrows streaking across the sky, epic fantasy composition, inspired by Frank Frazetta.",
        "A tiny wizard's workshop hidden inside a giant pumpkin, shelves filled with potions and spellbooks, a black cat sleeping near a cauldron, whimsical detailed illustration.",
        "A lone cowboy riding through a desert canyon at dusk, silhouetted against a blood-red sky, tumbleweeds rolling past, ultra-wide cinematic shot, Red Dead Redemption vibes.",
        "A futuristic Tokyo street in 2150, flying cars between holographic billboards, a neon umbrella reflecting pink and blue lights, Blade Runner meets anime aesthetics.",
        "A mermaid with bioluminescent scales resting on a coral throne, schools of tropical fish swirling around her, sunbeams piercing the deep ocean, Disney princess realism.",
        "A haunted Victorian mansion covered in ivy, lightning striking behind its broken windows, a ghostly figure visible in the doorway, gothic horror atmosphere.",
        "A battle-hardered orc blacksmith forging a fiery axe in a volcano's heart, sweat dripping onto molten metal, dark fantasy realism, detailed armor textures.",
        "A robot farmer tending to a field of glowing plants under a purple sky, a small solar-powered drone watering crops, sci-fi utopian illustration.",
        "A time traveler in steampunk gear stepping out of a clockwork portal into ancient Egypt, pyramids under construction in the background, intricate mashup of eras.",
        "A phoenix reborn from golden ashes, wings spreading wide in a cathedral of fire, ultra-detailed feathers and dynamic flames, symbolic artwork.",
        "A secret library hidden inside a giant tree, spiral staircases leading to floating books, ancient runes glowing softly, magical academic core.",
        "A pirate ship trapped in a giant ice crystal, frozen mid-battle with skeletons clutching swords, eerie blue lighting, fantasy adventure concept.",
        "A cybernetic fox with LED-lined fur running through a digital forest, binary code falling like leaves, synthwave color palette, glitch art effects.",
        "A goddess of the cosmos wearing a dress made of constellations, holding a dying star in her palms, ethereal and melancholic space art.",
        "A wild west town invaded by aliens, cowboys hiding behind saloon doors as a UFO hovers overhead, retro sci-fi movie poster style.",
        "A crystal cave filled with giant glowing mushrooms, a subterranean lake reflecting bioluminescent light, fantasy exploration scene.",
        "A samurai fighting a skeleton army in a moonlit bamboo forest, cherry blossoms swirling in the air, dynamic ink painting style.",
        "A postcard-like view of Santorini with white buildings and blue domes, sunset painting the sky in pastel hues, photorealistic travel shot.",
        "A mad scientist's lab with bubbling test tubes, a Frankenstein monster under a sheet, lightning flashing outside the window, gothic horror comedy.",
        "A futuristic mech suit covered in jungle vines, abandoned for centuries, a small animal nesting in its cockpit, post-human world concept.",
        "A Viking funeral at sea, a burning longship drifting toward the horizon under the northern lights, emotional and cinematic composition.",
        "A magical girl transforming with sparkling ribbons and cosmic energy, anime-style action pose, vibrant magical effects.",
        "A dystopian megacity where the rich live in floating skyscrapers while the poor crowd the polluted streets below, social commentary art.",
        "A witch's apothecary with hanging herbs, jars of eyeballs, and a black cauldron simmering, dark academia aesthetic, highly detailed.",
        "A parallel universe where cats rule the world, wearing tiny crowns and holding court in a grand palace, humorous and whimsical.",
        "A lone astronaut standing on Mars, planting a flag next to the ruins of an ancient alien civilization, cinematic sci-fi realism.",
        "A fairy-tale wedding in an enchanted forest, deer with floral antlers attending, fireflies forming a chandelier, romantic Disney-esque scene.",
        "A noir detective in a trench coat investigating a crime scene with glowing cybernetic evidence, rain-soaked neon alley, cinematic lighting.",
        "A colossal kaiju attacking a futuristic city, fighter jets swarming around it like bees, Godzilla-inspired epic destruction.",
        "A dwarven miner discovering a cavern filled with glowing crystals and gold veins, fantasy adventure illustration.",
        "A surrealist painting where the sky is made of liquid mercury, fish swimming through clouds, Salvador Dali meets Hayao Miyazaki.",
        "A cyberpunk hacker girl with neon tattoos and augmented reality glasses, typing on a holographic keyboard, purple and pink lighting.",
        "A mummy awakening in a modern museum, bandages unraveling as it steps out of its sarcophagus, horror-comedy concept.",
        "A steampunk submarine exploring the depths of an alien ocean, crew in brass diving suits encountering bioluminescent creatures.",
        "A celestial wolf made of stars running across the Milky Way, cosmic dust trailing behind it, mystical astronomy art.",
        "A post-war paradise where nature reclaims abandoned tanks and buildings, deer grazing beside rusted war machines, hopeful dystopia.",
        "A legendary sword embedded in a stone, surrounded by cherry blossoms, waiting for the chosen one, epic fantasy symbolism.",
    ],
    ry = "_customSelect_14uqd_1",
    hd = { customSelect: ry };
function ef({ setSelect: E, value: J, selectName: Q, data: v }) {
    const j = (G) => {
        E(G.target.value);
    };
    return x.jsx("div", {
        className: hd.selectWrapper,
        children: x.jsx("select", {
            name: Q,
            className: hd.customSelect,
            required: !0,
            value: J,
            onChange: j,
            children: v.map((G, I) =>
                x.jsx(
                    "option",
                    { disabled: !I, value: G.value, children: G.title },
                    G.value
                )
            ),
        }),
    });
}
function nf({ children: E, func: J, type: Q = "button", className: v }) {
    return x.jsx(x.Fragment, {
        children: x.jsx("button", {
            onClick: J,
            type: Q,
            className: v,
            children: E,
        }),
    });
}
const dy = [
        { value: "", title: "Размер" },
        { value: "1/1", title: "Квадрат (1/1)" },
        { value: "16/9", title: "Пеизаж (16/9)" },
        { value: "9/16", title: "Портрет (9/16)" },
    ],
    hy = [
        { value: "0", title: "Колличество" },
        { value: "1", title: "1 картинка" },
        { value: "2", title: "2 картинки" },
        { value: "3", title: "3 картинки" },
        { value: "4", title: "4 картинки" },
    ],
    yy = [
        { value: "", title: "Выберети модель" },
        { value: "black-forest-labs/FLUX.1-schnell", title: "FLUX.1-schnell" },
        { value: "black-forest-labs/FLUX.1-dev", title: "FLUX.1-dev" },
        {
            value: "stabilityai/stable-diffusion-xl-base-1.0",
            title: "D-XL 1.0-base Model Card",
        },
    ],
    vy = (E, J = 512) => {
        const [Q, v] = E.split("/").map(Number),
            j = J / Math.sqrt(Q * v);
        let G = Math.round(Q * j),
            I = Math.round(v * j);
        return (
            (G = Math.floor(G / 16) * 16),
            (I = Math.floor(I / 16) * 16),
            { width: G, height: I }
        );
    },
    my = "_header_r9sc6_1",
    gy = "_logoWrapper_r9sc6_11",
    Sy = "_logo_r9sc6_11",
    by = "_logoIcon_r9sc6_49",
    Ay = "_title_r9sc6_57",
    Ty = "_sun_r9sc6_69",
    _y = "_moon_r9sc6_77",
    Ey = "_themeToggle_r9sc6_85",
    Vt = {
        header: my,
        logoWrapper: gy,
        logo: Sy,
        logoIcon: by,
        title: Ay,
        sun: Ty,
        moon: _y,
        themeToggle: Ey,
    };
function zy() {
    const [E, J] = Lt.useState(() => localStorage.getItem("theme") || "light");
    Lt.useEffect(() => {
        document.body.classList.toggle("darkTheme", E === "dark");
    }, [E]);
    const Q = () => {
        const v = E === "light" ? "dark" : "light";
        J(v), localStorage.setItem("theme", v);
    };
    return x.jsxs("div", {
        className: Vt.header,
        children: [
            x.jsxs("div", {
                className: Vt.logoWrapper,
                children: [
                    x.jsx("div", {
                        className: Vt.logo,
                        children: x.jsx("i", {
                            className: `fa-solid fa-wand-magic-sparkles ${Vt.logoIcon}`,
                        }),
                    }),
                    x.jsx("h1", {
                        className: Vt.title,
                        children: "Генератор картинок",
                    }),
                ],
            }),
            x.jsx(nf, {
                func: Q,
                className: Vt.themeToggle,
                children: x.jsx("i", {
                    className: `${
                        E == "light"
                            ? `fa-solid fa-sun ${Vt.sun}`
                            : `fa-solid fa-moon ${Vt.moon}`
                    } ${Vt.logoIcon}`,
                }),
            }),
        ],
    });
}
const py = "_promptInput_6baks_1",
    Oy = { promptInput: py };
function My({ name: E, prompt: J, setPrompt: Q, placeholderValue: v }) {
    const j = (G) => {
        Q(G.target.value);
    };
    return x.jsx(x.Fragment, {
        children: x.jsx("textarea", {
            name: E,
            placeholder: v,
            className: Oy.promptInput,
            required: !0,
            autoFocus: !0,
            value: J,
            onChange: j,
        }),
    });
}
function Dy() {
    const [E, J] = Lt.useState(""),
        [Q, v] = Lt.useState("0"),
        [j, G] = Lt.useState(""),
        [I, Ml] = Lt.useState([]),
        [D, T] = Lt.useState(""),
        [R, tl] = Lt.useState(!1),
        VITE_API_KEY = "__API_KEY__",
        Dl = () => {
            const sl = dd[Math.floor(Math.random() * dd.length)];
            T(sl);
        },
        Ul = (sl) => {
            sl.preventDefault();
            const Wl = new FormData(sl.currentTarget),
                Cl = Object.fromEntries(Wl);
            if (Cl instanceof Object)
                if (((Rl) => /[а-яёА-ЯЁ]/.test(Rl))(D)) {
                    async function Rl(L) {
                        const vl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
                            L
                        )}&langpair=ru|en`;
                        return (await (await fetch(vl)).json()).responseData
                            .translatedText;
                    }
                    Rl(D).then((L) => T(L)), Vl(Cl);
                } else Vl(Cl);
        },
        Vl = async ({ ...sl }) => {
            const Wl = `https://api-inference.huggingface.co/models/${E}`,
                { width: Cl, height: Al } = vy(sl.sizeSelect);
            tl(!0);
            const Rl = Array.from({ length: sl.countSelect }, async (L) => {
                try {
                    const vl = await fetch(Wl, {
                        headers: {
                            Authorization: `Bearer ${VITE_API_KEY}`,
                            "Content-Type": "application/json",
                        },
                        method: "POST",
                        body: JSON.stringify({
                            inputs: D,
                            parameters: { width: Cl, height: Al },
                            options: { wait_for_model: !0, user_cache: !1 },
                        }),
                    });
                    if (!vl.ok) {
                        const Ll = await vl.json();
                        throw new Error(Ll.error || "Unknown error occurred");
                    }
                    const Bl = await vl.blob(),
                        Yl = URL.createObjectURL(Bl);
                    Ml((Ll) => [...Ll, Yl]);
                } catch (vl) {
                    console.error("Error generating image:", vl);
                }
            });
            await Promise.allSettled(Rl), tl(!1);
        };
    return x.jsxs("div", {
        className: Zt.container,
        children: [
            x.jsx(zy, {}),
            x.jsx("div", {
                className: Zt.mainContent,
                children: x.jsxs("form", {
                    onSubmit: Ul,
                    className: "prompt-form",
                    children: [
                        x.jsxs("div", {
                            className: Zt.promptContainer,
                            children: [
                                x.jsx(My, {
                                    name: "promptInput",
                                    placeholderValue: "Опиши детально картинку",
                                    setPrompt: T,
                                    prompt: D,
                                }),
                                x.jsx(nf, {
                                    func: Dl,
                                    className: Zt.promptBtn,
                                    children: x.jsx("i", {
                                        className: `
                                    fa-solid fa-dice 
                                    ${Zt.logoIcon}
                                `,
                                    }),
                                }),
                            ],
                        }),
                        x.jsxs("div", {
                            className: Zt.promptActions,
                            children: [
                                x.jsx(ef, {
                                    setSelect: J,
                                    value: E,
                                    selectName: "modelSelect",
                                    data: yy,
                                }),
                                x.jsx(ef, {
                                    setSelect: v,
                                    value: Q,
                                    selectName: "countSelect",
                                    data: hy,
                                }),
                                x.jsx(ef, {
                                    setSelect: G,
                                    value: j,
                                    selectName: "sizeSelect",
                                    data: dy,
                                }),
                                x.jsxs(nf, {
                                    type: "submit",
                                    className: Zt.generateBtn,
                                    children: [
                                        x.jsx("i", {
                                            className: `fa-solid fa-wand-sparkles ${Zt.logoIcon}`,
                                        }),
                                        "Сгенерировать",
                                    ],
                                }),
                            ],
                        }),
                        x.jsxs("div", {
                            className: Zt.galleryGrid,
                            children: [
                                I.map((sl, Wl) =>
                                    x.jsx(rd, { loading: !1, imgUrl: sl }, Wl)
                                ),
                                R && x.jsx(rd, { imgUrl: "#", loading: !0 }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
K0.createRoot(document.getElementById("root")).render(
    x.jsx(Lt.StrictMode, { children: x.jsx(Dy, {}) })
);
