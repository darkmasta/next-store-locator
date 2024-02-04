import * as Qt from "react";
import yi, { useRef as Xt, useEffect as In, useCallback as pi, createContext as Lr, useLayoutEffect as CA, useContext as Jt, useInsertionEffect as jf, useMemo as Er, forwardRef as SA, createElement as PA, useId as Na, useState as Jn, cloneElement as EA, Children as RA, isValidElement as IA } from "react";
var ii = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ca = { exports: {} }, si = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bc;
function LA() {
  if (Bc)
    return si;
  Bc = 1;
  var r = yi, n = Symbol.for("react.element"), i = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, u = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(h, p, m) {
    var v, y = {}, _ = null, C = null;
    m !== void 0 && (_ = "" + m), p.key !== void 0 && (_ = "" + p.key), p.ref !== void 0 && (C = p.ref);
    for (v in p)
      o.call(p, v) && !f.hasOwnProperty(v) && (y[v] = p[v]);
    if (h && h.defaultProps)
      for (v in p = h.defaultProps, p)
        y[v] === void 0 && (y[v] = p[v]);
    return { $$typeof: n, type: h, key: _, ref: C, props: y, _owner: u.current };
  }
  return si.Fragment = i, si.jsx = l, si.jsxs = l, si;
}
var oi = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oc;
function MA() {
  return Oc || (Oc = 1, process.env.NODE_ENV !== "production" && function() {
    var r = yi, n = Symbol.for("react.element"), i = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), h = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), E = Symbol.iterator, D = "@@iterator";
    function V(x) {
      if (x === null || typeof x != "object")
        return null;
      var O = E && x[E] || x[D];
      return typeof O == "function" ? O : null;
    }
    var F = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function M(x) {
      {
        for (var O = arguments.length, k = new Array(O > 1 ? O - 1 : 0), q = 1; q < O; q++)
          k[q - 1] = arguments[q];
        L("error", x, k);
      }
    }
    function L(x, O, k) {
      {
        var q = F.ReactDebugCurrentFrame, ft = q.getStackAddendum();
        ft !== "" && (O += "%s", k = k.concat([ft]));
        var dt = k.map(function(at) {
          return String(at);
        });
        dt.unshift("Warning: " + O), Function.prototype.apply.call(console[x], console, dt);
      }
    }
    var U = !1, j = !1, ot = !1, rt = !1, Q = !1, lt;
    lt = Symbol.for("react.module.reference");
    function Gt(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === o || x === f || Q || x === u || x === m || x === v || rt || x === C || U || j || ot || typeof x == "object" && x !== null && (x.$$typeof === _ || x.$$typeof === y || x.$$typeof === l || x.$$typeof === h || x.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === lt || x.getModuleId !== void 0));
    }
    function He(x, O, k) {
      var q = x.displayName;
      if (q)
        return q;
      var ft = O.displayName || O.name || "";
      return ft !== "" ? k + "(" + ft + ")" : k;
    }
    function Ht(x) {
      return x.displayName || "Context";
    }
    function Rt(x) {
      if (x == null)
        return null;
      if (typeof x.tag == "number" && M("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof x == "function")
        return x.displayName || x.name || null;
      if (typeof x == "string")
        return x;
      switch (x) {
        case o:
          return "Fragment";
        case i:
          return "Portal";
        case f:
          return "Profiler";
        case u:
          return "StrictMode";
        case m:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case h:
            var O = x;
            return Ht(O) + ".Consumer";
          case l:
            var k = x;
            return Ht(k._context) + ".Provider";
          case p:
            return He(x, x.render, "ForwardRef");
          case y:
            var q = x.displayName || null;
            return q !== null ? q : Rt(x.type) || "Memo";
          case _: {
            var ft = x, dt = ft._payload, at = ft._init;
            try {
              return Rt(at(dt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var vt = Object.assign, $t = 0, Ct, Dt, Ft, Be, je, it, ze;
    function Bn() {
    }
    Bn.__reactDisabledLog = !0;
    function nr() {
      {
        if ($t === 0) {
          Ct = console.log, Dt = console.info, Ft = console.warn, Be = console.error, je = console.group, it = console.groupCollapsed, ze = console.groupEnd;
          var x = {
            configurable: !0,
            enumerable: !0,
            value: Bn,
            writable: !0
          };
          Object.defineProperties(console, {
            info: x,
            log: x,
            warn: x,
            error: x,
            group: x,
            groupCollapsed: x,
            groupEnd: x
          });
        }
        $t++;
      }
    }
    function Oe() {
      {
        if ($t--, $t === 0) {
          var x = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: vt({}, x, {
              value: Ct
            }),
            info: vt({}, x, {
              value: Dt
            }),
            warn: vt({}, x, {
              value: Ft
            }),
            error: vt({}, x, {
              value: Be
            }),
            group: vt({}, x, {
              value: je
            }),
            groupCollapsed: vt({}, x, {
              value: it
            }),
            groupEnd: vt({}, x, {
              value: ze
            })
          });
        }
        $t < 0 && M("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var te = F.ReactCurrentDispatcher, dn;
    function we(x, O, k) {
      {
        if (dn === void 0)
          try {
            throw Error();
          } catch (ft) {
            var q = ft.stack.trim().match(/\n( *(at )?)/);
            dn = q && q[1] || "";
          }
        return `
` + dn + x;
      }
    }
    var ce = !1, Ve;
    {
      var ee = typeof WeakMap == "function" ? WeakMap : Map;
      Ve = new ee();
    }
    function pn(x, O) {
      if (!x || ce)
        return "";
      {
        var k = Ve.get(x);
        if (k !== void 0)
          return k;
      }
      var q;
      ce = !0;
      var ft = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var dt;
      dt = te.current, te.current = null, nr();
      try {
        if (O) {
          var at = function() {
            throw Error();
          };
          if (Object.defineProperty(at.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(at, []);
            } catch (re) {
              q = re;
            }
            Reflect.construct(x, [], at);
          } else {
            try {
              at.call();
            } catch (re) {
              q = re;
            }
            x.call(at.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (re) {
            q = re;
          }
          x();
        }
      } catch (re) {
        if (re && q && typeof re.stack == "string") {
          for (var nt = re.stack.split(`
`), kt = q.stack.split(`
`), _t = nt.length - 1, St = kt.length - 1; _t >= 1 && St >= 0 && nt[_t] !== kt[St]; )
            St--;
          for (; _t >= 1 && St >= 0; _t--, St--)
            if (nt[_t] !== kt[St]) {
              if (_t !== 1 || St !== 1)
                do
                  if (_t--, St--, St < 0 || nt[_t] !== kt[St]) {
                    var ne = `
` + nt[_t].replace(" at new ", " at ");
                    return x.displayName && ne.includes("<anonymous>") && (ne = ne.replace("<anonymous>", x.displayName)), typeof x == "function" && Ve.set(x, ne), ne;
                  }
                while (_t >= 1 && St >= 0);
              break;
            }
        }
      } finally {
        ce = !1, te.current = dt, Oe(), Error.prepareStackTrace = ft;
      }
      var ke = x ? x.displayName || x.name : "", Di = ke ? we(ke) : "";
      return typeof x == "function" && Ve.set(x, Di), Di;
    }
    function Ti(x, O, k) {
      return pn(x, !1);
    }
    function fe(x) {
      var O = x.prototype;
      return !!(O && O.isReactComponent);
    }
    function Ye(x, O, k) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return pn(x, fe(x));
      if (typeof x == "string")
        return we(x);
      switch (x) {
        case m:
          return we("Suspense");
        case v:
          return we("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case p:
            return Ti(x.render);
          case y:
            return Ye(x.type, O, k);
          case _: {
            var q = x, ft = q._payload, dt = q._init;
            try {
              return Ye(dt(ft), O, k);
            } catch {
            }
          }
        }
      return "";
    }
    var rr = Object.prototype.hasOwnProperty, _e = {}, Mr = F.ReactDebugCurrentFrame;
    function ir(x) {
      if (x) {
        var O = x._owner, k = Ye(x.type, x._source, O ? O.type : null);
        Mr.setExtraStackFrame(k);
      } else
        Mr.setExtraStackFrame(null);
    }
    function On(x, O, k, q, ft) {
      {
        var dt = Function.call.bind(rr);
        for (var at in x)
          if (dt(x, at)) {
            var nt = void 0;
            try {
              if (typeof x[at] != "function") {
                var kt = Error((q || "React class") + ": " + k + " type `" + at + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[at] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw kt.name = "Invariant Violation", kt;
              }
              nt = x[at](O, at, q, k, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_t) {
              nt = _t;
            }
            nt && !(nt instanceof Error) && (ir(ft), M("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", q || "React class", k, at, typeof nt), ir(null)), nt instanceof Error && !(nt.message in _e) && (_e[nt.message] = !0, ir(ft), M("Failed %s type: %s", k, nt.message), ir(null));
          }
      }
    }
    var he = Array.isArray;
    function Xe(x) {
      return he(x);
    }
    function sr(x) {
      {
        var O = typeof Symbol == "function" && Symbol.toStringTag, k = O && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return k;
      }
    }
    function Ks(x) {
      try {
        return gn(x), !1;
      } catch {
        return !0;
      }
    }
    function gn(x) {
      return "" + x;
    }
    function Ci(x) {
      if (Ks(x))
        return M("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", sr(x)), gn(x);
    }
    var Fe = F.ReactCurrentOwner, mn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, or, ar, Vn;
    Vn = {};
    function Dr(x) {
      if (rr.call(x, "ref")) {
        var O = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function Br(x) {
      if (rr.call(x, "key")) {
        var O = Object.getOwnPropertyDescriptor(x, "key").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function Or(x, O) {
      if (typeof x.ref == "string" && Fe.current && O && Fe.current.stateNode !== O) {
        var k = Rt(Fe.current.type);
        Vn[k] || (M('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Rt(Fe.current.type), x.ref), Vn[k] = !0);
      }
    }
    function Vr(x, O) {
      {
        var k = function() {
          or || (or = !0, M("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        k.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: k,
          configurable: !0
        });
      }
    }
    function Fr(x, O) {
      {
        var k = function() {
          ar || (ar = !0, M("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        k.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: k,
          configurable: !0
        });
      }
    }
    var kr = function(x, O, k, q, ft, dt, at) {
      var nt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: x,
        key: O,
        ref: k,
        props: at,
        // Record the component responsible for creating this element.
        _owner: dt
      };
      return nt._store = {}, Object.defineProperty(nt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(nt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: q
      }), Object.defineProperty(nt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ft
      }), Object.freeze && (Object.freeze(nt.props), Object.freeze(nt)), nt;
    };
    function Zs(x, O, k, q, ft) {
      {
        var dt, at = {}, nt = null, kt = null;
        k !== void 0 && (Ci(k), nt = "" + k), Br(O) && (Ci(O.key), nt = "" + O.key), Dr(O) && (kt = O.ref, Or(O, ft));
        for (dt in O)
          rr.call(O, dt) && !mn.hasOwnProperty(dt) && (at[dt] = O[dt]);
        if (x && x.defaultProps) {
          var _t = x.defaultProps;
          for (dt in _t)
            at[dt] === void 0 && (at[dt] = _t[dt]);
        }
        if (nt || kt) {
          var St = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          nt && Vr(at, St), kt && Fr(at, St);
        }
        return kr(x, nt, kt, ft, q, Fe.current, at);
      }
    }
    var Nr = F.ReactCurrentOwner, Si = F.ReactDebugCurrentFrame;
    function Je(x) {
      if (x) {
        var O = x._owner, k = Ye(x.type, x._source, O ? O.type : null);
        Si.setExtraStackFrame(k);
      } else
        Si.setExtraStackFrame(null);
    }
    var ur;
    ur = !1;
    function Ur(x) {
      return typeof x == "object" && x !== null && x.$$typeof === n;
    }
    function Pi() {
      {
        if (Nr.current) {
          var x = Rt(Nr.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
    }
    function qs(x) {
      {
        if (x !== void 0) {
          var O = x.fileName.replace(/^.*[\\\/]/, ""), k = x.lineNumber;
          return `

Check your code at ` + O + ":" + k + ".";
        }
        return "";
      }
    }
    var Ei = {};
    function Ri(x) {
      {
        var O = Pi();
        if (!O) {
          var k = typeof x == "string" ? x : x.displayName || x.name;
          k && (O = `

Check the top-level render call using <` + k + ">.");
        }
        return O;
      }
    }
    function Ii(x, O) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var k = Ri(O);
        if (Ei[k])
          return;
        Ei[k] = !0;
        var q = "";
        x && x._owner && x._owner !== Nr.current && (q = " It was passed a child from " + Rt(x._owner.type) + "."), Je(x), M('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', k, q), Je(null);
      }
    }
    function Li(x, O) {
      {
        if (typeof x != "object")
          return;
        if (Xe(x))
          for (var k = 0; k < x.length; k++) {
            var q = x[k];
            Ur(q) && Ii(q, O);
          }
        else if (Ur(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var ft = V(x);
          if (typeof ft == "function" && ft !== x.entries)
            for (var dt = ft.call(x), at; !(at = dt.next()).done; )
              Ur(at.value) && Ii(at.value, O);
        }
      }
    }
    function Qs(x) {
      {
        var O = x.type;
        if (O == null || typeof O == "string")
          return;
        var k;
        if (typeof O == "function")
          k = O.propTypes;
        else if (typeof O == "object" && (O.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        O.$$typeof === y))
          k = O.propTypes;
        else
          return;
        if (k) {
          var q = Rt(O);
          On(k, x.props, "prop", q, x);
        } else if (O.PropTypes !== void 0 && !ur) {
          ur = !0;
          var ft = Rt(O);
          M("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ft || "Unknown");
        }
        typeof O.getDefaultProps == "function" && !O.getDefaultProps.isReactClassApproved && M("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Wr(x) {
      {
        for (var O = Object.keys(x.props), k = 0; k < O.length; k++) {
          var q = O[k];
          if (q !== "children" && q !== "key") {
            Je(x), M("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", q), Je(null);
            break;
          }
        }
        x.ref !== null && (Je(x), M("Invalid attribute `ref` supplied to `React.Fragment`."), Je(null));
      }
    }
    function Mi(x, O, k, q, ft, dt) {
      {
        var at = Gt(x);
        if (!at) {
          var nt = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (nt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var kt = qs(ft);
          kt ? nt += kt : nt += Pi();
          var _t;
          x === null ? _t = "null" : Xe(x) ? _t = "array" : x !== void 0 && x.$$typeof === n ? (_t = "<" + (Rt(x.type) || "Unknown") + " />", nt = " Did you accidentally export a JSX literal instead of a component?") : _t = typeof x, M("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _t, nt);
        }
        var St = Zs(x, O, k, ft, dt);
        if (St == null)
          return St;
        if (at) {
          var ne = O.children;
          if (ne !== void 0)
            if (q)
              if (Xe(ne)) {
                for (var ke = 0; ke < ne.length; ke++)
                  Li(ne[ke], x);
                Object.freeze && Object.freeze(ne);
              } else
                M("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Li(ne, x);
        }
        return x === o ? Wr(St) : Qs(St), St;
      }
    }
    function Gr(x, O, k) {
      return Mi(x, O, k, !0);
    }
    function Xs(x, O, k) {
      return Mi(x, O, k, !1);
    }
    var Js = Xs, $s = Gr;
    oi.Fragment = o, oi.jsx = Js, oi.jsxs = $s;
  }()), oi;
}
process.env.NODE_ENV === "production" ? Ca.exports = LA() : Ca.exports = MA();
var G = Ca.exports;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function DA(r, n, i, o) {
  function u(f) {
    return f instanceof i ? f : new i(function(l) {
      l(f);
    });
  }
  return new (i || (i = Promise))(function(f, l) {
    function h(v) {
      try {
        m(o.next(v));
      } catch (y) {
        l(y);
      }
    }
    function p(v) {
      try {
        m(o.throw(v));
      } catch (y) {
        l(y);
      }
    }
    function m(v) {
      v.done ? f(v.value) : u(v.value).then(h, p);
    }
    m((o = o.apply(r, n || [])).next());
  });
}
var BA = function r(n, i) {
  if (n === i)
    return !0;
  if (n && i && typeof n == "object" && typeof i == "object") {
    if (n.constructor !== i.constructor)
      return !1;
    var o, u, f;
    if (Array.isArray(n)) {
      if (o = n.length, o != i.length)
        return !1;
      for (u = o; u-- !== 0; )
        if (!r(n[u], i[u]))
          return !1;
      return !0;
    }
    if (n.constructor === RegExp)
      return n.source === i.source && n.flags === i.flags;
    if (n.valueOf !== Object.prototype.valueOf)
      return n.valueOf() === i.valueOf();
    if (n.toString !== Object.prototype.toString)
      return n.toString() === i.toString();
    if (f = Object.keys(n), o = f.length, o !== Object.keys(i).length)
      return !1;
    for (u = o; u-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(i, f[u]))
        return !1;
    for (u = o; u-- !== 0; ) {
      var l = f[u];
      if (!r(n[l], i[l]))
        return !1;
    }
    return !0;
  }
  return n !== n && i !== i;
};
const Vc = "__googleMapsScriptId";
var br;
(function(r) {
  r[r.INITIALIZED = 0] = "INITIALIZED", r[r.LOADING = 1] = "LOADING", r[r.SUCCESS = 2] = "SUCCESS", r[r.FAILURE = 3] = "FAILURE";
})(br || (br = {}));
class Qn {
  /**
   * Creates an instance of Loader using [[LoaderOptions]]. No defaults are set
   * using this library, instead the defaults are set by the Google Maps
   * JavaScript API server.
   *
   * ```
   * const loader = Loader({apiKey, version: 'weekly', libraries: ['places']});
   * ```
   */
  constructor({ apiKey: n, authReferrerPolicy: i, channel: o, client: u, id: f = Vc, language: l, libraries: h = [], mapIds: p, nonce: m, region: v, retries: y = 3, url: _ = "https://maps.googleapis.com/maps/api/js", version: C }) {
    if (this.callbacks = [], this.done = !1, this.loading = !1, this.errors = [], this.apiKey = n, this.authReferrerPolicy = i, this.channel = o, this.client = u, this.id = f || Vc, this.language = l, this.libraries = h, this.mapIds = p, this.nonce = m, this.region = v, this.retries = y, this.url = _, this.version = C, Qn.instance) {
      if (!BA(this.options, Qn.instance.options))
        throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(Qn.instance.options)}`);
      return Qn.instance;
    }
    Qn.instance = this;
  }
  get options() {
    return {
      version: this.version,
      apiKey: this.apiKey,
      channel: this.channel,
      client: this.client,
      id: this.id,
      libraries: this.libraries,
      language: this.language,
      region: this.region,
      mapIds: this.mapIds,
      nonce: this.nonce,
      url: this.url,
      authReferrerPolicy: this.authReferrerPolicy
    };
  }
  get status() {
    return this.errors.length ? br.FAILURE : this.done ? br.SUCCESS : this.loading ? br.LOADING : br.INITIALIZED;
  }
  get failed() {
    return this.done && !this.loading && this.errors.length >= this.retries + 1;
  }
  /**
   * CreateUrl returns the Google Maps JavaScript API script url given the [[LoaderOptions]].
   *
   * @ignore
   * @deprecated
   */
  createUrl() {
    let n = this.url;
    return n += "?callback=__googleMapsCallback", this.apiKey && (n += `&key=${this.apiKey}`), this.channel && (n += `&channel=${this.channel}`), this.client && (n += `&client=${this.client}`), this.libraries.length > 0 && (n += `&libraries=${this.libraries.join(",")}`), this.language && (n += `&language=${this.language}`), this.region && (n += `&region=${this.region}`), this.version && (n += `&v=${this.version}`), this.mapIds && (n += `&map_ids=${this.mapIds.join(",")}`), this.authReferrerPolicy && (n += `&auth_referrer_policy=${this.authReferrerPolicy}`), n;
  }
  deleteScript() {
    const n = document.getElementById(this.id);
    n && n.remove();
  }
  /**
   * Load the Google Maps JavaScript API script and return a Promise.
   * @deprecated, use importLibrary() instead.
   */
  load() {
    return this.loadPromise();
  }
  /**
   * Load the Google Maps JavaScript API script and return a Promise.
   *
   * @ignore
   * @deprecated, use importLibrary() instead.
   */
  loadPromise() {
    return new Promise((n, i) => {
      this.loadCallback((o) => {
        o ? i(o.error) : n(window.google);
      });
    });
  }
  importLibrary(n) {
    return this.execute(), google.maps.importLibrary(n);
  }
  /**
   * Load the Google Maps JavaScript API script with a callback.
   * @deprecated, use importLibrary() instead.
   */
  loadCallback(n) {
    this.callbacks.push(n), this.execute();
  }
  /**
   * Set the script on document.
   */
  setScript() {
    var n, i;
    if (document.getElementById(this.id)) {
      this.callback();
      return;
    }
    const o = {
      key: this.apiKey,
      channel: this.channel,
      client: this.client,
      libraries: this.libraries.length && this.libraries,
      v: this.version,
      mapIds: this.mapIds,
      language: this.language,
      region: this.region,
      authReferrerPolicy: this.authReferrerPolicy
    };
    Object.keys(o).forEach(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (f) => !o[f] && delete o[f]
    ), !((i = (n = window == null ? void 0 : window.google) === null || n === void 0 ? void 0 : n.maps) === null || i === void 0) && i.importLibrary || ((f) => {
      let l, h, p, m = "The Google Maps JavaScript API", v = "google", y = "importLibrary", _ = "__ib__", C = document, E = window;
      E = E[v] || (E[v] = {});
      const D = E.maps || (E.maps = {}), V = /* @__PURE__ */ new Set(), F = new URLSearchParams(), M = () => (
        // @ts-ignore
        l || (l = new Promise((L, U) => DA(this, void 0, void 0, function* () {
          var j;
          yield h = C.createElement("script"), h.id = this.id, F.set("libraries", [...V] + "");
          for (p in f)
            F.set(p.replace(/[A-Z]/g, (ot) => "_" + ot[0].toLowerCase()), f[p]);
          F.set("callback", v + ".maps." + _), h.src = this.url + "?" + F, D[_] = L, h.onerror = () => l = U(Error(m + " could not load.")), h.nonce = this.nonce || ((j = C.querySelector("script[nonce]")) === null || j === void 0 ? void 0 : j.nonce) || "", C.head.append(h);
        })))
      );
      D[y] ? console.warn(m + " only loads once. Ignoring:", f) : D[y] = (L, ...U) => V.add(L) && M().then(() => D[y](L, ...U));
    })(o);
    const u = this.libraries.map((f) => this.importLibrary(f));
    u.length || u.push(this.importLibrary("core")), Promise.all(u).then(() => this.callback(), (f) => {
      const l = new ErrorEvent("error", { error: f });
      this.loadErrorCallback(l);
    });
  }
  /**
   * Reset the loader state.
   */
  reset() {
    this.deleteScript(), this.done = !1, this.loading = !1, this.errors = [], this.onerrorEvent = null;
  }
  resetIfRetryingFailed() {
    this.failed && this.reset();
  }
  loadErrorCallback(n) {
    if (this.errors.push(n), this.errors.length <= this.retries) {
      const i = this.errors.length * Math.pow(2, this.errors.length);
      console.error(`Failed to load Google Maps script, retrying in ${i} ms.`), setTimeout(() => {
        this.deleteScript(), this.setScript();
      }, i);
    } else
      this.onerrorEvent = n, this.callback();
  }
  callback() {
    this.done = !0, this.loading = !1, this.callbacks.forEach((n) => {
      n(this.onerrorEvent);
    }), this.callbacks = [];
  }
  execute() {
    if (this.resetIfRetryingFailed(), this.done)
      this.callback();
    else {
      if (window.google && window.google.maps && window.google.maps.version) {
        console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."), this.callback();
        return;
      }
      this.loading || (this.loading = !0, this.setScript());
    }
  }
}
function OA(r, n) {
  for (let i in n.prototype)
    r.prototype[i] = n.prototype[i];
}
class ks {
  constructor() {
    OA(ks, google.maps.OverlayView);
  }
}
function fa(r) {
  return Object.keys(r).reduce((n, i) => (r[i] && n.push(i + ":" + r[i]), n), []).join(";");
}
function Ae(r) {
  return r ? r + "px" : void 0;
}
class VA extends ks {
  /**
   * @param cluster_ The cluster with which the icon is to be associated.
   * @param styles_ An array of {@link ClusterIconStyle} defining the cluster icons
   *  to use for various cluster sizes.
   */
  constructor(n, i) {
    super(), this.cluster_ = n, this.styles_ = i, this.center_ = null, this.div_ = null, this.sums_ = null, this.visible_ = !1, this.style = null, this.setMap(n.getMap());
  }
  /**
   * Adds the icon to the DOM.
   */
  onAdd() {
    let n, i;
    const o = this.cluster_.getMarkerClusterer(), [u, f] = google.maps.version.split("."), l = parseInt(u, 10) * 100 + parseInt(f, 10);
    this.div_ = document.createElement("div"), this.visible_ && this.show(), this.getPanes().overlayMouseTarget.appendChild(this.div_), this.boundsChangedListener_ = google.maps.event.addListener(this.getMap(), "bounds_changed", function() {
      i = n;
    }), google.maps.event.addDomListener(this.div_, "mousedown", () => {
      n = !0, i = !1;
    }), l >= 332 && google.maps.event.addDomListener(this.div_, "touchstart", (h) => {
      h.stopPropagation();
    }), google.maps.event.addDomListener(this.div_, "click", (h) => {
      if (n = !1, !i) {
        if (google.maps.event.trigger(o, "click", this.cluster_), google.maps.event.trigger(o, "clusterclick", this.cluster_), o.getZoomOnClick()) {
          const p = o.getMaxZoom(), m = this.cluster_.getBounds();
          o.getMap().fitBounds(m), setTimeout(function() {
            o.getMap().fitBounds(m), p !== null && o.getMap().getZoom() > p && o.getMap().setZoom(p + 1);
          }, 100);
        }
        h.cancelBubble = !0, h.stopPropagation && h.stopPropagation();
      }
    }), google.maps.event.addDomListener(this.div_, "mouseover", () => {
      google.maps.event.trigger(o, "mouseover", this.cluster_);
    }), google.maps.event.addDomListener(this.div_, "mouseout", () => {
      google.maps.event.trigger(o, "mouseout", this.cluster_);
    });
  }
  /**
   * Removes the icon from the DOM.
   */
  onRemove() {
    this.div_ && this.div_.parentNode && (this.hide(), google.maps.event.removeListener(this.boundsChangedListener_), google.maps.event.clearInstanceListeners(this.div_), this.div_.parentNode.removeChild(this.div_), this.div_ = null);
  }
  /**
   * Draws the icon.
   */
  draw() {
    if (this.visible_) {
      const n = this.getPosFromLatLng_(this.center_);
      this.div_.style.top = n.y + "px", this.div_.style.left = n.x + "px";
    }
  }
  /**
   * Hides the icon.
   */
  hide() {
    this.div_ && (this.div_.style.display = "none"), this.visible_ = !1;
  }
  /**
   * Positions and shows the icon.
   */
  show() {
    this.div_ && (this.div_.className = this.className_, this.div_.style.cssText = this.createCss_(this.getPosFromLatLng_(this.center_)), this.div_.innerHTML = (this.style.url ? this.getImageElementHtml() : "") + this.getLabelDivHtml(), typeof this.sums_.title > "u" || this.sums_.title === "" ? this.div_.title = this.cluster_.getMarkerClusterer().getTitle() : this.div_.title = this.sums_.title, this.div_.style.display = ""), this.visible_ = !0;
  }
  getLabelDivHtml() {
    const i = this.cluster_.getMarkerClusterer().ariaLabelFn(this.sums_.text), o = {
      position: "absolute",
      top: Ae(this.anchorText_[0]),
      left: Ae(this.anchorText_[1]),
      color: this.style.textColor,
      "font-size": Ae(this.style.textSize),
      "font-family": this.style.fontFamily,
      "font-weight": this.style.fontWeight,
      "font-style": this.style.fontStyle,
      "text-decoration": this.style.textDecoration,
      "text-align": "center",
      width: Ae(this.style.width),
      "line-height": Ae(this.style.textLineHeight)
    };
    return `
<div aria-label="${i}" style="${fa(o)}" tabindex="0">
  <span aria-hidden="true">${this.sums_.text}</span>
</div>
`;
  }
  getImageElementHtml() {
    const n = (this.style.backgroundPosition || "0 0").split(" "), i = parseInt(n[0].replace(/^\s+|\s+$/g, ""), 10), o = parseInt(n[1].replace(/^\s+|\s+$/g, ""), 10);
    let u = {};
    if (this.cluster_.getMarkerClusterer().getEnableRetinaIcons())
      u = {
        width: Ae(this.style.width),
        height: Ae(this.style.height)
      };
    else {
      const [l, h, p, m] = [
        -1 * o,
        -1 * i + this.style.width,
        -1 * o + this.style.height,
        -1 * i
      ];
      u = {
        clip: `rect(${l}px, ${h}px, ${p}px, ${m}px)`
      };
    }
    const f = fa(Object.assign({ position: "absolute", top: Ae(o), left: Ae(i) }, u));
    return `<img alt="${this.sums_.text}" aria-hidden="true" src="${this.style.url}" style="${f}"/>`;
  }
  /**
   * Sets the icon styles to the appropriate element in the styles array.
   *
   * @ignore
   * @param sums The icon label text and styles index.
   */
  useStyle(n) {
    this.sums_ = n;
    let i = Math.max(0, n.index - 1);
    i = Math.min(this.styles_.length - 1, i), this.style = this.styles_[i], this.anchorText_ = this.style.anchorText || [0, 0], this.anchorIcon_ = this.style.anchorIcon || [
      Math.floor(this.style.height / 2),
      Math.floor(this.style.width / 2)
    ], this.className_ = this.cluster_.getMarkerClusterer().getClusterClass() + " " + (this.style.className || "cluster-" + i);
  }
  /**
   * Sets the position at which to center the icon.
   *
   * @param center The latlng to set as the center.
   */
  setCenter(n) {
    this.center_ = n;
  }
  /**
   * Creates the `cssText` style parameter based on the position of the icon.
   *
   * @param pos The position of the icon.
   * @return The CSS style text.
   */
  createCss_(n) {
    return fa({
      "z-index": `${this.cluster_.getMarkerClusterer().getZIndex()}`,
      top: Ae(n.y),
      left: Ae(n.x),
      width: Ae(this.style.width),
      height: Ae(this.style.height),
      cursor: "pointer",
      position: "absolute",
      "-webkit-user-select": "none",
      "-khtml-user-select": "none",
      "-moz-user-select": "none",
      "-o-user-select": "none",
      "user-select": "none"
    });
  }
  /**
   * Returns the position at which to place the DIV depending on the latlng.
   *
   * @param latlng The position in latlng.
   * @return The position in pixels.
   */
  getPosFromLatLng_(n) {
    const i = this.getProjection().fromLatLngToDivPixel(n);
    return i.x = Math.floor(i.x - this.anchorIcon_[1]), i.y = Math.floor(i.y - this.anchorIcon_[0]), i;
  }
}
class FA {
  /**
   *
   * @param markerClusterer_ The `MarkerClusterer` object with which this
   *  cluster is associated.
   */
  constructor(n) {
    this.markerClusterer_ = n, this.map_ = this.markerClusterer_.getMap(), this.minClusterSize_ = this.markerClusterer_.getMinimumClusterSize(), this.averageCenter_ = this.markerClusterer_.getAverageCenter(), this.markers_ = [], this.center_ = null, this.bounds_ = null, this.clusterIcon_ = new VA(this, this.markerClusterer_.getStyles());
  }
  /**
   * Returns the number of markers managed by the cluster. You can call this from
   * a `click`, `mouseover`, or `mouseout` event handler for the `MarkerClusterer` object.
   *
   * @return The number of markers in the cluster.
   */
  getSize() {
    return this.markers_.length;
  }
  /**
   * Returns the array of markers managed by the cluster. You can call this from
   * a `click`, `mouseover`, or `mouseout` event handler for the `MarkerClusterer` object.
   *
   * @return The array of markers in the cluster.
   */
  getMarkers() {
    return this.markers_;
  }
  /**
   * Returns the center of the cluster. You can call this from
   * a `click`, `mouseover`, or `mouseout` event handler
   * for the `MarkerClusterer` object.
   *
   * @return The center of the cluster.
   */
  getCenter() {
    return this.center_;
  }
  /**
   * Returns the map with which the cluster is associated.
   *
   * @return The map.
   * @ignore
   */
  getMap() {
    return this.map_;
  }
  /**
   * Returns the `MarkerClusterer` object with which the cluster is associated.
   *
   * @return The associated marker clusterer.
   * @ignore
   */
  getMarkerClusterer() {
    return this.markerClusterer_;
  }
  /**
   * Returns the bounds of the cluster.
   *
   * @return the cluster bounds.
   * @ignore
   */
  getBounds() {
    const n = new google.maps.LatLngBounds(this.center_, this.center_), i = this.getMarkers();
    for (let o = 0; o < i.length; o++)
      n.extend(i[o].getPosition());
    return n;
  }
  /**
   * Removes the cluster from the map.
   *
   * @ignore
   */
  remove() {
    this.clusterIcon_.setMap(null), this.markers_ = [], delete this.markers_;
  }
  /**
   * Adds a marker to the cluster.
   *
   * @param marker The marker to be added.
   * @return True if the marker was added.
   * @ignore
   */
  addMarker(n) {
    if (this.isMarkerAlreadyAdded_(n))
      return !1;
    if (!this.center_)
      this.center_ = n.getPosition(), this.calculateBounds_();
    else if (this.averageCenter_) {
      const u = this.markers_.length + 1, f = (this.center_.lat() * (u - 1) + n.getPosition().lat()) / u, l = (this.center_.lng() * (u - 1) + n.getPosition().lng()) / u;
      this.center_ = new google.maps.LatLng(f, l), this.calculateBounds_();
    }
    n.isAdded = !0, this.markers_.push(n);
    const i = this.markers_.length, o = this.markerClusterer_.getMaxZoom();
    if (o !== null && this.map_.getZoom() > o)
      n.getMap() !== this.map_ && n.setMap(this.map_);
    else if (i < this.minClusterSize_)
      n.getMap() !== this.map_ && n.setMap(this.map_);
    else if (i === this.minClusterSize_)
      for (let u = 0; u < i; u++)
        this.markers_[u].setMap(null);
    else
      n.setMap(null);
    return !0;
  }
  /**
   * Determines if a marker lies within the cluster's bounds.
   *
   * @param marker The marker to check.
   * @return True if the marker lies in the bounds.
   * @ignore
   */
  isMarkerInClusterBounds(n) {
    return this.bounds_.contains(n.getPosition());
  }
  /**
   * Calculates the extended bounds of the cluster with the grid.
   */
  calculateBounds_() {
    const n = new google.maps.LatLngBounds(this.center_, this.center_);
    this.bounds_ = this.markerClusterer_.getExtendedBounds(n);
  }
  /**
   * Updates the cluster icon.
   */
  updateIcon() {
    const n = this.markers_.length, i = this.markerClusterer_.getMaxZoom();
    if (i !== null && this.map_.getZoom() > i) {
      this.clusterIcon_.hide();
      return;
    }
    if (n < this.minClusterSize_) {
      this.clusterIcon_.hide();
      return;
    }
    const o = this.markerClusterer_.getStyles().length, u = this.markerClusterer_.getCalculator()(this.markers_, o);
    this.clusterIcon_.setCenter(this.center_), this.clusterIcon_.useStyle(u), this.clusterIcon_.show();
  }
  /**
   * Determines if a marker has already been added to the cluster.
   *
   * @param marker The marker to check.
   * @return True if the marker has already been added.
   */
  isMarkerAlreadyAdded_(n) {
    if (this.markers_.indexOf)
      return this.markers_.indexOf(n) !== -1;
    for (let i = 0; i < this.markers_.length; i++)
      if (n === this.markers_[i])
        return !0;
    return !1;
  }
}
const xs = (r, n, i) => r[n] !== void 0 ? r[n] : i;
class ue extends ks {
  /**
   * Creates a MarkerClusterer object with the options specified in {@link MarkerClustererOptions}.
   * @param map The Google map to attach to.
   * @param markers The markers to be added to the cluster.
   * @param options The optional parameters.
   */
  constructor(n, i = [], o = {}) {
    super(), this.options = o, this.markers_ = [], this.clusters_ = [], this.listeners_ = [], this.activeMap_ = null, this.ready_ = !1, this.ariaLabelFn = this.options.ariaLabelFn || (() => ""), this.zIndex_ = this.options.zIndex || google.maps.Marker.MAX_ZINDEX + 1, this.gridSize_ = this.options.gridSize || 60, this.minClusterSize_ = this.options.minimumClusterSize || 2, this.maxZoom_ = this.options.maxZoom || null, this.styles_ = this.options.styles || [], this.title_ = this.options.title || "", this.zoomOnClick_ = xs(this.options, "zoomOnClick", !0), this.averageCenter_ = xs(this.options, "averageCenter", !1), this.ignoreHidden_ = xs(this.options, "ignoreHidden", !1), this.enableRetinaIcons_ = xs(this.options, "enableRetinaIcons", !1), this.imagePath_ = this.options.imagePath || ue.IMAGE_PATH, this.imageExtension_ = this.options.imageExtension || ue.IMAGE_EXTENSION, this.imageSizes_ = this.options.imageSizes || ue.IMAGE_SIZES, this.calculator_ = this.options.calculator || ue.CALCULATOR, this.batchSize_ = this.options.batchSize || ue.BATCH_SIZE, this.batchSizeIE_ = this.options.batchSizeIE || ue.BATCH_SIZE_IE, this.clusterClass_ = this.options.clusterClass || "cluster", navigator.userAgent.toLowerCase().indexOf("msie") !== -1 && (this.batchSize_ = this.batchSizeIE_), this.setupStyles_(), this.addMarkers(i, !0), this.setMap(n);
  }
  /**
   * Implementation of the onAdd interface method.
   * @ignore
   */
  onAdd() {
    this.activeMap_ = this.getMap(), this.ready_ = !0, this.repaint(), this.prevZoom_ = this.getMap().getZoom(), this.listeners_ = [
      google.maps.event.addListener(this.getMap(), "zoom_changed", () => {
        const n = this.getMap(), i = n.minZoom || 0, o = Math.min(n.maxZoom || 100, n.mapTypes[n.getMapTypeId()].maxZoom), u = Math.min(Math.max(this.getMap().getZoom(), i), o);
        this.prevZoom_ != u && (this.prevZoom_ = u, this.resetViewport_(!1));
      }),
      google.maps.event.addListener(this.getMap(), "idle", () => {
        this.redraw_();
      })
    ];
  }
  /**
   * Implementation of the onRemove interface method.
   * Removes map event listeners and all cluster icons from the DOM.
   * All managed markers are also put back on the map.
   * @ignore
   */
  onRemove() {
    for (let n = 0; n < this.markers_.length; n++)
      this.markers_[n].getMap() !== this.activeMap_ && this.markers_[n].setMap(this.activeMap_);
    for (let n = 0; n < this.clusters_.length; n++)
      this.clusters_[n].remove();
    this.clusters_ = [];
    for (let n = 0; n < this.listeners_.length; n++)
      google.maps.event.removeListener(this.listeners_[n]);
    this.listeners_ = [], this.activeMap_ = null, this.ready_ = !1;
  }
  /**
   * Implementation of the draw interface method.
   * @ignore
   */
  draw() {
  }
  /**
   * Sets up the styles object.
   */
  setupStyles_() {
    if (!(this.styles_.length > 0))
      for (let n = 0; n < this.imageSizes_.length; n++) {
        const i = this.imageSizes_[n];
        this.styles_.push(ue.withDefaultStyle({
          url: this.imagePath_ + (n + 1) + "." + this.imageExtension_,
          height: i,
          width: i
        }));
      }
  }
  /**
   *  Fits the map to the bounds of the markers managed by the clusterer.
   */
  fitMapToMarkers(n) {
    const i = this.getMarkers(), o = new google.maps.LatLngBounds();
    for (let u = 0; u < i.length; u++)
      (i[u].getVisible() || !this.getIgnoreHidden()) && o.extend(i[u].getPosition());
    this.getMap().fitBounds(o, n);
  }
  /**
   * Returns the value of the `gridSize` property.
   *
   * @return The grid size.
   */
  getGridSize() {
    return this.gridSize_;
  }
  /**
   * Sets the value of the `gridSize` property.
   *
   * @param gridSize The grid size.
   */
  setGridSize(n) {
    this.gridSize_ = n;
  }
  /**
   * Returns the value of the `minimumClusterSize` property.
   *
   * @return The minimum cluster size.
   */
  getMinimumClusterSize() {
    return this.minClusterSize_;
  }
  /**
   * Sets the value of the `minimumClusterSize` property.
   *
   * @param minimumClusterSize The minimum cluster size.
   */
  setMinimumClusterSize(n) {
    this.minClusterSize_ = n;
  }
  /**
   *  Returns the value of the `maxZoom` property.
   *
   *  @return The maximum zoom level.
   */
  getMaxZoom() {
    return this.maxZoom_;
  }
  /**
   *  Sets the value of the `maxZoom` property.
   *
   *  @param maxZoom The maximum zoom level.
   */
  setMaxZoom(n) {
    this.maxZoom_ = n;
  }
  getZIndex() {
    return this.zIndex_;
  }
  setZIndex(n) {
    this.zIndex_ = n;
  }
  /**
   *  Returns the value of the `styles` property.
   *
   *  @return The array of styles defining the cluster markers to be used.
   */
  getStyles() {
    return this.styles_;
  }
  /**
   *  Sets the value of the `styles` property.
   *
   *  @param styles The array of styles to use.
   */
  setStyles(n) {
    this.styles_ = n;
  }
  /**
   * Returns the value of the `title` property.
   *
   * @return The content of the title text.
   */
  getTitle() {
    return this.title_;
  }
  /**
   *  Sets the value of the `title` property.
   *
   *  @param title The value of the title property.
   */
  setTitle(n) {
    this.title_ = n;
  }
  /**
   * Returns the value of the `zoomOnClick` property.
   *
   * @return True if zoomOnClick property is set.
   */
  getZoomOnClick() {
    return this.zoomOnClick_;
  }
  /**
   *  Sets the value of the `zoomOnClick` property.
   *
   *  @param zoomOnClick The value of the zoomOnClick property.
   */
  setZoomOnClick(n) {
    this.zoomOnClick_ = n;
  }
  /**
   * Returns the value of the `averageCenter` property.
   *
   * @return True if averageCenter property is set.
   */
  getAverageCenter() {
    return this.averageCenter_;
  }
  /**
   *  Sets the value of the `averageCenter` property.
   *
   *  @param averageCenter The value of the averageCenter property.
   */
  setAverageCenter(n) {
    this.averageCenter_ = n;
  }
  /**
   * Returns the value of the `ignoreHidden` property.
   *
   * @return True if ignoreHidden property is set.
   */
  getIgnoreHidden() {
    return this.ignoreHidden_;
  }
  /**
   *  Sets the value of the `ignoreHidden` property.
   *
   *  @param ignoreHidden The value of the ignoreHidden property.
   */
  setIgnoreHidden(n) {
    this.ignoreHidden_ = n;
  }
  /**
   * Returns the value of the `enableRetinaIcons` property.
   *
   * @return True if enableRetinaIcons property is set.
   */
  getEnableRetinaIcons() {
    return this.enableRetinaIcons_;
  }
  /**
   *  Sets the value of the `enableRetinaIcons` property.
   *
   *  @param enableRetinaIcons The value of the enableRetinaIcons property.
   */
  setEnableRetinaIcons(n) {
    this.enableRetinaIcons_ = n;
  }
  /**
   * Returns the value of the `imageExtension` property.
   *
   * @return The value of the imageExtension property.
   */
  getImageExtension() {
    return this.imageExtension_;
  }
  /**
   *  Sets the value of the `imageExtension` property.
   *
   *  @param imageExtension The value of the imageExtension property.
   */
  setImageExtension(n) {
    this.imageExtension_ = n;
  }
  /**
   * Returns the value of the `imagePath` property.
   *
   * @return The value of the imagePath property.
   */
  getImagePath() {
    return this.imagePath_;
  }
  /**
   *  Sets the value of the `imagePath` property.
   *
   *  @param imagePath The value of the imagePath property.
   */
  setImagePath(n) {
    this.imagePath_ = n;
  }
  /**
   * Returns the value of the `imageSizes` property.
   *
   * @return The value of the imageSizes property.
   */
  getImageSizes() {
    return this.imageSizes_;
  }
  /**
   *  Sets the value of the `imageSizes` property.
   *
   *  @param imageSizes The value of the imageSizes property.
   */
  setImageSizes(n) {
    this.imageSizes_ = n;
  }
  /**
   * Returns the value of the `calculator` property.
   *
   * @return the value of the calculator property.
   */
  getCalculator() {
    return this.calculator_;
  }
  /**
   * Sets the value of the `calculator` property.
   *
   * @param calculator The value of the calculator property.
   */
  setCalculator(n) {
    this.calculator_ = n;
  }
  /**
   * Returns the value of the `batchSizeIE` property.
   *
   * @return the value of the batchSizeIE property.
   */
  getBatchSizeIE() {
    return this.batchSizeIE_;
  }
  /**
   * Sets the value of the `batchSizeIE` property.
   *
   *  @param batchSizeIE The value of the batchSizeIE property.
   */
  setBatchSizeIE(n) {
    this.batchSizeIE_ = n;
  }
  /**
   * Returns the value of the `clusterClass` property.
   *
   * @return the value of the clusterClass property.
   */
  getClusterClass() {
    return this.clusterClass_;
  }
  /**
   * Sets the value of the `clusterClass` property.
   *
   *  @param clusterClass The value of the clusterClass property.
   */
  setClusterClass(n) {
    this.clusterClass_ = n;
  }
  /**
   *  Returns the array of markers managed by the clusterer.
   *
   *  @return The array of markers managed by the clusterer.
   */
  getMarkers() {
    return this.markers_;
  }
  /**
   *  Returns the number of markers managed by the clusterer.
   *
   *  @return The number of markers.
   */
  getTotalMarkers() {
    return this.markers_.length;
  }
  /**
   * Returns the current array of clusters formed by the clusterer.
   *
   * @return The array of clusters formed by the clusterer.
   */
  getClusters() {
    return this.clusters_;
  }
  /**
   * Returns the number of clusters formed by the clusterer.
   *
   * @return The number of clusters formed by the clusterer.
   */
  getTotalClusters() {
    return this.clusters_.length;
  }
  /**
   * Adds a marker to the clusterer. The clusters are redrawn unless
   *  `nodraw` is set to `true`.
   *
   * @param marker The marker to add.
   * @param nodraw Set to `true` to prevent redrawing.
   */
  addMarker(n, i) {
    this.pushMarkerTo_(n), i || this.redraw_();
  }
  /**
   * Adds an array of markers to the clusterer. The clusters are redrawn unless
   *  `nodraw` is set to `true`.
   *
   * @param markers The markers to add.
   * @param nodraw Set to `true` to prevent redrawing.
   */
  addMarkers(n, i) {
    for (const o in n)
      Object.prototype.hasOwnProperty.call(n, o) && this.pushMarkerTo_(n[o]);
    i || this.redraw_();
  }
  /**
   * Pushes a marker to the clusterer.
   *
   * @param marker The marker to add.
   */
  pushMarkerTo_(n) {
    n.getDraggable() && google.maps.event.addListener(n, "dragend", () => {
      this.ready_ && (n.isAdded = !1, this.repaint());
    }), n.isAdded = !1, this.markers_.push(n);
  }
  /**
   * Removes a marker from the cluster.  The clusters are redrawn unless
   *  `nodraw` is set to `true`. Returns `true` if the
   *  marker was removed from the clusterer.
   *
   * @param marker The marker to remove.
   * @param nodraw Set to `true` to prevent redrawing.
   * @return True if the marker was removed from the clusterer.
   */
  removeMarker(n, i) {
    const o = this.removeMarker_(n);
    return !i && o && this.repaint(), o;
  }
  /**
   * Removes an array of markers from the cluster. The clusters are redrawn unless
   *  `nodraw` is set to `true`. Returns `true` if markers were removed from the clusterer.
   *
   * @param markers The markers to remove.
   * @param nodraw Set to `true` to prevent redrawing.
   * @return True if markers were removed from the clusterer.
   */
  removeMarkers(n, i) {
    let o = !1;
    for (let u = 0; u < n.length; u++) {
      const f = this.removeMarker_(n[u]);
      o = o || f;
    }
    return !i && o && this.repaint(), o;
  }
  /**
   * Removes a marker and returns true if removed, false if not.
   *
   * @param marker The marker to remove
   * @return Whether the marker was removed or not
   */
  removeMarker_(n) {
    let i = -1;
    if (this.markers_.indexOf)
      i = this.markers_.indexOf(n);
    else
      for (let o = 0; o < this.markers_.length; o++)
        if (n === this.markers_[o]) {
          i = o;
          break;
        }
    return i === -1 ? !1 : (n.setMap(null), this.markers_.splice(i, 1), !0);
  }
  /**
   * Removes all clusters and markers from the map and also removes all markers
   *  managed by the clusterer.
   */
  clearMarkers() {
    this.resetViewport_(!0), this.markers_ = [];
  }
  /**
   * Recalculates and redraws all the marker clusters from scratch.
   *  Call this after changing any properties.
   */
  repaint() {
    const n = this.clusters_.slice();
    this.clusters_ = [], this.resetViewport_(!1), this.redraw_(), setTimeout(function() {
      for (let i = 0; i < n.length; i++)
        n[i].remove();
    }, 0);
  }
  /**
   * Returns the current bounds extended by the grid size.
   *
   * @param bounds The bounds to extend.
   * @return The extended bounds.
   * @ignore
   */
  getExtendedBounds(n) {
    const i = this.getProjection(), o = new google.maps.LatLng(n.getNorthEast().lat(), n.getNorthEast().lng()), u = new google.maps.LatLng(n.getSouthWest().lat(), n.getSouthWest().lng()), f = i.fromLatLngToDivPixel(o);
    f.x += this.gridSize_, f.y -= this.gridSize_;
    const l = i.fromLatLngToDivPixel(u);
    l.x -= this.gridSize_, l.y += this.gridSize_;
    const h = i.fromDivPixelToLatLng(f), p = i.fromDivPixelToLatLng(l);
    return n.extend(h), n.extend(p), n;
  }
  /**
   * Redraws all the clusters.
   */
  redraw_() {
    this.createClusters_(0);
  }
  /**
   * Removes all clusters from the map. The markers are also removed from the map
   *  if `hide` is set to `true`.
   *
   * @param hide Set to `true` to also remove the markers from the map.
   */
  resetViewport_(n) {
    for (let i = 0; i < this.clusters_.length; i++)
      this.clusters_[i].remove();
    this.clusters_ = [];
    for (let i = 0; i < this.markers_.length; i++) {
      const o = this.markers_[i];
      o.isAdded = !1, n && o.setMap(null);
    }
  }
  /**
   * Calculates the distance between two latlng locations in km.
   *
   * @param p1 The first lat lng point.
   * @param p2 The second lat lng point.
   * @return The distance between the two points in km.
   * @link http://www.movable-type.co.uk/scripts/latlong.html
   */
  distanceBetweenPoints_(n, i) {
    const u = (i.lat() - n.lat()) * Math.PI / 180, f = (i.lng() - n.lng()) * Math.PI / 180, l = Math.sin(u / 2) * Math.sin(u / 2) + Math.cos(n.lat() * Math.PI / 180) * Math.cos(i.lat() * Math.PI / 180) * Math.sin(f / 2) * Math.sin(f / 2);
    return 6371 * (2 * Math.atan2(Math.sqrt(l), Math.sqrt(1 - l)));
  }
  /**
   * Determines if a marker is contained in a bounds.
   *
   * @param marker The marker to check.
   * @param bounds The bounds to check against.
   * @return True if the marker is in the bounds.
   */
  isMarkerInBounds_(n, i) {
    return i.contains(n.getPosition());
  }
  /**
   * Adds a marker to a cluster, or creates a new cluster.
   *
   * @param marker The marker to add.
   */
  addToClosestCluster_(n) {
    let i = 4e4, o = null;
    for (let u = 0; u < this.clusters_.length; u++) {
      const f = this.clusters_[u], l = f.getCenter();
      if (l) {
        const h = this.distanceBetweenPoints_(l, n.getPosition());
        h < i && (i = h, o = f);
      }
    }
    if (o && o.isMarkerInClusterBounds(n))
      o.addMarker(n);
    else {
      const u = new FA(this);
      u.addMarker(n), this.clusters_.push(u);
    }
  }
  /**
   * Creates the clusters. This is done in batches to avoid timeout errors
   *  in some browsers when there is a huge number of markers.
   *
   * @param iFirst The index of the first marker in the batch of
   *  markers to be added to clusters.
   */
  createClusters_(n) {
    if (!this.ready_)
      return;
    n === 0 && (google.maps.event.trigger(this, "clusteringbegin", this), typeof this.timerRefStatic < "u" && (clearTimeout(this.timerRefStatic), delete this.timerRefStatic));
    let i;
    this.getMap().getZoom() > 3 ? i = new google.maps.LatLngBounds(this.getMap().getBounds().getSouthWest(), this.getMap().getBounds().getNorthEast()) : i = new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472, -178.48388434375), new google.maps.LatLng(-85.08136444384544, 178.00048865625));
    const o = this.getExtendedBounds(i), u = Math.min(n + this.batchSize_, this.markers_.length);
    for (let f = n; f < u; f++) {
      const l = this.markers_[f];
      !l.isAdded && this.isMarkerInBounds_(l, o) && (!this.ignoreHidden_ || this.ignoreHidden_ && l.getVisible()) && this.addToClosestCluster_(l);
    }
    if (u < this.markers_.length)
      this.timerRefStatic = window.setTimeout(() => {
        this.createClusters_(u);
      }, 0);
    else {
      delete this.timerRefStatic, google.maps.event.trigger(this, "clusteringend", this);
      for (let f = 0; f < this.clusters_.length; f++)
        this.clusters_[f].updateIcon();
    }
  }
  /**
   * The default function for determining the label text and style
   * for a cluster icon.
   *
   * @param markers The array of markers represented by the cluster.
   * @param numStyles The number of marker styles available.
   * @return The information resource for the cluster.
   */
  static CALCULATOR(n, i) {
    let o = 0;
    const u = n.length;
    let f = u;
    for (; f !== 0; )
      f = Math.floor(f / 10), o++;
    return o = Math.min(o, i), {
      text: u.toString(),
      index: o,
      title: ""
    };
  }
  /**
   * Generates default styles augmented with user passed values.
   * Useful when you want to override some default values but keep untouched
   *
   * @param overrides override default values
   */
  static withDefaultStyle(n) {
    return Object.assign({ textColor: "black", textSize: 11, textDecoration: "none", textLineHeight: n.height, fontWeight: "bold", fontStyle: "normal", fontFamily: "Arial,sans-serif", backgroundPosition: "0 0" }, n);
  }
}
ue.BATCH_SIZE = 2e3;
ue.BATCH_SIZE_IE = 500;
ue.IMAGE_PATH = "../images/m";
ue.IMAGE_EXTENSION = "png";
ue.IMAGE_SIZES = [53, 56, 66, 78, 90];
var Rs = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Rs.exports;
(function(r, n) {
  (function() {
    var i, o = "4.17.21", u = 200, f = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", h = "Invalid `variable` option passed into `_.template`", p = "__lodash_hash_undefined__", m = 500, v = "__lodash_placeholder__", y = 1, _ = 2, C = 4, E = 1, D = 2, V = 1, F = 2, M = 4, L = 8, U = 16, j = 32, ot = 64, rt = 128, Q = 256, lt = 512, Gt = 30, He = "...", Ht = 800, Rt = 16, vt = 1, $t = 2, Ct = 3, Dt = 1 / 0, Ft = 9007199254740991, Be = 17976931348623157e292, je = NaN, it = 4294967295, ze = it - 1, Bn = it >>> 1, nr = [
      ["ary", rt],
      ["bind", V],
      ["bindKey", F],
      ["curry", L],
      ["curryRight", U],
      ["flip", lt],
      ["partial", j],
      ["partialRight", ot],
      ["rearg", Q]
    ], Oe = "[object Arguments]", te = "[object Array]", dn = "[object AsyncFunction]", we = "[object Boolean]", ce = "[object Date]", Ve = "[object DOMException]", ee = "[object Error]", pn = "[object Function]", Ti = "[object GeneratorFunction]", fe = "[object Map]", Ye = "[object Number]", rr = "[object Null]", _e = "[object Object]", Mr = "[object Promise]", ir = "[object Proxy]", On = "[object RegExp]", he = "[object Set]", Xe = "[object String]", sr = "[object Symbol]", Ks = "[object Undefined]", gn = "[object WeakMap]", Ci = "[object WeakSet]", Fe = "[object ArrayBuffer]", mn = "[object DataView]", or = "[object Float32Array]", ar = "[object Float64Array]", Vn = "[object Int8Array]", Dr = "[object Int16Array]", Br = "[object Int32Array]", Or = "[object Uint8Array]", Vr = "[object Uint8ClampedArray]", Fr = "[object Uint16Array]", kr = "[object Uint32Array]", Zs = /\b__p \+= '';/g, Nr = /\b(__p \+=) '' \+/g, Si = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Je = /&(?:amp|lt|gt|quot|#39);/g, ur = /[&<>"']/g, Ur = RegExp(Je.source), Pi = RegExp(ur.source), qs = /<%-([\s\S]+?)%>/g, Ei = /<%([\s\S]+?)%>/g, Ri = /<%=([\s\S]+?)%>/g, Ii = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Li = /^\w*$/, Qs = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Wr = /[\\^$.*+?()[\]{}|]/g, Mi = RegExp(Wr.source), Gr = /^\s+/, Xs = /\s/, Js = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, $s = /\{\n\/\* \[wrapped with (.+)\] \*/, x = /,? & /, O = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, k = /[()=,{}\[\]\/\s]/, q = /\\(\\)?/g, ft = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, dt = /\w*$/, at = /^[-+]0x[0-9a-f]+$/i, nt = /^0b[01]+$/i, kt = /^\[object .+?Constructor\]$/, _t = /^0o[0-7]+$/i, St = /^(?:0|[1-9]\d*)$/, ne = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ke = /($^)/, Di = /['\n\r\u2028\u2029\\]/g, re = "\\ud800-\\udfff", yd = "\\u0300-\\u036f", Ad = "\\ufe20-\\ufe2f", xd = "\\u20d0-\\u20ff", lu = yd + Ad + xd, cu = "\\u2700-\\u27bf", fu = "a-z\\xdf-\\xf6\\xf8-\\xff", wd = "\\xac\\xb1\\xd7\\xf7", _d = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", bd = "\\u2000-\\u206f", Td = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", hu = "A-Z\\xc0-\\xd6\\xd8-\\xde", du = "\\ufe0e\\ufe0f", pu = wd + _d + bd + Td, to = "['’]", Cd = "[" + re + "]", gu = "[" + pu + "]", Bi = "[" + lu + "]", mu = "\\d+", Sd = "[" + cu + "]", vu = "[" + fu + "]", yu = "[^" + re + pu + mu + cu + fu + hu + "]", eo = "\\ud83c[\\udffb-\\udfff]", Pd = "(?:" + Bi + "|" + eo + ")", Au = "[^" + re + "]", no = "(?:\\ud83c[\\udde6-\\uddff]){2}", ro = "[\\ud800-\\udbff][\\udc00-\\udfff]", lr = "[" + hu + "]", xu = "\\u200d", wu = "(?:" + vu + "|" + yu + ")", Ed = "(?:" + lr + "|" + yu + ")", _u = "(?:" + to + "(?:d|ll|m|re|s|t|ve))?", bu = "(?:" + to + "(?:D|LL|M|RE|S|T|VE))?", Tu = Pd + "?", Cu = "[" + du + "]?", Rd = "(?:" + xu + "(?:" + [Au, no, ro].join("|") + ")" + Cu + Tu + ")*", Id = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Ld = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Su = Cu + Tu + Rd, Md = "(?:" + [Sd, no, ro].join("|") + ")" + Su, Dd = "(?:" + [Au + Bi + "?", Bi, no, ro, Cd].join("|") + ")", Bd = RegExp(to, "g"), Od = RegExp(Bi, "g"), io = RegExp(eo + "(?=" + eo + ")|" + Dd + Su, "g"), Vd = RegExp([
      lr + "?" + vu + "+" + _u + "(?=" + [gu, lr, "$"].join("|") + ")",
      Ed + "+" + bu + "(?=" + [gu, lr + wu, "$"].join("|") + ")",
      lr + "?" + wu + "+" + _u,
      lr + "+" + bu,
      Ld,
      Id,
      mu,
      Md
    ].join("|"), "g"), Fd = RegExp("[" + xu + re + lu + du + "]"), kd = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Nd = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], Ud = -1, At = {};
    At[or] = At[ar] = At[Vn] = At[Dr] = At[Br] = At[Or] = At[Vr] = At[Fr] = At[kr] = !0, At[Oe] = At[te] = At[Fe] = At[we] = At[mn] = At[ce] = At[ee] = At[pn] = At[fe] = At[Ye] = At[_e] = At[On] = At[he] = At[Xe] = At[gn] = !1;
    var yt = {};
    yt[Oe] = yt[te] = yt[Fe] = yt[mn] = yt[we] = yt[ce] = yt[or] = yt[ar] = yt[Vn] = yt[Dr] = yt[Br] = yt[fe] = yt[Ye] = yt[_e] = yt[On] = yt[he] = yt[Xe] = yt[sr] = yt[Or] = yt[Vr] = yt[Fr] = yt[kr] = !0, yt[ee] = yt[pn] = yt[gn] = !1;
    var Wd = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, Gd = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, Hd = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, jd = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, zd = parseFloat, Yd = parseInt, Pu = typeof ii == "object" && ii && ii.Object === Object && ii, Kd = typeof self == "object" && self && self.Object === Object && self, Nt = Pu || Kd || Function("return this")(), so = n && !n.nodeType && n, Fn = so && !0 && r && !r.nodeType && r, Eu = Fn && Fn.exports === so, oo = Eu && Pu.process, be = function() {
      try {
        var b = Fn && Fn.require && Fn.require("util").types;
        return b || oo && oo.binding && oo.binding("util");
      } catch {
      }
    }(), Ru = be && be.isArrayBuffer, Iu = be && be.isDate, Lu = be && be.isMap, Mu = be && be.isRegExp, Du = be && be.isSet, Bu = be && be.isTypedArray;
    function de(b, P, S) {
      switch (S.length) {
        case 0:
          return b.call(P);
        case 1:
          return b.call(P, S[0]);
        case 2:
          return b.call(P, S[0], S[1]);
        case 3:
          return b.call(P, S[0], S[1], S[2]);
      }
      return b.apply(P, S);
    }
    function Zd(b, P, S, W) {
      for (var X = -1, ht = b == null ? 0 : b.length; ++X < ht; ) {
        var Bt = b[X];
        P(W, Bt, S(Bt), b);
      }
      return W;
    }
    function Te(b, P) {
      for (var S = -1, W = b == null ? 0 : b.length; ++S < W && P(b[S], S, b) !== !1; )
        ;
      return b;
    }
    function qd(b, P) {
      for (var S = b == null ? 0 : b.length; S-- && P(b[S], S, b) !== !1; )
        ;
      return b;
    }
    function Ou(b, P) {
      for (var S = -1, W = b == null ? 0 : b.length; ++S < W; )
        if (!P(b[S], S, b))
          return !1;
      return !0;
    }
    function vn(b, P) {
      for (var S = -1, W = b == null ? 0 : b.length, X = 0, ht = []; ++S < W; ) {
        var Bt = b[S];
        P(Bt, S, b) && (ht[X++] = Bt);
      }
      return ht;
    }
    function Oi(b, P) {
      var S = b == null ? 0 : b.length;
      return !!S && cr(b, P, 0) > -1;
    }
    function ao(b, P, S) {
      for (var W = -1, X = b == null ? 0 : b.length; ++W < X; )
        if (S(P, b[W]))
          return !0;
      return !1;
    }
    function xt(b, P) {
      for (var S = -1, W = b == null ? 0 : b.length, X = Array(W); ++S < W; )
        X[S] = P(b[S], S, b);
      return X;
    }
    function yn(b, P) {
      for (var S = -1, W = P.length, X = b.length; ++S < W; )
        b[X + S] = P[S];
      return b;
    }
    function uo(b, P, S, W) {
      var X = -1, ht = b == null ? 0 : b.length;
      for (W && ht && (S = b[++X]); ++X < ht; )
        S = P(S, b[X], X, b);
      return S;
    }
    function Qd(b, P, S, W) {
      var X = b == null ? 0 : b.length;
      for (W && X && (S = b[--X]); X--; )
        S = P(S, b[X], X, b);
      return S;
    }
    function lo(b, P) {
      for (var S = -1, W = b == null ? 0 : b.length; ++S < W; )
        if (P(b[S], S, b))
          return !0;
      return !1;
    }
    var Xd = co("length");
    function Jd(b) {
      return b.split("");
    }
    function $d(b) {
      return b.match(O) || [];
    }
    function Vu(b, P, S) {
      var W;
      return S(b, function(X, ht, Bt) {
        if (P(X, ht, Bt))
          return W = ht, !1;
      }), W;
    }
    function Vi(b, P, S, W) {
      for (var X = b.length, ht = S + (W ? 1 : -1); W ? ht-- : ++ht < X; )
        if (P(b[ht], ht, b))
          return ht;
      return -1;
    }
    function cr(b, P, S) {
      return P === P ? fp(b, P, S) : Vi(b, Fu, S);
    }
    function tp(b, P, S, W) {
      for (var X = S - 1, ht = b.length; ++X < ht; )
        if (W(b[X], P))
          return X;
      return -1;
    }
    function Fu(b) {
      return b !== b;
    }
    function ku(b, P) {
      var S = b == null ? 0 : b.length;
      return S ? ho(b, P) / S : je;
    }
    function co(b) {
      return function(P) {
        return P == null ? i : P[b];
      };
    }
    function fo(b) {
      return function(P) {
        return b == null ? i : b[P];
      };
    }
    function Nu(b, P, S, W, X) {
      return X(b, function(ht, Bt, mt) {
        S = W ? (W = !1, ht) : P(S, ht, Bt, mt);
      }), S;
    }
    function ep(b, P) {
      var S = b.length;
      for (b.sort(P); S--; )
        b[S] = b[S].value;
      return b;
    }
    function ho(b, P) {
      for (var S, W = -1, X = b.length; ++W < X; ) {
        var ht = P(b[W]);
        ht !== i && (S = S === i ? ht : S + ht);
      }
      return S;
    }
    function po(b, P) {
      for (var S = -1, W = Array(b); ++S < b; )
        W[S] = P(S);
      return W;
    }
    function np(b, P) {
      return xt(P, function(S) {
        return [S, b[S]];
      });
    }
    function Uu(b) {
      return b && b.slice(0, ju(b) + 1).replace(Gr, "");
    }
    function pe(b) {
      return function(P) {
        return b(P);
      };
    }
    function go(b, P) {
      return xt(P, function(S) {
        return b[S];
      });
    }
    function Hr(b, P) {
      return b.has(P);
    }
    function Wu(b, P) {
      for (var S = -1, W = b.length; ++S < W && cr(P, b[S], 0) > -1; )
        ;
      return S;
    }
    function Gu(b, P) {
      for (var S = b.length; S-- && cr(P, b[S], 0) > -1; )
        ;
      return S;
    }
    function rp(b, P) {
      for (var S = b.length, W = 0; S--; )
        b[S] === P && ++W;
      return W;
    }
    var ip = fo(Wd), sp = fo(Gd);
    function op(b) {
      return "\\" + jd[b];
    }
    function ap(b, P) {
      return b == null ? i : b[P];
    }
    function fr(b) {
      return Fd.test(b);
    }
    function up(b) {
      return kd.test(b);
    }
    function lp(b) {
      for (var P, S = []; !(P = b.next()).done; )
        S.push(P.value);
      return S;
    }
    function mo(b) {
      var P = -1, S = Array(b.size);
      return b.forEach(function(W, X) {
        S[++P] = [X, W];
      }), S;
    }
    function Hu(b, P) {
      return function(S) {
        return b(P(S));
      };
    }
    function An(b, P) {
      for (var S = -1, W = b.length, X = 0, ht = []; ++S < W; ) {
        var Bt = b[S];
        (Bt === P || Bt === v) && (b[S] = v, ht[X++] = S);
      }
      return ht;
    }
    function Fi(b) {
      var P = -1, S = Array(b.size);
      return b.forEach(function(W) {
        S[++P] = W;
      }), S;
    }
    function cp(b) {
      var P = -1, S = Array(b.size);
      return b.forEach(function(W) {
        S[++P] = [W, W];
      }), S;
    }
    function fp(b, P, S) {
      for (var W = S - 1, X = b.length; ++W < X; )
        if (b[W] === P)
          return W;
      return -1;
    }
    function hp(b, P, S) {
      for (var W = S + 1; W--; )
        if (b[W] === P)
          return W;
      return W;
    }
    function hr(b) {
      return fr(b) ? pp(b) : Xd(b);
    }
    function Ne(b) {
      return fr(b) ? gp(b) : Jd(b);
    }
    function ju(b) {
      for (var P = b.length; P-- && Xs.test(b.charAt(P)); )
        ;
      return P;
    }
    var dp = fo(Hd);
    function pp(b) {
      for (var P = io.lastIndex = 0; io.test(b); )
        ++P;
      return P;
    }
    function gp(b) {
      return b.match(io) || [];
    }
    function mp(b) {
      return b.match(Vd) || [];
    }
    var vp = function b(P) {
      P = P == null ? Nt : dr.defaults(Nt.Object(), P, dr.pick(Nt, Nd));
      var S = P.Array, W = P.Date, X = P.Error, ht = P.Function, Bt = P.Math, mt = P.Object, vo = P.RegExp, yp = P.String, Ce = P.TypeError, ki = S.prototype, Ap = ht.prototype, pr = mt.prototype, Ni = P["__core-js_shared__"], Ui = Ap.toString, gt = pr.hasOwnProperty, xp = 0, zu = function() {
        var t = /[^.]+$/.exec(Ni && Ni.keys && Ni.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), Wi = pr.toString, wp = Ui.call(mt), _p = Nt._, bp = vo(
        "^" + Ui.call(gt).replace(Wr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Gi = Eu ? P.Buffer : i, xn = P.Symbol, Hi = P.Uint8Array, Yu = Gi ? Gi.allocUnsafe : i, ji = Hu(mt.getPrototypeOf, mt), Ku = mt.create, Zu = pr.propertyIsEnumerable, zi = ki.splice, qu = xn ? xn.isConcatSpreadable : i, jr = xn ? xn.iterator : i, kn = xn ? xn.toStringTag : i, Yi = function() {
        try {
          var t = Hn(mt, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), Tp = P.clearTimeout !== Nt.clearTimeout && P.clearTimeout, Cp = W && W.now !== Nt.Date.now && W.now, Sp = P.setTimeout !== Nt.setTimeout && P.setTimeout, Ki = Bt.ceil, Zi = Bt.floor, yo = mt.getOwnPropertySymbols, Pp = Gi ? Gi.isBuffer : i, Qu = P.isFinite, Ep = ki.join, Rp = Hu(mt.keys, mt), Ot = Bt.max, jt = Bt.min, Ip = W.now, Lp = P.parseInt, Xu = Bt.random, Mp = ki.reverse, Ao = Hn(P, "DataView"), zr = Hn(P, "Map"), xo = Hn(P, "Promise"), gr = Hn(P, "Set"), Yr = Hn(P, "WeakMap"), Kr = Hn(mt, "create"), qi = Yr && new Yr(), mr = {}, Dp = jn(Ao), Bp = jn(zr), Op = jn(xo), Vp = jn(gr), Fp = jn(Yr), Qi = xn ? xn.prototype : i, Zr = Qi ? Qi.valueOf : i, Ju = Qi ? Qi.toString : i;
      function d(t) {
        if (Pt(t) && !J(t) && !(t instanceof ut)) {
          if (t instanceof Se)
            return t;
          if (gt.call(t, "__wrapped__"))
            return $l(t);
        }
        return new Se(t);
      }
      var vr = /* @__PURE__ */ function() {
        function t() {
        }
        return function(e) {
          if (!bt(e))
            return {};
          if (Ku)
            return Ku(e);
          t.prototype = e;
          var s = new t();
          return t.prototype = i, s;
        };
      }();
      function Xi() {
      }
      function Se(t, e) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = i;
      }
      d.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: qs,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Ei,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Ri,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: d
        }
      }, d.prototype = Xi.prototype, d.prototype.constructor = d, Se.prototype = vr(Xi.prototype), Se.prototype.constructor = Se;
      function ut(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = it, this.__views__ = [];
      }
      function kp() {
        var t = new ut(this.__wrapped__);
        return t.__actions__ = ie(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = ie(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = ie(this.__views__), t;
      }
      function Np() {
        if (this.__filtered__) {
          var t = new ut(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function Up() {
        var t = this.__wrapped__.value(), e = this.__dir__, s = J(t), a = e < 0, c = s ? t.length : 0, g = Jg(0, c, this.__views__), A = g.start, w = g.end, T = w - A, R = a ? w : A - 1, I = this.__iteratees__, B = I.length, N = 0, H = jt(T, this.__takeCount__);
        if (!s || !a && c == T && H == T)
          return _l(t, this.__actions__);
        var Y = [];
        t:
          for (; T-- && N < H; ) {
            R += e;
            for (var tt = -1, K = t[R]; ++tt < B; ) {
              var st = I[tt], ct = st.iteratee, ve = st.type, Zt = ct(K);
              if (ve == $t)
                K = Zt;
              else if (!Zt) {
                if (ve == vt)
                  continue t;
                break t;
              }
            }
            Y[N++] = K;
          }
        return Y;
      }
      ut.prototype = vr(Xi.prototype), ut.prototype.constructor = ut;
      function Nn(t) {
        var e = -1, s = t == null ? 0 : t.length;
        for (this.clear(); ++e < s; ) {
          var a = t[e];
          this.set(a[0], a[1]);
        }
      }
      function Wp() {
        this.__data__ = Kr ? Kr(null) : {}, this.size = 0;
      }
      function Gp(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e;
      }
      function Hp(t) {
        var e = this.__data__;
        if (Kr) {
          var s = e[t];
          return s === p ? i : s;
        }
        return gt.call(e, t) ? e[t] : i;
      }
      function jp(t) {
        var e = this.__data__;
        return Kr ? e[t] !== i : gt.call(e, t);
      }
      function zp(t, e) {
        var s = this.__data__;
        return this.size += this.has(t) ? 0 : 1, s[t] = Kr && e === i ? p : e, this;
      }
      Nn.prototype.clear = Wp, Nn.prototype.delete = Gp, Nn.prototype.get = Hp, Nn.prototype.has = jp, Nn.prototype.set = zp;
      function $e(t) {
        var e = -1, s = t == null ? 0 : t.length;
        for (this.clear(); ++e < s; ) {
          var a = t[e];
          this.set(a[0], a[1]);
        }
      }
      function Yp() {
        this.__data__ = [], this.size = 0;
      }
      function Kp(t) {
        var e = this.__data__, s = Ji(e, t);
        if (s < 0)
          return !1;
        var a = e.length - 1;
        return s == a ? e.pop() : zi.call(e, s, 1), --this.size, !0;
      }
      function Zp(t) {
        var e = this.__data__, s = Ji(e, t);
        return s < 0 ? i : e[s][1];
      }
      function qp(t) {
        return Ji(this.__data__, t) > -1;
      }
      function Qp(t, e) {
        var s = this.__data__, a = Ji(s, t);
        return a < 0 ? (++this.size, s.push([t, e])) : s[a][1] = e, this;
      }
      $e.prototype.clear = Yp, $e.prototype.delete = Kp, $e.prototype.get = Zp, $e.prototype.has = qp, $e.prototype.set = Qp;
      function tn(t) {
        var e = -1, s = t == null ? 0 : t.length;
        for (this.clear(); ++e < s; ) {
          var a = t[e];
          this.set(a[0], a[1]);
        }
      }
      function Xp() {
        this.size = 0, this.__data__ = {
          hash: new Nn(),
          map: new (zr || $e)(),
          string: new Nn()
        };
      }
      function Jp(t) {
        var e = cs(this, t).delete(t);
        return this.size -= e ? 1 : 0, e;
      }
      function $p(t) {
        return cs(this, t).get(t);
      }
      function tg(t) {
        return cs(this, t).has(t);
      }
      function eg(t, e) {
        var s = cs(this, t), a = s.size;
        return s.set(t, e), this.size += s.size == a ? 0 : 1, this;
      }
      tn.prototype.clear = Xp, tn.prototype.delete = Jp, tn.prototype.get = $p, tn.prototype.has = tg, tn.prototype.set = eg;
      function Un(t) {
        var e = -1, s = t == null ? 0 : t.length;
        for (this.__data__ = new tn(); ++e < s; )
          this.add(t[e]);
      }
      function ng(t) {
        return this.__data__.set(t, p), this;
      }
      function rg(t) {
        return this.__data__.has(t);
      }
      Un.prototype.add = Un.prototype.push = ng, Un.prototype.has = rg;
      function Ue(t) {
        var e = this.__data__ = new $e(t);
        this.size = e.size;
      }
      function ig() {
        this.__data__ = new $e(), this.size = 0;
      }
      function sg(t) {
        var e = this.__data__, s = e.delete(t);
        return this.size = e.size, s;
      }
      function og(t) {
        return this.__data__.get(t);
      }
      function ag(t) {
        return this.__data__.has(t);
      }
      function ug(t, e) {
        var s = this.__data__;
        if (s instanceof $e) {
          var a = s.__data__;
          if (!zr || a.length < u - 1)
            return a.push([t, e]), this.size = ++s.size, this;
          s = this.__data__ = new tn(a);
        }
        return s.set(t, e), this.size = s.size, this;
      }
      Ue.prototype.clear = ig, Ue.prototype.delete = sg, Ue.prototype.get = og, Ue.prototype.has = ag, Ue.prototype.set = ug;
      function $u(t, e) {
        var s = J(t), a = !s && zn(t), c = !s && !a && Cn(t), g = !s && !a && !c && wr(t), A = s || a || c || g, w = A ? po(t.length, yp) : [], T = w.length;
        for (var R in t)
          (e || gt.call(t, R)) && !(A && // Safari 9 has enumerable `arguments.length` in strict mode.
          (R == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          c && (R == "offset" || R == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          g && (R == "buffer" || R == "byteLength" || R == "byteOffset") || // Skip index properties.
          sn(R, T))) && w.push(R);
        return w;
      }
      function tl(t) {
        var e = t.length;
        return e ? t[Lo(0, e - 1)] : i;
      }
      function lg(t, e) {
        return fs(ie(t), Wn(e, 0, t.length));
      }
      function cg(t) {
        return fs(ie(t));
      }
      function wo(t, e, s) {
        (s !== i && !We(t[e], s) || s === i && !(e in t)) && en(t, e, s);
      }
      function qr(t, e, s) {
        var a = t[e];
        (!(gt.call(t, e) && We(a, s)) || s === i && !(e in t)) && en(t, e, s);
      }
      function Ji(t, e) {
        for (var s = t.length; s--; )
          if (We(t[s][0], e))
            return s;
        return -1;
      }
      function fg(t, e, s, a) {
        return wn(t, function(c, g, A) {
          e(a, c, s(c), A);
        }), a;
      }
      function el(t, e) {
        return t && Ze(e, Vt(e), t);
      }
      function hg(t, e) {
        return t && Ze(e, oe(e), t);
      }
      function en(t, e, s) {
        e == "__proto__" && Yi ? Yi(t, e, {
          configurable: !0,
          enumerable: !0,
          value: s,
          writable: !0
        }) : t[e] = s;
      }
      function _o(t, e) {
        for (var s = -1, a = e.length, c = S(a), g = t == null; ++s < a; )
          c[s] = g ? i : na(t, e[s]);
        return c;
      }
      function Wn(t, e, s) {
        return t === t && (s !== i && (t = t <= s ? t : s), e !== i && (t = t >= e ? t : e)), t;
      }
      function Pe(t, e, s, a, c, g) {
        var A, w = e & y, T = e & _, R = e & C;
        if (s && (A = c ? s(t, a, c, g) : s(t)), A !== i)
          return A;
        if (!bt(t))
          return t;
        var I = J(t);
        if (I) {
          if (A = tm(t), !w)
            return ie(t, A);
        } else {
          var B = zt(t), N = B == pn || B == Ti;
          if (Cn(t))
            return Cl(t, w);
          if (B == _e || B == Oe || N && !c) {
            if (A = T || N ? {} : jl(t), !w)
              return T ? Hg(t, hg(A, t)) : Gg(t, el(A, t));
          } else {
            if (!yt[B])
              return c ? t : {};
            A = em(t, B, w);
          }
        }
        g || (g = new Ue());
        var H = g.get(t);
        if (H)
          return H;
        g.set(t, A), Ac(t) ? t.forEach(function(K) {
          A.add(Pe(K, e, s, K, t, g));
        }) : vc(t) && t.forEach(function(K, st) {
          A.set(st, Pe(K, e, s, st, t, g));
        });
        var Y = R ? T ? Go : Wo : T ? oe : Vt, tt = I ? i : Y(t);
        return Te(tt || t, function(K, st) {
          tt && (st = K, K = t[st]), qr(A, st, Pe(K, e, s, st, t, g));
        }), A;
      }
      function dg(t) {
        var e = Vt(t);
        return function(s) {
          return nl(s, t, e);
        };
      }
      function nl(t, e, s) {
        var a = s.length;
        if (t == null)
          return !a;
        for (t = mt(t); a--; ) {
          var c = s[a], g = e[c], A = t[c];
          if (A === i && !(c in t) || !g(A))
            return !1;
        }
        return !0;
      }
      function rl(t, e, s) {
        if (typeof t != "function")
          throw new Ce(l);
        return ni(function() {
          t.apply(i, s);
        }, e);
      }
      function Qr(t, e, s, a) {
        var c = -1, g = Oi, A = !0, w = t.length, T = [], R = e.length;
        if (!w)
          return T;
        s && (e = xt(e, pe(s))), a ? (g = ao, A = !1) : e.length >= u && (g = Hr, A = !1, e = new Un(e));
        t:
          for (; ++c < w; ) {
            var I = t[c], B = s == null ? I : s(I);
            if (I = a || I !== 0 ? I : 0, A && B === B) {
              for (var N = R; N--; )
                if (e[N] === B)
                  continue t;
              T.push(I);
            } else
              g(e, B, a) || T.push(I);
          }
        return T;
      }
      var wn = Il(Ke), il = Il(To, !0);
      function pg(t, e) {
        var s = !0;
        return wn(t, function(a, c, g) {
          return s = !!e(a, c, g), s;
        }), s;
      }
      function $i(t, e, s) {
        for (var a = -1, c = t.length; ++a < c; ) {
          var g = t[a], A = e(g);
          if (A != null && (w === i ? A === A && !me(A) : s(A, w)))
            var w = A, T = g;
        }
        return T;
      }
      function gg(t, e, s, a) {
        var c = t.length;
        for (s = $(s), s < 0 && (s = -s > c ? 0 : c + s), a = a === i || a > c ? c : $(a), a < 0 && (a += c), a = s > a ? 0 : wc(a); s < a; )
          t[s++] = e;
        return t;
      }
      function sl(t, e) {
        var s = [];
        return wn(t, function(a, c, g) {
          e(a, c, g) && s.push(a);
        }), s;
      }
      function Ut(t, e, s, a, c) {
        var g = -1, A = t.length;
        for (s || (s = rm), c || (c = []); ++g < A; ) {
          var w = t[g];
          e > 0 && s(w) ? e > 1 ? Ut(w, e - 1, s, a, c) : yn(c, w) : a || (c[c.length] = w);
        }
        return c;
      }
      var bo = Ll(), ol = Ll(!0);
      function Ke(t, e) {
        return t && bo(t, e, Vt);
      }
      function To(t, e) {
        return t && ol(t, e, Vt);
      }
      function ts(t, e) {
        return vn(e, function(s) {
          return on(t[s]);
        });
      }
      function Gn(t, e) {
        e = bn(e, t);
        for (var s = 0, a = e.length; t != null && s < a; )
          t = t[qe(e[s++])];
        return s && s == a ? t : i;
      }
      function al(t, e, s) {
        var a = e(t);
        return J(t) ? a : yn(a, s(t));
      }
      function Yt(t) {
        return t == null ? t === i ? Ks : rr : kn && kn in mt(t) ? Xg(t) : cm(t);
      }
      function Co(t, e) {
        return t > e;
      }
      function mg(t, e) {
        return t != null && gt.call(t, e);
      }
      function vg(t, e) {
        return t != null && e in mt(t);
      }
      function yg(t, e, s) {
        return t >= jt(e, s) && t < Ot(e, s);
      }
      function So(t, e, s) {
        for (var a = s ? ao : Oi, c = t[0].length, g = t.length, A = g, w = S(g), T = 1 / 0, R = []; A--; ) {
          var I = t[A];
          A && e && (I = xt(I, pe(e))), T = jt(I.length, T), w[A] = !s && (e || c >= 120 && I.length >= 120) ? new Un(A && I) : i;
        }
        I = t[0];
        var B = -1, N = w[0];
        t:
          for (; ++B < c && R.length < T; ) {
            var H = I[B], Y = e ? e(H) : H;
            if (H = s || H !== 0 ? H : 0, !(N ? Hr(N, Y) : a(R, Y, s))) {
              for (A = g; --A; ) {
                var tt = w[A];
                if (!(tt ? Hr(tt, Y) : a(t[A], Y, s)))
                  continue t;
              }
              N && N.push(Y), R.push(H);
            }
          }
        return R;
      }
      function Ag(t, e, s, a) {
        return Ke(t, function(c, g, A) {
          e(a, s(c), g, A);
        }), a;
      }
      function Xr(t, e, s) {
        e = bn(e, t), t = Zl(t, e);
        var a = t == null ? t : t[qe(Re(e))];
        return a == null ? i : de(a, t, s);
      }
      function ul(t) {
        return Pt(t) && Yt(t) == Oe;
      }
      function xg(t) {
        return Pt(t) && Yt(t) == Fe;
      }
      function wg(t) {
        return Pt(t) && Yt(t) == ce;
      }
      function Jr(t, e, s, a, c) {
        return t === e ? !0 : t == null || e == null || !Pt(t) && !Pt(e) ? t !== t && e !== e : _g(t, e, s, a, Jr, c);
      }
      function _g(t, e, s, a, c, g) {
        var A = J(t), w = J(e), T = A ? te : zt(t), R = w ? te : zt(e);
        T = T == Oe ? _e : T, R = R == Oe ? _e : R;
        var I = T == _e, B = R == _e, N = T == R;
        if (N && Cn(t)) {
          if (!Cn(e))
            return !1;
          A = !0, I = !1;
        }
        if (N && !I)
          return g || (g = new Ue()), A || wr(t) ? Wl(t, e, s, a, c, g) : qg(t, e, T, s, a, c, g);
        if (!(s & E)) {
          var H = I && gt.call(t, "__wrapped__"), Y = B && gt.call(e, "__wrapped__");
          if (H || Y) {
            var tt = H ? t.value() : t, K = Y ? e.value() : e;
            return g || (g = new Ue()), c(tt, K, s, a, g);
          }
        }
        return N ? (g || (g = new Ue()), Qg(t, e, s, a, c, g)) : !1;
      }
      function bg(t) {
        return Pt(t) && zt(t) == fe;
      }
      function Po(t, e, s, a) {
        var c = s.length, g = c, A = !a;
        if (t == null)
          return !g;
        for (t = mt(t); c--; ) {
          var w = s[c];
          if (A && w[2] ? w[1] !== t[w[0]] : !(w[0] in t))
            return !1;
        }
        for (; ++c < g; ) {
          w = s[c];
          var T = w[0], R = t[T], I = w[1];
          if (A && w[2]) {
            if (R === i && !(T in t))
              return !1;
          } else {
            var B = new Ue();
            if (a)
              var N = a(R, I, T, t, e, B);
            if (!(N === i ? Jr(I, R, E | D, a, B) : N))
              return !1;
          }
        }
        return !0;
      }
      function ll(t) {
        if (!bt(t) || sm(t))
          return !1;
        var e = on(t) ? bp : kt;
        return e.test(jn(t));
      }
      function Tg(t) {
        return Pt(t) && Yt(t) == On;
      }
      function Cg(t) {
        return Pt(t) && zt(t) == he;
      }
      function Sg(t) {
        return Pt(t) && vs(t.length) && !!At[Yt(t)];
      }
      function cl(t) {
        return typeof t == "function" ? t : t == null ? ae : typeof t == "object" ? J(t) ? dl(t[0], t[1]) : hl(t) : Mc(t);
      }
      function Eo(t) {
        if (!ei(t))
          return Rp(t);
        var e = [];
        for (var s in mt(t))
          gt.call(t, s) && s != "constructor" && e.push(s);
        return e;
      }
      function Pg(t) {
        if (!bt(t))
          return lm(t);
        var e = ei(t), s = [];
        for (var a in t)
          a == "constructor" && (e || !gt.call(t, a)) || s.push(a);
        return s;
      }
      function Ro(t, e) {
        return t < e;
      }
      function fl(t, e) {
        var s = -1, a = se(t) ? S(t.length) : [];
        return wn(t, function(c, g, A) {
          a[++s] = e(c, g, A);
        }), a;
      }
      function hl(t) {
        var e = jo(t);
        return e.length == 1 && e[0][2] ? Yl(e[0][0], e[0][1]) : function(s) {
          return s === t || Po(s, t, e);
        };
      }
      function dl(t, e) {
        return Yo(t) && zl(e) ? Yl(qe(t), e) : function(s) {
          var a = na(s, t);
          return a === i && a === e ? ra(s, t) : Jr(e, a, E | D);
        };
      }
      function es(t, e, s, a, c) {
        t !== e && bo(e, function(g, A) {
          if (c || (c = new Ue()), bt(g))
            Eg(t, e, A, s, es, a, c);
          else {
            var w = a ? a(Zo(t, A), g, A + "", t, e, c) : i;
            w === i && (w = g), wo(t, A, w);
          }
        }, oe);
      }
      function Eg(t, e, s, a, c, g, A) {
        var w = Zo(t, s), T = Zo(e, s), R = A.get(T);
        if (R) {
          wo(t, s, R);
          return;
        }
        var I = g ? g(w, T, s + "", t, e, A) : i, B = I === i;
        if (B) {
          var N = J(T), H = !N && Cn(T), Y = !N && !H && wr(T);
          I = T, N || H || Y ? J(w) ? I = w : It(w) ? I = ie(w) : H ? (B = !1, I = Cl(T, !0)) : Y ? (B = !1, I = Sl(T, !0)) : I = [] : ri(T) || zn(T) ? (I = w, zn(w) ? I = _c(w) : (!bt(w) || on(w)) && (I = jl(T))) : B = !1;
        }
        B && (A.set(T, I), c(I, T, a, g, A), A.delete(T)), wo(t, s, I);
      }
      function pl(t, e) {
        var s = t.length;
        if (s)
          return e += e < 0 ? s : 0, sn(e, s) ? t[e] : i;
      }
      function gl(t, e, s) {
        e.length ? e = xt(e, function(g) {
          return J(g) ? function(A) {
            return Gn(A, g.length === 1 ? g[0] : g);
          } : g;
        }) : e = [ae];
        var a = -1;
        e = xt(e, pe(z()));
        var c = fl(t, function(g, A, w) {
          var T = xt(e, function(R) {
            return R(g);
          });
          return { criteria: T, index: ++a, value: g };
        });
        return ep(c, function(g, A) {
          return Wg(g, A, s);
        });
      }
      function Rg(t, e) {
        return ml(t, e, function(s, a) {
          return ra(t, a);
        });
      }
      function ml(t, e, s) {
        for (var a = -1, c = e.length, g = {}; ++a < c; ) {
          var A = e[a], w = Gn(t, A);
          s(w, A) && $r(g, bn(A, t), w);
        }
        return g;
      }
      function Ig(t) {
        return function(e) {
          return Gn(e, t);
        };
      }
      function Io(t, e, s, a) {
        var c = a ? tp : cr, g = -1, A = e.length, w = t;
        for (t === e && (e = ie(e)), s && (w = xt(t, pe(s))); ++g < A; )
          for (var T = 0, R = e[g], I = s ? s(R) : R; (T = c(w, I, T, a)) > -1; )
            w !== t && zi.call(w, T, 1), zi.call(t, T, 1);
        return t;
      }
      function vl(t, e) {
        for (var s = t ? e.length : 0, a = s - 1; s--; ) {
          var c = e[s];
          if (s == a || c !== g) {
            var g = c;
            sn(c) ? zi.call(t, c, 1) : Bo(t, c);
          }
        }
        return t;
      }
      function Lo(t, e) {
        return t + Zi(Xu() * (e - t + 1));
      }
      function Lg(t, e, s, a) {
        for (var c = -1, g = Ot(Ki((e - t) / (s || 1)), 0), A = S(g); g--; )
          A[a ? g : ++c] = t, t += s;
        return A;
      }
      function Mo(t, e) {
        var s = "";
        if (!t || e < 1 || e > Ft)
          return s;
        do
          e % 2 && (s += t), e = Zi(e / 2), e && (t += t);
        while (e);
        return s;
      }
      function et(t, e) {
        return qo(Kl(t, e, ae), t + "");
      }
      function Mg(t) {
        return tl(_r(t));
      }
      function Dg(t, e) {
        var s = _r(t);
        return fs(s, Wn(e, 0, s.length));
      }
      function $r(t, e, s, a) {
        if (!bt(t))
          return t;
        e = bn(e, t);
        for (var c = -1, g = e.length, A = g - 1, w = t; w != null && ++c < g; ) {
          var T = qe(e[c]), R = s;
          if (T === "__proto__" || T === "constructor" || T === "prototype")
            return t;
          if (c != A) {
            var I = w[T];
            R = a ? a(I, T, w) : i, R === i && (R = bt(I) ? I : sn(e[c + 1]) ? [] : {});
          }
          qr(w, T, R), w = w[T];
        }
        return t;
      }
      var yl = qi ? function(t, e) {
        return qi.set(t, e), t;
      } : ae, Bg = Yi ? function(t, e) {
        return Yi(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: sa(e),
          writable: !0
        });
      } : ae;
      function Og(t) {
        return fs(_r(t));
      }
      function Ee(t, e, s) {
        var a = -1, c = t.length;
        e < 0 && (e = -e > c ? 0 : c + e), s = s > c ? c : s, s < 0 && (s += c), c = e > s ? 0 : s - e >>> 0, e >>>= 0;
        for (var g = S(c); ++a < c; )
          g[a] = t[a + e];
        return g;
      }
      function Vg(t, e) {
        var s;
        return wn(t, function(a, c, g) {
          return s = e(a, c, g), !s;
        }), !!s;
      }
      function ns(t, e, s) {
        var a = 0, c = t == null ? a : t.length;
        if (typeof e == "number" && e === e && c <= Bn) {
          for (; a < c; ) {
            var g = a + c >>> 1, A = t[g];
            A !== null && !me(A) && (s ? A <= e : A < e) ? a = g + 1 : c = g;
          }
          return c;
        }
        return Do(t, e, ae, s);
      }
      function Do(t, e, s, a) {
        var c = 0, g = t == null ? 0 : t.length;
        if (g === 0)
          return 0;
        e = s(e);
        for (var A = e !== e, w = e === null, T = me(e), R = e === i; c < g; ) {
          var I = Zi((c + g) / 2), B = s(t[I]), N = B !== i, H = B === null, Y = B === B, tt = me(B);
          if (A)
            var K = a || Y;
          else
            R ? K = Y && (a || N) : w ? K = Y && N && (a || !H) : T ? K = Y && N && !H && (a || !tt) : H || tt ? K = !1 : K = a ? B <= e : B < e;
          K ? c = I + 1 : g = I;
        }
        return jt(g, ze);
      }
      function Al(t, e) {
        for (var s = -1, a = t.length, c = 0, g = []; ++s < a; ) {
          var A = t[s], w = e ? e(A) : A;
          if (!s || !We(w, T)) {
            var T = w;
            g[c++] = A === 0 ? 0 : A;
          }
        }
        return g;
      }
      function xl(t) {
        return typeof t == "number" ? t : me(t) ? je : +t;
      }
      function ge(t) {
        if (typeof t == "string")
          return t;
        if (J(t))
          return xt(t, ge) + "";
        if (me(t))
          return Ju ? Ju.call(t) : "";
        var e = t + "";
        return e == "0" && 1 / t == -Dt ? "-0" : e;
      }
      function _n(t, e, s) {
        var a = -1, c = Oi, g = t.length, A = !0, w = [], T = w;
        if (s)
          A = !1, c = ao;
        else if (g >= u) {
          var R = e ? null : Kg(t);
          if (R)
            return Fi(R);
          A = !1, c = Hr, T = new Un();
        } else
          T = e ? [] : w;
        t:
          for (; ++a < g; ) {
            var I = t[a], B = e ? e(I) : I;
            if (I = s || I !== 0 ? I : 0, A && B === B) {
              for (var N = T.length; N--; )
                if (T[N] === B)
                  continue t;
              e && T.push(B), w.push(I);
            } else
              c(T, B, s) || (T !== w && T.push(B), w.push(I));
          }
        return w;
      }
      function Bo(t, e) {
        return e = bn(e, t), t = Zl(t, e), t == null || delete t[qe(Re(e))];
      }
      function wl(t, e, s, a) {
        return $r(t, e, s(Gn(t, e)), a);
      }
      function rs(t, e, s, a) {
        for (var c = t.length, g = a ? c : -1; (a ? g-- : ++g < c) && e(t[g], g, t); )
          ;
        return s ? Ee(t, a ? 0 : g, a ? g + 1 : c) : Ee(t, a ? g + 1 : 0, a ? c : g);
      }
      function _l(t, e) {
        var s = t;
        return s instanceof ut && (s = s.value()), uo(e, function(a, c) {
          return c.func.apply(c.thisArg, yn([a], c.args));
        }, s);
      }
      function Oo(t, e, s) {
        var a = t.length;
        if (a < 2)
          return a ? _n(t[0]) : [];
        for (var c = -1, g = S(a); ++c < a; )
          for (var A = t[c], w = -1; ++w < a; )
            w != c && (g[c] = Qr(g[c] || A, t[w], e, s));
        return _n(Ut(g, 1), e, s);
      }
      function bl(t, e, s) {
        for (var a = -1, c = t.length, g = e.length, A = {}; ++a < c; ) {
          var w = a < g ? e[a] : i;
          s(A, t[a], w);
        }
        return A;
      }
      function Vo(t) {
        return It(t) ? t : [];
      }
      function Fo(t) {
        return typeof t == "function" ? t : ae;
      }
      function bn(t, e) {
        return J(t) ? t : Yo(t, e) ? [t] : Jl(pt(t));
      }
      var Fg = et;
      function Tn(t, e, s) {
        var a = t.length;
        return s = s === i ? a : s, !e && s >= a ? t : Ee(t, e, s);
      }
      var Tl = Tp || function(t) {
        return Nt.clearTimeout(t);
      };
      function Cl(t, e) {
        if (e)
          return t.slice();
        var s = t.length, a = Yu ? Yu(s) : new t.constructor(s);
        return t.copy(a), a;
      }
      function ko(t) {
        var e = new t.constructor(t.byteLength);
        return new Hi(e).set(new Hi(t)), e;
      }
      function kg(t, e) {
        var s = e ? ko(t.buffer) : t.buffer;
        return new t.constructor(s, t.byteOffset, t.byteLength);
      }
      function Ng(t) {
        var e = new t.constructor(t.source, dt.exec(t));
        return e.lastIndex = t.lastIndex, e;
      }
      function Ug(t) {
        return Zr ? mt(Zr.call(t)) : {};
      }
      function Sl(t, e) {
        var s = e ? ko(t.buffer) : t.buffer;
        return new t.constructor(s, t.byteOffset, t.length);
      }
      function Pl(t, e) {
        if (t !== e) {
          var s = t !== i, a = t === null, c = t === t, g = me(t), A = e !== i, w = e === null, T = e === e, R = me(e);
          if (!w && !R && !g && t > e || g && A && T && !w && !R || a && A && T || !s && T || !c)
            return 1;
          if (!a && !g && !R && t < e || R && s && c && !a && !g || w && s && c || !A && c || !T)
            return -1;
        }
        return 0;
      }
      function Wg(t, e, s) {
        for (var a = -1, c = t.criteria, g = e.criteria, A = c.length, w = s.length; ++a < A; ) {
          var T = Pl(c[a], g[a]);
          if (T) {
            if (a >= w)
              return T;
            var R = s[a];
            return T * (R == "desc" ? -1 : 1);
          }
        }
        return t.index - e.index;
      }
      function El(t, e, s, a) {
        for (var c = -1, g = t.length, A = s.length, w = -1, T = e.length, R = Ot(g - A, 0), I = S(T + R), B = !a; ++w < T; )
          I[w] = e[w];
        for (; ++c < A; )
          (B || c < g) && (I[s[c]] = t[c]);
        for (; R--; )
          I[w++] = t[c++];
        return I;
      }
      function Rl(t, e, s, a) {
        for (var c = -1, g = t.length, A = -1, w = s.length, T = -1, R = e.length, I = Ot(g - w, 0), B = S(I + R), N = !a; ++c < I; )
          B[c] = t[c];
        for (var H = c; ++T < R; )
          B[H + T] = e[T];
        for (; ++A < w; )
          (N || c < g) && (B[H + s[A]] = t[c++]);
        return B;
      }
      function ie(t, e) {
        var s = -1, a = t.length;
        for (e || (e = S(a)); ++s < a; )
          e[s] = t[s];
        return e;
      }
      function Ze(t, e, s, a) {
        var c = !s;
        s || (s = {});
        for (var g = -1, A = e.length; ++g < A; ) {
          var w = e[g], T = a ? a(s[w], t[w], w, s, t) : i;
          T === i && (T = t[w]), c ? en(s, w, T) : qr(s, w, T);
        }
        return s;
      }
      function Gg(t, e) {
        return Ze(t, zo(t), e);
      }
      function Hg(t, e) {
        return Ze(t, Gl(t), e);
      }
      function is(t, e) {
        return function(s, a) {
          var c = J(s) ? Zd : fg, g = e ? e() : {};
          return c(s, t, z(a, 2), g);
        };
      }
      function yr(t) {
        return et(function(e, s) {
          var a = -1, c = s.length, g = c > 1 ? s[c - 1] : i, A = c > 2 ? s[2] : i;
          for (g = t.length > 3 && typeof g == "function" ? (c--, g) : i, A && Kt(s[0], s[1], A) && (g = c < 3 ? i : g, c = 1), e = mt(e); ++a < c; ) {
            var w = s[a];
            w && t(e, w, a, g);
          }
          return e;
        });
      }
      function Il(t, e) {
        return function(s, a) {
          if (s == null)
            return s;
          if (!se(s))
            return t(s, a);
          for (var c = s.length, g = e ? c : -1, A = mt(s); (e ? g-- : ++g < c) && a(A[g], g, A) !== !1; )
            ;
          return s;
        };
      }
      function Ll(t) {
        return function(e, s, a) {
          for (var c = -1, g = mt(e), A = a(e), w = A.length; w--; ) {
            var T = A[t ? w : ++c];
            if (s(g[T], T, g) === !1)
              break;
          }
          return e;
        };
      }
      function jg(t, e, s) {
        var a = e & V, c = ti(t);
        function g() {
          var A = this && this !== Nt && this instanceof g ? c : t;
          return A.apply(a ? s : this, arguments);
        }
        return g;
      }
      function Ml(t) {
        return function(e) {
          e = pt(e);
          var s = fr(e) ? Ne(e) : i, a = s ? s[0] : e.charAt(0), c = s ? Tn(s, 1).join("") : e.slice(1);
          return a[t]() + c;
        };
      }
      function Ar(t) {
        return function(e) {
          return uo(Ic(Rc(e).replace(Bd, "")), t, "");
        };
      }
      function ti(t) {
        return function() {
          var e = arguments;
          switch (e.length) {
            case 0:
              return new t();
            case 1:
              return new t(e[0]);
            case 2:
              return new t(e[0], e[1]);
            case 3:
              return new t(e[0], e[1], e[2]);
            case 4:
              return new t(e[0], e[1], e[2], e[3]);
            case 5:
              return new t(e[0], e[1], e[2], e[3], e[4]);
            case 6:
              return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
            case 7:
              return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);
          }
          var s = vr(t.prototype), a = t.apply(s, e);
          return bt(a) ? a : s;
        };
      }
      function zg(t, e, s) {
        var a = ti(t);
        function c() {
          for (var g = arguments.length, A = S(g), w = g, T = xr(c); w--; )
            A[w] = arguments[w];
          var R = g < 3 && A[0] !== T && A[g - 1] !== T ? [] : An(A, T);
          if (g -= R.length, g < s)
            return Fl(
              t,
              e,
              ss,
              c.placeholder,
              i,
              A,
              R,
              i,
              i,
              s - g
            );
          var I = this && this !== Nt && this instanceof c ? a : t;
          return de(I, this, A);
        }
        return c;
      }
      function Dl(t) {
        return function(e, s, a) {
          var c = mt(e);
          if (!se(e)) {
            var g = z(s, 3);
            e = Vt(e), s = function(w) {
              return g(c[w], w, c);
            };
          }
          var A = t(e, s, a);
          return A > -1 ? c[g ? e[A] : A] : i;
        };
      }
      function Bl(t) {
        return rn(function(e) {
          var s = e.length, a = s, c = Se.prototype.thru;
          for (t && e.reverse(); a--; ) {
            var g = e[a];
            if (typeof g != "function")
              throw new Ce(l);
            if (c && !A && ls(g) == "wrapper")
              var A = new Se([], !0);
          }
          for (a = A ? a : s; ++a < s; ) {
            g = e[a];
            var w = ls(g), T = w == "wrapper" ? Ho(g) : i;
            T && Ko(T[0]) && T[1] == (rt | L | j | Q) && !T[4].length && T[9] == 1 ? A = A[ls(T[0])].apply(A, T[3]) : A = g.length == 1 && Ko(g) ? A[w]() : A.thru(g);
          }
          return function() {
            var R = arguments, I = R[0];
            if (A && R.length == 1 && J(I))
              return A.plant(I).value();
            for (var B = 0, N = s ? e[B].apply(this, R) : I; ++B < s; )
              N = e[B].call(this, N);
            return N;
          };
        });
      }
      function ss(t, e, s, a, c, g, A, w, T, R) {
        var I = e & rt, B = e & V, N = e & F, H = e & (L | U), Y = e & lt, tt = N ? i : ti(t);
        function K() {
          for (var st = arguments.length, ct = S(st), ve = st; ve--; )
            ct[ve] = arguments[ve];
          if (H)
            var Zt = xr(K), ye = rp(ct, Zt);
          if (a && (ct = El(ct, a, c, H)), g && (ct = Rl(ct, g, A, H)), st -= ye, H && st < R) {
            var Lt = An(ct, Zt);
            return Fl(
              t,
              e,
              ss,
              K.placeholder,
              s,
              ct,
              Lt,
              w,
              T,
              R - st
            );
          }
          var Ge = B ? s : this, un = N ? Ge[t] : t;
          return st = ct.length, w ? ct = fm(ct, w) : Y && st > 1 && ct.reverse(), I && T < st && (ct.length = T), this && this !== Nt && this instanceof K && (un = tt || ti(un)), un.apply(Ge, ct);
        }
        return K;
      }
      function Ol(t, e) {
        return function(s, a) {
          return Ag(s, t, e(a), {});
        };
      }
      function os(t, e) {
        return function(s, a) {
          var c;
          if (s === i && a === i)
            return e;
          if (s !== i && (c = s), a !== i) {
            if (c === i)
              return a;
            typeof s == "string" || typeof a == "string" ? (s = ge(s), a = ge(a)) : (s = xl(s), a = xl(a)), c = t(s, a);
          }
          return c;
        };
      }
      function No(t) {
        return rn(function(e) {
          return e = xt(e, pe(z())), et(function(s) {
            var a = this;
            return t(e, function(c) {
              return de(c, a, s);
            });
          });
        });
      }
      function as(t, e) {
        e = e === i ? " " : ge(e);
        var s = e.length;
        if (s < 2)
          return s ? Mo(e, t) : e;
        var a = Mo(e, Ki(t / hr(e)));
        return fr(e) ? Tn(Ne(a), 0, t).join("") : a.slice(0, t);
      }
      function Yg(t, e, s, a) {
        var c = e & V, g = ti(t);
        function A() {
          for (var w = -1, T = arguments.length, R = -1, I = a.length, B = S(I + T), N = this && this !== Nt && this instanceof A ? g : t; ++R < I; )
            B[R] = a[R];
          for (; T--; )
            B[R++] = arguments[++w];
          return de(N, c ? s : this, B);
        }
        return A;
      }
      function Vl(t) {
        return function(e, s, a) {
          return a && typeof a != "number" && Kt(e, s, a) && (s = a = i), e = an(e), s === i ? (s = e, e = 0) : s = an(s), a = a === i ? e < s ? 1 : -1 : an(a), Lg(e, s, a, t);
        };
      }
      function us(t) {
        return function(e, s) {
          return typeof e == "string" && typeof s == "string" || (e = Ie(e), s = Ie(s)), t(e, s);
        };
      }
      function Fl(t, e, s, a, c, g, A, w, T, R) {
        var I = e & L, B = I ? A : i, N = I ? i : A, H = I ? g : i, Y = I ? i : g;
        e |= I ? j : ot, e &= ~(I ? ot : j), e & M || (e &= ~(V | F));
        var tt = [
          t,
          e,
          c,
          H,
          B,
          Y,
          N,
          w,
          T,
          R
        ], K = s.apply(i, tt);
        return Ko(t) && ql(K, tt), K.placeholder = a, Ql(K, t, e);
      }
      function Uo(t) {
        var e = Bt[t];
        return function(s, a) {
          if (s = Ie(s), a = a == null ? 0 : jt($(a), 292), a && Qu(s)) {
            var c = (pt(s) + "e").split("e"), g = e(c[0] + "e" + (+c[1] + a));
            return c = (pt(g) + "e").split("e"), +(c[0] + "e" + (+c[1] - a));
          }
          return e(s);
        };
      }
      var Kg = gr && 1 / Fi(new gr([, -0]))[1] == Dt ? function(t) {
        return new gr(t);
      } : ua;
      function kl(t) {
        return function(e) {
          var s = zt(e);
          return s == fe ? mo(e) : s == he ? cp(e) : np(e, t(e));
        };
      }
      function nn(t, e, s, a, c, g, A, w) {
        var T = e & F;
        if (!T && typeof t != "function")
          throw new Ce(l);
        var R = a ? a.length : 0;
        if (R || (e &= ~(j | ot), a = c = i), A = A === i ? A : Ot($(A), 0), w = w === i ? w : $(w), R -= c ? c.length : 0, e & ot) {
          var I = a, B = c;
          a = c = i;
        }
        var N = T ? i : Ho(t), H = [
          t,
          e,
          s,
          a,
          c,
          I,
          B,
          g,
          A,
          w
        ];
        if (N && um(H, N), t = H[0], e = H[1], s = H[2], a = H[3], c = H[4], w = H[9] = H[9] === i ? T ? 0 : t.length : Ot(H[9] - R, 0), !w && e & (L | U) && (e &= ~(L | U)), !e || e == V)
          var Y = jg(t, e, s);
        else
          e == L || e == U ? Y = zg(t, e, w) : (e == j || e == (V | j)) && !c.length ? Y = Yg(t, e, s, a) : Y = ss.apply(i, H);
        var tt = N ? yl : ql;
        return Ql(tt(Y, H), t, e);
      }
      function Nl(t, e, s, a) {
        return t === i || We(t, pr[s]) && !gt.call(a, s) ? e : t;
      }
      function Ul(t, e, s, a, c, g) {
        return bt(t) && bt(e) && (g.set(e, t), es(t, e, i, Ul, g), g.delete(e)), t;
      }
      function Zg(t) {
        return ri(t) ? i : t;
      }
      function Wl(t, e, s, a, c, g) {
        var A = s & E, w = t.length, T = e.length;
        if (w != T && !(A && T > w))
          return !1;
        var R = g.get(t), I = g.get(e);
        if (R && I)
          return R == e && I == t;
        var B = -1, N = !0, H = s & D ? new Un() : i;
        for (g.set(t, e), g.set(e, t); ++B < w; ) {
          var Y = t[B], tt = e[B];
          if (a)
            var K = A ? a(tt, Y, B, e, t, g) : a(Y, tt, B, t, e, g);
          if (K !== i) {
            if (K)
              continue;
            N = !1;
            break;
          }
          if (H) {
            if (!lo(e, function(st, ct) {
              if (!Hr(H, ct) && (Y === st || c(Y, st, s, a, g)))
                return H.push(ct);
            })) {
              N = !1;
              break;
            }
          } else if (!(Y === tt || c(Y, tt, s, a, g))) {
            N = !1;
            break;
          }
        }
        return g.delete(t), g.delete(e), N;
      }
      function qg(t, e, s, a, c, g, A) {
        switch (s) {
          case mn:
            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
              return !1;
            t = t.buffer, e = e.buffer;
          case Fe:
            return !(t.byteLength != e.byteLength || !g(new Hi(t), new Hi(e)));
          case we:
          case ce:
          case Ye:
            return We(+t, +e);
          case ee:
            return t.name == e.name && t.message == e.message;
          case On:
          case Xe:
            return t == e + "";
          case fe:
            var w = mo;
          case he:
            var T = a & E;
            if (w || (w = Fi), t.size != e.size && !T)
              return !1;
            var R = A.get(t);
            if (R)
              return R == e;
            a |= D, A.set(t, e);
            var I = Wl(w(t), w(e), a, c, g, A);
            return A.delete(t), I;
          case sr:
            if (Zr)
              return Zr.call(t) == Zr.call(e);
        }
        return !1;
      }
      function Qg(t, e, s, a, c, g) {
        var A = s & E, w = Wo(t), T = w.length, R = Wo(e), I = R.length;
        if (T != I && !A)
          return !1;
        for (var B = T; B--; ) {
          var N = w[B];
          if (!(A ? N in e : gt.call(e, N)))
            return !1;
        }
        var H = g.get(t), Y = g.get(e);
        if (H && Y)
          return H == e && Y == t;
        var tt = !0;
        g.set(t, e), g.set(e, t);
        for (var K = A; ++B < T; ) {
          N = w[B];
          var st = t[N], ct = e[N];
          if (a)
            var ve = A ? a(ct, st, N, e, t, g) : a(st, ct, N, t, e, g);
          if (!(ve === i ? st === ct || c(st, ct, s, a, g) : ve)) {
            tt = !1;
            break;
          }
          K || (K = N == "constructor");
        }
        if (tt && !K) {
          var Zt = t.constructor, ye = e.constructor;
          Zt != ye && "constructor" in t && "constructor" in e && !(typeof Zt == "function" && Zt instanceof Zt && typeof ye == "function" && ye instanceof ye) && (tt = !1);
        }
        return g.delete(t), g.delete(e), tt;
      }
      function rn(t) {
        return qo(Kl(t, i, nc), t + "");
      }
      function Wo(t) {
        return al(t, Vt, zo);
      }
      function Go(t) {
        return al(t, oe, Gl);
      }
      var Ho = qi ? function(t) {
        return qi.get(t);
      } : ua;
      function ls(t) {
        for (var e = t.name + "", s = mr[e], a = gt.call(mr, e) ? s.length : 0; a--; ) {
          var c = s[a], g = c.func;
          if (g == null || g == t)
            return c.name;
        }
        return e;
      }
      function xr(t) {
        var e = gt.call(d, "placeholder") ? d : t;
        return e.placeholder;
      }
      function z() {
        var t = d.iteratee || oa;
        return t = t === oa ? cl : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function cs(t, e) {
        var s = t.__data__;
        return im(e) ? s[typeof e == "string" ? "string" : "hash"] : s.map;
      }
      function jo(t) {
        for (var e = Vt(t), s = e.length; s--; ) {
          var a = e[s], c = t[a];
          e[s] = [a, c, zl(c)];
        }
        return e;
      }
      function Hn(t, e) {
        var s = ap(t, e);
        return ll(s) ? s : i;
      }
      function Xg(t) {
        var e = gt.call(t, kn), s = t[kn];
        try {
          t[kn] = i;
          var a = !0;
        } catch {
        }
        var c = Wi.call(t);
        return a && (e ? t[kn] = s : delete t[kn]), c;
      }
      var zo = yo ? function(t) {
        return t == null ? [] : (t = mt(t), vn(yo(t), function(e) {
          return Zu.call(t, e);
        }));
      } : la, Gl = yo ? function(t) {
        for (var e = []; t; )
          yn(e, zo(t)), t = ji(t);
        return e;
      } : la, zt = Yt;
      (Ao && zt(new Ao(new ArrayBuffer(1))) != mn || zr && zt(new zr()) != fe || xo && zt(xo.resolve()) != Mr || gr && zt(new gr()) != he || Yr && zt(new Yr()) != gn) && (zt = function(t) {
        var e = Yt(t), s = e == _e ? t.constructor : i, a = s ? jn(s) : "";
        if (a)
          switch (a) {
            case Dp:
              return mn;
            case Bp:
              return fe;
            case Op:
              return Mr;
            case Vp:
              return he;
            case Fp:
              return gn;
          }
        return e;
      });
      function Jg(t, e, s) {
        for (var a = -1, c = s.length; ++a < c; ) {
          var g = s[a], A = g.size;
          switch (g.type) {
            case "drop":
              t += A;
              break;
            case "dropRight":
              e -= A;
              break;
            case "take":
              e = jt(e, t + A);
              break;
            case "takeRight":
              t = Ot(t, e - A);
              break;
          }
        }
        return { start: t, end: e };
      }
      function $g(t) {
        var e = t.match($s);
        return e ? e[1].split(x) : [];
      }
      function Hl(t, e, s) {
        e = bn(e, t);
        for (var a = -1, c = e.length, g = !1; ++a < c; ) {
          var A = qe(e[a]);
          if (!(g = t != null && s(t, A)))
            break;
          t = t[A];
        }
        return g || ++a != c ? g : (c = t == null ? 0 : t.length, !!c && vs(c) && sn(A, c) && (J(t) || zn(t)));
      }
      function tm(t) {
        var e = t.length, s = new t.constructor(e);
        return e && typeof t[0] == "string" && gt.call(t, "index") && (s.index = t.index, s.input = t.input), s;
      }
      function jl(t) {
        return typeof t.constructor == "function" && !ei(t) ? vr(ji(t)) : {};
      }
      function em(t, e, s) {
        var a = t.constructor;
        switch (e) {
          case Fe:
            return ko(t);
          case we:
          case ce:
            return new a(+t);
          case mn:
            return kg(t, s);
          case or:
          case ar:
          case Vn:
          case Dr:
          case Br:
          case Or:
          case Vr:
          case Fr:
          case kr:
            return Sl(t, s);
          case fe:
            return new a();
          case Ye:
          case Xe:
            return new a(t);
          case On:
            return Ng(t);
          case he:
            return new a();
          case sr:
            return Ug(t);
        }
      }
      function nm(t, e) {
        var s = e.length;
        if (!s)
          return t;
        var a = s - 1;
        return e[a] = (s > 1 ? "& " : "") + e[a], e = e.join(s > 2 ? ", " : " "), t.replace(Js, `{
/* [wrapped with ` + e + `] */
`);
      }
      function rm(t) {
        return J(t) || zn(t) || !!(qu && t && t[qu]);
      }
      function sn(t, e) {
        var s = typeof t;
        return e = e ?? Ft, !!e && (s == "number" || s != "symbol" && St.test(t)) && t > -1 && t % 1 == 0 && t < e;
      }
      function Kt(t, e, s) {
        if (!bt(s))
          return !1;
        var a = typeof e;
        return (a == "number" ? se(s) && sn(e, s.length) : a == "string" && e in s) ? We(s[e], t) : !1;
      }
      function Yo(t, e) {
        if (J(t))
          return !1;
        var s = typeof t;
        return s == "number" || s == "symbol" || s == "boolean" || t == null || me(t) ? !0 : Li.test(t) || !Ii.test(t) || e != null && t in mt(e);
      }
      function im(t) {
        var e = typeof t;
        return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
      }
      function Ko(t) {
        var e = ls(t), s = d[e];
        if (typeof s != "function" || !(e in ut.prototype))
          return !1;
        if (t === s)
          return !0;
        var a = Ho(s);
        return !!a && t === a[0];
      }
      function sm(t) {
        return !!zu && zu in t;
      }
      var om = Ni ? on : ca;
      function ei(t) {
        var e = t && t.constructor, s = typeof e == "function" && e.prototype || pr;
        return t === s;
      }
      function zl(t) {
        return t === t && !bt(t);
      }
      function Yl(t, e) {
        return function(s) {
          return s == null ? !1 : s[t] === e && (e !== i || t in mt(s));
        };
      }
      function am(t) {
        var e = gs(t, function(a) {
          return s.size === m && s.clear(), a;
        }), s = e.cache;
        return e;
      }
      function um(t, e) {
        var s = t[1], a = e[1], c = s | a, g = c < (V | F | rt), A = a == rt && s == L || a == rt && s == Q && t[7].length <= e[8] || a == (rt | Q) && e[7].length <= e[8] && s == L;
        if (!(g || A))
          return t;
        a & V && (t[2] = e[2], c |= s & V ? 0 : M);
        var w = e[3];
        if (w) {
          var T = t[3];
          t[3] = T ? El(T, w, e[4]) : w, t[4] = T ? An(t[3], v) : e[4];
        }
        return w = e[5], w && (T = t[5], t[5] = T ? Rl(T, w, e[6]) : w, t[6] = T ? An(t[5], v) : e[6]), w = e[7], w && (t[7] = w), a & rt && (t[8] = t[8] == null ? e[8] : jt(t[8], e[8])), t[9] == null && (t[9] = e[9]), t[0] = e[0], t[1] = c, t;
      }
      function lm(t) {
        var e = [];
        if (t != null)
          for (var s in mt(t))
            e.push(s);
        return e;
      }
      function cm(t) {
        return Wi.call(t);
      }
      function Kl(t, e, s) {
        return e = Ot(e === i ? t.length - 1 : e, 0), function() {
          for (var a = arguments, c = -1, g = Ot(a.length - e, 0), A = S(g); ++c < g; )
            A[c] = a[e + c];
          c = -1;
          for (var w = S(e + 1); ++c < e; )
            w[c] = a[c];
          return w[e] = s(A), de(t, this, w);
        };
      }
      function Zl(t, e) {
        return e.length < 2 ? t : Gn(t, Ee(e, 0, -1));
      }
      function fm(t, e) {
        for (var s = t.length, a = jt(e.length, s), c = ie(t); a--; ) {
          var g = e[a];
          t[a] = sn(g, s) ? c[g] : i;
        }
        return t;
      }
      function Zo(t, e) {
        if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__")
          return t[e];
      }
      var ql = Xl(yl), ni = Sp || function(t, e) {
        return Nt.setTimeout(t, e);
      }, qo = Xl(Bg);
      function Ql(t, e, s) {
        var a = e + "";
        return qo(t, nm(a, hm($g(a), s)));
      }
      function Xl(t) {
        var e = 0, s = 0;
        return function() {
          var a = Ip(), c = Rt - (a - s);
          if (s = a, c > 0) {
            if (++e >= Ht)
              return arguments[0];
          } else
            e = 0;
          return t.apply(i, arguments);
        };
      }
      function fs(t, e) {
        var s = -1, a = t.length, c = a - 1;
        for (e = e === i ? a : e; ++s < e; ) {
          var g = Lo(s, c), A = t[g];
          t[g] = t[s], t[s] = A;
        }
        return t.length = e, t;
      }
      var Jl = am(function(t) {
        var e = [];
        return t.charCodeAt(0) === 46 && e.push(""), t.replace(Qs, function(s, a, c, g) {
          e.push(c ? g.replace(q, "$1") : a || s);
        }), e;
      });
      function qe(t) {
        if (typeof t == "string" || me(t))
          return t;
        var e = t + "";
        return e == "0" && 1 / t == -Dt ? "-0" : e;
      }
      function jn(t) {
        if (t != null) {
          try {
            return Ui.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function hm(t, e) {
        return Te(nr, function(s) {
          var a = "_." + s[0];
          e & s[1] && !Oi(t, a) && t.push(a);
        }), t.sort();
      }
      function $l(t) {
        if (t instanceof ut)
          return t.clone();
        var e = new Se(t.__wrapped__, t.__chain__);
        return e.__actions__ = ie(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e;
      }
      function dm(t, e, s) {
        (s ? Kt(t, e, s) : e === i) ? e = 1 : e = Ot($(e), 0);
        var a = t == null ? 0 : t.length;
        if (!a || e < 1)
          return [];
        for (var c = 0, g = 0, A = S(Ki(a / e)); c < a; )
          A[g++] = Ee(t, c, c += e);
        return A;
      }
      function pm(t) {
        for (var e = -1, s = t == null ? 0 : t.length, a = 0, c = []; ++e < s; ) {
          var g = t[e];
          g && (c[a++] = g);
        }
        return c;
      }
      function gm() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var e = S(t - 1), s = arguments[0], a = t; a--; )
          e[a - 1] = arguments[a];
        return yn(J(s) ? ie(s) : [s], Ut(e, 1));
      }
      var mm = et(function(t, e) {
        return It(t) ? Qr(t, Ut(e, 1, It, !0)) : [];
      }), vm = et(function(t, e) {
        var s = Re(e);
        return It(s) && (s = i), It(t) ? Qr(t, Ut(e, 1, It, !0), z(s, 2)) : [];
      }), ym = et(function(t, e) {
        var s = Re(e);
        return It(s) && (s = i), It(t) ? Qr(t, Ut(e, 1, It, !0), i, s) : [];
      });
      function Am(t, e, s) {
        var a = t == null ? 0 : t.length;
        return a ? (e = s || e === i ? 1 : $(e), Ee(t, e < 0 ? 0 : e, a)) : [];
      }
      function xm(t, e, s) {
        var a = t == null ? 0 : t.length;
        return a ? (e = s || e === i ? 1 : $(e), e = a - e, Ee(t, 0, e < 0 ? 0 : e)) : [];
      }
      function wm(t, e) {
        return t && t.length ? rs(t, z(e, 3), !0, !0) : [];
      }
      function _m(t, e) {
        return t && t.length ? rs(t, z(e, 3), !0) : [];
      }
      function bm(t, e, s, a) {
        var c = t == null ? 0 : t.length;
        return c ? (s && typeof s != "number" && Kt(t, e, s) && (s = 0, a = c), gg(t, e, s, a)) : [];
      }
      function tc(t, e, s) {
        var a = t == null ? 0 : t.length;
        if (!a)
          return -1;
        var c = s == null ? 0 : $(s);
        return c < 0 && (c = Ot(a + c, 0)), Vi(t, z(e, 3), c);
      }
      function ec(t, e, s) {
        var a = t == null ? 0 : t.length;
        if (!a)
          return -1;
        var c = a - 1;
        return s !== i && (c = $(s), c = s < 0 ? Ot(a + c, 0) : jt(c, a - 1)), Vi(t, z(e, 3), c, !0);
      }
      function nc(t) {
        var e = t == null ? 0 : t.length;
        return e ? Ut(t, 1) : [];
      }
      function Tm(t) {
        var e = t == null ? 0 : t.length;
        return e ? Ut(t, Dt) : [];
      }
      function Cm(t, e) {
        var s = t == null ? 0 : t.length;
        return s ? (e = e === i ? 1 : $(e), Ut(t, e)) : [];
      }
      function Sm(t) {
        for (var e = -1, s = t == null ? 0 : t.length, a = {}; ++e < s; ) {
          var c = t[e];
          a[c[0]] = c[1];
        }
        return a;
      }
      function rc(t) {
        return t && t.length ? t[0] : i;
      }
      function Pm(t, e, s) {
        var a = t == null ? 0 : t.length;
        if (!a)
          return -1;
        var c = s == null ? 0 : $(s);
        return c < 0 && (c = Ot(a + c, 0)), cr(t, e, c);
      }
      function Em(t) {
        var e = t == null ? 0 : t.length;
        return e ? Ee(t, 0, -1) : [];
      }
      var Rm = et(function(t) {
        var e = xt(t, Vo);
        return e.length && e[0] === t[0] ? So(e) : [];
      }), Im = et(function(t) {
        var e = Re(t), s = xt(t, Vo);
        return e === Re(s) ? e = i : s.pop(), s.length && s[0] === t[0] ? So(s, z(e, 2)) : [];
      }), Lm = et(function(t) {
        var e = Re(t), s = xt(t, Vo);
        return e = typeof e == "function" ? e : i, e && s.pop(), s.length && s[0] === t[0] ? So(s, i, e) : [];
      });
      function Mm(t, e) {
        return t == null ? "" : Ep.call(t, e);
      }
      function Re(t) {
        var e = t == null ? 0 : t.length;
        return e ? t[e - 1] : i;
      }
      function Dm(t, e, s) {
        var a = t == null ? 0 : t.length;
        if (!a)
          return -1;
        var c = a;
        return s !== i && (c = $(s), c = c < 0 ? Ot(a + c, 0) : jt(c, a - 1)), e === e ? hp(t, e, c) : Vi(t, Fu, c, !0);
      }
      function Bm(t, e) {
        return t && t.length ? pl(t, $(e)) : i;
      }
      var Om = et(ic);
      function ic(t, e) {
        return t && t.length && e && e.length ? Io(t, e) : t;
      }
      function Vm(t, e, s) {
        return t && t.length && e && e.length ? Io(t, e, z(s, 2)) : t;
      }
      function Fm(t, e, s) {
        return t && t.length && e && e.length ? Io(t, e, i, s) : t;
      }
      var km = rn(function(t, e) {
        var s = t == null ? 0 : t.length, a = _o(t, e);
        return vl(t, xt(e, function(c) {
          return sn(c, s) ? +c : c;
        }).sort(Pl)), a;
      });
      function Nm(t, e) {
        var s = [];
        if (!(t && t.length))
          return s;
        var a = -1, c = [], g = t.length;
        for (e = z(e, 3); ++a < g; ) {
          var A = t[a];
          e(A, a, t) && (s.push(A), c.push(a));
        }
        return vl(t, c), s;
      }
      function Qo(t) {
        return t == null ? t : Mp.call(t);
      }
      function Um(t, e, s) {
        var a = t == null ? 0 : t.length;
        return a ? (s && typeof s != "number" && Kt(t, e, s) ? (e = 0, s = a) : (e = e == null ? 0 : $(e), s = s === i ? a : $(s)), Ee(t, e, s)) : [];
      }
      function Wm(t, e) {
        return ns(t, e);
      }
      function Gm(t, e, s) {
        return Do(t, e, z(s, 2));
      }
      function Hm(t, e) {
        var s = t == null ? 0 : t.length;
        if (s) {
          var a = ns(t, e);
          if (a < s && We(t[a], e))
            return a;
        }
        return -1;
      }
      function jm(t, e) {
        return ns(t, e, !0);
      }
      function zm(t, e, s) {
        return Do(t, e, z(s, 2), !0);
      }
      function Ym(t, e) {
        var s = t == null ? 0 : t.length;
        if (s) {
          var a = ns(t, e, !0) - 1;
          if (We(t[a], e))
            return a;
        }
        return -1;
      }
      function Km(t) {
        return t && t.length ? Al(t) : [];
      }
      function Zm(t, e) {
        return t && t.length ? Al(t, z(e, 2)) : [];
      }
      function qm(t) {
        var e = t == null ? 0 : t.length;
        return e ? Ee(t, 1, e) : [];
      }
      function Qm(t, e, s) {
        return t && t.length ? (e = s || e === i ? 1 : $(e), Ee(t, 0, e < 0 ? 0 : e)) : [];
      }
      function Xm(t, e, s) {
        var a = t == null ? 0 : t.length;
        return a ? (e = s || e === i ? 1 : $(e), e = a - e, Ee(t, e < 0 ? 0 : e, a)) : [];
      }
      function Jm(t, e) {
        return t && t.length ? rs(t, z(e, 3), !1, !0) : [];
      }
      function $m(t, e) {
        return t && t.length ? rs(t, z(e, 3)) : [];
      }
      var tv = et(function(t) {
        return _n(Ut(t, 1, It, !0));
      }), ev = et(function(t) {
        var e = Re(t);
        return It(e) && (e = i), _n(Ut(t, 1, It, !0), z(e, 2));
      }), nv = et(function(t) {
        var e = Re(t);
        return e = typeof e == "function" ? e : i, _n(Ut(t, 1, It, !0), i, e);
      });
      function rv(t) {
        return t && t.length ? _n(t) : [];
      }
      function iv(t, e) {
        return t && t.length ? _n(t, z(e, 2)) : [];
      }
      function sv(t, e) {
        return e = typeof e == "function" ? e : i, t && t.length ? _n(t, i, e) : [];
      }
      function Xo(t) {
        if (!(t && t.length))
          return [];
        var e = 0;
        return t = vn(t, function(s) {
          if (It(s))
            return e = Ot(s.length, e), !0;
        }), po(e, function(s) {
          return xt(t, co(s));
        });
      }
      function sc(t, e) {
        if (!(t && t.length))
          return [];
        var s = Xo(t);
        return e == null ? s : xt(s, function(a) {
          return de(e, i, a);
        });
      }
      var ov = et(function(t, e) {
        return It(t) ? Qr(t, e) : [];
      }), av = et(function(t) {
        return Oo(vn(t, It));
      }), uv = et(function(t) {
        var e = Re(t);
        return It(e) && (e = i), Oo(vn(t, It), z(e, 2));
      }), lv = et(function(t) {
        var e = Re(t);
        return e = typeof e == "function" ? e : i, Oo(vn(t, It), i, e);
      }), cv = et(Xo);
      function fv(t, e) {
        return bl(t || [], e || [], qr);
      }
      function hv(t, e) {
        return bl(t || [], e || [], $r);
      }
      var dv = et(function(t) {
        var e = t.length, s = e > 1 ? t[e - 1] : i;
        return s = typeof s == "function" ? (t.pop(), s) : i, sc(t, s);
      });
      function oc(t) {
        var e = d(t);
        return e.__chain__ = !0, e;
      }
      function pv(t, e) {
        return e(t), t;
      }
      function hs(t, e) {
        return e(t);
      }
      var gv = rn(function(t) {
        var e = t.length, s = e ? t[0] : 0, a = this.__wrapped__, c = function(g) {
          return _o(g, t);
        };
        return e > 1 || this.__actions__.length || !(a instanceof ut) || !sn(s) ? this.thru(c) : (a = a.slice(s, +s + (e ? 1 : 0)), a.__actions__.push({
          func: hs,
          args: [c],
          thisArg: i
        }), new Se(a, this.__chain__).thru(function(g) {
          return e && !g.length && g.push(i), g;
        }));
      });
      function mv() {
        return oc(this);
      }
      function vv() {
        return new Se(this.value(), this.__chain__);
      }
      function yv() {
        this.__values__ === i && (this.__values__ = xc(this.value()));
        var t = this.__index__ >= this.__values__.length, e = t ? i : this.__values__[this.__index__++];
        return { done: t, value: e };
      }
      function Av() {
        return this;
      }
      function xv(t) {
        for (var e, s = this; s instanceof Xi; ) {
          var a = $l(s);
          a.__index__ = 0, a.__values__ = i, e ? c.__wrapped__ = a : e = a;
          var c = a;
          s = s.__wrapped__;
        }
        return c.__wrapped__ = t, e;
      }
      function wv() {
        var t = this.__wrapped__;
        if (t instanceof ut) {
          var e = t;
          return this.__actions__.length && (e = new ut(this)), e = e.reverse(), e.__actions__.push({
            func: hs,
            args: [Qo],
            thisArg: i
          }), new Se(e, this.__chain__);
        }
        return this.thru(Qo);
      }
      function _v() {
        return _l(this.__wrapped__, this.__actions__);
      }
      var bv = is(function(t, e, s) {
        gt.call(t, s) ? ++t[s] : en(t, s, 1);
      });
      function Tv(t, e, s) {
        var a = J(t) ? Ou : pg;
        return s && Kt(t, e, s) && (e = i), a(t, z(e, 3));
      }
      function Cv(t, e) {
        var s = J(t) ? vn : sl;
        return s(t, z(e, 3));
      }
      var Sv = Dl(tc), Pv = Dl(ec);
      function Ev(t, e) {
        return Ut(ds(t, e), 1);
      }
      function Rv(t, e) {
        return Ut(ds(t, e), Dt);
      }
      function Iv(t, e, s) {
        return s = s === i ? 1 : $(s), Ut(ds(t, e), s);
      }
      function ac(t, e) {
        var s = J(t) ? Te : wn;
        return s(t, z(e, 3));
      }
      function uc(t, e) {
        var s = J(t) ? qd : il;
        return s(t, z(e, 3));
      }
      var Lv = is(function(t, e, s) {
        gt.call(t, s) ? t[s].push(e) : en(t, s, [e]);
      });
      function Mv(t, e, s, a) {
        t = se(t) ? t : _r(t), s = s && !a ? $(s) : 0;
        var c = t.length;
        return s < 0 && (s = Ot(c + s, 0)), ys(t) ? s <= c && t.indexOf(e, s) > -1 : !!c && cr(t, e, s) > -1;
      }
      var Dv = et(function(t, e, s) {
        var a = -1, c = typeof e == "function", g = se(t) ? S(t.length) : [];
        return wn(t, function(A) {
          g[++a] = c ? de(e, A, s) : Xr(A, e, s);
        }), g;
      }), Bv = is(function(t, e, s) {
        en(t, s, e);
      });
      function ds(t, e) {
        var s = J(t) ? xt : fl;
        return s(t, z(e, 3));
      }
      function Ov(t, e, s, a) {
        return t == null ? [] : (J(e) || (e = e == null ? [] : [e]), s = a ? i : s, J(s) || (s = s == null ? [] : [s]), gl(t, e, s));
      }
      var Vv = is(function(t, e, s) {
        t[s ? 0 : 1].push(e);
      }, function() {
        return [[], []];
      });
      function Fv(t, e, s) {
        var a = J(t) ? uo : Nu, c = arguments.length < 3;
        return a(t, z(e, 4), s, c, wn);
      }
      function kv(t, e, s) {
        var a = J(t) ? Qd : Nu, c = arguments.length < 3;
        return a(t, z(e, 4), s, c, il);
      }
      function Nv(t, e) {
        var s = J(t) ? vn : sl;
        return s(t, ms(z(e, 3)));
      }
      function Uv(t) {
        var e = J(t) ? tl : Mg;
        return e(t);
      }
      function Wv(t, e, s) {
        (s ? Kt(t, e, s) : e === i) ? e = 1 : e = $(e);
        var a = J(t) ? lg : Dg;
        return a(t, e);
      }
      function Gv(t) {
        var e = J(t) ? cg : Og;
        return e(t);
      }
      function Hv(t) {
        if (t == null)
          return 0;
        if (se(t))
          return ys(t) ? hr(t) : t.length;
        var e = zt(t);
        return e == fe || e == he ? t.size : Eo(t).length;
      }
      function jv(t, e, s) {
        var a = J(t) ? lo : Vg;
        return s && Kt(t, e, s) && (e = i), a(t, z(e, 3));
      }
      var zv = et(function(t, e) {
        if (t == null)
          return [];
        var s = e.length;
        return s > 1 && Kt(t, e[0], e[1]) ? e = [] : s > 2 && Kt(e[0], e[1], e[2]) && (e = [e[0]]), gl(t, Ut(e, 1), []);
      }), ps = Cp || function() {
        return Nt.Date.now();
      };
      function Yv(t, e) {
        if (typeof e != "function")
          throw new Ce(l);
        return t = $(t), function() {
          if (--t < 1)
            return e.apply(this, arguments);
        };
      }
      function lc(t, e, s) {
        return e = s ? i : e, e = t && e == null ? t.length : e, nn(t, rt, i, i, i, i, e);
      }
      function cc(t, e) {
        var s;
        if (typeof e != "function")
          throw new Ce(l);
        return t = $(t), function() {
          return --t > 0 && (s = e.apply(this, arguments)), t <= 1 && (e = i), s;
        };
      }
      var Jo = et(function(t, e, s) {
        var a = V;
        if (s.length) {
          var c = An(s, xr(Jo));
          a |= j;
        }
        return nn(t, a, e, s, c);
      }), fc = et(function(t, e, s) {
        var a = V | F;
        if (s.length) {
          var c = An(s, xr(fc));
          a |= j;
        }
        return nn(e, a, t, s, c);
      });
      function hc(t, e, s) {
        e = s ? i : e;
        var a = nn(t, L, i, i, i, i, i, e);
        return a.placeholder = hc.placeholder, a;
      }
      function dc(t, e, s) {
        e = s ? i : e;
        var a = nn(t, U, i, i, i, i, i, e);
        return a.placeholder = dc.placeholder, a;
      }
      function pc(t, e, s) {
        var a, c, g, A, w, T, R = 0, I = !1, B = !1, N = !0;
        if (typeof t != "function")
          throw new Ce(l);
        e = Ie(e) || 0, bt(s) && (I = !!s.leading, B = "maxWait" in s, g = B ? Ot(Ie(s.maxWait) || 0, e) : g, N = "trailing" in s ? !!s.trailing : N);
        function H(Lt) {
          var Ge = a, un = c;
          return a = c = i, R = Lt, A = t.apply(un, Ge), A;
        }
        function Y(Lt) {
          return R = Lt, w = ni(st, e), I ? H(Lt) : A;
        }
        function tt(Lt) {
          var Ge = Lt - T, un = Lt - R, Dc = e - Ge;
          return B ? jt(Dc, g - un) : Dc;
        }
        function K(Lt) {
          var Ge = Lt - T, un = Lt - R;
          return T === i || Ge >= e || Ge < 0 || B && un >= g;
        }
        function st() {
          var Lt = ps();
          if (K(Lt))
            return ct(Lt);
          w = ni(st, tt(Lt));
        }
        function ct(Lt) {
          return w = i, N && a ? H(Lt) : (a = c = i, A);
        }
        function ve() {
          w !== i && Tl(w), R = 0, a = T = c = w = i;
        }
        function Zt() {
          return w === i ? A : ct(ps());
        }
        function ye() {
          var Lt = ps(), Ge = K(Lt);
          if (a = arguments, c = this, T = Lt, Ge) {
            if (w === i)
              return Y(T);
            if (B)
              return Tl(w), w = ni(st, e), H(T);
          }
          return w === i && (w = ni(st, e)), A;
        }
        return ye.cancel = ve, ye.flush = Zt, ye;
      }
      var Kv = et(function(t, e) {
        return rl(t, 1, e);
      }), Zv = et(function(t, e, s) {
        return rl(t, Ie(e) || 0, s);
      });
      function qv(t) {
        return nn(t, lt);
      }
      function gs(t, e) {
        if (typeof t != "function" || e != null && typeof e != "function")
          throw new Ce(l);
        var s = function() {
          var a = arguments, c = e ? e.apply(this, a) : a[0], g = s.cache;
          if (g.has(c))
            return g.get(c);
          var A = t.apply(this, a);
          return s.cache = g.set(c, A) || g, A;
        };
        return s.cache = new (gs.Cache || tn)(), s;
      }
      gs.Cache = tn;
      function ms(t) {
        if (typeof t != "function")
          throw new Ce(l);
        return function() {
          var e = arguments;
          switch (e.length) {
            case 0:
              return !t.call(this);
            case 1:
              return !t.call(this, e[0]);
            case 2:
              return !t.call(this, e[0], e[1]);
            case 3:
              return !t.call(this, e[0], e[1], e[2]);
          }
          return !t.apply(this, e);
        };
      }
      function Qv(t) {
        return cc(2, t);
      }
      var Xv = Fg(function(t, e) {
        e = e.length == 1 && J(e[0]) ? xt(e[0], pe(z())) : xt(Ut(e, 1), pe(z()));
        var s = e.length;
        return et(function(a) {
          for (var c = -1, g = jt(a.length, s); ++c < g; )
            a[c] = e[c].call(this, a[c]);
          return de(t, this, a);
        });
      }), $o = et(function(t, e) {
        var s = An(e, xr($o));
        return nn(t, j, i, e, s);
      }), gc = et(function(t, e) {
        var s = An(e, xr(gc));
        return nn(t, ot, i, e, s);
      }), Jv = rn(function(t, e) {
        return nn(t, Q, i, i, i, e);
      });
      function $v(t, e) {
        if (typeof t != "function")
          throw new Ce(l);
        return e = e === i ? e : $(e), et(t, e);
      }
      function ty(t, e) {
        if (typeof t != "function")
          throw new Ce(l);
        return e = e == null ? 0 : Ot($(e), 0), et(function(s) {
          var a = s[e], c = Tn(s, 0, e);
          return a && yn(c, a), de(t, this, c);
        });
      }
      function ey(t, e, s) {
        var a = !0, c = !0;
        if (typeof t != "function")
          throw new Ce(l);
        return bt(s) && (a = "leading" in s ? !!s.leading : a, c = "trailing" in s ? !!s.trailing : c), pc(t, e, {
          leading: a,
          maxWait: e,
          trailing: c
        });
      }
      function ny(t) {
        return lc(t, 1);
      }
      function ry(t, e) {
        return $o(Fo(e), t);
      }
      function iy() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return J(t) ? t : [t];
      }
      function sy(t) {
        return Pe(t, C);
      }
      function oy(t, e) {
        return e = typeof e == "function" ? e : i, Pe(t, C, e);
      }
      function ay(t) {
        return Pe(t, y | C);
      }
      function uy(t, e) {
        return e = typeof e == "function" ? e : i, Pe(t, y | C, e);
      }
      function ly(t, e) {
        return e == null || nl(t, e, Vt(e));
      }
      function We(t, e) {
        return t === e || t !== t && e !== e;
      }
      var cy = us(Co), fy = us(function(t, e) {
        return t >= e;
      }), zn = ul(/* @__PURE__ */ function() {
        return arguments;
      }()) ? ul : function(t) {
        return Pt(t) && gt.call(t, "callee") && !Zu.call(t, "callee");
      }, J = S.isArray, hy = Ru ? pe(Ru) : xg;
      function se(t) {
        return t != null && vs(t.length) && !on(t);
      }
      function It(t) {
        return Pt(t) && se(t);
      }
      function dy(t) {
        return t === !0 || t === !1 || Pt(t) && Yt(t) == we;
      }
      var Cn = Pp || ca, py = Iu ? pe(Iu) : wg;
      function gy(t) {
        return Pt(t) && t.nodeType === 1 && !ri(t);
      }
      function my(t) {
        if (t == null)
          return !0;
        if (se(t) && (J(t) || typeof t == "string" || typeof t.splice == "function" || Cn(t) || wr(t) || zn(t)))
          return !t.length;
        var e = zt(t);
        if (e == fe || e == he)
          return !t.size;
        if (ei(t))
          return !Eo(t).length;
        for (var s in t)
          if (gt.call(t, s))
            return !1;
        return !0;
      }
      function vy(t, e) {
        return Jr(t, e);
      }
      function yy(t, e, s) {
        s = typeof s == "function" ? s : i;
        var a = s ? s(t, e) : i;
        return a === i ? Jr(t, e, i, s) : !!a;
      }
      function ta(t) {
        if (!Pt(t))
          return !1;
        var e = Yt(t);
        return e == ee || e == Ve || typeof t.message == "string" && typeof t.name == "string" && !ri(t);
      }
      function Ay(t) {
        return typeof t == "number" && Qu(t);
      }
      function on(t) {
        if (!bt(t))
          return !1;
        var e = Yt(t);
        return e == pn || e == Ti || e == dn || e == ir;
      }
      function mc(t) {
        return typeof t == "number" && t == $(t);
      }
      function vs(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Ft;
      }
      function bt(t) {
        var e = typeof t;
        return t != null && (e == "object" || e == "function");
      }
      function Pt(t) {
        return t != null && typeof t == "object";
      }
      var vc = Lu ? pe(Lu) : bg;
      function xy(t, e) {
        return t === e || Po(t, e, jo(e));
      }
      function wy(t, e, s) {
        return s = typeof s == "function" ? s : i, Po(t, e, jo(e), s);
      }
      function _y(t) {
        return yc(t) && t != +t;
      }
      function by(t) {
        if (om(t))
          throw new X(f);
        return ll(t);
      }
      function Ty(t) {
        return t === null;
      }
      function Cy(t) {
        return t == null;
      }
      function yc(t) {
        return typeof t == "number" || Pt(t) && Yt(t) == Ye;
      }
      function ri(t) {
        if (!Pt(t) || Yt(t) != _e)
          return !1;
        var e = ji(t);
        if (e === null)
          return !0;
        var s = gt.call(e, "constructor") && e.constructor;
        return typeof s == "function" && s instanceof s && Ui.call(s) == wp;
      }
      var ea = Mu ? pe(Mu) : Tg;
      function Sy(t) {
        return mc(t) && t >= -Ft && t <= Ft;
      }
      var Ac = Du ? pe(Du) : Cg;
      function ys(t) {
        return typeof t == "string" || !J(t) && Pt(t) && Yt(t) == Xe;
      }
      function me(t) {
        return typeof t == "symbol" || Pt(t) && Yt(t) == sr;
      }
      var wr = Bu ? pe(Bu) : Sg;
      function Py(t) {
        return t === i;
      }
      function Ey(t) {
        return Pt(t) && zt(t) == gn;
      }
      function Ry(t) {
        return Pt(t) && Yt(t) == Ci;
      }
      var Iy = us(Ro), Ly = us(function(t, e) {
        return t <= e;
      });
      function xc(t) {
        if (!t)
          return [];
        if (se(t))
          return ys(t) ? Ne(t) : ie(t);
        if (jr && t[jr])
          return lp(t[jr]());
        var e = zt(t), s = e == fe ? mo : e == he ? Fi : _r;
        return s(t);
      }
      function an(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = Ie(t), t === Dt || t === -Dt) {
          var e = t < 0 ? -1 : 1;
          return e * Be;
        }
        return t === t ? t : 0;
      }
      function $(t) {
        var e = an(t), s = e % 1;
        return e === e ? s ? e - s : e : 0;
      }
      function wc(t) {
        return t ? Wn($(t), 0, it) : 0;
      }
      function Ie(t) {
        if (typeof t == "number")
          return t;
        if (me(t))
          return je;
        if (bt(t)) {
          var e = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = bt(e) ? e + "" : e;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = Uu(t);
        var s = nt.test(t);
        return s || _t.test(t) ? Yd(t.slice(2), s ? 2 : 8) : at.test(t) ? je : +t;
      }
      function _c(t) {
        return Ze(t, oe(t));
      }
      function My(t) {
        return t ? Wn($(t), -Ft, Ft) : t === 0 ? t : 0;
      }
      function pt(t) {
        return t == null ? "" : ge(t);
      }
      var Dy = yr(function(t, e) {
        if (ei(e) || se(e)) {
          Ze(e, Vt(e), t);
          return;
        }
        for (var s in e)
          gt.call(e, s) && qr(t, s, e[s]);
      }), bc = yr(function(t, e) {
        Ze(e, oe(e), t);
      }), As = yr(function(t, e, s, a) {
        Ze(e, oe(e), t, a);
      }), By = yr(function(t, e, s, a) {
        Ze(e, Vt(e), t, a);
      }), Oy = rn(_o);
      function Vy(t, e) {
        var s = vr(t);
        return e == null ? s : el(s, e);
      }
      var Fy = et(function(t, e) {
        t = mt(t);
        var s = -1, a = e.length, c = a > 2 ? e[2] : i;
        for (c && Kt(e[0], e[1], c) && (a = 1); ++s < a; )
          for (var g = e[s], A = oe(g), w = -1, T = A.length; ++w < T; ) {
            var R = A[w], I = t[R];
            (I === i || We(I, pr[R]) && !gt.call(t, R)) && (t[R] = g[R]);
          }
        return t;
      }), ky = et(function(t) {
        return t.push(i, Ul), de(Tc, i, t);
      });
      function Ny(t, e) {
        return Vu(t, z(e, 3), Ke);
      }
      function Uy(t, e) {
        return Vu(t, z(e, 3), To);
      }
      function Wy(t, e) {
        return t == null ? t : bo(t, z(e, 3), oe);
      }
      function Gy(t, e) {
        return t == null ? t : ol(t, z(e, 3), oe);
      }
      function Hy(t, e) {
        return t && Ke(t, z(e, 3));
      }
      function jy(t, e) {
        return t && To(t, z(e, 3));
      }
      function zy(t) {
        return t == null ? [] : ts(t, Vt(t));
      }
      function Yy(t) {
        return t == null ? [] : ts(t, oe(t));
      }
      function na(t, e, s) {
        var a = t == null ? i : Gn(t, e);
        return a === i ? s : a;
      }
      function Ky(t, e) {
        return t != null && Hl(t, e, mg);
      }
      function ra(t, e) {
        return t != null && Hl(t, e, vg);
      }
      var Zy = Ol(function(t, e, s) {
        e != null && typeof e.toString != "function" && (e = Wi.call(e)), t[e] = s;
      }, sa(ae)), qy = Ol(function(t, e, s) {
        e != null && typeof e.toString != "function" && (e = Wi.call(e)), gt.call(t, e) ? t[e].push(s) : t[e] = [s];
      }, z), Qy = et(Xr);
      function Vt(t) {
        return se(t) ? $u(t) : Eo(t);
      }
      function oe(t) {
        return se(t) ? $u(t, !0) : Pg(t);
      }
      function Xy(t, e) {
        var s = {};
        return e = z(e, 3), Ke(t, function(a, c, g) {
          en(s, e(a, c, g), a);
        }), s;
      }
      function Jy(t, e) {
        var s = {};
        return e = z(e, 3), Ke(t, function(a, c, g) {
          en(s, c, e(a, c, g));
        }), s;
      }
      var $y = yr(function(t, e, s) {
        es(t, e, s);
      }), Tc = yr(function(t, e, s, a) {
        es(t, e, s, a);
      }), t0 = rn(function(t, e) {
        var s = {};
        if (t == null)
          return s;
        var a = !1;
        e = xt(e, function(g) {
          return g = bn(g, t), a || (a = g.length > 1), g;
        }), Ze(t, Go(t), s), a && (s = Pe(s, y | _ | C, Zg));
        for (var c = e.length; c--; )
          Bo(s, e[c]);
        return s;
      });
      function e0(t, e) {
        return Cc(t, ms(z(e)));
      }
      var n0 = rn(function(t, e) {
        return t == null ? {} : Rg(t, e);
      });
      function Cc(t, e) {
        if (t == null)
          return {};
        var s = xt(Go(t), function(a) {
          return [a];
        });
        return e = z(e), ml(t, s, function(a, c) {
          return e(a, c[0]);
        });
      }
      function r0(t, e, s) {
        e = bn(e, t);
        var a = -1, c = e.length;
        for (c || (c = 1, t = i); ++a < c; ) {
          var g = t == null ? i : t[qe(e[a])];
          g === i && (a = c, g = s), t = on(g) ? g.call(t) : g;
        }
        return t;
      }
      function i0(t, e, s) {
        return t == null ? t : $r(t, e, s);
      }
      function s0(t, e, s, a) {
        return a = typeof a == "function" ? a : i, t == null ? t : $r(t, e, s, a);
      }
      var Sc = kl(Vt), Pc = kl(oe);
      function o0(t, e, s) {
        var a = J(t), c = a || Cn(t) || wr(t);
        if (e = z(e, 4), s == null) {
          var g = t && t.constructor;
          c ? s = a ? new g() : [] : bt(t) ? s = on(g) ? vr(ji(t)) : {} : s = {};
        }
        return (c ? Te : Ke)(t, function(A, w, T) {
          return e(s, A, w, T);
        }), s;
      }
      function a0(t, e) {
        return t == null ? !0 : Bo(t, e);
      }
      function u0(t, e, s) {
        return t == null ? t : wl(t, e, Fo(s));
      }
      function l0(t, e, s, a) {
        return a = typeof a == "function" ? a : i, t == null ? t : wl(t, e, Fo(s), a);
      }
      function _r(t) {
        return t == null ? [] : go(t, Vt(t));
      }
      function c0(t) {
        return t == null ? [] : go(t, oe(t));
      }
      function f0(t, e, s) {
        return s === i && (s = e, e = i), s !== i && (s = Ie(s), s = s === s ? s : 0), e !== i && (e = Ie(e), e = e === e ? e : 0), Wn(Ie(t), e, s);
      }
      function h0(t, e, s) {
        return e = an(e), s === i ? (s = e, e = 0) : s = an(s), t = Ie(t), yg(t, e, s);
      }
      function d0(t, e, s) {
        if (s && typeof s != "boolean" && Kt(t, e, s) && (e = s = i), s === i && (typeof e == "boolean" ? (s = e, e = i) : typeof t == "boolean" && (s = t, t = i)), t === i && e === i ? (t = 0, e = 1) : (t = an(t), e === i ? (e = t, t = 0) : e = an(e)), t > e) {
          var a = t;
          t = e, e = a;
        }
        if (s || t % 1 || e % 1) {
          var c = Xu();
          return jt(t + c * (e - t + zd("1e-" + ((c + "").length - 1))), e);
        }
        return Lo(t, e);
      }
      var p0 = Ar(function(t, e, s) {
        return e = e.toLowerCase(), t + (s ? Ec(e) : e);
      });
      function Ec(t) {
        return ia(pt(t).toLowerCase());
      }
      function Rc(t) {
        return t = pt(t), t && t.replace(ne, ip).replace(Od, "");
      }
      function g0(t, e, s) {
        t = pt(t), e = ge(e);
        var a = t.length;
        s = s === i ? a : Wn($(s), 0, a);
        var c = s;
        return s -= e.length, s >= 0 && t.slice(s, c) == e;
      }
      function m0(t) {
        return t = pt(t), t && Pi.test(t) ? t.replace(ur, sp) : t;
      }
      function v0(t) {
        return t = pt(t), t && Mi.test(t) ? t.replace(Wr, "\\$&") : t;
      }
      var y0 = Ar(function(t, e, s) {
        return t + (s ? "-" : "") + e.toLowerCase();
      }), A0 = Ar(function(t, e, s) {
        return t + (s ? " " : "") + e.toLowerCase();
      }), x0 = Ml("toLowerCase");
      function w0(t, e, s) {
        t = pt(t), e = $(e);
        var a = e ? hr(t) : 0;
        if (!e || a >= e)
          return t;
        var c = (e - a) / 2;
        return as(Zi(c), s) + t + as(Ki(c), s);
      }
      function _0(t, e, s) {
        t = pt(t), e = $(e);
        var a = e ? hr(t) : 0;
        return e && a < e ? t + as(e - a, s) : t;
      }
      function b0(t, e, s) {
        t = pt(t), e = $(e);
        var a = e ? hr(t) : 0;
        return e && a < e ? as(e - a, s) + t : t;
      }
      function T0(t, e, s) {
        return s || e == null ? e = 0 : e && (e = +e), Lp(pt(t).replace(Gr, ""), e || 0);
      }
      function C0(t, e, s) {
        return (s ? Kt(t, e, s) : e === i) ? e = 1 : e = $(e), Mo(pt(t), e);
      }
      function S0() {
        var t = arguments, e = pt(t[0]);
        return t.length < 3 ? e : e.replace(t[1], t[2]);
      }
      var P0 = Ar(function(t, e, s) {
        return t + (s ? "_" : "") + e.toLowerCase();
      });
      function E0(t, e, s) {
        return s && typeof s != "number" && Kt(t, e, s) && (e = s = i), s = s === i ? it : s >>> 0, s ? (t = pt(t), t && (typeof e == "string" || e != null && !ea(e)) && (e = ge(e), !e && fr(t)) ? Tn(Ne(t), 0, s) : t.split(e, s)) : [];
      }
      var R0 = Ar(function(t, e, s) {
        return t + (s ? " " : "") + ia(e);
      });
      function I0(t, e, s) {
        return t = pt(t), s = s == null ? 0 : Wn($(s), 0, t.length), e = ge(e), t.slice(s, s + e.length) == e;
      }
      function L0(t, e, s) {
        var a = d.templateSettings;
        s && Kt(t, e, s) && (e = i), t = pt(t), e = As({}, e, a, Nl);
        var c = As({}, e.imports, a.imports, Nl), g = Vt(c), A = go(c, g), w, T, R = 0, I = e.interpolate || ke, B = "__p += '", N = vo(
          (e.escape || ke).source + "|" + I.source + "|" + (I === Ri ? ft : ke).source + "|" + (e.evaluate || ke).source + "|$",
          "g"
        ), H = "//# sourceURL=" + (gt.call(e, "sourceURL") ? (e.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Ud + "]") + `
`;
        t.replace(N, function(K, st, ct, ve, Zt, ye) {
          return ct || (ct = ve), B += t.slice(R, ye).replace(Di, op), st && (w = !0, B += `' +
__e(` + st + `) +
'`), Zt && (T = !0, B += `';
` + Zt + `;
__p += '`), ct && (B += `' +
((__t = (` + ct + `)) == null ? '' : __t) +
'`), R = ye + K.length, K;
        }), B += `';
`;
        var Y = gt.call(e, "variable") && e.variable;
        if (!Y)
          B = `with (obj) {
` + B + `
}
`;
        else if (k.test(Y))
          throw new X(h);
        B = (T ? B.replace(Zs, "") : B).replace(Nr, "$1").replace(Si, "$1;"), B = "function(" + (Y || "obj") + `) {
` + (Y ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (w ? ", __e = _.escape" : "") + (T ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + B + `return __p
}`;
        var tt = Lc(function() {
          return ht(g, H + "return " + B).apply(i, A);
        });
        if (tt.source = B, ta(tt))
          throw tt;
        return tt;
      }
      function M0(t) {
        return pt(t).toLowerCase();
      }
      function D0(t) {
        return pt(t).toUpperCase();
      }
      function B0(t, e, s) {
        if (t = pt(t), t && (s || e === i))
          return Uu(t);
        if (!t || !(e = ge(e)))
          return t;
        var a = Ne(t), c = Ne(e), g = Wu(a, c), A = Gu(a, c) + 1;
        return Tn(a, g, A).join("");
      }
      function O0(t, e, s) {
        if (t = pt(t), t && (s || e === i))
          return t.slice(0, ju(t) + 1);
        if (!t || !(e = ge(e)))
          return t;
        var a = Ne(t), c = Gu(a, Ne(e)) + 1;
        return Tn(a, 0, c).join("");
      }
      function V0(t, e, s) {
        if (t = pt(t), t && (s || e === i))
          return t.replace(Gr, "");
        if (!t || !(e = ge(e)))
          return t;
        var a = Ne(t), c = Wu(a, Ne(e));
        return Tn(a, c).join("");
      }
      function F0(t, e) {
        var s = Gt, a = He;
        if (bt(e)) {
          var c = "separator" in e ? e.separator : c;
          s = "length" in e ? $(e.length) : s, a = "omission" in e ? ge(e.omission) : a;
        }
        t = pt(t);
        var g = t.length;
        if (fr(t)) {
          var A = Ne(t);
          g = A.length;
        }
        if (s >= g)
          return t;
        var w = s - hr(a);
        if (w < 1)
          return a;
        var T = A ? Tn(A, 0, w).join("") : t.slice(0, w);
        if (c === i)
          return T + a;
        if (A && (w += T.length - w), ea(c)) {
          if (t.slice(w).search(c)) {
            var R, I = T;
            for (c.global || (c = vo(c.source, pt(dt.exec(c)) + "g")), c.lastIndex = 0; R = c.exec(I); )
              var B = R.index;
            T = T.slice(0, B === i ? w : B);
          }
        } else if (t.indexOf(ge(c), w) != w) {
          var N = T.lastIndexOf(c);
          N > -1 && (T = T.slice(0, N));
        }
        return T + a;
      }
      function k0(t) {
        return t = pt(t), t && Ur.test(t) ? t.replace(Je, dp) : t;
      }
      var N0 = Ar(function(t, e, s) {
        return t + (s ? " " : "") + e.toUpperCase();
      }), ia = Ml("toUpperCase");
      function Ic(t, e, s) {
        return t = pt(t), e = s ? i : e, e === i ? up(t) ? mp(t) : $d(t) : t.match(e) || [];
      }
      var Lc = et(function(t, e) {
        try {
          return de(t, i, e);
        } catch (s) {
          return ta(s) ? s : new X(s);
        }
      }), U0 = rn(function(t, e) {
        return Te(e, function(s) {
          s = qe(s), en(t, s, Jo(t[s], t));
        }), t;
      });
      function W0(t) {
        var e = t == null ? 0 : t.length, s = z();
        return t = e ? xt(t, function(a) {
          if (typeof a[1] != "function")
            throw new Ce(l);
          return [s(a[0]), a[1]];
        }) : [], et(function(a) {
          for (var c = -1; ++c < e; ) {
            var g = t[c];
            if (de(g[0], this, a))
              return de(g[1], this, a);
          }
        });
      }
      function G0(t) {
        return dg(Pe(t, y));
      }
      function sa(t) {
        return function() {
          return t;
        };
      }
      function H0(t, e) {
        return t == null || t !== t ? e : t;
      }
      var j0 = Bl(), z0 = Bl(!0);
      function ae(t) {
        return t;
      }
      function oa(t) {
        return cl(typeof t == "function" ? t : Pe(t, y));
      }
      function Y0(t) {
        return hl(Pe(t, y));
      }
      function K0(t, e) {
        return dl(t, Pe(e, y));
      }
      var Z0 = et(function(t, e) {
        return function(s) {
          return Xr(s, t, e);
        };
      }), q0 = et(function(t, e) {
        return function(s) {
          return Xr(t, s, e);
        };
      });
      function aa(t, e, s) {
        var a = Vt(e), c = ts(e, a);
        s == null && !(bt(e) && (c.length || !a.length)) && (s = e, e = t, t = this, c = ts(e, Vt(e)));
        var g = !(bt(s) && "chain" in s) || !!s.chain, A = on(t);
        return Te(c, function(w) {
          var T = e[w];
          t[w] = T, A && (t.prototype[w] = function() {
            var R = this.__chain__;
            if (g || R) {
              var I = t(this.__wrapped__), B = I.__actions__ = ie(this.__actions__);
              return B.push({ func: T, args: arguments, thisArg: t }), I.__chain__ = R, I;
            }
            return T.apply(t, yn([this.value()], arguments));
          });
        }), t;
      }
      function Q0() {
        return Nt._ === this && (Nt._ = _p), this;
      }
      function ua() {
      }
      function X0(t) {
        return t = $(t), et(function(e) {
          return pl(e, t);
        });
      }
      var J0 = No(xt), $0 = No(Ou), tA = No(lo);
      function Mc(t) {
        return Yo(t) ? co(qe(t)) : Ig(t);
      }
      function eA(t) {
        return function(e) {
          return t == null ? i : Gn(t, e);
        };
      }
      var nA = Vl(), rA = Vl(!0);
      function la() {
        return [];
      }
      function ca() {
        return !1;
      }
      function iA() {
        return {};
      }
      function sA() {
        return "";
      }
      function oA() {
        return !0;
      }
      function aA(t, e) {
        if (t = $(t), t < 1 || t > Ft)
          return [];
        var s = it, a = jt(t, it);
        e = z(e), t -= it;
        for (var c = po(a, e); ++s < t; )
          e(s);
        return c;
      }
      function uA(t) {
        return J(t) ? xt(t, qe) : me(t) ? [t] : ie(Jl(pt(t)));
      }
      function lA(t) {
        var e = ++xp;
        return pt(t) + e;
      }
      var cA = os(function(t, e) {
        return t + e;
      }, 0), fA = Uo("ceil"), hA = os(function(t, e) {
        return t / e;
      }, 1), dA = Uo("floor");
      function pA(t) {
        return t && t.length ? $i(t, ae, Co) : i;
      }
      function gA(t, e) {
        return t && t.length ? $i(t, z(e, 2), Co) : i;
      }
      function mA(t) {
        return ku(t, ae);
      }
      function vA(t, e) {
        return ku(t, z(e, 2));
      }
      function yA(t) {
        return t && t.length ? $i(t, ae, Ro) : i;
      }
      function AA(t, e) {
        return t && t.length ? $i(t, z(e, 2), Ro) : i;
      }
      var xA = os(function(t, e) {
        return t * e;
      }, 1), wA = Uo("round"), _A = os(function(t, e) {
        return t - e;
      }, 0);
      function bA(t) {
        return t && t.length ? ho(t, ae) : 0;
      }
      function TA(t, e) {
        return t && t.length ? ho(t, z(e, 2)) : 0;
      }
      return d.after = Yv, d.ary = lc, d.assign = Dy, d.assignIn = bc, d.assignInWith = As, d.assignWith = By, d.at = Oy, d.before = cc, d.bind = Jo, d.bindAll = U0, d.bindKey = fc, d.castArray = iy, d.chain = oc, d.chunk = dm, d.compact = pm, d.concat = gm, d.cond = W0, d.conforms = G0, d.constant = sa, d.countBy = bv, d.create = Vy, d.curry = hc, d.curryRight = dc, d.debounce = pc, d.defaults = Fy, d.defaultsDeep = ky, d.defer = Kv, d.delay = Zv, d.difference = mm, d.differenceBy = vm, d.differenceWith = ym, d.drop = Am, d.dropRight = xm, d.dropRightWhile = wm, d.dropWhile = _m, d.fill = bm, d.filter = Cv, d.flatMap = Ev, d.flatMapDeep = Rv, d.flatMapDepth = Iv, d.flatten = nc, d.flattenDeep = Tm, d.flattenDepth = Cm, d.flip = qv, d.flow = j0, d.flowRight = z0, d.fromPairs = Sm, d.functions = zy, d.functionsIn = Yy, d.groupBy = Lv, d.initial = Em, d.intersection = Rm, d.intersectionBy = Im, d.intersectionWith = Lm, d.invert = Zy, d.invertBy = qy, d.invokeMap = Dv, d.iteratee = oa, d.keyBy = Bv, d.keys = Vt, d.keysIn = oe, d.map = ds, d.mapKeys = Xy, d.mapValues = Jy, d.matches = Y0, d.matchesProperty = K0, d.memoize = gs, d.merge = $y, d.mergeWith = Tc, d.method = Z0, d.methodOf = q0, d.mixin = aa, d.negate = ms, d.nthArg = X0, d.omit = t0, d.omitBy = e0, d.once = Qv, d.orderBy = Ov, d.over = J0, d.overArgs = Xv, d.overEvery = $0, d.overSome = tA, d.partial = $o, d.partialRight = gc, d.partition = Vv, d.pick = n0, d.pickBy = Cc, d.property = Mc, d.propertyOf = eA, d.pull = Om, d.pullAll = ic, d.pullAllBy = Vm, d.pullAllWith = Fm, d.pullAt = km, d.range = nA, d.rangeRight = rA, d.rearg = Jv, d.reject = Nv, d.remove = Nm, d.rest = $v, d.reverse = Qo, d.sampleSize = Wv, d.set = i0, d.setWith = s0, d.shuffle = Gv, d.slice = Um, d.sortBy = zv, d.sortedUniq = Km, d.sortedUniqBy = Zm, d.split = E0, d.spread = ty, d.tail = qm, d.take = Qm, d.takeRight = Xm, d.takeRightWhile = Jm, d.takeWhile = $m, d.tap = pv, d.throttle = ey, d.thru = hs, d.toArray = xc, d.toPairs = Sc, d.toPairsIn = Pc, d.toPath = uA, d.toPlainObject = _c, d.transform = o0, d.unary = ny, d.union = tv, d.unionBy = ev, d.unionWith = nv, d.uniq = rv, d.uniqBy = iv, d.uniqWith = sv, d.unset = a0, d.unzip = Xo, d.unzipWith = sc, d.update = u0, d.updateWith = l0, d.values = _r, d.valuesIn = c0, d.without = ov, d.words = Ic, d.wrap = ry, d.xor = av, d.xorBy = uv, d.xorWith = lv, d.zip = cv, d.zipObject = fv, d.zipObjectDeep = hv, d.zipWith = dv, d.entries = Sc, d.entriesIn = Pc, d.extend = bc, d.extendWith = As, aa(d, d), d.add = cA, d.attempt = Lc, d.camelCase = p0, d.capitalize = Ec, d.ceil = fA, d.clamp = f0, d.clone = sy, d.cloneDeep = ay, d.cloneDeepWith = uy, d.cloneWith = oy, d.conformsTo = ly, d.deburr = Rc, d.defaultTo = H0, d.divide = hA, d.endsWith = g0, d.eq = We, d.escape = m0, d.escapeRegExp = v0, d.every = Tv, d.find = Sv, d.findIndex = tc, d.findKey = Ny, d.findLast = Pv, d.findLastIndex = ec, d.findLastKey = Uy, d.floor = dA, d.forEach = ac, d.forEachRight = uc, d.forIn = Wy, d.forInRight = Gy, d.forOwn = Hy, d.forOwnRight = jy, d.get = na, d.gt = cy, d.gte = fy, d.has = Ky, d.hasIn = ra, d.head = rc, d.identity = ae, d.includes = Mv, d.indexOf = Pm, d.inRange = h0, d.invoke = Qy, d.isArguments = zn, d.isArray = J, d.isArrayBuffer = hy, d.isArrayLike = se, d.isArrayLikeObject = It, d.isBoolean = dy, d.isBuffer = Cn, d.isDate = py, d.isElement = gy, d.isEmpty = my, d.isEqual = vy, d.isEqualWith = yy, d.isError = ta, d.isFinite = Ay, d.isFunction = on, d.isInteger = mc, d.isLength = vs, d.isMap = vc, d.isMatch = xy, d.isMatchWith = wy, d.isNaN = _y, d.isNative = by, d.isNil = Cy, d.isNull = Ty, d.isNumber = yc, d.isObject = bt, d.isObjectLike = Pt, d.isPlainObject = ri, d.isRegExp = ea, d.isSafeInteger = Sy, d.isSet = Ac, d.isString = ys, d.isSymbol = me, d.isTypedArray = wr, d.isUndefined = Py, d.isWeakMap = Ey, d.isWeakSet = Ry, d.join = Mm, d.kebabCase = y0, d.last = Re, d.lastIndexOf = Dm, d.lowerCase = A0, d.lowerFirst = x0, d.lt = Iy, d.lte = Ly, d.max = pA, d.maxBy = gA, d.mean = mA, d.meanBy = vA, d.min = yA, d.minBy = AA, d.stubArray = la, d.stubFalse = ca, d.stubObject = iA, d.stubString = sA, d.stubTrue = oA, d.multiply = xA, d.nth = Bm, d.noConflict = Q0, d.noop = ua, d.now = ps, d.pad = w0, d.padEnd = _0, d.padStart = b0, d.parseInt = T0, d.random = d0, d.reduce = Fv, d.reduceRight = kv, d.repeat = C0, d.replace = S0, d.result = r0, d.round = wA, d.runInContext = b, d.sample = Uv, d.size = Hv, d.snakeCase = P0, d.some = jv, d.sortedIndex = Wm, d.sortedIndexBy = Gm, d.sortedIndexOf = Hm, d.sortedLastIndex = jm, d.sortedLastIndexBy = zm, d.sortedLastIndexOf = Ym, d.startCase = R0, d.startsWith = I0, d.subtract = _A, d.sum = bA, d.sumBy = TA, d.template = L0, d.times = aA, d.toFinite = an, d.toInteger = $, d.toLength = wc, d.toLower = M0, d.toNumber = Ie, d.toSafeInteger = My, d.toString = pt, d.toUpper = D0, d.trim = B0, d.trimEnd = O0, d.trimStart = V0, d.truncate = F0, d.unescape = k0, d.uniqueId = lA, d.upperCase = N0, d.upperFirst = ia, d.each = ac, d.eachRight = uc, d.first = rc, aa(d, function() {
        var t = {};
        return Ke(d, function(e, s) {
          gt.call(d.prototype, s) || (t[s] = e);
        }), t;
      }(), { chain: !1 }), d.VERSION = o, Te(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        d[t].placeholder = d;
      }), Te(["drop", "take"], function(t, e) {
        ut.prototype[t] = function(s) {
          s = s === i ? 1 : Ot($(s), 0);
          var a = this.__filtered__ && !e ? new ut(this) : this.clone();
          return a.__filtered__ ? a.__takeCount__ = jt(s, a.__takeCount__) : a.__views__.push({
            size: jt(s, it),
            type: t + (a.__dir__ < 0 ? "Right" : "")
          }), a;
        }, ut.prototype[t + "Right"] = function(s) {
          return this.reverse()[t](s).reverse();
        };
      }), Te(["filter", "map", "takeWhile"], function(t, e) {
        var s = e + 1, a = s == vt || s == Ct;
        ut.prototype[t] = function(c) {
          var g = this.clone();
          return g.__iteratees__.push({
            iteratee: z(c, 3),
            type: s
          }), g.__filtered__ = g.__filtered__ || a, g;
        };
      }), Te(["head", "last"], function(t, e) {
        var s = "take" + (e ? "Right" : "");
        ut.prototype[t] = function() {
          return this[s](1).value()[0];
        };
      }), Te(["initial", "tail"], function(t, e) {
        var s = "drop" + (e ? "" : "Right");
        ut.prototype[t] = function() {
          return this.__filtered__ ? new ut(this) : this[s](1);
        };
      }), ut.prototype.compact = function() {
        return this.filter(ae);
      }, ut.prototype.find = function(t) {
        return this.filter(t).head();
      }, ut.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, ut.prototype.invokeMap = et(function(t, e) {
        return typeof t == "function" ? new ut(this) : this.map(function(s) {
          return Xr(s, t, e);
        });
      }), ut.prototype.reject = function(t) {
        return this.filter(ms(z(t)));
      }, ut.prototype.slice = function(t, e) {
        t = $(t);
        var s = this;
        return s.__filtered__ && (t > 0 || e < 0) ? new ut(s) : (t < 0 ? s = s.takeRight(-t) : t && (s = s.drop(t)), e !== i && (e = $(e), s = e < 0 ? s.dropRight(-e) : s.take(e - t)), s);
      }, ut.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, ut.prototype.toArray = function() {
        return this.take(it);
      }, Ke(ut.prototype, function(t, e) {
        var s = /^(?:filter|find|map|reject)|While$/.test(e), a = /^(?:head|last)$/.test(e), c = d[a ? "take" + (e == "last" ? "Right" : "") : e], g = a || /^find/.test(e);
        c && (d.prototype[e] = function() {
          var A = this.__wrapped__, w = a ? [1] : arguments, T = A instanceof ut, R = w[0], I = T || J(A), B = function(st) {
            var ct = c.apply(d, yn([st], w));
            return a && N ? ct[0] : ct;
          };
          I && s && typeof R == "function" && R.length != 1 && (T = I = !1);
          var N = this.__chain__, H = !!this.__actions__.length, Y = g && !N, tt = T && !H;
          if (!g && I) {
            A = tt ? A : new ut(this);
            var K = t.apply(A, w);
            return K.__actions__.push({ func: hs, args: [B], thisArg: i }), new Se(K, N);
          }
          return Y && tt ? t.apply(this, w) : (K = this.thru(B), Y ? a ? K.value()[0] : K.value() : K);
        });
      }), Te(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var e = ki[t], s = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", a = /^(?:pop|shift)$/.test(t);
        d.prototype[t] = function() {
          var c = arguments;
          if (a && !this.__chain__) {
            var g = this.value();
            return e.apply(J(g) ? g : [], c);
          }
          return this[s](function(A) {
            return e.apply(J(A) ? A : [], c);
          });
        };
      }), Ke(ut.prototype, function(t, e) {
        var s = d[e];
        if (s) {
          var a = s.name + "";
          gt.call(mr, a) || (mr[a] = []), mr[a].push({ name: e, func: s });
        }
      }), mr[ss(i, F).name] = [{
        name: "wrapper",
        func: i
      }], ut.prototype.clone = kp, ut.prototype.reverse = Np, ut.prototype.value = Up, d.prototype.at = gv, d.prototype.chain = mv, d.prototype.commit = vv, d.prototype.next = yv, d.prototype.plant = xv, d.prototype.reverse = wv, d.prototype.toJSON = d.prototype.valueOf = d.prototype.value = _v, d.prototype.first = d.prototype.head, jr && (d.prototype[jr] = Av), d;
    }, dr = vp();
    Fn ? ((Fn.exports = dr)._ = dr, so._ = dr) : Nt._ = dr;
  }).call(ii);
})(Rs, Rs.exports);
var zf = Rs.exports;
const kA = {
  center: { lat: 48.14, lng: 11.62 },
  zoom: 9,
  streetViewControl: !1,
  fullscreenControl: !0,
  geolocationControl: !0,
  mapTypeControl: !1,
  styles: [
    {
      featureType: "all",
      elementType: "all",
      stylers: [{ visibility: "on" }, { color: "#f0f0f0" }]
    },
    {
      featureType: "road",
      elementType: "labels.text",
      stylers: [
        { color: "#555555" },
        { lightness: 20 },
        { weight: 0.5 }
      ]
    },
    {
      featureType: "road",
      elementType: "labels.icon",
      // Style for label background
      stylers: [
        { visibility: "off" }
      ]
    },
    {
      featureType: "administrative",
      elementType: "labels",
      stylers: [
        { visibility: "on" },
        { color: "#575252" },
        { lightness: 20 },
        { weight: 0.5 }
      ]
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ visibility: "on" }, { color: "#aadaff" }]
    },
    {
      featureType: "water",
      elementType: "labels",
      stylers: [{ visibility: "on" }]
    }
  ]
}, NA = "data:image/png;base64,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", UA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAlCAYAAAAjt+tHAAABt0lEQVRYhe2XPWvjQBBAn4URwpiQ6kqV6o5wuDqu3f1ZrvSzxm1wFY60Ll2mOoIJQggphWZ8G0f+EEhJo4FhjRf03o5GsDNrmgYA7/0ciIBY1znDRgXUQAnUIlIBzJqmMXgMJJqxCkQDwWsVKIFCsxSRauacM/gCuNM1YZwKFMAb8KpraadMFP5DRLYDgz+E9/63/qyBKiz9QkS2eZ6z2+3Y7/eDgtM0JcsyRGTrvf+Jvoaw8RJgFDhw+kzrs8i63XIUeIfEkWldPlS394nou8CfLSaBSWASmAQmgUlgEpgEaG+oXx21CVRBkqbpaMTg2UdmxP9xqQDIsmwUCbuWaxTKrGfOuRhYAvdcGEzyPGez2dwEc86xXq8793QweQH+AYc5bQUK2nEJHRrC0SwCEJFH4KqEwb33f/Qv66/T0awA6luG0+MdXkSeLlUigK/42Fvnh9Mr47mt4fj2t0sigP/SU9p7DgW6x/NLoWIJbZ8sVeI5lAjgDwo/aBYGOhdXBc5ILK0SQHjyAz3gNwt0SNypxJPurRT62gfeS+BEYqEZ61ZJW/q3PvDeAoGENaV9qvaJlX3gAO/gUPMhXsBZCwAAAABJRU5ErkJggg==", WA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABDUlEQVQ4jZ3Ty0pCURQG4K8ipUeILga+QISR4KvUxKkQCD5KF0iaN/A9woGFkfQCvUE3RMkGewWHw/FI/bAGe6/9//+6nLOhHC3s4nXFu6UY4O6vpC308IhZxAhdVFeR9zHBGy5wijNc4x1P2ClznmAs9Z1HLZOvFAn0wnkvzse4QR+NuDvAJ86LBB6j7F/yFIuIKY4i18cwS2xJ055J/QrnRS6uItcOwQGa6/jGPFfNWkGFi9x5nr8bZVwauRa+cBi5W9wXGOhKq6rF+SgELzPkeoh1igSq0p6fpWnnUccLHrBZJED6SMb4kAbZjrgN5wdsLyP/oiLteSjNYSr13ClzXoZ//UxZNHFS9uAH5SRF7ElzgyEAAAAASUVORK5CYII=", GA = yi.memo(({ locations: r, setLocations: n, setVisibleStores: i, setSelectedShop: o, apiKey: u, mapOptionsProp: f, iconPaths: l }) => {
  const h = Xt(null), p = Xt(null), m = Xt(null), v = Xt([]), y = Xt(null);
  In(() => {
    new Qn({
      apiKey: u,
      //"AIzaSyDq8bFTInPfWKkXymlJridxMQzT_ltjsDo",
      version: "weekly",
      libraries: ["places", "maps"]
    }).load().then(async () => {
      m.current = new google.maps.Map(h.current, f ?? kA);
      const F = new google.maps.places.Autocomplete(p.current, {
        componentRestrictions: { country: "DE" },
        fields: ["geometry", "name"]
      });
      if (F.addListener("place_changed", () => {
        const M = F.getPlace();
        M.geometry && (m.current.panTo(M.geometry.location), m.current.setZoom(12));
      }), r) {
        console.log(r);
        const M = r.map((L) => ({
          ...L,
          position: new google.maps.LatLng(parseFloat(L.location.latitude), parseFloat(L.location.longitude))
        }));
        console.log(M), n(M), C(M), E(M);
      }
    });
  }, []);
  const _ = pi(
    zf.debounce((V) => {
      E(V);
    }, 500),
    []
  );
  In(() => {
    if (!m.current)
      return;
    const V = m.current.addListener("bounds_changed", () => {
      _(r);
    });
    return () => {
      google.maps.event.removeListener(V);
    };
  }, [r, _]);
  const C = (V) => {
    V.forEach((F) => {
      const M = new google.maps.Marker({
        position: F.position,
        map: null,
        icon: l.markerIcon ?? NA,
        draggable: !1
      });
      M.addListener("click", () => o(F)), v.current.push(M);
    }), y.current = new ue(m.current, [], {
      styles: [{
        url: l.clusterIcon ?? UA,
        width: 24,
        height: 24,
        textColor: "#fff",
        textSize: 12,
        anchorText: [10, 4],
        backgroundPosition: "center center"
      }]
    }), google.maps.event.addListener(y, "clusterclick", (F) => {
      if (F && F.getCenter) {
        const M = F.getCenter();
        M && (m.current.setCenter(M), m.current.setZoom(m.current.getZoom() + 2));
      }
    });
  }, E = (V) => {
    const F = m.current.getBounds(), M = [], L = [];
    V.forEach((U, j) => {
      F && F.contains(U.position) ? (v.current[j].setMap(m.current), M.push(v.current[j]), L.push(U)) : v.current[j].setMap(null);
    }), i(L), y.current.clearMarkers(), y.current.addMarkers(M);
  }, D = () => {
    navigator.geolocation ? navigator.geolocation.getCurrentPosition((V) => {
      const F = {
        lat: V.coords.latitude,
        lng: V.coords.longitude
      };
      m.current.setCenter(F), m.current.setZoom(12);
    }, (V) => {
      console.error("Error getting user location:", V);
    }) : console.error("Geolocation is not supported by this browser.");
  };
  return /* @__PURE__ */ G.jsxs("div", { className: "col-span-6 lg:col-span-4", children: [
    /* @__PURE__ */ G.jsx("div", { ref: h, style: { width: "100%", height: "80vh", backgroundColor: "background-color: rgb(229, 227, 223)" }, className: "h-[40vh] lg:h-[80vh]" }),
    /* @__PURE__ */ G.jsx("button", { onClick: D, className: "bg-white p-2 absolute top-[5px] left-[10px] lg:top-[10px] lg:left-[30px]", children: /* @__PURE__ */ G.jsx("img", { src: WA, alt: "Location", className: "w-3 h-3 lg:w-4 lg:h-4" }) }),
    /* @__PURE__ */ G.jsx("div", { className: "absolute top-[5px] left-[45px] lg:top-[10px] lg:left-[80px]", children: /* @__PURE__ */ G.jsx(
      "input",
      {
        className: "border-none p-1.5 w-36 lg:w-auto lg:p-2 relative z-20 cursor-pointer bg-white shadow rounded overflow-hidden text-black text-xs font-medium text-center",
        type: "text",
        ref: p,
        placeholder: "Find location by city"
      }
    ) })
  ] });
}), Yf = Lr({
  transformPagePoint: (r) => r,
  isStatic: !1,
  reducedMotion: "never"
}), Ns = Lr({}), Us = Lr(null), Ws = typeof document < "u", Ua = Ws ? CA : In, Kf = Lr({ strict: !1 }), Wa = (r) => r.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), HA = "framerAppearId", Zf = "data-" + Wa(HA), qf = {
  skipAnimations: !1,
  useManualTiming: !1
};
class Fc {
  constructor() {
    this.order = [], this.scheduled = /* @__PURE__ */ new Set();
  }
  add(n) {
    if (!this.scheduled.has(n))
      return this.scheduled.add(n), this.order.push(n), !0;
  }
  remove(n) {
    const i = this.order.indexOf(n);
    i !== -1 && (this.order.splice(i, 1), this.scheduled.delete(n));
  }
  clear() {
    this.order.length = 0, this.scheduled.clear();
  }
}
function jA(r) {
  let n = new Fc(), i = new Fc(), o = 0, u = !1, f = !1;
  const l = /* @__PURE__ */ new WeakSet(), h = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (p, m = !1, v = !1) => {
      const y = v && u, _ = y ? n : i;
      return m && l.add(p), _.add(p) && y && u && (o = n.order.length), p;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (p) => {
      i.remove(p), l.delete(p);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (p) => {
      if (u) {
        f = !0;
        return;
      }
      if (u = !0, [n, i] = [i, n], i.clear(), o = n.order.length, o)
        for (let m = 0; m < o; m++) {
          const v = n.order[m];
          l.has(v) && (h.schedule(v), r()), v(p);
        }
      u = !1, f && (f = !1, h.process(p));
    }
  };
  return h;
}
const ws = [
  "prepare",
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], zA = 40;
function Qf(r, n) {
  let i = !1, o = !0;
  const u = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, f = ws.reduce((y, _) => (y[_] = jA(() => i = !0), y), {}), l = (y) => {
    f[y].process(u);
  }, h = () => {
    const y = performance.now();
    i = !1, u.delta = o ? 1e3 / 60 : Math.max(Math.min(y - u.timestamp, zA), 1), u.timestamp = y, u.isProcessing = !0, ws.forEach(l), u.isProcessing = !1, i && n && (o = !1, r(h));
  }, p = () => {
    i = !0, o = !0, u.isProcessing || r(h);
  };
  return { schedule: ws.reduce((y, _) => {
    const C = f[_];
    return y[_] = (E, D = !1, V = !1) => (i || p(), C.schedule(E, D, V)), y;
  }, {}), cancel: (y) => ws.forEach((_) => f[_].cancel(y)), state: u, steps: f };
}
const { schedule: Ga, cancel: cb } = Qf(queueMicrotask, !1);
function YA(r, n, i, o) {
  const { visualElement: u } = Jt(Ns), f = Jt(Kf), l = Jt(Us), h = Jt(Yf).reducedMotion, p = Xt();
  o = o || f.renderer, !p.current && o && (p.current = o(r, {
    visualState: n,
    parent: u,
    props: i,
    presenceContext: l,
    blockInitialAnimation: l ? l.initial === !1 : !1,
    reducedMotionConfig: h
  }));
  const m = p.current;
  jf(() => {
    m && m.update(i, l);
  });
  const v = Xt(!!(i[Zf] && !window.HandoffComplete));
  return Ua(() => {
    m && (Ga.postRender(m.render), v.current && m.animationState && m.animationState.animateChanges());
  }), In(() => {
    m && (m.updateFeatures(), !v.current && m.animationState && m.animationState.animateChanges(), v.current && (v.current = !1, window.HandoffComplete = !0));
  }), m;
}
function Tr(r) {
  return r && typeof r == "object" && Object.prototype.hasOwnProperty.call(r, "current");
}
function KA(r, n, i) {
  return pi(
    (o) => {
      o && r.mount && r.mount(o), n && (o ? n.mount(o) : n.unmount()), i && (typeof i == "function" ? i(o) : Tr(i) && (i.current = o));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [n]
  );
}
function gi(r) {
  return typeof r == "string" || Array.isArray(r);
}
function Gs(r) {
  return r !== null && typeof r == "object" && typeof r.start == "function";
}
const Ha = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], ja = ["initial", ...Ha];
function Hs(r) {
  return Gs(r.animate) || ja.some((n) => gi(r[n]));
}
function Xf(r) {
  return !!(Hs(r) || r.variants);
}
function ZA(r, n) {
  if (Hs(r)) {
    const { initial: i, animate: o } = r;
    return {
      initial: i === !1 || gi(i) ? i : void 0,
      animate: gi(o) ? o : void 0
    };
  }
  return r.inherit !== !1 ? n : {};
}
function qA(r) {
  const { initial: n, animate: i } = ZA(r, Jt(Ns));
  return Er(() => ({ initial: n, animate: i }), [kc(n), kc(i)]);
}
function kc(r) {
  return Array.isArray(r) ? r.join(" ") : r;
}
const Nc = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, mi = {};
for (const r in Nc)
  mi[r] = {
    isEnabled: (n) => Nc[r].some((i) => !!n[i])
  };
function QA(r) {
  for (const n in r)
    mi[n] = {
      ...mi[n],
      ...r[n]
    };
}
const za = Lr({}), Jf = Lr({}), XA = Symbol.for("motionComponentSymbol");
function JA({ preloadedFeatures: r, createVisualElement: n, useRender: i, useVisualState: o, Component: u }) {
  r && QA(r);
  function f(h, p) {
    let m;
    const v = {
      ...Jt(Yf),
      ...h,
      layoutId: $A(h)
    }, { isStatic: y } = v, _ = qA(h), C = o(h, y);
    if (!y && Ws) {
      _.visualElement = YA(u, C, v, n);
      const E = Jt(Jf), D = Jt(Kf).strict;
      _.visualElement && (m = _.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        v,
        D,
        r,
        E
      ));
    }
    return Qt.createElement(
      Ns.Provider,
      { value: _ },
      m && _.visualElement ? Qt.createElement(m, { visualElement: _.visualElement, ...v }) : null,
      i(u, h, KA(C, _.visualElement, p), C, y, _.visualElement)
    );
  }
  const l = SA(f);
  return l[XA] = u, l;
}
function $A({ layoutId: r }) {
  const n = Jt(za).id;
  return n && r !== void 0 ? n + "-" + r : r;
}
function tx(r) {
  function n(o, u = {}) {
    return JA(r(o, u));
  }
  if (typeof Proxy > "u")
    return n;
  const i = /* @__PURE__ */ new Map();
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (o, u) => (i.has(u) || i.set(u, n(u)), i.get(u))
  });
}
const ex = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Ya(r) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof r != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    r.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(ex.indexOf(r) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(r))
    )
  );
}
const Is = {};
function nx(r) {
  Object.assign(Is, r);
}
const Ai = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], tr = new Set(Ai);
function $f(r, { layout: n, layoutId: i }) {
  return tr.has(r) || r.startsWith("origin") || (n || i !== void 0) && (!!Is[r] || r === "opacity");
}
const le = (r) => !!(r && r.getVelocity), rx = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, ix = Ai.length;
function sx(r, { enableHardwareAcceleration: n = !0, allowTransformNone: i = !0 }, o, u) {
  let f = "";
  for (let l = 0; l < ix; l++) {
    const h = Ai[l];
    if (r[h] !== void 0) {
      const p = rx[h] || h;
      f += `${p}(${r[h]}) `;
    }
  }
  return n && !r.z && (f += "translateZ(0)"), f = f.trim(), u ? f = u(r, o ? "" : f) : i && o && (f = "none"), f;
}
const th = (r) => (n) => typeof n == "string" && n.startsWith(r), eh = th("--"), Sa = th("var(--"), ox = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, ax = (r, n) => n && typeof r == "number" ? n.transform(r) : r, Ln = (r, n, i) => Math.min(Math.max(i, r), n), er = {
  test: (r) => typeof r == "number",
  parse: parseFloat,
  transform: (r) => r
}, ci = {
  ...er,
  transform: (r) => Ln(0, 1, r)
}, _s = {
  ...er,
  default: 1
}, fi = (r) => Math.round(r * 1e5) / 1e5, js = /(-)?([\d]*\.?[\d])+/g, nh = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, ux = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function xi(r) {
  return typeof r == "string";
}
const wi = (r) => ({
  test: (n) => xi(n) && n.endsWith(r) && n.split(" ").length === 1,
  parse: parseFloat,
  transform: (n) => `${n}${r}`
}), Sn = wi("deg"), Qe = wi("%"), Z = wi("px"), lx = wi("vh"), cx = wi("vw"), Uc = {
  ...Qe,
  parse: (r) => Qe.parse(r) / 100,
  transform: (r) => Qe.transform(r * 100)
}, Wc = {
  ...er,
  transform: Math.round
}, rh = {
  // Border props
  borderWidth: Z,
  borderTopWidth: Z,
  borderRightWidth: Z,
  borderBottomWidth: Z,
  borderLeftWidth: Z,
  borderRadius: Z,
  radius: Z,
  borderTopLeftRadius: Z,
  borderTopRightRadius: Z,
  borderBottomRightRadius: Z,
  borderBottomLeftRadius: Z,
  // Positioning props
  width: Z,
  maxWidth: Z,
  height: Z,
  maxHeight: Z,
  size: Z,
  top: Z,
  right: Z,
  bottom: Z,
  left: Z,
  // Spacing props
  padding: Z,
  paddingTop: Z,
  paddingRight: Z,
  paddingBottom: Z,
  paddingLeft: Z,
  margin: Z,
  marginTop: Z,
  marginRight: Z,
  marginBottom: Z,
  marginLeft: Z,
  // Transform props
  rotate: Sn,
  rotateX: Sn,
  rotateY: Sn,
  rotateZ: Sn,
  scale: _s,
  scaleX: _s,
  scaleY: _s,
  scaleZ: _s,
  skew: Sn,
  skewX: Sn,
  skewY: Sn,
  distance: Z,
  translateX: Z,
  translateY: Z,
  translateZ: Z,
  x: Z,
  y: Z,
  z: Z,
  perspective: Z,
  transformPerspective: Z,
  opacity: ci,
  originX: Uc,
  originY: Uc,
  originZ: Z,
  // Misc
  zIndex: Wc,
  // SVG
  fillOpacity: ci,
  strokeOpacity: ci,
  numOctaves: Wc
};
function Ka(r, n, i, o) {
  const { style: u, vars: f, transform: l, transformOrigin: h } = r;
  let p = !1, m = !1, v = !0;
  for (const y in n) {
    const _ = n[y];
    if (eh(y)) {
      f[y] = _;
      continue;
    }
    const C = rh[y], E = ax(_, C);
    if (tr.has(y)) {
      if (p = !0, l[y] = E, !v)
        continue;
      _ !== (C.default || 0) && (v = !1);
    } else
      y.startsWith("origin") ? (m = !0, h[y] = E) : u[y] = E;
  }
  if (n.transform || (p || o ? u.transform = sx(r.transform, i, v, o) : u.transform && (u.transform = "none")), m) {
    const { originX: y = "50%", originY: _ = "50%", originZ: C = 0 } = h;
    u.transformOrigin = `${y} ${_} ${C}`;
  }
}
const Za = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function ih(r, n, i) {
  for (const o in n)
    !le(n[o]) && !$f(o, i) && (r[o] = n[o]);
}
function fx({ transformTemplate: r }, n, i) {
  return Er(() => {
    const o = Za();
    return Ka(o, n, { enableHardwareAcceleration: !i }, r), Object.assign({}, o.vars, o.style);
  }, [n]);
}
function hx(r, n, i) {
  const o = r.style || {}, u = {};
  return ih(u, o, r), Object.assign(u, fx(r, n, i)), u;
}
function dx(r, n, i) {
  const o = {}, u = hx(r, n, i);
  return r.drag && r.dragListener !== !1 && (o.draggable = !1, u.userSelect = u.WebkitUserSelect = u.WebkitTouchCallout = "none", u.touchAction = r.drag === !0 ? "none" : `pan-${r.drag === "x" ? "y" : "x"}`), r.tabIndex === void 0 && (r.onTap || r.onTapStart || r.whileTap) && (o.tabIndex = 0), o.style = u, o;
}
const px = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function Ls(r) {
  return r.startsWith("while") || r.startsWith("drag") && r !== "draggable" || r.startsWith("layout") || r.startsWith("onTap") || r.startsWith("onPan") || r.startsWith("onLayout") || px.has(r);
}
let sh = (r) => !Ls(r);
function gx(r) {
  r && (sh = (n) => n.startsWith("on") ? !Ls(n) : r(n));
}
try {
  gx(require("@emotion/is-prop-valid").default);
} catch {
}
function mx(r, n, i) {
  const o = {};
  for (const u in r)
    u === "values" && typeof r.values == "object" || (sh(u) || i === !0 && Ls(u) || !n && !Ls(u) || // If trying to use native HTML drag events, forward drag listeners
    r.draggable && u.startsWith("onDrag")) && (o[u] = r[u]);
  return o;
}
function Gc(r, n, i) {
  return typeof r == "string" ? r : Z.transform(n + i * r);
}
function vx(r, n, i) {
  const o = Gc(n, r.x, r.width), u = Gc(i, r.y, r.height);
  return `${o} ${u}`;
}
const yx = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Ax = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function xx(r, n, i = 1, o = 0, u = !0) {
  r.pathLength = 1;
  const f = u ? yx : Ax;
  r[f.offset] = Z.transform(-o);
  const l = Z.transform(n), h = Z.transform(i);
  r[f.array] = `${l} ${h}`;
}
function qa(r, {
  attrX: n,
  attrY: i,
  attrScale: o,
  originX: u,
  originY: f,
  pathLength: l,
  pathSpacing: h = 1,
  pathOffset: p = 0,
  // This is object creation, which we try to avoid per-frame.
  ...m
}, v, y, _) {
  if (Ka(r, m, v, _), y) {
    r.style.viewBox && (r.attrs.viewBox = r.style.viewBox);
    return;
  }
  r.attrs = r.style, r.style = {};
  const { attrs: C, style: E, dimensions: D } = r;
  C.transform && (D && (E.transform = C.transform), delete C.transform), D && (u !== void 0 || f !== void 0 || E.transform) && (E.transformOrigin = vx(D, u !== void 0 ? u : 0.5, f !== void 0 ? f : 0.5)), n !== void 0 && (C.x = n), i !== void 0 && (C.y = i), o !== void 0 && (C.scale = o), l !== void 0 && xx(C, l, h, p, !1);
}
const oh = () => ({
  ...Za(),
  attrs: {}
}), Qa = (r) => typeof r == "string" && r.toLowerCase() === "svg";
function wx(r, n, i, o) {
  const u = Er(() => {
    const f = oh();
    return qa(f, n, { enableHardwareAcceleration: !1 }, Qa(o), r.transformTemplate), {
      ...f.attrs,
      style: { ...f.style }
    };
  }, [n]);
  if (r.style) {
    const f = {};
    ih(f, r.style, r), u.style = { ...f, ...u.style };
  }
  return u;
}
function _x(r = !1) {
  return (i, o, u, { latestValues: f }, l) => {
    const p = (Ya(i) ? wx : dx)(o, f, l, i), v = {
      ...mx(o, typeof i == "string", r),
      ...p,
      ref: u
    }, { children: y } = o, _ = Er(() => le(y) ? y.get() : y, [y]);
    return PA(i, {
      ...v,
      children: _
    });
  };
}
function ah(r, { style: n, vars: i }, o, u) {
  Object.assign(r.style, n, u && u.getProjectionStyles(o));
  for (const f in i)
    r.style.setProperty(f, i[f]);
}
const uh = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function lh(r, n, i, o) {
  ah(r, n, void 0, o);
  for (const u in n.attrs)
    r.setAttribute(uh.has(u) ? u : Wa(u), n.attrs[u]);
}
function Xa(r, n) {
  const { style: i } = r, o = {};
  for (const u in i)
    (le(i[u]) || n.style && le(n.style[u]) || $f(u, r)) && (o[u] = i[u]);
  return o;
}
function ch(r, n) {
  const i = Xa(r, n);
  for (const o in r)
    if (le(r[o]) || le(n[o])) {
      const u = Ai.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      i[u] = r[o];
    }
  return i;
}
function Ja(r, n, i, o = {}, u = {}) {
  return typeof n == "function" && (n = n(i !== void 0 ? i : r.custom, o, u)), typeof n == "string" && (n = r.variants && r.variants[n]), typeof n == "function" && (n = n(i !== void 0 ? i : r.custom, o, u)), n;
}
function fh(r) {
  const n = Xt(null);
  return n.current === null && (n.current = r()), n.current;
}
const Ms = (r) => Array.isArray(r), bx = (r) => !!(r && typeof r == "object" && r.mix && r.toValue), Tx = (r) => Ms(r) ? r[r.length - 1] || 0 : r;
function Ss(r) {
  const n = le(r) ? r.get() : r;
  return bx(n) ? n.toValue() : n;
}
function Cx({ scrapeMotionValuesFromProps: r, createRenderState: n, onMount: i }, o, u, f) {
  const l = {
    latestValues: Sx(o, u, f, r),
    renderState: n()
  };
  return i && (l.mount = (h) => i(o, h, l)), l;
}
const hh = (r) => (n, i) => {
  const o = Jt(Ns), u = Jt(Us), f = () => Cx(r, n, o, u);
  return i ? f() : fh(f);
};
function Sx(r, n, i, o) {
  const u = {}, f = o(r, {});
  for (const _ in f)
    u[_] = Ss(f[_]);
  let { initial: l, animate: h } = r;
  const p = Hs(r), m = Xf(r);
  n && m && !p && r.inherit !== !1 && (l === void 0 && (l = n.initial), h === void 0 && (h = n.animate));
  let v = i ? i.initial === !1 : !1;
  v = v || l === !1;
  const y = v ? h : l;
  return y && typeof y != "boolean" && !Gs(y) && (Array.isArray(y) ? y : [y]).forEach((C) => {
    const E = Ja(r, C);
    if (!E)
      return;
    const { transitionEnd: D, transition: V, ...F } = E;
    for (const M in F) {
      let L = F[M];
      if (Array.isArray(L)) {
        const U = v ? L.length - 1 : 0;
        L = L[U];
      }
      L !== null && (u[M] = L);
    }
    for (const M in D)
      u[M] = D[M];
  }), u;
}
const Et = (r) => r, { schedule: wt, cancel: hn, state: Wt, steps: ha } = Qf(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Et, !0), Px = {
  useVisualState: hh({
    scrapeMotionValuesFromProps: ch,
    createRenderState: oh,
    onMount: (r, n, { renderState: i, latestValues: o }) => {
      wt.read(() => {
        try {
          i.dimensions = typeof n.getBBox == "function" ? n.getBBox() : n.getBoundingClientRect();
        } catch {
          i.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
      }), wt.render(() => {
        qa(i, o, { enableHardwareAcceleration: !1 }, Qa(n.tagName), r.transformTemplate), lh(n, i);
      });
    }
  })
}, Ex = {
  useVisualState: hh({
    scrapeMotionValuesFromProps: Xa,
    createRenderState: Za
  })
};
function Rx(r, { forwardMotionProps: n = !1 }, i, o) {
  return {
    ...Ya(r) ? Px : Ex,
    preloadedFeatures: i,
    useRender: _x(n),
    createVisualElement: o,
    Component: r
  };
}
function ln(r, n, i, o = { passive: !0 }) {
  return r.addEventListener(n, i, o), () => r.removeEventListener(n, i);
}
const dh = (r) => r.pointerType === "mouse" ? typeof r.button != "number" || r.button <= 0 : r.isPrimary !== !1;
function zs(r, n = "page") {
  return {
    point: {
      x: r[n + "X"],
      y: r[n + "Y"]
    }
  };
}
const Ix = (r) => (n) => dh(n) && r(n, zs(n));
function cn(r, n, i, o) {
  return ln(r, n, Ix(i), o);
}
const Lx = (r, n) => (i) => n(r(i)), En = (...r) => r.reduce(Lx);
function ph(r) {
  let n = null;
  return () => {
    const i = () => {
      n = null;
    };
    return n === null ? (n = r, i) : !1;
  };
}
const Hc = ph("dragHorizontal"), jc = ph("dragVertical");
function gh(r) {
  let n = !1;
  if (r === "y")
    n = jc();
  else if (r === "x")
    n = Hc();
  else {
    const i = Hc(), o = jc();
    i && o ? n = () => {
      i(), o();
    } : (i && i(), o && o());
  }
  return n;
}
function mh() {
  const r = gh(!0);
  return r ? (r(), !1) : !0;
}
class Dn {
  constructor(n) {
    this.isMounted = !1, this.node = n;
  }
  update() {
  }
}
function zc(r, n) {
  const i = "pointer" + (n ? "enter" : "leave"), o = "onHover" + (n ? "Start" : "End"), u = (f, l) => {
    if (f.pointerType === "touch" || mh())
      return;
    const h = r.getProps();
    r.animationState && h.whileHover && r.animationState.setActive("whileHover", n), h[o] && wt.update(() => h[o](f, l));
  };
  return cn(r.current, i, u, {
    passive: !r.getProps()[o]
  });
}
class Mx extends Dn {
  mount() {
    this.unmount = En(zc(this.node, !0), zc(this.node, !1));
  }
  unmount() {
  }
}
class Dx extends Dn {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let n = !1;
    try {
      n = this.node.current.matches(":focus-visible");
    } catch {
      n = !0;
    }
    !n || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = En(ln(this.node.current, "focus", () => this.onFocus()), ln(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const vh = (r, n) => n ? r === n ? !0 : vh(r, n.parentElement) : !1;
function da(r, n) {
  if (!n)
    return;
  const i = new PointerEvent("pointer" + r);
  n(i, zs(i));
}
class Bx extends Dn {
  constructor() {
    super(...arguments), this.removeStartListeners = Et, this.removeEndListeners = Et, this.removeAccessibleListeners = Et, this.startPointerPress = (n, i) => {
      if (this.isPressing)
        return;
      this.removeEndListeners();
      const o = this.node.getProps(), f = cn(window, "pointerup", (h, p) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: m, onTapCancel: v, globalTapTarget: y } = this.node.getProps();
        wt.update(() => {
          !y && !vh(this.node.current, h.target) ? v && v(h, p) : m && m(h, p);
        });
      }, { passive: !(o.onTap || o.onPointerUp) }), l = cn(window, "pointercancel", (h, p) => this.cancelPress(h, p), { passive: !(o.onTapCancel || o.onPointerCancel) });
      this.removeEndListeners = En(f, l), this.startPress(n, i);
    }, this.startAccessiblePress = () => {
      const n = (f) => {
        if (f.key !== "Enter" || this.isPressing)
          return;
        const l = (h) => {
          h.key !== "Enter" || !this.checkPressEnd() || da("up", (p, m) => {
            const { onTap: v } = this.node.getProps();
            v && wt.update(() => v(p, m));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = ln(this.node.current, "keyup", l), da("down", (h, p) => {
          this.startPress(h, p);
        });
      }, i = ln(this.node.current, "keydown", n), o = () => {
        this.isPressing && da("cancel", (f, l) => this.cancelPress(f, l));
      }, u = ln(this.node.current, "blur", o);
      this.removeAccessibleListeners = En(i, u);
    };
  }
  startPress(n, i) {
    this.isPressing = !0;
    const { onTapStart: o, whileTap: u } = this.node.getProps();
    u && this.node.animationState && this.node.animationState.setActive("whileTap", !0), o && wt.update(() => o(n, i));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !mh();
  }
  cancelPress(n, i) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: o } = this.node.getProps();
    o && wt.update(() => o(n, i));
  }
  mount() {
    const n = this.node.getProps(), i = cn(n.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, { passive: !(n.onTapStart || n.onPointerStart) }), o = ln(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = En(i, o);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const Pa = /* @__PURE__ */ new WeakMap(), pa = /* @__PURE__ */ new WeakMap(), Ox = (r) => {
  const n = Pa.get(r.target);
  n && n(r);
}, Vx = (r) => {
  r.forEach(Ox);
};
function Fx({ root: r, ...n }) {
  const i = r || document;
  pa.has(i) || pa.set(i, {});
  const o = pa.get(i), u = JSON.stringify(n);
  return o[u] || (o[u] = new IntersectionObserver(Vx, { root: r, ...n })), o[u];
}
function kx(r, n, i) {
  const o = Fx(n);
  return Pa.set(r, i), o.observe(r), () => {
    Pa.delete(r), o.unobserve(r);
  };
}
const Nx = {
  some: 0,
  all: 1
};
class Ux extends Dn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: n = {} } = this.node.getProps(), { root: i, margin: o, amount: u = "some", once: f } = n, l = {
      root: i ? i.current : void 0,
      rootMargin: o,
      threshold: typeof u == "number" ? u : Nx[u]
    }, h = (p) => {
      const { isIntersecting: m } = p;
      if (this.isInView === m || (this.isInView = m, f && !m && this.hasEnteredView))
        return;
      m && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", m);
      const { onViewportEnter: v, onViewportLeave: y } = this.node.getProps(), _ = m ? v : y;
      _ && _(p);
    };
    return kx(this.node.current, l, h);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: n, prevProps: i } = this.node;
    ["amount", "margin", "root"].some(Wx(n, i)) && this.startObserver();
  }
  unmount() {
  }
}
function Wx({ viewport: r = {} }, { viewport: n = {} } = {}) {
  return (i) => r[i] !== n[i];
}
const Gx = {
  inView: {
    Feature: Ux
  },
  tap: {
    Feature: Bx
  },
  focus: {
    Feature: Dx
  },
  hover: {
    Feature: Mx
  }
};
function yh(r, n) {
  if (!Array.isArray(n))
    return !1;
  const i = n.length;
  if (i !== r.length)
    return !1;
  for (let o = 0; o < i; o++)
    if (n[o] !== r[o])
      return !1;
  return !0;
}
function Hx(r) {
  const n = {};
  return r.values.forEach((i, o) => n[o] = i.get()), n;
}
function jx(r) {
  const n = {};
  return r.values.forEach((i, o) => n[o] = i.getVelocity()), n;
}
function Ys(r, n, i) {
  const o = r.getProps();
  return Ja(o, n, i !== void 0 ? i : o.custom, Hx(r), jx(r));
}
let _i = Et, De = Et;
process.env.NODE_ENV !== "production" && (_i = (r, n) => {
  !r && typeof console < "u" && console.warn(n);
}, De = (r, n) => {
  if (!r)
    throw new Error(n);
});
const Rn = (r) => r * 1e3, fn = (r) => r / 1e3, zx = {
  current: !1
}, Ah = (r) => Array.isArray(r) && typeof r[0] == "number";
function xh(r) {
  return !!(!r || typeof r == "string" && wh[r] || Ah(r) || Array.isArray(r) && r.every(xh));
}
const li = ([r, n, i, o]) => `cubic-bezier(${r}, ${n}, ${i}, ${o})`, wh = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: li([0, 0.65, 0.55, 1]),
  circOut: li([0.55, 0, 1, 0.45]),
  backIn: li([0.31, 0.01, 0.66, -0.59]),
  backOut: li([0.33, 1.53, 0.69, 0.99])
};
function _h(r) {
  if (r)
    return Ah(r) ? li(r) : Array.isArray(r) ? r.map(_h) : wh[r];
}
function Yx(r, n, i, { delay: o = 0, duration: u, repeat: f = 0, repeatType: l = "loop", ease: h, times: p } = {}) {
  const m = { [n]: i };
  p && (m.offset = p);
  const v = _h(h);
  return Array.isArray(v) && (m.easing = v), r.animate(m, {
    delay: o,
    duration: u,
    easing: Array.isArray(v) ? "linear" : v,
    fill: "both",
    iterations: f + 1,
    direction: l === "reverse" ? "alternate" : "normal"
  });
}
function Kx(r, { repeat: n, repeatType: i = "loop" }) {
  const o = n && i !== "loop" && n % 2 === 1 ? 0 : r.length - 1;
  return r[o];
}
const bh = (r, n, i) => (((1 - 3 * i + 3 * n) * r + (3 * i - 6 * n)) * r + 3 * n) * r, Zx = 1e-7, qx = 12;
function Qx(r, n, i, o, u) {
  let f, l, h = 0;
  do
    l = n + (i - n) / 2, f = bh(l, o, u) - r, f > 0 ? i = l : n = l;
  while (Math.abs(f) > Zx && ++h < qx);
  return l;
}
function bi(r, n, i, o) {
  if (r === n && i === o)
    return Et;
  const u = (f) => Qx(f, 0, 1, r, i);
  return (f) => f === 0 || f === 1 ? f : bh(u(f), n, o);
}
const Xx = bi(0.42, 0, 1, 1), Jx = bi(0, 0, 0.58, 1), Th = bi(0.42, 0, 0.58, 1), $x = (r) => Array.isArray(r) && typeof r[0] != "number", Ch = (r) => (n) => n <= 0.5 ? r(2 * n) / 2 : (2 - r(2 * (1 - n))) / 2, Sh = (r) => (n) => 1 - r(1 - n), $a = (r) => 1 - Math.sin(Math.acos(r)), Ph = Sh($a), tw = Ch($a), Eh = bi(0.33, 1.53, 0.69, 0.99), tu = Sh(Eh), ew = Ch(tu), nw = (r) => (r *= 2) < 1 ? 0.5 * tu(r) : 0.5 * (2 - Math.pow(2, -10 * (r - 1))), Yc = {
  linear: Et,
  easeIn: Xx,
  easeInOut: Th,
  easeOut: Jx,
  circIn: $a,
  circInOut: tw,
  circOut: Ph,
  backIn: tu,
  backInOut: ew,
  backOut: Eh,
  anticipate: nw
}, Kc = (r) => {
  if (Array.isArray(r)) {
    De(r.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [n, i, o, u] = r;
    return bi(n, i, o, u);
  } else if (typeof r == "string")
    return De(Yc[r] !== void 0, `Invalid easing type '${r}'`), Yc[r];
  return r;
}, eu = (r, n) => (i) => !!(xi(i) && ux.test(i) && i.startsWith(r) || n && Object.prototype.hasOwnProperty.call(i, n)), Rh = (r, n, i) => (o) => {
  if (!xi(o))
    return o;
  const [u, f, l, h] = o.match(js);
  return {
    [r]: parseFloat(u),
    [n]: parseFloat(f),
    [i]: parseFloat(l),
    alpha: h !== void 0 ? parseFloat(h) : 1
  };
}, rw = (r) => Ln(0, 255, r), ga = {
  ...er,
  transform: (r) => Math.round(rw(r))
}, Xn = {
  test: eu("rgb", "red"),
  parse: Rh("red", "green", "blue"),
  transform: ({ red: r, green: n, blue: i, alpha: o = 1 }) => "rgba(" + ga.transform(r) + ", " + ga.transform(n) + ", " + ga.transform(i) + ", " + fi(ci.transform(o)) + ")"
};
function iw(r) {
  let n = "", i = "", o = "", u = "";
  return r.length > 5 ? (n = r.substring(1, 3), i = r.substring(3, 5), o = r.substring(5, 7), u = r.substring(7, 9)) : (n = r.substring(1, 2), i = r.substring(2, 3), o = r.substring(3, 4), u = r.substring(4, 5), n += n, i += i, o += o, u += u), {
    red: parseInt(n, 16),
    green: parseInt(i, 16),
    blue: parseInt(o, 16),
    alpha: u ? parseInt(u, 16) / 255 : 1
  };
}
const Ea = {
  test: eu("#"),
  parse: iw,
  transform: Xn.transform
}, Cr = {
  test: eu("hsl", "hue"),
  parse: Rh("hue", "saturation", "lightness"),
  transform: ({ hue: r, saturation: n, lightness: i, alpha: o = 1 }) => "hsla(" + Math.round(r) + ", " + Qe.transform(fi(n)) + ", " + Qe.transform(fi(i)) + ", " + fi(ci.transform(o)) + ")"
}, qt = {
  test: (r) => Xn.test(r) || Ea.test(r) || Cr.test(r),
  parse: (r) => Xn.test(r) ? Xn.parse(r) : Cr.test(r) ? Cr.parse(r) : Ea.parse(r),
  transform: (r) => xi(r) ? r : r.hasOwnProperty("red") ? Xn.transform(r) : Cr.transform(r)
}, Tt = (r, n, i) => -i * r + i * n + r;
function ma(r, n, i) {
  return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? r + (n - r) * 6 * i : i < 1 / 2 ? n : i < 2 / 3 ? r + (n - r) * (2 / 3 - i) * 6 : r;
}
function sw({ hue: r, saturation: n, lightness: i, alpha: o }) {
  r /= 360, n /= 100, i /= 100;
  let u = 0, f = 0, l = 0;
  if (!n)
    u = f = l = i;
  else {
    const h = i < 0.5 ? i * (1 + n) : i + n - i * n, p = 2 * i - h;
    u = ma(p, h, r + 1 / 3), f = ma(p, h, r), l = ma(p, h, r - 1 / 3);
  }
  return {
    red: Math.round(u * 255),
    green: Math.round(f * 255),
    blue: Math.round(l * 255),
    alpha: o
  };
}
const va = (r, n, i) => {
  const o = r * r;
  return Math.sqrt(Math.max(0, i * (n * n - o) + o));
}, ow = [Ea, Xn, Cr], aw = (r) => ow.find((n) => n.test(r));
function Zc(r) {
  const n = aw(r);
  De(!!n, `'${r}' is not an animatable color. Use the equivalent color code instead.`);
  let i = n.parse(r);
  return n === Cr && (i = sw(i)), i;
}
const Ih = (r, n) => {
  const i = Zc(r), o = Zc(n), u = { ...i };
  return (f) => (u.red = va(i.red, o.red, f), u.green = va(i.green, o.green, f), u.blue = va(i.blue, o.blue, f), u.alpha = Tt(i.alpha, o.alpha, f), Xn.transform(u));
};
function uw(r) {
  var n, i;
  return isNaN(r) && xi(r) && (((n = r.match(js)) === null || n === void 0 ? void 0 : n.length) || 0) + (((i = r.match(nh)) === null || i === void 0 ? void 0 : i.length) || 0) > 0;
}
const Lh = {
  regex: ox,
  countKey: "Vars",
  token: "${v}",
  parse: Et
}, Mh = {
  regex: nh,
  countKey: "Colors",
  token: "${c}",
  parse: qt.parse
}, Dh = {
  regex: js,
  countKey: "Numbers",
  token: "${n}",
  parse: er.parse
};
function ya(r, { regex: n, countKey: i, token: o, parse: u }) {
  const f = r.tokenised.match(n);
  f && (r["num" + i] = f.length, r.tokenised = r.tokenised.replace(n, o), r.values.push(...f.map(u)));
}
function Ds(r) {
  const n = r.toString(), i = {
    value: n,
    tokenised: n,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return i.value.includes("var(--") && ya(i, Lh), ya(i, Mh), ya(i, Dh), i;
}
function Bh(r) {
  return Ds(r).values;
}
function Oh(r) {
  const { values: n, numColors: i, numVars: o, tokenised: u } = Ds(r), f = n.length;
  return (l) => {
    let h = u;
    for (let p = 0; p < f; p++)
      p < o ? h = h.replace(Lh.token, l[p]) : p < o + i ? h = h.replace(Mh.token, qt.transform(l[p])) : h = h.replace(Dh.token, fi(l[p]));
    return h;
  };
}
const lw = (r) => typeof r == "number" ? 0 : r;
function cw(r) {
  const n = Bh(r);
  return Oh(r)(n.map(lw));
}
const Mn = {
  test: uw,
  parse: Bh,
  createTransformer: Oh,
  getAnimatableNone: cw
}, Vh = (r, n) => (i) => `${i > 0 ? n : r}`;
function Fh(r, n) {
  return typeof r == "number" ? (i) => Tt(r, n, i) : qt.test(r) ? Ih(r, n) : r.startsWith("var(") ? Vh(r, n) : Nh(r, n);
}
const kh = (r, n) => {
  const i = [...r], o = i.length, u = r.map((f, l) => Fh(f, n[l]));
  return (f) => {
    for (let l = 0; l < o; l++)
      i[l] = u[l](f);
    return i;
  };
}, fw = (r, n) => {
  const i = { ...r, ...n }, o = {};
  for (const u in i)
    r[u] !== void 0 && n[u] !== void 0 && (o[u] = Fh(r[u], n[u]));
  return (u) => {
    for (const f in o)
      i[f] = o[f](u);
    return i;
  };
}, Nh = (r, n) => {
  const i = Mn.createTransformer(n), o = Ds(r), u = Ds(n);
  return o.numVars === u.numVars && o.numColors === u.numColors && o.numNumbers >= u.numNumbers ? En(kh(o.values, u.values), i) : (_i(!0, `Complex values '${r}' and '${n}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), Vh(r, n));
}, vi = (r, n, i) => {
  const o = n - r;
  return o === 0 ? 1 : (i - r) / o;
}, qc = (r, n) => (i) => Tt(r, n, i);
function hw(r) {
  return typeof r == "number" ? qc : typeof r == "string" ? qt.test(r) ? Ih : Nh : Array.isArray(r) ? kh : typeof r == "object" ? fw : qc;
}
function dw(r, n, i) {
  const o = [], u = i || hw(r[0]), f = r.length - 1;
  for (let l = 0; l < f; l++) {
    let h = u(r[l], r[l + 1]);
    if (n) {
      const p = Array.isArray(n) ? n[l] || Et : n;
      h = En(p, h);
    }
    o.push(h);
  }
  return o;
}
function Uh(r, n, { clamp: i = !0, ease: o, mixer: u } = {}) {
  const f = r.length;
  if (De(f === n.length, "Both input and output ranges must be the same length"), f === 1)
    return () => n[0];
  r[0] > r[f - 1] && (r = [...r].reverse(), n = [...n].reverse());
  const l = dw(n, o, u), h = l.length, p = (m) => {
    let v = 0;
    if (h > 1)
      for (; v < r.length - 2 && !(m < r[v + 1]); v++)
        ;
    const y = vi(r[v], r[v + 1], m);
    return l[v](y);
  };
  return i ? (m) => p(Ln(r[0], r[f - 1], m)) : p;
}
function pw(r, n) {
  const i = r[r.length - 1];
  for (let o = 1; o <= n; o++) {
    const u = vi(0, n, o);
    r.push(Tt(i, 1, u));
  }
}
function gw(r) {
  const n = [0];
  return pw(n, r.length - 1), n;
}
function mw(r, n) {
  return r.map((i) => i * n);
}
function vw(r, n) {
  return r.map(() => n || Th).splice(0, r.length - 1);
}
function Bs({ duration: r = 300, keyframes: n, times: i, ease: o = "easeInOut" }) {
  const u = $x(o) ? o.map(Kc) : Kc(o), f = {
    done: !1,
    value: n[0]
  }, l = mw(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    i && i.length === n.length ? i : gw(n),
    r
  ), h = Uh(l, n, {
    ease: Array.isArray(u) ? u : vw(n, u)
  });
  return {
    calculatedDuration: r,
    next: (p) => (f.value = h(p), f.done = p >= r, f)
  };
}
function Wh(r, n) {
  return n ? r * (1e3 / n) : 0;
}
const yw = 5;
function Gh(r, n, i) {
  const o = Math.max(n - yw, 0);
  return Wh(i - r(o), n - o);
}
const Aa = 1e-3, Aw = 0.01, Qc = 10, xw = 0.05, ww = 1;
function _w({ duration: r = 800, bounce: n = 0.25, velocity: i = 0, mass: o = 1 }) {
  let u, f;
  _i(r <= Rn(Qc), "Spring duration must be 10 seconds or less");
  let l = 1 - n;
  l = Ln(xw, ww, l), r = Ln(Aw, Qc, fn(r)), l < 1 ? (u = (m) => {
    const v = m * l, y = v * r, _ = v - i, C = Ra(m, l), E = Math.exp(-y);
    return Aa - _ / C * E;
  }, f = (m) => {
    const y = m * l * r, _ = y * i + i, C = Math.pow(l, 2) * Math.pow(m, 2) * r, E = Math.exp(-y), D = Ra(Math.pow(m, 2), l);
    return (-u(m) + Aa > 0 ? -1 : 1) * ((_ - C) * E) / D;
  }) : (u = (m) => {
    const v = Math.exp(-m * r), y = (m - i) * r + 1;
    return -Aa + v * y;
  }, f = (m) => {
    const v = Math.exp(-m * r), y = (i - m) * (r * r);
    return v * y;
  });
  const h = 5 / r, p = Tw(u, f, h);
  if (r = Rn(r), isNaN(p))
    return {
      stiffness: 100,
      damping: 10,
      duration: r
    };
  {
    const m = Math.pow(p, 2) * o;
    return {
      stiffness: m,
      damping: l * 2 * Math.sqrt(o * m),
      duration: r
    };
  }
}
const bw = 12;
function Tw(r, n, i) {
  let o = i;
  for (let u = 1; u < bw; u++)
    o = o - r(o) / n(o);
  return o;
}
function Ra(r, n) {
  return r * Math.sqrt(1 - n * n);
}
const Cw = ["duration", "bounce"], Sw = ["stiffness", "damping", "mass"];
function Xc(r, n) {
  return n.some((i) => r[i] !== void 0);
}
function Pw(r) {
  let n = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...r
  };
  if (!Xc(r, Sw) && Xc(r, Cw)) {
    const i = _w(r);
    n = {
      ...n,
      ...i,
      mass: 1
    }, n.isResolvedFromDuration = !0;
  }
  return n;
}
function Hh({ keyframes: r, restDelta: n, restSpeed: i, ...o }) {
  const u = r[0], f = r[r.length - 1], l = { done: !1, value: u }, { stiffness: h, damping: p, mass: m, duration: v, velocity: y, isResolvedFromDuration: _ } = Pw({
    ...o,
    velocity: -fn(o.velocity || 0)
  }), C = y || 0, E = p / (2 * Math.sqrt(h * m)), D = f - u, V = fn(Math.sqrt(h / m)), F = Math.abs(D) < 5;
  i || (i = F ? 0.01 : 2), n || (n = F ? 5e-3 : 0.5);
  let M;
  if (E < 1) {
    const L = Ra(V, E);
    M = (U) => {
      const j = Math.exp(-E * V * U);
      return f - j * ((C + E * V * D) / L * Math.sin(L * U) + D * Math.cos(L * U));
    };
  } else if (E === 1)
    M = (L) => f - Math.exp(-V * L) * (D + (C + V * D) * L);
  else {
    const L = V * Math.sqrt(E * E - 1);
    M = (U) => {
      const j = Math.exp(-E * V * U), ot = Math.min(L * U, 300);
      return f - j * ((C + E * V * D) * Math.sinh(ot) + L * D * Math.cosh(ot)) / L;
    };
  }
  return {
    calculatedDuration: _ && v || null,
    next: (L) => {
      const U = M(L);
      if (_)
        l.done = L >= v;
      else {
        let j = C;
        L !== 0 && (E < 1 ? j = Gh(M, L, U) : j = 0);
        const ot = Math.abs(j) <= i, rt = Math.abs(f - U) <= n;
        l.done = ot && rt;
      }
      return l.value = l.done ? f : U, l;
    }
  };
}
function Jc({ keyframes: r, velocity: n = 0, power: i = 0.8, timeConstant: o = 325, bounceDamping: u = 10, bounceStiffness: f = 500, modifyTarget: l, min: h, max: p, restDelta: m = 0.5, restSpeed: v }) {
  const y = r[0], _ = {
    done: !1,
    value: y
  }, C = (Q) => h !== void 0 && Q < h || p !== void 0 && Q > p, E = (Q) => h === void 0 ? p : p === void 0 || Math.abs(h - Q) < Math.abs(p - Q) ? h : p;
  let D = i * n;
  const V = y + D, F = l === void 0 ? V : l(V);
  F !== V && (D = F - y);
  const M = (Q) => -D * Math.exp(-Q / o), L = (Q) => F + M(Q), U = (Q) => {
    const lt = M(Q), Gt = L(Q);
    _.done = Math.abs(lt) <= m, _.value = _.done ? F : Gt;
  };
  let j, ot;
  const rt = (Q) => {
    C(_.value) && (j = Q, ot = Hh({
      keyframes: [_.value, E(_.value)],
      velocity: Gh(L, Q, _.value),
      damping: u,
      stiffness: f,
      restDelta: m,
      restSpeed: v
    }));
  };
  return rt(0), {
    calculatedDuration: null,
    next: (Q) => {
      let lt = !1;
      return !ot && j === void 0 && (lt = !0, U(Q), rt(Q)), j !== void 0 && Q > j ? ot.next(Q - j) : (!lt && U(Q), _);
    }
  };
}
let Ps;
function Ew() {
  Ps = void 0;
}
const $n = {
  now: () => (Ps === void 0 && $n.set(Wt.isProcessing || qf.useManualTiming ? Wt.timestamp : performance.now()), Ps),
  set: (r) => {
    Ps = r, queueMicrotask(Ew);
  }
}, Rw = (r) => {
  const n = ({ timestamp: i }) => r(i);
  return {
    start: () => wt.update(n, !0),
    stop: () => hn(n),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Wt.isProcessing ? Wt.timestamp : $n.now()
  };
}, $c = 2e4;
function tf(r) {
  let n = 0;
  const i = 50;
  let o = r.next(n);
  for (; !o.done && n < $c; )
    n += i, o = r.next(n);
  return n >= $c ? 1 / 0 : n;
}
const Iw = {
  decay: Jc,
  inertia: Jc,
  tween: Bs,
  keyframes: Bs,
  spring: Hh
};
function Os({ autoplay: r = !0, delay: n = 0, driver: i = Rw, keyframes: o, type: u = "keyframes", repeat: f = 0, repeatDelay: l = 0, repeatType: h = "loop", onPlay: p, onStop: m, onComplete: v, onUpdate: y, ..._ }) {
  let C = 1, E = !1, D, V;
  const F = () => {
    V = new Promise((it) => {
      D = it;
    });
  };
  F();
  let M;
  const L = Iw[u] || Bs;
  let U;
  L !== Bs && typeof o[0] != "number" && (process.env.NODE_ENV !== "production" && De(o.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${o}`), U = Uh([0, 100], o, {
    clamp: !1
  }), o = [0, 100]);
  const j = L({ ..._, keyframes: o });
  let ot;
  h === "mirror" && (ot = L({
    ..._,
    keyframes: [...o].reverse(),
    velocity: -(_.velocity || 0)
  }));
  let rt = "idle", Q = null, lt = null, Gt = null;
  j.calculatedDuration === null && f && (j.calculatedDuration = tf(j));
  const { calculatedDuration: He } = j;
  let Ht = 1 / 0, Rt = 1 / 0;
  He !== null && (Ht = He + l, Rt = Ht * (f + 1) - l);
  let vt = 0;
  const $t = (it) => {
    if (lt === null)
      return;
    C > 0 && (lt = Math.min(lt, it)), C < 0 && (lt = Math.min(it - Rt / C, lt)), Q !== null ? vt = Q : vt = Math.round(it - lt) * C;
    const ze = vt - n * (C >= 0 ? 1 : -1), Bn = C >= 0 ? ze < 0 : ze > Rt;
    vt = Math.max(ze, 0), rt === "finished" && Q === null && (vt = Rt);
    let nr = vt, Oe = j;
    if (f) {
      const ce = Math.min(vt, Rt) / Ht;
      let Ve = Math.floor(ce), ee = ce % 1;
      !ee && ce >= 1 && (ee = 1), ee === 1 && Ve--, Ve = Math.min(Ve, f + 1), !!(Ve % 2) && (h === "reverse" ? (ee = 1 - ee, l && (ee -= l / Ht)) : h === "mirror" && (Oe = ot)), nr = Ln(0, 1, ee) * Ht;
    }
    const te = Bn ? { done: !1, value: o[0] } : Oe.next(nr);
    U && (te.value = U(te.value));
    let { done: dn } = te;
    !Bn && He !== null && (dn = C >= 0 ? vt >= Rt : vt <= 0);
    const we = Q === null && (rt === "finished" || rt === "running" && dn);
    return y && y(te.value), we && Ft(), te;
  }, Ct = () => {
    M && M.stop(), M = void 0;
  }, Dt = () => {
    rt = "idle", Ct(), D(), F(), lt = Gt = null;
  }, Ft = () => {
    rt = "finished", v && v(), Ct(), D();
  }, Be = () => {
    if (E)
      return;
    M || (M = i($t));
    const it = M.now();
    p && p(), Q !== null ? lt = it - Q : (!lt || rt === "finished") && (lt = it), rt === "finished" && F(), Gt = lt, Q = null, rt = "running", M.start();
  };
  r && Be();
  const je = {
    then(it, ze) {
      return V.then(it, ze);
    },
    get time() {
      return fn(vt);
    },
    set time(it) {
      it = Rn(it), vt = it, Q !== null || !M || C === 0 ? Q = it : lt = M.now() - it / C;
    },
    get duration() {
      const it = j.calculatedDuration === null ? tf(j) : j.calculatedDuration;
      return fn(it);
    },
    get speed() {
      return C;
    },
    set speed(it) {
      it === C || !M || (C = it, je.time = fn(vt));
    },
    get state() {
      return rt;
    },
    play: Be,
    pause: () => {
      rt = "paused", Q = vt;
    },
    stop: () => {
      E = !0, rt !== "idle" && (rt = "idle", m && m(), Dt());
    },
    cancel: () => {
      Gt !== null && $t(Gt), Dt();
    },
    complete: () => {
      rt = "finished";
    },
    sample: (it) => (lt = 0, $t(it))
  };
  return je;
}
function Lw(r) {
  let n;
  return () => (n === void 0 && (n = r()), n);
}
const Mw = Lw(() => Object.hasOwnProperty.call(Element.prototype, "animate")), Dw = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), bs = 10, Bw = 2e4, Ow = (r, n) => n.type === "spring" || r === "backgroundColor" || !xh(n.ease);
function Vw(r, n, { onUpdate: i, onComplete: o, ...u }) {
  if (!(Mw() && Dw.has(n) && !u.repeatDelay && u.repeatType !== "mirror" && u.damping !== 0 && u.type !== "inertia"))
    return !1;
  let l = !1, h, p, m = !1;
  const v = () => {
    p = new Promise((L) => {
      h = L;
    });
  };
  v();
  let { keyframes: y, duration: _ = 300, ease: C, times: E } = u;
  if (Ow(n, u)) {
    const L = Os({
      ...u,
      repeat: 0,
      delay: 0
    });
    let U = { done: !1, value: y[0] };
    const j = [];
    let ot = 0;
    for (; !U.done && ot < Bw; )
      U = L.sample(ot), j.push(U.value), ot += bs;
    E = void 0, y = j, _ = ot - bs, C = "linear";
  }
  const D = Yx(r.owner.current, n, y, {
    ...u,
    duration: _,
    /**
     * This function is currently not called if ease is provided
     * as a function so the cast is safe.
     *
     * However it would be possible for a future refinement to port
     * in easing pregeneration from Motion One for browsers that
     * support the upcoming `linear()` easing function.
     */
    ease: C,
    times: E
  }), V = () => {
    m = !1, D.cancel();
  }, F = () => {
    m = !0, wt.update(V), h(), v();
  };
  return D.onfinish = () => {
    m || (r.set(Kx(y, u)), o && o(), F());
  }, {
    then(L, U) {
      return p.then(L, U);
    },
    attachTimeline(L) {
      return D.timeline = L, D.onfinish = null, Et;
    },
    get time() {
      return fn(D.currentTime || 0);
    },
    set time(L) {
      D.currentTime = Rn(L);
    },
    get speed() {
      return D.playbackRate;
    },
    set speed(L) {
      D.playbackRate = L;
    },
    get duration() {
      return fn(_);
    },
    play: () => {
      l || (D.play(), hn(V));
    },
    pause: () => D.pause(),
    stop: () => {
      if (l = !0, D.playState === "idle")
        return;
      const { currentTime: L } = D;
      if (L) {
        const U = Os({
          ...u,
          autoplay: !1
        });
        r.setWithVelocity(U.sample(L - bs).value, U.sample(L).value, bs);
      }
      F();
    },
    complete: () => {
      m || D.finish();
    },
    cancel: F
  };
}
function Fw({ keyframes: r, delay: n, onUpdate: i, onComplete: o }) {
  const u = () => (i && i(r[r.length - 1]), o && o(), {
    time: 0,
    speed: 1,
    duration: 0,
    play: Et,
    pause: Et,
    stop: Et,
    then: (f) => (f(), Promise.resolve()),
    cancel: Et,
    complete: Et
  });
  return n ? Os({
    keyframes: [0, 1],
    duration: 0,
    delay: n,
    onComplete: u
  }) : u();
}
const kw = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Nw = (r) => ({
  type: "spring",
  stiffness: 550,
  damping: r === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Uw = {
  type: "keyframes",
  duration: 0.8
}, Ww = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Gw = (r, { keyframes: n }) => n.length > 2 ? Uw : tr.has(r) ? r.startsWith("scale") ? Nw(n[1]) : kw : Ww, Ia = (r, n) => r === "zIndex" ? !1 : !!(typeof n == "number" || Array.isArray(n) || typeof n == "string" && // It's animatable if we have a string
(Mn.test(n) || n === "0") && // And it contains numbers and/or colors
!n.startsWith("url(")), Hw = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function jw(r) {
  const [n, i] = r.slice(0, -1).split("(");
  if (n === "drop-shadow")
    return r;
  const [o] = i.match(js) || [];
  if (!o)
    return r;
  const u = i.replace(o, "");
  let f = Hw.has(n) ? 1 : 0;
  return o !== i && (f *= 100), n + "(" + f + u + ")";
}
const zw = /([a-z-]*)\(.*?\)/g, La = {
  ...Mn,
  getAnimatableNone: (r) => {
    const n = r.match(zw);
    return n ? n.map(jw).join(" ") : r;
  }
}, Yw = {
  ...rh,
  // Color props
  color: qt,
  backgroundColor: qt,
  outlineColor: qt,
  fill: qt,
  stroke: qt,
  // Border props
  borderColor: qt,
  borderTopColor: qt,
  borderRightColor: qt,
  borderBottomColor: qt,
  borderLeftColor: qt,
  filter: La,
  WebkitFilter: La
}, nu = (r) => Yw[r];
function jh(r, n) {
  let i = nu(r);
  return i !== La && (i = Mn), i.getAnimatableNone ? i.getAnimatableNone(n) : void 0;
}
const zh = (r) => /^0[^.\s]+$/.test(r);
function Kw(r) {
  if (typeof r == "number")
    return r === 0;
  if (r !== null)
    return r === "none" || r === "0" || zh(r);
}
function Zw(r, n, i, o) {
  const u = Ia(n, i);
  let f;
  Array.isArray(i) ? f = [...i] : f = [null, i];
  const l = o.from !== void 0 ? o.from : r.get();
  let h;
  const p = [];
  for (let m = 0; m < f.length; m++)
    f[m] === null && (f[m] = m === 0 ? l : f[m - 1]), Kw(f[m]) && p.push(m), typeof f[m] == "string" && f[m] !== "none" && f[m] !== "0" && (h = f[m]);
  if (u && p.length && h)
    for (let m = 0; m < p.length; m++) {
      const v = p[m];
      f[v] = jh(n, h);
    }
  return f;
}
function qw({ when: r, delay: n, delayChildren: i, staggerChildren: o, staggerDirection: u, repeat: f, repeatType: l, repeatDelay: h, from: p, elapsed: m, ...v }) {
  return !!Object.keys(v).length;
}
function ru(r, n) {
  return r[n] || r.default || r;
}
const iu = (r, n, i, o = {}) => (u) => {
  const f = ru(o, r) || {}, l = f.delay || o.delay || 0;
  let { elapsed: h = 0 } = o;
  h = h - Rn(l);
  const p = Zw(n, r, i, f), m = p[0], v = p[p.length - 1], y = Ia(r, m), _ = Ia(r, v);
  _i(y === _, `You are trying to animate ${r} from "${m}" to "${v}". ${m} is not an animatable value - to enable this animation set ${m} to a value animatable to ${v} via the \`style\` property.`);
  let C = {
    keyframes: p,
    velocity: n.getVelocity(),
    ease: "easeOut",
    ...f,
    delay: -h,
    onUpdate: (E) => {
      n.set(E), f.onUpdate && f.onUpdate(E);
    },
    onComplete: () => {
      u(), f.onComplete && f.onComplete();
    }
  };
  if (qw(f) || (C = {
    ...C,
    ...Gw(r, C)
  }), C.duration && (C.duration = Rn(C.duration)), C.repeatDelay && (C.repeatDelay = Rn(C.repeatDelay)), !y || !_ || zx.current || f.type === !1 || qf.skipAnimations)
    return Fw(C);
  if (
    /**
     * If this is a handoff animation, the optimised animation will be running via
     * WAAPI. Therefore, this animation must be JS to ensure it runs "under" the
     * optimised animation.
     */
    !o.isHandoff && n.owner && n.owner.current instanceof HTMLElement && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !n.owner.getProps().onUpdate
  ) {
    const E = Vw(n, r, C);
    if (E)
      return E;
  }
  return Os(C);
};
function Vs(r) {
  return !!(le(r) && r.add);
}
const Yh = (r) => /^\-?\d*\.?\d+$/.test(r);
function su(r, n) {
  r.indexOf(n) === -1 && r.push(n);
}
function ou(r, n) {
  const i = r.indexOf(n);
  i > -1 && r.splice(i, 1);
}
class au {
  constructor() {
    this.subscriptions = [];
  }
  add(n) {
    return su(this.subscriptions, n), () => ou(this.subscriptions, n);
  }
  notify(n, i, o) {
    const u = this.subscriptions.length;
    if (u)
      if (u === 1)
        this.subscriptions[0](n, i, o);
      else
        for (let f = 0; f < u; f++) {
          const l = this.subscriptions[f];
          l && l(n, i, o);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const ef = /* @__PURE__ */ new Set();
function uu(r, n, i) {
  r || ef.has(n) || (console.warn(n), i && console.warn(i), ef.add(n));
}
const nf = 30, Qw = (r) => !isNaN(parseFloat(r));
class Xw {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(n, i = {}) {
    this.version = "11.0.3", this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (o, u = !0) => {
      const f = $n.now();
      this.updatedAt !== f && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(o), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), u && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(n), this.canTrackVelocity = Qw(this.current), this.owner = i.owner;
  }
  setCurrent(n) {
    this.current = n, this.updatedAt = $n.now();
  }
  setPrevFrameValue(n = this.current) {
    this.prevFrameValue = n, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(n) {
    return process.env.NODE_ENV !== "production" && uu(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", n);
  }
  on(n, i) {
    this.events[n] || (this.events[n] = new au());
    const o = this.events[n].add(i);
    return n === "change" ? () => {
      o(), wt.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : o;
  }
  clearListeners() {
    for (const n in this.events)
      this.events[n].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(n, i) {
    this.passiveEffect = n, this.stopPassiveEffect = i;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(n, i = !0) {
    !i || !this.passiveEffect ? this.updateAndNotify(n, i) : this.passiveEffect(n, this.updateAndNotify);
  }
  setWithVelocity(n, i, o) {
    this.set(i), this.prev = void 0, this.prevFrameValue = n, this.prevUpdatedAt = this.updatedAt - o;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(n) {
    this.updateAndNotify(n), this.prev = n, this.prevUpdatedAt = this.prevFrameValue = void 0, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const n = $n.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || n - this.updatedAt > nf)
      return 0;
    const i = Math.min(this.updatedAt - this.prevUpdatedAt, nf);
    return Wh(parseFloat(this.current) - parseFloat(this.prevFrameValue), i);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(n) {
    return this.stop(), new Promise((i) => {
      this.hasAnimated = !0, this.animation = n(i), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Rr(r, n) {
  return new Xw(r, n);
}
const Kh = (r) => (n) => n.test(r), Jw = {
  test: (r) => r === "auto",
  parse: (r) => r
}, Zh = [er, Z, Qe, Sn, cx, lx, Jw], ai = (r) => Zh.find(Kh(r)), $w = [...Zh, qt, Mn], t1 = (r) => $w.find(Kh(r));
function e1(r, n, i) {
  r.hasValue(n) ? r.getValue(n).set(i) : r.addValue(n, Rr(i));
}
function n1(r, n) {
  const i = Ys(r, n);
  let { transitionEnd: o = {}, transition: u = {}, ...f } = i ? r.makeTargetAnimatable(i, !1) : {};
  f = { ...f, ...o };
  for (const l in f) {
    const h = Tx(f[l]);
    e1(r, l, h);
  }
}
function r1(r, n, i) {
  var o, u;
  const f = Object.keys(n).filter((h) => !r.hasValue(h)), l = f.length;
  if (l)
    for (let h = 0; h < l; h++) {
      const p = f[h], m = n[p];
      let v = null;
      Array.isArray(m) && (v = m[0]), v === null && (v = (u = (o = i[p]) !== null && o !== void 0 ? o : r.readValue(p)) !== null && u !== void 0 ? u : n[p]), v != null && (typeof v == "string" && (Yh(v) || zh(v)) ? v = parseFloat(v) : !t1(v) && Mn.test(m) && (v = jh(p, m)), r.addValue(p, Rr(v, { owner: r })), i[p] === void 0 && (i[p] = v), v !== null && r.setBaseTarget(p, v));
    }
}
function i1(r, n) {
  return n ? (n[r] || n.default || n).from : void 0;
}
function s1(r, n, i) {
  const o = {};
  for (const u in r) {
    const f = i1(u, n);
    if (f !== void 0)
      o[u] = f;
    else {
      const l = i.getValue(u);
      l && (o[u] = l.get());
    }
  }
  return o;
}
function o1({ protectedKeys: r, needsAnimating: n }, i) {
  const o = r.hasOwnProperty(i) && n[i] !== !0;
  return n[i] = !1, o;
}
function a1(r, n) {
  const i = r.get();
  if (Array.isArray(n)) {
    for (let o = 0; o < n.length; o++)
      if (n[o] !== i)
        return !0;
  } else
    return i !== n;
}
function qh(r, n, { delay: i = 0, transitionOverride: o, type: u } = {}) {
  let { transition: f = r.getDefaultTransition(), transitionEnd: l, ...h } = r.makeTargetAnimatable(n);
  const p = r.getValue("willChange");
  o && (f = o);
  const m = [], v = u && r.animationState && r.animationState.getState()[u];
  for (const y in h) {
    const _ = r.getValue(y), C = h[y];
    if (!_ || C === void 0 || v && o1(v, y))
      continue;
    const E = {
      delay: i,
      elapsed: 0,
      ...ru(f || {}, y)
    };
    if (window.HandoffAppearAnimations) {
      const F = r.getProps()[Zf];
      if (F) {
        const M = window.HandoffAppearAnimations(F, y, _, wt);
        M !== null && (E.elapsed = M, E.isHandoff = !0);
      }
    }
    let D = !E.isHandoff && !a1(_, C);
    if (E.type === "spring" && (_.getVelocity() || E.velocity) && (D = !1), _.animation && (D = !1), D)
      continue;
    _.start(iu(y, _, C, r.shouldReduceMotion && tr.has(y) ? { type: !1 } : E));
    const V = _.animation;
    Vs(p) && (p.add(y), V.then(() => p.remove(y))), m.push(V);
  }
  return l && Promise.all(m).then(() => {
    l && n1(r, l);
  }), m;
}
function Ma(r, n, i = {}) {
  const o = Ys(r, n, i.custom);
  let { transition: u = r.getDefaultTransition() || {} } = o || {};
  i.transitionOverride && (u = i.transitionOverride);
  const f = o ? () => Promise.all(qh(r, o, i)) : () => Promise.resolve(), l = r.variantChildren && r.variantChildren.size ? (p = 0) => {
    const { delayChildren: m = 0, staggerChildren: v, staggerDirection: y } = u;
    return u1(r, n, m + p, v, y, i);
  } : () => Promise.resolve(), { when: h } = u;
  if (h) {
    const [p, m] = h === "beforeChildren" ? [f, l] : [l, f];
    return p().then(() => m());
  } else
    return Promise.all([f(), l(i.delay)]);
}
function u1(r, n, i = 0, o = 0, u = 1, f) {
  const l = [], h = (r.variantChildren.size - 1) * o, p = u === 1 ? (m = 0) => m * o : (m = 0) => h - m * o;
  return Array.from(r.variantChildren).sort(l1).forEach((m, v) => {
    m.notify("AnimationStart", n), l.push(Ma(m, n, {
      ...f,
      delay: i + p(v)
    }).then(() => m.notify("AnimationComplete", n)));
  }), Promise.all(l);
}
function l1(r, n) {
  return r.sortNodePosition(n);
}
function c1(r, n, i = {}) {
  r.notify("AnimationStart", n);
  let o;
  if (Array.isArray(n)) {
    const u = n.map((f) => Ma(r, f, i));
    o = Promise.all(u);
  } else if (typeof n == "string")
    o = Ma(r, n, i);
  else {
    const u = typeof n == "function" ? Ys(r, n, i.custom) : n;
    o = Promise.all(qh(r, u, i));
  }
  return o.then(() => r.notify("AnimationComplete", n));
}
const f1 = [...Ha].reverse(), h1 = Ha.length;
function d1(r) {
  return (n) => Promise.all(n.map(({ animation: i, options: o }) => c1(r, i, o)));
}
function p1(r) {
  let n = d1(r);
  const i = m1();
  let o = !0;
  const u = (p, m) => {
    const v = Ys(r, m);
    if (v) {
      const { transition: y, transitionEnd: _, ...C } = v;
      p = { ...p, ...C, ..._ };
    }
    return p;
  };
  function f(p) {
    n = p(r);
  }
  function l(p, m) {
    const v = r.getProps(), y = r.getVariantContext(!0) || {}, _ = [], C = /* @__PURE__ */ new Set();
    let E = {}, D = 1 / 0;
    for (let F = 0; F < h1; F++) {
      const M = f1[F], L = i[M], U = v[M] !== void 0 ? v[M] : y[M], j = gi(U), ot = M === m ? L.isActive : null;
      ot === !1 && (D = F);
      let rt = U === y[M] && U !== v[M] && j;
      if (rt && o && r.manuallyAnimateOnMount && (rt = !1), L.protectedKeys = { ...E }, // If it isn't active and hasn't *just* been set as inactive
      !L.isActive && ot === null || // If we didn't and don't have any defined prop for this animation type
      !U && !L.prevProp || // Or if the prop doesn't define an animation
      Gs(U) || typeof U == "boolean")
        continue;
      let lt = g1(L.prevProp, U) || // If we're making this variant active, we want to always make it active
      M === m && L.isActive && !rt && j || // If we removed a higher-priority variant (i is in reverse order)
      F > D && j, Gt = !1;
      const He = Array.isArray(U) ? U : [U];
      let Ht = He.reduce(u, {});
      ot === !1 && (Ht = {});
      const { prevResolvedValues: Rt = {} } = L, vt = {
        ...Rt,
        ...Ht
      }, $t = (Ct) => {
        lt = !0, C.has(Ct) && (Gt = !0, C.delete(Ct)), L.needsAnimating[Ct] = !0;
      };
      for (const Ct in vt) {
        const Dt = Ht[Ct], Ft = Rt[Ct];
        if (E.hasOwnProperty(Ct))
          continue;
        let Be = !1;
        Ms(Dt) && Ms(Ft) ? Be = !yh(Dt, Ft) : Be = Dt !== Ft, Be ? Dt !== void 0 ? $t(Ct) : C.add(Ct) : Dt !== void 0 && C.has(Ct) ? $t(Ct) : L.protectedKeys[Ct] = !0;
      }
      L.prevProp = U, L.prevResolvedValues = Ht, L.isActive && (E = { ...E, ...Ht }), o && r.blockInitialAnimation && (lt = !1), lt && (!rt || Gt) && _.push(...He.map((Ct) => ({
        animation: Ct,
        options: { type: M, ...p }
      })));
    }
    if (C.size) {
      const F = {};
      C.forEach((M) => {
        const L = r.getBaseTarget(M);
        L !== void 0 && (F[M] = L);
      }), _.push({ animation: F });
    }
    let V = !!_.length;
    return o && (v.initial === !1 || v.initial === v.animate) && !r.manuallyAnimateOnMount && (V = !1), o = !1, V ? n(_) : Promise.resolve();
  }
  function h(p, m, v) {
    var y;
    if (i[p].isActive === m)
      return Promise.resolve();
    (y = r.variantChildren) === null || y === void 0 || y.forEach((C) => {
      var E;
      return (E = C.animationState) === null || E === void 0 ? void 0 : E.setActive(p, m);
    }), i[p].isActive = m;
    const _ = l(v, p);
    for (const C in i)
      i[C].protectedKeys = {};
    return _;
  }
  return {
    animateChanges: l,
    setActive: h,
    setAnimateFunction: f,
    getState: () => i
  };
}
function g1(r, n) {
  return typeof n == "string" ? n !== r : Array.isArray(n) ? !yh(n, r) : !1;
}
function Yn(r = !1) {
  return {
    isActive: r,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function m1() {
  return {
    animate: Yn(!0),
    whileInView: Yn(),
    whileHover: Yn(),
    whileTap: Yn(),
    whileDrag: Yn(),
    whileFocus: Yn(),
    exit: Yn()
  };
}
class v1 extends Dn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(n) {
    super(n), n.animationState || (n.animationState = p1(n));
  }
  updateAnimationControlsSubscription() {
    const { animate: n } = this.node.getProps();
    this.unmount(), Gs(n) && (this.unmount = n.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: n } = this.node.getProps(), { animate: i } = this.node.prevProps || {};
    n !== i && this.updateAnimationControlsSubscription();
  }
  unmount() {
  }
}
let y1 = 0;
class A1 extends Dn {
  constructor() {
    super(...arguments), this.id = y1++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: n, onExitComplete: i, custom: o } = this.node.presenceContext, { isPresent: u } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || n === u)
      return;
    const f = this.node.animationState.setActive("exit", !n, { custom: o ?? this.node.getProps().custom });
    i && !n && f.then(() => i(this.id));
  }
  mount() {
    const { register: n } = this.node.presenceContext || {};
    n && (this.unmount = n(this.id));
  }
  unmount() {
  }
}
const x1 = {
  animation: {
    Feature: v1
  },
  exit: {
    Feature: A1
  }
}, rf = (r, n) => Math.abs(r - n);
function w1(r, n) {
  const i = rf(r.x, n.x), o = rf(r.y, n.y);
  return Math.sqrt(i ** 2 + o ** 2);
}
class Qh {
  constructor(n, i, { transformPagePoint: o, contextWindow: u, dragSnapToOrigin: f = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const y = wa(this.lastMoveEventInfo, this.history), _ = this.startEvent !== null, C = w1(y.offset, { x: 0, y: 0 }) >= 3;
      if (!_ && !C)
        return;
      const { point: E } = y, { timestamp: D } = Wt;
      this.history.push({ ...E, timestamp: D });
      const { onStart: V, onMove: F } = this.handlers;
      _ || (V && V(this.lastMoveEvent, y), this.startEvent = this.lastMoveEvent), F && F(this.lastMoveEvent, y);
    }, this.handlePointerMove = (y, _) => {
      this.lastMoveEvent = y, this.lastMoveEventInfo = xa(_, this.transformPagePoint), wt.update(this.updatePoint, !0);
    }, this.handlePointerUp = (y, _) => {
      this.end();
      const { onEnd: C, onSessionEnd: E, resumeAnimation: D } = this.handlers;
      if (this.dragSnapToOrigin && D && D(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const V = wa(y.type === "pointercancel" ? this.lastMoveEventInfo : xa(_, this.transformPagePoint), this.history);
      this.startEvent && C && C(y, V), E && E(y, V);
    }, !dh(n))
      return;
    this.dragSnapToOrigin = f, this.handlers = i, this.transformPagePoint = o, this.contextWindow = u || window;
    const l = zs(n), h = xa(l, this.transformPagePoint), { point: p } = h, { timestamp: m } = Wt;
    this.history = [{ ...p, timestamp: m }];
    const { onSessionStart: v } = i;
    v && v(n, wa(h, this.history)), this.removeListeners = En(cn(this.contextWindow, "pointermove", this.handlePointerMove), cn(this.contextWindow, "pointerup", this.handlePointerUp), cn(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(n) {
    this.handlers = n;
  }
  end() {
    this.removeListeners && this.removeListeners(), hn(this.updatePoint);
  }
}
function xa(r, n) {
  return n ? { point: n(r.point) } : r;
}
function sf(r, n) {
  return { x: r.x - n.x, y: r.y - n.y };
}
function wa({ point: r }, n) {
  return {
    point: r,
    delta: sf(r, Xh(n)),
    offset: sf(r, _1(n)),
    velocity: b1(n, 0.1)
  };
}
function _1(r) {
  return r[0];
}
function Xh(r) {
  return r[r.length - 1];
}
function b1(r, n) {
  if (r.length < 2)
    return { x: 0, y: 0 };
  let i = r.length - 1, o = null;
  const u = Xh(r);
  for (; i >= 0 && (o = r[i], !(u.timestamp - o.timestamp > Rn(n))); )
    i--;
  if (!o)
    return { x: 0, y: 0 };
  const f = fn(u.timestamp - o.timestamp);
  if (f === 0)
    return { x: 0, y: 0 };
  const l = {
    x: (u.x - o.x) / f,
    y: (u.y - o.y) / f
  };
  return l.x === 1 / 0 && (l.x = 0), l.y === 1 / 0 && (l.y = 0), l;
}
function xe(r) {
  return r.max - r.min;
}
function Da(r, n = 0, i = 0.01) {
  return Math.abs(r - n) <= i;
}
function of(r, n, i, o = 0.5) {
  r.origin = o, r.originPoint = Tt(n.min, n.max, r.origin), r.scale = xe(i) / xe(n), (Da(r.scale, 1, 1e-4) || isNaN(r.scale)) && (r.scale = 1), r.translate = Tt(i.min, i.max, r.origin) - r.originPoint, (Da(r.translate) || isNaN(r.translate)) && (r.translate = 0);
}
function hi(r, n, i, o) {
  of(r.x, n.x, i.x, o ? o.originX : void 0), of(r.y, n.y, i.y, o ? o.originY : void 0);
}
function af(r, n, i) {
  r.min = i.min + n.min, r.max = r.min + xe(n);
}
function T1(r, n, i) {
  af(r.x, n.x, i.x), af(r.y, n.y, i.y);
}
function uf(r, n, i) {
  r.min = n.min - i.min, r.max = r.min + xe(n);
}
function di(r, n, i) {
  uf(r.x, n.x, i.x), uf(r.y, n.y, i.y);
}
function C1(r, { min: n, max: i }, o) {
  return n !== void 0 && r < n ? r = o ? Tt(n, r, o.min) : Math.max(r, n) : i !== void 0 && r > i && (r = o ? Tt(i, r, o.max) : Math.min(r, i)), r;
}
function lf(r, n, i) {
  return {
    min: n !== void 0 ? r.min + n : void 0,
    max: i !== void 0 ? r.max + i - (r.max - r.min) : void 0
  };
}
function S1(r, { top: n, left: i, bottom: o, right: u }) {
  return {
    x: lf(r.x, i, u),
    y: lf(r.y, n, o)
  };
}
function cf(r, n) {
  let i = n.min - r.min, o = n.max - r.max;
  return n.max - n.min < r.max - r.min && ([i, o] = [o, i]), { min: i, max: o };
}
function P1(r, n) {
  return {
    x: cf(r.x, n.x),
    y: cf(r.y, n.y)
  };
}
function E1(r, n) {
  let i = 0.5;
  const o = xe(r), u = xe(n);
  return u > o ? i = vi(n.min, n.max - o, r.min) : o > u && (i = vi(r.min, r.max - u, n.min)), Ln(0, 1, i);
}
function R1(r, n) {
  const i = {};
  return n.min !== void 0 && (i.min = n.min - r.min), n.max !== void 0 && (i.max = n.max - r.min), i;
}
const Ba = 0.35;
function I1(r = Ba) {
  return r === !1 ? r = 0 : r === !0 && (r = Ba), {
    x: ff(r, "left", "right"),
    y: ff(r, "top", "bottom")
  };
}
function ff(r, n, i) {
  return {
    min: hf(r, n),
    max: hf(r, i)
  };
}
function hf(r, n) {
  return typeof r == "number" ? r : r[n] || 0;
}
const df = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Sr = () => ({
  x: df(),
  y: df()
}), pf = () => ({ min: 0, max: 0 }), Mt = () => ({
  x: pf(),
  y: pf()
});
function Me(r) {
  return [r("x"), r("y")];
}
function Jh({ top: r, left: n, right: i, bottom: o }) {
  return {
    x: { min: n, max: i },
    y: { min: r, max: o }
  };
}
function L1({ x: r, y: n }) {
  return { top: n.min, right: r.max, bottom: n.max, left: r.min };
}
function M1(r, n) {
  if (!n)
    return r;
  const i = n({ x: r.left, y: r.top }), o = n({ x: r.right, y: r.bottom });
  return {
    top: i.y,
    left: i.x,
    bottom: o.y,
    right: o.x
  };
}
function _a(r) {
  return r === void 0 || r === 1;
}
function Oa({ scale: r, scaleX: n, scaleY: i }) {
  return !_a(r) || !_a(n) || !_a(i);
}
function Kn(r) {
  return Oa(r) || $h(r) || r.z || r.rotate || r.rotateX || r.rotateY;
}
function $h(r) {
  return gf(r.x) || gf(r.y);
}
function gf(r) {
  return r && r !== "0%";
}
function Fs(r, n, i) {
  const o = r - i, u = n * o;
  return i + u;
}
function mf(r, n, i, o, u) {
  return u !== void 0 && (r = Fs(r, u, o)), Fs(r, i, o) + n;
}
function Va(r, n = 0, i = 1, o, u) {
  r.min = mf(r.min, n, i, o, u), r.max = mf(r.max, n, i, o, u);
}
function td(r, { x: n, y: i }) {
  Va(r.x, n.translate, n.scale, n.originPoint), Va(r.y, i.translate, i.scale, i.originPoint);
}
function D1(r, n, i, o = !1) {
  const u = i.length;
  if (!u)
    return;
  n.x = n.y = 1;
  let f, l;
  for (let h = 0; h < u; h++) {
    f = i[h], l = f.projectionDelta;
    const p = f.instance;
    p && p.style && p.style.display === "contents" || (o && f.options.layoutScroll && f.scroll && f !== f.root && Pr(r, {
      x: -f.scroll.offset.x,
      y: -f.scroll.offset.y
    }), l && (n.x *= l.x.scale, n.y *= l.y.scale, td(r, l)), o && Kn(f.latestValues) && Pr(r, f.latestValues));
  }
  n.x = vf(n.x), n.y = vf(n.y);
}
function vf(r) {
  return Number.isInteger(r) || r > 1.0000000000001 || r < 0.999999999999 ? r : 1;
}
function Pn(r, n) {
  r.min = r.min + n, r.max = r.max + n;
}
function yf(r, n, [i, o, u]) {
  const f = n[u] !== void 0 ? n[u] : 0.5, l = Tt(r.min, r.max, f);
  Va(r, n[i], n[o], l, n.scale);
}
const B1 = ["x", "scaleX", "originX"], O1 = ["y", "scaleY", "originY"];
function Pr(r, n) {
  yf(r.x, n, B1), yf(r.y, n, O1);
}
function ed(r, n) {
  return Jh(M1(r.getBoundingClientRect(), n));
}
function V1(r, n, i) {
  const o = ed(r, i), { scroll: u } = n;
  return u && (Pn(o.x, u.offset.x), Pn(o.y, u.offset.y)), o;
}
const nd = ({ current: r }) => r ? r.ownerDocument.defaultView : null, F1 = /* @__PURE__ */ new WeakMap();
class k1 {
  constructor(n) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Mt(), this.visualElement = n;
  }
  start(n, { snapToCursor: i = !1 } = {}) {
    const { presenceContext: o } = this.visualElement;
    if (o && o.isPresent === !1)
      return;
    const u = (v) => {
      const { dragSnapToOrigin: y } = this.getProps();
      y ? this.pauseAnimation() : this.stopAnimation(), i && this.snapToCursor(zs(v, "page").point);
    }, f = (v, y) => {
      const { drag: _, dragPropagation: C, onDragStart: E } = this.getProps();
      if (_ && !C && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = gh(_), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Me((V) => {
        let F = this.getAxisMotionValue(V).get() || 0;
        if (Qe.test(F)) {
          const { projection: M } = this.visualElement;
          if (M && M.layout) {
            const L = M.layout.layoutBox[V];
            L && (F = xe(L) * (parseFloat(F) / 100));
          }
        }
        this.originPoint[V] = F;
      }), E && wt.update(() => E(v, y), !1, !0);
      const { animationState: D } = this.visualElement;
      D && D.setActive("whileDrag", !0);
    }, l = (v, y) => {
      const { dragPropagation: _, dragDirectionLock: C, onDirectionLock: E, onDrag: D } = this.getProps();
      if (!_ && !this.openGlobalLock)
        return;
      const { offset: V } = y;
      if (C && this.currentDirection === null) {
        this.currentDirection = N1(V), this.currentDirection !== null && E && E(this.currentDirection);
        return;
      }
      this.updateAxis("x", y.point, V), this.updateAxis("y", y.point, V), this.visualElement.render(), D && D(v, y);
    }, h = (v, y) => this.stop(v, y), p = () => Me((v) => {
      var y;
      return this.getAnimationState(v) === "paused" && ((y = this.getAxisMotionValue(v).animation) === null || y === void 0 ? void 0 : y.play());
    }), { dragSnapToOrigin: m } = this.getProps();
    this.panSession = new Qh(n, {
      onSessionStart: u,
      onStart: f,
      onMove: l,
      onSessionEnd: h,
      resumeAnimation: p
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: m,
      contextWindow: nd(this.visualElement)
    });
  }
  stop(n, i) {
    const o = this.isDragging;
    if (this.cancel(), !o)
      return;
    const { velocity: u } = i;
    this.startAnimation(u);
    const { onDragEnd: f } = this.getProps();
    f && wt.update(() => f(n, i));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: n, animationState: i } = this.visualElement;
    n && (n.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: o } = this.getProps();
    !o && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), i && i.setActive("whileDrag", !1);
  }
  updateAxis(n, i, o) {
    const { drag: u } = this.getProps();
    if (!o || !Ts(n, u, this.currentDirection))
      return;
    const f = this.getAxisMotionValue(n);
    let l = this.originPoint[n] + o[n];
    this.constraints && this.constraints[n] && (l = C1(l, this.constraints[n], this.elastic[n])), f.set(l);
  }
  resolveConstraints() {
    var n;
    const { dragConstraints: i, dragElastic: o } = this.getProps(), u = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (n = this.visualElement.projection) === null || n === void 0 ? void 0 : n.layout, f = this.constraints;
    i && Tr(i) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : i && u ? this.constraints = S1(u.layoutBox, i) : this.constraints = !1, this.elastic = I1(o), f !== this.constraints && u && this.constraints && !this.hasMutatedConstraints && Me((l) => {
      this.getAxisMotionValue(l) && (this.constraints[l] = R1(u.layoutBox[l], this.constraints[l]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: n, onMeasureDragConstraints: i } = this.getProps();
    if (!n || !Tr(n))
      return !1;
    const o = n.current;
    De(o !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: u } = this.visualElement;
    if (!u || !u.layout)
      return !1;
    const f = V1(o, u.root, this.visualElement.getTransformPagePoint());
    let l = P1(u.layout.layoutBox, f);
    if (i) {
      const h = i(L1(l));
      this.hasMutatedConstraints = !!h, h && (l = Jh(h));
    }
    return l;
  }
  startAnimation(n) {
    const { drag: i, dragMomentum: o, dragElastic: u, dragTransition: f, dragSnapToOrigin: l, onDragTransitionEnd: h } = this.getProps(), p = this.constraints || {}, m = Me((v) => {
      if (!Ts(v, i, this.currentDirection))
        return;
      let y = p && p[v] || {};
      l && (y = { min: 0, max: 0 });
      const _ = u ? 200 : 1e6, C = u ? 40 : 1e7, E = {
        type: "inertia",
        velocity: o ? n[v] : 0,
        bounceStiffness: _,
        bounceDamping: C,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...f,
        ...y
      };
      return this.startAxisValueAnimation(v, E);
    });
    return Promise.all(m).then(h);
  }
  startAxisValueAnimation(n, i) {
    const o = this.getAxisMotionValue(n);
    return o.start(iu(n, o, 0, i));
  }
  stopAnimation() {
    Me((n) => this.getAxisMotionValue(n).stop());
  }
  pauseAnimation() {
    Me((n) => {
      var i;
      return (i = this.getAxisMotionValue(n).animation) === null || i === void 0 ? void 0 : i.pause();
    });
  }
  getAnimationState(n) {
    var i;
    return (i = this.getAxisMotionValue(n).animation) === null || i === void 0 ? void 0 : i.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(n) {
    const i = "_drag" + n.toUpperCase(), o = this.visualElement.getProps(), u = o[i];
    return u || this.visualElement.getValue(n, (o.initial ? o.initial[n] : void 0) || 0);
  }
  snapToCursor(n) {
    Me((i) => {
      const { drag: o } = this.getProps();
      if (!Ts(i, o, this.currentDirection))
        return;
      const { projection: u } = this.visualElement, f = this.getAxisMotionValue(i);
      if (u && u.layout) {
        const { min: l, max: h } = u.layout.layoutBox[i];
        f.set(n[i] - Tt(l, h, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: n, dragConstraints: i } = this.getProps(), { projection: o } = this.visualElement;
    if (!Tr(i) || !o || !this.constraints)
      return;
    this.stopAnimation();
    const u = { x: 0, y: 0 };
    Me((l) => {
      const h = this.getAxisMotionValue(l);
      if (h) {
        const p = h.get();
        u[l] = E1({ min: p, max: p }, this.constraints[l]);
      }
    });
    const { transformTemplate: f } = this.visualElement.getProps();
    this.visualElement.current.style.transform = f ? f({}, "") : "none", o.root && o.root.updateScroll(), o.updateLayout(), this.resolveConstraints(), Me((l) => {
      if (!Ts(l, n, null))
        return;
      const h = this.getAxisMotionValue(l), { min: p, max: m } = this.constraints[l];
      h.set(Tt(p, m, u[l]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    F1.set(this.visualElement, this);
    const n = this.visualElement.current, i = cn(n, "pointerdown", (p) => {
      const { drag: m, dragListener: v = !0 } = this.getProps();
      m && v && this.start(p);
    }), o = () => {
      const { dragConstraints: p } = this.getProps();
      Tr(p) && (this.constraints = this.resolveRefConstraints());
    }, { projection: u } = this.visualElement, f = u.addEventListener("measure", o);
    u && !u.layout && (u.root && u.root.updateScroll(), u.updateLayout()), o();
    const l = ln(window, "resize", () => this.scalePositionWithinConstraints()), h = u.addEventListener("didUpdate", ({ delta: p, hasLayoutChanged: m }) => {
      this.isDragging && m && (Me((v) => {
        const y = this.getAxisMotionValue(v);
        y && (this.originPoint[v] += p[v].translate, y.set(y.get() + p[v].translate));
      }), this.visualElement.render());
    });
    return () => {
      l(), i(), f(), h && h();
    };
  }
  getProps() {
    const n = this.visualElement.getProps(), { drag: i = !1, dragDirectionLock: o = !1, dragPropagation: u = !1, dragConstraints: f = !1, dragElastic: l = Ba, dragMomentum: h = !0 } = n;
    return {
      ...n,
      drag: i,
      dragDirectionLock: o,
      dragPropagation: u,
      dragConstraints: f,
      dragElastic: l,
      dragMomentum: h
    };
  }
}
function Ts(r, n, i) {
  return (n === !0 || n === r) && (i === null || i === r);
}
function N1(r, n = 10) {
  let i = null;
  return Math.abs(r.y) > n ? i = "y" : Math.abs(r.x) > n && (i = "x"), i;
}
class U1 extends Dn {
  constructor(n) {
    super(n), this.removeGroupControls = Et, this.removeListeners = Et, this.controls = new k1(n);
  }
  mount() {
    const { dragControls: n } = this.node.getProps();
    n && (this.removeGroupControls = n.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Et;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Af = (r) => (n, i) => {
  r && wt.update(() => r(n, i));
};
class W1 extends Dn {
  constructor() {
    super(...arguments), this.removePointerDownListener = Et;
  }
  onPointerDown(n) {
    this.session = new Qh(n, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: nd(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: n, onPanStart: i, onPan: o, onPanEnd: u } = this.node.getProps();
    return {
      onSessionStart: Af(n),
      onStart: Af(i),
      onMove: o,
      onEnd: (f, l) => {
        delete this.session, u && wt.update(() => u(f, l));
      }
    };
  }
  mount() {
    this.removePointerDownListener = cn(this.node.current, "pointerdown", (n) => this.onPointerDown(n));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function G1() {
  const r = Jt(Us);
  if (r === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: i, register: o } = r, u = Na();
  return In(() => o(u), []), !n && i ? [!1, () => i && i(u)] : [!0];
}
const Es = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function xf(r, n) {
  return n.max === n.min ? 0 : r / (n.max - n.min) * 100;
}
const ui = {
  correct: (r, n) => {
    if (!n.target)
      return r;
    if (typeof r == "string")
      if (Z.test(r))
        r = parseFloat(r);
      else
        return r;
    const i = xf(r, n.target.x), o = xf(r, n.target.y);
    return `${i}% ${o}%`;
  }
}, H1 = {
  correct: (r, { treeScale: n, projectionDelta: i }) => {
    const o = r, u = Mn.parse(r);
    if (u.length > 5)
      return o;
    const f = Mn.createTransformer(r), l = typeof u[0] != "number" ? 1 : 0, h = i.x.scale * n.x, p = i.y.scale * n.y;
    u[0 + l] /= h, u[1 + l] /= p;
    const m = Tt(h, p, 0.5);
    return typeof u[2 + l] == "number" && (u[2 + l] /= m), typeof u[3 + l] == "number" && (u[3 + l] /= m), f(u);
  }
};
class j1 extends yi.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: n, layoutGroup: i, switchLayoutGroup: o, layoutId: u } = this.props, { projection: f } = n;
    nx(z1), f && (i.group && i.group.add(f), o && o.register && u && o.register(f), f.root.didUpdate(), f.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), f.setOptions({
      ...f.options,
      onExitComplete: () => this.safeToRemove()
    })), Es.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(n) {
    const { layoutDependency: i, visualElement: o, drag: u, isPresent: f } = this.props, l = o.projection;
    return l && (l.isPresent = f, u || n.layoutDependency !== i || i === void 0 ? l.willUpdate() : this.safeToRemove(), n.isPresent !== f && (f ? l.promote() : l.relegate() || wt.postRender(() => {
      const h = l.getStack();
      (!h || !h.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: n } = this.props.visualElement;
    n && (n.root.didUpdate(), Ga.postRender(() => {
      !n.currentAnimation && n.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: n, layoutGroup: i, switchLayoutGroup: o } = this.props, { projection: u } = n;
    u && (u.scheduleCheckAfterUnmount(), i && i.group && i.group.remove(u), o && o.deregister && o.deregister(u));
  }
  safeToRemove() {
    const { safeToRemove: n } = this.props;
    n && n();
  }
  render() {
    return null;
  }
}
function rd(r) {
  const [n, i] = G1(), o = Jt(za);
  return yi.createElement(j1, { ...r, layoutGroup: o, switchLayoutGroup: Jt(Jf), isPresent: n, safeToRemove: i });
}
const z1 = {
  borderRadius: {
    ...ui,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: ui,
  borderTopRightRadius: ui,
  borderBottomLeftRadius: ui,
  borderBottomRightRadius: ui,
  boxShadow: H1
}, id = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Y1 = id.length, wf = (r) => typeof r == "string" ? parseFloat(r) : r, _f = (r) => typeof r == "number" || Z.test(r);
function K1(r, n, i, o, u, f) {
  u ? (r.opacity = Tt(
    0,
    // TODO Reinstate this if only child
    i.opacity !== void 0 ? i.opacity : 1,
    Z1(o)
  ), r.opacityExit = Tt(n.opacity !== void 0 ? n.opacity : 1, 0, q1(o))) : f && (r.opacity = Tt(n.opacity !== void 0 ? n.opacity : 1, i.opacity !== void 0 ? i.opacity : 1, o));
  for (let l = 0; l < Y1; l++) {
    const h = `border${id[l]}Radius`;
    let p = bf(n, h), m = bf(i, h);
    if (p === void 0 && m === void 0)
      continue;
    p || (p = 0), m || (m = 0), p === 0 || m === 0 || _f(p) === _f(m) ? (r[h] = Math.max(Tt(wf(p), wf(m), o), 0), (Qe.test(m) || Qe.test(p)) && (r[h] += "%")) : r[h] = m;
  }
  (n.rotate || i.rotate) && (r.rotate = Tt(n.rotate || 0, i.rotate || 0, o));
}
function bf(r, n) {
  return r[n] !== void 0 ? r[n] : r.borderRadius;
}
const Z1 = sd(0, 0.5, Ph), q1 = sd(0.5, 0.95, Et);
function sd(r, n, i) {
  return (o) => o < r ? 0 : o > n ? 1 : i(vi(r, n, o));
}
function Tf(r, n) {
  r.min = n.min, r.max = n.max;
}
function Le(r, n) {
  Tf(r.x, n.x), Tf(r.y, n.y);
}
function Cf(r, n, i, o, u) {
  return r -= n, r = Fs(r, 1 / i, o), u !== void 0 && (r = Fs(r, 1 / u, o)), r;
}
function Q1(r, n = 0, i = 1, o = 0.5, u, f = r, l = r) {
  if (Qe.test(n) && (n = parseFloat(n), n = Tt(l.min, l.max, n / 100) - l.min), typeof n != "number")
    return;
  let h = Tt(f.min, f.max, o);
  r === f && (h -= n), r.min = Cf(r.min, n, i, h, u), r.max = Cf(r.max, n, i, h, u);
}
function Sf(r, n, [i, o, u], f, l) {
  Q1(r, n[i], n[o], n[u], n.scale, f, l);
}
const X1 = ["x", "scaleX", "originX"], J1 = ["y", "scaleY", "originY"];
function Pf(r, n, i, o) {
  Sf(r.x, n, X1, i ? i.x : void 0, o ? o.x : void 0), Sf(r.y, n, J1, i ? i.y : void 0, o ? o.y : void 0);
}
function Ef(r) {
  return r.translate === 0 && r.scale === 1;
}
function od(r) {
  return Ef(r.x) && Ef(r.y);
}
function $1(r, n) {
  return r.x.min === n.x.min && r.x.max === n.x.max && r.y.min === n.y.min && r.y.max === n.y.max;
}
function ad(r, n) {
  return Math.round(r.x.min) === Math.round(n.x.min) && Math.round(r.x.max) === Math.round(n.x.max) && Math.round(r.y.min) === Math.round(n.y.min) && Math.round(r.y.max) === Math.round(n.y.max);
}
function Rf(r) {
  return xe(r.x) / xe(r.y);
}
class t_ {
  constructor() {
    this.members = [];
  }
  add(n) {
    su(this.members, n), n.scheduleRender();
  }
  remove(n) {
    if (ou(this.members, n), n === this.prevLead && (this.prevLead = void 0), n === this.lead) {
      const i = this.members[this.members.length - 1];
      i && this.promote(i);
    }
  }
  relegate(n) {
    const i = this.members.findIndex((u) => n === u);
    if (i === 0)
      return !1;
    let o;
    for (let u = i; u >= 0; u--) {
      const f = this.members[u];
      if (f.isPresent !== !1) {
        o = f;
        break;
      }
    }
    return o ? (this.promote(o), !0) : !1;
  }
  promote(n, i) {
    const o = this.lead;
    if (n !== o && (this.prevLead = o, this.lead = n, n.show(), o)) {
      o.instance && o.scheduleRender(), n.scheduleRender(), n.resumeFrom = o, i && (n.resumeFrom.preserveOpacity = !0), o.snapshot && (n.snapshot = o.snapshot, n.snapshot.latestValues = o.animationValues || o.latestValues), n.root && n.root.isUpdating && (n.isLayoutDirty = !0);
      const { crossfade: u } = n.options;
      u === !1 && o.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((n) => {
      const { options: i, resumingFrom: o } = n;
      i.onExitComplete && i.onExitComplete(), o && o.options.onExitComplete && o.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((n) => {
      n.instance && n.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function If(r, n, i) {
  let o = "";
  const u = r.x.translate / n.x, f = r.y.translate / n.y;
  if ((u || f) && (o = `translate3d(${u}px, ${f}px, 0) `), (n.x !== 1 || n.y !== 1) && (o += `scale(${1 / n.x}, ${1 / n.y}) `), i) {
    const { rotate: p, rotateX: m, rotateY: v } = i;
    p && (o += `rotate(${p}deg) `), m && (o += `rotateX(${m}deg) `), v && (o += `rotateY(${v}deg) `);
  }
  const l = r.x.scale * n.x, h = r.y.scale * n.y;
  return (l !== 1 || h !== 1) && (o += `scale(${l}, ${h})`), o || "none";
}
const e_ = (r, n) => r.depth - n.depth;
class n_ {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(n) {
    su(this.children, n), this.isDirty = !0;
  }
  remove(n) {
    ou(this.children, n), this.isDirty = !0;
  }
  forEach(n) {
    this.isDirty && this.children.sort(e_), this.isDirty = !1, this.children.forEach(n);
  }
}
function r_(r, n) {
  const i = $n.now(), o = ({ timestamp: u }) => {
    const f = u - i;
    f >= n && (hn(o), r(f - n));
  };
  return wt.read(o, !0), () => hn(o);
}
function i_(r) {
  window.MotionDebug && window.MotionDebug.record(r);
}
function s_(r) {
  return r instanceof SVGElement && r.tagName !== "svg";
}
function o_(r, n, i) {
  const o = le(r) ? r : Rr(r);
  return o.start(iu("", o, n, i)), o.animation;
}
const Lf = ["", "X", "Y", "Z"], a_ = { visibility: "hidden" }, Mf = 1e3;
let u_ = 0;
const Zn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function ud({ attachResizeListener: r, defaultParent: n, measureScroll: i, checkIsScrollRoot: o, resetTransform: u }) {
  return class {
    constructor(l = {}, h = n == null ? void 0 : n()) {
      this.id = u_++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, Zn.totalNodes = Zn.resolvedTargetDeltas = Zn.recalculatedProjection = 0, this.nodes.forEach(f_), this.nodes.forEach(m_), this.nodes.forEach(v_), this.nodes.forEach(h_), i_(Zn);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = l, this.root = h ? h.root || h : this, this.path = h ? [...h.path, h] : [], this.parent = h, this.depth = h ? h.depth + 1 : 0;
      for (let p = 0; p < this.path.length; p++)
        this.path[p].shouldResetTransform = !0;
      this.root === this && (this.nodes = new n_());
    }
    addEventListener(l, h) {
      return this.eventHandlers.has(l) || this.eventHandlers.set(l, new au()), this.eventHandlers.get(l).add(h);
    }
    notifyListeners(l, ...h) {
      const p = this.eventHandlers.get(l);
      p && p.notify(...h);
    }
    hasListeners(l) {
      return this.eventHandlers.has(l);
    }
    /**
     * Lifecycles
     */
    mount(l, h = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = s_(l), this.instance = l;
      const { layoutId: p, layout: m, visualElement: v } = this.options;
      if (v && !v.current && v.mount(l), this.root.nodes.add(this), this.parent && this.parent.children.add(this), h && (m || p) && (this.isLayoutDirty = !0), r) {
        let y;
        const _ = () => this.root.updateBlockedByResize = !1;
        r(l, () => {
          this.root.updateBlockedByResize = !0, y && y(), y = r_(_, 250), Es.hasAnimatedSinceResize && (Es.hasAnimatedSinceResize = !1, this.nodes.forEach(Bf));
        });
      }
      p && this.root.registerSharedNode(p, this), this.options.animate !== !1 && v && (p || m) && this.addEventListener("didUpdate", ({ delta: y, hasLayoutChanged: _, hasRelativeTargetChanged: C, layout: E }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const D = this.options.transition || v.getDefaultTransition() || __, { onLayoutAnimationStart: V, onLayoutAnimationComplete: F } = v.getProps(), M = !this.targetLayout || !ad(this.targetLayout, E) || C, L = !_ && C;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || L || _ && (M || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(y, L);
          const U = {
            ...ru(D, "layout"),
            onPlay: V,
            onComplete: F
          };
          (v.shouldReduceMotion || this.options.layoutRoot) && (U.delay = 0, U.type = !1), this.startAnimation(U);
        } else
          _ || Bf(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = E;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const l = this.getStack();
      l && l.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, hn(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(y_), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: l } = this.options;
      return l && l.getProps().transformTemplate;
    }
    willUpdate(l = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let v = 0; v < this.path.length; v++) {
        const y = this.path[v];
        y.shouldResetTransform = !0, y.updateScroll("snapshot"), y.options.layoutRoot && y.willUpdate(!1);
      }
      const { layoutId: h, layout: p } = this.options;
      if (h === void 0 && !p)
        return;
      const m = this.getTransformTemplate();
      this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0, this.updateSnapshot(), l && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Df);
        return;
      }
      this.isUpdating || this.nodes.forEach(p_), this.isUpdating = !1, this.nodes.forEach(g_), this.nodes.forEach(l_), this.nodes.forEach(c_), this.clearAllSnapshots();
      const h = $n.now();
      Wt.delta = Ln(0, 1e3 / 60, h - Wt.timestamp), Wt.timestamp = h, Wt.isProcessing = !0, ha.update.process(Wt), ha.preRender.process(Wt), ha.render.process(Wt), Wt.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Ga.read(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(d_), this.sharedNodes.forEach(A_);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, wt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      wt.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let p = 0; p < this.path.length; p++)
          this.path[p].updateScroll();
      const l = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = Mt(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: h } = this.options;
      h && h.notify("LayoutMeasure", this.layout.layoutBox, l ? l.layoutBox : void 0);
    }
    updateScroll(l = "measure") {
      let h = !!(this.options.layoutScroll && this.instance);
      this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === l && (h = !1), h && (this.scroll = {
        animationId: this.root.animationId,
        phase: l,
        isRoot: o(this.instance),
        offset: i(this.instance)
      });
    }
    resetTransform() {
      if (!u)
        return;
      const l = this.isLayoutDirty || this.shouldResetTransform, h = this.projectionDelta && !od(this.projectionDelta), p = this.getTransformTemplate(), m = p ? p(this.latestValues, "") : void 0, v = m !== this.prevTransformTemplateValue;
      l && (h || Kn(this.latestValues) || v) && (u(this.instance, m), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(l = !0) {
      const h = this.measurePageBox();
      let p = this.removeElementScroll(h);
      return l && (p = this.removeTransform(p)), b_(p), {
        animationId: this.root.animationId,
        measuredBox: h,
        layoutBox: p,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: l } = this.options;
      if (!l)
        return Mt();
      const h = l.measureViewportBox(), { scroll: p } = this.root;
      return p && (Pn(h.x, p.offset.x), Pn(h.y, p.offset.y)), h;
    }
    removeElementScroll(l) {
      const h = Mt();
      Le(h, l);
      for (let p = 0; p < this.path.length; p++) {
        const m = this.path[p], { scroll: v, options: y } = m;
        if (m !== this.root && v && y.layoutScroll) {
          if (v.isRoot) {
            Le(h, l);
            const { scroll: _ } = this.root;
            _ && (Pn(h.x, -_.offset.x), Pn(h.y, -_.offset.y));
          }
          Pn(h.x, v.offset.x), Pn(h.y, v.offset.y);
        }
      }
      return h;
    }
    applyTransform(l, h = !1) {
      const p = Mt();
      Le(p, l);
      for (let m = 0; m < this.path.length; m++) {
        const v = this.path[m];
        !h && v.options.layoutScroll && v.scroll && v !== v.root && Pr(p, {
          x: -v.scroll.offset.x,
          y: -v.scroll.offset.y
        }), Kn(v.latestValues) && Pr(p, v.latestValues);
      }
      return Kn(this.latestValues) && Pr(p, this.latestValues), p;
    }
    removeTransform(l) {
      const h = Mt();
      Le(h, l);
      for (let p = 0; p < this.path.length; p++) {
        const m = this.path[p];
        if (!m.instance || !Kn(m.latestValues))
          continue;
        Oa(m.latestValues) && m.updateSnapshot();
        const v = Mt(), y = m.measurePageBox();
        Le(v, y), Pf(h, m.latestValues, m.snapshot ? m.snapshot.layoutBox : void 0, v);
      }
      return Kn(this.latestValues) && Pf(h, this.latestValues), h;
    }
    setTargetDelta(l) {
      this.targetDelta = l, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(l) {
      this.options = {
        ...this.options,
        ...l,
        crossfade: l.crossfade !== void 0 ? l.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Wt.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(l = !1) {
      var h;
      const p = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = p.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = p.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = p.isSharedProjectionDirty);
      const m = !!this.resumingFrom || this !== p;
      if (!(l || m && this.isSharedProjectionDirty || this.isProjectionDirty || !((h = this.parent) === null || h === void 0) && h.isProjectionDirty || this.attemptToResolveRelativeTarget))
        return;
      const { layout: y, layoutId: _ } = this.options;
      if (!(!this.layout || !(y || _))) {
        if (this.resolvedRelativeTargetAt = Wt.timestamp, !this.targetDelta && !this.relativeTarget) {
          const C = this.getClosestProjectingParent();
          C && C.layout && this.animationProgress !== 1 ? (this.relativeParent = C, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Mt(), this.relativeTargetOrigin = Mt(), di(this.relativeTargetOrigin, this.layout.layoutBox, C.layout.layoutBox), Le(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Mt(), this.targetWithTransforms = Mt()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), T1(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Le(this.target, this.layout.layoutBox), td(this.target, this.targetDelta)) : Le(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const C = this.getClosestProjectingParent();
            C && !!C.resumingFrom == !!this.resumingFrom && !C.options.layoutScroll && C.target && this.animationProgress !== 1 ? (this.relativeParent = C, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Mt(), this.relativeTargetOrigin = Mt(), di(this.relativeTargetOrigin, this.target, C.target), Le(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Zn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Oa(this.parent.latestValues) || $h(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var l;
      const h = this.getLead(), p = !!this.resumingFrom || this !== h;
      let m = !0;
      if ((this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty) && (m = !1), p && (this.isSharedProjectionDirty || this.isTransformDirty) && (m = !1), this.resolvedRelativeTargetAt === Wt.timestamp && (m = !1), m)
        return;
      const { layout: v, layoutId: y } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(v || y))
        return;
      Le(this.layoutCorrected, this.layout.layoutBox);
      const _ = this.treeScale.x, C = this.treeScale.y;
      D1(this.layoutCorrected, this.treeScale, this.path, p), h.layout && !h.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (h.target = h.layout.layoutBox, h.targetWithTransforms = Mt());
      const { target: E } = h;
      if (!E) {
        this.projectionTransform && (this.projectionDelta = Sr(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = Sr(), this.projectionDeltaWithTransform = Sr());
      const D = this.projectionTransform;
      hi(this.projectionDelta, this.layoutCorrected, E, this.latestValues), this.projectionTransform = If(this.projectionDelta, this.treeScale), (this.projectionTransform !== D || this.treeScale.x !== _ || this.treeScale.y !== C) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", E)), Zn.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(l = !0) {
      if (this.options.scheduleRender && this.options.scheduleRender(), l) {
        const h = this.getStack();
        h && h.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    setAnimationOrigin(l, h = !1) {
      const p = this.snapshot, m = p ? p.latestValues : {}, v = { ...this.latestValues }, y = Sr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !h;
      const _ = Mt(), C = p ? p.source : void 0, E = this.layout ? this.layout.source : void 0, D = C !== E, V = this.getStack(), F = !V || V.members.length <= 1, M = !!(D && !F && this.options.crossfade === !0 && !this.path.some(w_));
      this.animationProgress = 0;
      let L;
      this.mixTargetDelta = (U) => {
        const j = U / 1e3;
        Of(y.x, l.x, j), Of(y.y, l.y, j), this.setTargetDelta(y), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (di(_, this.layout.layoutBox, this.relativeParent.layout.layoutBox), x_(this.relativeTarget, this.relativeTargetOrigin, _, j), L && $1(this.relativeTarget, L) && (this.isProjectionDirty = !1), L || (L = Mt()), Le(L, this.relativeTarget)), D && (this.animationValues = v, K1(v, m, this.latestValues, j, M, F)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = j;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(l) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (hn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = wt.update(() => {
        Es.hasAnimatedSinceResize = !0, this.currentAnimation = o_(0, Mf, {
          ...l,
          onUpdate: (h) => {
            this.mixTargetDelta(h), l.onUpdate && l.onUpdate(h);
          },
          onComplete: () => {
            l.onComplete && l.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const l = this.getStack();
      l && l.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Mf), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const l = this.getLead();
      let { targetWithTransforms: h, target: p, layout: m, latestValues: v } = l;
      if (!(!h || !p || !m)) {
        if (this !== l && this.layout && m && ld(this.options.animationType, this.layout.layoutBox, m.layoutBox)) {
          p = this.target || Mt();
          const y = xe(this.layout.layoutBox.x);
          p.x.min = l.target.x.min, p.x.max = p.x.min + y;
          const _ = xe(this.layout.layoutBox.y);
          p.y.min = l.target.y.min, p.y.max = p.y.min + _;
        }
        Le(h, p), Pr(h, v), hi(this.projectionDeltaWithTransform, this.layoutCorrected, h, v);
      }
    }
    registerSharedNode(l, h) {
      this.sharedNodes.has(l) || this.sharedNodes.set(l, new t_()), this.sharedNodes.get(l).add(h);
      const m = h.options.initialPromotionConfig;
      h.promote({
        transition: m ? m.transition : void 0,
        preserveFollowOpacity: m && m.shouldPreserveFollowOpacity ? m.shouldPreserveFollowOpacity(h) : void 0
      });
    }
    isLead() {
      const l = this.getStack();
      return l ? l.lead === this : !0;
    }
    getLead() {
      var l;
      const { layoutId: h } = this.options;
      return h ? ((l = this.getStack()) === null || l === void 0 ? void 0 : l.lead) || this : this;
    }
    getPrevLead() {
      var l;
      const { layoutId: h } = this.options;
      return h ? (l = this.getStack()) === null || l === void 0 ? void 0 : l.prevLead : void 0;
    }
    getStack() {
      const { layoutId: l } = this.options;
      if (l)
        return this.root.sharedNodes.get(l);
    }
    promote({ needsReset: l, transition: h, preserveFollowOpacity: p } = {}) {
      const m = this.getStack();
      m && m.promote(this, p), l && (this.projectionDelta = void 0, this.needsReset = !0), h && this.setOptions({ transition: h });
    }
    relegate() {
      const l = this.getStack();
      return l ? l.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: l } = this.options;
      if (!l)
        return;
      let h = !1;
      const { latestValues: p } = l;
      if ((p.rotate || p.rotateX || p.rotateY || p.rotateZ) && (h = !0), !h)
        return;
      const m = {};
      for (let v = 0; v < Lf.length; v++) {
        const y = "rotate" + Lf[v];
        p[y] && (m[y] = p[y], l.setStaticValue(y, 0));
      }
      l.render();
      for (const v in m)
        l.setStaticValue(v, m[v]);
      l.scheduleRender();
    }
    getProjectionStyles(l) {
      var h, p;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return a_;
      const m = {
        visibility: ""
      }, v = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, m.opacity = "", m.pointerEvents = Ss(l == null ? void 0 : l.pointerEvents) || "", m.transform = v ? v(this.latestValues, "") : "none", m;
      const y = this.getLead();
      if (!this.projectionDelta || !this.layout || !y.target) {
        const D = {};
        return this.options.layoutId && (D.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, D.pointerEvents = Ss(l == null ? void 0 : l.pointerEvents) || ""), this.hasProjected && !Kn(this.latestValues) && (D.transform = v ? v({}, "") : "none", this.hasProjected = !1), D;
      }
      const _ = y.animationValues || y.latestValues;
      this.applyTransformsToTarget(), m.transform = If(this.projectionDeltaWithTransform, this.treeScale, _), v && (m.transform = v(_, m.transform));
      const { x: C, y: E } = this.projectionDelta;
      m.transformOrigin = `${C.origin * 100}% ${E.origin * 100}% 0`, y.animationValues ? m.opacity = y === this ? (p = (h = _.opacity) !== null && h !== void 0 ? h : this.latestValues.opacity) !== null && p !== void 0 ? p : 1 : this.preserveOpacity ? this.latestValues.opacity : _.opacityExit : m.opacity = y === this ? _.opacity !== void 0 ? _.opacity : "" : _.opacityExit !== void 0 ? _.opacityExit : 0;
      for (const D in Is) {
        if (_[D] === void 0)
          continue;
        const { correct: V, applyTo: F } = Is[D], M = m.transform === "none" ? _[D] : V(_[D], y);
        if (F) {
          const L = F.length;
          for (let U = 0; U < L; U++)
            m[F[U]] = M;
        } else
          m[D] = M;
      }
      return this.options.layoutId && (m.pointerEvents = y === this ? Ss(l == null ? void 0 : l.pointerEvents) || "" : "none"), m;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((l) => {
        var h;
        return (h = l.currentAnimation) === null || h === void 0 ? void 0 : h.stop();
      }), this.root.nodes.forEach(Df), this.root.sharedNodes.clear();
    }
  };
}
function l_(r) {
  r.updateLayout();
}
function c_(r) {
  var n;
  const i = ((n = r.resumeFrom) === null || n === void 0 ? void 0 : n.snapshot) || r.snapshot;
  if (r.isLead() && r.layout && i && r.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: u } = r.layout, { animationType: f } = r.options, l = i.source !== r.layout.source;
    f === "size" ? Me((y) => {
      const _ = l ? i.measuredBox[y] : i.layoutBox[y], C = xe(_);
      _.min = o[y].min, _.max = _.min + C;
    }) : ld(f, i.layoutBox, o) && Me((y) => {
      const _ = l ? i.measuredBox[y] : i.layoutBox[y], C = xe(o[y]);
      _.max = _.min + C, r.relativeTarget && !r.currentAnimation && (r.isProjectionDirty = !0, r.relativeTarget[y].max = r.relativeTarget[y].min + C);
    });
    const h = Sr();
    hi(h, o, i.layoutBox);
    const p = Sr();
    l ? hi(p, r.applyTransform(u, !0), i.measuredBox) : hi(p, o, i.layoutBox);
    const m = !od(h);
    let v = !1;
    if (!r.resumeFrom) {
      const y = r.getClosestProjectingParent();
      if (y && !y.resumeFrom) {
        const { snapshot: _, layout: C } = y;
        if (_ && C) {
          const E = Mt();
          di(E, i.layoutBox, _.layoutBox);
          const D = Mt();
          di(D, o, C.layoutBox), ad(E, D) || (v = !0), y.options.layoutRoot && (r.relativeTarget = D, r.relativeTargetOrigin = E, r.relativeParent = y);
        }
      }
    }
    r.notifyListeners("didUpdate", {
      layout: o,
      snapshot: i,
      delta: p,
      layoutDelta: h,
      hasLayoutChanged: m,
      hasRelativeTargetChanged: v
    });
  } else if (r.isLead()) {
    const { onExitComplete: o } = r.options;
    o && o();
  }
  r.options.transition = void 0;
}
function f_(r) {
  Zn.totalNodes++, r.parent && (r.isProjecting() || (r.isProjectionDirty = r.parent.isProjectionDirty), r.isSharedProjectionDirty || (r.isSharedProjectionDirty = !!(r.isProjectionDirty || r.parent.isProjectionDirty || r.parent.isSharedProjectionDirty)), r.isTransformDirty || (r.isTransformDirty = r.parent.isTransformDirty));
}
function h_(r) {
  r.isProjectionDirty = r.isSharedProjectionDirty = r.isTransformDirty = !1;
}
function d_(r) {
  r.clearSnapshot();
}
function Df(r) {
  r.clearMeasurements();
}
function p_(r) {
  r.isLayoutDirty = !1;
}
function g_(r) {
  const { visualElement: n } = r.options;
  n && n.getProps().onBeforeLayoutMeasure && n.notify("BeforeLayoutMeasure"), r.resetTransform();
}
function Bf(r) {
  r.finishAnimation(), r.targetDelta = r.relativeTarget = r.target = void 0, r.isProjectionDirty = !0;
}
function m_(r) {
  r.resolveTargetDelta();
}
function v_(r) {
  r.calcProjection();
}
function y_(r) {
  r.resetRotation();
}
function A_(r) {
  r.removeLeadSnapshot();
}
function Of(r, n, i) {
  r.translate = Tt(n.translate, 0, i), r.scale = Tt(n.scale, 1, i), r.origin = n.origin, r.originPoint = n.originPoint;
}
function Vf(r, n, i, o) {
  r.min = Tt(n.min, i.min, o), r.max = Tt(n.max, i.max, o);
}
function x_(r, n, i, o) {
  Vf(r.x, n.x, i.x, o), Vf(r.y, n.y, i.y, o);
}
function w_(r) {
  return r.animationValues && r.animationValues.opacityExit !== void 0;
}
const __ = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Ff = (r) => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(r), kf = Ff("applewebkit/") && !Ff("chrome/") ? Math.round : Et;
function Nf(r) {
  r.min = kf(r.min), r.max = kf(r.max);
}
function b_(r) {
  Nf(r.x), Nf(r.y);
}
function ld(r, n, i) {
  return r === "position" || r === "preserve-aspect" && !Da(Rf(n), Rf(i), 0.2);
}
const T_ = ud({
  attachResizeListener: (r, n) => ln(r, "resize", n),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), ba = {
  current: void 0
}, cd = ud({
  measureScroll: (r) => ({
    x: r.scrollLeft,
    y: r.scrollTop
  }),
  defaultParent: () => {
    if (!ba.current) {
      const r = new T_({});
      r.mount(window), r.setOptions({ layoutScroll: !0 }), ba.current = r;
    }
    return ba.current;
  },
  resetTransform: (r, n) => {
    r.style.transform = n !== void 0 ? n : "none";
  },
  checkIsScrollRoot: (r) => window.getComputedStyle(r).position === "fixed"
}), C_ = {
  pan: {
    Feature: W1
  },
  drag: {
    Feature: U1,
    ProjectionNode: cd,
    MeasureLayout: rd
  }
}, S_ = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function P_(r) {
  const n = S_.exec(r);
  if (!n)
    return [,];
  const [, i, o] = n;
  return [i, o];
}
const E_ = 4;
function Fa(r, n, i = 1) {
  De(i <= E_, `Max CSS variable fallback depth detected in property "${r}". This may indicate a circular fallback dependency.`);
  const [o, u] = P_(r);
  if (!o)
    return;
  const f = window.getComputedStyle(n).getPropertyValue(o);
  if (f) {
    const l = f.trim();
    return Yh(l) ? parseFloat(l) : l;
  } else
    return Sa(u) ? Fa(u, n, i + 1) : u;
}
function R_(r, { ...n }, i) {
  const o = r.current;
  if (!(o instanceof Element))
    return { target: n, transitionEnd: i };
  i && (i = { ...i }), r.values.forEach((u) => {
    const f = u.get();
    if (!Sa(f))
      return;
    const l = Fa(f, o);
    l && u.set(l);
  });
  for (const u in n) {
    const f = n[u];
    if (!Sa(f))
      continue;
    const l = Fa(f, o);
    l && (n[u] = l, i || (i = {}), i[u] === void 0 && (i[u] = f));
  }
  return { target: n, transitionEnd: i };
}
const I_ = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y",
  "translateX",
  "translateY"
]), fd = (r) => I_.has(r), L_ = (r) => Object.keys(r).some(fd), Cs = (r) => r === er || r === Z, Uf = (r, n) => parseFloat(r.split(", ")[n]), Wf = (r, n) => (i, { transform: o }) => {
  if (o === "none" || !o)
    return 0;
  const u = o.match(/^matrix3d\((.+)\)$/);
  if (u)
    return Uf(u[1], n);
  {
    const f = o.match(/^matrix\((.+)\)$/);
    return f ? Uf(f[1], r) : 0;
  }
}, M_ = /* @__PURE__ */ new Set(["x", "y", "z"]), D_ = Ai.filter((r) => !M_.has(r));
function B_(r) {
  const n = [];
  return D_.forEach((i) => {
    const o = r.getValue(i);
    o !== void 0 && (n.push([i, o.get()]), o.set(i.startsWith("scale") ? 1 : 0));
  }), n.length && r.render(), n;
}
const Ir = {
  // Dimensions
  width: ({ x: r }, { paddingLeft: n = "0", paddingRight: i = "0" }) => r.max - r.min - parseFloat(n) - parseFloat(i),
  height: ({ y: r }, { paddingTop: n = "0", paddingBottom: i = "0" }) => r.max - r.min - parseFloat(n) - parseFloat(i),
  top: (r, { top: n }) => parseFloat(n),
  left: (r, { left: n }) => parseFloat(n),
  bottom: ({ y: r }, { top: n }) => parseFloat(n) + (r.max - r.min),
  right: ({ x: r }, { left: n }) => parseFloat(n) + (r.max - r.min),
  // Transform
  x: Wf(4, 13),
  y: Wf(5, 14)
};
Ir.translateX = Ir.x;
Ir.translateY = Ir.y;
const O_ = (r, n, i) => {
  const o = n.measureViewportBox(), u = n.current, f = getComputedStyle(u), { display: l } = f, h = {};
  l === "none" && n.setStaticValue("display", r.display || "block"), i.forEach((m) => {
    h[m] = Ir[m](o, f);
  }), n.render();
  const p = n.measureViewportBox();
  return i.forEach((m) => {
    const v = n.getValue(m);
    v && v.jump(h[m]), r[m] = Ir[m](p, f);
  }), r;
}, V_ = (r, n, i = {}, o = {}) => {
  n = { ...n }, o = { ...o };
  const u = Object.keys(n).filter(fd);
  let f = [], l = !1;
  const h = [];
  if (u.forEach((p) => {
    const m = r.getValue(p);
    if (!r.hasValue(p))
      return;
    let v = i[p], y = ai(v);
    const _ = n[p];
    let C;
    if (Ms(_)) {
      const E = _.length, D = _[0] === null ? 1 : 0;
      v = _[D], y = ai(v);
      for (let V = D; V < E && _[V] !== null; V++)
        C ? De(ai(_[V]) === C, "All keyframes must be of the same type") : (C = ai(_[V]), De(C === y || Cs(y) && Cs(C), "Keyframes must be of the same dimension as the current value"));
    } else
      C = ai(_);
    if (y !== C)
      if (Cs(y) && Cs(C)) {
        const E = m.get();
        typeof E == "string" && m.set(parseFloat(E)), typeof _ == "string" ? n[p] = parseFloat(_) : Array.isArray(_) && C === Z && (n[p] = _.map(parseFloat));
      } else
        y != null && y.transform && (C != null && C.transform) && (v === 0 || _ === 0) ? v === 0 ? m.set(C.transform(v)) : n[p] = y.transform(_) : (l || (f = B_(r), l = !0), h.push(p), o[p] = o[p] !== void 0 ? o[p] : n[p], m.jump(_));
  }), h.length) {
    const p = h.indexOf("height") >= 0 ? window.pageYOffset : null, m = O_(n, r, h);
    return f.length && f.forEach(([v, y]) => {
      r.getValue(v).set(y);
    }), r.render(), Ws && p !== null && window.scrollTo({ top: p }), { target: m, transitionEnd: o };
  } else
    return { target: n, transitionEnd: o };
};
function F_(r, n, i, o) {
  return L_(n) ? V_(r, n, i, o) : { target: n, transitionEnd: o };
}
const k_ = (r, n, i, o) => {
  const u = R_(r, n, o);
  return n = u.target, o = u.transitionEnd, F_(r, n, i, o);
}, ka = { current: null }, hd = { current: !1 };
function N_() {
  if (hd.current = !0, !!Ws)
    if (window.matchMedia) {
      const r = window.matchMedia("(prefers-reduced-motion)"), n = () => ka.current = r.matches;
      r.addListener(n), n();
    } else
      ka.current = !1;
}
function U_(r, n, i) {
  const { willChange: o } = n;
  for (const u in n) {
    const f = n[u], l = i[u];
    if (le(f))
      r.addValue(u, f), Vs(o) && o.add(u), process.env.NODE_ENV === "development" && uu(f.version === "11.0.3", `Attempting to mix Framer Motion versions ${f.version} with 11.0.3 may not work as expected.`);
    else if (le(l))
      r.addValue(u, Rr(f, { owner: r })), Vs(o) && o.remove(u);
    else if (l !== f)
      if (r.hasValue(u)) {
        const h = r.getValue(u);
        !h.hasAnimated && h.set(f);
      } else {
        const h = r.getStaticValue(u);
        r.addValue(u, Rr(h !== void 0 ? h : f, { owner: r }));
      }
  }
  for (const u in i)
    n[u] === void 0 && r.removeValue(u);
  return n;
}
const Gf = /* @__PURE__ */ new WeakMap(), dd = Object.keys(mi), W_ = dd.length, Hf = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], G_ = ja.length;
class H_ {
  constructor({ parent: n, props: i, presenceContext: o, reducedMotionConfig: u, visualState: f }, l = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => wt.render(this.render, !1, !0);
    const { latestValues: h, renderState: p } = f;
    this.latestValues = h, this.baseTarget = { ...h }, this.initialValues = i.initial ? { ...h } : {}, this.renderState = p, this.parent = n, this.props = i, this.presenceContext = o, this.depth = n ? n.depth + 1 : 0, this.reducedMotionConfig = u, this.options = l, this.isControllingVariants = Hs(i), this.isVariantNode = Xf(i), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(n && n.current);
    const { willChange: m, ...v } = this.scrapeMotionValuesFromProps(i, {});
    for (const y in v) {
      const _ = v[y];
      h[y] !== void 0 && le(_) && (_.set(h[y], !1), Vs(m) && m.add(y));
    }
  }
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(n, i) {
    return {};
  }
  mount(n) {
    this.current = n, Gf.set(n, this), this.projection && !this.projection.instance && this.projection.mount(n), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((i, o) => this.bindToMotionValue(o, i)), hd.current || N_(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : ka.current, process.env.NODE_ENV !== "production" && uu(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    Gf.delete(this.current), this.projection && this.projection.unmount(), hn(this.notifyUpdate), hn(this.render), this.valueSubscriptions.forEach((n) => n()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const n in this.events)
      this.events[n].clear();
    for (const n in this.features)
      this.features[n].unmount();
    this.current = null;
  }
  bindToMotionValue(n, i) {
    const o = tr.has(n), u = i.on("change", (l) => {
      this.latestValues[n] = l, this.props.onUpdate && wt.update(this.notifyUpdate, !1, !0), o && this.projection && (this.projection.isTransformDirty = !0);
    }), f = i.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(n, () => {
      u(), f();
    });
  }
  sortNodePosition(n) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== n.type ? 0 : this.sortInstanceNodePosition(this.current, n.current);
  }
  loadFeatures({ children: n, ...i }, o, u, f) {
    let l, h;
    if (process.env.NODE_ENV !== "production" && u && o) {
      const p = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
      i.ignoreStrict ? _i(!1, p) : De(!1, p);
    }
    for (let p = 0; p < W_; p++) {
      const m = dd[p], { isEnabled: v, Feature: y, ProjectionNode: _, MeasureLayout: C } = mi[m];
      _ && (l = _), v(i) && (!this.features[m] && y && (this.features[m] = new y(this)), C && (h = C));
    }
    if ((this.type === "html" || this.type === "svg") && !this.projection && l) {
      this.projection = new l(this.latestValues, this.parent && this.parent.projection);
      const { layoutId: p, layout: m, drag: v, dragConstraints: y, layoutScroll: _, layoutRoot: C } = i;
      this.projection.setOptions({
        layoutId: p,
        layout: m,
        alwaysMeasureLayout: !!v || y && Tr(y),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */
        animationType: typeof m == "string" ? m : "both",
        initialPromotionConfig: f,
        layoutScroll: _,
        layoutRoot: C
      });
    }
    return h;
  }
  updateFeatures() {
    for (const n in this.features) {
      const i = this.features[n];
      i.isMounted ? i.update() : (i.mount(), i.isMounted = !0);
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Mt();
  }
  getStaticValue(n) {
    return this.latestValues[n];
  }
  setStaticValue(n, i) {
    this.latestValues[n] = i;
  }
  /**
   * Make a target animatable by Popmotion. For instance, if we're
   * trying to animate width from 100px to 100vw we need to measure 100vw
   * in pixels to determine what we really need to animate to. This is also
   * pluggable to support Framer's custom value types like Color,
   * and CSS variables.
   */
  makeTargetAnimatable(n, i = !0) {
    return this.makeTargetAnimatableFromInstance(n, i);
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(n, i) {
    (n.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = n, this.prevPresenceContext = this.presenceContext, this.presenceContext = i;
    for (let o = 0; o < Hf.length; o++) {
      const u = Hf[o];
      this.propEventSubscriptions[u] && (this.propEventSubscriptions[u](), delete this.propEventSubscriptions[u]);
      const f = n["on" + u];
      f && (this.propEventSubscriptions[u] = this.on(u, f));
    }
    this.prevMotionValues = U_(this, this.scrapeMotionValuesFromProps(n, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(n) {
    return this.props.variants ? this.props.variants[n] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  getVariantContext(n = !1) {
    if (n)
      return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const o = this.parent ? this.parent.getVariantContext() || {} : {};
      return this.props.initial !== void 0 && (o.initial = this.props.initial), o;
    }
    const i = {};
    for (let o = 0; o < G_; o++) {
      const u = ja[o], f = this.props[u];
      (gi(f) || f === !1) && (i[u] = f);
    }
    return i;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(n) {
    const i = this.getClosestVariantNode();
    if (i)
      return i.variantChildren && i.variantChildren.add(n), () => i.variantChildren.delete(n);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(n, i) {
    i !== this.values.get(n) && (this.removeValue(n), this.bindToMotionValue(n, i)), this.values.set(n, i), this.latestValues[n] = i.get();
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(n) {
    this.values.delete(n);
    const i = this.valueSubscriptions.get(n);
    i && (i(), this.valueSubscriptions.delete(n)), delete this.latestValues[n], this.removeValueFromRenderState(n, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(n) {
    return this.values.has(n);
  }
  getValue(n, i) {
    if (this.props.values && this.props.values[n])
      return this.props.values[n];
    let o = this.values.get(n);
    return o === void 0 && i !== void 0 && (o = Rr(i, { owner: this }), this.addValue(n, o)), o;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(n) {
    var i;
    return this.latestValues[n] !== void 0 || !this.current ? this.latestValues[n] : (i = this.getBaseTargetFromProps(this.props, n)) !== null && i !== void 0 ? i : this.readValueFromInstance(this.current, n, this.options);
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(n, i) {
    this.baseTarget[n] = i;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(n) {
    var i;
    const { initial: o } = this.props, u = typeof o == "string" || typeof o == "object" ? (i = Ja(this.props, o)) === null || i === void 0 ? void 0 : i[n] : void 0;
    if (o && u !== void 0)
      return u;
    const f = this.getBaseTargetFromProps(this.props, n);
    return f !== void 0 && !le(f) ? f : this.initialValues[n] !== void 0 && u === void 0 ? void 0 : this.baseTarget[n];
  }
  on(n, i) {
    return this.events[n] || (this.events[n] = new au()), this.events[n].add(i);
  }
  notify(n, ...i) {
    this.events[n] && this.events[n].notify(...i);
  }
}
class pd extends H_ {
  sortInstanceNodePosition(n, i) {
    return n.compareDocumentPosition(i) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(n, i) {
    return n.style ? n.style[i] : void 0;
  }
  removeValueFromRenderState(n, { vars: i, style: o }) {
    delete i[n], delete o[n];
  }
  makeTargetAnimatableFromInstance({ transition: n, transitionEnd: i, ...o }, u) {
    const f = s1(o, n || {}, this);
    if (u) {
      r1(this, o, f);
      const l = k_(this, o, f, i);
      i = l.transitionEnd, o = l.target;
    }
    return {
      transition: n,
      transitionEnd: i,
      ...o
    };
  }
}
function j_(r) {
  return window.getComputedStyle(r);
}
class z_ extends pd {
  constructor() {
    super(...arguments), this.type = "html";
  }
  readValueFromInstance(n, i) {
    if (tr.has(i)) {
      const o = nu(i);
      return o && o.default || 0;
    } else {
      const o = j_(n), u = (eh(i) ? o.getPropertyValue(i) : o[i]) || 0;
      return typeof u == "string" ? u.trim() : u;
    }
  }
  measureInstanceViewportBox(n, { transformPagePoint: i }) {
    return ed(n, i);
  }
  build(n, i, o, u) {
    Ka(n, i, o, u.transformTemplate);
  }
  scrapeMotionValuesFromProps(n, i) {
    return Xa(n, i);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: n } = this.props;
    le(n) && (this.childSubscription = n.on("change", (i) => {
      this.current && (this.current.textContent = `${i}`);
    }));
  }
  renderInstance(n, i, o, u) {
    ah(n, i, o, u);
  }
}
class Y_ extends pd {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1;
  }
  getBaseTargetFromProps(n, i) {
    return n[i];
  }
  readValueFromInstance(n, i) {
    if (tr.has(i)) {
      const o = nu(i);
      return o && o.default || 0;
    }
    return i = uh.has(i) ? i : Wa(i), n.getAttribute(i);
  }
  measureInstanceViewportBox() {
    return Mt();
  }
  scrapeMotionValuesFromProps(n, i) {
    return ch(n, i);
  }
  build(n, i, o, u) {
    qa(n, i, o, this.isSVGTag, u.transformTemplate);
  }
  renderInstance(n, i, o, u) {
    lh(n, i, o, u);
  }
  mount(n) {
    this.isSVGTag = Qa(n.tagName), super.mount(n);
  }
}
const K_ = (r, n) => Ya(r) ? new Y_(n, { enableHardwareAcceleration: !1 }) : new z_(n, { enableHardwareAcceleration: !0 }), Z_ = {
  layout: {
    ProjectionNode: cd,
    MeasureLayout: rd
  }
}, q_ = {
  ...x1,
  ...Gx,
  ...C_,
  ...Z_
}, gd = /* @__PURE__ */ tx((r, n) => Rx(r, n, q_, K_));
function md() {
  const r = Xt(!1);
  return Ua(() => (r.current = !0, () => {
    r.current = !1;
  }), []), r;
}
function Q_() {
  const r = md(), [n, i] = Jn(0), o = pi(() => {
    r.current && i(n + 1);
  }, [n]);
  return [pi(() => wt.postRender(o), [o]), n];
}
class X_ extends Qt.Component {
  getSnapshotBeforeUpdate(n) {
    const i = this.props.childRef.current;
    if (i && n.isPresent && !this.props.isPresent) {
      const o = this.props.sizeRef.current;
      o.height = i.offsetHeight || 0, o.width = i.offsetWidth || 0, o.top = i.offsetTop, o.left = i.offsetLeft;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function J_({ children: r, isPresent: n }) {
  const i = Na(), o = Xt(null), u = Xt({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return jf(() => {
    const { width: f, height: l, top: h, left: p } = u.current;
    if (n || !o.current || !f || !l)
      return;
    o.current.dataset.motionPopId = i;
    const m = document.createElement("style");
    return document.head.appendChild(m), m.sheet && m.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${l}px !important;
            top: ${h}px !important;
            left: ${p}px !important;
          }
        `), () => {
      document.head.removeChild(m);
    };
  }, [n]), Qt.createElement(X_, { isPresent: n, childRef: o, sizeRef: u }, Qt.cloneElement(r, { ref: o }));
}
const Ta = ({ children: r, initial: n, isPresent: i, onExitComplete: o, custom: u, presenceAffectsLayout: f, mode: l }) => {
  const h = fh($_), p = Na(), m = Er(
    () => ({
      id: p,
      initial: n,
      isPresent: i,
      custom: u,
      onExitComplete: (v) => {
        h.set(v, !0);
        for (const y of h.values())
          if (!y)
            return;
        o && o();
      },
      register: (v) => (h.set(v, !1), () => h.delete(v))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    f ? void 0 : [i]
  );
  return Er(() => {
    h.forEach((v, y) => h.set(y, !1));
  }, [i]), Qt.useEffect(() => {
    !i && !h.size && o && o();
  }, [i]), l === "popLayout" && (r = Qt.createElement(J_, { isPresent: i }, r)), Qt.createElement(Us.Provider, { value: m }, r);
};
function $_() {
  return /* @__PURE__ */ new Map();
}
function tb(r) {
  return In(() => () => r(), []);
}
const qn = (r) => r.key || "";
function eb(r, n) {
  r.forEach((i) => {
    const o = qn(i);
    n.set(o, i);
  });
}
function nb(r) {
  const n = [];
  return RA.forEach(r, (i) => {
    IA(i) && n.push(i);
  }), n;
}
const vd = ({ children: r, custom: n, initial: i = !0, onExitComplete: o, exitBeforeEnter: u, presenceAffectsLayout: f = !0, mode: l = "sync" }) => {
  De(!u, "Replace exitBeforeEnter with mode='wait'");
  const h = Jt(za).forceRender || Q_()[0], p = md(), m = nb(r);
  let v = m;
  const y = Xt(/* @__PURE__ */ new Map()).current, _ = Xt(v), C = Xt(/* @__PURE__ */ new Map()).current, E = Xt(!0);
  if (Ua(() => {
    E.current = !1, eb(m, C), _.current = v;
  }), tb(() => {
    E.current = !0, C.clear(), y.clear();
  }), E.current)
    return Qt.createElement(Qt.Fragment, null, v.map((M) => Qt.createElement(Ta, { key: qn(M), isPresent: !0, initial: i ? void 0 : !1, presenceAffectsLayout: f, mode: l }, M)));
  v = [...v];
  const D = _.current.map(qn), V = m.map(qn), F = D.length;
  for (let M = 0; M < F; M++) {
    const L = D[M];
    V.indexOf(L) === -1 && !y.has(L) && y.set(L, void 0);
  }
  return l === "wait" && y.size && (v = []), y.forEach((M, L) => {
    if (V.indexOf(L) !== -1)
      return;
    const U = C.get(L);
    if (!U)
      return;
    const j = D.indexOf(L);
    let ot = M;
    if (!ot) {
      const rt = () => {
        y.delete(L);
        const Q = Array.from(C.keys()).filter((lt) => !V.includes(lt));
        if (Q.forEach((lt) => C.delete(lt)), _.current = m.filter((lt) => {
          const Gt = qn(lt);
          return (
            // filter out the node exiting
            Gt === L || // filter out the leftover children
            Q.includes(Gt)
          );
        }), !y.size) {
          if (p.current === !1)
            return;
          h(), o && o();
        }
      };
      ot = Qt.createElement(Ta, { key: qn(U), isPresent: !1, onExitComplete: rt, custom: n, presenceAffectsLayout: f, mode: l }, U), y.set(L, ot);
    }
    v.splice(j, 0, ot);
  }), v = v.map((M) => {
    const L = M.key;
    return y.has(L) ? M : Qt.createElement(Ta, { key: qn(M), isPresent: !0, presenceAffectsLayout: f, mode: l }, M);
  }), process.env.NODE_ENV !== "production" && l === "wait" && v.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`), Qt.createElement(Qt.Fragment, null, y.size ? v : v.map((M) => EA(M)));
}, rb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAChklEQVR4nO2Zu24TQRSGPxeElgYbEVIYHoECCJdXQAIH+YKECA+AxEVESAl0wAsgUUEKpCiiIDFKDYGGS96AhhZSBZGQ2MFwpH+lKQxi8czYu+wnjbTy5f/3jPecOTOGgoKR5AAwDcwDa8A6sKPxBfig9y4DFUaQM0Ab6AC9vxz22WXgNCPAEWDFubku8Aq4BhwDysAeDbs+DlwHVvXZ5HsvgMPDCqIFfNWNfAPuAftTfN8Cuw9sSmMDaBCZOWc2F4DxAbQOAYuO3iyRuCvDH7ouedK9CuzGCqYlIzOsBdCfcoKpEzCxk5y4FcoEmHFyphrCYMXJiZCUnJxph1gneqowE4RnXJWwB5zyKdyWqJXYWFhpNs8ln21HRwtYmnViUGyd6aq9seuBuaKZeUl8Xsv7kg+xeYlZ2xGbG/J+7ENsTWLWO8VmUt7vfIitSyxmfiRU5P3Zh9i2xMaIz155f89LIBt5ebQ++kx22xTF5qS8rQznovw+8iE2LTHbnsbmjbzP+XpOkxbFS6uQskXpAPt8iS5rZqyRi8UDeVpL740TEt0aQht/1Ld425khX/v0fpj2M3k9D2FQ1cLU03Y0FLflYSeTB0OZNJzDBzso8M0F5/DhLIGZdYKZ8fSYlfRLJEHs6sSGWMEkOWOHbP/KhJMT7rDS2yQCdSdnNlWa06wzZZXYLacx7PYJpkEEqk41S4xX1VpMajEd06jotZvqndybXlBiN4cZDDqyWUr5t4JtD572aUZ/F0ydiJR1UPAEeK8Suq3F7RPwFniom/rTtqAxCsH4wsp7p08wF8lRMC0yyFSegqn9D8E0yWgwO0UwGSkAc2SU885jdoeMU4v5d3ZBwa8Z+Ak4rhMJLuUtjQAAAABJRU5ErkJggg==", ib = () => /* @__PURE__ */ G.jsx("img", { src: rb }), sb = ({ handleShopSelect: r, visibleStores: n }) => {
  const [i, o] = Jn(""), [u, f] = Jn(!1), [l, h] = Jn([]), p = () => f(!u), m = pi(zf.debounce((v) => {
    const y = v.toLowerCase(), _ = n.filter(
      (C) => C.company.toLowerCase().includes(y) || C.address.toLowerCase().includes(y)
    );
    h(_);
  }, 500), [n]);
  return In(() => {
    m(i);
  }, [i, m]), In(() => () => m.cancel(), [m]), /* @__PURE__ */ G.jsxs("div", { className: "h-[60vh] lg:h-[80vh] border-1-2 border-gray-300 z-10 bg-white overflow-hidden pb-14", children: [
    /* @__PURE__ */ G.jsxs("div", { className: "w-full flex justify-between items-center border-b", children: [
      /* @__PURE__ */ G.jsxs("h2", { className: "block text-xl font-semibold py-4 ml-4", children: [
        "Shops ",
        /* @__PURE__ */ G.jsxs("span", { className: "text-xs text-gray-300", children: [
          "(",
          l.length,
          ")"
        ] })
      ] }),
      /* @__PURE__ */ G.jsx("div", { className: "p-2 bg-gray-100 mr-4 rounded-full cursor-pointer hover:bg-gray-200", onClick: p, children: /* @__PURE__ */ G.jsx("div", { className: "i-regular:search size-5 text-black", style: { transform: "rotateY(180deg)" }, children: /* @__PURE__ */ G.jsx(ib, { className: "w-5 h-5" }) }) })
    ] }),
    /* @__PURE__ */ G.jsx(vd, { children: u && /* @__PURE__ */ G.jsx(
      gd.div,
      {
        initial: { x: "100%" },
        animate: { x: 0 },
        exit: { x: "100%" },
        transition: { duration: 0.5, ease: "easeInOut" },
        className: "h-18 bg-white z-20",
        children: /* @__PURE__ */ G.jsx(
          "input",
          {
            type: "text",
            placeholder: "Search visible stores...",
            className: "border border-black border-l-8 py-3 pl-2 w-full focus:outline-none",
            value: i,
            onChange: (v) => o(v.target.value)
          }
        )
      }
    ) }),
    /* @__PURE__ */ G.jsx("ul", { className: "overflow-y-auto h-full scrollbar", children: l.map((v, y) => /* @__PURE__ */ G.jsx("div", { className: "cursor-pointer hover:bg-gray-100 pl-4", onClick: () => r(v), children: /* @__PURE__ */ G.jsx("div", { className: "py-4 border-b last:border-b-0 ", children: /* @__PURE__ */ G.jsxs("div", { className: "py-4 border-b last:border-b-0 ", children: [
      /* @__PURE__ */ G.jsx("div", { className: "font-semibold text-lg", children: v.company }),
      /* @__PURE__ */ G.jsxs("div", { className: "ml-1 text-sm text-gray-600 capitalize", children: [
        /* @__PURE__ */ G.jsx("span", { className: "text-black font-semibold", children: "Address:" }),
        " ",
        v.address,
        " ",
        v.state,
        " ",
        v.land,
        " ",
        v.postcode
      ] }),
      /* @__PURE__ */ G.jsxs("div", { className: "ml-1 text-sm text-gray-600", children: [
        /* @__PURE__ */ G.jsx("span", { className: "text-black font-semibold", children: "Phone:" }),
        " ",
        v.phone
      ] }),
      /* @__PURE__ */ G.jsxs("div", { className: "ml-1 text-sm text-gray-600", children: [
        /* @__PURE__ */ G.jsx("span", { className: "text-black font-semibold", children: "Email:" }),
        " ",
        /* @__PURE__ */ G.jsx("a", { href: `mailto:${v.email}`, className: "text-blue-600", children: v.email })
      ] }),
      /* @__PURE__ */ G.jsxs("div", { className: "ml-1 text-sm text-gray-600", children: [
        /* @__PURE__ */ G.jsx("span", { className: "text-black font-semibold", children: "Website:" }),
        " ",
        /* @__PURE__ */ G.jsx("a", { href: v.web, target: "_blank", rel: "noopener noreferrer", className: "text-blue-600", children: v.web })
      ] })
    ] }) }) }, y)) })
  ] });
}, ob = "data:image/png;base64,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", ab = () => /* @__PURE__ */ G.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", className: "i-regular:close size-4", children: [
  /* @__PURE__ */ G.jsx("style", { children: ".a{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}" }),
  /* @__PURE__ */ G.jsx("line", { className: "a", x1: "0.75", y1: "23.249", x2: "23.25", y2: "0.749" }),
  /* @__PURE__ */ G.jsx("line", { className: "a", x1: "23.25", y1: "23.249", x2: "0.75", y2: "0.749" })
] }), ub = ({ selectedShop: r, handleCloseDetail: n }) => /* @__PURE__ */ G.jsx(vd, { children: r && /* @__PURE__ */ G.jsxs(
  gd.div,
  {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
    transition: { duration: 0.5, ease: "easeInOut" },
    className: "absolute inset-0 h-full bg-white p-4 z-20 shadow-lg border-b-2 border-gray-300",
    children: [
      /* @__PURE__ */ G.jsxs("div", { className: "w-full flex justify-between", children: [
        /* @__PURE__ */ G.jsx("div", { className: "text-lg font-semibold ml-2 pt-2", children: "Shop" }),
        /* @__PURE__ */ G.jsx("div", { onClick: n, className: "cursor-pointer p-3 rounded-full bg-gray-100 hover:bg-gray-200 inline-flex justify-center items-center", children: /* @__PURE__ */ G.jsx(ab, { className: "w-4 h-4" }) })
      ] }),
      /* @__PURE__ */ G.jsxs("div", { className: "ml-2", children: [
        /* @__PURE__ */ G.jsx("h3", { className: "text-2xl font-semibold mt-4", children: r.company }),
        /* @__PURE__ */ G.jsxs("div", { className: "mt-12", children: [
          /* @__PURE__ */ G.jsxs("div", { className: "ml-1 text-sm text-gray-600 capitalize", children: [
            /* @__PURE__ */ G.jsx("span", { className: "text-black font-semibold", children: "Address:" }),
            " ",
            r.address,
            " ",
            r.state,
            " ",
            r.land,
            " ",
            r.postcode
          ] }),
          /* @__PURE__ */ G.jsxs("div", { className: "ml-1 text-sm text-gray-600", children: [
            /* @__PURE__ */ G.jsx("span", { className: "text-black font-semibold", children: "Phone: " }),
            " ",
            r.phone
          ] }),
          /* @__PURE__ */ G.jsxs("div", { className: "ml-1 text-sm text-gray-600", children: [
            /* @__PURE__ */ G.jsx("span", { className: "text-black font-semibold", children: "Email: " }),
            " ",
            /* @__PURE__ */ G.jsx("a", { href: `mailto:${r.email}`, className: "text-blue-600", children: r.email })
          ] }),
          /* @__PURE__ */ G.jsxs("div", { className: "ml-1 text-sm text-gray-600", children: [
            /* @__PURE__ */ G.jsx("span", { className: "text-black font-semibold", children: "Website: " }),
            " ",
            /* @__PURE__ */ G.jsx("a", { href: r.web, target: "_blank", rel: "noopener noreferrer", className: "text-blue-600", children: r.web })
          ] })
        ] }),
        /* @__PURE__ */ G.jsx("div", { className: "w-full h-12 flex justify-center items-center mt-12", children: /* @__PURE__ */ G.jsx("a", { href: r.mapsLink, target: "_blank", className: "flex justify-center items-center h-full", children: /* @__PURE__ */ G.jsx("img", { src: ob, alt: "Google Maps Logo", className: "block mr-4", width: 180, height: "auto" }) }) })
      ] })
    ]
  }
) }), hb = ({ locationsProp: r, apiKey: n, mapOptionsProp: i, iconPaths: o }) => {
  const [u, f] = Jn(r ?? []), [l, h] = Jn([]), [p, m] = Jn(null), v = (_) => m(_), y = () => m(null);
  return /* @__PURE__ */ G.jsxs("div", { className: "relative grid grid-cols-6 overflow-hidden", children: [
    /* @__PURE__ */ G.jsx(
      GA,
      {
        locations: u,
        setLocations: f,
        setVisibleStores: h,
        setSelectedShop: m,
        apiKey: n,
        mapOptionsProp: i,
        iconPaths: o
      }
    ),
    /* @__PURE__ */ G.jsxs("div", { className: "relative h-[60vh] lg:h-[80vh] col-span-6 lg:col-span-2", children: [
      /* @__PURE__ */ G.jsx(
        sb,
        {
          visibleStores: l,
          handleShopSelect: v
        }
      ),
      /* @__PURE__ */ G.jsx(
        ub,
        {
          selectedShop: p,
          handleCloseDetail: y
        }
      )
    ] })
  ] });
};
export {
  hb as default
};
