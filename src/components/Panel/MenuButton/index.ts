import Icon from "@components/Icon"
import Menu from "@components/Panel/Menu"
import "./styles.css"

export const icons = { hamburger: "fa-bars", cross: "fa-times" }

const MenuButtonTemplate = (icon: Icon): HTMLElement => {
  const button = document.createElement("div")
  button.classList.add(MenuButton.className)
  button.append(icon.self)
  return button
}
export default class MenuButton {
  public self: HTMLElement
  public icon: Icon
  static className = "menu-button"

  constructor(
    icon = new Icon({
      iconType: icons.hamburger,
      className: "menu-button__icon"
    })
  ) {
    this.icon = icon
    this.self = MenuButtonTemplate(this.icon)
  }

  clickEvent({ menu }: { menu: Menu }) {
    this.icon.switchIcon(icons.cross)
    menu.list.self.classList.toggle("hide")
    menu.self.classList.toggle("hide")
  }
}
