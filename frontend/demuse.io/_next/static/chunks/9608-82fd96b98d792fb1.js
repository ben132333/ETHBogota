"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9608],
  {
    85502: function (t, e, r) {
      e.zo = void 0;
      var n = r(54899);
      Object.defineProperty(e, "zo", {
        enumerable: !0,
        get: function () {
          return n.styled;
        },
      });
    },
    54899: function (t, e, r) {
      var n =
          (this && this.__assign) ||
          function () {
            return (
              (n =
                Object.assign ||
                function (t) {
                  for (var e, r = 1, n = arguments.length; r < n; r++) for (var a in (e = arguments[r])) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
                  return t;
                }),
              n.apply(this, arguments)
            );
          },
        a =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, r, n) {
                void 0 === n && (n = r);
                var a = Object.getOwnPropertyDescriptor(e, r);
                (a && !("get" in a ? !e.__esModule : a.writable || a.configurable)) ||
                  (a = {
                    enumerable: !0,
                    get: function () {
                      return e[r];
                    },
                  }),
                  Object.defineProperty(t, n, a);
              }
            : function (t, e, r, n) {
                void 0 === n && (n = r), (t[n] = e[r]);
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
        i =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var r in t) "default" !== r && Object.prototype.hasOwnProperty.call(t, r) && a(e, t, r);
            return s(e, t), e;
          },
        o =
          (this && this.__rest) ||
          function (t, e) {
            var r = {};
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
            if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
              var a = 0;
              for (n = Object.getOwnPropertySymbols(t); a < n.length; a++) e.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (r[n[a]] = t[n[a]]);
            }
            return r;
          },
        c =
          (this && this.__spreadArray) ||
          function (t, e, r) {
            if (r || 2 === arguments.length) for (var n, a = 0, s = e.length; a < s; a++) (!n && a in e) || (n || (n = Array.prototype.slice.call(e, 0, a)), (n[a] = e[a]));
            return t.concat(n || Array.prototype.slice.call(e));
          };
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.styled = void 0);
      var l = i(r(67294));
      function u(t) {
        var e = "string" === typeof t ? t : t.displayName || t.name || "Component";
        return "styled.".concat(e);
      }
      function d(t) {
        var e = t.reduce(
          function (t, e) {
            return n(
              n({}, t),
              "string" === typeof e
                ? { defaultClassNames: t.defaultClassNames.concat(e.split(" ")) }
                : {
                    variantProps: e.variants ? t.variantProps.concat(Object.keys(e.variants)) : t.variantProps,
                    forwardProps: e.forwardProps ? t.forwardProps.concat(e.forwardProps) : t.forwardProps,
                    defaultProps: e.defaultVariants ? n(n({}, t.defaultProps), e.defaultVariants) : t.defaultProps,
                    variantClasses: e.variants
                      ? Object.keys(e.variants).reduce(function (r, a) {
                          var s;
                          return n(
                            n({}, r),
                            (((s = {})[a] = Object.entries(e.variants[a]).reduce(function (t, e) {
                              var r,
                                a = e[0],
                                s = e[1];
                              return (
                                String(a) in t ||
                                  (t[String(a)] = s.split(" ").filter(function (t) {
                                    return t;
                                  })),
                                n(
                                  n({}, t),
                                  (((r = {})[String(a)] = c(
                                    c([], String(a) in t ? t[String(a)] : [], !0),
                                    s.split(" ").filter(function (t) {
                                      return t;
                                    }),
                                    !0
                                  )),
                                  r)
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
                            return n(n({}, t), { className: t.className.split(" ") });
                          }),
                          !0
                        )
                      : t.compoundVariants,
                  }
            );
          },
          { defaultClassNames: [], variantClasses: {}, strippedProps: [], variantProps: [], forwardProps: [], defaultProps: {}, compoundVariants: [] }
        );
        return n(n({}, e), {
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
        var r = n({}, t);
        return (
          e.forEach(function (t) {
            return delete r[t];
          }),
          r
        );
      }
      function h(t) {
        return t.filter(function (t, e, r) {
          return r.indexOf(t) === e;
        });
      }
      e.styled = function (t) {
        for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        var a = d(e),
          s = l.forwardRef(function (e, r) {
            var s = l.useMemo(
                function () {
                  var t = a.variantProps.reduce(function (t, r) {
                    var n = r in e ? e[r] : r in a.defaultProps ? a.defaultProps[r] : void 0;
                    return String(n) in a.variantClasses[r] ? t.concat(a.variantClasses[r][String(n)]) : t;
                  }, a.defaultClassNames.concat(e.className ? e.className.split(" ") : []));
                  return (
                    (t = a.compoundVariants.reduce(function (t, r) {
                      var n = r.className,
                        a = o(r, ["className"]);
                      return Object.keys(a).every(function (t) {
                        return String(e[t]) === String(a[t]);
                      })
                        ? t.concat(n)
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
              i = l.useMemo(
                function () {
                  var t = a.strippedProps.length > 0 ? f(e, a.strippedProps) : e;
                  return n(n({}, t), { ref: r, className: s });
                },
                [e, r, s]
              );
            return l.createElement(t, i);
          });
        return (s.displayName = u(t)), s;
      };
    },
    56063: function (t, e, r) {
      r.d(e, {
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
      var n = r(26042),
        a = r(69396),
        s = r(99534),
        i = r(85893),
        o = r(67294),
        c = r(85502),
        l = "tracking-[0.4px] rounded-lg relative font-interregular font-regular disabled:cursor-default cursor-pointer disabled:pointer-events-none select-none",
        u = "ease-in-out transition-all transition duration-200 overflow-ellipsis whitespace-nowrap",
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
        f = (0, c.zo)("a", l, u, d),
        h = (0, c.zo)("button", l, u, d),
        p = o.forwardRef(function (t, e) {
          var r = t.children,
            c = t.loading,
            l = t.error,
            u = (0, s.Z)(t, ["children", "loading", "error"]),
            d = (0, o.useState)(!!c),
            f = d[0],
            p = d[1],
            v = (0, o.useState)(""),
            m = v[0],
            b = v[1],
            g = (0, o.useRef)(null);
          return (
            (0, o.useEffect)(
              function () {
                c
                  ? p(!0)
                  : l && f
                  ? (b("error"),
                    p(!1),
                    (g.current = setTimeout(function () {
                      b("");
                    }, 1e3)))
                  : f &&
                    (p(!1),
                    b("success"),
                    (g.current = setTimeout(function () {
                      b("");
                    }, 1e3)));
              },
              [l, c, f]
            ),
            (0, o.useEffect)(function () {
              return function () {
                g.current && clearTimeout(g.current);
              };
            }, []),
            (0, i.jsx)(h, (0, a.Z)((0, n.Z)({ ref: e, loading: c }, u), { children: (0, i.jsx)("span", { children: "error" === m ? "Error" : "success" === m ? "Success" : r }) }))
          );
        });
      p.displayName = "AsyncButton";
    },
    6969: function (t, e, r) {
      r.d(e, {
        $: function () {
          return o;
        },
      });
      var n = r(26042),
        a = r(69396),
        s = r(99534),
        i = r(85893);
      r(67294);
      function o(t) {
        var e = t.className,
          r = (0, s.Z)(t, ["className"]),
          o = e || "h-5 w-5 text-black dark:text-white";
        return (0, i.jsxs)(
          "svg",
          (0, a.Z)((0, n.Z)({ className: o, fill: "none", viewBox: "0 0 883 231" }, r), {
            children: [
              (0, i.jsx)("path", {
                className: "fill-current",
                d: "M324.489 187.442v-68.921a33.084 33.084 0 012.795-16.616 33.082 33.082 0 0110.614-13.086 43.259 43.259 0 0130.424-7.21V40.372a52.34 52.34 0 00-26.675 7.21 38.716 38.716 0 00-17.158 20.762V43.256H287v144.186h37.489zm121.045 4.037a75.333 75.333 0 0054.257-21.957 75.342 75.342 0 0022.163-54.173 76.708 76.708 0 10-147.527 28.894 76.706 76.706 0 0071.18 47.236h-.073zm0-36.046a37.927 37.927 0 01-27.972-11.247 42.464 42.464 0 010-57.098 37.419 37.419 0 0128.045-11.534 38.067 38.067 0 0127.9 10.958 41.887 41.887 0 010 57.097 38.07 38.07 0 01-27.9 11.535l-.073.289zm94.443 75.265a72.1 72.1 0 0046.285-11.607 88.247 88.247 0 0029.847-41.886l52.484-133.95h-39.796l-31.793 89.901-37.705-89.9h-40.661l59.117 129.767a40.731 40.731 0 01-13.987 19.754 39.649 39.649 0 01-23.791 5.911v32.01zm195.447-39.075a56.594 56.594 0 0047.005-21.051v16.87h37.201V43.256h-37.201V60.27a56.596 56.596 0 00-47.005-21.051 65.315 65.315 0 00-49.457 22.06 81.177 81.177 0 000 108.14 65.326 65.326 0 0049.457 22.06v.144zm7.209-35.469a38.727 38.727 0 01-28.837-11.247 40.442 40.442 0 01-11.247-29.414 39.869 39.869 0 0111.247-29.27 38.495 38.495 0 0128.837-11.39 38.932 38.932 0 0128.838 11.39 43.256 43.256 0 010 58.54 38.94 38.94 0 01-29.126 11.246l.288.145zM883 187.442V0h-37.2v187.442H883z",
              }),
              (0, i.jsx)("path", { className: "fill-current", fillRule: "evenodd", d: "M183.542 44c1.043 0 2.074.224 3.021.656a7.212 7.212 0 012.468 1.848l49.108 57.235a7.113 7.113 0 011.861 4.793 7.117 7.117 0 01-1.861 4.794L134 222V44h49.542zM106 44.214V222L1.864 113.242A7.096 7.096 0 010 108.454c0-1.768.664-3.474 1.864-4.787l49.21-57.166a7.228 7.228 0 012.472-1.846A7.315 7.315 0 0156.574 44l49.426.214z", clipRule: "evenodd" }),
            ],
          })
        );
      }
    },
    51933: function (t, e, r) {
      r.d(e, {
        OL: function () {
          return w;
        },
        X6: function () {
          return g;
        },
        dL: function () {
          return k;
        },
        jb: function () {
          return y;
        },
        rU: function () {
          return N;
        },
        uT: function () {
          return x;
        },
      });
      var n,
        a = r(26042),
        s = r(69396),
        i = r(99534),
        o = r(85893),
        c = (r(67294), r(94184)),
        l = r.n(c),
        u = r(8639),
        d = r(41664),
        f = r.n(d),
        h = { "contrast-max": "text-contrast-max", "contrast-high": "text-contrast-high", "contrast-default": "text-contrast-default", "contrast-low": "text-contrast-low", "contrast-max-inverse": "text-contrast-max-inverse", "contrast-high-inverse": "text-contrast-high-inverse", "contrast-default-inverse": "text-contrast-default-inverse", "contrast-low-inverse": "text-contrast-low-inverse", "interactive-1": "text-interactive-1 md:active:font-bold", "accent-1": "text-accent-1", "accent-2": "text-accent-2", "accent-3": "text-accent-3", "destructive-1": "text-destructive-1", unset: "current-color", custom: "" };
      !(function (t) {
        (t.light = "font-light"), (t.semibold = "font-semibold"), (t.bold = "font-bold "), (t.black = "font-black "), (t.inherit = "");
      })(n || (n = {}));
      var p = "ease-in-out transition-all transition duration-150",
        v = {
          heading: { h1: "font-compressedsans text-mobile-heading-h1 md:text-heading-h1 antialiased", h2: "font-compressedsans text-heading-h2 antialiased", h3: "font-compressedsans text-heading-h3 antialiased", h4: "font-compressedsans text-heading-h4 antialiased", h5: "font-compressedsans text-heading-h5 antialiased", h6: "font-compressedsans text-heading-h6 antialiased tracking-wider", "label-lg": "font-mono font-medium text-label-lg uppercase antialiased tracking-wider", label: "font-mono text-label-sm uppercase antialiased tracking-wider" },
          body: { xl: "font-inter md:text-body-xl text-mobile-body-xl antialiased ", large: "font-inter text-body-lg antialiased ", small: "font-inter  text-body-sm antialiased ", xs: "font-inter text-body-xs antialiased " },
          metric: { xl: "font-monolight text-metric-xl uppercase", large: "font-monolight text-metric-lg uppercase", small: "font-monolight text-metric-sm uppercase" },
          anchor: { nav: "antialiased font-inter tracking-wide uppercase text-anchor-sm text-nav-link dark:text-dark-nav-link hover:interactive-1", default: "antialiased font-inter text-contrast-default hover:interactive-1", primary: "antialiased font-inter text-interactive-1 hover:opacity-80", secondary: "antialiased font-inter text-interactive-1 hover:opacity-80", inline: " font-inter text-body-lg semibold text-contrast-default hover:text-contrast-high text-anchor-sm", custom: "" },
        },
        m = { light: "font-light", semibold: "font-semibold", bold: "font-bold", black: "font-black", inherit: "" };
      function b(t) {
        var e = t.as,
          r = t.className,
          n = t.color,
          s = (0, i.Z)(t, ["as", "className", "color"]),
          c = null !== e && void 0 !== e ? e : "p";
        return (0, o.jsx)(c, (0, a.Z)({ className: l()(r, h[n || "contrast-default"]) }, s));
      }
      function g(t) {
        var e = t.weight,
          r = t.variant,
          n = t.className,
          c = (0, i.Z)(t, ["weight", "variant", "className"]),
          u = l()(n, v.heading[r], m[e || "light"]);
        return (0, o.jsx)(b, (0, s.Z)((0, a.Z)({}, c), { className: u }));
      }
      function x(t) {
        var e = t.weight,
          r = t.variant,
          n = t.className,
          c = (0, i.Z)(t, ["weight", "variant", "className"]),
          u = l()(n, v.body[r], m[e || "light"]);
        return (0, o.jsx)(b, (0, s.Z)((0, a.Z)({}, c), { className: u }));
      }
      function y(t) {
        var e = t.weight,
          r = t.variant,
          n = t.className,
          c = (0, i.Z)(t, ["weight", "variant", "className"]),
          u = l()(n, v.metric[r], m[e || "light"]);
        return (0, o.jsx)(b, (0, s.Z)((0, a.Z)({}, c), { className: u }));
      }
      function w(t) {
        var e = t.children,
          r = t.className,
          n = (0, i.Z)(t, ["children", "className"]);
        return (0, o.jsx)(N, (0, s.Z)((0, a.Z)({ className: l()(v.anchor.nav, p, r, "nav-link") }, n), { children: e }));
      }
      function N(t) {
        var e = t.weight,
          r = t.children,
          n = t.className,
          c = t.variant,
          u = t.onClick,
          d = t.target,
          h = (0, i.Z)(t, ["weight", "children", "className", "variant", "onClick", "target"]),
          b = "inline" === c ? "semibold" : e;
        return (0, o.jsx)(f(), (0, s.Z)((0, a.Z)({}, h), { children: (0, o.jsx)("a", { target: d, onClick: u, className: l()(v.anchor[c || "default"], p, n, m[b || "light"]), children: r }) }));
      }
      function k(t) {
        var e = t.children,
          r = t.weight,
          n = t.variant,
          c = t.className,
          d = t.to,
          f = t.href,
          h = t.arrow,
          b = (0, i.Z)(t, ["children", "weight", "variant", "className", "to", "href", "arrow"]),
          g = "inline" === n ? "semibold" : r;
        return (0, o.jsxs)("a", (0, s.Z)((0, a.Z)({ href: d || f, className: l()(v.anchor[n || "default"], p, c, m[g || "light"]) }, b), { children: [e, h && (0, o.jsx)("span", { children: (0, o.jsx)(u.Z, { className: "pointer ml-1 inline h-4 w-4", "aria-hidden": "true" }) })] }));
      }
    },
    70883: function (t, e, r) {
      r.d(e, {
        Y: function () {
          return c;
        },
      });
      var n = r(85893),
        a = r(6969),
        s = r(41664),
        i = r.n(s),
        o = r(6990);
      function c(t) {
        var e = t.children;
        return (0, n.jsxs)("div", { children: [(0, n.jsxs)("div", { className: "flex items-center p-6", children: [(0, n.jsx)(i(), { className: "inline-block", href: o.Z.home(), children: (0, n.jsx)("a", { children: (0, n.jsx)(a.$, { className: "w-16" }) }) }), (0, n.jsx)("span", { className: "ml-2 mr-4 whitespace-nowrap bg-surface-0 px-2 py-1 font-mono text-xs text-contrast-max-inverse", children: "beta" })] }), (0, n.jsx)("div", { className: "flex flex-grow flex-col md:justify-center", children: (0, n.jsx)("div", { className: "mx-auto w-full md:max-w-lg", children: (0, n.jsx)("div", { className: "px-6 pb-16 pt-4 md:px-10", children: e }) }) })] });
      }
    },
    6990: function (t, e, r) {
      var n = (0, r(26042).Z)(
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
      e.Z = n;
    },
  },
]);
//# sourceMappingURL=9608-82fd96b98d792fb1.js.map
