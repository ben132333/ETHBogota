(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2492],
  {
    47443: function (n, t, e) {
      var r = e(42118);
      n.exports = function (n, t) {
        return !!(null == n ? 0 : n.length) && r(n, t, 0) > -1;
      };
    },
    1196: function (n) {
      n.exports = function (n, t, e) {
        for (var r = -1, o = null == n ? 0 : n.length; ++r < o; ) if (e(t, n[r])) return !0;
        return !1;
      };
    },
    89881: function (n, t, e) {
      var r = e(47816),
        o = e(99291)(r);
      n.exports = o;
    },
    47816: function (n, t, e) {
      var r = e(28483),
        o = e(3674);
      n.exports = function (n, t) {
        return n && r(n, t, o);
      };
    },
    42118: function (n, t, e) {
      var r = e(41848),
        o = e(62722),
        a = e(42351);
      n.exports = function (n, t, e) {
        return t === t ? a(n, t, e) : r(n, o, e);
      };
    },
    62722: function (n) {
      n.exports = function (n) {
        return n !== n;
      };
    },
    69199: function (n, t, e) {
      var r = e(89881),
        o = e(98612);
      n.exports = function (n, t) {
        var e = -1,
          a = o(n) ? Array(n.length) : [];
        return (
          r(n, function (n, r, o) {
            a[++e] = t(n, r, o);
          }),
          a
        );
      };
    },
    82689: function (n, t, e) {
      var r = e(29932),
        o = e(97786),
        a = e(67206),
        i = e(69199),
        s = e(71131),
        l = e(7518),
        u = e(85022),
        c = e(6557),
        d = e(1469);
      n.exports = function (n, t, e) {
        t = t.length
          ? r(t, function (n) {
              return d(n)
                ? function (t) {
                    return o(t, 1 === n.length ? n[0] : n);
                  }
                : n;
            })
          : [c];
        var f = -1;
        t = r(t, l(a));
        var v = i(n, function (n, e, o) {
          return {
            criteria: r(t, function (t) {
              return t(n);
            }),
            index: ++f,
            value: n,
          };
        });
        return s(v, function (n, t) {
          return u(n, t, e);
        });
      };
    },
    18674: function (n) {
      n.exports = function (n) {
        return function (t) {
          return null == n ? void 0 : n[t];
        };
      };
    },
    71131: function (n) {
      n.exports = function (n, t) {
        var e = n.length;
        for (n.sort(t); e--; ) n[e] = n[e].value;
        return n;
      };
    },
    45652: function (n, t, e) {
      var r = e(88668),
        o = e(47443),
        a = e(1196),
        i = e(74757),
        s = e(23593),
        l = e(21814);
      n.exports = function (n, t, e) {
        var u = -1,
          c = o,
          d = n.length,
          f = !0,
          v = [],
          p = v;
        if (e) (f = !1), (c = a);
        else if (d >= 200) {
          var m = t ? null : s(n);
          if (m) return l(m);
          (f = !1), (c = i), (p = new r());
        } else p = t ? [] : v;
        n: for (; ++u < d; ) {
          var h = n[u],
            g = t ? t(h) : h;
          if (((h = e || 0 !== h ? h : 0), f && g === g)) {
            for (var x = p.length; x--; ) if (p[x] === g) continue n;
            t && p.push(g), v.push(h);
          } else c(p, g, e) || (p !== v && p.push(g), v.push(h));
        }
        return v;
      };
    },
    26393: function (n, t, e) {
      var r = e(33448);
      n.exports = function (n, t) {
        if (n !== t) {
          var e = void 0 !== n,
            o = null === n,
            a = n === n,
            i = r(n),
            s = void 0 !== t,
            l = null === t,
            u = t === t,
            c = r(t);
          if ((!l && !c && !i && n > t) || (i && s && u && !l && !c) || (o && s && u) || (!e && u) || !a) return 1;
          if ((!o && !i && !c && n < t) || (c && e && a && !o && !i) || (l && e && a) || (!s && a) || !u) return -1;
        }
        return 0;
      };
    },
    85022: function (n, t, e) {
      var r = e(26393);
      n.exports = function (n, t, e) {
        for (var o = -1, a = n.criteria, i = t.criteria, s = a.length, l = e.length; ++o < s; ) {
          var u = r(a[o], i[o]);
          if (u) return o >= l ? u : u * ("desc" == e[o] ? -1 : 1);
        }
        return n.index - t.index;
      };
    },
    99291: function (n, t, e) {
      var r = e(98612);
      n.exports = function (n, t) {
        return function (e, o) {
          if (null == e) return e;
          if (!r(e)) return n(e, o);
          for (var a = e.length, i = t ? a : -1, s = Object(e); (t ? i-- : ++i < a) && !1 !== o(s[i], i, s); );
          return e;
        };
      };
    },
    23593: function (n, t, e) {
      var r = e(58525),
        o = e(50308),
        a = e(21814),
        i =
          r && 1 / a(new r([, -0]))[1] == 1 / 0
            ? function (n) {
                return new r(n);
              }
            : o;
      n.exports = i;
    },
    42351: function (n) {
      n.exports = function (n, t, e) {
        for (var r = e - 1, o = n.length; ++r < o; ) if (n[r] === t) return r;
        return -1;
      };
    },
    83729: function (n, t, e) {
      var r = e(18674)({ "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" });
      n.exports = r;
    },
    66678: function (n, t, e) {
      var r = e(85990);
      n.exports = function (n) {
        return r(n, 4);
      };
    },
    50361: function (n, t, e) {
      var r = e(85990);
      n.exports = function (n) {
        return r(n, 5);
      };
    },
    39693: function (n) {
      n.exports = function (n) {
        for (var t = -1, e = null == n ? 0 : n.length, r = 0, o = []; ++t < e; ) {
          var a = n[t];
          a && (o[r++] = a);
        }
        return o;
      };
    },
    35161: function (n, t, e) {
      var r = e(29932),
        o = e(67206),
        a = e(69199),
        i = e(1469);
      n.exports = function (n, t) {
        return (i(n) ? r : a)(n, o(t, 3));
      };
    },
    50308: function (n) {
      n.exports = function () {};
    },
    89734: function (n, t, e) {
      var r = e(21078),
        o = e(82689),
        a = e(5976),
        i = e(16612),
        s = a(function (n, t) {
          if (null == n) return [];
          var e = t.length;
          return e > 1 && i(n, t[0], t[1]) ? (t = []) : e > 2 && i(t[0], t[1], t[2]) && (t = [t[0]]), o(n, r(t, 1), []);
        });
      n.exports = s;
    },
    27955: function (n, t, e) {
      var r = e(79833),
        o = e(83729),
        a = /&(?:amp|lt|gt|quot|#39);/g,
        i = RegExp(a.source);
      n.exports = function (n) {
        return (n = r(n)) && i.test(n) ? n.replace(a, o) : n;
      };
    },
    45578: function (n, t, e) {
      var r = e(67206),
        o = e(45652);
      n.exports = function (n, t) {
        return n && n.length ? o(n, r(t, 2)) : [];
      };
    },
    41127: function (n, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/blog/[slug]",
        function () {
          return e(61743);
        },
      ]);
    },
    58725: function (n, t, e) {
      "use strict";
      e.d(t, {
        Y: function () {
          return d;
        },
      });
      var r = e(7297),
        o = e(85893),
        a = e(38461),
        i = e(94184),
        s = e.n(i),
        l = e(6990),
        u = e(51933);
      function c() {
        var n = (0, r.Z)(["\n    fragment ContentBlogPostCategory_post on Blog_Post {\n      category {\n        slug\n        name\n      }\n    }\n  "]);
        return (
          (c = function () {
            return n;
          }),
          n
        );
      }
      function d(n) {
        var t = n.post,
          e = n.className,
          r = t.category;
        return r ? (0, o.jsx)(u.rU, { href: l.Z.blogCategory(r.slug || ""), className: "inline-flex", children: (0, o.jsx)(u.X6, { variant: "label", className: s()("br-6 inline-flex items-center bg-line-2 px-2.5 py-0.5", e), children: r.name }) }) : null;
      }
      (0, a.ZP)(c());
    },
    61743: function (n, t, e) {
      "use strict";
      e.r(t),
        e.d(t, {
          __N_SSP: function () {
            return z;
          },
          default: function () {
            return H;
          },
        });
      var r = e(85893),
        o = e(35247),
        a = e(7297),
        i = e(51933),
        s = e(38461),
        l = e(94184),
        u = e.n(l),
        c = { short: new Intl.DateTimeFormat([], { year: "numeric", month: "short", day: "numeric" }), long: new Intl.DateTimeFormat([], { year: "numeric", month: "long", day: "numeric" }) };
      function d(n) {
        var t = n.timestamp,
          e = n.monthStyle,
          o = void 0 === e ? "short" : e,
          a = n.className;
        return (0, r.jsx)("time", { className: u()(a), dateTime: t, children: (0, r.jsx)(i.uT, { as: "span", variant: "small", color: "contrast-low", children: c[o].format(new Date(t)) }) });
      }
      var f = e(58725),
        v = e(67294),
        p = e(35161),
        m = e.n(p),
        h = e(27955),
        g = e.n(h),
        x = e(89734),
        b = e.n(x),
        j = e(27361),
        y = e.n(j),
        N = e(26042),
        _ = e(69396),
        w = e(66678),
        C = e.n(w),
        k = e(39693),
        P = e.n(k),
        B = e(85564),
        T = e.n(B),
        S = e(45578),
        Z = e.n(S),
        E = e(50361),
        M = e.n(E);
      var A = e(6903),
        D = e.n(A);
      function O() {
        var n = (0, a.Z)(["\n    fragment ContentBlogPostHeroMediumContent_post on Blog_MediumContentBlock {\n      __typename\n      id\n      mediumSlug\n      mediumJson\n      title\n    }\n  "]);
        return (
          (O = function () {
            return n;
          }),
          n
        );
      }
      var X = { 3: "blog-title", 1: "blog-subtitle", 4: "blog-image", 10: "blog-subtitle", 13: "blog-subtitle", 9: "blog-bullet" };
      function I(n) {
        var t = n.mediumContent,
          e = (0, v.useState)(JSON.parse(t.replace("])}while(1);</x>", "")))[0],
          o = { virtuals: y()(e, "payload.value.virtuals", {}), paragraphs: y()(e, "payload.value.content.bodyModel.paragraphs"), updatedAt: y()(e, "payload.value.updatedAt") };
        return (0, r.jsx)("div", {
          className: D().wrapper,
          children: (0, r.jsx)("div", {
            className: "content-wrap",
            children: (0, r.jsx)("div", {
              className: "blog-post",
              children: m()(o.paragraphs, function (n, t) {
                return (0, r.jsx)(F, { i: t, p: n }, t);
              }),
            }),
          }),
        });
      }
      function F(n) {
        var t = n.p,
          e = n.i,
          o = X[t.type],
          a = (0, v.useState)(
            t
              ? (function (n) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                  if (!t.length) return n;
                  var e = C()(n),
                    o = m()(t, function (n, t, e) {
                      return {
                        styles: P()(
                          m()(e, function (t) {
                            return t.start === n.start ? t.type : null;
                          })
                        ),
                        start: n.start,
                        end: n.end,
                        anchorType: n.anchorType,
                        href: n.href,
                        id: "".concat(n.start).concat(n.end),
                      };
                    });
                  (o = Z()(o, "id")),
                    (o = M()(o)),
                    (o = T()(
                      o.map(function (n, t, e) {
                        var r,
                          o = n.end < (null === (r = e[t - 1]) || void 0 === r ? void 0 : r.end) ? (0, _.Z)((0, N.Z)({}, e[t - 1]), { start: n.end + 1, id: "".concat(t, "-").concat(100 * Math.random()) }) : null;
                        return o ? [n, o] : n;
                      })
                    )).unshift("b");
                  var a = m()(o, function (n, t, a) {
                    var i,
                      s,
                      l = a[t + 1],
                      u = a[t - 1],
                      c = l ? e.substr(n.end, l.start - n.end) : e.substr(n.end, e.length);
                    if ("b" === n) {
                      var d = l ? l.start : e.length;
                      return e.substr(0, d);
                    }
                    var f,
                      v = e.substr(n.start, n.end - n.start);
                    (null === l || void 0 === l ? void 0 : l.start) < n.end && ((v = e.substr(n.start, l.start - n.start)), !l.href && n.href && ((o[t + 1].href = n.href), (o[t + 1].anchorType = 0))), (null === u || void 0 === u ? void 0 : u.end) >= n.end && (n.styles = null === (f = n.styles) || void 0 === f ? void 0 : f.concat(u.styles));
                    var p = 0 === n.anchorType,
                      m = (null === (i = n.styles) || void 0 === i ? void 0 : i.includes(1)) ? "text-bold" : "",
                      h = (null === (s = n.styles) || void 0 === s ? void 0 : s.includes(2)) ? "text-italic" : "";
                    return p && n.href.indexOf("videoFoam=true") > -1 ? (0, r.jsx)("div", { className: "aspect-ratio", children: (0, r.jsx)("iframe", { src: n.href, title: "video", className: "iframe" }, t) }, t) : p ? (0, r.jsxs)("span", { children: [(0, r.jsx)("a", { className: "".concat(m, " ").concat(h), rel: "noreferrer", target: n.href.includes("#") ? "" : "_blank", href: n.href, children: v }, n.id), c] }, n.id) : m || h ? (0, r.jsxs)("span", { children: [(0, r.jsx)("span", { className: "".concat(m, " ").concat(h), children: v }), (0, r.jsx)("span", { children: c })] }, n.id) : void 0;
                  });
                  return (0, r.jsx)("span", { children: a });
                })(g()(t.text), b()(t.markups, "start"))
              : null
          ),
          i = a[0];
        return t ? ("blog-image" === o ? (0, r.jsx)("img", { id: t.name, alt: t.name, style: { maxWidth: "".concat(t.metadata.originalWidth, "px"), width: "100%" }, className: o, src: "https://cdn-images-1.medium.com/max/".concat(t.metadata.originalWidth || 720, "/").concat(t.metadata.id) }, e) : "blog-bullet" === o ? (0, r.jsx)("h3", { id: t.name, className: o, children: i }, e) : "blog-subtitle" === o ? (0, r.jsx)("h3", { id: t.name, className: "".concat(o, " ").concat(13 === t.type ? "bold list-start" : ""), children: i }, e) : "blog-title" === o ? null : (0, r.jsx)("h3", { id: t.name, className: o, children: i }, e)) : (0, r.jsx)("div", {});
      }
      var J = { post: (0, s.ZP)(O()) };
      function W() {
        var n = (0, a.Z)(["\n    fragment ContentBlogPost_post on Blog_Post {\n      publishDate\n      title\n      slug\n      content {\n        ... on Blog_MediumContentBlock {\n          ...ContentBlogPostHeroMediumContent_post\n        }\n      }\n      authors {\n        edges {\n          node {\n            name\n            slug\n            avatarAsset {\n              url(height: 100, width: 100)\n            }\n          }\n        }\n      }\n    }\n    ", "\n  "]);
        return (
          (W = function () {
            return n;
          }),
          n
        );
      }
      function Y(n) {
        var t,
          e,
          o,
          a,
          s,
          l = n.post,
          u = null === (e = null === (t = l.authors) || void 0 === t ? void 0 : t.edges[0]) || void 0 === e ? void 0 : e.node;
        return (0, r.jsxs)("div", {
          className: "mb-20 px-4",
          children: [
            (0, r.jsx)("div", {
              className: "mb-5",
              children: (0, r.jsxs)("div", {
                className: "inline-flex items-center space-x-4",
                children: [(0, r.jsx)("div", { style: { backgroundImage: "url(".concat((null === u || void 0 === u || null === (o = u.avatarAsset) || void 0 === o ? void 0 : o.url) || "https://royal-io.imgix.net/111495b2-9498-43b0-bb68-3b5348f5c979.png?width=170", ")"), backgroundSize: (null === u || void 0 === u || null === (a = u.avatarAsset) || void 0 === a ? void 0 : a.url) ? "cover" : "70%", backgroundPosition: "center" }, className: "bg-position-center h-12 w-12 rounded-full bg-black bg-contain bg-no-repeat p-2" }), (0, r.jsxs)("div", { children: [(0, r.jsx)(i.X6, { as: "h5", className: "uppercase", variant: "label-lg", children: (null === u || void 0 === u ? void 0 : u.name) || "DeMuse" }), (0, r.jsx)(d, { timestamp: l.publishDate })] })],
              }),
            }),
            (0, r.jsx)(i.X6, { as: "h1", className: "mb-5 uppercase", weight: "black", variant: "h3", children: l.title }),
            (0, r.jsx)(f.Y, { post: l, display: "plain", className: "text-sm" }),
            (0, r.jsx)("div", {
              className: "mb-12 space-y-4",
              children:
                null === (s = l.content) || void 0 === s
                  ? void 0
                  : s.map(function (n) {
                      return "Blog_MediumContentBlock" === (null === n || void 0 === n ? void 0 : n.__typename) ? (0, r.jsx)(I, { mediumContent: n.mediumJson }, n.id) : null;
                    }),
            }),
          ],
        });
      }
      (0, s.ZP)(W(), J.post);
      var q = e(37681),
        z = !0,
        H = function (n) {
          var t,
            e,
            a = n.content;
          if (!(null === a || void 0 === a || null === (t = a.data) || void 0 === t ? void 0 : t.post)) throw new Error("Content was not provided");
          var i = a.data.post;
          return (0, r.jsxs)(o.j, { children: [(0, r.jsx)(q.S, { title: i.title, description: i.preview || i.title, image: null === (e = i.cardImage) || void 0 === e ? void 0 : e.url }), (0, r.jsx)("div", { className: "mt-6 max-w-3xl md:mx-auto md:mt-16", children: i ? (0, r.jsx)(Y, { post: i }) : null })] });
        };
    },
    6903: function (n) {
      n.exports = { wrapper: "content-blog-post-medium-content_wrapper__zoSYT" };
    },
  },
  function (n) {
    n.O(0, [158, 261, 3825, 5212, 9841, 5247, 9774, 2888, 179], function () {
      return (t = 41127), n((n.s = t));
      var t;
    });
    var t = n.O();
    _N_E = t;
  },
]);
//# sourceMappingURL=[slug]-cff1359dc5792e63.js.map
