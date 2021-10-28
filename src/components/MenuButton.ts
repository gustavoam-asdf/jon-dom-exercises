import elementIds from '../elementIds'
import Icon from './Icon'
import './styles/MenuButton'

export const icons = { hamburger: 'fa-bars', cross: 'fa-times' }

const MenuButtonTemplate = (icon: Icon): HTMLElement => {
  const button = document.createElement('div')
  button.classList.add(elementIds.panel.button)
  button.setAttribute('id', elementIds.panel.button)
  button.append(icon.self)
  return button
}

export default class MenuButton {
  public self: HTMLElement
  public icon: Icon

  constructor(
    icon = new Icon({
      iconType: icons.hamburger,
      className: 'menu-button__icon'
    })
  ) {
    this.icon = icon
    this.self = MenuButtonTemplate(this.icon)
  }

  clickEvent() {
    this.icon.switchIcon(icons.hamburger)
    document
      .getElementById(elementIds.panel.menu.self)
      ?.classList.toggle('hide')
  }
}
