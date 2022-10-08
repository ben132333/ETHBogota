"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9841],
  {
    56063: function (t, e, n) {
      n.d(e, {
        AN: function () {
          return f;
        },
        Z6: function () {
          return v;
        },
        zx: function () {
          return h;
        },
      });
      var r = n(26042),
        a = n(69396),
        i = n(99534),
        o = n(85893),
        s = n(67294),
        c = n(85502),
        u = "tracking-[0.4px] rounded-lg relative font-interregular font-regular disabled:cursor-default cursor-pointer disabled:pointer-events-none select-none",
        l = "ease-in-out transition-all transition duration-200 overflow-ellipsis whitespace-nowrap",
        d = {
          variants: {
            variant: {
              primary: "uppercase border border-surface-2 bg-surface-2 hover:bg-surface-0 hover:text-contrast-max-inverse text-contrast-high-inverse disabled:border-surface-2 disabled:opacity-30 disabled:text-contrast-min-inverse",
              secondary: "uppercase border border-base-1 bg-base-1 text-contrast-high hover:border-surface-0 hover:bg-surface-0 hover:text-contrast-max-inverse",
              tertiary: "uppercase border border-base-2 bg-base-2 text-contrast-min hover:border-surface-2 hover:bg-surface-2 hover:text-contrast-min-inverse",
              destructive: "uppercase border border-destructive-1 bg-destructive-1 hover:opacity-80  text-contrast-high-inverse disabled:border-surface-2 disabled:opacity-30 disabled:text-contrast-max-inverse",
              interactive: "uppercase border border-interactive-1 bg-interactive-1 hover:text-contrast-high-inverse  hover:opacity-80 text-contrast-high-inverse disabled:border-base-2 disabled:bg-base-1 disabled:text-base-2",
              link: "link text-contrast-default hover:text-interactive-1",
              linkInverse: "link text-contrast-max-inverse hover:text-interactive-1 disabled:text-contrast-low",
              linkInteractive: "link text-interactive-1 hover:opacity-80 disabled:text-contrast-low",
              outline: "uppercase bg-transparent border border-contrast-high text-contrast-high hover:bg-surface-0 hover:text-contrast-max-inverse disabled:border-base-2 disabled:bg-base-1 disabled:text-base-2",
              outlineLight: "uppercase bg-transparent border border-line-2 text-contrast-high hover:bg-surface-0 hover:text-contrast-max-inverse disabled:border-base-2 disabled:bg-base-2 disabled:text-contrast-max-inverse",
              outlineInverseWhite: "uppercase bg-transparent border border-white text-contrast-high-inverse hover:text-black hover:bg-white",
              inverseWhite: "uppercase bg-white border border-white  text-contrast-high hover:text-contrast-high hover:opacity-80",
              unstyled: "uppercase",
            },
            size: { xs: "px-1 py-1 text-button-sm", small: "px-4 py-2 text-button-sm", medium: "px-6 py-3 text-button-sm", large: "px-6 py-4 text-button-sm", trim: "p-0 text-button-sm" },
            loading: { true: "loading pointer-events-none", false: "" },
          },
          defaultVariants: { variant: "primary", size: "medium" },
        },
        f = (0, c.zo)("a", u, l, d),
        h = (0, c.zo)("button", u, l, d),
        v = s.forwardRef(function (t, e) {
          var n = t.children,
            c = t.loading,
            u = t.error,
            l = (0, i.Z)(t, ["children", "loading", "error"]),
            d = (0, s.useState)(!!c),
            f = d[0],
            v = d[1],
            m = (0, s.useState)(""),
            g = m[0],
            b = m[1],
            x = (0, s.useRef)(null);
          return (
            (0, s.useEffect)(
              function () {
                c
                  ? v(!0)
                  : u && f
                  ? (b("error"),
                    v(!1),
                    (x.current = setTimeout(function () {
                      b("");
                    }, 1e3)))
                  : f &&
                    (v(!1),
                    b("success"),
                    (x.current = setTimeout(function () {
                      b("");
                    }, 1e3)));
              },
              [u, c, f]
            ),
            (0, s.useEffect)(function () {
              return function () {
                x.current && clearTimeout(x.current);
              };
            }, []),
            (0, o.jsx)(h, (0, a.Z)((0, r.Z)({ ref: e, loading: c }, l), { children: (0, o.jsx)("span", { children: "error" === g ? "Error" : "success" === g ? "Success" : n }) }))
          );
        });
      v.displayName = "AsyncButton";
    },
    51933: function (t, e, n) {
      n.d(e, {
        OL: function () {
          return k;
        },
        X6: function () {
          return x;
        },
        dL: function () {
          return Z;
        },
        jb: function () {
          return w;
        },
        rU: function () {
          return y;
        },
        uT: function () {
          return p;
        },
      });
      var r,
        a = n(26042),
        i = n(69396),
        o = n(99534),
        s = n(85893),
        c = (n(67294), n(94184)),
        u = n.n(c),
        l = n(8639),
        d = n(41664),
        f = n.n(d),
        h = { "contrast-max": "text-contrast-max", "contrast-high": "text-contrast-high", "contrast-default": "text-contrast-default", "contrast-low": "text-contrast-low", "contrast-max-inverse": "text-contrast-max-inverse", "contrast-high-inverse": "text-contrast-high-inverse", "contrast-default-inverse": "text-contrast-default-inverse", "contrast-low-inverse": "text-contrast-low-inverse", "interactive-1": "text-interactive-1 md:active:font-bold", "accent-1": "text-accent-1", "accent-2": "text-accent-2", "accent-3": "text-accent-3", "destructive-1": "text-destructive-1", unset: "current-color", custom: "" };
      !(function (t) {
        (t.light = "font-light"), (t.semibold = "font-semibold"), (t.bold = "font-bold "), (t.black = "font-black "), (t.inherit = "");
      })(r || (r = {}));
      var v = "ease-in-out transition-all transition duration-150",
        m = {
          heading: { h1: "font-compressedsans text-mobile-heading-h1 md:text-heading-h1 antialiased", h2: "font-compressedsans text-heading-h2 antialiased", h3: "font-compressedsans text-heading-h3 antialiased", h4: "font-compressedsans text-heading-h4 antialiased", h5: "font-compressedsans text-heading-h5 antialiased", h6: "font-compressedsans text-heading-h6 antialiased tracking-wider", "label-lg": "font-mono font-medium text-label-lg uppercase antialiased tracking-wider", label: "font-mono text-label-sm uppercase antialiased tracking-wider" },
          body: { xl: "font-inter md:text-body-xl text-mobile-body-xl antialiased ", large: "font-inter text-body-lg antialiased ", small: "font-inter  text-body-sm antialiased ", xs: "font-inter text-body-xs antialiased " },
          metric: { xl: "font-monolight text-metric-xl uppercase", large: "font-monolight text-metric-lg uppercase", small: "font-monolight text-metric-sm uppercase" },
          anchor: { nav: "antialiased font-inter tracking-wide uppercase text-anchor-sm text-nav-link dark:text-dark-nav-link hover:interactive-1", default: "antialiased font-inter text-contrast-default hover:interactive-1", primary: "antialiased font-inter text-interactive-1 hover:opacity-80", secondary: "antialiased font-inter text-interactive-1 hover:opacity-80", inline: " font-inter text-body-lg semibold text-contrast-default hover:text-contrast-high text-anchor-sm", custom: "" },
        },
        g = { light: "font-light", semibold: "font-semibold", bold: "font-bold", black: "font-black", inherit: "" };
      function b(t) {
        var e = t.as,
          n = t.className,
          r = t.color,
          i = (0, o.Z)(t, ["as", "className", "color"]),
          c = null !== e && void 0 !== e ? e : "p";
        return (0, s.jsx)(c, (0, a.Z)({ className: u()(n, h[r || "contrast-default"]) }, i));
      }
      function x(t) {
        var e = t.weight,
          n = t.variant,
          r = t.className,
          c = (0, o.Z)(t, ["weight", "variant", "className"]),
          l = u()(r, m.heading[n], g[e || "light"]);
        return (0, s.jsx)(b, (0, i.Z)((0, a.Z)({}, c), { className: l }));
      }
      function p(t) {
        var e = t.weight,
          n = t.variant,
          r = t.className,
          c = (0, o.Z)(t, ["weight", "variant", "className"]),
          l = u()(r, m.body[n], g[e || "light"]);
        return (0, s.jsx)(b, (0, i.Z)((0, a.Z)({}, c), { className: l }));
      }
      function w(t) {
        var e = t.weight,
          n = t.variant,
          r = t.className,
          c = (0, o.Z)(t, ["weight", "variant", "className"]),
          l = u()(r, m.metric[n], g[e || "light"]);
        return (0, s.jsx)(b, (0, i.Z)((0, a.Z)({}, c), { className: l }));
      }
      function k(t) {
        var e = t.children,
          n = t.className,
          r = (0, o.Z)(t, ["children", "className"]);
        return (0, s.jsx)(y, (0, i.Z)((0, a.Z)({ className: u()(m.anchor.nav, v, n, "nav-link") }, r), { children: e }));
      }
      function y(t) {
        var e = t.weight,
          n = t.children,
          r = t.className,
          c = t.variant,
          l = t.onClick,
          d = t.target,
          h = (0, o.Z)(t, ["weight", "children", "className", "variant", "onClick", "target"]),
          b = "inline" === c ? "semibold" : e;
        return (0, s.jsx)(f(), (0, i.Z)((0, a.Z)({}, h), { children: (0, s.jsx)("a", { target: d, onClick: l, className: u()(m.anchor[c || "default"], v, r, g[b || "light"]), children: n }) }));
      }
      function Z(t) {
        var e = t.children,
          n = t.weight,
          r = t.variant,
          c = t.className,
          d = t.to,
          f = t.href,
          h = t.arrow,
          b = (0, o.Z)(t, ["children", "weight", "variant", "className", "to", "href", "arrow"]),
          x = "inline" === r ? "semibold" : n;
        return (0, s.jsxs)("a", (0, i.Z)((0, a.Z)({ href: d || f, className: u()(m.anchor[r || "default"], v, c, g[x || "light"]) }, b), { children: [e, h && (0, s.jsx)("span", { children: (0, s.jsx)(l.Z, { className: "pointer ml-1 inline h-4 w-4", "aria-hidden": "true" }) })] }));
      }
    },
    27233: function (t, e, n) {
      n.d(e, {
        E: function () {
          return h;
        },
        R: function () {
          return f;
        },
      });
      var r = n(26042),
        a = n(69396),
        i = n(85893),
        o = n(67294),
        s = n(49395),
        c = n(57557),
        u = n.n(c),
        l = n(31141).ZP,
        d = { devicePixelRatios: [1] };
      var f = function () {
        return (0, s.Cv)().imgixUrl;
      };
      function h(t) {
        var e = f(),
          n = t.filename,
          s = t.src,
          c = t.width,
          h = t.height,
          v = t.imgixParams,
          m = t.className,
          g = void 0 === m ? "" : m,
          b = (0, o.useMemo)(
            function () {
              return n ? "".concat(e, "/").concat(n) : (null === (t = s) || void 0 === t ? void 0 : t.filename) ? "".concat(e, "/").concat(s.filename) : "string" === typeof s ? s : void 0;
              var t;
            },
            [n, e, s]
          ),
          x = (0, o.useMemo)(
            function () {
              var t = { dpr: 1 };
              return v ? (0, r.Z)({}, v, t) : c && h ? (0, a.Z)((0, r.Z)({}, t), { fit: "crop", w: c, h: h }) : t;
            },
            [v, c, h]
          ),
          p = (0, o.useCallback)(function (t) {
            return t.includes(".svg");
          }, []);
        return b ? (p(b) ? (0, i.jsx)("img", (0, a.Z)((0, r.Z)({}, u()(t, "imgixParams")), { className: g, src: b })) : (0, i.jsx)(l, (0, a.Z)((0, r.Z)({}, t), { className: g, srcSetOptions: d, imgixParams: x, disableLibraryParam: !0, src: b }))) : (0, i.jsx)("div", { className: "bg-base-2", style: { width: t.width, height: t.height } });
      }
    },
    24253: function (t, e, n) {
      n.d(e, {
        c: function () {
          return f;
        },
      });
      var r = n(47568),
        a = n(828),
        i = n(34051),
        o = n.n(i),
        s = n(85893),
        c = n(67294),
        u = n(22578),
        l = n(81928),
        d = n(44427);
      function f(t) {
        var e = t.children,
          n = (0, a.Z)(c.useState(!1), 2),
          i = n[0],
          u = n[1],
          f = c.useRef(null),
          v = (0, c.useCallback)(
            (0, r.Z)(
              o().mark(function t() {
                return o().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        w(!0), f.current && f.current.reload();
                      case 2:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            ),
            []
          ),
          m = (0, a.Z)(c.useState(null), 2),
          g = m[0],
          b = m[1],
          x = (0, a.Z)(c.useState(!0), 2),
          p = x[0],
          w = x[1],
          k = c.useCallback(function (t) {
            u(!0), w(!1), b(t);
          }, []),
          y = (0, c.useMemo)(
            function () {
              var t, e;
              return { user: (null === g || void 0 === g ? void 0 : g.me) || null, loading: p, error: null, profile: (null === g || void 0 === g || null === (t = g.me) || void 0 === t || null === (e = t.profiles) || void 0 === e ? void 0 : e[0]) || null, reload: v, initialized: i };
            },
            [v, g, i, p]
          );
        return (0, s.jsxs)(l.S.Provider, { value: y, children: [(0, s.jsx)(c.Suspense, { fallback: null, children: (0, s.jsx)(h, { ref: f, onLoad: k }) }), e, (0, s.jsx)(d.u, {})] });
      }
      var h = c.forwardRef(function (t, e) {
        var n = t.onLoad,
          r = (0, a.Z)((0, u.useQueryLoader)(l.Q), 3),
          i = r[0],
          o = r[1],
          d = r[2];
        return (
          c.useImperativeHandle(e, function () {
            return {
              reload: function () {
                return o({}, { fetchPolicy: "network-only" });
              },
            };
          }),
          (0, c.useEffect)(
            function () {
              return (
                o({}),
                function () {
                  return d();
                }
              );
            },
            [o, d]
          ),
          i ? (0, s.jsx)(v, { queryRef: i, onLoad: n }) : null
        );
      });
      function v(t) {
        var e = t.queryRef,
          n = t.onLoad,
          r = (0, u.usePreloadedQuery)(l.Q, e);
        return (
          (0, c.useEffect)(
            function () {
              n(r);
            },
            [r, n]
          ),
          null
        );
      }
    },
    6990: function (t, e, n) {
      var r = (0, n(26042).Z)(
        {
          home: function () {
            return "/";
          },
          edition: function (t) {
            return "/editions/".concat(t);
          },
          marketplace: function () {
            return "/marketplace";
          },
          dashboard: function () {
            return "/d";
          },
          profile: function (t) {
            return "/".concat(t);
          },
          legal: function (t) {
            return "/legal/".concat(t);
          },
          artists: function () {
            return "/artists";
          },
          collectors: function () {
            return "/collectors";
          },
        },
        {
          support: function () {
            return "https://support.royal.io/hc/en-us/requests/new";
          },
          helpCenterWallet: function () {
            return "https://support.royal.io/hc/en-us/articles/4413508260243-How-do-I-setup-my-wallet-";
          },
          helpCenterPurchaseToken: function () {
            return "https://royal4034.zendesk.com/hc/en-us/articles/4413332224787-How-can-I-purchase-a-token-";
          },
          helpCenterTransfer: function () {
            return "https://support.royal.io/hc/en-us/articles/4415732992531-How-do-I-transfer-my-token-to-another-wallet-";
          },
          helpCenterMinimumBalance: function () {
            return "TODO";
          },
          helpCenterOfframpCryptoTransfers: function () {
            return "TODO";
          },
          helpCenterCollectionValue: function () {
            return "https://support.royal.io/hc/en-us/articles/6053684283411-What-is-the-collection-value-";
          },
        },
        {},
        {
          auth: function () {
            return "/auth";
          },
          authConfirm: function () {
            return "/auth/confirm";
          },
          authConfirmSent: function () {
            return "/auth/confirm/sent";
          },
          resetPassword: function () {
            return "/auth/reset-password";
          },
          resetPasswordSent: function () {
            return "/auth/reset-password/sent";
          },
          register: function () {
            return "/auth/register";
          },
          logout: function () {
            return "/auth/logout";
          },
        },
        {
          tos: function () {
            return "/legal/tos";
          },
          jobs: function () {
            return "https://jobs.lever.co/DeMuse";
          },
          faq: function () {
            return "/faq";
          },
          privacy: function () {
            return "/legal/privacy";
          },
          press: function () {
            return "/legal/press";
          },
          contact: function () {
            return "/contact";
          },
        },
        {
          settingsProfile: function () {
            return "/settings/profile";
          },
          settingsPassword: function () {
            return "/settings/password";
          },
          settingsWallet: function () {
            return "/settings/wallet";
          },
          settingsTransfers: function () {
            return "/settings/transfers";
          },
          settingsFundTransfers: function () {
            return "/settings/fund-transfers";
          },
          settingsOrders: function () {
            return "/settings/orders";
          },
          settingsTwoFA: function () {
            return "/settings/two-step-verification";
          },
        },
        {
          notFound: function () {
            return "/404";
          },
          error: function () {
            return "/error";
          },
        },
        {
          token: function (t) {
            return "/token/".concat(t);
          },
          extra: function (t, e) {
            return "/token/".concat(t, "/extra/").concat(e);
          },
        },
        {
          editionContract: function (t) {
            return "/editions/".concat(t, "/contract");
          },
        },
        {
          checkoutError: function (t) {
            return "/checkout/".concat(t, "/error");
          },
          checkoutExpired: function (t) {
            return "/checkout/".concat(t, "/expired");
          },
          checkoutConfirmation: function (t) {
            return "/checkout/".concat(t, "/confirmation");
          },
          checkoutFulfillment: function (t) {
            return "/checkout/".concat(t, "/fulfillment");
          },
        },
        {
          blog: function () {
            return "/blog";
          },
          blogPost: function (t) {
            return "/blog/".concat(t);
          },
          blogCategory: function (t) {
            return "/blog/category/".concat(t);
          },
        }
      );
      e.Z = r;
    },
  },
]);
//# sourceMappingURL=9841-f597e356e4e9a061.js.map
