import MenuControl from "./MenuControl"
import Menu from "./Menu"
import MenuList from "./Menu/MenuList"
import "./styles.css"
import ScrollControl from "./ScrollControl"

export default class Panel {
  public self: HTMLDivElement
  public menu: Menu
  public menuControl: MenuControl
  public scrollControl: ScrollControl
  static className = "panel"

  constructor() {
    this.menu = new Menu()
    this.menuControl = new MenuControl({ menu: this.menu })
    this.scrollControl = new ScrollControl()
    this.self = this.template()
  }

  private template = (): HTMLDivElement => {
    const panel: HTMLDivElement = document.createElement("div")
    panel.classList.add(Panel.className)
    panel.append(this.menu.self)
    panel.append(this.menuControl.self)
    panel.append(this.scrollControl.self)
    return panel
  }

  clickEvent(evt: any): boolean {
    const clickOnButton =
      evt.target.matches(`.${MenuControl.className}`) ||
      evt.target.matches(`.${MenuControl.className} *`)
    if (clickOnButton) {
      this.menuControl.action()
      return true
    }
    const clickOnMenuItem = evt.target.matches(`.${MenuList.className} *`)
    if (clickOnMenuItem) {
      this.menuControl.action()
      this.menu.action()
      return true
    }
    return false
  }
}
