/******/ ;(() => {
  // webpackBootstrap
  /******/ "use strict"
  var __webpack_exports__ = {} // CONCATENATED MODULE: ./src/components/Header.ts

  var Header = function () {
    var header = document.createElement("header")
    header.classList.add("main-header")
    header.innerHTML = "Ejercicios del DOM"
    return header
  }
  /* harmony default export */ const components_Header = Header // CONCATENATED MODULE: ./src/components/Icon.ts

  var IconTemplate = function (_a) {
    var _b
    var iconType = _a.iconType,
      className = _a.className,
      id = _a.id
    var icon = document.createElement("span")
    id ? icon.setAttribute("id", id) : 0
    icon.classList.add("fas")
    icon.classList.add(iconType)
    className ? (_b = icon.classList).add.apply(_b, className.split(" ")) : 0
    return icon
  }
  var Icon = /** @class */ (function () {
    function Icon(_a) {
      var iconType = _a.iconType,
        className = _a.className,
        id = _a.id
      this.self = IconTemplate({
        iconType: iconType,
        className: className,
        id: id
      })
      this.iconType = iconType
    }
    Icon.prototype.switchIcon = function (switchableIcon) {
      var defaultState = this.self.classList.contains(this.iconType)
      if (defaultState) {
        this.self.classList.remove(this.iconType)
        this.self.classList.add(switchableIcon)
      } else {
        this.self.classList.remove(switchableIcon)
        this.self.classList.add(this.iconType)
      }
    }
    return Icon
  })()
  /* harmony default export */ const components_Icon = Icon // CONCATENATED MODULE: ./src/components/MenuButton.ts

  var icons = { hamburger: "fa-bars", cross: "fa-times" }
  var MenuButtonTemplate = function (icon) {
    var button = document.createElement("div")
    button.classList.add(MenuButton.id)
    button.setAttribute("id", MenuButton.id)
    button.append(icon.self)
    return button
  }
  var MenuButton = /** @class */ (function () {
    function MenuButton(icon) {
      if (icon === void 0) {
        icon = new components_Icon({
          iconType: icons.hamburger,
          className: "menu-button__icon"
        })
      }
      this.icon = icon
      this.self = MenuButtonTemplate(this.icon)
    }
    MenuButton.prototype.clickEvent = function (_a) {
      var menu = _a.menu
      this.icon.switchIcon(icons.hamburger)
      menu.self.classList.toggle("hide")
    }
    MenuButton.id = "menu-button"
    return MenuButton
  })()
  /* harmony default export */ const components_MenuButton = MenuButton // CONCATENATED MODULE: ./src/components/MenuItem.ts

  var MenuItemTemplate = function (_a) {
    var _b = _a.href,
      href = _b === void 0 ? "#" : _b,
      innerHTML = _a.innerHTML
    var a = document.createElement("a")
    a.classList.add("menu-item")
    a.setAttribute("href", href)
    a.innerHTML = innerHTML
    return a
  }
  var MenuItem = /** @class */ (function () {
    function MenuItem(_a) {
      var _b = _a.href,
        href = _b === void 0 ? "#" : _b,
        innerHTML = _a.innerHTML
      this.self = MenuItemTemplate({ href: href, innerHTML: innerHTML })
    }
    return MenuItem
  })()
  /* harmony default export */ const components_MenuItem = MenuItem // CONCATENATED MODULE: ./src/components/MenuList.ts

  var MenuListTemplate = function (_a) {
    var listItems = _a.listItems
    var list = document.createElement("nav")
    list.classList.add(MenuList.id)
    list.setAttribute("id", MenuList.id)
    var listFragment = document.createDocumentFragment()
    listItems.forEach(function (listItem) {
      return listFragment.append(listItem.self)
    })
    list.append(listFragment)
    return list
  }
  var MenuList = /** @class */ (function () {
    function MenuList(_a) {
      var listItems = _a.listItems
      this.listItems = listItems
      this.self = MenuListTemplate({ listItems: this.listItems })
    }
    MenuList.prototype.clickEvent = function (_a) {
      var icon = _a.icon,
        menu = _a.menu
      icon.switchIcon(icons.hamburger)
      menu.self.classList.add("hide")
    }
    MenuList.id = "menu-list"
    return MenuList
  })()
  /* harmony default export */ const components_MenuList = MenuList // CONCATENATED MODULE: ./src/components/Menu.ts

  var MenuTemplate = function (_a) {
    var list = _a.list
    var menu = document.createElement("div")
    menu.classList.add(Menu.id)
    menu.setAttribute("id", Menu.id)
    menu.classList.add("hide")
    menu.append(list.self)
    return menu
  }
  var Menu = /** @class */ (function () {
    function Menu() {
      this.list = new components_MenuList({
        listItems: [
          new components_MenuItem({
            href: "#section-1",
            innerHTML: "Seccion 1"
          }),
          new components_MenuItem({
            href: "#section-2",
            innerHTML: "Seccion 2"
          }),
          new components_MenuItem({
            href: "#section-3",
            innerHTML: "Seccion 3"
          }),
          new components_MenuItem({
            href: "#section-4",
            innerHTML: "Seccion 4"
          }),
          new components_MenuItem({
            href: "#section-5",
            innerHTML: "Seccion 5"
          }),
          new components_MenuItem({
            href: "#section-7",
            innerHTML: "Seccion 6"
          })
        ]
      })
      this.self = MenuTemplate({ list: this.list })
    }
    Menu.id = "menu"
    return Menu
  })()
  /* harmony default export */ const components_Menu = Menu // CONCATENATED MODULE: ./src/components/Panel.ts

  var PanelTemplate = function (_a) {
    var menu = _a.menu,
      button = _a.button
    var panel = document.createElement("div")
    panel.classList.add(Panel.id)
    panel.setAttribute("id", Panel.id)
    panel.append(menu.self)
    panel.append(button.self)
    return panel
  }
  var Panel = /** @class */ (function () {
    function Panel() {
      this.menu = new components_Menu()
      this.button = new components_MenuButton()
      this.self = PanelTemplate({
        menu: this.menu,
        button: this.button
      })
    }
    Panel.prototype.clickEvent = function (evt) {
      var clickOnButton =
        evt.target.matches("#" + components_MenuButton.id) ||
        evt.target.matches("#" + components_MenuButton.id + " *")
      if (clickOnButton) {
        this.button.clickEvent({ menu: this.menu })
      }
      var clickOnMenuItem = evt.target.matches(
        "#" + components_MenuList.id + " *"
      )
      if (clickOnMenuItem) {
        this.menu.list.clickEvent({
          icon: this.button.icon,
          menu: this.menu
        })
      }
    }
    Panel.id = "panel"
    return Panel
  })()
  /* harmony default export */ const components_Panel = Panel // CONCATENATED MODULE: ./src/App.ts

  var App = function () {
    var app = document.createDocumentFragment()
    var panel = new components_Panel()
    app.prepend(components_Header())
    app.append(panel.self)
    document.addEventListener("click", function (evt) {
      panel.clickEvent(evt)
    })
    return app
  }
  /* harmony default export */ const src_App = App // CONCATENATED MODULE: ./src/index.ts

  document.addEventListener("DOMContentLoaded", function () {
    // console.clear()
    var root = document.getElementById("root")
    var app = src_App()
    root.prepend(app)
  })

  /******/
})()
