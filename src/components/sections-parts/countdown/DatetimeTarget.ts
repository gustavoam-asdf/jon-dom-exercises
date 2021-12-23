import DateTarget from "./DateTarget"
import TimeTarget from "./TimeTarget"

export default class DatetimeTarget {
  public self: HTMLDivElement
  public date: DateTarget
  public time: TimeTarget
  static className = "date-target"
  static inputId = "dateTarget"

  constructor() {
    this.date = new DateTarget()
    this.time = new TimeTarget()
    this.self = this.template()
  }

  get usable() {
    return this.date.usable && this.time.usable
  }

  get value() {
    if (!this.usable) return
    return new Date(this.date?.value + " " + this.time?.value)
  }

  private template() {
    const datetimeTarget = document.createElement("div")
    datetimeTarget.classList.add(DatetimeTarget.className)

    datetimeTarget.appendChild(this.date.self)
    datetimeTarget.appendChild(this.time.self)

    datetimeTarget.addEventListener("change", () => {
      console.log(this.usable && "Datetime usable")
    })

    return datetimeTarget
  }
}
