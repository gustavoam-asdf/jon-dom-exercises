import Icon from './Icon'
import Menu from './Menu'
import Panel from './Panel'
import './styles/MenuButton'

export const icons = { hamburger: 'fa-bars', cross: 'fa-times' }

const MenuButtonTemplate = (icon: Icon): HTMLElement => {
  const button = document.createElement('div')
  button.classList.add(MenuButton.id)
  button.setAttribute('id', MenuButton.id)
  button.append(icon.self)
  return button
}
export default class MenuButton {
  public self: HTMLElement
  public icon: Icon
  static id: string = 'menu-button'

  constructor(
    icon = new Icon({
      iconType: icons.hamburger,
      className: 'menu-button__icon'
    })
  ) {
    this.icon = icon
    this.self = MenuButtonTemplate(this.icon)
  }

  clickEvent({ menu }: { menu: Menu }) {
    this.icon.switchIcon(icons.hamburger)
    menu.self.classList.toggle('hide')
  }
}
