import Icon from "@components/Icon"
import "./styles.css"

export default class PageControl {
  public self: HTMLElement
  public icon: Icon
  static className = "page-control"

  constructor({ icon }: { icon: Icon }) {
    this.icon = icon
    this.self = this.template(this.icon)
  }

  private template = (icon: Icon): HTMLElement => {
    const button = document.createElement("div")
    button.classList.add(PageControl.className)
    button.append(icon.self)
    return button
  }
}
