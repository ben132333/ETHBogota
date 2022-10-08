(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [465],
  {
    18446: function (n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/blog/category/[slug]",
        function () {
          return t(90914);
        },
      ]);
    },
    32094: function (n, e, t) {
      "use strict";
      t.d(e, {
        D: function () {
          return l;
        },
      });
      var r = t(85893),
        s = t(94184),
        a = t.n(s),
        o = t(51933);
      function l(n) {
        var e = n.lines,
          t = n.preview,
          s = n.className;
        return (0, r.jsxs)(o.uT, { variant: "large", as: "h3", className: a()([[], ["max-h-[1.5rem]", "line-clamp-1"], ["max-h-[3rem]", "line-clamp-2"], ["max-h-[4.5rem]", "line-clamp-3"], ["max-h-[6rem]", "line-clamp-4"]][e], s), children: [t, " "] });
      }
    },
    47672: function (n, e, t) {
      "use strict";
      t.d(e, {
        G: function () {
          return w;
        },
      });
      var r = t(7297),
        s = t(85893),
        a = t(38461),
        o = t(51933),
        l = t(6990),
        i = t(94184),
        c = t.n(i);
      function u() {
        var n = (0, r.Z)(["\n    fragment ContentBlogPostFeedCategory_post on Blog_Post {\n      category {\n        slug\n        name\n      }\n    }\n  "]);
        return (
          (u = function () {
            return n;
          }),
          n
        );
      }
      function d(n) {
        var e = n.post,
          t = n.className,
          r = e.category;
        return r ? (0, s.jsx)(o.rU, { href: l.Z.blogCategory(r.slug || ""), className: "inline-flex", children: (0, s.jsx)(o.X6, { variant: "label", className: c()("br-6 inline-flex items-center bg-line-2 px-2.5 py-0.5", t), children: r.name }) }) : null;
      }
      var m = { post: (0, a.ZP)(u()) },
        h = t(32094),
        g = { short: new Intl.DateTimeFormat([], { year: "numeric", month: "short", day: "numeric" }), long: new Intl.DateTimeFormat([], { year: "numeric", month: "long", day: "numeric" }) };
      function p(n) {
        var e = n.timestamp,
          t = n.monthStyle,
          r = void 0 === t ? "short" : t,
          a = n.className;
        return (0, s.jsx)("time", { className: c()(a), dateTime: e, children: (0, s.jsx)(o.uT, { as: "span", variant: "small", color: "contrast-low", children: g[r].format(new Date(e)) }) });
      }
      function v() {
        var n = (0, r.Z)(["\n    fragment ContentBlogPostFeedCard_post on Blog_Post {\n      ...ContentBlogPostFeedCategory_post\n      publishDate\n      title\n      preview\n      slug\n      id\n      cardImage {\n        url(width: 1234, height: 766)\n      }\n      authors {\n        edges {\n          node {\n            name\n            slug\n            avatarAsset {\n              url(height: 100, width: 100)\n            }\n          }\n        }\n      }\n    }\n    ", "\n  "]);
        return (
          (v = function () {
            return n;
          }),
          n
        );
      }
      function f(n) {
        var e = n.post,
          t = e.title,
          r = e.cardImage,
          a = e.slug,
          i = e.preview,
          c = e.publishDate;
        return (0, s.jsxs)("article", {
          className: "h-[570px] overflow-hidden border-.5",
          style: { borderRadius: "6px" },
          children: [
            (0, s.jsx)("div", { className: "h-1/2", children: (0, s.jsx)(o.rU, { href: l.Z.blogPost(a || ""), children: (0, s.jsx)("div", { className: "h-full bg-cover bg-center", style: { backgroundImage: "url(".concat(null === r || void 0 === r ? void 0 : r.url, ")") } }) }) }),
            (0, s.jsxs)("div", { className: "flex h-1/2 flex-col p-6", children: [(0, s.jsxs)("header", { className: "mb-4", children: [(0, s.jsx)(d, { post: e, className: "mb-3" }), (0, s.jsx)(o.X6, { as: "h2", variant: "h5", className: "mb-1 uppercase line-clamp-2", children: (0, s.jsx)(o.rU, { variant: "custom", weight: "inherit", href: l.Z.blogPost(a || ""), children: t }) }), (0, s.jsx)("div", { children: (0, s.jsx)(p, { timestamp: c }) })] }), i ? (0, s.jsx)(h.D, { preview: i, lines: 3, className: "flex-1" }) : null] }),
          ],
        });
      }
      var x = { post: (0, a.ZP)(v(), m.post) };
      function j() {
        var n = (0, r.Z)(["\n    fragment ContentBlogPostFeed_posts on _Blog_PostConnection {\n      edges {\n        cursor\n        node {\n          ...ContentBlogPostFeedCard_post\n        }\n      }\n    }\n    ", "\n  "]);
        return (
          (j = function () {
            return n;
          }),
          n
        );
      }
      function w(n) {
        var e = n.posts;
        return (0, s.jsx)(s.Fragment, {
          children: e.edges.map(function (n) {
            return n.node ? (0, s.jsx)(f, { post: n.node }, n.cursor) : null;
          }),
        });
      }
      (0, a.ZP)(j(), x.post);
    },
    90914: function (n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          __N_SSP: function () {
            return i;
          },
        });
      var r = t(85893),
        s = t(51933),
        a = t(35247),
        o = t(47672),
        l = t(37681),
        i = !0;
      e.default = function (n) {
        var e,
          t = n.content;
        if (!(null === t || void 0 === t ? void 0 : t.data)) throw new Error("Content was not provided");
        var i = t.data,
          c = null === i || void 0 === i ? void 0 : i.posts,
          u = null === (e = i.category) || void 0 === e ? void 0 : e.name;
        return (0, r.jsxs)(a.j, { children: [(0, r.jsx)(l.S, { title: "".concat(u, " DeMuse Blog"), description: "Discover news, updates, drops, and features on the first plantform that connects artists and fans all around the world. Welcome to the DeMuse Blog." }), (0, r.jsxs)("div", { className: "my-6 mx-auto w-full md:my-16", style: { maxWidth: "1284px" }, children: [u ? (0, r.jsx)(s.X6, { as: "h1", className: "mb-5 uppercase", weight: "black", variant: "h3", children: u }) : null, (0, r.jsx)("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3", children: c ? (0, r.jsx)(o.G, { posts: c }) : null })] })] });
      };
    },
  },
  function (n) {
    n.O(0, [158, 261, 3825, 5212, 9841, 5247, 9774, 2888, 179], function () {
      return (e = 18446), n((n.s = e));
      var e;
    });
    var e = n.O();
    _N_E = e;
  },
]);
//# sourceMappingURL=[slug]-369408304ed346fa.js.map
