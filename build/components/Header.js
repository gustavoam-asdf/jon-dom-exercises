import StyleLink from './StyleLink.js';
var Header = function () {
    var header = document.createElement('header');
    var sr = header.attachShadow({ mode: 'closed' });
    var text = document.createElement('span');
    var styles = StyleLink('components/header');
    text.innerHTML = 'Hola mundooo';
    text.classList.add('text');
    sr.prepend(styles);
    sr.appendChild(text);
    return header;
};
export default Header();
