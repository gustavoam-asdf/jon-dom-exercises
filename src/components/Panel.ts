import MenuButton from './MenuButton'
import Menu from './Menu'
import './styles/Menu'
import MenuList from './MenuList'

const PanelTemplate = ({
  menu,
  button
}: {
  menu: Menu
  button: MenuButton
}): HTMLDivElement => {
  const panel: HTMLDivElement = document.createElement('div')
  panel.classList.add(Panel.id)
  panel.setAttribute('id', Panel.id)
  panel.append(menu.self)
  panel.append(button.self)
  return panel
}

export default class Panel {
  public self: HTMLDivElement
  public menu: Menu
  public button: MenuButton
  static id: string = 'panel'

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
      evt.target.matches(`#${MenuButton.id}`) ||
      evt.target.matches(`#${MenuButton.id} *`)
    if (clickOnButton) {
      this.button.clickEvent({ panel: this })
    }
    const clickOnMenuItem = evt.target.matches(`#${MenuList.id} *`)
    if (clickOnMenuItem) {
      this.menu.list.clickEvent({
        icon: this.button.icon,
        panel: this
      })
    }
  }
}
