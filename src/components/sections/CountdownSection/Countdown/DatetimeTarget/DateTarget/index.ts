export default class DateTarget {
  public self: HTMLDivElement
  public date?: HTMLInputElement
  public usable = false
  static className = `date-target__date`
  static inputId = "date"

  constructor() {
    this.self = this.template()
  }

  get value() {
    if (!this.usable) return
    return this.date?.value
  }

  private template() {
    const dateTarget = document.createElement("div")
    dateTarget.classList.add(`${DateTarget.className}__date`)

    const dateLabel = document.createElement("label")
    dateLabel.innerText = "Fecha:"
    dateLabel.setAttribute("for", DateTarget.inputId)

    const date = document.createElement("input")
    date.setAttribute("type", DateTarget.inputId)
    date.setAttribute("name", DateTarget.inputId)
    date.setAttribute("id", DateTarget.inputId)

    dateTarget.appendChild(dateLabel)
    dateTarget.appendChild(date)

    this.date = date

    this.date.addEventListener(
      "change",
      () => {
        this.usable = true
      },
      { once: true }
    )

    return dateTarget
  }
}
