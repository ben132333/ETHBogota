(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9195],
  {
    67801: function (n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/blog",
        function () {
          return t(18830);
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
        o = t.n(s),
        a = t(51933);
      function l(n) {
        var e = n.lines,
          t = n.preview,
          s = n.className;
        return (0, r.jsxs)(a.uT, { variant: "large", as: "h3", className: o()([[], ["max-h-[1.5rem]", "line-clamp-1"], ["max-h-[3rem]", "line-clamp-2"], ["max-h-[4.5rem]", "line-clamp-3"], ["max-h-[6rem]", "line-clamp-4"]][e], s), children: [t, " "] });
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
        o = t(38461),
        a = t(51933),
        l = t(6990),
        i = t(94184),
        c = t.n(i);
      function d() {
        var n = (0, r.Z)(["\n    fragment ContentBlogPostFeedCategory_post on Blog_Post {\n      category {\n        slug\n        name\n      }\n    }\n  "]);
        return (
          (d = function () {
            return n;
          }),
          n
        );
      }
      function u(n) {
        var e = n.post,
          t = n.className,
          r = e.category;
        return r ? (0, s.jsx)(a.rU, { href: l.Z.blogCategory(r.slug || ""), className: "inline-flex", children: (0, s.jsx)(a.X6, { variant: "label", className: c()("br-6 inline-flex items-center bg-line-2 px-2.5 py-0.5", t), children: r.name }) }) : null;
      }
      var m = { post: (0, o.ZP)(d()) },
        h = t(32094),
        f = { short: new Intl.DateTimeFormat([], { year: "numeric", month: "short", day: "numeric" }), long: new Intl.DateTimeFormat([], { year: "numeric", month: "long", day: "numeric" }) };
      function g(n) {
        var e = n.timestamp,
          t = n.monthStyle,
          r = void 0 === t ? "short" : t,
          o = n.className;
        return (0, s.jsx)("time", { className: c()(o), dateTime: e, children: (0, s.jsx)(a.uT, { as: "span", variant: "small", color: "contrast-low", children: f[r].format(new Date(e)) }) });
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
      function p(n) {
        var e = n.post,
          t = e.title,
          r = e.cardImage,
          o = e.slug,
          i = e.preview,
          c = e.publishDate;
        return (0, s.jsxs)("article", {
          className: "h-[570px] overflow-hidden border-.5",
          style: { borderRadius: "6px" },
          children: [
            (0, s.jsx)("div", { className: "h-1/2", children: (0, s.jsx)(a.rU, { href: l.Z.blogPost(o || ""), children: (0, s.jsx)("div", { className: "h-full bg-cover bg-center", style: { backgroundImage: "url(".concat(null === r || void 0 === r ? void 0 : r.url, ")") } }) }) }),
            (0, s.jsxs)("div", { className: "flex h-1/2 flex-col p-6", children: [(0, s.jsxs)("header", { className: "mb-4", children: [(0, s.jsx)(u, { post: e, className: "mb-3" }), (0, s.jsx)(a.X6, { as: "h2", variant: "h5", className: "mb-1 uppercase line-clamp-2", children: (0, s.jsx)(a.rU, { variant: "custom", weight: "inherit", href: l.Z.blogPost(o || ""), children: t }) }), (0, s.jsx)("div", { children: (0, s.jsx)(g, { timestamp: c }) })] }), i ? (0, s.jsx)(h.D, { preview: i, lines: 3, className: "flex-1" }) : null] }),
          ],
        });
      }
      var x = { post: (0, o.ZP)(v(), m.post) };
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
            return n.node ? (0, s.jsx)(p, { post: n.node }, n.cursor) : null;
          }),
        });
      }
      (0, o.ZP)(j(), x.post);
    },
    58725: function (n, e, t) {
      "use strict";
      t.d(e, {
        Y: function () {
          return u;
        },
      });
      var r = t(7297),
        s = t(85893),
        o = t(38461),
        a = t(94184),
        l = t.n(a),
        i = t(6990),
        c = t(51933);
      function d() {
        var n = (0, r.Z)(["\n    fragment ContentBlogPostCategory_post on Blog_Post {\n      category {\n        slug\n        name\n      }\n    }\n  "]);
        return (
          (d = function () {
            return n;
          }),
          n
        );
      }
      function u(n) {
        var e = n.post,
          t = n.className,
          r = e.category;
        return r ? (0, s.jsx)(c.rU, { href: i.Z.blogCategory(r.slug || ""), className: "inline-flex", children: (0, s.jsx)(c.X6, { variant: "label", className: l()("br-6 inline-flex items-center bg-line-2 px-2.5 py-0.5", t), children: r.name }) }) : null;
      }
      (0, o.ZP)(d());
    },
    99114: function (n, e, t) {
      "use strict";
      t.d(e, {
        Q: function () {
          return u;
        },
      });
      var r = t(26042),
        s = t(69396),
        o = t(99534),
        a = t(85893),
        l = t(67294),
        i = t(56063),
        c = t(41664),
        d = t.n(c),
        u = (0, l.forwardRef)(function (n, e) {
          var t = n.href,
            l = n.children,
            c = (0, o.Z)(n, ["href", "children"]);
          return (0, a.jsx)(d(), { href: t, passHref: !0, ref: e, children: (0, a.jsx)(i.AN, (0, s.Z)((0, r.Z)({}, c), { children: l })) });
        });
      u.displayName = "LinkButton";
    },
    18830: function (n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          __N_SSP: function () {
            return y;
          },
          default: function () {
            return Z;
          },
        });
      var r = t(85893),
        s = t(35247),
        o = t(26042),
        a = t(69396),
        l = t(7297),
        i = t(38461),
        c = t(6990),
        d = t(99114),
        u = t(58725),
        m = t(32094),
        h = t(51933);
      function f() {
        var n = (0, l.Z)(["\n    fragment ContentBlogPostFeaturedFeedItem_post on Blog_Post {\n      category {\n        slug\n        name\n      }\n      title\n      preview\n      slug\n      id\n      cardImage {\n        url(width: 1234, height: 766)\n      }\n    }\n  "]);
        return (
          (f = function () {
            return n;
          }),
          n
        );
      }
      function g(n) {
        var e = n.post,
          t = e.id,
          s = e.title,
          o = e.cardImage,
          a = e.slug,
          l = e.preview;
        return (0, r.jsxs)(
          "div",
          {
            className: "rounded border-.5 transition-all hover:shadow-md md:flex md:h-96",
            children: [
              (0, r.jsx)("div", { className: "h-64 overflow-hidden md:h-full md:w-2/5 lg:w-1/2", children: (0, r.jsx)(h.rU, { href: c.Z.blogPost(a || ""), children: (0, r.jsx)("div", { className: "h-full bg-cover bg-center", style: { backgroundImage: "url(".concat(null === o || void 0 === o ? void 0 : o.url, ")") } }) }) }),
              (0, r.jsxs)("div", { className: "flex flex-col justify-center p-6 md:w-3/5 md:p-8 lg:w-1/2 lg:p-12", children: [(0, r.jsx)(u.Y, { post: e, className: "mb-4" }), (0, r.jsx)(h.X6, { as: "h2", variant: "h4", className: "mb-2 uppercase line-clamp-2", children: (0, r.jsx)(h.rU, { variant: "custom", weight: "inherit", href: c.Z.blogPost(a || ""), children: s }) }), (0, r.jsx)(m.D, { preview: l || "", lines: 3, className: "mb-6 flex-shrink-0" }), (0, r.jsx)("div", { children: (0, r.jsx)(d.Q, { href: c.Z.blogPost(a || ""), className: "inline-block w-full sm:w-auto", children: "View Post" }) })] }),
            ],
          },
          t
        );
      }
      var v = { post: (0, i.ZP)(f()) },
        p = t(46066),
        x = t(98362),
        j = t.n(x);
      function w() {
        var n = (0, l.Z)(["\n    fragment ContentBlogPostFeaturedFeed_featured on _Blog_PostConnection {\n      edges {\n        cursor\n        node {\n          id\n          ...ContentBlogPostFeaturedFeedItem_post\n        }\n      }\n    }\n    ", "\n  "]);
        return (
          (w = function () {
            return n;
          }),
          n
        );
      }
      var N = { dots: !0, infinite: !0, speed: 500, slidesToShow: 1, slidesToScroll: 1, arrows: !1, swipeToSlide: !0, autoplay: !0, autoplaySpeed: 5e3 };
      function b(n) {
        var e = n.featured;
        return (0, r.jsx)("div", {
          className: j().contentBlogPostFeaturedFeed,
          children: (0, r.jsx)(
            p.Z,
            (0, a.Z)((0, o.Z)({}, N), {
              children: e.edges.map(function (n) {
                var e;
                return (0, r.jsx)("div", { className: "md:flex md:h-96", children: n.node ? (0, r.jsx)(g, { post: n.node }) : null }, (null === (e = n.node) || void 0 === e ? void 0 : e.id) || n.cursor);
              }),
            })
          ),
        });
      }
      (0, i.ZP)(w(), v.post);
      var _ = t(47672),
        P = t(37681),
        y = !0,
        Z = function (n) {
          var e = n.content;
          if (!(null === e || void 0 === e ? void 0 : e.data)) throw new Error("Content was not provided");
          var t = e.data,
            o = null === t || void 0 === t ? void 0 : t.featured,
            a = null === t || void 0 === t ? void 0 : t.posts;
          return (0, r.jsxs)(s.j, { children: [(0, r.jsx)(P.S, { title: "DeMuse Blog", description: "Discover news, updates, drops, and features on the first plantform that connects artists and fans all around the world. Welcome to the DeMuse Blog." }), (0, r.jsxs)("div", { className: "my-6 mx-auto w-full md:my-16", style: { maxWidth: "1284px" }, children: [(0, r.jsx)("div", { className: "mb-24", children: o ? (0, r.jsx)(b, { featured: o }) : null }), (0, r.jsx)("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3", children: a ? (0, r.jsx)(_.G, { posts: a }) : null })] })] });
        };
    },
    98362: function (n) {
      n.exports = { contentBlogPostFeaturedFeed: "content-blog-post-featured-feed_contentBlogPostFeaturedFeed__wIBPZ" };
    },
  },
  function (n) {
    n.O(0, [158, 261, 3825, 5212, 6066, 9841, 5247, 9774, 2888, 179], function () {
      return (e = 67801), n((n.s = e));
      var e;
    });
    var e = n.O();
    _N_E = e;
  },
]);
//# sourceMappingURL=blog-9979981e914a42fc.js.map
