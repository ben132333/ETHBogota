"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3186],
  {
    96549: function (e, n, t) {
      t.r(n);
      var l = (function () {
        var e = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
          n = { alias: null, args: null, kind: "ScalarField", name: "royalId", storageKey: null },
          t = { alias: null, args: null, kind: "ScalarField", name: "type", storageKey: null },
          l = { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
          r = [e, { alias: null, args: null, kind: "ScalarField", name: "filename", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "imageTransform", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "contentType", storageKey: null }],
          a = { alias: null, args: null, concreteType: "MultimediaAsset", kind: "LinkedField", name: "avatarAsset", plural: !1, selections: r, storageKey: null };
        return {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "rightsTokenCard_rightsToken",
          selections: [
            { args: null, kind: "FragmentSpread", name: "rightsTokenOptionDropdown_rightsToken" },
            e,
            n,
            { alias: null, args: null, kind: "ScalarField", name: "mintNumber", storageKey: null },
            { alias: null, args: null, kind: "ScalarField", name: "animationUrl", storageKey: null },
            {
              alias: null,
              args: null,
              concreteType: "RightsEditionTier",
              kind: "LinkedField",
              name: "tier",
              plural: !1,
              selections: [
                t,
                { alias: null, args: null, kind: "ScalarField", name: "maxSupply", storageKey: null },
                {
                  alias: null,
                  args: null,
                  concreteType: "RightsEdition",
                  kind: "LinkedField",
                  name: "edition",
                  plural: !1,
                  selections: [l, { alias: null, args: null, concreteType: "RightsAsset", kind: "LinkedField", name: "rightsAsset", plural: !1, selections: [l, t, { alias: null, args: null, kind: "ScalarField", name: "typeLabel", storageKey: null }, { alias: null, args: null, concreteType: "RightsAsset", kind: "LinkedField", name: "childAssets", plural: !0, selections: [n], storageKey: null }], storageKey: null }, { alias: null, args: null, concreteType: "RightsEditionContributor", kind: "LinkedField", name: "contributors", plural: !0, selections: [{ alias: null, args: null, concreteType: "Profile", kind: "LinkedField", name: "profile", plural: !1, selections: [a, { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }], storageKey: null }], storageKey: null }],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            { alias: null, args: null, concreteType: "MultimediaAsset", kind: "LinkedField", name: "artworkAsset", plural: !1, selections: r, storageKey: null },
            {
              alias: null,
              args: null,
              concreteType: "CryptoWallet",
              kind: "LinkedField",
              name: "wallet",
              plural: !1,
              selections: [
                { alias: null, args: null, kind: "ScalarField", name: "address", storageKey: null },
                { alias: null, args: null, concreteType: "User", kind: "LinkedField", name: "user", plural: !1, selections: [{ alias: null, args: null, concreteType: "Profile", kind: "LinkedField", name: "profiles", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "slug", storageKey: null }, a], storageKey: null }], storageKey: null },
              ],
              storageKey: null,
            },
          ],
          type: "RightsToken",
          abstractKey: null,
        };
      })();
      (l.hash = "645a25afc42e145e08939e417bbe3ec8"), (n.default = l);
    },
    63609: function (e, n, t) {
      t.r(n);
      var l = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "rightsTokenOptionDropdown_rightsToken",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "RightsEditionTier",
            kind: "LinkedField",
            name: "tier",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "RightsEdition",
                kind: "LinkedField",
                name: "edition",
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: "ScalarField", name: "permalink", storageKey: null },
                  { alias: null, args: null, concreteType: "RightsEditionContributor", kind: "LinkedField", name: "contributors", plural: !0, selections: [{ alias: null, args: null, concreteType: "Profile", kind: "LinkedField", name: "profile", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "slug", storageKey: null }], storageKey: null }], storageKey: null },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "CryptoWallet",
            kind: "LinkedField",
            name: "wallet",
            plural: !1,
            selections: [
              { alias: null, args: null, kind: "ScalarField", name: "address", storageKey: null },
              { alias: null, args: null, kind: "ScalarField", name: "source", storageKey: null },
            ],
            storageKey: null,
          },
        ],
        type: "RightsToken",
        abstractKey: null,
        hash: "120a687effbc01aa99a449ec27e0aa2d",
      };
      n.default = l;
    },
    3186: function (e, n, t) {
      t.d(n, {
        j: function () {
          return g;
        },
        Z: function () {
          return m;
        },
      });
      var l = t(47568),
        r = t(26042),
        a = t(99534),
        o = t(34051),
        s = t.n(o),
        i = t(85893),
        u = t(67294),
        c = t(22578),
        d = t(27233),
        p = t(44237),
        f = t(51933),
        v = t(6990);
      function g(e) {
        var n = (0, c.useFragment)(y, e.rightsToken),
          t = v.Z.token(n.royalId),
          l = n.tier.edition,
          r = l.rightsAsset,
          a = null === r || void 0 === r ? void 0 : r.title,
          o = l.contributors
            .map(function (e) {
              return e.profile.name;
            })
            .join(", "),
          s = "";
        return (
          n.animationUrl && (s = n.animationUrl),
          (0, i.jsxs)("div", {
            className: "cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg transition duration-300 ease-in-out hover:drop-shadow-xl",
            children: [
              (0, i.jsx)(f.rU, { href: t, children: (0, i.jsx)("div", { className: "p-4", children: (0, i.jsx)(m, { videoUrl: s, artworkAsset: n.artworkAsset }) }) }),
              (0, i.jsxs)("div", { className: "flex items-stretch justify-between pl-4", children: [(0, i.jsx)(f.rU, { href: t, children: (0, i.jsx)("div", { className: "flex items-center gap-4", children: (0, i.jsxs)("div", { className: "grid", children: [(0, i.jsx)(f.uT, { as: "h4", weight: "semibold", variant: "large", children: a }), (0, i.jsx)(f.uT, { as: "h4", variant: "large", className: "overflow-hidden text-ellipsis whitespace-nowrap", children: o })] }) }) }), (0, i.jsx)("div", { children: e.handleTransferToken && (0, i.jsx)(p.L, { className: "bottom-[40px] origin-bottom-right", triggerDirection: "vertical", rightsTokenReference: n, handleTransferToken: e.handleTransferToken }) })] }),
              (0, i.jsxs)("div", { className: "flex justify-between px-4 pb-4 pt-1", children: [(0, i.jsx)(f.uT, { variant: "large", className: "capitalize", color: "contrast-low", children: n.tier.type.toLowerCase() }), (0, i.jsxs)(f.jb, { variant: "large", color: "contrast-low", children: [n.mintNumber, "/", n.tier.maxSupply] })] }),
            ],
          })
        );
      }
      function m(e) {
        var n = e.artworkAsset,
          t = e.videoUrl,
          l = e.size,
          o = e.posterUrl,
          s = e.imageClassName,
          u = (0, a.Z)(e, ["artworkAsset", "videoUrl", "size", "posterUrl", "imageClassName"]);
        return (0, i.jsxs)("div", { className: "relative w-full", children: [(0, i.jsx)(d.E, (0, r.Z)({ src: n, className: s || "w-full", width: l || 450, height: l || 450, imgixParams: { ar: "1:1", fit: "crop" } }, u)), t ? (0, i.jsx)("div", { className: "absolute inset-0", children: (0, i.jsx)(h, { videoUrl: t, posterUrl: o }) }) : null] });
      }
      function h(e) {
        var n = e.videoUrl,
          t = e.posterUrl,
          r = (0, u.useState)(!1),
          a = r[0],
          o = r[1],
          c = (0, u.useState)(!1),
          d = c[0],
          p = c[1],
          f = (0, u.useState)(!1),
          v = f[0],
          g = f[1],
          m = (0, u.useRef)(),
          h = (0, u.useCallback)(
            (0, l.Z)(
              s().mark(function e() {
                var n;
                return s().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        o(!1), null === (n = m.current) || void 0 === n || n.pause();
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            []
          ),
          y = (0, u.useCallback)(
            (0, l.Z)(
              s().mark(function e() {
                var n;
                return s().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return g(!0), (e.next = 4), null === (n = m.current) || void 0 === n ? void 0 : n.play();
                      case 4:
                        o(!0);
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            []
          ),
          k = (0, u.useCallback)(
            (function () {
              var e = (0, l.Z)(
                s().mark(function e(n) {
                  return s().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((n.preventDefault(), n.stopPropagation(), !a)) {
                              e.next = 6;
                              break;
                            }
                            h(), (e.next = 14);
                            break;
                          case 6:
                            return (e.prev = 6), (e.next = 9), y();
                          case 9:
                            e.next = 14;
                            break;
                          case 11:
                            return (e.prev = 11), (e.t0 = e.catch(6)), e.abrupt("return", null);
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[6, 11]]
                  );
                })
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })(),
            [a, y, h]
          ),
          b = (0, u.useCallback)(
            (0, l.Z)(
              s().mark(function e() {
                return s().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        p(!0);
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            []
          ),
          x = (0, u.useCallback)(
            (0, l.Z)(
              s().mark(function e() {
                return s().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        p(!1);
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            []
          ),
          P = (0, u.useCallback)(
            (0, l.Z)(
              s().mark(function e() {
                return s().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        p(!1), g(!1), o(!1);
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            []
          );
        return (0, i.jsxs)(i.Fragment, {
          children: [
            v ? (0, i.jsx)("video", { ref: m, autoPlay: !0, controlsList: "nodownload", loop: !0, playsInline: !0, poster: t, preload: "none", onError: P, onLoadStart: b, onLoadedData: x, style: { opacity: a ? 1 : 0, width: "100%", objectFit: "contain" }, children: (0, i.jsx)("source", { src: n, type: "video/mp4" }) }) : null,
            d ? (0, i.jsx)("div", { className: "absolute inset-0 flex items-center justify-center", children: (0, i.jsx)("div", { className: "app-loader" }) }) : null,
            (0, i.jsx)("div", { onClick: k, className: "media-player absolute bottom-2 right-2 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-white opacity-90", children: (0, i.jsx)("button", { className: "play-button text-contrast-max ".concat(a ? "pause" : "play"), children: (0, i.jsx)("span", { className: "play-button-text cursor-pointer", children: a ? "Pause" : "Play" }) }) }),
          ],
        });
      }
      var y = t(96549);
    },
    44237: function (e, n, t) {
      t.d(n, {
        L: function () {
          return Q;
        },
      });
      var l,
        r,
        a = t(85893),
        o = t(67294),
        s = t(6990),
        i = t(22578),
        u = t(94184),
        c = t.n(u),
        d = t(32984),
        p = t(12351),
        f = t(23784),
        v = t(19946),
        g = t(61363),
        m = t(64103),
        h = t(84575),
        y = t(16567),
        k = t(14157),
        b = t(90292),
        x = t(15466),
        P = t(51074),
        S = t(14007),
        T = t(46045),
        w = t(73781),
        F = t(45662),
        j = (((r = j || {})[(r.Open = 0)] = "Open"), (r[(r.Closed = 1)] = "Closed"), r),
        E = (((l = E || {})[(l.TogglePopover = 0)] = "TogglePopover"), (l[(l.ClosePopover = 1)] = "ClosePopover"), (l[(l.SetButton = 2)] = "SetButton"), (l[(l.SetButtonId = 3)] = "SetButtonId"), (l[(l.SetPanel = 4)] = "SetPanel"), (l[(l.SetPanelId = 5)] = "SetPanelId"), l);
      let N = { 0: (e) => ({ ...e, popoverState: (0, d.E)(e.popoverState, { 0: 1, 1: 0 }) }), 1: (e) => (1 === e.popoverState ? e : { ...e, popoverState: 1 }), 2: (e, n) => (e.button === n.button ? e : { ...e, button: n.button }), 3: (e, n) => (e.buttonId === n.buttonId ? e : { ...e, buttonId: n.buttonId }), 4: (e, n) => (e.panel === n.panel ? e : { ...e, panel: n.panel }), 5: (e, n) => (e.panelId === n.panelId ? e : { ...e, panelId: n.panelId }) },
        I = (0, o.createContext)(null);
      function K(e) {
        let n = (0, o.useContext)(I);
        if (null === n) {
          let n = new Error(`<${e} /> is missing a parent <Popover /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(n, K), n);
        }
        return n;
      }
      I.displayName = "PopoverContext";
      let C = (0, o.createContext)(null);
      function L(e) {
        let n = (0, o.useContext)(C);
        if (null === n) {
          let n = new Error(`<${e} /> is missing a parent <Popover /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(n, L), n);
        }
        return n;
      }
      C.displayName = "PopoverAPIContext";
      let R = (0, o.createContext)(null);
      function A() {
        return (0, o.useContext)(R);
      }
      R.displayName = "PopoverGroupContext";
      let O = (0, o.createContext)(null);
      function M(e, n) {
        return (0, d.E)(n.type, N, e, n);
      }
      O.displayName = "PopoverPanelContext";
      let D = (0, p.yV)(function (e, n) {
          var t;
          let l = `headlessui-popover-button-${(0, v.M)()}`,
            r = `headlessui-popover-panel-${(0, v.M)()}`,
            a = (0, o.useRef)(null),
            s = (0, f.T)(
              n,
              (0, f.h)((e) => {
                a.current = e;
              })
            ),
            i = (0, o.useReducer)(M, { popoverState: 1, button: null, buttonId: l, panel: null, panelId: r, beforePanelSentinel: (0, o.createRef)(), afterPanelSentinel: (0, o.createRef)() }),
            [{ popoverState: u, button: c, panel: g, beforePanelSentinel: m, afterPanelSentinel: k }, x] = i,
            T = (0, P.i)(null != (t = a.current) ? t : c);
          (0, o.useEffect)(() => x({ type: 3, buttonId: l }), [l, x]), (0, o.useEffect)(() => x({ type: 5, panelId: r }), [r, x]);
          let F = (0, o.useMemo)(() => {
              if (!c || !g) return !1;
              for (let e of document.querySelectorAll("body > *")) if (Number(null == e ? void 0 : e.contains(c)) ^ Number(null == e ? void 0 : e.contains(g))) return !0;
              return !1;
            }, [c, g]),
            j = (0, o.useMemo)(() => ({ buttonId: l, panelId: r, close: () => x({ type: 1 }) }), [l, r, x]),
            E = A(),
            N = null == E ? void 0 : E.registerPopover,
            K = (0, w.z)(() => {
              var e;
              return null != (e = null == E ? void 0 : E.isFocusWithinPopoverGroup()) ? e : (null == T ? void 0 : T.activeElement) && ((null == c ? void 0 : c.contains(T.activeElement)) || (null == g ? void 0 : g.contains(T.activeElement)));
            });
          (0, o.useEffect)(() => (null == N ? void 0 : N(j)), [N, j]),
            (0, S.O)(
              null == T ? void 0 : T.defaultView,
              "focus",
              (e) => {
                var n, t, l, r;
                0 === u && (K() || !c || !g || (null != (t = null == (n = m.current) ? void 0 : n.contains) && t.call(n, e.target)) || (null != (r = null == (l = k.current) ? void 0 : l.contains) && r.call(l, e.target)) || x({ type: 1 }));
              },
              !0
            ),
            (0, b.O)(
              [c, g],
              (e, n) => {
                x({ type: 1 }), (0, h.sP)(n, h.tJ.Loose) || (e.preventDefault(), null == c || c.focus());
              },
              0 === u
            );
          let L = (0, w.z)((e) => {
              x({ type: 1 });
              let n = e ? (e instanceof HTMLElement ? e : e.current instanceof HTMLElement ? e.current : c) : c;
              null == n || n.focus();
            }),
            R = (0, o.useMemo)(() => ({ close: L, isPortalled: F }), [L, F]),
            O = (0, o.useMemo)(() => ({ open: 0 === u, close: L }), [u, L]),
            D = e,
            z = { ref: s };
          return o.createElement(I.Provider, { value: i }, o.createElement(C.Provider, { value: R }, o.createElement(y.up, { value: (0, d.E)(u, { 0: y.ZM.Open, 1: y.ZM.Closed }) }, (0, p.sY)({ ourProps: z, theirProps: D, slot: O, defaultTag: "div", name: "Popover" }))));
        }),
        z = (0, p.yV)(function (e, n) {
          let [t, l] = K("Popover.Button"),
            { isPortalled: r } = L("Popover.Button"),
            a = (0, o.useRef)(null),
            s = `headlessui-focus-sentinel-${(0, v.M)()}`,
            i = A(),
            u = null == i ? void 0 : i.closeOthers,
            c = (0, o.useContext)(O),
            y = null !== c && c === t.panelId,
            b = (0, f.T)(a, n, y ? null : (e) => l({ type: 2, button: e })),
            x = (0, f.T)(a, n),
            S = (0, P.i)(a),
            j = (0, w.z)((e) => {
              var n, r, o;
              if (y) {
                if (1 === t.popoverState) return;
                switch (e.key) {
                  case g.R.Space:
                  case g.R.Enter:
                    e.preventDefault(), null == (r = (n = e.target).click) || r.call(n), l({ type: 1 }), null == (o = t.button) || o.focus();
                }
              } else
                switch (e.key) {
                  case g.R.Space:
                  case g.R.Enter:
                    e.preventDefault(), e.stopPropagation(), 1 === t.popoverState && (null == u || u(t.buttonId)), l({ type: 0 });
                    break;
                  case g.R.Escape:
                    if (0 !== t.popoverState) return null == u ? void 0 : u(t.buttonId);
                    if (!a.current || ((null == S ? void 0 : S.activeElement) && !a.current.contains(S.activeElement))) return;
                    e.preventDefault(), e.stopPropagation(), l({ type: 1 });
                }
            }),
            E = (0, w.z)((e) => {
              y || (e.key === g.R.Space && e.preventDefault());
            }),
            N = (0, w.z)((n) => {
              var r, a;
              (0, m.P)(n.currentTarget) || e.disabled || (y ? (l({ type: 1 }), null == (r = t.button) || r.focus()) : (n.preventDefault(), n.stopPropagation(), 1 === t.popoverState && (null == u || u(t.buttonId)), l({ type: 0 }), null == (a = t.button) || a.focus()));
            }),
            I = (0, w.z)((e) => {
              e.preventDefault(), e.stopPropagation();
            }),
            C = 0 === t.popoverState,
            R = (0, o.useMemo)(() => ({ open: C }), [C]),
            M = (0, k.f)(e, a),
            D = e,
            z = y ? { ref: x, type: M, onKeyDown: j, onClick: N } : { ref: b, id: t.buttonId, type: M, "aria-expanded": e.disabled ? void 0 : 0 === t.popoverState, "aria-controls": t.panel ? t.panelId : void 0, onKeyDown: j, onKeyUp: E, onClick: N, onMouseDown: I },
            U = (0, F.l)(),
            B = (0, w.z)(() => {
              let e = t.panel;
              e && (0, d.E)(U.current, { [F.N.Forwards]: () => (0, h.jA)(e, h.TO.First), [F.N.Backwards]: () => (0, h.jA)(e, h.TO.Last) });
            });
          return o.createElement(o.Fragment, null, (0, p.sY)({ ourProps: z, theirProps: D, slot: R, defaultTag: "button", name: "Popover.Button" }), C && !y && r && o.createElement(T._, { id: s, features: T.A.Focusable, as: "button", type: "button", onFocus: B }));
        }),
        U = p.AN.RenderStrategy | p.AN.Static,
        B = (0, p.yV)(function (e, n) {
          let [{ popoverState: t }, l] = K("Popover.Overlay"),
            r = (0, f.T)(n),
            a = `headlessui-popover-overlay-${(0, v.M)()}`,
            s = (0, y.oJ)(),
            i = null !== s ? s === y.ZM.Open : 0 === t,
            u = (0, w.z)((e) => {
              if ((0, m.P)(e.currentTarget)) return e.preventDefault();
              l({ type: 1 });
            }),
            c = (0, o.useMemo)(() => ({ open: 0 === t }), [t]);
          return (0, p.sY)({ ourProps: { ref: r, id: a, "aria-hidden": !0, onClick: u }, theirProps: e, slot: c, defaultTag: "div", features: U, visible: i, name: "Popover.Overlay" });
        }),
        Z = p.AN.RenderStrategy | p.AN.Static,
        W = (0, p.yV)(function (e, n) {
          let { focus: t = !1, ...l } = e,
            [r, a] = K("Popover.Panel"),
            { close: s, isPortalled: i } = L("Popover.Panel"),
            u = `headlessui-focus-sentinel-before-${(0, v.M)()}`,
            c = `headlessui-focus-sentinel-after-${(0, v.M)()}`,
            m = (0, o.useRef)(null),
            k = (0, f.T)(m, n, (e) => {
              a({ type: 4, panel: e });
            }),
            b = (0, P.i)(m),
            x = (0, y.oJ)(),
            S = null !== x ? x === y.ZM.Open : 0 === r.popoverState,
            j = (0, w.z)((e) => {
              var n;
              if (e.key === g.R.Escape) {
                if (0 !== r.popoverState || !m.current || ((null == b ? void 0 : b.activeElement) && !m.current.contains(b.activeElement))) return;
                e.preventDefault(), e.stopPropagation(), a({ type: 1 }), null == (n = r.button) || n.focus();
              }
            });
          (0, o.useEffect)(() => {
            var n;
            e.static || (1 === r.popoverState && (null == (n = e.unmount) || n) && a({ type: 4, panel: null }));
          }, [r.popoverState, e.unmount, e.static, a]),
            (0, o.useEffect)(() => {
              if (!t || 0 !== r.popoverState || !m.current) return;
              let e = null == b ? void 0 : b.activeElement;
              m.current.contains(e) || (0, h.jA)(m.current, h.TO.First);
            }, [t, m, r.popoverState]);
          let E = (0, o.useMemo)(() => ({ open: 0 === r.popoverState, close: s }), [r, s]),
            N = {
              ref: k,
              id: r.panelId,
              onKeyDown: j,
              onBlur:
                t && 0 === r.popoverState
                  ? (e) => {
                      var n, t, l, o, s;
                      let i = e.relatedTarget;
                      !i || !m.current || (null != (n = m.current) && n.contains(i)) || (a({ type: 1 }), ((null == (l = null == (t = r.beforePanelSentinel.current) ? void 0 : t.contains) ? void 0 : l.call(t, i)) || (null == (s = null == (o = r.afterPanelSentinel.current) ? void 0 : o.contains) ? void 0 : s.call(o, i))) && i.focus({ preventScroll: !0 }));
                    }
                  : void 0,
              tabIndex: -1,
            },
            I = (0, F.l)(),
            C = (0, w.z)(() => {
              let e = m.current;
              e &&
                (0, d.E)(I.current, {
                  [F.N.Forwards]: () => {
                    (0, h.jA)(e, h.TO.First);
                  },
                  [F.N.Backwards]: () => {
                    var e;
                    null == (e = r.button) || e.focus({ preventScroll: !0 });
                  },
                });
            }),
            R = (0, w.z)(() => {
              let e = m.current;
              e &&
                (0, d.E)(I.current, {
                  [F.N.Forwards]: () => {
                    var e, n, t;
                    if (!r.button) return;
                    let l = (0, h.GO)(),
                      a = l.indexOf(r.button),
                      o = l.slice(0, a + 1),
                      s = [...l.slice(a + 1), ...o];
                    for (let i of s.slice())
                      if ((null == (n = null == (e = null == i ? void 0 : i.id) ? void 0 : e.startsWith) ? void 0 : n.call(e, "headlessui-focus-sentinel-")) || (null == (t = r.panel) ? void 0 : t.contains(i))) {
                        let e = s.indexOf(i);
                        -1 !== e && s.splice(e, 1);
                      }
                    (0, h.jA)(s, h.TO.First, !1);
                  },
                  [F.N.Backwards]: () => (0, h.jA)(e, h.TO.Last),
                });
            });
          return o.createElement(O.Provider, { value: r.panelId }, S && i && o.createElement(T._, { id: u, ref: r.beforePanelSentinel, features: T.A.Focusable, as: "button", type: "button", onFocus: C }), (0, p.sY)({ ourProps: N, theirProps: l, slot: E, defaultTag: "div", features: Z, visible: S, name: "Popover.Panel" }), S && i && o.createElement(T._, { id: c, ref: r.afterPanelSentinel, features: T.A.Focusable, as: "button", type: "button", onFocus: R }));
        }),
        _ = (0, p.yV)(function (e, n) {
          let t = (0, o.useRef)(null),
            l = (0, f.T)(t, n),
            [r, a] = (0, o.useState)([]),
            s = (0, w.z)((e) => {
              a((n) => {
                let t = n.indexOf(e);
                if (-1 !== t) {
                  let e = n.slice();
                  return e.splice(t, 1), e;
                }
                return n;
              });
            }),
            i = (0, w.z)((e) => (a((n) => [...n, e]), () => s(e))),
            u = (0, w.z)(() => {
              var e;
              let n = (0, x.r)(t);
              if (!n) return !1;
              let l = n.activeElement;
              return (
                !(null == (e = t.current) || !e.contains(l)) ||
                r.some((e) => {
                  var t, r;
                  return (null == (t = n.getElementById(e.buttonId)) ? void 0 : t.contains(l)) || (null == (r = n.getElementById(e.panelId)) ? void 0 : r.contains(l));
                })
              );
            }),
            c = (0, w.z)((e) => {
              for (let n of r) n.buttonId !== e && n.close();
            }),
            d = (0, o.useMemo)(() => ({ registerPopover: i, unregisterPopover: s, isFocusWithinPopoverGroup: u, closeOthers: c }), [i, s, u, c]),
            v = (0, o.useMemo)(() => ({}), []),
            g = e,
            m = { ref: l };
          return o.createElement(R.Provider, { value: d }, (0, p.sY)({ ourProps: m, theirProps: g, slot: v, defaultTag: "div", name: "Popover.Group" }));
        }),
        V = Object.assign(D, { Button: z, Overlay: B, Panel: W, Group: _ });
      var $ = t(11355),
        G = t(32811),
        Y = t(30134),
        H = t(51933),
        J = t(56063),
        q = t(53743);
      function Q(e) {
        var n,
          t = e.handleTransferToken,
          l = e.className,
          r = e.triggerDirection,
          o = e.rightsTokenReference,
          u = e.light,
          c = (0, i.useFragment)(ne, o),
          d = "vertical" === r,
          p = c.tier.edition,
          f = c.wallet,
          v = p.permalink,
          g = null === (n = p.contributors[0].profile) || void 0 === n ? void 0 : n.slug,
          m = s.Z.profile(g || ""),
          h = s.Z.edition(v),
          y = f.source === q.kR.ROYAL;
        return (0, a.jsx)("div", {
          onClick: function (e) {
            e.stopPropagation(), e.preventDefault();
          },
          children: (0, a.jsx)(X, { width: "w-38", className: l || "", trigger: (0, a.jsx)(Y.o, { vertical: !!d, light: u }), children: (0, a.jsx)(ee, { tokenIsInDeMuseWallet: y, wallet: f, editionLink: h, contributorLink: m, handleTransferToken: t }) }),
        });
      }
      function X(e) {
        var n = e.className,
          t = e.children,
          l = e.trigger,
          r = e.width;
        return (0, a.jsx)("div", {
          style: { minHeight: "100%" },
          className: "relative z-10 flex items-stretch",
          children: (0, a.jsx)(V, {
            children: function (e) {
              var o = e.open;
              return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(V.Button, { className: "justify-stretch flex h-[40px] w-[40px] items-stretch px-4", children: l }), (0, a.jsx)($.u, { show: o, children: (0, a.jsx)(V.Panel, { className: c()(r, n, " border-color-line-0 absolute right-4 rounded-lg border bg-base-0 p-4 shadow-lg"), children: t }) })] });
            },
          }),
        });
      }
      function ee(e) {
        var n = e.editionLink,
          t = e.contributorLink,
          l = e.handleTransferToken,
          r = e.wallet,
          o = e.tokenIsInDeMuseWallet,
          s = (0, G.k)().user,
          i =
            null === s || void 0 === s
              ? void 0
              : s.wallets.find(function (e) {
                  return e.address === r.address;
                });
        return (0, a.jsxs)("div", {
          style: { width: "180px" },
          children: [
            i &&
              (0, a.jsx)(J.zx, {
                onClick: function () {
                  return l();
                },
                variant: "link",
                disabled: !o,
                style: { opacity: o ? 1 : 0.5, borderBottomWidth: "1px", paddingLeft: 0, paddingRight: 0, textAlign: "left", fontWeight: 300 },
                className: "border-color-line-0 block w-full px-0 pb-3 pt-0 text-left uppercase",
                children: "Transfer",
              }),
            (0, a.jsx)(H.rU, { href: t, variant: "nav", style: { borderBottomWidth: "1px" }, className: c()("border-color-line-0 block", { "py-3": i, "pb-3": !i }), children: "Visit Artist Page" }),
            (0, a.jsx)(H.rU, { href: n, variant: "nav", className: "block pb-0 pt-3", children: "Visit Edition Page" }),
          ],
        });
      }
      var ne = t(63609);
    },
  },
]);
//# sourceMappingURL=3186-0f3a9674ea4a1403.js.map
