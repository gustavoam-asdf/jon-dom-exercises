import MenuButton from "./MenuButton"
import Menu from "./Menu"
import MenuList from "./MenuList"
import "./index.css"

const PanelTemplate = ({
  menu,
  button
}: {
  menu: Menu
  button: MenuButton
}): HTMLDivElement => {
  const panel: HTMLDivElement = document.createElement("div")
  panel.classList.add(Panel.className)
  panel.append(menu.self)
  panel.append(button.self)
  return panel
}

export default class Panel {
  public self: HTMLDivElement
  public menu: Menu
  public button: MenuButton
  static className = "panel"

  constructor() {
    this.menu = new Menu()
    this.button = new MenuButton()
    this.self = PanelTemplate({
      menu: this.menu,
      button: this.button
    })
  }

  clickEvent(evt: any): boolean {
    const clickOnButton =
      evt.target.matches(`.${MenuButton.className}`) ||
      evt.target.matches(`.${MenuButton.className} *`)
    if (clickOnButton) {
      this.button.clickEvent({ menu: this.menu })
      return true
    }
    const clickOnMenuItem = evt.target.matches(`.${MenuList.className} *`)
    if (clickOnMenuItem) {
      this.menu.list.clickEvent({
        icon: this.button.icon,
        menu: this.menu
      })
      return true
    }
    return false
  }
}
