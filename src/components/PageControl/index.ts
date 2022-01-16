import Icon from "@components/Icon"
import "./styles.css"

export default class PageControl extends HTMLButtonElement {
  public icon: Icon
  static elementName = "page-control"
  static className = "page-control"

  constructor(icon: Icon) {
    super()
    this.icon = icon
    this.setAttribute("is", PageControl.elementName)
    this.classList.add(PageControl.className)
    this.append(this.icon.self)
  }

  addClass(className: string) {
    if (this.classList.contains(className)) return
    this.classList.add(className)
  }

  removeClass(className: string) {
    if (!this.classList.contains(className)) return
    this.classList.remove(className)
  }

  replaceClass(oldClassName: string, newClassName: string) {
    if (!this.classList.contains(oldClassName)) return
    this.classList.replace(oldClassName, newClassName)
  }
}

customElements.define(PageControl.elementName, PageControl, {
  extends: "button"
})
