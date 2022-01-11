import MenuControl from "./MenuControl"
import Menu from "./Menu"
import MenuList from "./Menu/MenuList"
import "./styles.css"

const PanelTemplate = ({
  menu,
  button
}: {
  menu: Menu
  button: MenuControl
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
  public button: MenuControl
  static className = "panel"

  constructor() {
    this.menu = new Menu()
    this.button = new MenuControl({ menu: this.menu })
    this.self = PanelTemplate({
      menu: this.menu,
      button: this.button
    })
  }

  clickEvent(evt: any): boolean {
    const clickOnButton =
      evt.target.matches(`.${MenuControl.className}`) ||
      evt.target.matches(`.${MenuControl.className} *`)
    if (clickOnButton) {
      this.button.action()
      return true
    }
    const clickOnMenuItem = evt.target.matches(`.${MenuList.className} *`)
    if (clickOnMenuItem) {
      this.button.action()
      this.menu.action()
      return true
    }
    return false
  }
}
