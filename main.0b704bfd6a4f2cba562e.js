;(() => {
  "use strict"
  var t = {
      985: (t, e, n) => {
        t.exports = n.p + "9b59a2d3e4a4aa9e500a.mp3"
      }
    },
    e = {}
  function n(s) {
    var i = e[s]
    if (void 0 !== i) return i.exports
    var c = (e[s] = { exports: {} })
    return t[s](c, c.exports, n), c.exports
  }
  ;(n.g = (function () {
    if ("object" == typeof globalThis) return globalThis
    try {
      return this || new Function("return this")()
    } catch (t) {
      if ("object" == typeof window) return window
    }
  })()),
    (() => {
      var t
      n.g.importScripts && (t = n.g.location + "")
      var e = n.g.document
      if (!t && e && (e.currentScript && (t = e.currentScript.src), !t)) {
        var s = e.getElementsByTagName("script")
        s.length && (t = s[s.length - 1].src)
      }
      if (!t)
        throw new Error("Automatic publicPath is not supported in this browser")
      ;(t = t
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = t)
    })(),
    (() => {
      const t = function () {
        var t = document.createElement("header")
        return (
          t.classList.add("main-header"),
          (t.innerHTML = "<h1>Ejercicios del DOM</h1>"),
          t
        )
      }
      const e = (function () {
        function t(t) {
          var e = t.iconType,
            n = t.className,
            s = t.id
          ;(this.self = (function (t) {
            var e,
              n = t.iconType,
              s = t.className,
              i = t.id,
              c = document.createElement("span")
            return (
              i && c.setAttribute("id", i),
              c.classList.add("fas"),
              c.classList.add(n),
              s && (e = c.classList).add.apply(e, s.split(" ")),
              c
            )
          })({ iconType: e, className: n, id: s })),
            (this.iconType = e)
        }
        return (
          (t.prototype.switchIcon = function (t) {
            this.self.classList.contains(this.iconType)
              ? (this.self.classList.remove(this.iconType),
                this.self.classList.add(t))
              : (this.self.classList.remove(t),
                this.self.classList.add(this.iconType))
          }),
          t
        )
      })()
      var s = "fa-bars",
        i = "fa-times",
        c = function (t) {
          var e = document.createElement("div")
          return e.classList.add(r.className), e.append(t.self), e
        },
        r = (function () {
          function t(t) {
            void 0 === t &&
              (t = new e({ iconType: s, className: "menu-button__icon" })),
              (this.icon = t),
              (this.self = c(this.icon))
          }
          return (
            (t.prototype.clickEvent = function (t) {
              var e = t.menu
              this.icon.switchIcon(i), e.self.classList.toggle("hide")
            }),
            (t.className = "menu-button"),
            t
          )
        })()
      const a = r
      var o = function (t) {
          var e = t.href,
            n = void 0 === e ? "#" : e,
            s = t.innerHTML,
            i = document.createElement("a")
          return (
            i.classList.add(l.className),
            i.setAttribute("href", n),
            (i.innerHTML = s),
            i
          )
        },
        l = (function () {
          function t(t) {
            var e = t.href,
              n = void 0 === e ? "#" : e,
              s = t.innerHTML
            this.self = o({ href: n, innerHTML: s })
          }
          return (t.className = "menu-item"), t
        })()
      const u = l
      var d = function (t) {
          var e = t.itemsList,
            n = document.createElement("nav")
          n.classList.add(h.className)
          var s = document.createDocumentFragment()
          return (
            e.forEach(function (t) {
              return s.append(t.self)
            }),
            n.append(s),
            n
          )
        },
        h = (function () {
          function t(t) {
            var e = t.itemsList
            ;(this.itemsList = e),
              (this.self = d({ itemsList: this.itemsList }))
          }
          return (
            (t.prototype.clickEvent = function (t) {
              var e = t.icon,
                n = t.menu
              e.switchIcon(i), n.self.classList.add("hide")
            }),
            (t.className = "menu-list"),
            t
          )
        })()
      const m = h
      const f = function (t) {
        var e = t.children,
          n = void 0 === e ? [] : e
        ;(this.children = n),
          (this.self = (function (t) {
            var e = t.children,
              n = document.createDocumentFragment()
            return (
              Array.isArray(e)
                ? e.forEach(function (t) {
                    return n.appendChild(t.self)
                  })
                : n.appendChild(e.self),
              n
            )
          })({ children: this.children }))
      }
      var p = function (t) {
          var e = t,
            n = "",
            s = /(a|p)m/i.test(t)
          if (s) {
            var i = t.split(/\s/i)
            ;(e = i[0]), (n = i[1])
          }
          var c = e.split(":"),
            r = c[0],
            a = c[1],
            o = c[2],
            l = {
              hours:
                '<span class="' + L.className + '-part hours">' + r + "</span>",
              minutes:
                '<span class="' +
                L.className +
                '-part minutes">' +
                a +
                "</span>",
              seconds:
                '<span class="' +
                L.className +
                '-part seconds">' +
                o +
                "</span>",
              separator:
                '<span class="' + L.className + '-part separator">:</span>'
            }
          return (
            s &&
              (l.format =
                '<span class="' +
                L.className +
                '-part format">' +
                n +
                "</span>"),
            l
          )
        },
        v = function (t) {
          var e = t.hours,
            n = t.minutes,
            s = t.seconds,
            i = t.separator,
            c = t.format,
            r = document.createElement("div")
          return (
            r.classList.add(L.className),
            r.classList.add("hide"),
            (r.innerHTML = "" + e + i + n + i + s + (c || "")),
            r
          )
        },
        L = (function () {
          function t() {
            ;(this.isShown = !1),
              (this.currTime = p(new Date().toLocaleTimeString())),
              (this.self = v(this.currTime))
          }
          return (
            (t.prototype.update = function () {
              var e = this,
                n = p(new Date().toLocaleTimeString()),
                s = function (t) {
                  return e.self.querySelector(t)
                }
              n.hours !== this.currTime.hours &&
                (s("." + t.className + "-part.hours").outerHTML = n.hours),
                n.minutes !== this.currTime.minutes &&
                  (s("." + t.className + "-part.minutes").outerHTML =
                    n.minutes),
                n.seconds !== this.currTime.seconds &&
                  (s("." + t.className + "-part.seconds").outerHTML =
                    n.seconds),
                (this.currTime = n)
            }),
            (t.prototype.show = function () {
              this.self.classList.remove("hide"), (this.isShown = !0)
            }),
            (t.prototype.hide = function () {
              this.self.classList.add("hide"), (this.isShown = !1)
            }),
            (t.className = "clock"),
            t
          )
        })()
      const N = L
      var T = function (t) {
          var e = t.text,
            n = document.createElement("button")
          return n.classList.add(g.className), (n.innerHTML = e), n
        },
        g = (function () {
          function t(t) {
            var e = t.text
            this.self = T({ text: e })
          }
          return (
            (t.prototype.changeText = function (t) {
              this.self.innerHTML = t
            }),
            (t.updater = function (t) {
              var e = t.clock
              return setInterval(function () {
                e.update()
              }, 1e3)
            }),
            (t.className = "clock-controller"),
            t
          )
        })()
      const w = g
      var E = function (t) {
          var e = t.controller,
            n = t.clock,
            s = document.createElement("div")
          return (
            s.classList.add(y.className),
            s.appendChild(e.self),
            s.appendChild(n.self),
            s
          )
        },
        y = (function () {
          function t() {
            ;(this.clock = new N()),
              (this.controller = new w({ text: "Iniciar reloj" })),
              (this.self = E({
                controller: this.controller,
                clock: this.clock
              }))
          }
          return (
            (t.prototype.clickEvent = function (t) {
              return (
                !!t.target.matches("." + w.className) &&
                (this.clock.isShown
                  ? (this.controller.changeText("Iniciar reloj"),
                    this.updater && clearInterval(this.updater),
                    this.clock.hide())
                  : (this.controller.changeText("Detener reloj"),
                    this.clock.update(),
                    (this.updater = w.updater({ clock: this.clock })),
                    this.clock.show()),
                !0)
              )
            }),
            (t.className = "digital-clock"),
            t
          )
        })()
      var k = [
        {
          id: "clocks",
          title: "Relojes",
          href: "#clocks",
          content: new f({ children: new y() })
        },
        { id: "section-2", title: "Sección 2", href: "#section-2" },
        { id: "section-3", title: "Sección 3", href: "#section-3" },
        { id: "section-4", title: "Sección 4", href: "#section-4" },
        { id: "section-5", title: "Sección 5", href: "#section-5" },
        { id: "section-6", title: "Sección 6", href: "#section-6" },
        { id: "section-7", title: "Sección 7", href: "#section-7" }
      ]
      Object.freeze(k)
      const b = k
      var S = b.map(function (t) {
          var e = t.title,
            n = t.href
          return new u({ href: n, innerHTML: "<strong>Sección: </strong>" + e })
        }),
        M = function (t) {
          var e = t.list,
            n = document.createElement("div")
          return (
            n.classList.add(H.className),
            n.classList.add("hide"),
            n.append(e.self),
            n
          )
        },
        H = (function () {
          function t() {
            ;(this.list = new m({ itemsList: S })),
              (this.self = M({ list: this.list }))
          }
          return (t.className = "menu"), t
        })()
      const x = H
      var A = function (t) {
          var e = t.menu,
            n = t.button,
            s = document.createElement("div")
          return (
            s.classList.add(j.className), s.append(e.self), s.append(n.self), s
          )
        },
        j = (function () {
          function t() {
            ;(this.menu = new x()),
              (this.button = new a()),
              (this.self = A({ menu: this.menu, button: this.button }))
          }
          return (
            (t.prototype.clickEvent = function (t) {
              return t.target.matches("." + a.className) ||
                t.target.matches("." + a.className + " *")
                ? (this.button.clickEvent({ menu: this.menu }), !0)
                : !!t.target.matches("." + m.className + " *") &&
                    (this.menu.list.clickEvent({
                      icon: this.button.icon,
                      menu: this.menu
                    }),
                    !0)
            }),
            (t.className = "panel"),
            t
          )
        })()
      const C = j
      var D = function (t) {
          var e = t.title,
            n = t.id,
            s = document.createElement("a")
          return (
            s.classList.add(I.className),
            s.setAttribute("href", "#" + n),
            (s.innerHTML = "<h2>" + e + "</h2>"),
            s
          )
        },
        I = (function () {
          function t(t) {
            var e = t.title,
              n = void 0 === e ? "Título de sección" : e,
              s = t.id
            this.self = D({ title: n, id: s })
          }
          return (t.className = "section-title"), t
        })()
      const F = I
      var O = function (t) {
          var e = t.id,
            n = t.title,
            s = t.content,
            i = document.createElement("section")
          return (
            i.classList.add($.className),
            e && i.setAttribute("id", e),
            i.appendChild(n.self),
            s && i.appendChild(s.self),
            i
          )
        },
        $ = (function () {
          function t(t) {
            var e = t.id,
              n = t.title,
              s = t.content,
              i = void 0 === s ? new f({ children: [] }) : s
            ;(this.title = new F({ id: e, title: n })),
              (this.content = i),
              (this.self = O({
                id: e,
                title: this.title,
                content: this.content
              }))
          }
          return (t.className = "section"), t
        })()
      const B = $
      var _ = b.map(function (t) {
          var e = t.id,
            n = t.title,
            s = t.content
          return new B({ id: e, title: n, content: s })
        }),
        q = function (t) {
          var e = t.sectionsList,
            n = document.createElement("main")
          n.classList.add(z.className)
          var s = document.createDocumentFragment()
          return (
            e.forEach(function (t) {
              return s.appendChild(t.self)
            }),
            n.appendChild(s),
            n
          )
        },
        z = (function () {
          function t() {
            ;(this.sectionsList = _), (this.self = q({ sectionsList: _ }))
          }
          return (t.className = "main"), t
        })()
      const P = z
      var R = b
        .map(function (t) {
          var e, n, s
          return Array.isArray(
            null === (e = t.content) || void 0 === e ? void 0 : e.children
          )
            ? null === (n = t.content) || void 0 === n
              ? void 0
              : n.children.map(function (t) {
                  return t
                })
            : null === (s = t.content) || void 0 === s
            ? void 0
            : s.children
        })
        .flat(1)
      const Y = function () {
        var e = document.createDocumentFragment(),
          n = new C(),
          s = new P()
        return (
          e.prepend(t()),
          e.append(s.self),
          e.append(n.self),
          document.addEventListener("click", function (t) {
            n.clickEvent(t)
            for (var e = 0; e < R.length; e++) {
              var s = R[e]
              if (s) if (s.clickEvent) if (s.clickEvent(t)) break
            }
          }),
          e
        )
      }
      var G = n(985)
      document.addEventListener("DOMContentLoaded", function () {
        var t = document.getElementById("root"),
          e = Y()
        t.prepend(e),
          t.insertAdjacentHTML(
            "beforeend",
            '\n    <figure>\n      <figcaption>Listen to the alarm:</figcaption>\n      <audio\n          controls\n          src="' +
              G +
              '">\n              Your browser does not support the\n              <code>audio</code> element.\n      </audio>\n    </figure>\n  '
          )
      })
    })()
})()
