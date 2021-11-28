export default class DateTarget {
  self: HTMLDivElement
  static className = "dateTarget"
  static inputId = "dateTarget"

  constructor() {
    this.self = this.template()
  }

  private template() {
    const dateTarget = document.createElement("div")
    dateTarget.classList.add(DateTarget.className)

    const label = document.createElement("label")
    label.innerText = "Fecha a la que quieres hacer la cuenta regresiva"
    label.setAttribute("for", DateTarget.inputId)

    const input = document.createElement("input")
    input.setAttribute("type", "datetime-local")
    input.setAttribute("name", DateTarget.inputId)
    input.setAttribute("id", DateTarget.inputId)

    dateTarget.appendChild(label)
    dateTarget.appendChild(input)

    return dateTarget
  }
}
