(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2473],
  {
    85502: function (t, e, n) {
      "use strict";
      e.zo = void 0;
      var r = n(54899);
      Object.defineProperty(e, "zo", {
        enumerable: !0,
        get: function () {
          return r.styled;
        },
      });
    },
    54899: function (t, e, n) {
      "use strict";
      var r =
          (this && this.__assign) ||
          function () {
            return (
              (r =
                Object.assign ||
                function (t) {
                  for (var e, n = 1, r = arguments.length; n < r; n++) for (var a in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
                  return t;
                }),
              r.apply(this, arguments)
            );
          },
        a =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, n, r) {
                void 0 === r && (r = n);
                var a = Object.getOwnPropertyDescriptor(e, n);
                (a && !("get" in a ? !e.__esModule : a.writable || a.configurable)) ||
                  (a = {
                    enumerable: !0,
                    get: function () {
                      return e[n];
                    },
                  }),
                  Object.defineProperty(t, r, a);
              }
            : function (t, e, n, r) {
                void 0 === r && (r = n), (t[r] = e[n]);
              }),
        s =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (t, e) {
                Object.defineProperty(t, "default", { enumerable: !0, value: e });
              }
            : function (t, e) {
                t.default = e;
              }),
        o =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var n in t) "default" !== n && Object.prototype.hasOwnProperty.call(t, n) && a(e, t, n);
            return s(e, t), e;
          },
        i =
          (this && this.__rest) ||
          function (t, e) {
            var n = {};
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
            if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
              var a = 0;
              for (r = Object.getOwnPropertySymbols(t); a < r.length; a++) e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
            }
            return n;
          },
        c =
          (this && this.__spreadArray) ||
          function (t, e, n) {
            if (n || 2 === arguments.length) for (var r, a = 0, s = e.length; a < s; a++) (!r && a in e) || (r || (r = Array.prototype.slice.call(e, 0, a)), (r[a] = e[a]));
            return t.concat(r || Array.prototype.slice.call(e));
          };
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.styled = void 0);
      var u = o(n(67294));
      function l(t) {
        var e = "string" === typeof t ? t : t.displayName || t.name || "Component";
        return "styled.".concat(e);
      }
      function d(t) {
        var e = t.reduce(
          function (t, e) {
            return r(
              r({}, t),
              "string" === typeof e
                ? { defaultClassNames: t.defaultClassNames.concat(e.split(" ")) }
                : {
                    variantProps: e.variants ? t.variantProps.concat(Object.keys(e.variants)) : t.variantProps,
                    forwardProps: e.forwardProps ? t.forwardProps.concat(e.forwardProps) : t.forwardProps,
                    defaultProps: e.defaultVariants ? r(r({}, t.defaultProps), e.defaultVariants) : t.defaultProps,
                    variantClasses: e.variants
                      ? Object.keys(e.variants).reduce(function (n, a) {
                          var s;
                          return r(
                            r({}, n),
                            (((s = {})[a] = Object.entries(e.variants[a]).reduce(function (t, e) {
                              var n,
                                a = e[0],
                                s = e[1];
                              return (
                                String(a) in t ||
                                  (t[String(a)] = s.split(" ").filter(function (t) {
                                    return t;
                                  })),
                                r(
                                  r({}, t),
                                  (((n = {})[String(a)] = c(
                                    c([], String(a) in t ? t[String(a)] : [], !0),
                                    s.split(" ").filter(function (t) {
                                      return t;
                                    }),
                                    !0
                                  )),
                                  n)
                                )
                              );
                            }, t.variantClasses[a] || {})),
                            s)
                          );
                        }, t.variantClasses)
                      : t.variantClasses,
                    compoundVariants: e.compoundVariants
                      ? c(
                          c([], t.compoundVariants, !0),
                          e.compoundVariants.map(function (t) {
                            return r(r({}, t), { className: t.className.split(" ") });
                          }),
                          !0
                        )
                      : t.compoundVariants,
                  }
            );
          },
          { defaultClassNames: [], variantClasses: {}, strippedProps: [], variantProps: [], forwardProps: [], defaultProps: {}, compoundVariants: [] }
        );
        return r(r({}, e), {
          forwardProps: h(e.forwardProps),
          variantProps: h(e.variantProps),
          defaultClassNames: h(e.defaultClassNames),
          strippedProps: h(
            e.variantProps.filter(function (t) {
              return !e.forwardProps.includes(t);
            })
          ),
        });
      }
      function f(t, e) {
        var n = r({}, t);
        return (
          e.forEach(function (t) {
            return delete n[t];
          }),
          n
        );
      }
      function h(t) {
        return t.filter(function (t, e, n) {
          return n.indexOf(t) === e;
        });
      }
      e.styled = function (t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        var a = d(e),
          s = u.forwardRef(function (e, n) {
            var s = u.useMemo(
                function () {
                  var t = a.variantProps.reduce(function (t, n) {
                    var r = n in e ? e[n] : n in a.defaultProps ? a.defaultProps[n] : void 0;
                    return String(r) in a.variantClasses[n] ? t.concat(a.variantClasses[n][String(r)]) : t;
                  }, a.defaultClassNames.concat(e.className ? e.className.split(" ") : []));
                  return (
                    (t = a.compoundVariants.reduce(function (t, n) {
                      var r = n.className,
                        a = i(n, ["className"]);
                      return Object.keys(a).every(function (t) {
                        return String(e[t]) === String(a[t]);
                      })
                        ? t.concat(r)
                        : t;
                    }, t)),
                    h(t).join(" ")
                  );
                },
                a.variantProps
                  .map(function (t) {
                    return e[t];
                  })
                  .concat([e.className])
              ),
              o = u.useMemo(
                function () {
                  var t = a.strippedProps.length > 0 ? f(e, a.strippedProps) : e;
                  return r(r({}, t), { ref: n, className: s });
                },
                [e, n, s]
              );
            return u.createElement(t, o);
          });
        return (s.displayName = l(t)), s;
      };
    },
    2304: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/auth",
        function () {
          return n(71255);
        },
      ]);
    },
    56063: function (t, e, n) {
      "use strict";
      n.d(e, {
        AN: function () {
          return f;
        },
        Z6: function () {
          return p;
        },
        zx: function () {
          return h;
        },
      });
      var r = n(26042),
        a = n(69396),
        s = n(99534),
        o = n(85893),
        i = n(67294),
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
        p = i.forwardRef(function (t, e) {
          var n = t.children,
            c = t.loading,
            u = t.error,
            l = (0, s.Z)(t, ["children", "loading", "error"]),
            d = (0, i.useState)(!!c),
            f = d[0],
            p = d[1],
            m = (0, i.useState)(""),
            v = m[0],
            x = m[1],
            b = (0, i.useRef)(null);
          return (
            (0, i.useEffect)(
              function () {
                c
                  ? p(!0)
                  : u && f
                  ? (x("error"),
                    p(!1),
                    (b.current = setTimeout(function () {
                      x("");
                    }, 1e3)))
                  : f &&
                    (p(!1),
                    x("success"),
                    (b.current = setTimeout(function () {
                      x("");
                    }, 1e3)));
              },
              [u, c, f]
            ),
            (0, i.useEffect)(function () {
              return function () {
                b.current && clearTimeout(b.current);
              };
            }, []),
            (0, o.jsx)(h, (0, a.Z)((0, r.Z)({ ref: e, loading: c }, l), { children: (0, o.jsx)("span", { children: "error" === v ? "Error" : "success" === v ? "Success" : n }) }))
          );
        });
      p.displayName = "AsyncButton";
    },
    6969: function (t, e, n) {
      "use strict";
      n.d(e, {
        $: function () {
          return i;
        },
      });
      var r = n(26042),
        a = n(69396),
        s = n(99534),
        o = n(85893);
      n(67294);
      function i(t) {
        var e = t.className,
          n = (0, s.Z)(t, ["className"]),
          i = e || "h-5 w-5 text-black dark:text-white";
        return (0, o.jsxs)(
          "svg",
          (0, a.Z)((0, r.Z)({ className: i, fill: "none", viewBox: "0 0 883 231" }, n), {
            children: [
              (0, o.jsx)("path", {
                className: "fill-current",
                d: "M324.489 187.442v-68.921a33.084 33.084 0 012.795-16.616 33.082 33.082 0 0110.614-13.086 43.259 43.259 0 0130.424-7.21V40.372a52.34 52.34 0 00-26.675 7.21 38.716 38.716 0 00-17.158 20.762V43.256H287v144.186h37.489zm121.045 4.037a75.333 75.333 0 0054.257-21.957 75.342 75.342 0 0022.163-54.173 76.708 76.708 0 10-147.527 28.894 76.706 76.706 0 0071.18 47.236h-.073zm0-36.046a37.927 37.927 0 01-27.972-11.247 42.464 42.464 0 010-57.098 37.419 37.419 0 0128.045-11.534 38.067 38.067 0 0127.9 10.958 41.887 41.887 0 010 57.097 38.07 38.07 0 01-27.9 11.535l-.073.289zm94.443 75.265a72.1 72.1 0 0046.285-11.607 88.247 88.247 0 0029.847-41.886l52.484-133.95h-39.796l-31.793 89.901-37.705-89.9h-40.661l59.117 129.767a40.731 40.731 0 01-13.987 19.754 39.649 39.649 0 01-23.791 5.911v32.01zm195.447-39.075a56.594 56.594 0 0047.005-21.051v16.87h37.201V43.256h-37.201V60.27a56.596 56.596 0 00-47.005-21.051 65.315 65.315 0 00-49.457 22.06 81.177 81.177 0 000 108.14 65.326 65.326 0 0049.457 22.06v.144zm7.209-35.469a38.727 38.727 0 01-28.837-11.247 40.442 40.442 0 01-11.247-29.414 39.869 39.869 0 0111.247-29.27 38.495 38.495 0 0128.837-11.39 38.932 38.932 0 0128.838 11.39 43.256 43.256 0 010 58.54 38.94 38.94 0 01-29.126 11.246l.288.145zM883 187.442V0h-37.2v187.442H883z",
              }),
              (0, o.jsx)("path", { className: "fill-current", fillRule: "evenodd", d: "M183.542 44c1.043 0 2.074.224 3.021.656a7.212 7.212 0 012.468 1.848l49.108 57.235a7.113 7.113 0 011.861 4.793 7.117 7.117 0 01-1.861 4.794L134 222V44h49.542zM106 44.214V222L1.864 113.242A7.096 7.096 0 010 108.454c0-1.768.664-3.474 1.864-4.787l49.21-57.166a7.228 7.228 0 012.472-1.846A7.315 7.315 0 0156.574 44l49.426.214z", clipRule: "evenodd" }),
            ],
          })
        );
      }
    },
    80884: function (t, e, n) {
      "use strict";
      var r;
      n.d(e, {
        $: function () {
          return r;
        },
      }),
        (function (t) {
          (t.ERROR = "error"), (t.WARNING = "warning"), (t.SUCCESS = "success"), (t.INFO = "info");
        })(r || (r = {}));
    },
    51933: function (t, e, n) {
      "use strict";
      n.d(e, {
        OL: function () {
          return y;
        },
        X6: function () {
          return b;
        },
        dL: function () {
          return N;
        },
        jb: function () {
          return w;
        },
        rU: function () {
          return k;
        },
        uT: function () {
          return g;
        },
      });
      var r,
        a = n(26042),
        s = n(69396),
        o = n(99534),
        i = n(85893),
        c = (n(67294), n(94184)),
        u = n.n(c),
        l = n(8639),
        d = n(41664),
        f = n.n(d),
        h = { "contrast-max": "text-contrast-max", "contrast-high": "text-contrast-high", "contrast-default": "text-contrast-default", "contrast-low": "text-contrast-low", "contrast-max-inverse": "text-contrast-max-inverse", "contrast-high-inverse": "text-contrast-high-inverse", "contrast-default-inverse": "text-contrast-default-inverse", "contrast-low-inverse": "text-contrast-low-inverse", "interactive-1": "text-interactive-1 md:active:font-bold", "accent-1": "text-accent-1", "accent-2": "text-accent-2", "accent-3": "text-accent-3", "destructive-1": "text-destructive-1", unset: "current-color", custom: "" };
      !(function (t) {
        (t.light = "font-light"), (t.semibold = "font-semibold"), (t.bold = "font-bold "), (t.black = "font-black "), (t.inherit = "");
      })(r || (r = {}));
      var p = "ease-in-out transition-all transition duration-150",
        m = {
          heading: { h1: "font-compressedsans text-mobile-heading-h1 md:text-heading-h1 antialiased", h2: "font-compressedsans text-heading-h2 antialiased", h3: "font-compressedsans text-heading-h3 antialiased", h4: "font-compressedsans text-heading-h4 antialiased", h5: "font-compressedsans text-heading-h5 antialiased", h6: "font-compressedsans text-heading-h6 antialiased tracking-wider", "label-lg": "font-mono font-medium text-label-lg uppercase antialiased tracking-wider", label: "font-mono text-label-sm uppercase antialiased tracking-wider" },
          body: { xl: "font-inter md:text-body-xl text-mobile-body-xl antialiased ", large: "font-inter text-body-lg antialiased ", small: "font-inter  text-body-sm antialiased ", xs: "font-inter text-body-xs antialiased " },
          metric: { xl: "font-monolight text-metric-xl uppercase", large: "font-monolight text-metric-lg uppercase", small: "font-monolight text-metric-sm uppercase" },
          anchor: { nav: "antialiased font-inter tracking-wide uppercase text-anchor-sm text-nav-link dark:text-dark-nav-link hover:interactive-1", default: "antialiased font-inter text-contrast-default hover:interactive-1", primary: "antialiased font-inter text-interactive-1 hover:opacity-80", secondary: "antialiased font-inter text-interactive-1 hover:opacity-80", inline: " font-inter text-body-lg semibold text-contrast-default hover:text-contrast-high text-anchor-sm", custom: "" },
        },
        v = { light: "font-light", semibold: "font-semibold", bold: "font-bold", black: "font-black", inherit: "" };
      function x(t) {
        var e = t.as,
          n = t.className,
          r = t.color,
          s = (0, o.Z)(t, ["as", "className", "color"]),
          c = null !== e && void 0 !== e ? e : "p";
        return (0, i.jsx)(c, (0, a.Z)({ className: u()(n, h[r || "contrast-default"]) }, s));
      }
      function b(t) {
        var e = t.weight,
          n = t.variant,
          r = t.className,
          c = (0, o.Z)(t, ["weight", "variant", "className"]),
          l = u()(r, m.heading[n], v[e || "light"]);
        return (0, i.jsx)(x, (0, s.Z)((0, a.Z)({}, c), { className: l }));
      }
      function g(t) {
        var e = t.weight,
          n = t.variant,
          r = t.className,
          c = (0, o.Z)(t, ["weight", "variant", "className"]),
          l = u()(r, m.body[n], v[e || "light"]);
        return (0, i.jsx)(x, (0, s.Z)((0, a.Z)({}, c), { className: l }));
      }
      function w(t) {
        var e = t.weight,
          n = t.variant,
          r = t.className,
          c = (0, o.Z)(t, ["weight", "variant", "className"]),
          l = u()(r, m.metric[n], v[e || "light"]);
        return (0, i.jsx)(x, (0, s.Z)((0, a.Z)({}, c), { className: l }));
      }
      function y(t) {
        var e = t.children,
          n = t.className,
          r = (0, o.Z)(t, ["children", "className"]);
        return (0, i.jsx)(k, (0, s.Z)((0, a.Z)({ className: u()(m.anchor.nav, p, n, "nav-link") }, r), { children: e }));
      }
      function k(t) {
        var e = t.weight,
          n = t.children,
          r = t.className,
          c = t.variant,
          l = t.onClick,
          d = t.target,
          h = (0, o.Z)(t, ["weight", "children", "className", "variant", "onClick", "target"]),
          x = "inline" === c ? "semibold" : e;
        return (0, i.jsx)(f(), (0, s.Z)((0, a.Z)({}, h), { children: (0, i.jsx)("a", { target: d, onClick: l, className: u()(m.anchor[c || "default"], p, r, v[x || "light"]), children: n }) }));
      }
      function N(t) {
        var e = t.children,
          n = t.weight,
          r = t.variant,
          c = t.className,
          d = t.to,
          f = t.href,
          h = t.arrow,
          x = (0, o.Z)(t, ["children", "weight", "variant", "className", "to", "href", "arrow"]),
          b = "inline" === r ? "semibold" : n;
        return (0, i.jsxs)("a", (0, s.Z)((0, a.Z)({ href: d || f, className: u()(m.anchor[r || "default"], p, c, v[b || "light"]) }, x), { children: [e, h && (0, i.jsx)("span", { children: (0, i.jsx)(l.Z, { className: "pointer ml-1 inline h-4 w-4", "aria-hidden": "true" }) })] }));
      }
    },
    74310: function (t, e, n) {
      "use strict";
      n.d(e, {
        U: function () {
          return o;
        },
      });
      var r = n(85893),
        a = n(89584),
        s = n(8607);
      function o(t) {
        return (0, r.jsx)(a.u, { closeable: t.closeable, open: t.open, static: !1, onClose: t.onClose, className: "max-w-modal-sm", title: "Verify phone number", disableFullScreenOnMobile: !0, children: (0, r.jsx)(s.d, { mode: t.mode, phone: t.phone, channelId: t.channelId, onSuccess: t.onSuccess }) });
      }
    },
    6990: function (t, e, n) {
      "use strict";
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
    71255: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return T;
          },
        });
      var r = n(47568),
        a = n(34051),
        s = n.n(a),
        o = n(85893),
        i = n(26042),
        c = n(69396),
        u = n(9669),
        l = n.n(u),
        d = n(41664),
        f = n.n(d),
        h = n(67294),
        p = n(88767),
        m = n(51933),
        v = n(92985),
        x = n(79164),
        b = n(6990),
        g = n(12180),
        w = n(6969),
        y = n(42472),
        k = n(80884),
        N = n(16725),
        j = n(61431),
        C = n(30714),
        P = n(84337),
        O = n(74310),
        Z = "login";
      function _(t) {
        var e = t.twoFaChannel,
          n = (0, v.z)().trackClick,
          a = (0, y.x_)().newToast,
          u = (0, N.M)(),
          d = (0, C.Z)().execute,
          _ = (0, h.useState)(e || null),
          S = _[0],
          T = _[1],
          E = (0, p.useMutation)(function (t) {
            return l().post("/api/auth/login", t);
          }),
          V = (0, h.useState)(),
          z = V[0],
          A = V[1],
          F = (0, j.n)({
            resource: Z,
            onError: function (t) {
              console.error("Error obtaining crowd controller token, please try again", t), A(t.message);
            },
            onTimeout: function () {
              A("Timeout, please try again");
            },
            timeout: 500,
          }),
          R = F.cancelAccessRequest,
          I = (F.loading, F.queued),
          M = F.requestAccess,
          q = (0, h.useCallback)(
            (0, r.Z)(
              s().mark(function t() {
                return s().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (window.location.href = "string" === typeof u ? u : b.Z.home()),
                          (t.next = 3),
                          new Promise(function (t) {
                            return setTimeout(t, 3e5);
                          })
                        );
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            ),
            [u]
          ),
          L = (0, h.useCallback)(
            (function () {
              var t = (0, r.Z)(
                s().mark(function t(e) {
                  var n, r, o;
                  return s().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.prev = 0), (t.next = 3), M({ payload: {} });
                          case 3:
                            if ((n = t.sent)) {
                              t.next = 6;
                              break;
                            }
                            return t.abrupt("return");
                          case 6:
                            return (t.next = 8), d({ action: Z });
                          case 8:
                            return (r = t.sent), (t.next = 11), E.mutateAsync((0, c.Z)((0, i.Z)({}, e), { accessToken: n, recaptchaToken: r }));
                          case 11:
                            if (!(o = t.sent).data.twoFactor) {
                              t.next = 16;
                              break;
                            }
                            T(o.data.channelId), (t.next = 19);
                            break;
                          case 16:
                            return (t.next = 18), q();
                          case 18:
                            return t.abrupt("return");
                          case 19:
                            t.next = 25;
                            break;
                          case 21:
                            throw ((t.prev = 21), (t.t0 = t.catch(0)), a({ type: k.$.ERROR, message: "Could not login. Check your username and password", closeAfter: 1e4, closable: !0 }), t.t0);
                          case 25:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 21]]
                  );
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
            [E, a, d, M, q]
          ),
          U = b.Z.register();
        u && (U += "?" + new URLSearchParams({ redirect_to: u }).toString());
        var W = I || z;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsxs)("div", {
              children: [
                (0, o.jsxs)("div", { className: "flex items-center p-6", children: [(0, o.jsx)(f(), { className: "inline-block", href: b.Z.home(), children: (0, o.jsx)("a", { children: (0, o.jsx)(w.$, { className: "w-16" }) }) }), (0, o.jsx)("span", { className: "ml-2 mr-4 whitespace-nowrap bg-surface-0 px-2 py-1 font-mono text-xs text-contrast-max-inverse", children: "beta" })] }),
                (0, o.jsx)("div", {
                  className: "flex flex-grow flex-col md:justify-center",
                  children: (0, o.jsx)("div", {
                    className: "mx-auto w-full md:max-w-lg",
                    children: (0, o.jsx)("div", {
                      className: "px-6 pb-16 pt-4 md:px-10",
                      children: W
                        ? (0, o.jsx)("div", {
                            children: (0, o.jsx)(P.J, {
                              handleExit: function () {
                                R(), A("");
                              },
                              error: z || void 0,
                            }),
                          })
                        : (0, o.jsxs)(o.Fragment, {
                            children: [
                              (0, o.jsx)("div", { className: "mb-4 flex flex-row justify-center", children: (0, o.jsx)(m.X6, { as: "h2", variant: "h2", className: "uppercase", children: "Login" }) }),
                              (0, o.jsx)(g.G, { authType: "login", redirect: u }),
                              (0, o.jsxs)("div", {
                                className: "mt-8 md:mt-12",
                                children: [
                                  (0, o.jsx)(x.o, { onSubmit: L }),
                                  z && (0, o.jsx)(m.uT, { variant: "small", color: "destructive-1", className: "pt-4", children: "There was a timeout, please try again" }),
                                  (0, o.jsxs)(m.uT, {
                                    variant: "large",
                                    className: "mt-6 text-center md:mt-12",
                                    children: [
                                      "Don't have an account?\xa0",
                                      (0, o.jsx)(f(), {
                                        href: U,
                                        children: (0, o.jsx)("a", {
                                          onClick: function () {
                                            return n({ event: "signUp", label: "Sign up" });
                                          },
                                          className: "font-bold",
                                          children: "Sign up",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                    }),
                  }),
                }),
              ],
            }),
            S
              ? (0, o.jsx)(O.U, {
                  mode: "login",
                  open: !!S,
                  channelId: S,
                  onClose: function () {
                    T(null);
                  },
                  onSuccess: q,
                  closeable: !1,
                })
              : null,
          ],
        });
      }
      var S = function (t) {
        var e = t.twoFaChannel;
        return (0, o.jsx)(_, { twoFaChannel: e });
      };
      S.getInitialProps = (function () {
        var t = (0, r.Z)(
          s().mark(function t(e) {
            var n, r;
            return s().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (((n = e.query), (r = n.twoFaChannel), !Array.isArray(r))) {
                      t.next = 4;
                      break;
                    }
                    return t.abrupt("return", { twoFaChannel: r[0] });
                  case 4:
                    return t.abrupt("return", { twoFaChannel: r });
                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        );
        return function (e) {
          return t.apply(this, arguments);
        };
      })();
      var T = S;
    },
  },
  function (t) {
    t.O(0, [158, 3825, 597, 7536, 2674, 5248, 6487, 8920, 9774, 2888, 179], function () {
      return (e = 2304), t((t.s = e));
      var e;
    });
    var e = t.O();
    _N_E = e;
  },
]);
//# sourceMappingURL=auth-eb4bd406fad165e7.js.map
