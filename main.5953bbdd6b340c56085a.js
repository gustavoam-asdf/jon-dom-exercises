/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/components/Header.ts

var Header = function () {
    var header = document.createElement('header');
    header.classList.add('main-header');
    header.innerHTML = 'Ejercicios del DOM';
    return header;
};
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: ./src/elementIds.ts
/* harmony default export */ const elementIds = ({
    panel: {
        self: 'panel',
        menu: {
            self: 'menu',
            list: 'menu-list'
        },
        button: 'menu-button'
    }
});

;// CONCATENATED MODULE: ./src/components/Icon.ts
var Icon = function (_a) {
    var _b;
    var iconType = _a.iconType, className = _a.className, id = _a.id;
    var icon = document.createElement('span');
    id ? icon.setAttribute('id', id) : 0;
    icon.classList.add('fas');
    icon.classList.add(iconType);
    className ? (_b = icon.classList).add.apply(_b, className.split(' ')) : 0;
    return icon;
};
/* harmony default export */ const components_Icon = (Icon);

;// CONCATENATED MODULE: ./src/components/MenuButton.ts



var options = { hamburger: 'fa-bars', cross: 'fa-times' };
var MenuButton = function () {
    var button = document.createElement('div');
    button.classList.add(elementIds.panel.button);
    button.setAttribute('id', elementIds.panel.button);
    var icon = components_Icon({
        iconType: options.hamburger,
        className: button.className + "__icon"
    });
    button.append(icon);
    return button;
};
/* harmony default export */ const components_MenuButton = (MenuButton);

;// CONCATENATED MODULE: ./src/components/MenuItem.ts

var MenuItem = function (_a) {
    var _b = _a.href, href = _b === void 0 ? '#' : _b, innerHTML = _a.innerHTML;
    var a = document.createElement('a');
    a.classList.add('menu-item');
    a.setAttribute('href', href);
    a.innerHTML = innerHTML;
    return a;
};
/* harmony default export */ const components_MenuItem = (MenuItem);

;// CONCATENATED MODULE: ./src/components/MenuList.ts


var MenuList = function (listItems) {
    var list = document.createElement('nav');
    list.classList.add(elementIds.panel.menu.list);
    list.setAttribute('id', elementIds.panel.menu.list);
    var listFragment = document.createDocumentFragment();
    listItems.forEach(function (listItem) { return listFragment.append(listItem); });
    list.append(listFragment);
    return list;
};
/* harmony default export */ const components_MenuList = (MenuList);

;// CONCATENATED MODULE: ./src/components/Menu.ts




var Menu = function () {
    var menu = document.createElement('div');
    menu.classList.add(elementIds.panel.menu.self);
    menu.setAttribute('id', elementIds.panel.menu.self);
    menu.classList.add('hide');
    var items = [
        components_MenuItem({ href: '#section-1', innerHTML: 'Seccion 1' }),
        components_MenuItem({ href: '#section-2', innerHTML: 'Seccion 2' }),
        components_MenuItem({ href: '#section-3', innerHTML: 'Seccion 3' }),
        components_MenuItem({ href: '#section-4', innerHTML: 'Seccion 4' }),
        components_MenuItem({ href: '#section-5', innerHTML: 'Seccion 5' }),
        components_MenuItem({ href: '#section-7', innerHTML: 'Seccion 6' })
    ];
    var list = components_MenuList(items);
    menu.append(list);
    return menu;
};
/* harmony default export */ const components_Menu = (Menu);

;// CONCATENATED MODULE: ./src/components/Panel.ts




var changeIcon = function () {
    var icon = document.querySelector("." + elementIds.panel.button + "__icon");
    if (!icon)
        throw new Error("Icon doesn't exist");
    var isOpen = icon.classList.contains(options.hamburger);
    if (isOpen) {
        icon.classList.remove(options.hamburger);
        icon.classList.add(options.cross);
    }
    else {
        icon.classList.remove(options.cross);
        icon.classList.add(options.hamburger);
    }
};
var clickOnPanel = function (evt) {
    var _a, _b;
    var clickOnButton = evt.target.matches("#" + elementIds.panel.button + " *") ||
        evt.target.matches("#" + elementIds.panel.button);
    if (clickOnButton) {
        changeIcon();
        (_a = document
            .getElementById(elementIds.panel.menu.self)) === null || _a === void 0 ? void 0 : _a.classList.toggle('hide');
        return;
    }
    var clickOnMenuItem = evt.target.matches("#" + elementIds.panel.menu.list + " *");
    if (clickOnMenuItem) {
        changeIcon();
        (_b = document.getElementById(elementIds.panel.menu.self)) === null || _b === void 0 ? void 0 : _b.classList.add('hide');
        return;
    }
};
var Panel = function () {
    var panel = document.createElement('div');
    panel.classList.add(elementIds.panel.self);
    panel.setAttribute('id', elementIds.panel.self);
    var menu = components_Menu();
    var button = components_MenuButton();
    panel.append(menu);
    panel.append(button);
    panel.addEventListener('click', clickOnPanel);
    return panel;
};
/* harmony default export */ const components_Panel = (Panel);

;// CONCATENATED MODULE: ./src/App.ts





var App = function () {
    var app = document.createDocumentFragment();
    app.prepend(components_Header());
    app.append(components_Panel());
    return app;
};
/* harmony default export */ const src_App = (App);

;// CONCATENATED MODULE: ./src/index.ts

var root = document.getElementById('root');
console.clear();
root === null || root === void 0 ? void 0 : root.prepend(src_App());

/******/ })()
;