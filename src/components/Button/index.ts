import "./styles.css"

export default class Button extends HTMLButtonElement {
	static className = "button"
	static elementName = "new-button"

	constructor({
		innerHTML,
		className,
		type
	}: {
		innerHTML?: string
		className?: string
		type?: string
	}) {
		super()
		this.setAttribute("is", Button.elementName)
		this.classList.add(Button.className)
		className && this.classList.add(className)
		type && this.setAttribute("type", type)
		this.innerHTML = innerHTML || ""
	}
}

customElements.define(Button.elementName, Button, { extends: "button" })
