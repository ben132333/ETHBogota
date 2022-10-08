(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [461],
  {
    85502: function (e, t, r) {
      "use strict";
      t.zo = void 0;
      var n = r(54899);
      Object.defineProperty(t, "zo", {
        enumerable: !0,
        get: function () {
          return n.styled;
        },
      });
    },
    54899: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__assign) ||
          function () {
            return (
              (n =
                Object.assign ||
                function (e) {
                  for (var t, r = 1, n = arguments.length; r < n; r++) for (var a in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                  return e;
                }),
              n.apply(this, arguments)
            );
          },
        a =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r);
                var a = Object.getOwnPropertyDescriptor(t, r);
                (a && !("get" in a ? !t.__esModule : a.writable || a.configurable)) ||
                  (a = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }),
                  Object.defineProperty(e, n, a);
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        s =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", { enumerable: !0, value: t });
              }
            : function (e, t) {
                e.default = t;
              }),
        i =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && a(t, e, r);
            return s(t, e), t;
          },
        o =
          (this && this.__rest) ||
          function (e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
              var a = 0;
              for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
            }
            return r;
          },
        c =
          (this && this.__spreadArray) ||
          function (e, t, r) {
            if (r || 2 === arguments.length) for (var n, a = 0, s = t.length; a < s; a++) (!n && a in t) || (n || (n = Array.prototype.slice.call(t, 0, a)), (n[a] = t[a]));
            return e.concat(n || Array.prototype.slice.call(t));
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.styled = void 0);
      var l = i(r(67294));
      function u(e) {
        var t = "string" === typeof e ? e : e.displayName || e.name || "Component";
        return "styled.".concat(t);
      }
      function d(e) {
        var t = e.reduce(
          function (e, t) {
            return n(
              n({}, e),
              "string" === typeof t
                ? { defaultClassNames: e.defaultClassNames.concat(t.split(" ")) }
                : {
                    variantProps: t.variants ? e.variantProps.concat(Object.keys(t.variants)) : e.variantProps,
                    forwardProps: t.forwardProps ? e.forwardProps.concat(t.forwardProps) : e.forwardProps,
                    defaultProps: t.defaultVariants ? n(n({}, e.defaultProps), t.defaultVariants) : e.defaultProps,
                    variantClasses: t.variants
                      ? Object.keys(t.variants).reduce(function (r, a) {
                          var s;
                          return n(
                            n({}, r),
                            (((s = {})[a] = Object.entries(t.variants[a]).reduce(function (e, t) {
                              var r,
                                a = t[0],
                                s = t[1];
                              return (
                                String(a) in e ||
                                  (e[String(a)] = s.split(" ").filter(function (e) {
                                    return e;
                                  })),
                                n(
                                  n({}, e),
                                  (((r = {})[String(a)] = c(
                                    c([], String(a) in e ? e[String(a)] : [], !0),
                                    s.split(" ").filter(function (e) {
                                      return e;
                                    }),
                                    !0
                                  )),
                                  r)
                                )
                              );
                            }, e.variantClasses[a] || {})),
                            s)
                          );
                        }, e.variantClasses)
                      : e.variantClasses,
                    compoundVariants: t.compoundVariants
                      ? c(
                          c([], e.compoundVariants, !0),
                          t.compoundVariants.map(function (e) {
                            return n(n({}, e), { className: e.className.split(" ") });
                          }),
                          !0
                        )
                      : e.compoundVariants,
                  }
            );
          },
          { defaultClassNames: [], variantClasses: {}, strippedProps: [], variantProps: [], forwardProps: [], defaultProps: {}, compoundVariants: [] }
        );
        return n(n({}, t), {
          forwardProps: h(t.forwardProps),
          variantProps: h(t.variantProps),
          defaultClassNames: h(t.defaultClassNames),
          strippedProps: h(
            t.variantProps.filter(function (e) {
              return !t.forwardProps.includes(e);
            })
          ),
        });
      }
      function f(e, t) {
        var r = n({}, e);
        return (
          t.forEach(function (e) {
            return delete r[e];
          }),
          r
        );
      }
      function h(e) {
        return e.filter(function (e, t, r) {
          return r.indexOf(e) === t;
        });
      }
      t.styled = function (e) {
        for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        var a = d(t),
          s = l.forwardRef(function (t, r) {
            var s = l.useMemo(
                function () {
                  var e = a.variantProps.reduce(function (e, r) {
                    var n = r in t ? t[r] : r in a.defaultProps ? a.defaultProps[r] : void 0;
                    return String(n) in a.variantClasses[r] ? e.concat(a.variantClasses[r][String(n)]) : e;
                  }, a.defaultClassNames.concat(t.className ? t.className.split(" ") : []));
                  return (
                    (e = a.compoundVariants.reduce(function (e, r) {
                      var n = r.className,
                        a = o(r, ["className"]);
                      return Object.keys(a).every(function (e) {
                        return String(t[e]) === String(a[e]);
                      })
                        ? e.concat(n)
                        : e;
                    }, e)),
                    h(e).join(" ")
                  );
                },
                a.variantProps
                  .map(function (e) {
                    return t[e];
                  })
                  .concat([t.className])
              ),
              i = l.useMemo(
                function () {
                  var e = a.strippedProps.length > 0 ? f(t, a.strippedProps) : t;
                  return n(n({}, e), { ref: r, className: s });
                },
                [t, r, s]
              );
            return l.createElement(e, i);
          });
        return (s.displayName = u(e)), s;
      };
    },
    16659: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/auth/register",
        function () {
          return r(14730);
        },
      ]);
    },
    56063: function (e, t, r) {
      "use strict";
      r.d(t, {
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
        p = o.forwardRef(function (e, t) {
          var r = e.children,
            c = e.loading,
            l = e.error,
            u = (0, s.Z)(e, ["children", "loading", "error"]),
            d = (0, o.useState)(!!c),
            f = d[0],
            p = d[1],
            m = (0, o.useState)(""),
            v = m[0],
            g = m[1],
            x = (0, o.useRef)(null);
          return (
            (0, o.useEffect)(
              function () {
                c
                  ? p(!0)
                  : l && f
                  ? (g("error"),
                    p(!1),
                    (x.current = setTimeout(function () {
                      g("");
                    }, 1e3)))
                  : f &&
                    (p(!1),
                    g("success"),
                    (x.current = setTimeout(function () {
                      g("");
                    }, 1e3)));
              },
              [l, c, f]
            ),
            (0, o.useEffect)(function () {
              return function () {
                x.current && clearTimeout(x.current);
              };
            }, []),
            (0, i.jsx)(h, (0, a.Z)((0, n.Z)({ ref: t, loading: c }, u), { children: (0, i.jsx)("span", { children: "error" === v ? "Error" : "success" === v ? "Success" : r }) }))
          );
        });
      p.displayName = "AsyncButton";
    },
    22691: function (e, t, r) {
      "use strict";
      r.d(t, {
        t: function () {
          return o;
        },
      });
      var n = r(26042),
        a = r(69396),
        s = r(99534),
        i = r(85893);
      r(67294);
      function o(e) {
        var t = e.className,
          r = (0, s.Z)(e, ["className"]),
          o = t || "h-5 w-5";
        return (0, i.jsxs)("svg", (0, a.Z)((0, n.Z)({ xmlns: "http://www.w3.org/2000/svg", className: o, viewBox: "0 0 20 20", fill: "currentColor" }, r), { children: [(0, i.jsx)("path", { d: "M10 12a2 2 0 100-4 2 2 0 000 4z" }), (0, i.jsx)("path", { fillRule: "evenodd", d: "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z", clipRule: "evenodd" })] }));
      }
    },
    91026: function (e, t, r) {
      "use strict";
      r.d(t, {
        X: function () {
          return o;
        },
      });
      var n = r(26042),
        a = r(69396),
        s = r(99534),
        i = r(85893);
      r(67294);
      function o(e) {
        var t = e.className,
          r = (0, s.Z)(e, ["className"]),
          o = t || "h-5 w-5";
        return (0, i.jsxs)("svg", (0, a.Z)((0, n.Z)({ xmlns: "http://www.w3.org/2000/svg", className: o, viewBox: "0 0 20 20", fill: "currentColor" }, r), { children: [(0, i.jsx)("path", { fillRule: "evenodd", d: "M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z", clipRule: "evenodd" }), (0, i.jsx)("path", { d: "M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" })] }));
      }
    },
    6969: function (e, t, r) {
      "use strict";
      r.d(t, {
        $: function () {
          return o;
        },
      });
      var n = r(26042),
        a = r(69396),
        s = r(99534),
        i = r(85893);
      r(67294);
      function o(e) {
        var t = e.className,
          r = (0, s.Z)(e, ["className"]),
          o = t || "h-5 w-5 text-black dark:text-white";
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
    80884: function (e, t, r) {
      "use strict";
      var n;
      r.d(t, {
        $: function () {
          return n;
        },
      }),
        (function (e) {
          (e.ERROR = "error"), (e.WARNING = "warning"), (e.SUCCESS = "success"), (e.INFO = "info");
        })(n || (n = {}));
    },
    51933: function (e, t, r) {
      "use strict";
      r.d(t, {
        OL: function () {
          return y;
        },
        X6: function () {
          return x;
        },
        dL: function () {
          return j;
        },
        jb: function () {
          return w;
        },
        rU: function () {
          return N;
        },
        uT: function () {
          return b;
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
      !(function (e) {
        (e.light = "font-light"), (e.semibold = "font-semibold"), (e.bold = "font-bold "), (e.black = "font-black "), (e.inherit = "");
      })(n || (n = {}));
      var p = "ease-in-out transition-all transition duration-150",
        m = {
          heading: { h1: "font-compressedsans text-mobile-heading-h1 md:text-heading-h1 antialiased", h2: "font-compressedsans text-heading-h2 antialiased", h3: "font-compressedsans text-heading-h3 antialiased", h4: "font-compressedsans text-heading-h4 antialiased", h5: "font-compressedsans text-heading-h5 antialiased", h6: "font-compressedsans text-heading-h6 antialiased tracking-wider", "label-lg": "font-mono font-medium text-label-lg uppercase antialiased tracking-wider", label: "font-mono text-label-sm uppercase antialiased tracking-wider" },
          body: { xl: "font-inter md:text-body-xl text-mobile-body-xl antialiased ", large: "font-inter text-body-lg antialiased ", small: "font-inter  text-body-sm antialiased ", xs: "font-inter text-body-xs antialiased " },
          metric: { xl: "font-monolight text-metric-xl uppercase", large: "font-monolight text-metric-lg uppercase", small: "font-monolight text-metric-sm uppercase" },
          anchor: { nav: "antialiased font-inter tracking-wide uppercase text-anchor-sm text-nav-link dark:text-dark-nav-link hover:interactive-1", default: "antialiased font-inter text-contrast-default hover:interactive-1", primary: "antialiased font-inter text-interactive-1 hover:opacity-80", secondary: "antialiased font-inter text-interactive-1 hover:opacity-80", inline: " font-inter text-body-lg semibold text-contrast-default hover:text-contrast-high text-anchor-sm", custom: "" },
        },
        v = { light: "font-light", semibold: "font-semibold", bold: "font-bold", black: "font-black", inherit: "" };
      function g(e) {
        var t = e.as,
          r = e.className,
          n = e.color,
          s = (0, i.Z)(e, ["as", "className", "color"]),
          c = null !== t && void 0 !== t ? t : "p";
        return (0, o.jsx)(c, (0, a.Z)({ className: l()(r, h[n || "contrast-default"]) }, s));
      }
      function x(e) {
        var t = e.weight,
          r = e.variant,
          n = e.className,
          c = (0, i.Z)(e, ["weight", "variant", "className"]),
          u = l()(n, m.heading[r], v[t || "light"]);
        return (0, o.jsx)(g, (0, s.Z)((0, a.Z)({}, c), { className: u }));
      }
      function b(e) {
        var t = e.weight,
          r = e.variant,
          n = e.className,
          c = (0, i.Z)(e, ["weight", "variant", "className"]),
          u = l()(n, m.body[r], v[t || "light"]);
        return (0, o.jsx)(g, (0, s.Z)((0, a.Z)({}, c), { className: u }));
      }
      function w(e) {
        var t = e.weight,
          r = e.variant,
          n = e.className,
          c = (0, i.Z)(e, ["weight", "variant", "className"]),
          u = l()(n, m.metric[r], v[t || "light"]);
        return (0, o.jsx)(g, (0, s.Z)((0, a.Z)({}, c), { className: u }));
      }
      function y(e) {
        var t = e.children,
          r = e.className,
          n = (0, i.Z)(e, ["children", "className"]);
        return (0, o.jsx)(N, (0, s.Z)((0, a.Z)({ className: l()(m.anchor.nav, p, r, "nav-link") }, n), { children: t }));
      }
      function N(e) {
        var t = e.weight,
          r = e.children,
          n = e.className,
          c = e.variant,
          u = e.onClick,
          d = e.target,
          h = (0, i.Z)(e, ["weight", "children", "className", "variant", "onClick", "target"]),
          g = "inline" === c ? "semibold" : t;
        return (0, o.jsx)(f(), (0, s.Z)((0, a.Z)({}, h), { children: (0, o.jsx)("a", { target: d, onClick: u, className: l()(m.anchor[c || "default"], p, n, v[g || "light"]), children: r }) }));
      }
      function j(e) {
        var t = e.children,
          r = e.weight,
          n = e.variant,
          c = e.className,
          d = e.to,
          f = e.href,
          h = e.arrow,
          g = (0, i.Z)(e, ["children", "weight", "variant", "className", "to", "href", "arrow"]),
          x = "inline" === n ? "semibold" : r;
        return (0, o.jsxs)("a", (0, s.Z)((0, a.Z)({ href: d || f, className: l()(m.anchor[n || "default"], p, c, v[x || "light"]) }, g), { children: [t, h && (0, o.jsx)("span", { children: (0, o.jsx)(u.Z, { className: "pointer ml-1 inline h-4 w-4", "aria-hidden": "true" }) })] }));
      }
    },
    12180: function (e, t, r) {
      "use strict";
      r.d(t, {
        G: function () {
          return d;
        },
      });
      var n = r(47568),
        a = r(34051),
        s = r.n(a),
        i = r(85893),
        o = r(67294),
        c = r(56063),
        l = r(49395),
        u = r(92985);
      function d(e) {
        var t = e.authType,
          r = e.redirect,
          a = (0, o.useState)(""),
          d = a[0],
          f = a[1],
          h = (0, l.Cv)().disables,
          p = (0, u.z)().trackClick,
          m = d,
          v = "register" === t ? "Sign up" : "Login",
          g = (0, o.useCallback)(
            (function () {
              var e = (0, n.Z)(
                s().mark(function e(n) {
                  var a, i;
                  return s().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (a = n.type),
                            (i = n.route),
                            f(a),
                            p({ event: t, label: "".concat(v, " with ").concat(a), data: { btn: a } }),
                            (window.location.href = "/api"
                              .concat(i, "/")
                              .concat(t, "?redirect_to=")
                              .concat(r ? encodeURIComponent(r) : ""));
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            [t, r, p, v]
          );
        return (0, i.jsxs)("div", {
          className: "flex flex-col space-y-6 font-interregular text-sm",
          children: [
            !h.login.twitter &&
              (0, i.jsx)(c.zx, {
                onClick: function () {
                  return g({ type: "Twitter", route: "/auth/twitter" });
                },
                size: "large",
                variant: "outline",
                disabled: !!m,
                className: "animate-arrow arrow block w-full sm:mt-6",
                children: "Twitter" === d ? "Submitting..." : "".concat(v, " with Twitter"),
              }),
            !h.login.facebook &&
              (0, i.jsx)(c.zx, {
                onClick: function () {
                  return g({ type: "Facebook", route: "/auth/facebook" });
                },
                size: "large",
                variant: "outline",
                disabled: !!m,
                className: "animate-arrow arrow block w-full sm:mt-6",
                children: "Facebook" === d ? "Submitting..." : "".concat(v, " with Facebook"),
              }),
          ],
        });
      }
    },
    73259: function (e, t, r) {
      "use strict";
      r.d(t, {
        C: function () {
          return S;
        },
      });
      var n = r(47568),
        a = r(26042),
        s = r(69396),
        i = r(99534),
        o = r(34051),
        c = r.n(o),
        l = r(85893),
        u = r(67294),
        d = r(22691),
        f = r(91026),
        h = r(69587),
        p = r(52523),
        m = r(54750),
        v = r(15755),
        g = r(6990),
        x = r(56063),
        b = r(51933),
        w = r(92985),
        y = r(87536),
        N = r(47533),
        j = r(74231),
        k = r(29815);
      var C = r(42472),
        Z = r(80884),
        P = j.Ry().shape({ email: j.Z_().email().required(), username: j.Z_().required(), password: j.Z_().required() }).required();
      function S(e) {
        e.loading;
        var t = e.user,
          r = e.profile,
          o = e.fieldErrors,
          j = e.onSubmit,
          S = (0, i.Z)(e, ["loading", "user", "profile", "fieldErrors", "onSubmit"]),
          O = (0, w.z)().trackClick,
          _ = (0, u.useState)(!1),
          E = _[0],
          z = _[1],
          R = (0, C.x_)().newToast,
          T = (0, y.cI)({ resolver: (0, N.X)(P) }),
          V = T.register,
          A = T.handleSubmit,
          M = (T.setError, T.setValue, T.formState),
          I = M.isSubmitting,
          q = M.errors,
          L = (0, u.useCallback)(
            function () {
              z(!E), O({ event: "togglePasswordVisible", label: "eye", data: { showPassword: E } });
            },
            [E, z, O]
          ),
          F = (function (e, t) {
            return Object.keys(e).reduce(function (t, r) {
              var n;
              return t[r] || (t[r] = []), (t[r] = (0, k.Z)(t[r]).concat([(null === (n = e[r]) || void 0 === n ? void 0 : n.message) || ""])), t;
            }, t || {});
          })(q, o);
        return (0, l.jsxs)(
          "form",
          (0, s.Z)((0, a.Z)({ method: "post" }, S), {
            onSubmit: A(
              (function () {
                var e = (0, n.Z)(
                  c().mark(function e(t) {
                    return c().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), (e.next = 3), j(t);
                            case 3:
                              e.next = 8;
                              break;
                            case 5:
                              (e.prev = 5), (e.t0 = e.catch(0)), R({ type: Z.$.ERROR, message: "Registration failed, please reload the page and try again.", closeAfter: 1e4, closable: !0 });
                            case 8:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 5]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()
            ),
            children: [
              (0, l.jsxs)("div", {
                className: "space-y-6",
                children: [
                  (0, l.jsx)("div", { children: (0, l.jsxs)(p.D, { field: "profile", fieldErrors: F, children: [(0, l.jsx)(m.F, { identifier: "slug", label: "Username", className: "mt-1", children: (0, l.jsx)(v.I, { id: "slug", disabled: I, autoComplete: "username", required: !0, className: "form-input-box", defaultValue: String((null === r || void 0 === r ? void 0 : r.slug) || ""), placeholder: "Username", name: "username", register: V }) }), (0, l.jsx)(h.L, { className: "mt-1" })] }) }),
                  (0, l.jsx)("div", { children: (0, l.jsxs)(p.D, { field: "email", fieldErrors: F, children: [(0, l.jsx)(m.F, { identifier: "email", label: "Email", className: "mt-1", children: (0, l.jsx)(v.I, { id: "email", autoComplete: "email", type: "email", required: !0, disabled: I, className: "form-input-box", defaultValue: String((null === t || void 0 === t ? void 0 : t.email) || ""), placeholder: "Email", name: "email", register: V }) }), (0, l.jsx)(h.L, { className: "mt-1" })] }) }),
                  (0, l.jsx)("div", {
                    children: (0, l.jsxs)(p.D, {
                      field: "password",
                      fieldErrors: F,
                      children: [(0, l.jsxs)(m.F, { identifier: "password", label: "Password", className: "relative mt-1", children: [E ? (0, l.jsx)(v.I, { id: "password", type: "text", required: !0, disabled: I, className: "form-input-box", placeholder: "Password", name: "password", register: V }) : (0, l.jsx)(v.I, { id: "password", type: "password", required: !0, disabled: I, className: "form-input-box", placeholder: "Password", name: "password", register: V }), (0, l.jsx)("div", { className: "absolute bottom-0 right-0 flex h-[38px] cursor-pointer items-center pr-6 text-black", children: E ? (0, l.jsx)(d.t, { className: "h-4 w-4", onClick: L }) : (0, l.jsx)(f.X, { className: "h-4 w-4", onClick: L }) })] }), (0, l.jsx)(h.L, { className: "mt-1" })],
                    }),
                  }),
                ],
              }),
              (0, l.jsx)("div", {
                className: "mt-8",
                children: (0, l.jsx)(x.zx, {
                  onClick: function () {
                    return O({ event: "createAccountSubmit", label: "Create account" });
                  },
                  size: "large",
                  type: "submit",
                  name: "tos_agreed_at",
                  disabled: I,
                  value: new Date().toISOString(),
                  className: "track-btn-create-account w-full",
                  children: I ? "Creating Account" : "Create account",
                }),
              }),
              (0, l.jsxs)(b.uT, {
                variant: "small",
                color: "contrast-low",
                className: "mt-6 text-center md:mt-6",
                children: [
                  "By clicking create account you agree to the",
                  " ",
                  (0, l.jsx)(b.rU, {
                    onClick: function () {
                      return O({ event: "termsOfService", label: "terms of service" });
                    },
                    href: g.Z.tos(),
                    target: "_blank",
                    className: "underline",
                    children: "terms of service",
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    15755: function (e, t, r) {
      "use strict";
      r.d(t, {
        I: function () {
          return l;
        },
        P: function () {
          return u;
        },
      });
      var n = r(26042),
        a = r(69396),
        s = r(99534),
        i = r(85893),
        o = (r(67294), r(94184)),
        c = r.n(o),
        l = function (e) {
          var t = e.name,
            r = e.register,
            a = e.defaultValue,
            o = e.hasError,
            l = e.registerOptions,
            u = void 0 === l ? {} : l,
            d = e.value,
            f = e.className,
            h = (0, s.Z)(e, ["name", "register", "defaultValue", "hasError", "registerOptions", "value", "className"]),
            p = d || "" === d ? { value: d } : { defaultValue: a };
          return (0, i.jsx)("input", (0, n.Z)({ className: c()("form-input-box h-11 bg-transparent px-2 py-2 font-interregular font-normal antialiased", { error: o }, f) }, h, p, r ? r(t, (0, n.Z)({}, u)) : { name: t }));
        },
        u = function (e) {
          var t = e.name,
            r = e.register,
            o = e.defaultValue,
            l = e.hasError,
            u = e.registerOptions,
            d = void 0 === u ? {} : u,
            f = e.value,
            h = e.className,
            p = e.children,
            m = (0, s.Z)(e, ["name", "register", "defaultValue", "hasError", "registerOptions", "value", "className", "children"]),
            v = f || "" === f ? { value: f } : { defaultValue: o };
          return (0, i.jsx)("select", (0, a.Z)((0, n.Z)({ required: !0, style: { fontSize: "14px" }, className: c()("form-input-box h-11 bg-transparent px-2 py-2 font-interregular font-normal antialiased", { error: l }, h) }, m, v, r ? r(t, (0, n.Z)({}, d)) : { name: t }), { children: p }));
        };
    },
    6990: function (e, t, r) {
      "use strict";
      var n = (0, r(26042).Z)(
        {
          home: function () {
            return "/";
          },
          edition: function (e) {
            return "/editions/".concat(e);
          },
          marketplace: function () {
            return "/marketplace";
          },
          dashboard: function () {
            return "/d";
          },
          profile: function (e) {
            return "/".concat(e);
          },
          legal: function (e) {
            return "/legal/".concat(e);
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
          token: function (e) {
            return "/token/".concat(e);
          },
          extra: function (e, t) {
            return "/token/".concat(e, "/extra/").concat(t);
          },
        },
        {
          editionContract: function (e) {
            return "/editions/".concat(e, "/contract");
          },
        },
        {
          checkoutError: function (e) {
            return "/checkout/".concat(e, "/error");
          },
          checkoutExpired: function (e) {
            return "/checkout/".concat(e, "/expired");
          },
          checkoutConfirmation: function (e) {
            return "/checkout/".concat(e, "/confirmation");
          },
          checkoutFulfillment: function (e) {
            return "/checkout/".concat(e, "/fulfillment");
          },
        },
        {
          blog: function () {
            return "/blog";
          },
          blogPost: function (e) {
            return "/blog/".concat(e);
          },
          blogCategory: function (e) {
            return "/blog/category/".concat(e);
          },
        }
      );
      t.Z = n;
    },
    16725: function (e, t, r) {
      "use strict";
      r.d(t, {
        M: function () {
          return s;
        },
      });
      var n = r(11752),
        a = r(11163);
      function s() {
        var e = (0, a.useRouter)().query;
        return "string" === typeof e.redirect_to && e.redirect_to.startsWith(String((0, n.default)().publicRuntimeConfig.NEXT_PUBLIC_BASE_URL) + "/") ? e.redirect_to : null;
      }
    },
    14730: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return O;
          },
        });
      var n = r(85893),
        a = r(47568),
        s = r(26042),
        i = r(69396),
        o = r(34051),
        c = r.n(o),
        l = r(9669),
        u = r.n(l),
        d = r(41664),
        f = r.n(d),
        h = r(67294),
        p = r(88767),
        m = r(51933),
        v = r(92985),
        g = r(6990),
        x = r(12180),
        b = r(6969),
        w = r(73259),
        y = r(42472),
        N = r(80884),
        j = r(16725),
        k = r(61431),
        C = r(84337),
        Z = r(30714),
        P = "register";
      function S() {
        var e = (0, v.z)().trackClick,
          t = (0, h.useState)({}),
          r = t[0],
          o = t[1],
          l = (0, y.x_)().newToast,
          d = (0, Z.Z)().execute,
          S = (0, j.M)(),
          O = (0, p.useMutation)(function (e) {
            return u().post("/api/auth/register", e);
          }),
          _ = (0, h.useState)(""),
          E = _[0],
          z = _[1],
          R = (0, k.n)({
            resource: P,
            onError: function (e) {
              console.log("Some error occured, please try again", e), z(e.message);
            },
            onTimeout: function () {
              z("Timeout, please try again");
            },
            timeout: 500,
          }),
          T = R.cancelAccessRequest,
          V = (R.loading, R.queued),
          A = R.requestAccess,
          M = V || E,
          I = (0, h.useCallback)(
            (function () {
              var e = (0, a.Z)(
                c().mark(function e(t) {
                  var r, n, a;
                  return c().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), o({}), (e.next = 4), A({ payload: {} });
                          case 4:
                            if ((r = e.sent)) {
                              e.next = 7;
                              break;
                            }
                            return e.abrupt("return");
                          case 7:
                            return (e.next = 9), d({ action: P });
                          case 9:
                            return (n = e.sent), (e.next = 12), O.mutateAsync((0, i.Z)((0, s.Z)({}, t), { accessToken: r, recaptchaToken: n }));
                          case 12:
                            if (!(a = e.sent).data.fieldErrors) {
                              e.next = 17;
                              break;
                            }
                            o(a.data.fieldErrors), (e.next = 23);
                            break;
                          case 17:
                            if (!a.data.success) {
                              e.next = 22;
                              break;
                            }
                            return (window.location.href = S || g.Z.dashboard()), e.abrupt("return");
                          case 22:
                            l({ type: N.$.ERROR, message: "Something went wrong. Please reload the page and try again.", closeAfter: 1e4, closable: !0 });
                          case 23:
                            e.next = 29;
                            break;
                          case 25:
                            throw ((e.prev = 25), (e.t0 = e.catch(0)), l({ type: N.$.ERROR, message: "Something went wrong. Please reload the page and try again.", closeAfter: 1e4, closable: !0 }), e.t0);
                          case 29:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 25]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            [O, l, S]
          ),
          q = g.Z.auth();
        return (
          S && (q += "?" + new URLSearchParams({ redirect_to: S }).toString()),
          (0, n.jsxs)("div", {
            children: [
              (0, n.jsxs)("div", { className: "flex items-center p-6", children: [(0, n.jsx)(f(), { className: "inline-block", href: g.Z.home(), children: (0, n.jsx)("a", { children: (0, n.jsx)(b.$, { className: "w-16" }) }) }), (0, n.jsx)("span", { className: "ml-2 mr-4 whitespace-nowrap bg-surface-0 px-2 py-1 font-mono text-xs text-contrast-max-inverse", children: "beta" })] }),
              (0, n.jsx)("div", {
                className: "flex flex-grow flex-col md:justify-center",
                children: (0, n.jsx)("div", {
                  className: "mx-auto w-full md:max-w-lg",
                  children: (0, n.jsxs)("div", {
                    className: "px-6 pb-16 pt-4 md:px-10",
                    children: [
                      (0, n.jsx)("div", { className: "mb-4 flex flex-row justify-center", children: (0, n.jsx)(m.X6, { as: "h2", variant: "h2", className: "uppercase", children: "Register" }) }),
                      M
                        ? (0, n.jsx)("div", {
                            children: (0, n.jsx)(C.J, {
                              error: E,
                              handleExit: function () {
                                T();
                              },
                            }),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsx)(x.G, { authType: "register", redirect: S }),
                              (0, n.jsxs)("div", {
                                className: "mt-8 md:mt-12",
                                children: [
                                  (0, n.jsx)(w.C, { onSubmit: I, fieldErrors: r }),
                                  (0, n.jsxs)(m.uT, {
                                    variant: "large",
                                    className: "mt-6 text-center md:mt-12",
                                    children: [
                                      "Already have an account?\xa0",
                                      (0, n.jsx)(f(), {
                                        href: q,
                                        children: (0, n.jsx)("a", {
                                          onClick: function () {
                                            return e({ event: "signUp", label: "Sign up" });
                                          },
                                          className: "font-bold",
                                          children: "Log in",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                    ],
                  }),
                }),
              }),
            ],
          })
        );
      }
      var O = function () {
        return (0, n.jsx)(S, {});
      };
    },
  },
  function (e) {
    e.O(0, [158, 7536, 2674, 5248, 9774, 2888, 179], function () {
      return (t = 16659), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
//# sourceMappingURL=register-f44cd3e2382e7d07.js.map
