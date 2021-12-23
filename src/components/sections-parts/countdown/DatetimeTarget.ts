import DateTarget from "./DateTarget"
import TimeTarget from "./TimeTarget"

export default class DatetimeTarget {
  public self: HTMLDivElement
  public dateBox: DateTarget
  public timeBox: TimeTarget
  static className = "date-target"
  static inputId = "dateTarget"

  constructor() {
    this.dateBox = new DateTarget()
    this.timeBox = new TimeTarget()
    this.self = this.template()
  }

  get usable() {
    return this.dateBox.usable && this.timeBox.usable
  }

  get value() {
    if (!this.usable) return
    return new Date(this.dateBox?.value + " " + this.timeBox?.value)
  }

  private template() {
    const datetimeTarget = document.createElement("div")
    datetimeTarget.classList.add(DatetimeTarget.className)

    datetimeTarget.appendChild(this.dateBox.self)
    datetimeTarget.appendChild(this.timeBox.self)

    return datetimeTarget
  }
}
