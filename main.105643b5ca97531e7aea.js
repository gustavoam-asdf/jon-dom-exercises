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
  /* harmony default export */ const components_Icon = Icon // CONCATENATED MODULE: ./src/components/panel/MenuButton.ts

  var icons = { hamburger: "fa-bars", cross: "fa-times" }
  var MenuButtonTemplate = function (icon) {
    var button = document.createElement("div")
    button.classList.add(MenuButton.className)
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
    MenuButton.className = "menu-button"
    return MenuButton
  })()
  /* harmony default export */ const panel_MenuButton = MenuButton // CONCATENATED MODULE: ./src/components/panel/MenuItem.ts

  var MenuItemTemplate = function (_a) {
    var _b = _a.href,
      href = _b === void 0 ? "#" : _b,
      innerHTML = _a.innerHTML
    var a = document.createElement("a")
    a.classList.add(MenuItem.className)
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
    MenuItem.className = "menu-item"
    return MenuItem
  })()
  /* harmony default export */ const panel_MenuItem = MenuItem // CONCATENATED MODULE: ./src/components/panel/MenuList.ts

  var MenuListTemplate = function (_a) {
    var itemsList = _a.itemsList
    var list = document.createElement("nav")
    list.classList.add(MenuList.className)
    var listFragment = document.createDocumentFragment()
    itemsList.forEach(function (listItem) {
      return listFragment.append(listItem.self)
    })
    list.append(listFragment)
    return list
  }
  var MenuList = /** @class */ (function () {
    function MenuList(_a) {
      var itemsList = _a.itemsList
      this.itemsList = itemsList
      this.self = MenuListTemplate({ itemsList: this.itemsList })
    }
    MenuList.prototype.clickEvent = function (_a) {
      var icon = _a.icon,
        menu = _a.menu
      icon.switchIcon(icons.hamburger)
      menu.self.classList.add("hide")
    }
    MenuList.className = "menu-list"
    return MenuList
  })()
  /* harmony default export */ const panel_MenuList = MenuList // CONCATENATED MODULE: ./src/Sections.ts

  var sections = [
    {
      id: "relojes",
      title: "Relojes",
      href: "#relojes"
    },
    {
      id: "section-2",
      title: "Sección 2",
      href: "#section-2"
    },
    {
      id: "section-3",
      title: "Sección 3",
      href: "#section-3"
    },
    {
      id: "section-4",
      title: "Sección 4",
      href: "#section-4"
    },
    {
      id: "section-5",
      title: "Sección 5",
      href: "#section-5"
    },
    {
      id: "section-6",
      title: "Sección 6",
      href: "#section-6"
    },
    {
      id: "section-7",
      title: "Sección 7",
      href: "#section-7"
    }
  ]
  Object.freeze(sections)
  /* harmony default export */ const Sections = sections // CONCATENATED MODULE: ./src/components/panel/Menu.ts

  var itemsList = Sections.map(function (_a) {
    var title = _a.title,
      href = _a.href
    return new panel_MenuItem({
      href: href,
      innerHTML: "<strong>Secci\u00F3n: </strong>" + title
    })
  })
  var MenuTemplate = function (_a) {
    var list = _a.list
    var menu = document.createElement("div")
    menu.classList.add(Menu.className)
    menu.classList.add("hide")
    menu.append(list.self)
    return menu
  }
  var Menu = /** @class */ (function () {
    function Menu() {
      this.list = new panel_MenuList({ itemsList: itemsList })
      this.self = MenuTemplate({ list: this.list })
    }
    Menu.className = "menu"
    return Menu
  })()
  /* harmony default export */ const panel_Menu = Menu // CONCATENATED MODULE: ./src/components/panel/Panel.ts

  var PanelTemplate = function (_a) {
    var menu = _a.menu,
      button = _a.button
    var panel = document.createElement("div")
    panel.classList.add(Panel.className)
    panel.append(menu.self)
    panel.append(button.self)
    return panel
  }
  var Panel = /** @class */ (function () {
    function Panel() {
      this.menu = new panel_Menu()
      this.button = new panel_MenuButton()
      this.self = PanelTemplate({
        menu: this.menu,
        button: this.button
      })
    }
    Panel.prototype.clickEvent = function (evt) {
      var clickOnButton =
        evt.target.matches("." + panel_MenuButton.className) ||
        evt.target.matches("." + panel_MenuButton.className + " *")
      if (clickOnButton) {
        this.button.clickEvent({ menu: this.menu })
      }
      var clickOnMenuItem = evt.target.matches(
        "." + panel_MenuList.className + " *"
      )
      if (clickOnMenuItem) {
        this.menu.list.clickEvent({
          icon: this.button.icon,
          menu: this.menu
        })
      }
    }
    Panel.className = "panel"
    return Panel
  })()
  /* harmony default export */ const panel_Panel = Panel // CONCATENATED MODULE: ./src/components/section/SectionTitle.ts

  var SectionTitleTemplate = function (_a) {
    var title = _a.title,
      id = _a.id
    var a = document.createElement("a")
    a.classList.add(SectionTitle.className)
    a.setAttribute("href", "#" + id)
    a.innerHTML = "<h2>" + title + "</h2>"
    return a
  }
  var SectionTitle = /** @class */ (function () {
    function SectionTitle(_a) {
      var _b = _a.title,
        title = _b === void 0 ? "Título de sección" : _b,
        id = _a.id
      this.self = SectionTitleTemplate({ title: title, id: id })
    }
    SectionTitle.className = "section-title"
    return SectionTitle
  })()
  /* harmony default export */ const section_SectionTitle = SectionTitle // CONCATENATED MODULE: ./src/components/section/Section.ts

  var SectionTemplate = function (_a) {
    var id = _a.id,
      title = _a.title
    var section = document.createElement("section")
    section.classList.add(Section.className)
    id ? section.setAttribute("id", id) : 0
    section.appendChild(title.self)
    return section
  }
  var Section = /** @class */ (function () {
    function Section(_a) {
      var id = _a.id,
        title = _a.title
      this.title = new section_SectionTitle({ id: id, title: title })
      this.self = SectionTemplate({ id: id, title: this.title })
    }
    Section.className = "section"
    return Section
  })()
  /* harmony default export */ const section_Section = Section // CONCATENATED MODULE: ./src/components/Main.ts

  var sectionsList = Sections.map(function (section) {
    return new section_Section({ id: section.id, title: section.title })
  })
  var MainTemplate = function (_a) {
    var sectionsList = _a.sectionsList
    var main = document.createElement("main")
    main.classList.add(Main.className)
    var fragment = document.createDocumentFragment()
    sectionsList.forEach(function (section) {
      return fragment.appendChild(section.self)
    })
    main.appendChild(fragment)
    return main
  }
  var Main = /** @class */ (function () {
    function Main() {
      this.sectionsList = sectionsList
      this.self = MainTemplate({ sectionsList: sectionsList })
    }
    Main.className = "main"
    return Main
  })()
  /* harmony default export */ const components_Main = Main // CONCATENATED MODULE: ./src/App.ts

  var App = function () {
    var app = document.createDocumentFragment()
    var panel = new panel_Panel()
    var main = new components_Main()
    app.prepend(components_Header())
    app.append(main.self)
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
