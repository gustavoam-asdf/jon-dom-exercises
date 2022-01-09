import "./index.css"

export default class Button extends HTMLButtonElement {
  static className = "button"
  static elementName = "new-button"

  constructor({
    innerHTML,
    className
  }: {
    innerHTML?: string
    className?: string
  }) {
    super()
    this.setAttribute("is", Button.elementName)
    this.classList.add(Button.className)
    this.classList.add(className || "")
    this.innerHTML = innerHTML || ""
  }
}

customElements.define(Button.elementName, Button, { extends: "button" })
