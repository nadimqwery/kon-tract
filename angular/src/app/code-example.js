(window.webpackJsonp = window.webpackJsonp || []).push([
  [6], {
    zZvA: function (e, n, l) {
      "use strict";
      l.r(n);
      var t = l("CcnG"),
        i = function () {
          function e() {
            this._path = "", this.isAvoid = !1
          }
          return Object.defineProperty(e.prototype, "header", {
            get: function () {
              return this._header
            },
            set: function (e) {
              this._header = e, this.classes = {
                "headed-code": !!this.header,
                "simple-code": !this.header
              }
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "path", {
            get: function () {
              return this._path
            },
            set: function (e) {
              this._path = e, this.isAvoid = -1 !== this.path.indexOf(".avoid.")
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "hidecopy", {
            get: function () {
              return this._hidecopy
            },
            set: function (e) {
              this._hidecopy = null != e && "" + e != "false"
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "hyphenatedHideCopy", {
            set: function (e) {
              this.hidecopy = e
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "capitalizedHideCopy", {
            set: function (e) {
              this.hidecopy = e
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.ngAfterViewInit = function () {
            this.aioCode.code = this.content.nativeElement.innerHTML
          }, e
        }(),
        o = function () {
          return function () {
            this.customElementComponent = i
          }
        }(),
        u = l("xYTU"),
        a = l("0GXo"),
        r = l("Ip0R"),
        c = l("6CTB"),
        d = l("vARd"),
        b = l("vVVL"),
        p = l("/ck9"),
        h = l("vHPH"),
        s = t.pb({
          encapsulation: 2,
          styles: [],
          data: {}
        });

      function y(e) {
        return t.Hb(0, [(e()(), t.rb(0, 0, null, null, 1, "header", [], null, null, null, null, null)), (e()(), t.Fb(1, null, ["", ""]))], null, function (e, n) {
          e(n, 1, 0, n.component.header)
        })
      }

      function f(e) {
        return t.Hb(0, [t.Db(402653184, 1, {
          content: 0
        }), t.Db(402653184, 2, {
          aioCode: 0
        }), (e()(), t.rb(2, 0, [
          [1, 0],
          ["content", 1]
        ], null, 1, "div", [
          ["style", "display: none"]
        ], null, null, null, null, null)), t.zb(null, 0), (e()(), t.ib(16777216, null, null, 1, null, y)), t.qb(5, 16384, null, 0, r.k, [t.R, t.O], {
          ngIf: [0, "ngIf"]
        }, null), (e()(), t.rb(6, 0, null, null, 2, "aio-code", [], null, null, null, a.c, a.b)), t.qb(7, 278528, null, 0, r.i, [t.t, t.u, t.k, t.F], {
          ngClass: [0, "ngClass"]
        }, null), t.qb(8, 573440, [
          [2, 4]
        ], 0, c.a, [d.b, b.a, p.a, h.a], {
          hideCopy: [0, "hideCopy"],
          language: [1, "language"],
          linenums: [2, "linenums"],
          path: [3, "path"],
          region: [4, "region"],
          header: [5, "header"]
        }, null)], function (e, n) {
          var l = n.component;
          e(n, 5, 0, l.header), e(n, 7, 0, l.classes), e(n, 8, 0, l.hidecopy, l.language, l.linenums, l.path, l.region, l.header)
        }, null)
      }

      function g(e) {
        return t.Hb(0, [(e()(), t.rb(0, 0, null, null, 1, "code-example", [], [
          [2, "avoidFile", null]
        ], null, null, f, s)), t.qb(1, 4243456, null, 0, i, [], null, null)], null, function (e, n) {
          e(n, 0, 0, t.Ab(n, 1).isAvoid)
        })
      }
      var m = t.nb("code-example", i, g, {
          language: "language",
          linenums: "linenums",
          region: "region",
          header: "header",
          path: "path",
          hidecopy: "hidecopy",
          hyphenatedHideCopy: "hide-copy",
          capitalizedHideCopy: "hideCopy"
        }, {}, ["*"]),
        v = l("eDkP"),
        C = l("Fzqc"),
        H = l("4c35"),
        j = l("dWZg"),
        A = l("qAlS"),
        w = l("Wf4p"),
        x = l("ZYjt"),
        O = l("UodH"),
        P = l("V90o");
      l.d(n, "CodeExampleModuleNgFactory", function () {
        return _
      });
      var _ = t.ob(o, [], function (e) {
        return t.xb([t.yb(512, t.j, t.db, [
          [8, [u.a, u.b, a.a, m]],
          [3, t.j], t.y
        ]), t.yb(4608, r.m, r.l, [t.v, [2, r.x]]), t.yb(4608, v.a, v.a, [v.g, v.c, t.j, v.f, v.d, t.r, t.A, r.d, C.b, [2, r.g]]), t.yb(5120, v.h, v.i, [v.a]), t.yb(4608, b.a, b.a, [h.a]), t.yb(4608, p.a, p.a, []), t.yb(1073742336, r.c, r.c, []), t.yb(1073742336, C.a, C.a, []), t.yb(1073742336, H.g, H.g, []), t.yb(1073742336, j.b, j.b, []), t.yb(1073742336, A.c, A.c, []), t.yb(1073742336, v.e, v.e, []), t.yb(1073742336, w.e, w.e, [
          [2, w.b],
          [2, x.g]
        ]), t.yb(1073742336, w.g, w.g, []), t.yb(1073742336, O.c, O.c, []), t.yb(1073742336, d.e, d.e, []), t.yb(1073742336, P.a, P.a, []), t.yb(1073742336, o, o, [])])
      })
    }
  }
]);
//# sourceMappingURL=code-code-example-module-ngfactory.b4d3646f915134c86f1e.js.map
