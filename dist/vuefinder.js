import { ref as L, watch as Re, inject as P, openBlock as _, createElementBlock as C, createElementVNode as f, unref as x, normalizeClass as ct, createTextVNode as et, toDisplayString as E, createCommentVNode as Z, withDirectives as vt, vShow as me, createVNode as Ct, TransitionGroup as Lo, withCtx as F, Fragment as lt, renderList as wt, reactive as Le, onMounted as Et, onUpdated as Oo, withModifiers as Wt, nextTick as Ve, isRef as as, vModelSelect as jr, createStaticVNode as Po, customRef as No, withKeys as oe, vModelText as ne, normalizeStyle as jo, provide as jt, computed as Ro, createBlock as q, resolveDynamicComponent as Vo, renderSlot as Je } from "vue";
import de from "plupload";
var is;
const Oe = (is = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : is.getAttribute("content"), Pe = (r, { method: t = "get", params: s = {}, json: o = !0, signal: l = null }) => {
  const i = { method: t };
  if (i.signal = l, t == "get")
    r += "?" + new URLSearchParams(s);
  else {
    i.headers = {}, Oe && (i.headers["X-CSRF-Token"] = Oe);
    let d = new FormData();
    for (const [g, a] of Object.entries(s))
      d.append(g, a);
    i.body = d;
  }
  return fetch(r, i).then((d) => d.ok ? o ? d.json() : d.text() : d.json().then(Promise.reject.bind(Promise)));
};
function Bo(r) {
  return { all: r = r || /* @__PURE__ */ new Map(), on: function(t, s) {
    var o = r.get(t);
    o ? o.push(s) : r.set(t, [s]);
  }, off: function(t, s) {
    var o = r.get(t);
    o && (s ? o.splice(o.indexOf(s) >>> 0, 1) : r.set(t, []));
  }, emit: function(t, s) {
    var o = r.get(t);
    o && o.slice().map(function(l) {
      l(s);
    }), (o = r.get("*")) && o.slice().map(function(l) {
      l(t, s);
    });
  } };
}
function Qe(r) {
  let t = localStorage.getItem(r + "_storage");
  const s = L(JSON.parse(t));
  Re(s, o);
  function o() {
    s.value === null || s.value === "" ? localStorage.removeItem(r + "_storage") : localStorage.setItem(r + "_storage", JSON.stringify(s.value));
  }
  function l(g, a) {
    s.value = Object.assign({ ...s.value }, { [g]: a });
  }
  function i() {
    s.value = null;
  }
  return { getStore: (g, a = null) => s.value === null || s.value === "" ? a : s.value.hasOwnProperty(g) ? s.value[g] : a, setStore: l, clearStore: i };
}
const Rr = L("");
function At() {
  function r(t) {
    Rr.value = t;
  }
  return { apiUrl: Rr, setApiUrl: r };
}
const zo = { class: "border-neutral-300 flex justify-between items-center py-1 text-sm" }, Ho = {
  key: 0,
  class: "flex text-center"
}, Uo = ["aria-label"], Ko = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ f("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
  })
], -1), Yo = [
  Ko
], Wo = ["aria-label"], Xo = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ f("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
  })
], -1), Zo = [
  Xo
], Fo = ["aria-label"], qo = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
}, null, -1), Go = [
  qo
], Jo = ["aria-label"], Qo = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
}, null, -1), tn = [
  Qo
], en = ["aria-label"], rn = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ f("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
  })
], -1), sn = [
  rn
], on = ["aria-label"], nn = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
}, null, -1), an = [
  nn
], ln = ["aria-label"], cn = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
}, null, -1), un = [
  cn
], dn = {
  key: 1,
  class: "flex text-center"
}, hn = { class: "pl-2" }, fn = { class: "dark:bg-gray-700 bg-gray-200 text-xs px-2 py-1 rounded" }, pn = {
  key: 0,
  class: "animate-spin p-0.5 h-5 w-5 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, gn = /* @__PURE__ */ f("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), mn = /* @__PURE__ */ f("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), vn = [
  gn,
  mn
], bn = { class: "flex text-center items-center justify-end" }, yn = ["aria-label"], Sn = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
}, null, -1), wn = [
  Sn
], _n = ["aria-label"], xn = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
}, kn = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
}, Dn = {
  name: "VFToolbar"
}, Cn = /* @__PURE__ */ Object.assign(Dn, {
  props: {
    data: Object
  },
  setup(r) {
    const t = P("emitter"), s = P("usePropDarkMode"), { getStore: o, setStore: l } = P("storage"), { t: i } = P("i18n"), d = L(o("viewport", "grid")), g = L([]);
    L(o("full-screen", !1));
    const a = L("");
    t.on("vf-search-query", ({ newQuery: b }) => {
      a.value = b;
    });
    const v = P("loadingState"), p = () => v.value;
    return t.on("vf-nodes-selected", (b) => {
      g.value = b;
    }), t.on("vf-view-toggle", (b) => {
      l("viewport", b), d.value = b;
    }), (b, S) => (_(), C("div", zo, [
      a.value.length ? (_(), C("div", dn, [
        f("div", hn, [
          et(E(x(i)("Search results for")) + " ", 1),
          f("span", fn, E(a.value), 1)
        ]),
        p() ? (_(), C("svg", pn, vn)) : Z("", !0)
      ])) : (_(), C("div", Ho, [
        f("div", {
          class: "mx-1.5",
          "aria-label": x(i)("New Folder"),
          "data-microtip-position": "bottom-right",
          role: "tooltip",
          onClick: S[0] || (S[0] = ($) => x(t).emit("vf-modal-show", { type: "new-folder", items: g.value }))
        }, Yo, 8, Uo),
        f("div", {
          class: "mx-1.5",
          "aria-label": x(i)("New File"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: S[1] || (S[1] = ($) => x(t).emit("vf-modal-show", { type: "new-file", items: g.value }))
        }, Zo, 8, Wo),
        f("div", {
          class: "mx-1.5",
          "aria-label": x(i)("Rename"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: S[2] || (S[2] = ($) => g.value.length != 1 || x(t).emit("vf-modal-show", { type: "rename", items: g.value }))
        }, [
          (_(), C("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ct([g.value.length == 1 ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Go, 2))
        ], 8, Fo),
        f("div", {
          class: "mx-1.5",
          "aria-label": x(i)("Delete"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: S[3] || (S[3] = ($) => !g.value.length || x(t).emit("vf-modal-show", { type: "delete", items: g.value }))
        }, [
          (_(), C("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ct([g.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, tn, 2))
        ], 8, Jo),
        f("div", {
          class: "mx-1.5",
          "aria-label": x(i)("Upload"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: S[4] || (S[4] = ($) => x(t).emit("vf-modal-show", { type: "upload", items: g.value }))
        }, sn, 8, en),
        g.value.length == 1 && g.value[0].mime_type == "application/zip" ? (_(), C("div", {
          key: 0,
          class: "mx-1.5",
          "aria-label": x(i)("Unarchive"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: S[5] || (S[5] = ($) => !g.value.length || x(t).emit("vf-modal-show", { type: "unarchive", items: g.value }))
        }, [
          (_(), C("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ct([g.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, an, 2))
        ], 8, on)) : (_(), C("div", {
          key: 1,
          class: "mx-1.5",
          "aria-label": x(i)("Archive"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: S[6] || (S[6] = ($) => !g.value.length || x(t).emit("vf-modal-show", { type: "archive", items: g.value }))
        }, [
          (_(), C("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ct([g.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, un, 2))
        ], 8, ln))
      ])),
      f("div", bn, [
        vt(f("div", {
          class: "mx-1.5",
          "aria-label": x(i)("Dark Mode"),
          "data-microtip-position": "bottom",
          role: "tooltip"
        }, [
          (_(), C("svg", {
            onClick: S[7] || (S[7] = ($) => x(t).emit("vf-darkMode-toggle")),
            viewBox: "0 0 24 24",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "h-6 w-6 m-auto cursor-pointer stroke-sky-500 fill-sky-100 hover:stroke-sky-600 dark:stroke-gray-400 dark:fill-gray-400/20 dark:hover:stroke-gray-300"
          }, wn))
        ], 8, yn), [
          [me, !x(s)]
        ]),
        f("div", {
          class: "mx-1.5",
          "aria-label": x(i)("Change View"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: S[8] || (S[8] = ($) => a.value.length || x(t).emit("vf-view-toggle", d.value == "list" ? "grid" : "list"))
        }, [
          (_(), C("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ct([a.value.length ? "stroke-gray-200  dark:stroke-gray-700" : "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, [
            d.value == "grid" ? (_(), C("path", xn)) : Z("", !0),
            d.value == "list" ? (_(), C("path", kn)) : Z("", !0)
          ], 2))
        ], 8, _n)
      ])
    ]));
  }
});
var En = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Mn(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ls = { exports: {} };
(function(r, t) {
  (function(s, o) {
    r.exports = o();
  })(En, function() {
    function s(c, u) {
      var e = c == null ? null : typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
      if (e != null) {
        var m, n, h, y, w = [], D = !0, z = !1;
        try {
          if (h = (e = e.call(c)).next, u === 0) {
            if (Object(e) !== e)
              return;
            D = !1;
          } else
            for (; !(D = (m = h.call(e)).done) && (w.push(m.value), w.length !== u); D = !0)
              ;
        } catch (W) {
          z = !0, n = W;
        } finally {
          try {
            if (!D && e.return != null && (y = e.return(), Object(y) !== y))
              return;
          } finally {
            if (z)
              throw n;
          }
        }
        return w;
      }
    }
    function o(c, u) {
      var e = Object.keys(c);
      if (Object.getOwnPropertySymbols) {
        var m = Object.getOwnPropertySymbols(c);
        u && (m = m.filter(function(n) {
          return Object.getOwnPropertyDescriptor(c, n).enumerable;
        })), e.push.apply(e, m);
      }
      return e;
    }
    function l(c) {
      for (var u = 1; u < arguments.length; u++) {
        var e = arguments[u] != null ? arguments[u] : {};
        u % 2 ? o(Object(e), !0).forEach(function(m) {
          a(c, m, e[m]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(e)) : o(Object(e)).forEach(function(m) {
          Object.defineProperty(c, m, Object.getOwnPropertyDescriptor(e, m));
        });
      }
      return c;
    }
    function i(c, u) {
      if (!(c instanceof u))
        throw new TypeError("Cannot call a class as a function");
    }
    function d(c, u) {
      for (var e = 0; e < u.length; e++) {
        var m = u[e];
        m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(c, R(m.key), m);
      }
    }
    function g(c, u, e) {
      return u && d(c.prototype, u), e && d(c, e), Object.defineProperty(c, "prototype", {
        writable: !1
      }), c;
    }
    function a(c, u, e) {
      return u = R(u), u in c ? Object.defineProperty(c, u, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : c[u] = e, c;
    }
    function v(c, u) {
      if (typeof u != "function" && u !== null)
        throw new TypeError("Super expression must either be null or a function");
      c.prototype = Object.create(u && u.prototype, {
        constructor: {
          value: c,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(c, "prototype", {
        writable: !1
      }), u && b(c, u);
    }
    function p(c) {
      return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      }, p(c);
    }
    function b(c, u) {
      return b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(m, n) {
        return m.__proto__ = n, m;
      }, b(c, u);
    }
    function S() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function $(c, u, e) {
      return S() ? $ = Reflect.construct.bind() : $ = function(n, h, y) {
        var w = [null];
        w.push.apply(w, h);
        var D = Function.bind.apply(n, w), z = new D();
        return y && b(z, y.prototype), z;
      }, $.apply(null, arguments);
    }
    function I(c) {
      return Function.toString.call(c).indexOf("[native code]") !== -1;
    }
    function T(c) {
      var u = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return T = function(m) {
        if (m === null || !I(m))
          return m;
        if (typeof m != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (typeof u < "u") {
          if (u.has(m))
            return u.get(m);
          u.set(m, n);
        }
        function n() {
          return $(m, arguments, p(this).constructor);
        }
        return n.prototype = Object.create(m.prototype, {
          constructor: {
            value: n,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), b(n, m);
      }, T(c);
    }
    function M(c) {
      if (c === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return c;
    }
    function B(c, u) {
      if (u && (typeof u == "object" || typeof u == "function"))
        return u;
      if (u !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return M(c);
    }
    function V(c) {
      var u = S();
      return function() {
        var m = p(c), n;
        if (u) {
          var h = p(this).constructor;
          n = Reflect.construct(m, arguments, h);
        } else
          n = m.apply(this, arguments);
        return B(this, n);
      };
    }
    function j(c, u) {
      for (; !Object.prototype.hasOwnProperty.call(c, u) && (c = p(c), c !== null); )
        ;
      return c;
    }
    function H() {
      return typeof Reflect < "u" && Reflect.get ? H = Reflect.get.bind() : H = function(u, e, m) {
        var n = j(u, e);
        if (n) {
          var h = Object.getOwnPropertyDescriptor(n, e);
          return h.get ? h.get.call(arguments.length < 3 ? u : m) : h.value;
        }
      }, H.apply(this, arguments);
    }
    function X(c, u) {
      return G(c) || s(c, u) || rt(c, u) || pt();
    }
    function k(c) {
      return N(c) || ot(c) || rt(c) || bt();
    }
    function N(c) {
      if (Array.isArray(c))
        return ut(c);
    }
    function G(c) {
      if (Array.isArray(c))
        return c;
    }
    function ot(c) {
      if (typeof Symbol < "u" && c[Symbol.iterator] != null || c["@@iterator"] != null)
        return Array.from(c);
    }
    function rt(c, u) {
      if (c) {
        if (typeof c == "string")
          return ut(c, u);
        var e = Object.prototype.toString.call(c).slice(8, -1);
        if (e === "Object" && c.constructor && (e = c.constructor.name), e === "Map" || e === "Set")
          return Array.from(c);
        if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
          return ut(c, u);
      }
    }
    function ut(c, u) {
      (u == null || u > c.length) && (u = c.length);
      for (var e = 0, m = new Array(u); e < u; e++)
        m[e] = c[e];
      return m;
    }
    function bt() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function pt() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function gt(c, u) {
      var e = typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
      if (!e) {
        if (Array.isArray(c) || (e = rt(c)) || u && c && typeof c.length == "number") {
          e && (c = e);
          var m = 0, n = function() {
          };
          return {
            s: n,
            n: function() {
              return m >= c.length ? {
                done: !0
              } : {
                done: !1,
                value: c[m++]
              };
            },
            e: function(D) {
              throw D;
            },
            f: n
          };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var h = !0, y = !1, w;
      return {
        s: function() {
          e = e.call(c);
        },
        n: function() {
          var D = e.next();
          return h = D.done, D;
        },
        e: function(D) {
          y = !0, w = D;
        },
        f: function() {
          try {
            !h && e.return != null && e.return();
          } finally {
            if (y)
              throw w;
          }
        }
      };
    }
    function A(c, u) {
      if (typeof c != "object" || c === null)
        return c;
      var e = c[Symbol.toPrimitive];
      if (e !== void 0) {
        var m = e.call(c, u || "default");
        if (typeof m != "object")
          return m;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (u === "string" ? String : Number)(c);
    }
    function R(c) {
      var u = A(c, "string");
      return typeof u == "symbol" ? u : String(u);
    }
    var O = function(u, e, m) {
      var n = u.x, h = u.y, y = m.x, w = m.y, D = {
        "+": {
          x: n + y,
          y: h + w
        },
        "-": {
          x: n - y,
          y: h - w
        },
        "*": {
          x: n * y,
          y: h * w
        },
        "/": {
          x: n / y,
          y: h / w
        }
      };
      return D[e];
    }, tt = function(u) {
      return {
        x: u.left,
        y: u.top
      };
    }, U = function(u) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return {
        left: u.x,
        top: u.y,
        right: u.x,
        bottom: u.y,
        width: e,
        height: e
      };
    }, _t = function(u) {
      return {
        x: u,
        y: u
      };
    }, yt = function(c, u) {
      var e = u;
      window.addEventListener("resize", e), window.addEventListener("scroll", e);
      var m = new MutationObserver(e);
      c.forEach(function(h, y) {
        m.observe(h, {
          childList: y !== 0,
          attributes: !0
        });
      });
      var n = function() {
        return fo(m, e);
      };
      return {
        observer: m,
        callback: e,
        cleanup: n
      };
    }, ke = function(c) {
      var u = Ee(c);
      return u.x || u.y ? !0 : c instanceof Document ? c.body ? !!(c.body.scrollTop = 1) : !!(c.documentElement.scrollTop = 1) : !!(c.scrollTop = 1);
    }, De = function() {
      var c = document.createElement("div");
      return c.style.position = "fixed", c.style.overflow = "hidden", c.style.pointerEvents = "none", c.style.zIndex = "999999999999999999", c;
    }, Ye = function(c) {
      var u = document.createElement("div");
      return u.style.position = "absolute", c || (u.style.background = "rgba(0, 175, 255, 0.2)", u.style.border = "1px solid rgba(0, 175, 255, 0.8)", u.style.display = "none", u.style.pointerEvents = "none"), u;
    }, Ce = function(c, u) {
      var e;
      return function() {
        for (var m = arguments.length, n = new Array(m), h = 0; h < m; h++)
          n[h] = arguments[h];
        var y = function() {
          e = null, c.apply(void 0, n);
        };
        clearTimeout(e), e = setTimeout(y, u);
      };
    }, We = function() {
      var c, u, e, m;
      return {
        y: ((c = document.body) === null || c === void 0 ? void 0 : c.scrollTop) || ((u = document.documentElement) === null || u === void 0 ? void 0 : u.scrollTop) || 0,
        x: ((e = document.body) === null || e === void 0 ? void 0 : e.scrollLeft) || ((m = document.documentElement) === null || m === void 0 ? void 0 : m.scrollLeft) || 0
      };
    }, Mr = function(c) {
      var u = function e(m) {
        var n, h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, y = (n = m[h]) === null || n === void 0 ? void 0 : n.parentNode;
        return y ? (m.push(y), h++, e(m, h)) : m;
      };
      return u([c]);
    }, eo = function(c, u) {
      if (c instanceof Document)
        return {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      var e = c.getBoundingClientRect();
      return {
        top: e.top,
        left: e.left,
        bottom: e.bottom,
        right: e.right,
        width: (c.clientWidth || e.width) * u,
        height: (c.clientHeight || e.height) * u
      };
    }, $r = function(c, u) {
      var e = {
        top: Number.POSITIVE_INFINITY,
        left: Number.POSITIVE_INFINITY,
        bottom: Number.NEGATIVE_INFINITY,
        right: Number.NEGATIVE_INFINITY,
        width: Number.NEGATIVE_INFINITY,
        height: Number.NEGATIVE_INFINITY
      };
      return Nt(c).forEach(function(m) {
        var n = u.getRect(m);
        e.top = Math.min(e.top, n.top), e.left = Math.min(e.left, n.left), e.bottom = Math.max(e.bottom, n.bottom), e.right = Math.max(e.right, n.right);
      }), e.height = e.bottom - e.top, e.width = e.right - e.left, e;
    }, Ee = function(c) {
      return !c || c instanceof Document ? We() : {
        x: c.scrollLeft >= 0 ? c.scrollLeft : We().x,
        y: c.scrollTop >= 0 ? c.scrollTop : We().y
      };
    }, Tr = function(c) {
      var u = c.elementRect, e = c.containerRect, m = c.tolerance, n = m === void 0 ? {
        x: 0,
        y: 0
      } : m, h = [];
      return u.top - n.y < e.top && h.push("top"), u.left - n.x < e.left && h.push("left"), u.bottom + n.y > e.bottom && h.push("bottom"), u.right + n.y > e.right && h.push("right"), /** @type {DSEdges} */
      h;
    }, ro = function(c) {
      var u = c.event;
      return {
        x: u.clientX,
        y: u.clientY
      };
    }, so = function(c) {
      var u = c.scrollAmount, e = c.initialPointerPos, m = c.pointerPos, n = {};
      return m.x > e.x - u.x ? (n.left = e.x - u.x, n.width = m.x - e.x + u.x) : (n.left = m.x, n.width = e.x - m.x - u.x), m.y > e.y - u.y ? (n.top = e.y - u.y, n.height = m.y - e.y + u.y) : (n.top = m.y, n.height = e.y - m.y - u.y), n;
    }, Ir = function(u) {
      var e = {
        x: 0,
        y: 0
      }, m = window.getComputedStyle(u);
      if (!m.transform || m.transform === "none")
        return e;
      if (m.transform.indexOf("3d") >= 0) {
        var n = m.transform.trim().match(/matrix3d\((.*?)\)/);
        if (n && n.length) {
          var h, y = (h = n[1]) === null || h === void 0 ? void 0 : h.split(",");
          e.x = parseInt(y[12]) || 0, e.y = parseInt(y[13]) || 0;
        }
        return e;
      }
      var w = m.transform.trim().match(/matrix\((.*?)\)/);
      if (w && w.length) {
        var D, z = (D = w[1]) === null || D === void 0 ? void 0 : D.split(",");
        e.x = parseInt(z[4]) || 0, e.y = parseInt(z[5]) || 0;
      }
      return e;
    }, oo = function(u) {
      var e = u.style.transform;
      if (!e || e.indexOf("translate") < 0)
        return Ir(u);
      var m = {
        x: 0,
        y: 0
      }, n = e.trim().match(/translate[3dD]*?\(.*?\)/);
      if (n) {
        var h, y = (h = n[0]) === null || h === void 0 ? void 0 : h.split("(");
        if (y) {
          var w, D = (w = y[1]) === null || w === void 0 ? void 0 : w.split(",");
          m.x = parseInt(D[0]) || 0, m.y = parseInt(D[1]) || 0;
        }
      }
      return !m.x && !m.x ? Ir(u) : m;
    }, no = function(u) {
      var e = u.style, m = {
        x: parseInt(e.left) || 0,
        y: parseInt(e.top) || 0
      };
      if (!m.x && !m.x) {
        var n = window.getComputedStyle(u);
        return {
          x: parseInt(n.left) || 0,
          y: parseInt(n.top) || 0
        };
      }
      return m;
    }, io = function(c, u) {
      return u ? oo(c) : no(c);
    }, ao = function(c) {
      var u = c.element, e = c.edges, m = c.elementRect, n = c.containerRect, h = c.elementPos, y = c.useTransform;
      e.includes("top") && le(u, {
        y: h.y + n.top - m.top,
        x: h.x
      }, y), e.includes("left") && le(u, {
        y: h.y,
        x: h.x + n.left - m.left
      }, y), e.includes("bottom") && le(u, {
        y: h.y + n.bottom - m.bottom,
        x: h.x
      }, y), e.includes("right") && le(u, {
        y: h.y,
        x: h.x + n.right - m.right
      }, y);
    }, Ar = function(c) {
      var u = c.computedStyle, e = c.node, m = u.position, n = m === "absolute" || m === "relative" || m === "fixed";
      !(e instanceof Document) && !n && (e.style.position = "relative");
    }, lo = function(c) {
      var u = c.shiftKey, e = c.keyboardDragSpeed, m = c.zoom, n = c.key, h = c.dragKeys, y = c.scrollDiff, w = c.canScroll, D = c.scrollCallback, z = {
        x: 0,
        y: 0
      }, W = u ? e * 4 * m : e * m;
      return h.left.includes(n) && (z.x = y.x || -W, !u && !y.x && w && D(["left"], e)), h.right.includes(n) && (z.x = y.x || W, !u && !y.x && w && D(["right"], e)), h.up.includes(n) && (z.y = y.y || -W, !u && !y.y && w && D(["top"], e)), h.down.includes(n) && (z.y = y.y || W, !u && !y.y && w && D(["bottom"], e)), z;
    }, co = function(c) {
      var u = c.element, e = c.force, m = c.multiSelectionToggle, n = c.SelectedSet, h = c.hoverClassName;
      u.classList.contains(h) && !e || (n.has(u) ? m && n.delete(u) : n.add(u), u.classList.add(h));
    }, uo = function(c) {
      var u = c.element, e = c.force, m = c.SelectedSet, n = c.PrevSelectedSet, h = c.hoverClassName;
      if (!u.classList.contains(h) && !e)
        return !1;
      var y = m.has(u), w = n.has(u);
      y && !w ? m.delete(u) : !y && w && m.add(u), u.classList.remove(h);
    }, ae = function(u, e, m) {
      return console.warn('[DragSelect] TypeIssue: setting "'.concat(u, '" is not of type "').concat(e, '".'));
    }, Y = function(u, e, m, n) {
      if (e === void 0)
        return m ? a({}, u, n) : {};
      if (e === null)
        return a({}, u, null);
      var h = !0, y = !1, w = typeof n == "string";
      w && (h = typeof e == "string" || e instanceof String), w && !h && (y = !0, ae(u, "string"));
      var D = !Number.isNaN(n) && typeof n == "number";
      D && (h = !Number.isNaN(e) && typeof e == "number"), D && !h && (y = !0, ae(u, "number"));
      var z = Object.prototype.toString.call(n) === "[object Object]";
      z && (h = Object.prototype.toString.call(e) === "[object Object]"), z && !h && (y = !0, ae(u, "object"));
      var W = typeof n == "boolean";
      W && (h = typeof e == "boolean"), W && !h && (y = !0, ae(u, "boolean"));
      var it = Array.isArray(n);
      it && (h = Array.isArray(e)), it && !h && (y = !0, ae(u, "array"));
      var xt = y || m;
      return u === "dragKeys" && h ? a({}, u, Object.assign(n, e)) : u === "dragKeys" && !h ? xt ? a({}, u, n) : {} : (u === "dropZones" && h && new Set(e.map(function(kt) {
        return kt.id;
      })).size !== e.length && console.warn('[DragSelect] UniqueConstraintsIssue: setting "dropZones" contains duplicate ids.'), h ? a({}, u, e) : xt ? a({}, u, n) : {});
    }, ho = function(c, u) {
      return l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l({}, Y("area", c.area, u, document)), Y("selectables", c.selectables, u, null)), Y("autoScrollSpeed", c.autoScrollSpeed, u, 5)), Y("overflowTolerance", c.overflowTolerance, u, {
        x: 25,
        y: 25
      })), Y("zoom", c.zoom, u, 1)), Y("customStyles", c.customStyles, u, !1)), Y("multiSelectMode", c.multiSelectMode, u, !1)), Y("multiSelectToggling", c.multiSelectToggling, u, !0)), Y("multiSelectKeys", c.multiSelectKeys, u, ["Control", "Shift", "Meta"])), Y("selector", c.selector, u, null)), Y("selectionThreshold", c.selectionThreshold, u, 0)), Y("draggability", c.draggability, u, !0)), Y("immediateDrag", c.immediateDrag, u, !0)), Y("keyboardDrag", c.keyboardDrag, u, !0)), Y("dragKeys", c.dragKeys, u, {
        up: ["ArrowUp"],
        down: ["ArrowDown"],
        left: ["ArrowLeft"],
        right: ["ArrowRight"]
      })), Y("keyboardDragSpeed", c.keyboardDragSpeed, u, 10)), Y("useTransform", c.useTransform, u, !0)), Y("refreshMemoryRate", c.refreshMemoryRate, u, 80)), Y("dropZones", c.dropZones, u, [])), Y("dropInsideThreshold", c.dropInsideThreshold, u, 1)), Y("dropTargetThreshold", c.dropTargetThreshold, u, 0)), Y("usePointerEvents", c.usePointerEvents, u, !1)), Y("hoverClass", c.hoverClass, u, "ds-hover")), Y("selectableClass", c.selectableClass, u, "ds-selectable")), Y("selectedClass", c.selectedClass, u, "ds-selected")), Y("selectorClass", c.selectorClass, u, "ds-selector")), Y("selectorAreaClass", c.selectorAreaClass, u, "ds-selector-area")), Y("droppedTargetClass", c.droppedTargetClass, u, "ds-dropped-target")), Y("droppedInsideClass", c.droppedInsideClass, u, "ds-dropped-inside")), Y("droppableClass", c.droppableClass, u, "ds-droppable")), Y("dropZoneClass", c.dropZoneClass, u, "ds-dropzone")), Y("dropZoneReadyClass", c.dropZoneReadyClass, u, "ds-dropzone-ready")), Y("dropZoneTargetClass", c.dropZoneTargetClass, u, "ds-dropzone-target")), Y("dropZoneInsideClass", c.dropZoneInsideClass, u, "ds-dropzone-inside")), Y("dragAsBlock", c.dragAsBlock, u, !1));
    }, Gt = function(c, u) {
      var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, m = c;
      if (e > 0) {
        var n = (c.right - c.left) * e, h = (c.bottom - c.top) * e;
        m = {
          left: c.left + n,
          right: c.right - n,
          top: c.top + h,
          bottom: c.bottom - h
        };
      }
      return m.left < u.right && // 1.
      m.right > u.left && // 2.
      m.top < u.bottom && // 3.
      m.bottom > u.top;
    }, Lr = function(c) {
      var u = c.element, e = c.posDirection, m = c.containerRect, n = c.useTransform, h = io(u, n), y = O(h, "+", e);
      le(u, y, n);
      var w = u.getBoundingClientRect(), D = Tr({
        elementRect: w,
        containerRect: m
      });
      ao({
        element: u,
        edges: D,
        elementRect: w,
        containerRect: m,
        elementPos: y,
        useTransform: n
      });
    }, fo = function(c, u) {
      window.removeEventListener("resize", u), window.removeEventListener("scroll", u), c.disconnect();
    }, po = function(c, u, e) {
      if (u.length) {
        var m = document && document.documentElement && document.documentElement.scrollTop && document.documentElement, n = c instanceof Document ? m || document.body : c, h = u.includes("top") && n.scrollTop > 0, y = u.includes("bottom") && n.scrollTop < n.scrollHeight, w = u.includes("left") && n.scrollLeft > 0, D = u.includes("right") && n.scrollLeft < n.scrollWidth;
        h && (n.scrollTop -= 1 * e), y && (n.scrollTop += 1 * e), w && (n.scrollLeft -= 1 * e), D && (n.scrollLeft += 1 * e);
      }
    }, le = function(c, u, e) {
      if (e) {
        var m = c.style.transform;
        c.style.transform = "translate3d(".concat(u.x, "px,").concat(u.y, "px,1px) ").concat(m.replace(/translate.*?\)/g, ""));
      } else
        c.style.left = "".concat(u.x, "px"), c.style.top = "".concat(u.y, "px");
      return c;
    }, go = function(c) {
      for (var u = c.subscribe, e = c.publish, m = c.Interaction, n = c.SelectedSet, h = c.DropZones, y = {
        "Selected:added": [{
          name: "elementselect"
        }],
        "Selected:removed": [{
          name: "elementunselect"
        }],
        "Area:scroll": [{
          name: "autoscroll"
        }],
        // scroll_directions, scroll_multiplier
        "Interaction:start": [{
          name: "dragstart"
        }],
        // event, isDraggingKeyboard
        "Interaction:update": [
          // event, isDraggingKeyboard
          {
            name: "dragmove",
            condition: function(it) {
              return it.event;
            }
          }
        ],
        "Interaction:end": [
          // event, isDraggingKeyboard
          {
            name: "callback",
            extraData: function() {
              var it = h.getTarget();
              return l({}, it ? {
                dropTarget: it.toObject()
              } : {});
            }
          }
        ]
      }, w = function() {
        var it = X(z[D], 2), xt = it[0], kt = it[1];
        ["pre", !1].forEach(function(Mt) {
          return u(Mt ? "".concat(xt, ":").concat(Mt) : xt, function(nt) {
            return kt.forEach(function(mt) {
              return (!mt.condition || mt.condition(nt)) && e(Mt ? "".concat(Mt).concat(mt.name) : mt.name, l(l({
                items: n.elements,
                isDragging: m.isDragging
              }, nt), mt.extraData ? mt.extraData(nt) : {}));
            });
          });
        });
      }, D = 0, z = Object.entries(y); D < z.length; D++)
        w();
    }, Nt = function(c) {
      return c ? !Array.isArray(c) && (c instanceof HTMLElement || c instanceof SVGElement) ? [c] : k(new Set(k(c))) : [];
    }, Or = function(c, u) {
      c.style.left = "".concat(u.left, "px"), c.style.top = "".concat(u.top, "px"), c.style.width = "".concat(u.width, "px"), c.style.height = "".concat(u.height, "px");
    }, mo = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, m = u.DS;
        i(this, c), a(this, "DS", void 0), a(this, "_observers", void 0), a(this, "_node", void 0), a(this, "_parentNodes", void 0), a(this, "_computedStyle", void 0), a(this, "_computedBorder", void 0), a(this, "_rect", void 0), a(this, "setArea", function(n) {
          e.reset(), e._node = n, Ar({
            computedStyle: e.computedStyle,
            node: e._node
          }), setTimeout(function() {
            e.DS.PubSub.publish("Area:modified:pre", {
              item: e
            }), e.reset(), e.DS.PubSub.publish("Area:modified", {
              item: e
            });
          });
        }), a(this, "start", function() {
          e._observers = yt(e.parentNodes, Ce(function(n) {
            e.DS.PubSub.publish("Area:modified:pre", {
              event: n,
              item: e
            }), e.reset(), e.DS.PubSub.publish("Area:modified", {
              event: n,
              item: e
            });
          }, 60));
        }), a(this, "reset", function() {
          e._computedStyle = void 0, e._rect = void 0, e._computedBorder = void 0, e._parentNodes = void 0;
        }), a(this, "stop", function() {
          e._observers.cleanup(), e.reset();
        }), a(this, "scroll", function(n, h) {
          var y = {
            scroll_directions: n,
            scroll_multiplier: h
          };
          e.DS.PubSub.publish("Area:scroll:pre", y), po(e._node, n, h), e.DS.PubSub.publish("Area:scroll", y);
        }), this.DS = m, this.setArea(this.DS.stores.SettingsStore.s.area), this.DS.PubSub.subscribe("Settings:updated:area", function(n) {
          var h = n.settings;
          e.setArea(h.area);
        }), this.DS.PubSub.subscribe("Interaction:init", this.start), this.DS.PubSub.subscribe("Interaction:end", this.reset);
      }
      return g(c, [{
        key: "HTMLNode",
        get: (
          /// ///////////////////////////////////////////////////////////////////////////////////
          // Node Getters
          function() {
            return (
              /** @type {DSArea} */
              this._node
            );
          }
        )
        /**
         * The computed border from the element (caches result)
         * @type {{top:number,bottom:number,left:number,right:number}}
         */
      }, {
        key: "computedBorder",
        get: function() {
          return this._computedBorder ? this._computedBorder : {
            top: parseInt(this.computedStyle.borderTopWidth),
            bottom: parseInt(this.computedStyle.borderBottomWidth),
            left: parseInt(this.computedStyle.borderLeftWidth),
            right: parseInt(this.computedStyle.borderRightWidth)
          };
        }
        /**
         * The computed styles from the element (caches result)
         * @type {CSSStyleDeclaration}
         */
      }, {
        key: "computedStyle",
        get: function() {
          return this._computedStyle ? this._computedStyle : this.HTMLNode instanceof Document ? this._computedStyle = window.getComputedStyle(this.HTMLNode.body || this.HTMLNode.documentElement) : this._computedStyle = window.getComputedStyle(this.HTMLNode);
        }
        /**
         * The element rect (caches result) (without scrollbar or borders)
         * @type {DSBoundingRect}
         */
      }, {
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = eo(this.HTMLNode, this.DS.stores.SettingsStore.s.zoom);
        }
      }, {
        key: "parentNodes",
        get: function() {
          return this._parentNodes ? this._parentNodes : this._parentNodes = Mr(this.HTMLNode);
        }
      }]), c;
    }(), vo = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, m = u.DS;
        i(this, c), a(this, "_prevCursorPos", void 0), a(this, "_prevScrollPos", void 0), a(this, "_elements", []), a(this, "_dragKeys", void 0), a(this, "_dragKeysFlat", []), a(this, "_selectionRect", void 0), a(this, "assignDragkeys", function() {
          e._dragKeys = {
            up: e.DS.stores.SettingsStore.s.dragKeys.up.map(function(n) {
              return n.toLowerCase();
            }),
            down: e.DS.stores.SettingsStore.s.dragKeys.down.map(function(n) {
              return n.toLowerCase();
            }),
            left: e.DS.stores.SettingsStore.s.dragKeys.left.map(function(n) {
              return n.toLowerCase();
            }),
            right: e.DS.stores.SettingsStore.s.dragKeys.right.map(function(n) {
              return n.toLowerCase();
            })
          }, e._dragKeysFlat = [].concat(k(e._dragKeys.up), k(e._dragKeys.down), k(e._dragKeys.left), k(e._dragKeys.right));
        }), a(this, "keyboardDrag", function(n) {
          var h = n.event, y = n.key, w = y.toLowerCase();
          if (!(!e.DS.stores.SettingsStore.s.keyboardDrag || !e._dragKeysFlat.includes(w) || !e.DS.SelectedSet.size || !e.DS.stores.SettingsStore.s.draggability || e.DS.continue)) {
            var D = {
              event: h,
              isDragging: !0,
              isDraggingKeyboard: !0
            };
            e.DS.publish(["Interaction:start:pre", "Interaction:start"], D), e._elements = e.DS.getSelection(), e.DS.stores.SettingsStore.s.dragAsBlock && (e._selectionRect = $r(e._elements, e.DS.SelectableSet)), e.handleZIndex(!0);
            var z = lo({
              shiftKey: e.DS.stores.KeyStore.currentValues.includes("shift"),
              keyboardDragSpeed: e.DS.stores.SettingsStore.s.keyboardDragSpeed,
              zoom: e.DS.stores.SettingsStore.s.zoom,
              key: w,
              scrollCallback: e.DS.Area.scroll,
              scrollDiff: e._scrollDiff,
              canScroll: e.DS.stores.ScrollStore.canScroll,
              dragKeys: e._dragKeys
            });
            e.DS.stores.SettingsStore.s.dragAsBlock && (z = e.limitDirection(z)), e._elements.forEach(function(W) {
              return Lr({
                element: W,
                posDirection: z,
                containerRect: e.DS.SelectorArea.rect,
                useTransform: e.DS.stores.SettingsStore.s.useTransform
              });
            }), e.DS.publish(["Interaction:update:pre", "Interaction:update"], D);
          }
        }), a(this, "keyboardEnd", function(n) {
          var h = n.event, y = n.key, w = y.toLowerCase();
          if (!(!e.DS.stores.SettingsStore.s.keyboardDrag || !e._dragKeysFlat.includes(w) || !e.DS.SelectedSet.size || !e.DS.stores.SettingsStore.s.draggability)) {
            var D = {
              event: h,
              isDragging: e.DS.stores.SettingsStore.s.draggability,
              isDraggingKeyboard: !0
            };
            e.DS.publish(["Interaction:end:pre", "Interaction:end"], D);
          }
        }), a(this, "start", function(n) {
          var h = n.isDragging, y = n.isDraggingKeyboard;
          !h || y || (e._prevCursorPos = null, e._prevScrollPos = null, e._elements = e.DS.getSelection(), e.DS.stores.SettingsStore.s.dragAsBlock && (e._selectionRect = $r(e._elements, e.DS.SelectableSet)), e.handleZIndex(!0));
        }), a(this, "stop", function(n) {
          n != null && n.isKeyboard || (e._prevCursorPos = null, e._prevScrollPos = null, e.handleZIndex(!1), e._elements = []);
        }), a(this, "update", function(n) {
          var h = n.isDragging, y = n.isDraggingKeyboard;
          if (!(!h || !e._elements.length || y || e.DS.continue)) {
            var w = O(e._cursorDiff, "+", e._scrollDiff);
            e.DS.stores.SettingsStore.s.dragAsBlock && (w = e.limitDirection(w)), e._elements.forEach(function(D) {
              return Lr({
                element: D,
                posDirection: w,
                containerRect: e.DS.SelectorArea.rect,
                useTransform: e.DS.stores.SettingsStore.s.useTransform
              });
            });
          }
        }), a(this, "limitDirection", function(n) {
          var h = e.DS.SelectorArea.rect, y = e.DS.stores.ScrollStore.scrollAmount, w = {
            top: h.top - e._selectionRect.top + y.y,
            left: h.left - e._selectionRect.left + y.x,
            bottom: h.bottom - e._selectionRect.bottom + y.y,
            right: h.right - e._selectionRect.right + y.x
          };
          return n.x === 0 && n.y === 0 || (n.y < 0 && (n.y = Math.max(n.y, w.top)), n.x < 0 && (n.x = Math.max(n.x, w.left)), n.y > 0 && (n.y = Math.min(n.y, w.bottom)), n.x > 0 && (n.x = Math.min(n.x, w.right)), e._selectionRect.top += n.y, e._selectionRect.bottom += n.y, e._selectionRect.left += n.x, e._selectionRect.right += n.x), n;
        }), a(this, "handleZIndex", function(n) {
          e._elements.forEach(function(h) {
            return h.style.zIndex = "".concat((parseInt(h.style.zIndex) || 0) + n ? 9999 : -9998);
          });
        }), this.DS = m, this.DS.subscribe("Settings:updated:dragKeys", this.assignDragkeys), this.assignDragkeys(), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:end", this.stop), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("KeyStore:down", this.keyboardDrag), this.DS.subscribe("KeyStore:up", this.keyboardEnd);
      }
      return g(c, [{
        key: "_cursorDiff",
        get: function() {
          var e = this.DS.stores.PointerStore.currentVal, m = this._prevCursorPos ? O(e, "-", this._prevCursorPos) : {
            x: 0,
            y: 0
          };
          return this._prevCursorPos = e, m;
        }
      }, {
        key: "_scrollDiff",
        get: function() {
          var e = this.DS.stores.ScrollStore.currentVal, m = this._prevScrollPos ? O(e, "-", this._prevScrollPos) : {
            x: 0,
            y: 0
          };
          return this._prevScrollPos = e, m;
        }
      }]), c;
    }(), bo = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, m = u.DS, n = u.id, h = u.element, y = u.droppables;
        i(this, c), a(this, "id", void 0), a(this, "element", void 0), a(this, "_droppables", void 0), a(this, "_rect", void 0), a(this, "_observers", void 0), a(this, "_timeout", void 0), a(this, "_itemsDropped", []), a(this, "_itemsInside", void 0), a(this, "setReadyClasses", function(w) {
          if (!e.isDestroyed) {
            var D = e.droppables.filter(function(z) {
              return e.DS.SelectedSet.has(z);
            });
            D.length && (D.forEach(function(z) {
              z.classList[w]("".concat(e.Settings.droppableClass)), z.classList[w]("".concat(e.Settings.droppableClass, "-").concat(e.id));
            }), e.element.classList[w]("".concat(e.Settings.dropZoneReadyClass)));
          }
        }), a(this, "handleNoDrop", function() {
          var w;
          e.isDestroyed || (e.DS.SelectedSet.forEach(function(D) {
            D.classList.remove(e.Settings.droppedTargetClass), D.classList.remove("".concat(e.Settings.droppedTargetClass, "-").concat(e.id));
          }), e._itemsDropped = e._itemsDropped.filter(function(D) {
            return !e.DS.SelectedSet.has(D);
          }), (w = e._itemsDropped) !== null && w !== void 0 && w.length || e.element.classList.remove("".concat(e.Settings.dropZoneTargetClass)));
        }), a(this, "handleDrop", function() {
          var w, D, z;
          e.isDestroyed || (e._itemsDropped = k(new Set([].concat(k(e._itemsDropped), k((w = e.droppables) === null || w === void 0 ? void 0 : w.filter(function(W) {
            return e.DS.SelectedSet.has(W);
          }))))), (D = e._itemsDropped) === null || D === void 0 || D.forEach(function(W) {
            W.classList.add("".concat(e.Settings.droppedTargetClass)), W.classList.add("".concat(e.Settings.droppedTargetClass, "-").concat(e.id));
          }), (z = e._itemsDropped) !== null && z !== void 0 && z.length && e.element.classList.add("".concat(e.Settings.dropZoneTargetClass)));
        }), a(this, "handleItemsInsideClasses", function() {
          var w = !1;
          e.droppables.forEach(function(D) {
            e.itemsInside.includes(D) ? (D.classList.add("".concat(e.Settings.droppedInsideClass)), D.classList.add("".concat(e.Settings.droppedInsideClass, "-").concat(e.id)), w = !0) : (D.classList.remove("".concat(e.Settings.droppedInsideClass, "-").concat(e.id)), D.className.includes("".concat(e.Settings.droppedInsideClass, "-")) || D.classList.remove("".concat(e.Settings.droppedInsideClass)));
          }), w ? e.element.classList.add("".concat(e.Settings.dropZoneInsideClass)) : e.element.classList.remove("".concat(e.Settings.dropZoneInsideClass));
        }), a(this, "start", function(w) {
          var D = w.isDragging;
          !D || e.isDestroyed || e.setReadyClasses("add");
        }), a(this, "stop", function(w) {
          var D = w.isDragging;
          !D || e.isDestroyed || (e.setReadyClasses("remove"), e.handleItemsInsideClasses());
        }), a(this, "toObject", function() {
          return {
            id: e.id,
            element: e.element,
            droppables: e.droppables,
            itemsDropped: e.itemsDropped,
            itemsInside: e.itemsInside
          };
        }), this.DS = m, this.Settings = m.stores.SettingsStore.s, this.id = n, this.element = h, y && (this.droppables = Nt(y)), this.element.classList.add("".concat(this.Settings.dropZoneClass)), this.DS.subscribe("Settings:updated:dropZoneClass", function(w) {
          var D = w.settings;
          e.element && (e.element.classList.remove(D["dropZoneClass:pre"]), e.element.classList.add(D.dropZoneClass));
        }), this._observers = yt(this.parentNodes, Ce(function() {
          return e._rect = null;
        }, this.Settings.refreshMemoryRate)), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:end", this.stop);
      }
      return g(c, [{
        key: "destroy",
        value: function() {
          var e = this;
          this._observers.cleanup(), this.element.classList.remove("".concat(this.Settings.dropZoneClass)), this.element.classList.remove("".concat(this.Settings.dropZoneTargetClass)), this.element.classList.remove("".concat(this.Settings.dropZoneReadyClass)), this.droppables.forEach(function(m) {
            m.classList.remove("".concat(e.Settings.droppedTargetClass)), m.classList.remove("".concat(e.Settings.droppedTargetClass, "-").concat(e.id)), m.classList.remove("".concat(e.Settings.droppableClass)), m.classList.remove("".concat(e.Settings.droppableClass, "-").concat(e.id));
          }), this.DS.unsubscribe("Interaction:start", this.start), this.DS.unsubscribe("Interaction:end", this.stop), this.element = null, this.droppables = null, this.id = null, this._itemsDropped = null, this._itemsInside = null, this.isDestroyed = !0;
        }
        /**
         * @returns {DSDropZone}
         */
      }, {
        key: "rect",
        get: function() {
          return this.isDestroyed ? null : this._rect ? this._rect : this._rect = this.element.getBoundingClientRect();
        }
      }, {
        key: "itemsDropped",
        get: function() {
          return this.isDestroyed ? null : this._itemsDropped;
        }
      }, {
        key: "itemsInside",
        get: function() {
          var e = this;
          return this.isDestroyed ? null : this._itemsInside ? this._itemsInside : (this._itemsInside = this.droppables.flatMap(function(m) {
            return Gt(e.DS.SelectableSet.rects.get(m), e.rect, e.Settings.dropInsideThreshold) ? [m] : [];
          }), this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(function() {
            return e._itemsInside = null;
          }, this.Settings.refreshMemoryRate), this._itemsInside);
        }
      }, {
        key: "parentNodes",
        get: function() {
          return this._parentNodes ? this._parentNodes : this._parentNodes = Mr(this.element);
        }
      }, {
        key: "droppables",
        get: function() {
          return this._droppables ? this._droppables : this.DS.SelectableSet.elements;
        },
        set: function(e) {
          this._droppables = e;
        }
      }]), c;
    }(), yo = /* @__PURE__ */ g(
      /**
       * Get the drop zone by the zone element
       * @type {Map<DSElement, DropZone>}
       * @private
       */
      /**
       * Get the drop zone by the zone id
       * @type {Map<string, DropZone>}
       * @private
       */
      /**
       * Get the drop zones by one zone item
       * @type {Map<DSElement,DropZone[]>}
       * @private
       */
      /**
       * Get the drop zones by one zone item
       * @type {DropZone[]}
       * @private
       */
      /**
       * @constructor Drag
       * @param {{DS:DragSelect}} obj
       * @ignore
       */
      function c(u) {
        var e = this, m = u.DS;
        i(this, c), a(this, "_zoneByElement", /* @__PURE__ */ new Map()), a(this, "_zoneById", /* @__PURE__ */ new Map()), a(this, "_zonesByDroppable", /* @__PURE__ */ new Map()), a(this, "_zones", void 0), a(this, "setDropZones", function(n) {
          var h = n.dropZones;
          h && (e._zones && e._zones.forEach(function(y) {
            return y.destroy();
          }), e._zones = h.map(function(y) {
            return new bo(l({
              DS: e.DS
            }, y));
          }), e._zones.forEach(function(y) {
            e._zoneByElement.set(y.element, y), e._zoneById.set(y.id, y), y.droppables.forEach(function(w) {
              var D = e._zonesByDroppable.get(w);
              if (!(D != null && D.length))
                return e._zonesByDroppable.set(w, [y]);
              e._zonesByDroppable.set(w, k(new Set([].concat(k(D), [y]))));
            });
          }));
        }), a(this, "_handleDrop", function(n) {
          e._zones.forEach(function(h) {
            h !== n && h.handleNoDrop();
          }), n && n.handleDrop();
        }), a(this, "_getZoneByElementsFromPoint", function(n, h) {
          for (var y = h.x, w = h.y, D = 0, z = n.length; D < z; D++) {
            var W = e._zoneByElement.get(n[D]);
            if (W && Gt(W.rect, {
              left: y,
              right: y,
              top: w,
              bottom: w
            }, Math.min(e.Settings.dropTargetThreshold, 0.5)))
              return W;
          }
        }), a(this, "stop", function(n) {
          var h = n.isDragging;
          if (h) {
            var y = e.getTarget();
            e._handleDrop(y);
          }
        }), a(this, "getItemsDroppedById", function(n) {
          var h = e._zoneById.get(n);
          return h ? h.itemsDropped : console.warn("[DragSelect] No zone found (id: ".concat(n, ")"));
        }), a(this, "getItemsInsideById", function(n, h) {
          var y = e._zoneById.get(n);
          if (!y)
            return console.warn("[DragSelect] No zone found (id: ".concat(n, ")"));
          var w = y.itemsInside;
          return h && y.handleItemsInsideClasses(), w;
        }), a(this, "getTarget", function(n) {
          var h;
          if ((h = e._zones) !== null && h !== void 0 && h.length) {
            var y = (n == null ? void 0 : n.x) || e.DS.stores.PointerStore.currentVal.x, w = (n == null ? void 0 : n.y) || e.DS.stores.PointerStore.currentVal.y, D = document.elementsFromPoint(y, w);
            return e._getZoneByElementsFromPoint(
              /** @type {DSElements} */
              D,
              {
                x: y,
                y: w
              }
            );
          }
        }), this.DS = m, this.Settings = m.stores.SettingsStore.s, this.DS.subscribe("Settings:updated:dropZones", function(n) {
          var h = n.settings;
          return e.setDropZones(h);
        }), this.setDropZones({
          dropZones: (
            /** @type {DSDropZone[]} */
            this.DS.stores.SettingsStore.s.dropZones
          )
        }), this.DS.subscribe("Interaction:end", this.stop);
      }
      /**
       * @param {Object} obj
       * @param {DSDropZone[]} [obj.dropZones]
       */
    ), So = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, m = u.DS;
        i(this, c), a(this, "isInteracting", void 0), a(this, "isDragging", void 0), a(this, "init", function() {
          return e.DS.publish("Interaction:init:pre", {});
        }), a(this, "_init", function() {
          e.stop(), e.Settings.usePointerEvents ? e.DS.Area.HTMLNode.addEventListener("pointerdown", e.start, {
            passive: !1
          }) : e.DS.Area.HTMLNode.addEventListener("mousedown", e.start), e.DS.Area.HTMLNode.addEventListener("touchstart", e.start, {
            passive: !1
          }), e.DS.publish("Interaction:init", {});
        }), a(this, "start", function(n) {
          return e.DS.publish("Interaction:start:pre", {
            event: n,
            isDragging: e.isDragging
          });
        }), a(this, "_start", function(n) {
          n.type === "touchstart" && n.preventDefault(), e._canInteract(n) && (e.isInteracting = !0, e.isDragging = e.isDragEvent(n), e.DS.publish("Interaction:start", {
            event: n,
            isDragging: e.isDragging
          }), e.Settings.usePointerEvents ? (document.addEventListener("pointerup", e.reset), document.addEventListener("pointercancel", e.reset)) : document.addEventListener("mouseup", e.reset), document.addEventListener("touchend", e.reset));
        }), a(this, "isDragEvent", function(n) {
          var h = (
            /** @type {Element} */
            n.target.closest(".".concat(e.Settings.selectableClass))
          );
          return !e.Settings.draggability || e.DS.stores.KeyStore.isMultiSelectKeyPressed(n) || !h ? !1 : (e.Settings.immediateDrag && (e.DS.SelectedSet.size ? e.DS.SelectedSet.has(h) || (e.DS.SelectedSet.clear(), e.DS.SelectedSet.add(
            /** @type {DSElement} */
            h
          )) : e.DS.SelectedSet.add(
            /** @type {DSElement} */
            h
          )), !!e.DS.SelectedSet.has(h));
        }), a(this, "onClick", function(n) {
          var h = n.event;
          if (e._canInteract(h) && !(h.detail > 0)) {
            var y = e.DS, w = y.stores, D = w.PointerStore, z = w.KeyStore, W = y.SelectableSet, it = y.SelectedSet;
            D.start(h);
            var xt = (
              /** @type {any} */
              h.target
            );
            W.has(xt) && (z.isMultiSelectKeyPressed(h) || it.clear(), it.toggle(xt), e.reset());
          }
        }), a(this, "stop", function() {
          var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.DS.Area.HTMLNode;
          e.isInteracting = !1, e.isDragging = !1, e.Settings.usePointerEvents ? (n.removeEventListener("pointerdown", e.start, {
            // @ts-ignore
            passive: !1
          }), document.removeEventListener("pointerup", e.reset), document.removeEventListener("pointercancel", e.reset)) : (n.removeEventListener("mousedown", e.start), document.removeEventListener("mouseup", e.reset)), n.removeEventListener("touchstart", e.start, {
            // @ts-ignore
            passive: !1
          }), document.removeEventListener("touchend", e.reset);
        }), a(this, "update", function(n) {
          var h = n.event, y = n.scroll_directions, w = n.scroll_multiplier;
          e.isInteracting && e.DS.publish(["Interaction:update:pre", "Interaction:update"], {
            event: h,
            scroll_directions: y,
            scroll_multiplier: w,
            isDragging: e.isDragging
          });
        }), a(this, "reset", function(n) {
          return e.DS.publish("Interaction:end:pre", {
            event: n,
            isDragging: e.isDragging
          });
        }), a(this, "_reset", function(n) {
          var h = e.isDragging;
          e.stop(), e.init(), e.DS.publish("Interaction:end", {
            event: n,
            isDragging: h
          });
        }), this.DS = m, this.Settings = m.stores.SettingsStore.s, this.DS.subscribe("Settings:updated:area", function(n) {
          var h = n.settings;
          e.stop(h["area:pre"]), e.init();
        }), this.DS.subscribe("PointerStore:updated", this.update), this.DS.subscribe("Selectable:click", this.onClick), this.DS.subscribe("Selectable:pointer", function(n) {
          var h = n.event;
          return e.start(h);
        }), this.DS.subscribe("Interaction:start:pre", function(n) {
          var h = n.event;
          return e._start(h);
        }), this.DS.subscribe("Interaction:init:pre", this._init), this.DS.subscribe("Interaction:end:pre", function(n) {
          var h = n.event;
          return e._reset(h);
        }), this.DS.subscribe("Area:scroll", this.update);
      }
      return g(c, [{
        key: "_canInteract",
        value: (
          /**
           * @param {DSEvent} event
           */
          function(e) {
            var m = (
              /** @type {MouseEvent} */
              e.clientX === 0 && /** @type {MouseEvent} */
              e.clientY === 0 && /** @type {MouseEvent} */
              e.detail === 0 && e.target
            );
            return (
              /** @type {MouseEvent} */
              !(e.button === 2 || // right-clicks
              this.isInteracting || // fix double-click issues
              e.target && !this.DS.SelectorArea.isInside(
                /** @type {DSElement} */
                e.target
              ) || // fix outside elements issue
              !m && !this.DS.SelectorArea.isClicked(e))
            );
          }
        )
        /**
         * @param {DSEvent} event
         */
      }]), c;
    }(), wo = /* @__PURE__ */ g(
      function c(u) {
        var e = this, m = u.DS;
        i(this, c), a(this, "subscribers", {}), a(this, "subscribe", function(n, h) {
          return Array.isArray(e.subscribers[n]) || (e.subscribers[n] = []), e.subscribers[n].push(h), e.subscribers[n].length - 1;
        }), a(this, "unsubscribe", function(n, h, y) {
          y >= 0 ? e.subscribers[n].splice(y, 1) : h && (e.subscribers[n] = e.subscribers[n].filter(function(w) {
            return w !== h;
          }));
        }), a(this, "publish", function(n, h) {
          Array.isArray(n) ? n.forEach(function(y) {
            return e._publish(y, h);
          }) : e._publish(n, h);
        }), a(this, "_publish", function(n, h) {
          var y = e.subscribers[n];
          Array.isArray(y) && (n.includes(":pre") ? e._handlePrePublish(y, h) : e._handlePublish(y, h));
        }), a(this, "_handlePublish", function(n, h) {
          for (var y = 0, w = n.length; y < w; y++) {
            if (e.DS.stopped)
              return;
            n[y](h);
          }
        }), a(this, "_handlePrePublish", function(n, h) {
          for (var y = n.length; y--; ) {
            if (e.DS.stopped)
              return;
            n[y](h);
          }
        }), this.DS = m;
      }
      /**
       * Subscribe to an event
       * @memberof DragSelect#
       * @function subscribe
       * @param {DSCallbackNames} eventName
       * @param {DSCallback} callback
       * @returns {number} event id, can be used to unsubscribe more efficiently
       */
    ), _o = /* @__PURE__ */ function(c) {
      v(e, c);
      var u = V(e);
      function e(m) {
        var n, h = m.DS;
        return i(this, e), n = u.call(this), a(M(n), "_rects", void 0), a(M(n), "_timeout", void 0), a(M(n), "init", function() {
          return Nt(n.Settings.selectables).forEach(function(y) {
            return n.add(y);
          });
        }), a(M(n), "clear", function() {
          return n.forEach(function(y) {
            return n.delete(y);
          });
        }), a(M(n), "_onClick", function(y) {
          return n.DS.publish(["Selectable:click:pre", "Selectable:click"], {
            event: y
          });
        }), a(M(n), "_onPointer", function(y) {
          return n.DS.publish(["Selectable:pointer:pre", "Selectable:pointer"], {
            event: y
          });
        }), a(M(n), "addAll", function(y) {
          return y.forEach(function(w) {
            return n.add(w);
          });
        }), a(M(n), "deleteAll", function(y) {
          return y.forEach(function(w) {
            return n.delete(w);
          });
        }), a(M(n), "getRect", function(y) {
          return n._rects ? n.rects.get(y) : y.getBoundingClientRect();
        }), n.DS = h, n.Settings = h.stores.SettingsStore.s, n.DS.subscribe("Interaction:init", n.init), n.DS.PubSub.subscribe("Settings:updated:selectables", function() {
          n.clear(), n.init();
        }), n.DS.subscribe("Settings:updated:selectableClass", function(y) {
          var w = y.settings;
          n.forEach(function(D) {
            D.classList.remove(w["selectableClass:pre"]), D.classList.add(w.selectableClass);
          });
        }), n;
      }
      return g(e, [{
        key: "add",
        value: (
          /** 
           * @param {DSElement} element
           * @return {this}
           * */
          function(n) {
            if (H(p(e.prototype), "has", this).call(this, n))
              return this;
            var h = {
              items: this.elements,
              item: n
            };
            return this.DS.publish("Selectable:added:pre", h), n.classList.add(this.Settings.selectableClass), n.addEventListener("click", this._onClick), this.Settings.usePointerEvents ? n.addEventListener("pointerdown", this._onPointer, {
              // @ts-ignore
              passive: !1
            }) : n.addEventListener("mousedown", this._onPointer), n.addEventListener("touchstart", this._onPointer, {
              // @ts-ignore
              passive: !1
            }), this.Settings.draggability && !this.Settings.useTransform && Ar({
              computedStyle: window.getComputedStyle(n),
              node: n
            }), H(p(e.prototype), "add", this).call(this, n), this.DS.publish("Selectable:added", h), this;
          }
        )
        /** @param {DSElement} element */
      }, {
        key: "delete",
        value: function(n) {
          if (!H(p(e.prototype), "has", this).call(this, n))
            return !0;
          var h = {
            items: this.elements,
            item: n
          };
          return this.DS.publish("Selectable:removed:pre", h), n.classList.remove(this.Settings.selectableClass), n.classList.remove(this.Settings.hoverClass), n.removeEventListener("click", this._onClick), this.Settings.usePointerEvents ? n.removeEventListener("pointerdown", this._onPointer, {
            // @ts-ignore
            passive: !1
          }) : n.removeEventListener("mousedown", this._onPointer), n.removeEventListener("touchstart", this._onPointer, {
            // @ts-ignore
            passive: !1
          }), H(p(e.prototype), "delete", this).call(this, n), this.DS.publish("Selectable:removed", h), !0;
        }
      }, {
        key: "elements",
        get: (
          /** @return {DSElements} */
          function() {
            return Array.from(this.values());
          }
        )
      }, {
        key: "rects",
        get: function() {
          var n = this;
          return this._rects ? this._rects : (this._rects = /* @__PURE__ */ new Map(), this.forEach(function(h) {
            return n._rects.set(h, h.getBoundingClientRect());
          }), this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(function() {
            return n._rects = null;
          }, this.Settings.refreshMemoryRate), this._rects);
        }
      }]), e;
    }(/* @__PURE__ */ T(Set)), xo = /* @__PURE__ */ function(c) {
      v(e, c);
      var u = V(e);
      function e(m) {
        var n, h = m.DS;
        return i(this, e), n = u.call(this), a(M(n), "clear", function() {
          return n.forEach(function(y) {
            return n.delete(y);
          });
        }), a(M(n), "addAll", function(y) {
          return y.forEach(function(w) {
            return n.add(w);
          });
        }), a(M(n), "deleteAll", function(y) {
          return y.forEach(function(w) {
            return n.delete(w);
          });
        }), n.DS = h, n;
      }
      return g(e, [{
        key: "add",
        value: function(n) {
          if (H(p(e.prototype), "has", this).call(this, n))
            return this;
          var h = {
            items: this.elements,
            item: n
          };
          return this.DS.publish("Selected:added:pre", h), H(p(e.prototype), "add", this).call(this, n), n.classList.add(this.DS.stores.SettingsStore.s.selectedClass), n.style.zIndex = "".concat((parseInt(n.style.zIndex) || 0) + 1), this.DS.publish("Selected:added", h), this;
        }
        /** @param {DSElement} element */
      }, {
        key: "delete",
        value: function(n) {
          if (!H(p(e.prototype), "has", this).call(this, n))
            return !0;
          var h = {
            items: this.elements,
            item: n
          };
          this.DS.publish("Selected:removed:pre", h);
          var y = H(p(e.prototype), "delete", this).call(this, n);
          return n.classList.remove(this.DS.stores.SettingsStore.s.selectedClass), n.style.zIndex = "".concat((parseInt(n.style.zIndex) || 0) - 1), this.DS.publish("Selected:removed", h), y;
        }
      }, {
        key: "toggle",
        value: (
          /**
           * Adds/Removes an element. If it is already selected = remove, if not = add.
           * @param {DSElement} element
           * @return {DSElement}
           */
          function(n) {
            return this.has(n) ? this.delete(n) : this.add(n), n;
          }
        )
        /** @param {DSElements} elements */
      }, {
        key: "elements",
        get: (
          /** @return {DSElements} */
          function() {
            return Array.from(this.values());
          }
        )
      }]), e;
    }(/* @__PURE__ */ T(Set)), ko = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, m = u.DS;
        i(this, c), a(this, "_prevSelectedSet", void 0), a(this, "start", function(n) {
          var h = n.event, y = n.isDragging;
          y || (e._storePrevious(h), e._handleInsideSelection(!0, h));
        }), a(this, "update", function(n) {
          var h = n.isDragging;
          h || e.DS.continue || e._handleInsideSelection();
        }), a(this, "_handleInsideSelection", function(n, h) {
          var y = e.DS, w = y.SelectableSet, D = y.SelectorArea, z = y.Selector, W = e.DS.stores.KeyStore.isMultiSelectKeyPressed(h) && e.Settings.multiSelectToggling, it = e.Settings.selectionThreshold, xt = w.rects, kt = z.rect, Mt = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map(), mt = gt(xt), ce;
          try {
            for (mt.s(); !(ce = mt.n()).done; ) {
              var Me = X(ce.value, 2), ue = Me[0], $e = Me[1];
              D.isInside(ue, $e) && (Gt($e, kt, it) ? Mt.set(ue, $e) : nt.set(ue, $e));
            }
          } catch (Xe) {
            mt.e(Xe);
          } finally {
            mt.f();
          }
          if (!e.DS.continue) {
            var Nr = e.filterSelected({
              select: Mt,
              unselect: nt,
              selectorRect: kt
            }), Io = Nr.select, Ao = Nr.unselect;
            Io.forEach(function(Xe, Ze) {
              return co({
                element: Ze,
                force: n,
                multiSelectionToggle: W,
                SelectedSet: e.DS.SelectedSet,
                hoverClassName: e.Settings.hoverClass
              });
            }), Ao.forEach(function(Xe, Ze) {
              return uo({
                element: Ze,
                force: n,
                SelectedSet: e.DS.SelectedSet,
                hoverClassName: e.Settings.hoverClass,
                PrevSelectedSet: e._prevSelectedSet
              });
            });
          }
        }), a(this, "filterSelected", function(n) {
          var h = n.select, y = n.unselect;
          return n.selectorRect, {
            select: h,
            unselect: y
          };
        }), this.DS = m, this.Settings = this.DS.stores.SettingsStore.s, this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update);
      }
      return g(c, [{
        key: "_storePrevious",
        value: function(e) {
          var m = this.DS, n = m.stores.KeyStore, h = m.SelectedSet;
          n.isMultiSelectKeyPressed(e) ? this._prevSelectedSet = new Set(h) : this._prevSelectedSet = /* @__PURE__ */ new Set();
        }
        /** @param {{event:DSEvent,isDragging:boolean}} event */
      }]), c;
    }(), Do = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, m = u.DS;
        i(this, c), a(this, "_rect", void 0), a(this, "attachSelector", function() {
          var n, h;
          e.HTMLNode && (n = e.DS.SelectorArea) !== null && n !== void 0 && n.HTMLNode && e.DS.SelectorArea.HTMLNode.removeChild(e.HTMLNode), e.HTMLNode = e.DS.stores.SettingsStore.s.selector || Ye(e.DS.stores.SettingsStore.s.customStyles), e.HTMLNode.classList.add(e.DS.stores.SettingsStore.s.selectorClass), e.HTMLNode && (h = e.DS.SelectorArea) !== null && h !== void 0 && h.HTMLNode && e.DS.SelectorArea.HTMLNode.appendChild(e.HTMLNode);
        }), a(this, "start", function(n) {
          var h = n.isDragging;
          if (!h) {
            var y = e.DS.stores.PointerStore, w = y.initialValArea;
            Or(e.HTMLNode, U(w, 1)), e.HTMLNode.style.display = "block", e._rect = null;
          }
        }), a(this, "stop", function() {
          e.HTMLNode.style.width = "0", e.HTMLNode.style.height = "0", e.HTMLNode.style.display = "none";
        }), a(this, "update", function(n) {
          var h = n.isDragging;
          if (!(h || e.DS.continue)) {
            var y = e.DS.stores, w = y.ScrollStore, D = y.PointerStore, z = so({
              scrollAmount: w.scrollAmount,
              initialPointerPos: D.initialValArea,
              pointerPos: D.currentValArea
            });
            Or(e.HTMLNode, z), e._rect = null;
          }
        }), this.DS = m, this.DS.subscribe("Settings:updated:selectorClass", function(n) {
          var h = n.settings;
          e.HTMLNode.classList.remove(h["selectorClass:pre"]), e.HTMLNode.classList.add(h.selectorClass);
        }), this.DS.subscribe("Settings:updated:selector", this.attachSelector), this.DS.subscribe("Settings:updated:customStyles", this.attachSelector), this.attachSelector(), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("Interaction:end", this.stop);
      }
      return g(c, [{
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = this.HTMLNode.getBoundingClientRect();
        }
      }]), c;
    }(), Co = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, m = u.DS;
        i(this, c), a(this, "_scrollInterval", void 0), a(this, "_rect", void 0), a(this, "currentEdges", []), a(this, "start", function() {
          e.applyElements("append"), e.updatePos();
        }), a(this, "applyElements", function() {
          var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "append", h = document.body ? "body" : "documentElement", y = "".concat(n, "Child");
          e.HTMLNode[y](e.DS.Selector.HTMLNode), document[h][y](e.HTMLNode);
        }), a(this, "updatePos", function() {
          e._rect = null;
          var n = e.DS.Area.rect, h = e.DS.Area.computedBorder, y = e.HTMLNode.style, w = "".concat(n.top + h.top, "px"), D = "".concat(n.left + h.left, "px"), z = "".concat(n.width, "px"), W = "".concat(n.height, "px");
          y.top !== w && (y.top = w), y.left !== D && (y.left = D), y.width !== z && (y.width = z), y.height !== W && (y.height = W);
        }), a(this, "stop", function(n) {
          e.stopAutoScroll(), n && e.applyElements("remove");
        }), a(this, "startAutoScroll", function() {
          e.currentEdges = [], e._scrollInterval = setInterval(function() {
            return e.handleAutoScroll();
          }, 16);
        }), a(this, "handleAutoScroll", function() {
          if (!e.DS.continue) {
            var n = e.DS, h = n.stores.PointerStore, y = n.Area;
            e.currentEdges = Tr({
              elementRect: U(h.currentVal),
              containerRect: e.rect,
              tolerance: e.DS.stores.SettingsStore.s.overflowTolerance
            }), e.currentEdges.length && y.scroll(e.currentEdges, e.DS.stores.SettingsStore.s.autoScrollSpeed);
          }
        }), a(this, "stopAutoScroll", function() {
          e.currentEdges = [], clearInterval(e._scrollInterval);
        }), a(this, "isInside", function(n, h) {
          return e.DS.Area.HTMLNode.contains(n) && e.DS.stores.ScrollStore.canScroll ? !0 : Gt(e.rect, h || n.getBoundingClientRect());
        }), this.DS = m, this.HTMLNode = De(), this.DS.subscribe("Settings:updated:selectorAreaClass", function(n) {
          var h = n.settings;
          e.HTMLNode.classList.remove(h["selectorAreaClass:pre"]), e.HTMLNode.classList.add(h.selectorAreaClass);
        }), this.HTMLNode.classList.add(this.DS.stores.SettingsStore.s.selectorAreaClass), this.DS.subscribe("Area:modified", this.updatePos), this.DS.subscribe("Area:modified", this.updatePos), this.DS.subscribe("Interaction:init", this.start), this.DS.subscribe("Interaction:start", this.startAutoScroll), this.DS.subscribe("Interaction:end", function() {
          e.updatePos(), e.stopAutoScroll();
        });
      }
      return g(c, [{
        key: "isClicked",
        value: (
          /**
           * checks if the click was triggered on the area.
           * @param {DSEvent} [event]
           * @returns {boolean}
           */
          function(e) {
            var m = this.DS.stores.PointerStore, n = e ? m.getPointerPosition(e) : m.initialVal;
            return Gt({
              left: n.x,
              top: n.y,
              right: n.x,
              bottom: n.y
            }, this.rect);
          }
        )
      }, {
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = this.HTMLNode.getBoundingClientRect();
        }
      }]), c;
    }(), Eo = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, m = u.DS;
        i(this, c), a(this, "_currentValues", /* @__PURE__ */ new Set()), a(this, "_keyMapping", {
          control: "ctrlKey",
          shift: "shiftKey",
          meta: "metaKey"
        }), a(this, "init", function() {
          document.addEventListener("keydown", e.keydown), document.addEventListener("keyup", e.keyup), window.addEventListener("blur", e.reset);
        }), a(this, "keydown", function(n) {
          var h = n.key.toLowerCase();
          e.DS.publish("KeyStore:down:pre", {
            event: n,
            key: h
          }), e._currentValues.add(h), e.DS.publish("KeyStore:down", {
            event: n,
            key: h
          });
        }), a(this, "keyup", function(n) {
          var h = n.key.toLowerCase();
          e.DS.publish("KeyStore:up:pre", {
            event: n,
            key: h
          }), e._currentValues.delete(h), e.DS.publish("KeyStore:up", {
            event: n,
            key: h
          });
        }), a(this, "stop", function() {
          document.removeEventListener("keydown", e.keydown), document.removeEventListener("keyup", e.reset), window.removeEventListener("blur", e.reset), e.reset();
        }), a(this, "reset", function() {
          return e._currentValues.clear();
        }), this.DS = m, this.DS.subscribe("Interaction:init", this.init);
      }
      return g(c, [{
        key: "isMultiSelectKeyPressed",
        value: (
          /** @param {KeyboardEvent|MouseEvent|PointerEvent|TouchEvent} [event] */
          function(e) {
            var m = this;
            if (this.DS.stores.SettingsStore.s.multiSelectMode)
              return !0;
            var n = this.DS.stores.SettingsStore.s.multiSelectKeys.map(function(h) {
              return h.toLocaleLowerCase();
            });
            return !!(this.currentValues.some(function(h) {
              return n.includes(h.toLocaleLowerCase());
            }) || e && n.some(function(h) {
              return e[m._keyMapping[h]];
            }));
          }
        )
      }, {
        key: "currentValues",
        get: function() {
          return Array.from(this._currentValues.values());
        }
      }]), c;
    }(), Mo = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, m = u.DS;
        i(this, c), a(this, "_isMouseInteraction", !1), a(this, "_initialValArea", void 0), a(this, "_currentValArea", void 0), a(this, "_lastValArea", void 0), a(this, "_initialVal", void 0), a(this, "_currentVal", void 0), a(this, "_lastVal", void 0), a(this, "_lastTouch", void 0), a(this, "init", function() {
          e.Settings.usePointerEvents ? document.addEventListener("pointermove", e.update, {
            // @ts-ignore
            passive: !1
          }) : document.addEventListener("mousemove", e.update), document.addEventListener("touchmove", e.update, {
            // @ts-ignore
            passive: !1
          });
        }), a(this, "getPointerPosition", function(n) {
          return ro({
            event: e._normalizedEvent(n)
          });
        }), a(this, "update", function(n) {
          n && (e.DS.publish("PointerStore:updated:pre", {
            event: n
          }), e.currentVal = e.getPointerPosition(n), e._isMouseInteraction && e.DS.publish("PointerStore:updated", {
            event: n
          }));
        }), a(this, "stop", function() {
          e.Settings.usePointerEvents ? document.removeEventListener("pointermove", e.update, {
            // @ts-ignore
            passive: !1
          }) : document.removeEventListener("mousemove", e.update), document.removeEventListener("touchmove", e.update, {
            // @ts-ignore
            passive: !1
          }), setTimeout(function() {
            return e._isMouseInteraction = !1;
          }, 100);
        }), a(this, "reset", function(n) {
          n && (e.currentVal = e.lastVal = e.getPointerPosition(n), e.stop(), e.init());
        }), this.DS = m, this.Settings = m.stores.SettingsStore.s, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function(n) {
          var h = n.event;
          return e.start(h);
        }), this.DS.subscribe("Interaction:end", function(n) {
          var h = n.event;
          return e.reset(h);
        });
      }
      return g(c, [{
        key: "start",
        value: (
          /** @param {DSEvent} [event] */
          function(e) {
            e && (this._isMouseInteraction = !0, this.currentVal = this.initialVal = this.getPointerPosition(e));
          }
        )
        /** @param {DSEvent} event */
      }, {
        key: "_normalizedEvent",
        value: (
          /**
           * @param {DSEvent} event
           * @return {MouseEvent|PointerEvent|Touch}
           * @private
           */
          function(e) {
            return "touches" in e && e.type !== "touchend" && (this._lastTouch = e), "touches" in e ? this._lastTouch.touches[0] : e;
          }
        )
        /** First recorded pointer position within the area */
      }, {
        key: "initialValArea",
        get: function() {
          return this._initialValArea ? this._initialValArea : {
            x: 0,
            y: 0
          };
        }
        /** Current pointer position within the area */
      }, {
        key: "currentValArea",
        get: function() {
          return this._currentValArea ? this._currentValArea : {
            x: 0,
            y: 0
          };
        }
        /** Last recorded pointer position within the area */
      }, {
        key: "lastValArea",
        get: function() {
          return this._lastValArea ? this._lastValArea : {
            x: 0,
            y: 0
          };
        }
        /** First recorded pointer position */
      }, {
        key: "initialVal",
        get: function() {
          return this._initialVal ? this._initialVal : {
            x: 0,
            y: 0
          };
        },
        set: function(e) {
          this._initialVal = e, this._initialValArea = e && O(e, "-", O(tt(this.DS.Area.rect), "+", tt(this.DS.Area.computedBorder)));
        }
      }, {
        key: "currentVal",
        get: function() {
          return this._currentVal ? this._currentVal : {
            x: 0,
            y: 0
          };
        },
        set: function(e) {
          this._currentVal = e, this._currentValArea = e && O(e, "-", O(tt(this.DS.Area.rect), "+", tt(this.DS.Area.computedBorder)));
        }
      }, {
        key: "lastVal",
        get: function() {
          return this._lastVal ? this._lastVal : {
            x: 0,
            y: 0
          };
        },
        set: function(e) {
          this._lastVal = e, this._lastValArea = e && O(e, "-", O(tt(this.DS.Area.rect), "+", tt(this.DS.Area.computedBorder)));
        }
      }]), c;
    }(), $o = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, m = u.DS;
        i(this, c), a(this, "_initialVal", void 0), a(this, "_currentVal", void 0), a(this, "_canScroll", void 0), a(this, "init", function() {
          return e.DS.stores.SettingsStore.s.area.addEventListener("scroll", e.update);
        }), a(this, "start", function() {
          e._currentVal = e._initialVal = Ee(e.DS.stores.SettingsStore.s.area), e.DS.stores.SettingsStore.s.area.addEventListener("scroll", e.update);
        }), a(this, "update", function() {
          return e._currentVal = Ee(e.DS.stores.SettingsStore.s.area);
        }), a(this, "stop", function() {
          e.DS.stores.SettingsStore.s.area.removeEventListener("scroll", e.update), e._initialVal = {
            x: 0,
            y: 0
          }, e._canScroll = null;
        }), a(this, "reset", function() {
          e.stop(), e.start();
        }), this.DS = m, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function() {
          return e.start();
        }), this.DS.subscribe("Interaction:end", function() {
          return e.reset();
        });
      }
      return g(c, [{
        key: "canScroll",
        get: function() {
          return typeof this._canScroll == "boolean" ? this._canScroll : this._canScroll = ke(this.DS.stores.SettingsStore.s.area);
        }
      }, {
        key: "scrollAmount",
        get: function() {
          var e = O(this.currentVal, "-", this.initialVal), m = _t(this.DS.stores.SettingsStore.s.zoom), n = O(O(e, "*", m), "-", e);
          return {
            x: e.x + n.x,
            y: e.y + n.y
          };
        }
      }, {
        key: "initialVal",
        get: function() {
          return this._initialVal ? this._initialVal : {
            x: 0,
            y: 0
          };
        }
      }, {
        key: "currentVal",
        get: function() {
          return this._currentVal || (this._currentVal = Ee(this.DS.stores.SettingsStore.s.area)), this._currentVal;
        }
      }]), c;
    }(), To = /* @__PURE__ */ g(
      /**
       * @type {Settings}
       * @private
       * */
      /**
       * Holds the settings and their previous value `:pre`
       * @example {
       *    autoScrollSpeed: 3,
       *    'autoScrollSpeed:pre': 5
       * }
       * @type {Settings}
       * */
      /**
       * @class ScrollStore
       * @constructor ScrollStore
       * @param {{ DS:DragSelect, settings:Settings }} p
       * @ignore
       */
      function c(u) {
        var e = this, m = u.DS, n = u.settings;
        i(this, c), a(this, "_settings", {}), a(this, "s", {}), a(this, "update", function(h) {
          var y = h.settings, w = h.init;
          return e.DS.publish("Settings:updated:pre", l({
            settings: y
          }, w ? {
            init: w
          } : {}));
        }), a(this, "_update", function(h) {
          for (var y = h.settings, w = h.init, D = ho(y, w), z = function() {
            var kt, Mt = X(it[W], 2), nt = Mt[0], mt = Mt[1];
            nt in e._settings || Object.defineProperty(e.s, nt, {
              get: function() {
                return e._settings[nt];
              },
              set: function(ue) {
                return e.update({
                  settings: a({}, nt, ue)
                });
              }
            }), e._settings["".concat(nt, ":pre")] = e._settings[nt], e._settings[nt] = mt;
            var ce = {
              settings: (kt = {}, a(kt, nt, e._settings[nt]), a(kt, "".concat(nt, ":pre"), e._settings["".concat(nt, ":pre")]), kt)
            };
            e.DS.publish("Settings:updated", ce), e.DS.publish("Settings:updated:".concat(nt), ce);
          }, W = 0, it = Object.entries(D); W < it.length; W++)
            z();
        }), this.DS = m, this.DS.subscribe("Settings:updated:pre", this._update), this.update({
          settings: n,
          init: !0
        });
      }
      /** @param {{settings: Settings, init?: boolean}} props */
    ), Pr = /* @__PURE__ */ function() {
      function c(u) {
        var e = this;
        i(this, c), a(this, "continue", !1), a(this, "start", function() {
          e.stopped = !1, e.Interaction.init();
        }), a(this, "break", function() {
          return e.continue = !0;
        }), a(this, "setSettings", function(m) {
          return e.stores.SettingsStore.update({
            settings: m
          });
        }), a(this, "getSelection", function() {
          return e.SelectedSet.elements;
        }), a(this, "getSelectables", function() {
          return e.SelectableSet.elements;
        }), a(this, "getInitialCursorPosition", function() {
          return e.stores.PointerStore.initialVal;
        }), a(this, "getCurrentCursorPosition", function() {
          return e.stores.PointerStore.currentVal;
        }), a(this, "getPreviousCursorPosition", function() {
          return e.stores.PointerStore.lastVal;
        }), a(this, "getInitialCursorPositionArea", function() {
          return e.stores.PointerStore.initialValArea;
        }), a(this, "getCurrentCursorPositionArea", function() {
          return e.stores.PointerStore.currentValArea;
        }), a(this, "getPreviousCursorPositionArea", function() {
          return e.stores.PointerStore.lastValArea;
        }), a(this, "isMultiSelect", function(m) {
          return e.stores.KeyStore.isMultiSelectKeyPressed(m);
        }), a(this, "isDragging", function() {
          return e.Interaction.isDragging;
        }), a(this, "getZoneByCoordinates", function(m) {
          var n;
          return (n = e.DropZones.getTarget(m)) === null || n === void 0 ? void 0 : n.toObject();
        }), a(this, "getItemsDroppedByZoneId", function(m) {
          return e.DropZones.getItemsDroppedById(m);
        }), a(this, "getItemsInsideByZoneId", function(m, n) {
          return e.DropZones.getItemsInsideById(m, n);
        }), this.PubSub = new wo({
          DS: this
        }), this.subscribe = this.PubSub.subscribe, this.unsubscribe = this.PubSub.unsubscribe, this.publish = this.PubSub.publish, this.stores = /** @type {{ SettingsStore:SettingsStore, PointerStore:PointerStore, ScrollStore:ScrollStore, KeyStore:KeyStore }} */
        {}, this.stores.SettingsStore = new To({
          DS: this,
          settings: u
        }), this.stores.PointerStore = new Mo({
          DS: this
        }), this.stores.ScrollStore = new $o({
          DS: this
        }), this.stores.KeyStore = new Eo({
          DS: this
        }), this.Area = new mo({
          DS: this
        }), this.Selector = new Do({
          DS: this
        }), this.SelectorArea = new Co({
          DS: this
        }), this.SelectableSet = new _o({
          DS: this
        }), this.SelectedSet = new xo({
          DS: this
        }), this.Selection = new ko({
          DS: this
        }), this.Drag = new vo({
          DS: this
        }), this.DropZones = new yo({
          DS: this
        }), this.Interaction = new So({
          DS: this
        }), go({
          subscribe: this.subscribe,
          publish: this.publish,
          SelectedSet: this.SelectedSet,
          Interaction: this.Interaction,
          DropZones: this.DropZones
        }), this.subscribe("Interaction:end", function() {
          return e.continue = !1;
        }), this.start();
      }
      return g(c, [{
        key: "stop",
        value: (
          /**
           * Complete function teardown
           * Will teardown/stop the whole functionality
           * @param {boolean} [remove] - if elements should be removed.
           * @param {boolean} [fromSelection] - if elements should also be added/removed to the selection.
           * @param {boolean} [withCallback] - if elements should also be added/removed to the selection.
           */
          function() {
            var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            n && this.publish("callback", {
              items: this.getSelection()
            }), this.Interaction.stop(), this.Area.stop(), this.Drag.stop(), this.Selector.stop(), this.SelectorArea.stop(e), this.stores.KeyStore.stop(), this.stores.PointerStore.stop(), this.stores.ScrollStore.stop(), e && this.SelectableSet.clear(), m && this.SelectedSet.clear(), this.stopped = !0;
          }
        )
        /**
         * Utility to override DragSelect internal functionality:
         * Break will skip the selection or dragging functionality (until after the callback) but let everything continue to run.
         * Useful utility to write your own functionality/move/dragNdrop based on DragSelect pointer positions.
         */
      }, {
        key: "addSelection",
        value: (
          /**
           * Adds several elements to the selection list also adds the specific classes and take into account all calculations.
           * Does not clear the selection, in contrary to .setSelection. Can add multiple elements at once
           * @param {DSInputElements} elements one or multiple elements
           * @param {boolean} [triggerCallback] - if callback should be called
           * @param {boolean} [dontAddToSelectables] - if element should not be added to the list of selectable elements
           * @return {DSElements} all selected elements
           */
          function(e) {
            var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            return this.SelectedSet.addAll(Nt(e)), n || this.addSelectables(e), m && this.PubSub.publish("callback", {
              items: this.getSelection()
            }), this.getSelection();
          }
        )
        /**
         * Removes specific elements from the selection
         * Multiple elements can be given at once, in contrary to unselect
         * @param {DSInputElements} elements one or multiple elements
         * @param {boolean} [triggerCallback] - if callback should be called
         * @param {boolean} [removeFromSelectables] - if element should be removed from the list of selectable elements
         * @return {DSElements} all selected elements
         */
      }, {
        key: "removeSelection",
        value: function(e) {
          var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.SelectedSet.deleteAll(Nt(e)), n && this.removeSelectables(e), m && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
        /**
         * Toggles specific elements from the selection:
         * If element is not in selection it will be added, if it is already selected, it will be removed.
         * Multiple elements can be given at once.
         * @param {DSInputElements} elements one or multiple elements
         * @param {boolean} [triggerCallback] - if callback should be called
         * @param {boolean} [removeFromSelectables] - if element should not be added/removed to the list of selectable elements accordingly
         * @return {DSElements} all selected elements
         */
      }, {
        key: "toggleSelection",
        value: function(e) {
          var m = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return Nt(e).forEach(function(y) {
            return m.SelectedSet.has(y) ? m.removeSelection(e, n, h) : m.addSelection(e, n, h);
          }), n && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
        /**
         * Sets the current selected elements and optionally run the callback
         * By default, adds new elements also to the list of selectables
         * @param {DSInputElements} elements – dom elements
         * @param {boolean} [triggerCallback] - if callback should be called
         * @param {boolean} [dontAddToSelectables] - if element should not be added to the list of selectable elements
         * @return {DSElements}
         */
      }, {
        key: "setSelection",
        value: function(e) {
          var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.clearSelection(), this.addSelection(e, m, n), this.getSelection();
        }
        /**
         * Unselect / Deselect all current selected Nodes
         * @param {boolean} [triggerCallback] - if callback should be called
         * @return {DSElements} this.selected, should be empty
         */
      }, {
        key: "clearSelection",
        value: function() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
          return this.SelectedSet.clear(), e && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
        /**
         * Add elements that can be selected. No node is added twice
         * @param {DSInputElements} elements dom element(s)
         * @param {boolean} [addToSelection] if elements should also be added to current selection
         * @param {boolean} [triggerCallback] - if callback should be called
         * @return {DSInputElements} the added element(s)
         */
      }, {
        key: "addSelectables",
        value: function(e, m, n) {
          var h = Nt(e);
          return this.SelectableSet.addAll(h), m && this.SelectedSet.addAll(h), n && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), e;
        }
        /**
         * Gets all nodes that can potentially be selected
         * @return {DSElements} this.selectables
         */
      }, {
        key: "setSelectables",
        value: (
          /**
           * Sets all elements that can be selected.
           * Removes all current selectables (& their respective classes).
           * Adds the new set to the selectables set, thus replacing the original set.
           * @param {DSInputElements} elements – dom element(s)
           * @param {boolean} [removeFromSelection] if elements should also be removed from current selection
           * @param {boolean} [addToSelection] if elements should also be added to current selection
           * @return {DSInputElements} elements – the added element(s)
           */
          function(e) {
            var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            return console.warn('[DragSelect] DEPRECATION ".setSelectables" is deprecated and will be removed soon. Please use "ds.setSettings({ selectables: << new dom elements >> })" instead (see docs)'), this.removeSelectables(e, m), this.addSelectables(e, n);
          }
        )
        /**
         * Remove elements from the elements that can be selected.
         * @param {DSInputElements} elements – dom element(s)
         * @param {boolean} [removeFromSelection] if elements should also be removed from current selection
         * @param {boolean} [triggerCallback] - if callback should be called
         * @return {DSInputElements} the removed element(s)
         */
      }, {
        key: "removeSelectables",
        value: function(e, m, n) {
          return this.SelectableSet.deleteAll(Nt(e)), m && this.removeSelection(e), n && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), e;
        }
        /** The starting/initial position of the cursor/selector @return {Vect2} */
      }]), c;
    }();
    return Pr.isCollision = Gt, Pr;
  });
})(ls);
var $n = ls.exports;
const Tn = /* @__PURE__ */ Mn($n), cs = (r, t, s, o, l) => (t = Math, s = t.log, o = 1024, l = s(r) / s(o) | 0, r / t.pow(o, l)).toFixed(0) + " " + (l ? "KMGTPEZY"[--l] + "iB" : "B"), us = (r, t = null) => new Date(r * 1e3).toLocaleString(t ?? navigator.language ?? "en-US"), In = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, An = /* @__PURE__ */ f("path", {
  "fill-rule": "evenodd",
  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
}, null, -1), Ln = [
  An
], On = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, Pn = /* @__PURE__ */ f("path", {
  "fill-rule": "evenodd",
  d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
  "clip-rule": "evenodd"
}, null, -1), Nn = [
  Pn
], jn = {
  name: "VFSortIcon"
}, Te = /* @__PURE__ */ Object.assign(jn, {
  props: { direction: String },
  setup(r) {
    return (t, s) => (_(), C("div", null, [
      r.direction == "down" ? (_(), C("svg", In, Ln)) : Z("", !0),
      r.direction == "up" ? (_(), C("svg", On, Nn)) : Z("", !0)
    ]));
  }
}), Rn = ["onClick"], Vn = {
  name: "VFToast.vue"
}, Bn = /* @__PURE__ */ Object.assign(Vn, {
  setup(r) {
    const t = P("emitter"), { getStore: s } = P("storage"), o = L(s("full-screen", !1)), l = (a) => a == "error" ? "text-red-400 border-red-400 dark:text-red-300 dark:border-red-300" : "text-lime-600 border-lime-600 dark:text-lime-300 dark:border-lime-1300", i = L([]), d = (a) => {
      i.value.splice(a, 1);
    }, g = (a) => {
      let v = i.value.findIndex((p) => p.id === a);
      v !== -1 && d(v);
    };
    return t.on("vf-toast-clear", () => {
      i.value = [];
    }), t.on("vf-toast-push", (a) => {
      let v = (/* @__PURE__ */ new Date()).getTime().toString(36).concat(performance.now().toString(), Math.random().toString()).replace(/\./g, "");
      a.id = v, i.value.push(a), setTimeout(() => {
        g(v);
      }, 5e3);
    }), (a, v) => (_(), C("div", {
      class: ct([o.value.value ? "fixed" : "absolute", "bottom-0 max-w-fit flex flex-col bottom-0 left-1/2 -translate-x-1/2"])
    }, [
      Ct(Lo, {
        name: "vf-toast-item",
        "leave-active-class": "transition-all duration-1000",
        "leave-to-class": "opacity-0"
      }, {
        default: F(() => [
          (_(!0), C(lt, null, wt(i.value, (p, b) => (_(), C("div", {
            onClick: (S) => d(b),
            key: p,
            class: ct([l(p.type), "inline-block mx-auto my-0.5 py-0.5 px-2 min-w-max bg-gray-50 dark:bg-gray-600 border text-xs sm:text-sm rounded cursor-pointer"])
          }, E(p.label), 11, Rn))), 128))
        ]),
        _: 1
      })
    ], 2));
  }
}), Ft = (r) => Object.entries(r).map((t) => t.map(encodeURIComponent).join("=")).join("&"), { apiUrl: zn } = At(), tr = (r, t) => zn.value + "?" + Ft({ q: "preview", adapter: r, path: t }), Ht = typeof window < "u", ds = Ht && !("onscroll" in window) || typeof navigator < "u" && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), hs = Ht && "IntersectionObserver" in window, fs = Ht && "classList" in document.createElement("p"), ps = Ht && window.devicePixelRatio > 1, Hn = {
  elements_selector: ".lazy",
  container: ds || Ht ? document : null,
  threshold: 300,
  thresholds: null,
  data_src: "src",
  data_srcset: "srcset",
  data_sizes: "sizes",
  data_bg: "bg",
  data_bg_hidpi: "bg-hidpi",
  data_bg_multi: "bg-multi",
  data_bg_multi_hidpi: "bg-multi-hidpi",
  data_bg_set: "bg-set",
  data_poster: "poster",
  class_applied: "applied",
  class_loading: "loading",
  class_loaded: "loaded",
  class_error: "error",
  class_entered: "entered",
  class_exited: "exited",
  unobserve_completed: !0,
  unobserve_entered: !1,
  cancel_on_exit: !0,
  callback_enter: null,
  callback_exit: null,
  callback_applied: null,
  callback_loading: null,
  callback_loaded: null,
  callback_error: null,
  callback_finish: null,
  callback_cancel: null,
  use_native: !1,
  restore_on_error: !1
}, gs = (r) => Object.assign({}, Hn, r), Vr = function(r, t) {
  let s;
  const o = "LazyLoad::Initialized", l = new r(t);
  try {
    s = new CustomEvent(o, { detail: { instance: l } });
  } catch {
    s = document.createEvent("CustomEvent"), s.initCustomEvent(o, !1, !1, { instance: l });
  }
  window.dispatchEvent(s);
}, Un = (r, t) => {
  if (t)
    if (!t.length)
      Vr(r, t);
    else
      for (let s = 0, o; o = t[s]; s += 1)
        Vr(r, o);
}, Pt = "src", hr = "srcset", fr = "sizes", ms = "poster", we = "llOriginalAttrs", vs = "data", pr = "loading", bs = "loaded", ys = "applied", Kn = "entered", gr = "error", Ss = "native", ws = "data-", _s = "ll-status", ft = (r, t) => r.getAttribute(ws + t), Yn = (r, t, s) => {
  const o = ws + t;
  if (s === null) {
    r.removeAttribute(o);
    return;
  }
  r.setAttribute(o, s);
}, _e = (r) => ft(r, _s), qt = (r, t) => Yn(r, _s, t), Be = (r) => qt(r, null), mr = (r) => _e(r) === null, Wn = (r) => _e(r) === pr, Xn = (r) => _e(r) === gr, vr = (r) => _e(r) === Ss, Zn = [pr, bs, ys, gr], Fn = (r) => Zn.indexOf(_e(r)) >= 0, Ut = (r, t, s, o) => {
  if (!(!r || typeof r != "function")) {
    if (o !== void 0) {
      r(t, s, o);
      return;
    }
    if (s !== void 0) {
      r(t, s);
      return;
    }
    r(t);
  }
}, ie = (r, t) => {
  if (fs) {
    r.classList.add(t);
    return;
  }
  r.className += (r.className ? " " : "") + t;
}, $t = (r, t) => {
  if (fs) {
    r.classList.remove(t);
    return;
  }
  r.className = r.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
}, qn = (r) => {
  r.llTempImage = document.createElement("IMG");
}, Gn = (r) => {
  delete r.llTempImage;
}, xs = (r) => r.llTempImage, ze = (r, t) => {
  if (!t)
    return;
  const s = t._observer;
  s && s.unobserve(r);
}, Jn = (r) => {
  r.disconnect();
}, Qn = (r, t, s) => {
  t.unobserve_entered && ze(r, s);
}, br = (r, t) => {
  r && (r.loadingCount += t);
}, ti = (r) => {
  r && (r.toLoadCount -= 1);
}, ks = (r, t) => {
  r && (r.toLoadCount = t);
}, ei = (r) => r.loadingCount > 0, ri = (r) => r.toLoadCount > 0, Ds = (r) => {
  let t = [];
  for (let s = 0, o; o = r.children[s]; s += 1)
    o.tagName === "SOURCE" && t.push(o);
  return t;
}, yr = (r, t) => {
  const s = r.parentNode;
  if (!s || s.tagName !== "PICTURE")
    return;
  Ds(s).forEach(t);
}, Cs = (r, t) => {
  Ds(r).forEach(t);
}, He = [Pt], Es = [Pt, ms], be = [Pt, hr, fr], Ms = [vs], Ue = (r) => !!r[we], $s = (r) => r[we], Ts = (r) => delete r[we], se = (r, t) => {
  if (Ue(r))
    return;
  const s = {};
  t.forEach((o) => {
    s[o] = r.getAttribute(o);
  }), r[we] = s;
}, si = (r) => {
  Ue(r) || (r[we] = { backgroundImage: r.style.backgroundImage });
}, oi = (r, t, s) => {
  if (!s) {
    r.removeAttribute(t);
    return;
  }
  r.setAttribute(t, s);
}, Xt = (r, t) => {
  if (!Ue(r))
    return;
  const s = $s(r);
  t.forEach((o) => {
    oi(r, o, s[o]);
  });
}, ni = (r) => {
  if (!Ue(r))
    return;
  const t = $s(r);
  r.style.backgroundImage = t.backgroundImage;
}, Is = (r, t, s) => {
  ie(r, t.class_applied), qt(r, ys), s && (t.unobserve_completed && ze(r, t), Ut(t.callback_applied, r, s));
}, As = (r, t, s) => {
  ie(r, t.class_loading), qt(r, pr), s && (br(s, 1), Ut(t.callback_loading, r, s));
}, zt = (r, t, s) => {
  s && r.setAttribute(t, s);
}, Br = (r, t) => {
  zt(r, fr, ft(r, t.data_sizes)), zt(r, hr, ft(r, t.data_srcset)), zt(r, Pt, ft(r, t.data_src));
}, ii = (r, t) => {
  yr(r, (s) => {
    se(s, be), Br(s, t);
  }), se(r, be), Br(r, t);
}, ai = (r, t) => {
  se(r, He), zt(r, Pt, ft(r, t.data_src));
}, li = (r, t) => {
  Cs(r, (s) => {
    se(s, He), zt(s, Pt, ft(s, t.data_src));
  }), se(r, Es), zt(r, ms, ft(r, t.data_poster)), zt(r, Pt, ft(r, t.data_src)), r.load();
}, ci = (r, t) => {
  se(r, Ms), zt(r, vs, ft(r, t.data_src));
}, ui = (r, t, s) => {
  const o = ft(r, t.data_bg), l = ft(r, t.data_bg_hidpi), i = ps && l ? l : o;
  i && (r.style.backgroundImage = `url("${i}")`, xs(r).setAttribute(Pt, i), As(r, t, s));
}, di = (r, t, s) => {
  const o = ft(r, t.data_bg_multi), l = ft(r, t.data_bg_multi_hidpi), i = ps && l ? l : o;
  i && (r.style.backgroundImage = i, Is(r, t, s));
}, hi = (r, t, s) => {
  const o = ft(r, t.data_bg_set);
  if (!o)
    return;
  const l = o.split("|");
  let i = l.map((d) => `image-set(${d})`);
  r.style.backgroundImage = i.join(), r.style.backgroundImage === "" && (i = l.map((d) => `-webkit-image-set(${d})`), r.style.backgroundImage = i.join()), Is(r, t, s);
}, Ls = {
  IMG: ii,
  IFRAME: ai,
  VIDEO: li,
  OBJECT: ci
}, fi = (r, t) => {
  const s = Ls[r.tagName];
  s && s(r, t);
}, pi = (r, t, s) => {
  const o = Ls[r.tagName];
  o && (o(r, t), As(r, t, s));
}, gi = ["IMG", "IFRAME", "VIDEO", "OBJECT"], mi = (r) => gi.indexOf(r.tagName) > -1, Os = (r, t) => {
  t && !ei(t) && !ri(t) && Ut(r.callback_finish, t);
}, zr = (r, t, s) => {
  r.addEventListener(t, s), r.llEvLisnrs[t] = s;
}, vi = (r, t, s) => {
  r.removeEventListener(t, s);
}, Sr = (r) => !!r.llEvLisnrs, bi = (r, t, s) => {
  Sr(r) || (r.llEvLisnrs = {});
  const o = r.tagName === "VIDEO" ? "loadeddata" : "load";
  zr(r, o, t), zr(r, "error", s);
}, er = (r) => {
  if (!Sr(r))
    return;
  const t = r.llEvLisnrs;
  for (let s in t) {
    const o = t[s];
    vi(r, s, o);
  }
  delete r.llEvLisnrs;
}, Ps = (r, t, s) => {
  Gn(r), br(s, -1), ti(s), $t(r, t.class_loading), t.unobserve_completed && ze(r, s);
}, yi = (r, t, s, o) => {
  const l = vr(t);
  Ps(t, s, o), ie(t, s.class_loaded), qt(t, bs), Ut(s.callback_loaded, t, o), l || Os(s, o);
}, Si = (r, t, s, o) => {
  const l = vr(t);
  Ps(t, s, o), ie(t, s.class_error), qt(t, gr), Ut(s.callback_error, t, o), s.restore_on_error && Xt(t, be), l || Os(s, o);
}, wr = (r, t, s) => {
  const o = xs(r) || r;
  if (Sr(o))
    return;
  bi(o, (d) => {
    yi(d, r, t, s), er(o);
  }, (d) => {
    Si(d, r, t, s), er(o);
  });
}, wi = (r, t, s) => {
  qn(r), wr(r, t, s), si(r), ui(r, t, s), di(r, t, s), hi(r, t, s);
}, _i = (r, t, s) => {
  wr(r, t, s), pi(r, t, s);
}, _r = (r, t, s) => {
  mi(r) ? _i(r, t, s) : wi(r, t, s);
}, xi = (r, t, s) => {
  r.setAttribute("loading", "lazy"), wr(r, t, s), fi(r, t), qt(r, Ss);
}, Hr = (r) => {
  r.removeAttribute(Pt), r.removeAttribute(hr), r.removeAttribute(fr);
}, ki = (r) => {
  yr(r, (t) => {
    Hr(t);
  }), Hr(r);
}, Ns = (r) => {
  yr(r, (t) => {
    Xt(t, be);
  }), Xt(r, be);
}, Di = (r) => {
  Cs(r, (t) => {
    Xt(t, He);
  }), Xt(r, Es), r.load();
}, Ci = (r) => {
  Xt(r, He);
}, Ei = (r) => {
  Xt(r, Ms);
}, Mi = {
  IMG: Ns,
  IFRAME: Ci,
  VIDEO: Di,
  OBJECT: Ei
}, $i = (r) => {
  const t = Mi[r.tagName];
  if (!t) {
    ni(r);
    return;
  }
  t(r);
}, Ti = (r, t) => {
  mr(r) || vr(r) || ($t(r, t.class_entered), $t(r, t.class_exited), $t(r, t.class_applied), $t(r, t.class_loading), $t(r, t.class_loaded), $t(r, t.class_error));
}, Ii = (r, t) => {
  $i(r), Ti(r, t), Be(r), Ts(r);
}, Ai = (r, t, s, o) => {
  s.cancel_on_exit && Wn(r) && r.tagName === "IMG" && (er(r), ki(r), Ns(r), $t(r, s.class_loading), br(o, -1), Be(r), Ut(s.callback_cancel, r, t, o));
}, Li = (r, t, s, o) => {
  const l = Fn(r);
  qt(r, Kn), ie(r, s.class_entered), $t(r, s.class_exited), Qn(r, s, o), Ut(s.callback_enter, r, t, o), !l && _r(r, s, o);
}, Oi = (r, t, s, o) => {
  mr(r) || (ie(r, s.class_exited), Ai(r, t, s, o), Ut(s.callback_exit, r, t, o));
}, Pi = ["IMG", "IFRAME", "VIDEO"], js = (r) => r.use_native && "loading" in HTMLImageElement.prototype, Ni = (r, t, s) => {
  r.forEach((o) => {
    Pi.indexOf(o.tagName) !== -1 && xi(o, t, s);
  }), ks(s, 0);
}, ji = (r) => r.isIntersecting || r.intersectionRatio > 0, Ri = (r) => ({
  root: r.container === document ? null : r.container,
  rootMargin: r.thresholds || r.threshold + "px"
}), Vi = (r, t, s) => {
  r.forEach(
    (o) => ji(o) ? Li(o.target, o, t, s) : Oi(o.target, o, t, s)
  );
}, Bi = (r, t) => {
  t.forEach((s) => {
    r.observe(s);
  });
}, zi = (r, t) => {
  Jn(r), Bi(r, t);
}, Hi = (r, t) => {
  !hs || js(r) || (t._observer = new IntersectionObserver((s) => {
    Vi(s, r, t);
  }, Ri(r)));
}, Rs = (r) => Array.prototype.slice.call(r), Ne = (r) => r.container.querySelectorAll(r.elements_selector), Ui = (r) => Rs(r).filter(mr), Ki = (r) => Xn(r), Yi = (r) => Rs(r).filter(Ki), Ur = (r, t) => Ui(r || Ne(t)), Wi = (r, t) => {
  Yi(Ne(r)).forEach((o) => {
    $t(o, r.class_error), Be(o);
  }), t.update();
}, Xi = (r, t) => {
  Ht && (t._onlineHandler = () => {
    Wi(r, t);
  }, window.addEventListener("online", t._onlineHandler));
}, Zi = (r) => {
  Ht && window.removeEventListener("online", r._onlineHandler);
}, xe = function(r, t) {
  const s = gs(r);
  this._settings = s, this.loadingCount = 0, Hi(s, this), Xi(s, this), this.update(t);
};
xe.prototype = {
  update: function(r) {
    const t = this._settings, s = Ur(r, t);
    if (ks(this, s.length), ds || !hs) {
      this.loadAll(s);
      return;
    }
    if (js(t)) {
      Ni(s, t, this);
      return;
    }
    zi(this._observer, s);
  },
  destroy: function() {
    this._observer && this._observer.disconnect(), Zi(this), Ne(this._settings).forEach((r) => {
      Ts(r);
    }), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, delete this.toLoadCount;
  },
  loadAll: function(r) {
    const t = this._settings;
    Ur(r, t).forEach((o) => {
      ze(o, this), _r(o, t, this);
    });
  },
  restoreAll: function() {
    const r = this._settings;
    Ne(r).forEach((t) => {
      Ii(t, r);
    });
  }
};
xe.load = (r, t) => {
  const s = gs(t);
  _r(r, s);
};
xe.resetStatus = (r) => {
  Be(r);
};
Ht && Un(xe, window.lazyLoadOptions);
const Fi = { class: "relative flex-auto flex flex-col overflow-hidden" }, qi = {
  key: 0,
  class: "grid grid-cols-12 border-b border-neutral-300 border-gray-200 dark:border-gray-700 text-xs select-none"
}, Gi = { class: "absolute" }, Ji = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "absolute h-6 w-6 md:h-12 md:w-12 m-auto stroke-neutral-500 fill-white dark:fill-gray-700 dark:stroke-gray-600 z-10",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ f("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
  })
], -1), Qi = { class: "text-neutral-700 dark:text-neutral-300 p-1 absolute text-center top-4 right-[-2rem] md:top-5 md:right-[-2.4rem] z-20 text-xs" }, ta = ["onDblclick", "onContextmenu", "data-type", "data-item", "data-index"], ea = { class: "grid grid-cols-12 items-center" }, ra = { class: "flex col-span-7 items-center" }, sa = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, oa = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), na = [
  oa
], ia = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, aa = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), la = [
  aa
], ca = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, ua = { class: "col-span-5 overflow-ellipsis overflow-hidden whitespace-nowrap" }, da = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], ha = { class: "grid grid-cols-12 items-center" }, fa = { class: "flex col-span-7 items-center" }, pa = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ga = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), ma = [
  ga
], va = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ba = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), ya = [
  ba
], Sa = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, wa = { class: "col-span-2 text-center" }, _a = { class: "col-span-3 overflow-ellipsis overflow-hidden whitespace-nowrap" }, xa = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], ka = { class: "relative" }, Da = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-10 w-10 md:h-12 md:w-12 m-auto fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Ca = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Ea = [
  Ca
], Ma = ["data-src", "alt"], $a = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-10 w-10 md:h-12 md:w-12 m-auto text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Ta = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Ia = [
  Ta
], Aa = {
  key: 3,
  class: "absolute hidden md:block top-1/2 w-full text-center text-neutral-500"
}, La = { class: "break-all" }, Oa = {
  name: "VFExplorer"
}, Pa = /* @__PURE__ */ Object.assign(Oa, {
  props: {
    view: String,
    data: Object,
    search: Object
  },
  setup(r) {
    const t = r, s = P("emitter"), { setStore: o, getStore: l } = P("storage"), i = P("adapter"), d = (A) => A == null ? void 0 : A.substring(0, 3), g = (A) => A.replace(/((?=([\w\W]{0,14}))([\w\W]{8,})([\w\W]{8,}))/, "$2..$4"), a = L(null), v = L(null), p = L(0), b = L(null), { t: S } = P("i18n"), $ = Math.floor(Math.random() * 2 ** 32), I = L(l("full-screen", !1)), T = new xe();
    s.on("vf-fullscreen-toggle", () => {
      a.value.style.height = null, I.value = !I.value, o("full-screen", I.value);
    });
    const M = L("");
    s.on("vf-search-query", ({ newQuery: A }) => {
      M.value = A, A ? s.emit("vf-fetch", {
        params: {
          q: "search",
          adapter: t.data.adapter,
          path: t.data.dirname,
          filter: A
        },
        onSuccess: (R) => {
          R.files.length || s.emit("vf-toast-push", { label: S("No search result found.") });
        }
      }) : s.emit("vf-fetch", { params: { q: "index", adapter: t.data.adapter, path: t.data.dirname } });
    });
    let B = null;
    const V = () => {
      B && clearTimeout(B);
    }, j = L(!0), H = (A) => {
      A.touches.length > 1 && (j.value ? (b.value.stop(), s.emit("vf-toast-push", { label: S("Drag&Drop: off") })) : (b.value.start(), s.emit("vf-toast-push", { label: S("Drag&Drop: on") }), s.emit("vf-explorer-update")), j.value = !j.value);
    }, X = (A) => {
      B = setTimeout(() => {
        const R = new MouseEvent("contextmenu", {
          bubbles: !0,
          cancelable: !1,
          view: window,
          button: 2,
          buttons: 0,
          clientX: A.target.getBoundingClientRect().x,
          clientY: A.target.getBoundingClientRect().y
        });
        A.target.dispatchEvent(R);
      }, 500);
    }, k = (A) => {
      A.type == "dir" ? (s.emit("vf-search-exit"), s.emit("vf-fetch", { params: { q: "index", adapter: t.data.adapter, path: A.path } })) : s.emit("vf-modal-show", { type: "preview", adapter: t.data.adapter, item: A });
    }, N = Le({ active: !1, column: "", order: "" }), G = (A = !0) => {
      let R = [...t.data.files], O = N.column, tt = N.order == "asc" ? 1 : -1;
      if (!A)
        return R;
      const U = (_t, yt) => typeof _t == "string" && typeof yt == "string" ? _t.toLowerCase().localeCompare(yt.toLowerCase()) : _t < yt ? -1 : _t > yt ? 1 : 0;
      return N.active && (R = R.slice().sort((_t, yt) => U(_t[O], yt[O]) * tt)), R;
    }, ot = (A) => {
      N.active && N.column == A ? (N.active = N.order == "asc", N.column = A, N.order = "desc") : (N.active = !0, N.column = A, N.order = "asc");
    }, rt = () => b.value.getSelection().map((A) => JSON.parse(A.dataset.item)), ut = (A, R) => {
      if (A.altKey || A.ctrlKey || A.metaKey)
        return A.preventDefault(), !1;
      A.dataTransfer.setDragImage(v.value, 0, 15), A.dataTransfer.effectAllowed = "all", A.dataTransfer.dropEffect = "copy", A.dataTransfer.setData("items", JSON.stringify(rt()));
    }, bt = (A, R) => {
      A.preventDefault();
      let O = JSON.parse(A.dataTransfer.getData("items"));
      if (O.find((tt) => tt.storage != i.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      s.emit("vf-modal-show", { type: "move", items: { from: O, to: R } });
    }, pt = (A, R) => {
      A.preventDefault(), !R || R.type !== "dir" || b.value.getSelection().find((O) => O == A.currentTarget) ? (A.dataTransfer.dropEffect = "none", A.dataTransfer.effectAllowed = "none") : A.dataTransfer.dropEffect = "copy";
    };
    return Et(() => {
      b.value = new Tn({
        area: a.value,
        keyboardDrag: !1,
        selectedClass: "vf-explorer-selected",
        selectorClass: "vf-explorer-selector"
      }), s.on("vf-explorer-update", () => Ve(() => {
        b.value.clearSelection(), b.value.setSelectables(document.getElementsByClassName("vf-item-" + $));
      })), b.value.subscribe("predragstart", ({ event: A, isDragging: R }) => {
        if (R)
          p.value = b.value.getSelection().length, b.value.break();
        else {
          const O = A.target.offsetWidth - A.offsetX, tt = A.target.offsetHeight - A.offsetY;
          O < 15 && tt < 15 && (b.value.clearSelection(), b.value.break());
        }
      }), b.value.subscribe("predragmove", ({ isDragging: A }) => {
        A && b.value.break();
      }), b.value.subscribe("callback", ({ items: A, event: R, isDragging: O }) => {
        s.emit("vf-nodes-selected", rt()), p.value = b.value.getSelection().length;
      });
    }), Oo(() => {
      b.value.Area.reset(), b.value.SelectorArea.updatePos(), T.update();
    }), Et(() => {
      Re(() => t.view, () => s.emit("vf-explorer-update"));
    }), (A, R) => (_(), C("div", Fi, [
      r.view == "list" || M.value.length ? (_(), C("div", qi, [
        f("div", {
          onClick: R[0] || (R[0] = (O) => ot("basename")),
          class: "col-span-7 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center pl-1"
        }, [
          et(E(x(S)("Name")) + " ", 1),
          vt(Ct(Te, {
            direction: N.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [me, N.active && N.column == "basename"]
          ])
        ]),
        M.value.length ? Z("", !0) : (_(), C("div", {
          key: 0,
          onClick: R[1] || (R[1] = (O) => ot("file_size")),
          class: "col-span-2 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l border-r dark:border-gray-700"
        }, [
          et(E(x(S)("Size")) + " ", 1),
          vt(Ct(Te, {
            direction: N.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [me, N.active && N.column == "file_size"]
          ])
        ])),
        M.value.length ? Z("", !0) : (_(), C("div", {
          key: 1,
          onClick: R[2] || (R[2] = (O) => ot("last_modified")),
          class: "col-span-3 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center"
        }, [
          et(E(x(S)("Date")) + " ", 1),
          vt(Ct(Te, {
            direction: N.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [me, N.active && N.column == "last_modified"]
          ])
        ])),
        M.value.length ? (_(), C("div", {
          key: 2,
          onClick: R[3] || (R[3] = (O) => ot("path")),
          class: "col-span-5 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l dark:border-gray-700"
        }, [
          et(E(x(S)("Filepath")) + " ", 1),
          vt(Ct(Te, {
            direction: N.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [me, N.active && N.column == "path"]
          ])
        ])) : Z("", !0)
      ])) : Z("", !0),
      f("div", Gi, [
        f("div", {
          ref_key: "dragImage",
          ref: v,
          class: "absolute -z-50 -top-96"
        }, [
          Ji,
          f("div", Qi, E(p.value), 1)
        ], 512)
      ]),
      f("div", {
        onTouchstart: H,
        onContextmenu: R[10] || (R[10] = Wt((O) => x(s).emit("vf-contextmenu-show", { event: O, area: a.value, items: rt() }), ["self", "prevent"])),
        class: ct([I.value ? "" : "resize-y", "h-full w-full text-xs vf-selector-area min-h-[150px] overflow-auto p-1 z-0"]),
        ref_key: "selectorArea",
        ref: a
      }, [
        M.value.length ? (_(!0), C(lt, { key: 0 }, wt(G(), (O, tt) => (_(), C("div", {
          onDblclick: (U) => k(O),
          onTouchstart: R[4] || (R[4] = (U) => X(U)),
          onTouchend: R[5] || (R[5] = (U) => V()),
          onContextmenu: Wt((U) => x(s).emit("vf-contextmenu-show", { event: U, area: a.value, items: rt(), target: O }), ["prevent"]),
          class: ct(["vf-item-" + x($), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": O.type,
          "data-item": JSON.stringify(O),
          "data-index": tt
        }, [
          f("div", ea, [
            f("div", ra, [
              O.type == "dir" ? (_(), C("svg", sa, na)) : (_(), C("svg", ia, la)),
              f("span", ca, E(O.basename), 1)
            ]),
            f("div", ua, E(O.path), 1)
          ])
        ], 42, ta))), 256)) : Z("", !0),
        r.view == "list" && !M.value.length ? (_(!0), C(lt, { key: 1 }, wt(G(), (O, tt) => (_(), C("div", {
          draggable: "true",
          onDblclick: (U) => k(O),
          onTouchstart: R[6] || (R[6] = (U) => X(U)),
          onTouchend: R[7] || (R[7] = (U) => V()),
          onContextmenu: Wt((U) => x(s).emit("vf-contextmenu-show", { event: U, area: a.value, items: rt(), target: O }), ["prevent"]),
          onDragstart: (U) => ut(U),
          onDragover: (U) => pt(U, O),
          onDrop: (U) => bt(U, O),
          class: ct(["vf-item-" + x($), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": O.type,
          "data-item": JSON.stringify(O),
          "data-index": tt
        }, [
          f("div", ha, [
            f("div", fa, [
              O.type == "dir" ? (_(), C("svg", pa, ma)) : (_(), C("svg", va, ya)),
              f("span", Sa, E(O.basename), 1)
            ]),
            f("div", wa, E(O.file_size ? x(cs)(O.file_size) : ""), 1),
            f("div", _a, E(x(us)(O.last_modified)), 1)
          ])
        ], 42, da))), 256)) : Z("", !0),
        r.view == "grid" && !M.value.length ? (_(!0), C(lt, { key: 2 }, wt(G(!1), (O, tt) => (_(), C("div", {
          draggable: "true",
          onDblclick: (U) => k(O),
          onTouchstart: R[8] || (R[8] = (U) => X(U)),
          onTouchend: R[9] || (R[9] = (U) => V()),
          onContextmenu: Wt((U) => x(s).emit("vf-contextmenu-show", { event: U, area: a.value, items: rt(), target: O }), ["prevent"]),
          onDragstart: (U) => ut(U),
          onDragover: (U) => pt(U, O),
          onDrop: (U) => bt(U, O),
          class: ct(["vf-item-" + x($), "border border-transparent hover:bg-neutral-50 m-1 dark:hover:bg-gray-700 inline-flex w-[5.5rem] h-20 md:w-24 text-center justify-center select-none"]),
          "data-type": O.type,
          "data-item": JSON.stringify(O),
          "data-index": tt
        }, [
          f("div", null, [
            f("div", ka, [
              O.type == "dir" ? (_(), C("svg", Da, Ea)) : (O.mime_type ?? "").startsWith("image") ? (_(), C("img", {
                key: 1,
                class: "lazy h-10 md:h-12 m-auto",
                "data-src": x(tr)(x(i).value, O.path),
                alt: O.basename
              }, null, 8, Ma)) : (_(), C("svg", $a, Ia)),
              !(O.mime_type ?? "").startsWith("image") && O.type != "dir" ? (_(), C("div", Aa, E(d(O.extension)), 1)) : Z("", !0)
            ]),
            f("span", La, E(g(O.basename)), 1)
          ])
        ], 42, xa))), 256)) : Z("", !0)
      ], 34),
      Ct(Bn)
    ]));
  }
}), Na = "1.2.8", ja = { class: "p-1 text-xs border-t border-neutral-300 dark:border-gray-700/50 flex justify-between select-none" }, Ra = { class: "flex leading-5 items-center" }, Va = ["aria-label"], Ba = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ f("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
  })
], -1), za = [
  Ba
], Ha = ["value"], Ua = { class: "ml-3" }, Ka = { key: 0 }, Ya = { class: "ml-1" }, Wa = { class: "flex leading-5 items-center" }, Xa = {
  value: "",
  disabled: ""
}, Za = /* @__PURE__ */ Po('<option value="en">English</option><option value="fr">French (Français)</option><option value="de">German (Deutsch)</option><option value="tr">Hebrew (עִברִית)</option><option value="hi">Hindi (हिंदी)</option><option value="fa">Persian (فارسی)</option><option value="ru">Russian (Pусский)</option><option value="sv">Swedish (Svenska)</option><option value="tr">Turkish (Türkçe)</option>', 9), Fa = ["aria-label"], qa = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 stroke-slate-500 cursor-pointer",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [
  /* @__PURE__ */ f("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  })
], -1), Ga = [
  qa
], Ja = {
  name: "VFStatusbar"
}, Qa = /* @__PURE__ */ Object.assign(Ja, {
  props: {
    data: Object
  },
  setup(r) {
    const t = P("emitter"), { getStore: s, setStore: o } = P("storage"), l = L(0), i = P("adapter"), { t: d, changeLocale: g } = P("i18n"), a = L(s("locale", "")), v = () => {
      t.emit("vf-search-exit"), t.emit("vf-fetch", { params: { q: "index", adapter: i.value } }), o("adapter", i.value);
    };
    t.on("vf-nodes-selected", (b) => {
      l.value = b.length;
    });
    const p = L("");
    return t.on("vf-search-query", ({ newQuery: b }) => {
      p.value = b;
    }), (b, S) => (_(), C("div", ja, [
      f("div", Ra, [
        f("div", {
          class: "mx-2",
          "aria-label": x(d)("Storage"),
          "data-microtip-position": "top-right",
          role: "tooltip"
        }, za, 8, Va),
        vt(f("select", {
          "onUpdate:modelValue": S[0] || (S[0] = ($) => as(i) ? i.value = $ : null),
          onChange: v,
          class: "py-0.5 text-sm text-slate-500 dark:text-neutral-50 dark:bg-gray-700 rounded pl-2 pr-8"
        }, [
          (_(!0), C(lt, null, wt(r.data.storages, ($) => (_(), C("option", { value: $ }, E($), 9, Ha))), 256))
        ], 544), [
          [jr, x(i)]
        ]),
        f("div", Ua, [
          p.value.length ? (_(), C("span", Ka, E(r.data.files.length) + " items found. ", 1)) : Z("", !0),
          f("span", Ya, E(l.value > 0 ? l.value + " " + x(d)("item(s) selected.") : ""), 1)
        ])
      ]),
      f("div", Wa, [
        vt(f("select", {
          "onUpdate:modelValue": S[1] || (S[1] = ($) => a.value = $),
          onChange: S[2] || (S[2] = ($) => x(g)($.target.value)),
          class: "py-0.5 text-sm text-slate-500 dark:text-neutral-50 dark:bg-gray-700 rounded pl-2 pr-8 mr-3"
        }, [
          f("option", Xa, E(x(d)("Language")), 1),
          Za
        ], 544), [
          [jr, a.value]
        ]),
        f("span", {
          class: "mr-1",
          "aria-label": x(d)("About"),
          "data-microtip-position": "top-left",
          role: "tooltip",
          onClick: S[3] || (S[3] = ($) => x(t).emit("vf-modal-show", { type: "message", title: "Vuefinder " + x(Na), message: x(d)("Vuefinder is a file manager component for vue 3.") }))
        }, Ga, 8, Fa)
      ])
    ]));
  }
}), tl = (r, t = 0, s = !1) => {
  let o;
  return (...l) => {
    s && !o && r(...l), clearTimeout(o), o = setTimeout(() => {
      r(...l);
    }, t);
  };
}, el = (r, t, s) => {
  const o = L(r);
  return No((i, d) => ({
    get() {
      return i(), o.value;
    },
    set: tl(
      (g) => {
        o.value = g, d();
      },
      t,
      s
    )
  }));
}, rl = { class: "flex p-1.5 bg-neutral-100 dark:bg-gray-800 border-t border-b border-neutral-300 dark:border-gray-700/50 items-center select-none text-xs" }, sl = ["aria-label"], ol = /* @__PURE__ */ f("path", {
  "fill-rule": "evenodd",
  d: "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",
  "clip-rule": "evenodd"
}, null, -1), nl = [
  ol
], il = ["aria-label"], al = /* @__PURE__ */ f("path", { d: "M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" }, null, -1), ll = [
  al
], cl = ["aria-label"], ul = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), dl = [
  ul
], hl = /* @__PURE__ */ f("path", { d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" }, null, -1), fl = [
  hl
], pl = { class: "flex leading-5" }, gl = /* @__PURE__ */ f("span", { class: "text-neutral-300 dark:text-gray-600 mx-0.5" }, "/", -1), ml = ["title", "onClick"], vl = {
  key: 0,
  class: "animate-spin p-1 h-6 w-6 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, bl = /* @__PURE__ */ f("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), yl = /* @__PURE__ */ f("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), Sl = [
  bl,
  yl
], wl = {
  key: 3,
  class: "relative flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full"
}, _l = /* @__PURE__ */ f("svg", {
  class: "h-6 w-6 p-1 m-auto stroke-gray-400 fill-gray-100 dark:stroke-gray-400 dark:fill-gray-400/20",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ f("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
  })
], -1), xl = /* @__PURE__ */ f("div", { class: "w-full" }, null, -1), kl = ["placeholder"], Dl = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), Cl = [
  Dl
], El = {
  name: "VFBreadcrumb"
}, Ml = /* @__PURE__ */ Object.assign(El, {
  props: {
    data: Object
  },
  setup(r) {
    const t = P("emitter");
    P("storage");
    const s = P("adapter"), o = L(null), l = L([]), i = L(!1), d = L(null), g = r, { t: a } = P("i18n"), v = P("loadingState");
    t.on("vf-explorer-update", () => {
      let V = [], j = [];
      o.value = g.data.dirname ?? s.value + "://", o.value.length == 0 && (l.value = []), o.value.replace(s.value + "://", "").split("/").forEach(function(H) {
        V.push(H), V.join("/") != "" && j.push({
          basename: H,
          name: H,
          path: s.value + "://" + V.join("/"),
          type: "dir"
        });
      }), j.length > 4 && (j = j.slice(-5), j[0].name = ".."), l.value = j;
    });
    const p = () => {
      i.value = !1, S.value = "";
    };
    t.on("vf-search-exit", () => {
      p();
    });
    const b = () => {
      i.value = !0, Ve(() => d.value.focus());
    }, S = el("", 400), $ = () => v.value;
    Re(S, (V) => {
      t.emit("vf-toast-clear"), t.emit("vf-search-query", { newQuery: V });
    });
    const I = () => l.value.length && !i.value, T = (V) => {
      V.preventDefault();
      let j = JSON.parse(V.dataTransfer.getData("items"));
      if (j.find((H) => H.storage != s.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      t.emit("vf-modal-show", {
        type: "move",
        items: { from: j, to: l.value[l.value.length - 2] ?? { path: s.value + "://" } }
      });
    }, M = (V) => {
      V.preventDefault(), I() ? V.dataTransfer.dropEffect = "copy" : (V.dataTransfer.dropEffect = "none", V.dataTransfer.effectAllowed = "none");
    }, B = () => {
      S.value == "" && p();
    };
    return (V, j) => (_(), C("div", rl, [
      f("span", {
        "aria-label": x(a)("Go up a directory"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (_(), C("svg", {
          onDragover: j[0] || (j[0] = (H) => M(H)),
          onDrop: j[1] || (j[1] = (H) => T(H)),
          onClick: j[2] || (j[2] = (H) => {
            var X;
            return !I() || x(t).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter, path: ((X = l.value[l.value.length - 2]) == null ? void 0 : X.path) ?? x(s) + "://" } });
          }),
          class: ct(["h-6 w-6 p-0.5 rounded", I() ? "text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer" : "text-gray-400 dark:text-neutral-500"]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, nl, 34))
      ], 8, sl),
      $() ? (_(), C("span", {
        key: 1,
        "aria-label": x(a)("Cancel"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (_(), C("svg", {
          onClick: j[4] || (j[4] = (H) => x(t).emit("vf-fetch-abort")),
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor",
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer"
        }, dl))
      ], 8, cl)) : (_(), C("span", {
        key: 0,
        "aria-label": x(a)("Refresh"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (_(), C("svg", {
          onClick: j[3] || (j[3] = (H) => {
            x(t).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter, path: r.data.dirname } });
          }),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "-40 -40 580 580",
          fill: "currentColor"
        }, ll))
      ], 8, il)),
      i.value ? (_(), C("div", wl, [
        _l,
        xl,
        vt(f("input", {
          ref_key: "searchInput",
          ref: d,
          onKeydown: oe(p, ["esc"]),
          onBlur: B,
          "onUpdate:modelValue": j[6] || (j[6] = (H) => as(S) ? S.value = H : null),
          placeholder: x(a)("Search anything.."),
          class: "absolute ml-4 pt-1 pb-0 px-2 border-0 ring-0 outline-0 text-gray-600 focus:ring-transparent focus:border-transparent dark:focus:ring-transparent dark:focus:border-transparent dark:text-gray-300 bg-transparent",
          type: "text"
        }, null, 40, kl), [
          [ne, x(S)]
        ]),
        (_(), C("svg", {
          class: "w-6 h-6 cursor-pointer",
          onClick: p,
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor"
        }, Cl))
      ])) : (_(), C("div", {
        key: 2,
        class: "group flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full",
        onClick: Wt(b, ["self"])
      }, [
        (_(), C("svg", {
          onClick: j[5] || (j[5] = (H) => x(t).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter } })),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-gray-800 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, fl)),
        f("div", pl, [
          (_(!0), C(lt, null, wt(l.value, (H, X) => (_(), C("div", { key: X }, [
            gl,
            f("span", {
              class: "px-1.5 py-1 text-slate-700 dark:text-slate-200 hover:bg-neutral-100 dark:hover:bg-gray-800 rounded cursor-pointer",
              title: H.basename,
              onClick: (k) => x(t).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter, path: H.path } })
            }, E(H.name), 9, ml)
          ]))), 128))
        ]),
        $() ? (_(), C("svg", vl, Sl)) : Z("", !0)
      ]))
    ]));
  }
}), $l = ["onClick"], Tl = /* @__PURE__ */ f("span", { class: "px-1" }, null, -1), Il = {
  name: "VFContextMenu"
}, Al = /* @__PURE__ */ Object.assign(Il, {
  props: {
    current: Object
  },
  setup(r) {
    const t = P("emitter"), s = L(null), { apiUrl: o } = At(), l = r, i = Le({
      active: !1,
      items: [],
      positions: {
        left: 0,
        top: 0
      }
    }), d = L([]);
    t.on("vf-context-selected", (S) => {
      d.value = S;
    });
    const { t: g } = P("i18n"), a = {
      newfolder: {
        title: () => g("New Folder"),
        action: () => {
          t.emit("vf-modal-show", { type: "new-folder" });
        }
      },
      delete: {
        title: () => g("Delete"),
        action: () => {
          t.emit("vf-modal-show", { type: "delete", items: d });
        }
      },
      refresh: {
        title: () => g("Refresh"),
        action: () => {
          t.emit("vf-fetch", { params: { q: "index", adapter: l.current.adapter, path: l.current.dirname } });
        }
      },
      preview: {
        title: () => g("Preview"),
        action: () => {
          t.emit("vf-modal-show", { type: "preview", adapter: l.current.adapter, item: d.value[0] });
        }
      },
      open: {
        title: () => g("Open"),
        action: () => {
          t.emit("vf-search-exit"), t.emit("vf-fetch", { params: { q: "index", adapter: l.current.adapter, path: d.value[0].path } });
        }
      },
      openDir: {
        title: () => g("Open containing folder"),
        action: () => {
          t.emit("vf-search-exit"), t.emit("vf-fetch", { params: { q: "index", adapter: l.current.adapter, path: d.value[0].dir } });
        }
      },
      download: {
        title: () => g("Download"),
        action: () => {
          const S = o.value + "?" + Ft({ q: "download", adapter: l.current.adapter, path: d.value[0].path });
          t.emit("vf-download", S);
        }
      },
      archive: {
        title: () => g("Archive"),
        action: () => {
          t.emit("vf-modal-show", { type: "archive", items: d });
        }
      },
      unarchive: {
        title: () => g("Unarchive"),
        action: () => {
          t.emit("vf-modal-show", { type: "unarchive", items: d });
        }
      },
      rename: {
        title: () => g("Rename"),
        action: () => {
          t.emit("vf-modal-show", { type: "rename", items: d });
        }
      }
    }, v = (S) => {
      t.emit("vf-contextmenu-hide"), S.action();
    }, p = L("");
    t.on("vf-search-query", ({ newQuery: S }) => {
      p.value = S;
    }), t.on("vf-contextmenu-show", ({ event: S, area: $, items: I, target: T = null }) => {
      if (i.items = [], p.value)
        if (T)
          i.items.push(a.openDir), t.emit("vf-context-selected", [T]);
        else
          return;
      else
        !T && !p.value ? (i.items.push(a.refresh), i.items.push(a.newfolder), t.emit("vf-context-selected", [])) : I.length > 1 && I.some((M) => M.path === T.path) ? (i.items.push(a.refresh), i.items.push(a.archive), i.items.push(a.delete), t.emit("vf-context-selected", I)) : (T.type == "dir" ? i.items.push(a.open) : (i.items.push(a.preview), i.items.push(a.download)), i.items.push(a.rename), T.mime_type == "application/zip" ? i.items.push(a.unarchive) : i.items.push(a.archive), i.items.push(a.delete), t.emit("vf-context-selected", [T]));
      b(S, $);
    }), t.on("vf-contextmenu-hide", () => {
      i.active = !1;
    });
    const b = (S, $) => {
      i.active = !0, Ve(() => {
        let I = $.getBoundingClientRect(), T = S.pageX, M = S.pageY, B = s.value.offsetHeight, V = s.value.offsetWidth;
        T = I.right - S.pageX + window.scrollX < V ? T - V : T, M = I.bottom - S.pageY + window.scrollY < B ? M - B : M, i.positions = {
          left: T + "px",
          top: M + "px"
        };
      });
    };
    return (S, $) => i.active ? (_(), C("ul", {
      key: 0,
      class: "z-30 absolute text-xs bg-neutral-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-neutral-300 dark:border-gray-600 shadow rounded select-none",
      ref_key: "contextmenu",
      ref: s,
      style: jo(i.positions)
    }, [
      (_(!0), C(lt, null, wt(i.items, (I) => (_(), C("li", {
        class: "px-2 py-1.5 cursor-pointer hover:bg-neutral-200 dark:hover:bg-gray-700",
        key: I.title,
        onClick: (T) => v(I)
      }, [
        Tl,
        f("span", null, E(I.title()), 1)
      ], 8, $l))), 128))
    ], 4)) : Z("", !0);
  }
}), Ll = (r, t) => {
  const s = r[t];
  return s ? typeof s == "function" ? s() : Promise.resolve(s) : new Promise((o, l) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(l.bind(null, new Error("Unknown variable dynamic import: " + t)));
  });
};
async function Ol(r) {
  const t = await Ll(/* @__PURE__ */ Object.assign({ "../locales/de.json": () => import("./de-81b457a7.js"), "../locales/en.json": () => import("./en-ed1f1848.js"), "../locales/fa.json": () => import("./fa-49628944.js"), "../locales/he.json": () => import("./he-736e9ea8.js"), "../locales/hi.json": () => import("./hi-a0031fe7.js"), "../locales/ru.json": () => import("./ru-d8535e72.js"), "../locales/sv.json": () => import("./sv-316febc7.js"), "../locales/tr.json": () => import("./tr-6f9ffcfe.js") }), `../locales/${r}.json`);
  return JSON.parse(t.default);
}
function Pl(r, t, s) {
  const { getStore: o, setStore: l } = Qe(r), i = L({}), d = (v, p = "en") => {
    Ol(v).then((b) => {
      i.value = b, l("locale", v), l("translations", b), s.emit("vf-toast-push", { label: "The language is set to " + v });
    }).catch((b) => {
      p ? (s.emit("vf-toast-push", { label: "The selected locale is not yet supported!", type: "error" }), d(p, null)) : s.emit("vf-toast-push", { label: "Locale cannot be loaded!", type: "error" });
    });
  };
  o("locale") ? i.value = o("translations") : d(t);
  const g = (v, ...p) => p.length ? g(v = v.replace("%s", p.shift()), ...p) : v;
  function a(v, ...p) {
    return i.value.hasOwnProperty(v) ? g(i.value[v], ...p) : g(v, ...p);
  }
  return { t: a, changeLocale: d };
}
const Nl = { class: "vuefinder" }, jl = /* @__PURE__ */ f("iframe", {
  id: "download_frame",
  style: { display: "none" }
}, null, -1), Rl = {
  name: "VueFinder"
}, Vl = /* @__PURE__ */ Object.assign(Rl, {
  props: {
    url: {
      type: [String]
    },
    id: {
      type: String,
      default: "vf"
    },
    dark: {
      type: Boolean,
      default: !1
    },
    usePropDarkMode: {
      type: Boolean,
      default: !1
    },
    locale: {
      type: String,
      default: "en"
    },
    maxHeight: {
      type: String,
      default: "600px"
    },
    maxFileSize: {
      type: String,
      default: "10mb"
    },
    postData: {
      type: Object,
      default: {}
    }
  },
  setup(r) {
    const t = r, s = Bo(), { setStore: o, getStore: l } = Qe(t.id), i = L(l("adapter"));
    jt("emitter", s), jt("storage", Qe(t.id)), jt("postData", t.postData), jt("adapter", i), jt("maxFileSize", t.maxFileSize), jt("usePropDarkMode", t.usePropDarkMode);
    const d = Pl(t.id, t.locale, s);
    jt("i18n", d);
    const { apiUrl: g, setApiUrl: a } = At();
    a(t.url);
    const v = Le({ adapter: i.value, storages: [], dirname: ".", files: [] }), p = L(l("viewport", "grid")), b = t.usePropDarkMode ? Ro(() => t.dark) : L(l("darkMode", t.dark));
    s.on("vf-darkMode-toggle", () => {
      b.value = !b.value, o("darkMode", b.value);
    });
    const S = L(!1);
    jt("loadingState", S);
    const $ = L(l("full-screen", !1));
    s.on("vf-fullscreen-toggle", () => {
      $.value = !$.value, o("full-screen", $.value);
    }), s.on("vf-view-toggle", (B) => {
      p.value = B;
    });
    const I = Le({
      active: !1,
      type: "delete",
      data: {}
    });
    s.on("vf-modal-close", () => {
      I.active = !1;
    }), s.on("vf-modal-show", (B) => {
      I.active = !0, I.type = B.type, I.data = B;
    });
    const T = (B) => {
      Object.assign(v, B), s.emit("vf-nodes-selected", {}), s.emit("vf-explorer-update");
    };
    let M;
    return s.on("vf-fetch-abort", () => {
      M.abort(), S.value = !1;
    }), s.on("vf-fetch", ({ params: B, onSuccess: V = null, onError: j = null }) => {
      ["index", "search"].includes(B.q) && (M && M.abort(), S.value = !0), M = new AbortController();
      const H = M.signal;
      Pe(g.value, { params: B, signal: H }).then((X) => {
        i.value = X.adapter, ["index", "search"].includes(B.q) && (S.value = !1), s.emit("vf-modal-close"), T(X), V(X);
      }).catch((X) => {
        j && j(X);
      }).finally(() => {
      });
    }), s.on("vf-download", (B) => {
      document.getElementById("download_frame").src = B, s.emit("vf-modal-close");
    }), Et(() => {
      s.emit("vf-fetch", { params: { q: "index", adapter: i.value } });
    }), (B, V) => (_(), C("div", Nl, [
      f("div", {
        class: ct(x(b) ? "dark" : "")
      }, [
        f("div", {
          class: "fixed w-screen inset-0 z-20 border flex flex-col bg-white dark:bg-gray-800 text-gray-700 dark:text-neutral-400 border-neutral-300 dark:border-gray-900 min-w-min select-none",
          onMousedown: V[0] || (V[0] = (j) => x(s).emit("vf-contextmenu-hide")),
          onTouchstart: V[1] || (V[1] = (j) => x(s).emit("vf-contextmenu-hide"))
        }, [
          Ct(Cn, { data: v }, null, 8, ["data"]),
          Ct(Ml, { data: v }, null, 8, ["data"]),
          Ct(Pa, {
            view: p.value,
            data: v
          }, null, 8, ["view", "data"]),
          Ct(Qa, { data: v }, null, 8, ["data"])
        ], 32),
        I.active ? (_(), q(Vo("v-f-modal-" + I.type), {
          key: 0,
          selection: I.data,
          current: v
        }, null, 8, ["selection", "current"])) : Z("", !0),
        Ct(Al, { current: v }, null, 8, ["current"]),
        jl
      ], 2)
    ]));
  }
}), Bl = /* @__PURE__ */ f("div", { class: "fixed inset-0 bg-gray-500 dark:bg-gray-600 dark:bg-opacity-75 bg-opacity-75 transition-opacity" }, null, -1), zl = { class: "fixed z-10 inset-0 overflow-hidden" }, Hl = { class: "relative bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-4xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl w-full" }, Ul = { class: "bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, Kl = { class: "bg-gray-50 dark:bg-gray-800 dark:border-t dark:border-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, Lt = {
  __name: "ModalLayout",
  setup(r) {
    const t = P("emitter");
    return Et(() => {
      const s = document.querySelector(".v-f-modal input");
      s && s.focus();
    }), (s, o) => (_(), C("div", {
      class: "v-f-modal relative z-30",
      "aria-labelledby": "modal-title",
      role: "dialog",
      "aria-modal": "true",
      onKeyup: o[1] || (o[1] = oe((l) => x(t).emit("vf-modal-close"), ["esc"])),
      tabindex: "0"
    }, [
      Bl,
      f("div", zl, [
        f("div", {
          class: "flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0",
          onMousedown: o[0] || (o[0] = Wt((l) => x(t).emit("vf-modal-close"), ["self"]))
        }, [
          f("div", Hl, [
            f("div", Ul, [
              Je(s.$slots, "default")
            ]),
            f("div", Kl, [
              Je(s.$slots, "buttons")
            ])
          ])
        ], 32)
      ])
    ], 32));
  }
}, Yl = ["aria-label"], Wl = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-5 h-5"
}, [
  /* @__PURE__ */ f("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Xl = [
  Wl
], Zl = {
  name: "Message"
}, Ot = /* @__PURE__ */ Object.assign(Zl, {
  props: {
    error: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["hidden"],
  setup(r, { emit: t }) {
    var a;
    const { t: s } = P("i18n"), o = L(!1), l = L(null), i = L((a = l.value) == null ? void 0 : a.strMessage), d = t;
    Re(i, () => o.value = !1);
    const g = () => {
      d("hidden"), o.value = !0;
    };
    return (v, p) => (_(), C("div", null, [
      o.value ? Z("", !0) : (_(), C("div", {
        key: 0,
        ref_key: "strMessage",
        ref: l,
        class: ct(["flex mt-1 p-1 px-2 rounded text-sm", r.error ? "bg-red-100 text-red-600" : "bg-emerald-100 text-emerald-600"])
      }, [
        Je(v.$slots, "default"),
        f("div", {
          class: "ml-auto cursor-pointer",
          onClick: g,
          "aria-label": x(s)("Close"),
          "data-microtip-position": "top-left",
          role: "tooltip"
        }, Xl, 8, Yl)
      ], 2))
    ]));
  }
}), Fl = { class: "sm:flex sm:items-start" }, ql = /* @__PURE__ */ f("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ f("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-red-600 dark:stroke-red-200",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ f("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    })
  ])
], -1), Gl = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Jl = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Ql = { class: "mt-2" }, tc = { class: "text-sm text-gray-500" }, ec = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, rc = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, sc = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), oc = [
  sc
], nc = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ic = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), ac = [
  ic
], lc = { class: "ml-1.5" }, cc = { class: "m-auto font-bold text-red-500 text-sm dark:text-red-200 text-center" }, uc = {
  name: "VFModalDelete"
}, dc = /* @__PURE__ */ Object.assign(uc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = P("emitter");
    P("storage");
    const s = P("adapter"), { t: o } = P("i18n"), l = r, i = L(l.selection.items), d = L(""), g = () => {
      i.value.length && t.emit("vf-fetch", {
        params: {
          q: "delete",
          adapter: s.value,
          path: l.current.dirname,
          items: JSON.stringify(i.value.map(({ path: a, type: v }) => ({ path: a, type: v })))
        },
        onSuccess: () => {
          t.emit("vf-toast-push", { label: o("Files deleted.") });
        },
        onError: (a) => {
          d.value = o(a.message);
        }
      });
    };
    return (a, v) => (_(), q(Lt, null, {
      buttons: F(() => [
        f("button", {
          type: "button",
          onClick: g,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Yes, Delete!")), 1),
        f("button", {
          type: "button",
          onClick: v[1] || (v[1] = (p) => x(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Cancel")), 1),
        f("div", cc, E(x(o)("This action cannot be undone.")), 1)
      ]),
      default: F(() => [
        f("div", Fl, [
          ql,
          f("div", Gl, [
            f("h3", Jl, E(x(o)("Delete files")), 1),
            f("div", Ql, [
              f("p", tc, E(x(o)("Are you sure you want to delete these files?")), 1),
              (_(!0), C(lt, null, wt(i.value, (p) => (_(), C("p", ec, [
                p.type == "dir" ? (_(), C("svg", rc, oc)) : (_(), C("svg", nc, ac)),
                f("span", lc, E(p.basename), 1)
              ]))), 256)),
              d.value.length ? (_(), q(Ot, {
                key: 0,
                onHidden: v[0] || (v[0] = (p) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  et(E(d.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), hc = { class: "sm:flex sm:items-start" }, fc = /* @__PURE__ */ f("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ f("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "stroke-width": "2"
  }, [
    /* @__PURE__ */ f("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ])
], -1), pc = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, gc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, mc = { class: "mt-2" }, vc = { class: "text-sm text-gray-500" }, bc = {
  name: "VFModalMessage"
}, yc = /* @__PURE__ */ Object.assign(bc, {
  props: {
    selection: Object
  },
  setup(r) {
    const t = P("emitter"), { t: s } = P("i18n");
    return (o, l) => (_(), q(Lt, null, {
      buttons: F(() => [
        f("button", {
          type: "button",
          onClick: l[0] || (l[0] = (i) => x(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(s)("Close")), 1)
      ]),
      default: F(() => {
        var i, d;
        return [
          f("div", hc, [
            fc,
            f("div", pc, [
              f("h3", gc, E(((i = r.selection) == null ? void 0 : i.title) ?? "Title"), 1),
              f("div", mc, [
                f("p", vc, E(((d = r.selection) == null ? void 0 : d.message) ?? "Message") + ".", 1)
              ])
            ])
          ])
        ];
      }),
      _: 1
    }));
  }
}), Sc = { class: "sm:flex sm:items-start" }, wc = /* @__PURE__ */ f("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ f("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ f("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
    })
  ])
], -1), _c = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, xc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, kc = { class: "mt-2" }, Dc = { class: "text-sm text-gray-500" }, Cc = ["placeholder"], Ec = {
  name: "VFModalNewFolder"
}, Mc = /* @__PURE__ */ Object.assign(Ec, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = P("emitter");
    P("storage");
    const s = P("adapter"), { t: o } = P("i18n"), l = r, i = L(""), d = L(""), g = () => {
      i.value != "" && t.emit("vf-fetch", {
        params: {
          q: "newfolder",
          adapter: s.value,
          path: l.current.dirname,
          name: i.value
        },
        onSuccess: () => {
          t.emit("vf-toast-push", { label: o("%s is created.", i.value) });
        },
        onError: (a) => {
          d.value = o(a.message);
        }
      });
    };
    return (a, v) => (_(), q(Lt, null, {
      buttons: F(() => [
        f("button", {
          type: "button",
          onClick: g,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Create")), 1),
        f("button", {
          type: "button",
          onClick: v[2] || (v[2] = (p) => x(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Cancel")), 1)
      ]),
      default: F(() => [
        f("div", Sc, [
          wc,
          f("div", _c, [
            f("h3", xc, E(x(o)("New Folder")), 1),
            f("div", kc, [
              f("p", Dc, E(x(o)("Create a new folder")), 1),
              vt(f("input", {
                "onUpdate:modelValue": v[0] || (v[0] = (p) => i.value = p),
                onKeyup: oe(g, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(o)("Folder Name"),
                type: "text"
              }, null, 40, Cc), [
                [ne, i.value]
              ]),
              d.value.length ? (_(), q(Ot, {
                key: 0,
                onHidden: v[1] || (v[1] = (p) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  et(E(d.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), $c = { class: "sm:flex sm:items-start" }, Tc = /* @__PURE__ */ f("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ f("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ f("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    })
  ])
], -1), Ic = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Ac = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Lc = { class: "mt-2" }, Oc = { class: "text-sm text-gray-500" }, Pc = ["placeholder"], Nc = {
  name: "VFModalNewFile"
}, jc = /* @__PURE__ */ Object.assign(Nc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = P("emitter");
    P("storage");
    const s = P("adapter"), { t: o } = P("i18n"), l = r, i = L(""), d = L(""), g = () => {
      i.value != "" && t.emit("vf-fetch", {
        params: {
          q: "newfile",
          adapter: s.value,
          path: l.current.dirname,
          name: i.value
        },
        onSuccess: () => {
          t.emit("vf-toast-push", { label: o("%s is created.", i.value) });
        },
        onError: (a) => {
          d.value = o(a.message);
        }
      });
    };
    return (a, v) => (_(), q(Lt, null, {
      buttons: F(() => [
        f("button", {
          type: "button",
          onClick: g,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Create")), 1),
        f("button", {
          type: "button",
          onClick: v[2] || (v[2] = (p) => x(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Cancel")), 1)
      ]),
      default: F(() => [
        f("div", $c, [
          Tc,
          f("div", Ic, [
            f("h3", Ac, E(x(o)("New File")), 1),
            f("div", Lc, [
              f("p", Oc, E(x(o)("Create a new file")), 1),
              vt(f("input", {
                "onUpdate:modelValue": v[0] || (v[0] = (p) => i.value = p),
                onKeyup: oe(g, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(o)("File Name"),
                type: "text"
              }, null, 40, Pc), [
                [ne, i.value]
              ]),
              d.value.length ? (_(), q(Ot, {
                key: 0,
                onHidden: v[1] || (v[1] = (p) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  et(E(d.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Rc = { class: "flex" }, Vc = ["aria-label"], Bc = { class: "ml-auto mb-2" }, zc = {
  key: 0,
  class: "p-2 border font-normal whitespace-pre-wrap border-gray-200 dark:border-gray-700/50 dark:text-gray-200 rounded min-h-[200px] max-h-[60vh] text-xs overflow-auto"
}, Hc = { key: 1 }, Uc = {
  __name: "Text",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const s = t, o = L(""), l = L(""), i = L(null), d = L(!1), { apiUrl: g } = At(), a = r, v = L(""), p = L(!1), { t: b } = P("i18n");
    Et(() => {
      Pe(g.value, {
        params: { q: "preview", adapter: a.selection.adapter, path: a.selection.item.path },
        json: !1
      }).then((T) => {
        o.value = T, s("load");
      });
    });
    const S = () => {
      d.value = !d.value, l.value = o.value, d.value == !0 && Ve(() => {
        i.value.focus();
      });
    }, $ = P("postData"), I = () => {
      v.value = "", p.value = !1, Pe(g.value, {
        method: "POST",
        params: Object.assign($, {
          q: "save",
          adapter: a.selection.adapter,
          path: a.selection.item.path,
          content: l.value
        }),
        json: !1
      }).then((T) => {
        v.value = b("Updated."), o.value = T, s("load"), d.value = !d.value;
      }).catch((T) => {
        v.value = b(T.message), p.value = !0;
      });
    };
    return (T, M) => (_(), C(lt, null, [
      f("div", Rc, [
        f("div", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, E(r.selection.item.basename), 9, Vc),
        f("div", Bc, [
          d.value ? (_(), C("button", {
            key: 0,
            onClick: I,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, E(x(b)("Save")), 1)) : Z("", !0),
          f("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: M[0] || (M[0] = (B) => S())
          }, E(d.value ? x(b)("Cancel") : x(b)("Edit")), 1)
        ])
      ]),
      f("div", null, [
        d.value ? (_(), C("div", Hc, [
          vt(f("textarea", {
            ref_key: "editInput",
            ref: i,
            "onUpdate:modelValue": M[1] || (M[1] = (B) => l.value = B),
            class: "w-full p-2 rounded dark:bg-gray-700 dark:text-gray-200 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:selection:bg-gray-500 min-h-[200px] max-h-[60vh] text-xs",
            name: "text",
            id: "",
            cols: "30",
            rows: "10"
          }, null, 512), [
            [ne, l.value]
          ])
        ])) : (_(), C("pre", zc, E(o.value), 1)),
        v.value.length ? (_(), q(Ot, {
          key: 2,
          onHidden: M[2] || (M[2] = (B) => v.value = ""),
          error: p.value
        }, {
          default: F(() => [
            et(E(v.value), 1)
          ]),
          _: 1
        }, 8, ["error"])) : Z("", !0)
      ])
    ], 64));
  }
};
/*!
 * Cropper.js v1.6.1
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2023-09-17T03:44:19.860Z
 */
function Kr(r, t) {
  var s = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    t && (o = o.filter(function(l) {
      return Object.getOwnPropertyDescriptor(r, l).enumerable;
    })), s.push.apply(s, o);
  }
  return s;
}
function Vs(r) {
  for (var t = 1; t < arguments.length; t++) {
    var s = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kr(Object(s), !0).forEach(function(o) {
      Wc(r, o, s[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s)) : Kr(Object(s)).forEach(function(o) {
      Object.defineProperty(r, o, Object.getOwnPropertyDescriptor(s, o));
    });
  }
  return r;
}
function rr(r) {
  "@babel/helpers - typeof";
  return rr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, rr(r);
}
function Kc(r, t) {
  if (!(r instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Yr(r, t) {
  for (var s = 0; s < t.length; s++) {
    var o = t[s];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(r, zs(o.key), o);
  }
}
function Yc(r, t, s) {
  return t && Yr(r.prototype, t), s && Yr(r, s), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
function Wc(r, t, s) {
  return t = zs(t), t in r ? Object.defineProperty(r, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[t] = s, r;
}
function Bs(r) {
  return Xc(r) || Zc(r) || Fc(r) || qc();
}
function Xc(r) {
  if (Array.isArray(r))
    return sr(r);
}
function Zc(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null)
    return Array.from(r);
}
function Fc(r, t) {
  if (r) {
    if (typeof r == "string")
      return sr(r, t);
    var s = Object.prototype.toString.call(r).slice(8, -1);
    if (s === "Object" && r.constructor && (s = r.constructor.name), s === "Map" || s === "Set")
      return Array.from(r);
    if (s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
      return sr(r, t);
  }
}
function sr(r, t) {
  (t == null || t > r.length) && (t = r.length);
  for (var s = 0, o = new Array(t); s < t; s++)
    o[s] = r[s];
  return o;
}
function qc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gc(r, t) {
  if (typeof r != "object" || r === null)
    return r;
  var s = r[Symbol.toPrimitive];
  if (s !== void 0) {
    var o = s.call(r, t || "default");
    if (typeof o != "object")
      return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(r);
}
function zs(r) {
  var t = Gc(r, "string");
  return typeof t == "symbol" ? t : String(t);
}
var Ke = typeof window < "u" && typeof window.document < "u", It = Ke ? window : {}, xr = Ke && It.document.documentElement ? "ontouchstart" in It.document.documentElement : !1, kr = Ke ? "PointerEvent" in It : !1, J = "cropper", Dr = "all", Hs = "crop", Us = "move", Ks = "zoom", Kt = "e", Yt = "w", Jt = "s", Rt = "n", he = "ne", fe = "nw", pe = "se", ge = "sw", or = "".concat(J, "-crop"), Wr = "".concat(J, "-disabled"), ht = "".concat(J, "-hidden"), Xr = "".concat(J, "-hide"), Jc = "".concat(J, "-invisible"), je = "".concat(J, "-modal"), nr = "".concat(J, "-move"), ye = "".concat(J, "Action"), Ie = "".concat(J, "Preview"), Cr = "crop", Ys = "move", Ws = "none", ir = "crop", ar = "cropend", lr = "cropmove", cr = "cropstart", Zr = "dblclick", Qc = xr ? "touchstart" : "mousedown", tu = xr ? "touchmove" : "mousemove", eu = xr ? "touchend touchcancel" : "mouseup", Fr = kr ? "pointerdown" : Qc, qr = kr ? "pointermove" : tu, Gr = kr ? "pointerup pointercancel" : eu, Jr = "ready", Qr = "resize", ts = "wheel", ur = "zoom", es = "image/jpeg", ru = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/, su = /^data:/, ou = /^data:image\/jpeg;base64,/, nu = /^img|canvas$/i, Xs = 200, Zs = 100, rs = {
  // Define the view mode of the cropper
  viewMode: 0,
  // 0, 1, 2, 3
  // Define the dragging mode of the cropper
  dragMode: Cr,
  // 'crop', 'move' or 'none'
  // Define the initial aspect ratio of the crop box
  initialAspectRatio: NaN,
  // Define the aspect ratio of the crop box
  aspectRatio: NaN,
  // An object with the previous cropping result data
  data: null,
  // A selector for adding extra containers to preview
  preview: "",
  // Re-render the cropper when resize the window
  responsive: !0,
  // Restore the cropped area after resize the window
  restore: !0,
  // Check if the current image is a cross-origin image
  checkCrossOrigin: !0,
  // Check the current image's Exif Orientation information
  checkOrientation: !0,
  // Show the black modal
  modal: !0,
  // Show the dashed lines for guiding
  guides: !0,
  // Show the center indicator for guiding
  center: !0,
  // Show the white modal to highlight the crop box
  highlight: !0,
  // Show the grid background
  background: !0,
  // Enable to crop the image automatically when initialize
  autoCrop: !0,
  // Define the percentage of automatic cropping area when initializes
  autoCropArea: 0.8,
  // Enable to move the image
  movable: !0,
  // Enable to rotate the image
  rotatable: !0,
  // Enable to scale the image
  scalable: !0,
  // Enable to zoom the image
  zoomable: !0,
  // Enable to zoom the image by dragging touch
  zoomOnTouch: !0,
  // Enable to zoom the image by wheeling mouse
  zoomOnWheel: !0,
  // Define zoom ratio when zoom the image by wheeling mouse
  wheelZoomRatio: 0.1,
  // Enable to move the crop box
  cropBoxMovable: !0,
  // Enable to resize the crop box
  cropBoxResizable: !0,
  // Toggle drag mode between "crop" and "move" when click twice on the cropper
  toggleDragModeOnDblclick: !0,
  // Size limitation
  minCanvasWidth: 0,
  minCanvasHeight: 0,
  minCropBoxWidth: 0,
  minCropBoxHeight: 0,
  minContainerWidth: Xs,
  minContainerHeight: Zs,
  // Shortcuts of events
  ready: null,
  cropstart: null,
  cropmove: null,
  cropend: null,
  crop: null,
  zoom: null
}, iu = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>', au = Number.isNaN || It.isNaN;
function K(r) {
  return typeof r == "number" && !au(r);
}
var ss = function(t) {
  return t > 0 && t < 1 / 0;
};
function Fe(r) {
  return typeof r > "u";
}
function Zt(r) {
  return rr(r) === "object" && r !== null;
}
var lu = Object.prototype.hasOwnProperty;
function Qt(r) {
  if (!Zt(r))
    return !1;
  try {
    var t = r.constructor, s = t.prototype;
    return t && s && lu.call(s, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function dt(r) {
  return typeof r == "function";
}
var cu = Array.prototype.slice;
function Fs(r) {
  return Array.from ? Array.from(r) : cu.call(r);
}
function st(r, t) {
  return r && dt(t) && (Array.isArray(r) || K(r.length) ? Fs(r).forEach(function(s, o) {
    t.call(r, s, o, r);
  }) : Zt(r) && Object.keys(r).forEach(function(s) {
    t.call(r, r[s], s, r);
  })), r;
}
var Q = Object.assign || function(t) {
  for (var s = arguments.length, o = new Array(s > 1 ? s - 1 : 0), l = 1; l < s; l++)
    o[l - 1] = arguments[l];
  return Zt(t) && o.length > 0 && o.forEach(function(i) {
    Zt(i) && Object.keys(i).forEach(function(d) {
      t[d] = i[d];
    });
  }), t;
}, uu = /\.\d*(?:0|9){12}\d*$/;
function ee(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return uu.test(r) ? Math.round(r * t) / t : r;
}
var du = /^width|height|left|top|marginLeft|marginTop$/;
function Vt(r, t) {
  var s = r.style;
  st(t, function(o, l) {
    du.test(l) && K(o) && (o = "".concat(o, "px")), s[l] = o;
  });
}
function hu(r, t) {
  return r.classList ? r.classList.contains(t) : r.className.indexOf(t) > -1;
}
function at(r, t) {
  if (t) {
    if (K(r.length)) {
      st(r, function(o) {
        at(o, t);
      });
      return;
    }
    if (r.classList) {
      r.classList.add(t);
      return;
    }
    var s = r.className.trim();
    s ? s.indexOf(t) < 0 && (r.className = "".concat(s, " ").concat(t)) : r.className = t;
  }
}
function Tt(r, t) {
  if (t) {
    if (K(r.length)) {
      st(r, function(s) {
        Tt(s, t);
      });
      return;
    }
    if (r.classList) {
      r.classList.remove(t);
      return;
    }
    r.className.indexOf(t) >= 0 && (r.className = r.className.replace(t, ""));
  }
}
function te(r, t, s) {
  if (t) {
    if (K(r.length)) {
      st(r, function(o) {
        te(o, t, s);
      });
      return;
    }
    s ? at(r, t) : Tt(r, t);
  }
}
var fu = /([a-z\d])([A-Z])/g;
function Er(r) {
  return r.replace(fu, "$1-$2").toLowerCase();
}
function dr(r, t) {
  return Zt(r[t]) ? r[t] : r.dataset ? r.dataset[t] : r.getAttribute("data-".concat(Er(t)));
}
function Se(r, t, s) {
  Zt(s) ? r[t] = s : r.dataset ? r.dataset[t] = s : r.setAttribute("data-".concat(Er(t)), s);
}
function pu(r, t) {
  if (Zt(r[t]))
    try {
      delete r[t];
    } catch {
      r[t] = void 0;
    }
  else if (r.dataset)
    try {
      delete r.dataset[t];
    } catch {
      r.dataset[t] = void 0;
    }
  else
    r.removeAttribute("data-".concat(Er(t)));
}
var qs = /\s\s*/, Gs = function() {
  var r = !1;
  if (Ke) {
    var t = !1, s = function() {
    }, o = Object.defineProperty({}, "once", {
      get: function() {
        return r = !0, t;
      },
      /**
       * This setter can fix a `TypeError` in strict mode
       * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
       * @param {boolean} value - The value to set
       */
      set: function(i) {
        t = i;
      }
    });
    It.addEventListener("test", s, o), It.removeEventListener("test", s, o);
  }
  return r;
}();
function Dt(r, t, s) {
  var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, l = s;
  t.trim().split(qs).forEach(function(i) {
    if (!Gs) {
      var d = r.listeners;
      d && d[i] && d[i][s] && (l = d[i][s], delete d[i][s], Object.keys(d[i]).length === 0 && delete d[i], Object.keys(d).length === 0 && delete r.listeners);
    }
    r.removeEventListener(i, l, o);
  });
}
function St(r, t, s) {
  var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, l = s;
  t.trim().split(qs).forEach(function(i) {
    if (o.once && !Gs) {
      var d = r.listeners, g = d === void 0 ? {} : d;
      l = function() {
        delete g[i][s], r.removeEventListener(i, l, o);
        for (var v = arguments.length, p = new Array(v), b = 0; b < v; b++)
          p[b] = arguments[b];
        s.apply(r, p);
      }, g[i] || (g[i] = {}), g[i][s] && r.removeEventListener(i, g[i][s], o), g[i][s] = l, r.listeners = g;
    }
    r.addEventListener(i, l, o);
  });
}
function re(r, t, s) {
  var o;
  return dt(Event) && dt(CustomEvent) ? o = new CustomEvent(t, {
    detail: s,
    bubbles: !0,
    cancelable: !0
  }) : (o = document.createEvent("CustomEvent"), o.initCustomEvent(t, !0, !0, s)), r.dispatchEvent(o);
}
function Js(r) {
  var t = r.getBoundingClientRect();
  return {
    left: t.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: t.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
var qe = It.location, gu = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function os(r) {
  var t = r.match(gu);
  return t !== null && (t[1] !== qe.protocol || t[2] !== qe.hostname || t[3] !== qe.port);
}
function ns(r) {
  var t = "timestamp=".concat((/* @__PURE__ */ new Date()).getTime());
  return r + (r.indexOf("?") === -1 ? "?" : "&") + t;
}
function ve(r) {
  var t = r.rotate, s = r.scaleX, o = r.scaleY, l = r.translateX, i = r.translateY, d = [];
  K(l) && l !== 0 && d.push("translateX(".concat(l, "px)")), K(i) && i !== 0 && d.push("translateY(".concat(i, "px)")), K(t) && t !== 0 && d.push("rotate(".concat(t, "deg)")), K(s) && s !== 1 && d.push("scaleX(".concat(s, ")")), K(o) && o !== 1 && d.push("scaleY(".concat(o, ")"));
  var g = d.length ? d.join(" ") : "none";
  return {
    WebkitTransform: g,
    msTransform: g,
    transform: g
  };
}
function mu(r) {
  var t = Vs({}, r), s = 0;
  return st(r, function(o, l) {
    delete t[l], st(t, function(i) {
      var d = Math.abs(o.startX - i.startX), g = Math.abs(o.startY - i.startY), a = Math.abs(o.endX - i.endX), v = Math.abs(o.endY - i.endY), p = Math.sqrt(d * d + g * g), b = Math.sqrt(a * a + v * v), S = (b - p) / p;
      Math.abs(S) > Math.abs(s) && (s = S);
    });
  }), s;
}
function Ae(r, t) {
  var s = r.pageX, o = r.pageY, l = {
    endX: s,
    endY: o
  };
  return t ? l : Vs({
    startX: s,
    startY: o
  }, l);
}
function vu(r) {
  var t = 0, s = 0, o = 0;
  return st(r, function(l) {
    var i = l.startX, d = l.startY;
    t += i, s += d, o += 1;
  }), t /= o, s /= o, {
    pageX: t,
    pageY: s
  };
}
function Bt(r) {
  var t = r.aspectRatio, s = r.height, o = r.width, l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain", i = ss(o), d = ss(s);
  if (i && d) {
    var g = s * t;
    l === "contain" && g > o || l === "cover" && g < o ? s = o / t : o = s * t;
  } else
    i ? s = o / t : d && (o = s * t);
  return {
    width: o,
    height: s
  };
}
function bu(r) {
  var t = r.width, s = r.height, o = r.degree;
  if (o = Math.abs(o) % 180, o === 90)
    return {
      width: s,
      height: t
    };
  var l = o % 90 * Math.PI / 180, i = Math.sin(l), d = Math.cos(l), g = t * d + s * i, a = t * i + s * d;
  return o > 90 ? {
    width: a,
    height: g
  } : {
    width: g,
    height: a
  };
}
function yu(r, t, s, o) {
  var l = t.aspectRatio, i = t.naturalWidth, d = t.naturalHeight, g = t.rotate, a = g === void 0 ? 0 : g, v = t.scaleX, p = v === void 0 ? 1 : v, b = t.scaleY, S = b === void 0 ? 1 : b, $ = s.aspectRatio, I = s.naturalWidth, T = s.naturalHeight, M = o.fillColor, B = M === void 0 ? "transparent" : M, V = o.imageSmoothingEnabled, j = V === void 0 ? !0 : V, H = o.imageSmoothingQuality, X = H === void 0 ? "low" : H, k = o.maxWidth, N = k === void 0 ? 1 / 0 : k, G = o.maxHeight, ot = G === void 0 ? 1 / 0 : G, rt = o.minWidth, ut = rt === void 0 ? 0 : rt, bt = o.minHeight, pt = bt === void 0 ? 0 : bt, gt = document.createElement("canvas"), A = gt.getContext("2d"), R = Bt({
    aspectRatio: $,
    width: N,
    height: ot
  }), O = Bt({
    aspectRatio: $,
    width: ut,
    height: pt
  }, "cover"), tt = Math.min(R.width, Math.max(O.width, I)), U = Math.min(R.height, Math.max(O.height, T)), _t = Bt({
    aspectRatio: l,
    width: N,
    height: ot
  }), yt = Bt({
    aspectRatio: l,
    width: ut,
    height: pt
  }, "cover"), ke = Math.min(_t.width, Math.max(yt.width, i)), De = Math.min(_t.height, Math.max(yt.height, d)), Ye = [-ke / 2, -De / 2, ke, De];
  return gt.width = ee(tt), gt.height = ee(U), A.fillStyle = B, A.fillRect(0, 0, tt, U), A.save(), A.translate(tt / 2, U / 2), A.rotate(a * Math.PI / 180), A.scale(p, S), A.imageSmoothingEnabled = j, A.imageSmoothingQuality = X, A.drawImage.apply(A, [r].concat(Bs(Ye.map(function(Ce) {
    return Math.floor(ee(Ce));
  })))), A.restore(), gt;
}
var Qs = String.fromCharCode;
function Su(r, t, s) {
  var o = "";
  s += t;
  for (var l = t; l < s; l += 1)
    o += Qs(r.getUint8(l));
  return o;
}
var wu = /^data:.*,/;
function _u(r) {
  var t = r.replace(wu, ""), s = atob(t), o = new ArrayBuffer(s.length), l = new Uint8Array(o);
  return st(l, function(i, d) {
    l[d] = s.charCodeAt(d);
  }), o;
}
function xu(r, t) {
  for (var s = [], o = 8192, l = new Uint8Array(r); l.length > 0; )
    s.push(Qs.apply(null, Fs(l.subarray(0, o)))), l = l.subarray(o);
  return "data:".concat(t, ";base64,").concat(btoa(s.join("")));
}
function ku(r) {
  var t = new DataView(r), s;
  try {
    var o, l, i;
    if (t.getUint8(0) === 255 && t.getUint8(1) === 216)
      for (var d = t.byteLength, g = 2; g + 1 < d; ) {
        if (t.getUint8(g) === 255 && t.getUint8(g + 1) === 225) {
          l = g;
          break;
        }
        g += 1;
      }
    if (l) {
      var a = l + 4, v = l + 10;
      if (Su(t, a, 4) === "Exif") {
        var p = t.getUint16(v);
        if (o = p === 18761, (o || p === 19789) && t.getUint16(v + 2, o) === 42) {
          var b = t.getUint32(v + 4, o);
          b >= 8 && (i = v + b);
        }
      }
    }
    if (i) {
      var S = t.getUint16(i, o), $, I;
      for (I = 0; I < S; I += 1)
        if ($ = i + I * 12 + 2, t.getUint16($, o) === 274) {
          $ += 8, s = t.getUint16($, o), t.setUint16($, 1, o);
          break;
        }
    }
  } catch {
    s = 1;
  }
  return s;
}
function Du(r) {
  var t = 0, s = 1, o = 1;
  switch (r) {
    case 2:
      s = -1;
      break;
    case 3:
      t = -180;
      break;
    case 4:
      o = -1;
      break;
    case 5:
      t = 90, o = -1;
      break;
    case 6:
      t = 90;
      break;
    case 7:
      t = 90, s = -1;
      break;
    case 8:
      t = -90;
      break;
  }
  return {
    rotate: t,
    scaleX: s,
    scaleY: o
  };
}
var Cu = {
  render: function() {
    this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox();
  },
  initContainer: function() {
    var t = this.element, s = this.options, o = this.container, l = this.cropper, i = Number(s.minContainerWidth), d = Number(s.minContainerHeight);
    at(l, ht), Tt(t, ht);
    var g = {
      width: Math.max(o.offsetWidth, i >= 0 ? i : Xs),
      height: Math.max(o.offsetHeight, d >= 0 ? d : Zs)
    };
    this.containerData = g, Vt(l, {
      width: g.width,
      height: g.height
    }), at(t, ht), Tt(l, ht);
  },
  // Canvas (image wrapper)
  initCanvas: function() {
    var t = this.containerData, s = this.imageData, o = this.options.viewMode, l = Math.abs(s.rotate) % 180 === 90, i = l ? s.naturalHeight : s.naturalWidth, d = l ? s.naturalWidth : s.naturalHeight, g = i / d, a = t.width, v = t.height;
    t.height * g > t.width ? o === 3 ? a = t.height * g : v = t.width / g : o === 3 ? v = t.width / g : a = t.height * g;
    var p = {
      aspectRatio: g,
      naturalWidth: i,
      naturalHeight: d,
      width: a,
      height: v
    };
    this.canvasData = p, this.limited = o === 1 || o === 2, this.limitCanvas(!0, !0), p.width = Math.min(Math.max(p.width, p.minWidth), p.maxWidth), p.height = Math.min(Math.max(p.height, p.minHeight), p.maxHeight), p.left = (t.width - p.width) / 2, p.top = (t.height - p.height) / 2, p.oldLeft = p.left, p.oldTop = p.top, this.initialCanvasData = Q({}, p);
  },
  limitCanvas: function(t, s) {
    var o = this.options, l = this.containerData, i = this.canvasData, d = this.cropBoxData, g = o.viewMode, a = i.aspectRatio, v = this.cropped && d;
    if (t) {
      var p = Number(o.minCanvasWidth) || 0, b = Number(o.minCanvasHeight) || 0;
      g > 1 ? (p = Math.max(p, l.width), b = Math.max(b, l.height), g === 3 && (b * a > p ? p = b * a : b = p / a)) : g > 0 && (p ? p = Math.max(p, v ? d.width : 0) : b ? b = Math.max(b, v ? d.height : 0) : v && (p = d.width, b = d.height, b * a > p ? p = b * a : b = p / a));
      var S = Bt({
        aspectRatio: a,
        width: p,
        height: b
      });
      p = S.width, b = S.height, i.minWidth = p, i.minHeight = b, i.maxWidth = 1 / 0, i.maxHeight = 1 / 0;
    }
    if (s)
      if (g > (v ? 0 : 1)) {
        var $ = l.width - i.width, I = l.height - i.height;
        i.minLeft = Math.min(0, $), i.minTop = Math.min(0, I), i.maxLeft = Math.max(0, $), i.maxTop = Math.max(0, I), v && this.limited && (i.minLeft = Math.min(d.left, d.left + (d.width - i.width)), i.minTop = Math.min(d.top, d.top + (d.height - i.height)), i.maxLeft = d.left, i.maxTop = d.top, g === 2 && (i.width >= l.width && (i.minLeft = Math.min(0, $), i.maxLeft = Math.max(0, $)), i.height >= l.height && (i.minTop = Math.min(0, I), i.maxTop = Math.max(0, I))));
      } else
        i.minLeft = -i.width, i.minTop = -i.height, i.maxLeft = l.width, i.maxTop = l.height;
  },
  renderCanvas: function(t, s) {
    var o = this.canvasData, l = this.imageData;
    if (s) {
      var i = bu({
        width: l.naturalWidth * Math.abs(l.scaleX || 1),
        height: l.naturalHeight * Math.abs(l.scaleY || 1),
        degree: l.rotate || 0
      }), d = i.width, g = i.height, a = o.width * (d / o.naturalWidth), v = o.height * (g / o.naturalHeight);
      o.left -= (a - o.width) / 2, o.top -= (v - o.height) / 2, o.width = a, o.height = v, o.aspectRatio = d / g, o.naturalWidth = d, o.naturalHeight = g, this.limitCanvas(!0, !1);
    }
    (o.width > o.maxWidth || o.width < o.minWidth) && (o.left = o.oldLeft), (o.height > o.maxHeight || o.height < o.minHeight) && (o.top = o.oldTop), o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth), o.height = Math.min(Math.max(o.height, o.minHeight), o.maxHeight), this.limitCanvas(!1, !0), o.left = Math.min(Math.max(o.left, o.minLeft), o.maxLeft), o.top = Math.min(Math.max(o.top, o.minTop), o.maxTop), o.oldLeft = o.left, o.oldTop = o.top, Vt(this.canvas, Q({
      width: o.width,
      height: o.height
    }, ve({
      translateX: o.left,
      translateY: o.top
    }))), this.renderImage(t), this.cropped && this.limited && this.limitCropBox(!0, !0);
  },
  renderImage: function(t) {
    var s = this.canvasData, o = this.imageData, l = o.naturalWidth * (s.width / s.naturalWidth), i = o.naturalHeight * (s.height / s.naturalHeight);
    Q(o, {
      width: l,
      height: i,
      left: (s.width - l) / 2,
      top: (s.height - i) / 2
    }), Vt(this.image, Q({
      width: o.width,
      height: o.height
    }, ve(Q({
      translateX: o.left,
      translateY: o.top
    }, o)))), t && this.output();
  },
  initCropBox: function() {
    var t = this.options, s = this.canvasData, o = t.aspectRatio || t.initialAspectRatio, l = Number(t.autoCropArea) || 0.8, i = {
      width: s.width,
      height: s.height
    };
    o && (s.height * o > s.width ? i.height = i.width / o : i.width = i.height * o), this.cropBoxData = i, this.limitCropBox(!0, !0), i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth), i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight), i.width = Math.max(i.minWidth, i.width * l), i.height = Math.max(i.minHeight, i.height * l), i.left = s.left + (s.width - i.width) / 2, i.top = s.top + (s.height - i.height) / 2, i.oldLeft = i.left, i.oldTop = i.top, this.initialCropBoxData = Q({}, i);
  },
  limitCropBox: function(t, s) {
    var o = this.options, l = this.containerData, i = this.canvasData, d = this.cropBoxData, g = this.limited, a = o.aspectRatio;
    if (t) {
      var v = Number(o.minCropBoxWidth) || 0, p = Number(o.minCropBoxHeight) || 0, b = g ? Math.min(l.width, i.width, i.width + i.left, l.width - i.left) : l.width, S = g ? Math.min(l.height, i.height, i.height + i.top, l.height - i.top) : l.height;
      v = Math.min(v, l.width), p = Math.min(p, l.height), a && (v && p ? p * a > v ? p = v / a : v = p * a : v ? p = v / a : p && (v = p * a), S * a > b ? S = b / a : b = S * a), d.minWidth = Math.min(v, b), d.minHeight = Math.min(p, S), d.maxWidth = b, d.maxHeight = S;
    }
    s && (g ? (d.minLeft = Math.max(0, i.left), d.minTop = Math.max(0, i.top), d.maxLeft = Math.min(l.width, i.left + i.width) - d.width, d.maxTop = Math.min(l.height, i.top + i.height) - d.height) : (d.minLeft = 0, d.minTop = 0, d.maxLeft = l.width - d.width, d.maxTop = l.height - d.height));
  },
  renderCropBox: function() {
    var t = this.options, s = this.containerData, o = this.cropBoxData;
    (o.width > o.maxWidth || o.width < o.minWidth) && (o.left = o.oldLeft), (o.height > o.maxHeight || o.height < o.minHeight) && (o.top = o.oldTop), o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth), o.height = Math.min(Math.max(o.height, o.minHeight), o.maxHeight), this.limitCropBox(!1, !0), o.left = Math.min(Math.max(o.left, o.minLeft), o.maxLeft), o.top = Math.min(Math.max(o.top, o.minTop), o.maxTop), o.oldLeft = o.left, o.oldTop = o.top, t.movable && t.cropBoxMovable && Se(this.face, ye, o.width >= s.width && o.height >= s.height ? Us : Dr), Vt(this.cropBox, Q({
      width: o.width,
      height: o.height
    }, ve({
      translateX: o.left,
      translateY: o.top
    }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output();
  },
  output: function() {
    this.preview(), re(this.element, ir, this.getData());
  }
}, Eu = {
  initPreview: function() {
    var t = this.element, s = this.crossOrigin, o = this.options.preview, l = s ? this.crossOriginUrl : this.url, i = t.alt || "The image to preview", d = document.createElement("img");
    if (s && (d.crossOrigin = s), d.src = l, d.alt = i, this.viewBox.appendChild(d), this.viewBoxImage = d, !!o) {
      var g = o;
      typeof o == "string" ? g = t.ownerDocument.querySelectorAll(o) : o.querySelector && (g = [o]), this.previews = g, st(g, function(a) {
        var v = document.createElement("img");
        Se(a, Ie, {
          width: a.offsetWidth,
          height: a.offsetHeight,
          html: a.innerHTML
        }), s && (v.crossOrigin = s), v.src = l, v.alt = i, v.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', a.innerHTML = "", a.appendChild(v);
      });
    }
  },
  resetPreview: function() {
    st(this.previews, function(t) {
      var s = dr(t, Ie);
      Vt(t, {
        width: s.width,
        height: s.height
      }), t.innerHTML = s.html, pu(t, Ie);
    });
  },
  preview: function() {
    var t = this.imageData, s = this.canvasData, o = this.cropBoxData, l = o.width, i = o.height, d = t.width, g = t.height, a = o.left - s.left - t.left, v = o.top - s.top - t.top;
    !this.cropped || this.disabled || (Vt(this.viewBoxImage, Q({
      width: d,
      height: g
    }, ve(Q({
      translateX: -a,
      translateY: -v
    }, t)))), st(this.previews, function(p) {
      var b = dr(p, Ie), S = b.width, $ = b.height, I = S, T = $, M = 1;
      l && (M = S / l, T = i * M), i && T > $ && (M = $ / i, I = l * M, T = $), Vt(p, {
        width: I,
        height: T
      }), Vt(p.getElementsByTagName("img")[0], Q({
        width: d * M,
        height: g * M
      }, ve(Q({
        translateX: -a * M,
        translateY: -v * M
      }, t))));
    }));
  }
}, Mu = {
  bind: function() {
    var t = this.element, s = this.options, o = this.cropper;
    dt(s.cropstart) && St(t, cr, s.cropstart), dt(s.cropmove) && St(t, lr, s.cropmove), dt(s.cropend) && St(t, ar, s.cropend), dt(s.crop) && St(t, ir, s.crop), dt(s.zoom) && St(t, ur, s.zoom), St(o, Fr, this.onCropStart = this.cropStart.bind(this)), s.zoomable && s.zoomOnWheel && St(o, ts, this.onWheel = this.wheel.bind(this), {
      passive: !1,
      capture: !0
    }), s.toggleDragModeOnDblclick && St(o, Zr, this.onDblclick = this.dblclick.bind(this)), St(t.ownerDocument, qr, this.onCropMove = this.cropMove.bind(this)), St(t.ownerDocument, Gr, this.onCropEnd = this.cropEnd.bind(this)), s.responsive && St(window, Qr, this.onResize = this.resize.bind(this));
  },
  unbind: function() {
    var t = this.element, s = this.options, o = this.cropper;
    dt(s.cropstart) && Dt(t, cr, s.cropstart), dt(s.cropmove) && Dt(t, lr, s.cropmove), dt(s.cropend) && Dt(t, ar, s.cropend), dt(s.crop) && Dt(t, ir, s.crop), dt(s.zoom) && Dt(t, ur, s.zoom), Dt(o, Fr, this.onCropStart), s.zoomable && s.zoomOnWheel && Dt(o, ts, this.onWheel, {
      passive: !1,
      capture: !0
    }), s.toggleDragModeOnDblclick && Dt(o, Zr, this.onDblclick), Dt(t.ownerDocument, qr, this.onCropMove), Dt(t.ownerDocument, Gr, this.onCropEnd), s.responsive && Dt(window, Qr, this.onResize);
  }
}, $u = {
  resize: function() {
    if (!this.disabled) {
      var t = this.options, s = this.container, o = this.containerData, l = s.offsetWidth / o.width, i = s.offsetHeight / o.height, d = Math.abs(l - 1) > Math.abs(i - 1) ? l : i;
      if (d !== 1) {
        var g, a;
        t.restore && (g = this.getCanvasData(), a = this.getCropBoxData()), this.render(), t.restore && (this.setCanvasData(st(g, function(v, p) {
          g[p] = v * d;
        })), this.setCropBoxData(st(a, function(v, p) {
          a[p] = v * d;
        })));
      }
    }
  },
  dblclick: function() {
    this.disabled || this.options.dragMode === Ws || this.setDragMode(hu(this.dragBox, or) ? Ys : Cr);
  },
  wheel: function(t) {
    var s = this, o = Number(this.options.wheelZoomRatio) || 0.1, l = 1;
    this.disabled || (t.preventDefault(), !this.wheeling && (this.wheeling = !0, setTimeout(function() {
      s.wheeling = !1;
    }, 50), t.deltaY ? l = t.deltaY > 0 ? 1 : -1 : t.wheelDelta ? l = -t.wheelDelta / 120 : t.detail && (l = t.detail > 0 ? 1 : -1), this.zoom(-l * o, t)));
  },
  cropStart: function(t) {
    var s = t.buttons, o = t.button;
    if (!(this.disabled || (t.type === "mousedown" || t.type === "pointerdown" && t.pointerType === "mouse") && // No primary button (Usually the left button)
    (K(s) && s !== 1 || K(o) && o !== 0 || t.ctrlKey))) {
      var l = this.options, i = this.pointers, d;
      t.changedTouches ? st(t.changedTouches, function(g) {
        i[g.identifier] = Ae(g);
      }) : i[t.pointerId || 0] = Ae(t), Object.keys(i).length > 1 && l.zoomable && l.zoomOnTouch ? d = Ks : d = dr(t.target, ye), ru.test(d) && re(this.element, cr, {
        originalEvent: t,
        action: d
      }) !== !1 && (t.preventDefault(), this.action = d, this.cropping = !1, d === Hs && (this.cropping = !0, at(this.dragBox, je)));
    }
  },
  cropMove: function(t) {
    var s = this.action;
    if (!(this.disabled || !s)) {
      var o = this.pointers;
      t.preventDefault(), re(this.element, lr, {
        originalEvent: t,
        action: s
      }) !== !1 && (t.changedTouches ? st(t.changedTouches, function(l) {
        Q(o[l.identifier] || {}, Ae(l, !0));
      }) : Q(o[t.pointerId || 0] || {}, Ae(t, !0)), this.change(t));
    }
  },
  cropEnd: function(t) {
    if (!this.disabled) {
      var s = this.action, o = this.pointers;
      t.changedTouches ? st(t.changedTouches, function(l) {
        delete o[l.identifier];
      }) : delete o[t.pointerId || 0], s && (t.preventDefault(), Object.keys(o).length || (this.action = ""), this.cropping && (this.cropping = !1, te(this.dragBox, je, this.cropped && this.options.modal)), re(this.element, ar, {
        originalEvent: t,
        action: s
      }));
    }
  }
}, Tu = {
  change: function(t) {
    var s = this.options, o = this.canvasData, l = this.containerData, i = this.cropBoxData, d = this.pointers, g = this.action, a = s.aspectRatio, v = i.left, p = i.top, b = i.width, S = i.height, $ = v + b, I = p + S, T = 0, M = 0, B = l.width, V = l.height, j = !0, H;
    !a && t.shiftKey && (a = b && S ? b / S : 1), this.limited && (T = i.minLeft, M = i.minTop, B = T + Math.min(l.width, o.width, o.left + o.width), V = M + Math.min(l.height, o.height, o.top + o.height));
    var X = d[Object.keys(d)[0]], k = {
      x: X.endX - X.startX,
      y: X.endY - X.startY
    }, N = function(ot) {
      switch (ot) {
        case Kt:
          $ + k.x > B && (k.x = B - $);
          break;
        case Yt:
          v + k.x < T && (k.x = T - v);
          break;
        case Rt:
          p + k.y < M && (k.y = M - p);
          break;
        case Jt:
          I + k.y > V && (k.y = V - I);
          break;
      }
    };
    switch (g) {
      case Dr:
        v += k.x, p += k.y;
        break;
      case Kt:
        if (k.x >= 0 && ($ >= B || a && (p <= M || I >= V))) {
          j = !1;
          break;
        }
        N(Kt), b += k.x, b < 0 && (g = Yt, b = -b, v -= b), a && (S = b / a, p += (i.height - S) / 2);
        break;
      case Rt:
        if (k.y <= 0 && (p <= M || a && (v <= T || $ >= B))) {
          j = !1;
          break;
        }
        N(Rt), S -= k.y, p += k.y, S < 0 && (g = Jt, S = -S, p -= S), a && (b = S * a, v += (i.width - b) / 2);
        break;
      case Yt:
        if (k.x <= 0 && (v <= T || a && (p <= M || I >= V))) {
          j = !1;
          break;
        }
        N(Yt), b -= k.x, v += k.x, b < 0 && (g = Kt, b = -b, v -= b), a && (S = b / a, p += (i.height - S) / 2);
        break;
      case Jt:
        if (k.y >= 0 && (I >= V || a && (v <= T || $ >= B))) {
          j = !1;
          break;
        }
        N(Jt), S += k.y, S < 0 && (g = Rt, S = -S, p -= S), a && (b = S * a, v += (i.width - b) / 2);
        break;
      case he:
        if (a) {
          if (k.y <= 0 && (p <= M || $ >= B)) {
            j = !1;
            break;
          }
          N(Rt), S -= k.y, p += k.y, b = S * a;
        } else
          N(Rt), N(Kt), k.x >= 0 ? $ < B ? b += k.x : k.y <= 0 && p <= M && (j = !1) : b += k.x, k.y <= 0 ? p > M && (S -= k.y, p += k.y) : (S -= k.y, p += k.y);
        b < 0 && S < 0 ? (g = ge, S = -S, b = -b, p -= S, v -= b) : b < 0 ? (g = fe, b = -b, v -= b) : S < 0 && (g = pe, S = -S, p -= S);
        break;
      case fe:
        if (a) {
          if (k.y <= 0 && (p <= M || v <= T)) {
            j = !1;
            break;
          }
          N(Rt), S -= k.y, p += k.y, b = S * a, v += i.width - b;
        } else
          N(Rt), N(Yt), k.x <= 0 ? v > T ? (b -= k.x, v += k.x) : k.y <= 0 && p <= M && (j = !1) : (b -= k.x, v += k.x), k.y <= 0 ? p > M && (S -= k.y, p += k.y) : (S -= k.y, p += k.y);
        b < 0 && S < 0 ? (g = pe, S = -S, b = -b, p -= S, v -= b) : b < 0 ? (g = he, b = -b, v -= b) : S < 0 && (g = ge, S = -S, p -= S);
        break;
      case ge:
        if (a) {
          if (k.x <= 0 && (v <= T || I >= V)) {
            j = !1;
            break;
          }
          N(Yt), b -= k.x, v += k.x, S = b / a;
        } else
          N(Jt), N(Yt), k.x <= 0 ? v > T ? (b -= k.x, v += k.x) : k.y >= 0 && I >= V && (j = !1) : (b -= k.x, v += k.x), k.y >= 0 ? I < V && (S += k.y) : S += k.y;
        b < 0 && S < 0 ? (g = he, S = -S, b = -b, p -= S, v -= b) : b < 0 ? (g = pe, b = -b, v -= b) : S < 0 && (g = fe, S = -S, p -= S);
        break;
      case pe:
        if (a) {
          if (k.x >= 0 && ($ >= B || I >= V)) {
            j = !1;
            break;
          }
          N(Kt), b += k.x, S = b / a;
        } else
          N(Jt), N(Kt), k.x >= 0 ? $ < B ? b += k.x : k.y >= 0 && I >= V && (j = !1) : b += k.x, k.y >= 0 ? I < V && (S += k.y) : S += k.y;
        b < 0 && S < 0 ? (g = fe, S = -S, b = -b, p -= S, v -= b) : b < 0 ? (g = ge, b = -b, v -= b) : S < 0 && (g = he, S = -S, p -= S);
        break;
      case Us:
        this.move(k.x, k.y), j = !1;
        break;
      case Ks:
        this.zoom(mu(d), t), j = !1;
        break;
      case Hs:
        if (!k.x || !k.y) {
          j = !1;
          break;
        }
        H = Js(this.cropper), v = X.startX - H.left, p = X.startY - H.top, b = i.minWidth, S = i.minHeight, k.x > 0 ? g = k.y > 0 ? pe : he : k.x < 0 && (v -= b, g = k.y > 0 ? ge : fe), k.y < 0 && (p -= S), this.cropped || (Tt(this.cropBox, ht), this.cropped = !0, this.limited && this.limitCropBox(!0, !0));
        break;
    }
    j && (i.width = b, i.height = S, i.left = v, i.top = p, this.action = g, this.renderCropBox()), st(d, function(G) {
      G.startX = G.endX, G.startY = G.endY;
    });
  }
}, Iu = {
  // Show the crop box manually
  crop: function() {
    return this.ready && !this.cropped && !this.disabled && (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && at(this.dragBox, je), Tt(this.cropBox, ht), this.setCropBoxData(this.initialCropBoxData)), this;
  },
  // Reset the image and crop box to their initial states
  reset: function() {
    return this.ready && !this.disabled && (this.imageData = Q({}, this.initialImageData), this.canvasData = Q({}, this.initialCanvasData), this.cropBoxData = Q({}, this.initialCropBoxData), this.renderCanvas(), this.cropped && this.renderCropBox()), this;
  },
  // Clear the crop box
  clear: function() {
    return this.cropped && !this.disabled && (Q(this.cropBoxData, {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), Tt(this.dragBox, je), at(this.cropBox, ht)), this;
  },
  /**
   * Replace the image's src and rebuild the cropper
   * @param {string} url - The new URL.
   * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
   * @returns {Cropper} this
   */
  replace: function(t) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return !this.disabled && t && (this.isImg && (this.element.src = t), s ? (this.url = t, this.image.src = t, this.ready && (this.viewBoxImage.src = t, st(this.previews, function(o) {
      o.getElementsByTagName("img")[0].src = t;
    }))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(t))), this;
  },
  // Enable (unfreeze) the cropper
  enable: function() {
    return this.ready && this.disabled && (this.disabled = !1, Tt(this.cropper, Wr)), this;
  },
  // Disable (freeze) the cropper
  disable: function() {
    return this.ready && !this.disabled && (this.disabled = !0, at(this.cropper, Wr)), this;
  },
  /**
   * Destroy the cropper and remove the instance from the image
   * @returns {Cropper} this
   */
  destroy: function() {
    var t = this.element;
    return t[J] ? (t[J] = void 0, this.isImg && this.replaced && (t.src = this.originalUrl), this.uncreate(), this) : this;
  },
  /**
   * Move the canvas with relative offsets
   * @param {number} offsetX - The relative offset distance on the x-axis.
   * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
   * @returns {Cropper} this
   */
  move: function(t) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, o = this.canvasData, l = o.left, i = o.top;
    return this.moveTo(Fe(t) ? t : l + Number(t), Fe(s) ? s : i + Number(s));
  },
  /**
   * Move the canvas to an absolute point
   * @param {number} x - The x-axis coordinate.
   * @param {number} [y=x] - The y-axis coordinate.
   * @returns {Cropper} this
   */
  moveTo: function(t) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, o = this.canvasData, l = !1;
    return t = Number(t), s = Number(s), this.ready && !this.disabled && this.options.movable && (K(t) && (o.left = t, l = !0), K(s) && (o.top = s, l = !0), l && this.renderCanvas(!0)), this;
  },
  /**
   * Zoom the canvas with a relative ratio
   * @param {number} ratio - The target ratio.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoom: function(t, s) {
    var o = this.canvasData;
    return t = Number(t), t < 0 ? t = 1 / (1 - t) : t = 1 + t, this.zoomTo(o.width * t / o.naturalWidth, null, s);
  },
  /**
   * Zoom the canvas to an absolute ratio
   * @param {number} ratio - The target ratio.
   * @param {Object} pivot - The zoom pivot point coordinate.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoomTo: function(t, s, o) {
    var l = this.options, i = this.canvasData, d = i.width, g = i.height, a = i.naturalWidth, v = i.naturalHeight;
    if (t = Number(t), t >= 0 && this.ready && !this.disabled && l.zoomable) {
      var p = a * t, b = v * t;
      if (re(this.element, ur, {
        ratio: t,
        oldRatio: d / a,
        originalEvent: o
      }) === !1)
        return this;
      if (o) {
        var S = this.pointers, $ = Js(this.cropper), I = S && Object.keys(S).length ? vu(S) : {
          pageX: o.pageX,
          pageY: o.pageY
        };
        i.left -= (p - d) * ((I.pageX - $.left - i.left) / d), i.top -= (b - g) * ((I.pageY - $.top - i.top) / g);
      } else
        Qt(s) && K(s.x) && K(s.y) ? (i.left -= (p - d) * ((s.x - i.left) / d), i.top -= (b - g) * ((s.y - i.top) / g)) : (i.left -= (p - d) / 2, i.top -= (b - g) / 2);
      i.width = p, i.height = b, this.renderCanvas(!0);
    }
    return this;
  },
  /**
   * Rotate the canvas with a relative degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotate: function(t) {
    return this.rotateTo((this.imageData.rotate || 0) + Number(t));
  },
  /**
   * Rotate the canvas to an absolute degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotateTo: function(t) {
    return t = Number(t), K(t) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = t % 360, this.renderCanvas(!0, !0)), this;
  },
  /**
   * Scale the image on the x-axis.
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @returns {Cropper} this
   */
  scaleX: function(t) {
    var s = this.imageData.scaleY;
    return this.scale(t, K(s) ? s : 1);
  },
  /**
   * Scale the image on the y-axis.
   * @param {number} scaleY - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scaleY: function(t) {
    var s = this.imageData.scaleX;
    return this.scale(K(s) ? s : 1, t);
  },
  /**
   * Scale the image
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scale: function(t) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, o = this.imageData, l = !1;
    return t = Number(t), s = Number(s), this.ready && !this.disabled && this.options.scalable && (K(t) && (o.scaleX = t, l = !0), K(s) && (o.scaleY = s, l = !0), l && this.renderCanvas(!0, !0)), this;
  },
  /**
   * Get the cropped area position and size data (base on the original image)
   * @param {boolean} [rounded=false] - Indicate if round the data values or not.
   * @returns {Object} The result cropped data.
   */
  getData: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, s = this.options, o = this.imageData, l = this.canvasData, i = this.cropBoxData, d;
    if (this.ready && this.cropped) {
      d = {
        x: i.left - l.left,
        y: i.top - l.top,
        width: i.width,
        height: i.height
      };
      var g = o.width / o.naturalWidth;
      if (st(d, function(p, b) {
        d[b] = p / g;
      }), t) {
        var a = Math.round(d.y + d.height), v = Math.round(d.x + d.width);
        d.x = Math.round(d.x), d.y = Math.round(d.y), d.width = v - d.x, d.height = a - d.y;
      }
    } else
      d = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    return s.rotatable && (d.rotate = o.rotate || 0), s.scalable && (d.scaleX = o.scaleX || 1, d.scaleY = o.scaleY || 1), d;
  },
  /**
   * Set the cropped area position and size with new data
   * @param {Object} data - The new data.
   * @returns {Cropper} this
   */
  setData: function(t) {
    var s = this.options, o = this.imageData, l = this.canvasData, i = {};
    if (this.ready && !this.disabled && Qt(t)) {
      var d = !1;
      s.rotatable && K(t.rotate) && t.rotate !== o.rotate && (o.rotate = t.rotate, d = !0), s.scalable && (K(t.scaleX) && t.scaleX !== o.scaleX && (o.scaleX = t.scaleX, d = !0), K(t.scaleY) && t.scaleY !== o.scaleY && (o.scaleY = t.scaleY, d = !0)), d && this.renderCanvas(!0, !0);
      var g = o.width / o.naturalWidth;
      K(t.x) && (i.left = t.x * g + l.left), K(t.y) && (i.top = t.y * g + l.top), K(t.width) && (i.width = t.width * g), K(t.height) && (i.height = t.height * g), this.setCropBoxData(i);
    }
    return this;
  },
  /**
   * Get the container size data.
   * @returns {Object} The result container data.
   */
  getContainerData: function() {
    return this.ready ? Q({}, this.containerData) : {};
  },
  /**
   * Get the image position and size data.
   * @returns {Object} The result image data.
   */
  getImageData: function() {
    return this.sized ? Q({}, this.imageData) : {};
  },
  /**
   * Get the canvas position and size data.
   * @returns {Object} The result canvas data.
   */
  getCanvasData: function() {
    var t = this.canvasData, s = {};
    return this.ready && st(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(o) {
      s[o] = t[o];
    }), s;
  },
  /**
   * Set the canvas position and size with new data.
   * @param {Object} data - The new canvas data.
   * @returns {Cropper} this
   */
  setCanvasData: function(t) {
    var s = this.canvasData, o = s.aspectRatio;
    return this.ready && !this.disabled && Qt(t) && (K(t.left) && (s.left = t.left), K(t.top) && (s.top = t.top), K(t.width) ? (s.width = t.width, s.height = t.width / o) : K(t.height) && (s.height = t.height, s.width = t.height * o), this.renderCanvas(!0)), this;
  },
  /**
   * Get the crop box position and size data.
   * @returns {Object} The result crop box data.
   */
  getCropBoxData: function() {
    var t = this.cropBoxData, s;
    return this.ready && this.cropped && (s = {
      left: t.left,
      top: t.top,
      width: t.width,
      height: t.height
    }), s || {};
  },
  /**
   * Set the crop box position and size with new data.
   * @param {Object} data - The new crop box data.
   * @returns {Cropper} this
   */
  setCropBoxData: function(t) {
    var s = this.cropBoxData, o = this.options.aspectRatio, l, i;
    return this.ready && this.cropped && !this.disabled && Qt(t) && (K(t.left) && (s.left = t.left), K(t.top) && (s.top = t.top), K(t.width) && t.width !== s.width && (l = !0, s.width = t.width), K(t.height) && t.height !== s.height && (i = !0, s.height = t.height), o && (l ? s.height = s.width / o : i && (s.width = s.height * o)), this.renderCropBox()), this;
  },
  /**
   * Get a canvas drawn the cropped image.
   * @param {Object} [options={}] - The config options.
   * @returns {HTMLCanvasElement} - The result canvas.
   */
  getCroppedCanvas: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!this.ready || !window.HTMLCanvasElement)
      return null;
    var s = this.canvasData, o = yu(this.image, this.imageData, s, t);
    if (!this.cropped)
      return o;
    var l = this.getData(t.rounded), i = l.x, d = l.y, g = l.width, a = l.height, v = o.width / Math.floor(s.naturalWidth);
    v !== 1 && (i *= v, d *= v, g *= v, a *= v);
    var p = g / a, b = Bt({
      aspectRatio: p,
      width: t.maxWidth || 1 / 0,
      height: t.maxHeight || 1 / 0
    }), S = Bt({
      aspectRatio: p,
      width: t.minWidth || 0,
      height: t.minHeight || 0
    }, "cover"), $ = Bt({
      aspectRatio: p,
      width: t.width || (v !== 1 ? o.width : g),
      height: t.height || (v !== 1 ? o.height : a)
    }), I = $.width, T = $.height;
    I = Math.min(b.width, Math.max(S.width, I)), T = Math.min(b.height, Math.max(S.height, T));
    var M = document.createElement("canvas"), B = M.getContext("2d");
    M.width = ee(I), M.height = ee(T), B.fillStyle = t.fillColor || "transparent", B.fillRect(0, 0, I, T);
    var V = t.imageSmoothingEnabled, j = V === void 0 ? !0 : V, H = t.imageSmoothingQuality;
    B.imageSmoothingEnabled = j, H && (B.imageSmoothingQuality = H);
    var X = o.width, k = o.height, N = i, G = d, ot, rt, ut, bt, pt, gt;
    N <= -g || N > X ? (N = 0, ot = 0, ut = 0, pt = 0) : N <= 0 ? (ut = -N, N = 0, ot = Math.min(X, g + N), pt = ot) : N <= X && (ut = 0, ot = Math.min(g, X - N), pt = ot), ot <= 0 || G <= -a || G > k ? (G = 0, rt = 0, bt = 0, gt = 0) : G <= 0 ? (bt = -G, G = 0, rt = Math.min(k, a + G), gt = rt) : G <= k && (bt = 0, rt = Math.min(a, k - G), gt = rt);
    var A = [N, G, ot, rt];
    if (pt > 0 && gt > 0) {
      var R = I / g;
      A.push(ut * R, bt * R, pt * R, gt * R);
    }
    return B.drawImage.apply(B, [o].concat(Bs(A.map(function(O) {
      return Math.floor(ee(O));
    })))), M;
  },
  /**
   * Change the aspect ratio of the crop box.
   * @param {number} aspectRatio - The new aspect ratio.
   * @returns {Cropper} this
   */
  setAspectRatio: function(t) {
    var s = this.options;
    return !this.disabled && !Fe(t) && (s.aspectRatio = Math.max(0, t) || NaN, this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())), this;
  },
  /**
   * Change the drag mode.
   * @param {string} mode - The new drag mode.
   * @returns {Cropper} this
   */
  setDragMode: function(t) {
    var s = this.options, o = this.dragBox, l = this.face;
    if (this.ready && !this.disabled) {
      var i = t === Cr, d = s.movable && t === Ys;
      t = i || d ? t : Ws, s.dragMode = t, Se(o, ye, t), te(o, or, i), te(o, nr, d), s.cropBoxMovable || (Se(l, ye, t), te(l, or, i), te(l, nr, d));
    }
    return this;
  }
}, Au = It.Cropper, to = /* @__PURE__ */ function() {
  function r(t) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Kc(this, r), !t || !nu.test(t.tagName))
      throw new Error("The first argument is required and must be an <img> or <canvas> element.");
    this.element = t, this.options = Q({}, rs, Qt(s) && s), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init();
  }
  return Yc(r, [{
    key: "init",
    value: function() {
      var s = this.element, o = s.tagName.toLowerCase(), l;
      if (!s[J]) {
        if (s[J] = this, o === "img") {
          if (this.isImg = !0, l = s.getAttribute("src") || "", this.originalUrl = l, !l)
            return;
          l = s.src;
        } else
          o === "canvas" && window.HTMLCanvasElement && (l = s.toDataURL());
        this.load(l);
      }
    }
  }, {
    key: "load",
    value: function(s) {
      var o = this;
      if (s) {
        this.url = s, this.imageData = {};
        var l = this.element, i = this.options;
        if (!i.rotatable && !i.scalable && (i.checkOrientation = !1), !i.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        }
        if (su.test(s)) {
          ou.test(s) ? this.read(_u(s)) : this.clone();
          return;
        }
        var d = new XMLHttpRequest(), g = this.clone.bind(this);
        this.reloading = !0, this.xhr = d, d.onabort = g, d.onerror = g, d.ontimeout = g, d.onprogress = function() {
          d.getResponseHeader("content-type") !== es && d.abort();
        }, d.onload = function() {
          o.read(d.response);
        }, d.onloadend = function() {
          o.reloading = !1, o.xhr = null;
        }, i.checkCrossOrigin && os(s) && l.crossOrigin && (s = ns(s)), d.open("GET", s, !0), d.responseType = "arraybuffer", d.withCredentials = l.crossOrigin === "use-credentials", d.send();
      }
    }
  }, {
    key: "read",
    value: function(s) {
      var o = this.options, l = this.imageData, i = ku(s), d = 0, g = 1, a = 1;
      if (i > 1) {
        this.url = xu(s, es);
        var v = Du(i);
        d = v.rotate, g = v.scaleX, a = v.scaleY;
      }
      o.rotatable && (l.rotate = d), o.scalable && (l.scaleX = g, l.scaleY = a), this.clone();
    }
  }, {
    key: "clone",
    value: function() {
      var s = this.element, o = this.url, l = s.crossOrigin, i = o;
      this.options.checkCrossOrigin && os(o) && (l || (l = "anonymous"), i = ns(o)), this.crossOrigin = l, this.crossOriginUrl = i;
      var d = document.createElement("img");
      l && (d.crossOrigin = l), d.src = i || o, d.alt = s.alt || "The image to crop", this.image = d, d.onload = this.start.bind(this), d.onerror = this.stop.bind(this), at(d, Xr), s.parentNode.insertBefore(d, s.nextSibling);
    }
  }, {
    key: "start",
    value: function() {
      var s = this, o = this.image;
      o.onload = null, o.onerror = null, this.sizing = !0;
      var l = It.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(It.navigator.userAgent), i = function(v, p) {
        Q(s.imageData, {
          naturalWidth: v,
          naturalHeight: p,
          aspectRatio: v / p
        }), s.initialImageData = Q({}, s.imageData), s.sizing = !1, s.sized = !0, s.build();
      };
      if (o.naturalWidth && !l) {
        i(o.naturalWidth, o.naturalHeight);
        return;
      }
      var d = document.createElement("img"), g = document.body || document.documentElement;
      this.sizingImage = d, d.onload = function() {
        i(d.width, d.height), l || g.removeChild(d);
      }, d.src = o.src, l || (d.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", g.appendChild(d));
    }
  }, {
    key: "stop",
    value: function() {
      var s = this.image;
      s.onload = null, s.onerror = null, s.parentNode.removeChild(s), this.image = null;
    }
  }, {
    key: "build",
    value: function() {
      if (!(!this.sized || this.ready)) {
        var s = this.element, o = this.options, l = this.image, i = s.parentNode, d = document.createElement("div");
        d.innerHTML = iu;
        var g = d.querySelector(".".concat(J, "-container")), a = g.querySelector(".".concat(J, "-canvas")), v = g.querySelector(".".concat(J, "-drag-box")), p = g.querySelector(".".concat(J, "-crop-box")), b = p.querySelector(".".concat(J, "-face"));
        this.container = i, this.cropper = g, this.canvas = a, this.dragBox = v, this.cropBox = p, this.viewBox = g.querySelector(".".concat(J, "-view-box")), this.face = b, a.appendChild(l), at(s, ht), i.insertBefore(g, s.nextSibling), Tt(l, Xr), this.initPreview(), this.bind(), o.initialAspectRatio = Math.max(0, o.initialAspectRatio) || NaN, o.aspectRatio = Math.max(0, o.aspectRatio) || NaN, o.viewMode = Math.max(0, Math.min(3, Math.round(o.viewMode))) || 0, at(p, ht), o.guides || at(p.getElementsByClassName("".concat(J, "-dashed")), ht), o.center || at(p.getElementsByClassName("".concat(J, "-center")), ht), o.background && at(g, "".concat(J, "-bg")), o.highlight || at(b, Jc), o.cropBoxMovable && (at(b, nr), Se(b, ye, Dr)), o.cropBoxResizable || (at(p.getElementsByClassName("".concat(J, "-line")), ht), at(p.getElementsByClassName("".concat(J, "-point")), ht)), this.render(), this.ready = !0, this.setDragMode(o.dragMode), o.autoCrop && this.crop(), this.setData(o.data), dt(o.ready) && St(s, Jr, o.ready, {
          once: !0
        }), re(s, Jr);
      }
    }
  }, {
    key: "unbuild",
    value: function() {
      if (this.ready) {
        this.ready = !1, this.unbind(), this.resetPreview();
        var s = this.cropper.parentNode;
        s && s.removeChild(this.cropper), Tt(this.element, ht);
      }
    }
  }, {
    key: "uncreate",
    value: function() {
      this.ready ? (this.unbuild(), this.ready = !1, this.cropped = !1) : this.sizing ? (this.sizingImage.onload = null, this.sizing = !1, this.sized = !1) : this.reloading ? (this.xhr.onabort = null, this.xhr.abort()) : this.image && this.stop();
    }
    /**
     * Get the no conflict cropper class.
     * @returns {Cropper} The cropper class.
     */
  }], [{
    key: "noConflict",
    value: function() {
      return window.Cropper = Au, r;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */
  }, {
    key: "setDefaults",
    value: function(s) {
      Q(rs, Qt(s) && s);
    }
  }]), r;
}();
Q(to.prototype, Cu, Eu, Mu, $u, Tu, Iu);
const Lu = { class: "flex" }, Ou = ["aria-label"], Pu = { class: "ml-auto mb-2" }, Nu = { class: "w-full flex justify-center" }, ju = ["src"], Ru = {
  __name: "Image",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const s = t, o = r, { t: l } = P("i18n"), { apiUrl: i } = At(), d = L(null), g = L(null), a = L(!1), v = L(""), p = L(!1), b = () => {
      a.value = !a.value, a.value ? g.value = new to(d.value, {
        crop(I) {
        }
      }) : g.value.destroy();
    }, S = P("postData"), $ = () => {
      g.value.getCroppedCanvas({
        width: 795,
        height: 341
      }).toBlob(
        (I) => {
          v.value = "", p.value = !1, Pe(i.value, {
            method: "POST",
            params: Object.assign(S, {
              q: "upload",
              adapter: o.selection.adapter,
              path: o.selection.item.path,
              file: I
            }),
            name: o.selection.item.basename,
            json: !1
          }).then((T) => {
            v.value = l("Updated."), d.value.src = tr(o.selection.adapter, o.selection.item.path), b(), s("load");
          }).catch((T) => {
            v.value = l(T.message), p.value = !0;
          });
        }
      );
    };
    return Et(() => {
      s("load");
    }), (I, T) => (_(), C(lt, null, [
      f("div", Lu, [
        f("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, E(r.selection.item.basename), 9, Ou),
        f("div", Pu, [
          a.value ? (_(), C("button", {
            key: 0,
            onClick: $,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, E(x(l)("Crop")), 1)) : Z("", !0),
          f("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: T[0] || (T[0] = (M) => b())
          }, E(a.value ? x(l)("Cancel") : x(l)("Edit")), 1)
        ])
      ]),
      f("div", Nu, [
        f("img", {
          ref_key: "image",
          ref: d,
          class: "max-w-[50vh] max-h-[50vh]",
          src: x(tr)(o.selection.adapter, o.selection.item.path),
          alt: ""
        }, null, 8, ju)
      ]),
      v.value.length ? (_(), q(Ot, {
        key: 0,
        onHidden: T[1] || (T[1] = (M) => v.value = ""),
        error: p.value
      }, {
        default: F(() => [
          et(E(v.value), 1)
        ]),
        _: 1
      }, 8, ["error"])) : Z("", !0)
    ], 64));
  }
}, Vu = { class: "flex" }, Bu = ["aria-label"], zu = /* @__PURE__ */ f("div", null, null, -1), Hu = {
  __name: "Default",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const s = t;
    return Et(() => {
      s("load");
    }), (o, l) => (_(), C(lt, null, [
      f("div", Vu, [
        f("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, E(r.selection.item.basename), 9, Bu)
      ]),
      zu
    ], 64));
  }
}, Uu = ["aria-label"], Ku = {
  class: "w-full",
  preload: "",
  controls: ""
}, Yu = ["src"], Wu = {
  __name: "Video",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const { apiUrl: s } = At(), o = r, l = t, i = () => s.value + "?" + Ft({ q: "preview", adapter: o.selection.adapter, path: o.selection.item.path });
    return Et(() => {
      l("load");
    }), (d, g) => (_(), C(lt, null, [
      f("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, E(r.selection.item.basename), 9, Uu),
      f("div", null, [
        f("video", Ku, [
          f("source", {
            src: i(),
            type: "video/mp4"
          }, null, 8, Yu),
          et(" Your browser does not support the video tag. ")
        ])
      ])
    ], 64));
  }
}, Xu = ["aria-label"], Zu = {
  class: "w-full",
  controls: ""
}, Fu = ["src"], qu = {
  __name: "Audio",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const { apiUrl: s } = At(), o = r, l = t, i = () => s.value + "?" + Ft({ q: "preview", adapter: o.selection.adapter, path: o.selection.item.path });
    return Et(() => {
      l("load");
    }), (d, g) => (_(), C(lt, null, [
      f("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, E(r.selection.item.basename), 9, Xu),
      f("div", null, [
        f("audio", Zu, [
          f("source", {
            src: i(),
            type: "audio/mpeg"
          }, null, 8, Fu),
          et(" Your browser does not support the audio element. ")
        ])
      ])
    ], 64));
  }
}, Gu = ["aria-label"], Ju = ["data"], Qu = ["src"], td = /* @__PURE__ */ f("p", null, [
  /* @__PURE__ */ et(" Your browser does not support PDFs. "),
  /* @__PURE__ */ f("a", { href: "https://example.com/test.pdf" }, "Download the PDF"),
  /* @__PURE__ */ et(" . ")
], -1), ed = [
  td
], rd = {
  __name: "Pdf",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const { apiUrl: s } = At(), o = r, l = t, i = () => s.value + "?" + Ft({ q: "preview", adapter: o.selection.adapter, path: o.selection.item.path });
    return Et(() => {
      l("load");
    }), (d, g) => (_(), C(lt, null, [
      f("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, E(r.selection.item.basename), 9, Gu),
      f("div", null, [
        f("object", {
          class: "h-[60vh]",
          data: i(),
          type: "application/pdf",
          width: "100%",
          height: "100%"
        }, [
          f("iframe", {
            class: "border-0",
            src: i(),
            width: "100%",
            height: "100%"
          }, ed, 8, Qu)
        ], 8, Ju)
      ])
    ], 64));
  }
}, sd = { class: "sm:flex sm:items-start" }, od = { class: "mt-3 text-center sm:mt-0 sm:text-left w-full" }, nd = { class: "text-gray-700 dark:text-gray-200 text-sm" }, id = {
  key: 0,
  class: "flex leading-5"
}, ad = /* @__PURE__ */ f("svg", {
  class: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ f("circle", {
    class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    "stroke-width": "4"
  }),
  /* @__PURE__ */ f("path", {
    class: "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  })
], -1), ld = { class: "py-2 flex font-normal break-all dark:text-gray-200 rounded text-xs" }, cd = { class: "font-bold pl-2" }, ud = { class: "font-bold pl-2" }, dd = {
  name: "VFModalPreview"
}, hd = /* @__PURE__ */ Object.assign(dd, {
  props: {
    selection: Object
  },
  setup(r) {
    const { apiUrl: t } = At(), s = P("emitter"), { t: o } = P("i18n"), l = L(!1), i = (v) => l.value = v, d = r, g = (v) => (d.selection.item.mime_type ?? "").startsWith(v), a = () => {
      const v = t.value + "?" + Ft({ q: "download", adapter: d.selection.adapter, path: d.selection.item.path });
      s.emit("vf-download", v);
    };
    return (v, p) => (_(), q(Lt, null, {
      buttons: F(() => [
        f("button", {
          type: "button",
          onClick: p[6] || (p[6] = (b) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Close")), 1),
        f("button", {
          type: "button",
          onClick: p[7] || (p[7] = (b) => a()),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Download")), 1)
      ]),
      default: F(() => [
        f("div", sd, [
          f("div", od, [
            f("div", null, [
              g("text") ? (_(), q(Uc, {
                key: 0,
                selection: r.selection,
                onLoad: p[0] || (p[0] = (b) => i(!0))
              }, null, 8, ["selection"])) : g("image") ? (_(), q(Ru, {
                key: 1,
                selection: r.selection,
                onLoad: p[1] || (p[1] = (b) => i(!0))
              }, null, 8, ["selection"])) : g("video") ? (_(), q(Wu, {
                key: 2,
                selection: r.selection,
                onLoad: p[2] || (p[2] = (b) => i(!0))
              }, null, 8, ["selection"])) : g("audio") ? (_(), q(qu, {
                key: 3,
                selection: r.selection,
                onLoad: p[3] || (p[3] = (b) => i(!0))
              }, null, 8, ["selection"])) : g("application/pdf") ? (_(), q(rd, {
                key: 4,
                selection: r.selection,
                onLoad: p[4] || (p[4] = (b) => i(!0))
              }, null, 8, ["selection"])) : (_(), q(Hu, {
                key: 5,
                selection: r.selection,
                onLoad: p[5] || (p[5] = (b) => i(!0))
              }, null, 8, ["selection"]))
            ]),
            f("div", nd, [
              l.value == !1 ? (_(), C("div", id, [
                ad,
                f("span", null, E(x(o)("Loading")), 1)
              ])) : Z("", !0)
            ])
          ])
        ]),
        f("div", ld, [
          f("div", null, [
            f("span", cd, E(x(o)("File Size")) + ": ", 1),
            et(E(x(cs)(r.selection.item.file_size)), 1)
          ]),
          f("div", null, [
            f("span", ud, E(x(o)("Last Modified")) + ": ", 1),
            et(" " + E(x(us)(r.selection.item.last_modified)), 1)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), fd = { class: "sm:flex sm:items-start" }, pd = /* @__PURE__ */ f("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ f("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ f("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    })
  ])
], -1), gd = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, md = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, vd = { class: "mt-2" }, bd = { class: "flex text-sm text-gray-800 dark:text-gray-400 py-2" }, yd = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Sd = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), wd = [
  Sd
], _d = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, xd = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), kd = [
  xd
], Dd = { class: "ml-1.5" }, Cd = {
  name: "VFModalRename"
}, Ed = /* @__PURE__ */ Object.assign(Cd, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = P("emitter");
    P("storage");
    const s = P("adapter"), { t: o } = P("i18n"), l = r, i = L(l.selection.items[0]), d = L(l.selection.items[0].basename), g = L(""), a = () => {
      d.value != "" && t.emit("vf-fetch", {
        params: {
          q: "rename",
          adapter: s.value,
          path: l.current.dirname,
          item: i.value.path,
          name: d.value
        },
        onSuccess: () => {
          t.emit("vf-toast-push", { label: o("%s is renamed.", d.value) });
        },
        onError: (v) => {
          g.value = o(v.message);
        }
      });
    };
    return (v, p) => (_(), q(Lt, null, {
      buttons: F(() => [
        f("button", {
          type: "button",
          onClick: a,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Rename")), 1),
        f("button", {
          type: "button",
          onClick: p[2] || (p[2] = (b) => x(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Cancel")), 1)
      ]),
      default: F(() => [
        f("div", fd, [
          pd,
          f("div", gd, [
            f("h3", md, E(x(o)("Rename")), 1),
            f("div", vd, [
              f("p", bd, [
                i.value.type == "dir" ? (_(), C("svg", yd, wd)) : (_(), C("svg", _d, kd)),
                f("span", Dd, E(i.value.basename), 1)
              ]),
              vt(f("input", {
                "onUpdate:modelValue": p[0] || (p[0] = (b) => d.value = b),
                onKeyup: oe(a, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: "Name",
                type: "text"
              }, null, 544), [
                [ne, d.value]
              ]),
              g.value.length ? (_(), q(Ot, {
                key: 0,
                onHidden: p[1] || (p[1] = (b) => g.value = ""),
                error: ""
              }, {
                default: F(() => [
                  et(E(g.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Md = { class: "sm:flex sm:items-start" }, $d = /* @__PURE__ */ f("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ f("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ f("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
    })
  ])
], -1), Td = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Id = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Ad = { class: "mt-2" }, Ld = { class: "text-gray-500 mb-1" }, Od = ["id"], Pd = {
  key: 0,
  class: "py-2"
}, Nd = ["disabled"], jd = {
  name: "VFModalUpload"
}, Rd = /* @__PURE__ */ Object.assign(jd, {
  props: {
    current: Object
  },
  setup(r) {
    const t = P("emitter"), { apiUrl: s } = At(), { t: o } = P("i18n"), l = P("maxFileSize"), i = r, d = L(null), g = L(null), a = L(null), v = L([]), p = L(""), b = L(!0), S = () => {
      p.value = "", d.value.start();
    }, $ = P("postData");
    return Et(() => {
      d.value = new de.Uploader({
        runtimes: "html5",
        browse_button: a.value,
        container: g.value,
        max_file_size: l,
        multiple_queues: !0,
        file_data_name: "file",
        url: s.value + "?" + Ft(Object.assign($, { q: "upload", adapter: i.current.adapter, path: i.current.dirname })),
        // filters : [
        // 	{title : "Image files", extensions : "jpg,gif,png,jpeg"},
        // 	{title : "Zip files", extensions : "zip"}
        // ],
        headers: {
          ...Oe && { "X-CSRF-Token": Oe }
        },
        init: {
          PostInit: function() {
          },
          FilesAdded: function(I, T) {
            b.value = !1, de.each(T, function(M) {
              v.value.push({
                id: M.id,
                name: M.name,
                size: de.formatSize(M.size),
                percent: ""
              });
            });
          },
          UploadProgress: function(I, T) {
            v.value[v.value.findIndex((M) => M.id == T.id)].percent = T.percent + "%";
          },
          UploadComplete: function() {
            b.value = !0, t.emit("vf-fetch", { params: { q: "index", adapter: i.current.adapter, path: i.current.dirname } });
          },
          Error: function(I, T) {
            d.value.stop(), T.code == de.HTTP_ERROR ? p.value = o(JSON.parse(T.response).message) : T.code == de.FILE_SIZE_ERROR ? p.value = o("The selected file exceeds the maximum file size. You cannot upload files greater than %s", [l]) : p.value = o(T.message);
          }
        }
      }), d.value.init();
    }), (I, T) => (_(), q(Lt, null, {
      buttons: F(() => [
        f("button", {
          disabled: b.value,
          onClick: Wt(S, ["prevent"]),
          type: "button",
          class: ct([b.value ? "bg-blue-200 hover:bg-blue-200 dark:bg-gray-700/50 dark:hover:bg-gray-700/50 dark:text-gray-500" : "bg-blue-600 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-500", "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"])
        }, E(x(o)("Upload")), 11, Nd),
        f("button", {
          type: "button",
          onClick: T[1] || (T[1] = (M) => x(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Cancel")), 1)
      ]),
      default: F(() => [
        f("div", Md, [
          $d,
          f("div", Td, [
            f("h3", Id, E(x(o)("Upload files")), 1),
            f("div", Ad, [
              f("div", Ld, [
                (_(!0), C(lt, null, wt(v.value, (M) => (_(), C("div", null, [
                  f("div", {
                    id: M.id
                  }, [
                    et(E(M.name) + " ( " + E(M.size) + ") ", 1),
                    f("b", null, E(M.percent), 1)
                  ], 8, Od)
                ]))), 256)),
                v.value.length ? Z("", !0) : (_(), C("div", Pd, E(x(o)("No files selected!")), 1))
              ]),
              f("div", {
                class: "text-gray-500",
                ref_key: "container",
                ref: g
              }, [
                f("button", {
                  ref_key: "pickFiles",
                  ref: a,
                  type: "button",
                  class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                }, E(x(o)("Select Files")), 513)
              ], 512),
              p.value.length ? (_(), q(Ot, {
                key: 0,
                onHidden: T[0] || (T[0] = (M) => p.value = ""),
                error: ""
              }, {
                default: F(() => [
                  et(E(p.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Vd = { class: "sm:flex sm:items-start" }, Bd = /* @__PURE__ */ f("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ f("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ f("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
    })
  ])
], -1), zd = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Hd = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Ud = { class: "mt-2" }, Kd = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Yd = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Wd = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Xd = [
  Wd
], Zd = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Fd = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), qd = [
  Fd
], Gd = { class: "ml-1.5" }, Jd = ["placeholder"], Qd = {
  name: "VFModalArchive"
}, th = /* @__PURE__ */ Object.assign(Qd, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = P("emitter");
    P("storage");
    const s = P("adapter"), { t: o } = P("i18n"), l = r, i = L(""), d = L(""), g = L(l.selection.items), a = () => {
      g.value.length && t.emit("vf-fetch", {
        params: {
          q: "archive",
          adapter: s.value,
          path: l.current.dirname,
          items: JSON.stringify(g.value.map(({ path: v, type: p }) => ({ path: v, type: p }))),
          name: i.value
        },
        onSuccess: () => {
          t.emit("vf-toast-push", { label: o("The file(s) archived.") });
        },
        onError: (v) => {
          d.value = o(v.message);
        }
      });
    };
    return (v, p) => (_(), q(Lt, null, {
      buttons: F(() => [
        f("button", {
          type: "button",
          onClick: a,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Archive")), 1),
        f("button", {
          type: "button",
          onClick: p[2] || (p[2] = (b) => x(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Cancel")), 1)
      ]),
      default: F(() => [
        f("div", Vd, [
          Bd,
          f("div", zd, [
            f("h3", Hd, E(x(o)("Archive the files")), 1),
            f("div", Ud, [
              (_(!0), C(lt, null, wt(g.value, (b) => (_(), C("p", Kd, [
                b.type == "dir" ? (_(), C("svg", Yd, Xd)) : (_(), C("svg", Zd, qd)),
                f("span", Gd, E(b.basename), 1)
              ]))), 256)),
              vt(f("input", {
                "onUpdate:modelValue": p[0] || (p[0] = (b) => i.value = b),
                onKeyup: oe(a, ["enter"]),
                class: "my-1 px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(o)("Archive name. (.zip file will be created)"),
                type: "text"
              }, null, 40, Jd), [
                [ne, i.value]
              ]),
              d.value.length ? (_(), q(Ot, {
                key: 0,
                onHidden: p[1] || (p[1] = (b) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  et(E(d.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), eh = { class: "sm:flex sm:items-start" }, rh = /* @__PURE__ */ f("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ f("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ f("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
    })
  ])
], -1), sh = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, oh = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, nh = { class: "mt-2" }, ih = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, ah = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, lh = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), ch = [
  lh
], uh = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, dh = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), hh = [
  dh
], fh = { class: "ml-1.5" }, ph = { class: "my-1 text-sm text-gray-500" }, gh = {
  name: "VFModalUnarchive"
}, mh = /* @__PURE__ */ Object.assign(gh, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = P("emitter");
    P("storage");
    const s = P("adapter"), { t: o } = P("i18n"), l = r;
    L("");
    const i = L(l.selection.items[0]), d = L(""), g = L([]), a = () => {
      t.emit("vf-fetch", {
        params: {
          q: "unarchive",
          adapter: s.value,
          path: l.current.dirname,
          item: i.value.path
        },
        onSuccess: () => {
          t.emit("vf-toast-push", { label: o("The file unarchived.") });
        },
        onError: (v) => {
          d.value = o(v.message);
        }
      });
    };
    return (v, p) => (_(), q(Lt, null, {
      buttons: F(() => [
        f("button", {
          type: "button",
          onClick: a,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Unarchive")), 1),
        f("button", {
          type: "button",
          onClick: p[1] || (p[1] = (b) => x(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Cancel")), 1)
      ]),
      default: F(() => [
        f("div", eh, [
          rh,
          f("div", sh, [
            f("h3", oh, E(x(o)("Unarchive")), 1),
            f("div", nh, [
              (_(!0), C(lt, null, wt(g.value, (b) => (_(), C("p", ih, [
                b.type == "dir" ? (_(), C("svg", ah, ch)) : (_(), C("svg", uh, hh)),
                f("span", fh, E(b.basename), 1)
              ]))), 256)),
              f("p", ph, E(x(o)("The archive will be unarchived at")) + " (" + E(r.current.dirname) + ")", 1),
              d.value.length ? (_(), q(Ot, {
                key: 0,
                onHidden: p[0] || (p[0] = (b) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  et(E(d.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), vh = { class: "sm:flex sm:items-start" }, bh = /* @__PURE__ */ f("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ f("svg", {
    class: "h-6 w-6 stroke-red-600 dark:stroke-red-200",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ f("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    })
  ])
], -1), yh = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Sh = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, wh = { class: "mt-2" }, _h = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, xh = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, kh = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Dh = [
  kh
], Ch = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Eh = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Mh = [
  Eh
], $h = { class: "ml-1.5" }, Th = { class: "text-sm text-gray-500 pb-1 pt-3" }, Ih = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Ah = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ f("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
  })
], -1), Lh = { class: "ml-1.5 overflow-auto" }, Oh = {
  name: "VFModalMove"
}, Ph = /* @__PURE__ */ Object.assign(Oh, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = P("emitter"), { t: s } = P("i18n");
    P("storage");
    const o = P("adapter"), l = r, i = L(l.selection.items.from), d = L(""), g = () => {
      i.value.length && t.emit("vf-fetch", {
        params: {
          q: "move",
          adapter: o.value,
          path: l.current.dirname,
          items: JSON.stringify(i.value.map(({ path: a, type: v }) => ({ path: a, type: v }))),
          item: l.selection.items.to.path
        },
        onSuccess: () => {
          t.emit("vf-toast-push", { label: s("Files moved.", l.selection.items.to.name) });
        },
        onError: (a) => {
          d.value = s(a.message);
        }
      });
    };
    return (a, v) => (_(), q(Lt, null, {
      buttons: F(() => [
        f("button", {
          type: "button",
          onClick: g,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(s)("Yes, Move!")), 1),
        f("button", {
          type: "button",
          onClick: v[1] || (v[1] = (p) => x(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(s)("Cancel")), 1)
      ]),
      default: F(() => [
        f("div", vh, [
          bh,
          f("div", yh, [
            f("h3", Sh, E(x(s)("Move files")), 1),
            f("div", wh, [
              (_(!0), C(lt, null, wt(i.value, (p) => (_(), C("p", _h, [
                p.type == "dir" ? (_(), C("svg", xh, Dh)) : (_(), C("svg", Ch, Mh)),
                f("span", $h, E(p.path), 1)
              ]))), 256)),
              f("p", Th, E(x(s)("Are you sure you want to move these files?")), 1),
              f("p", Ih, [
                Ah,
                f("span", Lh, E(r.selection.items.to.path), 1)
              ]),
              d.value.length ? (_(), q(Ot, {
                key: 0,
                onHidden: v[0] || (v[0] = (p) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  et(E(d.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Nh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ModalArchive: th,
  ModalDelete: dc,
  ModalMessage: yc,
  ModalMove: Ph,
  ModalNewFile: jc,
  ModalNewFolder: Mc,
  ModalPreview: hd,
  ModalRename: Ed,
  ModalUnarchive: mh,
  ModalUpload: Rd
}, Symbol.toStringTag, { value: "Module" })), Ge = {
  VueFinder: Vl,
  ...Nh
};
const Vh = {
  install(r) {
    for (const t in Ge)
      if (Ge.hasOwnProperty(t)) {
        const s = Ge[t];
        r.component(s.name, s);
      }
  }
};
export {
  Vh as default
};
