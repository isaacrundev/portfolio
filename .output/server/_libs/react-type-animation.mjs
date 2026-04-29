import { r as reactExports, e } from "./react.mjs";
function i(e2, t, r, n) {
  return new (r || (r = Promise))((function(o, a) {
    function i2(e3) {
      try {
        c2(n.next(e3));
      } catch (e4) {
        a(e4);
      }
    }
    function u2(e3) {
      try {
        c2(n.throw(e3));
      } catch (e4) {
        a(e4);
      }
    }
    function c2(e3) {
      var t2;
      e3.done ? o(e3.value) : (t2 = e3.value, t2 instanceof r ? t2 : new r((function(e4) {
        e4(t2);
      }))).then(i2, u2);
    }
    c2((n = n.apply(e2, [])).next());
  }));
}
function u(e2, t) {
  var r, n, o, a, i2 = { label: 0, sent: function() {
    if (1 & o[0]) throw o[1];
    return o[1];
  }, trys: [], ops: [] };
  return a = { next: u2(0), throw: u2(1), return: u2(2) }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function u2(a2) {
    return function(u3) {
      return (function(a3) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; i2; ) try {
          if (r = 1, n && (o = 2 & a3[0] ? n.return : a3[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a3[1])).done) return o;
          switch (n = 0, o && (a3 = [2 & a3[0], o.value]), a3[0]) {
            case 0:
            case 1:
              o = a3;
              break;
            case 4:
              return i2.label++, { value: a3[1], done: false };
            case 5:
              i2.label++, n = a3[1], a3 = [0];
              continue;
            case 7:
              a3 = i2.ops.pop(), i2.trys.pop();
              continue;
            default:
              if (!(o = i2.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a3[0] && 2 !== a3[0])) {
                i2 = 0;
                continue;
              }
              if (3 === a3[0] && (!o || a3[1] > o[0] && a3[1] < o[3])) {
                i2.label = a3[1];
                break;
              }
              if (6 === a3[0] && i2.label < o[1]) {
                i2.label = o[1], o = a3;
                break;
              }
              if (o && i2.label < o[2]) {
                i2.label = o[2], i2.ops.push(a3);
                break;
              }
              o[2] && i2.ops.pop(), i2.trys.pop();
              continue;
          }
          a3 = t.call(e2, i2);
        } catch (e3) {
          a3 = [6, e3], n = 0;
        } finally {
          r = o = 0;
        }
        if (5 & a3[0]) throw a3[1];
        return { value: a3[0] ? a3[1] : void 0, done: true };
      })([a2, u3]);
    };
  }
}
function c(e2) {
  var t = "function" == typeof Symbol && Symbol.iterator, r = t && e2[t], n = 0;
  if (r) return r.call(e2);
  if (e2 && "number" == typeof e2.length) return { next: function() {
    return e2 && n >= e2.length && (e2 = void 0), { value: e2 && e2[n++], done: !e2 };
  } };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function l(e2, t) {
  var r = "function" == typeof Symbol && e2[Symbol.iterator];
  if (!r) return e2;
  var n, o, a = r.call(e2), i2 = [];
  try {
    for (; (void 0 === t || t-- > 0) && !(n = a.next()).done; ) i2.push(n.value);
  } catch (e3) {
    o = { error: e3 };
  } finally {
    try {
      n && !n.done && (r = a.return) && r.call(a);
    } finally {
      if (o) throw o.error;
    }
  }
  return i2;
}
function s(e2, t, r) {
  if (2 === arguments.length) for (var n, o = 0, a = t.length; o < a; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
  return e2.concat(n || Array.prototype.slice.call(t));
}
function f(e2, t, r, n, o) {
  for (var a = [], f2 = 5; f2 < arguments.length; f2++) a[f2 - 5] = arguments[f2];
  return i(this, void 0, void 0, (function() {
    var i2, f3, h2, y2, v2, b2;
    return u(this, (function(u2) {
      switch (u2.label) {
        case 0:
          u2.trys.push([0, 12, 13, 14]), i2 = c(a), f3 = i2.next(), u2.label = 1;
        case 1:
          if (f3.done) return [3, 11];
          switch (h2 = f3.value, typeof h2) {
            case "string":
              return [3, 2];
            case "number":
              return [3, 4];
            case "function":
              return [3, 6];
          }
          return [3, 8];
        case 2:
          return [4, d(e2, t, h2, r, n, o)];
        case 3:
          return u2.sent(), [3, 10];
        case 4:
          return [4, p(h2)];
        case 5:
          return u2.sent(), [3, 10];
        case 6:
          return [4, h2.apply(void 0, s([e2, t, r, n, o], l(a), false))];
        case 7:
          return u2.sent(), [3, 10];
        case 8:
          return [4, h2];
        case 9:
          u2.sent(), u2.label = 10;
        case 10:
          return f3 = i2.next(), [3, 1];
        case 11:
          return [3, 14];
        case 12:
          return y2 = u2.sent(), v2 = { error: y2 }, [3, 14];
        case 13:
          try {
            f3 && !f3.done && (b2 = i2.return) && b2.call(i2);
          } finally {
            if (v2) throw v2.error;
          }
          return [7];
        case 14:
          return [2];
      }
    }));
  }));
}
function d(e2, t, r, n, o, a) {
  return i(this, void 0, void 0, (function() {
    var i2, c2;
    return u(this, (function(u2) {
      switch (u2.label) {
        case 0:
          return i2 = e2.textContent || "", c2 = (function(e3, t2) {
            var r2 = l(t2).slice(0);
            return s(s([], l(e3), false), [NaN], false).findIndex((function(e4, t3) {
              return r2[t3] !== e4;
            }));
          })(i2, r), [4, h(e2, s(s([], l(v(i2, t, c2)), false), l(y(r, t, c2)), false), n, o, a)];
        case 1:
          return u2.sent(), [2];
      }
    }));
  }));
}
function p(e2) {
  return i(this, void 0, void 0, (function() {
    return u(this, (function(t) {
      switch (t.label) {
        case 0:
          return [4, new Promise((function(t2) {
            return setTimeout(t2, e2);
          }))];
        case 1:
          return t.sent(), [2];
      }
    }));
  }));
}
function h(e2, t, r, n, o) {
  return i(this, void 0, void 0, (function() {
    var a, i2, s2, f2, d2, h2, y2, v2, b2, m2, w, g, x;
    return u(this, (function(S) {
      switch (S.label) {
        case 0:
          if (a = t, o) {
            for (i2 = 0, s2 = 1; s2 < t.length; s2++) if (f2 = l([t[s2 - 1], t[s2]], 2), d2 = f2[0], (h2 = f2[1]).length > d2.length || "" === h2) {
              i2 = s2;
              break;
            }
            a = t.slice(i2, t.length);
          }
          S.label = 1;
        case 1:
          S.trys.push([1, 6, 7, 8]), y2 = c((function(e3) {
            var t2, r2, n2, o2, a2, i3, l2;
            return u(this, (function(s3) {
              switch (s3.label) {
                case 0:
                  t2 = function(e4) {
                    return u(this, (function(t3) {
                      switch (t3.label) {
                        case 0:
                          return [4, { op: function(t4) {
                            return requestAnimationFrame((function() {
                              return t4.textContent = e4;
                            }));
                          }, opCode: function(t4) {
                            var r3 = t4.textContent || "";
                            return "" === e4 || r3.length > e4.length ? "DELETE" : "WRITING";
                          } }];
                        case 1:
                          return t3.sent(), [2];
                      }
                    }));
                  }, s3.label = 1;
                case 1:
                  s3.trys.push([1, 6, 7, 8]), r2 = c(e3), n2 = r2.next(), s3.label = 2;
                case 2:
                  return n2.done ? [3, 5] : (o2 = n2.value, [5, t2(o2)]);
                case 3:
                  s3.sent(), s3.label = 4;
                case 4:
                  return n2 = r2.next(), [3, 2];
                case 5:
                  return [3, 8];
                case 6:
                  return a2 = s3.sent(), i3 = { error: a2 }, [3, 8];
                case 7:
                  try {
                    n2 && !n2.done && (l2 = r2.return) && l2.call(r2);
                  } finally {
                    if (i3) throw i3.error;
                  }
                  return [7];
                case 8:
                  return [2];
              }
            }));
          })(a)), v2 = y2.next(), S.label = 2;
        case 2:
          return v2.done ? [3, 5] : (b2 = v2.value, m2 = "WRITING" === b2.opCode(e2) ? r + r * (Math.random() - 0.5) : n + n * (Math.random() - 0.5), b2.op(e2), [4, p(m2)]);
        case 3:
          S.sent(), S.label = 4;
        case 4:
          return v2 = y2.next(), [3, 2];
        case 5:
          return [3, 8];
        case 6:
          return w = S.sent(), g = { error: w }, [3, 8];
        case 7:
          try {
            v2 && !v2.done && (x = y2.return) && x.call(y2);
          } finally {
            if (g) throw g.error;
          }
          return [7];
        case 8:
          return [2];
      }
    }));
  }));
}
function y(e2, t, r) {
  var n, o;
  return void 0 === r && (r = 0), u(this, (function(a) {
    switch (a.label) {
      case 0:
        n = t(e2), o = n.length, a.label = 1;
      case 1:
        return r < o ? [4, n.slice(0, ++r).join("")] : [3, 3];
      case 2:
        return a.sent(), [3, 1];
      case 3:
        return [2];
    }
  }));
}
function v(e2, t, r) {
  var n, o;
  return void 0 === r && (r = 0), u(this, (function(a) {
    switch (a.label) {
      case 0:
        n = t(e2), o = n.length, a.label = 1;
      case 1:
        return o > r ? [4, n.slice(0, --o).join("")] : [3, 3];
      case 2:
        return a.sent(), [3, 1];
      case 3:
        return [2];
    }
  }));
}
var b = "index-module_type__E-SaG";
!(function(e2, t) {
  void 0 === t && (t = {});
  var r = t.insertAt;
  if ("undefined" != typeof document) {
    var n = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
    o.type = "text/css", "top" === r && n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e2 : o.appendChild(document.createTextNode(e2));
  }
})(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");
var m = reactExports.memo(reactExports.forwardRef((function(o, a) {
  var i2 = o.sequence, u2 = o.repeat, c2 = o.className, d2 = o.speed, p2 = void 0 === d2 ? 40 : d2, h2 = o.deletionSpeed, y2 = o.omitDeletionAnimation, v2 = void 0 !== y2 && y2, m2 = o.preRenderFirstString, w = void 0 !== m2 && m2, g = o.wrapper, x = void 0 === g ? "span" : g, S = o.splitter, E = void 0 === S ? function(e2) {
    return s([], l(e2), false);
  } : S, _ = o.cursor, k = void 0 === _ || _, O = o.style, T = (function(e2, t) {
    var r = {};
    for (var n in e2) Object.prototype.hasOwnProperty.call(e2, n) && t.indexOf(n) < 0 && (r[n] = e2[n]);
    if (null != e2 && "function" == typeof Object.getOwnPropertySymbols) {
      var o2 = 0;
      for (n = Object.getOwnPropertySymbols(e2); o2 < n.length; o2++) t.indexOf(n[o2]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, n[o2]) && (r[n[o2]] = e2[n[o2]]);
    }
    return r;
  })(o, ["sequence", "repeat", "className", "speed", "deletionSpeed", "omitDeletionAnimation", "preRenderFirstString", "wrapper", "splitter", "cursor", "style"]), A = T["aria-label"], C = T["aria-hidden"], N = T.role;
  h2 || (h2 = p2);
  var P = new Array(2).fill(40);
  [p2, h2].forEach((function(e2, t) {
    switch (typeof e2) {
      case "number":
        P[t] = Math.abs(e2 - 100);
        break;
      case "object":
        var r = e2.type, n = e2.value;
        if ("number" != typeof n) break;
        if ("keyStrokeDelayInMs" === r) P[t] = n;
    }
  }));
  var j, I, G, D, M, R, q = P[0], F = P[1], B = (function(e2, r) {
    void 0 === r && (r = null);
    var o2 = reactExports.useRef(r);
    return reactExports.useEffect((function() {
      e2 && ("function" == typeof e2 ? e2(o2.current) : e2.current = o2.current);
    }), [e2]), o2;
  })(a), Q = b;
  j = c2 ? "".concat(k ? Q + " " : "").concat(c2) : k ? Q : "", I = reactExports.useRef((function() {
    var e2, t = i2;
    u2 === 1 / 0 ? e2 = f : "number" == typeof u2 && (t = Array(1 + u2).fill(i2).flat());
    var r = e2 ? s(s([], l(t), false), [e2], false) : s([], l(t), false);
    return f.apply(void 0, s([B.current, E, q, F, v2], l(r), false)), function() {
      B.current;
    };
  })), G = reactExports.useRef(), D = reactExports.useRef(false), M = reactExports.useRef(false), R = l(reactExports.useState(0), 2)[1], D.current && (M.current = true), reactExports.useEffect((function() {
    return D.current || (G.current = I.current(), D.current = true), R((function(e2) {
      return e2 + 1;
    })), function() {
      M.current && G.current && G.current();
    };
  }), []);
  var W = x, L = w ? i2.find((function(e2) {
    return "string" == typeof e2;
  })) || "" : null;
  return e.createElement(W, { "aria-hidden": C, "aria-label": A, role: N, style: O, className: j, children: A ? e.createElement("span", { "aria-hidden": "true", ref: B, children: L }) : L, ref: A ? void 0 : B });
})), (function(e2, t) {
  return true;
}));
export {
  m
};
