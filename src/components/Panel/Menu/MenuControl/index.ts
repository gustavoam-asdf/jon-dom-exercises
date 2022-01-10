import Icon from "@components/Icon"
import PageControl from "@components/PageControl"
import Menu from "@components/Panel/Menu"
import "./styles.css"

export const icons = { hamburger: "fa-bars", cross: "fa-times" }

export default class MenuControl {
  public self: PageControl
  public icon: Icon
  static className = "menu-button"

  constructor(
    icon = new Icon({
      iconType: icons.hamburger,
      className: "menu-button__icon"
    })
  ) {
    this.icon = icon
    this.self = new PageControl(this.icon)
    this.self.addClass(MenuControl.className)
  }

  action({ menu }: { menu: Menu }) {
    this.icon.switchIcon(icons.cross)
    menu.list.self.classList.toggle("hide")
    menu.self.classList.toggle("hide")
  }
}
