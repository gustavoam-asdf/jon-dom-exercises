export default class DatetimeTarget {
  public self: HTMLDivElement
  public date?: HTMLInputElement
  public time?: HTMLInputElement
  static className = "date-target"
  static inputId = "dateTarget"

  constructor() {
    this.self = this.template()
  }

  get value() {
    return this.date?.value + " " + this.time?.value
  }

  private template() {
    const datetimeTarget = document.createElement("div")
    datetimeTarget.classList.add(DatetimeTarget.className)

    const dateTarget = document.createElement("div")
    dateTarget.classList.add(`${DatetimeTarget.className}__date`)

    const dateLabel = document.createElement("label")
    dateLabel.innerText = "Fecha:"
    dateLabel.setAttribute("for", "date")

    const date = document.createElement("input")
    date.setAttribute("type", "date")
    date.setAttribute("name", "date")
    date.setAttribute("id", "date")

    dateTarget.appendChild(dateLabel)
    dateTarget.appendChild(date)

    const timeTarget = document.createElement("div")
    timeTarget.classList.add(`${DatetimeTarget.className}__time`)

    const timeLabel = document.createElement("label")
    timeLabel.innerText = "Hora:"
    timeLabel.setAttribute("for", "time")

    const time = document.createElement("input")
    time.setAttribute("type", "time")
    time.setAttribute("name", "time")
    date.setAttribute("id", "time")

    timeTarget.appendChild(timeLabel)
    timeTarget.appendChild(time)

    this.date = date
    this.time = time

    datetimeTarget.appendChild(dateTarget)
    datetimeTarget.appendChild(timeTarget)

    this.date.addEventListener("change", evt => {
      console.log(evt.target === this.date)
      console.log(this.date?.value)
    })

    return datetimeTarget
  }
}
