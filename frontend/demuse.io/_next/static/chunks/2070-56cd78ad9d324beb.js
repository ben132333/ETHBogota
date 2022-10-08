(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2070],
  {
    90994: function (e, t, n) {
      "use strict";
      n.d(t, {
        V: function () {
          return c;
        },
      });
      var r = n(26042),
        i = n(69396),
        a = n(99534),
        s = n(85893),
        l = n(94184),
        o = n.n(l);
      n(67294);
      function c(e) {
        var t = e.className,
          n = (0, a.Z)(e, ["className"]);
        return (0, s.jsx)("svg", (0, i.Z)((0, r.Z)({ width: "12", height: "6", viewBox: "0 0 12 6", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: o()("h-6 w-6", t) }, n), { children: (0, s.jsx)("path", { d: "M6.00781 6L0.0078125 0H11.9775L6.00781 6Z", fill: "black" }) }));
      }
    },
    96328: function (e, t, n) {
      "use strict";
      n.d(t, {
        k: function () {
          return s;
        },
      });
      var r = n(85893),
        i = n(67294);
      function a(e) {
        var t = e.percentage,
          n = e.color,
          a = e.bgColor,
          s = (0, i.useState)(0),
          l = s[0],
          o = s[1];
        (0, i.useEffect)(
          function () {
            o(t);
          },
          [t]
        );
        var c = 40,
          d = "0 0 ".concat(c, " ").concat(c),
          u = 18.5,
          p = u * Math.PI * 2,
          f = (l * p) / 100;
        return (0, r.jsxs)("svg", { width: c, height: c, viewBox: d, children: [(0, r.jsx)("circle", { fill: "none", className: "".concat(a, " stroke-current"), cx: 20, cy: 20, r: u, strokeWidth: "".concat(3, "px") }), (0, r.jsx)("circle", { fill: "none", className: "".concat(n, " stroke-current"), stroke: n, cx: 20, cy: 20, r: u, strokeWidth: "".concat(3, "px"), transform: "rotate(-90 ".concat(20, " ").concat(20, ")"), strokeDasharray: [f, p - f].join(", "), strokeLinecap: "round", style: { transition: "all 0.5s" } })] });
      }
      function s(e) {
        var t = e.children,
          n = e.color,
          s = void 0 === n ? "bg-surface-1" : n,
          l = e.bgColor,
          o = void 0 === l ? "bg-surface-1 opacity-5" : l,
          c = e.value,
          d = void 0 === c ? 0 : c,
          u = e.max,
          p = void 0 === u ? 100 : u,
          f = e.estimatedTime,
          v = void 0 === f ? 1 : f,
          x = e.position,
          m = e.type,
          h = void 0 === m ? "bar" : m,
          g = (0, i.useState)(d),
          j = g[0],
          b = g[1];
        return (
          (0, i.useEffect)(
            function () {
              b(d);
            },
            [d]
          ),
          (0, i.useEffect)(
            function () {
              var e = setInterval(function () {
                b(function (t) {
                  return t >= p ? (clearInterval(e), p) : t + 5;
                });
              }, 10 * v);
              return function () {
                return clearInterval(e);
              };
            },
            [d, p, v]
          ),
          "circle" === h
            ? (0, r.jsx)(a, { color: s, bgColor: o, percentage: j })
            : (0, r.jsxs)("div", { className: "relative pt-1", children: ["top" === x ? (0, r.jsxs)("h4", { className: "absolute -top-5 right-0", style: { fontSize: "14px" }, children: [j > 100 ? 100 : j, "%"] }) : null, (0, r.jsxs)("div", { className: "relative mb-4 flex h-1 overflow-hidden rounded text-xs", children: [(0, r.jsx)("div", { className: "absolute inset-0 ".concat(o) }), (0, r.jsx)("div", { style: { width: "".concat(j, "%") }, className: "flex flex-col justify-center whitespace-nowrap ".concat(s, " text-center shadow-none transition-all duration-1000 ease-out") })] }), t ? t(j) : "top" !== x ? (0, r.jsxs)("h4", { className: "absolute -bottom-5 right-0", style: { fontSize: "14px" }, children: [j > 100 ? 100 : j, "%"] }) : null] })
        );
      }
    },
    315: function (e, t, n) {
      "use strict";
      n.d(t, {
        Zx: function () {
          return H;
        },
        i5: function () {
          return I;
        },
      });
      var r = n(85893),
        i = n(67294),
        a = n(94184),
        s = n.n(a),
        l = n(16087),
        o = n(47568),
        c = n(26042),
        d = n(69396),
        u = n(29815),
        p = n(34051),
        f = n.n(p),
        v = n(96624),
        x = n.n(v),
        m = n(32512),
        h = n(51933);
      function g(e) {
        var t = e.render,
          n = e.setFiles,
          a = e.maxFiles,
          s = e.accept,
          l = void 0 === s ? ["image/jpeg"] : s,
          p = (0, i.useState)(!1),
          v = p[0],
          h = p[1],
          g = (0, i.useCallback)(
            (function () {
              var e = (0, o.Z)(
                f().mark(function e(t, r) {
                  var i, s;
                  return f().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            h(!0),
                            (i = (0, u.Z)(t)
                              .concat((0, u.Z)(r))
                              .map(
                                (function () {
                                  var e = (0, o.Z)(
                                    f().mark(function e(t) {
                                      var n;
                                      return f().wrap(
                                        function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                return (e.prev = 0), (e.next = 3), b(t);
                                              case 3:
                                                return (n = e.sent), e.abrupt("return", n);
                                              case 7:
                                                return (e.prev = 7), (e.t0 = e.catch(0)), e.abrupt("return", { error: e.t0.message });
                                              case 10:
                                              case "end":
                                                return e.stop();
                                            }
                                        },
                                        e,
                                        null,
                                        [[0, 7]]
                                      );
                                    })
                                  );
                                  return function (t) {
                                    return e.apply(this, arguments);
                                  };
                                })()
                              )),
                            (e.next = 4),
                            x().map(i, function (e) {
                              return e;
                            })
                          );
                        case 4:
                          (s = e.sent),
                            n(
                              1 === a
                                ? s[0]
                                : function (e) {
                                    return (0, u.Z)(e).concat((0, u.Z)(s));
                                  }
                            ),
                            h(!1);
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })(),
            [a, n]
          ),
          N = (0, m.uI)({ onDrop: g, maxFiles: a, accept: l }),
          w = N.getRootProps,
          y = N.getInputProps,
          k = N.isDragActive;
        return (0, r.jsxs)("div", (0, d.Z)((0, c.Z)({}, w()), { children: [(0, r.jsx)("input", (0, d.Z)((0, c.Z)({}, y()), { type: "file", multiple: !0, className: "relative z-50 block h-full w-full cursor-pointer opacity-0" })), t ? t((0, d.Z)((0, c.Z)({}, N), { uploading: v })) : (0, r.jsx)(j, { uploading: v, isDragActive: k })] }));
      }
      function j(e) {
        var t = e.uploading,
          n = e.isDragActive;
        return (0, r.jsx)("div", { className: s()({ "bg-line-0": n }, "relative flex items-center border border-dashed border-gray-500 p-16 transition-all duration-100 ease-in-out "), children: (0, r.jsxs)("div", { className: s()("top-0 bottom-0 left-0 right-0 m-auto flex flex-col items-center p-4 text-center"), children: [(0, r.jsx)("div", { className: "w-10 pb-4", children: (0, r.jsx)("img", { src: "/assets/logo/DeMuse_Logo_Icon-Black.png" }) }), t ? (0, r.jsx)(h.jb, { variant: "small", children: "Loading asset..." }) : n ? (0, r.jsx)(h.jb, { variant: "small", children: "Drop the files here ..." }) : (0, r.jsx)("div", { children: (0, r.jsx)(h.jb, { variant: "small", children: "Drag 'n' Drop your files here, or click to select files" }) })] }) });
      }
      function b(e) {
        return new (x())(function (t, n) {
          if (e.errors)
            n({
              message: e.errors
                .map(function (e) {
                  return e.message;
                })
                .join(", "),
            });
          else {
            var r = new FileReader();
            r.readAsDataURL(e),
              (r.onabort = function () {
                t();
              }),
              (r.onerror = function () {
                n();
              }),
              (r.onload = function (n) {
                var r;
                t({ file: e, result: null === (r = n.target) || void 0 === r ? void 0 : r.result, id: String(Date.now()) });
              });
          }
        });
      }
      var N = n(27233),
        w = n(27011),
        y = n.n(w),
        k = n(82781),
        S = n(33926),
        C = n.n(S),
        Z = n(47522),
        F = n(11929),
        D = n(89584),
        z = n(56063),
        _ = n(96328);
      function A(e) {
        var t = e.aspectRatio,
          n = e.border,
          a = e.open,
          l = e.url,
          o = e.onSave,
          c = e.onClose,
          d = (e.saving, (0, i.useState)(1)),
          u = d[0],
          p = d[1],
          f = (0, i.useState)({ x: 0.5, y: 0.5 }),
          v = f[0],
          x = f[1],
          m = (0, i.useState)(!1),
          h = m[0],
          g = m[1];
        return (0, r.jsx)(D.u, {
          closeWithEscape: !0,
          transparent: !0,
          open: a,
          className: "max-w-[848px]",
          onClose: c,
          title: "Edit Media",
          children: (0, r.jsxs)("div", {
            className: C().uploadCropper,
            children: [
              (0, r.jsx)("div", {
                className: "absolute left-6 top-4",
                children: (0, r.jsx)(z.Z6, {
                  onClick: function () {
                    var e = v.x,
                      n = v.y;
                    o({ ar: t, "fp-x": e, "fp-y": n, "fp-z": u, crop: "focalpoint", fit: "crop" });
                  },
                  variant: "outlineLight",
                  children: "Apply",
                }),
              }),
              (0, r.jsxs)("div", {
                className: "relative",
                children: [
                  (0, r.jsxs)("div", {
                    className: "relative mb-4",
                    children: [
                      (0, r.jsx)("div", {
                        className: s()({ "opacity-0": !h, "opacity-100": h }),
                        children: (0, r.jsx)(y(), {
                          image: l,
                          width: 800,
                          height: 800 / t,
                          scale: u,
                          border: n,
                          position: v,
                          onPositionChange: x,
                          onImageReady: function () {
                            g(!0);
                          },
                        }),
                      }),
                      h ? null : (0, r.jsx)("div", { className: "absolute inset-0 flex items-center justify-center", children: (0, r.jsx)(_.k, { type: "circle", estimatedTime: 30, color: "text-black", bgColor: "text-black opacity-5" }) }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className: "flex justify-center",
                    children: (0, r.jsxs)("div", {
                      className: "flex w-[320px] items-center",
                      children: [
                        (0, r.jsx)(Z.Z, { className: "mx-3 h-6 w-6 text-contrast-low" }),
                        (0, r.jsx)(k.Z, {
                          value: u,
                          min: 1,
                          max: 2,
                          step: 0.05,
                          onChange: function (e) {
                            return p(e);
                          },
                        }),
                        (0, r.jsx)(F.Z, { className: "mx-3 h-6 w-6 text-contrast-low" }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var E = n(80129),
        T = n.n(E);
      function I(e) {
        var t = e.accept,
          n = void 0 === t ? ["image/jpeg", "video/*"] : t,
          a = e.onSuccessfulUpload,
          l = e.uploadStateChanged,
          o = e.crop,
          c = void 0 !== o && o,
          d = e.cropAspectRatio,
          u = e.cropBorder,
          p = e.render,
          f = e.renderProgress,
          v = e.saving,
          x = (0, i.useState)(null),
          m = x[0],
          h = x[1],
          j = (0, i.useState)(!1),
          b = j[0],
          w = j[1],
          y = (0, i.useState)(""),
          k = y[0],
          S = y[1],
          C = (0, i.useState)(null),
          Z = C[0],
          F = C[1],
          D = (0, N.R)(),
          z = (0, i.useCallback)(function () {
            h(null);
          }, []),
          _ = (0, i.useCallback)(
            function (e) {
              l && l(e);
            },
            [l]
          );
        return (0, r.jsxs)("div", {
          children: [
            (0, r.jsx)("div", {
              children: (0, r.jsx)(g, {
                maxFiles: 1,
                accept: n,
                setFiles: function (e) {
                  F(null), h(e);
                },
                render: function (e) {
                  var t = e.uploading,
                    n = e.isDragActive;
                  return (0, r.jsx)("div", { className: s()({ "bg-line-0": n }, { "bg-base-1": !n }, "transition-all duration-100 ease-in-out"), children: p({ result: null === m || void 0 === m ? void 0 : m.result, uploading: t, isDragActive: n, transform: Z }) });
                },
              }),
            }),
            (0, r.jsx)("div", {
              children: m
                ? (0, r.jsx)(
                    M,
                    {
                      onUploadStateChanged: _,
                      onSuccessfulUpload: function (e) {
                        a(e), b ? w(!1) : c && (S("".concat(D, "/").concat(e.file.filename, "?auto=compress")), w(!0));
                      },
                      onRemoveFromList: z,
                      file: m,
                      transform: Z,
                      render: f,
                    },
                    m.id
                  )
                : null,
            }),
            c && b
              ? (0, r.jsx)(A, {
                  saving: v,
                  aspectRatio: d || 1,
                  border: u || 0,
                  open: b,
                  url: k,
                  onSave: function (e) {
                    F(e);
                  },
                  onClose: function () {
                    return w(!1);
                  },
                })
              : null,
          ],
        });
      }
      function M(e) {
        var t,
          n,
          a,
          s = e.file,
          o = e.transform,
          c = e.onRemoveFromList,
          d = e.onSuccessfulUpload,
          u = e.onUploadStateChanged,
          p = e.render,
          f = (0, i.useState)(!1),
          v = f[0],
          x = f[1],
          m = (0, l.Z)({ file: s }),
          h = null === (t = m.asset) || void 0 === t ? void 0 : t.url,
          g = null === (n = m.error) || void 0 === n ? void 0 : n.error,
          j = o || {},
          b = j.ar,
          N = j["fp-x"],
          w = j["fp-y"],
          y = j["fp-z"],
          k = j.crop;
        (0, i.useEffect)(
          function () {
            u && u(m.uploading);
          },
          [u, m.uploading]
        ),
          (0, i.useEffect)(
            function () {
              var e;
              (b || N || w || y || k) && m.onSaveMultimedia({ image_transform: T().stringify({ ar: b, fpx: N, fpy: w, fpz: y, crop: k }) }, null === (e = m.asset) || void 0 === e ? void 0 : e.id);
            },
            [b, N, w, y, k]
          );
        var S = (0, i.useCallback)(
            function () {
              c();
            },
            [c]
          ),
          C = (0, i.useCallback)(
            function (e) {
              d(e);
            },
            [d]
          );
        return (
          (0, i.useEffect)(
            function () {
              m.asset && C(m.asset);
            },
            [null === (a = m.asset) || void 0 === a ? void 0 : a.id]
          ),
          (0, i.useEffect)(function () {
            setTimeout(function () {
              x(!0);
            }, 1e3);
          }),
          (0, r.jsx)(r.Fragment, { children: p({ complete: v, file: s, uploadUrl: h, uploadError: g, onRemove: S }) })
        );
      }
      n(17563);
      var R = n(19723),
        U = n(80969),
        L = n(22042),
        P = n(88248),
        B = n(8651),
        O = n(20049),
        W = n(65244),
        X = n(49395);
      function V(e) {
        var t = "w-10 h-10 cursor-pointer";
        return e.includes("image") ? (0, r.jsx)(U.c, { className: t, color: "white" }) : e.includes("audio") ? (0, r.jsx)(L.K, { className: "".concat(t, " stroke-white") }) : e.includes("video") ? (0, r.jsx)(P.v, { className: t, color: "white" }) : (0, r.jsx)(B.l, { className: t, color: "white" });
      }
      function G(e) {
        var t = e.attachment,
          n = null === t || void 0 === t ? void 0 : t.content_type,
          i = (0, X.Cv)().assetUrl;
        return t && n
          ? n.indexOf("application/pdf") > -1
            ? (0, r.jsxs)("div", {
                className: "relative overflow-hidden rounded-lg border border-line-0",
                children: [
                  (0, r.jsx)("div", { className: "overflow-hidden", children: (0, r.jsxs)("div", { className: "relative", style: { height: 222, background: "linear-gradient(134.9deg, #7879F1 -3.13%, #3C38FF 113.33%)" }, children: [(0, r.jsx)("div", { className: "absolute inset-0", children: (0, r.jsx)(q, {}) }), (0, r.jsxs)("div", { className: "absolute inset-0 z-10 flex flex-col items-center justify-center", children: [(0, r.jsx)("div", { className: " rounded-lg border-2 border-white p-5", children: V(n) }), (0, r.jsxs)(h.X6, { variant: "h6", color: "contrast-max-inverse", className: "mt-4 uppercase", children: ["File \u2022 ", n.split("/")[1]] })] })] }) }),
                  (0, r.jsx)("div", { className: "mt-4 grid grid-cols-1 gap-4 pb-4", children: (0, r.jsx)("a", { className: "m-auto block", download: t.filename, href: "".concat(i, "/").concat(t.id), children: (0, r.jsx)(z.zx, { className: "rounded-lg", style: { maxWidth: 300, margin: "0 auto" }, variant: "outlineLight", children: "Download" }) }) }),
                ],
              })
            : n.indexOf("audio/") > -1
            ? (0, r.jsxs)("div", { className: "relative overflow-hidden rounded-lg border border-line-0", children: [(0, r.jsxs)("div", { className: "relative", style: { height: 222, background: "linear-gradient(134.9deg, #626262 -3.13%, #000000 113.33%)" }, children: [(0, r.jsx)("div", { className: "absolute inset-0", children: (0, r.jsx)(q, {}) }), (0, r.jsxs)("div", { className: "absolute inset-0 z-10 flex flex-col items-center justify-center", children: [(0, r.jsx)("div", { className: "border-white p-5", children: V(n) }), (0, r.jsxs)(h.X6, { variant: "h6", color: "contrast-max-inverse", className: "mt-4 uppercase", children: ["Audio \u2022 ", n.split("/")[1]] })] })] }), (0, r.jsx)(W.B, { src: { id: t.id, royalId: t.id, filename: t.filename, contentType: t.content_type } })] })
            : "video/mp4" === n
            ? (0, r.jsx)("div", { className: "relative", children: (0, r.jsx)("div", { className: "overflow-hidden", children: (0, r.jsx)("div", { className: "overflow-hidden rounded-lg", children: (0, r.jsx)(O.n, { src: { id: t.id, royalId: t.id, filename: t.filename, contentType: t.content_type } }, t.id) }) }) })
            : n.indexOf("image/") > -1
            ? (0, r.jsx)("div", { className: "overflow-hidden", children: (0, r.jsx)("div", { className: "overflow-hidden rounded-lg", children: (0, r.jsx)(N.E, { alt: "Uploaded Image", src: t, sizes: "(min-width: 800px) 40vw, 100vw" }, t.id) }) })
            : null
          : null;
      }
      function q() {
        return (0, r.jsxs)("svg", { style: { opacity: 0.2, width: "100%", height: "100%" }, children: [(0, r.jsx)("filter", { id: "noiseFilter", children: (0, r.jsx)("feTurbulence", { type: "fractalNoise", baseFrequency: "0.65", numOctaves: "3", stitchTiles: "stitch" }) }), (0, r.jsx)("rect", { width: "100%", height: "100%", filter: "url(#noiseFilter)" })] });
      }
      function H(e) {
        var t = e.accept,
          n = void 0 === t ? ["image/*", "audio/*", "video/mp4", "application/pdf"] : t,
          a = e.handleSuccessfulUpload,
          l = e.type,
          o = e.uploadStateChanged,
          c = e.uploadedFile,
          d = (0, i.useState)(null),
          u = d[0],
          p = d[1],
          f = (0, i.useState)(null),
          v = f[0],
          x = f[1],
          m = (0, i.useCallback)(function () {
            p(null), a(null, null);
          }, []),
          j = (0, i.useCallback)(
            function (e) {
              !e && v && "finalizing" !== v
                ? (x("finalizing"),
                  setTimeout(function () {
                    x(null);
                  }, 2e3))
                : "finalizing" !== v && x(e),
                o && o(e);
            },
            [o, v]
          );
        return (0, r.jsxs)("div", {
          children: [
            (0, r.jsx)("div", {
              children: (0, r.jsx)(g, {
                maxFiles: 1,
                accept: n,
                setFiles: p,
                render: function (e) {
                  var t = e.uploading,
                    n = e.isDragActive,
                    i = t || v;
                  return (null === c || void 0 === c ? void 0 : c.file) && !v
                    ? (0, r.jsx)(J, { onRemove: m, uploadedFile: c })
                    : (0, r.jsxs)("div", {
                        className: s()("relative flex cursor-pointer items-center border border-dashed bg-white p-6 transition-all duration-100 ease-in-out"),
                        children: [
                          (0, r.jsx)("div", { style: { background: "rgba(244, 244, 254, 0.4)" }, className: s()("pointer-events-none absolute inset-0 ", { "opacity-0": !i }) }),
                          (0, r.jsx)("div", {
                            className: "mx-auto w-full pl-4 pr-4",
                            children: i
                              ? (0, r.jsxs)("div", {
                                  children: [
                                    (0, r.jsx)(h.X6, { className: "mt-6 mb-4 text-center uppercase", variant: "h6", children: "Uploading" }),
                                    (0, r.jsx)(_.k, {
                                      color: "bg-interactive-1",
                                      estimatedTime: 30,
                                      value: "finalizing" === v ? 99 : 0,
                                      children: function (e) {
                                        return (0, r.jsxs)(h.X6, { className: "mt-6 text-center uppercase", variant: "h6", children: [e > 100 ? 100 : e, "%"] });
                                      },
                                    }),
                                  ],
                                })
                              : (0, r.jsxs)("div", {
                                  children: [(0, r.jsx)("img", { src: "https://royal-io.imgix.net/6db3115e-bbdc-42dc-809b-6e7d43351794.png?auto=format", height: "72px", className: "mx-auto block", style: { height: "54px", width: "auto" } }), (0, r.jsx)(h.X6, { className: "mt-6 text-center uppercase", variant: "h6", children: Q(l) }), n ? (0, r.jsx)(h.uT, { className: "mt-1 text-center", variant: "small", children: "Drop the files here ..." }) : (0, r.jsxs)(h.uT, { className: "mt-1 text-center", variant: "small", children: ["Drag your file(s) here or", " ", (0, r.jsx)("span", { className: "cursor-pointer text-interactive-1", children: "browse" })] }), (0, r.jsx)(h.uT, { className: "center pt-6 text-center", color: "contrast-low", variant: "xs", style: { maxWidth: 400 }, children: K(l) })],
                                }),
                          }),
                        ],
                      });
                },
              }),
            }),
            (0, r.jsx)("div", { children: u ? (0, r.jsx)(Y, { onUploadStateChanged: j, handleSuccessfulUpload: a, onRemoveFromList: m, file: u }, u.id) : null }),
          ],
        });
      }
      function J(e) {
        var t = e.uploadedFile,
          n = e.onRemove;
        return (0, r.jsxs)("div", { className: "relative", children: [(0, r.jsx)(G, { attachment: null === t || void 0 === t ? void 0 : t.file }), (0, r.jsx)("div", { className: "absolute right-4 top-4 z-10 cursor-pointer", children: (0, r.jsx)(R.P, { onClick: n, className: "z-10 h-8 w-8 cursor-pointer rounded-full bg-white p-2 shadow hover:bg-contrast-max hover:text-contrast-max-inverse" }) })] });
      }
      function K(e) {
        switch (e) {
          case "image":
            return "PNG, JPG AND GIF files are supported. Max. file size: 5MB";
          case "video":
            return "MP4 and MOV files are supported. Max. file size: 5MB";
          case "audio":
            return "MP3 and WAV files are supported. Max. file size: 5MB";
          default:
            return "Max. file size: 5MB";
        }
      }
      function Q(e) {
        switch (e) {
          case "image":
            return "Add Image";
          case "video":
            return "Add Video";
          case "audio":
            return "Add Audio Or Song";
          default:
            return "Add Attachment";
        }
      }
      function Y(e) {
        var t,
          n,
          a = e.file,
          s = e.handleSuccessfulUpload,
          o = e.onUploadStateChanged,
          c = (0, l.Z)({ file: a }),
          d = (null === (t = c.error) || void 0 === t ? void 0 : t.error) || c.error;
        (0, i.useEffect)(
          function () {
            o && o(c.uploading);
          },
          [o, c.uploading]
        );
        var u = (0, i.useCallback)(
          function (e, t) {
            s(e, t);
          },
          [s]
        );
        return (
          (0, i.useEffect)(
            function () {
              var e;
              (null === (e = c.asset) || void 0 === e ? void 0 : e.id) && u(c.asset.id, c.asset);
            },
            [null === (n = c.asset) || void 0 === n ? void 0 : n.id]
          ),
          d ? (0, r.jsx)(h.uT, { variant: "small", className: "mt-4 text-destructive-1", children: (0, r.jsxs)(r.Fragment, { children: ["Error: ", d] }) }) : null
        );
      }
    },
    33926: function (e) {
      e.exports = { uploadCropper: "cropper_uploadCropper__gCWEt", rcSliderTooltipZoomDownIn: "cropper_rcSliderTooltipZoomDownIn__ut61b", rcSliderTooltipZoomDownOut: "cropper_rcSliderTooltipZoomDownOut__XCLZ_" };
    },
    24654: function () {},
  },
]);
//# sourceMappingURL=2070-56cd78ad9d324beb.js.map
