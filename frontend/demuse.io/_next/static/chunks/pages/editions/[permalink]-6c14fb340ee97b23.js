(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7925],
  {
    47443: function (A, e, g) {
      var B = g(42118);
      A.exports = function (A, e) {
        return !!(null == A ? 0 : A.length) && B(A, e, 0) > -1;
      };
    },
    1196: function (A) {
      A.exports = function (A, e, g) {
        for (var B = -1, n = null == A ? 0 : A.length; ++B < n; ) if (g(e, A[B])) return !0;
        return !1;
      };
    },
    42118: function (A, e, g) {
      var B = g(41848),
        n = g(62722),
        r = g(42351);
      A.exports = function (A, e, g) {
        return e === e ? r(A, e, g) : B(A, n, g);
      };
    },
    47556: function (A, e, g) {
      var B = g(88668),
        n = g(47443),
        r = g(1196),
        a = g(29932),
        w = g(7518),
        t = g(74757),
        c = Math.min;
      A.exports = function (A, e, g) {
        for (var s = g ? r : n, u = A[0].length, C = A.length, f = C, d = Array(C), z = 1 / 0, o = []; f--; ) {
          var v = A[f];
          f && e && (v = a(v, w(e))), (z = c(v.length, z)), (d[f] = !g && (e || (u >= 120 && v.length >= 120)) ? new B(f && v) : void 0);
        }
        v = A[0];
        var l = -1,
          P = d[0];
        A: for (; ++l < u && o.length < z; ) {
          var F = v[l],
            j = e ? e(F) : F;
          if (((F = g || 0 !== F ? F : 0), !(P ? t(P, j) : s(o, j, g)))) {
            for (f = C; --f; ) {
              var Y = d[f];
              if (!(Y ? t(Y, j) : s(A[f], j, g))) continue A;
            }
            P && P.push(j), o.push(F);
          }
        }
        return o;
      };
    },
    62722: function (A) {
      A.exports = function (A) {
        return A !== A;
      };
    },
    24387: function (A, e, g) {
      var B = g(29246);
      A.exports = function (A) {
        return B(A) ? A : [];
      };
    },
    42351: function (A) {
      A.exports = function (A, e, g) {
        for (var B = g - 1, n = A.length; ++B < n; ) if (A[B] === e) return B;
        return -1;
      };
    },
    25325: function (A, e, g) {
      var B = g(29932),
        n = g(47556),
        r = g(5976),
        a = g(24387),
        w = r(function (A) {
          var e = B(A, a);
          return e.length && e[0] === A[0] ? n(e) : [];
        });
      A.exports = w;
    },
    18029: function (A, e, g) {
      var B = g(35393),
        n = g(11700),
        r = B(function (A, e, g) {
          return A + (g ? " " : "") + n(e);
        });
      A.exports = r;
    },
    4919: function (A, e, g) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/editions/[permalink]",
        function () {
          return g(381);
        },
      ]);
    },
    90994: function (A, e, g) {
      "use strict";
      g.d(e, {
        V: function () {
          return c;
        },
      });
      var B = g(26042),
        n = g(69396),
        r = g(99534),
        a = g(85893),
        w = g(94184),
        t = g.n(w);
      g(67294);
      function c(A) {
        var e = A.className,
          g = (0, r.Z)(A, ["className"]);
        return (0, a.jsx)("svg", (0, n.Z)((0, B.Z)({ width: "12", height: "6", viewBox: "0 0 12 6", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: t()("h-6 w-6", e) }, g), { children: (0, a.jsx)("path", { d: "M6.00781 6L0.0078125 0H11.9775L6.00781 6Z", fill: "black" }) }));
      }
    },
    84697: function (A, e, g) {
      "use strict";
      g.d(e, {
        k: function () {
          return n;
        },
      });
      var B = g(85893),
        n = function (A) {
          var e = A.className || "h-8 w-8";
          return (0, B.jsx)("svg", {
            className: e,
            width: "90",
            height: "90",
            viewBox: "0 0 90 90",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, B.jsx)("path", {
              d: "M45 0C20.151 0 0 20.151 0 45C0 69.849 20.151 90 45 90C69.849 90 90 69.849 90 45C90 20.151 69.858 0 45 0ZM22.203 46.512L22.392 46.206L34.101 27.891C34.272 27.63 34.677 27.657 34.803 27.945C36.756 32.328 38.448 37.782 37.656 41.175C37.323 42.57 36.396 44.46 35.352 46.206C35.217 46.458 35.073 46.71 34.911 46.953C34.839 47.061 34.713 47.124 34.578 47.124H22.545C22.221 47.124 22.032 46.773 22.203 46.512ZM74.376 52.812C74.376 52.983 74.277 53.127 74.133 53.19C73.224 53.577 70.119 55.008 68.832 56.799C65.538 61.38 63.027 67.932 57.402 67.932H33.948C25.632 67.932 18.9 61.173 18.9 52.83V52.56C18.9 52.344 19.08 52.164 19.305 52.164H32.373C32.634 52.164 32.823 52.398 32.805 52.659C32.706 53.505 32.868 54.378 33.273 55.17C34.047 56.745 35.658 57.726 37.395 57.726H43.866V52.677H37.467C37.143 52.677 36.945 52.299 37.134 52.029C37.206 51.921 37.278 51.813 37.368 51.687C37.971 50.823 38.835 49.491 39.699 47.97C40.284 46.944 40.851 45.846 41.31 44.748C41.4 44.55 41.472 44.343 41.553 44.145C41.679 43.794 41.805 43.461 41.895 43.137C41.985 42.858 42.066 42.57 42.138 42.3C42.354 41.364 42.444 40.374 42.444 39.348C42.444 38.943 42.426 38.52 42.39 38.124C42.372 37.683 42.318 37.242 42.264 36.801C42.228 36.414 42.156 36.027 42.084 35.631C41.985 35.046 41.859 34.461 41.715 33.876L41.661 33.651C41.553 33.246 41.454 32.868 41.328 32.463C40.959 31.203 40.545 29.97 40.095 28.818C39.933 28.359 39.753 27.918 39.564 27.486C39.294 26.82 39.015 26.217 38.763 25.65C38.628 25.389 38.52 25.155 38.412 24.912C38.286 24.642 38.16 24.372 38.025 24.111C37.935 23.913 37.827 23.724 37.755 23.544L36.963 22.086C36.855 21.888 37.035 21.645 37.251 21.708L42.201 23.049H42.219C42.228 23.049 42.228 23.049 42.237 23.049L42.885 23.238L43.605 23.436L43.866 23.508V20.574C43.866 19.152 45 18 46.413 18C47.115 18 47.754 18.288 48.204 18.756C48.663 19.224 48.951 19.863 48.951 20.574V24.939L49.482 25.083C49.518 25.101 49.563 25.119 49.599 25.146C49.725 25.236 49.914 25.38 50.148 25.56C50.337 25.704 50.535 25.884 50.769 26.073C51.246 26.46 51.822 26.955 52.443 27.522C52.605 27.666 52.767 27.81 52.92 27.963C53.721 28.71 54.621 29.583 55.485 30.555C55.728 30.834 55.962 31.104 56.205 31.401C56.439 31.698 56.7 31.986 56.916 32.274C57.213 32.661 57.519 33.066 57.798 33.489C57.924 33.687 58.077 33.894 58.194 34.092C58.554 34.623 58.86 35.172 59.157 35.721C59.283 35.973 59.409 36.252 59.517 36.522C59.85 37.26 60.111 38.007 60.273 38.763C60.327 38.925 60.363 39.096 60.381 39.258V39.294C60.435 39.51 60.453 39.744 60.471 39.987C60.543 40.752 60.507 41.526 60.345 42.3C60.273 42.624 60.183 42.93 60.075 43.263C59.958 43.578 59.85 43.902 59.706 44.217C59.427 44.856 59.103 45.504 58.716 46.098C58.59 46.323 58.437 46.557 58.293 46.782C58.131 47.016 57.96 47.241 57.816 47.457C57.609 47.736 57.393 48.024 57.168 48.285C56.97 48.555 56.772 48.825 56.547 49.068C56.241 49.437 55.944 49.779 55.629 50.112C55.449 50.328 55.251 50.553 55.044 50.751C54.846 50.976 54.639 51.174 54.459 51.354C54.144 51.669 53.892 51.903 53.676 52.11L53.163 52.569C53.091 52.641 52.992 52.677 52.893 52.677H48.951V57.726H53.91C55.017 57.726 56.07 57.339 56.925 56.61C57.213 56.358 58.482 55.26 59.985 53.604C60.039 53.541 60.102 53.505 60.174 53.487L73.863 49.527C74.124 49.455 74.376 49.644 74.376 49.914V52.812V52.812Z",
              fill: "white",
            }),
          });
        };
    },
    9515: function (A, e, g) {
      "use strict";
      g.r(e);
      var B = (function () {
        var A = { alias: null, args: null, kind: "ScalarField", name: "type", storageKey: null };
        return {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "editionAsset_tier",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "MultimediaAsset",
              kind: "LinkedField",
              name: "artworkAsset",
              plural: !1,
              selections: [
                { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                { alias: null, args: null, kind: "ScalarField", name: "filename", storageKey: null },
                { alias: null, args: null, kind: "ScalarField", name: "imageTransform", storageKey: null },
                { alias: null, args: null, kind: "ScalarField", name: "contentType", storageKey: null },
              ],
              storageKey: null,
            },
            A,
            { alias: null, args: null, concreteType: "RightsEdition", kind: "LinkedField", name: "edition", plural: !1, selections: [{ alias: null, args: null, concreteType: "RightsAsset", kind: "LinkedField", name: "rightsAsset", plural: !1, selections: [A, { alias: null, args: null, kind: "ScalarField", name: "typeLabel", storageKey: null }], storageKey: null }], storageKey: null },
          ],
          type: "RightsEditionTier",
          abstractKey: null,
        };
      })();
      (B.hash = "588444e5f80b19bef40b516ca36b8fed"), (e.default = B);
    },
    68554: function (A, e, g) {
      "use strict";
      g.r(e);
      var B = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "editionBlog_embed",
        selections: [
          { alias: null, args: null, kind: "ScalarField", name: "artistName", storageKey: null },
          { alias: null, args: null, kind: "ScalarField", name: "imageUrl", storageKey: null },
          { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
          { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null },
        ],
        type: "BlogEmbed",
        abstractKey: null,
        hash: "c41fd412ac663796bd6687c2808444c8",
      };
      e.default = B;
    },
    16761: function (A, e, g) {
      "use strict";
      g.r(e);
      var B = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "editionContributorListItem_contributor",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "Profile",
            kind: "LinkedField",
            name: "profile",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "MultimediaAsset",
                kind: "LinkedField",
                name: "avatarAsset",
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                  { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                  { alias: null, args: null, kind: "ScalarField", name: "filename", storageKey: null },
                  { alias: null, args: null, kind: "ScalarField", name: "imageTransform", storageKey: null },
                  { alias: null, args: null, kind: "ScalarField", name: "contentType", storageKey: null },
                ],
                storageKey: null,
              },
              { alias: null, args: null, kind: "ScalarField", name: "slug", storageKey: null },
              { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
            ],
            storageKey: null,
          },
        ],
        type: "RightsEditionContributor",
        abstractKey: null,
        hash: "35e6e3c8c6222d0c880ce92c9206443f",
      };
      e.default = B;
    },
    39773: function (A, e, g) {
      "use strict";
      g.r(e);
      var B = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "editionContributorList_edition", selections: [{ alias: null, args: null, concreteType: "RightsEditionContributor", kind: "LinkedField", name: "contributors", plural: !0, selections: [{ args: null, kind: "FragmentSpread", name: "editionContributorListItem_contributor" }], storageKey: null }], type: "RightsEdition", abstractKey: null, hash: "6be6c78287b8c5e59f155d4e42cbaaf7" };
      e.default = B;
    },
    92920: function (A, e, g) {
      "use strict";
      g.r(e);
      var B = (function () {
        var A = {
          alias: null,
          args: null,
          concreteType: "MultimediaAsset",
          kind: "LinkedField",
          name: "heroAsset",
          plural: !1,
          selections: [
            { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
            { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
            { alias: null, args: null, kind: "ScalarField", name: "filename", storageKey: null },
            { alias: null, args: null, kind: "ScalarField", name: "imageTransform", storageKey: null },
            { alias: null, args: null, kind: "ScalarField", name: "contentType", storageKey: null },
          ],
          storageKey: null,
        };
        return { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "editionCover_edition", selections: [A, { alias: null, args: null, concreteType: "RightsAsset", kind: "LinkedField", name: "rightsAsset", plural: !1, selections: [A], storageKey: null }, { alias: null, args: null, concreteType: "MultimediaAsset", kind: "LinkedField", name: "heroVideoAsset", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "downloadUrl", storageKey: null }], storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "permalink", storageKey: null }, { args: null, kind: "FragmentSpread", name: "editionContributorList_edition" }], type: "RightsEdition", abstractKey: null };
      })();
      (B.hash = "d1c6445f69e7c5c3bab2c42766786d5b"), (e.default = B);
    },
    63879: function (A, e, g) {
      "use strict";
      g.r(e);
      var B = (function () {
        var A = [
          { alias: null, args: null, kind: "ScalarField", name: "primaryCurrency", storageKey: null },
          { alias: null, args: null, kind: "ScalarField", name: "price", storageKey: null },
        ];
        return {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "editionDetailBreakdownHeader_edition",
          selections: [
            { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
            { alias: null, args: null, concreteType: "RightsEditionContributor", kind: "LinkedField", name: "contributors", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "royaltyRightsPercentage", storageKey: null }], storageKey: null },
            {
              alias: null,
              args: null,
              concreteType: "RightsEditionTier",
              kind: "LinkedField",
              name: "tiers",
              plural: !0,
              selections: [
                { alias: null, args: null, kind: "ScalarField", name: "maxSupply", storageKey: null },
                {
                  alias: null,
                  args: null,
                  concreteType: "PrimeTierSale",
                  kind: "LinkedField",
                  name: "tierSale",
                  plural: !1,
                  selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "availableCount", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null },
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "saleConfig",
                      plural: !1,
                      selections: [
                        { kind: "InlineFragment", selections: A, type: "PrimeTierSaleStrategyDirect", abstractKey: null },
                        { kind: "InlineFragment", selections: A, type: "PrimeTierSaleStrategyFlash", abstractKey: null },
                        { kind: "InlineFragment", selections: A, type: "PrimeTierSaleStrategyGiveaway", abstractKey: null },
                        { kind: "InlineFragment", selections: A, type: "PrimeTierSaleStrategyDrawing", abstractKey: null },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "RightsEdition",
          abstractKey: null,
        };
      })();
      (B.hash = "c531215b8d0e7efe9e703d8a40ffd924"), (e.default = B);
    },
    64920: function (A, e, g) {
      "use strict";
      g.r(e);
      var B = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "editionDetailBreakdown_edition", selections: [{ args: null, kind: "FragmentSpread", name: "editionDetailBreakdownHeader_edition" }], type: "RightsEdition", abstractKey: null, hash: "68fbd6190154d78121fdc5b9af7c59bc" };
      e.default = B;
    },
    13438: function (A, e, g) {
      "use strict";
      g.r(e);
      var B = (function () {
        var A = [{ defaultValue: null, kind: "LocalArgument", name: "permalink" }],
          e = [{ kind: "Variable", name: "permalink", variableName: "permalink" }],
          g = { alias: null, args: null, kind: "ScalarField", name: "filename", storageKey: null },
          B = { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
          n = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
          r = { alias: null, args: null, kind: "ScalarField", name: "permalink", storageKey: null },
          a = { alias: null, args: null, kind: "ScalarField", name: "royalId", storageKey: null },
          w = { alias: null, args: null, kind: "ScalarField", name: "type", storageKey: null },
          t = { alias: null, args: null, kind: "ScalarField", name: "typeLabel", storageKey: null },
          c = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
          s = { alias: null, args: null, concreteType: "RightsAsset", kind: "LinkedField", name: "rightsAsset", plural: !1, selections: [w, t, c], storageKey: null },
          u = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
          C = { alias: null, args: null, kind: "ScalarField", name: "imageTransform", storageKey: null },
          f = { alias: null, args: null, kind: "ScalarField", name: "contentType", storageKey: null },
          d = [u, c, g, C, f],
          z = { alias: null, args: null, concreteType: "MultimediaAsset", kind: "LinkedField", name: "heroAsset", plural: !1, selections: d, storageKey: null },
          o = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null },
          v = { alias: null, args: null, kind: "ScalarField", name: "startsAt", storageKey: null },
          l = { alias: null, args: null, kind: "ScalarField", name: "finishesAt", storageKey: null },
          P = { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
          F = [{ alias: null, args: null, kind: "ScalarField", name: "downloadUrl", storageKey: null }, c],
          j = { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null },
          Y = { alias: null, args: null, kind: "ScalarField", name: "primaryCurrency", storageKey: null },
          i = { alias: null, args: null, kind: "ScalarField", name: "price", storageKey: null },
          D = { alias: null, args: null, kind: "ScalarField", name: "acceptablePaymentMethods", storageKey: null },
          G = [Y, i, D, v, l],
          x = { alias: null, args: null, kind: "ScalarField", name: "maxClaims", storageKey: null },
          b = { alias: "closesAt", args: null, kind: "ScalarField", name: "finishesAt", storageKey: null },
          M = { alias: null, args: null, concreteType: "Drawing", kind: "LinkedField", name: "drawing", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "entriesLimit", storageKey: null }, c], storageKey: null },
          O = [i, D, Y, v, l];
        return {
          fragment: {
            argumentDefinitions: A,
            kind: "Fragment",
            metadata: null,
            name: "editionDetailContainerInitialQuery",
            selections: [
              {
                alias: "edition",
                args: e,
                concreteType: "RightsEdition",
                kind: "LinkedField",
                name: "getEditionByPermalink",
                plural: !1,
                selections: [
                  { args: null, kind: "FragmentSpread", name: "editionDetail_edition" },
                  { args: null, kind: "FragmentSpread", name: "editionStateProvider_edition" },
                  { args: null, kind: "FragmentSpread", name: "editionDetailContainer_cacheControl" },
                  { alias: null, args: null, concreteType: "RightsAsset", kind: "LinkedField", name: "rightsAsset", plural: !1, selections: [{ alias: null, args: null, concreteType: "MultimediaAsset", kind: "LinkedField", name: "heroAsset", plural: !1, selections: [g], storageKey: null }, B], storageKey: null },
                  { alias: null, args: null, concreteType: "RightsEditionContributor", kind: "LinkedField", name: "contributors", plural: !0, selections: [{ alias: null, args: null, concreteType: "Profile", kind: "LinkedField", name: "profile", plural: !1, selections: [n], storageKey: null }], storageKey: null },
                ],
                storageKey: null,
              },
            ],
            type: "RootQueryType",
            abstractKey: null,
          },
          kind: "Request",
          operation: {
            argumentDefinitions: A,
            kind: "Operation",
            name: "editionDetailContainerInitialQuery",
            selections: [
              {
                alias: "edition",
                args: e,
                concreteType: "RightsEdition",
                kind: "LinkedField",
                name: "getEditionByPermalink",
                plural: !1,
                selections: [
                  r,
                  {
                    alias: null,
                    args: null,
                    concreteType: "RightsEditionContributor",
                    kind: "LinkedField",
                    name: "contributors",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "Profile",
                        kind: "LinkedField",
                        name: "profile",
                        plural: !1,
                        selections: [{ alias: null, args: [{ kind: "Literal", name: "first", value: 2 }], concreteType: "RightsEditionConnection", kind: "LinkedField", name: "editions", plural: !1, selections: [{ alias: null, args: null, concreteType: "RightsEditionEdge", kind: "LinkedField", name: "edges", plural: !0, selections: [{ alias: null, args: null, concreteType: "RightsEdition", kind: "LinkedField", name: "node", plural: !1, selections: [r, a, B, s, z, c], storageKey: null }], storageKey: null }], storageKey: "editions(first:2)" }, c, { alias: null, args: null, concreteType: "MultimediaAsset", kind: "LinkedField", name: "avatarAsset", plural: !1, selections: d, storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "slug", storageKey: null }, n],
                        storageKey: null,
                      },
                      { alias: null, args: null, kind: "ScalarField", name: "royaltyRightsPercentage", storageKey: null },
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "Embeds",
                    kind: "LinkedField",
                    name: "embeds",
                    plural: !1,
                    selections: [
                      { alias: null, args: null, concreteType: "YoutubeLiveEmbed", kind: "LinkedField", name: "youtubeLive", plural: !1, selections: [o, B, v, l], storageKey: null },
                      { alias: null, args: null, concreteType: "BlogEmbed", kind: "LinkedField", name: "blog", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "artistName", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "imageUrl", storageKey: null }, B, o], storageKey: null },
                      { alias: null, args: null, concreteType: "SpotifyEmbed", kind: "LinkedField", name: "spotify", plural: !1, selections: [o, B], storageKey: null },
                    ],
                    storageKey: null,
                  },
                  z,
                  { alias: null, args: null, concreteType: "RightsAsset", kind: "LinkedField", name: "rightsAsset", plural: !1, selections: [z, c, P, w, t, B], storageKey: null },
                  { alias: null, args: null, concreteType: "MultimediaAsset", kind: "LinkedField", name: "heroVideoAsset", plural: !1, selections: F, storageKey: null },
                  B,
                  P,
                  c,
                  {
                    alias: null,
                    args: null,
                    concreteType: "RightsEditionTier",
                    kind: "LinkedField",
                    name: "tiers",
                    plural: !0,
                    selections: [
                      { alias: null, args: null, kind: "ScalarField", name: "maxSupply", storageKey: null },
                      {
                        alias: null,
                        args: null,
                        concreteType: "PrimeTierSale",
                        kind: "LinkedField",
                        name: "tierSale",
                        plural: !1,
                        selections: [
                          { alias: null, args: null, kind: "ScalarField", name: "availableCount", storageKey: null },
                          j,
                          { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "saleConfig", plural: !1, selections: [u, { kind: "InlineFragment", selections: G, type: "PrimeTierSaleStrategyDirect", abstractKey: null }, { kind: "InlineFragment", selections: G, type: "PrimeTierSaleStrategyFlash", abstractKey: null }, { kind: "InlineFragment", selections: [Y, i, D, v, x, l], type: "PrimeTierSaleStrategyGiveaway", abstractKey: null }, { kind: "InlineFragment", selections: [Y, i, D, v, b, M], type: "PrimeTierSaleStrategyDrawing", abstractKey: null }], storageKey: null },
                          c,
                          a,
                          { alias: null, args: null, kind: "ScalarField", name: "saleCount", storageKey: null },
                          { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "presaleConfig", plural: !1, selections: [u, { kind: "InlineFragment", selections: O, type: "PrimeTierSaleStrategyDirect", abstractKey: null }, { kind: "InlineFragment", selections: O, type: "PrimeTierSaleStrategyFlash", abstractKey: null }, { kind: "InlineFragment", selections: [i, D, v, x, Y, l], type: "PrimeTierSaleStrategyGiveaway", abstractKey: null }, { kind: "InlineFragment", selections: [i, D, Y, v, b, M], type: "PrimeTierSaleStrategyDrawing", abstractKey: null }], storageKey: null },
                        ],
                        storageKey: null,
                      },
                      c,
                      { alias: null, args: null, concreteType: "CryptoContract", kind: "LinkedField", name: "chainContract", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "address", storageKey: null }, { alias: null, args: null, concreteType: "CryptoNetwork", kind: "LinkedField", name: "network", plural: !1, selections: [n, { alias: null, args: null, concreteType: "CryptoExplorer", kind: "LinkedField", name: "explorers", plural: !0, selections: [o], storageKey: null }, c], storageKey: null }, c, { alias: null, args: null, kind: "ScalarField", name: "chainId", storageKey: null }], storageKey: null },
                      w,
                      a,
                      { alias: null, args: null, kind: "ScalarField", name: "royaltyClaimMillionths", storageKey: null },
                      { alias: null, args: null, kind: "ScalarField", name: "number", storageKey: null },
                      { alias: null, args: null, concreteType: "RightsEdition", kind: "LinkedField", name: "edition", plural: !1, selections: [B, r, c, s], storageKey: null },
                      { alias: null, args: null, concreteType: "DripTierDrip", kind: "LinkedField", name: "publicDrips", plural: !0, selections: [{ alias: null, args: null, concreteType: "Drip", kind: "LinkedField", name: "drip", plural: !1, selections: [c, B, P, { alias: "icon", args: null, kind: "ScalarField", name: "iconEmoji", storageKey: null }], storageKey: null }, c], storageKey: null },
                      { alias: null, args: null, concreteType: "MultimediaAsset", kind: "LinkedField", name: "artworkAsset", plural: !1, selections: [c, g, C, f], storageKey: null },
                    ],
                    storageKey: null,
                  },
                  { alias: null, args: null, concreteType: "MultimediaAsset", kind: "LinkedField", name: "contractAsset", plural: !1, selections: F, storageKey: null },
                  a,
                  j,
                  { alias: null, args: null, kind: "ScalarField", name: "aboutDescription", storageKey: null },
                  { alias: null, args: null, kind: "ScalarField", name: "legalDescription", storageKey: null },
                  { alias: null, args: null, kind: "ScalarField", name: "pricingDescription", storageKey: null },
                ],
                storageKey: null,
              },
            ],
          },
          params: { id: "e49c20706a953b71fa3490ca3ffd0179", metadata: {}, name: "editionDetailContainerInitialQuery", operationKind: "query", text: null },
        };
      })();
      (B.hash = "c778e0b2585468b4676d50cfc102e2a5"), (e.default = B);
    },
    46295: function (A, e, g) {
      "use strict";
      g.r(e);
      var B = (function () {
        var A = { alias: null, args: null, kind: "ScalarField", name: "startsAt", storageKey: null },
          e = [A],
          g = [
            { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
            { kind: "InlineFragment", selections: e, type: "PrimeTierSaleStrategyDirect", abstractKey: null },
            { kind: "InlineFragment", selections: [A, { alias: "closesAt", args: null, kind: "ScalarField", name: "finishesAt", storageKey: null }], type: "PrimeTierSaleStrategyDrawing", abstractKey: null },
            { kind: "InlineFragment", selections: e, type: "PrimeTierSaleStrategyGiveaway", abstractKey: null },
            { kind: "InlineFragment", selections: e, type: "PrimeTierSaleStrategyFlash", abstractKey: null },
          ];
        return {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "editionDetailContainer_cacheControl",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "RightsEditionTier",
              kind: "LinkedField",
              name: "tiers",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "PrimeTierSale",
                  kind: "LinkedField",
                  name: "tierSale",
                  plural: !1,
                  selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null },
                    { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "saleConfig", plural: !1, selections: g, storageKey: null },
                    { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "presaleConfig", plural: !1, selections: g, storageKey: null },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "RightsEdition",
          abstractKey: null,
        };
      })();
      (B.hash = "4e44c5f0061a9d4a28b1d2671afb2fe0"), (e.default = B);
    },
    81187: function (A, e, g) {
      "use strict";
      g.r(e);
      var B = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "editionDetailList_edition",
        selections: [
          { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
          { alias: null, args: null, kind: "ScalarField", name: "permalink", storageKey: null },
          { alias: null, args: null, concreteType: "MultimediaAsset", kind: "LinkedField", name: "contractAsset", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "downloadUrl", storageKey: null }], storageKey: null },
          {
            alias: null,
            args: null,
            concreteType: "RightsEditionTier",
            kind: "LinkedField",
            name: "tiers",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "CryptoContract",
                kind: "LinkedField",
                name: "chainContract",
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: "ScalarField", name: "address", storageKey: null },
                  {
                    alias: null,
                    args: null,
                    concreteType: "CryptoNetwork",
                    kind: "LinkedField",
                    name: "network",
                    plural: !1,
                    selections: [
                      { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                      { alias: null, args: null, concreteType: "CryptoExplorer", kind: "LinkedField", name: "explorers", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }], storageKey: null },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "RightsEdition",
        abstractKey: null,
        hash: "d8e98451ffce6e0baa7cc199d9a5e8dc",
      };
      e.default = B;
    },
    95409: function (A, e, g) {
      "use strict";
      g.r(e);
      var B = (function () {
        var A = { alias: null, args: null, kind: "ScalarField", name: "permalink", storageKey: null };
        return {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "editionDetail_edition",
          selections: [
            A,
            {
              alias: null,
              args: null,
              concreteType: "RightsEditionContributor",
              kind: "LinkedField",
              name: "contributors",
              plural: !0,
              selections: [{ alias: null, args: null, concreteType: "Profile", kind: "LinkedField", name: "profile", plural: !1, selections: [{ alias: null, args: [{ kind: "Literal", name: "first", value: 2 }], concreteType: "RightsEditionConnection", kind: "LinkedField", name: "editions", plural: !1, selections: [{ alias: null, args: null, concreteType: "RightsEditionEdge", kind: "LinkedField", name: "edges", plural: !0, selections: [{ alias: null, args: null, concreteType: "RightsEdition", kind: "LinkedField", name: "node", plural: !1, selections: [A, { args: null, kind: "FragmentSpread", name: "upcomingDrop_edition" }], storageKey: null }], storageKey: null }], storageKey: "editions(first:2)" }], storageKey: null }],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "Embeds",
              kind: "LinkedField",
              name: "embeds",
              plural: !1,
              selections: [
                { alias: null, args: null, concreteType: "YoutubeLiveEmbed", kind: "LinkedField", name: "youtubeLive", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "youtubePlayer_embed" }], storageKey: null },
                { alias: null, args: null, concreteType: "BlogEmbed", kind: "LinkedField", name: "blog", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "editionBlog_embed" }], storageKey: null },
              ],
              storageKey: null,
            },
            { args: null, kind: "FragmentSpread", name: "editionHeroUnit_edition" },
            { args: null, kind: "FragmentSpread", name: "editionDetailBreakdown_edition" },
            { args: null, kind: "FragmentSpread", name: "editionDetailList_edition" },
            { args: null, kind: "FragmentSpread", name: "editionTierList_edition" },
            { args: null, kind: "FragmentSpread", name: "editionTokenListContainer_edition" },
            { args: null, kind: "FragmentSpread", name: "editionPricingDetail_edition" },
          ],
          type: "RightsEdition",
          abstractKey: null,
        };
      })();
      (B.hash = "b45b3ad96402e7eded17b97b980a9015"), (e.default = B);
    },
    22727: function (A, e, g) {
      "use strict";
      g.r(e);
      var B = (function () {
        var A = { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null };
        return {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "editionHeroUnitMeta_edition",
          selections: [
            { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
            A,
            { alias: null, args: null, concreteType: "RightsAsset", kind: "LinkedField", name: "rightsAsset", plural: !1, selections: [A, { alias: null, args: null, kind: "ScalarField", name: "type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "typeLabel", storageKey: null }], storageKey: null },
            { alias: null, args: null, concreteType: "Embeds", kind: "LinkedField", name: "embeds", plural: !1, selections: [{ alias: null, args: null, concreteType: "SpotifyEmbed", kind: "LinkedField", name: "spotify", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "spotifyPlayer_embed" }], storageKey: null }], storageKey: null },
            { args: null, kind: "FragmentSpread", name: "editionContributorList_edition" },
          ],
          type: "RightsEdition",
          abstractKey: null,
        };
      })();
      (B.hash = "93884d1ac063211d329e222cd458d7e0"), (e.default = B);
    },
    47312: function (A, e, g) {
      "use strict";
      g.r(e);
      var B = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "editionHeroUnit_edition",
        selections: [
          { args: null, kind: "FragmentSpread", name: "editionCover_edition" },
          { args: null, kind: "FragmentSpread", name: "editionHeroUnitMeta_edition" },
        ],
        type: "RightsEdition",
        abstractKey: null,
        hash: "b9fb5f4ceebbc58dada80a26b36bffac",
      };
      e.default = B;
    },
    35292: function (A, e, g) {
      "use strict";
      g.r(e);
      var B = (function () {
        var A = [
          { alias: null, args: null, kind: "ScalarField", name: "acceptablePaymentMethods", storageKey: null },
          { alias: null, args: null, kind: "ScalarField", name: "price", storageKey: null },
        ];
        return {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "editionPaymentSelectionChoice_tier",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "PrimeTierSale",
              kind: "LinkedField",
              name: "tierSale",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "saleConfig",
                  plural: !1,
                  selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                    { kind: "InlineFragment", selections: A, type: "PrimeTierSaleStrategyDirect", abstractKey: null },
                    { kind: "InlineFragment", selections: A, type: "PrimeTierSaleStrategyFlash", abstractKey: null },
                    { kind: "InlineFragment", selections: A, type: "PrimeTierSaleStrategyGiveaway", abstractKey: null },
                    { kind: "InlineFragment", selections: A, type: "PrimeTierSaleStrategyDrawing", abstractKey: null },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "RightsEditionTier",
          abstractKey: null,
        };
      })();
      (B.hash = "493945aa6500d73f0252d8906549352f"), (e.default = B);
    },
    45484: function (A, e, g) {
      "use strict";
      g.r(e);
      var B = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "editionPaymentSelection_edition", selections: [{ alias: null, args: null, concreteType: "RightsEditionTier", kind: "LinkedField", name: "tiers", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "royalId", storageKey: null }], storageKey: null }], type: "RightsEdition", abstractKey: null, hash: "ab434f09d87a7d43df72c0ca08f95b90" };
      e.default = B;
    },
    61919: function (A, e, g) {
      "use strict";
      g.r(e);
      var B = (function () {
        var A = { alias: null, args: null, kind: "ScalarField", name: "primaryCurrency", storageKey: null },
          e = { alias: null, args: null, kind: "ScalarField", name: "startsAt", storageKey: null },
          g = { alias: null, args: null, kind: "ScalarField", name: "price", storageKey: null },
          B = { alias: null, args: null, kind: "ScalarField", name: "acceptablePaymentMethods", storageKey: null },
          n = [A, e, { alias: null, args: null, kind: "ScalarField", name: "finishesAt", storageKey: null }, g, B],
          r = [
            { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
            { kind: "InlineFragment", selections: n, type: "PrimeTierSaleStrategyDirect", abstractKey: null },
            { kind: "InlineFragment", selections: n, type: "PrimeTierSaleStrategyFlash", abstractKey: null },
            { kind: "InlineFragment", selections: n, type: "PrimeTierSaleStrategyGiveaway", abstractKey: null },
            { kind: "InlineFragment", selections: [A, e, { alias: "closesAt", args: null, kind: "ScalarField", name: "finishesAt", storageKey: null }, g, B, { alias: null, args: null, concreteType: "Drawing", kind: "LinkedField", name: "drawing", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "entriesLimit", storageKey: null }], storageKey: null }], type: "PrimeTierSaleStrategyDrawing", abstractKey: null },
          ];
        return {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "editionPaymentSelection_tier",
          selections: [
            { alias: null, args: null, kind: "ScalarField", name: "royalId", storageKey: null },
            { alias: null, args: null, concreteType: "RightsEdition", kind: "LinkedField", name: "edition", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "permalink", storageKey: null }], storageKey: null },
            {
              alias: null,
              args: null,
              concreteType: "PrimeTierSale",
              kind: "LinkedField",
              name: "tierSale",
              plural: !1,
              selections: [
                { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "saleConfig", plural: !1, selections: r, storageKey: null },
                { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "presaleConfig", plural: !1, selections: r, storageKey: null },
              ],
              storageKey: null,
            },
            { args: null, kind: "FragmentSpread", name: "editionPaymentSelectionChoice_tier" },
          ],
          type: "RightsEditionTier",
          abstractKey: null,
        };
      })();
      (B.hash = "1141f4145f257e8db9108757b44e1776"), (e.default = B);
    },
    44220: function (A, e, g) {
      "use strict";
      g.r(e);
      var B = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "editionPricingDetail_edition",
        selections: [
          { alias: null, args: null, kind: "ScalarField", name: "aboutDescription", storageKey: null },
          { alias: null, args: null, kind: "ScalarField", name: "legalDescription", storageKey: null },
          { alias: null, args: null, kind: "ScalarField", name: "pricingDescription", storageKey: null },
        ],
        type: "RightsEdition",
        abstractKey: null,
        hash: "6ef1d9545a2348b2d8ac70c952eeecc2",
      };
      e.default = B;
    },
    24680: function (A, e, g) {
      "use strict";
      g.r(e);
      var B = (function () {
        var A = { alias: null, args: null, kind: "ScalarField", name: "primaryCurrency", storageKey: null },
          e = { alias: null, args: null, kind: "ScalarField", name: "startsAt", storageKey: null },
          g = { alias: null, args: null, kind: "ScalarField", name: "price", storageKey: null },
          B = { alias: null, args: null, kind: "ScalarField", name: "acceptablePaymentMethods", storageKey: null },
          n = [A, e, { alias: null, args: null, kind: "ScalarField", name: "finishesAt", storageKey: null }, g, B],
          r = [
            { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
            { kind: "InlineFragment", selections: n, type: "PrimeTierSaleStrategyDirect", abstractKey: null },
            { kind: "InlineFragment", selections: n, type: "PrimeTierSaleStrategyFlash", abstractKey: null },
            { kind: "InlineFragment", selections: n, type: "PrimeTierSaleStrategyGiveaway", abstractKey: null },
            { kind: "InlineFragment", selections: [A, e, { alias: "closesAt", args: null, kind: "ScalarField", name: "finishesAt", storageKey: null }, g, B], type: "PrimeTierSaleStrategyDrawing", abstractKey: null },
          ];
        return {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "editionStateProvider_edition",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "RightsEditionTier",
              kind: "LinkedField",
              name: "tiers",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "PrimeTierSale",
                  kind: "LinkedField",
                  name: "tierSale",
                  plural: !1,
                  selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null },
                    { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "saleConfig", plural: !1, selections: r, storageKey: null },
                    { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "presaleConfig", plural: !1, selections: r, storageKey: null },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "RightsEdition",
          abstractKey: null,
        };
      })();
      (B.hash = "d667af9daf5e3e72a801d8eec4d14f81"), (e.default = B);
    },
    54381: function (A, e, g) {
      "use strict";
      g.r(e);
      var B = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "editionTierListItemDripModal_tier",
        selections: [
          { alias: null, args: null, kind: "ScalarField", name: "type", storageKey: null },
          { args: null, kind: "FragmentSpread", name: "editionAsset_tier" },
          {
            alias: null,
            args: null,
            concreteType: "DripTierDrip",
            kind: "LinkedField",
            name: "publicDrips",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "Drip",
                kind: "LinkedField",
                name: "drip",
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                  { alias: "icon", args: null, kind: "ScalarField", name: "iconEmoji", storageKey: null },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "RightsEditionTier",
        abstractKey: null,
        hash: "09a2ffd14cda26cc2ab569205068b9cf",
      };
      e.default = B;
    },
    74179: function (A, e, g) {
      "use strict";
      g.r(e);
      var B = (function () {
        var A = [
          { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
          {
            kind: "InlineFragment",
            selections: [
              { alias: null, args: null, kind: "ScalarField", name: "startsAt", storageKey: null },
              { alias: null, args: null, kind: "ScalarField", name: "maxClaims", storageKey: null },
            ],
            type: "PrimeTierSaleStrategyGiveaway",
            abstractKey: null,
          },
        ];
        return {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "editionTierListItemPresaleSoldOutModal_tier",
          selections: [
            { alias: null, args: null, concreteType: "RightsEdition", kind: "LinkedField", name: "edition", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }], storageKey: null },
            {
              alias: null,
              args: null,
              concreteType: "PrimeTierSale",
              kind: "LinkedField",
              name: "tierSale",
              plural: !1,
              selections: [
                { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "saleConfig", plural: !1, selections: A, storageKey: null },
                { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "presaleConfig", plural: !1, selections: A, storageKey: null },
              ],
              storageKey: null,
            },
          ],
          type: "RightsEditionTier",
          abstractKey: null,
        };
      })();
      (B.hash = "d3ddf4efbe7c273a98d62be7a6eb8be6"), (e.default = B);
    },
    98781: function (A, e, g) {
      "use strict";
      g.r(e);
      var B = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "editionTierListItemPurchaseButton_tier",
        selections: [
          { alias: null, args: null, kind: "ScalarField", name: "type", storageKey: null },
          { alias: null, args: null, concreteType: "PrimeTierSale", kind: "LinkedField", name: "tierSale", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null }], storageKey: null },
          { alias: null, args: null, concreteType: "RightsEdition", kind: "LinkedField", name: "edition", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }], storageKey: null },
        ],
        type: "RightsEditionTier",
        abstractKey: null,
        hash: "886b9aaa80d3f70391d89cda7ba7a59b",
      };
      e.default = B;
    },
    8833: function (A, e, g) {
      "use strict";
      g.r(e);
      var B = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "editionTierListItem_edition", selections: [{ args: null, kind: "FragmentSpread", name: "walletCheckoutModalInner_edition" }], type: "RightsEdition", abstractKey: null, hash: "0037367186fb32db01b3c1617cf12967" };
      e.default = B;
    },
    92084: function (A, e, g) {
      "use strict";
      g.r(e);
      var B = (function () {
        var A = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
          e = { alias: null, args: null, kind: "ScalarField", name: "royalId", storageKey: null },
          g = { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
          B = [
            { alias: null, args: null, kind: "ScalarField", name: "price", storageKey: null },
            { alias: null, args: null, kind: "ScalarField", name: "acceptablePaymentMethods", storageKey: null },
          ],
          n = [
            { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
            { kind: "InlineFragment", selections: B, type: "PrimeTierSaleStrategyDirect", abstractKey: null },
            { kind: "InlineFragment", selections: B, type: "PrimeTierSaleStrategyFlash", abstractKey: null },
            { kind: "InlineFragment", selections: B, type: "PrimeTierSaleStrategyGiveaway", abstractKey: null },
            { kind: "InlineFragment", selections: B, type: "PrimeTierSaleStrategyDrawing", abstractKey: null },
          ];
        return {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "editionTierListItem_tier",
          selections: [
            A,
            e,
            { alias: null, args: null, kind: "ScalarField", name: "royaltyClaimMillionths", storageKey: null },
            { alias: null, args: null, kind: "ScalarField", name: "number", storageKey: null },
            { alias: null, args: null, concreteType: "RightsEdition", kind: "LinkedField", name: "edition", plural: !1, selections: [g, { alias: null, args: null, kind: "ScalarField", name: "permalink", storageKey: null }], storageKey: null },
            { alias: null, args: null, concreteType: "DripTierDrip", kind: "LinkedField", name: "publicDrips", plural: !0, selections: [{ alias: null, args: null, concreteType: "Drip", kind: "LinkedField", name: "drip", plural: !1, selections: [A, g, { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null }, { alias: "icon", args: null, kind: "ScalarField", name: "iconEmoji", storageKey: null }], storageKey: null }], storageKey: null },
            { alias: null, args: null, concreteType: "CryptoContract", kind: "LinkedField", name: "chainContract", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "chainId", storageKey: null }], storageKey: null },
            { alias: null, args: null, concreteType: "PrimeTierSale", kind: "LinkedField", name: "tierSale", plural: !1, selections: [e, { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "availableCount", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "saleCount", storageKey: null }, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "saleConfig", plural: !1, selections: n, storageKey: null }, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "presaleConfig", plural: !1, selections: n, storageKey: null }], storageKey: null },
            { args: null, kind: "FragmentSpread", name: "editionAsset_tier" },
            { args: null, kind: "FragmentSpread", name: "editionTierListItemPurchaseButton_tier" },
            { args: null, kind: "FragmentSpread", name: "editionTierListItemDripModal_tier" },
            { args: null, kind: "FragmentSpread", name: "editionTierListItemPresaleSoldOutModal_tier" },
            { args: null, kind: "FragmentSpread", name: "walletCheckoutModalInner_tier" },
          ],
          type: "RightsEditionTier",
          abstractKey: null,
        };
      })();
      (B.hash = "34c451dce45a42a25f5232f30946c616"), (e.default = B);
    },
    93654: function (A, e, g) {
      "use strict";
      g.r(e);
      var B = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "editionTierList_edition",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "RightsEditionTier",
            kind: "LinkedField",
            name: "tiers",
            plural: !0,
            selections: [
              { alias: null, args: null, kind: "ScalarField", name: "type", storageKey: null },
              { args: null, kind: "FragmentSpread", name: "editionTierListItem_tier" },
            ],
            storageKey: null,
          },
          { args: null, kind: "FragmentSpread", name: "editionTierListItem_edition" },
        ],
        type: "RightsEdition",
        abstractKey: null,
        hash: "17c9ce5c90ad7c92fc95004c9b2f2ceb",
      };
      e.default = B;
    },
    57146: function (A, e, g) {
      "use strict";
      g.r(e);
      var B = (function () {
        var A = { alias: null, args: null, kind: "ScalarField", name: "royalId", storageKey: null },
          e = { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null };
        return { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "editionTokenListContainer_edition", selections: [A, e, { alias: null, args: null, concreteType: "RightsEditionTier", kind: "LinkedField", name: "tiers", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "type", storageKey: null }, A, { alias: null, args: null, concreteType: "PrimeTierSale", kind: "LinkedField", name: "tierSale", plural: !1, selections: [e], storageKey: null }], storageKey: null }], type: "RightsEdition", abstractKey: null };
      })();
      (B.hash = "eef2a69240920d698e50e1b9209b5b75"), (e.default = B);
    },
    83263: function (A, e, g) {
      "use strict";
      g.r(e);
      var B = (function () {
        var A = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null };
        return {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "editionTokenListItem_token",
          selections: [
            A,
            { alias: null, args: null, kind: "ScalarField", name: "mintNumber", storageKey: null },
            {
              alias: null,
              args: null,
              concreteType: "RightsEditionTier",
              kind: "LinkedField",
              name: "tier",
              plural: !1,
              selections: [
                { alias: null, args: null, kind: "ScalarField", name: "maxSupply", storageKey: null },
                { alias: null, args: null, kind: "ScalarField", name: "type", storageKey: null },
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
                {
                  alias: null,
                  args: null,
                  concreteType: "User",
                  kind: "LinkedField",
                  name: "user",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "Profile",
                      kind: "LinkedField",
                      name: "profiles",
                      plural: !0,
                      selections: [
                        { alias: null, args: null, kind: "ScalarField", name: "slug", storageKey: null },
                        { alias: null, args: null, concreteType: "MultimediaAsset", kind: "LinkedField", name: "avatarAsset", plural: !1, selections: [A, { alias: null, args: null, kind: "ScalarField", name: "filename", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "imageTransform", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "contentType", storageKey: null }], storageKey: null },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "RightsToken",
          abstractKey: null,
        };
      })();
      (B.hash = "cd55877fe5e446038228f7de979bcdf2"), (e.default = B);
    },
    78371: function (A, e, g) {
      "use strict";
      g.r(e);
      var B = (function () {
        var A = { defaultValue: null, kind: "LocalArgument", name: "after" },
          e = { defaultValue: null, kind: "LocalArgument", name: "editionId" },
          g = { defaultValue: null, kind: "LocalArgument", name: "first" },
          B = { defaultValue: null, kind: "LocalArgument", name: "tierIds" },
          n = [
            { kind: "Variable", name: "after", variableName: "after" },
            {
              fields: [
                { items: [{ kind: "Variable", name: "editionIdIn.0", variableName: "editionId" }], kind: "ListValue", name: "editionIdIn" },
                { kind: "Variable", name: "tierIdIn", variableName: "tierIds" },
              ],
              kind: "ObjectValue",
              name: "filters",
            },
            { kind: "Variable", name: "first", variableName: "first" },
          ],
          r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null };
        return {
          fragment: { argumentDefinitions: [A, e, g, B], kind: "Fragment", metadata: null, name: "editionTokenListQuery", selections: [{ args: null, kind: "FragmentSpread", name: "editionTokenList_tokens" }], type: "RootQueryType", abstractKey: null },
          kind: "Request",
          operation: {
            argumentDefinitions: [e, A, B, g],
            kind: "Operation",
            name: "editionTokenListQuery",
            selections: [
              {
                alias: null,
                args: n,
                concreteType: "RightsTokenConnection",
                kind: "LinkedField",
                name: "tokens",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "RightsTokenEdge",
                    kind: "LinkedField",
                    name: "edges",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "RightsToken",
                        kind: "LinkedField",
                        name: "node",
                        plural: !1,
                        selections: [
                          r,
                          { alias: null, args: null, kind: "ScalarField", name: "mintNumber", storageKey: null },
                          { alias: null, args: null, concreteType: "RightsEditionTier", kind: "LinkedField", name: "tier", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "maxSupply", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "type", storageKey: null }, r], storageKey: null },
                          {
                            alias: null,
                            args: null,
                            concreteType: "CryptoWallet",
                            kind: "LinkedField",
                            name: "wallet",
                            plural: !1,
                            selections: [
                              { alias: null, args: null, kind: "ScalarField", name: "address", storageKey: null },
                              {
                                alias: null,
                                args: null,
                                concreteType: "User",
                                kind: "LinkedField",
                                name: "user",
                                plural: !1,
                                selections: [{ alias: null, args: null, concreteType: "Profile", kind: "LinkedField", name: "profiles", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "slug", storageKey: null }, { alias: null, args: null, concreteType: "MultimediaAsset", kind: "LinkedField", name: "avatarAsset", plural: !1, selections: [r, { alias: null, args: null, kind: "ScalarField", name: "filename", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "imageTransform", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "contentType", storageKey: null }], storageKey: null }, r], storageKey: null }, r],
                                storageKey: null,
                              },
                              r,
                            ],
                            storageKey: null,
                          },
                          { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                        ],
                        storageKey: null,
                      },
                      { alias: null, args: null, kind: "ScalarField", name: "cursor", storageKey: null },
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "PageInfo",
                    kind: "LinkedField",
                    name: "pageInfo",
                    plural: !1,
                    selections: [
                      { alias: null, args: null, kind: "ScalarField", name: "hasNextPage", storageKey: null },
                      { alias: null, args: null, kind: "ScalarField", name: "endCursor", storageKey: null },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              { alias: null, args: n, filters: ["filters"], handle: "connection", key: "editionTokenList_tokens", kind: "LinkedHandle", name: "tokens" },
            ],
          },
          params: { id: "a15d336c2225ba172cb497ee5640b6a8", metadata: {}, name: "editionTokenListQuery", operationKind: "query", text: null },
        };
      })();
      (B.hash = "f2aef060c405ac2db10df2a01f79ce3c"), (e.default = B);
    },
    60018: function (A, e, g) {
      "use strict";
      g.r(e);
      var B = (function () {
        var A = [
            { defaultValue: null, kind: "LocalArgument", name: "after" },
            { defaultValue: null, kind: "LocalArgument", name: "editionId" },
            { defaultValue: null, kind: "LocalArgument", name: "first" },
            { defaultValue: null, kind: "LocalArgument", name: "tierIds" },
          ],
          e = [
            { kind: "Variable", name: "after", variableName: "after" },
            {
              fields: [
                { items: [{ kind: "Variable", name: "editionIdIn.0", variableName: "editionId" }], kind: "ListValue", name: "editionIdIn" },
                { kind: "Variable", name: "tierIdIn", variableName: "tierIds" },
              ],
              kind: "ObjectValue",
              name: "filters",
            },
            { kind: "Variable", name: "first", variableName: "first" },
          ],
          g = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null };
        return {
          fragment: { argumentDefinitions: A, kind: "Fragment", metadata: null, name: "editionTokenListRefetchQuery", selections: [{ args: null, kind: "FragmentSpread", name: "editionTokenList_tokens" }], type: "RootQueryType", abstractKey: null },
          kind: "Request",
          operation: {
            argumentDefinitions: A,
            kind: "Operation",
            name: "editionTokenListRefetchQuery",
            selections: [
              {
                alias: null,
                args: e,
                concreteType: "RightsTokenConnection",
                kind: "LinkedField",
                name: "tokens",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "RightsTokenEdge",
                    kind: "LinkedField",
                    name: "edges",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "RightsToken",
                        kind: "LinkedField",
                        name: "node",
                        plural: !1,
                        selections: [
                          g,
                          { alias: null, args: null, kind: "ScalarField", name: "mintNumber", storageKey: null },
                          { alias: null, args: null, concreteType: "RightsEditionTier", kind: "LinkedField", name: "tier", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "maxSupply", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "type", storageKey: null }, g], storageKey: null },
                          {
                            alias: null,
                            args: null,
                            concreteType: "CryptoWallet",
                            kind: "LinkedField",
                            name: "wallet",
                            plural: !1,
                            selections: [
                              { alias: null, args: null, kind: "ScalarField", name: "address", storageKey: null },
                              {
                                alias: null,
                                args: null,
                                concreteType: "User",
                                kind: "LinkedField",
                                name: "user",
                                plural: !1,
                                selections: [{ alias: null, args: null, concreteType: "Profile", kind: "LinkedField", name: "profiles", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "slug", storageKey: null }, { alias: null, args: null, concreteType: "MultimediaAsset", kind: "LinkedField", name: "avatarAsset", plural: !1, selections: [g, { alias: null, args: null, kind: "ScalarField", name: "filename", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "imageTransform", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "contentType", storageKey: null }], storageKey: null }, g], storageKey: null }, g],
                                storageKey: null,
                              },
                              g,
                            ],
                            storageKey: null,
                          },
                          { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                        ],
                        storageKey: null,
                      },
                      { alias: null, args: null, kind: "ScalarField", name: "cursor", storageKey: null },
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "PageInfo",
                    kind: "LinkedField",
                    name: "pageInfo",
                    plural: !1,
                    selections: [
                      { alias: null, args: null, kind: "ScalarField", name: "hasNextPage", storageKey: null },
                      { alias: null, args: null, kind: "ScalarField", name: "endCursor", storageKey: null },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              { alias: null, args: e, filters: ["filters"], handle: "connection", key: "editionTokenList_tokens", kind: "LinkedHandle", name: "tokens" },
            ],
          },
          params: { id: "5e6373b8637286137d48ad658a49f59e", metadata: {}, name: "editionTokenListRefetchQuery", operationKind: "query", text: null },
        };
      })();
      (B.hash = "6ed961be06ca85fe919a8cdc17311621"), (e.default = B);
    },
    95810: function (A, e, g) {
      "use strict";
      g.r(e);
      var B = (function () {
        var A = ["tokens"];
        return {
          argumentDefinitions: [
            { kind: "RootArgument", name: "after" },
            { kind: "RootArgument", name: "editionId" },
            { kind: "RootArgument", name: "first" },
            { kind: "RootArgument", name: "tierIds" },
          ],
          kind: "Fragment",
          metadata: { connection: [{ count: "first", cursor: "after", direction: "forward", path: A }], refetch: { connection: { forward: { count: "first", cursor: "after" }, backward: null, path: A }, fragmentPathInResult: [], operation: g(60018) } },
          name: "editionTokenList_tokens",
          selections: [
            {
              alias: "tokens",
              args: [
                {
                  fields: [
                    { items: [{ kind: "Variable", name: "editionIdIn.0", variableName: "editionId" }], kind: "ListValue", name: "editionIdIn" },
                    { kind: "Variable", name: "tierIdIn", variableName: "tierIds" },
                  ],
                  kind: "ObjectValue",
                  name: "filters",
                },
              ],
              concreteType: "RightsTokenConnection",
              kind: "LinkedField",
              name: "__editionTokenList_tokens_connection",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "RightsTokenEdge",
                  kind: "LinkedField",
                  name: "edges",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "RightsToken",
                      kind: "LinkedField",
                      name: "node",
                      plural: !1,
                      selections: [
                        { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                        { args: null, kind: "FragmentSpread", name: "editionTokenListItem_token" },
                        { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                      ],
                      storageKey: null,
                    },
                    { alias: null, args: null, kind: "ScalarField", name: "cursor", storageKey: null },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "PageInfo",
                  kind: "LinkedField",
                  name: "pageInfo",
                  plural: !1,
                  selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "hasNextPage", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "endCursor", storageKey: null },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "RootQueryType",
          abstractKey: null,
        };
      })();
      (B.hash = "6ed961be06ca85fe919a8cdc17311621"), (e.default = B);
    },
    29364: function (A, e, g) {
      "use strict";
      g.r(e);
      var B = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "queueModalScreenSoldout_edition",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "RightsEditionTier",
            kind: "LinkedField",
            name: "tiers",
            plural: !0,
            selections: [
              { alias: null, args: null, kind: "ScalarField", name: "number", storageKey: null },
              { alias: null, args: null, kind: "ScalarField", name: "type", storageKey: null },
            ],
            storageKey: null,
          },
        ],
        type: "RightsEdition",
        abstractKey: null,
        hash: "f5f44f962cbd520281a5d8b777d29775",
      };
      e.default = B;
    },
    37693: function (A, e, g) {
      "use strict";
      g.r(e);
      var B = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "queueModalScreen_edition", selections: [{ args: null, kind: "FragmentSpread", name: "queueModalScreenSoldout_edition" }], type: "RightsEdition", abstractKey: null, hash: "f8d44302fb2ff848352a0f312b8d2e80" };
      e.default = B;
    },
    6615: function (A, e, g) {
      "use strict";
      g.r(e);
      var B = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "spotifyPlayer_embed",
        selections: [
          { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null },
          { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
        ],
        type: "SpotifyEmbed",
        abstractKey: null,
        hash: "2d7487bf318c540cc7c06b9b9a409f41",
      };
      e.default = B;
    },
    48798: function (A, e, g) {
      "use strict";
      g.r(e);
      var B = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "upcomingDrop_edition",
        selections: [
          { alias: null, args: null, kind: "ScalarField", name: "royalId", storageKey: null },
          { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
          { alias: null, args: null, kind: "ScalarField", name: "permalink", storageKey: null },
          {
            alias: null,
            args: null,
            concreteType: "RightsAsset",
            kind: "LinkedField",
            name: "rightsAsset",
            plural: !1,
            selections: [
              { alias: null, args: null, kind: "ScalarField", name: "type", storageKey: null },
              { alias: null, args: null, kind: "ScalarField", name: "typeLabel", storageKey: null },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "MultimediaAsset",
            kind: "LinkedField",
            name: "heroAsset",
            plural: !1,
            selections: [
              { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
              { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
              { alias: null, args: null, kind: "ScalarField", name: "filename", storageKey: null },
              { alias: null, args: null, kind: "ScalarField", name: "imageTransform", storageKey: null },
              { alias: null, args: null, kind: "ScalarField", name: "contentType", storageKey: null },
            ],
            storageKey: null,
          },
        ],
        type: "RightsEdition",
        abstractKey: null,
        hash: "e5c0a53118c23cce3ebf868d2164a423",
      };
      e.default = B;
    },
    63096: function (A, e, g) {
      "use strict";
      g.r(e);
      var B = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "walletCheckoutModalInner_edition",
        selections: [
          { args: null, kind: "FragmentSpread", name: "queueModalScreen_edition" },
          { args: null, kind: "FragmentSpread", name: "editionPaymentSelection_edition" },
        ],
        type: "RightsEdition",
        abstractKey: null,
        hash: "f6d5cc16b9081b5505692a4d561538e0",
      };
      e.default = B;
    },
    90254: function (A, e, g) {
      "use strict";
      g.r(e);
      var B = (function () {
        var A = [{ alias: null, args: null, kind: "ScalarField", name: "price", storageKey: null }];
        return {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "walletCheckoutModalInner_tier",
          selections: [
            { alias: null, args: null, kind: "ScalarField", name: "number", storageKey: null },
            { alias: null, args: null, kind: "ScalarField", name: "type", storageKey: null },
            {
              alias: null,
              args: null,
              concreteType: "RightsEdition",
              kind: "LinkedField",
              name: "edition",
              plural: !1,
              selections: [
                { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                { alias: null, args: null, kind: "ScalarField", name: "permalink", storageKey: null },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "PrimeTierSale",
              kind: "LinkedField",
              name: "tierSale",
              plural: !1,
              selections: [
                { alias: null, args: null, kind: "ScalarField", name: "saleCount", storageKey: null },
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "saleConfig",
                  plural: !1,
                  selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                    { kind: "InlineFragment", selections: A, type: "PrimeTierSaleStrategyDirect", abstractKey: null },
                    { kind: "InlineFragment", selections: A, type: "PrimeTierSaleStrategyFlash", abstractKey: null },
                    { kind: "InlineFragment", selections: A, type: "PrimeTierSaleStrategyGiveaway", abstractKey: null },
                    { kind: "InlineFragment", selections: A, type: "PrimeTierSaleStrategyDrawing", abstractKey: null },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            { args: null, kind: "FragmentSpread", name: "editionPaymentSelection_tier" },
            { args: null, kind: "FragmentSpread", name: "editionPaymentSelectionChoice_tier" },
          ],
          type: "RightsEditionTier",
          abstractKey: null,
        };
      })();
      (B.hash = "5122dbb941be9f79a0c2a7a776b52e5b"), (e.default = B);
    },
    64575: function (A, e, g) {
      "use strict";
      g.r(e);
      var B = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "youtubePlayer_embed",
        selections: [
          { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null },
          { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
          { alias: null, args: null, kind: "ScalarField", name: "startsAt", storageKey: null },
          { alias: null, args: null, kind: "ScalarField", name: "finishesAt", storageKey: null },
        ],
        type: "YoutubeLiveEmbed",
        abstractKey: null,
        hash: "5c266a633e505f732a0765b697fa1b67",
      };
      e.default = B;
    },
    73259: function (A, e, g) {
      "use strict";
      g.d(e, {
        C: function () {
          return M;
        },
      });
      var B = g(47568),
        n = g(26042),
        r = g(69396),
        a = g(99534),
        w = g(34051),
        t = g.n(w),
        c = g(85893),
        s = g(67294),
        u = g(22691),
        C = g(91026),
        f = g(69587),
        d = g(52523),
        z = g(54750),
        o = g(15755),
        v = g(6990),
        l = g(56063),
        P = g(51933),
        F = g(92985),
        j = g(87536),
        Y = g(47533),
        i = g(74231),
        D = g(29815);
      var G = g(42472),
        x = g(80884),
        b = i.Ry().shape({ email: i.Z_().email().required(), username: i.Z_().required(), password: i.Z_().required() }).required();
      function M(A) {
        A.loading;
        var e = A.user,
          g = A.profile,
          w = A.fieldErrors,
          i = A.onSubmit,
          M = (0, a.Z)(A, ["loading", "user", "profile", "fieldErrors", "onSubmit"]),
          O = (0, F.z)().trackClick,
          E = (0, s.useState)(!1),
          I = E[0],
          Q = E[1],
          X = (0, G.x_)().newToast,
          W = (0, j.cI)({ resolver: (0, Y.X)(b) }),
          H = W.register,
          m = W.handleSubmit,
          V = (W.setError, W.setValue, W.formState),
          h = V.isSubmitting,
          N = V.errors,
          K = (0, s.useCallback)(
            function () {
              Q(!I), O({ event: "togglePasswordVisible", label: "eye", data: { showPassword: I } });
            },
            [I, Q, O]
          ),
          y = (function (A, e) {
            return Object.keys(A).reduce(function (e, g) {
              var B;
              return e[g] || (e[g] = []), (e[g] = (0, D.Z)(e[g]).concat([(null === (B = A[g]) || void 0 === B ? void 0 : B.message) || ""])), e;
            }, e || {});
          })(N, w);
        return (0, c.jsxs)(
          "form",
          (0, r.Z)((0, n.Z)({ method: "post" }, M), {
            onSubmit: m(
              (function () {
                var A = (0, B.Z)(
                  t().mark(function A(e) {
                    return t().wrap(
                      function (A) {
                        for (;;)
                          switch ((A.prev = A.next)) {
                            case 0:
                              return (A.prev = 0), (A.next = 3), i(e);
                            case 3:
                              A.next = 8;
                              break;
                            case 5:
                              (A.prev = 5), (A.t0 = A.catch(0)), X({ type: x.$.ERROR, message: "Registration failed, please reload the page and try again.", closeAfter: 1e4, closable: !0 });
                            case 8:
                            case "end":
                              return A.stop();
                          }
                      },
                      A,
                      null,
                      [[0, 5]]
                    );
                  })
                );
                return function (e) {
                  return A.apply(this, arguments);
                };
              })()
            ),
            children: [
              (0, c.jsxs)("div", {
                className: "space-y-6",
                children: [
                  (0, c.jsx)("div", { children: (0, c.jsxs)(d.D, { field: "profile", fieldErrors: y, children: [(0, c.jsx)(z.F, { identifier: "slug", label: "Username", className: "mt-1", children: (0, c.jsx)(o.I, { id: "slug", disabled: h, autoComplete: "username", required: !0, className: "form-input-box", defaultValue: String((null === g || void 0 === g ? void 0 : g.slug) || ""), placeholder: "Username", name: "username", register: H }) }), (0, c.jsx)(f.L, { className: "mt-1" })] }) }),
                  (0, c.jsx)("div", { children: (0, c.jsxs)(d.D, { field: "email", fieldErrors: y, children: [(0, c.jsx)(z.F, { identifier: "email", label: "Email", className: "mt-1", children: (0, c.jsx)(o.I, { id: "email", autoComplete: "email", type: "email", required: !0, disabled: h, className: "form-input-box", defaultValue: String((null === e || void 0 === e ? void 0 : e.email) || ""), placeholder: "Email", name: "email", register: H }) }), (0, c.jsx)(f.L, { className: "mt-1" })] }) }),
                  (0, c.jsx)("div", {
                    children: (0, c.jsxs)(d.D, {
                      field: "password",
                      fieldErrors: y,
                      children: [(0, c.jsxs)(z.F, { identifier: "password", label: "Password", className: "relative mt-1", children: [I ? (0, c.jsx)(o.I, { id: "password", type: "text", required: !0, disabled: h, className: "form-input-box", placeholder: "Password", name: "password", register: H }) : (0, c.jsx)(o.I, { id: "password", type: "password", required: !0, disabled: h, className: "form-input-box", placeholder: "Password", name: "password", register: H }), (0, c.jsx)("div", { className: "absolute bottom-0 right-0 flex h-[38px] cursor-pointer items-center pr-6 text-black", children: I ? (0, c.jsx)(u.t, { className: "h-4 w-4", onClick: K }) : (0, c.jsx)(C.X, { className: "h-4 w-4", onClick: K }) })] }), (0, c.jsx)(f.L, { className: "mt-1" })],
                    }),
                  }),
                ],
              }),
              (0, c.jsx)("div", {
                className: "mt-8",
                children: (0, c.jsx)(l.zx, {
                  onClick: function () {
                    return O({ event: "createAccountSubmit", label: "Create account" });
                  },
                  size: "large",
                  type: "submit",
                  name: "tos_agreed_at",
                  disabled: h,
                  value: new Date().toISOString(),
                  className: "track-btn-create-account w-full",
                  children: h ? "Creating Account" : "Create account",
                }),
              }),
              (0, c.jsxs)(P.uT, {
                variant: "small",
                color: "contrast-low",
                className: "mt-6 text-center md:mt-6",
                children: [
                  "By clicking create account you agree to the",
                  " ",
                  (0, c.jsx)(P.rU, {
                    onClick: function () {
                      return O({ event: "termsOfService", label: "terms of service" });
                    },
                    href: v.Z.tos(),
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
    15755: function (A, e, g) {
      "use strict";
      g.d(e, {
        I: function () {
          return c;
        },
        P: function () {
          return s;
        },
      });
      var B = g(26042),
        n = g(69396),
        r = g(99534),
        a = g(85893),
        w = (g(67294), g(94184)),
        t = g.n(w),
        c = function (A) {
          var e = A.name,
            g = A.register,
            n = A.defaultValue,
            w = A.hasError,
            c = A.registerOptions,
            s = void 0 === c ? {} : c,
            u = A.value,
            C = A.className,
            f = (0, r.Z)(A, ["name", "register", "defaultValue", "hasError", "registerOptions", "value", "className"]),
            d = u || "" === u ? { value: u } : { defaultValue: n };
          return (0, a.jsx)("input", (0, B.Z)({ className: t()("form-input-box h-11 bg-transparent px-2 py-2 font-interregular font-normal antialiased", { error: w }, C) }, f, d, g ? g(e, (0, B.Z)({}, s)) : { name: e }));
        },
        s = function (A) {
          var e = A.name,
            g = A.register,
            w = A.defaultValue,
            c = A.hasError,
            s = A.registerOptions,
            u = void 0 === s ? {} : s,
            C = A.value,
            f = A.className,
            d = A.children,
            z = (0, r.Z)(A, ["name", "register", "defaultValue", "hasError", "registerOptions", "value", "className", "children"]),
            o = C || "" === C ? { value: C } : { defaultValue: w };
          return (0, a.jsx)("select", (0, n.Z)((0, B.Z)({ required: !0, style: { fontSize: "14px" }, className: t()("form-input-box h-11 bg-transparent px-2 py-2 font-interregular font-normal antialiased", { error: c }, f) }, z, o, g ? g(e, (0, B.Z)({}, u)) : { name: e }), { children: d }));
        };
    },
    20049: function (A, e, g) {
      "use strict";
      g.d(e, {
        n: function () {
          return c;
        },
      });
      var B = g(26042),
        n = g(69396),
        r = g(99534),
        a = g(85893),
        w = g(67294),
        t = g(16654);
      function c(A) {
        var e = A.posterUrl,
          g = A.filename,
          c = A.src,
          s = (0, r.Z)(A, ["posterUrl", "filename", "src"]),
          u = (0, t.x)(),
          C = (0, w.useRef)(null),
          f = (0, w.useMemo)(
            function () {
              return g ? "".concat(u, "/").concat(g) : (null === (A = c) || void 0 === A ? void 0 : A.filename) ? "".concat(u, "/").concat(c.royalId || c.id) : "string" === typeof c ? c : void 0;
              var A;
            },
            [g, u, c]
          );
        return (0, a.jsx)("video", (0, n.Z)((0, B.Z)({ controls: !0, ref: C, controlsList: "nodownload", playsInline: !0, poster: e, style: { width: "100%", objectFit: "cover" } }, s), { children: (0, a.jsx)("source", { src: f, type: "video/mp4" }) }));
      }
    },
    37989: function (A, e, g) {
      "use strict";
      g.d(e, {
        F: function () {
          return u;
        },
      });
      var B = g(26042),
        n = g(85893),
        r = (g(67294), g(22578)),
        a = g(27233),
        w = g(51933),
        t = g(94184),
        c = g.n(t),
        s = { DIAMOND: "linear-gradient(87.65deg, #C1DEE4 -1.34%, rgba(193, 222, 228, 0.2) 73.33%, #C1DEE4 104.02%)", PLATINUM: "linear-gradient(87.65deg, #CFD8E2 -1.34%, rgba(207, 216, 226, 0.2) 73.33%, #CFD8E2 104.02%)", GOLD: " linear-gradient(87.65deg, #EAD1A8 -1.34%, rgba(234, 209, 168, 0.2) 73.33%, #EAD1A8 104.02%)" };
      function u(A) {
        var e = A.width,
          t = void 0 === e ? 800 : e,
          u = A.height,
          C = void 0 === u ? 800 : u,
          f = A.className,
          d = A.showLevel,
          z = A.raised,
          o = A.style,
          v = void 0 === o ? {} : o,
          l = A.artworkAsset,
          P = (0, r.useFragment)(g(9515), A.tier),
          F = P.artworkAsset || l;
        return F
          ? (0, n.jsxs)("figure", { style: (0, B.Z)({ width: t, minHeight: C }, v), className: c()({ "drop-shadow-md": z }, f), children: [(0, n.jsx)(a.E, { width: 600, height: 600, src: F, imgixParams: { ar: "1:1", fit: "crop", w: 316, h: 316 } }), d && (0, n.jsx)("figcaption", { className: "px-4 py-1", style: { background: s[P.type] }, children: (0, n.jsxs)("div", { className: "flex place-content-between", children: [(0, n.jsx)(w.X6, { as: "h6", variant: "label", color: "contrast-low", className: "text-center", children: P.type }), P.edition.rightsAsset && (0, n.jsx)(w.X6, { as: "h6", variant: "label", color: "contrast-low", className: "text-center", children: P.edition.rightsAsset.typeLabel || P.edition.rightsAsset.type })] }) })] })
          : (0, n.jsx)("span", { children: "Image not found" });
      }
    },
    82443: function (A, e, g) {
      "use strict";
      g.d(e, {
        j: function () {
          return B.j;
        },
      });
      var B = g(35247);
    },
    19723: function (A, e, g) {
      "use strict";
      g.d(e, {
        P: function () {
          return t;
        },
      });
      var B = g(26042),
        n = g(69396),
        r = g(85893),
        a = g(85502),
        w = g(5506),
        t = (0, a.zo)(function (A) {
          return (0, r.jsx)("button", (0, n.Z)((0, B.Z)({}, A), { children: (0, r.jsx)(w.Z, { className: "h-5 w-5 cursor-pointer" }) }));
        }, "ease flex h-5 w-5 cursor-pointer items-center justify-center text-contrast-max transition hover:bg-contrast-max hover:text-contrast-max-inverse");
    },
    99114: function (A, e, g) {
      "use strict";
      g.d(e, {
        Q: function () {
          return u;
        },
      });
      var B = g(26042),
        n = g(69396),
        r = g(99534),
        a = g(85893),
        w = g(67294),
        t = g(56063),
        c = g(41664),
        s = g.n(c),
        u = (0, w.forwardRef)(function (A, e) {
          var g = A.href,
            w = A.children,
            c = (0, r.Z)(A, ["href", "children"]);
          return (0, a.jsx)(s(), { href: g, passHref: !0, ref: e, children: (0, a.jsx)(t.AN, (0, n.Z)((0, B.Z)({}, c), { children: w })) });
        });
      u.displayName = "LinkButton";
    },
    64499: function (A, e, g) {
      "use strict";
      g.d(e, {
        v: function () {
          return t;
        },
      });
      var B = g(29815),
        n = g(85893),
        r = g(67294),
        a = g(96375),
        w = g.n(a);
      function t(A) {
        var e = A.animationDuration,
          g = A.children,
          a = (0, r.useRef)(null),
          t = (0, r.useRef)(null),
          c = (0, r.useState)(1),
          s = c[0],
          u = c[1];
        return (
          (0, r.useEffect)(
            function () {
              var A,
                e,
                g = null === (A = a.current) || void 0 === A ? void 0 : A.offsetWidth,
                B = null === (e = t.current) || void 0 === e ? void 0 : e.offsetWidth;
              g && B && u(2 * Math.round(g / B));
            },
            [u]
          ),
          (0, n.jsx)("div", {
            style: { overflow: "hidden" },
            ref: a,
            children: (0, n.jsx)("div", {
              className: w().ticker,
              style: { animationDuration: e, display: "flex" },
              children: (0, n.jsx)("div", {
                ref: t,
                style: { display: "flex" },
                children: (0, B.Z)(Array(s)).map(function (A, e) {
                  return (0, n.jsx)("div", { children: g }, e);
                }),
              }),
            }),
          })
        );
      }
    },
    381: function (A, e, g) {
      "use strict";
      g.r(e),
        g.d(e, {
          __N_SSP: function () {
            return Mg;
          },
          default: function () {
            return Og;
          },
        });
      var B = g(85893),
        n = g(11163),
        r = g(67294),
        a = g(22578),
        w = g(51933),
        t = g(828),
        c = g(10521),
        s = g(13821),
        u = g(49395);
      var C = r.createContext(null);
      function f(A) {
        var e = (0, a.useFragment)(g(24680), A.edition);
        return (0, B.jsx)(C.Provider, { value: e, children: A.children });
      }
      var d = g(53743);
      function z() {
        var A = (function () {
          var A = (0, r.useContext)(C);
          if (!A) throw new Error("useEdition can only be used within Edition State Provider.");
          return A;
        })();
        return (0, r.useMemo)(
          function () {
            return A.tiers.filter(function (A) {
              var e;
              return [d.l$.UPCOMING, d.l$.SETUP, d.l$.READY, d.l$.ACTIVE].includes(null === (e = A.tierSale) || void 0 === e ? void 0 : e.status);
            });
          },
          [A.tiers]
        );
      }
      function o() {
        var A = z();
        return (0, r.useMemo)(
          function () {
            return A.reduce(function (A, e) {
              var g, B;
              return (null === (g = e.tierSale) || void 0 === g ? void 0 : g.presaleConfig) && A.push(e.tierSale.presaleConfig), (null === (B = e.tierSale) || void 0 === B ? void 0 : B.saleConfig) && A.push(e.tierSale.saleConfig), A;
            }, []).sort(function (A, e) {
              return new Date(A.startsAt).getTime() - new Date(e.startsAt).getTime();
            });
          },
          [A]
        );
      }
      function v() {
        var A = o(),
          e = (0, r.useState)(
            (function (A) {
              var e = new Date();
              return (
                A.find(function (A) {
                  return "PrimeTierSaleStrategyDrawing" === A.__typename ? e < new Date(A.closesAt) : e < new Date(A.startsAt);
                }) || null
              );
            })(A)
          ),
          g = e[0],
          B = e[1];
        return (
          (0, r.useEffect)(
            function () {
              var e = setInterval(function () {
                var e = A.find(function (A) {
                  var e = new Date();
                  return "PrimeTierSaleStrategyDrawing" === A.__typename ? e < new Date(A.closesAt) : e < new Date(A.startsAt);
                });
                e && B(e);
              }, 1e3);
              return function () {
                clearInterval(e);
              };
            },
            [A]
          ),
          g
        );
      }
      var l = function (A) {
          var e = A.startTime,
            g = A.isDropDraw,
            n = A.setIsTimerActive,
            a = e ? new Date(e) : new Date(),
            c = (0, u.ir)({ expireAt: a }),
            s = c.remainingBreakdown,
            C = c.remaining,
            f = c.started,
            d = (0, t.Z)(
              (function (A) {
                return [new Intl.DateTimeFormat("en-US", { month: "long" }).format(A), A.getDate(), A.toLocaleTimeString([], { timeStyle: "short" }), A.toLocaleTimeString([], { timeZoneName: "short" }).split(" ")[2]];
              })(a),
              4
            ),
            z = d[0],
            o = d[1],
            v = d[2],
            l = d[3],
            P = s.totalHours <= 24;
          return (
            (0, r.useEffect)(
              function () {
                f && 0 === C && n(!1);
              },
              [C, n, f]
            ),
            (0, B.jsx)("div", { className: "flex justify-center px-6", children: (0, B.jsx)("div", { className: "flex", children: P ? (0, B.jsxs)(w.jb, { className: "uppercase text-brandsecondary-10", color: "unset", variant: "large", children: [g ? "Ending In" : "Dropping In", " ", s.hours, ":", s.minutes, ":", s.seconds] }) : (0, B.jsxs)(w.jb, { className: "uppercase text-brandsecondary-10", color: "unset", variant: "large", children: [g ? "Enter Before" : "Dropping", " ", z, " ", o, " At ", v, " ", l] }) }) })
          );
        },
        P = function (A) {
          var e = A.startTime,
            g = A.isDropDraw,
            n = A.isTimerActive,
            a = A.setIsTimerActive,
            w = (0, r.useState)(!1),
            t = w[0],
            u = w[1],
            C = (0, c.v)().scrollY;
          return (
            (0, r.useEffect)(
              function () {
                return C.onChange(function (A) {
                  A > 20 && !t ? u(!0) : A < 20 && t && u(!1);
                });
              },
              [t, C]
            ),
            (0, B.jsx)(s.E.div, { initial: { bottom: "-100px" }, animate: t && n ? { bottom: 0 } : { bottom: "-100px" }, transition: { duration: 0.4 }, className: "fixed left-0 bottom-0 m-auto hidden w-full justify-center border-t-.5 bg-white py-3 md:flex", children: (0, B.jsx)(l, { startTime: e, isDropDraw: g, setIsTimerActive: a }) })
          );
        };
      function F() {
        var A = v(),
          e = "PrimeTierSaleStrategyDrawing" === (null === A || void 0 === A ? void 0 : A.__typename),
          g = e ? A.closesAt : null === A || void 0 === A ? void 0 : A.startsAt,
          n = (0, u.FS)().device,
          a = "mobile" === (null === n || void 0 === n ? void 0 : n.type),
          w = new Date() < new Date(g),
          t = (0, r.useState)(w),
          c = t[0],
          C = t[1];
        return w ? (0, B.jsxs)(B.Fragment, { children: [(0, B.jsx)(s.E.div, { animate: !c && { opacity: 0, height: 0 }, transition: { duration: 0.4 }, className: "fixed left-0 top-[60px] m-auto flex w-full border-b-.5 bg-white py-3 md:relative md:top-0", children: (0, B.jsx)("div", { className: "inline-block w-full", children: (0, B.jsx)(l, { startTime: g, isDropDraw: e, setIsTimerActive: C }) }) }), !a && (0, B.jsx)(P, { startTime: g, isDropDraw: e, setIsTimerActive: C, isTimerActive: c })] }) : null;
      }
      var j,
        Y = r.forwardRef(function (A, e) {
          return r.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 2, stroke: "currentColor", "aria-hidden": "true", ref: e }, A), r.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 5l7 7-7 7" }));
        }),
        i = g(89584),
        D = g(93221),
        G = g(56063);
      function x() {
        return (0, B.jsx)("div", { className: "flex items-center justify-center", children: (0, B.jsxs)("div", { className: "w-full", children: [(0, B.jsx)(w.X6, { className: "text-center uppercase", variant: "h6", color: "contrast-default", children: "How this drop works" }), (0, B.jsx)("div", { className: "mb-8 mt-6 h-[1px] w-full bg-line-0" })] }) });
      }
      function b(A) {
        var e = A.copy,
          g = e.title,
          n = e.body,
          r = A.position;
        return (0, B.jsxs)("div", { className: "mb-8 flex", children: [(0, B.jsx)("div", { className: "mt-1 mr-4 flex h-6 w-6 items-center justify-center rounded-full bg-brandsecondary-10", children: (0, B.jsx)(w.uT, { variant: "small", className: "text-contrast-max-inverse", color: "unset", children: r + 1 }) }), (0, B.jsxs)("div", { className: "flex-1", children: [(0, B.jsx)(w.uT, { variant: "small", weight: "bold", children: g }), (0, B.jsx)(w.uT, { variant: "small", children: n })] })] });
      }
      !(function (A) {
        (A.CREDIT_CARD = "creditcard"), (A.CRYPTO = "crypto"), (A.NOOP = "noop");
      })(j || (j = {}));
      var M = [
        { title: "Submit an entry for a token", body: "You\u2019ll see a hold on your card for the entry. Enter up to 5 times. Once you submit, it can\u2019t be changed." },
        { title: "Entries are selected at random", body: "Once the drop ends, entries are selected at random to receive a token." },
        { title: "Check your inbox", body: "If an entry is selected, your card will be charged and the token is yours. Entries are selected at random after the drop ends." },
      ];
      function O(A) {
        var e = A.next,
          g = A.submitting,
          n = A.done;
        return (0, B.jsxs)(B.Fragment, {
          children: [
            (0, B.jsx)(x, {}),
            (0, B.jsx)("div", {
              className: "mb-10",
              children: M.map(function (A, e) {
                return (0, B.jsx)(b, { copy: A, position: e }, e);
              }),
            }),
            (0, B.jsx)(G.zx, {
              onClick: function () {
                e(j.CREDIT_CARD);
              },
              size: "large",
              variant: "primary",
              className: "w-full",
              disabled: g,
              children: g ? "Submitting" : n ? "done" : "Next",
            }),
          ],
        });
      }
      function E() {
        var A = (0, r.useState)(!1),
          e = A[0],
          g = A[1],
          n = v(),
          a = "PrimeTierSaleStrategyDrawing" === (null === n || void 0 === n ? void 0 : n.__typename),
          t = (0, r.useCallback)(
            function () {
              g(!e);
            },
            [e]
          );
        return a ? (0, B.jsxs)("div", { className: "pb-7", children: [(0, B.jsxs)(w.uT, { weight: "bold", variant: "large", className: "cursor-pointer text-center", color: "interactive-1", onClick: t, children: ["Learn how this drop works", " ", (0, B.jsx)(Y, { className: "inline-block h-5 w-5" })] }), (0, B.jsxs)(i.u, { onClose: t, open: e, header: null, className: "sm:max-w-modal-sm", children: [(0, B.jsx)(D.x, { onClose: t }), (0, B.jsx)(O, { next: t, submitting: !1, done: !0 })] })] }) : null;
      }
      var I = g(45733),
        Q = g(6990);
      function X(A) {
        var e = (0, a.useFragment)(g(16761), A.contributor).profile;
        return e
          ? (0, B.jsx)("li", {
              className: "block",
              children: (0, B.jsx)("div", {
                className: "flex items-center justify-between pt-2",
                children: (0, B.jsxs)("div", { className: "flex items-center gap-2", children: [e.avatarAsset ? (0, B.jsx)("figure", { children: (0, B.jsx)(I.q, { src: e.avatarAsset, width: 40, height: 40, round: !0 }) }) : (0, B.jsx)("div", { style: { width: 40, height: 40, borderRadius: "100%" }, className: "default-avatar" }), (0, B.jsxs)("div", { className: "grid", children: [(0, B.jsx)(w.rU, { href: Q.Z.profile(e.slug || "_unknown"), children: e.name && (0, B.jsx)(w.uT, { as: "h6", className: "hover: text-contrast-default hover:text-opacity-40 md:text-white", color: "unset", variant: "large", children: e.name }) }), (0, B.jsx)(w.uT, { variant: "small", className: "md:text-white md:text-opacity-70", color: "contrast-low", children: "Artist" })] })] }),
              }),
            })
          : null;
      }
      function W(A) {
        var e = (0, a.useFragment)(g(39773), A.edition);
        return (0, B.jsx)("ul", {
          className: "mb-2",
          children: e.contributors.map(function (A, e) {
            return (0, B.jsx)(X, { contributor: A }, e);
          }),
        });
      }
      function H(A) {
        var e = (0, a.useFragment)(g(6615), A.spotify);
        return (0, B.jsx)("iframe", { src: e.url, width: "100%", height: "SINGLE" !== A.type ? "200" : "80", frameBorder: "0", allow: "encrypted-media", title: e.title, className: "rounded-lg" });
      }
      function m(A) {
        var e = A.split("").length;
        return e <= 9 ? "7rem" : e > 9 ? "5.5rem" : void 0;
      }
      function V(A) {
        var e,
          n,
          r,
          t,
          c = (0, a.useFragment)(g(22727), A.edition),
          s = c.description;
        return (0, B.jsxs)("div", {
          className: "relative flex h-full flex-col justify-end pt-4 md:pt-0",
          children: [
            (0, B.jsx)("div", { className: "absolute top-0 left-0 z-10 w-full", children: (0, B.jsx)(F, {}) }),
            (0, B.jsx)("div", {
              children: (0, B.jsxs)("div", {
                className: "md:px-12 md:pb-12",
                children: [(0, B.jsx)(w.X6, { variant: "h5", as: "h2", className: "uppercase sm:block", color: "contrast-default-inverse", children: (null === (e = c.rightsAsset) || void 0 === e ? void 0 : e.typeLabel) || (null === (n = c.rightsAsset) || void 0 === n ? void 0 : n.type) }), (0, B.jsx)(w.X6, { variant: "h1", as: "h1", className: "mb-6 hidden uppercase md:block", style: { fontSize: m(c.title), marginLeft: "-7px" }, children: c.title }), (0, B.jsx)(w.X6, { variant: "h3", as: "h1", className: "mb-1 uppercase md:hidden", children: c.title }), (0, B.jsx)("div", { className: "md:hidden", children: (0, B.jsx)(W, { edition: c }) }), (0, B.jsx)(w.uT, { variant: "large", as: "h2", className: "mb-4 mt-4 whitespace-pre-wrap", children: s })],
              }),
            }),
            (0, B.jsx)("div", { className: "my-8 md:mb-7 md:pl-12 md:pr-12", children: (null === (r = c.embeds) || void 0 === r ? void 0 : r.spotify) && (0, B.jsx)(H, { type: (null === (t = c.rightsAsset) || void 0 === t ? void 0 : t.type) || "SINGLE", spotify: c.embeds.spotify }) }),
            (0, B.jsx)(E, {}),
          ],
        });
      }
      var h = g(27233),
        N = g(20049);
      function K(A) {
        var e,
          n,
          w = (0, a.useFragment)(g(92920), A.edition),
          t = w.permalink,
          c = (0, r.useState)(!1),
          s = c[0],
          u = c[1],
          C = (0, r.useState)(!1),
          f = C[0],
          d = C[1];
        return (
          (0, r.useEffect)(
            function () {
              var A = window.innerWidth < 700;
              t &&
                !A &&
                setTimeout(function () {
                  u(!0);
                }, 10);
            },
            [t]
          ),
          (0, B.jsxs)("div", {
            className: "relative h-full w-full",
            children: [
              (0, B.jsx)("div", { className: "hidden md:flex", style: { position: "absolute", zIndex: 1, top: "28px", left: "28px" }, children: (0, B.jsx)(W, { edition: w }) }),
              (0, B.jsxs)("div", {
                className: "z-0",
                style: { position: "relative", overflow: "hidden", width: "100%", height: "100%" },
                children: [
                  (null === (e = w.heroVideoAsset) || void 0 === e ? void 0 : e.downloadUrl) &&
                    s &&
                    (0, B.jsx)(
                      N.n,
                      {
                        autoPlay: !0,
                        playsInline: !0,
                        muted: !0,
                        loop: !0,
                        controls: !1,
                        onLoadedData: function () {
                          d(!0);
                        },
                        className: "object-cover transition-opacity",
                        style: { opacity: f ? 1 : 0, position: "absolute", width: "auto", minWidth: "100%", minHeight: "100%", top: 0, left: 0, zIndex: 11, transitionDuration: "1000ms" },
                        src: w.heroVideoAsset.downloadUrl,
                      },
                      "editionCoverVideo"
                    ),
                  w.heroAsset && (0, B.jsx)(h.E, { className: "absolute h-full w-full object-cover", src: w.heroAsset, height: 3, width: 3 }),
                  w.heroAsset && (0, B.jsx)(h.E, { className: "absolute z-10 h-full w-full object-cover", src: w.heroAsset, height: 821, width: 821 }),
                ],
              }),
              w.heroAsset && (0, B.jsx)("div", { className: "absolute inset-0 flex items-center justify-center", style: { background: "linear-gradient(180deg, #000000 -66.72%, rgba(53, 68, 53, 0) 99.93%)" }, children: (0, B.jsx)("div", { className: "transition-all duration-500", style: { width: "212px", boxShadow: "0 0 25px rgba(0, 0, 0, 0.35)" }, children: (null === (n = w.rightsAsset) || void 0 === n ? void 0 : n.heroAsset) && (0, B.jsx)("figure", { style: { width: "212px", minHeight: "212px" }, children: (0, B.jsx)(h.E, { src: w.rightsAsset.heroAsset, width: 212, height: 212, imgixParams: { ar: "1:1", fit: "crop", dpr: 2 } }) }) }) }),
            ],
          })
        );
      }
      function y(A) {
        var e = (0, a.useFragment)(g(47312), A.edition);
        return (0, B.jsx)("div", { children: (0, B.jsxs)("section", { className: "grid min-h-[700px] grid-cols-1 border-b-black md:border-b-.5 lg:grid-cols-40-60", children: [(0, B.jsx)("main", { className: "h-[400px] min-h-[400px] grid-flow-col md:h-auto md:min-h-[770px]", children: (0, B.jsx)(K, { edition: e }) }), (0, B.jsx)("aside", { className: "mx-4 md:mx-0 md:block", children: (0, B.jsx)(V, { edition: e }) })] }) });
      }
      var q = g(38456),
        T = g.n(q);
      function p(A) {
        var e = A.aboutDescription;
        return (0, B.jsxs)("div", { children: [(0, B.jsxs)(w.X6, { variant: "h5", as: "h3", className: "mb-3 uppercase", children: [(0, B.jsx)("span", { role: "img", "aria-label": "About This Track", children: "\ud83c\udfb5" }), "About This Track"] }), (0, B.jsx)(T(), { className: "mb-8 text-left", children: e })] });
      }
      function U(A) {
        var e = A.pricingDescription;
        return (0, B.jsxs)("div", { children: [(0, B.jsxs)(w.X6, { variant: "h5", as: "h3", className: "mb-3 uppercase", children: [(0, B.jsxs)("span", { role: "img", "aria-label": "Pricing", children: ["\ud83c\udff7\ufe0f", " "] }), "Pricing"] }), (0, B.jsx)(T(), { className: "mb-3 text-left", children: e })] });
      }
      function Z(A) {
        var e = A.legalDescription;
        return (0, B.jsx)("div", { children: (0, B.jsxs)(w.uT, { variant: "large", className: "text-contrast-low", color: "unset", children: [e, " ", (0, B.jsx)(w.rU, { href: "/legal/risks", variant: "primary", weight: "bold", children: "here" }), "."] }) });
      }
      function R(A) {
        var e = (0, a.useFragment)(L, A.edition);
        return e.aboutDescription || e.pricingDescription || e.legalDescription ? (0, B.jsxs)(B.Fragment, { children: [(0, B.jsx)("div", { className: "m-auto mt-6 h-1 w-full max-w-[960px] border-t" }), (0, B.jsxs)("div", { className: "m-auto max-w-[960px] pb-6 pt-12", children: [(0, B.jsx)(w.X6, { variant: "h3", as: "h2", className: "mb-6 uppercase", children: "Details" }), (0, B.jsxs)("div", { children: [e.aboutDescription ? (0, B.jsx)(p, { aboutDescription: e.aboutDescription }) : null, e.pricingDescription ? (0, B.jsx)(U, { pricingDescription: e.pricingDescription }) : null, e.legalDescription ? (0, B.jsx)(Z, { legalDescription: e.legalDescription }) : null] })] })] }) : null;
      }
      var L = g(44220),
        k = g(92077),
        J = g.n(k),
        S = g(85944);
      function _(A) {
        var e = (0, a.useFragment)(g(63879), A.edition),
          n = e.tiers.reduce(
            function (A, e) {
              var g,
                B,
                n,
                r,
                a = "Coming Soon" === (0, S.Y)(null === (g = e.tierSale) || void 0 === g ? void 0 : g.status),
                w = e.maxSupply,
                t = Number((null === (B = e.tierSale) || void 0 === B ? void 0 : B.availableCount) || 0),
                c = Number(e.maxSupply),
                s = c - t,
                u = Number((null === (n = e.tierSale) || void 0 === n || null === (r = n.saleConfig) || void 0 === r ? void 0 : r.price) || 0);
              return a && ((t = w), (c = w)), { tiersCount: ++A.tiersCount, remaining: A.remaining + t, total: A.total + c, raised: a ? 0 : A.raised + s * u };
            },
            { raised: 0, remaining: 0, total: 0, tiersCount: 0 }
          ),
          r = e.contributors.reduce(function (A, e) {
            return e.royaltyRightsPercentage ? A + Number(e.royaltyRightsPercentage) : A;
          }, 0);
        return (0, B.jsxs)("div", {
          className: "grid gap-4 border-.5 p-4 md:grid-cols-3",
          children: [
            (0, B.jsx)("div", { className: "col-span-1 flex border-b-.5 border-r-.5 pb-4 md:border-b-0 md:pb-0", children: (0, B.jsxs)("div", { className: "md:mr-8", children: [(0, B.jsx)(w.uT, { as: "h4", variant: "small", className: "uppercase", children: "Total Tokens" }), (0, B.jsx)(w.X6, { className: "pt-2", as: "h4", variant: "h4", children: J()(n.total).format("0,0") }), (0, B.jsxs)(w.uT, { as: "h4", variant: "small", color: "contrast-low", className: "pt-1 uppercase", children: [n.tiersCount, " Tier", n.tiersCount > 1 && "s"] })] }) }),
            (0, B.jsx)("div", { className: "col-span-1 flex border-b-.5 pb-4 md:border-b-0 md:border-r-.5 md:pb-0 md:pl-4", children: (0, B.jsxs)("div", { className: "md:mr-8", children: [(0, B.jsx)(w.uT, { as: "h4", variant: "small", className: "uppercase", children: "Total ownership offered" }), (0, B.jsxs)(w.X6, { className: "pt-2", as: "h4", variant: "h4", children: [r, "%"] }), (0, B.jsx)(w.uT, { as: "h4", variant: "small", color: "contrast-low", className: "pt-1 uppercase", children: "Streaming royalty" })] }) }),
            (0, B.jsx)("div", { className: "col-span-1 flex md:pl-4", children: (0, B.jsxs)("div", { className: "mr-8", children: [(0, B.jsx)(w.uT, { as: "h4", variant: "small", className: "pt-1 uppercase", children: "Amount raised" }), (0, B.jsx)(w.X6, { className: "pt-2", as: "h4", variant: "h4", children: n.raised ? "".concat(J()(n.raised).format(n.raised >= 1e3 ? "$0,0ak" : "$0,0")) : "$--" }), (0, B.jsx)(w.uT, { as: "h4", variant: "small", color: "contrast-low", className: "uppercase", children: "USD" })] }) }),
          ],
        });
      }
      function $(A) {
        var e = (0, a.useFragment)(g(64920), A.edition);
        return (0, B.jsx)("div", { children: (0, B.jsx)("div", { className: "flex flex-col", children: (0, B.jsx)(_, { edition: e }) }) });
      }
      var AA = g(90020),
        eA = { "nas-rare": { title: "View Collection", href: "https://opensea.io/collection/royal-ldas?search[sortAscending]=true&search[sortBy]=PRICE&search[stringTraits][0][name]=Artist&search[stringTraits][0][values][0]=Nas&search[stringTraits][1][name]=Edition&search[stringTraits][1][values][0]=Rare" }, "nas-ultrablack": { title: "View Collection", href: "https://opensea.io/collection/royal-ldas?search[sortAscending]=true&search[sortBy]=PRICE&search[stringTraits][0][name]=Artist&search[stringTraits][0][values][0]=Nas&search[stringTraits][1][name]=Edition&search[stringTraits][1][values][0]=Ultra%20Black" } };
      function gA(A) {
        var e = (function (A) {
          var e,
            g,
            B,
            n,
            a = A.tiers[0].chainContract,
            w = null === a || void 0 === a ? void 0 : a.address,
            t = null === a || void 0 === a || null === (e = a.network) || void 0 === e || null === (g = e.explorers) || void 0 === g || null === (B = g[0]) || void 0 === B ? void 0 : B.url,
            c = null === (n = A.contractAsset) || void 0 === n ? void 0 : n.downloadUrl,
            s = [],
            u = eA[A.permalink],
            C = (function () {
              var A = o();
              return (0, r.useMemo)(
                function () {
                  return A.some(function (A) {
                    return "PrimeTierSaleStrategyDrawing" === A.__typename;
                  });
                },
                [A]
              );
            })();
          A.title && s.push({ name: "Edition", value: A.title });
          if (a) {
            var f;
            s.push({ name: "Blockchain", value: (null === (f = a.network) || void 0 === f ? void 0 : f.name) || "--" }), w && s.push({ name: "Contract Address", value: (0, AA.F)(w), href: t ? "".concat(t, "/address/").concat(w, "/advanced#code") : "" });
          }
          u && s.push({ name: "OpenSea", value: "DeMuse LDAs", href: u.href });
          c && s.push({ name: "Legal", value: "Read Now", href: c });
          C && s.push({ name: "Drop Rules", value: "Read Now", href: "/legal/drop-submission-terms" });
          "thechainsmokers-sofarsogood" === A.permalink && s.push({ name: "Drop Terms", value: "Read Now", href: "https://royal-io-public-assets.s3.us-east-2.amazonaws.com/1765d7e8-23aa-4e0a-92f3-b58fa4eaf8b3.pdf" });
          return s;
        })((0, a.useFragment)(g(81187), A.edition));
        return (0, B.jsxs)("div", {
          children: [
            (0, B.jsx)("div", {
              className: "flex flex-col",
              children: e.map(function (A, e) {
                var g = A.name,
                  n = A.value,
                  r = A.href;
                return (0, B.jsxs)("div", { className: "mt-2 flex items-center", children: [(0, B.jsx)(w.uT, { variant: "large", children: g }), (0, B.jsx)("div", { className: "flex-1" }), (0, B.jsx)("div", { className: "flex-initial text-right font-interregular text-sm", children: r ? (0, B.jsx)(w.dL, { variant: "primary", to: r, target: "_blank", rel: "noreferrer", arrow: !0, children: n }) : (0, B.jsx)(w.uT, { variant: "large", children: n }) })] }, e);
              }),
            }),
            (0, B.jsx)("div", { className: "mx-auto my-10 w-[150px] border-t" }),
            (0, B.jsx)(w.uT, { variant: "large", color: "contrast-low", children: "Tokens sold by artists on DeMuse have embedded streaming royalty rights. The percentage varies depending on the token tier. To claim streaming royalties after they've accrued, the token must be in your wallet." }),
          ],
        });
      }
      var BA = [
        { image: "https://royal-io.imgix.net/d3941113-a40d-4e29-ad1f-08b8f432deb3.jpg?auto=formatq=40&w=180&h=180", heading: "Artists sell.", body: "Musicians use DeMuse to sell royalty ownership in their songs and give collectors access to special benefits." },
        { image: "https://royal-io.imgix.net/15613f66-a720-4fa1-80e2-d3705d94203d.jpg?auto=formatq=40&w=180&h=180", heading: "Collectors buy.", body: "Collectors can buy royalty ownership in songs directly from their favorite artists in the form of tokens." },
        { image: "https://royal-io.imgix.net/420271d2-c93e-4e9e-b346-20cd371d2b69.jpg?auto=formatq=40&w=180&h=180", heading: "Both rise.", body: "Collectors can claim royalties for the music they own after they\u2019ve accrued. When artists grow, everyone wins." },
      ];
      function nA(A) {
        var e = A.image,
          g = A.heading,
          n = A.body;
        return (0, B.jsxs)("div", { className: "mx-auto mb-16 flex max-w-[410px] flex-col items-center md:mx-0 md:max-w-none md:flex-row md:items-start", children: [(0, B.jsx)("div", { className: "mt-2 w-80 md:mb-0 md:mr-4", children: (0, B.jsx)(h.E, { width: 180, height: 180, className: "w-full", src: e }) }), (0, B.jsx)("div", { className: "flex h-full flex-col", children: (0, B.jsxs)("div", { className: "flex h-full flex-col justify-center", children: [(0, B.jsx)(w.X6, { variant: "h5", as: "h5", className: "mb-2 pt-4 text-center uppercase md:pt-0 md:text-left", children: g }), (0, B.jsx)(w.uT, { variant: "large", as: "h5", className: "text-center md:text-left", children: n })] }) })] });
      }
      function rA() {
        return (0, B.jsx)("div", {
          className: "grid-cols-3 gap-16 md:grid",
          children: BA.map(function (A, e) {
            return (0, B.jsx)(nA, { image: A.image, heading: A.heading, body: A.body }, e);
          }),
        });
      }
      var aA = function (A) {
          var e = A.className || "h-6 w-6";
          return (0, B.jsx)("svg", { className: e, width: "24", height: "24", viewBox: "0 0 24 24", children: (0, B.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.9999 6.46973L17.9999 11.4697L18.5303 12.0001L17.9999 12.5304L12.9999 17.5304L11.9393 16.4697L15.659 12.7501H5.46961V11.2501H15.659L11.9393 7.53039L12.9999 6.46973Z" }) });
        },
        wA = g(92985);
      function tA(A) {
        var e = (0, wA.z)().trackClick,
          n = (0, a.useFragment)(g(68554), A.blog);
        return (0, B.jsxs)("div", {
          className: "flex flex-col rounded border-2 bg-blackflat-2 p-6 md:flex-row",
          children: [
            (0, B.jsxs)("div", {
              className: "flex-1 content-center md:pr-24",
              children: [
                (0, B.jsx)(w.uT, { variant: "small", color: "contrast-low", weight: "bold", className: "mb-1 uppercase", children: n.artistName }),
                (0, B.jsx)(w.uT, { as: "h3", variant: "large", className: "mb-5", weight: "bold", style: { lineHeight: "31px", fontSize: "26px" }, children: n.title }),
                (0, B.jsxs)(w.dL, {
                  href: n.url,
                  variant: "primary",
                  weight: "semibold",
                  className: "font-interbold hidden md:flex",
                  onClick: function () {
                    e({ event: "clickEditionBlog", label: "View Blog", pageLocation: "EditionBlog", data: { title: n.url } });
                  },
                  children: ["Read Now ", (0, B.jsx)(aA, { className: "fill-interactive-1" })],
                }),
              ],
            }),
            (0, B.jsxs)("div", {
              className: "grid content-center md:justify-end",
              children: [
                n.imageUrl && (0, B.jsx)("img", { src: n.imageUrl, className: "w-full rounded" }),
                (0, B.jsxs)(w.dL, {
                  href: n.url,
                  variant: "primary",
                  weight: "bold",
                  className: "font-interbold mt-6 flex md:hidden",
                  onClick: function () {
                    e({ event: "clickEditionBlog", label: "View Blog", pageLocation: "EditionBlog", data: { title: n.url } });
                  },
                  children: ["Read Now ", (0, B.jsx)(aA, { className: "fill-interactive-1" })],
                }),
              ],
            }),
          ],
        });
      }
      var cA = g(29815),
        sA = g(47568),
        uA = g(34051),
        CA = g.n(uA),
        fA = g(64343),
        dA = g(32811),
        zA = g(26042),
        oA = g(99534),
        vA = g(61431),
        lA = g(69028),
        PA = g(42472),
        FA = g(80884),
        jA = g(93189),
        YA = g(47449),
        iA = g(7569);
      function DA(A) {
        var e = A.supportedChainId,
          g = A.onCancel;
        (0, jA.Z)({ name: "connectPolygonModalScreen" });
        var n = (0, lA.h)(),
          a = (0, PA.x_)().newToast,
          t = (0, wA.z)(),
          c = t.trackClick,
          s = t.track,
          u = t.trackError,
          C = (0, iA.JK)(e).chainName;
        (0, r.useEffect)(function () {
          (0, YA.Xi)("cci", "1");
        }, []);
        var f = (0, r.useCallback)(
          (0, sA.Z)(
            CA().mark(function A() {
              return CA().wrap(
                function (A) {
                  for (;;)
                    switch ((A.prev = A.next)) {
                      case 0:
                        if ((c({ event: "changeNetwork", label: "Add Polygon Network", pageLocation: "polygonMetaMaskModal", data: { chainId: e, chainName: C } }), !n.isInstalled)) {
                          A.next = 12;
                          break;
                        }
                        return (A.prev = 2), (A.next = 5), n.changeChain({ chainId: e });
                      case 5:
                        s({ event: "changeNetwork_Success", data: { chainId: e, chainName: C } }), (A.next = 12);
                        break;
                      case 8:
                        (A.prev = 8), (A.t0 = A.catch(2)), u({ event: "changeNetwork_Error", error: A.t0.message }), a({ type: FA.$.ERROR, message: A.t0.message, closeAfter: 3e3 });
                      case 12:
                      case "end":
                        return A.stop();
                    }
                },
                A,
                null,
                [[2, 8]]
              );
            })
          ),
          [c, n, e, C, u, s]
        );
        return (0, B.jsxs)(B.Fragment, {
          children: [
            (0, B.jsx)("div", { children: (0, B.jsx)("div", { className: "flex items-center justify-center", children: (0, B.jsxs)("div", { children: [(0, B.jsx)(w.X6, { className: "text-center", variant: "label", color: "contrast-default", children: "Change Wallet Network" }), (0, B.jsx)(w.uT, { className: "text-center", variant: "small", color: "contrast-default", children: "Required for purchase" }), (0, B.jsx)("div", { className: "my-6 h-[1px] w-full bg-line-0" }), (0, B.jsx)(w.uT, { className: "text-center", variant: "small", color: "contrast-default", children: "You\u2019ve successfully connected to Metamask but this asset is available on a different network. To proceed, connect to the appropriate network." })] }) }) }),
            (0, B.jsxs)(G.zx, { onClick: f, size: "large", variant: "primary", className: "mt-6 w-full", children: ["Add ", C, " Network"] }),
            (0, B.jsx)(G.zx, { onClick: g, className: "mt-4 w-full uppercase", size: "large", variant: "link", children: "Cancel" }),
          ],
        });
      }
      var GA = g(88767),
        xA = g(9669),
        bA = g.n(xA);
      var MA,
        OA = function () {
          return (0, B.jsxs)("svg", {
            width: "179",
            height: "120",
            viewBox: "0 0 179 120",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            children: [
              (0, B.jsx)("rect", { x: "0.945312", y: "0.976562", width: "177.221", height: "118.147", fill: "url(#pattern0)" }),
              (0, B.jsxs)("defs", {
                children: [
                  (0, B.jsx)("pattern", { id: "pattern0", patternContentUnits: "objectBoundingBox", width: "1", height: "1", children: (0, B.jsx)("use", { xlinkHref: "#image0_880_44452", transform: "scale(0.000267094)" }) }),
                  (0, B.jsx)("image", {
                    id: "image0_880_44452",
                    width: "3744",
                    height: "2496",
                    xlinkHref:
                  }),
                ],
              }),
            ],
          });
        },
        EA = function () {
          return (0, B.jsxs)("svg", {
            width: "82",
            height: "90",
            viewBox: "0 0 82 90",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            children: [
              (0, B.jsxs)("g", {
                clipPath: "url(#clip0_874_30608)",
                children: [
                  (0, B.jsx)("rect", { x: "0.655273", y: "19.9141", width: "80.6897", height: "70.0862", rx: "2.32759", fill: "url(#paint0_linear_874_30608)" }),
                  (0, B.jsx)("rect", { x: "-13.5688", y: "-21.7236", width: "141.983", height: "141.983", fill: "url(#pattern0)", fillOpacity: "0.12" }),
                  (0, B.jsxs)("g", { clipPath: "url(#clip1_874_30608)", filter: "url(#filter0_d_874_30608)", children: [(0, B.jsx)("rect", { width: "93.3621", height: "28.4483", transform: "translate(0.655273 19.9141)", fill: "url(#paint1_linear_874_30608)" }), (0, B.jsx)("rect", { x: "-13.5688", y: "-21.7236", width: "141.983", height: "141.983", fill: "url(#pattern1)", fillOpacity: "0.12" }), (0, B.jsx)("rect", { x: "20.1465", y: "32.9268", width: "42.8049", height: "5.4878", fill: "#282828" })] }),
                  (0, B.jsx)("rect", { x: "1", y: "48", width: "80", height: "8", fill: "black", fillOpacity: "0.2" }),
                ],
              }),
              (0, B.jsx)("path", { d: "M46.6933 38.329C46.6092 38.3849 46.5104 38.4147 46.4092 38.4147H34.8682C34.6975 38.4147 34.5381 38.3301 34.4432 38.1891L19.4002 15.8267C19.2433 15.5934 19.3064 15.278 19.5411 15.122L40.5206 1.18339C40.7553 1.02746 41.0727 1.09014 41.2296 1.32338L59.8375 28.9851C59.9944 29.2183 59.9313 29.5338 59.6966 29.6898L46.6933 38.329Z", fill: "url(#paint2_linear_874_30608)" }),
              (0, B.jsxs)("defs", {
                children: [
                  (0, B.jsx)("pattern", { id: "pattern0", patternContentUnits: "objectBoundingBox", width: "0.364299", height: "0.364299", children: (0, B.jsx)("use", { xlinkHref: "#image0_874_30608", transform: "scale(0.00182149)" }) }),
                  (0, B.jsxs)("filter", {
                    id: "filter0_d_874_30608",
                    x: "0.655273",
                    y: "19.3867",
                    width: "94.9443",
                    height: "29.5029",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [(0, B.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }), (0, B.jsx)("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }), (0, B.jsx)("feOffset", { dx: "1.05464" }), (0, B.jsx)("feGaussianBlur", { stdDeviation: "0.263659" }), (0, B.jsx)("feComposite", { in2: "hardAlpha", operator: "out" }), (0, B.jsx)("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" }), (0, B.jsx)("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_874_30608" }), (0, B.jsx)("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_874_30608", result: "shape" })],
                  }),
                  (0, B.jsx)("pattern", { id: "pattern1", patternContentUnits: "objectBoundingBox", width: "0.364299", height: "0.364299", children: (0, B.jsx)("use", { xlinkHref: "#image0_874_30608", transform: "scale(0.00182149)" }) }),
                  (0, B.jsxs)("linearGradient", { id: "paint0_linear_874_30608", x1: "-25.6551", y1: "19.9141", x2: "30.2589", y2: "119.741", gradientUnits: "userSpaceOnUse", children: [(0, B.jsx)("stop", { stopColor: "#3C38FF" }), (0, B.jsx)("stop", { offset: "0.354167", stopColor: "#7879F1" }), (0, B.jsx)("stop", { offset: "1", stopColor: "#FFC700" })] }),
                  (0, B.jsxs)("linearGradient", { id: "paint1_linear_874_30608", x1: "-30.4424", y1: "5.3654e-07", x2: "-19.4999", y2: "59.3302", gradientUnits: "userSpaceOnUse", children: [(0, B.jsx)("stop", { stopColor: "#3C38FF" }), (0, B.jsx)("stop", { offset: "0.354167", stopColor: "#7879F1" }), (0, B.jsx)("stop", { offset: "1", stopColor: "#FFC700" })] }),
                  (0, B.jsxs)("linearGradient", { id: "paint2_linear_874_30608", x1: "28.3783", y1: "1.09766", x2: "37.2025", y2: "38.9776", gradientUnits: "userSpaceOnUse", children: [(0, B.jsx)("stop", { stopColor: "white" }), (0, B.jsx)("stop", { offset: "1", stopColor: "#A2A2DA" })] }),
                  (0, B.jsx)("clipPath", { id: "clip0_874_30608", children: (0, B.jsx)("rect", { x: "0.655273", y: "19.9141", width: "80.6897", height: "70.0862", rx: "2.32759", fill: "white" }) }),
                  (0, B.jsx)("clipPath", { id: "clip1_874_30608", children: (0, B.jsx)("rect", { width: "93.3621", height: "28.4483", fill: "white", transform: "translate(0.655273 19.9141)" }) }),
                  (0, B.jsx)("image", {
                    id: "image0_874_30608",
                    width: "200",
                    height: "200",
                    xlinkHref:
                  }),
                ],
              }),
            ],
          });
        };
      function IA(A) {
        var e = A.title;
        return (0, B.jsx)("div", { className: "mb-4 flex items-center justify-center", children: (0, B.jsxs)("div", { className: "w-full", children: [(0, B.jsx)(w.X6, { className: "text-center uppercase", variant: "h6", color: "contrast-default", children: e }), (0, B.jsx)("div", { className: "mb-8 mt-6 h-[1px] w-full bg-line-0" })] }) });
      }
      !(function (A) {
        (A.CREDIT_CARD = "creditcard"), (A.CRYPTO = "crypto"), (A.NOOP = "noop");
      })(MA || (MA = {}));
      var QA = function (A) {
        var e = A.illustration,
          g = A.copy;
        return (0, B.jsxs)("div", { children: [(0, B.jsx)("div", { className: "flex justify-center pt-4 pb-8", children: e }), (0, B.jsx)(w.uT, { variant: "large", className: "text-center", children: g })] });
      };
      function XA(A) {
        var e = A.noMoreEntries,
          g = A.next,
          n = A.onClose,
          r = A.submitting,
          a = e ? "No More Entries" : "Enter Up To 5 Times";
        return (0, B.jsxs)(B.Fragment, {
          children: [
            (0, B.jsx)(IA, { title: a }),
            (0, B.jsx)("div", { className: "mb-16", children: e ? (0, B.jsx)(QA, { illustration: (0, B.jsx)(EA, {}), copy: "You can only enter the draw 5 times. Check back soon to see if you\u2019ve won!" }) : (0, B.jsx)(QA, { illustration: (0, B.jsx)(OA, {}), copy: "Keep in mind that each entry will place a hold on your payment, and you\u2019ll be charged for entry that is selected." }) }),
            (0, B.jsx)(G.zx, {
              onClick: function () {
                e ? n() : g(MA.CREDIT_CARD);
              },
              size: "large",
              variant: "primary",
              className: "w-full",
              disabled: r,
              children: e ? "Got It" : r ? "Submitting" : "Continue",
            }),
          ],
        });
      }
      var WA,
        HA = g(15668);
      function mA(A) {
        var e,
          g = A.next,
          n = A.tierIds,
          a = A.entriesLimit,
          w = A.onClose,
          t = A.submitting,
          c = (function (A) {
            var e = (0, r.useState)(!0),
              g = e[0],
              B = e[1],
              n = (0, r.useState)(null),
              a = n[0],
              w = n[1],
              t = (0, r.useState)(null),
              c = t[0],
              s = t[1],
              u = (0, r.useCallback)(
                (0, sA.Z)(
                  CA().mark(function e() {
                    var g, n, r;
                    return CA().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return B(!0), (e.prev = 1), (g = A.join(",")), (e.next = 5), fetch("/api/deprecated/draw-entry?tierIds=".concat(g));
                            case 5:
                              return (n = e.sent), (e.next = 8), n.json();
                            case 8:
                              (r = e.sent), s(r.data), (e.next = 15);
                              break;
                            case 12:
                              (e.prev = 12), (e.t0 = e.catch(1)), w(e.t0);
                            case 15:
                              return (e.prev = 15), B(!1), e.finish(15);
                            case 18:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 12, 15, 18]]
                    );
                  })
                ),
                [A]
              );
            return (
              (0, r.useEffect)(
                function () {
                  u();
                },
                [u]
              ),
              { loading: g, error: a, data: c }
            );
          })(n),
          s = c.loading,
          u = c.error,
          C = c.data,
          f =
            (null === C || void 0 === C || null === (e = C.me) || void 0 === e
              ? void 0
              : e.drawingTierStats.reduce(function (A, e) {
                  return e.purchaseCount + A;
                }, 0)) || 0,
          d = f >= a;
        return (
          (0, r.useEffect)(
            function () {
              f > 1 && !d && g(WA.CREDIT_CARD);
            },
            [f, g, d]
          ),
          u ? (0, B.jsx)("p", { children: u.message }) : s ? (0, B.jsx)("div", { style: { minHeight: "387px" }, className: "flex items-center justify-center", children: (0, B.jsx)(HA.g, { loading: s }) }) : f > 0 ? (0, B.jsx)(XA, { noMoreEntries: d, next: g, onClose: w, submitting: t }) : (0, B.jsx)(O, { next: g, submitting: t })
        );
      }
      function VA(A) {
        var e = A.tierSale;
        if (!e) return null;
        var g = { sale: { isPresale: !1, saleConfig: e.saleConfig }, presale: { isPresale: !0, saleConfig: e.presaleConfig } },
          B = Object.values(g).find(function (A) {
            return (function (A) {
              var e = A.saleConfig;
              if (e) {
                var g = new Date(),
                  B = "PrimeTierSaleStrategyDrawing" === e.__typename ? e.closesAt : e.finishesAt,
                  n = B ? new Date(B) : null;
                if (g >= new Date(e.startsAt) && !(!!n && g >= n)) return !!A;
              }
            })(A);
          });
        return B || (e.presaleConfig ? g.presale : g.sale);
      }
      !(function (A) {
        (A.CREDIT_CARD = "creditcard"), (A.CRYPTO = "crypto"), (A.NOOP = "noop");
      })(WA || (WA = {}));
      var hA = g(90994),
        NA = g(52894),
        KA = g(94225),
        yA = KA.fC,
        qA = KA.xz,
        TA = (KA.Ee, g(69396)),
        pA = g(94184),
        UA = g.n(pA);
      function ZA(A) {
        return (0, B.jsx)(KA.AW, (0, TA.Z)((0, zA.Z)({}, A), { className: UA()("border-color-low-inverse absolute rounded-md border bg-base-0 shadow-xl", A.className) }));
      }
      var RA = g(14924);
      function LA(A) {
        return (0, B.jsx)(KA.Xi, (0, TA.Z)((0, zA.Z)({}, A), { className: UA()("whitespace-nowrap outline-none", A.className, (0, RA.Z)({ "cursor-pointer hover:bg-base-1": !A.disabled, "px-4 py-3": !A.spacing }, A.spacing || "", A.spacing)) }));
      }
      var kA,
        JA = g(25325),
        SA = g.n(JA);
      !(function (A) {
        (A.CREDIT_CARD = "creditcard"), (A.CRYPTO = "crypto"), (A.NOOP = "noop");
      })(kA || (kA = {}));
      var _A = { "User Claims Exhausted": "Looks like you already claimed a token. Only one per person, sorry.", "Claims Exhausted": "Sorry, all of the tokens have been claimed." };
      function $A(A) {
        (0, jA.Z)({ name: "editionPaymentSelectionWalletList" });
        var e = A.isNoopPayment ? kA.NOOP : kA.CREDIT_CARD;
        return (0, B.jsxs)("div", {
          children: [
            (0, B.jsx)("div", {
              className: "pb-4 pt-2",
              children: (0, B.jsx)(NA.B, {
                disableCopy: !0,
                selectedWallet: A.selectedWallet || void 0,
                supportedChainId: A.supportedChainId,
                itemClassName: "px-4",
                children: function (e) {
                  var g = e.walletList,
                    n = e.seletedWalletAddress,
                    r = e.selectedChainIcon;
                  return (0, B.jsx)("div", {
                    className: "flex flex-col items-center justify-center",
                    children: (0, B.jsx)(Ae, {
                      wallets: g,
                      selectedChainIcon: r,
                      seletedWalletAddress: n,
                      onClickWallet: function (e) {
                        A.setWalletSelection(e);
                      },
                    }),
                  });
                },
              }),
            }),
            (0, B.jsx)("div", { className: "mb-4 mt-4 h-[1px] w-full bg-line-0" }),
            (0, B.jsxs)("div", {
              className: "mt-4 flex flex-col",
              children: [
                (0, B.jsx)(G.zx, {
                  onClick: function () {
                    A.onCheckoutSubmit(e);
                  },
                  disabled: A.submitting,
                  size: "large",
                  variant: "primary",
                  children: A.submitting ? "Submitting" : "Continue",
                }),
                (0, B.jsx)(G.zx, { disabled: A.submitting, onClick: A.onBack, size: "large", variant: "link", className: "mt-4 uppercase", children: "Back" }),
              ],
            }),
          ],
        });
      }
      function Ae(A) {
        var e = A.seletedWalletAddress,
          g = A.wallets,
          n = A.onClickWallet,
          a = A.selectedChainIcon,
          t = (0, r.useRef)(null),
          c = (0, r.useState)(290),
          s = c[0],
          u = c[1];
        return (
          (0, r.useEffect)(function () {
            var A;
            u((null === (A = t.current) || void 0 === A ? void 0 : A.clientWidth) || 290);
          }, []),
          (0, B.jsxs)(yA, {
            children: [
              (0, B.jsx)(qA, { style: { width: "100%" }, children: (0, B.jsxs)("div", { ref: t, className: "flex w-full cursor-pointer items-center justify-between gap-2 border px-4 py-3", style: { backgroundColor: "#F7F7F7", border: "1px solid #EBEBEB" }, children: [(0, B.jsx)(w.X6, { variant: "label-lg", as: "h4", className: "uppercase", children: e ? (0, B.jsxs)("div", { className: "flex items-center", children: [a ? (0, B.jsx)(a, { className: "mr-2 h-4 w-4" }) : null, (0, B.jsx)(w.uT, { variant: "small", children: (0, AA.Z)(e, 10, 10) })] }) : "Select Wallet" }), (0, B.jsx)(hA.V, { className: "h-3 w-3" })] }) }),
              (0, B.jsx)(ZA, {
                children: (0, B.jsx)("div", {
                  style: { minWidth: s || 300 },
                  children: g.map(function (A, g) {
                    var r = A.address === e;
                    return (0, B.jsx)(
                      LA,
                      {
                        onClick: function (e) {
                          e.stopPropagation(), n(A);
                        },
                        children: (0, B.jsx)(NA.Z, { disableCopy: !0, wallet: A, active: r }),
                      },
                      g
                    );
                  }),
                }),
              }),
            ],
          })
        );
      }
      var ee = r.forwardRef(function (A, e) {
          return r.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", ref: e }, A), r.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", clipRule: "evenodd" }));
        }),
        ge = g(38264),
        Be = function (A) {
          var e = A.className || "h-6 w-6 flex items-center justify-center";
          return (0, B.jsxs)("svg", { className: e, width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: [(0, B.jsx)("rect", { width: "24", height: "24", fill: "transparent" }), (0, B.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.5 6.5H20.5V8H3.5V6.5ZM2 11V8V6.5V5H3.5H20.5H22V6.5V8V11V17.5V19H20.5H3.5H2V17.5V11ZM20.5 11V17.5H3.5V11H20.5ZM11 14H5V12.5H11V14ZM5 16H8V14.5H5V16Z", fill: "#000" })] });
        },
        ne = function (A) {
          var e = A.className || "h-6 w-6 flex items-center justify-center";
          return (0, B.jsxs)("svg", {
            className: e,
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            children: [
              (0, B.jsx)("path", { d: "M22 10.4199C22.0019 10.7096 21.9683 10.9984 21.9 11.2799C21.21 14.1899 17.04 16.4199 12 16.4199C6.48 16.4199 2 13.7399 2 10.4199C2 7.09992 6.48 4.41992 12 4.41992C17.52 4.41992 22 7.10992 22 10.4199Z", stroke: "#000", strokeWidth: "1.5", strokeMiterlimit: "10" }),
              (0, B.jsx)("path", { d: "M2 10.4299V13.5799C2 16.8899 6.48 19.5799 12 19.5799C17 19.5799 21.21 17.3399 21.9 14.4299C21.9683 14.1518 22.0019 13.8663 22 13.5799V10.4299", stroke: "#000", strokeWidth: "1.5", strokeMiterlimit: "10" }),
              (0, B.jsx)("path", { d: "M6 15.22V18.38", stroke: "#000", strokeWidth: "1.5", strokeMiterlimit: "10" }),
              (0, B.jsx)("path", { d: "M10 16.3V19.58", stroke: "#000", strokeWidth: "1.5", strokeMiterlimit: "10" }),
              (0, B.jsx)("path", { d: "M14 16.3V19.46", stroke: "#000", strokeWidth: "1.5", strokeMiterlimit: "10" }),
              (0, B.jsx)("path", { d: "M18 17.3V18.1", stroke: "#000", strokeWidth: "1.5", strokeMiterlimit: "10", strokeLinecap: "round" }),
            ],
          });
        },
        re = g(91689);
      function ae(A) {
        var e,
          n,
          r,
          t,
          c,
          s,
          C,
          f,
          z = (0, a.useFragment)(g(35292), A.tier);
        (0, jA.Z)({ name: "editionPaymentSelection" });
        var o = (0, u.Cv)().debitThreshold,
          v = A.onCancel,
          l = A.paymentChoice,
          P = A.submitting,
          F = A.onCheckoutSubmit,
          j = A.selectedWalletAddress,
          Y = A.cryptoDisabled,
          i = ("%other" !== (null === (e = z.tierSale) || void 0 === e || null === (n = e.saleConfig) || void 0 === n ? void 0 : n.__typename) && (null === (r = z.tierSale) || void 0 === r || null === (t = r.saleConfig) || void 0 === t ? void 0 : t.acceptablePaymentMethods)) || [],
          D = (null === i || void 0 === i ? void 0 : i.includes(d.DU.CRYPTO)) && 1 === i.length,
          x = "%other" !== (null === (c = z.tierSale) || void 0 === c || null === (s = c.saleConfig) || void 0 === s ? void 0 : s.__typename) && (null === (C = z.tierSale) || void 0 === C || null === (f = C.saleConfig) || void 0 === f ? void 0 : f.price),
          b = (o || 0 === o) && (x && Number(x)) >= o;
        return (0, B.jsxs)("div", {
          className: "pt-6",
          children: [
            (0, B.jsxs)("div", {
              className: "relative",
              children: [
                (0, B.jsx)("button", {
                  style: { boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.12)" },
                  disabled: D || P,
                  className: "transition-background flex h-16 w-full cursor-pointer items-center justify-between border-2 px-4 duration-150 hover:bg-base-1 ".concat(D || P ? "pointer-events-none bg-base-1" : ""),
                  onClick: function () {
                    F(kA.CREDIT_CARD);
                  },
                  children: (0, B.jsxs)("div", { className: "flex w-full items-center", children: [(0, B.jsx)(Be, {}), (0, B.jsx)(w.uT, { variant: "small", color: "contrast-default", className: "ml-4 capitalize", children: P && "creditcard" === l ? "Submitting" : b ? "Debit Card" : "Credit/Debit Card" })] }),
                }),
                D && (0, B.jsx)("div", { className: "absolute top-[22px] right-4", children: (0, B.jsx)(we, { paymentDisabled: "The Diamond tier token is only available for purchase with crypto. Please select Crypto to proceed.", eventType: "creditcardTooltip" }) }),
              ],
            }),
            (0, B.jsxs)("div", {
              className: "relative",
              children: [
                (0, B.jsx)("button", {
                  onClick: Y