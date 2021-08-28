"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var a = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var a in e) {
      n.d(r, a, function (t) {
        return e[t];
      }.bind(null, a));
    }
    return r;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 3);
}([function (e, t, n) {
  var r;
  /*!
   * jQuery JavaScript Library v3.6.0
   * https://jquery.com/
   *
   * Includes Sizzle.js
   * https://sizzlejs.com/
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2021-03-02T17:08Z
   */

  !function (t, n) {
    "use strict";

    "object" == _typeof(e.exports) ? e.exports = t.document ? n(t, !0) : function (e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return n(e);
    } : n(t);
  }("undefined" != typeof window ? window : this, function (n, a) {
    "use strict";

    var i = [],
        s = Object.getPrototypeOf,
        o = i.slice,
        l = i.flat ? function (e) {
      return i.flat.call(e);
    } : function (e) {
      return i.concat.apply([], e);
    },
        d = i.push,
        u = i.indexOf,
        c = {},
        p = c.toString,
        f = c.hasOwnProperty,
        h = f.toString,
        v = h.call(Object),
        m = {},
        g = function g(e) {
      return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
    },
        y = function y(e) {
      return null != e && e === e.window;
    },
        b = n.document,
        w = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };

    function x(e, t, n) {
      var r,
          a,
          i = (n = n || b).createElement("script");
      if (i.text = e, t) for (r in w) {
        (a = t[r] || t.getAttribute && t.getAttribute(r)) && i.setAttribute(r, a);
      }
      n.head.appendChild(i).parentNode.removeChild(i);
    }

    function T(e) {
      return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? c[p.call(e)] || "object" : _typeof(e);
    }

    var E = function E(e, t) {
      return new E.fn.init(e, t);
    };

    function C(e) {
      var t = !!e && "length" in e && e.length,
          n = T(e);
      return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }

    E.fn = E.prototype = {
      jquery: "3.6.0",
      constructor: E,
      length: 0,
      toArray: function toArray() {
        return o.call(this);
      },
      get: function get(e) {
        return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
      },
      pushStack: function pushStack(e) {
        var t = E.merge(this.constructor(), e);
        return t.prevObject = this, t;
      },
      each: function each(e) {
        return E.each(this, e);
      },
      map: function map(e) {
        return this.pushStack(E.map(this, function (t, n) {
          return e.call(t, n, t);
        }));
      },
      slice: function slice() {
        return this.pushStack(o.apply(this, arguments));
      },
      first: function first() {
        return this.eq(0);
      },
      last: function last() {
        return this.eq(-1);
      },
      even: function even() {
        return this.pushStack(E.grep(this, function (e, t) {
          return (t + 1) % 2;
        }));
      },
      odd: function odd() {
        return this.pushStack(E.grep(this, function (e, t) {
          return t % 2;
        }));
      },
      eq: function eq(e) {
        var t = this.length,
            n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function end() {
        return this.prevObject || this.constructor();
      },
      push: d,
      sort: i.sort,
      splice: i.splice
    }, E.extend = E.fn.extend = function () {
      var e,
          t,
          n,
          r,
          a,
          i,
          s = arguments[0] || {},
          o = 1,
          l = arguments.length,
          d = !1;

      for ("boolean" == typeof s && (d = s, s = arguments[o] || {}, o++), "object" == _typeof(s) || g(s) || (s = {}), o === l && (s = this, o--); o < l; o++) {
        if (null != (e = arguments[o])) for (t in e) {
          r = e[t], "__proto__" !== t && s !== r && (d && r && (E.isPlainObject(r) || (a = Array.isArray(r))) ? (n = s[t], i = a && !Array.isArray(n) ? [] : a || E.isPlainObject(n) ? n : {}, a = !1, s[t] = E.extend(d, i, r)) : void 0 !== r && (s[t] = r));
        }
      }

      return s;
    }, E.extend({
      expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function error(e) {
        throw new Error(e);
      },
      noop: function noop() {},
      isPlainObject: function isPlainObject(e) {
        var t, n;
        return !(!e || "[object Object]" !== p.call(e)) && (!(t = s(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && h.call(n) === v);
      },
      isEmptyObject: function isEmptyObject(e) {
        var t;

        for (t in e) {
          return !1;
        }

        return !0;
      },
      globalEval: function globalEval(e, t, n) {
        x(e, {
          nonce: t && t.nonce
        }, n);
      },
      each: function each(e, t) {
        var n,
            r = 0;
        if (C(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) {
          ;
        } else for (r in e) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
        return e;
      },
      makeArray: function makeArray(e, t) {
        var n = t || [];
        return null != e && (C(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : d.call(n, e)), n;
      },
      inArray: function inArray(e, t, n) {
        return null == t ? -1 : u.call(t, e, n);
      },
      merge: function merge(e, t) {
        for (var n = +t.length, r = 0, a = e.length; r < n; r++) {
          e[a++] = t[r];
        }

        return e.length = a, e;
      },
      grep: function grep(e, t, n) {
        for (var r = [], a = 0, i = e.length, s = !n; a < i; a++) {
          !t(e[a], a) !== s && r.push(e[a]);
        }

        return r;
      },
      map: function map(e, t, n) {
        var r,
            a,
            i = 0,
            s = [];
        if (C(e)) for (r = e.length; i < r; i++) {
          null != (a = t(e[i], i, n)) && s.push(a);
        } else for (i in e) {
          null != (a = t(e[i], i, n)) && s.push(a);
        }
        return l(s);
      },
      guid: 1,
      support: m
    }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = i[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
      c["[object " + t + "]"] = t.toLowerCase();
    });

    var S =
    /*!
     * Sizzle CSS Selector Engine v2.3.6
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://js.foundation/
     *
     * Date: 2021-02-16
     */
    function (e) {
      var t,
          n,
          r,
          a,
          i,
          s,
          o,
          l,
          d,
          u,
          c,
          p,
          f,
          h,
          v,
          m,
          g,
          y,
          b,
          w = "sizzle" + 1 * new Date(),
          x = e.document,
          T = 0,
          E = 0,
          C = le(),
          S = le(),
          M = le(),
          k = le(),
          P = function P(e, t) {
        return e === t && (c = !0), 0;
      },
          L = {}.hasOwnProperty,
          A = [],
          z = A.pop,
          D = A.push,
          $ = A.push,
          O = A.slice,
          N = function N(e, t) {
        for (var n = 0, r = e.length; n < r; n++) {
          if (e[n] === t) return n;
        }

        return -1;
      },
          I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          j = "[\\x20\\t\\r\\n\\f]",
          H = "(?:\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
          q = "\\[" + j + "*(" + H + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + j + "*\\]",
          B = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
          R = new RegExp(j + "+", "g"),
          G = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
          _ = new RegExp("^" + j + "*," + j + "*"),
          W = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
          F = new RegExp(j + "|>"),
          X = new RegExp(B),
          Y = new RegExp("^" + H + "$"),
          V = {
        ID: new RegExp("^#(" + H + ")"),
        CLASS: new RegExp("^\\.(" + H + ")"),
        TAG: new RegExp("^(" + H + "|[*])"),
        ATTR: new RegExp("^" + q),
        PSEUDO: new RegExp("^" + B),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + I + ")$", "i"),
        needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i")
      },
          U = /HTML$/i,
          K = /^(?:input|select|textarea|button)$/i,
          Q = /^h\d$/i,
          J = /^[^{]+\{\s*\[native \w/,
          Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          ee = /[+~]/,
          te = new RegExp("\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\([^\\r\\n\\f])", "g"),
          ne = function ne(e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
      },
          re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          ae = function ae(e, t) {
        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
      },
          ie = function ie() {
        p();
      },
          se = we(function (e) {
        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
      }, {
        dir: "parentNode",
        next: "legend"
      });

      try {
        $.apply(A = O.call(x.childNodes), x.childNodes), A[x.childNodes.length].nodeType;
      } catch (e) {
        $ = {
          apply: A.length ? function (e, t) {
            D.apply(e, O.call(t));
          } : function (e, t) {
            for (var n = e.length, r = 0; e[n++] = t[r++];) {
              ;
            }

            e.length = n - 1;
          }
        };
      }

      function oe(e, t, r, a) {
        var i,
            o,
            d,
            u,
            c,
            h,
            g,
            y = t && t.ownerDocument,
            x = t ? t.nodeType : 9;
        if (r = r || [], "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x) return r;

        if (!a && (p(t), t = t || f, v)) {
          if (11 !== x && (c = Z.exec(e))) if (i = c[1]) {
            if (9 === x) {
              if (!(d = t.getElementById(i))) return r;
              if (d.id === i) return r.push(d), r;
            } else if (y && (d = y.getElementById(i)) && b(t, d) && d.id === i) return r.push(d), r;
          } else {
            if (c[2]) return $.apply(r, t.getElementsByTagName(e)), r;
            if ((i = c[3]) && n.getElementsByClassName && t.getElementsByClassName) return $.apply(r, t.getElementsByClassName(i)), r;
          }

          if (n.qsa && !k[e + " "] && (!m || !m.test(e)) && (1 !== x || "object" !== t.nodeName.toLowerCase())) {
            if (g = e, y = t, 1 === x && (F.test(e) || W.test(e))) {
              for ((y = ee.test(e) && ge(t.parentNode) || t) === t && n.scope || ((u = t.getAttribute("id")) ? u = u.replace(re, ae) : t.setAttribute("id", u = w)), o = (h = s(e)).length; o--;) {
                h[o] = (u ? "#" + u : ":scope") + " " + be(h[o]);
              }

              g = h.join(",");
            }

            try {
              return $.apply(r, y.querySelectorAll(g)), r;
            } catch (t) {
              k(e, !0);
            } finally {
              u === w && t.removeAttribute("id");
            }
          }
        }

        return l(e.replace(G, "$1"), t, r, a);
      }

      function le() {
        var e = [];
        return function t(n, a) {
          return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = a;
        };
      }

      function de(e) {
        return e[w] = !0, e;
      }

      function ue(e) {
        var t = f.createElement("fieldset");

        try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null;
        }
      }

      function ce(e, t) {
        for (var n = e.split("|"), a = n.length; a--;) {
          r.attrHandle[n[a]] = t;
        }
      }

      function pe(e, t) {
        var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
        if (r) return r;
        if (n) for (; n = n.nextSibling;) {
          if (n === t) return -1;
        }
        return e ? 1 : -1;
      }

      function fe(e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e;
        };
      }

      function he(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e;
        };
      }

      function ve(e) {
        return function (t) {
          return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e;
        };
      }

      function me(e) {
        return de(function (t) {
          return t = +t, de(function (n, r) {
            for (var a, i = e([], n.length, t), s = i.length; s--;) {
              n[a = i[s]] && (n[a] = !(r[a] = n[a]));
            }
          });
        });
      }

      function ge(e) {
        return e && void 0 !== e.getElementsByTagName && e;
      }

      for (t in n = oe.support = {}, i = oe.isXML = function (e) {
        var t = e && e.namespaceURI,
            n = e && (e.ownerDocument || e).documentElement;
        return !U.test(t || n && n.nodeName || "HTML");
      }, p = oe.setDocument = function (e) {
        var t,
            a,
            s = e ? e.ownerDocument || e : x;
        return s != f && 9 === s.nodeType && s.documentElement ? (h = (f = s).documentElement, v = !i(f), x != f && (a = f.defaultView) && a.top !== a && (a.addEventListener ? a.addEventListener("unload", ie, !1) : a.attachEvent && a.attachEvent("onunload", ie)), n.scope = ue(function (e) {
          return h.appendChild(e).appendChild(f.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
        }), n.attributes = ue(function (e) {
          return e.className = "i", !e.getAttribute("className");
        }), n.getElementsByTagName = ue(function (e) {
          return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length;
        }), n.getElementsByClassName = J.test(f.getElementsByClassName), n.getById = ue(function (e) {
          return h.appendChild(e).id = w, !f.getElementsByName || !f.getElementsByName(w).length;
        }), n.getById ? (r.filter.ID = function (e) {
          var t = e.replace(te, ne);
          return function (e) {
            return e.getAttribute("id") === t;
          };
        }, r.find.ID = function (e, t) {
          if (void 0 !== t.getElementById && v) {
            var n = t.getElementById(e);
            return n ? [n] : [];
          }
        }) : (r.filter.ID = function (e) {
          var t = e.replace(te, ne);
          return function (e) {
            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
            return n && n.value === t;
          };
        }, r.find.ID = function (e, t) {
          if (void 0 !== t.getElementById && v) {
            var n,
                r,
                a,
                i = t.getElementById(e);

            if (i) {
              if ((n = i.getAttributeNode("id")) && n.value === e) return [i];

              for (a = t.getElementsByName(e), r = 0; i = a[r++];) {
                if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
              }
            }

            return [];
          }
        }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
          return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
        } : function (e, t) {
          var n,
              r = [],
              a = 0,
              i = t.getElementsByTagName(e);

          if ("*" === e) {
            for (; n = i[a++];) {
              1 === n.nodeType && r.push(n);
            }

            return r;
          }

          return i;
        }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
          if (void 0 !== t.getElementsByClassName && v) return t.getElementsByClassName(e);
        }, g = [], m = [], (n.qsa = J.test(f.querySelectorAll)) && (ue(function (e) {
          var t;
          h.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + j + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + j + "*(?:value|" + I + ")"), e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), (t = f.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || m.push("\\[" + j + "*name" + j + "*=" + j + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]"), e.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]");
        }), ue(function (e) {
          e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
          var t = f.createElement("input");
          t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + j + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:");
        })), (n.matchesSelector = J.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
          n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), g.push("!=", B);
        }), m = m.length && new RegExp(m.join("|")), g = g.length && new RegExp(g.join("|")), t = J.test(h.compareDocumentPosition), b = t || J.test(h.contains) ? function (e, t) {
          var n = 9 === e.nodeType ? e.documentElement : e,
              r = t && t.parentNode;
          return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
        } : function (e, t) {
          if (t) for (; t = t.parentNode;) {
            if (t === e) return !0;
          }
          return !1;
        }, P = t ? function (e, t) {
          if (e === t) return c = !0, 0;
          var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
          return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == f || e.ownerDocument == x && b(x, e) ? -1 : t == f || t.ownerDocument == x && b(x, t) ? 1 : u ? N(u, e) - N(u, t) : 0 : 4 & r ? -1 : 1);
        } : function (e, t) {
          if (e === t) return c = !0, 0;
          var n,
              r = 0,
              a = e.parentNode,
              i = t.parentNode,
              s = [e],
              o = [t];
          if (!a || !i) return e == f ? -1 : t == f ? 1 : a ? -1 : i ? 1 : u ? N(u, e) - N(u, t) : 0;
          if (a === i) return pe(e, t);

          for (n = e; n = n.parentNode;) {
            s.unshift(n);
          }

          for (n = t; n = n.parentNode;) {
            o.unshift(n);
          }

          for (; s[r] === o[r];) {
            r++;
          }

          return r ? pe(s[r], o[r]) : s[r] == x ? -1 : o[r] == x ? 1 : 0;
        }, f) : f;
      }, oe.matches = function (e, t) {
        return oe(e, null, null, t);
      }, oe.matchesSelector = function (e, t) {
        if (p(e), n.matchesSelector && v && !k[t + " "] && (!g || !g.test(t)) && (!m || !m.test(t))) try {
          var r = y.call(e, t);
          if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
        } catch (e) {
          k(t, !0);
        }
        return oe(t, f, null, [e]).length > 0;
      }, oe.contains = function (e, t) {
        return (e.ownerDocument || e) != f && p(e), b(e, t);
      }, oe.attr = function (e, t) {
        (e.ownerDocument || e) != f && p(e);
        var a = r.attrHandle[t.toLowerCase()],
            i = a && L.call(r.attrHandle, t.toLowerCase()) ? a(e, t, !v) : void 0;
        return void 0 !== i ? i : n.attributes || !v ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
      }, oe.escape = function (e) {
        return (e + "").replace(re, ae);
      }, oe.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }, oe.uniqueSort = function (e) {
        var t,
            r = [],
            a = 0,
            i = 0;

        if (c = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(P), c) {
          for (; t = e[i++];) {
            t === e[i] && (a = r.push(i));
          }

          for (; a--;) {
            e.splice(r[a], 1);
          }
        }

        return u = null, e;
      }, a = oe.getText = function (e) {
        var t,
            n = "",
            r = 0,
            i = e.nodeType;

        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;

            for (e = e.firstChild; e; e = e.nextSibling) {
              n += a(e);
            }
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else for (; t = e[r++];) {
          n += a(t);
        }

        return n;
      }, (r = oe.selectors = {
        cacheLength: 50,
        createPseudo: de,
        match: V,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function ATTR(e) {
            return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
          },
          CHILD: function CHILD(e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e;
          },
          PSEUDO: function PSEUDO(e) {
            var t,
                n = !e[6] && e[2];
            return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
          }
        },
        filter: {
          TAG: function TAG(e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e ? function () {
              return !0;
            } : function (e) {
              return e.nodeName && e.nodeName.toLowerCase() === t;
            };
          },
          CLASS: function CLASS(e) {
            var t = C[e + " "];
            return t || (t = new RegExp("(^|" + j + ")" + e + "(" + j + "|$)")) && C(e, function (e) {
              return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
            });
          },
          ATTR: function ATTR(e, t, n) {
            return function (r) {
              var a = oe.attr(r, e);
              return null == a ? "!=" === t : !t || (a += "", "=" === t ? a === n : "!=" === t ? a !== n : "^=" === t ? n && 0 === a.indexOf(n) : "*=" === t ? n && a.indexOf(n) > -1 : "$=" === t ? n && a.slice(-n.length) === n : "~=" === t ? (" " + a.replace(R, " ") + " ").indexOf(n) > -1 : "|=" === t && (a === n || a.slice(0, n.length + 1) === n + "-"));
            };
          },
          CHILD: function CHILD(e, t, n, r, a) {
            var i = "nth" !== e.slice(0, 3),
                s = "last" !== e.slice(-4),
                o = "of-type" === t;
            return 1 === r && 0 === a ? function (e) {
              return !!e.parentNode;
            } : function (t, n, l) {
              var d,
                  u,
                  c,
                  p,
                  f,
                  h,
                  v = i !== s ? "nextSibling" : "previousSibling",
                  m = t.parentNode,
                  g = o && t.nodeName.toLowerCase(),
                  y = !l && !o,
                  b = !1;

              if (m) {
                if (i) {
                  for (; v;) {
                    for (p = t; p = p[v];) {
                      if (o ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) return !1;
                    }

                    h = v = "only" === e && !h && "nextSibling";
                  }

                  return !0;
                }

                if (h = [s ? m.firstChild : m.lastChild], s && y) {
                  for (b = (f = (d = (u = (c = (p = m)[w] || (p[w] = {}))[p.uniqueID] || (c[p.uniqueID] = {}))[e] || [])[0] === T && d[1]) && d[2], p = f && m.childNodes[f]; p = ++f && p && p[v] || (b = f = 0) || h.pop();) {
                    if (1 === p.nodeType && ++b && p === t) {
                      u[e] = [T, f, b];
                      break;
                    }
                  }
                } else if (y && (b = f = (d = (u = (c = (p = t)[w] || (p[w] = {}))[p.uniqueID] || (c[p.uniqueID] = {}))[e] || [])[0] === T && d[1]), !1 === b) for (; (p = ++f && p && p[v] || (b = f = 0) || h.pop()) && ((o ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++b || (y && ((u = (c = p[w] || (p[w] = {}))[p.uniqueID] || (c[p.uniqueID] = {}))[e] = [T, b]), p !== t));) {
                  ;
                }

                return (b -= a) === r || b % r == 0 && b / r >= 0;
              }
            };
          },
          PSEUDO: function PSEUDO(e, t) {
            var n,
                a = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
            return a[w] ? a(t) : a.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? de(function (e, n) {
              for (var r, i = a(e, t), s = i.length; s--;) {
                e[r = N(e, i[s])] = !(n[r] = i[s]);
              }
            }) : function (e) {
              return a(e, 0, n);
            }) : a;
          }
        },
        pseudos: {
          not: de(function (e) {
            var t = [],
                n = [],
                r = o(e.replace(G, "$1"));
            return r[w] ? de(function (e, t, n, a) {
              for (var i, s = r(e, null, a, []), o = e.length; o--;) {
                (i = s[o]) && (e[o] = !(t[o] = i));
              }
            }) : function (e, a, i) {
              return t[0] = e, r(t, null, i, n), t[0] = null, !n.pop();
            };
          }),
          has: de(function (e) {
            return function (t) {
              return oe(e, t).length > 0;
            };
          }),
          contains: de(function (e) {
            return e = e.replace(te, ne), function (t) {
              return (t.textContent || a(t)).indexOf(e) > -1;
            };
          }),
          lang: de(function (e) {
            return Y.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), function (t) {
              var n;

              do {
                if (n = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
              } while ((t = t.parentNode) && 1 === t.nodeType);

              return !1;
            };
          }),
          target: function target(t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function root(e) {
            return e === h;
          },
          focus: function focus(e) {
            return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
          },
          enabled: ve(!1),
          disabled: ve(!0),
          checked: function checked(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && !!e.checked || "option" === t && !!e.selected;
          },
          selected: function selected(e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
          },
          empty: function empty(e) {
            for (e = e.firstChild; e; e = e.nextSibling) {
              if (e.nodeType < 6) return !1;
            }

            return !0;
          },
          parent: function parent(e) {
            return !r.pseudos.empty(e);
          },
          header: function header(e) {
            return Q.test(e.nodeName);
          },
          input: function input(e) {
            return K.test(e.nodeName);
          },
          button: function button(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t;
          },
          text: function text(e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
          },
          first: me(function () {
            return [0];
          }),
          last: me(function (e, t) {
            return [t - 1];
          }),
          eq: me(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: me(function (e, t) {
            for (var n = 0; n < t; n += 2) {
              e.push(n);
            }

            return e;
          }),
          odd: me(function (e, t) {
            for (var n = 1; n < t; n += 2) {
              e.push(n);
            }

            return e;
          }),
          lt: me(function (e, t, n) {
            for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) {
              e.push(r);
            }

            return e;
          }),
          gt: me(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t;) {
              e.push(r);
            }

            return e;
          })
        }
      }).pseudos.nth = r.pseudos.eq, {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) {
        r.pseudos[t] = fe(t);
      }

      for (t in {
        submit: !0,
        reset: !0
      }) {
        r.pseudos[t] = he(t);
      }

      function ye() {}

      function be(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) {
          r += e[t].value;
        }

        return r;
      }

      function we(e, t, n) {
        var r = t.dir,
            a = t.next,
            i = a || r,
            s = n && "parentNode" === i,
            o = E++;
        return t.first ? function (t, n, a) {
          for (; t = t[r];) {
            if (1 === t.nodeType || s) return e(t, n, a);
          }

          return !1;
        } : function (t, n, l) {
          var d,
              u,
              c,
              p = [T, o];

          if (l) {
            for (; t = t[r];) {
              if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
            }
          } else for (; t = t[r];) {
            if (1 === t.nodeType || s) if (u = (c = t[w] || (t[w] = {}))[t.uniqueID] || (c[t.uniqueID] = {}), a && a === t.nodeName.toLowerCase()) t = t[r] || t;else {
              if ((d = u[i]) && d[0] === T && d[1] === o) return p[2] = d[2];
              if (u[i] = p, p[2] = e(t, n, l)) return !0;
            }
          }

          return !1;
        };
      }

      function xe(e) {
        return e.length > 1 ? function (t, n, r) {
          for (var a = e.length; a--;) {
            if (!e[a](t, n, r)) return !1;
          }

          return !0;
        } : e[0];
      }

      function Te(e, t, n, r, a) {
        for (var i, s = [], o = 0, l = e.length, d = null != t; o < l; o++) {
          (i = e[o]) && (n && !n(i, r, a) || (s.push(i), d && t.push(o)));
        }

        return s;
      }

      function Ee(e, t, n, r, a, i) {
        return r && !r[w] && (r = Ee(r)), a && !a[w] && (a = Ee(a, i)), de(function (i, s, o, l) {
          var d,
              u,
              c,
              p = [],
              f = [],
              h = s.length,
              v = i || function (e, t, n) {
            for (var r = 0, a = t.length; r < a; r++) {
              oe(e, t[r], n);
            }

            return n;
          }(t || "*", o.nodeType ? [o] : o, []),
              m = !e || !i && t ? v : Te(v, p, e, o, l),
              g = n ? a || (i ? e : h || r) ? [] : s : m;

          if (n && n(m, g, o, l), r) for (d = Te(g, f), r(d, [], o, l), u = d.length; u--;) {
            (c = d[u]) && (g[f[u]] = !(m[f[u]] = c));
          }

          if (i) {
            if (a || e) {
              if (a) {
                for (d = [], u = g.length; u--;) {
                  (c = g[u]) && d.push(m[u] = c);
                }

                a(null, g = [], d, l);
              }

              for (u = g.length; u--;) {
                (c = g[u]) && (d = a ? N(i, c) : p[u]) > -1 && (i[d] = !(s[d] = c));
              }
            }
          } else g = Te(g === s ? g.splice(h, g.length) : g), a ? a(null, s, g, l) : $.apply(s, g);
        });
      }

      function Ce(e) {
        for (var t, n, a, i = e.length, s = r.relative[e[0].type], o = s || r.relative[" "], l = s ? 1 : 0, u = we(function (e) {
          return e === t;
        }, o, !0), c = we(function (e) {
          return N(t, e) > -1;
        }, o, !0), p = [function (e, n, r) {
          var a = !s && (r || n !== d) || ((t = n).nodeType ? u(e, n, r) : c(e, n, r));
          return t = null, a;
        }]; l < i; l++) {
          if (n = r.relative[e[l].type]) p = [we(xe(p), n)];else {
            if ((n = r.filter[e[l].type].apply(null, e[l].matches))[w]) {
              for (a = ++l; a < i && !r.relative[e[a].type]; a++) {
                ;
              }

              return Ee(l > 1 && xe(p), l > 1 && be(e.slice(0, l - 1).concat({
                value: " " === e[l - 2].type ? "*" : ""
              })).replace(G, "$1"), n, l < a && Ce(e.slice(l, a)), a < i && Ce(e = e.slice(a)), a < i && be(e));
            }

            p.push(n);
          }
        }

        return xe(p);
      }

      return ye.prototype = r.filters = r.pseudos, r.setFilters = new ye(), s = oe.tokenize = function (e, t) {
        var n,
            a,
            i,
            s,
            o,
            l,
            d,
            u = S[e + " "];
        if (u) return t ? 0 : u.slice(0);

        for (o = e, l = [], d = r.preFilter; o;) {
          for (s in n && !(a = _.exec(o)) || (a && (o = o.slice(a[0].length) || o), l.push(i = [])), n = !1, (a = W.exec(o)) && (n = a.shift(), i.push({
            value: n,
            type: a[0].replace(G, " ")
          }), o = o.slice(n.length)), r.filter) {
            !(a = V[s].exec(o)) || d[s] && !(a = d[s](a)) || (n = a.shift(), i.push({
              value: n,
              type: s,
              matches: a
            }), o = o.slice(n.length));
          }

          if (!n) break;
        }

        return t ? o.length : o ? oe.error(e) : S(e, l).slice(0);
      }, o = oe.compile = function (e, t) {
        var n,
            a = [],
            i = [],
            o = M[e + " "];

        if (!o) {
          for (t || (t = s(e)), n = t.length; n--;) {
            (o = Ce(t[n]))[w] ? a.push(o) : i.push(o);
          }

          (o = M(e, function (e, t) {
            var n = t.length > 0,
                a = e.length > 0,
                i = function i(_i, s, o, l, u) {
              var c,
                  h,
                  m,
                  g = 0,
                  y = "0",
                  b = _i && [],
                  w = [],
                  x = d,
                  E = _i || a && r.find.TAG("*", u),
                  C = T += null == x ? 1 : Math.random() || .1,
                  S = E.length;

              for (u && (d = s == f || s || u); y !== S && null != (c = E[y]); y++) {
                if (a && c) {
                  for (h = 0, s || c.ownerDocument == f || (p(c), o = !v); m = e[h++];) {
                    if (m(c, s || f, o)) {
                      l.push(c);
                      break;
                    }
                  }

                  u && (T = C);
                }

                n && ((c = !m && c) && g--, _i && b.push(c));
              }

              if (g += y, n && y !== g) {
                for (h = 0; m = t[h++];) {
                  m(b, w, s, o);
                }

                if (_i) {
                  if (g > 0) for (; y--;) {
                    b[y] || w[y] || (w[y] = z.call(l));
                  }
                  w = Te(w);
                }

                $.apply(l, w), u && !_i && w.length > 0 && g + t.length > 1 && oe.uniqueSort(l);
              }

              return u && (T = C, d = x), b;
            };

            return n ? de(i) : i;
          }(i, a))).selector = e;
        }

        return o;
      }, l = oe.select = function (e, t, n, a) {
        var i,
            l,
            d,
            u,
            c,
            p = "function" == typeof e && e,
            f = !a && s(e = p.selector || e);

        if (n = n || [], 1 === f.length) {
          if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (d = l[0]).type && 9 === t.nodeType && v && r.relative[l[1].type]) {
            if (!(t = (r.find.ID(d.matches[0].replace(te, ne), t) || [])[0])) return n;
            p && (t = t.parentNode), e = e.slice(l.shift().value.length);
          }

          for (i = V.needsContext.test(e) ? 0 : l.length; i-- && (d = l[i], !r.relative[u = d.type]);) {
            if ((c = r.find[u]) && (a = c(d.matches[0].replace(te, ne), ee.test(l[0].type) && ge(t.parentNode) || t))) {
              if (l.splice(i, 1), !(e = a.length && be(l))) return $.apply(n, a), n;
              break;
            }
          }
        }

        return (p || o(e, f))(a, t, !v, n, !t || ee.test(e) && ge(t.parentNode) || t), n;
      }, n.sortStable = w.split("").sort(P).join("") === w, n.detectDuplicates = !!c, p(), n.sortDetached = ue(function (e) {
        return 1 & e.compareDocumentPosition(f.createElement("fieldset"));
      }), ue(function (e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
      }) || ce("type|href|height|width", function (e, t, n) {
        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
      }), n.attributes && ue(function (e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
      }) || ce("value", function (e, t, n) {
        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
      }), ue(function (e) {
        return null == e.getAttribute("disabled");
      }) || ce(I, function (e, t, n) {
        var r;
        if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
      }), oe;
    }(n);

    E.find = S, E.expr = S.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = S.uniqueSort, E.text = S.getText, E.isXMLDoc = S.isXML, E.contains = S.contains, E.escapeSelector = S.escape;

    var M = function M(e, t, n) {
      for (var r = [], a = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
        if (1 === e.nodeType) {
          if (a && E(e).is(n)) break;
          r.push(e);
        }
      }

      return r;
    },
        k = function k(e, t) {
      for (var n = []; e; e = e.nextSibling) {
        1 === e.nodeType && e !== t && n.push(e);
      }

      return n;
    },
        P = E.expr.match.needsContext;

    function L(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }

    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function z(e, t, n) {
      return g(t) ? E.grep(e, function (e, r) {
        return !!t.call(e, r, e) !== n;
      }) : t.nodeType ? E.grep(e, function (e) {
        return e === t !== n;
      }) : "string" != typeof t ? E.grep(e, function (e) {
        return u.call(t, e) > -1 !== n;
      }) : E.filter(t, e, n);
    }

    E.filter = function (e, t, n) {
      var r = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t, function (e) {
        return 1 === e.nodeType;
      }));
    }, E.fn.extend({
      find: function find(e) {
        var t,
            n,
            r = this.length,
            a = this;
        if ("string" != typeof e) return this.pushStack(E(e).filter(function () {
          for (t = 0; t < r; t++) {
            if (E.contains(a[t], this)) return !0;
          }
        }));

        for (n = this.pushStack([]), t = 0; t < r; t++) {
          E.find(e, a[t], n);
        }

        return r > 1 ? E.uniqueSort(n) : n;
      },
      filter: function filter(e) {
        return this.pushStack(z(this, e || [], !1));
      },
      not: function not(e) {
        return this.pushStack(z(this, e || [], !0));
      },
      is: function is(e) {
        return !!z(this, "string" == typeof e && P.test(e) ? E(e) : e || [], !1).length;
      }
    });
    var D,
        $ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (E.fn.init = function (e, t, n) {
      var r, a;
      if (!e) return this;

      if (n = n || D, "string" == typeof e) {
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : $.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

        if (r[1]) {
          if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), A.test(r[1]) && E.isPlainObject(t)) for (r in t) {
            g(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          }
          return this;
        }

        return (a = b.getElementById(r[2])) && (this[0] = a, this.length = 1), this;
      }

      return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this);
    }).prototype = E.fn, D = E(b);
    var O = /^(?:parents|prev(?:Until|All))/,
        N = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };

    function I(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType;) {
        ;
      }

      return e;
    }

    E.fn.extend({
      has: function has(e) {
        var t = E(e, this),
            n = t.length;
        return this.filter(function () {
          for (var e = 0; e < n; e++) {
            if (E.contains(this, t[e])) return !0;
          }
        });
      },
      closest: function closest(e, t) {
        var n,
            r = 0,
            a = this.length,
            i = [],
            s = "string" != typeof e && E(e);
        if (!P.test(e)) for (; r < a; r++) {
          for (n = this[r]; n && n !== t; n = n.parentNode) {
            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
              i.push(n);
              break;
            }
          }
        }
        return this.pushStack(i.length > 1 ? E.uniqueSort(i) : i);
      },
      index: function index(e) {
        return e ? "string" == typeof e ? u.call(E(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      },
      add: function add(e, t) {
        return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
      },
      addBack: function addBack(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
      }
    }), E.each({
      parent: function parent(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null;
      },
      parents: function parents(e) {
        return M(e, "parentNode");
      },
      parentsUntil: function parentsUntil(e, t, n) {
        return M(e, "parentNode", n);
      },
      next: function next(e) {
        return I(e, "nextSibling");
      },
      prev: function prev(e) {
        return I(e, "previousSibling");
      },
      nextAll: function nextAll(e) {
        return M(e, "nextSibling");
      },
      prevAll: function prevAll(e) {
        return M(e, "previousSibling");
      },
      nextUntil: function nextUntil(e, t, n) {
        return M(e, "nextSibling", n);
      },
      prevUntil: function prevUntil(e, t, n) {
        return M(e, "previousSibling", n);
      },
      siblings: function siblings(e) {
        return k((e.parentNode || {}).firstChild, e);
      },
      children: function children(e) {
        return k(e.firstChild);
      },
      contents: function contents(e) {
        return null != e.contentDocument && s(e.contentDocument) ? e.contentDocument : (L(e, "template") && (e = e.content || e), E.merge([], e.childNodes));
      }
    }, function (e, t) {
      E.fn[e] = function (n, r) {
        var a = E.map(this, t, n);
        return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (a = E.filter(r, a)), this.length > 1 && (N[e] || E.uniqueSort(a), O.test(e) && a.reverse()), this.pushStack(a);
      };
    });
    var j = /[^\x20\t\r\n\f]+/g;

    function H(e) {
      return e;
    }

    function q(e) {
      throw e;
    }

    function B(e, t, n, r) {
      var a;

      try {
        e && g(a = e.promise) ? a.call(e).done(t).fail(n) : e && g(a = e.then) ? a.call(e, t, n) : t.apply(void 0, [e].slice(r));
      } catch (e) {
        n.apply(void 0, [e]);
      }
    }

    E.Callbacks = function (e) {
      e = "string" == typeof e ? function (e) {
        var t = {};
        return E.each(e.match(j) || [], function (e, n) {
          t[n] = !0;
        }), t;
      }(e) : E.extend({}, e);

      var t,
          n,
          r,
          a,
          i = [],
          s = [],
          o = -1,
          l = function l() {
        for (a = a || e.once, r = t = !0; s.length; o = -1) {
          for (n = s.shift(); ++o < i.length;) {
            !1 === i[o].apply(n[0], n[1]) && e.stopOnFalse && (o = i.length, n = !1);
          }
        }

        e.memory || (n = !1), t = !1, a && (i = n ? [] : "");
      },
          d = {
        add: function add() {
          return i && (n && !t && (o = i.length - 1, s.push(n)), function t(n) {
            E.each(n, function (n, r) {
              g(r) ? e.unique && d.has(r) || i.push(r) : r && r.length && "string" !== T(r) && t(r);
            });
          }(arguments), n && !t && l()), this;
        },
        remove: function remove() {
          return E.each(arguments, function (e, t) {
            for (var n; (n = E.inArray(t, i, n)) > -1;) {
              i.splice(n, 1), n <= o && o--;
            }
          }), this;
        },
        has: function has(e) {
          return e ? E.inArray(e, i) > -1 : i.length > 0;
        },
        empty: function empty() {
          return i && (i = []), this;
        },
        disable: function disable() {
          return a = s = [], i = n = "", this;
        },
        disabled: function disabled() {
          return !i;
        },
        lock: function lock() {
          return a = s = [], n || t || (i = n = ""), this;
        },
        locked: function locked() {
          return !!a;
        },
        fireWith: function fireWith(e, n) {
          return a || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this;
        },
        fire: function fire() {
          return d.fireWith(this, arguments), this;
        },
        fired: function fired() {
          return !!r;
        }
      };

      return d;
    }, E.extend({
      Deferred: function Deferred(e) {
        var t = [["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2], ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]],
            r = "pending",
            a = {
          state: function state() {
            return r;
          },
          always: function always() {
            return i.done(arguments).fail(arguments), this;
          },
          "catch": function _catch(e) {
            return a.then(null, e);
          },
          pipe: function pipe() {
            var e = arguments;
            return E.Deferred(function (n) {
              E.each(t, function (t, r) {
                var a = g(e[r[4]]) && e[r[4]];
                i[r[1]](function () {
                  var e = a && a.apply(this, arguments);
                  e && g(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, a ? [e] : arguments);
                });
              }), e = null;
            }).promise();
          },
          then: function then(e, r, a) {
            var i = 0;

            function s(e, t, r, a) {
              return function () {
                var o = this,
                    l = arguments,
                    d = function d() {
                  var n, d;

                  if (!(e < i)) {
                    if ((n = r.apply(o, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                    d = n && ("object" == _typeof(n) || "function" == typeof n) && n.then, g(d) ? a ? d.call(n, s(i, t, H, a), s(i, t, q, a)) : (i++, d.call(n, s(i, t, H, a), s(i, t, q, a), s(i, t, H, t.notifyWith))) : (r !== H && (o = void 0, l = [n]), (a || t.resolveWith)(o, l));
                  }
                },
                    u = a ? d : function () {
                  try {
                    d();
                  } catch (n) {
                    E.Deferred.exceptionHook && E.Deferred.exceptionHook(n, u.stackTrace), e + 1 >= i && (r !== q && (o = void 0, l = [n]), t.rejectWith(o, l));
                  }
                };

                e ? u() : (E.Deferred.getStackHook && (u.stackTrace = E.Deferred.getStackHook()), n.setTimeout(u));
              };
            }

            return E.Deferred(function (n) {
              t[0][3].add(s(0, n, g(a) ? a : H, n.notifyWith)), t[1][3].add(s(0, n, g(e) ? e : H)), t[2][3].add(s(0, n, g(r) ? r : q));
            }).promise();
          },
          promise: function promise(e) {
            return null != e ? E.extend(e, a) : a;
          }
        },
            i = {};
        return E.each(t, function (e, n) {
          var s = n[2],
              o = n[5];
          a[n[1]] = s.add, o && s.add(function () {
            r = o;
          }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), s.add(n[3].fire), i[n[0]] = function () {
            return i[n[0] + "With"](this === i ? void 0 : this, arguments), this;
          }, i[n[0] + "With"] = s.fireWith;
        }), a.promise(i), e && e.call(i, i), i;
      },
      when: function when(e) {
        var t = arguments.length,
            n = t,
            r = Array(n),
            a = o.call(arguments),
            i = E.Deferred(),
            s = function s(e) {
          return function (n) {
            r[e] = this, a[e] = arguments.length > 1 ? o.call(arguments) : n, --t || i.resolveWith(r, a);
          };
        };

        if (t <= 1 && (B(e, i.done(s(n)).resolve, i.reject, !t), "pending" === i.state() || g(a[n] && a[n].then))) return i.then();

        for (; n--;) {
          B(a[n], s(n), i.reject);
        }

        return i.promise();
      }
    });
    var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    E.Deferred.exceptionHook = function (e, t) {
      n.console && n.console.warn && e && R.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }, E.readyException = function (e) {
      n.setTimeout(function () {
        throw e;
      });
    };
    var G = E.Deferred();

    function _() {
      b.removeEventListener("DOMContentLoaded", _), n.removeEventListener("load", _), E.ready();
    }

    E.fn.ready = function (e) {
      return G.then(e)["catch"](function (e) {
        E.readyException(e);
      }), this;
    }, E.extend({
      isReady: !1,
      readyWait: 1,
      ready: function ready(e) {
        (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0, !0 !== e && --E.readyWait > 0 || G.resolveWith(b, [E]));
      }
    }), E.ready.then = G.then, "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? n.setTimeout(E.ready) : (b.addEventListener("DOMContentLoaded", _), n.addEventListener("load", _));

    var W = function W(e, t, n, r, a, i, s) {
      var o = 0,
          l = e.length,
          d = null == n;
      if ("object" === T(n)) for (o in a = !0, n) {
        W(e, t, o, n[o], !0, i, s);
      } else if (void 0 !== r && (a = !0, g(r) || (s = !0), d && (s ? (t.call(e, r), t = null) : (d = t, t = function t(e, _t2, n) {
        return d.call(E(e), n);
      })), t)) for (; o < l; o++) {
        t(e[o], n, s ? r : r.call(e[o], o, t(e[o], n)));
      }
      return a ? e : d ? t.call(e) : l ? t(e[0], n) : i;
    },
        F = /^-ms-/,
        X = /-([a-z])/g;

    function Y(e, t) {
      return t.toUpperCase();
    }

    function V(e) {
      return e.replace(F, "ms-").replace(X, Y);
    }

    var U = function U(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };

    function K() {
      this.expando = E.expando + K.uid++;
    }

    K.uid = 1, K.prototype = {
      cache: function cache(e) {
        var t = e[this.expando];
        return t || (t = {}, U(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
          value: t,
          configurable: !0
        }))), t;
      },
      set: function set(e, t, n) {
        var r,
            a = this.cache(e);
        if ("string" == typeof t) a[V(t)] = n;else for (r in t) {
          a[V(r)] = t[r];
        }
        return a;
      },
      get: function get(e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
      },
      access: function access(e, t, n) {
        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function remove(e, t) {
        var n,
            r = e[this.expando];

        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(j) || []).length;

            for (; n--;) {
              delete r[t[n]];
            }
          }

          (void 0 === t || E.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
        }
      },
      hasData: function hasData(e) {
        var t = e[this.expando];
        return void 0 !== t && !E.isEmptyObject(t);
      }
    };
    var Q = new K(),
        J = new K(),
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;

    function te(e, t, n) {
      var r;
      if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
        try {
          n = function (e) {
            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e);
          }(n);
        } catch (e) {}

        J.set(e, t, n);
      } else n = void 0;
      return n;
    }

    E.extend({
      hasData: function hasData(e) {
        return J.hasData(e) || Q.hasData(e);
      },
      data: function data(e, t, n) {
        return J.access(e, t, n);
      },
      removeData: function removeData(e, t) {
        J.remove(e, t);
      },
      _data: function _data(e, t, n) {
        return Q.access(e, t, n);
      },
      _removeData: function _removeData(e, t) {
        Q.remove(e, t);
      }
    }), E.fn.extend({
      data: function data(e, t) {
        var n,
            r,
            a,
            i = this[0],
            s = i && i.attributes;

        if (void 0 === e) {
          if (this.length && (a = J.get(i), 1 === i.nodeType && !Q.get(i, "hasDataAttrs"))) {
            for (n = s.length; n--;) {
              s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = V(r.slice(5)), te(i, r, a[r]));
            }

            Q.set(i, "hasDataAttrs", !0);
          }

          return a;
        }

        return "object" == _typeof(e) ? this.each(function () {
          J.set(this, e);
        }) : W(this, function (t) {
          var n;
          if (i && void 0 === t) return void 0 !== (n = J.get(i, e)) || void 0 !== (n = te(i, e)) ? n : void 0;
          this.each(function () {
            J.set(this, e, t);
          });
        }, null, t, arguments.length > 1, null, !0);
      },
      removeData: function removeData(e) {
        return this.each(function () {
          J.remove(this, e);
        });
      }
    }), E.extend({
      queue: function queue(e, t, n) {
        var r;
        if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, E.makeArray(n)) : r.push(n)), r || [];
      },
      dequeue: function dequeue(e, t) {
        t = t || "fx";

        var n = E.queue(e, t),
            r = n.length,
            a = n.shift(),
            i = E._queueHooks(e, t);

        "inprogress" === a && (a = n.shift(), r--), a && ("fx" === t && n.unshift("inprogress"), delete i.stop, a.call(e, function () {
          E.dequeue(e, t);
        }, i)), !r && i && i.empty.fire();
      },
      _queueHooks: function _queueHooks(e, t) {
        var n = t + "queueHooks";
        return Q.get(e, n) || Q.access(e, n, {
          empty: E.Callbacks("once memory").add(function () {
            Q.remove(e, [t + "queue", n]);
          })
        });
      }
    }), E.fn.extend({
      queue: function queue(e, t) {
        var n = 2;
        return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? E.queue(this[0], e) : void 0 === t ? this : this.each(function () {
          var n = E.queue(this, e, t);
          E._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && E.dequeue(this, e);
        });
      },
      dequeue: function dequeue(e) {
        return this.each(function () {
          E.dequeue(this, e);
        });
      },
      clearQueue: function clearQueue(e) {
        return this.queue(e || "fx", []);
      },
      promise: function promise(e, t) {
        var n,
            r = 1,
            a = E.Deferred(),
            i = this,
            s = this.length,
            o = function o() {
          --r || a.resolveWith(i, [i]);
        };

        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) {
          (n = Q.get(i[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(o));
        }

        return o(), a.promise(t);
      }
    });

    var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        re = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
        ae = ["Top", "Right", "Bottom", "Left"],
        ie = b.documentElement,
        se = function se(e) {
      return E.contains(e.ownerDocument, e);
    },
        oe = {
      composed: !0
    };

    ie.getRootNode && (se = function se(e) {
      return E.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
    });

    var le = function le(e, t) {
      return "none" === (e = t || e).style.display || "" === e.style.display && se(e) && "none" === E.css(e, "display");
    };

    function de(e, t, n, r) {
      var a,
          i,
          s = 20,
          o = r ? function () {
        return r.cur();
      } : function () {
        return E.css(e, t, "");
      },
          l = o(),
          d = n && n[3] || (E.cssNumber[t] ? "" : "px"),
          u = e.nodeType && (E.cssNumber[t] || "px" !== d && +l) && re.exec(E.css(e, t));

      if (u && u[3] !== d) {
        for (l /= 2, d = d || u[3], u = +l || 1; s--;) {
          E.style(e, t, u + d), (1 - i) * (1 - (i = o() / l || .5)) <= 0 && (s = 0), u /= i;
        }

        u *= 2, E.style(e, t, u + d), n = n || [];
      }

      return n && (u = +u || +l || 0, a = n[1] ? u + (n[1] + 1) * n[2] : +n[2], r && (r.unit = d, r.start = u, r.end = a)), a;
    }

    var ue = {};

    function ce(e) {
      var t,
          n = e.ownerDocument,
          r = e.nodeName,
          a = ue[r];
      return a || (t = n.body.appendChild(n.createElement(r)), a = E.css(t, "display"), t.parentNode.removeChild(t), "none" === a && (a = "block"), ue[r] = a, a);
    }

    function pe(e, t) {
      for (var n, r, a = [], i = 0, s = e.length; i < s; i++) {
        (r = e[i]).style && (n = r.style.display, t ? ("none" === n && (a[i] = Q.get(r, "display") || null, a[i] || (r.style.display = "")), "" === r.style.display && le(r) && (a[i] = ce(r))) : "none" !== n && (a[i] = "none", Q.set(r, "display", n)));
      }

      for (i = 0; i < s; i++) {
        null != a[i] && (e[i].style.display = a[i]);
      }

      return e;
    }

    E.fn.extend({
      show: function show() {
        return pe(this, !0);
      },
      hide: function hide() {
        return pe(this);
      },
      toggle: function toggle(e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
          le(this) ? E(this).show() : E(this).hide();
        });
      }
    });
    var fe,
        he,
        ve = /^(?:checkbox|radio)$/i,
        me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ge = /^$|^module$|\/(?:java|ecma)script/i;
    fe = b.createDocumentFragment().appendChild(b.createElement("div")), (he = b.createElement("input")).setAttribute("type", "radio"), he.setAttribute("checked", "checked"), he.setAttribute("name", "t"), fe.appendChild(he), m.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked, fe.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue, fe.innerHTML = "<option></option>", m.option = !!fe.lastChild;
    var ye = {
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };

    function be(e, t) {
      var n;
      return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && L(e, t) ? E.merge([e], n) : n;
    }

    function we(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
      }
    }

    ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead, ye.th = ye.td, m.option || (ye.optgroup = ye.option = [1, "<select multiple='multiple'>", "</select>"]);
    var xe = /<|&#?\w+;/;

    function Te(e, t, n, r, a) {
      for (var i, s, o, l, d, u, c = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++) {
        if ((i = e[f]) || 0 === i) if ("object" === T(i)) E.merge(p, i.nodeType ? [i] : i);else if (xe.test(i)) {
          for (s = s || c.appendChild(t.createElement("div")), o = (me.exec(i) || ["", ""])[1].toLowerCase(), l = ye[o] || ye._default, s.innerHTML = l[1] + E.htmlPrefilter(i) + l[2], u = l[0]; u--;) {
            s = s.lastChild;
          }

          E.merge(p, s.childNodes), (s = c.firstChild).textContent = "";
        } else p.push(t.createTextNode(i));
      }

      for (c.textContent = "", f = 0; i = p[f++];) {
        if (r && E.inArray(i, r) > -1) a && a.push(i);else if (d = se(i), s = be(c.appendChild(i), "script"), d && we(s), n) for (u = 0; i = s[u++];) {
          ge.test(i.type || "") && n.push(i);
        }
      }

      return c;
    }

    var Ee = /^([^.]*)(?:\.(.+)|)/;

    function Ce() {
      return !0;
    }

    function Se() {
      return !1;
    }

    function Me(e, t) {
      return e === function () {
        try {
          return b.activeElement;
        } catch (e) {}
      }() == ("focus" === t);
    }

    function ke(e, t, n, r, a, i) {
      var s, o;

      if ("object" == _typeof(t)) {
        for (o in "string" != typeof n && (r = r || n, n = void 0), t) {
          ke(e, o, n, r, t[o], i);
        }

        return e;
      }

      if (null == r && null == a ? (a = n, r = n = void 0) : null == a && ("string" == typeof n ? (a = r, r = void 0) : (a = r, r = n, n = void 0)), !1 === a) a = Se;else if (!a) return e;
      return 1 === i && (s = a, (a = function a(e) {
        return E().off(e), s.apply(this, arguments);
      }).guid = s.guid || (s.guid = E.guid++)), e.each(function () {
        E.event.add(this, t, a, r, n);
      });
    }

    function Pe(e, t, n) {
      n ? (Q.set(e, t, !1), E.event.add(e, t, {
        namespace: !1,
        handler: function handler(e) {
          var r,
              a,
              i = Q.get(this, t);

          if (1 & e.isTrigger && this[t]) {
            if (i.length) (E.event.special[t] || {}).delegateType && e.stopPropagation();else if (i = o.call(arguments), Q.set(this, t, i), r = n(this, t), this[t](), i !== (a = Q.get(this, t)) || r ? Q.set(this, t, !1) : a = {}, i !== a) return e.stopImmediatePropagation(), e.preventDefault(), a && a.value;
          } else i.length && (Q.set(this, t, {
            value: E.event.trigger(E.extend(i[0], E.Event.prototype), i.slice(1), this)
          }), e.stopImmediatePropagation());
        }
      })) : void 0 === Q.get(e, t) && E.event.add(e, t, Ce);
    }

    E.event = {
      global: {},
      add: function add(e, t, n, r, a) {
        var i,
            s,
            o,
            l,
            d,
            u,
            c,
            p,
            f,
            h,
            v,
            m = Q.get(e);
        if (U(e)) for (n.handler && (n = (i = n).handler, a = i.selector), a && E.find.matchesSelector(ie, a), n.guid || (n.guid = E.guid++), (l = m.events) || (l = m.events = Object.create(null)), (s = m.handle) || (s = m.handle = function (t) {
          return void 0 !== E && E.event.triggered !== t.type ? E.event.dispatch.apply(e, arguments) : void 0;
        }), d = (t = (t || "").match(j) || [""]).length; d--;) {
          f = v = (o = Ee.exec(t[d]) || [])[1], h = (o[2] || "").split(".").sort(), f && (c = E.event.special[f] || {}, f = (a ? c.delegateType : c.bindType) || f, c = E.event.special[f] || {}, u = E.extend({
            type: f,
            origType: v,
            data: r,
            handler: n,
            guid: n.guid,
            selector: a,
            needsContext: a && E.expr.match.needsContext.test(a),
            namespace: h.join(".")
          }, i), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, r, h, s) || e.addEventListener && e.addEventListener(f, s)), c.add && (c.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), a ? p.splice(p.delegateCount++, 0, u) : p.push(u), E.event.global[f] = !0);
        }
      },
      remove: function remove(e, t, n, r, a) {
        var i,
            s,
            o,
            l,
            d,
            u,
            c,
            p,
            f,
            h,
            v,
            m = Q.hasData(e) && Q.get(e);

        if (m && (l = m.events)) {
          for (d = (t = (t || "").match(j) || [""]).length; d--;) {
            if (f = v = (o = Ee.exec(t[d]) || [])[1], h = (o[2] || "").split(".").sort(), f) {
              for (c = E.event.special[f] || {}, p = l[f = (r ? c.delegateType : c.bindType) || f] || [], o = o[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = i = p.length; i--;) {
                u = p[i], !a && v !== u.origType || n && n.guid !== u.guid || o && !o.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (p.splice(i, 1), u.selector && p.delegateCount--, c.remove && c.remove.call(e, u));
              }

              s && !p.length && (c.teardown && !1 !== c.teardown.call(e, h, m.handle) || E.removeEvent(e, f, m.handle), delete l[f]);
            } else for (f in l) {
              E.event.remove(e, f + t[d], n, r, !0);
            }
          }

          E.isEmptyObject(l) && Q.remove(e, "handle events");
        }
      },
      dispatch: function dispatch(e) {
        var t,
            n,
            r,
            a,
            i,
            s,
            o = new Array(arguments.length),
            l = E.event.fix(e),
            d = (Q.get(this, "events") || Object.create(null))[l.type] || [],
            u = E.event.special[l.type] || {};

        for (o[0] = l, t = 1; t < arguments.length; t++) {
          o[t] = arguments[t];
        }

        if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
          for (s = E.event.handlers.call(this, l, d), t = 0; (a = s[t++]) && !l.isPropagationStopped();) {
            for (l.currentTarget = a.elem, n = 0; (i = a.handlers[n++]) && !l.isImmediatePropagationStopped();) {
              l.rnamespace && !1 !== i.namespace && !l.rnamespace.test(i.namespace) || (l.handleObj = i, l.data = i.data, void 0 !== (r = ((E.event.special[i.origType] || {}).handle || i.handler).apply(a.elem, o)) && !1 === (l.result = r) && (l.preventDefault(), l.stopPropagation()));
            }
          }

          return u.postDispatch && u.postDispatch.call(this, l), l.result;
        }
      },
      handlers: function handlers(e, t) {
        var n,
            r,
            a,
            i,
            s,
            o = [],
            l = t.delegateCount,
            d = e.target;
        if (l && d.nodeType && !("click" === e.type && e.button >= 1)) for (; d !== this; d = d.parentNode || this) {
          if (1 === d.nodeType && ("click" !== e.type || !0 !== d.disabled)) {
            for (i = [], s = {}, n = 0; n < l; n++) {
              void 0 === s[a = (r = t[n]).selector + " "] && (s[a] = r.needsContext ? E(a, this).index(d) > -1 : E.find(a, this, null, [d]).length), s[a] && i.push(r);
            }

            i.length && o.push({
              elem: d,
              handlers: i
            });
          }
        }
        return d = this, l < t.length && o.push({
          elem: d,
          handlers: t.slice(l)
        }), o;
      },
      addProp: function addProp(e, t) {
        Object.defineProperty(E.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: g(t) ? function () {
            if (this.originalEvent) return t(this.originalEvent);
          } : function () {
            if (this.originalEvent) return this.originalEvent[e];
          },
          set: function set(t) {
            Object.defineProperty(this, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t
            });
          }
        });
      },
      fix: function fix(e) {
        return e[E.expando] ? e : new E.Event(e);
      },
      special: {
        load: {
          noBubble: !0
        },
        click: {
          setup: function setup(e) {
            var t = this || e;
            return ve.test(t.type) && t.click && L(t, "input") && Pe(t, "click", Ce), !1;
          },
          trigger: function trigger(e) {
            var t = this || e;
            return ve.test(t.type) && t.click && L(t, "input") && Pe(t, "click"), !0;
          },
          _default: function _default(e) {
            var t = e.target;
            return ve.test(t.type) && t.click && L(t, "input") && Q.get(t, "click") || L(t, "a");
          }
        },
        beforeunload: {
          postDispatch: function postDispatch(e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
          }
        }
      }
    }, E.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }, E.Event = function (e, t) {
      if (!(this instanceof E.Event)) return new E.Event(e, t);
      e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0;
    }, E.Event.prototype = {
      constructor: E.Event,
      isDefaultPrevented: Se,
      isPropagationStopped: Se,
      isImmediatePropagationStopped: Se,
      isSimulated: !1,
      preventDefault: function preventDefault() {
        var e = this.originalEvent;
        this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function stopPropagation() {
        var e = this.originalEvent;
        this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function stopImmediatePropagation() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
      }
    }, E.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      "char": !0,
      code: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: !0
    }, E.event.addProp), E.each({
      focus: "focusin",
      blur: "focusout"
    }, function (e, t) {
      E.event.special[e] = {
        setup: function setup() {
          return Pe(this, e, Me), !1;
        },
        trigger: function trigger() {
          return Pe(this, e), !0;
        },
        _default: function _default() {
          return !0;
        },
        delegateType: t
      };
    }), E.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function (e, t) {
      E.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function handle(e) {
          var n,
              r = this,
              a = e.relatedTarget,
              i = e.handleObj;
          return a && (a === r || E.contains(r, a)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n;
        }
      };
    }), E.fn.extend({
      on: function on(e, t, n, r) {
        return ke(this, e, t, n, r);
      },
      one: function one(e, t, n, r) {
        return ke(this, e, t, n, r, 1);
      },
      off: function off(e, t, n) {
        var r, a;
        if (e && e.preventDefault && e.handleObj) return r = e.handleObj, E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

        if ("object" == _typeof(e)) {
          for (a in e) {
            this.off(a, t, e[a]);
          }

          return this;
        }

        return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function () {
          E.event.remove(this, e, n, t);
        });
      }
    });
    var Le = /<script|<style|<link/i,
        Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ze = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function De(e, t) {
      return L(e, "table") && L(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e;
    }

    function $e(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }

    function Oe(e) {
      return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
    }

    function Ne(e, t) {
      var n, r, a, i, s, o;

      if (1 === t.nodeType) {
        if (Q.hasData(e) && (o = Q.get(e).events)) for (a in Q.remove(t, "handle events"), o) {
          for (n = 0, r = o[a].length; n < r; n++) {
            E.event.add(t, a, o[a][n]);
          }
        }
        J.hasData(e) && (i = J.access(e), s = E.extend({}, i), J.set(t, s));
      }
    }

    function Ie(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && ve.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
    }

    function je(e, t, n, r) {
      t = l(t);
      var a,
          i,
          s,
          o,
          d,
          u,
          c = 0,
          p = e.length,
          f = p - 1,
          h = t[0],
          v = g(h);
      if (v || p > 1 && "string" == typeof h && !m.checkClone && Ae.test(h)) return e.each(function (a) {
        var i = e.eq(a);
        v && (t[0] = h.call(this, a, i.html())), je(i, t, n, r);
      });

      if (p && (i = (a = Te(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === a.childNodes.length && (a = i), i || r)) {
        for (o = (s = E.map(be(a, "script"), $e)).length; c < p; c++) {
          d = a, c !== f && (d = E.clone(d, !0, !0), o && E.merge(s, be(d, "script"))), n.call(e[c], d, c);
        }

        if (o) for (u = s[s.length - 1].ownerDocument, E.map(s, Oe), c = 0; c < o; c++) {
          d = s[c], ge.test(d.type || "") && !Q.access(d, "globalEval") && E.contains(u, d) && (d.src && "module" !== (d.type || "").toLowerCase() ? E._evalUrl && !d.noModule && E._evalUrl(d.src, {
            nonce: d.nonce || d.getAttribute("nonce")
          }, u) : x(d.textContent.replace(ze, ""), d, u));
        }
      }

      return e;
    }

    function He(e, t, n) {
      for (var r, a = t ? E.filter(t, e) : e, i = 0; null != (r = a[i]); i++) {
        n || 1 !== r.nodeType || E.cleanData(be(r)), r.parentNode && (n && se(r) && we(be(r, "script")), r.parentNode.removeChild(r));
      }

      return e;
    }

    E.extend({
      htmlPrefilter: function htmlPrefilter(e) {
        return e;
      },
      clone: function clone(e, t, n) {
        var r,
            a,
            i,
            s,
            o = e.cloneNode(!0),
            l = se(e);
        if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e))) for (s = be(o), r = 0, a = (i = be(e)).length; r < a; r++) {
          Ie(i[r], s[r]);
        }
        if (t) if (n) for (i = i || be(e), s = s || be(o), r = 0, a = i.length; r < a; r++) {
          Ne(i[r], s[r]);
        } else Ne(e, o);
        return (s = be(o, "script")).length > 0 && we(s, !l && be(e, "script")), o;
      },
      cleanData: function cleanData(e) {
        for (var t, n, r, a = E.event.special, i = 0; void 0 !== (n = e[i]); i++) {
          if (U(n)) {
            if (t = n[Q.expando]) {
              if (t.events) for (r in t.events) {
                a[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
              }
              n[Q.expando] = void 0;
            }

            n[J.expando] && (n[J.expando] = void 0);
          }
        }
      }
    }), E.fn.extend({
      detach: function detach(e) {
        return He(this, e, !0);
      },
      remove: function remove(e) {
        return He(this, e);
      },
      text: function text(e) {
        return W(this, function (e) {
          return void 0 === e ? E.text(this) : this.empty().each(function () {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
          });
        }, null, e, arguments.length);
      },
      append: function append() {
        return je(this, arguments, function (e) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || De(this, e).appendChild(e);
        });
      },
      prepend: function prepend() {
        return je(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = De(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function before() {
        return je(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function after() {
        return je(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function empty() {
        for (var e, t = 0; null != (e = this[t]); t++) {
          1 === e.nodeType && (E.cleanData(be(e, !1)), e.textContent = "");
        }

        return this;
      },
      clone: function clone(e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function () {
          return E.clone(this, e, t);
        });
      },
      html: function html(e) {
        return W(this, function (e) {
          var t = this[0] || {},
              n = 0,
              r = this.length;
          if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

          if ("string" == typeof e && !Le.test(e) && !ye[(me.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = E.htmlPrefilter(e);

            try {
              for (; n < r; n++) {
                1 === (t = this[n] || {}).nodeType && (E.cleanData(be(t, !1)), t.innerHTML = e);
              }

              t = 0;
            } catch (e) {}
          }

          t && this.empty().append(e);
        }, null, e, arguments.length);
      },
      replaceWith: function replaceWith() {
        var e = [];
        return je(this, arguments, function (t) {
          var n = this.parentNode;
          E.inArray(this, e) < 0 && (E.cleanData(be(this)), n && n.replaceChild(t, this));
        }, e);
      }
    }), E.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function (e, t) {
      E.fn[e] = function (e) {
        for (var n, r = [], a = E(e), i = a.length - 1, s = 0; s <= i; s++) {
          n = s === i ? this : this.clone(!0), E(a[s])[t](n), d.apply(r, n.get());
        }

        return this.pushStack(r);
      };
    });

    var qe = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
        Be = function Be(e) {
      var t = e.ownerDocument.defaultView;
      return t && t.opener || (t = n), t.getComputedStyle(e);
    },
        Re = function Re(e, t, n) {
      var r,
          a,
          i = {};

      for (a in t) {
        i[a] = e.style[a], e.style[a] = t[a];
      }

      for (a in r = n.call(e), t) {
        e.style[a] = i[a];
      }

      return r;
    },
        Ge = new RegExp(ae.join("|"), "i");

    function _e(e, t, n) {
      var r,
          a,
          i,
          s,
          o = e.style;
      return (n = n || Be(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || se(e) || (s = E.style(e, t)), !m.pixelBoxStyles() && qe.test(s) && Ge.test(t) && (r = o.width, a = o.minWidth, i = o.maxWidth, o.minWidth = o.maxWidth = o.width = s, s = n.width, o.width = r, o.minWidth = a, o.maxWidth = i)), void 0 !== s ? s + "" : s;
    }

    function We(e, t) {
      return {
        get: function get() {
          if (!e()) return (this.get = t).apply(this, arguments);
          delete this.get;
        }
      };
    }

    !function () {
      function e() {
        if (u) {
          d.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(d).appendChild(u);
          var e = n.getComputedStyle(u);
          r = "1%" !== e.top, l = 12 === t(e.marginLeft), u.style.right = "60%", s = 36 === t(e.right), a = 36 === t(e.width), u.style.position = "absolute", i = 12 === t(u.offsetWidth / 3), ie.removeChild(d), u = null;
        }
      }

      function t(e) {
        return Math.round(parseFloat(e));
      }

      var r,
          a,
          i,
          s,
          o,
          l,
          d = b.createElement("div"),
          u = b.createElement("div");
      u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === u.style.backgroundClip, E.extend(m, {
        boxSizingReliable: function boxSizingReliable() {
          return e(), a;
        },
        pixelBoxStyles: function pixelBoxStyles() {
          return e(), s;
        },
        pixelPosition: function pixelPosition() {
          return e(), r;
        },
        reliableMarginLeft: function reliableMarginLeft() {
          return e(), l;
        },
        scrollboxSize: function scrollboxSize() {
          return e(), i;
        },
        reliableTrDimensions: function reliableTrDimensions() {
          var e, t, r, a;
          return null == o && (e = b.createElement("table"), t = b.createElement("tr"), r = b.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", r.style.height = "9px", r.style.display = "block", ie.appendChild(e).appendChild(t).appendChild(r), a = n.getComputedStyle(t), o = parseInt(a.height, 10) + parseInt(a.borderTopWidth, 10) + parseInt(a.borderBottomWidth, 10) === t.offsetHeight, ie.removeChild(e)), o;
        }
      }));
    }();
    var Fe = ["Webkit", "Moz", "ms"],
        Xe = b.createElement("div").style,
        Ye = {};

    function Ve(e) {
      var t = E.cssProps[e] || Ye[e];
      return t || (e in Xe ? e : Ye[e] = function (e) {
        for (var t = e[0].toUpperCase() + e.slice(1), n = Fe.length; n--;) {
          if ((e = Fe[n] + t) in Xe) return e;
        }
      }(e) || e);
    }

    var Ue = /^(none|table(?!-c[ea]).+)/,
        Ke = /^--/,
        Qe = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
        Je = {
      letterSpacing: "0",
      fontWeight: "400"
    };

    function Ze(e, t, n) {
      var r = re.exec(t);
      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }

    function et(e, t, n, r, a, i) {
      var s = "width" === t ? 1 : 0,
          o = 0,
          l = 0;
      if (n === (r ? "border" : "content")) return 0;

      for (; s < 4; s += 2) {
        "margin" === n && (l += E.css(e, n + ae[s], !0, a)), r ? ("content" === n && (l -= E.css(e, "padding" + ae[s], !0, a)), "margin" !== n && (l -= E.css(e, "border" + ae[s] + "Width", !0, a))) : (l += E.css(e, "padding" + ae[s], !0, a), "padding" !== n ? l += E.css(e, "border" + ae[s] + "Width", !0, a) : o += E.css(e, "border" + ae[s] + "Width", !0, a));
      }

      return !r && i >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - l - o - .5)) || 0), l;
    }

    function tt(e, t, n) {
      var r = Be(e),
          a = (!m.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, r),
          i = a,
          s = _e(e, t, r),
          o = "offset" + t[0].toUpperCase() + t.slice(1);

      if (qe.test(s)) {
        if (!n) return s;
        s = "auto";
      }

      return (!m.boxSizingReliable() && a || !m.reliableTrDimensions() && L(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === E.css(e, "display", !1, r)) && e.getClientRects().length && (a = "border-box" === E.css(e, "boxSizing", !1, r), (i = o in e) && (s = e[o])), (s = parseFloat(s) || 0) + et(e, t, n || (a ? "border" : "content"), i, r, s) + "px";
    }

    function nt(e, t, n, r, a) {
      return new nt.prototype.init(e, t, n, r, a);
    }

    E.extend({
      cssHooks: {
        opacity: {
          get: function get(e, t) {
            if (t) {
              var n = _e(e, "opacity");

              return "" === n ? "1" : n;
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {},
      style: function style(e, t, n, r) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var a,
              i,
              s,
              o = V(t),
              l = Ke.test(t),
              d = e.style;
          if (l || (t = Ve(o)), s = E.cssHooks[t] || E.cssHooks[o], void 0 === n) return s && "get" in s && void 0 !== (a = s.get(e, !1, r)) ? a : d[t];
          "string" === (i = _typeof(n)) && (a = re.exec(n)) && a[1] && (n = de(e, t, a), i = "number"), null != n && n == n && ("number" !== i || l || (n += a && a[3] || (E.cssNumber[o] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (d[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (l ? d.setProperty(t, n) : d[t] = n));
        }
      },
      css: function css(e, t, n, r) {
        var a,
            i,
            s,
            o = V(t);
        return Ke.test(t) || (t = Ve(o)), (s = E.cssHooks[t] || E.cssHooks[o]) && "get" in s && (a = s.get(e, !0, n)), void 0 === a && (a = _e(e, t, r)), "normal" === a && t in Je && (a = Je[t]), "" === n || n ? (i = parseFloat(a), !0 === n || isFinite(i) ? i || 0 : a) : a;
      }
    }), E.each(["height", "width"], function (e, t) {
      E.cssHooks[t] = {
        get: function get(e, n, r) {
          if (n) return !Ue.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, t, r) : Re(e, Qe, function () {
            return tt(e, t, r);
          });
        },
        set: function set(e, n, r) {
          var a,
              i = Be(e),
              s = !m.scrollboxSize() && "absolute" === i.position,
              o = (s || r) && "border-box" === E.css(e, "boxSizing", !1, i),
              l = r ? et(e, t, r, o, i) : 0;
          return o && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - et(e, t, "border", !1, i) - .5)), l && (a = re.exec(n)) && "px" !== (a[3] || "px") && (e.style[t] = n, n = E.css(e, t)), Ze(0, n, l);
        }
      };
    }), E.cssHooks.marginLeft = We(m.reliableMarginLeft, function (e, t) {
      if (t) return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - Re(e, {
        marginLeft: 0
      }, function () {
        return e.getBoundingClientRect().left;
      })) + "px";
    }), E.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function (e, t) {
      E.cssHooks[e + t] = {
        expand: function expand(n) {
          for (var r = 0, a = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) {
            a[e + ae[r] + t] = i[r] || i[r - 2] || i[0];
          }

          return a;
        }
      }, "margin" !== e && (E.cssHooks[e + t].set = Ze);
    }), E.fn.extend({
      css: function css(e, t) {
        return W(this, function (e, t, n) {
          var r,
              a,
              i = {},
              s = 0;

          if (Array.isArray(t)) {
            for (r = Be(e), a = t.length; s < a; s++) {
              i[t[s]] = E.css(e, t[s], !1, r);
            }

            return i;
          }

          return void 0 !== n ? E.style(e, t, n) : E.css(e, t);
        }, e, t, arguments.length > 1);
      }
    }), E.Tween = nt, nt.prototype = {
      constructor: nt,
      init: function init(e, t, n, r, a, i) {
        this.elem = e, this.prop = n, this.easing = a || E.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (E.cssNumber[n] ? "" : "px");
      },
      cur: function cur() {
        var e = nt.propHooks[this.prop];
        return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
      },
      run: function run(e) {
        var t,
            n = nt.propHooks[this.prop];
        return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this;
      }
    }, nt.prototype.init.prototype = nt.prototype, nt.propHooks = {
      _default: {
        get: function get(e) {
          var t;
          return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
        },
        set: function set(e) {
          E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !E.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit);
        }
      }
    }, nt.propHooks.scrollTop = nt.propHooks.scrollLeft = {
      set: function set(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      }
    }, E.easing = {
      linear: function linear(e) {
        return e;
      },
      swing: function swing(e) {
        return .5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing"
    }, E.fx = nt.prototype.init, E.fx.step = {};
    var rt,
        at,
        it = /^(?:toggle|show|hide)$/,
        st = /queueHooks$/;

    function ot() {
      at && (!1 === b.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ot) : n.setTimeout(ot, E.fx.interval), E.fx.tick());
    }

    function lt() {
      return n.setTimeout(function () {
        rt = void 0;
      }), rt = Date.now();
    }

    function dt(e, t) {
      var n,
          r = 0,
          a = {
        height: e
      };

      for (t = t ? 1 : 0; r < 4; r += 2 - t) {
        a["margin" + (n = ae[r])] = a["padding" + n] = e;
      }

      return t && (a.opacity = a.width = e), a;
    }

    function ut(e, t, n) {
      for (var r, a = (ct.tweeners[t] || []).concat(ct.tweeners["*"]), i = 0, s = a.length; i < s; i++) {
        if (r = a[i].call(n, t, e)) return r;
      }
    }

    function ct(e, t, n) {
      var r,
          a,
          i = 0,
          s = ct.prefilters.length,
          o = E.Deferred().always(function () {
        delete l.elem;
      }),
          l = function l() {
        if (a) return !1;

        for (var t = rt || lt(), n = Math.max(0, d.startTime + d.duration - t), r = 1 - (n / d.duration || 0), i = 0, s = d.tweens.length; i < s; i++) {
          d.tweens[i].run(r);
        }

        return o.notifyWith(e, [d, r, n]), r < 1 && s ? n : (s || o.notifyWith(e, [d, 1, 0]), o.resolveWith(e, [d]), !1);
      },
          d = o.promise({
        elem: e,
        props: E.extend({}, t),
        opts: E.extend(!0, {
          specialEasing: {},
          easing: E.easing._default
        }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: rt || lt(),
        duration: n.duration,
        tweens: [],
        createTween: function createTween(t, n) {
          var r = E.Tween(e, d.opts, t, n, d.opts.specialEasing[t] || d.opts.easing);
          return d.tweens.push(r), r;
        },
        stop: function stop(t) {
          var n = 0,
              r = t ? d.tweens.length : 0;
          if (a) return this;

          for (a = !0; n < r; n++) {
            d.tweens[n].run(1);
          }

          return t ? (o.notifyWith(e, [d, 1, 0]), o.resolveWith(e, [d, t])) : o.rejectWith(e, [d, t]), this;
        }
      }),
          u = d.props;

      for (!function (e, t) {
        var n, r, a, i, s;

        for (n in e) {
          if (a = t[r = V(n)], i = e[n], Array.isArray(i) && (a = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), (s = E.cssHooks[r]) && ("expand" in s)) for (n in i = s.expand(i), delete e[r], i) {
            (n in e) || (e[n] = i[n], t[n] = a);
          } else t[r] = a;
        }
      }(u, d.opts.specialEasing); i < s; i++) {
        if (r = ct.prefilters[i].call(d, e, u, d.opts)) return g(r.stop) && (E._queueHooks(d.elem, d.opts.queue).stop = r.stop.bind(r)), r;
      }

      return E.map(u, ut, d), g(d.opts.start) && d.opts.start.call(e, d), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always), E.fx.timer(E.extend(l, {
        elem: e,
        anim: d,
        queue: d.opts.queue
      })), d;
    }

    E.Animation = E.extend(ct, {
      tweeners: {
        "*": [function (e, t) {
          var n = this.createTween(e, t);
          return de(n.elem, e, re.exec(t), n), n;
        }]
      },
      tweener: function tweener(e, t) {
        g(e) ? (t = e, e = ["*"]) : e = e.match(j);

        for (var n, r = 0, a = e.length; r < a; r++) {
          n = e[r], ct.tweeners[n] = ct.tweeners[n] || [], ct.tweeners[n].unshift(t);
        }
      },
      prefilters: [function (e, t, n) {
        var r,
            a,
            i,
            s,
            o,
            l,
            d,
            u,
            c = "width" in t || "height" in t,
            p = this,
            f = {},
            h = e.style,
            v = e.nodeType && le(e),
            m = Q.get(e, "fxshow");

        for (r in n.queue || (null == (s = E._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, o = s.empty.fire, s.empty.fire = function () {
          s.unqueued || o();
        }), s.unqueued++, p.always(function () {
          p.always(function () {
            s.unqueued--, E.queue(e, "fx").length || s.empty.fire();
          });
        })), t) {
          if (a = t[r], it.test(a)) {
            if (delete t[r], i = i || "toggle" === a, a === (v ? "hide" : "show")) {
              if ("show" !== a || !m || void 0 === m[r]) continue;
              v = !0;
            }

            f[r] = m && m[r] || E.style(e, r);
          }
        }

        if ((l = !E.isEmptyObject(t)) || !E.isEmptyObject(f)) for (r in c && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (d = m && m.display) && (d = Q.get(e, "display")), "none" === (u = E.css(e, "display")) && (d ? u = d : (pe([e], !0), d = e.style.display || d, u = E.css(e, "display"), pe([e]))), ("inline" === u || "inline-block" === u && null != d) && "none" === E.css(e, "float") && (l || (p.done(function () {
          h.display = d;
        }), null == d && (u = h.display, d = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
          h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
        })), l = !1, f) {
          l || (m ? "hidden" in m && (v = m.hidden) : m = Q.access(e, "fxshow", {
            display: d
          }), i && (m.hidden = !v), v && pe([e], !0), p.done(function () {
            for (r in v || pe([e]), Q.remove(e, "fxshow"), f) {
              E.style(e, r, f[r]);
            }
          })), l = ut(v ? m[r] : 0, r, p), r in m || (m[r] = l.start, v && (l.end = l.start, l.start = 0));
        }
      }],
      prefilter: function prefilter(e, t) {
        t ? ct.prefilters.unshift(e) : ct.prefilters.push(e);
      }
    }), E.speed = function (e, t, n) {
      var r = e && "object" == _typeof(e) ? E.extend({}, e) : {
        complete: n || !n && t || g(e) && e,
        duration: e,
        easing: n && t || t && !g(t) && t
      };
      return E.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in E.fx.speeds ? r.duration = E.fx.speeds[r.duration] : r.duration = E.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
        g(r.old) && r.old.call(this), r.queue && E.dequeue(this, r.queue);
      }, r;
    }, E.fn.extend({
      fadeTo: function fadeTo(e, t, n, r) {
        return this.filter(le).css("opacity", 0).show().end().animate({
          opacity: t
        }, e, n, r);
      },
      animate: function animate(e, t, n, r) {
        var a = E.isEmptyObject(e),
            i = E.speed(t, n, r),
            s = function s() {
          var t = ct(this, E.extend({}, e), i);
          (a || Q.get(this, "finish")) && t.stop(!0);
        };

        return s.finish = s, a || !1 === i.queue ? this.each(s) : this.queue(i.queue, s);
      },
      stop: function stop(e, t, n) {
        var r = function r(e) {
          var t = e.stop;
          delete e.stop, t(n);
        };

        return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function () {
          var t = !0,
              a = null != e && e + "queueHooks",
              i = E.timers,
              s = Q.get(this);
          if (a) s[a] && s[a].stop && r(s[a]);else for (a in s) {
            s[a] && s[a].stop && st.test(a) && r(s[a]);
          }

          for (a = i.length; a--;) {
            i[a].elem !== this || null != e && i[a].queue !== e || (i[a].anim.stop(n), t = !1, i.splice(a, 1));
          }

          !t && n || E.dequeue(this, e);
        });
      },
      finish: function finish(e) {
        return !1 !== e && (e = e || "fx"), this.each(function () {
          var t,
              n = Q.get(this),
              r = n[e + "queue"],
              a = n[e + "queueHooks"],
              i = E.timers,
              s = r ? r.length : 0;

          for (n.finish = !0, E.queue(this, e, []), a && a.stop && a.stop.call(this, !0), t = i.length; t--;) {
            i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
          }

          for (t = 0; t < s; t++) {
            r[t] && r[t].finish && r[t].finish.call(this);
          }

          delete n.finish;
        });
      }
    }), E.each(["toggle", "show", "hide"], function (e, t) {
      var n = E.fn[t];

      E.fn[t] = function (e, r, a) {
        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(dt(t, !0), e, r, a);
      };
    }), E.each({
      slideDown: dt("show"),
      slideUp: dt("hide"),
      slideToggle: dt("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function (e, t) {
      E.fn[e] = function (e, n, r) {
        return this.animate(t, e, n, r);
      };
    }), E.timers = [], E.fx.tick = function () {
      var e,
          t = 0,
          n = E.timers;

      for (rt = Date.now(); t < n.length; t++) {
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      }

      n.length || E.fx.stop(), rt = void 0;
    }, E.fx.timer = function (e) {
      E.timers.push(e), E.fx.start();
    }, E.fx.interval = 13, E.fx.start = function () {
      at || (at = !0, ot());
    }, E.fx.stop = function () {
      at = null;
    }, E.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, E.fn.delay = function (e, t) {
      return e = E.fx && E.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, r) {
        var a = n.setTimeout(t, e);

        r.stop = function () {
          n.clearTimeout(a);
        };
      });
    }, function () {
      var e = b.createElement("input"),
          t = b.createElement("select").appendChild(b.createElement("option"));
      e.type = "checkbox", m.checkOn = "" !== e.value, m.optSelected = t.selected, (e = b.createElement("input")).value = "t", e.type = "radio", m.radioValue = "t" === e.value;
    }();
    var pt,
        ft = E.expr.attrHandle;
    E.fn.extend({
      attr: function attr(e, t) {
        return W(this, E.attr, e, t, arguments.length > 1);
      },
      removeAttr: function removeAttr(e) {
        return this.each(function () {
          E.removeAttr(this, e);
        });
      }
    }), E.extend({
      attr: function attr(e, t, n) {
        var r,
            a,
            i = e.nodeType;
        if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === i && E.isXMLDoc(e) || (a = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : a && "set" in a && void 0 !== (r = a.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : a && "get" in a && null !== (r = a.get(e, t)) ? r : null == (r = E.find.attr(e, t)) ? void 0 : r);
      },
      attrHooks: {
        type: {
          set: function set(e, t) {
            if (!m.radioValue && "radio" === t && L(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          }
        }
      },
      removeAttr: function removeAttr(e, t) {
        var n,
            r = 0,
            a = t && t.match(j);
        if (a && 1 === e.nodeType) for (; n = a[r++];) {
          e.removeAttribute(n);
        }
      }
    }), pt = {
      set: function set(e, t, n) {
        return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n;
      }
    }, E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = ft[t] || E.find.attr;

      ft[t] = function (e, t, r) {
        var a,
            i,
            s = t.toLowerCase();
        return r || (i = ft[s], ft[s] = a, a = null != n(e, t, r) ? s : null, ft[s] = i), a;
      };
    });
    var ht = /^(?:input|select|textarea|button)$/i,
        vt = /^(?:a|area)$/i;

    function mt(e) {
      return (e.match(j) || []).join(" ");
    }

    function gt(e) {
      return e.getAttribute && e.getAttribute("class") || "";
    }

    function yt(e) {
      return Array.isArray(e) ? e : "string" == typeof e && e.match(j) || [];
    }

    E.fn.extend({
      prop: function prop(e, t) {
        return W(this, E.prop, e, t, arguments.length > 1);
      },
      removeProp: function removeProp(e) {
        return this.each(function () {
          delete this[E.propFix[e] || e];
        });
      }
    }), E.extend({
      prop: function prop(e, t, n) {
        var r,
            a,
            i = e.nodeType;
        if (3 !== i && 8 !== i && 2 !== i) return 1 === i && E.isXMLDoc(e) || (t = E.propFix[t] || t, a = E.propHooks[t]), void 0 !== n ? a && "set" in a && void 0 !== (r = a.set(e, n, t)) ? r : e[t] = n : a && "get" in a && null !== (r = a.get(e, t)) ? r : e[t];
      },
      propHooks: {
        tabIndex: {
          get: function get(e) {
            var t = E.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : ht.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1;
          }
        }
      },
      propFix: {
        "for": "htmlFor",
        "class": "className"
      }
    }), m.optSelected || (E.propHooks.selected = {
      get: function get(e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null;
      },
      set: function set(e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
      }
    }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      E.propFix[this.toLowerCase()] = this;
    }), E.fn.extend({
      addClass: function addClass(e) {
        var t,
            n,
            r,
            a,
            i,
            s,
            o,
            l = 0;
        if (g(e)) return this.each(function (t) {
          E(this).addClass(e.call(this, t, gt(this)));
        });
        if ((t = yt(e)).length) for (; n = this[l++];) {
          if (a = gt(n), r = 1 === n.nodeType && " " + mt(a) + " ") {
            for (s = 0; i = t[s++];) {
              r.indexOf(" " + i + " ") < 0 && (r += i + " ");
            }

            a !== (o = mt(r)) && n.setAttribute("class", o);
          }
        }
        return this;
      },
      removeClass: function removeClass(e) {
        var t,
            n,
            r,
            a,
            i,
            s,
            o,
            l = 0;
        if (g(e)) return this.each(function (t) {
          E(this).removeClass(e.call(this, t, gt(this)));
        });
        if (!arguments.length) return this.attr("class", "");
        if ((t = yt(e)).length) for (; n = this[l++];) {
          if (a = gt(n), r = 1 === n.nodeType && " " + mt(a) + " ") {
            for (s = 0; i = t[s++];) {
              for (; r.indexOf(" " + i + " ") > -1;) {
                r = r.replace(" " + i + " ", " ");
              }
            }

            a !== (o = mt(r)) && n.setAttribute("class", o);
          }
        }
        return this;
      },
      toggleClass: function toggleClass(e, t) {
        var n = _typeof(e),
            r = "string" === n || Array.isArray(e);

        return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
          E(this).toggleClass(e.call(this, n, gt(this), t), t);
        }) : this.each(function () {
          var t, a, i, s;
          if (r) for (a = 0, i = E(this), s = yt(e); t = s[a++];) {
            i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
          } else void 0 !== e && "boolean" !== n || ((t = gt(this)) && Q.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Q.get(this, "__className__") || ""));
        });
      },
      hasClass: function hasClass(e) {
        var t,
            n,
            r = 0;

        for (t = " " + e + " "; n = this[r++];) {
          if (1 === n.nodeType && (" " + mt(gt(n)) + " ").indexOf(t) > -1) return !0;
        }

        return !1;
      }
    });
    var bt = /\r/g;
    E.fn.extend({
      val: function val(e) {
        var t,
            n,
            r,
            a = this[0];
        return arguments.length ? (r = g(e), this.each(function (n) {
          var a;
          1 === this.nodeType && (null == (a = r ? e.call(this, n, E(this).val()) : e) ? a = "" : "number" == typeof a ? a += "" : Array.isArray(a) && (a = E.map(a, function (e) {
            return null == e ? "" : e + "";
          })), (t = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, a, "value") || (this.value = a));
        })) : a ? (t = E.valHooks[a.type] || E.valHooks[a.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(a, "value")) ? n : "string" == typeof (n = a.value) ? n.replace(bt, "") : null == n ? "" : n : void 0;
      }
    }), E.extend({
      valHooks: {
        option: {
          get: function get(e) {
            var t = E.find.attr(e, "value");
            return null != t ? t : mt(E.text(e));
          }
        },
        select: {
          get: function get(e) {
            var t,
                n,
                r,
                a = e.options,
                i = e.selectedIndex,
                s = "select-one" === e.type,
                o = s ? null : [],
                l = s ? i + 1 : a.length;

            for (r = i < 0 ? l : s ? i : 0; r < l; r++) {
              if (((n = a[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !L(n.parentNode, "optgroup"))) {
                if (t = E(n).val(), s) return t;
                o.push(t);
              }
            }

            return o;
          },
          set: function set(e, t) {
            for (var n, r, a = e.options, i = E.makeArray(t), s = a.length; s--;) {
              ((r = a[s]).selected = E.inArray(E.valHooks.option.get(r), i) > -1) && (n = !0);
            }

            return n || (e.selectedIndex = -1), i;
          }
        }
      }
    }), E.each(["radio", "checkbox"], function () {
      E.valHooks[this] = {
        set: function set(e, t) {
          if (Array.isArray(t)) return e.checked = E.inArray(E(e).val(), t) > -1;
        }
      }, m.checkOn || (E.valHooks[this].get = function (e) {
        return null === e.getAttribute("value") ? "on" : e.value;
      });
    }), m.focusin = "onfocusin" in n;

    var wt = /^(?:focusinfocus|focusoutblur)$/,
        xt = function xt(e) {
      e.stopPropagation();
    };

    E.extend(E.event, {
      trigger: function trigger(e, t, r, a) {
        var i,
            s,
            o,
            l,
            d,
            u,
            c,
            p,
            h = [r || b],
            v = f.call(e, "type") ? e.type : e,
            m = f.call(e, "namespace") ? e.namespace.split(".") : [];

        if (s = p = o = r = r || b, 3 !== r.nodeType && 8 !== r.nodeType && !wt.test(v + E.event.triggered) && (v.indexOf(".") > -1 && (m = v.split("."), v = m.shift(), m.sort()), d = v.indexOf(":") < 0 && "on" + v, (e = e[E.expando] ? e : new E.Event(v, "object" == _typeof(e) && e)).isTrigger = a ? 2 : 3, e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : E.makeArray(t, [e]), c = E.event.special[v] || {}, a || !c.trigger || !1 !== c.trigger.apply(r, t))) {
          if (!a && !c.noBubble && !y(r)) {
            for (l = c.delegateType || v, wt.test(l + v) || (s = s.parentNode); s; s = s.parentNode) {
              h.push(s), o = s;
            }

            o === (r.ownerDocument || b) && h.push(o.defaultView || o.parentWindow || n);
          }

          for (i = 0; (s = h[i++]) && !e.isPropagationStopped();) {
            p = s, e.type = i > 1 ? l : c.bindType || v, (u = (Q.get(s, "events") || Object.create(null))[e.type] && Q.get(s, "handle")) && u.apply(s, t), (u = d && s[d]) && u.apply && U(s) && (e.result = u.apply(s, t), !1 === e.result && e.preventDefault());
          }

          return e.type = v, a || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(h.pop(), t) || !U(r) || d && g(r[v]) && !y(r) && ((o = r[d]) && (r[d] = null), E.event.triggered = v, e.isPropagationStopped() && p.addEventListener(v, xt), r[v](), e.isPropagationStopped() && p.removeEventListener(v, xt), E.event.triggered = void 0, o && (r[d] = o)), e.result;
        }
      },
      simulate: function simulate(e, t, n) {
        var r = E.extend(new E.Event(), n, {
          type: e,
          isSimulated: !0
        });
        E.event.trigger(r, null, t);
      }
    }), E.fn.extend({
      trigger: function trigger(e, t) {
        return this.each(function () {
          E.event.trigger(e, t, this);
        });
      },
      triggerHandler: function triggerHandler(e, t) {
        var n = this[0];
        if (n) return E.event.trigger(e, t, n, !0);
      }
    }), m.focusin || E.each({
      focus: "focusin",
      blur: "focusout"
    }, function (e, t) {
      var n = function n(e) {
        E.event.simulate(t, e.target, E.event.fix(e));
      };

      E.event.special[t] = {
        setup: function setup() {
          var r = this.ownerDocument || this.document || this,
              a = Q.access(r, t);
          a || r.addEventListener(e, n, !0), Q.access(r, t, (a || 0) + 1);
        },
        teardown: function teardown() {
          var r = this.ownerDocument || this.document || this,
              a = Q.access(r, t) - 1;
          a ? Q.access(r, t, a) : (r.removeEventListener(e, n, !0), Q.remove(r, t));
        }
      };
    });
    var Tt = n.location,
        Et = {
      guid: Date.now()
    },
        Ct = /\?/;

    E.parseXML = function (e) {
      var t, r;
      if (!e || "string" != typeof e) return null;

      try {
        t = new n.DOMParser().parseFromString(e, "text/xml");
      } catch (e) {}

      return r = t && t.getElementsByTagName("parsererror")[0], t && !r || E.error("Invalid XML: " + (r ? E.map(r.childNodes, function (e) {
        return e.textContent;
      }).join("\n") : e)), t;
    };

    var St = /\[\]$/,
        Mt = /\r?\n/g,
        kt = /^(?:submit|button|image|reset|file)$/i,
        Pt = /^(?:input|select|textarea|keygen)/i;

    function Lt(e, t, n, r) {
      var a;
      if (Array.isArray(t)) E.each(t, function (t, a) {
        n || St.test(e) ? r(e, a) : Lt(e + "[" + ("object" == _typeof(a) && null != a ? t : "") + "]", a, n, r);
      });else if (n || "object" !== T(t)) r(e, t);else for (a in t) {
        Lt(e + "[" + a + "]", t[a], n, r);
      }
    }

    E.param = function (e, t) {
      var n,
          r = [],
          a = function a(e, t) {
        var n = g(t) ? t() : t;
        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };

      if (null == e) return "";
      if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, function () {
        a(this.name, this.value);
      });else for (n in e) {
        Lt(n, e[n], t, a);
      }
      return r.join("&");
    }, E.fn.extend({
      serialize: function serialize() {
        return E.param(this.serializeArray());
      },
      serializeArray: function serializeArray() {
        return this.map(function () {
          var e = E.prop(this, "elements");
          return e ? E.makeArray(e) : this;
        }).filter(function () {
          var e = this.type;
          return this.name && !E(this).is(":disabled") && Pt.test(this.nodeName) && !kt.test(e) && (this.checked || !ve.test(e));
        }).map(function (e, t) {
          var n = E(this).val();
          return null == n ? null : Array.isArray(n) ? E.map(n, function (e) {
            return {
              name: t.name,
              value: e.replace(Mt, "\r\n")
            };
          }) : {
            name: t.name,
            value: n.replace(Mt, "\r\n")
          };
        }).get();
      }
    });
    var At = /%20/g,
        zt = /#.*$/,
        Dt = /([?&])_=[^&]*/,
        $t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ot = /^(?:GET|HEAD)$/,
        Nt = /^\/\//,
        It = {},
        jt = {},
        Ht = "*/".concat("*"),
        qt = b.createElement("a");

    function Bt(e) {
      return function (t, n) {
        "string" != typeof t && (n = t, t = "*");
        var r,
            a = 0,
            i = t.toLowerCase().match(j) || [];
        if (g(n)) for (; r = i[a++];) {
          "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        }
      };
    }

    function Rt(e, t, n, r) {
      var a = {},
          i = e === jt;

      function s(o) {
        var l;
        return a[o] = !0, E.each(e[o] || [], function (e, o) {
          var d = o(t, n, r);
          return "string" != typeof d || i || a[d] ? i ? !(l = d) : void 0 : (t.dataTypes.unshift(d), s(d), !1);
        }), l;
      }

      return s(t.dataTypes[0]) || !a["*"] && s("*");
    }

    function Gt(e, t) {
      var n,
          r,
          a = E.ajaxSettings.flatOptions || {};

      for (n in t) {
        void 0 !== t[n] && ((a[n] ? e : r || (r = {}))[n] = t[n]);
      }

      return r && E.extend(!0, e, r), e;
    }

    qt.href = Tt.href, E.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Tt.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Ht,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": E.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function ajaxSetup(e, t) {
        return t ? Gt(Gt(e, E.ajaxSettings), t) : Gt(E.ajaxSettings, e);
      },
      ajaxPrefilter: Bt(It),
      ajaxTransport: Bt(jt),
      ajax: function ajax(e, t) {
        "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
        var r,
            a,
            i,
            s,
            o,
            l,
            d,
            u,
            c,
            p,
            f = E.ajaxSetup({}, t),
            h = f.context || f,
            v = f.context && (h.nodeType || h.jquery) ? E(h) : E.event,
            m = E.Deferred(),
            g = E.Callbacks("once memory"),
            y = f.statusCode || {},
            w = {},
            x = {},
            T = "canceled",
            C = {
          readyState: 0,
          getResponseHeader: function getResponseHeader(e) {
            var t;

            if (d) {
              if (!s) for (s = {}; t = $t.exec(i);) {
                s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
              t = s[e.toLowerCase() + " "];
            }

            return null == t ? null : t.join(", ");
          },
          getAllResponseHeaders: function getAllResponseHeaders() {
            return d ? i : null;
          },
          setRequestHeader: function setRequestHeader(e, t) {
            return null == d && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, w[e] = t), this;
          },
          overrideMimeType: function overrideMimeType(e) {
            return null == d && (f.mimeType = e), this;
          },
          statusCode: function statusCode(e) {
            var t;
            if (e) if (d) C.always(e[C.status]);else for (t in e) {
              y[t] = [y[t], e[t]];
            }
            return this;
          },
          abort: function abort(e) {
            var t = e || T;
            return r && r.abort(t), S(0, t), this;
          }
        };

        if (m.promise(C), f.url = ((e || f.url || Tt.href) + "").replace(Nt, Tt.protocol + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(j) || [""], null == f.crossDomain) {
          l = b.createElement("a");

          try {
            l.href = f.url, l.href = l.href, f.crossDomain = qt.protocol + "//" + qt.host != l.protocol + "//" + l.host;
          } catch (e) {
            f.crossDomain = !0;
          }
        }

        if (f.data && f.processData && "string" != typeof f.data && (f.data = E.param(f.data, f.traditional)), Rt(It, f, t, C), d) return C;

        for (c in (u = E.event && f.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Ot.test(f.type), a = f.url.replace(zt, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(At, "+")) : (p = f.url.slice(a.length), f.data && (f.processData || "string" == typeof f.data) && (a += (Ct.test(a) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (a = a.replace(Dt, "$1"), p = (Ct.test(a) ? "&" : "?") + "_=" + Et.guid++ + p), f.url = a + p), f.ifModified && (E.lastModified[a] && C.setRequestHeader("If-Modified-Since", E.lastModified[a]), E.etag[a] && C.setRequestHeader("If-None-Match", E.etag[a])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : f.accepts["*"]), f.headers) {
          C.setRequestHeader(c, f.headers[c]);
        }

        if (f.beforeSend && (!1 === f.beforeSend.call(h, C, f) || d)) return C.abort();

        if (T = "abort", g.add(f.complete), C.done(f.success), C.fail(f.error), r = Rt(jt, f, t, C)) {
          if (C.readyState = 1, u && v.trigger("ajaxSend", [C, f]), d) return C;
          f.async && f.timeout > 0 && (o = n.setTimeout(function () {
            C.abort("timeout");
          }, f.timeout));

          try {
            d = !1, r.send(w, S);
          } catch (e) {
            if (d) throw e;
            S(-1, e);
          }
        } else S(-1, "No Transport");

        function S(e, t, s, l) {
          var c,
              p,
              b,
              w,
              x,
              T = t;
          d || (d = !0, o && n.clearTimeout(o), r = void 0, i = l || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, s && (w = function (e, t, n) {
            for (var r, a, i, s, o = e.contents, l = e.dataTypes; "*" === l[0];) {
              l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            }

            if (r) for (a in o) {
              if (o[a] && o[a].test(r)) {
                l.unshift(a);
                break;
              }
            }
            if (l[0] in n) i = l[0];else {
              for (a in n) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                  i = a;
                  break;
                }

                s || (s = a);
              }

              i = i || s;
            }
            if (i) return i !== l[0] && l.unshift(i), n[i];
          }(f, C, s)), !c && E.inArray("script", f.dataTypes) > -1 && E.inArray("json", f.dataTypes) < 0 && (f.converters["text script"] = function () {}), w = function (e, t, n, r) {
            var a,
                i,
                s,
                o,
                l,
                d = {},
                u = e.dataTypes.slice();
            if (u[1]) for (s in e.converters) {
              d[s.toLowerCase()] = e.converters[s];
            }

            for (i = u.shift(); i;) {
              if (e.responseFields[i] && (n[e.responseFields[i]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = i, i = u.shift()) if ("*" === i) i = l;else if ("*" !== l && l !== i) {
                if (!(s = d[l + " " + i] || d["* " + i])) for (a in d) {
                  if ((o = a.split(" "))[1] === i && (s = d[l + " " + o[0]] || d["* " + o[0]])) {
                    !0 === s ? s = d[a] : !0 !== d[a] && (i = o[0], u.unshift(o[1]));
                    break;
                  }
                }
                if (!0 !== s) if (s && e["throws"]) t = s(t);else try {
                  t = s(t);
                } catch (e) {
                  return {
                    state: "parsererror",
                    error: s ? e : "No conversion from " + l + " to " + i
                  };
                }
              }
            }

            return {
              state: "success",
              data: t
            };
          }(f, w, C, c), c ? (f.ifModified && ((x = C.getResponseHeader("Last-Modified")) && (E.lastModified[a] = x), (x = C.getResponseHeader("etag")) && (E.etag[a] = x)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = w.state, p = w.data, c = !(b = w.error))) : (b = T, !e && T || (T = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (t || T) + "", c ? m.resolveWith(h, [p, T, C]) : m.rejectWith(h, [C, T, b]), C.statusCode(y), y = void 0, u && v.trigger(c ? "ajaxSuccess" : "ajaxError", [C, f, c ? p : b]), g.fireWith(h, [C, T]), u && (v.trigger("ajaxComplete", [C, f]), --E.active || E.event.trigger("ajaxStop")));
        }

        return C;
      },
      getJSON: function getJSON(e, t, n) {
        return E.get(e, t, n, "json");
      },
      getScript: function getScript(e, t) {
        return E.get(e, void 0, t, "script");
      }
    }), E.each(["get", "post"], function (e, t) {
      E[t] = function (e, n, r, a) {
        return g(n) && (a = a || r, r = n, n = void 0), E.ajax(E.extend({
          url: e,
          type: t,
          dataType: a,
          data: n,
          success: r
        }, E.isPlainObject(e) && e));
      };
    }), E.ajaxPrefilter(function (e) {
      var t;

      for (t in e.headers) {
        "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
      }
    }), E._evalUrl = function (e, t, n) {
      return E.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: {
          "text script": function textScript() {}
        },
        dataFilter: function dataFilter(e) {
          E.globalEval(e, t, n);
        }
      });
    }, E.fn.extend({
      wrapAll: function wrapAll(e) {
        var t;
        return this[0] && (g(e) && (e = e.call(this[0])), t = E(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          for (var e = this; e.firstElementChild;) {
            e = e.firstElementChild;
          }

          return e;
        }).append(this)), this;
      },
      wrapInner: function wrapInner(e) {
        return g(e) ? this.each(function (t) {
          E(this).wrapInner(e.call(this, t));
        }) : this.each(function () {
          var t = E(this),
              n = t.contents();
          n.length ? n.wrapAll(e) : t.append(e);
        });
      },
      wrap: function wrap(e) {
        var t = g(e);
        return this.each(function (n) {
          E(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function unwrap(e) {
        return this.parent(e).not("body").each(function () {
          E(this).replaceWith(this.childNodes);
        }), this;
      }
    }), E.expr.pseudos.hidden = function (e) {
      return !E.expr.pseudos.visible(e);
    }, E.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, E.ajaxSettings.xhr = function () {
      try {
        return new n.XMLHttpRequest();
      } catch (e) {}
    };
    var _t = {
      0: 200,
      1223: 204
    },
        Wt = E.ajaxSettings.xhr();
    m.cors = !!Wt && "withCredentials" in Wt, m.ajax = Wt = !!Wt, E.ajaxTransport(function (e) {
      var _t3, r;

      if (m.cors || Wt && !e.crossDomain) return {
        send: function send(a, i) {
          var s,
              o = e.xhr();
          if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (s in e.xhrFields) {
            o[s] = e.xhrFields[s];
          }

          for (s in e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || a["X-Requested-With"] || (a["X-Requested-With"] = "XMLHttpRequest"), a) {
            o.setRequestHeader(s, a[s]);
          }

          _t3 = function t(e) {
            return function () {
              _t3 && (_t3 = r = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? i(0, "error") : i(o.status, o.statusText) : i(_t[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {
                binary: o.response
              } : {
                text: o.responseText
              }, o.getAllResponseHeaders()));
            };
          }, o.onload = _t3(), r = o.onerror = o.ontimeout = _t3("error"), void 0 !== o.onabort ? o.onabort = r : o.onreadystatechange = function () {
            4 === o.readyState && n.setTimeout(function () {
              _t3 && r();
            });
          }, _t3 = _t3("abort");

          try {
            o.send(e.hasContent && e.data || null);
          } catch (e) {
            if (_t3) throw e;
          }
        },
        abort: function abort() {
          _t3 && _t3();
        }
      };
    }), E.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }), E.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function textScript(e) {
          return E.globalEval(e), e;
        }
      }
    }), E.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), E.ajaxTransport("script", function (e) {
      var t, _n;

      if (e.crossDomain || e.scriptAttrs) return {
        send: function send(r, a) {
          t = E("<script>").attr(e.scriptAttrs || {}).prop({
            charset: e.scriptCharset,
            src: e.url
          }).on("load error", _n = function n(e) {
            t.remove(), _n = null, e && a("error" === e.type ? 404 : 200, e.type);
          }), b.head.appendChild(t[0]);
        },
        abort: function abort() {
          _n && _n();
        }
      };
    });
    var Ft,
        Xt = [],
        Yt = /(=)\?(?=&|$)|\?\?/;
    E.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function jsonpCallback() {
        var e = Xt.pop() || E.expando + "_" + Et.guid++;
        return this[e] = !0, e;
      }
    }), E.ajaxPrefilter("json jsonp", function (e, t, r) {
      var a,
          i,
          s,
          o = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
      if (o || "jsonp" === e.dataTypes[0]) return a = e.jsonpCallback = g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(Yt, "$1" + a) : !1 !== e.jsonp && (e.url += (Ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + a), e.converters["script json"] = function () {
        return s || E.error(a + " was not called"), s[0];
      }, e.dataTypes[0] = "json", i = n[a], n[a] = function () {
        s = arguments;
      }, r.always(function () {
        void 0 === i ? E(n).removeProp(a) : n[a] = i, e[a] && (e.jsonpCallback = t.jsonpCallback, Xt.push(a)), s && g(i) && i(s[0]), s = i = void 0;
      }), "script";
    }), m.createHTMLDocument = ((Ft = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ft.childNodes.length), E.parseHTML = function (e, t, n) {
      return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((r = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, t.head.appendChild(r)) : t = b), i = !n && [], (a = A.exec(e)) ? [t.createElement(a[1])] : (a = Te([e], t, i), i && i.length && E(i).remove(), E.merge([], a.childNodes)));
      var r, a, i;
    }, E.fn.load = function (e, t, n) {
      var r,
          a,
          i,
          s = this,
          o = e.indexOf(" ");
      return o > -1 && (r = mt(e.slice(o)), e = e.slice(0, o)), g(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (a = "POST"), s.length > 0 && E.ajax({
        url: e,
        type: a || "GET",
        dataType: "html",
        data: t
      }).done(function (e) {
        i = arguments, s.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e);
      }).always(n && function (e, t) {
        s.each(function () {
          n.apply(this, i || [e.responseText, t, e]);
        });
      }), this;
    }, E.expr.pseudos.animated = function (e) {
      return E.grep(E.timers, function (t) {
        return e === t.elem;
      }).length;
    }, E.offset = {
      setOffset: function setOffset(e, t, n) {
        var r,
            a,
            i,
            s,
            o,
            l,
            d = E.css(e, "position"),
            u = E(e),
            c = {};
        "static" === d && (e.style.position = "relative"), o = u.offset(), i = E.css(e, "top"), l = E.css(e, "left"), ("absolute" === d || "fixed" === d) && (i + l).indexOf("auto") > -1 ? (s = (r = u.position()).top, a = r.left) : (s = parseFloat(i) || 0, a = parseFloat(l) || 0), g(t) && (t = t.call(e, n, E.extend({}, o))), null != t.top && (c.top = t.top - o.top + s), null != t.left && (c.left = t.left - o.left + a), "using" in t ? t.using.call(e, c) : u.css(c);
      }
    }, E.fn.extend({
      offset: function offset(e) {
        if (arguments.length) return void 0 === e ? this : this.each(function (t) {
          E.offset.setOffset(this, e, t);
        });
        var t,
            n,
            r = this[0];
        return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
          top: t.top + n.pageYOffset,
          left: t.left + n.pageXOffset
        }) : {
          top: 0,
          left: 0
        } : void 0;
      },
      position: function position() {
        if (this[0]) {
          var e,
              t,
              n,
              r = this[0],
              a = {
            top: 0,
            left: 0
          };
          if ("fixed" === E.css(r, "position")) t = r.getBoundingClientRect();else {
            for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position");) {
              e = e.parentNode;
            }

            e && e !== r && 1 === e.nodeType && ((a = E(e).offset()).top += E.css(e, "borderTopWidth", !0), a.left += E.css(e, "borderLeftWidth", !0));
          }
          return {
            top: t.top - a.top - E.css(r, "marginTop", !0),
            left: t.left - a.left - E.css(r, "marginLeft", !0)
          };
        }
      },
      offsetParent: function offsetParent() {
        return this.map(function () {
          for (var e = this.offsetParent; e && "static" === E.css(e, "position");) {
            e = e.offsetParent;
          }

          return e || ie;
        });
      }
    }), E.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function (e, t) {
      var n = "pageYOffset" === t;

      E.fn[e] = function (r) {
        return W(this, function (e, r, a) {
          var i;
          if (y(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === a) return i ? i[t] : e[r];
          i ? i.scrollTo(n ? i.pageXOffset : a, n ? a : i.pageYOffset) : e[r] = a;
        }, e, r, arguments.length);
      };
    }), E.each(["top", "left"], function (e, t) {
      E.cssHooks[t] = We(m.pixelPosition, function (e, n) {
        if (n) return n = _e(e, t), qe.test(n) ? E(e).position()[t] + "px" : n;
      });
    }), E.each({
      Height: "height",
      Width: "width"
    }, function (e, t) {
      E.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, function (n, r) {
        E.fn[r] = function (a, i) {
          var s = arguments.length && (n || "boolean" != typeof a),
              o = n || (!0 === a || !0 === i ? "margin" : "border");
          return W(this, function (t, n, a) {
            var i;
            return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === a ? E.css(t, n, o) : E.style(t, n, a, o);
          }, t, s ? a : void 0, s);
        };
      });
    }), E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
      E.fn[t] = function (e) {
        return this.on(t, e);
      };
    }), E.fn.extend({
      bind: function bind(e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function unbind(e, t) {
        return this.off(e, null, t);
      },
      delegate: function delegate(e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function undelegate(e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
      },
      hover: function hover(e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      }
    }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
      E.fn[t] = function (e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
      };
    });
    var Vt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    E.proxy = function (e, t) {
      var n, r, a;
      if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), (a = function a() {
        return e.apply(t || this, r.concat(o.call(arguments)));
      }).guid = e.guid = e.guid || E.guid++, a;
    }, E.holdReady = function (e) {
      e ? E.readyWait++ : E.ready(!0);
    }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = L, E.isFunction = g, E.isWindow = y, E.camelCase = V, E.type = T, E.now = Date.now, E.isNumeric = function (e) {
      var t = E.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }, E.trim = function (e) {
      return null == e ? "" : (e + "").replace(Vt, "");
    }, void 0 === (r = function () {
      return E;
    }.apply(t, [])) || (e.exports = r);
    var Ut = n.jQuery,
        Kt = n.$;
    return E.noConflict = function (e) {
      return n.$ === E && (n.$ = Kt), e && n.jQuery === E && (n.jQuery = Ut), E;
    }, void 0 === a && (n.jQuery = n.$ = E), E;
  });
}, function (e, t, n) {
  e.exports = function () {
    "use strict";

    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function t() {
      return (t = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];

          for (var r in n) {
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
        }

        return e;
      }).apply(this, arguments);
    }

    function n(e) {
      return null !== e && "object" == _typeof(e) && "constructor" in e && e.constructor === Object;
    }

    function r(e, t) {
      void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach(function (a) {
        void 0 === e[a] ? e[a] = t[a] : n(t[a]) && n(e[a]) && Object.keys(t[a]).length > 0 && r(e[a], t[a]);
      });
    }

    var a = {
      body: {},
      addEventListener: function addEventListener() {},
      removeEventListener: function removeEventListener() {},
      activeElement: {
        blur: function blur() {},
        nodeName: ""
      },
      querySelector: function querySelector() {
        return null;
      },
      querySelectorAll: function querySelectorAll() {
        return [];
      },
      getElementById: function getElementById() {
        return null;
      },
      createEvent: function createEvent() {
        return {
          initEvent: function initEvent() {}
        };
      },
      createElement: function createElement() {
        return {
          children: [],
          childNodes: [],
          style: {},
          setAttribute: function setAttribute() {},
          getElementsByTagName: function getElementsByTagName() {
            return [];
          }
        };
      },
      createElementNS: function createElementNS() {
        return {};
      },
      importNode: function importNode() {
        return null;
      },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
      }
    };

    function i() {
      var e = "undefined" != typeof document ? document : {};
      return r(e, a), e;
    }

    var s = {
      document: a,
      navigator: {
        userAgent: ""
      },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
      },
      history: {
        replaceState: function replaceState() {},
        pushState: function pushState() {},
        go: function go() {},
        back: function back() {}
      },
      CustomEvent: function CustomEvent() {
        return this;
      },
      addEventListener: function addEventListener() {},
      removeEventListener: function removeEventListener() {},
      getComputedStyle: function getComputedStyle() {
        return {
          getPropertyValue: function getPropertyValue() {
            return "";
          }
        };
      },
      Image: function Image() {},
      Date: function Date() {},
      screen: {},
      setTimeout: function setTimeout() {},
      clearTimeout: function clearTimeout() {},
      matchMedia: function matchMedia() {
        return {};
      },
      requestAnimationFrame: function requestAnimationFrame(e) {
        return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
      },
      cancelAnimationFrame: function cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      }
    };

    function o() {
      var e = "undefined" != typeof window ? window : {};
      return r(e, s), e;
    }

    function l(e) {
      return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    function d(e, t) {
      return (d = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function u() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }

    function c(e, t, n) {
      return (c = u() ? Reflect.construct : function (e, t, n) {
        var r = [null];
        r.push.apply(r, t);
        var a = new (Function.bind.apply(e, r))();
        return n && d(a, n.prototype), a;
      }).apply(null, arguments);
    }

    function p(e) {
      var t = "function" == typeof Map ? new Map() : void 0;
      return (p = function p(e) {
        if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
        var n;
        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");

        if (void 0 !== t) {
          if (t.has(e)) return t.get(e);
          t.set(e, r);
        }

        function r() {
          return c(e, arguments, l(this).constructor);
        }

        return r.prototype = Object.create(e.prototype, {
          constructor: {
            value: r,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), d(r, e);
      })(e);
    }

    var f = function (e) {
      var t, n;

      function r(t) {
        var n, r, a;
        return r = function (e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        }(n = e.call.apply(e, [this].concat(t)) || this), a = r.__proto__, Object.defineProperty(r, "__proto__", {
          get: function get() {
            return a;
          },
          set: function set(e) {
            a.__proto__ = e;
          }
        }), n;
      }

      return n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, r;
    }(p(Array));

    function h(e) {
      void 0 === e && (e = []);
      var t = [];
      return e.forEach(function (e) {
        Array.isArray(e) ? t.push.apply(t, h(e)) : t.push(e);
      }), t;
    }

    function v(e, t) {
      return Array.prototype.filter.call(e, t);
    }

    function m(e, t) {
      var n = o(),
          r = i(),
          a = [];
      if (!t && e instanceof f) return e;
      if (!e) return new f(a);

      if ("string" == typeof e) {
        var s = e.trim();

        if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
          var l = "div";
          0 === s.indexOf("<li") && (l = "ul"), 0 === s.indexOf("<tr") && (l = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (l = "tr"), 0 === s.indexOf("<tbody") && (l = "table"), 0 === s.indexOf("<option") && (l = "select");
          var d = r.createElement(l);
          d.innerHTML = s;

          for (var u = 0; u < d.childNodes.length; u += 1) {
            a.push(d.childNodes[u]);
          }
        } else a = function (e, t) {
          if ("string" != typeof e) return [e];

          for (var n = [], r = t.querySelectorAll(e), a = 0; a < r.length; a += 1) {
            n.push(r[a]);
          }

          return n;
        }(e.trim(), t || r);
      } else if (e.nodeType || e === n || e === r) a.push(e);else if (Array.isArray(e)) {
        if (e instanceof f) return e;
        a = e;
      }

      return new f(function (e) {
        for (var t = [], n = 0; n < e.length; n += 1) {
          -1 === t.indexOf(e[n]) && t.push(e[n]);
        }

        return t;
      }(a));
    }

    m.fn = f.prototype;
    var g,
        y,
        b,
        w = {
      addClass: function addClass() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
          t[n] = arguments[n];
        }

        var r = h(t.map(function (e) {
          return e.split(" ");
        }));
        return this.forEach(function (e) {
          var t;
          (t = e.classList).add.apply(t, r);
        }), this;
      },
      removeClass: function removeClass() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
          t[n] = arguments[n];
        }

        var r = h(t.map(function (e) {
          return e.split(" ");
        }));
        return this.forEach(function (e) {
          var t;
          (t = e.classList).remove.apply(t, r);
        }), this;
      },
      hasClass: function hasClass() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
          t[n] = arguments[n];
        }

        var r = h(t.map(function (e) {
          return e.split(" ");
        }));
        return v(this, function (e) {
          return r.filter(function (t) {
            return e.classList.contains(t);
          }).length > 0;
        }).length > 0;
      },
      toggleClass: function toggleClass() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
          t[n] = arguments[n];
        }

        var r = h(t.map(function (e) {
          return e.split(" ");
        }));
        this.forEach(function (e) {
          r.forEach(function (t) {
            e.classList.toggle(t);
          });
        });
      },
      attr: function attr(e, t) {
        if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;

        for (var n = 0; n < this.length; n += 1) {
          if (2 === arguments.length) this[n].setAttribute(e, t);else for (var r in e) {
            this[n][r] = e[r], this[n].setAttribute(r, e[r]);
          }
        }

        return this;
      },
      removeAttr: function removeAttr(e) {
        for (var t = 0; t < this.length; t += 1) {
          this[t].removeAttribute(e);
        }

        return this;
      },
      transform: function transform(e) {
        for (var t = 0; t < this.length; t += 1) {
          this[t].style.transform = e;
        }

        return this;
      },
      transition: function transition(e) {
        for (var t = 0; t < this.length; t += 1) {
          this[t].style.transitionDuration = "string" != typeof e ? e + "ms" : e;
        }

        return this;
      },
      on: function on() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
          t[n] = arguments[n];
        }

        var r = t[0],
            a = t[1],
            i = t[2],
            s = t[3];

        function o(e) {
          var t = e.target;

          if (t) {
            var n = e.target.dom7EventData || [];
            if (n.indexOf(e) < 0 && n.unshift(e), m(t).is(a)) i.apply(t, n);else for (var r = m(t).parents(), s = 0; s < r.length; s += 1) {
              m(r[s]).is(a) && i.apply(r[s], n);
            }
          }
        }

        function l(e) {
          var t = e && e.target && e.target.dom7EventData || [];
          t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
        }

        "function" == typeof t[1] && (r = t[0], i = t[1], s = t[2], a = void 0), s || (s = !1);

        for (var d, u = r.split(" "), c = 0; c < this.length; c += 1) {
          var p = this[c];
          if (a) for (d = 0; d < u.length; d += 1) {
            var f = u[d];
            p.dom7LiveListeners || (p.dom7LiveListeners = {}), p.dom7LiveListeners[f] || (p.dom7LiveListeners[f] = []), p.dom7LiveListeners[f].push({
              listener: i,
              proxyListener: o
            }), p.addEventListener(f, o, s);
          } else for (d = 0; d < u.length; d += 1) {
            var h = u[d];
            p.dom7Listeners || (p.dom7Listeners = {}), p.dom7Listeners[h] || (p.dom7Listeners[h] = []), p.dom7Listeners[h].push({
              listener: i,
              proxyListener: l
            }), p.addEventListener(h, l, s);
          }
        }

        return this;
      },
      off: function off() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
          t[n] = arguments[n];
        }

        var r = t[0],
            a = t[1],
            i = t[2],
            s = t[3];
        "function" == typeof t[1] && (r = t[0], i = t[1], s = t[2], a = void 0), s || (s = !1);

        for (var o = r.split(" "), l = 0; l < o.length; l += 1) {
          for (var d = o[l], u = 0; u < this.length; u += 1) {
            var c = this[u],
                p = void 0;
            if (!a && c.dom7Listeners ? p = c.dom7Listeners[d] : a && c.dom7LiveListeners && (p = c.dom7LiveListeners[d]), p && p.length) for (var f = p.length - 1; f >= 0; f -= 1) {
              var h = p[f];
              i && h.listener === i || i && h.listener && h.listener.dom7proxy && h.listener.dom7proxy === i ? (c.removeEventListener(d, h.proxyListener, s), p.splice(f, 1)) : i || (c.removeEventListener(d, h.proxyListener, s), p.splice(f, 1));
            }
          }
        }

        return this;
      },
      trigger: function trigger() {
        for (var e = o(), t = arguments.length, n = new Array(t), r = 0; r < t; r++) {
          n[r] = arguments[r];
        }

        for (var a = n[0].split(" "), i = n[1], s = 0; s < a.length; s += 1) {
          for (var l = a[s], d = 0; d < this.length; d += 1) {
            var u = this[d];

            if (e.CustomEvent) {
              var c = new e.CustomEvent(l, {
                detail: i,
                bubbles: !0,
                cancelable: !0
              });
              u.dom7EventData = n.filter(function (e, t) {
                return t > 0;
              }), u.dispatchEvent(c), u.dom7EventData = [], delete u.dom7EventData;
            }
          }
        }

        return this;
      },
      transitionEnd: function transitionEnd(e) {
        var t = this;
        return e && t.on("transitionend", function n(r) {
          r.target === this && (e.call(this, r), t.off("transitionend", n));
        }), this;
      },
      outerWidth: function outerWidth(e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
          }

          return this[0].offsetWidth;
        }

        return null;
      },
      outerHeight: function outerHeight(e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
          }

          return this[0].offsetHeight;
        }

        return null;
      },
      styles: function styles() {
        var e = o();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function offset() {
        if (this.length > 0) {
          var e = o(),
              t = i(),
              n = this[0],
              r = n.getBoundingClientRect(),
              a = t.body,
              s = n.clientTop || a.clientTop || 0,
              l = n.clientLeft || a.clientLeft || 0,
              d = n === e ? e.scrollY : n.scrollTop,
              u = n === e ? e.scrollX : n.scrollLeft;
          return {
            top: r.top + d - s,
            left: r.left + u - l
          };
        }

        return null;
      },
      css: function css(e, t) {
        var n,
            r = o();

        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (n = 0; n < this.length; n += 1) {
              for (var a in e) {
                this[n].style[a] = e[a];
              }
            }

            return this;
          }

          if (this[0]) return r.getComputedStyle(this[0], null).getPropertyValue(e);
        }

        if (2 === arguments.length && "string" == typeof e) {
          for (n = 0; n < this.length; n += 1) {
            this[n].style[e] = t;
          }

          return this;
        }

        return this;
      },
      each: function each(e) {
        return e ? (this.forEach(function (t, n) {
          e.apply(t, [t, n]);
        }), this) : this;
      },
      html: function html(e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;

        for (var t = 0; t < this.length; t += 1) {
          this[t].innerHTML = e;
        }

        return this;
      },
      text: function text(e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;

        for (var t = 0; t < this.length; t += 1) {
          this[t].textContent = e;
        }

        return this;
      },
      is: function is(e) {
        var t,
            n,
            r = o(),
            a = i(),
            s = this[0];
        if (!s || void 0 === e) return !1;

        if ("string" == typeof e) {
          if (s.matches) return s.matches(e);
          if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
          if (s.msMatchesSelector) return s.msMatchesSelector(e);

          for (t = m(e), n = 0; n < t.length; n += 1) {
            if (t[n] === s) return !0;
          }

          return !1;
        }

        if (e === a) return s === a;
        if (e === r) return s === r;

        if (e.nodeType || e instanceof f) {
          for (t = e.nodeType ? [e] : e, n = 0; n < t.length; n += 1) {
            if (t[n] === s) return !0;
          }

          return !1;
        }

        return !1;
      },
      index: function index() {
        var e,
            t = this[0];

        if (t) {
          for (e = 0; null !== (t = t.previousSibling);) {
            1 === t.nodeType && (e += 1);
          }

          return e;
        }
      },
      eq: function eq(e) {
        if (void 0 === e) return this;
        var t = this.length;
        if (e > t - 1) return m([]);

        if (e < 0) {
          var n = t + e;
          return m(n < 0 ? [] : [this[n]]);
        }

        return m([this[e]]);
      },
      append: function append() {
        for (var e, t = i(), n = 0; n < arguments.length; n += 1) {
          e = n < 0 || arguments.length <= n ? void 0 : arguments[n];

          for (var r = 0; r < this.length; r += 1) {
            if ("string" == typeof e) {
              var a = t.createElement("div");

              for (a.innerHTML = e; a.firstChild;) {
                this[r].appendChild(a.firstChild);
              }
            } else if (e instanceof f) for (var s = 0; s < e.length; s += 1) {
              this[r].appendChild(e[s]);
            } else this[r].appendChild(e);
          }
        }

        return this;
      },
      prepend: function prepend(e) {
        var t,
            n,
            r = i();

        for (t = 0; t < this.length; t += 1) {
          if ("string" == typeof e) {
            var a = r.createElement("div");

            for (a.innerHTML = e, n = a.childNodes.length - 1; n >= 0; n -= 1) {
              this[t].insertBefore(a.childNodes[n], this[t].childNodes[0]);
            }
          } else if (e instanceof f) for (n = 0; n < e.length; n += 1) {
            this[t].insertBefore(e[n], this[t].childNodes[0]);
          } else this[t].insertBefore(e, this[t].childNodes[0]);
        }

        return this;
      },
      next: function next(e) {
        return this.length > 0 ? e ? this[0].nextElementSibling && m(this[0].nextElementSibling).is(e) ? m([this[0].nextElementSibling]) : m([]) : this[0].nextElementSibling ? m([this[0].nextElementSibling]) : m([]) : m([]);
      },
      nextAll: function nextAll(e) {
        var t = [],
            n = this[0];
        if (!n) return m([]);

        for (; n.nextElementSibling;) {
          var r = n.nextElementSibling;
          e ? m(r).is(e) && t.push(r) : t.push(r), n = r;
        }

        return m(t);
      },
      prev: function prev(e) {
        if (this.length > 0) {
          var t = this[0];
          return e ? t.previousElementSibling && m(t.previousElementSibling).is(e) ? m([t.previousElementSibling]) : m([]) : t.previousElementSibling ? m([t.previousElementSibling]) : m([]);
        }

        return m([]);
      },
      prevAll: function prevAll(e) {
        var t = [],
            n = this[0];
        if (!n) return m([]);

        for (; n.previousElementSibling;) {
          var r = n.previousElementSibling;
          e ? m(r).is(e) && t.push(r) : t.push(r), n = r;
        }

        return m(t);
      },
      parent: function parent(e) {
        for (var t = [], n = 0; n < this.length; n += 1) {
          null !== this[n].parentNode && (e ? m(this[n].parentNode).is(e) && t.push(this[n].parentNode) : t.push(this[n].parentNode));
        }

        return m(t);
      },
      parents: function parents(e) {
        for (var t = [], n = 0; n < this.length; n += 1) {
          for (var r = this[n].parentNode; r;) {
            e ? m(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
          }
        }

        return m(t);
      },
      closest: function closest(e) {
        var t = this;
        return void 0 === e ? m([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function find(e) {
        for (var t = [], n = 0; n < this.length; n += 1) {
          try {
            var r = this[n].querySelectorAll(e);
          } catch (t) {
            console.log(e);
          }

          for (var a = 0; a < r.length; a += 1) {
            t.push(r[a]);
          }
        }

        return m(t);
      },
      children: function children(e) {
        for (var t = [], n = 0; n < this.length; n += 1) {
          for (var r = this[n].children, a = 0; a < r.length; a += 1) {
            e && !m(r[a]).is(e) || t.push(r[a]);
          }
        }

        return m(t);
      },
      filter: function filter(e) {
        return m(v(this, e));
      },
      remove: function remove() {
        for (var e = 0; e < this.length; e += 1) {
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        }

        return this;
      }
    };

    function x(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }

    function T() {
      return Date.now();
    }

    function E(e, t) {
      void 0 === t && (t = "x");

      var n,
          r,
          a,
          i = o(),
          s = function (e) {
        var t,
            n = o();
        return n.getComputedStyle && (t = n.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t;
      }(e);

      return i.WebKitCSSMatrix ? ((r = s.transform || s.webkitTransform).split(",").length > 6 && (r = r.split(", ").map(function (e) {
        return e.replace(",", ".");
      }).join(", ")), a = new i.WebKitCSSMatrix("none" === r ? "" : r)) : n = (a = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (r = i.WebKitCSSMatrix ? a.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (r = i.WebKitCSSMatrix ? a.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), r || 0;
    }

    function C(e) {
      return "object" == _typeof(e) && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
    }

    function S() {
      for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = ["__proto__", "constructor", "prototype"], n = 1; n < arguments.length; n += 1) {
        var r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
        if (null != r) for (var a = Object.keys(Object(r)).filter(function (e) {
          return t.indexOf(e) < 0;
        }), i = 0, s = a.length; i < s; i += 1) {
          var o = a[i],
              l = Object.getOwnPropertyDescriptor(r, o);
          void 0 !== l && l.enumerable && (C(e[o]) && C(r[o]) ? r[o].__swiper__ ? e[o] = r[o] : S(e[o], r[o]) : !C(e[o]) && C(r[o]) ? (e[o] = {}, r[o].__swiper__ ? e[o] = r[o] : S(e[o], r[o])) : e[o] = r[o]);
        }
      }

      return e;
    }

    function M(e, t) {
      Object.keys(t).forEach(function (n) {
        C(t[n]) && Object.keys(t[n]).forEach(function (r) {
          "function" == typeof t[n][r] && (t[n][r] = t[n][r].bind(e));
        }), e[n] = t[n];
      });
    }

    function k(e) {
      return void 0 === e && (e = ""), "." + e.trim().replace(/([\.:\/])/g, "\\$1").replace(/ /g, ".");
    }

    function P() {
      return g || (g = function () {
        var e = o(),
            t = i();
        return {
          touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
          pointerEvents: !!e.PointerEvent && "maxTouchPoints" in e.navigator && e.navigator.maxTouchPoints >= 0,
          observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
          passiveListener: function () {
            var t = !1;

            try {
              var n = Object.defineProperty({}, "passive", {
                get: function get() {
                  t = !0;
                }
              });
              e.addEventListener("testPassiveListener", null, n);
            } catch (e) {}

            return t;
          }(),
          gestures: "ongesturestart" in e
        };
      }()), g;
    }

    function L(e) {
      return void 0 === e && (e = {}), y || (y = function (e) {
        var t = (void 0 === e ? {} : e).userAgent,
            n = P(),
            r = o(),
            a = r.navigator.platform,
            i = t || r.navigator.userAgent,
            s = {
          ios: !1,
          android: !1
        },
            l = r.screen.width,
            d = r.screen.height,
            u = i.match(/(Android);?[\s\/]+([\d.]+)?/),
            c = i.match(/(iPad).*OS\s([\d_]+)/),
            p = i.match(/(iPod)(.*OS\s([\d_]+))?/),
            f = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            h = "Win32" === a,
            v = "MacIntel" === a;
        return !c && v && n.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(l + "x" + d) >= 0 && ((c = i.match(/(Version)\/([\d.]+)/)) || (c = [0, 1, "13_0_0"]), v = !1), u && !h && (s.os = "android", s.android = !0), (c || f || p) && (s.os = "ios", s.ios = !0), s;
      }(e)), y;
    }

    function A() {
      return b || (b = function () {
        var e,
            t = o();
        return {
          isEdge: !!t.navigator.userAgent.match(/Edge/g),
          isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
          isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
        };
      }()), b;
    }

    Object.keys(w).forEach(function (e) {
      Object.defineProperty(m.fn, e, {
        value: w[e],
        writable: !0
      });
    });
    var z = {
      name: "resize",
      create: function create() {
        var e = this;
        S(e, {
          resize: {
            observer: null,
            createObserver: function createObserver() {
              e && !e.destroyed && e.initialized && (e.resize.observer = new ResizeObserver(function (t) {
                var n = e.width,
                    r = e.height,
                    a = n,
                    i = r;
                t.forEach(function (t) {
                  var n = t.contentBoxSize,
                      r = t.contentRect,
                      s = t.target;
                  s && s !== e.el || (a = r ? r.width : (n[0] || n).inlineSize, i = r ? r.height : (n[0] || n).blockSize);
                }), a === n && i === r || e.resize.resizeHandler();
              }), e.resize.observer.observe(e.el));
            },
            removeObserver: function removeObserver() {
              e.resize.observer && e.resize.observer.unobserve && e.el && (e.resize.observer.unobserve(e.el), e.resize.observer = null);
            },
            resizeHandler: function resizeHandler() {
              e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
            },
            orientationChangeHandler: function orientationChangeHandler() {
              e && !e.destroyed && e.initialized && e.emit("orientationchange");
            }
          }
        });
      },
      on: {
        init: function init(e) {
          var t = o();
          e.params.resizeObserver && void 0 !== o().ResizeObserver ? e.resize.createObserver() : (t.addEventListener("resize", e.resize.resizeHandler), t.addEventListener("orientationchange", e.resize.orientationChangeHandler));
        },
        destroy: function destroy(e) {
          var t = o();
          e.resize.removeObserver(), t.removeEventListener("resize", e.resize.resizeHandler), t.removeEventListener("orientationchange", e.resize.orientationChangeHandler);
        }
      }
    },
        D = {
      attach: function attach(e, t) {
        void 0 === t && (t = {});
        var n = o(),
            r = this,
            a = new (n.MutationObserver || n.WebkitMutationObserver)(function (e) {
          if (1 !== e.length) {
            var t = function t() {
              r.emit("observerUpdate", e[0]);
            };

            n.requestAnimationFrame ? n.requestAnimationFrame(t) : n.setTimeout(t, 0);
          } else r.emit("observerUpdate", e[0]);
        });
        a.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData
        }), r.observer.observers.push(a);
      },
      init: function init() {
        var e = this;

        if (e.support.observer && e.params.observer) {
          if (e.params.observeParents) for (var t = e.$el.parents(), n = 0; n < t.length; n += 1) {
            e.observer.attach(t[n]);
          }
          e.observer.attach(e.$el[0], {
            childList: e.params.observeSlideChildren
          }), e.observer.attach(e.$wrapperEl[0], {
            attributes: !1
          });
        }
      },
      destroy: function destroy() {
        this.observer.observers.forEach(function (e) {
          e.disconnect();
        }), this.observer.observers = [];
      }
    },
        $ = {
      name: "observer",
      params: {
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
      },
      create: function create() {
        M(this, {
          observer: t({}, D, {
            observers: []
          })
        });
      },
      on: {
        init: function init(e) {
          e.observer.init();
        },
        destroy: function destroy(e) {
          e.observer.destroy();
        }
      }
    };

    function O(e) {
      var t = this,
          n = i(),
          r = o(),
          a = t.touchEventsData,
          s = t.params,
          l = t.touches;

      if (t.enabled && (!t.animating || !s.preventInteractionOnTransition)) {
        var d = e;
        d.originalEvent && (d = d.originalEvent);
        var u = m(d.target);
        if (("wrapper" !== s.touchEventsTarget || u.closest(t.wrapperEl).length) && (a.isTouchEvent = "touchstart" === d.type, (a.isTouchEvent || !("which" in d) || 3 !== d.which) && !(!a.isTouchEvent && "button" in d && d.button > 0 || a.isTouched && a.isMoved))) if (!!s.noSwipingClass && "" !== s.noSwipingClass && d.target && d.target.shadowRoot && e.path && e.path[0] && (u = m(e.path[0])), s.noSwiping && u.closest(s.noSwipingSelector ? s.noSwipingSelector : "." + s.noSwipingClass)[0]) t.allowClick = !0;else if (!s.swipeHandler || u.closest(s.swipeHandler)[0]) {
          l.currentX = "touchstart" === d.type ? d.targetTouches[0].pageX : d.pageX, l.currentY = "touchstart" === d.type ? d.targetTouches[0].pageY : d.pageY;
          var c = l.currentX,
              p = l.currentY,
              f = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
              h = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;

          if (f && (c <= h || c >= r.innerWidth - h)) {
            if ("prevent" !== f) return;
            e.preventDefault();
          }

          if (S(a, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
          }), l.startX = c, l.startY = p, a.touchStartTime = T(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, s.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== d.type) {
            var v = !0;
            u.is(a.formElements) && (v = !1), n.activeElement && m(n.activeElement).is(a.formElements) && n.activeElement !== u[0] && n.activeElement.blur();
            var g = v && t.allowTouchMove && s.touchStartPreventDefault;
            !s.touchStartForcePreventDefault && !g || u[0].isContentEditable || d.preventDefault();
          }

          t.emit("touchStart", d);
        }
      }
    }

    function N(e) {
      var t = i(),
          n = this,
          r = n.touchEventsData,
          a = n.params,
          s = n.touches,
          o = n.rtlTranslate;

      if (n.enabled) {
        var l = e;

        if (l.originalEvent && (l = l.originalEvent), r.isTouched) {
          if (!r.isTouchEvent || "touchmove" === l.type) {
            var d = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
                u = "touchmove" === l.type ? d.pageX : l.pageX,
                c = "touchmove" === l.type ? d.pageY : l.pageY;
            if (l.preventedByNestedSwiper) return s.startX = u, void (s.startY = c);
            if (!n.allowTouchMove) return n.allowClick = !1, void (r.isTouched && (S(s, {
              startX: u,
              startY: c,
              currentX: u,
              currentY: c
            }), r.touchStartTime = T()));
            if (r.isTouchEvent && a.touchReleaseOnEdges && !a.loop) if (n.isVertical()) {
              if (c < s.startY && n.translate <= n.maxTranslate() || c > s.startY && n.translate >= n.minTranslate()) return r.isTouched = !1, void (r.isMoved = !1);
            } else if (u < s.startX && n.translate <= n.maxTranslate() || u > s.startX && n.translate >= n.minTranslate()) return;
            if (r.isTouchEvent && t.activeElement && l.target === t.activeElement && m(l.target).is(r.formElements)) return r.isMoved = !0, void (n.allowClick = !1);

            if (r.allowTouchCallbacks && n.emit("touchMove", l), !(l.targetTouches && l.targetTouches.length > 1)) {
              s.currentX = u, s.currentY = c;
              var p,
                  f = s.currentX - s.startX,
                  h = s.currentY - s.startY;
              if (!(n.params.threshold && Math.sqrt(Math.pow(f, 2) + Math.pow(h, 2)) < n.params.threshold)) if (void 0 === r.isScrolling && (n.isHorizontal() && s.currentY === s.startY || n.isVertical() && s.currentX === s.startX ? r.isScrolling = !1 : f * f + h * h >= 25 && (p = 180 * Math.atan2(Math.abs(h), Math.abs(f)) / Math.PI, r.isScrolling = n.isHorizontal() ? p > a.touchAngle : 90 - p > a.touchAngle)), r.isScrolling && n.emit("touchMoveOpposite", l), void 0 === r.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (r.startMoving = !0)), r.isScrolling) r.isTouched = !1;else if (r.startMoving) {
                n.allowClick = !1, !a.cssMode && l.cancelable && l.preventDefault(), a.touchMoveStopPropagation && !a.nested && l.stopPropagation(), r.isMoved || (a.loop && n.loopFix(), r.startTranslate = n.getTranslate(), n.setTransition(0), n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"), r.allowMomentumBounce = !1, !a.grabCursor || !0 !== n.allowSlideNext && !0 !== n.allowSlidePrev || n.setGrabCursor(!0), n.emit("sliderFirstMove", l)), n.emit("sliderMove", l), r.isMoved = !0;
                var v = n.isHorizontal() ? f : h;
                s.diff = v, v *= a.touchRatio, o && (v = -v), n.swipeDirection = v > 0 ? "prev" : "next", r.currentTranslate = v + r.startTranslate;
                var g = !0,
                    y = a.resistanceRatio;

                if (a.touchReleaseOnEdges && (y = 0), v > 0 && r.currentTranslate > n.minTranslate() ? (g = !1, a.resistance && (r.currentTranslate = n.minTranslate() - 1 + Math.pow(-n.minTranslate() + r.startTranslate + v, y))) : v < 0 && r.currentTranslate < n.maxTranslate() && (g = !1, a.resistance && (r.currentTranslate = n.maxTranslate() + 1 - Math.pow(n.maxTranslate() - r.startTranslate - v, y))), g && (l.preventedByNestedSwiper = !0), !n.allowSlideNext && "next" === n.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !n.allowSlidePrev && "prev" === n.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), n.allowSlidePrev || n.allowSlideNext || (r.currentTranslate = r.startTranslate), a.threshold > 0) {
                  if (!(Math.abs(v) > a.threshold || r.allowThresholdMove)) return void (r.currentTranslate = r.startTranslate);
                  if (!r.allowThresholdMove) return r.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, r.currentTranslate = r.startTranslate, void (s.diff = n.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY);
                }

                a.followFinger && !a.cssMode && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (n.updateActiveIndex(), n.updateSlidesClasses()), a.freeMode && (0 === r.velocities.length && r.velocities.push({
                  position: s[n.isHorizontal() ? "startX" : "startY"],
                  time: r.touchStartTime
                }), r.velocities.push({
                  position: s[n.isHorizontal() ? "currentX" : "currentY"],
                  time: T()
                })), n.updateProgress(r.currentTranslate), n.setTranslate(r.currentTranslate));
              }
            }
          }
        } else r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", l);
      }
    }

    function I(e) {
      var t = this,
          n = t.touchEventsData,
          r = t.params,
          a = t.touches,
          i = t.rtlTranslate,
          s = t.$wrapperEl,
          o = t.slidesGrid,
          l = t.snapGrid;

      if (t.enabled) {
        var d = e;
        if (d.originalEvent && (d = d.originalEvent), n.allowTouchCallbacks && t.emit("touchEnd", d), n.allowTouchCallbacks = !1, !n.isTouched) return n.isMoved && r.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, void (n.startMoving = !1);
        r.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        var u,
            c = T(),
            p = c - n.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap click", d), p < 300 && c - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)), n.lastClickTime = T(), x(function () {
          t.destroyed || (t.allowClick = !0);
        }), !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === a.diff || n.currentTranslate === n.startTranslate) return n.isTouched = !1, n.isMoved = !1, void (n.startMoving = !1);
        if (n.isTouched = !1, n.isMoved = !1, n.startMoving = !1, u = r.followFinger ? i ? t.translate : -t.translate : -n.currentTranslate, !r.cssMode) if (r.freeMode) {
          if (u < -t.minTranslate()) return void t.slideTo(t.activeIndex);
          if (u > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));

          if (r.freeModeMomentum) {
            if (n.velocities.length > 1) {
              var f = n.velocities.pop(),
                  h = n.velocities.pop(),
                  v = f.position - h.position,
                  m = f.time - h.time;
              t.velocity = v / m, t.velocity /= 2, Math.abs(t.velocity) < r.freeModeMinimumVelocity && (t.velocity = 0), (m > 150 || T() - f.time > 300) && (t.velocity = 0);
            } else t.velocity = 0;

            t.velocity *= r.freeModeMomentumVelocityRatio, n.velocities.length = 0;
            var g = 1e3 * r.freeModeMomentumRatio,
                y = t.velocity * g,
                b = t.translate + y;
            i && (b = -b);
            var w,
                E,
                C = !1,
                S = 20 * Math.abs(t.velocity) * r.freeModeMomentumBounceRatio;
            if (b < t.maxTranslate()) r.freeModeMomentumBounce ? (b + t.maxTranslate() < -S && (b = t.maxTranslate() - S), w = t.maxTranslate(), C = !0, n.allowMomentumBounce = !0) : b = t.maxTranslate(), r.loop && r.centeredSlides && (E = !0);else if (b > t.minTranslate()) r.freeModeMomentumBounce ? (b - t.minTranslate() > S && (b = t.minTranslate() + S), w = t.minTranslate(), C = !0, n.allowMomentumBounce = !0) : b = t.minTranslate(), r.loop && r.centeredSlides && (E = !0);else if (r.freeModeSticky) {
              for (var M, k = 0; k < l.length; k += 1) {
                if (l[k] > -b) {
                  M = k;
                  break;
                }
              }

              b = -(b = Math.abs(l[M] - b) < Math.abs(l[M - 1] - b) || "next" === t.swipeDirection ? l[M] : l[M - 1]);
            }

            if (E && t.once("transitionEnd", function () {
              t.loopFix();
            }), 0 !== t.velocity) {
              if (g = i ? Math.abs((-b - t.translate) / t.velocity) : Math.abs((b - t.translate) / t.velocity), r.freeModeSticky) {
                var P = Math.abs((i ? -b : b) - t.translate),
                    L = t.slidesSizesGrid[t.activeIndex];
                g = P < L ? r.speed : P < 2 * L ? 1.5 * r.speed : 2.5 * r.speed;
              }
            } else if (r.freeModeSticky) return void t.slideToClosest();

            r.freeModeMomentumBounce && C ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating = !0, s.transitionEnd(function () {
              t && !t.destroyed && n.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(r.speed), setTimeout(function () {
                t.setTranslate(w), s.transitionEnd(function () {
                  t && !t.destroyed && t.transitionEnd();
                });
              }, 0));
            })) : t.velocity ? (t.updateProgress(b), t.setTransition(g), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, s.transitionEnd(function () {
              t && !t.destroyed && t.transitionEnd();
            }))) : (t.emit("_freeModeNoMomentumRelease"), t.updateProgress(b)), t.updateActiveIndex(), t.updateSlidesClasses();
          } else {
            if (r.freeModeSticky) return void t.slideToClosest();
            r.freeMode && t.emit("_freeModeNoMomentumRelease");
          }

          (!r.freeModeMomentum || p >= r.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
        } else {
          for (var A = 0, z = t.slidesSizesGrid[0], D = 0; D < o.length; D += D < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
            var $ = D < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
            void 0 !== o[D + $] ? u >= o[D] && u < o[D + $] && (A = D, z = o[D + $] - o[D]) : u >= o[D] && (A = D, z = o[o.length - 1] - o[o.length - 2]);
          }

          var O = (u - o[A]) / z,
              N = A < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;

          if (p > r.longSwipesMs) {
            if (!r.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (O >= r.longSwipesRatio ? t.slideTo(A + N) : t.slideTo(A)), "prev" === t.swipeDirection && (O > 1 - r.longSwipesRatio ? t.slideTo(A + N) : t.slideTo(A));
          } else {
            if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
            !t.navigation || d.target !== t.navigation.nextEl && d.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(A + N), "prev" === t.swipeDirection && t.slideTo(A)) : d.target === t.navigation.nextEl ? t.slideTo(A + N) : t.slideTo(A);
          }
        }
      }
    }

    function j() {
      var e = this,
          t = e.params,
          n = e.el;

      if (!n || 0 !== n.offsetWidth) {
        t.breakpoints && e.setBreakpoint();
        var r = e.allowSlideNext,
            a = e.allowSlidePrev,
            i = e.snapGrid;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = a, e.allowSlideNext = r, e.params.watchOverflow && i !== e.snapGrid && e.checkOverflow();
      }
    }

    function H(e) {
      var t = this;
      t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
    }

    function q() {
      var e = this,
          t = e.wrapperEl,
          n = e.rtlTranslate;

      if (e.enabled) {
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = n ? t.scrollWidth - t.offsetWidth - t.scrollLeft : -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        var r = e.maxTranslate() - e.minTranslate();
        (0 === r ? 0 : (e.translate - e.minTranslate()) / r) !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
      }
    }

    var B = !1;

    function R() {}

    var G = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !1,
      nested: !1,
      enabled: !0,
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: .02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: .5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: .85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-container-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1
    },
        _ = {
      modular: {
        useParams: function useParams(e) {
          var t = this;
          t.modules && Object.keys(t.modules).forEach(function (n) {
            var r = t.modules[n];
            r.params && S(e, r.params);
          });
        },
        useModules: function useModules(e) {
          void 0 === e && (e = {});
          var t = this;
          t.modules && Object.keys(t.modules).forEach(function (n) {
            var r = t.modules[n],
                a = e[n] || {};
            r.on && t.on && Object.keys(r.on).forEach(function (e) {
              t.on(e, r.on[e]);
            }), r.create && r.create.bind(t)(a);
          });
        }
      },
      eventsEmitter: {
        on: function on(e, t, n) {
          var r = this;
          if ("function" != typeof t) return r;
          var a = n ? "unshift" : "push";
          return e.split(" ").forEach(function (e) {
            r.eventsListeners[e] || (r.eventsListeners[e] = []), r.eventsListeners[e][a](t);
          }), r;
        },
        once: function once(e, t, n) {
          var r = this;
          if ("function" != typeof t) return r;

          function a() {
            r.off(e, a), a.__emitterProxy && delete a.__emitterProxy;

            for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++) {
              i[s] = arguments[s];
            }

            t.apply(r, i);
          }

          return a.__emitterProxy = t, r.on(e, a, n);
        },
        onAny: function onAny(e, t) {
          var n = this;
          if ("function" != typeof e) return n;
          var r = t ? "unshift" : "push";
          return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
        },
        offAny: function offAny(e) {
          var t = this;
          if (!t.eventsAnyListeners) return t;
          var n = t.eventsAnyListeners.indexOf(e);
          return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
        },
        off: function off(e, t) {
          var n = this;
          return n.eventsListeners ? (e.split(" ").forEach(function (e) {
            void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].forEach(function (r, a) {
              (r === t || r.__emitterProxy && r.__emitterProxy === t) && n.eventsListeners[e].splice(a, 1);
            });
          }), n) : n;
        },
        emit: function emit() {
          var e,
              t,
              n,
              r = this;
          if (!r.eventsListeners) return r;

          for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++) {
            i[s] = arguments[s];
          }

          "string" == typeof i[0] || Array.isArray(i[0]) ? (e = i[0], t = i.slice(1, i.length), n = r) : (e = i[0].events, t = i[0].data, n = i[0].context || r), t.unshift(n);
          var o = Array.isArray(e) ? e : e.split(" ");
          return o.forEach(function (e) {
            r.eventsAnyListeners && r.eventsAnyListeners.length && r.eventsAnyListeners.forEach(function (r) {
              r.apply(n, [e].concat(t));
            }), r.eventsListeners && r.eventsListeners[e] && r.eventsListeners[e].forEach(function (e) {
              e.apply(n, t);
            });
          }), r;
        }
      },
      update: {
        updateSize: function updateSize() {
          var e,
              t,
              n = this,
              r = n.$el;
          e = void 0 !== n.params.width && null !== n.params.width ? n.params.width : r[0].clientWidth, t = void 0 !== n.params.height && null !== n.params.height ? n.params.height : r[0].clientHeight, 0 === e && n.isHorizontal() || 0 === t && n.isVertical() || (e = e - parseInt(r.css("padding-left") || 0, 10) - parseInt(r.css("padding-right") || 0, 10), t = t - parseInt(r.css("padding-top") || 0, 10) - parseInt(r.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), S(n, {
            width: e,
            height: t,
            size: n.isHorizontal() ? e : t
          }));
        },
        updateSlides: function updateSlides() {
          var e = this;

          function t(t) {
            return e.isHorizontal() ? t : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom"
            }[t];
          }

          function n(e, n) {
            return parseFloat(e.getPropertyValue(t(n)) || 0);
          }

          var r = e.params,
              a = e.$wrapperEl,
              i = e.size,
              s = e.rtlTranslate,
              o = e.wrongRTL,
              l = e.virtual && r.virtual.enabled,
              d = l ? e.virtual.slides.length : e.slides.length,
              u = a.children("." + e.params.slideClass),
              c = l ? e.virtual.slides.length : u.length,
              p = [],
              f = [],
              h = [],
              v = r.slidesOffsetBefore;
          "function" == typeof v && (v = r.slidesOffsetBefore.call(e));
          var m = r.slidesOffsetAfter;
          "function" == typeof m && (m = r.slidesOffsetAfter.call(e));
          var g = e.snapGrid.length,
              y = e.slidesGrid.length,
              b = r.spaceBetween,
              w = -v,
              x = 0,
              T = 0;

          if (void 0 !== i) {
            var E, C;
            "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * i), e.virtualSize = -b, s ? u.css({
              marginLeft: "",
              marginTop: ""
            }) : u.css({
              marginRight: "",
              marginBottom: ""
            }), r.slidesPerColumn > 1 && (E = Math.floor(c / r.slidesPerColumn) === c / e.params.slidesPerColumn ? c : Math.ceil(c / r.slidesPerColumn) * r.slidesPerColumn, "auto" !== r.slidesPerView && "row" === r.slidesPerColumnFill && (E = Math.max(E, r.slidesPerView * r.slidesPerColumn)));

            for (var M, k, P, L = r.slidesPerColumn, A = E / L, z = Math.floor(c / r.slidesPerColumn), D = 0; D < c; D += 1) {
              C = 0;
              var $ = u.eq(D);

              if (r.slidesPerColumn > 1) {
                var O = void 0,
                    N = void 0,
                    I = void 0;

                if ("row" === r.slidesPerColumnFill && r.slidesPerGroup > 1) {
                  var j = Math.floor(D / (r.slidesPerGroup * r.slidesPerColumn)),
                      H = D - r.slidesPerColumn * r.slidesPerGroup * j,
                      q = 0 === j ? r.slidesPerGroup : Math.min(Math.ceil((c - j * L * r.slidesPerGroup) / L), r.slidesPerGroup);
                  O = (N = H - (I = Math.floor(H / q)) * q + j * r.slidesPerGroup) + I * E / L, $.css({
                    "-webkit-box-ordinal-group": O,
                    "-moz-box-ordinal-group": O,
                    "-ms-flex-order": O,
                    "-webkit-order": O,
                    order: O
                  });
                } else "column" === r.slidesPerColumnFill ? (I = D - (N = Math.floor(D / L)) * L, (N > z || N === z && I === L - 1) && (I += 1) >= L && (I = 0, N += 1)) : N = D - (I = Math.floor(D / A)) * A;

                $.css(t("margin-top"), 0 !== I && r.spaceBetween && r.spaceBetween + "px");
              }

              if ("none" !== $.css("display")) {
                if ("auto" === r.slidesPerView) {
                  var B = getComputedStyle($[0]),
                      R = $[0].style.transform,
                      G = $[0].style.webkitTransform;
                  if (R && ($[0].style.transform = "none"), G && ($[0].style.webkitTransform = "none"), r.roundLengths) C = e.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0);else {
                    var _ = n(B, "width"),
                        W = n(B, "padding-left"),
                        F = n(B, "padding-right"),
                        X = n(B, "margin-left"),
                        Y = n(B, "margin-right"),
                        V = B.getPropertyValue("box-sizing");

                    if (V && "border-box" === V) C = _ + X + Y;else {
                      var U = $[0],
                          K = U.clientWidth;
                      C = _ + W + F + X + Y + (U.offsetWidth - K);
                    }
                  }
                  R && ($[0].style.transform = R), G && ($[0].style.webkitTransform = G), r.roundLengths && (C = Math.floor(C));
                } else C = (i - (r.slidesPerView - 1) * b) / r.slidesPerView, r.roundLengths && (C = Math.floor(C)), u[D] && (u[D].style[t("width")] = C + "px");

                u[D] && (u[D].swiperSlideSize = C), h.push(C), r.centeredSlides ? (w = w + C / 2 + x / 2 + b, 0 === x && 0 !== D && (w = w - i / 2 - b), 0 === D && (w = w - i / 2 - b), Math.abs(w) < .001 && (w = 0), r.roundLengths && (w = Math.floor(w)), T % r.slidesPerGroup == 0 && p.push(w), f.push(w)) : (r.roundLengths && (w = Math.floor(w)), (T - Math.min(e.params.slidesPerGroupSkip, T)) % e.params.slidesPerGroup == 0 && p.push(w), f.push(w), w = w + C + b), e.virtualSize += C + b, x = C, T += 1;
              }
            }

            if (e.virtualSize = Math.max(e.virtualSize, i) + m, s && o && ("slide" === r.effect || "coverflow" === r.effect) && a.css({
              width: e.virtualSize + r.spaceBetween + "px"
            }), r.setWrapperSize && a.css(((k = {})[t("width")] = e.virtualSize + r.spaceBetween + "px", k)), r.slidesPerColumn > 1 && (e.virtualSize = (C + r.spaceBetween) * E, e.virtualSize = Math.ceil(e.virtualSize / r.slidesPerColumn) - r.spaceBetween, a.css(((P = {})[t("width")] = e.virtualSize + r.spaceBetween + "px", P)), r.centeredSlides)) {
              M = [];

              for (var Q = 0; Q < p.length; Q += 1) {
                var J = p[Q];
                r.roundLengths && (J = Math.floor(J)), p[Q] < e.virtualSize + p[0] && M.push(J);
              }

              p = M;
            }

            if (!r.centeredSlides) {
              M = [];

              for (var Z = 0; Z < p.length; Z += 1) {
                var ee = p[Z];
                r.roundLengths && (ee = Math.floor(ee)), p[Z] <= e.virtualSize - i && M.push(ee);
              }

              p = M, Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - i);
            }

            if (0 === p.length && (p = [0]), 0 !== r.spaceBetween) {
              var te,
                  ne = e.isHorizontal() && s ? "marginLeft" : t("marginRight");
              u.filter(function (e, t) {
                return !r.cssMode || t !== u.length - 1;
              }).css(((te = {})[ne] = b + "px", te));
            }

            if (r.centeredSlides && r.centeredSlidesBounds) {
              var re = 0;
              h.forEach(function (e) {
                re += e + (r.spaceBetween ? r.spaceBetween : 0);
              });
              var ae = (re -= r.spaceBetween) - i;
              p = p.map(function (e) {
                return e < 0 ? -v : e > ae ? ae + m : e;
              });
            }

            if (r.centerInsufficientSlides) {
              var ie = 0;

              if (h.forEach(function (e) {
                ie += e + (r.spaceBetween ? r.spaceBetween : 0);
              }), (ie -= r.spaceBetween) < i) {
                var se = (i - ie) / 2;
                p.forEach(function (e, t) {
                  p[t] = e - se;
                }), f.forEach(function (e, t) {
                  f[t] = e + se;
                });
              }
            }

            S(e, {
              slides: u,
              snapGrid: p,
              slidesGrid: f,
              slidesSizesGrid: h
            }), c !== d && e.emit("slidesLengthChange"), p.length !== g && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== y && e.emit("slidesGridLengthChange"), (r.watchSlidesProgress || r.watchSlidesVisibility) && e.updateSlidesOffset();
          }
        },
        updateAutoHeight: function updateAutoHeight(e) {
          var t,
              n = this,
              r = [],
              a = n.virtual && n.params.virtual.enabled,
              i = 0;
          "number" == typeof e ? n.setTransition(e) : !0 === e && n.setTransition(n.params.speed);

          var s = function s(e) {
            return a ? n.slides.filter(function (t) {
              return parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e;
            })[0] : n.slides.eq(e)[0];
          };

          if ("auto" !== n.params.slidesPerView && n.params.slidesPerView > 1) {
            if (n.params.centeredSlides) n.visibleSlides.each(function (e) {
              r.push(e);
            });else for (t = 0; t < Math.ceil(n.params.slidesPerView); t += 1) {
              var o = n.activeIndex + t;
              if (o > n.slides.length && !a) break;
              r.push(s(o));
            }
          } else r.push(s(n.activeIndex));

          for (t = 0; t < r.length; t += 1) {
            if (void 0 !== r[t]) {
              var l = r[t].offsetHeight;
              i = l > i ? l : i;
            }
          }

          i && n.$wrapperEl.css("height", i + "px");
        },
        updateSlidesOffset: function updateSlidesOffset() {
          for (var e = this.slides, t = 0; t < e.length; t += 1) {
            e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
          }
        },
        updateSlidesProgress: function updateSlidesProgress(e) {
          void 0 === e && (e = this && this.translate || 0);
          var t = this,
              n = t.params,
              r = t.slides,
              a = t.rtlTranslate;

          if (0 !== r.length) {
            void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset();
            var i = -e;
            a && (i = e), r.removeClass(n.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];

            for (var s = 0; s < r.length; s += 1) {
              var o = r[s],
                  l = (i + (n.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + n.spaceBetween);

              if (n.watchSlidesVisibility || n.centeredSlides && n.autoHeight) {
                var d = -(i - o.swiperSlideOffset),
                    u = d + t.slidesSizesGrid[s];
                (d >= 0 && d < t.size - 1 || u > 1 && u <= t.size || d <= 0 && u >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(s), r.eq(s).addClass(n.slideVisibleClass));
              }

              o.progress = a ? -l : l;
            }

            t.visibleSlides = m(t.visibleSlides);
          }
        },
        updateProgress: function updateProgress(e) {
          var t = this;

          if (void 0 === e) {
            var n = t.rtlTranslate ? -1 : 1;
            e = t && t.translate && t.translate * n || 0;
          }

          var r = t.params,
              a = t.maxTranslate() - t.minTranslate(),
              i = t.progress,
              s = t.isBeginning,
              o = t.isEnd,
              l = s,
              d = o;
          0 === a ? (i = 0, s = !0, o = !0) : (s = (i = (e - t.minTranslate()) / a) <= 0, o = i >= 1), S(t, {
            progress: i,
            isBeginning: s,
            isEnd: o
          }), (r.watchSlidesProgress || r.watchSlidesVisibility || r.centeredSlides && r.autoHeight) && t.updateSlidesProgress(e), s && !l && t.emit("reachBeginning toEdge"), o && !d && t.emit("reachEnd toEdge"), (l && !s || d && !o) && t.emit("fromEdge"), t.emit("progress", i);
        },
        updateSlidesClasses: function updateSlidesClasses() {
          var e,
              t = this,
              n = t.slides,
              r = t.params,
              a = t.$wrapperEl,
              i = t.activeIndex,
              s = t.realIndex,
              o = t.virtual && r.virtual.enabled;
          n.removeClass(r.slideActiveClass + " " + r.slideNextClass + " " + r.slidePrevClass + " " + r.slideDuplicateActiveClass + " " + r.slideDuplicateNextClass + " " + r.slideDuplicatePrevClass), (e = o ? t.$wrapperEl.find("." + r.slideClass + '[data-swiper-slide-index="' + i + '"]') : n.eq(i)).addClass(r.slideActiveClass), r.loop && (e.hasClass(r.slideDuplicateClass) ? a.children("." + r.slideClass + ":not(." + r.slideDuplicateClass + ')[data-swiper-slide-index="' + s + '"]').addClass(r.slideDuplicateActiveClass) : a.children("." + r.slideClass + "." + r.slideDuplicateClass + '[data-swiper-slide-index="' + s + '"]').addClass(r.slideDuplicateActiveClass));
          var l = e.nextAll("." + r.slideClass).eq(0).addClass(r.slideNextClass);
          r.loop && 0 === l.length && (l = n.eq(0)).addClass(r.slideNextClass);
          var d = e.prevAll("." + r.slideClass).eq(0).addClass(r.slidePrevClass);
          r.loop && 0 === d.length && (d = n.eq(-1)).addClass(r.slidePrevClass), r.loop && (l.hasClass(r.slideDuplicateClass) ? a.children("." + r.slideClass + ":not(." + r.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(r.slideDuplicateNextClass) : a.children("." + r.slideClass + "." + r.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(r.slideDuplicateNextClass), d.hasClass(r.slideDuplicateClass) ? a.children("." + r.slideClass + ":not(." + r.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(r.slideDuplicatePrevClass) : a.children("." + r.slideClass + "." + r.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(r.slideDuplicatePrevClass)), t.emitSlidesClasses();
        },
        updateActiveIndex: function updateActiveIndex(e) {
          var t,
              n = this,
              r = n.rtlTranslate ? n.translate : -n.translate,
              a = n.slidesGrid,
              i = n.snapGrid,
              s = n.params,
              o = n.activeIndex,
              l = n.realIndex,
              d = n.snapIndex,
              u = e;

          if (void 0 === u) {
            for (var c = 0; c < a.length; c += 1) {
              void 0 !== a[c + 1] ? r >= a[c] && r < a[c + 1] - (a[c + 1] - a[c]) / 2 ? u = c : r >= a[c] && r < a[c + 1] && (u = c + 1) : r >= a[c] && (u = c);
            }

            s.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0);
          }

          if (i.indexOf(r) >= 0) t = i.indexOf(r);else {
            var p = Math.min(s.slidesPerGroupSkip, u);
            t = p + Math.floor((u - p) / s.slidesPerGroup);
          }

          if (t >= i.length && (t = i.length - 1), u !== o) {
            var f = parseInt(n.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
            S(n, {
              snapIndex: t,
              realIndex: f,
              previousIndex: o,
              activeIndex: u
            }), n.emit("activeIndexChange"), n.emit("snapIndexChange"), l !== f && n.emit("realIndexChange"), (n.initialized || n.params.runCallbacksOnInit) && n.emit("slideChange");
          } else t !== d && (n.snapIndex = t, n.emit("snapIndexChange"));
        },
        updateClickedSlide: function updateClickedSlide(e) {
          var t,
              n = this,
              r = n.params,
              a = m(e.target).closest("." + r.slideClass)[0],
              i = !1;
          if (a) for (var s = 0; s < n.slides.length; s += 1) {
            if (n.slides[s] === a) {
              i = !0, t = s;
              break;
            }
          }
          if (!a || !i) return n.clickedSlide = void 0, void (n.clickedIndex = void 0);
          n.clickedSlide = a, n.virtual && n.params.virtual.enabled ? n.clickedIndex = parseInt(m(a).attr("data-swiper-slide-index"), 10) : n.clickedIndex = t, r.slideToClickedSlide && void 0 !== n.clickedIndex && n.clickedIndex !== n.activeIndex && n.slideToClickedSlide();
        }
      },
      translate: {
        getTranslate: function getTranslate(e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          var t = this,
              n = t.params,
              r = t.rtlTranslate,
              a = t.translate,
              i = t.$wrapperEl;
          if (n.virtualTranslate) return r ? -a : a;
          if (n.cssMode) return a;
          var s = E(i[0], e);
          return r && (s = -s), s || 0;
        },
        setTranslate: function setTranslate(e, t) {
          var n = this,
              r = n.rtlTranslate,
              a = n.params,
              i = n.$wrapperEl,
              s = n.wrapperEl,
              o = n.progress,
              l = 0,
              d = 0;
          n.isHorizontal() ? l = r ? -e : e : d = e, a.roundLengths && (l = Math.floor(l), d = Math.floor(d)), a.cssMode ? s[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -l : -d : a.virtualTranslate || i.transform("translate3d(" + l + "px, " + d + "px, 0px)"), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? l : d;
          var u = n.maxTranslate() - n.minTranslate();
          (0 === u ? 0 : (e - n.minTranslate()) / u) !== o && n.updateProgress(e), n.emit("setTranslate", n.translate, t);
        },
        minTranslate: function minTranslate() {
          return -this.snapGrid[0];
        },
        maxTranslate: function maxTranslate() {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function translateTo(e, t, n, r, a) {
          void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0), void 0 === r && (r = !0);
          var i = this,
              s = i.params,
              o = i.wrapperEl;
          if (i.animating && s.preventInteractionOnTransition) return !1;
          var l,
              d = i.minTranslate(),
              u = i.maxTranslate();

          if (l = r && e > d ? d : r && e < u ? u : e, i.updateProgress(l), s.cssMode) {
            var c,
                p = i.isHorizontal();
            return 0 === t ? o[p ? "scrollLeft" : "scrollTop"] = -l : o.scrollTo ? o.scrollTo(((c = {})[p ? "left" : "top"] = -l, c.behavior = "smooth", c)) : o[p ? "scrollLeft" : "scrollTop"] = -l, !0;
          }

          return 0 === t ? (i.setTransition(0), i.setTranslate(l), n && (i.emit("beforeTransitionStart", t, a), i.emit("transitionEnd"))) : (i.setTransition(t), i.setTranslate(l), n && (i.emit("beforeTransitionStart", t, a), i.emit("transitionStart")), i.animating || (i.animating = !0, i.onTranslateToWrapperTransitionEnd || (i.onTranslateToWrapperTransitionEnd = function (e) {
            i && !i.destroyed && e.target === this && (i.$wrapperEl[0].removeEventListener("transitionend", i.onTranslateToWrapperTransitionEnd), i.$wrapperEl[0].removeEventListener("webkitTransitionEnd", i.onTranslateToWrapperTransitionEnd), i.onTranslateToWrapperTransitionEnd = null, delete i.onTranslateToWrapperTransitionEnd, n && i.emit("transitionEnd"));
          }), i.$wrapperEl[0].addEventListener("transitionend", i.onTranslateToWrapperTransitionEnd), i.$wrapperEl[0].addEventListener("webkitTransitionEnd", i.onTranslateToWrapperTransitionEnd))), !0;
        }
      },
      transition: {
        setTransition: function setTransition(e, t) {
          var n = this;
          n.params.cssMode || n.$wrapperEl.transition(e), n.emit("setTransition", e, t);
        },
        transitionStart: function transitionStart(e, t) {
          void 0 === e && (e = !0);
          var n = this,
              r = n.activeIndex,
              a = n.params,
              i = n.previousIndex;

          if (!a.cssMode) {
            a.autoHeight && n.updateAutoHeight();
            var s = t;

            if (s || (s = r > i ? "next" : r < i ? "prev" : "reset"), n.emit("transitionStart"), e && r !== i) {
              if ("reset" === s) return void n.emit("slideResetTransitionStart");
              n.emit("slideChangeTransitionStart"), "next" === s ? n.emit("slideNextTransitionStart") : n.emit("slidePrevTransitionStart");
            }
          }
        },
        transitionEnd: function transitionEnd(e, t) {
          void 0 === e && (e = !0);
          var n = this,
              r = n.activeIndex,
              a = n.previousIndex,
              i = n.params;

          if (n.animating = !1, !i.cssMode) {
            n.setTransition(0);
            var s = t;

            if (s || (s = r > a ? "next" : r < a ? "prev" : "reset"), n.emit("transitionEnd"), e && r !== a) {
              if ("reset" === s) return void n.emit("slideResetTransitionEnd");
              n.emit("slideChangeTransitionEnd"), "next" === s ? n.emit("slideNextTransitionEnd") : n.emit("slidePrevTransitionEnd");
            }
          }
        }
      },
      slide: {
        slideTo: function slideTo(e, t, n, r, a) {
          if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0), "number" != typeof e && "string" != typeof e) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + _typeof(e) + "] given.");

          if ("string" == typeof e) {
            var i = parseInt(e, 10);
            if (!isFinite(i)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + e + "] given.");
            e = i;
          }

          var s = this,
              o = e;
          o < 0 && (o = 0);
          var l = s.params,
              d = s.snapGrid,
              u = s.slidesGrid,
              c = s.previousIndex,
              p = s.activeIndex,
              f = s.rtlTranslate,
              h = s.wrapperEl,
              v = s.enabled;
          if (s.animating && l.preventInteractionOnTransition || !v && !r && !a) return !1;
          var m = Math.min(s.params.slidesPerGroupSkip, o),
              g = m + Math.floor((o - m) / s.params.slidesPerGroup);
          g >= d.length && (g = d.length - 1), (p || l.initialSlide || 0) === (c || 0) && n && s.emit("beforeSlideChangeStart");
          var y,
              b = -d[g];
          if (s.updateProgress(b), l.normalizeSlideIndex) for (var w = 0; w < u.length; w += 1) {
            var x = -Math.floor(100 * b),
                T = Math.floor(100 * u[w]),
                E = Math.floor(100 * u[w + 1]);
            void 0 !== u[w + 1] ? x >= T && x < E - (E - T) / 2 ? o = w : x >= T && x < E && (o = w + 1) : x >= T && (o = w);
          }

          if (s.initialized && o !== p) {
            if (!s.allowSlideNext && b < s.translate && b < s.minTranslate()) return !1;
            if (!s.allowSlidePrev && b > s.translate && b > s.maxTranslate() && (p || 0) !== o) return !1;
          }

          if (y = o > p ? "next" : o < p ? "prev" : "reset", f && -b === s.translate || !f && b === s.translate) return s.updateActiveIndex(o), l.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== l.effect && s.setTranslate(b), "reset" !== y && (s.transitionStart(n, y), s.transitionEnd(n, y)), !1;

          if (l.cssMode) {
            var C,
                S = s.isHorizontal(),
                M = -b;
            return f && (M = h.scrollWidth - h.offsetWidth - M), 0 === t ? h[S ? "scrollLeft" : "scrollTop"] = M : h.scrollTo ? h.scrollTo(((C = {})[S ? "left" : "top"] = M, C.behavior = "smooth", C)) : h[S ? "scrollLeft" : "scrollTop"] = M, !0;
          }

          return 0 === t ? (s.setTransition(0), s.setTranslate(b), s.updateActiveIndex(o), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, r), s.transitionStart(n, y), s.transitionEnd(n, y)) : (s.setTransition(t), s.setTranslate(b), s.updateActiveIndex(o), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, r), s.transitionStart(n, y), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function (e) {
            s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(n, y));
          }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))), !0;
        },
        slideToLoop: function slideToLoop(e, t, n, r) {
          void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0);
          var a = this,
              i = e;
          return a.params.loop && (i += a.loopedSlides), a.slideTo(i, t, n, r);
        },
        slideNext: function slideNext(e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var r = this,
              a = r.params,
              i = r.animating;
          if (!r.enabled) return r;
          var s = r.activeIndex < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup;

          if (a.loop) {
            if (i && a.loopPreventsSlide) return !1;
            r.loopFix(), r._clientLeft = r.$wrapperEl[0].clientLeft;
          }

          return r.slideTo(r.activeIndex + s, e, t, n);
        },
        slidePrev: function slidePrev(e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var r = this,
              a = r.params,
              i = r.animating,
              s = r.snapGrid,
              o = r.slidesGrid,
              l = r.rtlTranslate;
          if (!r.enabled) return r;

          if (a.loop) {
            if (i && a.loopPreventsSlide) return !1;
            r.loopFix(), r._clientLeft = r.$wrapperEl[0].clientLeft;
          }

          function d(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }

          var u = d(l ? r.translate : -r.translate),
              c = s.map(function (e) {
            return d(e);
          });
          s[c.indexOf(u)];
          var p,
              f = s[c.indexOf(u) - 1];
          return void 0 === f && a.cssMode && s.forEach(function (e) {
            !f && u >= e && (f = e);
          }), void 0 !== f && (p = o.indexOf(f)) < 0 && (p = r.activeIndex - 1), r.slideTo(p, e, t, n);
        },
        slideReset: function slideReset(e, t, n) {
          return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, n);
        },
        slideToClosest: function slideToClosest(e, t, n, r) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === r && (r = .5);
          var a = this,
              i = a.activeIndex,
              s = Math.min(a.params.slidesPerGroupSkip, i),
              o = s + Math.floor((i - s) / a.params.slidesPerGroup),
              l = a.rtlTranslate ? a.translate : -a.translate;

          if (l >= a.snapGrid[o]) {
            var d = a.snapGrid[o];
            l - d > (a.snapGrid[o + 1] - d) * r && (i += a.params.slidesPerGroup);
          } else {
            var u = a.snapGrid[o - 1];
            l - u <= (a.snapGrid[o] - u) * r && (i -= a.params.slidesPerGroup);
          }

          return i = Math.max(i, 0), i = Math.min(i, a.slidesGrid.length - 1), a.slideTo(i, e, t, n);
        },
        slideToClickedSlide: function slideToClickedSlide() {
          var e,
              t = this,
              n = t.params,
              r = t.$wrapperEl,
              a = "auto" === n.slidesPerView ? t.slidesPerViewDynamic() : n.slidesPerView,
              i = t.clickedIndex;

          if (n.loop) {
            if (t.animating) return;
            e = parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"), 10), n.centeredSlides ? i < t.loopedSlides - a / 2 || i > t.slides.length - t.loopedSlides + a / 2 ? (t.loopFix(), i = r.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + n.slideDuplicateClass + ")").eq(0).index(), x(function () {
              t.slideTo(i);
            })) : t.slideTo(i) : i > t.slides.length - a ? (t.loopFix(), i = r.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + n.slideDuplicateClass + ")").eq(0).index(), x(function () {
              t.slideTo(i);
            })) : t.slideTo(i);
          } else t.slideTo(i);
        }
      },
      loop: {
        loopCreate: function loopCreate() {
          var e = this,
              t = i(),
              n = e.params,
              r = e.$wrapperEl;
          r.children("." + n.slideClass + "." + n.slideDuplicateClass).remove();
          var a = r.children("." + n.slideClass);

          if (n.loopFillGroupWithBlank) {
            var s = n.slidesPerGroup - a.length % n.slidesPerGroup;

            if (s !== n.slidesPerGroup) {
              for (var o = 0; o < s; o += 1) {
                var l = m(t.createElement("div")).addClass(n.slideClass + " " + n.slideBlankClass);
                r.append(l);
              }

              a = r.children("." + n.slideClass);
            }
          }

          "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = a.length), e.loopedSlides = Math.ceil(parseFloat(n.loopedSlides || n.slidesPerView, 10)), e.loopedSlides += n.loopAdditionalSlides, e.loopedSlides > a.length && (e.loopedSlides = a.length);
          var d = [],
              u = [];
          a.each(function (t, n) {
            var r = m(t);
            n < e.loopedSlides && u.push(t), n < a.length && n >= a.length - e.loopedSlides && d.push(t), r.attr("data-swiper-slide-index", n);
          });

          for (var c = 0; c < u.length; c += 1) {
            r.append(m(u[c].cloneNode(!0)).addClass(n.slideDuplicateClass));
          }

          for (var p = d.length - 1; p >= 0; p -= 1) {
            r.prepend(m(d[p].cloneNode(!0)).addClass(n.slideDuplicateClass));
          }
        },
        loopFix: function loopFix() {
          var e = this;
          e.emit("beforeLoopFix");
          var t,
              n = e.activeIndex,
              r = e.slides,
              a = e.loopedSlides,
              i = e.allowSlidePrev,
              s = e.allowSlideNext,
              o = e.snapGrid,
              l = e.rtlTranslate;
          e.allowSlidePrev = !0, e.allowSlideNext = !0;
          var d = -o[n] - e.getTranslate();
          n < a ? (t = r.length - 3 * a + n, t += a, e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)) : n >= r.length - a && (t = -r.length + n + a, t += a, e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)), e.allowSlidePrev = i, e.allowSlideNext = s, e.emit("loopFix");
        },
        loopDestroy: function loopDestroy() {
          var e = this,
              t = e.$wrapperEl,
              n = e.params,
              r = e.slides;
          t.children("." + n.slideClass + "." + n.slideDuplicateClass + ",." + n.slideClass + "." + n.slideBlankClass).remove(), r.removeAttr("data-swiper-slide-index");
        }
      },
      grabCursor: {
        setGrabCursor: function setGrabCursor(e) {
          var t = this;

          if (!(t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)) {
            var n = t.el;
            n.style.cursor = "move", n.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", n.style.cursor = e ? "-moz-grabbin" : "-moz-grab", n.style.cursor = e ? "grabbing" : "grab";
          }
        },
        unsetGrabCursor: function unsetGrabCursor() {
          var e = this;
          e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.el.style.cursor = "");
        }
      },
      manipulation: {
        appendSlide: function appendSlide(e) {
          var t = this,
              n = t.$wrapperEl,
              r = t.params;
          if (r.loop && t.loopDestroy(), "object" == _typeof(e) && "length" in e) for (var a = 0; a < e.length; a += 1) {
            e[a] && n.append(e[a]);
          } else n.append(e);
          r.loop && t.loopCreate(), r.observer && t.support.observer || t.update();
        },
        prependSlide: function prependSlide(e) {
          var t = this,
              n = t.params,
              r = t.$wrapperEl,
              a = t.activeIndex;
          n.loop && t.loopDestroy();
          var i = a + 1;

          if ("object" == _typeof(e) && "length" in e) {
            for (var s = 0; s < e.length; s += 1) {
              e[s] && r.prepend(e[s]);
            }

            i = a + e.length;
          } else r.prepend(e);

          n.loop && t.loopCreate(), n.observer && t.support.observer || t.update(), t.slideTo(i, 0, !1);
        },
        addSlide: function addSlide(e, t) {
          var n = this,
              r = n.$wrapperEl,
              a = n.params,
              i = n.activeIndex;
          a.loop && (i -= n.loopedSlides, n.loopDestroy(), n.slides = r.children("." + a.slideClass));
          var s = n.slides.length;
          if (e <= 0) n.prependSlide(t);else if (e >= s) n.appendSlide(t);else {
            for (var o = i > e ? i + 1 : i, l = [], d = s - 1; d >= e; d -= 1) {
              var u = n.slides.eq(d);
              u.remove(), l.unshift(u);
            }

            if ("object" == _typeof(t) && "length" in t) {
              for (var c = 0; c < t.length; c += 1) {
                t[c] && r.append(t[c]);
              }

              o = i > e ? i + t.length : i;
            } else r.append(t);

            for (var p = 0; p < l.length; p += 1) {
              r.append(l[p]);
            }

            a.loop && n.loopCreate(), a.observer && n.support.observer || n.update(), a.loop ? n.slideTo(o + n.loopedSlides, 0, !1) : n.slideTo(o, 0, !1);
          }
        },
        removeSlide: function removeSlide(e) {
          var t = this,
              n = t.params,
              r = t.$wrapperEl,
              a = t.activeIndex;
          n.loop && (a -= t.loopedSlides, t.loopDestroy(), t.slides = r.children("." + n.slideClass));
          var i,
              s = a;

          if ("object" == _typeof(e) && "length" in e) {
            for (var o = 0; o < e.length; o += 1) {
              i = e[o], t.slides[i] && t.slides.eq(i).remove(), i < s && (s -= 1);
            }

            s = Math.max(s, 0);
          } else i = e, t.slides[i] && t.slides.eq(i).remove(), i < s && (s -= 1), s = Math.max(s, 0);

          n.loop && t.loopCreate(), n.observer && t.support.observer || t.update(), n.loop ? t.slideTo(s + t.loopedSlides, 0, !1) : t.slideTo(s, 0, !1);
        },
        removeAllSlides: function removeAllSlides() {
          for (var e = [], t = 0; t < this.slides.length; t += 1) {
            e.push(t);
          }

          this.removeSlide(e);
        }
      },
      events: {
        attachEvents: function attachEvents() {
          var e = this,
              t = i(),
              n = e.params,
              r = e.touchEvents,
              a = e.el,
              s = e.wrapperEl,
              o = e.device,
              l = e.support;
          e.onTouchStart = O.bind(e), e.onTouchMove = N.bind(e), e.onTouchEnd = I.bind(e), n.cssMode && (e.onScroll = q.bind(e)), e.onClick = H.bind(e);
          var d = !!n.nested;
          if (!l.touch && l.pointerEvents) a.addEventListener(r.start, e.onTouchStart, !1), t.addEventListener(r.move, e.onTouchMove, d), t.addEventListener(r.end, e.onTouchEnd, !1);else {
            if (l.touch) {
              var u = !("touchstart" !== r.start || !l.passiveListener || !n.passiveListeners) && {
                passive: !0,
                capture: !1
              };
              a.addEventListener(r.start, e.onTouchStart, u), a.addEventListener(r.move, e.onTouchMove, l.passiveListener ? {
                passive: !1,
                capture: d
              } : d), a.addEventListener(r.end, e.onTouchEnd, u), r.cancel && a.addEventListener(r.cancel, e.onTouchEnd, u), B || (t.addEventListener("touchstart", R), B = !0);
            }

            (n.simulateTouch && !o.ios && !o.android || n.simulateTouch && !l.touch && o.ios) && (a.addEventListener("mousedown", e.onTouchStart, !1), t.addEventListener("mousemove", e.onTouchMove, d), t.addEventListener("mouseup", e.onTouchEnd, !1));
          }
          (n.preventClicks || n.preventClicksPropagation) && a.addEventListener("click", e.onClick, !0), n.cssMode && s.addEventListener("scroll", e.onScroll), n.updateOnWindowResize ? e.on(o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", j, !0) : e.on("observerUpdate", j, !0);
        },
        detachEvents: function detachEvents() {
          var e = this,
              t = i(),
              n = e.params,
              r = e.touchEvents,
              a = e.el,
              s = e.wrapperEl,
              o = e.device,
              l = e.support,
              d = !!n.nested;
          if (!l.touch && l.pointerEvents) a.removeEventListener(r.start, e.onTouchStart, !1), t.removeEventListener(r.move, e.onTouchMove, d), t.removeEventListener(r.end, e.onTouchEnd, !1);else {
            if (l.touch) {
              var u = !("onTouchStart" !== r.start || !l.passiveListener || !n.passiveListeners) && {
                passive: !0,
                capture: !1
              };
              a.removeEventListener(r.start, e.onTouchStart, u), a.removeEventListener(r.move, e.onTouchMove, d), a.removeEventListener(r.end, e.onTouchEnd, u), r.cancel && a.removeEventListener(r.cancel, e.onTouchEnd, u);
            }

            (n.simulateTouch && !o.ios && !o.android || n.simulateTouch && !l.touch && o.ios) && (a.removeEventListener("mousedown", e.onTouchStart, !1), t.removeEventListener("mousemove", e.onTouchMove, d), t.removeEventListener("mouseup", e.onTouchEnd, !1));
          }
          (n.preventClicks || n.preventClicksPropagation) && a.removeEventListener("click", e.onClick, !0), n.cssMode && s.removeEventListener("scroll", e.onScroll), e.off(o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", j);
        }
      },
      breakpoints: {
        setBreakpoint: function setBreakpoint() {
          var e = this,
              t = e.activeIndex,
              n = e.initialized,
              r = e.loopedSlides,
              a = void 0 === r ? 0 : r,
              i = e.params,
              s = e.$el,
              o = i.breakpoints;

          if (o && (!o || 0 !== Object.keys(o).length)) {
            var l = e.getBreakpoint(o, e.params.breakpointsBase, e.el);

            if (l && e.currentBreakpoint !== l) {
              var d = l in o ? o[l] : void 0;
              d && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function (e) {
                var t = d[e];
                void 0 !== t && (d[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto");
              });
              var u = d || e.originalParams,
                  c = i.slidesPerColumn > 1,
                  p = u.slidesPerColumn > 1,
                  f = i.enabled;
              c && !p ? (s.removeClass(i.containerModifierClass + "multirow " + i.containerModifierClass + "multirow-column"), e.emitContainerClasses()) : !c && p && (s.addClass(i.containerModifierClass + "multirow"), "column" === u.slidesPerColumnFill && s.addClass(i.containerModifierClass + "multirow-column"), e.emitContainerClasses());
              var h = u.direction && u.direction !== i.direction,
                  v = i.loop && (u.slidesPerView !== i.slidesPerView || h);
              h && n && e.changeDirection(), S(e.params, u);
              var m = e.params.enabled;
              S(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev
              }), f && !m ? e.disable() : !f && m && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", u), v && n && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)), e.emit("breakpoint", u);
            }
          }
        },
        getBreakpoint: function getBreakpoint(e, t, n) {
          if (void 0 === t && (t = "window"), e && ("container" !== t || n)) {
            var r = !1,
                a = o(),
                i = "window" === t ? a.innerWidth : n.clientWidth,
                s = "window" === t ? a.innerHeight : n.clientHeight,
                l = Object.keys(e).map(function (e) {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                var t = parseFloat(e.substr(1));
                return {
                  value: s * t,
                  point: e
                };
              }

              return {
                value: e,
                point: e
              };
            });
            l.sort(function (e, t) {
              return parseInt(e.value, 10) - parseInt(t.value, 10);
            });

            for (var d = 0; d < l.length; d += 1) {
              var u = l[d],
                  c = u.point;
              u.value <= i && (r = c);
            }

            return r || "max";
          }
        }
      },
      checkOverflow: {
        checkOverflow: function checkOverflow() {
          var e = this,
              t = e.params,
              n = e.isLocked,
              r = e.slides.length > 0 && t.slidesOffsetBefore + t.spaceBetween * (e.slides.length - 1) + e.slides[0].offsetWidth * e.slides.length;
          t.slidesOffsetBefore && t.slidesOffsetAfter && r ? e.isLocked = r <= e.size : e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, n !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), n && n !== e.isLocked && (e.isEnd = !1, e.navigation && e.navigation.update());
        }
      },
      classes: {
        addClasses: function addClasses() {
          var e,
              t,
              n,
              r = this,
              a = r.classNames,
              i = r.params,
              s = r.rtl,
              o = r.$el,
              l = r.device,
              d = r.support,
              u = (e = ["initialized", i.direction, {
            "pointer-events": d.pointerEvents && !d.touch
          }, {
            "free-mode": i.freeMode
          }, {
            autoheight: i.autoHeight
          }, {
            rtl: s
          }, {
            multirow: i.slidesPerColumn > 1
          }, {
            "multirow-column": i.slidesPerColumn > 1 && "column" === i.slidesPerColumnFill
          }, {
            android: l.android
          }, {
            ios: l.ios
          }, {
            "css-mode": i.cssMode
          }], t = i.containerModifierClass, n = [], e.forEach(function (e) {
            "object" == _typeof(e) ? Object.keys(e).forEach(function (r) {
              e[r] && n.push(t + r);
            }) : "string" == typeof e && n.push(t + e);
          }), n);
          a.push.apply(a, u), o.addClass([].concat(a).join(" ")), r.emitContainerClasses();
        },
        removeClasses: function removeClasses() {
          var e = this,
              t = e.$el,
              n = e.classNames;
          t.removeClass(n.join(" ")), e.emitContainerClasses();
        }
      },
      images: {
        loadImage: function loadImage(e, t, n, r, a, i) {
          var s,
              l = o();

          function d() {
            i && i();
          }

          m(e).parent("picture")[0] || e.complete && a ? d() : t ? ((s = new l.Image()).onload = d, s.onerror = d, r && (s.sizes = r), n && (s.srcset = n), t && (s.src = t)) : d();
        },
        preloadImages: function preloadImages() {
          var e = this;

          function t() {
            null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
          }

          e.imagesToLoad = e.$el.find("img");

          for (var n = 0; n < e.imagesToLoad.length; n += 1) {
            var r = e.imagesToLoad[n];
            e.loadImage(r, r.currentSrc || r.getAttribute("src"), r.srcset || r.getAttribute("srcset"), r.sizes || r.getAttribute("sizes"), !0, t);
          }
        }
      }
    },
        W = {},
        F = function () {
      function t() {
        for (var e, n, r = arguments.length, a = new Array(r), i = 0; i < r; i++) {
          a[i] = arguments[i];
        }

        if (1 === a.length && a[0].constructor && "Object" === Object.prototype.toString.call(a[0]).slice(8, -1) ? n = a[0] : (e = a[0], n = a[1]), n || (n = {}), n = S({}, n), e && !n.el && (n.el = e), n.el && m(n.el).length > 1) {
          var s = [];
          return m(n.el).each(function (e) {
            var r = S({}, n, {
              el: e
            });
            s.push(new t(r));
          }), s;
        }

        var o = this;
        o.__swiper__ = !0, o.support = P(), o.device = L({
          userAgent: n.userAgent
        }), o.browser = A(), o.eventsListeners = {}, o.eventsAnyListeners = [], void 0 === o.modules && (o.modules = {}), Object.keys(o.modules).forEach(function (e) {
          var t = o.modules[e];

          if (t.params) {
            var r = Object.keys(t.params)[0],
                a = t.params[r];
            if ("object" != _typeof(a) || null === a) return;
            if (!(r in n) || !("enabled" in a)) return;
            !0 === n[r] && (n[r] = {
              enabled: !0
            }), "object" != _typeof(n[r]) || "enabled" in n[r] || (n[r].enabled = !0), n[r] || (n[r] = {
              enabled: !1
            });
          }
        });
        var l,
            d,
            u = S({}, G);
        return o.useParams(u), o.params = S({}, u, W, n), o.originalParams = S({}, o.params), o.passedParams = S({}, n), o.params && o.params.on && Object.keys(o.params.on).forEach(function (e) {
          o.on(e, o.params.on[e]);
        }), o.params && o.params.onAny && o.onAny(o.params.onAny), o.$ = m, S(o, {
          enabled: o.params.enabled,
          el: e,
          classNames: [],
          slides: m(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: function isHorizontal() {
            return "horizontal" === o.params.direction;
          },
          isVertical: function isVertical() {
            return "vertical" === o.params.direction;
          },
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: o.params.allowSlideNext,
          allowSlidePrev: o.params.allowSlidePrev,
          touchEvents: (l = ["touchstart", "touchmove", "touchend", "touchcancel"], d = ["mousedown", "mousemove", "mouseup"], o.support.pointerEvents && (d = ["pointerdown", "pointermove", "pointerup"]), o.touchEventsTouch = {
            start: l[0],
            move: l[1],
            end: l[2],
            cancel: l[3]
          }, o.touchEventsDesktop = {
            start: d[0],
            move: d[1],
            end: d[2]
          }, o.support.touch || !o.params.simulateTouch ? o.touchEventsTouch : o.touchEventsDesktop),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            formElements: "input, select, option, textarea, button, video, label",
            lastClickTime: T(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0
          },
          allowClick: !0,
          allowTouchMove: o.params.allowTouchMove,
          touches: {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
          },
          imagesToLoad: [],
          imagesLoaded: 0
        }), o.useModules(), o.emit("_swiper"), o.params.init && o.init(), o;
      }

      var n,
          r,
          a = t.prototype;
      return a.enable = function () {
        var e = this;
        e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
      }, a.disable = function () {
        var e = this;
        e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
      }, a.setProgress = function (e, t) {
        var n = this;
        e = Math.min(Math.max(e, 0), 1);
        var r = n.minTranslate(),
            a = (n.maxTranslate() - r) * e + r;
        n.translateTo(a, void 0 === t ? 0 : t), n.updateActiveIndex(), n.updateSlidesClasses();
      }, a.emitContainerClasses = function () {
        var e = this;

        if (e.params._emitClasses && e.el) {
          var t = e.el.className.split(" ").filter(function (t) {
            return 0 === t.indexOf("swiper-container") || 0 === t.indexOf(e.params.containerModifierClass);
          });
          e.emit("_containerClasses", t.join(" "));
        }
      }, a.getSlideClasses = function (e) {
        var t = this;
        return e.className.split(" ").filter(function (e) {
          return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass);
        }).join(" ");
      }, a.emitSlidesClasses = function () {
        var e = this;

        if (e.params._emitClasses && e.el) {
          var t = [];
          e.slides.each(function (n) {
            var r = e.getSlideClasses(n);
            t.push({
              slideEl: n,
              classNames: r
            }), e.emit("_slideClass", n, r);
          }), e.emit("_slideClasses", t);
        }
      }, a.slidesPerViewDynamic = function () {
        var e = this,
            t = e.params,
            n = e.slides,
            r = e.slidesGrid,
            a = e.size,
            i = e.activeIndex,
            s = 1;

        if (t.centeredSlides) {
          for (var o, l = n[i].swiperSlideSize, d = i + 1; d < n.length; d += 1) {
            n[d] && !o && (s += 1, (l += n[d].swiperSlideSize) > a && (o = !0));
          }

          for (var u = i - 1; u >= 0; u -= 1) {
            n[u] && !o && (s += 1, (l += n[u].swiperSlideSize) > a && (o = !0));
          }
        } else for (var c = i + 1; c < n.length; c += 1) {
          r[c] - r[i] < a && (s += 1);
        }

        return s;
      }, a.update = function () {
        var e = this;

        if (e && !e.destroyed) {
          var t = e.snapGrid,
              n = e.params;
          n.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (r(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || r(), n.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
        }

        function r() {
          var t = e.rtlTranslate ? -1 * e.translate : e.translate,
              n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
        }
      }, a.changeDirection = function (e, t) {
        void 0 === t && (t = !0);
        var n = this,
            r = n.params.direction;
        return e || (e = "horizontal" === r ? "vertical" : "horizontal"), e === r || "horizontal" !== e && "vertical" !== e || (n.$el.removeClass("" + n.params.containerModifierClass + r).addClass("" + n.params.containerModifierClass + e), n.emitContainerClasses(), n.params.direction = e, n.slides.each(function (t) {
          "vertical" === e ? t.style.width = "" : t.style.height = "";
        }), n.emit("changeDirection"), t && n.update()), n;
      }, a.mount = function (e) {
        var t = this;
        if (t.mounted) return !0;
        var n,
            r = m(e || t.params.el);
        return !!(e = r[0]) && (e.swiper = t, e && e.shadowRoot && e.shadowRoot.querySelector ? (n = m(e.shadowRoot.querySelector("." + t.params.wrapperClass))).children = function (e) {
          return r.children(e);
        } : n = r.children("." + t.params.wrapperClass), S(t, {
          $el: r,
          el: e,
          $wrapperEl: n,
          wrapperEl: n[0],
          mounted: !0,
          rtl: "rtl" === e.dir.toLowerCase() || "rtl" === r.css("direction"),
          rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === r.css("direction")),
          wrongRTL: "-webkit-box" === n.css("display")
        }), !0);
      }, a.init = function (e) {
        var t = this;
        return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t;
      }, a.destroy = function (e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        var n,
            r = this,
            a = r.params,
            i = r.$el,
            s = r.$wrapperEl,
            o = r.slides;
        return void 0 === r.params || r.destroyed || (r.emit("beforeDestroy"), r.initialized = !1, r.detachEvents(), a.loop && r.loopDestroy(), t && (r.removeClasses(), i.removeAttr("style"), s.removeAttr("style"), o && o.length && o.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), r.emit("destroy"), Object.keys(r.eventsListeners).forEach(function (e) {
          r.off(e);
        }), !1 !== e && (r.$el[0].swiper = null, n = r, Object.keys(n).forEach(function (e) {
          try {
            n[e] = null;
          } catch (e) {}

          try {
            delete n[e];
          } catch (e) {}
        })), r.destroyed = !0), null;
      }, t.extendDefaults = function (e) {
        S(W, e);
      }, t.installModule = function (e) {
        t.prototype.modules || (t.prototype.modules = {});
        var n = e.name || Object.keys(t.prototype.modules).length + "_" + T();
        t.prototype.modules[n] = e;
      }, t.use = function (e) {
        return Array.isArray(e) ? (e.forEach(function (e) {
          return t.installModule(e);
        }), t) : (t.installModule(e), t);
      }, n = t, (r = [{
        key: "extendedDefaults",
        get: function get() {
          return W;
        }
      }, {
        key: "defaults",
        get: function get() {
          return G;
        }
      }]) && e(n, r), t;
    }();

    Object.keys(_).forEach(function (e) {
      Object.keys(_[e]).forEach(function (t) {
        F.prototype[t] = _[e][t];
      });
    }), F.use([z, $]);
    var X = {
      update: function update(e) {
        var t = this,
            n = t.params,
            r = n.slidesPerView,
            a = n.slidesPerGroup,
            i = n.centeredSlides,
            s = t.params.virtual,
            o = s.addSlidesBefore,
            l = s.addSlidesAfter,
            d = t.virtual,
            u = d.from,
            c = d.to,
            p = d.slides,
            f = d.slidesGrid,
            h = d.renderSlide,
            v = d.offset;
        t.updateActiveIndex();
        var m,
            g,
            y,
            b = t.activeIndex || 0;
        m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", i ? (g = Math.floor(r / 2) + a + l, y = Math.floor(r / 2) + a + o) : (g = r + (a - 1) + l, y = a + o);
        var w = Math.max((b || 0) - y, 0),
            x = Math.min((b || 0) + g, p.length - 1),
            T = (t.slidesGrid[w] || 0) - (t.slidesGrid[0] || 0);

        function E() {
          t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
        }

        if (S(t.virtual, {
          from: w,
          to: x,
          offset: T,
          slidesGrid: t.slidesGrid
        }), u === w && c === x && !e) return t.slidesGrid !== f && T !== v && t.slides.css(m, T + "px"), void t.updateProgress();
        if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
          offset: T,
          from: w,
          to: x,
          slides: function () {
            for (var e = [], t = w; t <= x; t += 1) {
              e.push(p[t]);
            }

            return e;
          }()
        }), void (t.params.virtual.renderExternalUpdate && E());
        var C = [],
            M = [];
        if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();else for (var k = u; k <= c; k += 1) {
          (k < w || k > x) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + k + '"]').remove();
        }

        for (var P = 0; P < p.length; P += 1) {
          P >= w && P <= x && (void 0 === c || e ? M.push(P) : (P > c && M.push(P), P < u && C.push(P)));
        }

        M.forEach(function (e) {
          t.$wrapperEl.append(h(p[e], e));
        }), C.sort(function (e, t) {
          return t - e;
        }).forEach(function (e) {
          t.$wrapperEl.prepend(h(p[e], e));
        }), t.$wrapperEl.children(".swiper-slide").css(m, T + "px"), E();
      },
      renderSlide: function renderSlide(e, t) {
        var n = this,
            r = n.params.virtual;
        if (r.cache && n.virtual.cache[t]) return n.virtual.cache[t];
        var a = r.renderSlide ? m(r.renderSlide.call(n, e, t)) : m('<div class="' + n.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
        return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t), r.cache && (n.virtual.cache[t] = a), a;
      },
      appendSlide: function appendSlide(e) {
        var t = this;
        if ("object" == _typeof(e) && "length" in e) for (var n = 0; n < e.length; n += 1) {
          e[n] && t.virtual.slides.push(e[n]);
        } else t.virtual.slides.push(e);
        t.virtual.update(!0);
      },
      prependSlide: function prependSlide(e) {
        var t = this,
            n = t.activeIndex,
            r = n + 1,
            a = 1;

        if (Array.isArray(e)) {
          for (var i = 0; i < e.length; i += 1) {
            e[i] && t.virtual.slides.unshift(e[i]);
          }

          r = n + e.length, a = e.length;
        } else t.virtual.slides.unshift(e);

        if (t.params.virtual.cache) {
          var s = t.virtual.cache,
              o = {};
          Object.keys(s).forEach(function (e) {
            var t = s[e],
                n = t.attr("data-swiper-slide-index");
            n && t.attr("data-swiper-slide-index", parseInt(n, 10) + 1), o[parseInt(e, 10) + a] = t;
          }), t.virtual.cache = o;
        }

        t.virtual.update(!0), t.slideTo(r, 0);
      },
      removeSlide: function removeSlide(e) {
        var t = this;

        if (null != e) {
          var n = t.activeIndex;
          if (Array.isArray(e)) for (var r = e.length - 1; r >= 0; r -= 1) {
            t.virtual.slides.splice(e[r], 1), t.params.virtual.cache && delete t.virtual.cache[e[r]], e[r] < n && (n -= 1), n = Math.max(n, 0);
          } else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < n && (n -= 1), n = Math.max(n, 0);
          t.virtual.update(!0), t.slideTo(n, 0);
        }
      },
      removeAllSlides: function removeAllSlides() {
        var e = this;
        e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0);
      }
    },
        Y = {
      name: "virtual",
      params: {
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          renderExternalUpdate: !0,
          addSlidesBefore: 0,
          addSlidesAfter: 0
        }
      },
      create: function create() {
        M(this, {
          virtual: t({}, X, {
            slides: this.params.virtual.slides,
            cache: {}
          })
        });
      },
      on: {
        beforeInit: function beforeInit(e) {
          if (e.params.virtual.enabled) {
            e.classNames.push(e.params.containerModifierClass + "virtual");
            var t = {
              watchSlidesProgress: !0
            };
            S(e.params, t), S(e.originalParams, t), e.params.initialSlide || e.virtual.update();
          }
        },
        setTranslate: function setTranslate(e) {
          e.params.virtual.enabled && e.virtual.update();
        }
      }
    },
        V = {
      handle: function handle(e) {
        var t = this;

        if (t.enabled) {
          var n = o(),
              r = i(),
              a = t.rtlTranslate,
              s = e;
          s.originalEvent && (s = s.originalEvent);
          var l = s.keyCode || s.charCode,
              d = t.params.keyboard.pageUpDown,
              u = d && 33 === l,
              c = d && 34 === l,
              p = 37 === l,
              f = 39 === l,
              h = 38 === l,
              v = 40 === l;
          if (!t.allowSlideNext && (t.isHorizontal() && f || t.isVertical() && v || c)) return !1;
          if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && h || u)) return !1;

          if (!(s.shiftKey || s.altKey || s.ctrlKey || s.metaKey || r.activeElement && r.activeElement.nodeName && ("input" === r.activeElement.nodeName.toLowerCase() || "textarea" === r.activeElement.nodeName.toLowerCase()))) {
            if (t.params.keyboard.onlyInViewport && (u || c || p || f || h || v)) {
              var m = !1;
              if (t.$el.parents("." + t.params.slideClass).length > 0 && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
              var g = t.$el,
                  y = g[0].clientWidth,
                  b = g[0].clientHeight,
                  w = n.innerWidth,
                  x = n.innerHeight,
                  T = t.$el.offset();
              a && (T.left -= t.$el[0].scrollLeft);

              for (var E = [[T.left, T.top], [T.left + y, T.top], [T.left, T.top + b], [T.left + y, T.top + b]], C = 0; C < E.length; C += 1) {
                var S = E[C];

                if (S[0] >= 0 && S[0] <= w && S[1] >= 0 && S[1] <= x) {
                  if (0 === S[0] && 0 === S[1]) continue;
                  m = !0;
                }
              }

              if (!m) return;
            }

            t.isHorizontal() ? ((u || c || p || f) && (s.preventDefault ? s.preventDefault() : s.returnValue = !1), ((c || f) && !a || (u || p) && a) && t.slideNext(), ((u || p) && !a || (c || f) && a) && t.slidePrev()) : ((u || c || h || v) && (s.preventDefault ? s.preventDefault() : s.returnValue = !1), (c || v) && t.slideNext(), (u || h) && t.slidePrev()), t.emit("keyPress", l);
          }
        }
      },
      enable: function enable() {
        var e = this,
            t = i();
        e.keyboard.enabled || (m(t).on("keydown", e.keyboard.handle), e.keyboard.enabled = !0);
      },
      disable: function disable() {
        var e = this,
            t = i();
        e.keyboard.enabled && (m(t).off("keydown", e.keyboard.handle), e.keyboard.enabled = !1);
      }
    },
        U = {
      name: "keyboard",
      params: {
        keyboard: {
          enabled: !1,
          onlyInViewport: !0,
          pageUpDown: !0
        }
      },
      create: function create() {
        M(this, {
          keyboard: t({
            enabled: !1
          }, V)
        });
      },
      on: {
        init: function init(e) {
          e.params.keyboard.enabled && e.keyboard.enable();
        },
        destroy: function destroy(e) {
          e.keyboard.enabled && e.keyboard.disable();
        }
      }
    },
        K = {
      lastScrollTime: T(),
      lastEventBeforeSnap: void 0,
      recentWheelEvents: [],
      event: function event() {
        return o().navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
          var e = i(),
              t = "onwheel",
              n = (t in e);

          if (!n) {
            var r = e.createElement("div");
            r.setAttribute(t, "return;"), n = "function" == typeof r.onwheel;
          }

          return !n && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (n = e.implementation.hasFeature("Events.wheel", "3.0")), n;
        }() ? "wheel" : "mousewheel";
      },
      normalize: function normalize(e) {
        var t = 0,
            n = 0,
            r = 0,
            a = 0;
        return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), r = 10 * t, a = 10 * n, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (r = e.deltaX), e.shiftKey && !r && (r = a, a = 0), (r || a) && e.deltaMode && (1 === e.deltaMode ? (r *= 40, a *= 40) : (r *= 800, a *= 800)), r && !t && (t = r < 1 ? -1 : 1), a && !n && (n = a < 1 ? -1 : 1), {
          spinX: t,
          spinY: n,
          pixelX: r,
          pixelY: a
        };
      },
      handleMouseEnter: function handleMouseEnter() {
        this.enabled && (this.mouseEntered = !0);
      },
      handleMouseLeave: function handleMouseLeave() {
        this.enabled && (this.mouseEntered = !1);
      },
      handle: function handle(e) {
        var t = e,
            n = this;

        if (n.enabled) {
          var r = n.params.mousewheel;
          n.params.cssMode && t.preventDefault();
          var a = n.$el;
          if ("container" !== n.params.mousewheel.eventsTarget && (a = m(n.params.mousewheel.eventsTarget)), !n.mouseEntered && !a[0].contains(t.target) && !r.releaseOnEdges) return !0;
          t.originalEvent && (t = t.originalEvent);
          var i = 0,
              s = n.rtlTranslate ? -1 : 1,
              o = K.normalize(t);
          if (r.forceToAxis) {
            if (n.isHorizontal()) {
              if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
              i = -o.pixelX * s;
            } else {
              if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
              i = -o.pixelY;
            }
          } else i = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * s : -o.pixelY;
          if (0 === i) return !0;
          r.invert && (i = -i);
          var l = n.getTranslate() + i * r.sensitivity;

          if (l >= n.minTranslate() && (l = n.minTranslate()), l <= n.maxTranslate() && (l = n.maxTranslate()), (!!n.params.loop || !(l === n.minTranslate() || l === n.maxTranslate())) && n.params.nested && t.stopPropagation(), n.params.freeMode) {
            var d = {
              time: T(),
              delta: Math.abs(i),
              direction: Math.sign(i)
            },
                u = n.mousewheel.lastEventBeforeSnap,
                c = u && d.time < u.time + 500 && d.delta <= u.delta && d.direction === u.direction;

            if (!c) {
              n.mousewheel.lastEventBeforeSnap = void 0, n.params.loop && n.loopFix();
              var p = n.getTranslate() + i * r.sensitivity,
                  f = n.isBeginning,
                  h = n.isEnd;

              if (p >= n.minTranslate() && (p = n.minTranslate()), p <= n.maxTranslate() && (p = n.maxTranslate()), n.setTransition(0), n.setTranslate(p), n.updateProgress(), n.updateActiveIndex(), n.updateSlidesClasses(), (!f && n.isBeginning || !h && n.isEnd) && n.updateSlidesClasses(), n.params.freeModeSticky) {
                clearTimeout(n.mousewheel.timeout), n.mousewheel.timeout = void 0;
                var v = n.mousewheel.recentWheelEvents;
                v.length >= 15 && v.shift();
                var g = v.length ? v[v.length - 1] : void 0,
                    y = v[0];
                if (v.push(d), g && (d.delta > g.delta || d.direction !== g.direction)) v.splice(0);else if (v.length >= 15 && d.time - y.time < 500 && y.delta - d.delta >= 1 && d.delta <= 6) {
                  var b = i > 0 ? .8 : .2;
                  n.mousewheel.lastEventBeforeSnap = d, v.splice(0), n.mousewheel.timeout = x(function () {
                    n.slideToClosest(n.params.speed, !0, void 0, b);
                  }, 0);
                }
                n.mousewheel.timeout || (n.mousewheel.timeout = x(function () {
                  n.mousewheel.lastEventBeforeSnap = d, v.splice(0), n.slideToClosest(n.params.speed, !0, void 0, .5);
                }, 500));
              }

              if (c || n.emit("scroll", t), n.params.autoplay && n.params.autoplayDisableOnInteraction && n.autoplay.stop(), p === n.minTranslate() || p === n.maxTranslate()) return !0;
            }
          } else {
            var w = {
              time: T(),
              delta: Math.abs(i),
              direction: Math.sign(i),
              raw: e
            },
                E = n.mousewheel.recentWheelEvents;
            E.length >= 2 && E.shift();
            var C = E.length ? E[E.length - 1] : void 0;
            if (E.push(w), C ? (w.direction !== C.direction || w.delta > C.delta || w.time > C.time + 150) && n.mousewheel.animateSlider(w) : n.mousewheel.animateSlider(w), n.mousewheel.releaseScroll(w)) return !0;
          }

          return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1;
        }
      },
      animateSlider: function animateSlider(e) {
        var t = this,
            n = o();
        return !(this.params.mousewheel.thresholdDelta && e.delta < this.params.mousewheel.thresholdDelta || this.params.mousewheel.thresholdTime && T() - t.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime || !(e.delta >= 6 && T() - t.mousewheel.lastScrollTime < 60) && (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), t.emit("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), t.emit("scroll", e.raw)), t.mousewheel.lastScrollTime = new n.Date().getTime(), 1));
      },
      releaseScroll: function releaseScroll(e) {
        var t = this,
            n = t.params.mousewheel;

        if (e.direction < 0) {
          if (t.isEnd && !t.params.loop && n.releaseOnEdges) return !0;
        } else if (t.isBeginning && !t.params.loop && n.releaseOnEdges) return !0;

        return !1;
      },
      enable: function enable() {
        var e = this,
            t = K.event();
        if (e.params.cssMode) return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0;
        if (!t) return !1;
        if (e.mousewheel.enabled) return !1;
        var n = e.$el;
        return "container" !== e.params.mousewheel.eventsTarget && (n = m(e.params.mousewheel.eventsTarget)), n.on("mouseenter", e.mousewheel.handleMouseEnter), n.on("mouseleave", e.mousewheel.handleMouseLeave), n.on(t, e.mousewheel.handle), e.mousewheel.enabled = !0, !0;
      },
      disable: function disable() {
        var e = this,
            t = K.event();
        if (e.params.cssMode) return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0;
        if (!t) return !1;
        if (!e.mousewheel.enabled) return !1;
        var n = e.$el;
        return "container" !== e.params.mousewheel.eventsTarget && (n = m(e.params.mousewheel.eventsTarget)), n.off(t, e.mousewheel.handle), e.mousewheel.enabled = !1, !0;
      }
    },
        Q = {
      toggleEl: function toggleEl(e, t) {
        e[t ? "addClass" : "removeClass"](this.params.navigation.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = t);
      },
      update: function update() {
        var e = this,
            t = e.params.navigation,
            n = e.navigation.toggleEl;

        if (!e.params.loop) {
          var r = e.navigation,
              a = r.$nextEl,
              i = r.$prevEl;
          i && i.length > 0 && (e.isBeginning ? n(i, !0) : n(i, !1), e.params.watchOverflow && e.enabled && i[e.isLocked ? "addClass" : "removeClass"](t.lockClass)), a && a.length > 0 && (e.isEnd ? n(a, !0) : n(a, !1), e.params.watchOverflow && e.enabled && a[e.isLocked ? "addClass" : "removeClass"](t.lockClass));
        }
      },
      onPrevClick: function onPrevClick(e) {
        var t = this;
        e.preventDefault(), t.isBeginning && !t.params.loop || t.slidePrev();
      },
      onNextClick: function onNextClick(e) {
        var t = this;
        e.preventDefault(), t.isEnd && !t.params.loop || t.slideNext();
      },
      init: function init() {
        var e,
            t,
            n = this,
            r = n.params.navigation;
        (r.nextEl || r.prevEl) && (r.nextEl && (e = m(r.nextEl), n.params.uniqueNavElements && "string" == typeof r.nextEl && e.length > 1 && 1 === n.$el.find(r.nextEl).length && (e = n.$el.find(r.nextEl))), r.prevEl && (t = m(r.prevEl), n.params.uniqueNavElements && "string" == typeof r.prevEl && t.length > 1 && 1 === n.$el.find(r.prevEl).length && (t = n.$el.find(r.prevEl))), e && e.length > 0 && e.on("click", n.navigation.onNextClick), t && t.length > 0 && t.on("click", n.navigation.onPrevClick), S(n.navigation, {
          $nextEl: e,
          nextEl: e && e[0],
          $prevEl: t,
          prevEl: t && t[0]
        }), n.enabled || (e && e.addClass(r.lockClass), t && t.addClass(r.lockClass)));
      },
      destroy: function destroy() {
        var e = this,
            t = e.navigation,
            n = t.$nextEl,
            r = t.$prevEl;
        n && n.length && (n.off("click", e.navigation.onNextClick), n.removeClass(e.params.navigation.disabledClass)), r && r.length && (r.off("click", e.navigation.onPrevClick), r.removeClass(e.params.navigation.disabledClass));
      }
    },
        J = {
      update: function update() {
        var e = this,
            t = e.rtl,
            n = e.params.pagination;

        if (n.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
          var r,
              a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
              i = e.pagination.$el,
              s = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;

          if (e.params.loop ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > a - 1 - 2 * e.loopedSlides && (r -= a - 2 * e.loopedSlides), r > s - 1 && (r -= s), r < 0 && "bullets" !== e.params.paginationType && (r = s + r)) : r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === n.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
            var o,
                l,
                d,
                u = e.pagination.bullets;
            if (n.dynamicBullets && (e.pagination.bulletSize = u.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), i.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (n.dynamicMainBullets + 4) + "px"), n.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += r - e.previousIndex, e.pagination.dynamicBulletIndex > n.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = n.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), o = r - e.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(u.length, n.dynamicMainBullets) - 1)) + o) / 2), u.removeClass(n.bulletActiveClass + " " + n.bulletActiveClass + "-next " + n.bulletActiveClass + "-next-next " + n.bulletActiveClass + "-prev " + n.bulletActiveClass + "-prev-prev " + n.bulletActiveClass + "-main"), i.length > 1) u.each(function (e) {
              var t = m(e),
                  a = t.index();
              a === r && t.addClass(n.bulletActiveClass), n.dynamicBullets && (a >= o && a <= l && t.addClass(n.bulletActiveClass + "-main"), a === o && t.prev().addClass(n.bulletActiveClass + "-prev").prev().addClass(n.bulletActiveClass + "-prev-prev"), a === l && t.next().addClass(n.bulletActiveClass + "-next").next().addClass(n.bulletActiveClass + "-next-next"));
            });else {
              var c = u.eq(r),
                  p = c.index();

              if (c.addClass(n.bulletActiveClass), n.dynamicBullets) {
                for (var f = u.eq(o), h = u.eq(l), v = o; v <= l; v += 1) {
                  u.eq(v).addClass(n.bulletActiveClass + "-main");
                }

                if (e.params.loop) {
                  if (p >= u.length - n.dynamicMainBullets) {
                    for (var g = n.dynamicMainBullets; g >= 0; g -= 1) {
                      u.eq(u.length - g).addClass(n.bulletActiveClass + "-main");
                    }

                    u.eq(u.length - n.dynamicMainBullets - 1).addClass(n.bulletActiveClass + "-prev");
                  } else f.prev().addClass(n.bulletActiveClass + "-prev").prev().addClass(n.bulletActiveClass + "-prev-prev"), h.next().addClass(n.bulletActiveClass + "-next").next().addClass(n.bulletActiveClass + "-next-next");
                } else f.prev().addClass(n.bulletActiveClass + "-prev").prev().addClass(n.bulletActiveClass + "-prev-prev"), h.next().addClass(n.bulletActiveClass + "-next").next().addClass(n.bulletActiveClass + "-next-next");
              }
            }

            if (n.dynamicBullets) {
              var y = Math.min(u.length, n.dynamicMainBullets + 4),
                  b = (e.pagination.bulletSize * y - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
                  w = t ? "right" : "left";
              u.css(e.isHorizontal() ? w : "top", b + "px");
            }
          }

          if ("fraction" === n.type && (i.find(k(n.currentClass)).text(n.formatFractionCurrent(r + 1)), i.find(k(n.totalClass)).text(n.formatFractionTotal(s))), "progressbar" === n.type) {
            var x;
            x = n.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
            var T = (r + 1) / s,
                E = 1,
                C = 1;
            "horizontal" === x ? E = T : C = T, i.find(k(n.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(" + E + ") scaleY(" + C + ")").transition(e.params.speed);
          }

          "custom" === n.type && n.renderCustom ? (i.html(n.renderCustom(e, r + 1, s)), e.emit("paginationRender", i[0])) : e.emit("paginationUpdate", i[0]), e.params.watchOverflow && e.enabled && i[e.isLocked ? "addClass" : "removeClass"](n.lockClass);
        }
      },
      render: function render() {
        var e = this,
            t = e.params.pagination;

        if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
          var n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
              r = e.pagination.$el,
              a = "";

          if ("bullets" === t.type) {
            var i = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
            e.params.freeMode && !e.params.loop && i > n && (i = n);

            for (var s = 0; s < i; s += 1) {
              t.renderBullet ? a += t.renderBullet.call(e, s, t.bulletClass) : a += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
            }

            r.html(a), e.pagination.bullets = r.find(k(t.bulletClass));
          }

          "fraction" === t.type && (a = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', r.html(a)), "progressbar" === t.type && (a = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', r.html(a)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0]);
        }
      },
      init: function init() {
        var e = this,
            t = e.params.pagination;

        if (t.el) {
          var n = m(t.el);
          0 !== n.length && (e.params.uniqueNavElements && "string" == typeof t.el && n.length > 1 && (n = e.$el.find(t.el)), "bullets" === t.type && t.clickable && n.addClass(t.clickableClass), n.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (n.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && n.addClass(t.progressbarOppositeClass), t.clickable && n.on("click", k(t.bulletClass), function (t) {
            t.preventDefault();
            var n = m(this).index() * e.params.slidesPerGroup;
            e.params.loop && (n += e.loopedSlides), e.slideTo(n);
          }), S(e.pagination, {
            $el: n,
            el: n[0]
          }), e.enabled || n.addClass(t.lockClass));
        }
      },
      destroy: function destroy() {
        var e = this,
            t = e.params.pagination;

        if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
          var n = e.pagination.$el;
          n.removeClass(t.hiddenClass), n.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && n.off("click", k(t.bulletClass));
        }
      }
    },
        Z = {
      setTranslate: function setTranslate() {
        var e = this;

        if (e.params.scrollbar.el && e.scrollbar.el) {
          var t = e.scrollbar,
              n = e.rtlTranslate,
              r = e.progress,
              a = t.dragSize,
              i = t.trackSize,
              s = t.$dragEl,
              o = t.$el,
              l = e.params.scrollbar,
              d = a,
              u = (i - a) * r;
          n ? (u = -u) > 0 ? (d = a - u, u = 0) : -u + a > i && (d = i + u) : u < 0 ? (d = a + u, u = 0) : u + a > i && (d = i - u), e.isHorizontal() ? (s.transform("translate3d(" + u + "px, 0, 0)"), s[0].style.width = d + "px") : (s.transform("translate3d(0px, " + u + "px, 0)"), s[0].style.height = d + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function () {
            o[0].style.opacity = 0, o.transition(400);
          }, 1e3));
        }
      },
      setTransition: function setTransition(e) {
        var t = this;
        t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e);
      },
      updateSize: function updateSize() {
        var e = this;

        if (e.params.scrollbar.el && e.scrollbar.el) {
          var t = e.scrollbar,
              n = t.$dragEl,
              r = t.$el;
          n[0].style.width = "", n[0].style.height = "";
          var a,
              i = e.isHorizontal() ? r[0].offsetWidth : r[0].offsetHeight,
              s = e.size / e.virtualSize,
              o = s * (i / e.size);
          a = "auto" === e.params.scrollbar.dragSize ? i * s : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? n[0].style.width = a + "px" : n[0].style.height = a + "px", r[0].style.display = s >= 1 ? "none" : "", e.params.scrollbar.hide && (r[0].style.opacity = 0), S(t, {
            trackSize: i,
            divider: s,
            moveDivider: o,
            dragSize: a
          }), e.params.watchOverflow && e.enabled && t.$el[e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass);
        }
      },
      getPointerPosition: function getPointerPosition(e) {
        return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY;
      },
      setDragPosition: function setDragPosition(e) {
        var t,
            n = this,
            r = n.scrollbar,
            a = n.rtlTranslate,
            i = r.$el,
            s = r.dragSize,
            o = r.trackSize,
            l = r.dragStartPos;
        t = (r.getPointerPosition(e) - i.offset()[n.isHorizontal() ? "left" : "top"] - (null !== l ? l : s / 2)) / (o - s), t = Math.max(Math.min(t, 1), 0), a && (t = 1 - t);
        var d = n.minTranslate() + (n.maxTranslate() - n.minTranslate()) * t;
        n.updateProgress(d), n.setTranslate(d), n.updateActiveIndex(), n.updateSlidesClasses();
      },
      onDragStart: function onDragStart(e) {
        var t = this,
            n = t.params.scrollbar,
            r = t.scrollbar,
            a = t.$wrapperEl,
            i = r.$el,
            s = r.$dragEl;
        t.scrollbar.isTouched = !0, t.scrollbar.dragStartPos = e.target === s[0] || e.target === s ? r.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), a.transition(100), s.transition(100), r.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), i.transition(0), n.hide && i.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), t.emit("scrollbarDragStart", e);
      },
      onDragMove: function onDragMove(e) {
        var t = this,
            n = t.scrollbar,
            r = t.$wrapperEl,
            a = n.$el,
            i = n.$dragEl;
        t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, n.setDragPosition(e), r.transition(0), a.transition(0), i.transition(0), t.emit("scrollbarDragMove", e));
      },
      onDragEnd: function onDragEnd(e) {
        var t = this,
            n = t.params.scrollbar,
            r = t.scrollbar,
            a = t.$wrapperEl,
            i = r.$el;
        t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), a.transition("")), n.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = x(function () {
          i.css("opacity", 0), i.transition(400);
        }, 1e3)), t.emit("scrollbarDragEnd", e), n.snapOnRelease && t.slideToClosest());
      },
      enableDraggable: function enableDraggable() {
        var e = this;

        if (e.params.scrollbar.el) {
          var t = i(),
              n = e.scrollbar,
              r = e.touchEventsTouch,
              a = e.touchEventsDesktop,
              s = e.params,
              o = e.support,
              l = n.$el[0],
              d = !(!o.passiveListener || !s.passiveListeners) && {
            passive: !1,
            capture: !1
          },
              u = !(!o.passiveListener || !s.passiveListeners) && {
            passive: !0,
            capture: !1
          };
          l && (o.touch ? (l.addEventListener(r.start, e.scrollbar.onDragStart, d), l.addEventListener(r.move, e.scrollbar.onDragMove, d), l.addEventListener(r.end, e.scrollbar.onDragEnd, u)) : (l.addEventListener(a.start, e.scrollbar.onDragStart, d), t.addEventListener(a.move, e.scrollbar.onDragMove, d), t.addEventListener(a.end, e.scrollbar.onDragEnd, u)));
        }
      },
      disableDraggable: function disableDraggable() {
        var e = this;

        if (e.params.scrollbar.el) {
          var t = i(),
              n = e.scrollbar,
              r = e.touchEventsTouch,
              a = e.touchEventsDesktop,
              s = e.params,
              o = e.support,
              l = n.$el[0],
              d = !(!o.passiveListener || !s.passiveListeners) && {
            passive: !1,
            capture: !1
          },
              u = !(!o.passiveListener || !s.passiveListeners) && {
            passive: !0,
            capture: !1
          };
          l && (o.touch ? (l.removeEventListener(r.start, e.scrollbar.onDragStart, d), l.removeEventListener(r.move, e.scrollbar.onDragMove, d), l.removeEventListener(r.end, e.scrollbar.onDragEnd, u)) : (l.removeEventListener(a.start, e.scrollbar.onDragStart, d), t.removeEventListener(a.move, e.scrollbar.onDragMove, d), t.removeEventListener(a.end, e.scrollbar.onDragEnd, u)));
        }
      },
      init: function init() {
        var e = this;

        if (e.params.scrollbar.el) {
          var t = e.scrollbar,
              n = e.$el,
              r = e.params.scrollbar,
              a = m(r.el);
          e.params.uniqueNavElements && "string" == typeof r.el && a.length > 1 && 1 === n.find(r.el).length && (a = n.find(r.el));
          var i = a.find("." + e.params.scrollbar.dragClass);
          0 === i.length && (i = m('<div class="' + e.params.scrollbar.dragClass + '"></div>'), a.append(i)), S(t, {
            $el: a,
            el: a[0],
            $dragEl: i,
            dragEl: i[0]
          }), r.draggable && t.enableDraggable(), a && a[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass);
        }
      },
      destroy: function destroy() {
        this.scrollbar.disableDraggable();
      }
    },
        ee = {
      setTransform: function setTransform(e, t) {
        var n = this.rtl,
            r = m(e),
            a = n ? -1 : 1,
            i = r.attr("data-swiper-parallax") || "0",
            s = r.attr("data-swiper-parallax-x"),
            o = r.attr("data-swiper-parallax-y"),
            l = r.attr("data-swiper-parallax-scale"),
            d = r.attr("data-swiper-parallax-opacity");

        if (s || o ? (s = s || "0", o = o || "0") : this.isHorizontal() ? (s = i, o = "0") : (o = i, s = "0"), s = s.indexOf("%") >= 0 ? parseInt(s, 10) * t * a + "%" : s * t * a + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t + "%" : o * t + "px", null != d) {
          var u = d - (d - 1) * (1 - Math.abs(t));
          r[0].style.opacity = u;
        }

        if (null == l) r.transform("translate3d(" + s + ", " + o + ", 0px)");else {
          var c = l - (l - 1) * (1 - Math.abs(t));
          r.transform("translate3d(" + s + ", " + o + ", 0px) scale(" + c + ")");
        }
      },
      setTranslate: function setTranslate() {
        var e = this,
            t = e.$el,
            n = e.slides,
            r = e.progress,
            a = e.snapGrid;
        t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
          e.parallax.setTransform(t, r);
        }), n.each(function (t, n) {
          var i = t.progress;
          e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (i += Math.ceil(n / 2) - r * (a.length - 1)), i = Math.min(Math.max(i, -1), 1), m(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
            e.parallax.setTransform(t, i);
          });
        });
      },
      setTransition: function setTransition(e) {
        void 0 === e && (e = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
          var n = m(t),
              r = parseInt(n.attr("data-swiper-parallax-duration"), 10) || e;
          0 === e && (r = 0), n.transition(r);
        });
      }
    },
        te = {
      getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
        if (e.targetTouches.length < 2) return 1;
        var t = e.targetTouches[0].pageX,
            n = e.targetTouches[0].pageY,
            r = e.targetTouches[1].pageX,
            a = e.targetTouches[1].pageY;
        return Math.sqrt(Math.pow(r - t, 2) + Math.pow(a - n, 2));
      },
      onGestureStart: function onGestureStart(e) {
        var t = this,
            n = t.support,
            r = t.params.zoom,
            a = t.zoom,
            i = a.gesture;

        if (a.fakeGestureTouched = !1, a.fakeGestureMoved = !1, !n.gestures) {
          if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
          a.fakeGestureTouched = !0, i.scaleStart = te.getDistanceBetweenTouches(e);
        }

        i.$slideEl && i.$slideEl.length || (i.$slideEl = m(e.target).closest("." + t.params.slideClass), 0 === i.$slideEl.length && (i.$slideEl = t.slides.eq(t.activeIndex)), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + r.containerClass), i.maxRatio = i.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio, 0 !== i.$imageWrapEl.length) ? (i.$imageEl && i.$imageEl.transition(0), t.zoom.isScaling = !0) : i.$imageEl = void 0;
      },
      onGestureChange: function onGestureChange(e) {
        var t = this,
            n = t.support,
            r = t.params.zoom,
            a = t.zoom,
            i = a.gesture;

        if (!n.gestures) {
          if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
          a.fakeGestureMoved = !0, i.scaleMove = te.getDistanceBetweenTouches(e);
        }

        i.$imageEl && 0 !== i.$imageEl.length ? (n.gestures ? a.scale = e.scale * a.currentScale : a.scale = i.scaleMove / i.scaleStart * a.currentScale, a.scale > i.maxRatio && (a.scale = i.maxRatio - 1 + Math.pow(a.scale - i.maxRatio + 1, .5)), a.scale < r.minRatio && (a.scale = r.minRatio + 1 - Math.pow(r.minRatio - a.scale + 1, .5)), i.$imageEl.transform("translate3d(0,0,0) scale(" + a.scale + ")")) : "gesturechange" === e.type && a.onGestureStart(e);
      },
      onGestureEnd: function onGestureEnd(e) {
        var t = this,
            n = t.device,
            r = t.support,
            a = t.params.zoom,
            i = t.zoom,
            s = i.gesture;

        if (!r.gestures) {
          if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
          if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !n.android) return;
          i.fakeGestureTouched = !1, i.fakeGestureMoved = !1;
        }

        s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), a.minRatio), s.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0));
      },
      onTouchStart: function onTouchStart(e) {
        var t = this.device,
            n = this.zoom,
            r = n.gesture,
            a = n.image;
        r.$imageEl && 0 !== r.$imageEl.length && (a.isTouched || (t.android && e.cancelable && e.preventDefault(), a.isTouched = !0, a.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, a.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
      },
      onTouchMove: function onTouchMove(e) {
        var t = this,
            n = t.zoom,
            r = n.gesture,
            a = n.image,
            i = n.velocity;

        if (r.$imageEl && 0 !== r.$imageEl.length && (t.allowClick = !1, a.isTouched && r.$slideEl)) {
          a.isMoved || (a.width = r.$imageEl[0].offsetWidth, a.height = r.$imageEl[0].offsetHeight, a.startX = E(r.$imageWrapEl[0], "x") || 0, a.startY = E(r.$imageWrapEl[0], "y") || 0, r.slideWidth = r.$slideEl[0].offsetWidth, r.slideHeight = r.$slideEl[0].offsetHeight, r.$imageWrapEl.transition(0), t.rtl && (a.startX = -a.startX, a.startY = -a.startY));
          var s = a.width * n.scale,
              o = a.height * n.scale;

          if (!(s < r.slideWidth && o < r.slideHeight)) {
            if (a.minX = Math.min(r.slideWidth / 2 - s / 2, 0), a.maxX = -a.minX, a.minY = Math.min(r.slideHeight / 2 - o / 2, 0), a.maxY = -a.minY, a.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, a.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !a.isMoved && !n.isScaling) {
              if (t.isHorizontal() && (Math.floor(a.minX) === Math.floor(a.startX) && a.touchesCurrent.x < a.touchesStart.x || Math.floor(a.maxX) === Math.floor(a.startX) && a.touchesCurrent.x > a.touchesStart.x)) return void (a.isTouched = !1);
              if (!t.isHorizontal() && (Math.floor(a.minY) === Math.floor(a.startY) && a.touchesCurrent.y < a.touchesStart.y || Math.floor(a.maxY) === Math.floor(a.startY) && a.touchesCurrent.y > a.touchesStart.y)) return void (a.isTouched = !1);
            }

            e.cancelable && e.preventDefault(), e.stopPropagation(), a.isMoved = !0, a.currentX = a.touchesCurrent.x - a.touchesStart.x + a.startX, a.currentY = a.touchesCurrent.y - a.touchesStart.y + a.startY, a.currentX < a.minX && (a.currentX = a.minX + 1 - Math.pow(a.minX - a.currentX + 1, .8)), a.currentX > a.maxX && (a.currentX = a.maxX - 1 + Math.pow(a.currentX - a.maxX + 1, .8)), a.currentY < a.minY && (a.currentY = a.minY + 1 - Math.pow(a.minY - a.currentY + 1, .8)), a.currentY > a.maxY && (a.currentY = a.maxY - 1 + Math.pow(a.currentY - a.maxY + 1, .8)), i.prevPositionX || (i.prevPositionX = a.touchesCurrent.x), i.prevPositionY || (i.prevPositionY = a.touchesCurrent.y), i.prevTime || (i.prevTime = Date.now()), i.x = (a.touchesCurrent.x - i.prevPositionX) / (Date.now() - i.prevTime) / 2, i.y = (a.touchesCurrent.y - i.prevPositionY) / (Date.now() - i.prevTime) / 2, Math.abs(a.touchesCurrent.x - i.prevPositionX) < 2 && (i.x = 0), Math.abs(a.touchesCurrent.y - i.prevPositionY) < 2 && (i.y = 0), i.prevPositionX = a.touchesCurrent.x, i.prevPositionY = a.touchesCurrent.y, i.prevTime = Date.now(), r.$imageWrapEl.transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)");
          }
        }
      },
      onTouchEnd: function onTouchEnd() {
        var e = this.zoom,
            t = e.gesture,
            n = e.image,
            r = e.velocity;

        if (t.$imageEl && 0 !== t.$imageEl.length) {
          if (!n.isTouched || !n.isMoved) return n.isTouched = !1, void (n.isMoved = !1);
          n.isTouched = !1, n.isMoved = !1;
          var a = 300,
              i = 300,
              s = r.x * a,
              o = n.currentX + s,
              l = r.y * i,
              d = n.currentY + l;
          0 !== r.x && (a = Math.abs((o - n.currentX) / r.x)), 0 !== r.y && (i = Math.abs((d - n.currentY) / r.y));
          var u = Math.max(a, i);
          n.currentX = o, n.currentY = d;
          var c = n.width * e.scale,
              p = n.height * e.scale;
          n.minX = Math.min(t.slideWidth / 2 - c / 2, 0), n.maxX = -n.minX, n.minY = Math.min(t.slideHeight / 2 - p / 2, 0), n.maxY = -n.minY, n.currentX = Math.max(Math.min(n.currentX, n.maxX), n.minX), n.currentY = Math.max(Math.min(n.currentY, n.maxY), n.minY), t.$imageWrapEl.transition(u).transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)");
        }
      },
      onTransitionEnd: function onTransitionEnd() {
        var e = this,
            t = e.zoom,
            n = t.gesture;
        n.$slideEl && e.previousIndex !== e.activeIndex && (n.$imageEl && n.$imageEl.transform("translate3d(0,0,0) scale(1)"), n.$imageWrapEl && n.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, t.currentScale = 1, n.$slideEl = void 0, n.$imageEl = void 0, n.$imageWrapEl = void 0);
      },
      toggle: function toggle(e) {
        var t = this.zoom;
        t.scale && 1 !== t.scale ? t.out() : t["in"](e);
      },
      "in": function _in(e) {
        var t,
            n,
            r,
            a,
            i,
            s,
            l,
            d,
            u,
            c,
            p,
            f,
            h,
            v,
            m,
            g,
            y = this,
            b = o(),
            w = y.zoom,
            x = y.params.zoom,
            T = w.gesture,
            E = w.image;
        T.$slideEl || (y.params.virtual && y.params.virtual.enabled && y.virtual ? T.$slideEl = y.$wrapperEl.children("." + y.params.slideActiveClass) : T.$slideEl = y.slides.eq(y.activeIndex), T.$imageEl = T.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), T.$imageWrapEl = T.$imageEl.parent("." + x.containerClass)), T.$imageEl && 0 !== T.$imageEl.length && T.$imageWrapEl && 0 !== T.$imageWrapEl.length && (T.$slideEl.addClass("" + x.zoomedSlideClass), void 0 === E.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, n = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = E.touchesStart.x, n = E.touchesStart.y), w.scale = T.$imageWrapEl.attr("data-swiper-zoom") || x.maxRatio, w.currentScale = T.$imageWrapEl.attr("data-swiper-zoom") || x.maxRatio, e ? (m = T.$slideEl[0].offsetWidth, g = T.$slideEl[0].offsetHeight, r = T.$slideEl.offset().left + b.scrollX + m / 2 - t, a = T.$slideEl.offset().top + b.scrollY + g / 2 - n, l = T.$imageEl[0].offsetWidth, d = T.$imageEl[0].offsetHeight, u = l * w.scale, c = d * w.scale, h = -(p = Math.min(m / 2 - u / 2, 0)), v = -(f = Math.min(g / 2 - c / 2, 0)), (i = r * w.scale) < p && (i = p), i > h && (i = h), (s = a * w.scale) < f && (s = f), s > v && (s = v)) : (i = 0, s = 0), T.$imageWrapEl.transition(300).transform("translate3d(" + i + "px, " + s + "px,0)"), T.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + w.scale + ")"));
      },
      out: function out() {
        var e = this,
            t = e.zoom,
            n = e.params.zoom,
            r = t.gesture;
        r.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? r.$slideEl = e.$wrapperEl.children("." + e.params.slideActiveClass) : r.$slideEl = e.slides.eq(e.activeIndex), r.$imageEl = r.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), r.$imageWrapEl = r.$imageEl.parent("." + n.containerClass)), r.$imageEl && 0 !== r.$imageEl.length && r.$imageWrapEl && 0 !== r.$imageWrapEl.length && (t.scale = 1, t.currentScale = 1, r.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), r.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), r.$slideEl.removeClass("" + n.zoomedSlideClass), r.$slideEl = void 0);
      },
      toggleGestures: function toggleGestures(e) {
        var t = this,
            n = t.zoom,
            r = n.slideSelector,
            a = n.passiveListener;
        t.$wrapperEl[e]("gesturestart", r, n.onGestureStart, a), t.$wrapperEl[e]("gesturechange", r, n.onGestureChange, a), t.$wrapperEl[e]("gestureend", r, n.onGestureEnd, a);
      },
      enableGestures: function enableGestures() {
        this.zoom.gesturesEnabled || (this.zoom.gesturesEnabled = !0, this.zoom.toggleGestures("on"));
      },
      disableGestures: function disableGestures() {
        this.zoom.gesturesEnabled && (this.zoom.gesturesEnabled = !1, this.zoom.toggleGestures("off"));
      },
      enable: function enable() {
        var e = this,
            t = e.support,
            n = e.zoom;

        if (!n.enabled) {
          n.enabled = !0;
          var r = !("touchstart" !== e.touchEvents.start || !t.passiveListener || !e.params.passiveListeners) && {
            passive: !0,
            capture: !1
          },
              a = !t.passiveListener || {
            passive: !1,
            capture: !0
          },
              i = "." + e.params.slideClass;
          e.zoom.passiveListener = r, e.zoom.slideSelector = i, t.gestures ? (e.$wrapperEl.on(e.touchEvents.start, e.zoom.enableGestures, r), e.$wrapperEl.on(e.touchEvents.end, e.zoom.disableGestures, r)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, i, n.onGestureStart, r), e.$wrapperEl.on(e.touchEvents.move, i, n.onGestureChange, a), e.$wrapperEl.on(e.touchEvents.end, i, n.onGestureEnd, r), e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, i, n.onGestureEnd, r)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, n.onTouchMove, a);
        }
      },
      disable: function disable() {
        var e = this,
            t = e.zoom;

        if (t.enabled) {
          var n = e.support;
          e.zoom.enabled = !1;
          var r = !("touchstart" !== e.touchEvents.start || !n.passiveListener || !e.params.passiveListeners) && {
            passive: !0,
            capture: !1
          },
              a = !n.passiveListener || {
            passive: !1,
            capture: !0
          },
              i = "." + e.params.slideClass;
          n.gestures ? (e.$wrapperEl.off(e.touchEvents.start, e.zoom.enableGestures, r), e.$wrapperEl.off(e.touchEvents.end, e.zoom.disableGestures, r)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, i, t.onGestureStart, r), e.$wrapperEl.off(e.touchEvents.move, i, t.onGestureChange, a), e.$wrapperEl.off(e.touchEvents.end, i, t.onGestureEnd, r), e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, i, t.onGestureEnd, r)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove, a);
        }
      }
    },
        ne = {
      loadInSlide: function loadInSlide(e, t) {
        void 0 === t && (t = !0);
        var n = this,
            r = n.params.lazy;

        if (void 0 !== e && 0 !== n.slides.length) {
          var a = n.virtual && n.params.virtual.enabled ? n.$wrapperEl.children("." + n.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : n.slides.eq(e),
              i = a.find("." + r.elementClass + ":not(." + r.loadedClass + "):not(." + r.loadingClass + ")");
          !a.hasClass(r.elementClass) || a.hasClass(r.loadedClass) || a.hasClass(r.loadingClass) || i.push(a[0]), 0 !== i.length && i.each(function (e) {
            var i = m(e);
            i.addClass(r.loadingClass);
            var s = i.attr("data-background"),
                o = i.attr("data-src"),
                l = i.attr("data-srcset"),
                d = i.attr("data-sizes"),
                u = i.parent("picture");
            n.loadImage(i[0], o || s, l, d, !1, function () {
              if (null != n && n && (!n || n.params) && !n.destroyed) {
                if (s ? (i.css("background-image", 'url("' + s + '")'), i.removeAttr("data-background")) : (l && (i.attr("srcset", l), i.removeAttr("data-srcset")), d && (i.attr("sizes", d), i.removeAttr("data-sizes")), u.length && u.children("source").each(function (e) {
                  var t = m(e);
                  t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
                }), o && (i.attr("src", o), i.removeAttr("data-src"))), i.addClass(r.loadedClass).removeClass(r.loadingClass), a.find("." + r.preloaderClass).remove(), n.params.loop && t) {
                  var e = a.attr("data-swiper-slide-index");

                  if (a.hasClass(n.params.slideDuplicateClass)) {
                    var c = n.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + n.params.slideDuplicateClass + ")");
                    n.lazy.loadInSlide(c.index(), !1);
                  } else {
                    var p = n.$wrapperEl.children("." + n.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                    n.lazy.loadInSlide(p.index(), !1);
                  }
                }

                n.emit("lazyImageReady", a[0], i[0]), n.params.autoHeight && n.updateAutoHeight();
              }
            }), n.emit("lazyImageLoad", a[0], i[0]);
          });
        }
      },
      load: function load() {
        var e = this,
            t = e.$wrapperEl,
            n = e.params,
            r = e.slides,
            a = e.activeIndex,
            i = e.virtual && n.virtual.enabled,
            s = n.lazy,
            o = n.slidesPerView;

        function l(e) {
          if (i) {
            if (t.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
          } else if (r[e]) return !0;

          return !1;
        }

        function d(e) {
          return i ? m(e).attr("data-swiper-slide-index") : m(e).index();
        }

        if ("auto" === o && (o = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + n.slideVisibleClass).each(function (t) {
          var n = i ? m(t).attr("data-swiper-slide-index") : m(t).index();
          e.lazy.loadInSlide(n);
        });else if (o > 1) for (var u = a; u < a + o; u += 1) {
          l(u) && e.lazy.loadInSlide(u);
        } else e.lazy.loadInSlide(a);
        if (s.loadPrevNext) if (o > 1 || s.loadPrevNextAmount && s.loadPrevNextAmount > 1) {
          for (var c = s.loadPrevNextAmount, p = o, f = Math.min(a + p + Math.max(c, p), r.length), h = Math.max(a - Math.max(p, c), 0), v = a + o; v < f; v += 1) {
            l(v) && e.lazy.loadInSlide(v);
          }

          for (var g = h; g < a; g += 1) {
            l(g) && e.lazy.loadInSlide(g);
          }
        } else {
          var y = t.children("." + n.slideNextClass);
          y.length > 0 && e.lazy.loadInSlide(d(y));
          var b = t.children("." + n.slidePrevClass);
          b.length > 0 && e.lazy.loadInSlide(d(b));
        }
      },
      checkInViewOnLoad: function checkInViewOnLoad() {
        var e = o(),
            t = this;

        if (t && !t.destroyed) {
          var n = t.params.lazy.scrollingElement ? m(t.params.lazy.scrollingElement) : m(e),
              r = n[0] === e,
              a = r ? e.innerWidth : n[0].offsetWidth,
              i = r ? e.innerHeight : n[0].offsetHeight,
              s = t.$el.offset(),
              l = !1;
          t.rtlTranslate && (s.left -= t.$el[0].scrollLeft);

          for (var d = [[s.left, s.top], [s.left + t.width, s.top], [s.left, s.top + t.height], [s.left + t.width, s.top + t.height]], u = 0; u < d.length; u += 1) {
            var c = d[u];

            if (c[0] >= 0 && c[0] <= a && c[1] >= 0 && c[1] <= i) {
              if (0 === c[0] && 0 === c[1]) continue;
              l = !0;
            }
          }

          l ? (t.lazy.load(), n.off("scroll", t.lazy.checkInViewOnLoad)) : t.lazy.scrollHandlerAttached || (t.lazy.scrollHandlerAttached = !0, n.on("scroll", t.lazy.checkInViewOnLoad));
        }
      }
    },
        re = {
      LinearSpline: function LinearSpline(e, t) {
        var n, r, a, i, s;
        return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
          return e ? (s = function (e, t) {
            for (r = -1, n = e.length; n - r > 1;) {
              e[a = n + r >> 1] <= t ? r = a : n = a;
            }

            return n;
          }(this.x, e), i = s - 1, (e - this.x[i]) * (this.y[s] - this.y[i]) / (this.x[s] - this.x[i]) + this.y[i]) : 0;
        }, this;
      },
      getInterpolateFunction: function getInterpolateFunction(e) {
        var t = this;
        t.controller.spline || (t.controller.spline = t.params.loop ? new re.LinearSpline(t.slidesGrid, e.slidesGrid) : new re.LinearSpline(t.snapGrid, e.snapGrid));
      },
      setTranslate: function setTranslate(e, t) {
        var n,
            r,
            a = this,
            i = a.controller.control,
            s = a.constructor;

        function o(e) {
          var t = a.rtlTranslate ? -a.translate : a.translate;
          "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), r = -a.controller.spline.interpolate(-t)), r && "container" !== a.params.controller.by || (n = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), r = (t - a.minTranslate()) * n + e.minTranslate()), a.params.controller.inverse && (r = e.maxTranslate() - r), e.updateProgress(r), e.setTranslate(r, a), e.updateActiveIndex(), e.updateSlidesClasses();
        }

        if (Array.isArray(i)) for (var l = 0; l < i.length; l += 1) {
          i[l] !== t && i[l] instanceof s && o(i[l]);
        } else i instanceof s && t !== i && o(i);
      },
      setTransition: function setTransition(e, t) {
        var n,
            r = this,
            a = r.constructor,
            i = r.controller.control;

        function s(t) {
          t.setTransition(e, r), 0 !== e && (t.transitionStart(), t.params.autoHeight && x(function () {
            t.updateAutoHeight();
          }), t.$wrapperEl.transitionEnd(function () {
            i && (t.params.loop && "slide" === r.params.controller.by && t.loopFix(), t.transitionEnd());
          }));
        }

        if (Array.isArray(i)) for (n = 0; n < i.length; n += 1) {
          i[n] !== t && i[n] instanceof a && s(i[n]);
        } else i instanceof a && t !== i && s(i);
      }
    },
        ae = {
      getRandomNumber: function getRandomNumber(e) {
        return void 0 === e && (e = 16), "x".repeat(e).replace(/x/g, function () {
          return Math.round(16 * Math.random()).toString(16);
        });
      },
      makeElFocusable: function makeElFocusable(e) {
        return e.attr("tabIndex", "0"), e;
      },
      makeElNotFocusable: function makeElNotFocusable(e) {
        return e.attr("tabIndex", "-1"), e;
      },
      addElRole: function addElRole(e, t) {
        return e.attr("role", t), e;
      },
      addElRoleDescription: function addElRoleDescription(e, t) {
        return e.attr("aria-roledescription", t), e;
      },
      addElControls: function addElControls(e, t) {
        return e.attr("aria-controls", t), e;
      },
      addElLabel: function addElLabel(e, t) {
        return e.attr("aria-label", t), e;
      },
      addElId: function addElId(e, t) {
        return e.attr("id", t), e;
      },
      addElLive: function addElLive(e, t) {
        return e.attr("aria-live", t), e;
      },
      disableEl: function disableEl(e) {
        return e.attr("aria-disabled", !0), e;
      },
      enableEl: function enableEl(e) {
        return e.attr("aria-disabled", !1), e;
      },
      onEnterOrSpaceKey: function onEnterOrSpaceKey(e) {
        if (13 === e.keyCode || 32 === e.keyCode) {
          var t = this,
              n = t.params.a11y,
              r = m(e.target);
          t.navigation && t.navigation.$nextEl && r.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(n.lastSlideMessage) : t.a11y.notify(n.nextSlideMessage)), t.navigation && t.navigation.$prevEl && r.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(n.firstSlideMessage) : t.a11y.notify(n.prevSlideMessage)), t.pagination && r.is(k(t.params.pagination.bulletClass)) && r[0].click();
        }
      },
      notify: function notify(e) {
        var t = this.a11y.liveRegion;
        0 !== t.length && (t.html(""), t.html(e));
      },
      updateNavigation: function updateNavigation() {
        var e = this;

        if (!e.params.loop && e.navigation) {
          var t = e.navigation,
              n = t.$nextEl,
              r = t.$prevEl;
          r && r.length > 0 && (e.isBeginning ? (e.a11y.disableEl(r), e.a11y.makeElNotFocusable(r)) : (e.a11y.enableEl(r), e.a11y.makeElFocusable(r))), n && n.length > 0 && (e.isEnd ? (e.a11y.disableEl(n), e.a11y.makeElNotFocusable(n)) : (e.a11y.enableEl(n), e.a11y.makeElFocusable(n)));
        }
      },
      updatePagination: function updatePagination() {
        var e = this,
            t = e.params.a11y;
        e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function (n) {
          var r = m(n);
          e.a11y.makeElFocusable(r), e.params.pagination.renderBullet || (e.a11y.addElRole(r, "button"), e.a11y.addElLabel(r, t.paginationBulletMessage.replace(/\{\{index\}\}/, r.index() + 1)));
        });
      },
      init: function init() {
        var e = this,
            t = e.params.a11y;
        e.$el.append(e.a11y.liveRegion);
        var n = e.$el;
        t.containerRoleDescriptionMessage && e.a11y.addElRoleDescription(n, t.containerRoleDescriptionMessage), t.containerMessage && e.a11y.addElLabel(n, t.containerMessage);
        var r,
            a,
            i = e.$wrapperEl,
            s = i.attr("id") || "swiper-wrapper-" + e.a11y.getRandomNumber(16),
            o = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
        e.a11y.addElId(i, s), e.a11y.addElLive(i, o), t.itemRoleDescriptionMessage && e.a11y.addElRoleDescription(m(e.slides), t.itemRoleDescriptionMessage), e.a11y.addElRole(m(e.slides), t.slideRole), e.slides.each(function (n) {
          var r = m(n),
              a = t.slideLabelMessage.replace(/\{\{index\}\}/, r.index() + 1).replace(/\{\{slidesLength\}\}/, e.slides.length);
          e.a11y.addElLabel(r, a);
        }), e.navigation && e.navigation.$nextEl && (r = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl), r && r.length && (e.a11y.makeElFocusable(r), "BUTTON" !== r[0].tagName && (e.a11y.addElRole(r, "button"), r.on("keydown", e.a11y.onEnterOrSpaceKey)), e.a11y.addElLabel(r, t.nextSlideMessage), e.a11y.addElControls(r, s)), a && a.length && (e.a11y.makeElFocusable(a), "BUTTON" !== a[0].tagName && (e.a11y.addElRole(a, "button"), a.on("keydown", e.a11y.onEnterOrSpaceKey)), e.a11y.addElLabel(a, t.prevSlideMessage), e.a11y.addElControls(a, s)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", k(e.params.pagination.bulletClass), e.a11y.onEnterOrSpaceKey);
      },
      destroy: function destroy() {
        var e,
            t,
            n = this;
        n.a11y.liveRegion && n.a11y.liveRegion.length > 0 && n.a11y.liveRegion.remove(), n.navigation && n.navigation.$nextEl && (e = n.navigation.$nextEl), n.navigation && n.navigation.$prevEl && (t = n.navigation.$prevEl), e && e.off("keydown", n.a11y.onEnterOrSpaceKey), t && t.off("keydown", n.a11y.onEnterOrSpaceKey), n.pagination && n.params.pagination.clickable && n.pagination.bullets && n.pagination.bullets.length && n.pagination.$el.off("keydown", k(n.params.pagination.bulletClass), n.a11y.onEnterOrSpaceKey);
      }
    },
        ie = {
      init: function init() {
        var e = this,
            t = o();

        if (e.params.history) {
          if (!t.history || !t.history.pushState) return e.params.history.enabled = !1, void (e.params.hashNavigation.enabled = !0);
          var n = e.history;
          n.initialized = !0, n.paths = ie.getPathValues(e.params.url), (n.paths.key || n.paths.value) && (n.scrollToSlide(0, n.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || t.addEventListener("popstate", e.history.setHistoryPopState));
        }
      },
      destroy: function destroy() {
        var e = o();
        this.params.history.replaceState || e.removeEventListener("popstate", this.history.setHistoryPopState);
      },
      setHistoryPopState: function setHistoryPopState() {
        var e = this;
        e.history.paths = ie.getPathValues(e.params.url), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1);
      },
      getPathValues: function getPathValues(e) {
        var t = o(),
            n = (e ? new URL(e) : t.location).pathname.slice(1).split("/").filter(function (e) {
          return "" !== e;
        }),
            r = n.length;
        return {
          key: n[r - 2],
          value: n[r - 1]
        };
      },
      setHistory: function setHistory(e, t) {
        var n = this,
            r = o();

        if (n.history.initialized && n.params.history.enabled) {
          var a;
          a = n.params.url ? new URL(n.params.url) : r.location;
          var i = n.slides.eq(t),
              s = ie.slugify(i.attr("data-history"));

          if (n.params.history.root.length > 0) {
            var l = n.params.history.root;
            "/" === l[l.length - 1] && (l = l.slice(0, l.length - 1)), s = l + "/" + e + "/" + s;
          } else a.pathname.includes(e) || (s = e + "/" + s);

          var d = r.history.state;
          d && d.value === s || (n.params.history.replaceState ? r.history.replaceState({
            value: s
          }, null, s) : r.history.pushState({
            value: s
          }, null, s));
        }
      },
      slugify: function slugify(e) {
        return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
      },
      scrollToSlide: function scrollToSlide(e, t, n) {
        var r = this;
        if (t) for (var a = 0, i = r.slides.length; a < i; a += 1) {
          var s = r.slides.eq(a);

          if (ie.slugify(s.attr("data-history")) === t && !s.hasClass(r.params.slideDuplicateClass)) {
            var o = s.index();
            r.slideTo(o, e, n);
          }
        } else r.slideTo(0, e, n);
      }
    },
        se = {
      onHashCange: function onHashCange() {
        var e = this,
            t = i();
        e.emit("hashChange");
        var n = t.location.hash.replace("#", "");

        if (n !== e.slides.eq(e.activeIndex).attr("data-hash")) {
          var r = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + n + '"]').index();
          if (void 0 === r) return;
          e.slideTo(r);
        }
      },
      setHash: function setHash() {
        var e = this,
            t = o(),
            n = i();
        if (e.hashNavigation.initialized && e.params.hashNavigation.enabled) if (e.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || !1), e.emit("hashSet");else {
          var r = e.slides.eq(e.activeIndex),
              a = r.attr("data-hash") || r.attr("data-history");
          n.location.hash = a || "", e.emit("hashSet");
        }
      },
      init: function init() {
        var e = this,
            t = i(),
            n = o();

        if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
          e.hashNavigation.initialized = !0;
          var r = t.location.hash.replace("#", "");
          if (r) for (var a = 0, s = e.slides.length; a < s; a += 1) {
            var l = e.slides.eq(a);

            if ((l.attr("data-hash") || l.attr("data-history")) === r && !l.hasClass(e.params.slideDuplicateClass)) {
              var d = l.index();
              e.slideTo(d, 0, e.params.runCallbacksOnInit, !0);
            }
          }
          e.params.hashNavigation.watchState && m(n).on("hashchange", e.hashNavigation.onHashCange);
        }
      },
      destroy: function destroy() {
        var e = o();
        this.params.hashNavigation.watchState && m(e).off("hashchange", this.hashNavigation.onHashCange);
      }
    },
        oe = {
      run: function run() {
        var e = this,
            t = e.slides.eq(e.activeIndex),
            n = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") && (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = x(function () {
          var t;
          e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), (e.params.cssMode && e.autoplay.running || !1 === t) && e.autoplay.run();
        }, n);
      },
      start: function start() {
        var e = this;
        return void 0 === e.autoplay.timeout && !e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0);
      },
      stop: function stop() {
        var e = this;
        return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0);
      },
      pause: function pause(e) {
        var t = this;
        t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(function (e) {
          t.$wrapperEl[0].addEventListener(e, t.autoplay.onTransitionEnd);
        }) : (t.autoplay.paused = !1, t.autoplay.run())));
      },
      onVisibilityChange: function onVisibilityChange() {
        var e = this,
            t = i();
        "hidden" === t.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === t.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1);
      },
      onTransitionEnd: function onTransitionEnd(e) {
        var t = this;
        t && !t.destroyed && t.$wrapperEl && e.target === t.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(function (e) {
          t.$wrapperEl[0].removeEventListener(e, t.autoplay.onTransitionEnd);
        }), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
      },
      onMouseEnter: function onMouseEnter() {
        var e = this;
        e.autoplay.pause(), ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
          e.$wrapperEl[0].removeEventListener(t, e.autoplay.onTransitionEnd);
        });
      },
      onMouseLeave: function onMouseLeave() {
        this.autoplay.paused = !1, this.autoplay.run();
      },
      attachMouseEvents: function attachMouseEvents() {
        var e = this;
        e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", e.autoplay.onMouseEnter), e.$el.on("mouseleave", e.autoplay.onMouseLeave));
      },
      detachMouseEvents: function detachMouseEvents() {
        var e = this;
        e.$el.off("mouseenter", e.autoplay.onMouseEnter), e.$el.off("mouseleave", e.autoplay.onMouseLeave);
      }
    },
        le = {
      setTranslate: function setTranslate() {
        for (var e = this, t = e.slides, n = 0; n < t.length; n += 1) {
          var r = e.slides.eq(n),
              a = -r[0].swiperSlideOffset;
          e.params.virtualTranslate || (a -= e.translate);
          var i = 0;
          e.isHorizontal() || (i = a, a = 0);
          var s = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(r[0].progress), 0) : 1 + Math.min(Math.max(r[0].progress, -1), 0);
          r.css({
            opacity: s
          }).transform("translate3d(" + a + "px, " + i + "px, 0px)");
        }
      },
      setTransition: function setTransition(e) {
        var t = this,
            n = t.slides,
            r = t.$wrapperEl;

        if (n.transition(e), t.params.virtualTranslate && 0 !== e) {
          var a = !1;
          n.transitionEnd(function () {
            if (!a && t && !t.destroyed) {
              a = !0, t.animating = !1;

              for (var e = ["webkitTransitionEnd", "transitionend"], n = 0; n < e.length; n += 1) {
                r.trigger(e[n]);
              }
            }
          });
        }
      }
    },
        de = {
      setTranslate: function setTranslate() {
        var e,
            t = this,
            n = t.$el,
            r = t.$wrapperEl,
            a = t.slides,
            i = t.width,
            s = t.height,
            o = t.rtlTranslate,
            l = t.size,
            d = t.browser,
            u = t.params.cubeEffect,
            c = t.isHorizontal(),
            p = t.virtual && t.params.virtual.enabled,
            f = 0;
        u.shadow && (c ? (0 === (e = r.find(".swiper-cube-shadow")).length && (e = m('<div class="swiper-cube-shadow"></div>'), r.append(e)), e.css({
          height: i + "px"
        })) : 0 === (e = n.find(".swiper-cube-shadow")).length && (e = m('<div class="swiper-cube-shadow"></div>'), n.append(e)));

        for (var h = 0; h < a.length; h += 1) {
          var v = a.eq(h),
              g = h;
          p && (g = parseInt(v.attr("data-swiper-slide-index"), 10));
          var y = 90 * g,
              b = Math.floor(y / 360);
          o && (y = -y, b = Math.floor(-y / 360));
          var w = Math.max(Math.min(v[0].progress, 1), -1),
              x = 0,
              T = 0,
              E = 0;
          g % 4 == 0 ? (x = 4 * -b * l, E = 0) : (g - 1) % 4 == 0 ? (x = 0, E = 4 * -b * l) : (g - 2) % 4 == 0 ? (x = l + 4 * b * l, E = l) : (g - 3) % 4 == 0 && (x = -l, E = 3 * l + 4 * l * b), o && (x = -x), c || (T = x, x = 0);
          var C = "rotateX(" + (c ? 0 : -y) + "deg) rotateY(" + (c ? y : 0) + "deg) translate3d(" + x + "px, " + T + "px, " + E + "px)";

          if (w <= 1 && w > -1 && (f = 90 * g + 90 * w, o && (f = 90 * -g - 90 * w)), v.transform(C), u.slideShadows) {
            var S = c ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                M = c ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
            0 === S.length && (S = m('<div class="swiper-slide-shadow-' + (c ? "left" : "top") + '"></div>'), v.append(S)), 0 === M.length && (M = m('<div class="swiper-slide-shadow-' + (c ? "right" : "bottom") + '"></div>'), v.append(M)), S.length && (S[0].style.opacity = Math.max(-w, 0)), M.length && (M[0].style.opacity = Math.max(w, 0));
          }
        }

        if (r.css({
          "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
          "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
          "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
          "transform-origin": "50% 50% -" + l / 2 + "px"
        }), u.shadow) if (c) e.transform("translate3d(0px, " + (i / 2 + u.shadowOffset) + "px, " + -i / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + u.shadowScale + ")");else {
          var k = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
              P = 1.5 - (Math.sin(2 * k * Math.PI / 360) / 2 + Math.cos(2 * k * Math.PI / 360) / 2),
              L = u.shadowScale,
              A = u.shadowScale / P,
              z = u.shadowOffset;
          e.transform("scale3d(" + L + ", 1, " + A + ") translate3d(0px, " + (s / 2 + z) + "px, " + -s / 2 / A + "px) rotateX(-90deg)");
        }
        var D = d.isSafari || d.isWebView ? -l / 2 : 0;
        r.transform("translate3d(0px,0," + D + "px) rotateX(" + (t.isHorizontal() ? 0 : f) + "deg) rotateY(" + (t.isHorizontal() ? -f : 0) + "deg)");
      },
      setTransition: function setTransition(e) {
        var t = this,
            n = t.$el;
        t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && n.find(".swiper-cube-shadow").transition(e);
      }
    },
        ue = {
      setTranslate: function setTranslate() {
        for (var e = this, t = e.slides, n = e.rtlTranslate, r = 0; r < t.length; r += 1) {
          var a = t.eq(r),
              i = a[0].progress;
          e.params.flipEffect.limitRotation && (i = Math.max(Math.min(a[0].progress, 1), -1));
          var s = -180 * i,
              o = 0,
              l = -a[0].swiperSlideOffset,
              d = 0;

          if (e.isHorizontal() ? n && (s = -s) : (d = l, l = 0, o = -s, s = 0), a[0].style.zIndex = -Math.abs(Math.round(i)) + t.length, e.params.flipEffect.slideShadows) {
            var u = e.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
                c = e.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
            0 === u.length && (u = m('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), a.append(u)), 0 === c.length && (c = m('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(c)), u.length && (u[0].style.opacity = Math.max(-i, 0)), c.length && (c[0].style.opacity = Math.max(i, 0));
          }

          a.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + s + "deg)");
        }
      },
      setTransition: function setTransition(e) {
        var t = this,
            n = t.slides,
            r = t.activeIndex,
            a = t.$wrapperEl;

        if (n.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
          var i = !1;
          n.eq(r).transitionEnd(function () {
            if (!i && t && !t.destroyed) {
              i = !0, t.animating = !1;

              for (var e = ["webkitTransitionEnd", "transitionend"], n = 0; n < e.length; n += 1) {
                a.trigger(e[n]);
              }
            }
          });
        }
      }
    },
        ce = {
      setTranslate: function setTranslate() {
        for (var e = this, t = e.width, n = e.height, r = e.slides, a = e.slidesSizesGrid, i = e.params.coverflowEffect, s = e.isHorizontal(), o = e.translate, l = s ? t / 2 - o : n / 2 - o, d = s ? i.rotate : -i.rotate, u = i.depth, c = 0, p = r.length; c < p; c += 1) {
          var f = r.eq(c),
              h = a[c],
              v = (l - f[0].swiperSlideOffset - h / 2) / h * i.modifier,
              g = s ? d * v : 0,
              y = s ? 0 : d * v,
              b = -u * Math.abs(v),
              w = i.stretch;
          "string" == typeof w && -1 !== w.indexOf("%") && (w = parseFloat(i.stretch) / 100 * h);
          var x = s ? 0 : w * v,
              T = s ? w * v : 0,
              E = 1 - (1 - i.scale) * Math.abs(v);
          Math.abs(T) < .001 && (T = 0), Math.abs(x) < .001 && (x = 0), Math.abs(b) < .001 && (b = 0), Math.abs(g) < .001 && (g = 0), Math.abs(y) < .001 && (y = 0), Math.abs(E) < .001 && (E = 0);
          var C = "translate3d(" + T + "px," + x + "px," + b + "px)  rotateX(" + y + "deg) rotateY(" + g + "deg) scale(" + E + ")";

          if (f.transform(C), f[0].style.zIndex = 1 - Math.abs(Math.round(v)), i.slideShadows) {
            var S = s ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                M = s ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
            0 === S.length && (S = m('<div class="swiper-slide-shadow-' + (s ? "left" : "top") + '"></div>'), f.append(S)), 0 === M.length && (M = m('<div class="swiper-slide-shadow-' + (s ? "right" : "bottom") + '"></div>'), f.append(M)), S.length && (S[0].style.opacity = v > 0 ? v : 0), M.length && (M[0].style.opacity = -v > 0 ? -v : 0);
          }
        }
      },
      setTransition: function setTransition(e) {
        this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
      }
    },
        pe = {
      init: function init() {
        var e = this,
            t = e.params.thumbs;
        if (e.thumbs.initialized) return !1;
        e.thumbs.initialized = !0;
        var n = e.constructor;
        return t.swiper instanceof n ? (e.thumbs.swiper = t.swiper, S(e.thumbs.swiper.originalParams, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        }), S(e.thumbs.swiper.params, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        })) : C(t.swiper) && (e.thumbs.swiper = new n(S({}, t.swiper, {
          watchSlidesVisibility: !0,
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick), !0;
      },
      onThumbClick: function onThumbClick() {
        var e = this,
            t = e.thumbs.swiper;

        if (t) {
          var n = t.clickedIndex,
              r = t.clickedSlide;

          if (!(r && m(r).hasClass(e.params.thumbs.slideThumbActiveClass) || null == n)) {
            var a;

            if (a = t.params.loop ? parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"), 10) : n, e.params.loop) {
              var i = e.activeIndex;
              e.slides.eq(i).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, i = e.activeIndex);
              var s = e.slides.eq(i).prevAll('[data-swiper-slide-index="' + a + '"]').eq(0).index(),
                  o = e.slides.eq(i).nextAll('[data-swiper-slide-index="' + a + '"]').eq(0).index();
              a = void 0 === s ? o : void 0 === o ? s : o - i < i - s ? o : s;
            }

            e.slideTo(a);
          }
        }
      },
      update: function update(e) {
        var t = this,
            n = t.thumbs.swiper;

        if (n) {
          var r = "auto" === n.params.slidesPerView ? n.slidesPerViewDynamic() : n.params.slidesPerView,
              a = t.params.thumbs.autoScrollOffset,
              i = a && !n.params.loop;

          if (t.realIndex !== n.realIndex || i) {
            var s,
                o,
                l = n.activeIndex;

            if (n.params.loop) {
              n.slides.eq(l).hasClass(n.params.slideDuplicateClass) && (n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft, l = n.activeIndex);
              var d = n.slides.eq(l).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
                  u = n.slides.eq(l).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
              s = void 0 === d ? u : void 0 === u ? d : u - l == l - d ? l : u - l < l - d ? u : d, o = t.activeIndex > t.previousIndex ? "next" : "prev";
            } else o = (s = t.realIndex) > t.previousIndex ? "next" : "prev";

            i && (s += "next" === o ? a : -1 * a), n.visibleSlidesIndexes && n.visibleSlidesIndexes.indexOf(s) < 0 && (n.params.centeredSlides ? s = s > l ? s - Math.floor(r / 2) + 1 : s + Math.floor(r / 2) - 1 : s > l && (s = s - r + 1), n.slideTo(s, e ? 0 : void 0));
          }

          var c = 1,
              p = t.params.thumbs.slideThumbActiveClass;
          if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (c = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (c = 1), c = Math.floor(c), n.slides.removeClass(p), n.params.loop || n.params.virtual && n.params.virtual.enabled) for (var f = 0; f < c; f += 1) {
            n.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + f) + '"]').addClass(p);
          } else for (var h = 0; h < c; h += 1) {
            n.slides.eq(t.realIndex + h).addClass(p);
          }
        }
      }
    },
        fe = [Y, U, {
      name: "mousewheel",
      params: {
        mousewheel: {
          enabled: !1,
          releaseOnEdges: !1,
          invert: !1,
          forceToAxis: !1,
          sensitivity: 1,
          eventsTarget: "container",
          thresholdDelta: null,
          thresholdTime: null
        }
      },
      create: function create() {
        M(this, {
          mousewheel: {
            enabled: !1,
            lastScrollTime: T(),
            lastEventBeforeSnap: void 0,
            recentWheelEvents: [],
            enable: K.enable,
            disable: K.disable,
            handle: K.handle,
            handleMouseEnter: K.handleMouseEnter,
            handleMouseLeave: K.handleMouseLeave,
            animateSlider: K.animateSlider,
            releaseScroll: K.releaseScroll
          }
        });
      },
      on: {
        init: function init(e) {
          !e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(), e.params.mousewheel.enabled && e.mousewheel.enable();
        },
        destroy: function destroy(e) {
          e.params.cssMode && e.mousewheel.enable(), e.mousewheel.enabled && e.mousewheel.disable();
        }
      }
    }, {
      name: "navigation",
      params: {
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock"
        }
      },
      create: function create() {
        M(this, {
          navigation: t({}, Q)
        });
      },
      on: {
        init: function init(e) {
          e.navigation.init(), e.navigation.update();
        },
        toEdge: function toEdge(e) {
          e.navigation.update();
        },
        fromEdge: function fromEdge(e) {
          e.navigation.update();
        },
        destroy: function destroy(e) {
          e.navigation.destroy();
        },
        "enable disable": function enableDisable(e) {
          var t = e.navigation,
              n = t.$nextEl,
              r = t.$prevEl;
          n && n[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), r && r[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass);
        },
        click: function click(e, t) {
          var n = e.navigation,
              r = n.$nextEl,
              a = n.$prevEl,
              i = t.target;

          if (e.params.navigation.hideOnClick && !m(i).is(a) && !m(i).is(r)) {
            if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === i || e.pagination.el.contains(i))) return;
            var s;
            r ? s = r.hasClass(e.params.navigation.hiddenClass) : a && (s = a.hasClass(e.params.navigation.hiddenClass)), !0 === s ? e.emit("navigationShow") : e.emit("navigationHide"), r && r.toggleClass(e.params.navigation.hiddenClass), a && a.toggleClass(e.params.navigation.hiddenClass);
          }
        }
      }
    }, {
      name: "pagination",
      params: {
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: function formatFractionCurrent(e) {
            return e;
          },
          formatFractionTotal: function formatFractionTotal(e) {
            return e;
          },
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          modifierClass: "swiper-pagination-",
          currentClass: "swiper-pagination-current",
          totalClass: "swiper-pagination-total",
          hiddenClass: "swiper-pagination-hidden",
          progressbarFillClass: "swiper-pagination-progressbar-fill",
          progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
          clickableClass: "swiper-pagination-clickable",
          lockClass: "swiper-pagination-lock"
        }
      },
      create: function create() {
        M(this, {
          pagination: t({
            dynamicBulletIndex: 0
          }, J)
        });
      },
      on: {
        init: function init(e) {
          e.pagination.init(), e.pagination.render(), e.pagination.update();
        },
        activeIndexChange: function activeIndexChange(e) {
          (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
        },
        snapIndexChange: function snapIndexChange(e) {
          e.params.loop || e.pagination.update();
        },
        slidesLengthChange: function slidesLengthChange(e) {
          e.params.loop && (e.pagination.render(), e.pagination.update());
        },
        snapGridLengthChange: function snapGridLengthChange(e) {
          e.params.loop || (e.pagination.render(), e.pagination.update());
        },
        destroy: function destroy(e) {
          e.pagination.destroy();
        },
        "enable disable": function enableDisable(e) {
          var t = e.pagination.$el;
          t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass);
        },
        click: function click(e, t) {
          var n = t.target;

          if (e.params.pagination.el && e.params.pagination.hideOnClick && e.pagination.$el.length > 0 && !m(n).hasClass(e.params.pagination.bulletClass)) {
            if (e.navigation && (e.navigation.nextEl && n === e.navigation.nextEl || e.navigation.prevEl && n === e.navigation.prevEl)) return;
            !0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow") : e.emit("paginationHide"), e.pagination.$el.toggleClass(e.params.pagination.hiddenClass);
          }
        }
      }
    }, {
      name: "scrollbar",
      params: {
        scrollbar: {
          el: null,
          dragSize: "auto",
          hide: !1,
          draggable: !1,
          snapOnRelease: !0,
          lockClass: "swiper-scrollbar-lock",
          dragClass: "swiper-scrollbar-drag"
        }
      },
      create: function create() {
        M(this, {
          scrollbar: t({
            isTouched: !1,
            timeout: null,
            dragTimeout: null
          }, Z)
        });
      },
      on: {
        init: function init(e) {
          e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate();
        },
        update: function update(e) {
          e.scrollbar.updateSize();
        },
        resize: function resize(e) {
          e.scrollbar.updateSize();
        },
        observerUpdate: function observerUpdate(e) {
          e.scrollbar.updateSize();
        },
        setTranslate: function setTranslate(e) {
          e.scrollbar.setTranslate();
        },
        setTransition: function setTransition(e, t) {
          e.scrollbar.setTransition(t);
        },
        "enable disable": function enableDisable(e) {
          var t = e.scrollbar.$el;
          t && t[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass);
        },
        destroy: function destroy(e) {
          e.scrollbar.destroy();
        }
      }
    }, {
      name: "parallax",
      params: {
        parallax: {
          enabled: !1
        }
      },
      create: function create() {
        M(this, {
          parallax: t({}, ee)
        });
      },
      on: {
        beforeInit: function beforeInit(e) {
          e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
        },
        init: function init(e) {
          e.params.parallax.enabled && e.parallax.setTranslate();
        },
        setTranslate: function setTranslate(e) {
          e.params.parallax.enabled && e.parallax.setTranslate();
        },
        setTransition: function setTransition(e, t) {
          e.params.parallax.enabled && e.parallax.setTransition(t);
        }
      }
    }, {
      name: "zoom",
      params: {
        zoom: {
          enabled: !1,
          maxRatio: 3,
          minRatio: 1,
          toggle: !0,
          containerClass: "swiper-zoom-container",
          zoomedSlideClass: "swiper-slide-zoomed"
        }
      },
      create: function create() {
        var e = this;
        M(e, {
          zoom: t({
            enabled: !1,
            scale: 1,
            currentScale: 1,
            isScaling: !1,
            gesture: {
              $slideEl: void 0,
              slideWidth: void 0,
              slideHeight: void 0,
              $imageEl: void 0,
              $imageWrapEl: void 0,
              maxRatio: 3
            },
            image: {
              isTouched: void 0,
              isMoved: void 0,
              currentX: void 0,
              currentY: void 0,
              minX: void 0,
              minY: void 0,
              maxX: void 0,
              maxY: void 0,
              width: void 0,
              height: void 0,
              startX: void 0,
              startY: void 0,
              touchesStart: {},
              touchesCurrent: {}
            },
            velocity: {
              x: void 0,
              y: void 0,
              prevPositionX: void 0,
              prevPositionY: void 0,
              prevTime: void 0
            }
          }, te)
        });
        var n = 1;
        Object.defineProperty(e.zoom, "scale", {
          get: function get() {
            return n;
          },
          set: function set(t) {
            if (n !== t) {
              var r = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                  a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
              e.emit("zoomChange", t, r, a);
            }

            n = t;
          }
        });
      },
      on: {
        init: function init(e) {
          e.params.zoom.enabled && e.zoom.enable();
        },
        destroy: function destroy(e) {
          e.zoom.disable();
        },
        touchStart: function touchStart(e, t) {
          e.zoom.enabled && e.zoom.onTouchStart(t);
        },
        touchEnd: function touchEnd(e, t) {
          e.zoom.enabled && e.zoom.onTouchEnd(t);
        },
        doubleTap: function doubleTap(e, t) {
          !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && e.zoom.toggle(t);
        },
        transitionEnd: function transitionEnd(e) {
          e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
        },
        slideChange: function slideChange(e) {
          e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd();
        }
      }
    }, {
      name: "lazy",
      params: {
        lazy: {
          checkInView: !1,
          enabled: !1,
          loadPrevNext: !1,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: !1,
          scrollingElement: "",
          elementClass: "swiper-lazy",
          loadingClass: "swiper-lazy-loading",
          loadedClass: "swiper-lazy-loaded",
          preloaderClass: "swiper-lazy-preloader"
        }
      },
      create: function create() {
        M(this, {
          lazy: t({
            initialImageLoaded: !1
          }, ne)
        });
      },
      on: {
        beforeInit: function beforeInit(e) {
          e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1);
        },
        init: function init(e) {
          e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && (e.params.lazy.checkInView ? e.lazy.checkInViewOnLoad() : e.lazy.load());
        },
        scroll: function scroll(e) {
          e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
        },
        "scrollbarDragMove resize _freeModeNoMomentumRelease": function scrollbarDragMoveResize_freeModeNoMomentumRelease(e) {
          e.params.lazy.enabled && e.lazy.load();
        },
        transitionStart: function transitionStart(e) {
          e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load();
        },
        transitionEnd: function transitionEnd(e) {
          e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load();
        },
        slideChange: function slideChange(e) {
          e.params.lazy.enabled && e.params.cssMode && e.lazy.load();
        }
      }
    }, {
      name: "controller",
      params: {
        controller: {
          control: void 0,
          inverse: !1,
          by: "slide"
        }
      },
      create: function create() {
        M(this, {
          controller: t({
            control: this.params.controller.control
          }, re)
        });
      },
      on: {
        update: function update(e) {
          e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
        },
        resize: function resize(e) {
          e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
        },
        observerUpdate: function observerUpdate(e) {
          e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
        },
        setTranslate: function setTranslate(e, t, n) {
          e.controller.control && e.controller.setTranslate(t, n);
        },
        setTransition: function setTransition(e, t, n) {
          e.controller.control && e.controller.setTransition(t, n);
        }
      }
    }, {
      name: "a11y",
      params: {
        a11y: {
          enabled: !0,
          notificationClass: "swiper-notification",
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}",
          slideLabelMessage: "{{index}} / {{slidesLength}}",
          containerMessage: null,
          containerRoleDescriptionMessage: null,
          itemRoleDescriptionMessage: null,
          slideRole: "group"
        }
      },
      create: function create() {
        M(this, {
          a11y: t({}, ae, {
            liveRegion: m('<span class="' + this.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
          })
        });
      },
      on: {
        afterInit: function afterInit(e) {
          e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation());
        },
        toEdge: function toEdge(e) {
          e.params.a11y.enabled && e.a11y.updateNavigation();
        },
        fromEdge: function fromEdge(e) {
          e.params.a11y.enabled && e.a11y.updateNavigation();
        },
        paginationUpdate: function paginationUpdate(e) {
          e.params.a11y.enabled && e.a11y.updatePagination();
        },
        destroy: function destroy(e) {
          e.params.a11y.enabled && e.a11y.destroy();
        }
      }
    }, {
      name: "history",
      params: {
        history: {
          enabled: !1,
          root: "",
          replaceState: !1,
          key: "slides"
        }
      },
      create: function create() {
        M(this, {
          history: t({}, ie)
        });
      },
      on: {
        init: function init(e) {
          e.params.history.enabled && e.history.init();
        },
        destroy: function destroy(e) {
          e.params.history.enabled && e.history.destroy();
        },
        "transitionEnd _freeModeNoMomentumRelease": function transitionEnd_freeModeNoMomentumRelease(e) {
          e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex);
        },
        slideChange: function slideChange(e) {
          e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex);
        }
      }
    }, {
      name: "hash-navigation",
      params: {
        hashNavigation: {
          enabled: !1,
          replaceState: !1,
          watchState: !1
        }
      },
      create: function create() {
        M(this, {
          hashNavigation: t({
            initialized: !1
          }, se)
        });
      },
      on: {
        init: function init(e) {
          e.params.hashNavigation.enabled && e.hashNavigation.init();
        },
        destroy: function destroy(e) {
          e.params.hashNavigation.enabled && e.hashNavigation.destroy();
        },
        "transitionEnd _freeModeNoMomentumRelease": function transitionEnd_freeModeNoMomentumRelease(e) {
          e.hashNavigation.initialized && e.hashNavigation.setHash();
        },
        slideChange: function slideChange(e) {
          e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash();
        }
      }
    }, {
      name: "autoplay",
      params: {
        autoplay: {
          enabled: !1,
          delay: 3e3,
          waitForTransition: !0,
          disableOnInteraction: !0,
          stopOnLastSlide: !1,
          reverseDirection: !1,
          pauseOnMouseEnter: !1
        }
      },
      create: function create() {
        M(this, {
          autoplay: t({}, oe, {
            running: !1,
            paused: !1
          })
        });
      },
      on: {
        init: function init(e) {
          e.params.autoplay.enabled && (e.autoplay.start(), i().addEventListener("visibilitychange", e.autoplay.onVisibilityChange), e.autoplay.attachMouseEvents());
        },
        beforeTransitionStart: function beforeTransitionStart(e, t, n) {
          e.autoplay.running && (n || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(t) : e.autoplay.stop());
        },
        sliderFirstMove: function sliderFirstMove(e) {
          e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause());
        },
        touchEnd: function touchEnd(e) {
          e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run();
        },
        destroy: function destroy(e) {
          e.autoplay.detachMouseEvents(), e.autoplay.running && e.autoplay.stop(), i().removeEventListener("visibilitychange", e.autoplay.onVisibilityChange);
        }
      }
    }, {
      name: "effect-fade",
      params: {
        fadeEffect: {
          crossFade: !1
        }
      },
      create: function create() {
        M(this, {
          fadeEffect: t({}, le)
        });
      },
      on: {
        beforeInit: function beforeInit(e) {
          if ("fade" === e.params.effect) {
            e.classNames.push(e.params.containerModifierClass + "fade");
            var t = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !0
            };
            S(e.params, t), S(e.originalParams, t);
          }
        },
        setTranslate: function setTranslate(e) {
          "fade" === e.params.effect && e.fadeEffect.setTranslate();
        },
        setTransition: function setTransition(e, t) {
          "fade" === e.params.effect && e.fadeEffect.setTransition(t);
        }
      }
    }, {
      name: "effect-cube",
      params: {
        cubeEffect: {
          slideShadows: !0,
          shadow: !0,
          shadowOffset: 20,
          shadowScale: .94
        }
      },
      create: function create() {
        M(this, {
          cubeEffect: t({}, de)
        });
      },
      on: {
        beforeInit: function beforeInit(e) {
          if ("cube" === e.params.effect) {
            e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
            var t = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              resistanceRatio: 0,
              spaceBetween: 0,
              centeredSlides: !1,
              virtualTranslate: !0
            };
            S(e.params, t), S(e.originalParams, t);
          }
        },
        setTranslate: function setTranslate(e) {
          "cube" === e.params.effect && e.cubeEffect.setTranslate();
        },
        setTransition: function setTransition(e, t) {
          "cube" === e.params.effect && e.cubeEffect.setTransition(t);
        }
      }
    }, {
      name: "effect-flip",
      params: {
        flipEffect: {
          slideShadows: !0,
          limitRotation: !0
        }
      },
      create: function create() {
        M(this, {
          flipEffect: t({}, ue)
        });
      },
      on: {
        beforeInit: function beforeInit(e) {
          if ("flip" === e.params.effect) {
            e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
            var t = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !0
            };
            S(e.params, t), S(e.originalParams, t);
          }
        },
        setTranslate: function setTranslate(e) {
          "flip" === e.params.effect && e.flipEffect.setTranslate();
        },
        setTransition: function setTransition(e, t) {
          "flip" === e.params.effect && e.flipEffect.setTransition(t);
        }
      }
    }, {
      name: "effect-coverflow",
      params: {
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          scale: 1,
          modifier: 1,
          slideShadows: !0
        }
      },
      create: function create() {
        M(this, {
          coverflowEffect: t({}, ce)
        });
      },
      on: {
        beforeInit: function beforeInit(e) {
          "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
        },
        setTranslate: function setTranslate(e) {
          "coverflow" === e.params.effect && e.coverflowEffect.setTranslate();
        },
        setTransition: function setTransition(e, t) {
          "coverflow" === e.params.effect && e.coverflowEffect.setTransition(t);
        }
      }
    }, {
      name: "thumbs",
      params: {
        thumbs: {
          swiper: null,
          multipleActiveThumbs: !0,
          autoScrollOffset: 0,
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-container-thumbs"
        }
      },
      create: function create() {
        M(this, {
          thumbs: t({
            swiper: null,
            initialized: !1
          }, pe)
        });
      },
      on: {
        beforeInit: function beforeInit(e) {
          var t = e.params.thumbs;
          t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0));
        },
        slideChange: function slideChange(e) {
          e.thumbs.swiper && e.thumbs.update();
        },
        update: function update(e) {
          e.thumbs.swiper && e.thumbs.update();
        },
        resize: function resize(e) {
          e.thumbs.swiper && e.thumbs.update();
        },
        observerUpdate: function observerUpdate(e) {
          e.thumbs.swiper && e.thumbs.update();
        },
        setTransition: function setTransition(e, t) {
          var n = e.thumbs.swiper;
          n && n.setTransition(t);
        },
        beforeDestroy: function beforeDestroy(e) {
          var t = e.thumbs.swiper;
          t && e.thumbs.swiperCreated && t && t.destroy();
        }
      }
    }];
    return F.use(fe), F;
  }();
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var r = n(1),
      a = n.n(r);

  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }

  var s = function () {
    function e(t, n, r) {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), this.init = !0, this.name = t, this.view = n, this.space = r, this.settings = {
        slidesPerView: this.view,
        spaceBetween: this.space,
        autoplay: {
          delay: 3e3
        },
        touchRatio: 0,
        effect: "coverflow",
        observer: !0,
        observeParents: !0,
        coverflowEffect: {
          rotate: 8,
          depth: 10,
          modifier: 1,
          slideShadows: !1,
          stretch: 2
        }
      };
    }

    var t, n, r;
    return t = e, (n = [{
      key: "createSlider",
      value: function value() {
        var e = this;
        return this.slider = new a.a(this.name, {
          slidesPerView: this.view,
          spaceBetween: this.space
        }), setTimeout(function () {
          $(e.name).css("opacity", 1);
        }, 600), this.slider;
      }
    }, {
      key: "updateSlider",
      value: function value(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";

        switch (e) {
          case "auto":
            t ? (this.slider.params.autoplay.start(), this.slider.update()) : (this.slider.params.autoplay.stop(), this.slider.update());
            break;

          case "loop":
            this.settings.loop = t, this.slider.destroy(), this.slider = new a.a(this.name, this.settings);
            break;

          case "space":
            this.slider.params.spaceBetween = t, this.slider.update();
            break;

          case "view":
            this.slider.params.slidesPerView = t, this.slider.update();
            break;

          case "center":
            this.slider.params.centeredSlides = t, this.slider.update();
            break;

          case "initialSlide":
            this.slider.params.initialSlide = t, this.slider.update(), console.log(this.slider.params.initialSlide);
            break;

          case "slideActiveClass":
            this.slider.params.slideActiveClass = t, this.slider.update();
            break;

          case "slideToClickedSlide":
            this.slider.params.slideToClickedSlide = t, this.slider.update();
            break;

          case "controller":
            this.slider.params.controller = t, this.slider.update(), console.log(this.slider.params.controller);
            break;

          case "loop":
            this.slider.params.loop = !1, this.slider.update();
            break;

          case "group":
            this.slider.params.slidesPerGroup = t, this.slider.params.speed = 1e3, this.slider.update();
            break;

          case "skip":
            this.slider.params.slidesPerGroupSkip = t, this.slider.update();
            break;

          case "autoHeight":
            this.slider.params.autoHeight = t, this.slider.update();
            break;

          case "effect":
            this.settings.effect = t, this.settings.fadeEffect = {
              crossFade: !0
            }, this.slider.destroy(), this.slider = new a.a(this.name, this.settings);
            break;

          case "pagination":
            var n = $(this.name).find(".swiper-pagination")[0];
            this.settings.pagination = "custom" === t ? {
              el: n,
              clickable: !0,
              renderBullet: function renderBullet(e, t) {
                return '<span class="' + t + '">' + (e + 1) + "</span>";
              }
            } : {
              el: n,
              clickable: !0
            }, this.slider.destroy(), this.slider = new a.a(this.name, this.settings);
            break;

          case "arrow":
            var r = $(this.name).find(".arrow__link--next")[0],
                i = $(this.name).find(".arrow__link--prev")[0];
            this.settings.navigation = {
              nextEl: r,
              prevEl: i
            }, this.slider.destroy(), this.slider = new a.a(this.name, this.settings);
        }
      }
    }]) && i(t.prototype, n), r && i(t, r), e;
  }();

  t["default"] = s;
}, function (e, t, n) {
  n(4), e.exports = n(2);
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var r = n(0),
      a = n.n(r),
      i = n(2);

  a.a.fn.exists = function () {
    return a()(this).length;
  };

  var s = {
    createSlider: function createSlider() {
      var e = new i["default"](".js-slider", 3, 0);
      e.createSlider(), e.updateSlider("loop", !0), e.updateSlider("center", !0);
    },
    initFile: function initFile() {
      if (a()(".js-file").exists()) try {
        document.querySelectorAll(".js-file").forEach(function (e, t) {
          var n = a()(e).find(".file__label"),
              r = a()(e).find(".file__input");
          a()(r).change(function () {
            if (void 0 !== this.files) {
              if (a()(".remove-file").exists() && a()(".remove-file").remove(), 0 == this.files.length) n.removeClass("withFile").text(n.data("default"));else {
                var e = this.files[0].name,
                    t = document.createElement("span");
                t.classList.add("remove-file"), a()(".file").append(t), a()(".js-file").on("click", ".remove-file", function (e) {
                  e.preventDefault(), a()(r).val(""), n.removeClass("withFile"), n.text("Добавить фото"), a()(t).remove();
                }), n.addClass("withFile").text(e);
              }
            } else {
              var i = this.value.split("\\");
              n.addClass("withFile").text(i[i.length - 1]);
            }
            return !1;
          });
        });
      } catch (e) {
        console.log(e);
      }
    },
    initShare: function initShare() {
      if (a()(".js-share").exists()) try {
        a()("a.js-share").each(function (e, t) {
          var n = a()(t).data("share");
          a()(t).attr("href", n.replace("{url}", encodeURIComponent(window.location.href)));
        });
      } catch (e) {
        console.log(e);
      }
    },
    initForm: function initForm() {
      if (a()(".js-form").exists()) try {
        !function () {
          for (var e = document.querySelectorAll(".js-form"), t = function t(_t4) {
            e[_t4].querySelector(".js-form button");

            var n = e[_t4].querySelectorAll(".js-field"),
                a = e[_t4].querySelector(".js-field-price"),
                i = e[_t4].querySelector(".js-field-phone");

            e[_t4].addEventListener("submit", function (u) {
              u.preventDefault(), s(e[_t4]), o(n), i && d(i), a && l(a), r(n) && this.submit();
            });
          }, n = 0; n < e.length; n++) {
            t(n);
          }

          var r = function r(e) {
            for (var t = 0, n = 0; n < e.length; n++) {
              "" === e[n].value || a()(e[n]).siblings(".error").exists() ? (!1, t++) : !0;
            }

            return 0 === t;
          },
              i = function i(e) {
            var t = document.createElement("div");
            return t.className = "error", t.style.color = "red", t.innerHTML = e, setTimeout(function () {
              t.style.opacity = "1";
            }, .001), t;
          },
              s = function s(e) {
            for (var t = e.querySelectorAll(".error"), n = 0; n < t.length; n++) {
              t[n].remove();
            }
          },
              o = function o(e) {
            for (var t = 0; t < e.length; t++) {
              if (e[t].value || a()(e[t]).is("textarea")) e[t].classList.remove("warning");else {
                var n = i("Поле обязательно для заполнения");
                e[t].classList.add("warning"), a()(e[t]).parent().find(".error").exists() ? a()(e[t]).parent().find(".error").replaceWith(n) : a()(n).insertAfter(e[t]);
              }
            }
          },
              l = function l(e) {
            if (e.value <= 0) {
              var t = i("Некорректная цена");
              e.classList.add("warning"), a()(e).parent().find(".error").exists() ? a()(e).parent().find(".error").replaceWith(t) : a()(t).insertAfter(e);
            } else e.classList.remove("warning");
          },
              d = function d(e) {
            if (/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(e.value)) e.classList.remove("warning");else {
              var t = i("Некорректный номер телефона");
              e.classList.add("warning"), a()(e).parent().find(".error").exists() ? a()(e).parent().find(".error").replaceWith(t) : a()(t).insertAfter(e);
            }
          };
        }();
      } catch (e) {
        console.log(e);
      }
    },
    animateFunc: {
      about: {
        options: {
          showTimeline: new TimelineMax({
            reversed: !0,
            paused: !0,
            scrollTrigger: {
              trigger: ".company-about",
              start: "top-=60% center"
            }
          }),
          setShow: function setShow() {
            return this.showTimeline.set([".company-about__quote", ".company-about__txt"], {
              y: 20
            }).set(".benefit--simple .benefit__item", {
              x: -60
            }).to(".company-about h2", .5, {
              autoAlpha: 1
            }).to(".company-about__quote", .3, {
              autoAlpha: 1,
              y: 0
            }).to(".company-about__txt", .3, {
              autoAlpha: 1,
              y: 0
            }).to(".benefit--simple .benefit__item", .6, {
              autoAlpha: 1,
              x: 0,
              stagger: .2
            });
          }
        }
      },
      benefit: {
        options: {
          showTimeline: new TimelineMax({
            reversed: !0,
            paused: !0,
            scrollTrigger: {
              trigger: ".company-benefit",
              start: "top-=60% center"
            }
          }),
          setShow: function setShow() {
            return this.showTimeline.set([".company-benefit__txt"], {
              y: 20
            }).set(".benefit--basic .benefit__item", {
              scale: 0
            }).set(".list li", {
              y: -30
            }).to(".company-benefit h2", .5, {
              autoAlpha: 1
            }).to(".company-benefit__txt", .75, {
              autoAlpha: 1,
              y: 0,
              stagger: .15
            }).to(".benefit--basic .benefit__item", .6, {
              scale: 1,
              autoAlpha: 1,
              stagger: .2
            }).to(".list li", {
              y: 0,
              autoAlpha: 1,
              stagger: .2
            });
          }
        }
      }
    }
  };
  a()(function () {
    s.createSlider(), s.initFile(), s.initShare(), s.initForm(), s.animateFunc.about.options.setShow(), s.animateFunc.benefit.options.setShow();
  });
}]);