/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/components/Header.ts

var Header = function () {
    var header = document.createElement("header");
    header.classList.add("main-header");
    header.innerHTML = "Ejercicios del DOM";
    return header;
};
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: ./src/components/Icon.ts
var IconTemplate = function (_a) {
    var _b;
    var iconType = _a.iconType, className = _a.className, id = _a.id;
    var icon = document.createElement("span");
    id ? icon.setAttribute("id", id) : 0;
    icon.classList.add("fas");
    icon.classList.add(iconType);
    className ? (_b = icon.classList).add.apply(_b, className.split(" ")) : 0;
    return icon;
};
var Icon = /** @class */ (function () {
    function Icon(_a) {
        var iconType = _a.iconType, className = _a.className, id = _a.id;
        this.self = IconTemplate({ iconType: iconType, className: className, id: id });
        this.iconType = iconType;
    }
    Icon.prototype.switchIcon = function (switchableIcon) {
        var defaultState = this.self.classList.contains(this.iconType);
        if (defaultState) {
            this.self.classList.remove(this.iconType);
            this.self.classList.add(switchableIcon);
        }
        else {
            this.self.classList.remove(switchableIcon);
            this.self.classList.add(this.iconType);
        }
    };
    return Icon;
}());
/* harmony default export */ const components_Icon = (Icon);

;// CONCATENATED MODULE: ./src/components/panel/MenuButton.ts


var icons = { hamburger: "fa-bars", cross: "fa-times" };
var MenuButtonTemplate = function (icon) {
    var button = document.createElement("div");
    button.classList.add(MenuButton.className);
    button.append(icon.self);
    return button;
};
var MenuButton = /** @class */ (function () {
    function MenuButton(icon) {
        if (icon === void 0) { icon = new components_Icon({
            iconType: icons.hamburger,
            className: "menu-button__icon"
        }); }
        this.icon = icon;
        this.self = MenuButtonTemplate(this.icon);
    }
    MenuButton.prototype.clickEvent = function (_a) {
        var menu = _a.menu;
        this.icon.switchIcon(icons.cross);
        menu.self.classList.toggle("hide");
    };
    MenuButton.className = "menu-button";
    return MenuButton;
}());
/* harmony default export */ const panel_MenuButton = (MenuButton);

;// CONCATENATED MODULE: ./src/components/panel/MenuItem.ts

var MenuItemTemplate = function (_a) {
    var _b = _a.href, href = _b === void 0 ? "#" : _b, innerHTML = _a.innerHTML;
    var a = document.createElement("a");
    a.classList.add(MenuItem.className);
    a.setAttribute("href", href);
    a.innerHTML = innerHTML;
    return a;
};
var MenuItem = /** @class */ (function () {
    function MenuItem(_a) {
        var _b = _a.href, href = _b === void 0 ? "#" : _b, innerHTML = _a.innerHTML;
        this.self = MenuItemTemplate({ href: href, innerHTML: innerHTML });
    }
    MenuItem.className = "menu-item";
    return MenuItem;
}());
/* harmony default export */ const panel_MenuItem = (MenuItem);

;// CONCATENATED MODULE: ./src/components/panel/MenuList.ts


var MenuListTemplate = function (_a) {
    var itemsList = _a.itemsList;
    var list = document.createElement("nav");
    list.classList.add(MenuList.className);
    var listFragment = document.createDocumentFragment();
    itemsList.forEach(function (listItem) { return listFragment.append(listItem.self); });
    list.append(listFragment);
    return list;
};
var MenuList = /** @class */ (function () {
    function MenuList(_a) {
        var itemsList = _a.itemsList;
        this.itemsList = itemsList;
        this.self = MenuListTemplate({ itemsList: this.itemsList });
    }
    MenuList.prototype.clickEvent = function (_a) {
        var icon = _a.icon, menu = _a.menu;
        icon.switchIcon(icons.cross);
        menu.self.classList.add("hide");
    };
    MenuList.className = "menu-list";
    return MenuList;
}());
/* harmony default export */ const panel_MenuList = (MenuList);

;// CONCATENATED MODULE: ./src/components/section/SectionContent.ts
var SectionContentTemplate = function (_a) {
    var children = _a.children;
    var content = document.createDocumentFragment();
    if (Array.isArray(children)) {
        children.forEach(function (child) { return content.appendChild(child.self); });
    }
    else {
        content.appendChild(children.self);
    }
    return content;
};
var SectionContent = /** @class */ (function () {
    function SectionContent(_a) {
        var _b = _a.children, children = _b === void 0 ? [] : _b;
        this.children = children;
        this.self = SectionContentTemplate({ children: this.children });
    }
    return SectionContent;
}());
/* harmony default export */ const section_SectionContent = (SectionContent);

;// CONCATENATED MODULE: ./src/components/sections-parts/clocks/digitalClock/Clock.ts
var clockParts = function (time) {
    // if (time.length !== 8) {
    //   throw new Error("Invalid time format")
    // }
    var _a = time.split(":"), hours = _a[0], minutes = _a[1], seconds = _a[2];
    return {
        hours: "<span class=\"" + Clock.className + "-part hours\">" + hours + "</span>",
        minutes: "<span class=\"" + Clock.className + "-part minutes\">" + minutes + "</span>",
        seconds: "<span class=\"" + Clock.className + "-part seconds\">" + seconds + "</span>",
        separator: "<span class=\"" + Clock.className + "-part separator\">:</span>"
    };
};
var ClockTemplate = function (_a) {
    var hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds, separator = _a.separator;
    var clock = document.createElement("div");
    clock.classList.add(Clock.className);
    clock.classList.add("hide");
    clock.innerHTML = "" + hours + separator + minutes + separator + seconds;
    return clock;
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.isShown = false;
        this.currTime = clockParts(new Date().toLocaleTimeString());
        this.self = ClockTemplate(this.currTime);
    }
    Clock.prototype.update = function () {
        var _this = this;
        var newTime = clockParts(new Date().toLocaleTimeString());
        var $ = function (selector) { return _this.self.querySelector(selector); };
        if (newTime.hours !== this.currTime.hours) {
            $("." + Clock.className + "-part.hours").outerHTML = newTime.hours;
        }
        if (newTime.minutes !== this.currTime.minutes) {
            $("." + Clock.className + "-part.minutes").outerHTML = newTime.minutes;
        }
        if (newTime.seconds !== this.currTime.seconds) {
            $("." + Clock.className + "-part.seconds").outerHTML = newTime.seconds;
        }
        this.currTime = newTime;
    };
    Clock.prototype.show = function () {
        this.self.classList.remove("hide");
        this.isShown = true;
    };
    Clock.prototype.hide = function () {
        this.self.classList.add("hide");
        this.isShown = false;
    };
    Clock.className = "clock";
    return Clock;
}());
/* harmony default export */ const digitalClock_Clock = (Clock);

;// CONCATENATED MODULE: ./src/components/sections-parts/clocks/digitalClock/ClockController.ts
var ClockControllerTemplate = function (_a) {
    var text = _a.text;
    var section = document.createElement("button");
    section.classList.add(ClockController.className);
    section.innerHTML = text;
    return section;
};
var ClockController = /** @class */ (function () {
    function ClockController(_a) {
        var text = _a.text;
        this.self = ClockControllerTemplate({ text: text });
    }
    ClockController.prototype.changeText = function (text) {
        this.self.innerHTML = text;
    };
    ClockController.updater = function (_a) {
        var clock = _a.clock;
        return setInterval(function () {
            clock.update();
        }, 1000);
    };
    ClockController.className = "clock-controller";
    return ClockController;
}());
/* harmony default export */ const digitalClock_ClockController = (ClockController);

;// CONCATENATED MODULE: ./src/components/sections-parts/clocks/digitalClock/DigitalClock.ts



var DigitalClockTemplate = function (_a) {
    var controller = _a.controller, clock = _a.clock;
    var section = document.createElement("div");
    section.classList.add(DigitalClock.className);
    section.appendChild(controller.self);
    section.appendChild(clock.self);
    return section;
};
var DigitalClock = /** @class */ (function () {
    function DigitalClock() {
        this.clock = new digitalClock_Clock();
        this.controller = new digitalClock_ClockController({
            text: "Iniciar reloj"
        });
        this.self = DigitalClockTemplate({
            controller: this.controller,
            clock: this.clock
        });
    }
    DigitalClock.prototype.clickEvent = function (evt) {
        var clickOnButton = evt.target.matches("." + digitalClock_ClockController.className);
        if (clickOnButton) {
            if (this.clock.isShown) {
                this.controller.changeText("Iniciar reloj");
                this.updater ? clearInterval(this.updater) : 0;
                this.clock.hide();
            }
            else {
                this.controller.changeText("Detener reloj");
                this.clock.update();
                this.updater = digitalClock_ClockController.updater({ clock: this.clock });
                this.clock.show();
            }
            return true;
        }
        return false;
    };
    DigitalClock.className = "digital-clock";
    return DigitalClock;
}());
/* harmony default export */ const digitalClock_DigitalClock = (DigitalClock);

;// CONCATENATED MODULE: ./src/components/sections-parts/list.ts


var list = [
    {
        id: "clocks",
        title: "Relojes",
        href: "#clocks",
        content: new section_SectionContent({ children: new digitalClock_DigitalClock() })
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
];
Object.freeze(list);
/* harmony default export */ const sections_parts_list = (list);

;// CONCATENATED MODULE: ./src/components/panel/Menu.ts




var itemsList = sections_parts_list.map(function (_a) {
    var title = _a.title, href = _a.href;
    return new panel_MenuItem({
        href: href,
        innerHTML: "<strong>Secci\u00F3n: </strong>" + title
    });
});
var MenuTemplate = function (_a) {
    var list = _a.list;
    var menu = document.createElement("div");
    menu.classList.add(Menu.className);
    menu.classList.add("hide");
    menu.append(list.self);
    return menu;
};
var Menu = /** @class */ (function () {
    function Menu() {
        this.list = new panel_MenuList({ itemsList: itemsList });
        this.self = MenuTemplate({ list: this.list });
    }
    Menu.className = "menu";
    return Menu;
}());
/* harmony default export */ const panel_Menu = (Menu);

;// CONCATENATED MODULE: ./src/components/panel/Panel.ts




var PanelTemplate = function (_a) {
    var menu = _a.menu, button = _a.button;
    var panel = document.createElement("div");
    panel.classList.add(Panel.className);
    panel.append(menu.self);
    panel.append(button.self);
    return panel;
};
var Panel = /** @class */ (function () {
    function Panel() {
        this.menu = new panel_Menu();
        this.button = new panel_MenuButton();
        this.self = PanelTemplate({
            menu: this.menu,
            button: this.button
        });
    }
    Panel.prototype.clickEvent = function (evt) {
        var clickOnButton = evt.target.matches("." + panel_MenuButton.className) ||
            evt.target.matches("." + panel_MenuButton.className + " *");
        if (clickOnButton) {
            this.button.clickEvent({ menu: this.menu });
            return true;
        }
        var clickOnMenuItem = evt.target.matches("." + panel_MenuList.className + " *");
        if (clickOnMenuItem) {
            this.menu.list.clickEvent({
                icon: this.button.icon,
                menu: this.menu
            });
            return true;
        }
        return false;
    };
    Panel.className = "panel";
    return Panel;
}());
/* harmony default export */ const panel_Panel = (Panel);

;// CONCATENATED MODULE: ./src/components/section/SectionTitle.ts
var SectionTitleTemplate = function (_a) {
    var title = _a.title, id = _a.id;
    var a = document.createElement("a");
    a.classList.add(SectionTitle.className);
    a.setAttribute("href", "#" + id);
    a.innerHTML = "<h2>" + title + "</h2>";
    return a;
};
var SectionTitle = /** @class */ (function () {
    function SectionTitle(_a) {
        var _b = _a.title, title = _b === void 0 ? "Título de sección" : _b, id = _a.id;
        this.self = SectionTitleTemplate({ title: title, id: id });
    }
    SectionTitle.className = "section-title";
    return SectionTitle;
}());
/* harmony default export */ const section_SectionTitle = (SectionTitle);

;// CONCATENATED MODULE: ./src/components/section/Section.ts



var SectionTemplate = function (_a) {
    var id = _a.id, title = _a.title, content = _a.content;
    var section = document.createElement("section");
    section.classList.add(Section.className);
    id ? section.setAttribute("id", id) : 0;
    section.appendChild(title.self);
    content ? section.appendChild(content.self) : 0;
    return section;
};
var Section = /** @class */ (function () {
    function Section(_a) {
        var id = _a.id, title = _a.title, _b = _a.content, content = _b === void 0 ? new section_SectionContent({ children: [] }) : _b;
        this.title = new section_SectionTitle({ id: id, title: title });
        this.content = content;
        this.self = SectionTemplate({
            id: id,
            title: this.title,
            content: this.content
        });
    }
    Section.className = "section";
    return Section;
}());
/* harmony default export */ const section_Section = (Section);

;// CONCATENATED MODULE: ./src/components/Main.ts



var sectionsList = sections_parts_list.map(function (_a) {
    var id = _a.id, title = _a.title, content = _a.content;
    return new section_Section({ id: id, title: title, content: content });
});
var MainTemplate = function (_a) {
    var sectionsList = _a.sectionsList;
    var main = document.createElement("main");
    main.classList.add(Main.className);
    var fragment = document.createDocumentFragment();
    sectionsList.forEach(function (section) { return fragment.appendChild(section.self); });
    main.appendChild(fragment);
    return main;
};
var Main = /** @class */ (function () {
    function Main() {
        this.sectionsList = sectionsList;
        this.self = MainTemplate({ sectionsList: sectionsList });
    }
    Main.className = "main";
    return Main;
}());
/* harmony default export */ const components_Main = (Main);

;// CONCATENATED MODULE: ./src/App.ts






var sectionParts = sections_parts_list.map(function (section) {
    var _a, _b, _c;
    if (Array.isArray((_a = section.content) === null || _a === void 0 ? void 0 : _a.children)) {
        return (_b = section.content) === null || _b === void 0 ? void 0 : _b.children.map(function (child) {
            return child;
        });
    }
    else {
        return (_c = section.content) === null || _c === void 0 ? void 0 : _c.children;
    }
})
    .flat(1);
var App = function () {
    var app = document.createDocumentFragment();
    var panel = new panel_Panel();
    var main = new components_Main();
    app.prepend(components_Header());
    app.append(main.self);
    app.append(panel.self);
    document.addEventListener("click", function (evt) {
        panel.clickEvent(evt);
        for (var i = 0; i < sectionParts.length; i++) {
            var sectionPart = sectionParts[i];
            if (!sectionPart)
                continue;
            if (!sectionPart.clickEvent)
                continue;
            var match = sectionPart.clickEvent(evt);
            if (match)
                break;
        }
    });
    return app;
};
/* harmony default export */ const src_App = (App);

;// CONCATENATED MODULE: ./src/index.ts

document.addEventListener("DOMContentLoaded", function () {
    // console.clear()
    var root = document.getElementById("root");
    var app = src_App();
    root.prepend(app);
});

/******/ })()
;