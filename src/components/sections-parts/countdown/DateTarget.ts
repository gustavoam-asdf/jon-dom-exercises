export default class DateTarget {
  public self: HTMLDivElement
  public input?: HTMLInputElement
  static className = "dateTarget"
  static inputId = "dateTarget"

  constructor() {
    this.self = this.template()
  }

  get value() {
    return this.input?.value
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

    this.input = input

    dateTarget.appendChild(label)
    dateTarget.appendChild(input)

    return dateTarget
  }
}
