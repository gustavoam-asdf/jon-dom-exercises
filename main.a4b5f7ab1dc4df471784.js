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
    menu: {
        container: 'menu-container',
        self: 'menu',
        list: 'menu-list',
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
    button.classList.add(elementIds.menu.button);
    button.setAttribute('id', elementIds.menu.button);
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
    list.classList.add(elementIds.menu.list);
    list.setAttribute('id', elementIds.menu.list);
    var listFragment = document.createDocumentFragment();
    listItems.forEach(function (listItem) { return listFragment.append(listItem); });
    list.append(listFragment);
    return list;
};
/* harmony default export */ const components_MenuList = (MenuList);

;// CONCATENATED MODULE: ./src/components/Menu.ts





var clickOnMenu = function (evt) {
    var button = evt.target.closest("#" + elementIds.menu.button);
    if (button) {
        var menu = document.getElementById(elementIds.menu.self);
        var icon = button.querySelector("." + elementIds.menu.button + "__icon");
        if (icon === null || icon === void 0 ? void 0 : icon.classList.contains(options.hamburger)) {
            icon.classList.remove(options.hamburger);
            icon.classList.add(options.cross);
        }
        else {
            icon.classList.remove(options.cross);
            icon.classList.add(options.hamburger);
        }
        menu === null || menu === void 0 ? void 0 : menu.classList.toggle('hide');
    }
};
var Menu = function () {
    var container = document.createElement('div');
    container.classList.add(elementIds.menu.container);
    container.setAttribute('id', elementIds.menu.container);
    var button = components_MenuButton();
    var items = [
        components_MenuItem({ href: '#section-1', innerHTML: 'Seccion 1' }),
        components_MenuItem({ href: '#section-2', innerHTML: 'Seccion 2' }),
        components_MenuItem({ href: '#section-3', innerHTML: 'Seccion 3' }),
        components_MenuItem({ href: '#section-4', innerHTML: 'Seccion 4' }),
        components_MenuItem({ href: '#section-5', innerHTML: 'Seccion 5' }),
        components_MenuItem({ href: '#section-7', innerHTML: 'Seccion 6' })
    ];
    var menu = document.createElement('div');
    menu.classList.add(elementIds.menu.self);
    menu.classList.add('hide');
    menu.setAttribute('id', elementIds.menu.self);
    var list = components_MenuList(items);
    menu.append(list);
    container.append(menu);
    container.append(button);
    container.addEventListener('click', clickOnMenu);
    return container;
};
/* harmony default export */ const components_Menu = (Menu);

;// CONCATENATED MODULE: ./src/App.ts




var App = function () {
    var app = document.createDocumentFragment();
    app.prepend(components_Header());
    app.append(components_Menu());
    return app;
};
/* harmony default export */ const src_App = (App);

;// CONCATENATED MODULE: ./src/index.ts

var root = document.getElementById('root');
console.clear();
root === null || root === void 0 ? void 0 : root.prepend(src_App());

/******/ })()
;