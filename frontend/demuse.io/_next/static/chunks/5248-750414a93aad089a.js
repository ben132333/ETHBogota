"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5248],
  {
    61431: function (e, r, n) {
      n.d(r, {
        n: function () {
          return i;
        },
      });
      var t = n(47568),
        a = n(82670),
        u = n(34051),
        c = n.n(u),
        o = n(67294),
        s = n(35597),
        l = n(92985);
      function i(e) {
        var r = e.resource,
          n = e.onTimeout,
          u = e.onError,
          i = e.onAccessGranted,
          d = e.onResourceRemoved,
          f = e.ignoreToken,
          x = (0, o.useContext)(s.q),
          v = (0, l.z)().trackError,
          h = (0, o.useState)(0),
          m = (h[0], h[1]),
          p = (0, o.useRef)(r);
        if (p.current !== r) throw new Error("Resource cannot be changed on the same instance");
        if (!x) throw new Error("useCrowdController must be used within a CrowdControllerProvider");
        var b = (0, o.useRef)(!1),
          C = (0, o.useRef)(!1),
          k = (0, o.useRef)(null),
          g = (0, o.useRef)(n),
          w = (0, o.useRef)(r),
          y = (0, o.useRef)(e.timeout || x.timeout),
          E = (0, o.useRef)(x),
          j = (0, o.useRef)(u),
          N = (0, o.useRef)(i),
          T = (0, o.useRef)(d),
          R = (0, o.useRef)(f);
        (0, o.useEffect)(
          function () {
            (g.current = n), (y.current = e.timeout || x.timeout), (w.current = r), (E.current = x), (j.current = u), (N.current = i), (T.current = d), (R.current = f);
          },
          [x, r, e, n, u, i, d, f]
        );
        var S = (0, o.useCallback)(
            (function () {
              var e = (0, t.Z)(
                c().mark(function e(r) {
                  var n, t, u, o, s, l, i, d, f;
                  return c().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!b.current) {
                              e.next = 3;
                              break;
                            }
                            throw (v({ event: "crowdController_Error", error: "Cannot request access while we're already loading", data: { resource: p.current } }), new Error("Cannot request access while we're already loading"));
                          case 3:
                            (b.current = !0), (n = new Date().getTime()), (t = 1);
                          case 6:
                            if (b.current) {
                              e.next = 9;
                              break;
                            }
                            return e.abrupt("return", null);
                          case 9:
                            if (!(n + 1e3 * y.current < new Date().getTime())) {
                              e.next = 17;
                              break;
                            }
                            return (
                              (b.current = !1),
                              (C.current = !1),
                              null === (u = g.current) || void 0 === u || u.call(g),
                              m(function (e) {
                                return e + 1;
                              }),
                              v({ event: "crowdController_Error", error: "timeout", data: { resource: p.current } }),
                              e.abrupt("return", null)
                            );
                          case 17:
                            return (
                              (e.prev = 17),
                              m(function (e) {
                                return e + 1;
                              }),
                              (e.next = 21),
                              fetch("".concat(E.current.endpoint, "/").concat(w.current), { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ payload: r.payload }) })
                            );
                          case 21:
                            if (200 !== (o = e.sent).status && 403 !== o.status) {
                              e.next = 57;
                              break;
                            }
                            return (e.next = 25), o.json();
                          case 25:
                            (s = e.sent), (e.t0 = s.status), (e.next = "TOO_MANY_REQUESTS" === e.t0 ? 29 : "ACCESS_GRANTED" === e.t0 ? 32 : "RESOURCE_REMOVED" === e.t0 ? 46 : 51);
                            break;
                          case 29:
                            return (C.current = !1), (b.current = !1), e.abrupt("break", 55);
                          case 32:
                            if (!R.current) {
                              e.next = 41;
                              break;
                            }
                            return (e.next = 36), R.current(s.token);
                          case 36:
                            if (!e.sent) {
                              e.next = 41;
                              break;
                            }
                            return (C.current = !0), (b.current = !0), e.abrupt("break", 55);
                          case 41:
                            return (k.current = s.token), (b.current = !1), (C.current = !1), null === (l = N.current) || void 0 === l || l.call(N, s.token), e.abrupt("return", s.token);
                          case 46:
                            return (b.current = !1), (C.current = !1), null === (i = T.current) || void 0 === i || i.call(T), e.abrupt("return", null);
                          case 51:
                            return (b.current = !1), (C.current = !0), console.log("Unknown response", s), e.abrupt("break", 55);
                          case 55:
                            e.next = 67;
                            break;
                          case 57:
                            if (429 !== o.status) {
                              e.next = 61;
                              break;
                            }
                            (C.current = !0), (b.current = !0), (e.next = 67);
                            break;
                          case 61:
                            if (![404, 503].includes(o.status)) {
                              e.next = 66;
                              break;
                            }
                            throw (v({ event: "crowdController_Error", error: "Access is currently not available. Please try again later.", data: { resource: p.current } }), new Error("Access is currently not available. Please try again later."));
                          case 66:
                            v({ event: "crowdController_Error", error: "Unexpected response status:", data: { resource: p.current, status: o.status } }), console.error("Unexpected response status:", o.status), (C.current = !0);
                          case 67:
                            e.next = 75;
                            break;
                          case 69:
                            (e.prev = 69), (e.t1 = e.catch(17)), v({ event: "crowdController_Error", error: (null === e.t1 || void 0 === e.t1 ? void 0 : e.t1.message) || "", data: { resource: p.current } }), (C.current = !1), (b.current = !1), (0, a.Z)(e.t1, Error) && (null === (d = j.current) || void 0 === d || d.call(j, e.t1));
                          case 75:
                            return (
                              m(function (e) {
                                return e + 1;
                              }),
                              (f = Math.floor(3 * Math.random() * 1e3)),
                              (e.next = 79),
                              new Promise(function (e) {
                                return setTimeout(e, 1e3 * Math.min(t, 15) + f);
                              })
                            );
                          case 79:
                            t++, (e.next = 6);
                            break;
                          case 82:
                            return e.abrupt("return", null);
                          case 83:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[17, 69]]
                  );
                })
              );
              return function (r) {
                return e.apply(this, arguments);
              };
            })(),
            []
          ),
          Q = (0, o.useCallback)(function () {
            (C.current = !1),
              (b.current = !1),
              m(function (e) {
                return e + 1;
              });
          }, []);
        return (
          (0, o.useEffect)(function () {
            return function () {
              b.current = !1;
            };
          }, []),
          { requestAccess: S, token: k.current, loading: b.current, queued: C.current, cancelAccessRequest: Q }
        );
      }
    },
    30714: function (e, r, n) {
      n.d(r, {
        Z: function () {
          return u;
        },
      });
      var t = n(67294),
        a = n(18354);
      function u() {
        var e = (0, t.useContext)(a.k);
        if (!e) throw new Error("useRecaptcha must be used within a RecaptchaProvider");
        var r = e.loadScript;
        return (
          (0, t.useEffect)(
            function () {
              r();
            },
            [r]
          ),
          {
            execute: e.disableCaptcha
              ? function () {
                  return "";
                }
              : e.execute,
          }
        );
      }
    },
    84337: function (e, r, n) {
      n.d(r, {
        J: function () {
          return s;
        },
      });
      var t = n(85893),
        a = n(67294),
        u = n(51933),
        c = n(56063),
        o = n(92985);
      function s(e) {
        var r = e.error,
          n = e.handleExit,
          u = function (e, r) {
            s({ event: "handleToggleConfirmCloseQueue", label: e, data: { screen: "authQueueScreen" } }), v(r);
          },
          c = function () {
            n();
          },
          s = (0, o.z)().trackClick,
          f = (0, a.useState)(!1),
          x = f[0],
          v = f[1];
        return x
          ? (0, t.jsx)(d, {
              handleLeaveQueue: function (e) {
                s({ event: "handleLeaveQueue", label: e, data: { screen: "authQueueScreen" } }), c();
              },
              handleToggleConfirmCloseQueue: u,
            })
          : r
          ? (0, t.jsx)(i, { onClose: c })
          : (0, t.jsx)(l, { handleToggleConfirmCloseQueue: u });
      }
      function l(e) {
        var r = e.handleToggleConfirmCloseQueue,
          n = (0, o.z)().track;
        return (
          (0, a.useEffect)(function () {
            n({ event: "queueModalScreenQueued", data: { screen: "authQueueScreen" } });
          }, []),
          (0, t.jsx)("div", {
            className: "flex items-center justify-center px-6",
            children: (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)("div", { className: "app-loader mx-auto my-6", style: { display: "flex", borderColor: "rgba(0,0,0,0.03)", borderTopColor: "#2E2BC4" } }),
                (0, t.jsx)(u.uT, { className: "text-center", variant: "large", color: "contrast-default", children: "Uh oh! We\u2019re seeing a lot of people on DeMuse at the moment and things are taking longer than expected." }),
                (0, t.jsx)(u.uT, { className: "mt-4 text-center", variant: "large", color: "contrast-default", children: "You're in line to continue." }),
                (0, t.jsx)(c.zx, {
                  className: "mt-8 w-full uppercase",
                  size: "large",
                  variant: "link",
                  onClick: function () {
                    return r("Cancel", !0);
                  },
                  children: "Cancel",
                }),
              ],
            }),
          })
        );
      }
      function i(e) {
        var r = e.onClose,
          n = (0, o.z)(),
          s = n.trackClick,
          l = n.track;
        return (
          (0, a.useEffect)(function () {
            l({ event: "queueModalScreenError", data: { screen: "authQueueScreen" } });
          }, []),
          (0, t.jsx)("div", {
            className: "flex items-center justify-center px-6",
            children: (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)("div", { className: "mx-auto my-4 flex h-10 w-10 items-center justify-center rounded-full bg-destructive-1 text-white", children: "!" }),
                (0, t.jsxs)(u.uT, { className: "text-center", variant: "large", color: "contrast-default", children: ["Your authentication request failed. This can happen when you are trying to login from a VPN or a sanctioned country. ", (0, t.jsx)("br", {})] }),
                (0, t.jsx)(u.uT, { className: "mt-4 text-center", variant: "small", color: "contrast-default", children: "Please turn off your VPN and try again." }),
                (0, t.jsx)(c.zx, {
                  onClick: function () {
                    s({ event: "queueModalScreenClosedSecondaryAction", label: "Go Back" }), r();
                  },
                  className: "mt-8 w-full uppercase",
                  size: "large",
                  variant: "primary",
                  children: "Back To Auth",
                }),
              ],
            }),
          })
        );
      }
      function d(e) {
        var r = e.handleToggleConfirmCloseQueue,
          n = e.handleLeaveQueue,
          s = (0, o.z)().track;
        return (
          (0, a.useEffect)(function () {
            s({ event: "queueModalScreenConfirmClose", data: { screen: "authQueueScreen" } });
          }, []),
          (0, t.jsx)("div", {
            className: "flex items-center justify-center px-6",
            children: (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)("div", { className: "app-loader mx-auto my-6", style: { display: "flex", borderColor: "rgba(0,0,0,0.03)", borderTopColor: "#2E2BC4" } }),
                (0, t.jsx)(u.uT, { className: "text-center", variant: "large", color: "contrast-default", children: "It looks like we're in the middle of something. By leaving now, you'll lose your spot in the queue." }),
                (0, t.jsx)(u.uT, { className: "mt-4 text-center", variant: "large", color: "contrast-default", children: "This action cannot be undone." }),
                (0, t.jsx)(c.zx, {
                  onClick: function () {
                    return r("Stay In Queue", !1);
                  },
                  className: "mb-4 mt-6 block w-full uppercase",
                  size: "large",
                  variant: "primary",
                  children: "Stay In Queue",
                }),
                (0, t.jsx)(c.zx, {
                  onClick: function () {
                    return n("Leave Queue");
                  },
                  className: "w-full uppercase",
                  size: "large",
                  variant: "link",
                  children: "Leave Queue",
                }),
              ],
            }),
          })
        );
      }
    },
    69587: function (e, r, n) {
      n.d(r, {
        L: function () {
          return v;
        },
        x: function () {
          return x;
        },
      });
      var t = n(26042),
        a = n(69396),
        u = n(99534),
        c = n(85893),
        o = n(67294),
        s = n(57454),
        l = n(66604),
        i = n.n(l),
        d = n(41609),
        f = n.n(d);
      function x(e) {
        var r = (0, t.Z)({}, e);
        Object.keys(r).forEach(function (e) {
          r[e] || delete r[e];
        });
        var n =
          !f()(r) &&
          i()(r, function (e, r) {
            var n = e.message,
              t = e.type;
            return [n, "".concat("required" === t ? "".concat(r.replace("_", " "), " is required") : "")].filter(function (e) {
              return !!e;
            });
          });
        return n || void 0;
      }
      function v(e) {
        var r = e.className,
          n = (0, u.Z)(e, ["className"]),
          l = (0, o.useContext)(s.E).errors;
        return l
          ? (0, c.jsx)(
              "div",
              (0, a.Z)((0, t.Z)({ className: "mt-1 flex flex-col font-interregular text-sm text-error-10 ".concat(r) }, n), {
                children: (0, c.jsx)("ul", {
                  className: "list-inside list-disc",
                  children: l.map(function (e) {
                    return (0, c.jsx)("li", { children: e }, e);
                  }),
                }),
              })
            )
          : null;
      }
    },
    52523: function (e, r, n) {
      n.d(r, {
        D: function () {
          return u;
        },
      });
      var t = n(85893),
        a = (n(67294), n(57454));
      function u(e) {
        var r = e.field,
          n = e.fieldErrors,
          u = e.children,
          c = null === n || void 0 === n ? void 0 : n[r];
        return (0, t.jsx)(a.E.Provider, { value: { errors: c || null, field: r }, children: u });
      }
    },
    54750: function (e, r, n) {
      n.d(r, {
        F: function () {
          return c;
        },
      });
      var t = n(85893),
        a = n(67294),
        u = n(57454);
      function c(e) {
        var r = e.identifier,
          n = e.className,
          c = e.children,
          o = e.label,
          s = e.fontSize,
          l = void 0 === s ? "text-body-lg" : s,
          i = (0, a.useContext)(u.E).errors;
        return (0, t.jsxs)("div", { className: "".concat(n, " column flex flex-col-reverse"), children: [c, (0, t.jsx)("label", { htmlFor: r, className: "block pb-2 font-interregular antialiased ".concat(l, " ").concat(i ? "error" : ""), children: o })] });
      }
    },
    57454: function (e, r, n) {
      n.d(r, {
        E: function () {
          return t;
        },
      });
      var t = n(67294).createContext({ errors: null, field: null });
    },
  },
]);
//# sourceMappingURL=5248-750414a93aad089a.js.map
