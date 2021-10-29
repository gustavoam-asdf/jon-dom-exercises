import MenuButton from './MenuButton'
import Menu from './Menu'
import MenuList from './MenuList'
import './styles/Menu'

const PanelTemplate = ({
  menu,
  button
}: {
  menu: Menu
  button: MenuButton
}): HTMLDivElement => {
  const panel: HTMLDivElement = document.createElement('div')
  panel.classList.add(Panel.className)
  panel.append(menu.self)
  panel.append(button.self)
  return panel
}

export default class Panel {
  public self: HTMLDivElement
  public menu: Menu
  public button: MenuButton
  static className: string = 'panel'

  constructor() {
    this.menu = new Menu()
    this.button = new MenuButton()
    this.self = PanelTemplate({
      menu: this.menu,
      button: this.button
    })
  }

  clickEvent(evt: any) {
    const clickOnButton =
      evt.target.matches(`.${MenuButton.className}`) ||
      evt.target.matches(`.${MenuButton.className} *`)
    if (clickOnButton) {
      this.button.clickEvent({ menu: this.menu })
    }
    const clickOnMenuItem = evt.target.matches(`.${MenuList.className} a`)
    if (clickOnMenuItem) {
      this.menu.list.clickEvent({
        icon: this.button.icon,
        menu: this.menu
      })
    }
  }
}
