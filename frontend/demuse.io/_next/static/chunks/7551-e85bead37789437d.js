"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7551],
  {
    32580: function (e, a, l) {
      l.r(a);
      var r = (function () {
        var e = { alias: null, args: null, kind: "ScalarField", name: "chainId", storageKey: null };
        return {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "cryptoTokenTransferModal_token",
          selections: [
            { alias: null, args: null, kind: "ScalarField", name: "royalId", storageKey: null },
            { alias: null, args: null, kind: "ScalarField", name: "mintNumber", storageKey: null },
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
                    { alias: null, args: null, concreteType: "RightsAsset", kind: "LinkedField", name: "rightsAsset", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }], storageKey: null },
                    { alias: null, args: null, concreteType: "RightsEditionContributor", kind: "LinkedField", name: "contributors", plural: !0, selections: [{ alias: null, args: null, concreteType: "Profile", kind: "LinkedField", name: "profile", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }], storageKey: null }], storageKey: null },
                  ],
                  storageKey: null,
                },
                { alias: null, args: null, concreteType: "CryptoContract", kind: "LinkedField", name: "chainContract", plural: !1, selections: [e], storageKey: null },
              ],
              storageKey: null,
            },
            { alias: null, args: null, concreteType: "CryptoWallet", kind: "LinkedField", name: "wallet", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "address", storageKey: null }, e, { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "source", storageKey: null }], storageKey: null },
          ],
          type: "RightsToken",
          abstractKey: null,
        };
      })();
      (r.hash = "dc769c264a081395e947d8fe12107c8a"), (a.default = r);
    },
    47551: function (e, a, l) {
      l.d(a, {
        Z: function () {
          return A;
        },
      });
      var r = l(47568),
        n = l(82670),
        t = l(26042),
        s = l(34051),
        i = l.n(s),
        c = l(85893),
        o = l(67294),
        d = l(22578),
        u = l(53743),
        m = l(51933),
        x = l(89584),
        h = l(32811),
        f = l(56063),
        v = l(90020),
        p = l(90994),
        j = l(7569),
        g = l(18264);
      function k(e) {
        var a = e.selectedWallet,
          l = e.wallets,
          r = e.onClickWallet,
          n = a ? (0, j.JK)(a.chainId || "", a.source) : {},
          t = null === n || void 0 === n ? void 0 : n.chainIcon,
          s = null === a || void 0 === a ? void 0 : a.address;
        return (0, c.jsxs)(g.h_, {
          children: [
            (0, c.jsx)(g.$F, { style: { width: "100%" }, children: (0, c.jsxs)("div", { className: "flex w-full cursor-pointer items-center justify-between gap-2 border px-4 py-3", style: { backgroundColor: "#F7F7F7", border: "1px solid #EBEBEB" }, children: [(0, c.jsx)(m.X6, { variant: "label-lg", as: "h4", className: "uppercase", children: s ? (0, c.jsxs)("div", { className: "flex items-center", children: [t ? (0, c.jsx)(t, { className: "mr-2 h-4 w-4" }) : null, (0, c.jsx)(m.uT, { variant: "small", children: (0, v.Z)(s, 10, 10) })] }) : (0, c.jsx)(m.uT, { variant: "small", children: "Select A Wallet" }) }), (0, c.jsx)(p.V, { className: "h-3 w-3" })] }) }),
            (0, c.jsx)(g.AW, {
              children: (0, c.jsx)("div", {
                style: { minWidth: 300 },
                children:
                  null === l || void 0 === l
                    ? void 0
                    : l.map(function (e, a) {
                        var l = (0, j.JK)(e.chainId || "", e.source),
                          n = l.chainName,
                          t = l.chainIcon;
                        return (0, c.jsx)(
                          g.Xi,
                          {
                            onClick: function (a) {
                              a.stopPropagation(), r(e);
                            },
                            children: (0, c.jsxs)("div", { className: "flex items-center", children: [(0, c.jsx)("div", { className: "flex-initial", children: (0, c.jsx)(t, { className: "h-4 w-4 rounded-full bg-white" }) }), (0, c.jsxs)("div", { className: "ml-3 flex flex-initial flex-col", children: [(0, c.jsx)(m.uT, { weight: "semibold", color: "custom", style: { color: "inherit" }, variant: "small", children: n ? "".concat(n) : "Metamask" }), (0, c.jsx)(m.jb, { color: "custom", variant: "small", style: { color: "inherit" }, children: (0, v.F)(e.address) })] })] }),
                          },
                          a
                        );
                      }),
              }),
            }),
          ],
        });
      }
      var y = l(92985);
      function N(e) {
        var a = e.handleClose,
          l = e.handleContinue,
          r = e.handleWalletChange,
          n = e.destinationWalletValue,
          t = e.wallets,
          s = (0, y.z)().track;
        return (
          (0, o.useEffect)(
            function () {
              s({ event: "transferFromModalScreen", data: { screen: "transferFromModalScreen" } });
            },
            [s]
          ),
          (0, c.jsxs)("div", {
            className: "p-4",
            children: [
              (0, c.jsx)("div", {
                className: "flex items-center justify-center",
                children: (0, c.jsxs)("div", {
                  children: [
                    (0, c.jsx)(m.uT, { className: "text-center", variant: "large", color: "contrast-default", children: "Transfer your token to another wallet." }),
                    (0, c.jsx)(m.uT, { className: "px-2 pt-4 text-center", variant: "large", color: "contrast-default", children: "To get started, enter the destination wallet address." }),
                    (0, c.jsx)("div", {
                      className: "mb-2 mt-6",
                      children: (0, c.jsx)(k, {
                        wallets: t,
                        selectedWallet: n,
                        onClickWallet: function (e) {
                          return r(e);
                        },
                      }),
                    }),
                    (0, c.jsx)(m.uT, { className: "text-center", color: "contrast-low", variant: "xs", children: "Be sure you're transfering to the correct wallet address. Transfers cannot be undone." }),
                  ],
                }),
              }),
              (0, c.jsx)(f.zx, { onClick: l, disabled: !n, className: "mt-8 w-full uppercase", size: "large", variant: "primary", children: "Continue" }),
              (0, c.jsx)(f.zx, { onClick: a, className: "mt-4 w-full uppercase", size: "large", variant: "link", children: "Cancel" }),
            ],
          })
        );
      }
      function T(e) {
        var a = e.handleClose,
          l = e.handleContinue,
          r = e.destinationWalletValue,
          n = e.fromWalletValue,
          t = e.submitting;
        return (0, c.jsxs)("div", {
          className: "p-4",
          children: [
            (0, c.jsx)("div", { className: "flex items-center justify-center", children: (0, c.jsxs)("div", { children: [(0, c.jsx)(m.uT, { className: "text-center", variant: "large", color: "contrast-default", children: "To complete your transfer, confirm that this is the correct address." }), (0, c.jsxs)("div", { className: "mt-6", children: [(0, c.jsx)(m.uT, { className: "pb-2", color: "contrast-low", variant: "xs", children: "Transfer From" }), (0, c.jsx)(b, { wallet: n })] }), (0, c.jsxs)("div", { className: "my-4", children: [(0, c.jsx)(m.uT, { className: "pb-2", color: "contrast-low", variant: "xs", children: "Transfer to" }), (0, c.jsx)(b, { wallet: r })] })] }) }),
            (0, c.jsxs)(m.uT, { className: "mt-2 flex items-center justify-center text-center", color: "destructive-1", variant: "xs", children: [(0, c.jsx)("span", { className: "mr-2 flex h-4 w-4 items-center justify-center rounded-full bg-destructive-1 text-white", children: "!" }), "Transfers cannot be undone."] }),
            (0, c.jsx)(f.zx, { disabled: t, onClick: l, className: "mt-8 w-full uppercase", size: "large", variant: "primary", children: t ? "Submitting" : "Submit Transfer" }),
            (0, c.jsx)(f.zx, { disabled: t, onClick: a, className: "mt-2 w-full uppercase", size: "large", variant: "outline", children: "Cancel" }),
          ],
        });
      }
      function b(e) {
        var a = e.wallet,
          l = (0, j.JK)(a.chainId || "", a.source).chainIcon;
        return (0, c.jsx)("div", { className: "flex w-full cursor-pointer items-center justify-between gap-2 border px-4 py-3", style: { backgroundColor: "#F7F7F7", border: "1px solid #EBEBEB" }, children: (0, c.jsx)(m.X6, { variant: "label-lg", as: "div", className: "uppercase", children: (0, c.jsxs)("div", { className: "flex items-center", children: [(0, c.jsx)(l, { className: "mr-2 h-4 w-4" }), (0, c.jsx)(m.uT, { variant: "small", children: (0, v.Z)(a.address, 10, 10) })] }) }) });
      }
      function w(e) {
        var a = e.handleClose,
          l = e.mintNumber,
          r = e.title,
          n = e.contributor,
          t = e.transferRequest,
          s = (0, y.z)().track,
          i = t.status,
          d = t.transactionHash,
          u = t.id;
        return (
          (0, o.useEffect)(
            function () {
              s({ event: "processingTransferModalScreen", data: { screen: "processingTransferModalScreen" } });
            },
            [s]
          ),
          (0, o.useEffect)(
            function () {
              s({ event: "processingTransferModalUpdate", data: { trx: d, id: u, status: i } });
            },
            [s, d, u, i]
          ),
          (0, c.jsxs)("div", {
            children: [
              (0, c.jsx)("div", {
                className: "flex items-center justify-center",
                children: (0, c.jsxs)("div", { children: [(0, c.jsxs)(m.uT, { className: "text-center", variant: "large", color: "contrast-default", children: ["You just transfered", " ", (0, c.jsxs)(m.uT, { as: "span", variant: "large", weight: "bold", children: [r, " by ", n] }), " ", "(Token #", l, ") DeMuse LDA. The transfer will be confirmed in a few minutes."] }), (0, c.jsxs)(m.uT, { className: "pt-6 text-center", variant: "xs", color: "contrast-default", children: ["You'll receive a confirmation email if the transaction is successful. Or, check your transfers status", " ", (0, c.jsx)(m.rU, { variant: "primary", href: "/settings/transfers", children: "page" }), "."] }), (0, c.jsx)("div", { className: "mt-6", children: (0, c.jsx)(C, { transferRequest: t }) })] }),
              }),
              (0, c.jsx)(f.zx, { onClick: a, className: "mt-6 w-full uppercase", size: "large", variant: "link", children: "Close" }),
            ],
          })
        );
      }
      function C(e) {
        var a,
          l,
          r,
          n = e.transferRequest,
          t = n.transactionHash,
          s = "".concat(null === (a = n.toWallet.network) || void 0 === a || null === (l = a.explorers) || void 0 === l || null === (r = l[0]) || void 0 === r ? void 0 : r.url, "/tx/").concat(t),
          i = n.status === u._8.PENDING || n.status === u._8.PROCESSING;
        return (0, c.jsxs)("div", {
          className: "w-full cursor-pointer border px-4 py-3",
          style: { backgroundColor: "#F7F7F7", border: "1px solid #EBEBEB" },
          children: [
            (0, c.jsxs)("div", { className: "flex items-center justify-between", children: [(0, c.jsx)(m.uT, { color: "contrast-low", variant: "large", children: "Status" }), (0, c.jsxs)(m.uT, { as: "div", className: "flex items-center capitalize", variant: "large", children: [i && (0, c.jsx)("div", { className: "app-loader small flex" }), (0, c.jsx)("div", { className: "pl-4", children: n.status.toLowerCase() })] })] }),
            (0, c.jsxs)("div", { className: "flex items-center justify-between pt-2", children: [(0, c.jsx)(m.uT, { color: "contrast-low", variant: "large", children: "Transaction" }), (0, c.jsx)(m.uT, { as: "div", variant: "large", children: s && t ? (0, c.jsx)(m.dL, { className: "capitalize", variant: "primary", target: "blank", href: s, children: (t ? (0, v.Z)(t, 6, 6) : "--").toLowerCase() }) : "--" })] }),
          ],
        });
      }
      var E = l(83842),
        F = l(19723),
        I = l(6990),
        S = l(41539),
        W = l(93221);
      function z(e) {
        var a = e.onClose;
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)(W.x, { title: "Add Wallet", onClose: a }),
            (0, c.jsxs)("div", {
              className: "pt-4",
              children: [
                (0, c.jsx)("div", { className: "flex items-center justify-center", children: (0, c.jsxs)("div", { children: [(0, c.jsx)(m.uT, { className: "text-center", variant: "large", color: "contrast-default", children: "You\u2019ll need a wallet to start a transfer." }), (0, c.jsxs)(m.uT, { className: "mt-4 text-center", variant: "large", color: "contrast-default", children: ["If you don\u2019t have a wallet, our resources explain what they are and how to easily get one.", " ", (0, c.jsx)(m.dL, { variant: "primary", to: I.Z.helpCenterWallet(), children: "Learn more" })] })] }) }),
                (0, c.jsx)(S.X, {
                  pageLocation: "CryptoTokenTransferModal",
                  allowMultipleConnect: !0,
                  render: function (e) {
                    var a = e.initialized,
                      l = e.hasMetaMask,
                      r = e.wallet;
                    return (0, c.jsx)(f.zx, { disabled: a, variant: "primary", size: "large", className: "mb-2 mt-8 w-full", children: (0, c.jsx)("div", { className: "flex items-center justify-center", children: a ? "Connecting..." : r ? "Add Another Wallet" : l ? "Connect Metamask" : "Install Metamask" }) });
                  },
                }),
                (0, c.jsx)(f.zx, { onClick: a, className: "mt-2 w-full uppercase", size: "large", variant: "link", children: "Cancel" }),
              ],
            }),
          ],
        });
      }
      function K(e) {
        var a = e.onClose;
        return (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(W.x, { title: "Transfer Item", onClose: a }), (0, c.jsxs)("div", { className: "p-4", children: [(0, c.jsx)("div", { className: "flex items-center justify-center", children: (0, c.jsx)("div", { children: (0, c.jsx)(m.uT, { className: "text-center", variant: "large", color: "contrast-default", children: "Transfering is only supported from a DeMuse Wallet" }) }) }), (0, c.jsx)(f.zx, { onClick: a, className: "mt-8 w-full uppercase", size: "large", variant: "primary", children: "Cancel" })] })] });
      }
      var L = l(94184),
        R = l.n(L);
      function M(e) {
        var a = e.step;
        return (0, c.jsxs)("div", {
          className: "pt-6",
          children: [
            3 !== a ? (0, c.jsxs)("div", { className: "flex items-center justify-center", children: [(0, c.jsx)(m.uT, { variant: "xs", color: "unset", className: "flex h-[24px] w-[24px] items-center justify-center rounded-full bg-interactive-1 text-white", children: "1" }), (0, c.jsx)("div", { className: "m-2 h-[1px] w-[32px] bg-black" }), (0, c.jsx)(m.uT, { color: "unset", variant: "xs", className: R()("flex h-[24px] w-[24px] items-center justify-center rounded-full", { "bg-interactive-1": 2 === a, "text-white": 2 === a, "bg-base-1": 1 === a, "text-contrast-max": 1 === a }), children: "2" })] }) : null,
            (0, c.jsx)(m.X6, { className: "pt-2 text-center uppercase", variant: "h6", color: "contrast-default", children: "Transfer Item" }),
            (0, c.jsx)("div", { className: "my-6 h-[1px] w-full bg-line-0" }),
          ],
        });
      }
      function A(e) {
        return (0, c.jsx)(x.u, { animateHeight: !0, open: e.open, static: !1, onClose: e.onClose, className: "max-w-sm", header: null, children: e.open ? (0, c.jsx)(_, (0, t.Z)({}, e)) : null });
      }
      function _(e) {
        var a,
          l,
          t,
          s,
          x,
          f = e.token,
          v = e.onClose,
          p = (0, d.useFragment)(Z, f),
          j = (0, y.z)(),
          g = j.trackClick,
          k = j.trackError,
          b = (0, h.k)().user,
          C = (0, E.u)({ tokenId: p.royalId }),
          I = C.setTokenTransfer,
          S = C.currentTokenTransfer,
          W = (0, o.useState)(1),
          L = W[0],
          R = W[1],
          A = (0, o.useState)(),
          _ = A[0],
          B = A[1],
          P = p.wallet,
          D = null === (a = p.tier.chainContract) || void 0 === a ? void 0 : a.chainId,
          O = p.tier.edition,
          V = null === (l = O.contributors[0]) || void 0 === l || null === (t = l.profile) || void 0 === t ? void 0 : t.name,
          q = null === (s = O.rightsAsset) || void 0 === s ? void 0 : s.title,
          X = p.mintNumber,
          Y = p.royalId,
          J = null === _ || void 0 === _ ? void 0 : _.id,
          G = ((null === b || void 0 === b ? void 0 : b.wallets) || []).filter(function (e) {
            return D && e.chainId === D && e.source !== u.kR.ROYAL;
          }),
          H = (0, o.useState)(),
          U = H[0],
          $ = H[1],
          Q = null === U || void 0 === U ? void 0 : U.loading,
          ee = S || U,
          ae = (null === ee || void 0 === ee ? void 0 : ee.status) === u._8.FAILED,
          le = (null === ee || void 0 === ee ? void 0 : ee.showErrorMessage) && ee.error,
          re = null === ee || void 0 === ee ? void 0 : ee.status;
        (0, o.useEffect)(
          function () {
            !ae && re && 3 !== L ? R(3) : ae && 1 !== L && R(1);
          },
          [re, L, ae]
        );
        var ne = (0, o.useCallback)(
          (function () {
            var e = (0, r.Z)(
              i().mark(function e(a) {
                var l, r, t;
                return i().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return g({ event: "handleSubmitTokenTransfer_ATTEMPT", label: "Transfer", data: { toWalletId: J, tokenId: Y } }), a.preventDefault(), $({ loading: !0 }), (e.prev = 3), (e.next = 6), fetch("/api/deprecated/token-transfer/transfer", { method: "POST", body: JSON.stringify({ toWalletId: J, tokenId: Y }) });
                        case 6:
                          if (500 !== (l = e.sent).status) {
                            e.next = 9;
                            break;
                          }
                          throw new Error(l.statusText);
                        case 9:
                          return (e.next = 11), l.json();
                        case 11:
                          if (!(r = e.sent).fieldErrors) {
                            e.next = 16;
                            break;
                          }
                          return $({ fieldErrors: r.fieldErrors }), k({ event: "handleSubmitTokenTransfer_Error", error: "field errors", data: { toWalletId: J, tokenId: Y } }), e.abrupt("return");
                        case 16:
                          (t = r.data.transferToken.request), $(t), (null === t || void 0 === t ? void 0 : t.id) && (g({ event: "handleSubmitTokenTransfer_PENDING", label: "Transfer", data: { toWalletId: J, tokenId: Y } }), R(3), I(t)), (e.next = 24);
                          break;
                        case 21:
                          (e.prev = 21), (e.t0 = e.catch(3)), (0, n.Z)(e.t0, Error) && (k({ event: "handleSubmitTokenTransfer_Error", error: e.t0.message, data: { toWalletId: J, tokenId: Y } }), $({ error: e.t0.message, loading: !1 }));
                        case 24:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[3, 21]]
                );
              })
            );
            return function (a) {
              return e.apply(this, arguments);
            };
          })(),
          [J, Y, I, k, g]
        );
        return (0, c.jsxs)("div", {
          children: [
            G.length
              ? P.source !== u.kR.ROYAL
                ? (0, c.jsx)(K, { onClose: v })
                : (0, c.jsxs)(c.Fragment, {
                    children: [
                      (0, c.jsx)("div", { className: "absolute right-6 top-6", children: (0, c.jsx)(F.P, { onClick: v }) }),
                      (0, c.jsx)(M, { step: L }),
                      1 === L
                        ? (0, c.jsx)(N, {
                            wallets: G,
                            handleClose: v,
                            handleWalletChange: function (e) {
                              B(e), g({ event: "setTransferDesitnationWallet", label: "Dropdown", data: { address: e.address } });
                            },
                            destinationWalletValue: _,
                            handleContinue: function () {
                              R(2);
                            },
                          })
                        : _ && 2 === L
                        ? (0, c.jsx)(T, { fromWalletValue: P, handleClose: v, destinationWalletValue: _, handleContinue: ne, submitting: !!Q })
                        : 3 === L && S && (0, c.jsx)(w, { handleClose: v, title: q || "", transferRequest: S, mintNumber: X, contributor: V || "" }),
                    ],
                  })
              : (0, c.jsx)(z, { onClose: v }),
            (null === U || void 0 === U ? void 0 : U.error) || (null === U || void 0 === U ? void 0 : U.fieldErrors) || le
              ? (0, c.jsxs)(m.uT, {
                  variant: "small",
                  color: "destructive-1",
                  className: "pt-4",
                  children: [
                    "As Error Occured:",
                    " ",
                    le ||
                      (null === U || void 0 === U ? void 0 : U.error) ||
                      (null === U || void 0 === U || null === (x = U.fieldErrors) || void 0 === x
                        ? void 0
                        : x.map(function (e) {
                            return e.message || "";
                          })),
                  ],
                })
              : null,
          ],
        });
      }
      var Z = l(32580);
    },
    19723: function (e, a, l) {
      l.d(a, {
        P: function () {
          return c;
        },
      });
      var r = l(26042),
        n = l(69396),
        t = l(85893),
        s = l(85502),
        i = l(5506),
        c = (0, s.zo)(function (e) {
          return (0, t.jsx)("button", (0, n.Z)((0, r.Z)({}, e), { children: (0, t.jsx)(i.Z, { className: "h-5 w-5 cursor-pointer" }) }));
        }, "ease flex h-5 w-5 cursor-pointer items-center justify-center text-contrast-max transition hover:bg-contrast-max hover:text-contrast-max-inverse");
    },
  },
]);
//# sourceMappingURL=7551-e85bead37789437d.js.map
